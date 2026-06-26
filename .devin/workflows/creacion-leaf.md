La creación de un leaf debe pasar siempre por la lectura integra de la plantilla_v5_modular en docsV2\plantilla_v5_modular\00_INDEX.md, este documento es un índice de los documentos de creación de un leaf completo.


# Reglas globales sugeridas para Windsurf

Estas reglas son intencionadamente genéricas. No nombran ningún proyecto concreto.

```md
- Si se pide crear un leaf, se debe crear a imagen de lo que indica la plantilla_v5_modular en docsV2.
- Obligatoriamente se debe leer cada modulo de la plantilla antes de crear cada archivo del leaf.
- La plantilla_v5_modular es la biblia de creación del proyecto todos los archivos de cada leaf deben aplicar la plantilla, con especial atención al renderizado matemático, estructura obligatoria, coherencia entre archivos e interpretación.
- No generes placeholders, TODOs ni secciones vacías salvo que el usuario lo pida explícitamente.
- Si el usuario pide archivos completos, entrega archivos completos, no fragmentos ni esquejes.
- No reduzcas ni simplifiques archivos existentes sin avisar y sin preservar los requisitos funcionales.
- Conserva nombres de campos, rutas, IDs y estructuras existentes salvo que sean claramente erróneos.
- Antes de modificar varios archivos relacionados, revisa sus dependencias cruzadas.
- Corrige la causa raíz del error, no solo el síntoma que aparece en consola.
- Si existe un validador, test o build específico del repo, ejecútalo antes de declarar la tarea terminada.
- Si no puedes ejecutar una validación, dilo explícitamente y no afirmes que pasa.
- Si una herramienta no permite crear un archivo porque ya existe, sobrescribe o edita de forma segura cuando la intención del usuario sea clara.
- No preguntes por confirmación cuando la acción sea evidente y reversible dentro del repo.
- Evita soluciones cosméticas que oculten errores reales.
- Al entregar cambios, resume archivos tocados, causa corregida y validación realizada.
- Se deben seguir todas las reglas de dichos documentos, no cumplir con dichas reglas supone invalidar el leaf.
```
```
