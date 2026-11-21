# CHANGELOG

Registro de todos los cambios del sitio. Convención: primero **borrador**, luego **en revisión** y finalmente **publicado**. Ningún cambio se despliega a producción sin confirmación explícita del dueño.

---

## 2026-11-20 — laptop.jpg reubicada antes del título de "Proceso en 4 pasos" (borrador)

- **Qué cambió**
  - Se movió **solo la imagen** `laptop.jpg` dentro de la sección "Proceso en 4 pasos" de `/terapia-cognitivo-conductual-online`: ya no está al lado del texto en dos columnas, sino **antes del título**, como imagen de apertura a todo el ancho del contenedor de la sección, centrada y con margen arriba y abajo.
  - Los 4 pasos volvieron a su layout original (dos columnas en escritorio), sin cambios en su texto ni contenido.
  - Se mantiene el mismo archivo `public/images/laptop.jpg` (ruta en código `/images/laptop.jpg`), con el mismo alt "Sesión de terapia online por videollamada", `next/image`, `loading="lazy"` y proporción original. En móvil la imagen también va antes del título, a todo el ancho, sin desbordes.
  - El hero con `peri0.jpeg` y el resto de la página (textos, precios, títulos, SEO, botones y formulario) quedan intactos.

- **En qué archivos / rutas**
  - `app/terapia-cognitivo-conductual-online/page.tsx` — sección "Proceso en 4 pasos".
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - El dueño quiere la imagen como apertura visual de la sección, no integrada al lado de los pasos.

- **Estado:** `borrador` hasta la revisión del dueño. **Sin commit, sin push y sin deploy.**

---

## 2026-11-20 — laptop.jpg junto a "Proceso en 4 pasos" en terapia (borrador)

- **Qué cambió**
  - Se agregó `public/images/laptop.jpg` (nombre exacto, 6144×3456) como imagen de la sección "Proceso en 4 pasos" de `/terapia-cognitivo-conductual-online`, con `next/image`, `loading="lazy"`, proporción original, `object-contain` y alt "Sesión de terapia online por videollamada".
  - Layout de dos columnas en escritorio: los 4 pasos a la izquierda (~55 %) y la imagen a la derecha (~45 %), integrados y alineados al centro. En móvil (375 px) la imagen va arriba del texto, sin desbordamiento horizontal.
  - El hero de terapia conserva `peri0.jpeg` con su texto, botón y credenciales intactos. No se tocó `/peritajes` ni su hero con `peri0.jpeg`.
  - No se cambiaron textos, precios, secciones, SEO, botones ni el formulario.

- **En qué archivos / rutas**
  - `app/terapia-cognitivo-conductual-online/page.tsx` — bloque de "Proceso en 4 pasos".
  - `public/images/laptop.jpg` — imagen nueva, sin seguimiento en git, pendiente de incluir en el `git add`.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - Mostrar una imagen de la experiencia de terapia online junto al proceso de trabajo, sin sustituir la foto del hero.

- **Estado:** `borrador` hasta la revisión del dueño. **Sin commit, sin push y sin deploy.**

---

## 2026-11-20 — Ajuste de texto en Precios de terapia (borrador)

- **Qué cambió**
  - Se quitaron las palabras "precio de gancho" de la fila "Primera sesión" en la tabla de Precios de `/terapia-cognitivo-conductual-online`. La fila queda exactamente: `$500 MXN (evaluación + formulación, solo una vez)`.
  - No cambian las cifras ($600 MXN, $2,500 MXN, $500 MXN), la duración de 50 min, las otras filas ni el resto de la página.

- **En qué archivos / rutas**
  - `app/terapia-cognitivo-conductual-online/page.tsx` — celda del honorario de la primera sesión.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - Cambio solicitado por el dueño del sitio.

- **Estado:** `borrador`. **Sin commit, sin push y sin deploy.**

---

## 2026-11-20 — Nueva ruta de terapia cognitivo-conductual online (borrador)

