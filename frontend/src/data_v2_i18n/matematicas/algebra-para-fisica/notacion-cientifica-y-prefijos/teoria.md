# Notacion cientifica y prefijos

## Que es

La notacion cientifica es una forma de escribir numeros como un valor entre 1 y 10 multiplicado por una potencia de diez. En vez de escribir `300000000`, escribimos `3 x 10^8`. En vez de escribir `0.0000012`, escribimos `1.2 x 10^-6`. La informacion es la misma, pero la escala queda visible.

Los prefijos del Sistema Internacional hacen lo mismo con unidades: kilo significa `10^3`, mili significa `10^-3`, micro significa `10^-6`, nano significa `10^-9`. Decir `5 km` es decir `5 x 10^3 m`; decir `2 ms` es decir `2 x 10^-3 s`.

## Por que aparece en fisica

La fisica trabaja con escalas muy distintas. Un planeta mide millones de metros, una molecula nanometros, una carga electrica puede ser del orden de `10^-19 C` y la velocidad de la luz es del orden de `10^8 m/s`. Sin notacion cientifica, los calculos se llenan de ceros y es facil perder el orden de magnitud.

Tambien aparece porque las unidades reales de laboratorio usan prefijos. Un sensor puede medir milivoltios, una regla milimetros, una masa gramos, una frecuencia megahercios. Para usar formulas coherentes, el alumno debe convertir esos datos a unidades compatibles antes de calcular.

En Phyxio, este leaf se complementa de forma natural con el conversor de unidades. El conversor ayuda a comprobar conversiones como `km/h` a `m/s`, `cm^2` a `m^2` o `g/cm^3` a `kg/m^3`, pero no debe usarse como sustituto del razonamiento: antes de abrirlo conviene anticipar el exponente esperado. La calculadora sirve despues para operar con los valores ya coherentes, y la tabla de constantes evita copiar mal valores como `c`, `G`, `g` o cargas elementales cuando aparezcan en problemas de escala.

## Idea visual o geometrica

La potencia de diez indica cuantos saltos das en una escala decimal. Multiplicar por `10^3` desplaza tres posiciones hacia valores mayores; multiplicar por `10^-3` desplaza tres posiciones hacia valores menores. No es magia algebraica: es mover el numero dentro de una escala de tamanos.

Los prefijos funcionan como etiquetas de esos saltos. Kilo, mega y giga te llevan hacia escalas grandes; mili, micro y nano te llevan hacia escalas pequenas. La mantisa, como `3.2` en `3.2 x 10^5`, dice la posicion fina dentro de esa escala.

## Lenguaje simbolico minimo

Una escritura cientifica tiene la forma `a x 10^n`, donde `1 <= a < 10` y `n` es un numero entero. El valor `a` se llama mantisa o coeficiente, y `n` indica el orden de magnitud. Si `n` es positivo, el numero es grande respecto a la unidad; si es negativo, es pequeno.

Para multiplicar potencias de diez se suman exponentes: `10^a x 10^b = 10^(a+b)`. Para dividir se restan exponentes: `10^a / 10^b = 10^(a-b)`. Para convertir prefijos, reemplaza el prefijo por su potencia de diez y conserva la unidad base.

La dificultad real aparece cuando la unidad con prefijo esta elevada a una potencia. Un centimetro es `10^-2 m`, pero un centimetro cuadrado es `(10^-2 m)^2 = 10^-4 m^2`. Un milimetro cubico es `(10^-3 m)^3 = 10^-9 m^3`. El prefijo tambien se eleva, no solo la unidad escrita.

Tambien hay unidades compuestas. Para convertir `km/h` a `m/s` no basta con cambiar kilometros a metros: tambien hay que cambiar horas a segundos. Asi, `1 km/h = 10^3 m / 3600 s`, aproximadamente `0.278 m/s`. En densidad, `g/cm^3` combina masa y volumen: `1 g/cm^3 = 10^-3 kg / 10^-6 m^3 = 10^3 kg/m^3`.

En notacion de ingenieria se prefieren exponentes multiplos de tres porque encajan con prefijos SI: `10^3` kilo, `10^6` mega, `10^-3` mili, `10^-6` micro. Esta forma no siempre es la notacion cientifica normalizada, pero comunica mejor el prefijo util para el resultado.

## Que significa el resultado

