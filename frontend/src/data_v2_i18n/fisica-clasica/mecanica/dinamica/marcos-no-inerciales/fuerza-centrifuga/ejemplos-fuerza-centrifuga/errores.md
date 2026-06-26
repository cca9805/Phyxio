# Errores frecuentes: Ejemplos fuerza centrifuga

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto

En una plataforma que gira, la sensacion de empuje hacia afuera es muy evidente y puede parecer una causa primaria.

#### por que es incorrecto

La lectura de [[F_cf]] depende del marco no inercial adoptado y de como se formula el problema. Sin marco declarado, la interpretacion pierde sentido fisico.

#### senal de deteccion

La solucion presenta un numero para [[F_cf]] pero no explica en que marco esta interpretando el resultado.

#### correccion conceptual

Declara primero el marco, luego la ecuacion, y finalmente la interpretacion causal del resultado.

#### mini-ejemplo

Dos alumnos usan el mismo valor de [[omega]] y obtienen conclusiones opuestas sobre estabilidad porque no declararon el mismo marco.

### Error 2: Sustituir [[rpm]] sin convertir a [[omega]]

#### por que parece correcto

Los equipos muestran velocidad en [[rpm]], por lo que parece natural usar ese numero directamente en cualquier ecuacion.

#### por que es incorrecto

Las relaciones base del leaf operan en SI con [[omega]] en rad/s. Omitir la conversion introduce un factor de escala incorrecto.

#### senal de deteccion

Aparecen valores de [[F_cf]] demasiado grandes o demasiado pequenos frente a ordenes de magnitud esperados.

#### correccion conceptual

Convierte siempre [[rpm]] antes de calcular y deja el paso escrito en la resolucion.

#### mini-ejemplo

Usar 300 como si fuera rad/s en lugar de convertir 300 [[rpm]] puede inflar la carga de forma drastica.

### Error 3: Confundir [[omega1]], [[omega2]] y [[ratio]]

#### por que parece correcto

En comparaciones de dos estados, los simbolos son parecidos y se pueden intercambiar por distraccion.

#### por que es incorrecto

Si se invierte estado inicial y final, la lectura del cambio relativo se interpreta al reves y la decision operativa se vuelve equivocada.

#### senal de deteccion

El informe afirma aumento de velocidad, pero el [[ratio]] calculado sugiere reduccion de demanda.

#### correccion conceptual

Etiqueta explicitamente cada estado y verifica consistencia entre narrativa y resultado numerico.

#### mini-ejemplo

Si [[omega2]] es mayor que [[omega1]], el [[ratio]] no puede quedar menor que uno bajo el modelo del leaf.

## Errores de modelo

### Error 4: Mantener el modelo simple durante transitorios fuertes

#### por que parece correcto

El modelo compacto suele funcionar bien en ensayos estables y se extrapola por costumbre.

#### por que es incorrecto

Durante arranques bruscos o vibraciones intensas, aparecen efectos no representados por la aproximacion basica.

#### senal de deteccion

La diferencia entre prediccion y medicion supera de forma repetida un margen razonable.

#### correccion conceptual

Usa el modelo simple como base y activa modelo extendido cuando los sintomas de fallo persistan.

#### mini-ejemplo

Un banco de prueba coincide en regimen constante, pero falla en arranque por picos no modelados.

### Error 5: Asumir [[r]] constante sin verificar

#### por que parece correcto

En problemas de aula, el radio suele tratarse como fijo y exacto.

#### por que es incorrecto

En equipos reales, deformacion, juego mecanico o desplazamiento cambian radio efectivo y alteran [[F_cf]].

#### senal de deteccion

Con igual [[rpm]], se observan cargas diferentes entre corridas nominalmente identicas.

#### correccion conceptual

Validar radio bajo carga y revisar montaje antes de aceptar desviaciones como ruido.

#### mini-ejemplo

Una pequena variacion de [[r]] en rotor flexible cambia la demanda radial mas de lo esperado por el operador.

## Errores matematicos

### Error 6: Invertir terminos en comparacion de estados

#### por que parece correcto

La expresion de comparacion parece simple y se realiza rapido sin revisar orden.

#### por que es incorrecto

Invertir el cociente invierte interpretacion del cambio y puede llevar a decisiones opuestas.

#### senal de deteccion

Se reporta incremento de velocidad con resultado relativo menor que uno.

#### correccion conceptual

Escribir el cociente simbolico antes de sustituir y comprobar coherencia con el relato fisico.

#### mini-ejemplo

Si la velocidad final sube 20 por ciento, un resultado relativo menor que uno indica error de orden.

### Error 7: Ignorar chequeo dimensional

#### por que parece correcto

Una calculadora siempre entrega un numero y eso puede generar falsa confianza.

#### por que es incorrecto

Numero sin consistencia de unidades no representa un resultado fisico util.

#### senal de deteccion

La salida no coincide con unidad esperada para [[F_cf]], [[omega]] o [[v]].

#### correccion conceptual

Verificar unidades en cada paso clave y no solo al final.

#### mini-ejemplo

Si la conversion de [[rpm]] se omite, la unidad final parece correcta pero el valor fisico queda desplazado.

## Errores de interpretacion

### Error 8: Quedarse solo con el numero

#### por que parece correcto

Completar la cuenta da sensacion de tarea terminada.

#### por que es incorrecto

Sin lectura causal, no se identifica que variable domina ni como prevenir fallo en operacion.

#### senal de deteccion

El reporte incluye resultados pero no concluye sobre riesgo, control o limite de validez.

#### correccion conceptual

Cerrar cada solucion con una frase causal sobre mecanismo, sensibilidad y decision tecnica.

#### mini-ejemplo

Informar [[F_cf]] sin discutir sensibilidad a [[omega]] deja incompleta la recomendacion de operacion.

### Error 9: Sobreestimar precision del modelo ideal

#### por que parece correcto

Mas decimales parecen indicar mayor calidad de calculo.

#### por que es incorrecto

La incertidumbre del modelo y de medicion limita precision util para decisiones.

#### senal de deteccion

Se reportan muchas cifras significativas sin margen de error ni contexto de validez.

#### correccion conceptual

Ajustar precision reportada a la calidad de datos y al dominio del modelo.

#### mini-ejemplo

Mostrar cuatro decimales de carga no mejora decision si la variacion experimental supera ese nivel.

## Regla de autocontrol rapido

Antes de cerrar un ejercicio, confirma cinco puntos: conversion correcta de [[rpm]] a [[omega]], coherencia entre [[omega1]], [[omega2]] y [[ratio]], chequeo dimensional de [[F_cf]], declaracion del marco de interpretacion y conclusion causal ligada a limite de validez. Si uno falla, revisa antes de decidir.