- **Qué cambió**
  - Se creó la ruta `/terapia-cognitivo-conductual-online` dentro del mismo proyecto Next.js y el mismo despliegue (sin subdominio ni proyecto nuevo). Reutiliza el diseño, tipografía, colores, Navbar, Footer, metadata base y Open Graph del dominio principal.
  - SEO exacto: title "Terapia Cognitivo-Conductual Online | Psicólogo UNAM — Octavio Torres R." y la meta description proporcionada; canonical y Open Graph apuntan a la nueva ruta. Palabras clave cubiertas de forma natural: terapia cognitivo conductual online, psicólogo online, TCC online, terapia online ansiedad, terapia online depresión.
  - Página responsive con 10 secciones: HERO, ¿Qué es la TCC?, ¿Para quién es?, ¿Cómo funciona online?, Proceso en 4 pasos, Qué incluye, Precios, Por qué con Octavio Torres R., Preguntas frecuentes y Contacto. Texto del brief sin reescribir; precios exactos ($600 MXN suelta, $2,500 MXN paquete de 5, $500 MXN primera sesión), duración de 50 min y nota al pie intactos.
  - El hero usa `/images/peri0.jpeg` **solo como marcador provisional** con alt de terapia ("Octavio Torres R., psicólogo clínico"). Pendiente: reemplazar por la foto nueva de terapia que Sha está buscando, en una tarea aparte.
  - El botón "Agendar Terapia" de la landing ahora enlaza a `/terapia-cognitivo-conductual-online` (antes `#contacto`). El botón "Servicio para abogados - Peritajes" y `/peritajes` no se tocaron.
  - Se agregó `/terapia-online` como redirección permanente a la ruta larga; no es una página aparte.
  - Contacto: se reutiliza el componente existente con una nueva variante `terapia` que fija la rama de paciente y oculta el selector "Soy Paciente / Soy Abogado". Misma lógica y mismo destino Formspree (`mykdebzo`), sin envíos de prueba.
  - No se publicaron teléfono, correo personal, número de cédula, WhatsApp, Stripe ni agenda de videollamada. No se mezcló peritajes (sin balanza, dashboard ni MMPI en esta página).

- **En qué archivos / rutas**
  - `app/terapia-cognitivo-conductual-online/page.tsx` — página nueva.
  - `components/contact-form.tsx` — variante `terapia` del formulario existente.
  - `components/hero.tsx` — destino del botón "Agendar Terapia".
  - `next.config.mjs` — redirección `/terapia-online`.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - Dar a las personas que buscan terapia online una página propia, cálida y enfocada en su proceso, separada del público de peritajes.

- **Pendiente / requiere decisión del dueño**
  - Confirmar o ajustar la redirección corta `/terapia-online`.
  - Reemplazar la imagen provisional del hero cuando llegue la foto nueva de terapia.
  - No hay IDs de Analytics ni Search Console en el código actual; no se agregó ninguno. Se reutiliza el layout global existente.
  - El Footer compartido incluye `contacto@octaviotrs.com`, que ya estaba en la web. No se quitó para no romper la landing actual; confirmar si debe ocultarse también en esta página.

- **Estado:** `borrador`. **Sin commit, sin push y sin deploy.** No se desplegará sin confirmación explícita.

---

## 2026-11-20 — Botones de peritajes unificados en la landing (publicado)

- **Qué cambió**
  - El botón "Servicios para Abogados" del hero pasó a llamarse exactamente **"Servicio para abogados - Peritajes"** y su enlace cambió de `#servicios-clinicos` a `/peritajes`.
  - Se eliminó por completo el botón **"Para Abogados — Peritajes"**: ya no está en el DOM de la landing, ni oculto.
  - El botón "Agendar Terapia" quedó sin cambios. En el hero de la landing quedan exactamente 2 botones: "Agendar Terapia" y "Servicio para abogados - Peritajes".
  - No se tocó `/peritajes` (contenido, imágenes, formulario, honorarios, tiempos ni SEO). No se agregaron WhatsApp, teléfono, cédula con número, Stripe ni videollamadas.

- **En qué archivos / rutas**
  - `components/hero.tsx` — enlace y texto del botón de peritajes, y eliminación del botón duplicado.
  - `CHANGELOG.md` — este registro. Las entradas anteriores conservan el texto original porque documentan el estado en ese momento.

- **Por qué**
  - Evitar dos botones que llevaban a peritajes y dejar un único acceso claro desde la landing.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `e36947b` ("Unificar botones de peritajes: Servicio para abogados - Peritajes a /peritajes, eliminar duplicado") hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Commit + push a `origin/main` (publicado)

- **Qué cambió**
  - Se hicieron commit y push de todos los cambios de `/peritajes` (incluidas las 3 imágenes y el MMPI-2 aparte) a `origin/main`.
  - Commit: `558c037` — "Agregar /peritajes con MMPI-2 aparte ($3,500) e imágenes peri0, peri1 y peri2".
  - Push: `523843d..558c037  main -> main` hacia `https://github.com/budasun/octaviotrswebsite.git`.
  - Todas las entradas de este CHANGELOG pasan a estado **publicado / desplegado** en el repositorio.
  - URL de producción verificada: `https://www.octaviotrs.com/peritajes`. El despliegue de Vercel se confirmó el 2026-11-20: la ruta responde correctamente y muestra el MMPI-2 en "Qué te entrego" y en Honorarios a $3,500 MXN. Ya no devuelve 404.

