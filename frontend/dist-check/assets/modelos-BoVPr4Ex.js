const e=`## Modelo ideal

El modelo ideal de autoinduccion trata la bobina como un elemento lineal con [[L]] constante. La corriente [[I]] crea un flujo enlazado [[lambda_B]] proporcional, y solo los cambios de corriente generan [[epsilon_L]]. La geometria, el numero de espiras y el nucleo quedan condensados en una sola magnitud.

Este modelo conserva la lectura esencial: pendiente magnetica, oposicion al cambio y energia almacenada. Ignora resistencia, capacitancia parasita, saturacion del nucleo, fugas de flujo y calentamiento.

## Hipótesis

- La inductancia es constante; si se viola, la pendiente entre [[lambda_B]] e [[I]] cambia.
- El nucleo no se satura; si se viola, [[L]] depende del punto de trabajo.
- El cambio de corriente es suficientemente lento para ignorar parasitos; si se viola, aparecen oscilaciones y sobretensiones no descritas.
- La resistencia no domina la lectura; si se viola, parte de la energia se disipa antes de observar el efecto inductivo.
- La geometria de la bobina permanece fija; si se viola, cambia el flujo enlazado.

## Dominio de validez cuantitativo

El modelo lineal es razonable si la variacion efectiva de [[L]] queda por debajo del 5 % en el rango de corriente usado. En bobinas con nucleo de aire, esta condicion suele ser amplia; en nucleos ferromagneticos depende de no entrar en saturacion.

Como escala practica, transitorios con [[Deltat]] mayor que 1 ms suelen poder tratarse con un modelo medio en cursos introductorios si no hay conmutacion electronica rapida. En microsegundos, las capacitancias parasitas pueden entrar en juego.

## Señales de fallo del modelo

Una señal clara es que [[epsilon_L]] medida no escala proporcionalmente con la rapidez de cambio de corriente. Otra es que la curva de [[lambda_B]] frente a [[I]] se curva cuando aumenta la corriente.

Tambien fallan las hipotesis si aparece calentamiento fuerte, zumbido por saturacion, chispas repetidas sin camino de descarga o oscilaciones tras abrir el circuito. En esos casos la bobina real ya no es solo una inductancia ideal.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si la resistencia, la capacitancia parasita o la saturacion afectan al resultado, se usa un modelo RLC o una inductancia dependiente del punto de trabajo. La transicion al modelo extendido evita atribuir todo pico de tension a una [[L]] constante.

En nucleos ferromagneticos, cambiar a una curva experimental permite leer [[L]] local. En electronica de potencia, pasar al modelo con parasitos ayuda a prever oscilaciones, perdidas y limites de aislamiento.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precision | Buena para bobinas lineales y cambios moderados | Mejor en conmutacion rapida o saturacion |
| Complejidad | Usa [[L]], [[DeltaI]] y [[Deltat]] | Añade resistencia, parasitos y curvas del nucleo |
| Rango | Analisis conceptual y transitorios medios | Dispositivos reales de potencia y alta frecuencia |
| Lectura | Oposicion al cambio y energia almacenada | Picos, oscilaciones, perdidas y calentamiento |
| Limite | No describe no linealidad | Requiere datos experimentales del componente |
`;export{e as default};
