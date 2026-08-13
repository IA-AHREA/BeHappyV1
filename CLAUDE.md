# Pequeñas notas — guía del proyecto

Libro interactivo de 31 razones para ser feliz. Vite + React + TypeScript +
Tailwind CSS + Framer Motion + react-pageflip. Deploy estático en Railway
(`npm run build` → `npm run start` sirve `dist/` con `serve`).

Este archivo existe para que cualquier sesión de Claude (o cualquier persona)
retome el trabajo sin tener que releer todo el historial de chat: qué hay,
cómo está armado, y qué falta pulir.

## Estructura

```
src/
  App.tsx                  shell: fondo oscuro + <Book/> + <MusicToggle/>
  components/
    Book.tsx                integra react-pageflip, teclado (← →), swipe
    Controls.tsx             flechas, contador "01 / 31", barra de progreso
    Page.tsx                 una hoja: frase (Caveat) o ilustración
  data/pages.ts              las 31 frases + qué componente de ilustración usa cada una
  illustrations/
    primitives.tsx           motor de animación compartido (ver abajo)
    <Nombre>.tsx              una ilustración SVG por escena (31 archivos)
  audio/useAmbientPiano.ts   piano ambiental generativo (Web Audio API, sin assets)
```

## Estilo visual de las ilustraciones

**Muñecos de palo clásicos** (migrado en 2026-08 desde el estilo anterior de
línea continua, que era difícil de proporcionar bien): cabeza-círculo de
r=10, torso de un trazo recto, extremidades de polilíneas rectas con
articulaciones (hombro→codo→mano, cadera→rodilla→pie→punta). Los props
(castillo, paraguas, secadora...) siguen siendo paths dibujados a mano.
Todo dentro de un `<svg viewBox="0 0 220 220">`, sin relleno (salvo acentos
puntuales en terracota `#b5542c`), grosor de trazo uniforme (`.ink-line`,
2.4px), y el filtro SVG (`feTurbulence` + `feDisplacementMap`) aplicado a
todo el grupo para que las líneas rectas conserven el aire de tinta a mano.

Las figuras se declaran con el componente `StickFigure` de
`primitives.tsx` (coordenadas de articulaciones por parte, cada parte
opcional para poder animar un brazo/pierna aparte con su propio `Loop`) o,
para poses no estándar (sentado, reclinado, abrazo), con el helper `line()`
que convierte una lista de puntos en el `d` de una polilínea.

Reglas que mantienen la consistencia entre las 31 escenas:
- proporciones estándar: cabeza r=10 (r=9 secundarias), torso ~36px,
  brazo ~2 segmentos de ~15px, pierna ~2 segmentos de ~20px + punta de pie
- los objetos que se sostienen deben tocar la mano (el hilo de la cometa
  termina en la mano, el bastón pasa por la mano, la regadera cuelga de
  ella) — nada de props flotando sin conexión
- casi todas las escenas llevan una línea de suelo tenue (`opacity 0.4`)
  para que las figuras no floten

## Sistema de animación (`src/illustrations/primitives.tsx`)

Todo respeta `prefers-reduced-motion` (via `useReducedMotion()` de Framer
Motion): si está activo, las animaciones de entrada se saltan (se muestra
el dibujo ya completo) y los loops ambientales no se ejecutan.

| Primitivo | Qué hace | Uso típico |
|---|---|---|
| `IllustrationSvg` | Envuelve el `<svg>`: aplica el filtro de textura a mano + una deriva ambiental lenta (flotar/rotar muy sutil) a toda la escena | Wrapper raíz de cada ilustración |
| `StickFigure` | Muñeco de palo desde coordenadas de articulaciones (cabeza + torso/brazos/piernas opcionales) | Toda figura humana; omitir una parte para animarla aparte |
| `line(...pts)` | Convierte una lista de puntos en el `d` de una polilínea recta | Poses no estándar y extremidades animadas por separado |
| `DrawPath` | Un `<path>` que se dibuja solo (`pathLength` de 0→1) | Entrada principal de contornos — el trazo "se dibuja en vivo" |
| `PopIn` | Grupo que aparece con fade + escala + un pequeño ascenso, resorte | Envuelve secciones de la escena con delays escalonados |
| `Loop` | Animación ambiental infinita, con `kind`: `float` `sway` `walk` `spin` `pulse` `twinkle` `drop` `wag` `steam` `flame` `flap` `zz` `fall` `breathe` | Movimiento continuo (flores que se mecen, cola que menea, vapor, lluvia, respiración...) |
| `GrowIn` | Escala en Y desde 0, creciendo desde un `transform-origin` | Tallos/plantas que crecen |
| `WriteLoop` | Trazo que se dibuja, se sostiene, y se resetea en loop | Efecto de "escritura a mano" repetida |

