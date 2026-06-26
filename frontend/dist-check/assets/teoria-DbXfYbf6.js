const e=`\uFEFF# Impulso externo y ruptura de la conservación\r
\r
## Contexto conceptual\r
\r
La conservación del momento lineal es un principio condicional: **se cumple solo si la fuerza externa neta es nula**. Cuando un impulso externo actúa sobre el sistema, el momento total cambia y la conservación se rompe. Comprender exactamente cómo y cuánto se rompe es esencial para decidir si un problema admite la aproximación de momento conservado o si obliga a usar la forma completa del balance de impulso.\r
\r
En la práctica, la mayoría de situaciones reales implican fuerzas externas: fricción con el suelo, gravedad o tensiones de cuerdas. La clave está en cuantificar si esas fuerzas crean un impulso significativo durante el evento.\r
\r
## 🟢 Nivel esencial\r
\r
La conservación del movimiento de un sistema solo funciona cuando el sistema está suficientemente aislado. Si algo externo empuja, frena o golpea al sistema durante un tiempo apreciable, el movimiento total del conjunto cambia.\r
\r
La idea esencial es distinguir entre cambios internos y cambios producidos desde fuera. Si dos partes del sistema interactúan entre sí, el cambio queda compensado dentro del propio conjunto. Pero si actúa el suelo, una pared, un motor o el aire, el sistema recibe una intervención exterior y ya no puede tratarse como aislado.\r
\r
> [!IMPORTANT]\r
> Cuando el exterior interviene, no ha fallado la física: simplemente falta incluir esa intervención externa en el balance dinámico.\r
\r
Ejemplo cotidiano: un coche que frena no pierde movimiento “porque sí”. El rozamiento del suelo actúa desde fuera del sistema coche y reduce su momento. Si el sistema elegido fuera coche más Tierra, esa interacción ya no quedaría fuera; por eso la elección del sistema cambia la lectura física del problema.\r
\r
## 🔵 Nivel formal\r
\r
### Nomenclatura del leaf\r
\r
En este leaf: [[J]] representa el impulso externo; [[F_ext]] es la fuerza externa neta; [[t]] es el tiempo de actuación; y [[DeltaP]] es la variación del momento lineal causada por dicho impulso.\r
\r
### El principio en condiciones ideales\r
\r
Antes de estudiar la ruptura, es necesario fijar el punto de referencia: las herramientas que funcionan cuando el sistema está perfectamente aislado. La condición necesaria y suficiente para que el momento se conserve es que la suma vectorial de todas las fuerzas externas sobre el sistema sea nula:\r
\r
{{f:cond}}\r
\r
Bajo este requisito, el momento de cada partícula individual de masa [[m]] y velocidad [[v]] se define como el producto de ambas magnitudes:\r
\r
{{f:P}}\r
\r
El momento inicial total del sistema es la suma vectorial de los momentos de todas las partículas que lo componen:\r
\r
{{f:pi}}\r
\r
Cuando el sistema está aislado, la conservación establece la igualdad entre los estados dinámicos inicial y final:\r
\r
{{f:cons_principle}}\r
\r
La variación neta del momento en esas condiciones es exactamente cero:\r
\r
{{f:DeltaP}}\r
\r
Para interacciones entre dos cuerpos en una dimensión, el balance general captura cualquier tipo de colisión —elástica, inelástica o explosión—, relacionando las velocidades iniciales [[v1i]] y [[v2i]] (del primer y segundo cuerpo, de masas [[m1]] y [[m2]] respectivamente) con las velocidades finales [[v1f]] y [[v2f]]:\r
\r
{{f:general_1d_balance}}\r
\r
Si los cuerpos se fusionan tras el impacto (colisión perfectamente inelástica), la velocidad final conjunta [[vf]] viene dada por:\r
\r
{{f:inelastic_collision}}\r
\r
En el caso opuesto —cuando un sistema en reposo se separa en dos fragmentos—, la ley de retroceso determina las velocidades relativas:\r
\r
{{f:recoil_law}}\r
\r
Estas herramientas son válidas exclusivamente cuando la condición de aislamiento se satisface. En cuanto esta condición falla, el sistema entra en el régimen descrito a continuación.\r
\r
### Teorema Impulso-Momento\r
\r
La relación fundamental entre el impulso externo y el cambio en el estado dinámico del sistema se expresa mediante la fórmula:\r
\r
\r
La ecuación central de este leaf muestra explícitamente cómo el momento final difiere del inicial exactamente en el impulso externo neto:\r
\r
{{f:ruptura_conservacion}}\r
\r
Donde el impulso se calcula como el efecto de la fuerza neta durante el intervalo temporal:\r
\r
\r
### Análisis por componentes\r
\r
Es posible que el impulso externo sea nulo en una componente pero no en otra. Por ejemplo, en una colisión horizontal, el peso y la normal se cancelan verticalmente, permitiendo la conservación en el eje X mientras el balance en Y se mantiene equilibrado de forma independiente.\r
\r
### Aproximación impulsiva\r
\r
Para colisiones extremadamente breves, las fuerzas externas constantes (como la gravedad) generan impulsos despreciables en comparación con las enormes fuerzas internas del impacto. En estos casos, aunque el sistema no esté estrictamente aislado, la conservación del momento sigue siendo una excelente aproximación para predecir las velocidades finales.\r
\r
{{f:DeltaP_ext}}\r
\r
{{f:J}}\r
\r
## 🔴 Nivel estructural\r
\r
### Simetría rota\r
\r
Desde la perspectiva del teorema de Noether, las fuerzas externas representan una ruptura de la simetría traslacional del espacio. Si el sistema interactúa con un entorno que distingue posiciones (un campo gravitatorio, una pared), el momento deja de ser una cantidad conservada para ese sistema específico. Sin embargo, al ampliar el sistema para incluir la fuente de la fuerza, la simetría se restaura y el momento total del nuevo conjunto se conserva.\r
\r
### Escala temporal y de fuerzas\r
\r
La decisión de si un sistema es "suficientemente aislado" depende de dos factores:\r
- **Escala temporal**: ¿el evento es mucho más breve que el tiempo típico de acción de las fuerzas externas?\r
- **Escala de fuerzas**: ¿las fuerzas internas del impacto dominan sobre las externas?\r
\r
Si ambas respuestas son afirmativas, la aproximación de conservación es legítima.\r
\r
## Interpretación física profunda\r
\r
La ruptura de la conservación no es un fracaso del principio, sino una señal de que el sistema intercambia momento con su entorno. Cada unidad de impulso externo que entra al sistema incrementa el [[P]]; cada unidad que sale lo reduce. La contabilidad sigue siendo perfecta: simplemente hay que incluir la transferencia desde el exterior en el balance.\r
\r
Esto convierte a la relación entre impulso y cambio de momento en la versión más general del principio físico. Desde una perspectiva operativa, el impulso externo actúa como una "corrección cuantificable" al principio de conservación: mide exactamente en cuánto y en qué dirección el sistema se aparta del caso ideal aislado. Esto permite establecer jerarquías de aproximación según la magnitud relativa del impulso externo frente al momento inicial: si el impulso representa menos del 1% del momento inicial, la conservación puede aplicarse sin error apreciable; si supera el 10%, el balance completo es imprescindible.\r
\r
## Orden de magnitud\r
\r
Un jugador de billar aplica un impulso externo de aproximadamente 0,5 kg·m/s. Un coche frenando recibe un impulso de fricción de miles de unidades a lo largo de varios segundos, rompiendo totalmente la conservación. En cambio, en un choque de milisegundos, la fricción apenas tiene [[t]] de actuar.\r
\r
## Método de resolución personalizado\r
\r
1. **Identificar fuerzas externas**: gravedad, fricción, tensiones.\r
2. **Estimar el impulso externo**: producto de la fuerza por el tiempo de contacto.\r
3. **Comparar**: ¿es este impulso significativo frente al momento inicial?\r
4. **Decidir**: usar conservación aproximada o el balance completo de impulso.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Proyectil en vuelo.** La gravedad actúa verticalmente, generando un impulso hacia abajo. Sin embargo, en el eje horizontal no hay fuerzas externas (despreciando el aire), por lo que el momento horizontal se conserva estrictamente incluso si el proyectil explota o cambia de forma.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Cuándo puedo ignorar la gravedad?** Cuando el impacto es breve (milisegundos). El impulso gravitatorio es diminuto frente a las fuerzas de contacto.\r
- **¿Qué pasa si el impulso es perpendicular al movimiento?** Cambia la dirección del sistema pero no afecta a la magnitud del momento en la dirección original.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Aplicaciones**: [Retroceso y choques](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion).\r
- **Sistemas aislados**: [Criterios de aislamiento](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas).\r
\r
## Síntesis final\r
\r
La conservación del momento se rompe siempre que haya un impulso externo neto. Evaluar la magnitud de este impulso permite decidir si la aproximación de conservación es admisible o si es necesario un análisis dinámico completo.\r
\r
\r
\r
\r
\r
`;export{e as default};
