const a=`# Ejemplo tipo examen

## Enunciado

Un hilo recto largo y fino está cargado con densidad lineal uniforme. Se conocen los siguientes datos: [[lambda]] vale 8 nC/m; ε₀ vale 8.85 × 10⁻¹² C²/(N·m²). Se pide: (a) calcular el campo eléctrico [[E]] a [[r_dist]] = 5 cm del hilo, lejos de los extremos; (b) hallar la distancia [[r_dist]] a la que [[E]] vale la mitad del resultado anterior; (c) determinar la densidad superficial [[sigma]] de un plano infinito que produzca el mismo campo que el obtenido en (a).

## Datos

- [[lambda]] es 8 nC/m (equivalente a 8 × 10⁻⁹ C/m)
- [[r_dist]] en el apartado (a) es 5 cm (equivalente a 0.05 m)
- ε₀ vale 8.85 × 10⁻¹² C²/(N·m²)
- El hilo es mucho más largo que la distancia de observación
- La carga está distribuida solo en la superficie del hilo (no hay [[rho_vol]] en este caso); la descripción volumetrica es irrelevante aquí porque la distribución es lineal

## Definición del sistema

Sistema de referencia: origen en el punto del hilo más cercano al punto campo; eje z a lo largo del hilo; eje r radial perpendicular al hilo. El punto campo está sobre el eje r a distancia [[r_dist]] del hilo. Por simetría cilíndrica, [[E]] no tiene componente axial ni azimutal: solo componente radial.

## Modelo físico

La longitud del hilo es mucho mayor que [[r_dist]] = 5 cm, por lo que se aplica el modelo de **hilo infinito con [[lambda]] uniforme**. Las contribuciones [[dE]] de los elementos del hilo tienen componentes axiales que se anulan por simetría; solo la componente radial neta es no nula y se integra sobre toda la longitud. Para el apartado (c) se aplica el modelo de **plano infinito con [[sigma]] uniforme**.

## Justificación del modelo

El modelo de hilo infinito es válido cuando [[r_dist]] es mucho menor que la longitud del hilo. Con [[r_dist]] = 5 cm y un hilo de longitud métrica o mayor, la condición se cumple con amplitud. El modelo dejaría de ser válido si [[r_dist]] fuera comparable a la longitud del hilo: en ese caso habría que integrar [[dE]] para la longitud finita y el resultado sería menor que el del hilo infinito.

## Resolución simbólica

**Apartado (a):** el campo radial de un hilo infinito se obtiene integrando las contribuciones [[dE]] con simetría cilíndrica:

{{f:campo_hilo_infinito}}

**Apartado (b):** de la misma fórmula se deduce que [[E]] es inversamente proporcional a [[r_dist]]. Si [[E]] se divide entre dos, [[r_dist]] se duplica, ya que el producto de ambos es constante para [[lambda]] fija.

**Apartado (c):** el campo de un plano infinito perpendicular al eje r no depende de [[r_dist]]:

{{f:campo_plano_infinito}}

Igualando al valor de [[E]] del apartado (a) y despejando [[sigma]] se obtiene la densidad superficial buscada.

## Sustitución numérica

**Apartado (a):** el denominador de la fórmula del hilo infinito es el producto 2π por ε₀ por [[r_dist]]. Multiplicando 2π por 8.85 × 10⁻¹² da aproximadamente 55.6 × 10⁻¹²; multiplicando por 0.05 da 2.78 × 10⁻¹². Dividiendo [[lambda]] = 8 × 10⁻⁹ entre 2.78 × 10⁻¹² da [[E]] ≈ 2878 V/m. Así [[E]] ≈ 2.88 kV/m.

**Apartado (b):** como [[E]] varía inversamente con [[r_dist]], para obtener la mitad del campo basta duplicar la distancia. Por tanto [[r_dist]] ≈ 10 cm.

**Apartado (c):** despejando [[sigma]] de la fórmula del plano infinito, [[sigma]] es igual a 2 por ε₀ por [[E]]. Multiplicando 2 por 8.85 × 10⁻¹² por 2878 da [[sigma]] ≈ 51 × 10⁻⁹ C/m². Así [[sigma]] ≈ 51 nC/m².

## Validación dimensional

**Apartado (a):** las unidades de [[lambda]] son C/m; las de ε₀ son C²/(N·m²); las de [[r_dist]] son m. El denominador 2πε₀ · [[r_dist]] tiene unidades \`[C² N⁻¹ m⁻¹]\`. Dividiendo C/m entre C² N⁻¹ m⁻¹ da \`[N C⁻¹]\`, equivalente a V/m ✓

**Apartado (c):** ε₀ · [[E]] tiene unidades \`[C² N⁻¹ m⁻²] · [N C⁻¹]\` que simplifican a C/m². Multiplicando por el factor numérico 2 se mantiene C/m² ✓

## Interpretación física

El apartado (b) ilustra la ley 1/r del hilo de manera directa: doblar [[r_dist]] divide [[E]] exactamente por dos. Esto implica que [[E]] depende únicamente de [[lambda]] y [[r_dist]], y que cualquier cambio en la distancia se traduce de forma inversamente proporcional en el campo. La geometría lineal de la fuente es físicamente coherente con el decaimiento más lento que el de la carga puntual: la fuente extendida “retiene” el campo en la dirección radial. Esta misma ley 1/r es la que domina en cables de alta tensión y condensadores cilíndricos.

El apartado (c) indica que la misma amplitud de [[E]] puede obtenerse con geometrías completamente diferentes. El campo del plano es físicamente significativo: [[sigma]] determina la amplitud y la simetría planar determina que el campo no aumenta ni disminuye con [[r_dist]]. En distribuciones volumétricas, [[rho_vol]] determinaría el campo de forma análoga pero con integración en tres dimensiones.

# Ejemplo de aplicación real

## Contexto

Un cable de alta tensión horizontal de longitud 200 m transporta una carga acumulada de 1.6 μC en condiciones de baja humedad. Un técnico trabaja con un instrumento de medida sensible que puede dañarse si [[E]] supera 500 V/m. Es necesario determinar la distancia mínima segura a la que el técnico puede trabajar respecto al cable.

## Estimación física

La longitud del cable (200 m) es muy superior a las distancias de trabajo típicas del técnico (del orden de metros), por lo que el modelo de hilo infinito con [[lambda]] uniforme es adecuado. La densidad lineal se obtiene dividiendo la carga total entre la longitud: 1.6 × 10⁻⁶ C entre 200 m da [[lambda]] ≈ 8 × 10⁻⁹ C/m.

Aplicando la fórmula del campo del hilo infinito:

{{f:campo_hilo_infinito}}

y despejando [[r_dist]] para [[E]] igual al límite de 500 V/m: el denominador 2π × 8.85 × 10⁻¹² × 500 da aproximadamente 27.8 × 10⁻⁹. Dividiendo [[lambda]] = 8 × 10⁻⁹ entre 27.8 × 10⁻⁹ da [[r_dist]] ≈ 0.288 m. La distancia mínima segura es aproximadamente 29 cm.

## Interpretación

La distancia mínima de seguridad de 29 cm está determinada principalmente por [[lambda]]: si la carga transportada se duplicara a 16 nC/m, la distancia mínima también se duplicaría a 58 cm, ilustrando la proporcionalidad lineal entre [[lambda]] y [[r_dist]] a campo fijo. A su vez, si el límite del instrumento bajara a 250 V/m, la distancia se duplicaría igualmente. Esto permite al técnico estimar la distancia segura de forma rápida: basta con multiplicar la distancia de referencia por el cociente entre la [[lambda]] real y la de referencia, o entre el límite de referencia y el límite real del instrumento.
`;export{a as default};
