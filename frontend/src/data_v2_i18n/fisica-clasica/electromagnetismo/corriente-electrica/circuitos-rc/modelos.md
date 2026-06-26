## Modelo ideal

El modelo ideal de circuitos RC representa la red temporal mediante una [[resistencia]] equivalente [[resistencia]] y una [[capacitancia]] equivalente [[capacitancia]] conectadas de modo que la variable de estado central sea la tension [[tension_del_capacitor]]. La excitacion se trata como cambio bien definido entre condiciones iniciales y finales, y la respuesta aparece como curva exponencial gobernada por [[tau]]. Esta idealizacion es util porque reduce una gran variedad de topologias reales a un mecanismo comun de primer orden.

En el modelo ideal, la [[resistencia]] no depende de temperatura ni frecuencia dentro de la ventana analizada, y la [[capacitancia]] tampoco cambia con tension aplicada. Esa simplificacion permite que las expresiones temporales sean estables y que la interpretacion de diseno sea directa. El punto fuerte del modelo es la trazabilidad causal. Si se modifica [[resistencia]] o [[capacitancia]], cambia de inmediato la escala temporal y con ello la velocidad de convergencia de [[tension_del_capacitor]] y de [[corriente_transitoria]].

## Hipótesis

El uso riguroso del modelo exige declarar hipotesis explicitas:
1. Existe una sola dinamica dominante de relajacion.
2. Los elementos equivalentes [[resistencia]] y [[capacitancia]] se mantienen aproximadamente constantes durante el intervalo.
3. El escenario de carga o descarga esta bien separado y posee condiciones iniciales claras mediante [[tension_inicial]] y referencia final mediante [[tension_final_de_carga]].
4. Los efectos de inductancia, saturacion y no linealidades fuertes no dominan en la escala temporal estudiada.
5. El ruido y el error de medicion son menores que el nivel de variacion que se desea analizar.

Estas hipotesis no son burocraticas. Funcionan como contrato fisico entre teoria y experimento. Si se incumplen de forma sistematica, la curva medida deja de seguir la prediccion esperada incluso cuando la sustitucion numerica este bien hecha.

## Dominio de validez cuantitativo

En practicas de validacion, el modelo se considera operativo cuando el error relativo de ajuste temporal se mantiene bajo umbral moderado en todo el intervalo de interes. Como criterio de ingenieria introductoria, es razonable aceptar el modelo cuando el error relativo global no supera una fraccion pequena y no muestra sesgo sistematico en inicio y cola de la curva.

Criterio explicito recomendado: usar el modelo de primer orden mientras error_relativo <= 0.10 en la ventana de diseno; si error_relativo > 0.10 de forma sistematica, migrar a modelo extendido.

Tambien es util comparar escalas. Si el [[tiempo]] de observacion [[tiempo]] cubre varias veces [[tau]], la identificacion de comportamiento exponencial debe ser visible con claridad. Si la ventana observada es demasiado corta frente a [[tau]], el sistema puede parecer casi lineal y no permite validar de forma robusta el modelo. Si la ventana es muy larga y la senal se pega al ruido, se pierde sensibilidad para discriminar parametros.

Un criterio practico de robustez consiste en verificar consistencia entre estimaciones obtenidas desde [[tension_del_capacitor]] y desde [[corriente_transitoria]]. Cuando ambas rutas llevan a la misma escala temporal dentro de tolerancia razonable, el modelo de primer orden gana credibilidad fisica.

> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.

## Señales de fallo del modelo

Hay senales tipicas de fallo que deben activar revision metodologica:
1. Curvas con doble pendiente marcada, indicio de mas de una escala temporal dominante.
2. Sobrepaso sostenido en [[tension_del_capacitor]] durante carga pasiva simple, senal de fenomenos no capturados por RC puro.
3. Corriente [[corriente_transitoria]] con oscilaciones de signo o envolvente incompatible con decaimiento esperado.
4. Dependencia fuerte del ajuste al cambiar amplitud de excitacion, compatible con no linealidad relevante.
5. Parametros efectivos que cambian de forma abrupta entre ensayos casi identicos.

Cuando aparece cualquiera de estas senales, no basta con ajustar mejor numeros. Debe revisarse el modelo fisico, la topologia equivalente y la calidad de medicion.

## Modelo extendido o alternativo

El paso natural cuando el modelo ideal falla es construir un modelo extendido con terminos adicionales. Entre las extensiones frecuentes aparecen [[resistencia]] serie efectiva del capacitor, fuga paralela, dependencia termica de [[resistencia]] y, en escenarios de alta rapidez, influencia inductiva de conexion. En aplicaciones activas se agregan tambien limites de salida y no linealidades de etapa de excitacion.

Otra alternativa es pasar de representacion concentrada a representacion distribuida cuando el circuito ocupa longitudes electricamente relevantes. En ese caso, una sola [[tau]] deja de ser suficiente y la dinamica requiere varias constantes efectivas.

## Comparación operativa

El modelo ideal ofrece velocidad, claridad y bajo costo cognitivo. Es excelente para dimensionamiento preliminar, explicacion didactica y control de plausibilidad. El modelo extendido reduce error sistematico y mejora prediccion fina, pero aumenta complejidad y demanda datos experimentales mas ricos.

La decision entre ambos no debe hacerse por preferencia estetica. Debe basarse en objetivo de analisis. Si la pregunta es de orden de magnitud o preseleccion de componentes, el ideal suele bastar. Si la pregunta involucra tolerancias estrictas, picos de corriente o validacion en produccion, el modelo extendido suele ser necesario. La competencia profesional consiste en saber cuando detenerse en el modelo simple y cuando escalar a uno mas detallado.