# CHANGELOG

Registro de todos los cambios del sitio. Convención: primero **borrador**, luego **en revisión** y finalmente **publicado**. Ningún cambio se despliega a producción sin confirmación explícita del dueño.

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
