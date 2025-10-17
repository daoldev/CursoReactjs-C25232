# 🍰 Tienda de Repostería — Clase 06

Una pequeña SPA creada con React + Vite que muestra productos de una pastelería, permite ver detalles y simula un carrito de compras.

---

## ✨ Autor
- Damian Olaso
- Email: damianolaso@gmail.com

---

## 🧭 Qué hay en esta carpeta
- `public/data/products.json` — lista de productos (id, nombre, precio, descripción, ruta de imagen).
 - `public/images/` — imágenes de productos (placeholders o imágenes descargadas).
 - `src/components/` — componentes React: `Nav`, `ItemList`, `ItemDetail`, `Item`, etc.

---

## 🚀 Cómo ejecutar
1. Instala dependencias (si no lo hiciste):

```powershell
npm install
```

2. Levanta el servidor de desarrollo:

```powershell
npm run dev
```

3. Abre `http://localhost:5173/` en tu navegador.

---

## 🖼️ Imágenes
Las imágenes de producto están en `public/images/`. Actualmente se usan placeholders SVG.
Si prefieres añadir imágenes reales puedes reemplazarlas manualmente en esa carpeta y actualizar las rutas en `public/data/products.json`.

---

## 🎨 Estilos importantes
- `src/components/Nav/Nav.css` — estilos de la barra de navegación (incluye badge `.in-cart`).
- `src/components/Item/Item.css` — estilos para las tarjetas de producto. Ajusta el tamaño de las imágenes allí.

---

## ✅ Siguientes pasos recomendados
- Optimizar imágenes (webp / thumbnails).
- Hacer el layout responsive y las tarjetas con ratio fijo para las imágenes.
- Añadir filtros por categoría y búsqueda.

---

Si querés, puedo encargarme de cualquiera de los puntos anteriores. ¡A trabajar!
