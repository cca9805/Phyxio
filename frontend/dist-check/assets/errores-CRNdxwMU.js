const e=`# Errores comunes en la formulación diferencial

La formulación local de Maxwell requiere un dominio sólido del cálculo vectorial y una comprensión profunda de la física de campos. Los errores suelen surgir de una interpretación geométrica incorrecta de los operadores o de ignorar la dinámica temporal de las interacciones.

## Errores conceptuales

### Error 1 : Confundir la divergencia con el rotacional
**Por qué parece correcto**: Ambos son operadores diferenciales fundamentales que actúan sobre campos vectoriales y a menudo aparecen juntos en las ecuaciones de Maxwell, lo que induce a pensar que son herramientas similares para medir el flujo.
**Por qué es incorrecto**: Tienen significados físicos y geométricos opuestos. La [[divE]] mide cuánto "sale" o "entra" el campo de un punto infinitesimal (fuentes de carga), mientras que el [[curlE]] mide cuánto "gira" o circula localmente el campo alrededor de ese punto. Una divergencia alta no implica un rotacional alto, y viceversa.
**Señal de detección**: Obtener un vector como resultado de la divergencia (la divergencia es siempre un escalar) o intentar hallar el rotacional de un campo escalar.
**Corrección conceptual**: Recuerda el "Teorema del flujo" para visualizar la divergencia como una expansión, y el "Teorema de la circulación" para visualizar el rotacional como un remolino local.
**Mini-ejemplo de contraste**: Un campo electrostático creado por una carga puntual tiene divergencia no nula en el origen pero rotacional cero en todas partes. En cambio, un campo magnético dentro de un solenoide tiene rotacional no nulo pero divergencia cero siempre.

## Errores de modelo

### Error 2 : Olvidar el término de corriente de desplazamiento en Ampère
**Por qué parece correcto**: En la gran mayoría de los problemas de corriente continua o circuitos de baja frecuencia, la ley de Ampère original (sin el término de Maxwell) funciona perfectamente y simplifica los cálculos.
**Por qué es incorrecto**: Sin el término proporcional a la variación temporal del campo eléctrico [[dE_dt]], las ecuaciones de Maxwell son matemáticamente inconsistentes en presencia de campos variables y violan la ley de conservación de la carga. Además, este término es el que físicamente permite que los campos se auto-sustenten como ondas viajando por el vacío.
**Señal de detección**: Inconsistencia matemática al calcular el campo magnético en el interior de un condensador de placas paralelas durante su proceso de carga o descarga.
**Corrección conceptual**: Siempre que exista un campo eléctrico que cambie con el tiempo, esa variación actúa como una "fuente" de campo magnético, exactamente con el mismo efecto que una corriente de electrones real fluyendo por un cable.
**Mini-ejemplo de contraste**: Si calculas el campo magnético cerca de un cable que carga un condensador, Ampère clásico funciona; pero si lo calculas entre las placas (donde no pasan electrones), Ampère clásico daría cero, lo cual es físicamente falso.

## Errores matemáticos

### Error 3 : Usar unidades de formulación integral en ecuaciones diferenciales
**Por qué parece correcto**: En el aprendizaje inicial, es tentador insertar la carga total en la ley de Gauss diferencial en lugar de la densidad volumétrica de carga [[rho]], o la corriente total en lugar de la densidad [[J]].
**Por qué es incorrecto**: La formulación diferencial es estrictamente local (punto a punto). Cada término en estas ecuaciones representa una densidad por unidad de volumen o por unidad de área infinitesimal, no un valor global o integrado sobre un cuerpo extenso.
**Señal de detección**: El análisis dimensional del resultado arroja unidades erróneas (por ejemplo, obtener voltios en lugar de voltios por metro cuadrado) o valores numéricos absurdamente grandes.
**Corrección conceptual**: Verifica siempre que los datos de entrada para Nabla (\\(\\nabla\\)) sean funciones de la posición o densidades puntuales, no escalares totales.
**Mini-ejemplo de contraste**: Para hallar el campo en un punto, no puedes usar una carga de \\(5 \\ \\mathrm{C}\\) en \\(\\nabla\\cdot \\mathbf{E}\\). Debes usar una densidad volumétrica \\(\\rho(x,y,z)\\) expresada en \\(\\mathrm{C/m^3}\\).

## Errores de interpretación

### Error 4 : Aplicar la derivada parcial en una discontinuidad superficial
**Por qué parece correcto**: Se intenta calcular el [[divE]] o el [[curlB]] justo en la frontera o superficie de separación entre dos materiales (como aire y metal) para ver cómo cambia el campo al "cruzar".
**Por qué es incorrecto**: Los operadores diferenciales solo están definidos matemáticamente en regiones donde las funciones de campo son continuas y derivables. En una superficie de carga, el campo salta de forma abrupta, y la derivada se vuelve infinita o indefinida.
**Señal de detección**: El cálculo de la divergencia arroja un valor infinito que no se puede manejar o el resultado depende del "lado" de la frontera desde el que se mire.
**Corrección conceptual**: En superficies e interfaces, la física no se describe con la ecuación diferencial, sino con las "condiciones de contorno" (boundary conditions) derivadas de la forma integral.
**Mini-ejemplo de contraste**: No intentes derivar el campo de un plano infinito justo en la superficie donde la coordenada \\(z\\) es nula; en su lugar, usa el salto de campo dado por \\(\\sigma/\\epsilon_0\\).

## Regla de autocontrol rápido
Antes de dar por finalizado cualquier análisis basado en Maxwell diferencial, somete tus resultados a este triple filtro de coherencia:
1. **Filtro de Entidad**: ¿La divergencia (un producto escalar) resultó en un escalar puro? ¿El rotacional (un producto vectorial) resultó en un vector con dirección y sentido?
2. **Filtro de Dinámica**: Si el problema menciona campos que cambian en el tiempo o señales de alta frecuencia, ¿has incluido los términos de variación temporal para B y E?
3. **Filtro de Localidad**: ¿Estás operando con densidades (\\(\\rho, \\mathbf{J}\\)) y no con valores globales (\\(Q, I\\))? ¿Estás lejos de interfaces bruscas donde la derivada falle?
Si pasas estos tres filtros, la probabilidad de que tu descripción local del campo sea físicamente robusta es máxima.
`;export{e as default};
