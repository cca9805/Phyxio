# Ejemplo tipo examen

## Enunciado

Una antena emite una onda electromagnetica que, en una region lejana, puede aproximarse como plana. La frecuencia de emision es 100 MHz y el campo magnetico maximo medido es 1.0 nT. Se quiere estimar la longitud de onda en el vacio y la amplitud del campo electrico asociada. Despues se debe interpretar si el resultado corresponde a una onda electromagnetica de radio coherente con el modelo del leaf.

## Datos

Los datos fisicos son [[f]] en megahercios, [[B0]] en nanoteslas y la rapidez de referencia [[c]] en el vacio. Para operar con las formulas se convierten todos los datos a SI: la frecuencia queda del orden de 10⁸ Hz, el campo magnetico queda del orden de 10⁻⁹ T y [[c]] queda del orden de 3 x 10⁸ m/s. La magnitud buscada de escala espacial es [[lambda]] y la magnitud buscada de amplitud electrica es [[E0]].

## Definición del sistema

El sistema no es la antena completa, sino la region de propagacion lejana donde el frente de onda se puede leer localmente como plano. En esa region se observa una onda que avanza en una direccion fija. El campo electrico y el campo magnetico oscilan en direcciones transversales. La lectura evita detalles de emision, geometria de la antena y absorcion, porque el objetivo es reconocer el nucleo electromagnetico de la onda.

## Modelo físico

Se usa el modelo de onda electromagnetica plana en vacio. Para la escala espacial se usa la relacion entre [[c]], [[lambda]] y [[f]]. Para la amplitud electrica se usa la relacion entre [[E0]], [[B0]] y [[c]]. Las dos relaciones pertenecen al mismo modelo: una controla la propagacion y la otra controla el acoplamiento de campos.

## Justificación del modelo

La justificacion fisica es que la region esta lejos de la fuente, no se menciona material dispersivo y la frecuencia de radio admite frentes que pueden tratarse como planos a escala local. Eso permite sustituir la antena real por una porcion de onda plana: las curvaturas del frente, los campos cercanos y la geometria del emisor quedan fuera de la escala observada. Como el enunciado pide una estimacion en el vacio, no se introduce indice de refraccion y [[c]] se toma como propiedad del medio ideal. Como se da [[B0]], no se interpreta ese dato como energia ni como intensidad, sino como amplitud magnetica de una onda plana acoplada a [[E0]]. La presencia simultanea de [[f]] y [[B0]] permite conectar escala espectral y acoplamiento de campos, que son precisamente las magnitudes nucleo del leaf.

## Resolución simbólica

Para la longitud de onda se despeja [[lambda]] a partir de la relacion de propagacion.

{{f:onda_em_velocidad}}

La lectura simbolica es: si [[c]] se mantiene fija, una frecuencia mayor reduce la distancia entre repeticiones. Para la amplitud electrica se usa la relacion entre campos.

{{f:relacion_campos_em}}

Aqui [[E0]] se obtiene al multiplicar la amplitud magnetica por la rapidez de propagacion. No se esta calculando energia total ni potencia de la antena, sino escala de campo electrico.

## Sustitución numérica

Con [[f]] del orden de 1.0 x 10⁸ Hz y [[c]] del orden de 3.0 x 10⁸ m/s, la longitud de onda estimada queda alrededor de 3 m. Con [[B0]] del orden de 1.0 x 10⁻⁹ T, la amplitud electrica estimada queda alrededor de 0.3 V/m. Ambos valores son razonables para una onda de radio debil: la longitud de onda es macroscopica y el campo electrico no es extremo.

## Validación dimensional

La primera relacion combina `[L T⁻¹]`, `[L]` y `[T⁻¹]`; por tanto la division entre rapidez y frecuencia devuelve una longitud. La segunda combina `[L T⁻¹]` con `[M T⁻² I⁻¹]` y produce `[M L T⁻³ I⁻¹]`, compatible con campo electrico. Esta validacion es importante porque los prefijos `MHz` y `nT` suelen provocar errores de diez a nueve ordenes de magnitud.

## Interpretación física

El resultado no solo da dos numeros. Una [[lambda]] de metros situa la onda en una banda de radio, donde antenas y objetos cotidianos pueden tener tamanos comparables a la escala espacial de la onda. Un [[E0]] de decimas de V/m indica un campo electrico medible pero no extremo. El [[B0]] pequeno no significa que la parte magnetica sea despreciable; significa que el tesla es una unidad grande y que el acoplamiento con [[E0]] se lee mediante [[c]]. La coherencia del ejemplo esta en que propagacion y amplitudes cuentan la misma historia: una onda electromagnetica transversal, lejana a la fuente y compatible con vacio.

# Ejemplo de aplicación real

## Contexto

En una situacion real, una antena de radio no produce una onda plana perfecta en todos los puntos. Cerca de la antena hay campos cercanos y geometria dependiente del emisor. Sin embargo, a distancias suficientemente grandes frente a [[lambda]], una pequena region puede analizarse como si el frente fuese plano. Esa aproximacion permite estimar recepcion, orientacion de antenas y escala de propagacion sin resolver toda la distribucion espacial.

## Estimación física

Antes de calcular, se puede anticipar el resultado. Una frecuencia de 100 MHz sugiere longitudes de onda de pocos metros porque 3 x 10⁸ dividido entre 10⁸ deja una escala de unidades de metro. Un campo magnetico de 1 nT multiplicado por una rapidez de 3 x 10⁸ m/s deja una escala de decimas de voltio por metro. Esta lectura previa evita aceptar resultados como kilometros o millones de voltios por metro, que serian senales de prefijos mal convertidos.

## Interpretación

La estimacion confirma que la onda es electromagnetica y no mecanica: no aparece densidad de un medio, tension de una cuerda ni modulo elastico. Las magnitudes centrales son campos y escalas de repeticion. Si se quisiera estudiar energia radiada, seguridad o absorcion, haria falta otro modelo. Para el objetivo de este leaf, el ejemplo muestra como [[lambda]], [[f]], [[E0]], [[B0]] y [[c]] se leen juntos.
