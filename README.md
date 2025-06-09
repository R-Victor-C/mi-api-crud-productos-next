# Proyecto Next.js API CRUD Productos

Este proyecto es una API RESTful creada con Next.js para gestionar productos con operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Usa endpoints personalizados en la carpeta `/pages/api/`.

## Tecnologías usadas

- Next.js
- Node.js
- Express (API simulada)
- TailwindCSS (en caso de interfaz)
- Postman para pruebas

## Estructura del proyecto

- `/pages/api/products.js` → Endpoints para manejar productos.
- `/pages/api/products/[id].js` → Endpoints dinámicos para productos por ID.
- `/data/products.json` → Datos simulados para productos.

## Funcionalidades

### 1. Listar productos (GET `/api/products`)

Devuelve todos los productos disponibles en la base de datos simulada.

### 2. Obtener producto por ID (GET `/api/products/:id`)

Busca un producto por su ID y devuelve la información o un error 404 si no existe.

### 3. Crear producto (POST `/api/products`)

Recibe un JSON con nombre y precio, valida los datos y agrega un nuevo producto.

### 4. Actualizar producto (PUT `/api/products/:id`)

Actualiza los campos de un producto existente sin sobrescribir todo el objeto.

### 5. Eliminar producto (DELETE `/api/products/:id`)

Elimina un producto por su ID y confirma la eliminación.

### 6. Filtros y paginación

Permite filtrar productos por nombre, rango de precio, y paginar resultados.

## Uso y pruebas

- Ejecutar localmente con:

```bash
npm run dev

### Acceder a los endpoints con Postman, curl o navegador en:

http://localhost:3000/api/products
http://localhost:3000/api/products/1

Para POST, PUT, DELETE usar Body JSON y configurar headers.

Observaciones
La API usa datos simulados en JSON, para producción usar base de datos real.

Es importante validar los datos recibidos para evitar errores.

Los filtros y paginación optimizan la gestión de grandes listas.

Next.js API Routes facilita crear APIs sin servidor separado.

Conclusión
Este proyecto me ayudó a entender la creación de APIs personalizadas con Next.js, la importancia de manejar bien los métodos HTTP y cómo integrar filtros y paginación. También aprendí a probar APIs con herramientas como Postman y a gestionar datos con JSON.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
