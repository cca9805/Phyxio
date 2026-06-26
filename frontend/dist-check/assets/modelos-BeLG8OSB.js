const e=`# Modelos de trabajo y torque\r
\r
## Modelo ideal\r
\r
El modelo ideal usa eje fijo, torque conocido y desplazamiento angular medido en radianes. Si [[tau]] es constante, [[W]] se obtiene con la relación de trabajo para torque constante. Si el problema pide ritmo de transferencia, [[P]] se obtiene con la relación de potencia angular. La energía transferida se interpreta sin pérdidas internas salvo que se declaren.\r
\r
## Hipótesis\r
\r
Se supone que el eje no cambia, que el convenio de signos permanece estable y que [[theta]] describe el desplazamiento angular del mismo eje al que se refiere [[tau]]. También se supone que [[omega]] se mide en radianes por segundo. Si se usa potencia, torque y velocidad angular deben ser instantáneos y coexistir en el mismo estado.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo de torque constante es razonable si la variación relativa de [[tau]] durante el intervalo es menor que 5%. Si la variación supera aproximadamente 10%, conviene cambiar a modelo de torque variable y usar la relación de trabajo para torque variable. En máquinas reales, pérdidas mayores que 5% del trabajo calculado deben aparecer explícitamente en el balance.\r
\r
## Señales de fallo del modelo\r
\r
El modelo falla si [[tau]] cambia con [[theta]] y aun así se usa un producto simple. También falla si el eje de torque no coincide con el eje de [[omega]], si se usan grados como radianes, o si el trabajo calculado no coincide con el cambio de energía ni con pérdidas declaradas.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando conviene cambiar a modelo alternativo: si el torque depende del ángulo, del tiempo, de la velocidad o de un controlador. El modelo extendido usa área bajo la curva torque-ángulo, integración de potencia en el tiempo o balances con energía disipada. En motores reales también pueden aparecer eficiencia, calor y límites de potencia.\r
\r
## Comparación operativa\r
\r
Usa torque constante para llaves, ejes con carga uniforme y tramos cortos. Usa torque variable para resortes torsionales, motores con curva característica y frenos no lineales. Usa potencia cuando el dato principal sea la tasa de transferencia. Usa balance energético cuando el resultado de [[W]] debe compararse con energía cinética rotacional.\r
\r
## Diagnóstico de datos experimentales\r
\r
En datos medidos, conviene graficar [[tau]] frente a [[theta]] antes de elegir fórmula. Si los puntos forman una banda casi horizontal, el modelo constante conserva sentido. Si aparece histéresis, saturación o cambio de signo, el área debe calcularse por tramos y el balance debe incluir disipación. Para potencia, la lectura equivalente es comparar [[tau]] y [[omega]] en el mismo instante; usar valores tomados en momentos distintos puede producir una [[P]] sin significado físico.`;export{e as default};
