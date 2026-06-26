const e=`## Modelo ideal

El modelo ideal de armónicos en cuerdas supone una cuerda perfectamente flexible, homogénea y con extremos rígidamente fijos. En este modelo, la cuerda no tiene masa propia que altere las condiciones de contorno, y la tensión es uniforme a lo largo de toda su longitud.

Las predicciones de este modelo son frecuencias puramente armónicas donde cada modo n tiene frecuencia exactamente n veces la fundamental. Los nodos están perfectamente localizados en los extremos y distribuidos simétricamente para armónicos superiores.

Este modelo simplificado captura la esencia física del fenómeno y permite cálculos analíticos exactos. Es la base teórica sobre la que se construye la comprensión de sistemas más complejos.

## Hipótesis

- **Extremos perfectamente fijos**: Los puntos de sujeción son nodos ideales con desplazamiento permanentemente nulo. Violación: un puente con masa finita o cejilla elástica introduce movimiento parcial y desplaza las frecuencias.

- **Cuerda perfectamente flexible**: Sin rigidez a la flexión, solo resiste a la tracción. Violación: cuerdas gruesas o rígidas tienen rigidez propia que eleva las frecuencias de armónicos superiores respecto a los valores ideales.

- **Homogeneidad completa**: La densidad lineal μ es constante en toda la cuerda. Violación: cuerdas dañadas, deshilachadas o con nudos modifican localmente la velocidad de propagación y alteran el espectro.

- **Amplitud pequeña**: Las oscilaciones mantienen el régimen lineal donde la tensión no varía apreciablemente. Violación: golpes fuertes introducen no linealidades que generan armónicos adicionales no predichos.

- **Sin amortiguamiento**: La energía mecánica se conserva indefinidamente. Violación: en cuerdas reales, la disipación por fricción interna y radiación sonora atenúa progresivamente la vibración.

## Dominio de validez cuantitativo

El modelo ideal es válido cuando se cumplen las siguientes condiciones numéricas:

- Relación longitud/diámetro L/d > 100, garantizando que la rigidez a flexión es despreciable frente a la tensión.

- Amplitud máxima de oscilación y_max < 0.01 L, manteniendo el régimen lineal donde sin(θ) ≈ θ.

- Frecuencias inferiores a 5 kHz para cuerdas musicales típicas, donde los efectos de rigidez son pequeños (< 1 % de desviación).

- Tensión uniforme con variaciones relativas menores al 5 % a lo largo de toda la cuerda.

## Señales de fallo del modelo

- **Frecuencias no exactamente múltiplos enteros**: Si el cociente entre [[f_n]] y [[f_1]] difiere significativamente de [[n]], aparece **inarmonicidad** por rigidez de la cuerda.

- **Nodos imperfectos**: En el gráfico experimental, los puntos de amplitud mínima no alcanzan el cero completo, indicando amortiguamiento o condiciones de contorno imperfectas.

- **Decaimiento rápido**: Si la vibración desaparece en menos de 1 segundo para cuerdas musicales, el amortiguamiento es excesivo para el modelo conservativo.

- **Generación de subarmónicos**: Frecuencias inferiores a la fundamental indican comportamiento no lineal o condiciones de excitación complejas.

## Modelo extendido o alternativo

El **modelo de cuerda rígida** (Rayleigh, 1877) incorpora el momento de flexión de la cuerda. En esa lectura, [[f_n]] queda por encima del valor ideal mediante un factor corrector que aumenta con el cuadrado de [[n]].

El parámetro de rigidez controla cuánto se separan los armónicos altos de la serie ideal. Este modelo predice inarmonicidad creciente con [[n]].

Cuando conviene pasar al modelo extendido: cuerdas de piano (especialmente agudas), alambres gruesos de baja tensión, o cuando se requiere precisión en la afinación superior a 1 cent.

El **modelo con amortiguamiento** añade decaimiento exponencial temporal, más realista para predicciones de sostenido del sonido pero matemáticamente más complejo al perderse la naturaleza estacionaria.

Cambiar al modelo extendido cuando se analizan transitorios de ataque o la evolución temporal de la envolvente sonora.

## Comparación operativa

| Característica | Modelo ideal | Modelo extendido (cuerda rígida) |
|---|---|---|
| Precisión frecuencias | Exacta para n pequeño | Superior para todos n |
| Complejidad matemática | Baja (algebraica) | Media (raíz cuadrada) |
| Parámetros adicionales | Ninguno | B (rigidez) |
| Rango de aplicación | Cuerdas delgadas, f < 5 kHz | Cuerdas gruesas, todo el rango |
| Tiempo de cálculo | Instantáneo | Rápido |

El modelo ideal es preferible para estimaciones rápidas, diseño conceptual de instrumentos y comprensión pedagógica. El modelo extendido se requiere para afinación de pianos, análisis de calidad sonora y simulaciones acústicas precisas.
`;export{e as default};