- **En qué archivos / rutas**
  - `CHANGELOG.md` — este registro y el cambio de estado de las entradas anteriores.

- **Estado:** `publicado` / `desplegado` en `origin/main` el 2026-11-20. **Despliegue de Vercel confirmado** en `https://www.octaviotrs.com/peritajes`.

---

## 2026-11-20 — MMPI-2 como prueba adicional en `/peritajes` (publicado)

- **Qué cambió**
  - Se agregó el MMPI-2 como **prueba adicional aparte**, no incluida en el dictamen estándar, en dos lugares de `/peritajes`:
    - Sección "Qué te entrego": nuevo punto con el texto exacto "MMPI-2 (Inventario Multifásico de Personalidad de Minnesota, ~500 reactivos, ya digitalizado) como prueba adicional aparte, disponible según el caso, sobre todo para daño psicológico complejo, imputabilidad y custodia compleja. Se cotiza aparte."
    - Tabla de Honorarios: nueva fila exacta "MMPI-2 adicional, aparte del dictamen estándar: $3,500 MXN", precio confirmado por el dueño.
  - No se cambiaron los demás honorarios, tiempos (10 a 15 días hábiles estándar, exprés 3 días +25%), primera comparecencia incluida, formulario de 4 campos, SEO, layout de dos columnas con imágenes ni el botón de la landing. No se agregaron WhatsApp, teléfono, cédula con número, Stripe ni videollamadas.

- **En qué archivos / rutas**
  - `app/peritajes/page.tsx` — arreglos `entregas` y `honorarios`.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - El dueño quiere ofrecer el MMPI-2 como servicio adicional cotizado aparte para daño psicológico complejo, imputabilidad y custodia compleja.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Ajuste de título en `/peritajes` (publicado)

- **Qué cambió**
  - El título de la sección pasó de "Qué entregas" a "Qué te entrego". El `id` de la sección (`que-entregas`) y el resto del contenido, imágenes, formulario y SEO se mantienen igual.

- **En qué archivos / rutas**
  - `app/peritajes/page.tsx` — texto del `SectionHeading` de la sección de entregas.
  - `CHANGELOG.md` — este registro. Las entradas anteriores conservan el texto original porque documentan el estado en ese momento.

- **Por qué**
  - Cambio solicitado por el dueño del sitio.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Layout de imágenes integrado en `/peritajes` (publicado)

- **Qué cambió**
  - Las 3 secciones con imagen pasaron de un diseño apilado/centrado (texto arriba, imagen sola en medio y espacio en blanco a los lados) a **dos columnas integradas** en escritorio, apiladas en móvil. No se cambió ningún texto, honorario, tiempo, formulario, SEO ni el botón de la landing.
  - HERO: imagen `/images/peri0.jpeg` a la **izquierda** (aprox. 45 %) y texto a la **derecha** (aprox. 55 %), alineados al centro. La foto pasó de estar a la derecha del título a estar a la izquierda. Mantiene `priority` (sin lazy) y el alt "Octavio Torres R., perito psicólogo en CDMX".
  - "¿Cuándo me necesitas?": imagen `/images/peri2.jpeg` a la izquierda (aprox. 40 %) y los 4 servicios a la derecha (aprox. 60 %), en lugar de la balanza centrada sola. Mantiene `loading="lazy"` y el alt "Balanza de justicia con psicología forense".
  - "Qué entregas" / Suite Psicométrica: texto a la izquierda (aprox. 60 %) e imagen `/images/peri1%20(1).jpeg` a la derecha (aprox. 40 %) para alternar el lado respecto a la sección anterior, sin dejarla centrada sola. Mantiene `loading="lazy"`, el alt "Dashboard de la Suite Psicométrica con test de Raven y resultados por percentiles" y el pie "Resultados replicables con la Suite Psicométrica (Raven, Cleaver y HTP)".
  - En móvil (375 px) el orden es imagen arriba y texto abajo, sin desbordamiento horizontal. Todas las imágenes siguen con `next/image`, proporción original y `object-contain`.