El resultado en notacion cientifica permite leer rapidamente la escala fisica. Si una longitud queda como `4 x 10^-9 m`, esta en escala nanometrica; si una energia queda como `2 x 10^6 J`, esta en escala de megajulios. La potencia de diez dice el nivel del fenomeno antes incluso de mirar todos los detalles.

Tambien ayuda a juzgar si una respuesta es razonable. Si un calculo de altura de una mesa da `10^5 m`, el problema no es solo numerico: la escala fisica es absurda. Si una corriente domestica sale como `10^-12 A`, probablemente se ha perdido un prefijo o una conversion.

La escala tambien informa sobre el instrumento o fenomeno. Milimetros sugieren medidas mecanicas pequenas, micrometros sugieren microscopia o tolerancias finas, nanometros sugieren moleculas, luz o materiales. Kilovatios sugieren aparatos potentes; megavatios, instalaciones industriales. Leer el prefijo es leer contexto fisico.

Por eso no siempre conviene dejar el resultado en unidad base. `0.000004 s` es correcto, pero `4 microsegundos` comunica mejor la escala. En cambio, para sustituir en una formula SI puede ser mas seguro trabajar internamente con segundos y solo convertir al final para comunicar.

El conversor de Phyxio debe leerse como una verificacion de escala. Si esperabas que `72 km/h` estuviera cerca de `20 m/s` y el conversor confirma ese valor, el calculo gana confianza. Si esperabas nanometros y aparece una longitud macroscopica, el resultado no se acepta automaticamente: se revisa prefijo, potencia de unidad y unidad compuesta.

## Cuando no debes usarlo

No debes usar notacion cientifica para ocultar una conversion mal hecha. Escribir un numero con potencias de diez no lo vuelve correcto. Primero hay que saber que unidad representa, que prefijo tenia y que unidad exige la formula.

Tampoco conviene redondear demasiado pronto. En problemas con varias operaciones, conservar dos o tres cifras significativas evita que la escala quede bien pero el valor final pierda precision util. La notacion cientifica organiza la escala; no sustituye el criterio sobre incertidumbre.

No debes mezclar prefijos dentro de una misma formula sin decidir una unidad comun. Usar milimetros para una longitud, metros para otra y segundos para el tiempo puede ser valido si la formula se construyo asi, pero en la mayoria de leyes fisicas conviene convertir antes a un sistema coherente. La coherencia importa mas que la apariencia compacta del numero.

Tampoco debes aplicar prefijos a magnitudes adimensionales como si fueran unidades fisicas. Una razon, un angulo en radianes o un coeficiente puede tener escala numerica, pero no se convierte del mismo modo que metros, segundos o newtons.

## Resumen operativo

Usa notacion cientifica cuando los numeros tengan muchos ceros, cuando aparezcan prefijos SI o cuando quieras controlar el orden de magnitud. Convierte cada dato a potencia de diez, opera mantisas y exponentes por separado, y revisa la unidad final.

El objetivo fisico es leer escala: saber si hablas de kilometros, milimetros, nanosegundos, megavatios o microculombios. Una respuesta correcta debe tener numero, potencia de diez, unidad e interpretacion de tamano.

<!-- algebra-depth-v2 -->
## Capa de profundidad: notacion cientifica y prefijos SI

Este leaf no debe funcionar como una lista corta de reglas, sino como una herramienta para pensar problemas fisicos. El objetivo es moverse entre escalas microscopicas, humanas y astronomicas sin perder potencias de diez. Un alumno basico necesita reconocer la magnitud buscada y la unidad esperada; un alumno intermedio debe justificar la operacion elegida; un alumno avanzado debe anticipar limites, dependencias y casos donde el modelo deja de servir.

El prefijo no es decoracion: cambia la potencia de diez y, por tanto, la escala fisica del dato.

| Prefijo | Factor | Lectura |
|---|---|---|
| nano | `10^-9` | escala muy pequena |
| micro | `10^-6` | escala de laboratorio fino |
| mili | `10^-3` | milesima parte |
| kilo | `10^3` | miles |
| mega | `10^6` | millones |
| giga | `10^9` | miles de millones |

La prueba de comprension es comparar. Si una entrada se multiplica por `2`, por `10` o por `1/2`, el alumno debe poder decir que ocurre con la salida antes de usar la calculadora. Esa prediccion convierte el algebra en control fisico del resultado.

