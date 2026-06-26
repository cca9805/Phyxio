const e=`## Modelo ideal

El modelo ideal de la ley de Faraday trata el circuito como una espira o bobina bien definida que enlaza un flujo magnetico cambiante. El cambio de [[Phi_B]] durante [[Deltat]] produce una fem [[epsilon_ind]] alrededor del circuito.

Este modelo conserva la lectura esencial: cambio de flujo, acumulacion por espiras y polaridad de Lenz. Ignora detalles de resistencia, distribucion exacta del campo electrico inducido, radiacion, capacitancias parasitas y geometria compleja.

## Hipótesis

- El circuito esta definido; si se viola, no queda clara la superficie enlazada.
- Las espiras enlazan cambios de flujo similares; si se viola, [[N]] no multiplica de forma simple.
- El intervalo [[Deltat]] es positivo y medible; si se viola, no hay rapidez media finita.
- El campo puede resumirse por [[B_perp]] si se usa el modelo uniforme; si se viola, hace falta integracion espacial.
- El proceso es cuasiestatico; si se viola, pueden aparecer propagacion y radiacion apreciables.

## Dominio de validez cuantitativo

El modelo medio es razonable si el cambio de flujo puede resumirse entre dos estados y si la escala temporal no exige resolver detalles instantaneos. Para clases introductorias, cambios en milisegundos o segundos suelen admitir esta lectura si el circuito es pequeño.

Como escala practica, si [[Deltat]] baja a microsegundos en circuitos extensos, parasitos y retardos pueden alterar la fem medida. En ese caso, la ley sigue guiando la interpretacion, pero el modelo lumped elemental queda corto.

Criterio cuantitativo de uso: en bobinas pequeñas de laboratorio, [[Deltat]] > 1 ms y dimensiones del circuito menores que 0.1 m suelen permitir una estimacion media sin resolver propagacion. Si [[Deltat]] < 1 microsegundo, conviene sospechar parasitos y retardos.

## Señales de fallo del modelo

Una señal de fallo es que [[epsilon_ind]] medida no crece al aumentar la rapidez de cambio de flujo. Otra es que cambiar la orientacion o el area produce efectos no explicados por el [[B_perp]] efectivo usado.

Tambien falla si aparece ruido de alta frecuencia, chispas, resonancias, acoplamiento capacitivo dominante o si no puede identificarse una superficie clara enlazada por el circuito.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el campo no es uniforme, se calcula el flujo con una integracion sobre la superficie. Si el circuito tiene muchas espiras no equivalentes, se suma el aporte de cada una.

En electronica rapida, se incorporan inductancias parasitas, capacitancias, resistencia y propagacion. En maquinas electricas, se usa una descripcion dependiente del angulo, velocidad y geometria del rotor.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precision | Buena para cambios medios y geometria simple | Mejor en campos no uniformes y transitorios rapidos |
| Complejidad | Usa [[DeltaPhi_B]], [[Deltat]] y [[N]] | Añade integrales, parasitos y geometria detallada |
| Rango | Espiras, bobinas y estimaciones introductorias | Maquinas, antenas, sensores y circuitos reales |
| Lectura | Fem por cambio de flujo | Distribucion de campo, fase, perdidas y acoplos |
| Limite | No resuelve detalles locales | Requiere datos geometricos y temporales precisos |
`;export{e as default};
