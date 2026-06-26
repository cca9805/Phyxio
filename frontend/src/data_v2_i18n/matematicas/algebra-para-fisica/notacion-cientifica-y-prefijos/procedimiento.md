# Procedimiento

## Antes de calcular

Identifica todas las unidades y prefijos del enunciado. Subraya si aparecen kilometros, milimetros, microsegundos, megahercios, nanometros o cualquier otra unidad escalada. Antes de operar, decide si la formula espera unidades base del Sistema Internacional o si puedes mantener una unidad equivalente.

Anota tambien la escala esperada. Una distancia de aula no deberia acabar en kilometros, una distancia atomica no deberia acabar en metros enteros y un tiempo de reaccion humana no deberia estar en nanosegundos. Esta intuicion te ayudara a detectar exponentes mal colocados.

Antes de usar el conversor de unidades de Phyxio, escribe una estimacion: si el dato esta en `cm^2`, el exponente debe cambiar de dos en dos; si esta en `km/h`, el resultado en `m/s` debe ser menor que el numero original; si esta en `g/cm^3`, el resultado en `kg/m^3` suele aumentar mucho. Despues usa el conversor para verificar, no para pensar por ti.

## Paso 1: identifica el objeto matematico

El objeto matematico es una cantidad escrita como decimal, potencia de diez o prefijo. Por ejemplo, `0.004 m`, `4 x 10^-3 m` y `4 mm` representan la misma longitud. La tarea consiste en reconocer esas formas como equivalentes.

Si hay varias cantidades, separa numero, potencia y unidad. En `2.5 kN`, el numero es `2.5`, el prefijo kilo es `10^3` y la unidad base es newton. Por tanto, `2.5 kN = 2.5 x 10^3 N`.

Comprueba si la unidad esta elevada a una potencia o aparece en una unidad compuesta. En `cm^2`, el factor `10^-2` se eleva al cuadrado. En `cm^3`, se eleva al cubo. En `km/h`, hay un factor en el numerador y otro en el denominador. Esta identificacion evita los errores de escala mas grandes.

## Paso 2: elige la operacion

Para convertir desde un prefijo a unidad base, sustituye el prefijo por su potencia de diez. Para convertir desde unidad base a prefijo, divide por la potencia del prefijo. Por ejemplo, `0.003 s = 3 x 10^-3 s = 3 ms`.

Para multiplicar cantidades en notacion cientifica, multiplica las mantisas y suma exponentes. Para dividir, divide mantisas y resta exponentes. Si la mantisa queda fuera del intervalo entre 1 y 10, reajustala moviendo una potencia de diez.

Para unidades compuestas, convierte cada parte por separado. Si tienes `72 km/h`, escribe `72 x 10^3 m / 3600 s` y despues simplifica. Si tienes `1.2 g/cm^3`, convierte gramos a kilogramos y centimetros cubicos a metros cubicos antes de dividir. En areas y volumenes, eleva tambien el factor de conversion.

## Paso 3: conserva unidades y signos

La potencia de diez no sustituye a la unidad. `10^-3 m` no es lo mismo que `10^-3 s`. Mantener la unidad escrita evita mezclar longitud, tiempo, masa, carga o energia durante la conversion.

El signo del exponente indica escala, no direccion fisica. Un exponente negativo no significa valor negativo; significa valor menor que la unidad base. `10^-6 m` es una longitud positiva muy pequena, no una longitud negativa.

## Paso 4: calcula

Convierte primero todos los datos que deban estar en unidades compatibles. Despues opera los numeros. Por ejemplo, si una velocidad se da en `km/h` y el tiempo en segundos, convierte la velocidad a `m/s` antes de multiplicar por el tiempo.

Al finalizar, normaliza la notacion: deja una mantisa entre 1 y 10 y una potencia de diez entera. Si obtienes `32 x 10^-4`, reescribe como `3.2 x 10^-3`. Esta forma facilita comparar escalas.

Si el objetivo es comunicar con prefijos, puedes convertir la notacion cientifica normalizada a notacion de ingenieria. Por ejemplo, `4.7 x 10^-6 s` se comunica naturalmente como `4.7 microsegundos`. `1.2 x 10^4 W` puede leerse como `12 kW`, aunque no sea notacion cientifica normalizada.

En calculos largos, separa mantisas y exponentes. Multiplica o divide las mantisas con cifras razonables, combina exponentes con reglas exactas y normaliza solo al final. Asi reduces errores de coma y mantienes visible el orden de magnitud.

Si el problema incluye constantes fisicas, toma el valor desde la tabla de constantes de Phyxio y no desde memoria. Despues pasa los datos coherentes a la calculadora. La secuencia recomendada es: estimar escala, convertir unidades, comprobar con el conversor, introducir en calculadora y leer si el resultado mantiene una escala fisica razonable.

## Paso 5: interpreta el resultado

Lee la potencia de diez como una escala fisica. `10^3 m` apunta a kilometros, `10^-3 m` a milimetros, `10^-6 m` a micrometros y `10^-9 m` a nanometros. Pregunta si esa escala encaja con el fenomeno.

Despues decide si conviene expresar el resultado con prefijo. `0.000002 s` puede leerse mejor como `2 microsegundos`; `5000 W` puede leerse mejor como `5 kW`. La mejor forma es la que comunica escala sin ocultar la unidad.

## Checklist de autocontrol

Comprueba que cada prefijo fue sustituido por la potencia correcta. Revisa que no hayas confundido mili con micro, kilo con mega o nano con micro. Verifica que los exponentes se sumaron al multiplicar y se restaron al dividir.

Confirma que la mantisa final esta normalizada, que la unidad es compatible con la magnitud buscada y que la escala tiene sentido fisico. Si el resultado parece imposible, revisa primero los prefijos antes de culpar al modelo.

Anade tres controles avanzados. Primero, si la unidad tenia cuadrado o cubo, el factor de conversion tambien debe estar elevado. Segundo, si la unidad era un cociente, revisa numerador y denominador. Tercero, si el resultado se comunica con prefijo, comprueba que el prefijo elegido mejora la lectura y no oculta la unidad real usada en el calculo.

Como control final, compara tu conversion manual con el conversor. Si no coinciden, no copies sin mas el valor del conversor: localiza si el error esta en el prefijo, en la potencia de la unidad, en el denominador o en el redondeo. Esa comparacion es parte del aprendizaje.

<!-- algebra-depth-v2 -->
## Ruta didactica ampliada

1. Antes de calcular, escribe una prediccion verbal: el resultado debe aumentar, disminuir, conservarse o cambiar de orden de magnitud.
2. Separa datos, incognita, constantes y restricciones. No todo simbolo que aparece en una formula cumple el mismo papel fisico.
3. Elige la herramienta por la estructura, no por costumbre. En notacion cientifica y prefijos SI, la forma de la relacion decide el procedimiento.
4. Calcula manteniendo unidades, potencias y signos visibles. Si una linea oculta demasiado, divide el paso.
5. Interpreta el resultado con una frase: que mide, en que unidad, bajo que condicion y con que escala.

Para cerrar el ejercicio, cambia mentalmente un dato por un factor sencillo y comprueba si el resultado se mueve como predice el modelo.

