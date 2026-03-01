# Intensidad Y Nivel Sonoro - Errores Comunes

## Idea clave
El error principal en este subtema es mezclar magnitudes lineales con logaritmicas sin conversion adecuada.

## 1- Errores conceptuales frecuentes
- Tratar dB como magnitud lineal.
- Sumar niveles sin pasar por intensidades.
- Interpretar +3 dB como +3%.
- Olvidar que el modelo de fuente puntual exige condiciones de campo libre.

## 2- Errores de calculo y unidades
- Usar \(\ln\) en lugar de \(\log_{10}\).
- Omitir \(I_0\) o usar referencia incorrecta.
- Confundir potencia (W) con intensidad (W/m^2).
- Trabajar con distancias sin cuadrado en ley inversa.

## 3- Protocolo rapido de correccion
1. Identifica si la variable pedida es lineal o en dB.
2. Convierte a escala correcta antes de operar.
3. Revisa modelo geometrico de propagacion.
4. Verifica SI y referencia utilizada.
5. Contrasta con `Graficas` para validar tendencia.

## 4- Senales de alarma
- Resultados en dB sin referencia explicita.
- Cambios de nivel que no coinciden con factores energeticos esperados.
- Conclusiones fisicas incompatibles con distancia o potencia de la fuente.

## 5- Cierre
Evitar estos errores permite leer correctamente la fisica real detras de un numero en decibelios.
