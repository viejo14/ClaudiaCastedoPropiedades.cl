
# IG Propiedades - Web Inmobiliaria

Proyecto web inmobiliario desarrollado con React y Vite. Permite publicar, visualizar y gestionar propiedades, contactar al equipo y mostrar información relevante de la empresa.

## Características principales

- Home con hero, carrusel de propiedades destacadas (3 en 3, aleatorio, controles manuales y automático)
- Listado y detalle de propiedades
- Filtros y paginación
- Sección de servicios, valores, testimonios y CTA
- Página "Nosotros" con historia, misión, visión, equipo y logros
- Formulario de contacto integrado con EmailJS
- Diseño moderno y responsivo con Tailwind CSS
- Sin loader/gif al inicio (carga directa)

## Instalación

1. Clona el repositorio:
	```bash
	git clone https://github.com/viejo14/web-inmobiliario.git
	cd web-inmobiliario
	```
2. Instala dependencias:
	```bash
	npm install
	```
3. Configura las variables de entorno en `.env` (ver sección EmailJS)
4. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```

## Estructura del proyecto

- `src/pages/` - Páginas principales (Home, Nosotros, Servicios, Propiedades, Detalle, etc)
- `src/components/` - Componentes reutilizables (cards, layout, UI)
- `src/services/` - Servicios para consumir API y datos
- `src/hooks/` - Hooks personalizados
- `src/utils/` - Utilidades y helpers
- `public/img/` - Imágenes y assets

## Configuración EmailJS

El formulario de contacto usa EmailJS para enviar correos. Debes crear una cuenta en [EmailJS](https://www.emailjs.com/) y configurar las siguientes variables en `.env`:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=tu_template_admin
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_ADMIN_TO_EMAIL=correo_admin
```

**Importante:** No incluyas datos sensibles ni claves reales en el repositorio.

## Uso

- Accede a la Home para ver el hero y el carrusel de propiedades destacadas
- Navega por las propiedades, filtra y consulta detalles
- Contacta al equipo mediante el formulario
- Explora la sección "Nosotros" para conocer la empresa

## Personalización

- Puedes modificar estilos en `src/styles.css` y los archivos de Tailwind
- Las imágenes de propiedades se gestionan en la API y en `/public/img/`
- El carrusel de propiedades se puede ajustar en cantidad, tiempo y controles

## Créditos y licencia

Desarrollado por Francisco Campos de Bidata para IG Propiedades. Uso privado y educativo. No compartir datos sensibles ni credenciales.
