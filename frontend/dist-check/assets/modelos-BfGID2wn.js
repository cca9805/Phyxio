const e=`# Modelos para variables extensivas\r
\r
## Modelo ideal\r
\r
El modelo ideal trata las variables extensivas como cantidades aditivas. Si un sistema se divide en partes compatibles, el total de [[X_ext]] es la suma de las partes. Si se juntan copias iguales, el total escala con [[lambda_escala]]. Este modelo funciona muy bien para sistemas macroscopicos donde los efectos de frontera son pequenos.\r
\r
En esta lectura, [[m]], [[V]], [[U]] y [[S]] son inventarios. La densidad [[rho]] y la magnitud específica [[x_esp]] son propiedades normalizadas que se calculan a partir de inventarios, pero no se comportan como inventarios.\r
\r
## Hipótesis\r
\r
- Las partes que se suman son del mismo tipo de magnitud.\r
- Las referencias de energía o entropía son compatibles.\r
- El estado intensivo no cambia al aplicar el test de escala.\r
- Los efectos de superficie, interaccion de largo alcance o mezcla no ideal son pequenos.\r
- La muestra es suficientemente macroscopica para usar promedios termodinámicos.\r
\r
## Dominio de validez cuantitativo\r
\r
Como regla operativa, el modelo aditivo es adecuado cuando las correcciones de frontera son < 1% del valor total. En muestras ordinarias de laboratorio esta condición suele cumplirse para [[m]], [[V]] y [[U]]. En sistemas pequenos, una energía de superficie comparable al 5% o 10% de la energía total ya obliga a corregir la extensividad ideal.\r
\r
Para comparar muestras, una diferencia de masa de factor 2 debe producir factor 2 en una extensiva si el estado es equivalente. Si el cociente cambia mucho, probablemente se esta comparando una propiedad normalizada o un sistema no equivalente.\r
\r
## Señales de fallo del modelo\r
\r
Una senal de fallo es que al juntar dos partes el total medido no coincide con la suma dentro de la incertidumbre. Otra es que la mezcla cambie volumen de forma apreciable, como ocurre en algunas soluciones. También puede fallar si aparecen interacciones de largo alcance no despreciables.\r
\r
En esos casos no conviene forzar la suma ideal. Se debe identificar si la diferencia procede de superficie, mezcla, reaccion, cambio de estado o mala definición de referencia.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido conserva la idea de inventario, pero anade terminos de exceso, superficie o interaccion. En mezclas se usan propiedades parciales molares. En sistemas pequenos se anaden contribuciones superficiales. En sistemas gravitatorios o electrostaticos extensos puede aparecer no aditividad por interacciones de largo alcance.\r
\r
La transicion conviene cuando el error relativo de la suma ideal supera la precision buscada. El balance extensivo sigue siendo la base, pero se corrige con terminos que representan la física omitida.\r
\r
## Comparación operativa\r
\r
El modelo ideal responde rápido a la pregunta "que pasa si duplico la muestra". El modelo extendido responde a "por que el total no coincide exactamente con la suma". Para ESO y Bachillerato suele bastar la aditividad; en universidad aparece la necesidad de discutir referencias, mezclas y escalas pequenas.\r
`;export{e as default};
