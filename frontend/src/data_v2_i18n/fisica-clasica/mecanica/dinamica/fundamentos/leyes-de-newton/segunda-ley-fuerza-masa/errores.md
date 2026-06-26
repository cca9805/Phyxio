# Errores frecuentes: Segunda ley fuerza masa

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por que parece correcto**: se ve que el objeto se mueve y se asume que la velocidad es la causa directa de la fuerza.

**Senal de deteccion**: aparece la frase "si va rapido entonces hay mas fuerza" sin revisar la aceleracion.

**Mini-ejemplo de contraste**: dos autos pueden tener igual velocidad en autopista y fuerza neta casi nula si no cambian su estado.

**Correccion conceptual**: la segunda ley conecta [[F_net]] con [[a]], no con velocidad directa. El cambio de estado dinamico se diagnostica con aceleracion.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

**Por que parece correcto**: memorizar ecuacion da sensacion de control y rapidez.

**Senal de deteccion**: se sustituye en la ecuacion antes de definir sistema, ejes y marco.

**Mini-ejemplo de contraste**: un bloque en plano inclinado resuelto sin proyectar fuerzas por ejes produce signo errado en [[a_x]].

**Correccion conceptual**: el modelo requiere contexto fisico explicito para que [[F_net]], [[F_x]] y [[a_x]] tengan significado coherente.

### Error 3: Confundir magnitudes similares

**Por que parece correcto**: [[F_net]] se confunde con una fuerza individual y [[m]] se confunde con peso.

**Senal de deteccion**: se usa fuerza de una sola interaccion como si fuera resultante total.

**Mini-ejemplo de contraste**: en un carro con traccion y friccion, la fuerza de motor no es igual a [[F_net]] si hay resistencia significativa.

**Correccion conceptual**: [[F_net]] es suma vectorial externa, [[m]] es inercia y el peso es otra magnitud distinta con unidad N.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

**Por que parece correcto**: en problemas introductorios la ley basica funciona muy bien.

**Senal de deteccion**: desvio sistematico entre prediccion y medida mayor al umbral experimental.

**Mini-ejemplo de contraste**: en altas velocidades, resistencia del aire vuelve no lineal la respuesta y el modelo basico se queda corto.

**Correccion conceptual**: cuando aparecen efectos dominantes no modelados, hay que extender el modelo, no forzar la ecuacion simple.

### Error 5: Ignorar los límites del modelo conocidos

**Por que parece correcto**: se aprende la ley como universal sin condiciones.

**Senal de deteccion**: no se reportan supuestos de masa constante ni marco inercial.

**Mini-ejemplo de contraste**: cohete con masa variable no puede tratarse igual que bloque con masa fija.

**Correccion conceptual**: toda solucion debe declarar dominio de validez y criterios de salida de modelo.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por que parece correcto**: el despeje formal parece correcto en papel.

**Senal de deteccion**: resultado incompatible con signos de ejes o con tendencia observada.

**Mini-ejemplo de contraste**: usar [[F_x]] negativa y obtener [[a_x]] positiva por error de signos en el despeje.

**Correccion conceptual**: revisar signos, proyecciones y consistencia dimensional en cada paso.

### Error 7: Olvidar constantes fundamentales o unidades

**Por que parece correcto**: conversiones se consideran detalle secundario.

**Senal de deteccion**: saltos de orden de magnitud sin explicacion fisica.

**Mini-ejemplo de contraste**: introducir masa en gramos cuando la fuerza esta en N produce aceleracion cien o mil veces fuera de escala.

**Correccion conceptual**: convertir a SI al inicio y mantener control de unidades hasta el cierre.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

**Por que parece correcto**: muchos decimales parecen rigor.

**Senal de deteccion**: se reportan cuatro cifras cuando el sensor solo respalda una o dos.

**Mini-ejemplo de contraste**: expresar [[a]] con precision milimetrica en un ensayo con ruido alto.

**Correccion conceptual**: la precision final depende de incertidumbre experimental y de la calidad del modelo.

### Error 9: Saltarte la interpretación física del resultado calculado

**Por que parece correcto**: obtener un numero da sensacion de objetivo cumplido.

**Senal de deteccion**: la respuesta termina en cifra sin lectura causal sobre fuerza, masa y aceleracion.

**Mini-ejemplo de contraste**: calcular [[a]] y no explicar que variable deberia modificarse para cumplir un objetivo de control.

**Correccion conceptual**: cerrar siempre con una frase de causa y efecto que conecte [[F_net]], [[m]] y [[a]].

## Regla de autocontrol rápido

1. Sistema y ejes bien definidos.
2. [[F_net]] construida como suma externa real.
3. Coherencia entre forma vectorial y forma por componentes.
4. Unidades en SI y signos verificados.
5. Interpretacion causal final escrita.
