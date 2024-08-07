# Marvel Web App

Este proyecto es una aplicación web que permite a los usuarios explorar y buscar personajes de Marvel, ver detalles de los personajes y gestionar una lista de personajes favoritos. Está construido con React, TypeScript y Vite.

## Características

- Navegar por una lista de personajes de Marvel
- Buscar personajes por nombre
- Ver información detallada sobre un personaje
- Agregar o eliminar personajes de la lista de favoritos
- Persistir la lista de favoritos en diferentes vistas

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- Axios
- SWR
- React Router
- Jest y Testing Library para pruebas
- CSS Modules para estilos

## Comenzando

### Prerrequisitos

Asegúrate de tener el siguiente software instalado en tu máquina:

- Node.js (v14 o posterior)
- npm (v6 o posterior)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/griselmatosm/marvel-web-app.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd marvel-web-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo .env en el directorio raíz con el siguiente contenido:

   ```bash
   VITE_MARVEL_PUBLIC_KEY=your_public_key
   VITE_MARVEL_PRIVATE_KEY=your_private_key
   ```
Reemplaza `your_public_key` y `your_private_key` con tus claves de API de Marvel reales.
   

### Ejecución del proyecto

Para ejecutar la aplicación en modo desarrollo, usa el siguiente comando:

```bash
npm run dev
```

Abre http://localhost:5173 para ver la aplicación en el navegador. La página se recargará automáticamente si realizas cambios en el código.

### Ejecución de Pruebas

Este proyecto incluye pruebas unitarias para los componentes. Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm run test
```

### Futuras Mejoras

A continuación, se presentan algunas mejoras que se podrían implementar en el futuro para mejorar la funcionalidad y la experiencia del usuario:

1. Implementar pruebas adicionales para aumentar la cobertura, especialmente pruebas de integración.
2. Optimizar el rendimiento de la aplicación, particularmente la funcionalidad de búsqueda.
3. Añadir un manejo de errores más detallado y retroalimentación al usuario.
4. Integrar una capa de caché, como Redis, para manejar las respuestas de la API y reducir los tiempos de carga.
