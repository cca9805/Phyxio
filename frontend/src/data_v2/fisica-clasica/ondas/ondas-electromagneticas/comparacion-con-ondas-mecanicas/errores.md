# Comparacion Con Ondas Mecanicas - Errores Comunes

## Idea clave
Los errores mas costosos no son de calculo, sino de modelo y de interpretacion.

## Errores conceptuales frecuentes
- aplicar \(c\) a una onda mecanica.
- usar una formula de cuerda para un problema de fluido o solido sin verificar.
- confundir "no necesita medio" (EM) con "no interactua con medios" (falso).
- suponer que la amplitud controla la velocidad en regimen lineal.

## Errores de calculo y unidades
- mezclar \(kg/m\) con \(kg/m^3\),
- no convertir nm o um a m,
- usar Pa como si fuera N/m de forma incorrecta,
- redondear demasiado pronto en potencias de 10.

## Protocolo rapido de correccion
1. Reescribe la incognita con su unidad objetivo.
2. Clasifica el fenomeno: mecanico o EM.
3. Verifica si la formula elegida aplica al caso fisico.
4. Despeja simbolicamente antes de sustituir.
5. Comprueba unidad final y orden de magnitud.
6. Contrasta con el tab `Graficas` para validar tendencia.

## Senales de alarma
- aparece \(v_{mec}\) del orden de \(10^8\ \mathrm{m/s}\) en un problema de cuerda.
- aparece \(v_{EM}\) del orden de decenas de m/s sin justificar medio extremo.
- el resultado contradice directamente el tipo de onda definido por el enunciado.

## Cierre
Corregir errores con metodo acelera mas el aprendizaje que repetir sustituciones mecanicas.
