const a=`## Modelo ideal

El modelo ideal de inductancia mutua trata dos bobinas como elementos lineales, fijos y acoplados por un flujo comun. La corriente primaria [[I1]] produce un flujo enlazado [[lambda_21]] en la secundaria, y solo los cambios de esa corriente generan [[epsilon_2]].

Este modelo conserva la lectura esencial: acoplamiento magnetico, fem inducida y polaridad de Lenz. Ignora resistencia de bobinados, capacitancias parasitas, fugas variables, saturacion del nucleo, movimiento relativo y retardos de propagacion.

## Hipótesis

- La geometria de ambas bobinas permanece fija; si se viola, [[M]] cambia.
- El nucleo trabaja en regimen lineal; si se viola, [[M]], [[L1]] y [[L2]] dependen del punto de trabajo.
- El acoplamiento puede resumirse con un [[k]] constante; si se viola, las fugas cambian durante el proceso.
- La corriente que cambia es la primaria; si se viola, debe redefinirse que bobina actua como fuente.
- Los tiempos no son tan cortos como para dominar por capacitancias parasitas entre bobinas.

## Dominio de validez cuantitativo

El modelo lineal es razonable si la variacion efectiva de [[M]] queda por debajo del 5 % en el rango de corriente usado. En nucleos de aire esta condicion suele depender de la geometria; en nucleos ferromagneticos depende de evitar saturacion.

Como escala practica, transitorios con [[Deltat]] mayor que 1 ms suelen admitir una lectura media en cursos introductorios si las bobinas son pequeñas frente a la longitud de onda electromagnetica relevante. En microsegundos, el acoplamiento capacitivo puede contaminar la medida.

## Señales de fallo del modelo

Una señal clara es que [[epsilon_2]] medida no escala proporcionalmente con la rapidez de cambio de [[I1]]. Otra es que la curva de [[lambda_21]] frente a [[I1]] se curva al aumentar la corriente primaria.

Tambien fallan las hipotesis si el nucleo se calienta, aparece zumbido de saturacion, el valor aparente de [[k]] supera el intervalo fisico usual o la polaridad medida cambia por conexiones no documentadas.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si resistencia, capacitancia, fuga variable o carga secundaria modifican el resultado, se usa un modelo de inductores acoplados con resistencias, capacitancias parasitas y coeficiente de acoplamiento dependiente del punto de trabajo.

En transformadores reales, el modelo extendido separa magnetizacion, fuga, perdidas del nucleo y carga. En transferencia inductiva de energia, tambien incorpora distancia, desalineacion y frecuencia de excitacion.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precision | Buena para bobinas fijas y lineales | Mejor con carga, fugas y altas frecuencias |
| Complejidad | Usa [[M]], [[DeltaI1]] y [[Deltat]] | Añade resistencia, parasitos, [[k]] variable y perdidas |
| Rango | Introduccion y estimaciones medias | Transformadores reales y acoplos de potencia |
| Lectura | Flujo compartido y fem secundaria | Transferencia de potencia, fase, perdidas y resonancia |
| Limite | No describe saturacion ni parasitos | Requiere parametros experimentales |
`;export{a as default};