Patrón típico de un archivo de ilustración:

```tsx
<IllustrationSvg>
  <PopIn>
    <DrawPath d="M... curva del contorno principal ..." />
    <path className="ink-line" d="... detalle estático ..." />
  </PopIn>
  <PopIn delay={0.6}>
    <Loop kind="sway" style={{ transformOrigin: '...' }}>
      <path className="ink-line" d="... elemento que se mueve ..." />
    </Loop>
  </PopIn>
</IllustrationSvg>
```

## Las 31 páginas

| # | Frase | Archivo | Escena | Loop(s) de movimiento |
|---|---|---|---|---|
| 01 | Lee. | `Reading.tsx` | Persona subiendo una escalera apoyada en un libro gigante | `walk` (subir) |
| 02 | Compra flores. | `Flowers.tsx` | Persona alcanzando el jarrón de flores de un puesto | `sway` (flores) |
| 03 | Trata de llegar. | `Castle.tsx` | Viajero con bastón acercándose a un castillo en una colina | `walk` |
| 04 | Programa un plan realista. | `HairDryer.tsx` | Persona de pelo alborotado secándoselo con una secadora | `sway` (mechones), `twinkle` (aire) |
| 05 | No te compares con los demás. | `Fruits.tsx` | Una naranja y una manzana, cada una leyendo su periódico | `sway` (hojita) |
| 06 | Vive el momento. | `Balance.tsx` | Funambulista en equilibrio entre carteles PASADO / FUTURO | `sway` |
| 07 | Toma el sol. | `Sunbathing.tsx` | Persona reclinada en una tumbona bajo un sol que gira | `spin` (sol), `breathe` (persona) |
| 08 | Baila en la cocina. | `KitchenDance.tsx` | Persona bailando junto a la estufa, notas musicales flotando | `walk`, `float` (notas) |
| 09 | Llama a quien extrañas. | `PhoneCall.tsx` | Dos personas al teléfono, un corazón late entre ellas | `pulse` (corazón), `breathe` |
| 10 | Acaricia a un perro. | `Dog.tsx` | Persona en cuclillas acariciando a un perro | `wag` (cola), `sway` (brazo que acaricia) |
| 11 | Escucha la lluvia. | `Umbrella.tsx` | Persona bajo un paraguas mientras cae la lluvia | `drop` (gotas) |
| 12 | Planta algo. | `Planting.tsx` | Persona regando la maceta donde crece la planta | `GrowIn` (tallo), `sway` (regadera), `drop` (agua) |
| 13 | Camina sin rumbo. | `Walking.tsx` | Caminante solitario por un sendero, junto a un letrero | `walk`, `spin` (sol) |
| 14 | Ríete de ti. | `Mirror.tsx` | Persona riéndose frente a su reflejo en un espejo | `walk`, `breathe` (reflejo), `float` ("ja ja") |
| 15 | Anota lo bueno de hoy. | `Journal.tsx` | Diario abierto que se va llenando de escritura | `WriteLoop`, `twinkle` |
| 16 | Mira las estrellas. | `Telescope.tsx` | Persona observando el cielo por un telescopio en trípode | `twinkle` (estrellas), `breathe` |
| 17 | Comparte tu pan. | `Bread.tsx` | Dos personas sosteniendo juntas una hogaza de pan | `breathe` (pan), `twinkle` |
| 18 | Duerme lo suficiente. | `Sleep.tsx` | Persona dormida en la cama bajo una luna creciente | `zz`, `float` (luna) |
| 19 | Canta en el coche. | `CarSinging.tsx` | Persona cantando al volante, ventanas abajo | `walk`, `float` (notas) |
| 20 | Aprende algo inútil. | `Juggling.tsx` | Persona haciendo malabares con tres pelotas | `float` (pelotas), `walk` |
| 21 | Abraza fuerte. | `Hug.tsx` | Dos personas en un abrazo apretado | `breathe`, `pulse` (corazón) |
| 22 | Vuelve a intentarlo. | `Kite.tsx` | Persona remontando una cometa que vuelve a subir | `float` (cometa) |
| 23 | Da las gracias. | `ThankYouCard.tsx` | Tarjeta de agradecimiento con un corazón como sello | `pulse` (corazón) |
| 24 | Come despacio. | `Ramen.tsx` | Un tazón de ramen humeante, listo para disfrutarse despacio | `steam` |
| 25 | Regálate silencio. | `Meditation.tsx` | Persona meditando dentro de anillos de respiración | `breathe` |
| 26 | Celebra lo pequeño. | `BirthdayCake.tsx` | Un pastelito con una vela encendida | `flame`, `twinkle` (confeti) |
| 27 | Pide ayuda. | `HelpingHand.tsx` | Una persona arrodillada ayuda a otra a salir de un pozo | `walk`, `pulse` (manos) |
| 28 | Suelta lo que pesa. | `Balloons.tsx` | Persona soltando globos que se alejan flotando | `float` (globos) |
| 29 | Haz una pausa. | `TreeRest.tsx` | Persona sentada en una banca bajo un árbol | `fall` (hojas), `breathe` |
| 30 | Confía en el proceso. | `Butterfly.tsx` | Rastro de una oruga que se transforma en mariposa | `walk` (oruga), `flap` (alas) |
| 31 | Empieza hoy. | `Sunrise.tsx` | El sol saliendo sobre el horizonte | `float` (sol, aves) |

