# Errores frecuentes: Interpretacion

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
Las ecuaciones muestran muchas magnitudes y da la impresion de que todas son causas materiales del mismo tipo.

#### Por que es incorrecto
[[F_fict]] no es una interaccion material adicional. Es una correccion de marco asociada a [[a_marco]].

#### Senal de deteccion
El analisis describe [[F_fict]] como si fuera una fuerza real de contacto o de campo.

#### Correccion conceptual
Declarar marco de observacion antes de interpretar resultados.

#### Mini-ejemplo
Si dos observadores usan marcos distintos, pueden obtener lecturas distintas de aceleracion sin contradiccion fisica.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto
El numero sale rapido y parece cerrar el ejercicio.

#### Por que es incorrecto
Sin criterio de validez, una cuenta correcta puede sustentar una decision equivocada.

#### Senal de deteccion
Se reporta [[a_rel]] sin umbral de residuo ni comentario de marco.

#### Correccion conceptual
Incluir siempre limite de validez y criterio de escalado.

#### Mini-ejemplo
Un resultado estable en un tramo no garantiza validez en un transitorio fuerte.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[a_in]] y [[a_rel]] son aceleraciones y en algunos casos numericamente cercanas.

#### Por que es incorrecto
Representan observadores distintos y no son intercambiables cuando [[a_marco]] no es cero.

#### Senal de deteccion
El informe usa [[a_in]] y [[a_rel]] como sinonimos.

#### Correccion conceptual
Explicitar siempre la relacion entre ambas con [[a_marco]].

#### Mini-ejemplo
Con [[a_marco]] distinta de cero, asumir [[a_in]] igual a [[a_rel]] genera diagnostico falso.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto
El modelo simple funciono en ejemplos previos.

#### Por que es incorrecto
Fuera de regimen, la interpretacion pierde fiabilidad aunque la cuenta sea limpia.

#### Senal de deteccion
Residuo persistente mayor a 10 por ciento.

#### Correccion conceptual
Escalar modelo cuando el indicador de fallo se repite.

#### Mini-ejemplo
Mantener esquema escalar en regimen multieje lleva a acciones inestables.

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto
El resultado parece razonable en orden de magnitud.

#### Por que es incorrecto
Plausibilidad numerica no equivale a validez de hipotesis.

#### Senal de deteccion
No se documenta limite de validez junto al resultado.

#### Correccion conceptual
Adjuntar rango de uso y condicion de descarte en cada reporte.

#### Mini-ejemplo
Mismo valor puede ser valido en fase estable e invalido en fase transitoria.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
Las operaciones parecen rutinarias.

#### Por que es incorrecto
Un signo mal puesto cambia lectura causal y decision final.

#### Senal de deteccion
Narrativa fisica contradice tendencia del resultado.

#### Correccion conceptual
Verificar signo y unidad en cada paso intermedio.

#### Mini-ejemplo
Perder un signo en [[F_fict]] invierte conclusion de estabilidad.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto
Se deja conversion de unidades para el final.

#### Por que es incorrecto
La interpretacion entre escenarios se vuelve incoherente.

#### Senal de deteccion
Dos rutas equivalentes dan escalas incompatibles.

#### Correccion conceptual
Normalizar unidades al inicio y registrar conversiones.

#### Mini-ejemplo
Unidad incorrecta en [[a_marco]] distorsiona directamente [[F_fict]].

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### Por que parece correcto
Muchos decimales transmiten exactitud.

#### Por que es incorrecto
La precision real depende de supuestos y calidad de datos.

#### Senal de deteccion
Se reportan decimales finos sin contexto de incertidumbre.

#### Correccion conceptual
Ajustar cifras significativas al nivel de confianza.

#### Mini-ejemplo
Cuatro decimales no mejoran una decision con umbral grueso.

### Error 9: Saltarte la interpretación física del resultado calculado

#### Por que parece correcto
Obtener el valor parece suficiente.

#### Por que es incorrecto
Sin lectura causal, no hay decision confiable.

#### Senal de deteccion
El reporte termina en formula y no explica accion.

#### Correccion conceptual
Cerrar con causa, limite y accion recomendada.

#### Mini-ejemplo
Mismo modulo de resultado puede implicar acciones opuestas segun contexto de [[F_res]].

## Regla de autocontrol rápido

1. ¿Se declaro marco y eje?
2. ¿Se separo [[F_res]] de [[F_fict]]?
3. ¿Se distinguio [[a_rel]] de [[a_in]] usando [[a_marco]]?
4. ¿Se validaron signo y unidad?
5. ¿Se explico decision final?
