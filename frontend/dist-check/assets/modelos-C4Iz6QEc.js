const e=`# Modelo de intensidad ondulatoria

## Modelo ideal

El modelo ideal de intensidad ondulatoria describe la propagación esférica de ondas tridimensionales desde una fuente puntual isotrópica en un medio homogéneo no absorbente. Este modelo considera que la potencia emitida se distribuye uniformemente sobre la superficie de una esfera creciente, manteniéndose constante la energía total transportada.

En este modelo simplificado, la intensidad [[I_intensidad]] sigue estrictamente la ley del inverso del cuadrado de la distancia: decrece proporcionalmente a 1/r² desde la fuente. La potencia total [[P_potencia]] se conserva en todo el espacio, redistribuyéndose sobre áreas esféricas cada vez mayores sin pérdidas por disipación.

La simplificación central consiste en ignorar cualquier mecanismo de absorción atmosférica o terrestre, considerar la fuente como puntual y perfectamente isotrópica, y asumir que el medio de propagación es uniforme e infinito, sin reflexiones ni refracciones en interfaces.

## Hipótesis

- **Fuente puntual isotrópica**: Emite potencia [[P_potencia]] uniformemente en todas direcciones, sin preferencia angular.

- **Propagación esférica pura**: Las frentes de onda son esferas perfectas centradas en la fuente, expandiéndose a velocidad constante del medio.

- **Medio homogéneo e infinito**: Propiedades físicas constantes, como densidad [[rho]] y velocidad de onda, en todo el espacio, sin discontinuidades ni interfaces.

- **Ausencia de absorción**: Conservación estricta de la energía mecánica; ninguna conversión en calor ni otras formas de energía.

- **Campo lejano**: Distancias consideradas mucho mayores que la dimensión característica de la fuente.

**Consecuencia de violar cada hipótesis**:

- Si la fuente no es isotrópica, la intensidad varía con la dirección según el patrón de radiación; la ley 1/r² se mantiene pero con amplitud angular diferente.

- Si la propagación no es esférica (fuentes lineales o planas), el exponente de atenuación cambia: 1/r para cilíndricas, constante para planas.

- Si el medio no es homogéneo, la velocidad y dirección de propagación varían, curvando los rayos ondulatorios mediante refracción.

- Si existe absorción, la intensidad decae más rápidamente que 1/r², siguiendo un factor exponencial adicional exp(-αr).

- Si se opera en campo cercano, la geometría específica de la fuente distorsiona la distribución esférica pura.

## Dominio de validez cuantitativo

El modelo es válido cuando se cumplen simultáneamente:

- La distancia es al menos 10 veces la dimensión característica de la fuente: r > 10L, garantizando régimen de campo lejano.

- El camino de propagación es menor que la longitud de atenuación del medio: r < 1/α, donde α es el coeficiente de absorción. En aire para frecuencias audibles, esto típicamente significa r < 1 km.

- Las variaciones de temperatura y densidad del medio son menores que 10% a lo largo del camino de propagación, asegurando homogeneidad aproximada.

- La frecuencia está en el rango donde la longitud de onda es mucho menor que la distancia considerada: λ << r, típicamente f > 20 Hz para distancias > 10 m.

El error relativo del modelo respecto al comportamiento real es inferior al 10% cuando se operan dentro de estos límites.

## Señales de fallo del modelo

- **Decaimiento más rápido que 1/r²**: Si la intensidad medida decrece exponencialmente o con potencia mayor a -2 en escala log-log, la absorción del medio es significativa y no puede ignorarse.

- **Anisotropía observable**: Si la intensidad varía notablemente según la dirección a igual distancia, la fuente no es isotrópica y el modelo debe incluir el patrón de radiación direccional.

- **Reflexiones coherentes**: Si se observan interferencias (máximos y mínimos espaciales) superpuestas a la atenuación geométrica, existen reflexiones en superficies cercanas que invalidan el modelo de espacio libre.

- **Variación de velocidad con frecuencia**: Si ondas de diferente frecuencia viajan a velocidades apreciablemente distintas (dispersión), el modelo de ondas esféricas coherentes se rompe.

- **Intensidad residual a gran distancia**: Si se detecta intensidad significativa más allá de la distancia de atenuación esperada, pueden existir guías de onda naturales o canalización del medio.

## Modelo extendido o alternativo

El **modelo extendido con absorción atmosférica** incorpora un término de atenuación exponencial que reduce la intensidad adicionalmente a la divergencia geométrica. La intensidad resulta:

I(r) = (P / 4πr²) · exp(-αr)

Donde α es el coeficiente de absorción atmosférico, que depende fuertemente de la frecuencia, temperatura y humedad. En aire, α ≈ 10⁻³ m⁻¹ para frecuencias audibles, volviéndose significativo a distancias mayores que 100 m.

El **modelo de fuente direccional** considera que la potencia se concentra en un ángulo sólido reducido Ω (esteradianes) en lugar de distribuirse sobre la esfera completa (4π esteradianes). La intensidad en el eje principal se multiplica por el factor de directividad D = 4π/Ω:

I_direccional(r) = D · (P / 4πr²)

Un altavoz típico puede tener D ≈ 10, mientras que una antena parabólica bien diseñada alcanza D ≈ 10⁴ o más.

Cuando conviene pasar al modelo con absorción: cuando las distancias superan el kilómetro en aire o cuando se observa decaimiento sistemáticamente más rápido que 1/r² en mediciones.

Cuando conviene usar el modelo direccional: cuando la fuente tiene geometría obviamente asimétrica (bocina, reflector) o cuando se requiere calcular intensidad específica en el eje de máxima emisión.

## Comparación operativa

| Característica | Modelo ideal | Modelo con absorción | Modelo direccional |
|---|---|---|---|
| **Decaimiento de intensidad** | Proporcional a 1/r² | Proporcional a (1/r²)·exp(-αr) | Proporcional a D/r² en eje |
| **Potencia total** | Conservada | Disminuye por conversión térmica | Conservada pero anisotrópica |
| **Isotropía** | Completa | Completa | Direccional |
| **Complejidad matemática** | Simple, solución analítica cerrada | Moderada, requiere coeficiente α | Moderada, requiere patrón de radiación |
| **Rango de aplicación** | Cortas distancias, medios transparentes | Largas distancias, medios absorbentes | Fuentes con geometría direccional |
| **Conservación de energía** | Total | Parcial (absorción) | Total, pero anisotrópica |
| **Precisión experimental** | ±10% en aire para r < 100 m | ±5% si α es conocido | ±15% dependiendo del patrón medido |

**Ventajas y límites**:

El modelo ideal proporciona estimaciones rápidas y comprensión conceptual clara, pero falla sistemáticamente en distancias grandes o medios absorbentes. El modelo con absorción captura el decaimiento real observable en todas las propagaciones atmosféricas reales, pero requiere conocer coeficientes que dependen de condiciones ambientales variables. El modelo direccional describe adecuadamente sistemas de sonorización y comunicaciones, pero complica los cálculos al requerir integración angular de la distribución de intensidad.

La transición entre modelos es gradual: para fuentes moderadamente direccionales (D < 10), conviene usar el modelo ideal con corrección por directividad; para absorciones débiles (αr < 0.1), el modelo ideal suele ser suficiente.
`;export{e as default};
