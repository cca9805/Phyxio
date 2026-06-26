const e=`## Modelo ideal
El modelo ideal trata a la bobina como elemento puramente reactivo, con comportamiento lineal y sin perdidas dominantes. En ese marco, la oposicion [[Xl]] se explica con [[omega]] y [[L]], la corriente [[Il]] se determina con la tension eficaz [[V]], y [[Ql]] resume magnitud de intercambio reactivo en regimen sinusoidal estacionario.

Este modelo ofrece una base clara para aprendizaje y para estimaciones preliminares de diseno. Su fortaleza esta en anticipar tendencias fisicas correctas con bajo costo de calculo y con alta transparencia causal.

## Hipótesis
Primera hipotesis: regimen sinusoidal estable durante la ventana de analisis. Segunda hipotesis: linealidad magnetica aproximada en el rango de operacion. Tercera hipotesis: perdidas resistivas y de nucleo suficientemente pequenas respecto del efecto reactivo principal.

Cuarta hipotesis metrologica: [[V]] e [[Il]] son magnitudes RMS coherentes y obtenidas en condiciones comparables. Quinta hipotesis operativa: [[f]], [[omega]] y [[L]] estan expresadas con unidades correctas y trazables.

## Dominio de validez cuantitativo
Como criterio operativo, el modelo minimo es confiable cuando THD <= 5%, cuando la frecuencia se mantiene dentro de 0.98 <= f_medida/f_nominal <= 1.02 y cuando la perdida relativa se mantiene baja, por ejemplo R_equivalente/[[Xl]] <= 0.10 en la banda principal.

Un segundo control util es magnetico. Si la corriente de operacion se aproxima al umbral donde la inductancia efectiva cae mas de 5% respecto de nominal, conviene revisar la hipotesis de linealidad y recalibrar prediccion de oposicion y corriente.

## Señales de fallo del modelo
Una senal de fallo temprana es la incoherencia entre tendencia esperada y medicion. Si aumenta [[f]] y la rama no muestra el incremento de oposicion previsto, puede haber saturacion, perdidas o fuerte distorsion fuera del modelo ideal.

Otra senal de fallo es energetica: si se detecta disipacion activa apreciable no atribuible a incertidumbre instrumental, la descripcion puramente reactiva deja de ser suficiente. Tambien falla el modelo cuando hay alta dispersion entre ciclos bajo condiciones nominalmente iguales.

## Modelo extendido o alternativo
El siguiente nivel incorpora resistencia de devanado, perdidas de nucleo, dependencia termica y, cuando hace falta, representacion fasorial completa de impedancia. Este modelo extendido separa mejor intercambio reactivo y perdida activa, y permite evaluar limites termicos con mayor realismo.

La transicion explicita es esta: cuando conviene cambiar a modelo alternativo ocurre si R_equivalente/[[Xl]] > 0.10, si THD supera 5%, o si la deriva de frecuencia sale del intervalo operativo definido. En esos casos, mantener el modelo ideal como unico soporte de decision puede producir diagnostico incompleto.

## Comparación operativa
El modelo ideal es excelente para pedagogia, chequeos de orden de magnitud y prediccion cualitativa de tendencia. El modelo extendido es preferible para diseno final, validacion de seguridad y analisis de eficiencia en condiciones no ideales.

No son modelos rivales, sino escalones de precision. El criterio profesional consiste en saber cuando la simplicidad del ideal sigue siendo suficiente y cuando la evidencia experimental exige ampliar descripcion.
`;export{e as default};
