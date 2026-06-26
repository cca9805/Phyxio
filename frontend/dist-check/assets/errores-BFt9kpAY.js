const e=`\uFEFF# Frequent mistakes: Definicion fuerza coriolis

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
La ecuacion tiene varias magnitudes y parece natural pensar que todas "empujan" igual.

#### Por que es incorrecto
En este leaf, la fuerza de Coriolis se interpreta dentro de un marco rotatorio; no es una causa independiente fuera del marco.

#### Senal de deteccion
La explicacion afirma que [[F_cor]] existe "por si sola" sin declarar sistema de referencia.

#### Correccion conceptual
Explicitar siempre el marco rotatorio y distinguir representacion de marco frente a interacciones externas.

#### Mini-ejemplo
Dos observadores con marcos distintos describen el mismo movimiento con terminos distintos; eso no implica dos fisicas diferentes.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto
La formula devuelve un numero rapido y parece suficiente.

#### Por que es incorrecto
Sin revisar supuestos de regimen, estabilidad de entradas y objetivo fisico, el numero puede no ser util.

#### Senal de deteccion
Se reporta [[a_cor]] o [[F_cor]] sin mencionar dominio de validez.

#### Correccion conceptual
Antes de sustituir, declarar hipotesis y umbral de decision del problema.

#### Mini-ejemplo
Un resultado correcto en algebra puede ser inutil si se usa para decidir direccion sin analisis vectorial.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[omega]], [[v_rel]] y [[alpha]] aparecen juntos y pueden verse como "parametros equivalentes".

#### Por que es incorrecto
Cumplen roles distintos: rotacion, velocidad relativa y geometria. No son intercambiables.

#### Senal de deteccion
Cambiar [[m]] y esperar cambio en [[a_cor]], o cambiar [[alpha]] y esperar efecto nulo siempre.

#### Correccion conceptual
Mantener trazabilidad de rol fisico de cada magnitud durante todo el procedimiento.

#### Mini-ejemplo
Dos casos con igual [[v_rel]] pueden dar distinta respuesta por cambio de [[alpha]].

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto
El modelo escalar funciona en ejercicios introductorios y parece universal.

#### Por que es incorrecto
Fuera de regimen, la direccion y otros acoples se vuelven relevantes y el modulo ya no alcanza.

#### Senal de deteccion
Discrepancia repetida superior a 10% entre tendencia observada y prediccion.

#### Correccion conceptual
Escalar a formulacion vectorial o modelo extendido cuando el indicador de fallo sea persistente.

#### Mini-ejemplo
Un control que solo usa modulo no corrige bien cuando la orientacion cambia rapidamente.

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto
El resultado parece razonable y coincide en orden de magnitud con casos previos.

#### Por que es incorrecto
La similitud numerica no garantiza validez fisica del nuevo contexto.

#### Senal de deteccion
No se documenta criterio de descarte ni rango de uso.

#### Correccion conceptual
Incluir siempre limite de aplicacion junto con el valor calculado.

#### Mini-ejemplo
Reusar el mismo esquema en un escenario con fuerte variacion geometrica produce conclusiones fragiles.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
El despeje parece trivial y se hace de memoria.

#### Por que es incorrecto
Un error pequeno cambia sensibilidad y puede invertir interpretacion de relevancia.

#### Senal de deteccion
La salida contradice tendencias fisicas esperadas al variar entradas.

#### Correccion conceptual
Verificar algebra y dimensiones en cada paso intermedio.

#### Mini-ejemplo
Si [[omega]] sube y el resultado baja sin razon geometrica, hay fallo algebraico.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto
Las unidades se dejan para el final y se asume compatibilidad automatica.

#### Por que es incorrecto
Sin consistencia de unidades, comparaciones entre escenarios dejan de ser validas.

#### Senal de deteccion
Dos rutas de calculo supuestamente equivalentes producen escalas incompatibles.

#### Correccion conceptual
Unificar en SI antes de calcular y registrar conversiones.

#### Mini-ejemplo
Usar [[v_rel]] en km/h sin convertir altera fuerte la lectura de [[a_cor]].

## Errores de interpretación

### Error 8: Sobreestimar precisión del resultado

#### Por que parece correcto
Muchos decimales dan apariencia de exactitud.

#### Por que es incorrecto
La precision real depende de hipotesis y calidad de entrada, no del formato numerico.

#### Senal de deteccion
Se reportan decimales finos sin rango de confianza ni comentario de dominio.

#### Correccion conceptual
Ajustar cifras significativas a la incertidumbre del modelo.

#### Mini-ejemplo
Informar cuatro decimales no aporta si el umbral operativo esta en escala de unidades grandes.

### Error 9: Quedarse solo con el número

#### Por que parece correcto
Se obtuvo un valor y se considera tarea terminada.

#### Por que es incorrecto
Sin lectura causal y sin decision asociada, el calculo no guia accion.

#### Senal de deteccion
No se declara si conviene mantener, corregir o escalar modelo.

#### Correccion conceptual
Cerrar siempre con decision fisica basada en resultado y limite de validez.

#### Mini-ejemplo
Un mismo [[a_cor]] puede ser irrelevante en un caso y critico en otro segun tolerancia.

## Regla de autocontrol rapido

1. ¿El marco de referencia rotatorio esta explicitado?
2. ¿Se distinguio [[a_cor]] de [[F_cor]] y su rol?
3. ¿Se verifico dominio de validez antes de concluir?
4. ¿La interpretacion incluye causalidad, no solo cifra?
5. ¿La salida conduce a una decision tecnica clara?\r
`;export{e as default};
