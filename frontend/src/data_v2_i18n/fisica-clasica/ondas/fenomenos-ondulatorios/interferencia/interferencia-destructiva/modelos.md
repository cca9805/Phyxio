## Modelo ideal

El modelo ideal trata dos ondas coherentes, sinusoidales y de frecuencia común que llegan al mismo punto con una fase relativa estable. La superposición se aplica sobre la perturbación física, y la intensidad resultante [[I_resultante]] se interpreta después como promedio energético.

La simplificación central es que el medio no cambia durante la observación y que las dos ondas comparten el mismo modo. Así, [[Delta_r]] y [[delta_phi]] bastan para decidir si aparece un mínimo. El modelo conserva la escala de [[lambda]] y las intensidades individuales [[I1]] y [[I2]], pero ignora ruido, dispersión fuerte, fluctuaciones térmicas y pérdidas variables.

## Hipótesis

- Las fuentes son coherentes: si se viola esta hipótesis, los mínimos se mueven o se promedian.
- La frecuencia es común: si las frecuencias difieren, [[delta_phi]] deja de ser estable y aparece batido temporal.
- Las ondas actúan sobre el mismo modo físico: si no comparten polarización, dirección efectiva o variable mecánica, el contraste cae.
- El medio puede representarse con una [[lambda]] definida: si el medio cambia, la fase acumulada exige un modelo óptico o acústico más detallado.
- Las intensidades [[I1]] y [[I2]] son medibles por separado: si no lo son, la profundidad del mínimo no puede evaluarse de forma fiable.

## Dominio de validez cuantitativo

El modelo es razonable cuando la estabilidad de fase se mantiene durante el intervalo de medida y el ancho espectral es pequeño frente a la frecuencia central. En interferometría óptica de laboratorio, una deriva de fase menor que 10 % de ciclo suele mantener mínimos distinguibles. En acústica de sala, diferencias de camino de orden de magnitud cercano a 0.5 m son relevantes para tonos de varios cientos de hercios.

Para observaciones espaciales, la separación entre mínimos debe superar la resolución del detector. Si una cámara, micrófono o sensor integra sobre una zona mayor que varias franjas, el mínimo se suaviza aunque la física local sea correcta.

## Señales de fallo del modelo

Una señal directa de fallo es que los mínimos previstos no permanecen en la misma posición. Si al repetir la medida la zona oscura o silenciosa se desplaza sin cambio geométrico, probablemente la coherencia no se mantiene.

Otra señal es una intensidad mínima mucho mayor de la esperada pese a fase ajustada. Esto puede indicar amplitudes desiguales, polarización incompatible, reflexiones no consideradas o un detector que promedia muchas fases. También falla el modelo si aparecen mínimos donde [[Delta_r]] no guarda relación con [[lambda]] en el medio.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el medio es dispersivo, si hay varias reflexiones, si el ancho espectral es grande o si las fuentes no mantienen fase estable. En ese caso se reemplaza la lectura de dos ondas ideales por suma de muchas contribuciones con fases, amplitudes y retardos propios.

En óptica de películas delgadas se añade fase por reflexión y camino óptico. En acústica real se incorporan paredes, absorción y modos de sala. En señales electrónicas o antenas se usa representación fasorial con pérdidas y respuesta de frecuencia.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precisión | Alta cuando hay dos ondas coherentes limpias | Mejor con medios reales, reflexiones o espectro ancho |
| Complejidad | Baja; usa [[Delta_r]], [[lambda]], [[delta_phi]], [[I1]] y [[I2]] | Mayor; requiere fases múltiples, pérdidas y respuesta del detector |
| Rango de aplicación | Patrones estables y fuentes controladas | Experimentos reales con ruido, dispersión o geometría compleja |
| Límite principal | No describe pérdida de coherencia ni mezcla de modos | Puede ocultar la intuición si se usa antes de entender la fase |
