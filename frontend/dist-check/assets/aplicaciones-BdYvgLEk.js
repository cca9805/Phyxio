const e=`\uFEFF# Aplicaciones: Aceleracion relativa

## 1. Seguimiento de vehiculos en autopista

### Fenomeno

Un vehiculo B sigue a un vehiculo A en el mismo carril. Ambos pueden acelerar o desacelerar de forma independiente. El objetivo de control es anticipar riesgo de cierre de distancia.

### Que se conserva / que cambia

Se conserva la definicion cinematica de [[a_rel]] como diferencia entre [[a_A]] y [[a_B]] en el mismo eje. Cambia la lectura de riesgo segun la evolucion temporal de ambas aceleraciones y del horizonte [[t]].

### Magnitudes dominantes

[[a_rel]], [[a_A]], [[a_B]], [[t]].

### Escala tipica

En conduccion normal, aceleraciones longitudinales suelen estar entre -4 y +3 m/s^2 en maniobras comunes. El tiempo de reaccion efectivo de sistemas ADAS puede estar entre 0.2 s y 1.0 s.

Variable dominante: [[a_rel]] por su valor predictivo sobre tendencia de aproximacion.

Limite de validez: si hay cambio brusco de carril o dinamica lateral dominante, la lectura unidimensional deja de ser suficiente.

### Cierre operativo

Usar aceleracion relativa permite distinguir si la brecha se estabiliza o entra en regimen de riesgo, mejorando decisiones de par motor y frenado preventivo.

## 2. Ascensores y confort de pasajeros

### Fenomeno

Dentro de un ascensor, el pasajero actua como observador en marco acelerado. La sensacion de cambio dinamico depende de la aceleracion del marco respecto al edificio.

### Que se conserva / que cambia

Se conserva la estructura de composicion entre aceleracion del objeto y aceleracion del observador. Cambia la percepcion subjetiva cuando [[a_B]] del ascensor varia en arranque o frenado.

### Magnitudes dominantes

[[a_A]] del pasajero respecto al edificio, [[a_B]] del ascensor y [[a_rel]] observada internamente durante intervalos [[t]].

### Escala tipica

Aceleraciones de ascensor para confort suelen mantenerse alrededor de 0.5 a 1.0 m/s^2, con jerk controlado para evitar incomodidad.

Variable dominante: [[a_B]] del marco ascensor.

Limite de validez: vibraciones estructurales o flexion de cabina pueden introducir componentes no modeladas por traslacion ideal.

### Cierre operativo

La interpretacion de aceleracion relativa guia perfiles de control que priorizan confort sin perder eficiencia de traslado.

## 3. Robot movil y plataforma transportadora

### Fenomeno

Un robot se mueve sobre una cinta o plataforma que tambien acelera. El controlador debe separar dinamica propia del robot y dinamica del soporte.

### Que se conserva / que cambia

Se conserva la relacion entre [[a_rel]], [[a_A]] y [[a_B]]. Cambia el error de posicion si el controlador ignora la aceleracion del soporte.

### Magnitudes dominantes

[[a_rel]] para control relativo, [[a_B]] para compensacion de base y [[t]] como ventana de prediccion.

### Escala tipica

En lineas industriales ligeras, [[a_B]] puede variar entre 0.2 y 2.0 m/s^2, y errores de compensacion pueden crecer rapido en segundos.

Variable dominante: [[a_B]] cuando la base tiene aceleracion no despreciable.

Limite de validez: con oscilaciones o rotacion de la base, se requiere modelo no inercial extendido.

### Cierre operativo

La aceleracion relativa reduce error de seguimiento y evita sobrecorrecciones del actuador en entornos con base movil.

## 4. Ensayo experimental con sensores inerciales

### Fenomeno

Se instrumentan dos cuerpos con IMU para medir aceleraciones y evaluar consistencia de composicion en tiempo real.

### Que se conserva / que cambia

Se conserva la regla de diferencia de aceleraciones para obtener [[a_rel]]. Cambia la calidad del resultado segun sincronizacion temporal y filtrado de ruido.

### Magnitudes dominantes

[[a_A]], [[a_B]], [[a_rel]], [[t]].

### Escala tipica

Sensores MEMS comunes presentan ruido del orden de centesimas a decimas de m/s^2 segun frecuencia y filtro.

Variable dominante: incertidumbre de medicion frente al valor absoluto de [[a_rel]].

Limite de validez: si desfasaje temporal supera ventana de evento, la diferencia directa pierde validez fisica.

### Cierre operativo

La aplicacion entrena criterio metrologico: una ecuacion correcta requiere datos sincronizados para producir interpretacion correcta.

## 5. Sintesis para analisis y toma de decisiones

### Fenomeno

Muchos sistemas de control comparan dinamica de objeto y observador. La decision depende de si la aceleracion relativa favorece convergencia, estabilidad o riesgo.

### Que se conserva / que cambia

Se conserva el marco conceptual del leaf para traslacion galileana. Cambian los umbrales de accion segun dominio (automotriz, robotica, transporte, laboratorio).

### Magnitudes dominantes

[[a_rel]], [[a_A]], [[a_B]], [[t]].

### Escala tipica

Los umbrales practicos se fijan por seguridad y confort, por ejemplo bandas de aceleracion relativa aceptable y tiempos maximos de reaccion.

Variable dominante: [[a_rel]] como indicador de tendencia dinamica entre objeto y observador.

Limite de validez: si el escenario incluye rotacion relevante o regimen no clasico, debe emplearse un modelo extendido.

### Cierre operativo

La regla final es metodologica: interpretar aceleracion relativa exige separar claramente objeto, observador, ejes y dominio de validez. Ese orden evita errores de diseno y mejora trazabilidad tecnica.\r

## Nota de diferenciacion de dominio

Para reforzar la identidad de este leaf frente a otros temas de sistemas de referencia, conviene observar aplicaciones menos tipicas: acople ferroviario de baja velocidad, carros de inspeccion en tuneles de mantenimiento, puentes-grua con carro observador movil y plataformas de ensayo para bogies. En todos esos casos, la pregunta central no es solo "cuanto acelera un objeto", sino "como cambia la lectura de aceleracion cuando el observador tambien acelera".

Este foco operativo diferencia aceleracion relativa de introducciones generales a marcos inerciales o no inerciales. Aqui la variable de decision es [[a_rel]] como indicador de tendencia comparativa entre objeto y observador, util para diagnostico en ventanas cortas de [[t]] y para criterios de seguridad dinamica.\r
`;export{e as default};
