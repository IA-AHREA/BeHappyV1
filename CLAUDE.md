# Pequeñas notas — guía del proyecto

Libro interactivo de 31 razones para ser feliz. Vite + React + TypeScript +
Tailwind CSS + Framer Motion + react-pageflip, con un backend Express chico
(`server/index.js`) para el modo desarrollador. Deploy en Railway
(`npm run build` → `npm run start` corre `server/index.js`, que sirve
`dist/` y la API de imágenes personalizadas en el mismo proceso).

Este archivo existe para que cualquier sesión de Claude (o cualquier persona)
retome el trabajo sin tener que releer todo el historial de chat: qué hay,
cómo está armado, y qué falta pulir.

## Estructura

```
src/
  App.tsx                  shell: gate de contraseña → <Book/>/<AchievementsPage/> + <MusicToggle/> + <TrophyButton/> + <AchievementToast/>
  auth/
    WelcomeGate.tsx          pantalla "Bienvenida" + input de contraseña (hardcoded, ver abajo)
  components/
    Book.tsx                integra react-pageflip, teclado (← →), swipe, dispara onPageRead por spread
    Controls.tsx             flechas, contador "01 / 31", barra de progreso
    Page.tsx                 una hoja: frase (Caveat) o ilustración
  achievements/
    data.ts                  31 logros (uno por página, con emoji-icono) + logro de "libro completo"
    useAchievements.ts        hook: persiste desbloqueados en localStorage, cola de logros nuevos para el toast
    AchievementToast.tsx      notificación estilo Minecraft ("Logro desbloqueado") arriba de la pantalla
    AchievementsPage.tsx      pantalla de logros: grilla con desbloqueados/"???"
    TrophyButton.tsx          botón flotante (abajo-izquierda) para abrir/cerrar la pantalla de logros
  data/pages.ts              DEFAULT_PAGES: las 31 frases + qué componente de ilustración usa
                               cada una — sigue siendo la fuente de verdad; usePages.ts la combina
                               con los cambios guardados en el servidor (ver abajo)
  illustrations/
    primitives.tsx           motor de animación compartido (ver abajo)
    <Nombre>.tsx              una ilustración SVG por escena (31 archivos)
  audio/useAmbientPiano.ts   piano ambiental generativo (Web Audio API, sin assets)
  dev/
    ConfigGear.tsx            tuerca ⚙️ (arriba-izquierda, visible desde el arranque) + modal de
                               contraseña + panel de "Modo desarrollador"
    DevImagePanel.tsx         panel que aparece sobre cada página con ilustración cuando el modo
                               desarrollador está activo: elegir imagen (se guarda sola) / quitar
    useDevMode.ts              hook: persiste si el modo desarrollador está activo (localStorage,
                               es una preferencia del navegador, no del libro — ver abajo)
    useCustomImages.ts         hook: trae/guarda/borra las imágenes personalizadas vía la API
                               (fetch a /api/images), no localStorage
    usePages.ts                 hook: trae/edita/agrega/borra páginas vía la API (/api/pages),
                               fusionando el resultado con DEFAULT_PAGES
    DevTextPanel.tsx            panel que aparece sobre la mitad de texto de cada página cuando
                               el modo desarrollador está activo: editar la frase (auto-guarda) /
                               eliminar la página (doble tap para confirmar)
    imageUtils.ts              redimensiona/comprime la imagen elegida a un data URL (canvas)
    devKey.ts                  contraseña compartida entre el cliente y `server/index.js`
server/
  index.js                   Express: sirve dist/ + API de imágenes y de páginas (ver abajo)
```

## Acceso y logros

- **Contraseña**: hardcodeada en `src/auth/WelcomeGate.tsx` (`mymelody`, case-insensitive).
  Al acertar se guarda `behappy_authenticated=true` en `localStorage`, así que no vuelve a
  pedirla en la misma máquina/navegador. Si se quiere cambiar la contraseña, es ese único
  `const PASSWORD` — no hay backend ni validación de servidor, es solo una barrera simbólica.
