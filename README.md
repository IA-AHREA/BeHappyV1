# Pequeñas notas

Un libro interactivo de 31 razones para ser feliz, con paso de página
realista (react-pageflip) e ilustraciones animadas con Framer Motion.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion
- react-pageflip
- Express (server/index.js): sirve el `dist/` y una API mínima para guardar
  las imágenes, el texto/páginas y la canción de fondo del modo desarrollador
  en disco

## Desarrollo

Corren dos procesos en paralelo (dos terminales):

```bash
npm install
npm run server   # API + almacenamiento en disco, puerto 8787
npm run dev      # Vite, con proxy de /api, /uploads y /music hacia el server de arriba
```

## Build de producción

```bash
npm run build
npm run start
```

`start` corre `server/index.js`: sirve `dist/` y la API en el mismo
proceso Express, escuchando en el puerto que indique `PORT` (requerido por
Railway).

## Deploy en Railway

El repo incluye `railway.json`. Railway detecta el proyecto Node con
Nixpacks, ejecuta `npm run build` y luego `npm run start`.

**Importante — Volume persistente:** todo lo que se guarda desde el modo
desarrollador (imágenes, ediciones de páginas, la canción de fondo) se
escribe en `DATA_DIR` (por defecto `./data` dentro del proyecto). El
filesystem de un contenedor de Railway se resetea en cada redeploy, así que
sin un Volume montado ahí esos cambios desaparecen al volver a desplegar.
Para que sean realmente permanentes: en el dashboard de Railway → el
servicio → **Volumes** → crear uno y montarlo en `/data` (por ejemplo), y
setear la variable de entorno `DATA_DIR=/data`. Sin ese paso, el modo
desarrollador sigue funcionando pero solo hasta el próximo deploy.

Variables de entorno opcionales:

- `DATA_DIR`: dónde viven `manifest.json`, `pages.json`, `music.json` y los
  archivos subidos (default `./data`).
- `DEV_KEY`: contraseña que valida el servidor para guardar/quitar contenido
  (default `vknt`, debe coincidir con `src/dev/devKey.ts` en el cliente).
