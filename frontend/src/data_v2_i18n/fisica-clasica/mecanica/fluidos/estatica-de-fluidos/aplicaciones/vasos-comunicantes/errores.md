# Errores frecuentes en Vasos comunicantes

## Errores conceptuales

### Error 1: Creer que siempre se igualan las alturas aunque cambien las densidades
- **Por qué parece correcto**: La frase escolar "los vasos comunicantes igualan niveles" se recuerda con demasiada rigidez.
- **Por qué es incorrecto**: Esa conclusion solo vale de forma directa cuando las ramas contienen el mismo fluido bajo las mismas condiciones superficiales. Con densidades distintas, lo que se iguala a una misma profundidad es la presion, no necesariamente la altura.
- **Señal de detección**: El alumno obtiene [[h2]] = [[h1]] incluso cuando [[rho1]] y [[rho2]] son claramente diferentes.
- **Corrección conceptual**: Sustituye la regla visual por la regla fisica: a igual profundidad debe haber la misma presion. Luego decide si eso obliga a igualar alturas o a compensarlas con densidades distintas.
- **Mini-ejemplo**: Si agua y aceite comparten fondo comun, la columna de aceite puede ser mas alta sin violar el equilibrio.

### Error 2: Pensar que la forma del recipiente decide el equilibrio final
- **Por qué parece correcto**: Un tubo curvado o una rama mas ancha impresionan visualmente y parecen alterar el resultado.
- **Por qué es incorrecto**: En el modelo ideal, la geometria decorativa no cambia la condicion hidrostatica de equilibrio. Importan la altura efectiva y la densidad, no el dibujo externo del recipiente.
- **Señal de detección**: El alumno justifica una diferencia de niveles diciendo solo que una rama es mas ancha o mas estrecha.
- **Corrección conceptual**: Pregunta obligatoria: "si comparo una misma horizontal, que columnas efectivas pesan sobre ella". Esa pregunta devuelve el foco a [[h1]], [[h2]], [[rho1]] y [[rho2]].
- **Mini-ejemplo**: Dos ramas con secciones distintas pueden acabar a la misma altura si contienen el mismo fluido.

## Errores de modelo

### Error 3: Medir las alturas desde referencias distintas
- **Por qué parece correcto**: En el dibujo es facil tomar como origen el fondo de cada rama o la superficie visible mas cercana.
- **Por qué es incorrecto**: La ecuacion del leaf compara columnas respecto a una misma horizontal. Si [[h1]] y [[h2]] no salen de la misma referencia, dejan de ser magnitudes homologas.
- **Señal de detección**: El esquema parece coherente, pero el resultado contradice el caso limite [[rho1]] = [[rho2]].
- **Corrección conceptual**: Dibuja primero la horizontal comun y solo despues mide [[h1]] y [[h2]].
- **Mini-ejemplo**: Tomar [[h1]] desde el fondo del tubo y [[h2]] desde la interface produce una igualdad aparente que no significa nada fisicamente.

### Error 4: Reducir a dos columnas un sistema que tiene varios tramos relevantes
- **Por qué parece correcto**: La formula [[rho1]] [[h1]] = [[rho2]] [[h2]] es compacta y da la impresion de servir siempre.
- **Por qué es incorrecto**: Si una rama contiene varios fluidos o varias interfaces, una sola densidad ya no representa toda la columna. El problema requiere un balance por segmentos.
- **Señal de detección**: El estudiante omite una interface del dibujo o fusiona dos fluidos distintos como si fueran uno solo.
- **Corrección conceptual**: Recorre la presion por capas y suma contribuciones hidrostaticas cuando el esquema no puede resumirse en una sola altura por lado.
- **Mini-ejemplo**: Una rama con agua y aceite no puede modelarse con una unica densidad media sin justificar muy bien el paso.

## Errores matemáticos

### Error 5: Despejar mal la altura buscada
- **Por qué parece correcto**: La ecuacion parece tan simple que muchos alumnos la manipulan de memoria.
- **Por qué es incorrecto**: Al despejar [[h2]], [[rho2]] debe quedar dividiendo. Si se coloca multiplicando, se invierte la tendencia fisica y el resultado empeora justo cuando aumenta la densidad compensadora.
- **Señal de detección**: Sale que una rama mas densa necesita mas altura para equilibrar, lo cual contradice la intuicion fisica correcta.
- **Corrección conceptual**: Antes de sustituir, comprueba la tendencia: si [[rho2]] sube, [[h2]] debe bajar para la misma [[h1]].
- **Mini-ejemplo**: Con [[rho1]] = 1000, [[h1]] = 0.20 y [[rho2]] = 800, la altura correcta es 0.25 m, no un valor menor por inercia algebraica.

### Error 6: Olvidar revisar el caso limite de densidades iguales
- **Por qué parece correcto**: El alumno se conforma con un numero y no hace pruebas de coherencia.
- **Por qué es incorrecto**: El caso [[rho1]] = [[rho2]] es una verificacion muy potente. Si el modelo o el despeje son correctos, debe recuperarse [[h1]] = [[h2]].
- **Señal de detección**: Incluso con densidades iguales, la resolucion mantiene alturas distintas sin explicacion adicional.
- **Corrección conceptual**: Introduce siempre un control rapido con el limite de fluidos iguales.
- **Mini-ejemplo**: Si agua se compara con agua, cualquier diferencia sistematica de alturas del modelo ideal indica un fallo de planteamiento.

## Errores de interpretación

### Error 7: Leer una columna mas alta como "mas presion" sin mirar la densidad
- **Por qué parece correcto**: Visualmente una columna alta impresiona como una carga mayor.
- **Por qué es incorrecto**: La presion hidrostatica depende de densidad y altura. Una columna alta de fluido ligero puede equilibrar una columna mas baja de fluido denso.
- **Señal de detección**: El alumno afirma que la rama mas alta "gana" siempre, aunque el fluido de esa rama sea mucho menos denso.
- **Corrección conceptual**: Interpreta cada altura junto con su densidad asociada. La pregunta fisica correcta es cual es el producto densidad por altura, no cual es solo la altura mayor.
- **Mini-ejemplo**: Aceite mas alto y agua mas baja pueden estar perfectamente en equilibrio.

## Regla de autocontrol rápido
1. Marca una horizontal comun.
2. Verifica que [[h1]] y [[h2]] salen de esa misma referencia.
3. Comprueba que [[rho1]] pertenece a la columna de [[h1]] y [[rho2]] a la de [[h2]].
4. Usa 

{{f:equilibrio_vasos}}

 o 

{{f:equilibrio_vasos}}

.
5. Revisa el limite [[rho1]] = [[rho2]].
6. Cierra con una frase fisica sobre por que una rama necesita mas o menos altura.

