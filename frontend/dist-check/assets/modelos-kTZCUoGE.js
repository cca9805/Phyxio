const e=`## Modelo ideal\r
\r
El modelo estándar de calor trata la transferencia de energía térmica como proporcional a la masa, al calor específico del material y a la variación de temperatura. Este modelo asume que el calor específico [[c_esp]] es constante en el rango de temperaturas del proceso y que no hay cambios de estado intermedios. En el caso de calor latente, el modelo asume temperatura constante durante toda la transición de fase, con un calor específico [[L]] también constante para la transición concreta.\r
\r
El modelo simplifica la naturaleza molecular del proceso: en realidad, los modos de vibración, rotación y traslación de las moléculas evolucionan con la temperatura, lo que hace que [[c_esp]] varíe de forma continua. Para la mayoría de los cálculos de física básica y de ingeniería a presión atmosférica, la variación de [[c_esp]] es suficientemente pequeña para ignorarse.\r
\r
## Hipótesis\r
\r
- El calor específico [[c_esp]] es independiente de la temperatura en el rango del proceso. Si el rango supera varios cientos de kelvin, esta hipótesis se vuelve cuestionable y puede introducir errores superiores al 5 %.\r
- No hay cambio de estado durante el proceso de calor sensible. Si el rango de temperaturas cruza el punto de fusión o ebullición, el modelo de calor sensible es incompleto y debe complementarse con el de calor latente.\r
- La masa [[m]] permanece constante. En procesos con evaporación parcial o condensación, la masa efectiva varía y el modelo deja de ser estrictamente válido.\r
- El sistema es homogéneo: toda la masa se encuentra a la misma temperatura en cada instante. Para cuerpos extensos con gradientes internos, esta hipótesis es solo una aproximación.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo de calor sensible con [[c_esp]] constante es válido cuando el rango de temperatura es menor de 200 K para la mayoría de sólidos y líquidos simples. Para el agua entre 0 °C y 100 °C, la variación de [[c_esp]] es inferior al 1 %, lo que confirma la validez del modelo en este rango.\r
\r
El calor específico del agua varía de forma notable más allá del rango líquido: el hielo tiene [[c_esp]] ≈ 2090 J/(kg·K) y el vapor a 100 °C ≈ 2010 J/(kg·K), ambos sustancialmente menores que los 4186 J/(kg·K) del agua líquida.\r
\r
Para metales, la variación de [[c_esp]] con la temperatura puede superar el 20 % en rangos de varios cientos de kelvin, haciendo necesario usar un valor promedio o integrar sobre la dependencia con T.\r
\r
El modelo de calor latente con [[L]] constante es válido cuando la presión no se aparta significativamente de 1 atm. A presiones muy distintas, el punto de transición y el valor de [[L]] cambian; por ejemplo, el calor de vaporización del agua disminuye a medida que la presión aumenta hasta anularse en el punto crítico (374 °C, 218 atm).\r
\r
## Señales de fallo del modelo\r
\r
- **Temperatura que no varía aunque se aporte o retire calor a un ritmo constante**: es la señal más directa de que hay un cambio de estado en curso y que el modelo de calor sensible no aplica en ese tramo.\r
- **Calor calculado muy diferente al medido experimentalmente**: si la discrepancia supera el 10 % en condiciones estándar, es probable que el calor específico no sea constante en el rango analizado o que existía un cambio de estado no contemplado.\r
- **Masa que disminuye durante el proceso**: en sistemas abiertos con evaporación, parte de la masa abandona el sistema en forma de vapor antes de alcanzar el punto de ebullición, haciendo que [[m]] no sea constante.\r
- **Resultado de [[DeltaT]] mayor de 300 K en un solo tramo**: en ese rango, la hipótesis de [[c_esp]] constante puede introducir errores de hasta el 20 % en metales y materiales complejos.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora la dependencia del calor específico con la temperatura: [[c_esp]] se toma como una propiedad variable y no como un número fijo. En este caso, el calor sensible se calcula integrando sobre el rango de temperatura. Para gases, la termodinámica estadística proporciona expresiones exactas del calor específico en función de los grados de libertad moleculares.\r
\r
Para sistemas heterogéneos o con gradientes de temperatura, el modelo de transferencia de calor continua (conducción, convección y radiación) sustituye al modelo puntual de calor sensible. En este contexto, [[Q]] deja de ser un escalar global y pasa a ser una densidad de flujo de energía distribuida en el espacio.\r
\r
Cuando conviene pasar al modelo extendido: cuando la variación de temperatura supera los 200 K, cuando el proceso cruza más de una transición de fase, o cuando se requiere precisión superior al 5 % en materiales con calor específico fuertemente dependiente de la temperatura.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo simple (c constante) | Modelo extendido (c variable con T) |\r
|---|---|---|\r
| Complejidad de cálculo | Multiplicación directa | Integración numérica o tabular |\r
| Error típico en agua 0–100 °C | Inferior al 1 % | Referencia exacta |\r
| Error típico en metales 20–500 °C | 5–20 % | Inferior al 1 % |\r
| Aplicabilidad en cambios de estado | No aplica en la transición | Requiere modelo de calor latente separado |\r
| Uso recomendado | Cálculos rápidos, física de bachillerato | Ingeniería de precisión, termodinámica avanzada |\r
`;export{e as default};