- **En qué archivos / rutas**
  - `app/peritajes/page.tsx` — reordenamiento de los tres bloques y columnas con proporciones `45/55`, `40/60` y `60/40`.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - El dueño quiere las imágenes integradas con el texto, lado a lado en escritorio, en lugar de apiladas y centradas con espacio blanco a los lados.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Imágenes de peritajes agregadas a `/peritajes` (publicado)

- **Qué cambió**
  - Se agregaron las 3 imágenes existentes en `public/images/`, sin renombrarlas ni reemplazarlas por stock:
    - `/images/peri0.jpeg` como imagen principal del hero, a la derecha del título, con alt "Octavio Torres R., perito psicólogo en CDMX" y `priority` (sin lazy loading).
    - `/images/peri2.jpeg` como visual centrado en la sección "¿Cuándo me necesitas?", con alt "Balanza de justicia con psicología forense".
    - `/images/peri1%20(1).jpeg` (nombre real del archivo: `peri1 (1).jpeg`) junto a la sección "Qué entregas" / Suite Psicométrica, con alt "Dashboard de la Suite Psicométrica con test de Raven y resultados por percentiles" y el pie "Resultados replicables con la Suite Psicométrica (Raven, Cleaver y HTP)".
  - Todas se renderizan con `next/image`, conservando la proporción original (572×1024, `object-contain`, sin recorte de rostro, red digital ni gráficos), con layout responsive y `loading="lazy"` en las dos secundarias.
  - No se cambiaron textos, honorarios, tiempos, formulario, SEO ni el botón de la landing. No se agregaron WhatsApp, teléfono, cédula con número, Stripe ni videollamadas.

- **En qué archivos / rutas**
  - `app/peritajes/page.tsx` — import de `next/image`, hero en dos columnas, visual de la balanza y figura del dashboard con su pie.
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - Dar soporte visual sobrio y profesional a la ruta de peritajes usando únicamente los archivos proporcionados por el dueño.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Formulario de `/peritajes` reemplazado por el real de abogados (publicado)

- **Qué cambió**
  - Se eliminó el formulario anterior de 6 campos (`nombre_despacho`, `nombre_abogado`, `materia`, `fecha_audiencia`, `whatsapp`, `resumen_caso`) y su componente `components/peritajes-contact-form.tsx`.
  - `/peritajes` ahora reutiliza **el mismo componente** `ContactForm` de la landing (`components/contact-form.tsx`) y su lógica de envío original, con una variante `peritajes` que fija el tipo de usuario en "Abogado / Profesional" y oculta el selector "Soy Paciente" / "Soy Abogado / Colega", el encabezado propio y la columna informativa. El comportamiento por defecto de la landing no cambia.
  - El formulario tiene exactamente 4 campos obligatorios, con etiquetas y placeholders exactos: "Nombre completo*" (`Tu nombre completo`), "Correo electronico*" (`tu@email.com`), "Telefono*" (`+52 55 1234 5678`) y "Motivo de la consulta*" (`Describe el caso o motivo de colaboracion...`). Botón "Enviar Solicitud" con icono de avión de papel.
  - Destino sin cambios: `https://formspree.io/f/mykdebzo` (mismo `formId`). El correo sigue siendo obligatorio porque identifica al remitente en Formspree.
  - No se agregaron edad ni modalidad preferida (solo aplican a pacientes). No se publicó ningún número de WhatsApp de Octavio. No se tocaron `/robots.txt`, el contraste del footer, Analytics ni Search Console. La cédula profesional sigue sin número.

- **En qué archivos / rutas**
  - `components/contact-form.tsx` — props opcionales (`sectionId`, `variant`, `showInfo`) para reutilizar el componente sin alterar la landing.
  - `app/peritajes/page.tsx` — importa y renderiza `ContactForm` en modo `peritajes`, conservando el texto "Respuesta en menos de 24 horas. Confidencialidad garantizada."
  - `components/peritajes-contact-form.tsx` — eliminado (formulario incorrecto de 6 campos).
  - `CHANGELOG.md` — este registro.

- **Por qué**
  - El formulario anterior no era el formulario real verificado de la web; se alinea `/peritajes` con el componente y el envío ya existentes, evitando duplicar lógica y manteniendo un solo destino en Formspree.

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

---

## 2026-11-20 — Ruta `/peritajes` + acceso desde la landing (publicado)

