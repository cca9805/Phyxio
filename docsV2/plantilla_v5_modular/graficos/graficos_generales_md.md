# 23. Gráficos

Plantilla obligatoria asociada:

- `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`

Regla de precedencia:

Esta sección define el contrato del leaf con los gráficos, pero la creación,
estructura técnica, integración con frontend y reglas de rechazo específicas
de Coord, SVG y DCL quedan desarrolladas y endurecidas en
`plantilla_graficos_v5.md`, cuyo cumplimiento es obligatorio cuando el leaf
declare gráficos.

Tipos permitidos:

- Coord
- SVG
- DCL

Reglas:

- cada gráfico responde a una pregunta física concreta
- ejes con unidades cuando proceda
- símbolos coherentes con magnitudes.yaml
- título, leyenda o etiquetas coherentes con el leaf
- no se permiten gráficos decorativos sin valor interpretativo

Si el leaf declara varios tipos de gráficos, cada uno debe tener una función distinta:
- Coord: lectura cuantitativa o ejes
- SVG: representación visual física
- DCL: solo cuando la naturaleza del leaf lo justifique

Regla de integración reforzada:

Si el leaf declara gráficos y tiene interpretación habilitada:

- el gráfico debe poder recibir el resultado calculado o su estado derivado
- debe existir coherencia entre la lectura gráfica y `interpretacion.yaml`
- la convención de signos y ejes debe coincidir entre fórmula, interpretación y gráfico

En la versión en inglés:

- Todos los textos deben estar en ingles académico natural
- Todos los títulos y subtítulos deben estar en inglés académico natural.

Sin esta integración, el leaf no puede alcanzar Nivel 5 completo con gráficos.

Regla adicional de implementación obligatoria:

Todo gráfico nuevo del leaf debe crearse usando la infraestructura común del
frontend definida por la plantilla de gráficos, incluyendo la fábrica común
de wrappers y las plantillas operativas de creación. No se admite resolver
gráficos nuevos mediante placeholders o wrappers ad hoc si el estándar común
ya cubre el caso.

---------------------------------------------------------------------