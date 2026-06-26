# Modelos y validez

## Modelo ideal

El modelo ideal del leaf ecuacion de movimiento en MHS considera un oscilador lineal donde el estado [[x]] evoluciona de forma periodica y acotada. El supuesto central es que la fuerza restauradora es proporcional al desplazamiento y que no existe perdida de energia dominante en la ventana de estudio. Este marco permite construir una descripcion cerrada para [[x]], [[v]] y [[a]] usando parametros de control fisico como [[A]], [[omega]], [[phi]] y [[t]].

La ventaja principal de este modelo es su trazabilidad: cada magnitud tiene un rol causal claro y la lectura grafica se conecta de forma directa con la teoria. El modelo tambien facilita comparaciones entre experimentos escolares y sistemas de laboratorio con diferente escala temporal, porque el comportamiento cualitativo se mantiene mientras se respete la linealidad.

## Hipótesis

1. Regimen lineal para desplazamientos compatibles con elasticidad local del sistema.
2. Parametro [[omega]] aproximadamente constante durante el intervalo observado.
3. Condiciones iniciales bien definidas mediante [[A]] y [[phi]].
4. Ausencia de amortiguamiento dominante que deforme la periodicidad ideal.
5. Medicion temporal [[t]] con resolucion suficiente para capturar fase y cambio de signo.

Cuando una de estas hipotesis falla, la prediccion ideal se degrada y conviene revisar el tipo de modelo.

## Dominio de validez cuantitativo

Criterios operativos de uso:

- amplitud relativa en zona lineal < 10%;
- deriva relativa de [[omega]] < 5%;
- error de ajuste temporal de [[x]] < 8% en una ventana de al menos 5 ciclos;
- coherencia de fase inicial [[phi]] con incertidumbre < 0.2 rad;
- ruido de medicion de [[x]] < 5% de [[A]].

Si estos criterios se cumplen, el modelo ideal conserva valor predictivo para analisis didactico y para decisiones de calibracion basica.

## Señales de fallo del modelo

1. Cambio sistematico de amplitud ciclo a ciclo sin causa externa controlada.
2. Desfase acumulado entre prediccion y datos que crece con [[t]].
3. Relacion [[a]] frente a [[x]] incompatible con tendencia restauradora esperada.
4. Estimaciones de [[omega]] inestables al cambiar ligeramente la ventana temporal.
5. Necesidad de introducir terminos no lineales para sostener el ajuste.

Estas senales indican que el sistema real salio del dominio de validez del oscilador armonico ideal.

## Modelo extendido o alternativo

Si aparecen perdidas energeticas apreciables, conviene migrar a un modelo amortiguado. Si hay excitacion externa dominante, conviene pasar a un modelo forzado. Si la fuerza restauradora deja de ser proporcional al desplazamiento, conviene introducir no linealidades controladas.

El objetivo del cambio no es complicar la matematica por rutina, sino conservar causalidad fisica y capacidad de prediccion. Un modelo alternativo debe justificar que explica mejor la evolucion de [[x]], [[v]] y [[a]] sin romper coherencia dimensional ni interpretativa.

## Comparación operativa

Modelo ideal MHS:
- fuerte en claridad conceptual y trazabilidad entre magnitudes;
- rapido para estimar fase, amplitud y dinamica basica;
- util en docencia, calibracion inicial y lectura de tendencias.

Modelo extendido:
- necesario cuando hay disipacion, forzamiento o no linealidad relevante;
- requiere mas parametros, mejor calibracion y mayor control experimental;
- aporta fidelidad superior en condiciones no ideales.

Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando el error relativo de ajuste > 10% en varios ciclos o cuando la amplitud deja de ser estable. En ese punto, mantener el modelo ideal puede ocultar fisica importante y producir conclusiones de diseno poco confiables.
