# Pequeñas notas

Un libro interactivo de 31 razones para ser feliz, con paso de página
realista (react-pageflip) e ilustraciones animadas con Framer Motion.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion
- react-pageflip

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

`start` sirve la carpeta `dist/` de forma estática con `serve`, escuchando
en el puerto que indique la variable de entorno `PORT` (requerido por
Railway).

## Deploy en Railway

El repo incluye `railway.json`. Railway detecta el proyecto Node con
Nixpacks, ejecuta `npm run build` y luego `npm run start`. No se requiere
configuración adicional: solo conectar el repo y desplegar.
