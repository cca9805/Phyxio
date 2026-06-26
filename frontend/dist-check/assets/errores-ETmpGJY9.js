const e=`# Errores frecuentes: Segunda ley fuerza masa\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
**Por que parece correcto**: se ve que el objeto se mueve y se asume que la velocidad es la causa directa de la fuerza.\r
\r
**Senal de deteccion**: aparece la frase "si va rapido entonces hay mas fuerza" sin revisar la aceleracion.\r
\r
**Mini-ejemplo de contraste**: dos autos pueden tener igual velocidad en autopista y fuerza neta casi nula si no cambian su estado.\r
\r
**Correccion conceptual**: la segunda ley conecta [[F_net]] con [[a]], no con velocidad directa. El cambio de estado dinamico se diagnostica con aceleracion.\r
\r
### Error 2: Aplicar la formula mecanicamente sin validar el contexto\r
\r
**Por que parece correcto**: memorizar ecuacion da sensacion de control y rapidez.\r
\r
**Senal de deteccion**: se sustituye en la ecuacion antes de definir sistema, ejes y marco.\r
\r
**Mini-ejemplo de contraste**: un bloque en plano inclinado resuelto sin proyectar fuerzas por ejes produce signo errado en [[a_x]].\r
\r
**Correccion conceptual**: el modelo requiere contexto fisico explicito para que [[F_net]], [[F_x]] y [[a_x]] tengan significado coherente.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
**Por que parece correcto**: [[F_net]] se confunde con una fuerza individual y [[m]] se confunde con peso.\r
\r
**Senal de deteccion**: se usa fuerza de una sola interaccion como si fuera resultante total.\r
\r
**Mini-ejemplo de contraste**: en un carro con traccion y friccion, la fuerza de motor no es igual a [[F_net]] si hay resistencia significativa.\r
\r
**Correccion conceptual**: [[F_net]] es suma vectorial externa, [[m]] es inercia y el peso es otra magnitud distinta con unidad N.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
**Por que parece correcto**: en problemas introductorios la ley basica funciona muy bien.\r
\r
**Senal de deteccion**: desvio sistematico entre prediccion y medida mayor al umbral experimental.\r
\r
**Mini-ejemplo de contraste**: en altas velocidades, resistencia del aire vuelve no lineal la respuesta y el modelo basico se queda corto.\r
\r
**Correccion conceptual**: cuando aparecen efectos dominantes no modelados, hay que extender el modelo, no forzar la ecuacion simple.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
**Por que parece correcto**: se aprende la ley como universal sin condiciones.\r
\r
**Senal de deteccion**: no se reportan supuestos de masa constante ni marco inercial.\r
\r
**Mini-ejemplo de contraste**: cohete con masa variable no puede tratarse igual que bloque con masa fija.\r
\r
**Correccion conceptual**: toda solucion debe declarar dominio de validez y criterios de salida de modelo.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
**Por que parece correcto**: el despeje formal parece correcto en papel.\r
\r
**Senal de deteccion**: resultado incompatible con signos de ejes o con tendencia observada.\r
\r
**Mini-ejemplo de contraste**: usar [[F_x]] negativa y obtener [[a_x]] positiva por error de signos en el despeje.\r
\r
**Correccion conceptual**: revisar signos, proyecciones y consistencia dimensional en cada paso.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
**Por que parece correcto**: conversiones se consideran detalle secundario.\r
\r
**Senal de deteccion**: saltos de orden de magnitud sin explicacion fisica.\r
\r
**Mini-ejemplo de contraste**: introducir masa en gramos cuando la fuerza esta en N produce aceleracion cien o mil veces fuera de escala.\r
\r
**Correccion conceptual**: convertir a SI al inicio y mantener control de unidades hasta el cierre.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
**Por que parece correcto**: muchos decimales parecen rigor.\r
\r
**Senal de deteccion**: se reportan cuatro cifras cuando el sensor solo respalda una o dos.\r
\r
**Mini-ejemplo de contraste**: expresar [[a]] con precision milimetrica en un ensayo con ruido alto.\r
\r
**Correccion conceptual**: la precision final depende de incertidumbre experimental y de la calidad del modelo.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
**Por que parece correcto**: obtener un numero da sensacion de objetivo cumplido.\r
\r
**Senal de deteccion**: la respuesta termina en cifra sin lectura causal sobre fuerza, masa y aceleracion.\r
\r
**Mini-ejemplo de contraste**: calcular [[a]] y no explicar que variable deberia modificarse para cumplir un objetivo de control.\r
\r
**Correccion conceptual**: cerrar siempre con una frase de causa y efecto que conecte [[F_net]], [[m]] y [[a]].\r
\r
## Regla de autocontrol rápido\r
\r
1. Sistema y ejes bien definidos.\r
2. [[F_net]] construida como suma externa real.\r
3. Coherencia entre forma vectorial y forma por componentes.\r
4. Unidades en SI y signos verificados.\r
5. Interpretacion causal final escrita.\r
`;export{e as default};
