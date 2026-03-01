# Errores Frecuentes En Modos En Placas Y Membranas

## 1- Mezclar membrana y placa
No tienen el mismo mecanismo restaurador ni las mismas ecuaciones.

## 2- Usar dimensiones geometrica en vez de activa
Soportes, marcos y zonas fijadas cambian Lx y Ly efectivas.

## 3- Intercambiar indices modales sin criterio
(2,1) y (1,2) no son equivalentes si Lx no coincide con Ly.

## 4- Ignorar condiciones de borde
Borde fijo, libre o empotrado cambia de forma fuerte la familia modal.

## 5- Olvidar la conversion omega<->f
Rad/s y Hz no son intercambiables sin 2*pi.

## 6- Calcular D sin revisar unidades
E en Pa y h en m; errores aqui desplazan mucho la frecuencia.

## 7- No considerar dependencia cubica con h
Pequenos cambios de espesor afectan mucho la respuesta de placa.

## 8- Validar solo por un punto de frecuencia
El criterio correcto incluye forma modal y lineas nodales.

## 9- Extrapolar fuera del regimen lineal
A grandes amplitudes puede haber no linealidad geometrica.

## 10- Cerrar resultado sin interpretacion fisica
Toda solucion debe decir que modo vibra y que implica en aplicacion real.
