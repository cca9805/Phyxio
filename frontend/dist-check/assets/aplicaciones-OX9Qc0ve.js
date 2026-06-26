const e=`\uFEFF# Vasos comunicantes - Aplicaciones\r
\r
## 1. Aplicacion principal: visores de nivel conectados a depositos\r
**Variable dominante:** [[h2]], porque la lectura util del sistema es la altura que reproduce el nivel interno del deposito en la rama visible.\r
\r
**Límite de validez:** La conexion debe estar libre, el fluido debe poder redistribuirse y ambas ramas deben estar sometidas a la misma presion exterior en la superficie si se espera igualdad directa de niveles.\r
\r
En depositos de agua, combustible o soluciones de proceso, un visor lateral transparente funciona como un caso practico de vasos comunicantes. La rama visible no mide el nivel "por magia": reproduce la condicion de equilibrio del recipiente principal. Si el liquido es el mismo en ambas ramas y no hay obstrucciones, la altura observada fuera del tanque debe coincidir con la altura del liquido dentro del tanque. Esta aplicacion es valiosa porque convierte un principio hidrostatico en una lectura operativa continua, sin necesidad de sensores electricos complejos.\r
\r
La interpretacion correcta exige pensar en presion a igual profundidad. Si el visor marca menos altura de la esperada, el problema puede no ser solo "que el nivel bajo". Puede haber aire atrapado, suciedad en la conexion, mezcla de fases o un error en la referencia visual. El principio de vasos comunicantes permite distinguir entre una bajada real del nivel y un fallo de lectura.\r
\r
## 2. Aplicacion tecnica: transferencia de cotas en construccion\r
**Variable dominante:** [[h1]] y [[h2]], porque lo que se busca es comprobar igualdad de alturas entre extremos distantes.\r
\r
**Límite de validez:** Se necesita el mismo fluido, ausencia de burbujas significativas y una lectura estable en ambos extremos de la manguera.\r
\r
La manguera transparente usada para nivelar paredes o marcar cotas en obra es una aplicacion clasica y extremadamente funcional del leaf. Al llenar la manguera con agua, ambos extremos quedan conectados por el mismo fluido y, en equilibrio, las superficies libres deben alinearse a la misma cota. Esa propiedad permite transferir alturas entre puntos que no estan en linea de vision directa.\r
\r
La aplicacion es pedagogicamente muy rica porque muestra que el principio no depende de recipientes rigidos ni de instrumentos sofisticados. Una simple manguera flexible ya manifiesta la ley. Tambien deja ver un limite practico importante: si hay burbujas o si un extremo esta sometido a otra presion superficial, la lectura deja de ser una copia fiable de la cota buscada.\r
\r
## 3. Aplicacion de procesos: separadores y decantadores con fluidos de distinta densidad\r
**Variable dominante:** [[rho1]] / [[rho2]], o de forma operativa la comparacion entre densidades y alturas.\r
\r
**Límite de validez:** El modelo simplificado requiere que cada rama pueda resumirse por una sola altura efectiva y una sola densidad dominante. Si hay muchas interfaces, hay que pasar a un balance por segmentos.\r
\r
En separadores aceite-agua, decantadores o tanques de interfaz, el principio de vasos comunicantes permite estimar como se reordena la altura visible de una fase cuando se conecta un tubo lateral. La lectura util no es solo "cuanto sube", sino por que sube esa cantidad. Una fase mas ligera puede alcanzar una altura mayor que otra mas densa sin contradecir el equilibrio.\r
\r
Esta aplicacion es importante porque evita interpretaciones ingenuas de seguridad y control. Una columna mas alta no siempre significa mayor carga de fondo si el fluido es mas ligero. El operador que entiende el leaf sabe leer el visor en terminos de densidad y equilibrio, no solo en terminos de geometria aparente.\r
\r
## 4. Aplicacion hidraulica: redes de deposito y deposito elevado\r
**Variable dominante:** [[h1]], entendida como cota del nivel libre comun que la red intenta compartir en equilibrio estatico.\r
\r
**Límite de validez:** Solo describe el estado de equilibrio o cuasi equilibrio. Si hay flujo intenso, perdidas de carga o valvulas parcialmente cerradas, el sistema ya no se interpreta solo con el leaf.\r
\r
En redes de abastecimiento, cisternas conectadas y pequenos sistemas con deposito elevado, el principio de vasos comunicantes ayuda a prever hasta donde puede subir el agua en ramales conectados cuando no hay flujo relevante. Aunque en sistemas reales existan tuberias largas, perdidas y maniobras, el leaf sigue siendo una referencia conceptual poderosa para entender la tendencia de igualacion de cotas cuando el sistema se estabiliza.\r
\r
Su valor no es solo de calculo, sino de diagnostico. Si dos ramas conectadas por debajo y abiertas a las mismas condiciones exteriores no muestran una tendencia razonable a igualarse, algo esta pasando: bloqueo, diferencia de presiones exteriores, fuga o error de lectura.\r
\r
## 5. Aplicacion docente y experimental: contraste entre intuicion y modelo\r
**Variable dominante:** [[rho2]], porque modificar la densidad de una de las ramas cambia de forma muy visible la altura de equilibrio.\r
\r
**Límite de validez:** El montaje debe ser suficientemente estable para que el equilibrio se observe con claridad y las alturas se lean desde la misma horizontal.\r
\r
En laboratorio docente, los vasos comunicantes son una herramienta excelente para mostrar la diferencia entre una intuicion vaga y una interpretacion fisica rigurosa. Con el mismo fluido, el sistema confirma la idea de igualdad de niveles. Con dos fluidos distintos, obliga a abandonar esa simplificacion y a pensar en presion a igual profundidad.\r
\r
Esta aplicacion tiene mucho valor porque la respuesta visual es inmediata. Un pequeno cambio de densidad o una mala referencia de lectura altera el resultado de manera visible. Por eso el montaje sirve tanto para enseñar hidrostatica como para entrenar habitos de modelado: elegir referencia comun, identificar columnas efectivas y revisar el caso limite de densidades iguales.\r
\r
`;export{e as default};
