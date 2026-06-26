const e=`# Procedimiento\r
\r
## Antes de calcular\r
\r
Lee que fenomeno se esta estudiando y piensa en una escala razonable. Una longitud humana suele estar entre \`10^0 m\` y \`10^1 m\`; una distancia urbana puede estar en \`10^3 m\`; una escala atomica puede estar cerca de \`10^-10 m\`. Esta expectativa inicial sirve como filtro.\r
\r
Anota las unidades de todos los datos. El orden de magnitud no corrige unidades mezcladas. Si una distancia esta en kilometros y otra en metros, primero debes expresarlas en un sistema compatible o al menos saber que potencia de diez introduce cada unidad.\r
\r
## Paso 1: identifica el objeto matematico\r
\r
El objeto matematico es la escala dominante de cada cantidad. En \`4.7 x 10^3\`, la escala es miles; en \`2.1 x 10^-6\`, la escala es micro. No hace falta conservar todos los decimales para una estimacion inicial.\r
\r
Clasifica cada dato como grande, pequeno o de escala cotidiana respecto a su unidad. Esto obliga a pensar fisicamente: no es lo mismo \`10^3 Pa\`, \`10^3 N\` o \`10^3 J\`, aunque compartan exponente.\r
\r
## Paso 2: elige la operacion\r
\r
Si la formula multiplica cantidades, suma exponentes. Si divide, resta exponentes. Si eleva al cuadrado, duplica el exponente. Si toma raiz cuadrada, divide aproximadamente el exponente entre dos cuando sea posible.\r
\r
Por ejemplo, para estimar una velocidad \`v = d / t\`, una distancia de \`10^2 m\` y un tiempo de \`10^1 s\` dan \`10^(2-1) = 10^1 m/s\`. Esa escala ya indica una velocidad de decenas de metros por segundo.\r
\r
## Paso 3: conserva unidades y signos\r
\r
La estimacion debe conservar la unidad final. Si divides metros entre segundos, obtienes metros por segundo. Si multiplicas newtons por metros, obtienes julios. Una potencia de diez sin unidad no es una respuesta fisica completa.\r
\r
El signo se trata aparte. El orden de magnitud estima tamaño, no direccion. Si una velocidad es negativa por el eje elegido, su modulo puede tener orden \`10^1 m/s\`, pero el signo sigue informando orientacion.\r
\r
## Paso 4: calcula\r
\r
Redondea cada dato a una potencia de diez cercana. Despues opera los exponentes. Si necesitas una estimacion algo mejor, conserva una mantisa simple como 2, 3 o 5, pero evita convertir la estimacion en un calculo exacto disfrazado.\r
\r
Al terminar, compara con el calculo fino si existe. Si ambos difieren en un factor pequeno, esta bien. Si difieren por cien, mil o un millon, busca errores de prefijos, unidades o formula.\r
\r
## Paso 5: interpreta el resultado\r
\r
Traduce el exponente a una frase. \`10^-3 s\` es escala de milisegundos; \`10^6 J\` es escala de megajulios; \`10^5 Pa\` es escala de presion atmosferica. Esta traduccion convierte la potencia en significado fisico.\r
\r
Despues decide si el resultado es plausible. Pregunta si un objeto, proceso o sistema real podria tener esa escala. Si la respuesta es no, vuelve al planteamiento antes de seguir con decimales.\r
\r
## Checklist de autocontrol\r
\r
Verifica que las unidades son compatibles, que los exponentes se combinaron correctamente y que la escala final corresponde a la magnitud buscada. Comprueba que no confundiste prefijos como mili, micro, kilo o mega.\r
\r
Haz siempre una pregunta de plausibilidad: podria existir este valor en el fenomeno descrito. Si la estimacion contradice la experiencia fisica o las escalas conocidas, el resultado necesita revision.\r
\r
<!-- algebra-depth-v2 -->\r
## Ruta didactica ampliada\r
\r
1. Antes de calcular, escribe una prediccion verbal: el resultado debe aumentar, disminuir, conservarse o cambiar de orden de magnitud.\r
2. Separa datos, incognita, constantes y restricciones. No todo simbolo que aparece en una formula cumple el mismo papel fisico.\r
3. Elige la herramienta por la estructura, no por costumbre. En orden de magnitud, la forma de la relacion decide el procedimiento.\r
4. Calcula manteniendo unidades, potencias y signos visibles. Si una linea oculta demasiado, divide el paso.\r
5. Interpreta el resultado con una frase: que mide, en que unidad, bajo que condicion y con que escala.\r
\r
Para cerrar el ejercicio, cambia mentalmente un dato por un factor sencillo y comprueba si el resultado se mueve como predice el modelo.\r
\r
`;export{e as default};
