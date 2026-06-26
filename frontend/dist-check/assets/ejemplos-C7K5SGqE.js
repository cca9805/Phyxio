const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Un laboratorio evalua un carro de prueba sobre una base acelerada. El equipo debe interpretar resultados desde el marco de la base y desde un marco inercial para decidir si una desviacion observada proviene de interacciones reales o de mezcla de marcos. Se pide estimar [[F_fict]], interpretar [[a_rel]], reconstruir [[a_in]] y justificar la coherencia causal de la conclusion.

## Datos

- [[m]] = 15 kg
- [[a_marco]] = 1.4 m/s^2
- [[F_res]] = -9 N
- Eje positivo definido en sentido de avance de la base
- Ventana de analisis con [[a_marco]] aproximadamente estable

## Definición del sistema

Sistema: carro tratado como particula en 1D dentro de marco no inercial translacional.

Magnitudes nucleares usadas: [[m]], [[a_marco]], [[F_fict]], [[F_res]], [[a_rel]], [[a_in]].

Objetivo: interpretar correctamente lectura de aceleraciones y evitar mezcla de marcos.

## Modelo físico

Modelo: interpretacion escalar por eje con validacion cruzada entre lectura no inercial e inercial.

Formulas nucleares usadas:

{{f:fuerza_ficticia_interpretacion}}

{{f:equivalencia_dinamica}}

{{f:transformacion_aceleraciones}}

{{f:criterio_de_marco_conceptual}}

## Justificación del modelo

La tarea es interpretativa y de primer orden: distinguir origen de la desviacion observada. El marco de la base tiene [[a_marco]] no nula y estable en la ventana, por lo que incluir [[F_fict]] es fisicamente obligatorio para lectura interna coherente.

Tambien se exige reconstruccion hacia marco inercial, por lo que la cadena [[a_rel]] a [[a_in]] es necesaria. El modelo es adecuado porque declara supuestos, permite chequeo de signos y ofrece criterio de descarte si el residuo supera el umbral operativo.

## Resolución simbólica

Paso 1: estimar [[F_fict]] desde [[m]] y [[a_marco]].

{{f:fuerza_ficticia_interpretacion}}

Paso 2: estimar [[a_rel]] con balance no inercial.

{{f:equivalencia_dinamica}}

Paso 3: reconstruir [[a_in]] para contraste inercial.

{{f:transformacion_aceleraciones}}

Paso 4: verificar consistencia inercial conceptual.

{{f:criterio_de_marco_conceptual}}

## Sustitución numérica

Con [[m]] = 15 y [[a_marco]] = 1.4, se obtiene [[F_fict]] aproximada de -21 N.

Con [[F_res]] = -9 N y [[F_fict]] = -21 N, la suma no inercial es -30 N y [[a_rel]] queda cerca de -2.0 m/s^2.

Con [[a_in]] = [[a_rel]] + [[a_marco]], resulta [[a_in]] alrededor de -0.6 m/s^2.

## Validación dimensional

- [[F_fict]] en N al multiplicar [[m]] por [[a_marco]].
- [[a_rel]] y [[a_in]] en m/s^2.
- Coherencia de signo entre narrativa y salida numerica.

Chequeos:
- Si [[a_marco]] sube, debe subir el modulo de [[F_fict]].
- Si [[F_res]] invierte signo, debe cambiar tendencia de [[a_rel]].

## Interpretación física

La conclusion principal no es numerica sino causal: la desviacion observada en la base no implica una interaccion real nueva. Implica una correccion de referencia asociada a [[a_marco]].

[[F_res]] conserva significado de fuerza real, mientras [[F_fict]] expresa ajuste de marco. La diferencia entre [[a_rel]] y [[a_in]] confirma continuidad con teoria: distintos observadores describen el mismo evento con ecuaciones distintas pero compatibles.

Interpretacion de decision: para control interno de la base, [[a_rel]] puede ser variable principal. Para auditoria externa y validacion de modelo, [[a_in]] es mas adecuada. Esta dualidad es precisamente el nucleo interpretativo del leaf.

Interpretacion de regimen: si en repeticiones sucesivas el residuo entre tendencia observada y tendencia esperada supera de manera consistente el umbral operacional, la lectura correcta no es insistir con el mismo esquema. La lectura correcta es reconocer que el modelo de interpretacion de primer orden ya no alcanza para la decision buscada.

Interpretacion de transferencia: la misma logica aplicada aqui debe sostenerse en escenarios distintos. Si en un nuevo caso la narrativa causal cambia sin razon fisica, es señal de que se mezclaron marcos o convenciones.

# Ejemplo de aplicación real

## Contexto

En una linea automatizada, una plataforma movil transporta piezas sensibles. El sistema de control detecta desviaciones y debe decidir si ajustar actuadores o corregir sesgo de marco.

## Estimación física

En una fase estable, [[a_marco]] ronda 1.0 m/s^2 y [[m]] del conjunto movil es 20 kg, dando [[F_fict]] de orden 20 N. Si [[F_res]] real por actuacion y friccion ronda -8 N, la lectura de [[a_rel]] puede diferir de [[a_in]] lo suficiente para inducir decisiones distintas segun el marco adoptado.

## Interpretación

La aplicacion muestra el valor practico del leaf: separar causa de referencia y causa material antes de actuar. Si se ignora esa separacion, el sistema sobrecompensa. Si se respeta, la decision gana trazabilidad y se reduce error operativo.

Esta continuidad con teoria e interpretacion.yaml se ve en la secuencia [[a_marco]] -> [[F_fict]] -> [[a_rel]] -> [[a_in]], que conecta calculo, lectura causal y accion tecnica.

Desde una perspectiva operativa, este ejemplo enseña una regla de orden: primero atribuir causa, luego cuantificar, despues decidir. Invertir ese orden produce soluciones numericamente limpias pero fisicamente fragiles.

Tambien enseña una regla de comunicacion: cada resultado debe ir acompañado de marco declarado, limite de validez y accion propuesta. Sin esos tres elementos, la interpretacion queda incompleta aunque el numero sea correcto.

## Nota de cierre didáctico

El valor de estos ejemplos no esta en el numero puntual, sino en la secuencia de razonamiento reproducible. Si otro equipo toma los mismos supuestos, deberia llegar a conclusiones compatibles. Esa reproducibilidad es el indicador de interpretacion robusta.

Ademas, cada ejemplo entrena una habilidad distinta: separar marcos, validar coherencia, y decidir cambio de modelo. Juntas, esas habilidades reducen errores de diagnostico en problemas reales.
`;export{e as default};
