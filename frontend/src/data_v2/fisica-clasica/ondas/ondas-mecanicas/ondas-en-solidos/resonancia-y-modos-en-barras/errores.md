# Errores Frecuentes En Resonancia Y Modos En Barras

## 1- Confundir modo axial con modo flexional
No comparten la misma ley de frecuencia. El primer filtro siempre es identificar el tipo de deformacion.

## 2- Ignorar condiciones de frontera
Fijo-fijo, libre-libre y fijo-libre no generan la misma serie modal.

## 3- Usar longitud geometrica en vez de longitud efectiva
Apoyos, mordazas y zonas inactivas pueden cambiar L efectiva.

## 4- Mezclar f en Hz con omega en rad/s
Si usas omega=2*pi*f, mantente coherente en todo el desarrollo.

## 5- Calcular Q fuera de media potencia
Q=f_0/Delta_f requiere Delta_f medido entre puntos de -3 dB del pico.

## 6- Concluir por numero sin interpretacion
Un valor de f_n o Q debe traducirse a comportamiento: ancho de pico, disipacion y riesgo operacional.

## 7- No verificar unidades
E en Pa, rho en kg/m^3, L en m, f en Hz.

## 8- Redondear demasiado pronto
Errores pequenos en f_1 y f_2 afectan mucho Q.

## 9- Suponer linealidad universal
Con amplitudes altas puede aparecer no linealidad y corrimiento de resonancia.

## 10- Olvidar incertidumbre experimental
Sin margen de error, comparar teoria y ensayo puede llevar a conclusiones falsas.
