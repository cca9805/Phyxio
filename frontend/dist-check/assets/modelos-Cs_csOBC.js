const e=`## Modelo ideal

El modelo estándar del proceso isobárico es el **gas ideal a presión constante con proceso cuasiestático reversible**. En este modelo, la presión [[p]] permanece exactamente fija durante toda la transformación, el gas obedece la ecuación de estado del gas ideal, y el proceso ocurre tan lentamente que el sistema está siempre en equilibrio mecánico y térmico con el entorno. El trabajo mecánico es exactamente el producto [[p]] por [[DeltaV]], y el calor absorbido satisface el primer principio sin correcciones.

Las magnitudes que se conservan en este modelo son la **presión** [[p]] y la cantidad de sustancia \\(n\\). Las magnitudes que cambian son el volumen ([[V1]] → [[V2]]), la temperatura ([[T1]] → [[T2]]), la energía interna ([[DeltaU]]) y la entropía del sistema. El modelo ignora la viscosidad del gas, la fricción del émbolo, los gradientes de temperatura dentro del gas y el tiempo necesario para que el sistema alcance el equilibrio tras cada variación infinitesimal.

## Hipótesis

- **Gas ideal**: las moléculas del gas no interactúan entre sí más allá de colisiones elásticas puntuales, y el volumen molecular propio es despreciable. Consecuencia de violarla: la ecuación de estado se desvía de la ley del gas ideal, especialmente a alta presión o baja temperatura, y la ley de Gay-Lussac deja de ser exacta.
- **Presión constante**: la presión exterior que actúa sobre el émbolo es igual a la presión interior en todo momento. Consecuencia de violarla: el proceso deja de ser isobárico; puede convertirse en un proceso politrópico o incluso irreversible si la presión exterior cambia bruscamente.
- **Proceso cuasiestático**: el proceso ocurre tan lentamente que el sistema pasa por una sucesión continua de estados de equilibrio. Consecuencia de violarla: el trabajo real es menor que el producto [[p]] por [[DeltaV]] (en expansión), porque las ondas de presión internas disipan energía. El proceso genera entropía irreversiblemente.
- **Sin fricción del émbolo**: no hay pérdida de energía por rozamiento entre el émbolo y las paredes del cilindro. Consecuencia de violarla: parte del trabajo calculado se convierte en calor de fricción y no se transfiere al entorno como energía mecánica útil.
- **Capacidades caloríficas constantes**: \\(C_p\\) y \\(C_V\\) no dependen de la temperatura. Consecuencia de violarla: el calor [[Q]] calculado como \\(n C_p \\Delta T\\) es solo una aproximación; para grandes variaciones de temperatura, los modos vibracionales de los gases poliatómicos se activan progresivamente.

## Dominio de validez cuantitativo

El modelo es válido mientras se cumplan las siguientes condiciones:

- **Presión moderada**: hasta 10 MPa para la mayoría de los gases. Por debajo de \\(5 \\times 10^5\\) Pa y con [[DeltaT]] < 500 K, la aproximación de gas ideal produce errores menores del 1% en [[W]] y [[Q]].
- **Temperatura alejada del punto de licuefacción**: para el nitrógeno (punto de licuación cercano a 77 K), el modelo falla para [[T1]] < 150 K; para el vapor de agua, falla cerca de 100 °C a 1 atm si se inicia la condensación.
- **Velocidad del proceso**: para que el proceso sea cuasiestático, la velocidad del émbolo debe ser muy inferior a la velocidad del sonido en el gas (del orden de 340 m/s en aire). En procesos de motores de combustión, esta hipótesis es aproximada.
- **Diferencia de temperatura razonable**: la hipótesis de \\(C_p\\) constante es válida hasta variaciones de unos 300 K en gases diatómicos ordinarios (N₂, O₂, aire). Para variaciones mayores, \\(C_p(T)\\) debe integrarse explícitamente.

## Señales de fallo del modelo

- **La recta en el diagrama pV no es horizontal**: si los datos de presión y volumen del proceso real muestran que la presión varía mientras el volumen cambia, el proceso no fue isobárico. Esto se detecta directamente trazando el proceso sobre el diagrama pV experimental.
- **La proporción [[V1]]/[[T1]] ≠ [[V2]]/[[T2]]**: si los datos de temperatura y volumen no satisfacen la ley de Gay-Lussac, el gas no se comportó como ideal o la presión no fue constante. Una desviación superior al 2% en la proporción indica que el modelo falla.
- **[[W]] calculado difiere del [[W]] medido**: si el trabajo mecánico medido experimentalmente (por ejemplo, mediante el desplazamiento del émbolo) es significativamente menor que el producto [[p]] por [[DeltaV]], hay irreversibilidades presentes (fricción, expansión rápida).
- **Temperatura de la pared del cilindro diferente de la del gas**: si hay gradiente térmico apreciable entre el gas y las paredes, el proceso no fue cuasiestático ni isotérmicamente equilibrado con el entorno, y el intercambio de calor real difiere del calculado.

## Modelo extendido o alternativo

El **proceso politrópico** es la generalización natural del proceso isobárico. En un proceso politrópico con índice \\(n\\), la presión y el volumen satisfacen una relación del tipo \\(p \\cdot V^n\\) constante. El proceso isobárico corresponde al caso límite de índice nulo (presión constante), el isotérmico a índice 1, el adiabático a índice \\(\\gamma\\) y el isocórico a índice \\(n\\) tendiendo a infinito. El modelo politrópico permite describir procesos con disipación parcial de calor que no son ni completamente adiabáticos ni completamente isobáricos.

Para gases reales con interacciones moleculares (gases de Van der Waals, gases densos), la ecuación de estado de Van der Waals sustituye a la ley del gas ideal. En ese caso, el trabajo isobárico ya no es el simple producto [[p]] por [[DeltaV]] y debe calcularse integrando \\(\\int_{V_1}^{V_2} p \\, dV\\) con la ecuación de estado real. La diferencia respecto al modelo ideal puede superar el 5% a presiones moderadas para gases polares o densos.

Conviene pasar al modelo extendido (politrópico o Van der Waals) cuando las condiciones del proceso se acercan a los límites de validez cuantitativa descritos arriba: presiones superiores a 10 MPa, temperaturas cercanas al punto de condensación, o procesos suficientemente rápidos para que la hipótesis cuasiestática falle.

## Comparación operativa

| Criterio | Modelo ideal isobárico | Modelo politrópico / gas real |
|---|---|---|
| Fórmula del trabajo | [[p]] por [[DeltaV]] (exacta) | integral numérica de \\(\\int p \\, dV\\) |
| Ley de estado | gas ideal | Van der Waals u otra EOS real |
| Presión durante el proceso | Constante exactamente | Puede variar (politrópico, índice \\(n\\)) |
| Calor intercambiado | \\(n C_p \\Delta T\\) si \\(C_p\\) cte | Requiere integrar \\(C_p(T)\\) |
| Rango de aplicación | Baja-media presión, gas lejos de condensación | Alta presión, gas polar o denso |
| Complejidad de cálculo | Mínima (producto de dos escalares) | Moderada-alta (integración numérica) |
| Error típico en [[W]] | < 1% en condiciones ordinarias | Reducido a < 0.1% para gas real |
`;export{e as default};
