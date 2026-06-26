const e=`# Errores Comunes en Flujo Turbulento\r
\r
## Errores conceptuales\r
\r
### Error 1 : Confundir turbulencia con aleatoriedad total\r
**Por qué parece correcto**: Debido a la naturaleza caótica y errática del movimiento de las partículas, parece que no hay leyes físicas que lo gobiernen y que todo es azar.\r
**Por qué es incorrecto**: Aunque el movimiento individual es impredecible, las estadísticas de la turbulencia siguen patrones matemáticos deterministas. La turbulencia es "caos organizado".\r
**Señal de detección**: El alumno afirma que es imposible predecir la caída de presión exacta porque el flujo es "puro azar".\r
**Corrección conceptual**: Explicar que promediando en el tiempo aparecen leyes universales de escala como las de Kolmogorov.\r
**Mini-ejemplo de contraste**: Si inyectas tinta en un flujo turbulento, no se mueve al azar en todas direcciones con la misma probabilidad; sigue la dirección del flujo principal.\r
\r
### Error 2 : Ignorar la subcapa viscosa en superficies sólidas\r
**Por qué parece correcto**: Se asume que si el número de Reynolds [[Re]] es muy alto, la viscosidad deja de ser importante en todo el dominio.\r
**Por qué es incorrecto**: Pegada a cualquier pared sólida existe siempre una **subcapa viscosa** laminar que determina la fricción.\r
**Señal de detección**: Cálculos de pérdida de carga que ignoran la rugosidad relativa pensando que el flujo es "ideal" por ser turbulento.\r
**Corrección conceptual**: Mostrar que la rugosidad solo importa si sobresale de la subcapa viscosa.\r
**Mini-ejemplo de contraste**: Un tubo puede ser "hidráulicamente liso" incluso si tiene rugosidad microscópica.\r
\r
## Errores de modelo\r
\r
### Error 3 : Usar la ley de Poiseuille en régimen turbulento\r
**Por qué parece correcto**: Es la fórmula más sencilla y se tiende a aplicar por defecto tras estudiarla en flujos lentos.\r
**Por qué es incorrecto**: Aplicar la ca?da de presi?n proporcional a la velocidad cuando [[Re]] > 4000 subestima drásticamente la resistencia real.\r
**Señal de detección**: Gráficas de caída de presión que muestran una línea recta en lugar de una parábola al aumentar la velocidad.\r
**Corrección conceptual**: En turbulencia, la pérdida de energía escala con [[v]] squared debido a la disipación inercial.\r
**Mini-ejemplo de contraste**: Un oleoducto real requeriría bombas diez veces más potentes de lo predicho por Poiseuille.\r
\r
### Error 4 : Aplicar la correlación de Blasius fuera de su rango de validez\r
**Por qué parece correcto**: Blasius es explícita y fácil de calcular sin necesidad de iteraciones ni diagramas.\r
**Por qué es incorrecto**: Solo es válida para tuberías lisas y [[Re]] < 100000. Fuera de ahí, el error crece rápidamente.\r
**Señal de detección**: Uso de Blasius para tuberías de hormigón o hierro fundido rugoso.\r
**Corrección conceptual**: Introducir la ecuación de Colebrook-White para incluir el efecto de la rugosidad relativa.\r
**Mini-ejemplo de contraste**: Para [[Re]] = 10000000, Blasius da un valor un 40% menor al real.\r
\r
## Errores matemáticos\r
\r
### Error 5 : No realizar iteraciones en la ecuación de Colebrook-White\r
**Por qué parece correcto**: Parece que con el primer valor aproximado del diagrama de Moody es suficiente.\r
**Por qué es incorrecto**: La ecuación es implícita y muy sensible; un error inicial se magnifica en la caída de presión.\r
**Señal de detección**: Resultados de factor de fricción [[f]] que no cambian a pesar de variar el Reynolds significativamente en la zona de transición.\r
**Corrección conceptual**: Usar el método de Newton-Raphson o aproximaciones explícitas como la de Haaland.\r
**Mini-ejemplo de contraste**: Un error del 5% en [[f]] supone miles de euros de diferencia en energía anual de bombeo.\r
\r
## Errores de interpretación\r
\r
### Error 6 : Creer que la turbulencia siempre es una ineficiencia que debe eliminarse\r
**Por qué parece correcto**: Como disipa más energía, se interpreta como un "mal" que aumenta el consumo energético.\r
**Por qué es incorrecto**: En transferencia de calor o mezcla química, la turbulencia es el mecanismo de transporte más eficiente.\r
**Señal de detección**: Propuestas de diseño que buscan régimen laminar en radiadores o mezcladores químicos.\r
**Corrección conceptual**: La turbulencia multiplica la tasa de transferencia de calor por convección respecto a la conducción laminar.\r
**Mini-ejemplo de contraste**: En un radiador, pasar de laminar a turbulento puede multiplicar por diez el enfriamiento.\r
\r
## Regla de autocontrol rápido\r
Si al doblar la velocidad [[v]], la caída de presión [[dp]] aumenta aproximadamente **cuatro veces** (por cuatro), estás en régimen turbulento.`;export{e as default};
