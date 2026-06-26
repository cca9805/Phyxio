const e=`# Modelos y límites de validez

## Modelo ideal

El **Modelo Ideal del Movimiento Circular Uniforme (MCU)** describe la cinemática de una partícula que recorre una circunferencia manteniendo una rapidez angular [[omega]] constante. En este escenario, la trayectoria es un círculo perfecto de radio [[R]] invariable y el tiempo que tarda en completar cada ciclo, el [[T]], es idéntico. Es un modelo de equilibrio cinemático donde la única aceleración presente es la [[ac]], cuya magnitud no cambia y cuya dirección siempre apunta al centro de giro.

## Hipótesis

- **Trayectoria perfectamente circular**: El radio constante debe mantenerse durante todo el intervalo de tiempo analizado. No se consideran derivas radiales ni trayectorias elípticas (variación menor al uno por ciento).
- **Ritmo de giro invariable**: La velocidad angular no debe sufrir fluctuaciones. Esto implica que la aceleración tangencial es nula.
- **Partícula puntual**: Se desprecia el volumen del objeto, tratándolo como un punto matemático donde se concentra toda su masa.
- **Ausencia de fuerzas disipativas**: Se asume que no hay rozamiento ni fricción en el eje que altere la energía cinética del sistema.

## Dominio de validez cuantitativo

El modelo es una aproximación excelente siempre que se cumplan las siguientes condiciones:
- Variación relativa del radio: inferior al 1%.
- Aceleración tangencial: menor al 1% de la [[ac]].
- Frecuencia de giro [[f]]: estable dentro de un margen del 1% durante el intervalo [[dt]].

## Señales de fallo del modelo

- **Pérdida de circularidad**: Si la distancia al centro [[R]] varía de forma significativa, el sistema debe analizarse mediante coordenadas polares generales o leyes de Kepler.
- **Frenado o aceleración**: Si el tiempo necesario para completar una vuelta [[T]] aumenta o disminuye con el tiempo, el modelo ideal deja de ser válido.
- **Efectos de cuerpo extenso**: Si el tamaño del objeto es comparable al radio [[R]], las distintas partes del objeto tendrán velocidades tangenciales [[v]] diferentes.

## Modelo extendido o alternativo

Conviene cambiar a un modelo más complejo (transicion) cuando se presentan las siguientes situaciones:

1.  **Hacia el MCUA**: Si se detecta que el tiempo entre pulsos o el período [[T]] varía de forma sistemática (más de un 1% por ciclo), indicando la presencia de un torque neto o aceleración angular.
2.  **Hacia la Dinámica del Sólido Rígido**: Cuando el objeto en rotación no puede aproximarse como un punto y la distribución de masa afecta al momento de inercia del sistema.
3.  **Hacia Coordenadas Polares**: Si el radio [[R]] no es constante (trayectorias espirales o elípticas), haciendo que la relación entre velocidad lineal y angular sea más compleja.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido (MCUA) |
| :--- | :--- | :--- |
| **Aceleración** | Solo centrípeta [[ac]] | Centrípeta [[ac]] + Tangencial |
| **Evolución angular** | Variación lineal con el [[t]] | Variación cuadrática con el [[t]] |
| **Periodicidad** | [[T]] y [[f]] constantes | Parámetros variables |
| **Complejidad** | Baja (1 parámetro) | Media (2 parámetros) |

El MCU es la herramienta pedagógica fundamental para entender la rotación, pero su aplicación en ingeniería real requiere validar siempre la constancia de la [[omega]].
`;export{e as default};
