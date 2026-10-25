ARGOS — PLANTILLA MAESTRA PARA NEGOCIOS LOCALES
================================================

ARCHIVOS
- index.html: estructura de la web.
- styles.css: diseño adaptable a móvil, tablet y escritorio.
- script.js: navegación móvil, tarjetas de servicios y formulario a WhatsApp.
- config.js: textos, datos de contacto, imágenes y servicios que se personalizan por cliente.
- assets/favicon.svg: icono de pestaña.
- aviso-legal.html, privacidad.html, cookies.html: marcadores legales que deben personalizarse; no son asesoramiento ni textos finales.

CÓMO PERSONALIZAR
1. Edita config.js.
2. Sustituye businessName, brandInitials, headline, intro, whatsapp, phoneDisplay, email, address y hours.
3. Cambia heroImage y aboutImage por imágenes autorizadas del negocio.
4. Edita services y benefits con datos reales.
5. Sustituye la opinión de muestra por una opinión auténtica con permiso, o elimina la sección.
6. Completa los textos legales con la información real del responsable y los tratamientos.
7. Revisa title y meta description de index.html para el negocio y su localidad.
8. Abre index.html en el navegador y prueba enlaces, formulario y versión móvil.

PUBLICACIÓN CON EL WORKER ACTUAL
El Worker de Cloudflare que ya está conectado al repositorio usa `npx wrangler deploy`.
Para que este proyecto sirva HTML, CSS, JS e imágenes estáticas desde el Worker, la configuración de Wrangler debe incluir los assets estáticos (por ejemplo, una configuración de `assets` que apunte al directorio del sitio). No cambies la configuración del Worker existente sin comprobarla primero.
Como alternativa, Cloudflare Pages permite publicar un sitio estático desde GitHub con el directorio de salida que contenga index.html.

IMPORTANTE
- El formulario NO guarda ni envía datos a un servidor propio: prepara un mensaje de WhatsApp para que el visitante lo revise y lo envíe.
- No incluyas contraseñas, tokens ni claves privadas en estos archivos.
- No prometas citas confirmadas, pagos online, reservas o funciones que no estén implementadas.
- No publiques precios, testimonios, logos ni fotos sin autorización.
- El SEO local necesita información real y coherente; no garantiza posiciones en buscadores.
- Los textos legales son marcadores y deben adaptarse antes de usar la web comercialmente.
