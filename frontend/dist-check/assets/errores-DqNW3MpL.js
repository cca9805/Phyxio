const e=`\uFEFF# Errores frecuentes: Aplicaciones fisicas

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
El termino Coriolis aparece en la ecuacion y parece una causa material directa.

#### Por que es incorrecto
En este leaf se interpreta como lectura de marco rotatorio que modifica descripcion de trayectoria.

#### Senal de deteccion
Se afirma que el efecto "empuja" por si mismo sin discutir marco de referencia.

#### Correccion conceptual
Separar lectura de marco y fuerzas reales externas en el analisis.

#### Mini-ejemplo
Una trayectoria lateral puede explicarse parcialmente por Coriolis y parcialmente por viento; mezclar ambos mecanismos lleva a diagnostico incorrecto.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

#### Por que parece correcto
La formula entrega un numero rapido y parece suficiente.

#### Por que es incorrecto
Sin validar estabilidad de [[v_rel]], [[alpha]] y horizonte [[t]], la estimacion pierde significado operativo.

#### Senal de deteccion
Se reporta [[y]] sin mencionar tolerancia funcional del sistema.

#### Correccion conceptual
Comparar siempre salida con umbral de decision y limite de validez.

#### Mini-ejemplo
Un [[y]] de 3 m puede ser irrelevante en oceanografia y critico en guiado de corredor estrecho.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[omega]], [[v_rel]] y [[a_cor]] estan relacionadas y pueden parecer intercambiables.

#### Por que es incorrecto
Cada una cumple un rol distinto: rotacion de marco, velocidad del movil y respuesta lateral.

#### Senal de deteccion
Se modifica [[v_rel]] y se interpreta cambio en [[a_cor]] sin revisar geometria [[alpha]].

#### Correccion conceptual
Mantener trazabilidad de variable dominante en cada escenario.

#### Mini-ejemplo
A igual [[v_rel]], cambiar [[alpha]] altera la contribucion efectiva y puede cambiar conclusion.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

#### Por que parece correcto
El modelo funciona bien en ejercicios nominales.

#### Por que es incorrecto
Fuera de regimen estable, la estimacion de primer orden subrepresenta efectos acoplados.

#### Senal de deteccion
Desviacion observada y [[y]] estimada difieren mas de 10% de forma repetida.

#### Correccion conceptual
Escalar a modelo extendido cuando el desajuste cruza umbral operativo.

#### Mini-ejemplo
En maniobras con cambios bruscos de actitud, mantener modelo simple genera sesgo persistente.

### Error 5: Ignorar los limites del modelo conocidos

#### Por que parece correcto
El numero final parece razonable.

#### Por que es incorrecto
Un resultado plausible no garantiza validez fisica del escenario modelado.

#### Senal de deteccion
No se documenta condicion de uso junto al resultado.

#### Correccion conceptual
Incluir siempre limite de validez y criterio de descarte.

#### Mini-ejemplo
Usar una [[alpha]] media en tramo con oscilacion fuerte invalida la lectura de relevancia.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
El despeje parece rutinario.

#### Por que es incorrecto
Un error pequeno altera escala de [[a_cor]] y termina amplificado en [[y]].

#### Senal de deteccion
Resultado no consistente con orden de magnitud esperado.

#### Correccion conceptual
Verificar dimensionalidad y coherencia de escala en cada paso.

#### Mini-ejemplo
Un factor numerico omitido puede convertir una correccion moderada en falsa alarma.

### Error 7: Olvidar unidades o conversiones

#### Por que parece correcto
Se asume que todas las entradas ya estan compatibles.

#### Por que es incorrecto
Inconsistencias de unidades degradan comparabilidad entre escenarios.

#### Senal de deteccion
Dos rutas de calculo arrojan magnitudes incompatibles.

#### Correccion conceptual
Unificar SI antes de calcular y registrar conversiones.

#### Mini-ejemplo
Si [[v_rel]] se usa en km/h sin convertir, el desvio estimado queda distorsionado.

## Errores de interpretación

### Error 8: Sobreestimar precision del resultado

#### Por que parece correcto
Muchos decimales transmiten sensacion de exactitud.

#### Por que es incorrecto
La precision real la fija el modelo y la calidad de entrada, no el formato del numero.

#### Senal de deteccion
Se reporta [[y]] con exceso de cifras sin contexto de incertidumbre.

#### Correccion conceptual
Ajustar cifras significativas al nivel de confianza real.

#### Mini-ejemplo
Informar decimales finos no aporta valor si la tolerancia operativa es de metros.

### Error 9: Quedarse solo con el numero

#### Por que parece correcto
Tras calcular, parece que el trabajo termino.

#### Por que es incorrecto
Sin lectura causal y umbral de decision, el resultado no orienta accion.

#### Senal de deteccion
No se explicita si conviene compensar, ignorar o escalar modelo.

#### Correccion conceptual
Cerrar siempre con decision operativa basada en tolerancia.

#### Mini-ejemplo
Un [[y]] calculado solo adquiere sentido cuando se compara con limite funcional del sistema.

## Regla de autocontrol rapido

1. ¿La variable dominante del caso esta identificada?
2. ¿El desvio [[y]] se comparo con tolerancia funcional?
3. ¿Se documento limite de validez del modelo?
4. ¿Se distinguio lectura de marco y causa fisica externa?
5. ¿La salida conduce a una accion tecnica clara?\r
`;export{e as default};