- **Qué cambió**
  - Se creó la ruta `/peritajes` dentro del mismo proyecto Next.js (mismo dominio, mismo despliegue; no se creó subdominio ni proyecto nuevo). Incluye las 8 secciones solicitadas con el texto exacto proporcionado: HERO, ¿Cuándo me necesitas?, Qué entregas, Proceso en 4 pasos, Honorarios (tabla intacta), Por qué Octavio Torres R., Preguntas frecuentes de abogados y Contacto — solo para abogados.
  - Se implementó un formulario exclusivo para abogados con los campos: Nombre del despacho, Nombre del abogado, Materia (familiar / penal / civil / otra), Fecha de audiencia (si la hay), WhatsApp y Resumen breve del caso. Envía al **mismo destino** que el formulario actual: `https://formspree.io/f/mykdebzo` (ID `mykdebzo`, sin cambios).
  - Se agregó un botón visible **"Para Abogados — Peritajes"** en la landing actual, enlazando a `/peritajes`, sin reescribir el resto de la landing.
  - Se ajustaron los `href` del header compartido (`#hero` → `/#hero`, etc.) para que el mismo componente funcione tanto en `/` como en `/peritajes`. El comportamiento en la landing es equivalente.
  - Se reutilizaron el sistema de diseño (Tailwind + tokens de `app/globals.css`), tipografía Inter, `Navbar`, `Footer`, `metadataBase` y Open Graph del dominio principal.
  - SEO de la nueva ruta: title y meta description exactos solicitados, canonical `/peritajes` y Open Graph derivado de esos mismos textos.
  - **No se crearon** las subpáginas `/peritajes/custodia`, `/peritajes/dano-psicologico`, `/peritajes/imputabilidad` ni `/peritajes/contradictamen`. La estructura App Router permite agregarlas después sin publicar páginas vacías.
  - **No se agregaron** pagos con Stripe, agenda de videollamadas, ni ningún número de WhatsApp o teléfono de Octavio.

- **En qué archivos / rutas**
  - `app/peritajes/page.tsx` (nuevo) — página y metadata de la ruta.
  - `components/peritajes-contact-form.tsx` (nuevo) — formulario solo para abogados.
  - `components/hero.tsx` — botón nuevo "Para Abogados — Peritajes".
  - `components/navbar.tsx` — href absolutos para reutilizar el header en `/peritajes`.
  - `CHANGELOG.md` (nuevo) — este registro.

- **Por qué**
  - Cumplir la Tarea 1 y 2 con el contenido exacto del brief, manteniendo un tono sobrio y profesional para despachos de abogados y sin tocar el enfoque clínico ni de venta de libros de la landing.
  - Evitar duplicar diseño, header, footer o destino de formulario, y dejar preparada la estructura para futuras subpáginas.

- **Verificación local (sin despliegue)**
  - `npm run build` y `npx tsc --noEmit`: correctos. `/peritajes` se genera como página estática.
  - Servidor local: `/peritajes` responde 200; title, meta description, H1, los 6 campos del formulario y los textos de tiempos/honorarios están presentes.
  - No hay enlaces `wa.me`, `whatsapp.com` ni `tel:` en la web. No se crearon las subrutas.
  - Botón "Para Abogados — Peritajes" de la landing: clic verificado, navega a `/peritajes`.
  - Lighthouse local: SEO 1.00, Best Practices 1.00, Accesibilidad 0.96 (único hallazgo: contraste bajo en el `Footer` compartido, preexistente; no se modificó). Se corrigió el contraste en los elementos nuevos.
  - Sin desbordamiento horizontal a 800 px ni en viewport simulado de 375 px (menú colapsado, tabla con scroll interno, formulario visible).

- **Estado:** `publicado` / `desplegado` el 2026-11-20. Commit `558c037` hecho y pusheado a `origin/main`.

- **Pendientes / decisiones del dueño**
  - No se encontró código de Analytics (GA4) ni archivo de verificación de Search Console en el repositorio (`public/` solo contiene `images/`). Si están configurados en Vercel/DNS se heredan al desplegar el mismo proyecto; si son un `<script>` externo, se necesita el ID o la ubicación del script. No se inventó ningún ID.
  - El contenido pide mostrar la etiqueta "Cédula Profesional" sin número. No se publicó ningún número de cédula. Si se desea mostrarlo, hace falta que el dueño lo proporcione.
  - La lista de campos del formulario no incluye correo electrónico. Se respetó exactamente; si Formspree requiere un `email` para identificar al remitente, confirmar antes de agregarlo.
  - Lighthouse reportó `/robots.txt` inexistente (404) en el sitio actual. Es un asunto preexistente y no se agregó el archivo porque no entraba en esta tarea; dime si quieres que lo añada en un cambio aparte.
