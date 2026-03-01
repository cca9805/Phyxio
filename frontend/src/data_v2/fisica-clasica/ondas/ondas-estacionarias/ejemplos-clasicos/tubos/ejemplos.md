# Tubos - Ejemplos Guiados

## Idea clave
Cada ejercicio en tubos empieza por una decision de modelo: identificar correctamente la frontera es mas importante que la sustitucion numerica.

## 1- Ejemplo basico: tubo abierto-abierto
Datos: \(L=0.80\,\mathrm{m}\), \(v=340\,\mathrm{m/s}\), \(n=3\).

$$
f_3=\frac{3\cdot340}{2\cdot0.80}=637.5\,\mathrm{Hz}
$$

Lectura: es el tercer armonico permitido de un tubo abierto-abierto.

## 2- Ejemplo intermedio: tubo abierto-cerrado
Datos: \(L=0.90\,\mathrm{m}\), \(v=343\,\mathrm{m/s}\), \(n=2\).

$$
f_2=\frac{(2\cdot2-1)\cdot343}{4\cdot0.90}=285.8\,\mathrm{Hz}
$$

Lectura: corresponde al tercer armonico de la serie impar.

## 3- Ejemplo integrado: estimar longitud a partir de frecuencia objetivo
Tubo abierto-abierto, \(f_1=425\,\mathrm{Hz}\), \(v=340\,\mathrm{m/s}\).

$$
L=\frac{v}{2f_1}=\frac{340}{850}=0.40\,\mathrm{m}
$$

Lectura: con esa longitud, la fundamental coincide con la frecuencia deseada.

## 4- Preguntas de control rapido
- Por que un tubo abierto-cerrado no admite armonicos pares?
- Que cambia en \(f_n\) si sube la temperatura del aire?
- Cuando conviene usar longitud efectiva en lugar de longitud geometrica?

## 5- Checklist de revision final
- Tipo de frontera identificado correctamente.
- Formula modal coherente con esa frontera.
- Unidades SI en todos los datos.
- Resultado interpretable en terminos de modos permitidos.

## 6- Siguiente paso
Comprueba estos tres casos en `Calculadora` y valida en `Graficas` que el patron espacial coincide con el modo calculado.