- **Logros**: uno por cada página del libro (título = la frase de esa página, p. ej. "Lee.")
  más un logro extra "Las 31 razones" al llegar a la última página. `buildAchievements(pages)`
  en `achievements/data.ts` los arma a partir de la lista de páginas VIGENTE (no un array
  estático) — así que si se edita una frase, se agrega o se elimina una página desde el modo
  desarrollador (ver más abajo), la lista de logros se actualiza sola. Se desbloquean
  automáticamente al pasar a esa página (`Book.tsx` llama `onPageRead(id)` en cada cambio de
  spread), se persisten en `localStorage` (`behappy_achievements`) y se muestran con un toast
  estilo Minecraft ("Logro desbloqueado"). El trofeo 🏆 abajo-izquierda abre la pantalla de
  logros, donde los no desbloqueados aparecen como "???" con ícono `❔`.

## Modo desarrollador (imágenes personalizadas por página)

- **Tuerca ⚙️**: arriba-izquierda, visible desde el arranque (incluso antes de la pantalla
  "Bienvenida"). Al tocarla pide una contraseña propia — `src/dev/devKey.ts` (`DEV_KEY = 'vknt'`,
  case-insensitive) — separada de la del libro. Sigue siendo una barrera simbólica en el cliente
  (visible en el bundle), pero ahora el servidor también la exige para escribir (ver abajo).
- Con la contraseña correcta se abre el panel "Modo desarrollador", con un switch que activa/
  desactiva el modo (persistido en `localStorage` como `behappy_dev_mode_enabled` — es una
  preferencia de ESE navegador, no algo que viaje al servidor: solo decide si ese visitante ve
  los paneles de edición superpuestos, no afecta qué imágenes tiene el libro).
- Con el modo activo, cada página con ilustración (`Page.tsx`, lado `art`) muestra un panel
  (`DevImagePanel.tsx`) superpuesto: "Elegir imagen" abre el selector de archivos y, apenas se
  elige una, se guarda sola — sin un paso de "Guardar" aparte (un botón separado a veces no se
  veía/tocaba bien en dispositivos reales, así que se sacó esa fricción). La imagen se comprime a
  ~900px/JPEG 0.82 en el navegador (`dev/imageUtils.ts`, vía `<canvas>`) y se sube con
  `POST /api/images/:pageId` (header `x-dev-key`); el panel muestra "Imagen guardada" al
  confirmarse. "Quitar" llama `DELETE /api/images/:pageId` y vuelve a mostrar la ilustración
  original.
- **Por qué server y no `localStorage`** (así era antes): `localStorage` es por navegador — una
  imagen guardada ahí solo se veía en el dispositivo que la subió, y desaparecía si se limpiaban
  cookies/datos del sitio (localStorage vive bajo ese mismo paraguas en casi todos los
  navegadores). El pedido era que la imagen quedara pegada *al libro*, visible para cualquiera
  que lo abra — así que ahora el servidor (`server/index.js`) la guarda como archivo real en
  `DATA_DIR/uploads/<pageId>-<timestamp>.jpg` + un manifiesto `DATA_DIR/manifest.json`
  (`{ [pageId]: filename }`); `GET /api/images` (público, sin contraseña) devuelve el mapa
  `{ [pageId]: url }` que `useCustomImages.ts` carga al montar. Los archivos se sirven desde
  `/uploads/*` como estáticos.
- **Volume de Railway**: `DATA_DIR` default es `./data` dentro del proyecto — en Railway ese
  filesystem se resetea en cada redeploy. Para que las fotos sean realmente permanentes hay que
  montar un Volume en el servicio (dashboard de Railway → el servicio → Volumes) y setear
  `DATA_DIR` a esa ruta montada. Sin ese paso el modo desarrollador sigue andando pero las fotos
  se pierden en el próximo deploy — ver README.md.
- **Imágenes sin fondo (PNG transparente)**: antes de dibujar la imagen elegida, el canvas de
  compresión (en el navegador, antes de subirla) se rellena con el color de página del libro
  (`BOOK_BACKGROUND = '#f7f3ea'` en `dev/imageUtils.ts`, el mismo que `paper` en
  `tailwind.config.js`) y recién ahí se dibuja la imagen encima. Como el resultado se exporta a
  JPEG (sin canal alfa), sin este paso el navegador aplana la transparencia a negro; con el
  relleno previo, lo transparente se funde con el fondo del libro en vez de verse un recuadro
  negro. En `Page.tsx` la imagen se muestra con `object-contain` (no `object-cover`) para no
  recortar el recorte y dejar que el `bg-paper` del contenedor complete los bordes si la
  proporción no coincide con la de la página.
