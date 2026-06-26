# Modelos físicos: Concepto fuerza centripeta

## Modelo ideal

El modelo base del leaf describe trayectorias circulares con radio [[r]] fijo y con una lectura clara de la resultante radial [[Frad]]. En este marco, la aceleracion [[ac]] no cambia la rapidez por si sola, sino la direccion de la velocidad. Esa idea permite conectar cinematica y dinamica sin ambiguedades.

Las simplificaciones principales son:

- Se modela el objeto como particula cuando su tamano no altera la geometria del giro.
- Se asume que las magnitudes de entrada ([[m]], [[r]], [[v]] o [[omega]]) son suficientemente estables en el intervalo de analisis.
- Se ignoran acoplamientos secundarios que no cambian el orden de magnitud de [[Frad]].

Este modelo es deliberadamente economico y util para diagnostico rapido, diseno preliminar y aprendizaje conceptual.

## Hipótesis

Las hipotesis operativas son:

- El movimiento es aproximadamente circular en el tramo estudiado.
- El eje radial esta bien definido y permite proyectar fuerzas reales.
- Las relaciones entre [[v]], [[omega]], [[T]] y [[r]] son consistentes entre si.
- Las unidades estan en SI y [[pi]] se usa de forma coherente al convertir periodo en velocidad angular.

Si alguna hipotesis falla, los resultados pueden seguir siendo numericos pero dejan de ser interpretables fisicamente.

## Dominio de validez cuantitativo

El uso del modelo es razonable cuando:

- [[r]] > 0 y se mantiene casi constante.
- [[v]] >= 0 y sin oscilaciones extremas en el tramo.
- [[omega]] > 0 en regimen de giro definido.
- [[T]] > 0 con medicion temporal confiable.

Como criterio practico, si la prediccion y la medicion de [[ac]] o [[Fc]] discrepan de forma sistematica por encima de 10% a 15% sin explicacion experimental, conviene revisar supuestos.

## Señales de fallo del modelo

Hay cuatro alertas frecuentes:

- El radio efectivo cambia a lo largo del tramo y ya no representa una circunferencia unica.
- Aparece derrape sostenido, de modo que la direccion real del movimiento no coincide con el esquema de giro ideal.
- La proyeccion radial de fuerzas deja de cerrar con la estimacion de [[Frad]].
- Pequenas variaciones de entrada producen saltos no realistas en la salida, senal de que falta fisica relevante.

Estas senales no invalidan la teoria; indican que el problema necesita un modelo mas rico.

## Modelo extendido o alternativo

El paso natural es incluir efectos que en el modelo ideal se omiten: adherencia no lineal, variacion de radio, deformacion, control activo o perturbaciones del entorno.

Transicion explicita: conviene cambiar al modelo alternativo cuando la discrepancia observacion-prediccion se mantiene por encima del umbral acordado en varios ensayos, o cuando las senales de fallo aparecen de forma repetida bajo condiciones nominales.

Ese cambio no es un castigo al modelo simple, sino una decision metodologica: mantener simplicidad cuando basta y aumentar complejidad cuando la evidencia lo exige.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---------|--------------|------------------|
| Variable central | [[ac]] y [[Frad]] | [[ac]] + efectos acoplados |
| Parametros | pocos | mas numerosos |
| Costo de calculo | bajo | medio o alto |
| Uso recomendado | aprendizaje, prediseno, control rapido | validacion fina, seguridad critica |
| Riesgo de sobreajuste | bajo | mayor si faltan datos |

La practica experta consiste en elegir el menor modelo que explique el fenomeno con precision suficiente para la decision tecnica en juego.
