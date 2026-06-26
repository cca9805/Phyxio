const e=`# Modelos físicos del proceso adiabático\r
\r
## Modelo ideal\r
\r
El modelo ideal del proceso adiabático describe la transformación de un gas ideal con calor específico constante que evoluciona de forma cuasiestatica entre dos estados de equilibrio sin intercambiar calor con el entorno. En este modelo, la única via de intercambio energético es el trabajo mecánico. Las variables de estado presión [[p1]] y [[p2]], volumen [[V1]] y [[V2]], y temperatura [[T1]] y [[T2]] quedan conectadas por la ley de la adiabata y por la ecuación de estado del gas ideal.\r
\r
Este modelo simplifica la realidad al asumir que el gas es perfectamente ideal (sin interacciones moleculares) y que el proceso es suficientemente lento para mantener el equilibrio en cada instante, pero suficientemente rápido para impedir el flujo de calor. En la práctica, esa doble exigencia convierte el modelo ideal en una aproximacion excelente para gases reales en procesos tecnicos.\r
\r
## Hipótesis\r
\r
- El gas se comporta como gas ideal en todo el rango de presión y temperatura del proceso.\r
- El proceso es cuasiestatico: el gas pasa por una sucesion de estados de equilibrio.\r
- El intercambio de calor con el entorno es exactamente nulo o despreciable frente al trabajo intercambiado.\r
- El coeficiente adiabático [[gamma]] permanece constante durante todo el proceso.\r
- No hay friccion interna, turbulencia ni irreversibilidades mecánicas.\r
\r
Si cualquiera de estas hipótesis falla, el modelo sobreestima o subestima el cambio de temperatura y el trabajo. En particular, si hay friccion, parte del trabajo se disipa como calor interno y el proceso deja de ser adiabático estricto aunque las paredes sean aislantes.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es adecuado cuando la transferencia de calor por conduccion, conveccion y radiacion es menor que el 1% del trabajo intercambiado durante el proceso. Para gases diatomicos como el aire, esta condición se cumple prácticamente si el tiempo del proceso es inferior a unos pocos segundos en recipientes de laboratorio aislados, o inferior a milisegundos en ciclos de motor.\r
\r
La condición cuantitativa de validez de gas ideal exige que la presión sea inferior a unos 10 MPa y que la temperatura sea superior a unos 100 K para gases comunes. Un criterio operativo es que la desigualdad \\(pV \\gg nRT_{critica}\\) se cumpla con margen, lo que equivale a estar lejos del punto critico del gas. Para el aire a condiciones atmosféricas, el margen es amplio y el modelo ideal es muy preciso.\r
\r
## Señales de fallo del modelo\r
\r
El modelo falla cuando:\r
\r
- La temperatura calculada [[T2]] cae por debajo de la temperatura de licuefaccion del gas (unos 77 K para el nitrogeno, 90 K para el oxigeno), porque el gas se condensa y la hipótesis de gas ideal pierde sentido.\r
- La presión supera varios megapascales, donde las interacciones moleculares son apreciables y el factor de compresibilidad se devia de 1.\r
- El proceso es lento y la transferencia de calor por conveccion natural o por conduccion de las paredes no es despreciable, lo que convierte el proceso en politropico con exponente diferente de [[gamma]].\r
- Hay formacion de ondas de choque (proceso supersonico), donde el modelo cuasiestatico colapsa.\r
- El [[DeltaT_ad]] calculado es tan grande que [[gamma]] mismo cambia significativamente entre [[T1]] y [[T2]].\r
\r
Una señal observable de fallo es que la temperatura medida experimentalmente difiere más de un 5% de la calculada con el modelo ideal. Otra es que la curva real en el diagrama pV no sigue la pendiente prevista por [[gamma]].\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal no es suficiente, se usa el modelo de proceso politópico con exponente efectivo n. En este modelo la ley del proceso es el producto de la presión por el volumen elevado al exponente n, que se mantiene constante. El exponente n puede ser cualquier valor real y se determina experimentalmente. Cuando n coincide con [[gamma]], se recupera el proceso adiabático ideal. Cuando n vale 1, el proceso es isotérmico. Valores intermedios de n corresponden a procesos con intercambio de calor limitado, que ocurre en situaciones reales donde el aislamiento no es perfecto.\r
\r
**Cuándo conviene cambiar al modelo politópico**: cuando la temperatura medida difiere más de un 5% de la predicción ideal, cuando el proceso es lento y hay pérdidas térmicas apreciables, o cuando el gas opera cerca del punto crítico.\r
\r
Para gases reales a alta presión, se usan ecuaciones de estado como la de van der Waals o la de Redlich-Kwong, que corrigen las interacciones moleculares. También se emplean tablas de propiedades termodinámicas que dan entalpía, entropía y calor específico como función de temperatura y presión, permitiendo calcular el trabajo y el cambio de energía interna sin asumir gas ideal ni [[gamma]] constante.\r
\r
## Comparacion operativa\r
\r
| Criterio | Modelo ideal adiabático | Modelo politropico / gas real |\r
|---|---|---|\r
| Precision | Alta para gases a baja presión y proceso rápido | Alta para cualquier condición, incluyendo gas real |\r
| Complejidad | Baja; dos ecuaciones algebraicas | Media o alta; requiere conocer n o usar tablas |\r
| Rango de aplicación | Lejos del punto critico, proceso cuasiestatico | Cerca del punto critico o procesos con intercambio parcial de calor |\r
| Uso típico | Motores, atmósfera, calculos rápidos | Compresor industrial, refrigeración criogenica, simulation CFD |\r
\r
El modelo ideal es la primera herramienta de análisis. Solo se recurre al modelo extendido cuando los errores del modelo ideal superan la tolerancia del problema o cuando se trabaja en condiciones criticas.\r
`;export{e as default};
