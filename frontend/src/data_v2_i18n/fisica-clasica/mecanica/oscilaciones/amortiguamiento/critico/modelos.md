# Modelos y validez en amortiguamiento crítico

## Modelo ideal

El modelo ideal de este leaf representa un oscilador lineal de segundo orden con disipación viscosa equivalente. La condición distintiva no es solo que exista amortiguamiento, sino que su intensidad efectiva coincida con el umbral crítico que separa dos comportamientos cualitativamente distintos: respuesta oscilatoria amortiguada y respuesta no oscilatoria sobreamortiguada. En ese punto de frontera, el sistema retorna al equilibrio con rapidez alta y sin oscilaciones sostenidas.

Este modelo ideal es útil porque permite diseñar sistemas con compromiso entre rapidez y ausencia de sobrepaso pronunciado. En práctica de ingeniería se traduce en decisiones de ajuste donde se busca evitar tanto la lentitud del sobreamortiguado como las oscilaciones residuales del subamortiguado.

## Hipótesis

1. Dinámica lineal de segundo orden válida en el rango de amplitudes estudiado.
2. Disipación equivalente modelable mediante parámetro [[gamma]] constante en el intervalo de análisis.
3. Parámetros de rigidez y masa efectivos que determinan [[omega0]] sin variaciones bruscas durante la ventana temporal.
4. Condiciones iniciales bien definidas, con escala de respuesta capturada por [[A]].
5. Ausencia de forzamiento externo dominante durante el transitorio principal.

Si cualquiera de estas hipótesis se rompe, la interpretación de régimen crítico deja de ser fiable y debe revisarse el modelo.

## Dominio de validez cuantitativo

El modelo se considera operativo cuando se cumplen, al menos, criterios cuantitativos como los siguientes:

- Proximidad de condición crítica: abs([[gamma]]-[[omega0]]) <= 0.05*[[omega0]].
- Ventana temporal de observación suficiente: [[t]] >= 3*[[tau]] para verificar asentamiento.
- Coherencia de escala inicial: [[A]] en rango compatible con linealidad del sistema (por ejemplo, deformación relativa <= 10 por ciento de la escala geométrica útil).
- Deriva paramétrica limitada: variación relativa de [[omega0]] <= 5 por ciento durante el ensayo.

Criterio cuantitativo mínimo: aceptar el modelo crítico como primera aproximación si la diferencia relativa entre [[gamma]] y [[omega0]] es menor que 5%, si la amplitud inicial queda por debajo del 10% del rango lineal calibrado y si la curva medida se mantiene dentro de un error de 10% durante los primeros 3 [[tau]].

Estos umbrales no son universales; son reglas de ingeniería para decidir si el modelo mantiene capacidad predictiva útil.

## Señales de fallo del modelo

1. La curva de [[x]] presenta oscilaciones persistentes cuando el modelo predice caída monótona.
2. La estimación de [[tau]] cambia fuertemente con pequeñas variaciones de ventana temporal.
3. El ajuste de datos exige valores físicamente incoherentes de [[gamma]] o [[omega0]].
4. La respuesta depende fuertemente de amplitud inicial en un régimen donde se asumió linealidad.
5. El criterio crítico deja de ser estable entre experimentos nominalmente equivalentes.

Cuando aparecen estas señales, no conviene afinar solo el cálculo numérico: primero hay que revisar hipótesis físicas.

## Modelo extendido o alternativo

Si el sistema sale del dominio ideal, existen dos extensiones frecuentes:

- Modelo con amortiguamiento no lineal, cuando la disipación depende de velocidad o amplitud de forma no proporcional.
- Modelo forzado, cuando la excitación externa domina parte del transitorio y altera la clasificación simple por [[gamma]] y [[omega0]].

También puede emplearse un modelo con parámetros dependientes del tiempo si el entorno cambia (temperatura, carga, condiciones de contacto), lo cual modifica [[gamma]] de manera apreciable.

## Comparación operativa

Modelo crítico ideal:
- Ventaja: interpretación simple y útil para diseño rápido.
- Coste: puede subestimar efectos no lineales o forzamientos.
- Uso recomendado: etapas de pre-diseño, control básico y validación inicial.

Modelo extendido:
- Ventaja: mayor fidelidad cuando hay no linealidad o excitación externa relevante.
- Coste: mayor número de parámetros y necesidad de calibración experimental.
- Uso recomendado: validación final, operación en condiciones variables y análisis de robustez.

Transición explícita de modelo: cuando conviene cambiar de modelo es cuando abs([[gamma]]-[[omega0]]) > 0.05*[[omega0]] de forma sostenida o cuando la señal de [[x]] muestra sobrepaso/ondulación incompatible con la hipótesis crítica. En ese caso, mantener el modelo ideal produce conclusiones engañosas aunque la aritmética interna parezca consistente.
