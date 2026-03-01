# Errores Frecuentes En Relacion Entre Modulos Elasticos

## 1- Tratar modulos como independientes
En isotropia lineal, no puedes fijar arbitrariamente \(E\), \(G\), \(K\), \(\nu\).

## 2- Ignorar rango de Poisson
Resultados con \(\nu\ge0.5\) o \(\nu\le-1\) suelen indicar inconsistencia.

## 3- Mezclar unidades
Confundir GPa con Pa altera resultados por factores de mil millones.

## 4- Aplicar isotropia a materiales claramente anisotropos
El modelo puede dejar de representar el material real.

## 5- No validar positividad de modulos
\(E\), \(G\), \(K\) deben ser positivos en medios estables.

## 6- Usar solo formulas de conversion y olvidar rho
Para ondas necesitas tambien la densidad.

## 7- Redondear en exceso al inicio
Perder precision temprano afecta conversiones encadenadas.

## 8- No cerrar con interpretacion fisica
Debe explicarse si el conjunto final de propiedades tiene sentido para ese material.

## 9- Confundir formula aproximada con exacta
Aclara siempre el dominio y la hipotesis del modelo.

## 10- Resolver sin estrategia
Primero identifica par conocido, luego convierte y finalmente valida.
