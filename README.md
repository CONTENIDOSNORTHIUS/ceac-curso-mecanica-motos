# Curso de Recepcionista de Hotel — CEAC

Landing page estática, responsive y optimizada para Vercel, que replica el diseño de la página de captación del curso **Recepcionista de Hotel** de CEAC.

## Stack

- HTML5 semántico
- TailwindCSS (Play CDN)
- JavaScript vanilla (sin frameworks)
- Mobile-first, breakpoints en `768px` y `1024px`
- Accesible (focus visible, aria-attributes, alt text, `prefers-reduced-motion`)
- SEO básico (meta tags, Open Graph, Twitter Cards)

## Estructura

```
ceac-recepcionista-hotel/
├── index.html              # Página principal (one-page scroll)
├── css/
│   └── styles.css          # Estilos personalizados (animaciones, focus, scroll)
├── js/
│   └── main.js             # Menú móvil, acordeón, reveal on scroll
├── assets/
│   ├── favicon.svg         # Favicon placeholder
│   └── images/             # (vacío — imágenes vía placehold.co)
├── vercel.json             # Cabeceras, cache y configuración Vercel
├── package.json            # Scripts de desarrollo local
├── .gitignore
└── README.md
```

## Secciones

1. Hero con CTA y formulario lateral
2. Quiénes somos (métricas, institutos, opiniones, sellos)
3. ¿Por qué Recepcionista de Hotel? (tarjetas con datos del sector)
4. La formación (bloque azul + imagen)
5. Salidas profesionales (grid de roles)
6. Doble titulación (CEAC + Nebrija)
7. Certificación profesional HOT094_3
8. Objetivos de la formación
9. Temario (acordeón con 9 módulos, 510 h)
10. Equipo docente (Cora Rilo, Cristina Bacci)
11. Aprende trabajando (prácticas)
12. Bolsa de empleo con Randstad
13. Red de empresas colaboradoras
14. Metodología CEAC (timeline 3 pasos)
15. Campus virtual
16. CTA final + footer

## Desarrollo local

No requiere build. Cualquier servidor estático sirve.

```bash
# Opción 1 — npm
npm run dev
# Sirve en http://localhost:3000

# Opción 2 — Python
python -m http.server 3000

# Opción 3 — abrir directamente
# Abre index.html en el navegador (algunas funciones requieren http://)
```

## Imágenes

Se utilizan placeholders de `placehold.co`. Donde sea necesario sustituir por imágenes reales hay comentarios `<!-- TODO: ... -->` en el HTML.

Recomendaciones:
- Hero: 1920×1080
- Tarjetas de institutos: 600×400
- Diplomas: 800×500
- Equipo docente: 200×200 (cuadrada)
- Logos: SVG si es posible

## Despliegue

### 1. Crear repositorio en GitHub

```bash
gh repo create ceac-recepcionista-hotel --public --source=. --remote=origin --description "Landing CEAC - Curso de Recepcionista de Hotel"
```

### 2. Push del código

```bash
git push -u origin main
```

### 3. Desplegar en Vercel

```bash
# Primera vez (vincula proyecto)
vercel

# Producción
vercel --prod
```

Alternativa: importa el repo desde [vercel.com/new](https://vercel.com/new) — se autodetecta como sitio estático y no requiere configuración.

## Optimizaciones pendientes (producción)

- Sustituir Tailwind Play CDN por **Tailwind CLI** compilado con `purge` para reducir CSS final.
- Servir imágenes en formato **WebP/AVIF** con `<picture>`.
- Añadir `loading="lazy"` ya incluido implícitamente en imágenes fuera del viewport (revisar).
- Implementar `sitemap.xml` y `robots.txt`.
- Conectar el formulario a un endpoint real (Formspree, Resend, etc.).
- Reemplazar logos placeholder por activos reales.

## Licencia

MIT
