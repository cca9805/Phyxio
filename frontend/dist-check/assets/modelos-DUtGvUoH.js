const e=`## Modelo ideal

El modelo ideal considera un sistema clasico descrito por coordenadas generalizadas [[qi]], velocidades [[qdi]] y un lagrangiano [[L]] regular. La accion [[S]] se calcula en un intervalo con [[t1]] y [[t2]] fijados. Las trayectorias comparadas comparten extremos, respetan las ligaduras admitidas y son suficientemente suaves para poder variar e integrar por partes.

La hipotesis central es que la dinamica relevante esta contenida en [[L]]. En ese caso, la condicion de estacionariedad de [[deltaS]] produce el residuo [[Ri]] y permite identificar la trayectoria fisica sin escribir todas las fuerzas cartesianas.

## Hipótesis

- El sistema es clasico y admite descripcion mediante [[qi]].
- El intervalo temporal entre [[t1]] y [[t2]] esta fijado.
- Las variaciones virtuales no mueven los extremos.
- [[L]] es diferenciable respecto de [[qi]], [[qdi]] y el tiempo.
- Las fuerzas relevantes son conservativas o estan incorporadas en el modelo lagrangiano.
- Las ligaduras, si existen, son compatibles con las variaciones usadas.

## Dominio de validez cuantitativo

La escala de [[S]] se estima multiplicando una escala de energia por una escala de tiempo. Un laboratorio con energias del orden de 1 J durante 1 s produce acciones del orden de 1 J s. Un sistema macroscópico con 100 J durante 10 s produce acciones del orden de 1000 J s.

Estas cifras no deciden por si solas si el movimiento es correcto. Como criterio cuantitativo minimo, la duracion debe ser mayor que 0 s, las energias deben ser finitas y el orden de magnitud esperado de accion debe ser energia por tiempo, por ejemplo cerca de 1 J s para 1 J durante 1 s. Lo importante es el cambio de primer orden [[deltaS]] al variar la trayectoria. La accion absoluta puede modificarse por cambios de referencia, pero la condicion estacionaria conserva el contenido dinamico cuando el cambio no altera las ecuaciones.

## Señales de fallo del modelo

Una senal de fallo es variar trayectorias que no respetan los extremos o las ligaduras. Otra es construir [[L]] con energias que pertenecen a configuraciones distintas. Tambien falla el modelo si se impone [[Ri]]=0 cuando existen fuerzas no potenciales externas que no se han representado.

En problemas con impactos, rozamiento seco o actuadores discontinuos, la trayectoria puede no ser suave. Entonces el principio variacional simple deja de ser suficiente y se necesitan condiciones de salto, fuerzas generalizadas o una formulacion ampliada.

## Modelo extendido o alternativo

El modelo se extiende incorporando fuerzas generalizadas, multiplicadores de Lagrange, terminos no conservativos aproximados o principios variacionales con restricciones explicitas. En sistemas de campos, [[S]] deja de ser una integral temporal simple y pasa a integrar una densidad lagrangiana en espacio y tiempo.

Otra extension importante aparece en simetrias. Si la accion es invariante bajo una transformacion continua, se obtiene una conservacion mediante Noether. Por eso este leaf sirve de puente hacia simetrias y conservaciones.

Conviene cambiar a un modelo extendido cuando el residuo no se reduce al disminuir la variacion admisible, cuando aparecen saltos de velocidad o cuando una fuerza externa intercambia energia de forma no representada en [[L]]. En esos casos, seguir usando el principio conservativo simple oculta el agente fisico que rompe la estacionariedad.

## Comparación operativa

- Modelo newtoniano: eficaz cuando las fuerzas cartesianas son claras.
- Modelo variacional: eficaz cuando las coordenadas naturales y las ligaduras simplifican el problema.
- Modelo con fuerzas generalizadas: necesario si hay aportes no potenciales.
- Modelo con multiplicadores: util cuando no se eliminan las ligaduras.
- Criterio de eleccion: usar accion estacionaria cuando se puede construir un [[L]] coherente y las variaciones admisibles estan claras.
`;export{e as default};
