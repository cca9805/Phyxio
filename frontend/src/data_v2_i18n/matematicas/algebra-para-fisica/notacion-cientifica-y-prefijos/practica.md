# Practica

## Nivel 1: reconocimiento

Identifica el prefijo y su potencia de diez: kilo, mili, micro, nano y mega. Escribe al lado si la cantidad se hace mayor o menor al pasar a la unidad base.

Ejercicio: convierte mentalmente `3 km`, `4 ms`, `7 microC` y `2 MW` en numero por potencia de diez con unidad base. No hagas aun operaciones compuestas.

Despues de escribir tu respuesta, usa el conversor de unidades de Phyxio para comprobar solo una de las cuatro. Si necesitas comprobar todas, probablemente todavia no reconoces los prefijos con suficiente seguridad.

## Nivel 2: aplicacion directa

Convierte una cantidad con prefijo a unidad base. Por ejemplo, `12 mm = 12 x 10^-3 m = 1.2 x 10^-2 m`. Observa que el ultimo paso normaliza la mantisa.

Ejercicio: convierte `0.5 km` a metros, `250 mA` a amperios, `8 ns` a segundos y `3.6 kJ` a julios. Comprueba que la escala fisica es razonable.

Criterio de correccion: deben salir `5.0 x 10^2 m`, `2.50 x 10^-1 A`, `8 x 10^-9 s` y `3.6 x 10^3 J`. Si aparece un exponente con signo opuesto, revisa si confundiste prefijos grandes con pequenos.

## Nivel 3: eleccion de herramienta

Decide si debes convertir antes de operar. Si una formula usa metros y segundos, una distancia en centimetros y un tiempo en milisegundos deben convertirse primero. Si todas las cantidades comparten una unidad coherente, puedes mantenerla.

Ejercicio: para calcular velocidad con `d = 40 cm` y `t = 0.20 s`, decide si usar centimetros por segundo o convertir a metros por segundo. Explica que forma comunica mejor el resultado.

Ejercicio avanzado: convierte `9 cm^2` a `m^2`, `3 mm^3` a `m^3`, `90 km/h` a `m/s` y `0.8 g/cm^3` a `kg/m^3`. Indica en cuales casos el prefijo se eleva a una potencia y en cuales aparece en un cociente.

Criterio de correccion: `9 cm^2 = 9 x 10^-4 m^2`, `3 mm^3 = 3 x 10^-9 m^3`, `90 km/h = 25 m/s` y `0.8 g/cm^3 = 8.0 x 10^2 kg/m^3`.

Comprobacion con herramientas: verifica estos cuatro resultados con el conversor. Si un valor no coincide, escribe si el fallo estaba en area, volumen, cociente o prefijo. Despues usa la calculadora solo para repetir una operacion numerica, no para decidir la conversion.

## Nivel 4: interpretacion fisica

Lee exponentes como escalas. `10^-9 m` sugiere nanometros; `10^6 W` sugiere megavatios; `10^-3 s` sugiere milisegundos. Relaciona cada escala con un fenomeno fisico plausible.

Ejercicio: clasifica `5 x 10^-6 s`, `2 x 10^3 m`, `9 x 10^-3 N` y `1.5 x 10^6 J` como escalas micro, kilo, mili o mega cuando sea apropiado.

Ejercicio avanzado: decide como comunicar estos resultados: `4.2 x 10^-7 m`, `6.5 x 10^4 W`, `3.0 x 10^-3 C` y `1.1 x 10^9 Hz`. Elige entre unidad base, prefijo SI o notacion cientifica y justifica cual se lee mejor.

Criterio de correccion: son razonables expresiones como `420 nm`, `65 kW`, `3.0 mC` y `1.1 GHz`, siempre que se mantenga la unidad y no se pierdan cifras significativas.

Si dudas entre dejar notacion cientifica o usar prefijo, usa el conversor para explorar ambas formas y decide cual comunica mejor el fenomeno. Para problemas con constantes, abre tambien la tabla de constantes y comprueba que el valor usado este en SI antes de combinarlo con tus datos.

## Nivel 5: error intencionado

Analiza el error: alguien convierte `4 mm` en `4 x 10^3 m`. Explica que prefijo se confundio, cual es la conversion correcta y por que la escala resultante es absurda para un objeto pequeno.

Analiza otro error: alguien afirma que `1 cm^2 = 10^-2 m^2`. Corrige la conversion recordando que el factor del centimetro se eleva al cuadrado, y explica por que el resultado correcto es `10^-4 m^2`.

Analiza un tercer error: alguien convierte `60 km/h` en `60 x 10^3 m/s`. Explica que ha convertido kilometros a metros pero no horas a segundos. Corrige el resultado y di por que `60 km/h` debe estar en una escala de decenas de `m/s`, no miles.

Analiza un cuarto error: alguien convierte `1 g/cm^3` en `10^-3 kg/m^3`. Detecta que se ha convertido la masa pero no el volumen del denominador. Corrige la conversion y explica por que el resultado SI correcto es `10^3 kg/m^3`.

## Ruta de dominio

Nivel basico: debes reconocer prefijos comunes, convertir una cantidad aislada a unidad base y leer si el exponente representa una escala grande o pequena. En esta etapa, el criterio principal es no invertir el signo del exponente.

Nivel intermedio: debes operar con magnitudes que tienen unidades compuestas, como areas, volumenes, velocidades y densidades. El punto critico es recordar que el factor de conversion tambien se eleva al cuadrado o al cubo cuando la unidad esta elevada.

Nivel avanzado: debes decidir como comunicar un resultado: prefijo SI, unidad base o notacion cientifica. La mejor forma no siempre es la mas corta; es la que conserva precision, evita ambiguedad y permite comparar la escala fisica con otros datos del problema.

<!-- algebra-depth-v2 -->
## Practica de profundizacion

Nivel basico: inventa un ejemplo numerico sencillo relacionado con notacion cientifica y prefijos SI, resuelvelo y escribe una frase con unidad y significado.

Nivel intermedio: cambia un dato por un factor `10` y predice el nuevo resultado antes de calcularlo. Luego verifica si la prediccion coincide.

Nivel avanzado: escribe un caso limite donde el procedimiento habitual pueda fallar. Explica que condicion fisica o matematica deja de cumplirse.

