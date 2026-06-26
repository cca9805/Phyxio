# Ejemplo tipo examen

## Enunciado
Un manómetro en U contiene agua como fluido manometrico. Una rama esta conectada a un deposito y la otra a una referencia de presion conocida [[p1]] = 101325 Pa. El desnivel observado entre superficies equivalentes es [[dh]] = 0.18 m. Tomando [[rho]] = 1000 kg/m^3 y [[g]] = 9.81 m/s^2, calcula la diferencia de presion [[dp]] y la presion en el punto desconocido [[p2]].

## Datos
Los valores dados definen una situacion de referencia coherente para un manómetro en equilibrio hidrostatico.

- [[rho]] = 1000 kg/m^3
- [[g]] = 9.81 m/s^2
- [[dh]] = 0.18 m
- [[p1]] = 101325 Pa

## Definicion del sistema
El sistema de interes es el liquido manometrico en equilibrio dentro del tubo. No estudiamos el flujo interno del deposito, sino la forma en que la columna convierte una diferencia de presion en un desnivel visible. Las magnitudes nucleares del leaf son [[dp]], [[dh]], [[p1]] y [[p2]].

## Modelo fisico
El modelo usa las dos relaciones nucleares del leaf y conecta el desnivel observado con la diferencia de presion y la referencia de lectura.

Usamos las dos relaciones centrales del leaf:

{{f:manometro}}
{{f:presion_relativa}}

## Justificacion del modelo
El uso del modelo es adecuado porque el problema describe un instrumento en equilibrio. No hay aceleraciones, vibraciones ni efectos dinamicos dominantes. El fluido manometrico tiene densidad conocida y el desnivel medido es vertical. Ademas, el enunciado proporciona una referencia explicita [[p1]], por lo que la diferencia de presion puede convertirse en presion del punto buscado.

La clave conceptual es que el ejercicio no pide adivinar una presion a partir de una tabla, sino reconstruirla fisicamente. La columna se desplaza porque las ramas no empujan igual. Ese desplazamiento genera una columna equivalente cuyo peso por unidad de area compensa la diferencia de presion. Solo despues de obtener [[dp]] tiene sentido pasar al calculo de [[p2]].

## Resolucion simbolica
Primero calculamos la diferencia de presion a partir del producto entre densidad del liquido manometrico, gravedad y desnivel vertical.

Despues usamos la referencia para hallar la presion objetivo sumando la diferencia manometrica a [[p1]].
## Sustitucion numerica
El resultado numerico para [[dp]] es 1765.8 Pa.

La presion buscada [[p2]] resulta 103090.8 Pa.
Si queremos expresar la misma lectura en kPa:
En kilopascales, [[dp]] es aproximadamente 1.77 kPa y [[p2]] es aproximadamente 103.09 kPa.
## Validacion dimensional
En la primera formula, kg/m^3 multiplicado por m/s^2 y por m produce unidades de Pa.
La segunda ecuacion suma dos presiones, de modo que mantiene la unidad de pascal.

## Interpretacion fisica
El resultado [[dp]] = 1765.8 Pa significa que la rama del deposito supera a la referencia en algo menos de dos kilopascales. El manómetro no ha "medido presion absoluta" de forma directa: ha medido un desnivel y lo ha traducido en una diferencia de presion. El paso a [[p2]] solo es posible porque el problema da una referencia conocida [[p1]].

La lectura mas importante no es numerica sino causal. Si el desnivel fuese el doble, la diferencia de presion seria el doble. Si el instrumento usara mercurio en vez de agua, el mismo desnivel representaria una diferencia mucho mayor porque el fluido manometrico seria mas denso. Esa dependencia muestra que el manómetro es un convertidor hidrostatico entre geometria y presion.

Tambien conviene notar que el resultado de [[p2]] tiene sentido por escala. Un salto de 18 cm de agua no puede producir decenas de kPa; debe producir un valor de orden 1 o 2 kPa. Este control de orden de magnitud es una defensa excelente contra errores de conversion de unidades o de lectura del desnivel.

---

# Ejemplo de aplicacion real

## Contexto
En una instalacion de climatizacion industrial se quiere vigilar el estado de un filtro de aire. Se coloca un manómetro diferencial con liquido coloreado. El fabricante indica que cuando la perdida de presion supera 250 Pa, el filtro ya esta suficientemente cargado de polvo como para requerir sustitucion. Durante una inspeccion se observa un desnivel [[dh]] = 0.0255 m usando un liquido manometrico de densidad [[rho]] = 1000 kg/m^3.

El objetivo no es calcular una presion absoluta, sino una diferencia de presion de diagnostico [[dp]] entre la entrada y la salida del filtro. En este contexto el manómetro sirve como sensor de mantenimiento, no como un mero ejercicio de hidrostatica.

## Estimacion fisica
Aplicamos la relacion central del leaf para estimar la diferencia de presion entre ambos lados del filtro.

Con los datos dados, el resultado es [[dp]] aproximadamente igual a 250.16 Pa.
La lectura queda apenas 0.16 Pa por encima del umbral recomendado de 250 Pa. En terminos relativos, eso significa que el filtro esta practicamente en el limite de servicio: no es una desviacion enorme, pero ya no puede considerarse claramente limpio.

Si expresamos esa diferencia en porcentaje respecto al umbral, la desviacion es cercana a 0.064 por ciento. Esto muestra que el sistema esta casi exactamente en el punto de cambio. Esta lectura cuantitativa es importante porque no solo dice "hay perdida de carga", sino "la perdida de carga ya alcanzo el criterio operativo".

Si el ventilador mantuviera un caudal aproximado de 1.2 m^3/s, la potencia ideal asociada a esa perdida de carga seria del orden de 300.2 W.
Esta estimacion no pretende describir toda la maquina, pero si dar una lectura fisica clara: una diferencia de presion aparentemente modesta ya implica un coste energetico apreciable cuando el sistema mueve un caudal continuo.

La lectura cae practicamente sobre el umbral de servicio del filtro. Si ademas el tecnico conoce que la presion aguas arriba vale [[p1]] = 101600 Pa, entonces la presion aguas abajo queda [[p2]] aproximadamente igual a 101349.84 Pa.
En esta situación concreta, interpretar [[dp]] es más útil que interpretar [[p2]], porque el criterio de mantenimiento está expresado precisamente en términos de caída de presión.

## Interpretacion
Este ejemplo muestra por que los manómetros son instrumentos de decision y no solo de medicion. Una diferencia de apenas 250 Pa puede parecer pequena comparada con la presion atmosferica, pero es suficiente para indicar que el filtro esta imponiendo una resistencia significativa al paso del aire. La variable util para mantenimiento no es la presion absoluta del sistema, sino el salto de presion entre antes y despues del elemento que ofrece resistencia.

La lectura tambien tiene una interpretacion economica. Si el filtro sigue ensuciandose, el ventilador necesitara mas trabajo para mantener el mismo caudal. Eso incrementa el consumo electrico y puede alejar el sistema de su punto de funcionamiento previsto. Un manómetro diferencial bien interpretado permite actuar antes de que aparezcan sintomas mas caros, como descenso de caudal, sobrecarga del ventilador o mala calidad del aire impulsado.

Ademas, el ejemplo ayuda a distinguir manómetros de otros subtemas. Aqui no estamos usando el desnivel para estudiar una superficie libre ni para discutir vasos comunicantes en abstracto. Lo usamos como lectura de instrumentacion. El desnivel es el dato visible que delata una perdida de presion en el proceso. Esa lectura es la razon por la que los manómetros siguen presentes en laboratorios, calderas, redes de aire y paneles de mantenimiento industrial.