- **Desarrollo local**: hacen falta dos procesos — `npm run server` (Express en :8787) y
  `npm run dev` (Vite, con `server.proxy` en `vite.config.ts` mandando `/api` y `/uploads` al
  puerto 8787). En producción `npm run start` corre solo `server/index.js`, que sirve todo.

## Modo desarrollador (editar texto / agregar / eliminar páginas)

- Con el modo activo, cada página de TEXTO (`Page.tsx`, lado `text`) muestra un panel
  (`DevTextPanel.tsx`) superpuesto con un `<textarea>` con la frase actual. Se auto-guarda al
  perder el foco (`onBlur`) y también con un debounce de 1s mientras se tipea, para no perder
  cambios si el lector pasa de página sin tocar afuera del textarea antes. Guarda con
  `PUT /api/pages/:pageId` (header `x-dev-key`).
- El mismo panel tiene un botón "Eliminar página" con confirmación de doble toque (el primer
  toque cambia el texto a "¿Seguro? Tocá de nuevo" por 3s; si no se confirma en ese lapso, se
  desarma solo) — llama a `DELETE /api/pages/:pageId`.
- **Agregar página nueva**: botón "+ Agregar página" dentro del panel de la tuerca ⚙️ (no es por
  página, es una acción global). Crea una página al final del libro con frase "Nueva página" y
  sin ilustración propia — el lector en modo desarrollador tiene que elegirle una foto desde el
  panel de imagen de esa página (si no tiene, el lado de arte muestra "Sin imagen todavía" en vez
  de romper).
- **Modelo de datos** (`server/index.js`, `DATA_DIR/pages.json`): las 31 páginas originales
  (`src/data/pages.ts`, `DEFAULT_PAGES`) siguen siendo la fuente de verdad para id/frase/
  ilustración — el servidor solo guarda *ediciones* encima:
  - `phraseOverrides: { [pageId]: phrase }` — frase editada de una página original o de una
    página nueva.
  - `customPages: [{ id, phrase }]` — páginas agregadas por el modo desarrollador (ids
    `custom-<timestamp>`), sin componente de ilustración.
  - `removedIds: [pageId]` — ids de páginas ORIGINALES ocultas del libro. No se borran del
    código ni se les borra la imagen guardada; solo se excluyen de la lista que arma
    `usePages.ts` al fusionar. (Eliminar una página *custom*, en cambio, sí la borra del todo —
    incluida su imagen guardada — porque no existe un "original" al que volver.)
  - Este diseño (guardar solo el diff, no el libro entero) es a propósito: si se borra
    `pages.json`, el libro vuelve a como estaba de fábrica en vez de quedar en blanco.
  - `GET /api/pages` es público; `PUT`/`POST`/`DELETE` piden `x-dev-key` igual que las imágenes.
- `Book.tsx` ya no importa una lista estática de páginas: recibe `pages` como prop (desde
  `App.tsx`, que arma la lista con `usePages()`). Si algún día se borraran las 31 páginas
  originales sin agregar ninguna nueva, `Book.tsx` muestra un mensaje en vez de romperse con un
  array vacío.

## Estilo visual de las ilustraciones

**Línea continua tipo boceto a mano** (no muñecos de palo con cabeza-círculo).
Cada ilustración es un `<svg viewBox="0 0 220 220">` con trazos de curvas
Bézier suaves, sin relleno (salvo acentos puntuales en terracota `#b5542c`),
grosor de trazo uniforme (`.ink-line`, 2.4px), y un filtro SVG
(`feTurbulence` + `feDisplacementMap`) aplicado a todo el grupo para que las
líneas se vean ligeramente imperfectas, como tinta a mano.

Cada ilustración se construye a mano, coordenada por coordenada — no hay un
generador paramétrico de figuras. Esto da control artístico pero significa
que la calidad varía según cuánto se iteró cada una visualmente antes de
darla por buena (ver "Estado de calidad" abajo).

### ¿Otro estilo es posible?

