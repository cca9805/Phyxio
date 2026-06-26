const e=`\uFEFF# Modelos fisicos: Tension en cuerdas y cables

## Modelo ideal

El modelo ideal del leaf asume cuerda inextensible, masa despreciable en tramos ideales, poleas sin rozamiento y analisis planar con ejes definidos. Bajo esas hipotesis, la tension [[T]] se transmite sin perdidas internas relevantes y puede tratarse como uniforme en cada tramo ideal. Esta aproximacion simplifica el problema y permite resolver con precision suficiente una gran cantidad de casos de aula y de ingenieria preliminar.

Cuando el sistema incluye inclinacion, el modelo sigue siendo util siempre que se proyecte [[T]] en [[Tx]] y [[Ty]] con una convencion angular clara mediante [[theta]]. Para maquinas de Atwood ideales, el mismo marco produce relaciones compactas para aceleracion y tension comunes.

## Hipotesis

Hipotesis operativas del modelo:

- El tramo de cuerda analizado puede tratarse como ideal salvo indicacion explicita de masa de cable.
- La polea ideal no introduce diferencia apreciable de tension entre lados del mismo tramo.
- La deformacion elastica de cuerda o cable no altera significativamente la geometria durante el intervalo de analisis.
- El sistema puede representarse con las magnitudes del leaf sin variables ocultas dominantes.
- La convencion de signos y ejes se mantiene constante en todo el desarrollo.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen condiciones cuantitativas como:

- Error relativo entre prediccion y medida menor o igual al 10% en tension global [[T]].
- Variacion relativa de [[g]] despreciable en la escala del problema, tratada como constante local.
- Diferencia de tension entre tramos teoricamente iguales menor al 5% en ensayos sin rozamiento significativo.
- En cable con masa, linealidad aproximada del perfil de tension con discrepancia menor al 10% respecto al gradiente esperado [[dT_dy]] = [[lambda]]*[[g]].

Si alguno de esos umbrales se supera de forma sistematica, la idealizacion deja de ser robusta para decisiones de precision.

## Senales de fallo del modelo

Senales tipicas de fallo:

- El valor calculado de [[T]] no coincide con mediciones dentro del margen instrumental esperado.
- Aparecen diferencias persistentes entre lados de polea que el modelo ideal no justifica.
- La descomposicion angular produce componentes incompatibles con equilibrio medido.
- En cable masivo, el perfil espacial de tension no sigue la tendencia prevista por [[lambda]].

## Modelo extendido o alternativo

Cuando el modelo ideal falla, se pasa a un modelo extendido con una o mas mejoras: rozamiento de polea, masa distribuida de cable no uniforme, elasticidad de cuerda, o dinamica acoplada con vibraciones.

Transicion explicita recomendada: si el error relativo de tension supera el 10% en condiciones repetidas, o si la diferencia de tension entre tramos teoricamente iguales supera el 5% de forma estable, conviene cambiar al modelo extendido antes de continuar calculos de diseno.

## Comparacion operativa

| Aspecto | Modelo ideal de cuerda | Modelo extendido de cable/sistema |
|---------|------------------------|-----------------------------------|
| Variable principal | [[T]] por tramo y sus componentes | Campo de tension y efectos disipativos |
| Parametros extra | Minimos | Rozamiento, elasticidad, distribucion real |
| Exactitud tipica | Alta en condiciones controladas | Mayor en escenarios reales complejos |
| Costo de resolucion | Bajo | Medio o alto |
| Uso recomendado | Analisis base y docencia | Validacion avanzada y diseno fino |

La regla practica es comenzar con el modelo ideal para identificar ordenes de magnitud y estructura causal. Si las senales de fallo aparecen, la transicion al modelo extendido no es opcional: es parte de una solucion fisicamente honesta.\r
`;export{e as default};
