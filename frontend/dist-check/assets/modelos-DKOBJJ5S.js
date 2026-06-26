const e=`# Modelos físicos: Condicion sumatoria fuerzas\r
\r
## Modelo ideal\r
\r
El modelo central del leaf afirma que un cuerpo esta en equilibrio traslacional cuando la suma vectorial de fuerzas externas es nula. No exige ausencia de fuerzas; exige compensacion global por componentes.\r
\r
Idealizaciones relevantes:\r
\r
- Cuerdas ideales (masa despreciable, tension uniforme).\r
- Apoyos idealizados con reaccion bien definida.\r
- Plano de analisis 2D con ejes cartesianos.\r
- Marco aproximadamente inercial.\r
\r
Estas hipotesis permiten concentrar el diagnostico en [[R]] y en los balances por eje.\r
\r
## Hipótesis\r
\r
Hipotesis minimas para aplicar correctamente el modelo:\r
\r
1. Todas las fuerzas externas significativas estan incluidas en el DCL.\r
2. El convenio de signos en x e y se mantiene constante durante todo el calculo.\r
3. Si aparece [[m]], se convierte a fuerza peso antes de sumar con otras fuerzas.\r
4. El angulo [[theta]] se mide respecto de una referencia declarada.\r
\r
Si se viola una de estas hipotesis, la anulacion algebraica puede ser aparente y no fisica.\r
\r
## Dominio de validez cuantitativo\r
\r
En laboratorio y problemas de ingenieria basica, puede usarse este criterio cuantitativo:\r
\r
1. abs(sumFx) <= 0.02 * F_ref\r
2. abs(sumFy) <= 0.02 * F_ref\r
3. abs(delta[[theta]]) <= 2 grados para montajes manuales\r
4. Error relativo en [[T]] estimada <= 5 % frente a medicion instrumental\r
\r
Con F_ref entre 10 N y 1000 N, estos umbrales suelen separar equilibrio compatible de desequilibrio medible. Si los residuos exceden la tolerancia de forma sistematica, el modelo usado es incompleto o los datos son inconsistentes.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores de que la descripcion debe revisarse:\r
\r
- Residuos de fuerza persistentes con mismo signo en repeticiones experimentales.\r
- Resultado de tension negativa en cuerda ideal tras revisar algebra.\r
- Necesidad de valores imposibles de [[theta]] para cerrar ecuaciones.\r
- Observacion de giro del cuerpo aunque sumFx y sumFy parezcan cerradas.\r
\r
El cuarto punto es clave: equilibrio traslacional no implica equilibrio rotacional.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando conviene cambiar de modelo? Conviene cambiar cuando la pregunta fisica supera el alcance de la suma de fuerzas por ejes.\r
\r
Casos de cambio frecuentes:\r
\r
1. Hay rotacion apreciable: pasar a sumatoria de momentos.\r
2. Hay friccion dominante: pasar al modelo con fuerza de rozamiento.\r
3. Hay aceleracion no despreciable: pasar a dinamica con segunda ley.\r
\r
La transicion explicita es: cuando conviene cambiar de modelo, conviene pasar al modelo con friccion o al modelo con momentos segun el mecanismo que domina el error.\r
\r
## Comparación operativa\r
\r
| Aspecto | Balance traslacional | Modelo extendido |\r
|---------|----------------------|------------------|\r
| Cierre principal | sumFx = 0, sumFy = 0 | sumF + efectos extra |\r
| Complejidad | Baja | Media o alta |\r
| Parametros | [[F]], [[T]], [[m]], [[theta]] | agrega friccion, momentos, inercia |\r
| Precision en campo real | buena si tolerancias se cumplen | mejor en escenarios complejos |\r
| Uso recomendado | diagnostico rapido de equilibrio | validacion final de diseno |\r
\r
Dominar este modelo base es necesario para elegir con criterio el siguiente nivel de descripcion.\r
`;export{e as default};
