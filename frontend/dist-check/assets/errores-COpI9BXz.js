const e=`# Errores frecuentes en el oscilador masa muelle\r
\r
## Errores conceptuales\r
\r
### Error 1: asumir que una sola magnitud explica todo el movimiento\r
Por que parece correcto: el estudiante ve una variacion clara de [[m]] o [[k]] y concluye que esa variable domina siempre.\r
Senal de deteccion: al pedir una prediccion de [[T]] o [[f]], la explicacion ignora el papel conjunto de inercia y rigidez.\r
Mini-ejemplo de contraste: dos sistemas con misma [[m]] pero distinto [[k]] muestran ritmos diferentes.\r
Correccion conceptual: interpreta el modelo como acoplamiento entre [[m]] y [[k]], no como dependencia de una sola entrada.\r
\r
### Error 2: confundir pasar por equilibrio con detenerse\r
Por que parece correcto: en el punto medio de la trayectoria la fuerza restauradora parece pequena.\r
Senal de deteccion: se afirma que cuando [[x]] vale cero tambien la velocidad es cero.\r
Mini-ejemplo de contraste: en movimiento armonico ideal, el cruce por equilibrio coincide con rapidez maxima.\r
Correccion conceptual: separa posicion de estado dinamico; [[x]] igual a cero no implica reposo.\r
\r
## Errores de modelo\r
\r
### Error 3: aplicar modelo ideal fuera de su rango\r
Por que parece correcto: el calculo cierra numericamente y produce resultados limpios.\r
Senal de deteccion: la amplitud medida cae ciclo a ciclo y aun asi se mantiene modelo sin disipacion.\r
Mini-ejemplo de contraste: si [[A]] decrece de forma sostenida, hay perdida energetica relevante.\r
Correccion conceptual: cuando conviene cambiar de modelo: si el error relativo sostenido es > 10 por ciento y el patron no parece ruido, introduce amortiguamiento.\r
\r
### Error 4: usar rigidez constante en zona no lineal\r
Por que parece correcto: se dispone de un valor nominal de catalogo para [[k]].\r
Senal de deteccion: el periodo [[T]] cambia con amplitud en porcentaje alto.\r
Mini-ejemplo de contraste: con deformaciones grandes, la curva fuerza-desplazamiento deja de ser lineal.\r
Correccion conceptual: limita el analisis al rango elastico o adopta una ley no lineal calibrada.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades de forma silenciosa\r
Por que parece correcto: los numeros parecen razonables a simple vista.\r
Senal de deteccion: [[f]] y [[T]] no cumplen reciprocidad aproximada.\r
Mini-ejemplo de contraste: introducir gramos como si fueran kilogramos desplaza escala temporal de forma grande.\r
Correccion conceptual: convierte todo a SI antes de sustituir y valida orden de magnitud final.\r
\r
### Error 6: perder significado del signo en la fuerza\r
Por que parece correcto: trabajar con modulos evita signos negativos en cuentas.\r
Senal de deteccion: se calcula [[F]] siempre positiva aunque [[x]] cambie de signo.\r
Mini-ejemplo de contraste: en retorno estable, fuerza y desplazamiento deben tener signo opuesto.\r
Correccion conceptual: conserva convencion de eje desde el inicio y revisa direccion de cada termino.\r
\r
## Errores de interpretación\r
\r
### Error 7: cerrar con resultado numerico sin lectura fisica\r
Por que parece correcto: se obtuvo una cifra con unidades correctas.\r
Senal de deteccion: no se puede responder que parametro conviene ajustar para cambiar comportamiento.\r
Mini-ejemplo de contraste: saber [[omega0]] sin interpretar sensibilidad a [[m]] y [[k]] limita utilidad de diseno.\r
Correccion conceptual: añade siempre una conclusion causal explicita sobre que variable domina y por que.\r
\r
### Error 8: interpretar fase como detalle irrelevante\r
Por que parece correcto: el valor de [[phi]] no altera [[omega0]].\r
Senal de deteccion: teoria y experimento se comparan desalineados en tiempo y se declara fallo del modelo.\r
Mini-ejemplo de contraste: cambiar referencia temporal [[t]] modifica el arranque aparente de la senal.\r
Correccion conceptual: sincroniza condicion inicial y fase antes de evaluar discrepancias fisicas.\r
\r
## Regla de autocontrol rápido\r
\r
1. Identifica objetivo: calcular [[omega0]], [[T]], [[f]], [[x]] o interpretar [[F]].\r
2. Verifica supuestos minimos: linealidad, rango de amplitud y coherencia de unidades.\r
3. Ejecuta chequeo de reciprocidad entre [[f]] y [[T]] y compara con orden de magnitud esperado.\r
4. Revisa signos entre [[x]] y [[F]] para confirmar retorno al equilibrio.\r
5. Cierra con una frase causal: que parametro deberia cambiar si quieres mover el comportamiento del sistema.\r
`;export{e as default};
