const e=`# Modelos fisicos: sistemas aislados\r
\r
## Modelo ideal\r
\r
El modelo ideal de sistemas aislados supone que basta con identificar cuando las fuerzas externas pueden despreciarse en el balance de momento. Se conserva solo la estructura imprescindible para que la relacion principal describa el mecanismo dominante y para que la lectura del diagrama siga siendo limpia. En este nivel se eliminan detalles secundarios del material, del fluido o del contacto porque todavia no cambian la conclusion esencial. Esa simplificacion es valiosa siempre que el alumno pueda explicar que fenomeno se ha descartado y por que su ausencia no altera la interpretacion principal.\r
\r
\r
## Hipótesis\r
\r
Las hipótesis fundamentales de este modelo son: cuerpos puntuales o rígidos, ausencia de fuerzas externas netas durante la interacción, y marco de referencia inercial. Cualquier violación de estas condiciones exige revisar si el modelo sigue siendo aplicable o si se requiere una extensión.\r
\r
## Dominio de validez cuantitativo\r
\r
El dominio cuantitativo de validez debe declararse con umbrales verificables. Como regla minima, conviene exigir variaciones relativas menores del 1 %, errores de orden 10^-2 y escalas geometricas comparables entre 10^0 y 10^6 segun el problema. Si esos criterios fallan, la magnitud buscada deja de ser fiable aunque la sustitucion numerica parezca correcta. Declarar el dominio obliga a justificar por que el problema pertenece de verdad al regimen descrito por el leaf.\r
\r
## Señales de fallo del modelo\r
\r
Las senales de fallo del modelo no suelen empezar en la calculadora, sino en la lectura fisica. Un cambio inesperado de signo, una reaccion que resulta negativa donde deberia haber contacto, o una tendencia incompatible con problemas de laboratorio, ingenieria elemental y lectura de situaciones reales indican que la hipotesis elegida se ha roto antes del resultado final. Tambien es sospechoso que una correccion supuestamente pequena domine toda la expresion o cambie el orden de magnitud de la respuesta.\r
\r
## Modelo extendido o alternativo\r
El modelo extendido introduce correcciones cuando cambian las hipotesis de rigidez, contacto, velocidad o marco de referencia. En esa ampliacion reaparecen terminos asociados a geometria real, variaciones del medio, no linealidades o redistribuciones internas. El objetivo no es complicar por inercia, sino decidir que refinamiento cambia de verdad la prediccion y cual solo anade ruido algebraico. Un buen criterio consiste en comparar cuanto se modifica la magnitud buscada al activar cada correccion por separado.\r
\r
Cuando conviene pasar al modelo extendido: si las hipótesis del modelo ideal se rompen de forma medible, la transición al modelo extendido es necesaria.\r
\r
## Comparación operativa\r
La comparacion con modelos alternativos sirve para decidir si conviene una descripcion estatica, dinamica, lineal, cuadratica, elastica o puramente geometrica. La mejor eleccion es la que conserva significado fisico con el menor numero de supuestos discutibles y con una interpretacion verificable en el escenario real. Comparar modelos no es una formalidad: es el paso que evita aplicar por costumbre la primera ecuacion que uno recuerda.\r
`;export{e as default};