## Estado de calidad

2026-08: se migraron las 24 escenas con figuras humanas al estilo de
muñecos de palo (ver arriba) y se arreglaron los trazos sin sentido que
había: la secadora que tapaba la cara en `HairDryer` (reporte del usuario
— resuelto), la mano sin cuerpo en `Dog`, la regadera flotando en
`Planting`, el paraguas que nadie sostenía en `Umbrella`, el hilo de la
cometa que no llegaba a la mano en `Kite`, y el pozo con la abertura
cruzada en `HelpingHand`. Las 31 páginas se verificaron con capturas del
libro real tras el rediseño.

Si encuentras una página que se vea mal, anótala aquí con el número de
página y qué se ve mal específicamente (no solo "se ve feo") — eso es lo
que permite arreglarla sin adivinar.

## Cómo iterar una ilustración sin perder tiempo

No se edita el archivo `.tsx` final a ciegas y se espera. El flujo que
funcionó para las 31:

1. Bocetar el SVG en un archivo HTML plano suelto (fuera del proyecto,
   p. ej. en un scratchpad), con varias ilustraciones en una grilla para
   comparar de un vistazo.
2. Renderizarlo con Playwright (`chromium.launch` headless) y mirar el
   PNG resultante.
3. Ajustar coordenadas hasta que la proporción/pose se lea bien — con
   figuras humanas, cuidado especial con: la separación cabeza-cuello-
   hombro (si no hay una curva cóncava clara ahí, todo se ve como un
   solo bulto), y que los brazos/patas no crucen otros elementos de forma
   confusa.
4. Recién ahí convertir el `d` final a un componente `.tsx` usando los
   primitivos de animación (`DrawPath`, `PopIn`, `Loop`, etc.).
5. `npx tsc -b` para chequear tipos, `npm run build` para el build
   completo, y una pasada visual en el libro real (no solo en el boceto
   aislado) antes de dar por terminada la página.

**Trampa en la que ya se cayó una vez**: si el boceto se hace en un
archivo `.html` plano (no `.tsx`), los atributos numéricos van sin llaves
— `cx="92"`, no `cx={92}`. Usar sintaxis JSX en HTML plano no da error
visible, simplemente el elemento no se dibuja (queda invisible), lo cual
es muy confuso de diagnosticar a simple vista en una captura pequeña.
