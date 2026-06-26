const e=`# Ejemplo tipo examen

## Enunciado

Una barra puede girar alrededor de un eje fijo. A un lado se aplica [[F1]] = 60 N a una distancia [[r1]] = 0.50 m, con [[theta1]] = 90°. Al otro lado se aplicará una fuerza [[F2]] a una distancia [[r2]] = 0.75 m, también perpendicular, con [[theta2]] = 90°. Calcula [[tau1]], determina la fuerza equilibrante [[Feq]], comprueba la condición sobre [[tau_net]] e interpreta por qué no basta igualar fuerzas.

## Datos

| Magnitud | Valor |
|---|---|
| [[r1]] | 0.50 m |
| [[F1]] | 60 N |
| [[theta1]] | 90° |
| [[r2]] | 0.75 m |
| [[theta2]] | 90° |

El convenio será positivo para el giro producido por la primera fuerza. La segunda fuerza se aplicará en sentido contrario para compensar la rotación.

## Definición del sistema

El sistema es la barra sometida a dos contribuciones principales de momento respecto al mismo eje. No se está analizando la fuerza neta ni el movimiento del centro de masas; el objetivo es solo comprobar la condición de equilibrio rotacional. Todas las distancias se miden desde el pivote, no desde los extremos de la barra.

## Modelo físico

El primer momento se obtiene con:

{{f:torque_1_definition}}

El segundo momento se obtiene con:

{{f:torque_2_definition}}

La condición central del leaf combina ambos momentos:

{{f:net_torque_condition}}

Si se busca la fuerza que anula el momento neto, se usa:

{{f:balancing_force_formula}}

## Justificación del modelo

El modelo es válido porque las dos fuerzas actúan en un plano, los brazos se miden respecto al mismo eje y el convenio de signos se fija antes de sumar. Como ambas fuerzas son perpendiculares al radio, el seno angular es máximo. La segunda fuerza no tiene que ser igual a [[F1]], porque su brazo [[r2]] es mayor que [[r1]].

## Resolución simbólica

Primero se calcula [[tau1]] con la fuerza conocida. Después se exige equilibrio rotacional, por lo que [[tau_net]] debe anularse. Con el convenio elegido, eso significa que el segundo momento debe tener el mismo módulo que el primero y sentido opuesto. La magnitud de la fuerza requerida se obtiene como [[Feq]], usando el brazo y el ángulo disponibles para la segunda fuerza.

Si al final [[F2]] coincide con [[Feq]], entonces [[tau2]] cancela a [[tau1]]. Si [[F2]] es menor, quedará un momento neto en el sentido de la primera fuerza; si es mayor, dominará el sentido contrario.

## Sustitución numérica

La primera contribución vale 30 N m, porque la fuerza de 60 N actúa con brazo de 0.50 m y ángulo perpendicular. Para equilibrar desde 0.75 m, la segunda fuerza necesita producir el mismo momento en sentido contrario. La fuerza requerida es [[Feq]] = 40 N.

Con esa fuerza, [[tau2]] también tiene módulo 30 N m. Al combinar ambos signos, [[tau_net]] = 0 N m. La barra cumple la condición de sumatoria de momentos respecto al eje elegido.

## Validación dimensional

Los momentos [[tau1]], [[tau2]] y [[tau_net]] tienen unidades de N m. La fuerza equilibrante [[Feq]] queda en N porque el momento que se quiere compensar se divide por un brazo efectivo. El resultado no puede darse en N m, ya que se está calculando una fuerza.

La validación física también es clara: como [[r2]] es mayor que [[r1]], la fuerza equilibrante debe ser menor que [[F1]]. El resultado de 40 N respeta esa lectura.

## Interpretación física

La barra no queda equilibrada porque las fuerzas sean iguales; queda equilibrada porque los momentos opuestos se cancelan. La primera fuerza es mayor, pero actúa a menor distancia. La segunda fuerza es menor, pero actúa con un brazo más largo. La condición [[tau_net]] = 0 resume esa compensación.

Este ejemplo muestra la diferencia entre calcular un momento aislado y aplicar la sumatoria de momentos. El valor de [[tau1]] por sí solo informa de una tendencia de giro; la comparación con [[tau2]] decide si esa tendencia queda anulada.

La interpretación importante es causal: el sistema no “elige” la fuerza mayor, sino el momento mayor respecto al eje. Cambiar el punto de aplicación de la segunda fuerza cambiaría el resultado aunque la fuerza siguiera siendo 40 N. Cambiar el ángulo también lo cambiaría, porque reduciría el brazo efectivo. Por eso la condición de equilibrio rotacional es una relación entre geometría y fuerza, no una comparación aritmética de cargas.

La lectura física completa es que el modelo predice una configuración sin tendencia residual a girar. La barra puede seguir recibiendo fuerzas externas, pero el balance de momentos las organiza en dos efectos opuestos que se anulan. Si se desplazara el punto de apoyo, habría que rehacer todos los brazos; si se invirtiera el convenio de signos, cambiarían los signos individuales, pero no la conclusión física de equilibrio. Esta interpretación conecta el número calculado con una decisión observable: la barra no inicia giro alrededor del eje elegido.

Físicamente, la condición describe una competencia entre tendencias de giro. La primera fuerza intenta hacer rotar la barra en un sentido; la segunda intenta hacerlo en el contrario. El equilibrio aparece cuando ninguna tendencia domina. Si una persona viera el montaje sin hacer cuentas, debería observar una barra sin arranque de rotación, no porque “no pase nada”, sino porque dos efectos rotacionales simultáneos se compensan. Esa es la lectura cualitativa que debe acompañar al resultado numérico.

# Ejemplo de aplicación real

## Contexto

Una persona usa una llave para aflojar una tuerca mientras otra fuerza de rozamiento o resistencia se opone al giro. La pregunta práctica es si la fuerza aplicada alcanza para anular o superar el momento resistente. El eje es el centro de la tuerca y cada fuerza debe medirse respecto a ese eje.

## Estimación física

Antes de calcular, se estima que aumentar el brazo de la llave reduce la fuerza necesaria. Si una resistencia produce un momento de unos 25 N m y la mano actúa a 0.50 m con dirección casi perpendicular, una fuerza cercana a 50 N puede compensar el giro resistente. Si la mano empuja casi alineada con la llave, el ángulo reduce el brazo efectivo y haría falta más fuerza.

La lectura cuantitativa usa las mismas magnitudes: [[r1]], [[F1]] y [[theta1]] para una contribución; [[r2]], [[F2]] y [[theta2]] para la otra. La decisión se toma mirando [[tau_net]], no comparando fuerzas de forma aislada.

## Interpretación

La aplicación real enseña que el equilibrio rotacional depende del eje, del brazo y del ángulo. Si [[tau_net]] es cero, no hay giro neto. Si el momento aplicado supera al resistente, la tuerca empieza a girar. Si queda por debajo, la resistencia domina. La herramienta práctica consiste en elegir una geometría que haga posible alcanzar [[Feq]] con una fuerza razonable.

## Lista de verificación

1. ¿Todos los momentos se calculan respecto al mismo eje?
2. ¿Está fijado el sentido positivo de giro?
3. ¿Los brazos [[r1]] y [[r2]] se miden desde el pivote?
4. ¿Los ángulos [[theta1]] y [[theta2]] son los ángulos respecto al radio?
5. ¿[[tau_net]] se anula si se afirma que hay equilibrio?
`;export{e as default};
