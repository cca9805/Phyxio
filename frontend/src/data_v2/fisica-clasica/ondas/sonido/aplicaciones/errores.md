# Aplicaciones Del Sonido - Errores Comunes

## Idea clave
El fallo habitual en aplicaciones no es algebraico, sino de seleccion de modelo y supuestos.

## 1- Errores conceptuales frecuentes
- Usar una formula correcta en un escenario incorrecto.
- Asumir campo libre cuando hay reflexiones dominantes.
- Operar con dB como si fueran unidades lineales.
- Resolver Doppler sin convenio de signos explicitado.

## 2- Errores de calculo y unidades
- Omitir factor 2 en tiempo de eco.
- Mezclar m/s con km/h en velocidades.
- Olvidar referencia \(I_0\) en nivel sonoro.
- Redondear temprano y degradar comparaciones de nivel.

## 3- Protocolo rapido de correccion
1. Identifica el bloque fisico del problema.
2. Revisa supuestos del modelo elegido.
3. Verifica unidades SI.
4. Comprueba tendencia fisica esperada.
5. Contrasta en `Graficas`.

## 4- Senales de alarma
- Resultado numerico sin interpretacion de contexto.
- Nivel sonoro incoherente con potencia y distancia.
- Corrimiento Doppler con signo opuesto al escenario.

## 5- Cierre
Evitar estos errores convierte un calculo suelto en una solucion tecnica util.