Sí. El estilo alternativo de referencia (muñecos de palo simples: cabeza-
círculo, un solo trazo recto para el torso, extremidades rectas, sin
curvas Bézier) es **más simple de dibujar de forma consistente** que el
estilo de línea continua actual, porque las líneas rectas son mucho más
fáciles de proporcionar bien que las curvas orgánicas — el estilo actual
requirió varias iteraciones por ilustración (ver ejemplo de `Dog.tsx`, que
necesitó 5 intentos) para que las proporciones no se vieran raras.
Si la prioridad es consistencia y "que nada se vea mal" por encima de la
calidez del trazo a mano, migrar a muñecos de líneas rectas es una opción
real y probablemente más rápida de ejecutar bien en las 31 escenas.
Pendiente de decisión — no implementado.

## Sistema de animación (`src/illustrations/primitives.tsx`)

Todo respeta `prefers-reduced-motion` (via `useReducedMotion()` de Framer
Motion): si está activo, las animaciones de entrada se saltan (se muestra
el dibujo ya completo) y los loops ambientales no se ejecutan.

| Primitivo | Qué hace | Uso típico |
|---|---|---|
| `IllustrationSvg` | Envuelve el `<svg>`: aplica el filtro de textura a mano + una deriva ambiental lenta (flotar/rotar muy sutil) a toda la escena | Wrapper raíz de cada ilustración |
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

## Las páginas (31 originales + 1 de cierre)

| # | Frase | Archivo | Escena | Loop(s) de movimiento |
|---|---|---|---|---|
| 01 | Lee. | `Reading.tsx` | Persona subiendo una escalera apoyada en un libro gigante | `walk` (subir) |
| 02 | Compra flores. | `Flowers.tsx` | Persona sentada en una mesa de café con un jarrón de flores | `sway` (flores) |
| 03 | Trata de llegar. | `Castle.tsx` | Viajero con bastón acercándose a un castillo en una colina | `walk` |
| 04 | Programa un plan realista. | `HairDryer.tsx` | Persona de pelo alborotado secándoselo con una secadora | `sway` (mechones) — **señalada por el usuario como que se ve mal** |
| 05 | No te compares con los demás. | `Fruits.tsx` | Una naranja y una manzana, cada una leyendo su periódico | `sway` (hojita) |
| 06 | Vive el momento. | `Balance.tsx` | Funambulista en equilibrio entre carteles PASADO / FUTURO | `sway` |
| 07 | Toma el sol. | `Sunbathing.tsx` | Persona reclinada en una tumbona bajo un sol que gira | `spin` (sol), `breathe` (persona) |
| 08 | Baila en la cocina. | `KitchenDance.tsx` | Persona bailando junto a la estufa, notas musicales flotando | `walk`, `float` (notas) |
| 09 | Llama a quien extrañas. | `PhoneCall.tsx` | Dos personas al teléfono, un corazón late entre ellas | `pulse` (corazón) |
| 10 | Acaricia a un perro. | `Dog.tsx` | Perro sentado + una mano que baja a acariciarlo | `wag` (cola) |
| 11 | Escucha la lluvia. | `Umbrella.tsx` | Persona bajo un paraguas mientras cae la lluvia | `drop` (gotas) |
| 12 | Planta algo. | `Planting.tsx` | Maceta con una planta que crece, regada con una regadera | `GrowIn` (tallo), `drop` (agua) |
| 13 | Camina sin rumbo. | `Walking.tsx` | Caminante solitario por un sendero, junto a un letrero | `walk`, `spin` (sol) |
| 14 | Ríete de ti. | `Mirror.tsx` | Persona riéndose frente a su reflejo en un espejo | `walk`, `breathe` (reflejo), `float` ("ja ja") |
| 15 | Anota lo bueno de hoy. | `Journal.tsx` | Diario abierto que se va llenando de escritura | `WriteLoop`, `twinkle` |
| 16 | Mira las estrellas. | `Telescope.tsx` | Persona observando el cielo por un telescopio | `twinkle` (estrellas) |
| 17 | Comparte tu pan. | `Bread.tsx` | Dos personas compartiendo una hogaza de pan | `float` (pan) |
| 18 | Duerme lo suficiente. | `Sleep.tsx` | Persona dormida en la cama bajo una luna creciente | `zz`, `float` (luna) |
| 19 | Canta en el coche. | `CarSinging.tsx` | Persona cantando al volante, ventanas abajo | `walk`, `float` (notas) |
| 20 | Aprende algo inútil. | `Juggling.tsx` | Persona haciendo malabares con tres pelotas | `float` (pelotas) |
| 21 | Abraza fuerte. | `Hug.tsx` | Dos personas en un abrazo apretado | `breathe`, `pulse` (corazón) |
| 22 | Vuelve a intentarlo. | `Kite.tsx` | Persona remontando una cometa que vuelve a subir | `float` (cometa) |
| 23 | Da las gracias. | `ThankYouCard.tsx` | Tarjeta de agradecimiento con un corazón como sello | `pulse` (corazón) |
| 24 | Come despacio. | `Ramen.tsx` | Un tazón de ramen humeante, listo para disfrutarse despacio | `steam` |
| 25 | Regálate silencio. | `Meditation.tsx` | Persona meditando dentro de anillos de respiración | `breathe` |
| 26 | Celebra lo pequeño. | `BirthdayCake.tsx` | Un pastelito con una vela encendida | `flame`, `twinkle` (confeti) |
| 27 | Pide ayuda. | `HelpingHand.tsx` | Una persona ayuda a otra a salir de un pozo | `walk`, `pulse` (manos) |
| 28 | Suelta lo que pesa. | `Balloons.tsx` | Persona soltando globos que se alejan flotando | `float` (globos) |
| 29 | Haz una pausa. | `TreeRest.tsx` | Persona descansando en una banca bajo un árbol | `fall` (hojas) |
| 30 | Confía en el proceso. | `Butterfly.tsx` | Rastro de una oruga que se transforma en mariposa | `walk` (oruga), `flap` (alas) |
| 31 | Empieza hoy. | `Sunrise.tsx` | El sol saliendo sobre el horizonte | `float` (sol, aves) |
| 32 | Tú. Porque entre tanto estrés... | *(sin ilustración fija)* | Página de cierre personal, a propósito sin `Illustration` — se ilustra con una foto real desde el modo desarrollador | — |

