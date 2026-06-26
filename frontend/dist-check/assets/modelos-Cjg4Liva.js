const e=`# Tubo de Pitot - Modelo y validez\r
\r
El tubo de Pitot no es solo un dispositivo mecanico, sino una familia de modelos que convierten lecturas de presion en velocidades locales bajo determinadas hipotesis. El valor del leaf esta en entender cual es el modelo base, que presupone y cuando deja de bastar.\r
\r
## Modelo ideal\r
El modelo ideal aplica Bernoulli a una linea de corriente que termina en el punto de estancamiento. En esa imagen, el flujo llega con una cierta rapidez, se frena en la punta y transforma su energia cinetica en una sobrepresion frontal.\r
\r
- **Descripcion fisica**: la diferencia entre la presion frontal y la lateral representa el efecto del frenado local del flujo.\r
- **Ecuaciones nucleo**: la primera organiza la lectura de presiones y la segunda traduce esa lectura en rapidez.\r
\r
## Hipotesis\r
Para que el modelo ideal sea razonable, deben cumplirse las siguientes hipotesis:\r
1. **Fluido aproximadamente incompresible** en el rango de velocidad estudiado.\r
2. **Flujo estacionario** durante la lectura.\r
3. **Perdidas viscosas no dominantes** en la punta de la sonda.\r
4. **Alineacion suficiente** entre el eje de la sonda y la corriente libre.\r
\r
## Dominio de validez cuantitativo\r
- **Mach < 0.3 en aire**: por encima de ese umbral la compresibilidad ya no es despreciable.\r
- **Desviacion angular pequena**: si la sonda no mira casi de frente al flujo, la presion de estancamiento deja de representarse limpiamente.\r
- **Lecturas coherentes de presion**: la toma frontal debe superar a la lateral en un flujo realmente en movimiento.\r
\r
## Senales de fallo del modelo\r
- **Presion invertida**: si la presion lateral supera a la frontal, hay mala conexion, mala orientacion o lectura incoherente.\r
- **Oscilaciones intensas**: pueden indicar flujo separado, estela o posicion de medida mal elegida.\r
- **Velocidades demasiado altas en aire**: son una pista de que la correccion de compresibilidad ya no puede ignorarse.\r
- **Lecturas incompatibles con el contexto**: si la velocidad deducida contradice de forma fuerte el sistema real, hay que revisar el modelo, no solo la cuenta.\r
\r
## Modelo extendido o alternativo\r
Cuando la sonda real, el regimen de velocidad o la precision requerida dejan pequeño al modelo ideal, conviene pasar a modelos mas ricos.\r
\r
- **Sonda de Prandtl calibrada**: introduce factores de calibracion para tener en cuenta la geometria real de la sonda.\r
- **Rayleigh-Pitot**: se usa en gases rapidos cuando la compresibilidad ya no puede ignorarse.\r
\r
La transicion explicita es esta: si el resultado, el numero de Mach o la propia geometria del montaje indican que el flujo deja de comportarse como incompresible e ideal, conviene pasar del Pitot ideal al modelo calibrado de Prandtl o al modelo de Rayleigh-Pitot. No es un refinamiento decorativo; es un cambio de regimen fisico.\r
\r
## Comparacion operativa\r
| Modelo | Ventaja principal | Limitacion principal | Cuando elegirlo |\r
|---|---|---|---|\r
| Pitot ideal | Muy simple y rapido | Ignora compresibilidad y detalles geometricos | Bajas velocidades |\r
| Prandtl calibrado | Mejor ajuste experimental | Requiere calibracion | Sondas reales de uso tecnico |\r
| Rayleigh-Pitot | Valido en gases mas rapidos | Mayor complejidad | Regimen compresible |`;export{e as default};
