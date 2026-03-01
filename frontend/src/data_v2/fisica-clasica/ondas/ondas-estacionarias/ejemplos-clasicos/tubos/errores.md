# Tubos - Errores Comunes

## Idea clave
En tubos, la mayoria de errores vienen de elegir mal la condicion de frontera y no del calculo algebraico.

## 1- Errores conceptuales frecuentes
- Usar formula de abierto-abierto en un tubo abierto-cerrado.
- Incluir armonicos pares en abierto-cerrado.
- Confundir nodo de presion con nodo de desplazamiento.
- Suponer que amplitud cambia frecuencia modal en regimen lineal.

## 2- Errores de calculo y unidades
- Trabajar con longitud en cm sin pasar a m.
- Usar velocidad del sonido fija sin revisar temperatura cuando el problema la da.
- Redondear demasiado pronto en pasos intermedios.
- Omitir unidad final o interpretacion fisica.

## 3- Protocolo rapido de correccion
1. Identifica extremos y define tipo de tubo.
2. Reescribe incognita y unidad objetivo.
3. Selecciona formula modal compatible.
4. Despeja en simbolico y luego sustituye en SI.
5. Verifica en `Graficas` el patron nodal esperado.

## 4- Senales de alarma
- Resultado negativo para frecuencia o longitud.
- Modo no permitido por la frontera elegida.
- Incoherencia entre calculo numerico y patron visual.

## 5- Cierre
Corregir con criterio de frontera evita la mayor parte de fallos en problemas de tubos resonantes.
