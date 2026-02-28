# Memoria y Reglas de Proyecto (AI Memory)

Este archivo actúa como el "cerebro a largo plazo" de los agentes (Leo, Cloe y Max). 
Antes de proponer una solución o escribir código, **TODOS LOS AGENTES DEBEN LEER ESTE ARCHIVO**.

Si un agente (especialmente Max, el QA) descubre un error recurrente, una preferencia del usuario, o un nuevo patrón arquitectónico que funcionó bien, **debe añadirlo a esta lista** para que los demás agentes no vuelvan a cometer el mismo error en el futuro.

## 🧠 Lecciones Aprendidas y Reglas Activas:

* **Regla 1 (Ejemplo):** Siempre usar componentes de imagen del framework en lugar de tags `<img>` crudos.
* **Regla 2 (Ejemplo):** El color primario de la marca es `bg-blue-600`, no usar otros tonos de azul para botones principales.
* **🚀 Regla Aprendida (Agente Fixer):** Nunca importes imágenes en los archivos `.astro` (ej. `import img from '../assets/...'`) sin verificar usando `list_dir` que la imagen realmente existe en disco. Si falta una imagen, usa un fallback seguro o pídele permiso al usuario para generarla con la herramienta `generate_image`, ya que Astro fallará el Build por `[ImageNotFound]` si la ruta no resuelve.
* *(Los agentes añadirán nuevas reglas aquí a medida que trabajen y se equivoquen)*
