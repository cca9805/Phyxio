const e=`# Modelos del oscilador armonico

## Modelo ideal

El modelo ideal es una masa [[m]] unida a un elemento elastico lineal de rigidez [[k]], oscilando sin rozamiento alrededor de un equilibrio estable. El desplazamiento maximo es [[A]], la frecuencia angular natural es [[omega]], el periodo es [[Tper]] y la energia mecanica total es [[E]]. La hipotesis central es que el retorno es proporcional al desplazamiento y que los parametros no cambian durante el movimiento.

Este modelo no pretende describir todo sistema vibratorio real, sino construir la referencia lineal. Su fuerza didactica esta en separar dos lecturas: [[m]] y [[k]] fijan el ritmo; [[A]] y [[k]] fijan energia. Esa separacion convierte al oscilador en un caso base para mecanica analitica, modos normales y aproximaciones de potencial.

## Hipótesis

Se supone masa puntual o coordenada generalizada equivalente, muelle lineal, amplitud dentro del regimen elastico, ausencia de amortiguamiento relevante y ausencia de fuerza externa periodica. Tambien se supone que el equilibrio es estable y que la curvatura del potencial puede representarse mediante [[k]] positiva.

Las unidades deben ser coherentes: [[m]] en kg, [[k]] en N/m, [[A]] en m, [[omega]] en rad/s, [[Tper]] en s y [[E]] en J. Si se mezclan gramos, centimetros o constantes elasticas mal convertidas, la frecuencia puede quedar desplazada por factores grandes.

## Dominio de validez cuantitativo

Como regla operativa, el modelo lineal es razonable si la amplitud es pequena frente a la escala en la que la rigidez cambia apreciablemente. Un criterio practico es que la variacion relativa de rigidez efectiva sea menor que 5% durante el intervalo de desplazamiento. Tambien es aceptable si la perdida de energia por ciclo es menor que 1% cuando se quiere tratar [[E]] como constante.

Si el desplazamiento se acerca al limite elastico, si aparece amortiguamiento fuerte o si la frecuencia medida depende claramente de [[A]], el modelo ideal deja de ser suficiente. En ese caso, las formulas de [[omega]], [[Tper]] y [[E]] siguen sirviendo como referencia inicial, pero no como descripcion completa.

## Señales de fallo del modelo

Una senal de fallo es que el periodo cambie al aumentar amplitud en condiciones supuestamente identicas. Otra es que los maximos sucesivos disminuyan de forma apreciable por disipacion. Tambien falla si el retorno no es simetrico, si hay topes mecanicos, si la rigidez cambia con temperatura o si una fuerza externa domina el movimiento.

En datos experimentales, el fallo puede aparecer como una curva que no es sinusoidal, una frecuencia que se desplaza durante el ensayo o una energia que no se conserva. Estas senales no invalidan la utilidad del oscilador; indican que debe usarse como aproximacion local o como modelo base para comparar.

## Modelo extendido o alternativo

El modelo extendido puede incluir amortiguamiento viscoso, fuerza externa periodica, no linealidad elastica o acoplamiento con otros grados de libertad. En esos casos aparecen resonancia, desfase, decaimiento de amplitud, transferencia de energia entre modos o dependencia de frecuencia con amplitud.

Conviene cambiar al modelo extendido cuando el objetivo sea predecir respuesta transitoria, disipacion, resonancia o comportamiento a grandes amplitudes. La transicion no es decorativa: se decide porque una hipotesis del modelo ideal ha dejado una senal observable.

## Comparación operativa

El modelo ideal sirve para estimar frecuencia natural, periodo y energia de amplitud con una lectura clara. Es la primera opcion si el problema pregunta por el comportamiento local alrededor de equilibrio.

El modelo extendido sirve cuando los efectos omitidos son comparables al resultado buscado. Pierde simplicidad, pero explica observaciones que el modelo ideal no puede: decaimiento, resonancia, corrimiento de frecuencia o intercambio modal.
`;export{e as default};
