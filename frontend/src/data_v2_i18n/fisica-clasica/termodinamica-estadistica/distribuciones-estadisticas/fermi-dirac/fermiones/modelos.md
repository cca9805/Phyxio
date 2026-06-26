## Modelo ideal

El modelo ideal trata un conjunto de fermiones indistinguibles en equilibrio térmico, distribuidos entre estados cuánticos bien definidos. La pregunta central es cómo cambia la [[ocupacion_estado]] cuando aumenta la [[energia]] respecto al [[potencial_quimico]]. La respuesta no es clásica: la ocupación no crece indefinidamente porque la [[degeneracion_estado]] impone un techo al [[numero_ocupacion]]. La curva característica es decreciente: estados con [[energia]] baja frente al [[potencial_quimico]] tienden a estar ocupados, mientras que estados muy altos tienden a estar vacíos. La [[temperatura_absoluta]] controla la suavidad de esa transición.

## Hipótesis

- Estados cuánticos definidos: si se mezclan niveles distintos, la [[degeneracion_estado]] deja de representar plazas equivalentes y el [[numero_ocupacion]] queda mal contado.
- Equilibrio térmico: si el sistema no tiene [[temperatura_absoluta]] y [[potencial_quimico]] comunes, la fórmula de ocupación deja de describir la población real.
- Fermiones idénticos: si las partículas no comparten la misma identidad cuántica, el límite de Pauli no se aplica al conjunto completo.
- Gas ideal para la escala de [[energia_fermi]]: si las interacciones dominan, la relación con [[densidad_numerica]], [[masa_particula]] y [[constante_planck_reducida]] requiere correcciones.
- Régimen no relativista: si la [[energia]] característica se acerca a la energía de reposo, el modelo simple de [[energia_fermi]] ya no basta.

## Dominio de validez cuantitativo

Para la ocupación de un estado, se exige [[temperatura_absoluta]] > 0 K y una escala térmica [[constante_boltzmann]][[temperatura_absoluta]] bien definida. La lectura es estable cuando la [[energia_reducida]] está en un rango numéricamente manejable, por ejemplo -20 < [[energia_reducida]] < 20; fuera de ese intervalo la [[ocupacion_estado]] está prácticamente saturada cerca de 1 o 0. Para el gas de Fermi ideal tridimensional, se usa típicamente [[densidad_numerica]] del orden de 10^20 a 10^30 m^-3, con [[masa_particula]] positiva y fermiones no relativistas. Además, debe cumplirse 0 <= [[ocupacion_estado]] <= 1 por subestado y 0 <= [[numero_ocupacion]] <= [[degeneracion_estado]].

## Señales de fallo del modelo

Una primera señal es obtener [[ocupacion_estado]] mayor que 1 por subestado o negativa. Otra señal es que el [[numero_ocupacion]] supere la [[degeneracion_estado]], lo que revela una violación directa de la exclusión de Pauli o una mala agrupación de estados. También falla la interpretación si al aumentar la [[energia]] la ocupación crece sin cambiar [[potencial_quimico]] ni [[temperatura_absoluta]]. En materiales reales, desviaciones fuertes pueden aparecer por bandas, interacciones, confinamiento, desorden o una [[masa_particula]] efectiva distinta.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo más completo depende de si las interacciones, el confinamiento o el régimen relativista modifican de forma apreciable la [[ocupacion_estado]] respecto al caso ideal. Se cambia de modelo cuando los estados no son libres ni uniformes. En sólidos se usa una descripción de bandas y densidad de estados; en sistemas muy densos se incorporan correcciones relativistas; en materiales correlacionados se introducen interacciones. Si el sistema está fuera de equilibrio, se sustituyen las ocupaciones de equilibrio por distribuciones dependientes del proceso. La fórmula

{{f:fermi_dirac_ocupacion}}

sigue siendo una referencia, pero no siempre la historia completa.

## Comparación operativa

| Situación | Modelo útil | Magnitud clave | Riesgo principal |
| Estado aislado en equilibrio | Fermi-Dirac | [[ocupacion_estado]] | Ignorar [[potencial_quimico]] |
| Nivel degenerado | Pauli con [[degeneracion_estado]] | [[numero_ocupacion]] | Superar el máximo permitido |
| Gas ideal 3D | Escala de [[energia_fermi]] | [[densidad_numerica]] | Aplicarlo con interacciones fuertes |
| Metal real | Bandas electrónicas | [[energia_fermi]] | Confundir estado libre con banda |