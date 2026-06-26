const e=`# Modelos y límites de la formulación diferencial

## Modelo ideal
El modelo ideal de la formulación diferencial de Maxwell describe el comportamiento de los campos eléctrico [[E]] y magnético [[B]] en el vacío absoluto, asumiendo que el espacio es un continuo matemático sin estructura atómica y que los campos son funciones infinitamente derivables. En este modelo, las interacciones ocurren de forma local y la velocidad de la luz [[c]] es una constante universal insuperable.

## Hipótesis
La formulación diferencial de las ecuaciones de Maxwell se basa en una serie de suposiciones matemáticas y físicas:
1. **Continuidad del medio**: Se asume que el espacio es un continuo donde los campos están definidos en cada punto. No se considera la estructura granular de la materia a escalas subatómicas.
2. **Diferenciabilidad**: Las funciones que describen los campos deben ser derivables. Esto implica que no puede haber saltos bruscos o discontinuidades infinitas en el campo dentro del dominio analizado.
3. **Linealidad del medio**: Se asume que las constantes [[epsilon0]] y [[mu0]] son escalares constantes que no dependen de la intensidad del campo ni de la dirección.
4. **Régimen clásico**: El modelo ignora los efectos de la mecánica cuántica y de la relatividad general (curvatura del espacio-tiempo).

## Dominio de validez cuantitativo
Este modelo es extremadamente preciso en un dominio muy amplio, pero presenta límites claros:
- **Límite espacial**: El modelo es válido para distancias superiores a la escala de \\(10^{-15} \\ \\mathrm{m}\\). Por debajo de este radio (escala del núcleo atómico), los efectos cuánticos dominan. En esta escala, el **orden de magnitud** de la densidad de carga [[rho]] de una partícula puntual causaría una divergencia [[divE]] matemática infinita e inmanejable.
- **Límite de intensidad**: Las ecuaciones son lineales hasta campos del **orden de magnitud** de \\(10^{18} \\ \\mathrm{V/m}\\) (límite de Schwinger), donde el vacío mismo comienza a comportarse de forma no lineal debido a la creación de pares partícula-antipartícula.
- **Frecuencia**: Válido desde el reposo hasta frecuencias de rayos gamma (inferiores a \\(10^{22} \\ \\mathrm{Hz}\\)).

## Señales de fallo del modelo
Existen escenarios donde el modelo diferencial emite señales observables de que se ha alcanzado su límite:
1. **Divergencias infinitas**: Si al calcular el [[divE]] el resultado tiende a infinito en un punto, indica que la aproximación de carga puntual ha fallado y se requiere un modelo de distribución espacial o cuántico.
2. **Inconsistencias en interfaces**: Al aproximarse a una frontera entre dos medios (como aire y metal), si las derivadas espaciales no pueden definirse, el modelo diferencial falla. Se observa una discontinuidad matemática.
3. **Pérdida de conservación de energía**: Si en un cálculo dinámico no se incluye la corriente de desplazamiento proporcional a [[dE_dt]], el sistema resultante viola la conservación de la carga, una señal crítica de fallo del modelo incompleto.

## Modelo extendido o alternativo
Cuando se detectan las señales anteriores, es necesario realizar una transición:
- **Formulación integral**: Ante singularidades puntuales o problemas con alta simetría, conviene realizar la **transición al** modelo integral de Maxwell. Este permite "evitar" la singularidad encerrándola en un volumen finito donde las leyes globales siguen siendo válidas.
- **Condiciones de contorno**: En interfaces bruscas, el **modelo extendido** consiste en aplicar las ecuaciones de salto (boundary conditions) en lugar de intentar derivar a través de la discontinuidad.
- **Electrodinámica Cuántica (QED)**: En escalas subatómicas o campos extremos, se debe **pasar al** modelo cuántico de campos.

## Comparación operativa
| Característica | Formulación Diferencial | Formulación Integral |
| :--- | :--- | :--- |
| **Enfoque** | Local (punto a punto) | Global (volumen/superficie) |
| **Herramienta** | Operadores Nabla (\\(\\nabla\\)) | Integrales cerradas |
| **Uso principal** | Ondas, simulaciones, TCC | Circuitos, flujo, simetría |
| **Limitación** | Discontinuidades, interfaces | No detalla el interior del punto |
| **Causalidad** | Explícita y local | Promediada en el espacio |
`;export{e as default};
