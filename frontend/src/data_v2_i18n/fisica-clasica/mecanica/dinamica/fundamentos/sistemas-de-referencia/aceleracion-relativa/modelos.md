# Modelos fisicos: Aceleracion relativa

## Modelo ideal

El modelo ideal de este leaf describe dos sistemas de referencia en traslacion, A y B, sin rotacion relativa. El objetivo es interpretar como cambia la aceleracion observada cuando el observador cambia de marco.

En este modelo, la magnitud central es [[a_rel]], que relaciona la aceleracion absoluta de la particula vista desde un marco inercial, [[a_A]], con la aceleracion del observador o marco movil, [[a_B]]. El tiempo [[t]] se toma comun para ambos marcos en mecanica galileana.

El modelo ideal no intenta incluir relatividad especial, ni marcos con rotacion, ni acoplamientos inerciales avanzados. Su valor esta en capturar la regla estructural de composicion de aceleraciones en traslacion pura.

## Hipotesis

Hipotesis operativas:

1. Ambos marcos se relacionan por traslacion, sin rotacion relativa.
2. El regimen es clasico, muy por debajo de limites relativistas.
3. El tiempo [[t]] se mide de forma consistente para el intervalo analizado.
4. Las aceleraciones [[a_A]] y [[a_B]] se expresan en la misma convencion de ejes.
5. El ruido experimental es menor que la variacion de aceleracion que se desea detectar.

Si alguna hipotesis falla, la lectura simple de [[a_rel]] puede perder validez o exigir terminos adicionales.

## Dominio de validez cuantitativo

El modelo se considera confiable cuando se cumplen criterios explicitos:

1. Coherencia de composicion: residual = abs([[a_rel]] - [[a_A]] + [[a_B]]) <= 0.10 m/s^2.
2. Regimen clasico: velocidad_caracteristica <= 0.10*c.
3. Consistencia temporal: desfasaje de medicion <= 0.02 s en el intervalo de comparacion.

Criterio operacional adicional:

- error_relativo <= 10 por ciento para validar conclusiones de ingenieria basica.

Cuando conviene cambiar de modelo: si residual > 0.10 m/s^2 de forma sostenida, o si la relacion de marcos incluye rotacion relevante, se debe pasar a un modelo extendido con terminos no inerciales.

## Senales de fallo del modelo

Indicadores de salida de dominio:

1. [[a_rel]] no coincide con composicion esperada dentro de tolerancia.
2. Cambio de eje o de signo entre mediciones sin correccion explicita.
3. Uso de datos en regimen donde la aproximacion clasica deja de ser valida.
4. Mezcla de aceleraciones obtenidas con distinto filtrado temporal.

Estas senales no invalidan la fisica de base; indican que el mapeo experimental o el modelo elegido no es suficiente.

## Modelo extendido o alternativo

Si el marco observador acelera y rota, o si aparecen terminos de Coriolis y centrifugo, la descripcion debe escalar a formulacion no inercial completa. Si el problema entra en regimen relativista, debe abandonarse la suma galileana.

El modelo extendido agrega costo algebraico, pero evita interpretaciones erradas cuando la simplificacion original deja de representar el fenomeno dominante.

## Comparacion operativa

Modelo ideal:

- Rapido para diagnostico conceptual.
- Excelente para educacion y ensayos de traslacion.
- Requiere pocas magnitudes: [[a_rel]], [[a_A]], [[a_B]], [[t]].

Modelo extendido:

- Necesario con rotacion o regimen extremo.
- Mayor precision en escenarios complejos.
- Mayor costo de calibracion y validacion.

La practica correcta es elegir el modelo segun evidencia de validez, no por comodidad algebraica.
