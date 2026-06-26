const e=`## Modelo ideal\r
\r
El modelo base para evaluar la irreversibilidad asume que el **entorno** se comporta como un reservorio térmico ideal a temperatura constante [[T_ent]] (capacidad calorífica infinita), y que el **sistema** puede describirse por estados de equilibrio bien definidos al inicio y al final del proceso. La entropía del sistema se calcula por un camino reversible entre esos estados (función de estado), mientras que la del entorno se calcula directamente como [[Q_sis]]/[[T_ent]].\r
\r
La simplificación central es tratar el entorno como un objeto termodinámico trivial (reservorio) cuya única magnitud relevante es [[T_ent]]. Esto permite calcular [[DeltaS_ent]] sin necesidad de conocer detalles internos del entorno. Las magnitudes conservadas son la energía total del universo y la masa; la magnitud que solo puede aumentar es [[DeltaS_univ]].\r
\r
## Hipótesis\r
\r
- **Reservorio térmico ideal**: el entorno tiene capacidad calorífica tan grande que su temperatura no cambia al absorber o ceder calor al sistema.\r
  - Violación: si el entorno es pequeño (capacidad finita), su temperatura cambia y hay que integrar para calcular [[DeltaS_ent]].\r
\r
- **Estados de equilibrio definidos**: al inicio y al final del proceso, tanto sistema como entorno están en equilibrio termodinámico interno (temperatura, presión y composición uniformes).\r
  - Violación: durante el proceso irreversible, el sistema puede estar fuera de equilibrio (gradientes internos), pero la entropía inicial y final sí deben estar bien definidas.\r
\r
- **única fuente de irreversibilidad identificada**: la fórmula de generación por transferencia de calor asume que la única irreversibilidad es el gradiente térmico. No incluye fricción ni mezcla.\r
  - Violación: si hay fricción mecánica, el calor generado por fricción debe incluirse como fuente adicional de [[S_gen]].\r
\r
- **Calor real medible**: el calor intercambiado [[Q_sis]] puede medirse o calcularse independientemente mediante el balance energético del sistema.\r
  - Violación: si el proceso es tan rápido o turbulento que Q no puede medirse, se recurre al primer principio con mediciones de U y W.\r
\r
- **Sistema cerrado**: no hay transferencia de masa con el entorno durante el proceso.\r
  - Violación: en sistemas abiertos, hay contribuciones entrópicas adicionales por flujo de masa (entropía de mezcla, entropía de transporte).\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo de reservorio a temperatura constante es válido cuando:\r
- La capacidad calorífica del entorno es al menos 100 veces mayor que la del sistema (variación de [[T_ent]] menor del 1%).\r
- El proceso ocurre a escala temporal lenta respecto a la relajación térmica del entorno.\r
- Las temperaturas están en el rango 505000 K (por debajo de 50 K, efectos cuánticos; por encima de 5000 K, disociación molecular).\r
\r
> [!NOTE]\r
> Para un bloque de 1 kg (c_p  500 J/(kgK)) en contacto con un lago a 293 K, la hipótesis de reservorio es excelente: el lago (>10 kg de agua) no cambia apreciablemente de temperatura.\r
\r
La fórmula de generación por gradiente térmico es cuantitativamente exacta cuando:\r
- Ambas temperaturas son constantes durante toda la transferencia (reservorios ideales a ambos lados).\r
- La transferencia se realiza sin resistencias adicionales (sin fricción en el medio conductor).\r
- El error es < 1% si la variación de temperatura de cada cuerpo es < 1% de su T absoluta durante el proceso.\r
\r
## Señales de fallo del modelo\r
\r
- **[[DeltaS_univ]] < 0**: seal inequvoca de error (no de fallo del modelo, sino de cálculo incorrecto o datos errneos).\r
- **[[DeltaS_univ]] = 0 exacto para un proceso real**: si hay cualquier gradiente finito, fricción o mezcla, el resultado debera ser > 0. Un cero exacto indica que se ha calculado como si fuese reversible.\r
- **[[S_gen]] calculado muy distinto del medido experimentalmente**: posible seal de que hay fuentes de irreversibilidad no incluidas (fricción, mezcla, prdidas radiativas).\r
- **[[T_ent]] del entorno cambia apreciablemente durante el proceso**: la hipótesis de reservorio falla y hay que usar un balance integral del entorno.\r
- **Gradientes internos persistentes en el sistema**: si el sistema no alcanza equilibrio interno entre las mediciones de estado inicial y final, [[DeltaS_sis]] no est bien definida.\r
- **Datos experimentales incompatibles**: si el calor medido, las temperaturas finales y el signo de [[DeltaS_univ]] no son coherentes entre sí, hay que revisar sensores, frontera del sistema o pérdidas no modeladas.\r
\r
## Modelo extendido o alternativo\r
\r
Para superar las limitaciones del modelo de reservorio:\r
\r
- **Balance entrópico integral**: cuando el entorno cambia de temperatura, se calcula [[DeltaS_ent]] por integración numrica, tratando al entorno como un cuerpo con capacidad calorífica finita.\r
\r
- **Modelo con mltiples fuentes**: la generación total se descompone en contribuciones térmicas, de fricción, de mezcla y de reacción. Cada fuente tiene su propia fórmula de generación basada en flujo y fuerza termodinámica.\r
\r
- **Termodinámica de no equilibrio** (Onsager, Prigogine): para procesos lejos del equilibrio, la tasa de producción de entropía se expresa como suma de productos de flujos termodinámicos (calor, masa, reacción) por sus fuerzas conjugadas.\r
\r
Cuando conviene cambiar de modelo: la transición al modelo extendido se justifica cuando:\r
- El entorno no puede modelarse como reservorio ([[T_ent]] cambia más del 5%).\r
- Hay mltiples fuentes de irreversibilidad que deben desglosarse.\r
- Se requiere la tasa temporal de generación (J/(Ks)) para diseño de procesos en rgimen estacionario.\r
\r
## Comparación operativa\r
\r
| Criterio | Modelo de reservorio | Modelo integral / mltiples fuentes |\r
|---|---|---|\r
| **Precisión** | Excelente si [[T_ent]] es realmente constante | Alta en todos los casos |\r
| **Complejidad** | Frmula algebraica simple | Integración numrica o suma de contribuciones |\r
| **Rango de aplicación** | Entorno >> sistema térmicamente | Universal |\r
| **Ventaja principal** | Clculo directo, comprensin inmediata | Desglose detallado de prdidas |\r
| **Limitación principal** | Falla si [[T_ent]] no es constante | Requiere datos detallados del proceso |\r
| **Uso tpico** | Enseanza, ejercicios, estimaciones rápidas | Diseño industrial, optimizacin, auditora energética |\r
\r
Cuándo conviene cambiar de modelo: si [[T_ent]] deja de ser casi constante, si aparecen varias fuentes comparables de [[S_gen]] o si el sistema permanece lejos del equilibrio interno, se abandona el modelo de reservorio y se usa el balance integral o el modelo de múltiples fuentes.\r
`;export{e as default};
