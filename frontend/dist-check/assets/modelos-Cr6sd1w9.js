const e=`## Modelo ideal

El modelo ideal es la barra unidimensional de Bernoulli: un solido elastico, homogeneo, isotropo, de seccion uniforme, cuya longitud es mucho mayor que su dimension transversal. La propagacion longitudinal (o torsional en seccion circular) es no dispersiva, con velocidad constante independiente de la frecuencia. Las condiciones de contorno son ideales (extremo perfectamente libre o perfectamente empotrado).

En este modelo, el espectro de frecuencias naturales es exactamente armonico: las frecuencias son multiplos enteros (o impares) de la fundamental. Los modos son funciones trigonometricas puras (senos y cosenos). La ortogonalidad es exacta.

## Hipotesis

- Barra delgada: longitud mucho mayor que dimension transversal. La longitud de onda del modo debe ser mucho mayor que el diametro.

- Homogeneidad: propiedades ([[E_young]], [[G_shear]], [[rho]]) uniformes en toda la barra.

- Isotropia: misma respuesta en todas las direcciones.

- Elasticidad lineal: la deformacion es proporcional a la tension y reversible.

- Condiciones de contorno ideales: extremo libre significa esfuerzo exactamente cero; extremo fijo significa desplazamiento exactamente cero.

- Sin amortiguamiento: la vibracion persiste indefinidamente una vez excitada.

- Sin acoplamiento entre tipos de vibracion: los modos longitudinales, torsionales y flexionales son independientes.

## Dominio de validez cuantitativo

El modelo es preciso cuando la longitud de onda del modo [[lambda_n]] es mucho mayor que d (diametro o dimension transversal). Cuantitativamente, la correccion de Rayleigh-Love es despreciable (menor del 1 %) cuando [[lambda_n]] > 10d, que corresponde a n < L/(5d) para libre-libre.

Para una barra de medio metro y diametro de 10 mm, el modelo es preciso aproximadamente hasta el decimo modo, con frecuencias del orden de 50 kHz en acero. Mas alla, la dispersion por inercia lateral se vuelve significativa.

El amortiguamiento es despreciable para metales (Q > 1000) pero importante para polimeros (Q ≈ 10-100), donde los picos de resonancia se ensanchan y desplazan ligeramente.

## Señales de fallo del modelo

- Las frecuencias medidas de armonicos altos no son multiplos exactos de la fundamental: dispersion por inercia lateral.

- El factor de calidad medido es bajo (picos anchos): amortiguamiento no despreciable, se necesita modelo viscoelastico.

- Las frecuencias longitudinales y torsionales interactuan (acoplamiento): seccion no circular o barra curvada.

- Las frecuencias dependen de la amplitud de excitacion: no linealidad, fuera del regimen elastico lineal.

- Las condiciones de contorno reales son imperfectas: un apoyo elastico modifica las frecuencias respecto al modelo ideal libre o fijo.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo: si aparece cualquiera de las señales anteriores (armonicos altos dispersivos, picos anchos, acoplamiento modal, apoyo elastico o amplitud no lineal), se debe pasar al modelo alternativo que represente el mecanismo dominante: Pochhammer-Chree para dispersion de alta frecuencia, viscoelasticidad para amortiguamiento, apoyo elastico para contornos reales o elementos finitos para geometria no uniforme.

Para alta frecuencia, la teoria de Pochhammer-Chree describe la propagacion exacta en un cilindro elastico, incluyendo todos los modos (longitudinales, torsionales, flexionales y mixtos) con sus curvas de dispersion completas.

Para barras con amortiguamiento, se usa el modelo viscoelastico con modulo complejo E* = E(1 + i eta), donde eta es el factor de perdida. Las frecuencias de resonancia se desplazan ligeramente y adquieren un ancho de banda finito.

Para condiciones de contorno elasticas (apoyo con rigidez finita), las frecuencias naturales se desplazan respecto al modelo ideal y deben resolverse con una ecuacion trascendental.

Para barras de seccion variable o material graduado, se recurre a metodos numericos (elementos finitos) o a soluciones WKB para perfiles suaves.

## Comparacion operativa

| Criterio | Modelo de barra delgada | Modelo de Pochhammer-Chree |
|---|---|---|
| Armonicos | Exactamente equiespaciados | Dispersivos (no equiespaciados) |
| Velocidad de fase | Constante ([[v_L]] o [[v_T]]) | Dependiente de frecuencia |
| Modos acoplados | No | Si (longitudinal-radial acoplados) |
| Rango de validez | lambda >> d | Cualquier relacion lambda/d |
| Complejidad | Formula cerrada | Ecuacion trascendental numerica |
| Uso tipico | Diseño de diapasones, ASTM E1876 | Ultrasonidos de alta frecuencia, guias de onda |
`;export{e as default};
