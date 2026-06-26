const e=`# Modelos y validez\r
\r
## Modelo ideal\r
\r
El modelo ideal del leaf ecuacion de movimiento en MHS considera un oscilador lineal donde el estado [[x]] evoluciona de forma periodica y acotada. El supuesto central es que la fuerza restauradora es proporcional al desplazamiento y que no existe perdida de energia dominante en la ventana de estudio. Este marco permite construir una descripcion cerrada para [[x]], [[v]] y [[a]] usando parametros de control fisico como [[A]], [[omega]], [[phi]] y [[t]].\r
\r
La ventaja principal de este modelo es su trazabilidad: cada magnitud tiene un rol causal claro y la lectura grafica se conecta de forma directa con la teoria. El modelo tambien facilita comparaciones entre experimentos escolares y sistemas de laboratorio con diferente escala temporal, porque el comportamiento cualitativo se mantiene mientras se respete la linealidad.\r
\r
## Hipótesis\r
\r
1. Regimen lineal para desplazamientos compatibles con elasticidad local del sistema.\r
2. Parametro [[omega]] aproximadamente constante durante el intervalo observado.\r
3. Condiciones iniciales bien definidas mediante [[A]] y [[phi]].\r
4. Ausencia de amortiguamiento dominante que deforme la periodicidad ideal.\r
5. Medicion temporal [[t]] con resolucion suficiente para capturar fase y cambio de signo.\r
\r
Cuando una de estas hipotesis falla, la prediccion ideal se degrada y conviene revisar el tipo de modelo.\r
\r
## Dominio de validez cuantitativo\r
\r
Criterios operativos de uso:\r
\r
- amplitud relativa en zona lineal < 10%;\r
- deriva relativa de [[omega]] < 5%;\r
- error de ajuste temporal de [[x]] < 8% en una ventana de al menos 5 ciclos;\r
- coherencia de fase inicial [[phi]] con incertidumbre < 0.2 rad;\r
- ruido de medicion de [[x]] < 5% de [[A]].\r
\r
Si estos criterios se cumplen, el modelo ideal conserva valor predictivo para analisis didactico y para decisiones de calibracion basica.\r
\r
## Señales de fallo del modelo\r
\r
1. Cambio sistematico de amplitud ciclo a ciclo sin causa externa controlada.\r
2. Desfase acumulado entre prediccion y datos que crece con [[t]].\r
3. Relacion [[a]] frente a [[x]] incompatible con tendencia restauradora esperada.\r
4. Estimaciones de [[omega]] inestables al cambiar ligeramente la ventana temporal.\r
5. Necesidad de introducir terminos no lineales para sostener el ajuste.\r
\r
Estas senales indican que el sistema real salio del dominio de validez del oscilador armonico ideal.\r
\r
## Modelo extendido o alternativo\r
\r
Si aparecen perdidas energeticas apreciables, conviene migrar a un modelo amortiguado. Si hay excitacion externa dominante, conviene pasar a un modelo forzado. Si la fuerza restauradora deja de ser proporcional al desplazamiento, conviene introducir no linealidades controladas.\r
\r
El objetivo del cambio no es complicar la matematica por rutina, sino conservar causalidad fisica y capacidad de prediccion. Un modelo alternativo debe justificar que explica mejor la evolucion de [[x]], [[v]] y [[a]] sin romper coherencia dimensional ni interpretativa.\r
\r
## Comparación operativa\r
\r
Modelo ideal MHS:\r
- fuerte en claridad conceptual y trazabilidad entre magnitudes;\r
- rapido para estimar fase, amplitud y dinamica basica;\r
- util en docencia, calibracion inicial y lectura de tendencias.\r
\r
Modelo extendido:\r
- necesario cuando hay disipacion, forzamiento o no linealidad relevante;\r
- requiere mas parametros, mejor calibracion y mayor control experimental;\r
- aporta fidelidad superior en condiciones no ideales.\r
\r
Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando el error relativo de ajuste > 10% en varios ciclos o cuando la amplitud deja de ser estable. En ese punto, mantener el modelo ideal puede ocultar fisica importante y producir conclusiones de diseno poco confiables.\r
`;export{e as default};
