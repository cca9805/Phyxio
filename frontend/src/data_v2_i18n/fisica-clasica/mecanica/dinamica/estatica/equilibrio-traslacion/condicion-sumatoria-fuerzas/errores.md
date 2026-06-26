# Errores frecuentes: Condicion sumatoria fuerzas

## Errores conceptuales

### Error 1: Igualar equilibrio con ausencia de fuerzas

### Por qué parece correcto
En lenguaje cotidiano, "equilibrio" suena a "nada actua". Por eso muchos estudiantes esperan un diagrama vacio o casi vacio.

### Por que es incorrecto
En equilibrio traslacional puede haber varias fuerzas grandes. Lo que se anula es la suma vectorial, no cada fuerza por separado.

### Senal de deteccion
Si en tu desarrollo fuerzas no nulas desaparecen sin justificacion, probablemente confundiste ausencia con compensacion.

### Mini-ejemplo
Una caja en reposo sobre mesa tiene peso y normal no nulos, pero resultante vertical nula.

### Corrección conceptual
Piensa siempre en pares o sistemas de compensacion: peso con normal, o componentes de tensiones con el peso total.

### Error 2: Usar solo una componente para declarar equilibrio

### Por qué parece correcto
Muchos problemas se presentan con una direccion dominante, y eso induce a revisar solo eje x o solo eje y.

### Por que es incorrecto
En 2D debes cumplir simultaneamente sumFx = 0 y sumFy = 0. Cumplir una no garantiza la otra.

### Senal de deteccion
Revisa si escribiste dos ecuaciones independientes. Si solo hay una, falta una condicion de cierre.

### Mini-ejemplo
Si sumFx cierra pero queda componente vertical sin compensar, el cuerpo acelera en y.

### Corrección conceptual
Implementa un protocolo fijo: primero eje x, luego eje y, luego verificacion de consistencia global.

### Error 3: Mezclar masa [[m]] con fuerza [[F]]

### Por qué parece correcto
En el habla comun se dice "este objeto pesa 5 kilos", y eso mezcla unidades de masa con fuerza.

### Por que es incorrecto
La masa se mide en kg y la fuerza en N. No puedes sumar [[m]] con [[T]] ni con [[F]] sin convertir.

### Senal de deteccion
Haz control dimensional en cada ecuacion. Si aparecen terminos kg + N, hay error inmediato.

### Mini-ejemplo
Escribir [[T]] + [[m]] en una misma ecuacion produce mezcla de unidades incompatibles.

### Corrección conceptual
Convierte siempre masa a peso antes de sumar fuerzas. Mantener SI limpio evita errores de orden de magnitud.

## Errores de modelo

### Error 4: Signos inconsistentes en descomposición angular

### Por qué parece correcto
El seno y coseno se recuerdan de memoria, pero muchas veces sin fijar desde donde se mide [[theta]].

### Por que es incorrecto
El signo de cada componente depende del cuadrante y del convenio de ejes. Un signo mal puesto rompe el balance.

### Senal de deteccion
Comprueba si al cambiar ligeramente [[theta]] tu resultado cambia en direccion absurda. Es una alarma tipica de signo.

### Mini-ejemplo
Al aumentar [[theta]], la componente vertical deberia crecer; si decrece, el signo probablemente esta invertido.

### Corrección conceptual
Declara referencia angular al inicio y dibuja flechas de componente antes de escribir algebra.

### Error 5: Aceptar tensiones negativas en cuerdas ideales

### Por qué parece correcto
Como el algebra "cerró", parece tentador aceptar cualquier numero final.

### Por que es incorrecto
Una cuerda ideal no empuja; solo tracciona. Tension negativa indica hipotesis o signos incorrectos.

### Senal de deteccion
Si [[T]] < 0 tras despejar, revisa orientaciones asumidas y ecuaciones por eje.

### Mini-ejemplo
Si calculas [[T]] negativa en una eslinga, el problema suele estar en la direccion elegida para la tension.

### Corrección conceptual
Replantea direcciones de fuerza y vuelve a resolver. El objetivo no es forzar el numero, sino restaurar coherencia fisica.

### Error 6: Olvidar la tolerancia experimental al evaluar [[R]]

### Por qué parece correcto
El criterio teorico dice [[R]] = 0 y parece razonable exigir cero absoluto en calculadora.

### Por que es incorrecto
En mediciones reales hay ruido, redondeo e incertidumbre angular. Exigir cero exacto puede llevar a diagnosticos falsos.

### Senal de deteccion
Si tu residuo es pequeno pero no nulo, compara con una banda de tolerancia antes de descartar el modelo.

### Mini-ejemplo
Un residuo de 0.5 N puede ser aceptable si las fuerzas principales rondan 300 N.

### Corrección conceptual
Usa criterio operativo: abs(sumFx) y abs(sumFy) deben ser pequenos respecto de una fuerza de referencia del sistema.

## Errores matemáticos

### Error 7: Concluir equilibrio total sin revisar rotación

### Por qué parece correcto
Este leaf enfatiza sumatoria de fuerzas, por lo que es facil olvidar otros criterios de estatica.

### Por que es incorrecto
Un cuerpo extendido puede cumplir sumF = 0 y aun asi girar si la sumatoria de momentos no es cero.

### Senal de deteccion
Si el problema involucra barras, placas o apoyos separados, pregunta explicitamente por torque neto.

### Mini-ejemplo
Una regla apoyada en dos puntos puede no trasladarse y aun asi empezar a rotar.

### Corrección conceptual
Distingue equilibrio traslacional de equilibrio rotacional. Usa el leaf de momentos cuando corresponda.

## Errores de interpretación

### Error 8: Extrapolar fuera del dominio de validez

### Por qué parece correcto
Una vez aprendido un metodo, es natural querer usarlo en todo contexto.

### Por que es incorrecto
Si hay friccion fuerte, aceleracion o efectos dinamicos dominantes, el modelo de equilibrio simple pierde capacidad explicativa.

### Senal de deteccion
Mira residuales sistematicos y contradicciones experimentales repetidas.

### Mini-ejemplo
Si siempre aparece residuo horizontal en la misma direccion, probablemente falta modelar friccion.

### Corrección conceptual
Cuando conviene cambiar de modelo, cambia sin forzar resultados: incorpora friccion, momentos o dinamica segun el caso.

### Error 9: Entregar solo números sin interpretación física

### Por qué parece correcto
En evaluaciones rapidas, llegar a un valor numerico parece suficiente.

### Por que es incorrecto
Sin interpretacion no sabes si el resultado tiene sentido causal, de escala y de signo.

### Senal de deteccion
Si no puedes explicar que fuerza compensa a cual y por que, tu solucion esta incompleta.

### Mini-ejemplo
Reportar solo "[[T]] = valor" sin describir compensacion vertical deja la conclusion fisica incompleta.

### Corrección conceptual
Cierra cada ejercicio con tres frases: estado del sistema, mecanismo dominante y limite de validez del resultado.

## Regla de autocontrol rápido

1. Verifica unidades en cada ecuacion de eje.
2. Revisa signo y direccion de cada componente.
3. Comprueba que las dos sumatorias cierran dentro de tolerancia.
4. Evalua si el problema exige tambien balance de momentos.
5. Explica fisicamente el resultado antes de darlo por final.

Aplicar esta rutina reduce la mayoria de errores recurrentes en equilibrio traslacional.
