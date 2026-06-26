const e=`# Modelos fisicos: definicion del centro de masas

## Modelo ideal

El modelo ideal representa el sistema mediante masas puntuales medidas en un mismo marco de referencia. En el caso introductorio se usan dos cuerpos: [[m1]] en [[x1]] y [[m2]] en [[x2]]. El objetivo no es describir la forma interna de cada cuerpo, sino definir una posicion colectiva [[xcm]] que resuma el sistema.

La masa total [[M]] debe reunir exactamente las contribuciones incluidas. La relacion [[Mxcm]] permite leer la definicion como balance de aportes espaciales. En la extension general, el modelo usa masas [[m_i]], posiciones [[r_i]] y el vector [[rcm]].

## Hipotesis

- Las masas del modelo son no negativas.
- Todas las posiciones se miden con el mismo origen.
- El sistema esta completamente definido antes de calcular.
- Cada cuerpo se puede tratar como puntual o ya se conoce su centro propio.
- La masa total [[M]] es positiva cuando se calcula [[xcm]].

## Dominio de validez cuantitativo

El modelo introductorio funciona bien cuando las dimensiones de cada cuerpo son menores que el 10 % de la separacion entre [[x1]] y [[x2]], o cuando cada cuerpo puede sustituirse por su propio centro de masas interno. Con masas positivas, [[xcm]] debe quedar dentro del intervalo formado por [[x1]] y [[x2]]. Ademas, [[M]] debe ser mayor o igual que [[m1]] y [[m2]].

Una comprobacion numerica minima es esta: si [[x1]] = 0 m, [[x2]] = 4 m y ambas masas son positivas, un resultado de 5 m no pertenece al dominio fisico ordinario del modelo. Si [[M]] = 3 kg mientras [[m2]] = 6 kg, el denominador no puede representar la masa total. Si [[Mxcm]] se expresa como una longitud, se ha perdido la dimension de masa por longitud.

## Senales de fallo del modelo

El modelo falla si el centro de masas calculado queda fuera del intervalo sin que existan masas negativas. Tambien falla si se mezclan posiciones medidas desde origenes distintos o si se incluye una masa en el numerador pero no en [[M]]. Otra senal clara es obtener el punto medio exacto cuando [[m1]] y [[m2]] son muy diferentes.

En la formulacion general, una senal de fallo aparece cuando los vectores [[r_i]] pertenecen a marcos distintos. La expresion vectorial [[rcm]] solo conserva sentido si todos los datos viven en el mismo sistema de referencia.

## Modelo extendido o alternativo

Conviene cambiar de modelo cuando los cuerpos ya no pueden tratarse como puntuales. Si se quiere estudiar una varilla, una lamina o un solido con masa distribuida, debe pasarse al modelo de cuerpos extendidos. Si hay muchas particulas, debe pasarse al leaf de sistemas discretos generales. Si el movimiento interno cambia con el tiempo, la definicion debe aplicarse instante a instante.

Esta transicion es importante: la definicion de centro de masas sigue siendo la misma, pero la forma de calcularla cambia. Para dos masas se usan [[m1]], [[m2]], [[x1]] y [[x2]]. Para un conjunto finito se usan sumas con [[m_i]]. Para una distribucion continua se usan integrales.

## Comparacion operativa

| Situacion | Modelo adecuado | Criterio |
|---|---|---|
| Dos masas sobre un eje | Definicion introductoria | Usar [[M]], [[xcm]] y [[Mxcm]] |
| Muchas particulas | Sistema discreto general | Usar [[m_i]], [[r_i]] y [[rcm]] |
| Cuerpo extendido uniforme | Modelo continuo | Usar simetria o integrales |
| Datos de distintos origenes | Modelo no valido aun | Reescribir coordenadas |
| Masa total nula | Definicion no calculable | No dividir por [[M]] |

La regla practica es definir primero el sistema y el marco. Si cualquiera de esos dos elementos cambia, el centro de masas calculado representa otro problema.
`;export{e as default};
