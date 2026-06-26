const e=`# Errores comunes en variables extensivas\r
\r
## Errores conceptuales\r
\r
### Error 1: "Extensiva significa grande"\r
\r
**Descripción.** El alumno cree que una magnitud es extensiva si su valor numerico es grande.\r
\r
**Por que parece correcto.** La palabra extensiva sugiere extension o tamano.\r
\r
**Senal de deteccion.** Se clasifica una presión alta como extensiva o una masa pequena como no extensiva.\r
\r
**Correccion conceptual.** Extensiva significa proporcional al tamano del sistema, no grande en valor absoluto.\r
\r
**Mini-ejemplo de contraste.** Un miligramo de muestra tiene masa [[m]] extensiva aunque sea pequena; una presión enorme sigue siendo intensiva.\r
\r
### Error 2: "Toda magnitud calculada con masa es extensiva"\r
\r
**Descripción.** Se clasifica [[rho]] como extensiva porque aparece [[m]] en su formula.\r
\r
**Por que parece correcto.** La masa es el ejemplo más familiar de extensividad.\r
\r
**Senal de deteccion.** Se dice que la densidad se duplica al duplicar la muestra.\r
\r
**Correccion conceptual.** Un cociente de extensivas puede eliminar la escala. Si [[m]] y [[V]] se duplican juntos, [[rho]] queda constante.\r
\r
**Mini-ejemplo de contraste.** Dos litros de agua tienen doble masa que uno, pero la misma densidad aproximada.\r
\r
## Errores de modelo\r
\r
### Error 3: "Sumar propiedades especificas como si fueran totales"\r
\r
**Descripción.** Se suman valores de [[x_esp]] de dos muestras para obtener un total.\r
\r
**Por que parece correcto.** La palabra específica puede parecer solo una forma alternativa de escribir la misma propiedad.\r
\r
**Senal de deteccion.** Se calcula energía específica total sumando kJ/kg de dos subsistemas.\r
\r
**Correccion conceptual.** Primero recupera la extensiva total multiplicando por masa; después suma totales.\r
\r
**Mini-ejemplo de contraste.** Dos muestras con 10 kJ/kg no dan 20 kJ/kg al juntarse; siguen en 10 kJ/kg si son equivalentes.\r
\r
## Errores matemáticos\r
\r
### Error 4: "Aplicar aditividad con referencias incompatibles"\r
\r
**Descripción.** Se suman energías internas o entropias calculadas con referencias distintas.\r
\r
**Por que parece correcto.** La formula de aditividad parece autorizar cualquier suma de valores.\r
\r
**Senal de deteccion.** Dos tablas o referencias de cero se mezclan sin conversion.\r
\r
**Correccion conceptual.** Las extensivas se suman si representan la misma magnitud con la misma referencia.\r
\r
**Mini-ejemplo de contraste.** No se suma una energía medida desde un cero arbitrario con otra definida desde un cero distinto sin ajustar referencias.\r
\r
## Errores de interpretacion\r
\r
### Error 5: "Comparar muestras por extensivas sin normalizar"\r
\r
**Descripción.** Se concluye que una muestra esta más caliente o es más energética por tener mayor [[U]] total.\r
\r
**Por que parece correcto.** Mayor energía total parece indicar mayor intensidad energética.\r
\r
**Senal de deteccion.** Una muestra grande se declara más caliente que una pequena solo por tener mayor energía interna.\r
\r
**Correccion conceptual.** Para comparar estados de muestras de distinto tamano hay que usar magnitudes normalizadas como [[x_esp]] o variables intensivas.\r
\r
**Mini-ejemplo de contraste.** Una piscina tibia puede tener más [[U]] total que una taza de cafe caliente, pero no esta a mayor temperatura.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de clasificar una magnitud, imagina dos copias identicas del sistema. Si el valor total se duplica, es extensiva. Si queda igual, probablemente es intensiva o normalizada. Si cambia de forma no lineal, revisa mezcla, superficie o interacciones.\r
`;export{e as default};