La página 32 (`id: 'tu'` en `DEFAULT_PAGES`) es distinta a las demás: es una dedicatoria más
larga, no un consejo corto, y no tiene componente de ilustración — el lado de arte muestra "Sin
imagen todavía" hasta que se le suba una foto real por el modo desarrollador. Su logro también es
un caso especial: en vez de citar la frase (como todas las demás), `ACHIEVEMENT_OVERRIDES` en
`achievements/data.ts` le pone el título "Feliz cumple años" — si se agrega otra página que
necesite un logro con título propio en vez del genérico, ese es el lugar. El logro de cierre
"Las 31 razones" se dejó como estaba a propósito (no se hizo dinámico ni se le sumó la página 32):
es el nombre de marca del libro, no un conteo literal de páginas.

Como la frase de la página 32 es mucho más larga que las demás (una dedicatoria, no un comando de
2-4 palabras), `Page.tsx` ahora elige el tamaño de letra según el largo de la frase
(`textSizeClass`) en vez de un tamaño fijo — esto también protege cualquier frase editada desde el
modo desarrollador que termine siendo larga, no es exclusivo de esta página.

La pantalla "Bienvenida" (`WelcomeGate.tsx`) también suma un párrafo de introducción ("Existen
motivos para ser feliz...") entre el título y el texto de la contraseña.

## Estado de calidad — pendiente de revisión

El estilo de línea continua es más difícil de acertar a la primera que un
ícono geométrico simple: cada ilustración se armó a mano y se revisó con
capturas de pantalla en lote antes de darla por buena, pero **no todas
recibieron el mismo número de iteraciones**, así que la calidad no es
pareja. Señalado explícitamente por el usuario:

- [ ] **`HairDryer.tsx` (página 04)** — el usuario reportó que se ve mal
      (los mechones de pelo alborotado se ven como garabato suelto, la
      figura se ve frágil/desproporcionada). Pendiente de rehacer.

Si encuentras otra página que se vea mal, agrégala a esta lista con el
número de página y qué se ve mal específicamente (no solo "se ve feo") —
eso es lo que permite arreglarla sin adivinar.

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
