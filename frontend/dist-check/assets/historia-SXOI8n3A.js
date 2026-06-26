const e=`# Historia: Ejemplos de equilibrio\r
\r
## Problema histórico\r
\r
Durante siglos, ingenieros y artesanos resolvieron problemas de equilibrio por experiencia local: sostener puentes, templar cuerdas, estabilizar cargas. El problema historico era que cada caso parecia distinto y no existia un marco unificado para comparar soluciones.\r
\r
La pregunta no era solo "esta estable o no", sino "por que este montaje estable funciona y otro falla". Esa necesidad de comparacion fue el origen practico de la mecanica formal.\r
\r
## Dificultad conceptual previa\r
\r
Antes de la formalizacion vectorial, era comun mezclar masa y peso, o suponer que una regla de un caso (por ejemplo poleas) servia igual en rampas o apoyos. Esa falta de separacion entre mecanismo y apariencia generaba errores costosos en construccion y maquinaria.\r
\r
Tambien faltaba disciplina de hipotesis: no se diferenciaba contacto ideal de contacto real, ni geometria simetrica de asimetrica. Sin esas distinciones, la comparacion entre ejemplos era mas retorica que predictiva.\r
\r
## Qué cambió\r
\r
El cambio central fue metodologico: escribir diagramas de cuerpo libre, proyectar fuerzas por ejes y comparar demanda contra capacidad segun configuracion. Esa estrategia permitio unificar ejemplos distintos con un lenguaje comun.\r
\r
Con esa unificacion aparecieron relaciones operativas que hoy vemos naturales: calcular [[W]] desde [[m]] y [[g]], proyectar con [[alpha]], evaluar limite de adherencia con [[mu_s]] y resolver tensiones con [[theta]] en nodos de cable.\r
\r
## Impacto en la física\r
\r
El impacto fue enorme en educacion e ingenieria. En educacion, permitio entrenar criterio transferible: no memorizar casos sueltos, sino comparar mecanismos. En ingenieria, habilito auditoria tecnica: justificar por que un diseño soporta carga en distintas condiciones.\r
\r
La comparacion entre ejemplos tambien mejoro seguridad. Al identificar que variable domina cada caso, se pudo intervenir antes del fallo: cambiar angulo, mejorar adherencia, reforzar cables o redistribuir carga.\r
\r
## Conexión con física moderna\r
\r
Hoy, simuladores y sensores han aumentado precision, pero el nucleo historico se mantiene: comparar ejemplos de equilibrio con hipotesis explicitas y lectura causal de resultados. La tecnologia cambia herramientas, no el criterio fisico de base.\r
\r
En mecanica aplicada moderna, este enfoque convive con modelos mas complejos (elasticidad, dinamica, elementos finitos). Sin embargo, el filtro inicial sigue siendo el mismo que consolidaron los clasicos: si no entiendes que mecanismo compensa a cual en cada ejemplo, cualquier modelo avanzado pierde interpretabilidad.\r
`;export{e as default};
