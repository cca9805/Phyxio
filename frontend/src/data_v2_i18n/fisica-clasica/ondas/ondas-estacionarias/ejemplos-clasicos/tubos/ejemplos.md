# Ejemplo tipo examen

## Enunciado

Un tubo de laboratorio tiene longitud efectiva de 0.50 m y contiene aire donde la velocidad del sonido puede tomarse como 340 m/s. Se quiere comparar la frecuencia fundamental si el tubo esta abierto por ambos extremos con la frecuencia fundamental si se cierra uno de los extremos. Calcula tambien la longitud de onda modal en cada caso e interpreta por que las dos respuestas no coinciden.

## Datos

- Longitud efectiva: 0.50 m.
- Velocidad del sonido: 340 m/s.
- Tubo abierto-abierto: primer modo abierto.
- Tubo abierto-cerrado: primer indice cerrado.
- Se comparan modos fundamentales ideales.

## Definición del sistema

El sistema es la columna de aire dentro del tubo. La magnitud geometrica que entra en el modelo es [[L_eff]], no solo la longitud fisica [[L]]. Para el tubo abierto-abierto se usa [[n]] como numero de modo. Para el tubo abierto-cerrado se usa [[m]], porque la serie permitida se organiza por factores impares. La magnitud que permite comparar ambos casos es [[f_n]].

## Modelo físico

Se usa el modelo de tubo estrecho ideal con aire uniforme. La longitud fisica [[L]] se traduce en longitud efectiva [[L_eff]], y la rapidez [[v]] convierte cada escala espacial [[lambda_n]] en frecuencia [[f_n]]. En el caso abierto-abierto, ambos extremos se tratan como vientres de desplazamiento. En el caso abierto-cerrado, la boca abierta es vientre de desplazamiento y el extremo cerrado es nodo. El modelo es valido porque se comparan resonancias basicas, no detalles de campana, viscosidad o geometria compleja.

## Justificación del modelo

El modelo vale porque el enunciado proporciona [[L_eff]] y [[v]], que son las magnitudes necesarias para una primera lectura acustica. Ademas, se especifican los tipos de extremo. La comparacion dejaria de ser fiable si el tubo fuera muy ancho respecto a [[lambda_n]], si la temperatura variara mucho dentro de la columna o si el extremo cerrado no actuara como pared rigida.

## Resolución simbólica

Para el tubo abierto, se usa la serie completa:

{{f:frecuencia_tubo_abierto}}

La longitud de onda del modo abierto se obtiene con:

{{f:longitud_onda_tubo_abierto}}

Para el tubo abierto-cerrado, se usa la serie impar:

{{f:frecuencia_tubo_cerrado}}

La longitud de onda del modo cerrado se obtiene con:

{{f:longitud_onda_tubo_cerrado}}

En el fundamental abierto, [[n]] toma el primer valor entero. En el fundamental cerrado, [[m]] toma el primer valor y genera el primer factor impar. Esa diferencia traduce la frontera acustica: dos vientres de desplazamiento frente a un vientre y un nodo.

## Sustitución numérica

En el tubo abierto-abierto, repartir 340 m/s entre el doble de 0.50 m da una frecuencia de aproximadamente 340 Hz. Por tanto [[f_n]] para el fundamental abierto esta cerca de 340 Hz. La longitud de onda modal abierta queda aproximadamente en 1.0 m, porque el tubo contiene media onda.

En el tubo abierto-cerrado, repartir 340 m/s entre cuatro veces 0.50 m da aproximadamente 170 Hz para el fundamental. Por tanto [[f_n]] en el caso cerrado es aproximadamente la mitad del caso abierto. La longitud de onda modal cerrada queda cerca de 2.0 m, porque el tubo contiene un cuarto de onda fundamental.

## Validación dimensional

En ambos calculos de frecuencia, una velocidad con dimension `[L T⁻¹]` se divide por una longitud `[L]` y por factores adimensionales. El resultado tiene dimension `[T⁻¹]`, compatible con hertz.

Para la longitud de onda, la longitud efectiva se multiplica por factores adimensionales o se reparte entre indices modales. El resultado conserva dimension `[L]`, compatible con metros. La comparacion dimensional confirma que el cambio entre abierto y cerrado no es de unidades, sino de frontera fisica.

## Interpretación física

El tubo abierto-abierto tiene fundamental mas alto porque su patron fundamental contiene media longitud de onda en la longitud efectiva. El tubo abierto-cerrado contiene solo un cuarto de onda en la misma longitud efectiva, por eso necesita una longitud de onda mayor y produce una frecuencia menor. La diferencia no nace de cambiar el aire ni la velocidad [[v]], sino de cambiar una frontera.

Si se duplicara [[L_eff]], ambas frecuencias bajarian de forma comparable. Si aumentara [[v]] por aire mas caliente, ambas subirian. Pero cerrar un extremo no desplaza toda la serie de la misma manera que cambiar la longitud: tambien elimina los modos pares de la serie abierta ideal. Por eso el tipo de tubo afecta al tono fundamental y al timbre.

# Ejemplo de aplicación real

## Contexto

Un tubo de organo puede fabricarse abierto o cerrado. Un tubo cerrado por un extremo logra una nota grave con una longitud fisica menor que un tubo abierto equivalente. Esta propiedad permite construir instrumentos mas compactos y con timbres distintos.

## Estimación física

Supongamos aire con [[v]] del orden de 340 m/s y una nota cercana a 170 Hz. Un tubo abierto que produzca esa nota necesita una longitud efectiva del orden de 1 m, porque el fundamental abierto reparte la velocidad sobre el doble de la longitud. Un tubo abierto-cerrado para la misma nota necesita una longitud efectiva del orden de 0.5 m, porque usa un cuarto de onda fundamental. La estimacion muestra una diferencia de escala clara, no un pequeno detalle.

Si la temperatura sube y [[v]] aumenta unos pocos metros por segundo, la nota sube ligeramente en ambos tubos. Si la boca tiene una correccion de extremo apreciable, [[L_eff]] crece y la frecuencia baja respecto a la prediccion con [[L]] fisica.

## Interpretación

La aplicacion real muestra que un tubo no se disena solo por longitud material. Se disena por condicion de frontera. El extremo cerrado cambia la familia modal, reduce la frecuencia fundamental para la misma longitud efectiva y modifica el contenido armonico disponible.

La lectura fisica dominante es [[f_n]], pero no se entiende sin [[L_eff]], [[v]] y el indice correcto. Un organo, una flauta o un tubo de laboratorio seleccionan sonido porque el aire solo refuerza patrones compatibles con sus extremos.
