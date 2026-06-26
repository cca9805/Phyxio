# Modelos físicos: Sistemas con muelles

## Modelo ideal

El modelo ideal representa una red de muelles lineales sin masa apreciable y sin disipacion dominante. En ese marco, cada rama se modela con rigidez constante y el sistema completo se resume por [[keq]] segun la topologia (serie o paralelo).

El objetivo del modelo no es capturar todos los detalles materiales, sino producir una aproximacion trazable para calcular [[Fel]], [[Fm]], reparto interno y, en vertical, [[x_eq]].

## Hipótesis

Hipotesis operativas:

- [[k1]] y [[k2]] se mantienen aproximadamente constantes en el intervalo de trabajo.
- La relacion fuerza-deformacion es lineal para cada muelle.
- La conexion mecanica impone correctamente las restricciones de serie o paralelo.
- No hay holguras ni fricciones que dominen el reparto interno.
- En equilibrio vertical, [[g]] se toma uniforme y [[m]] bien conocida.

## Dominio de validez cuantitativo

El modelo lineal es defendible cuando se cumplen simultaneamente criterios como:

- Variacion relativa de rigidez por rama menor al 10% en el rango operativo.
- Ajuste lineal de fuerza vs deformacion con calidad alta en el tramo usado.
- Error medio entre prediccion y medida menor al 5% para cargas nominales.
- Reparto interno coherente: en serie, [[x]] cercana a [[x1]] + [[x2]]; en paralelo, [[Fm]] cercana a [[F1]] + [[F2]].
- Hundimiento estatico [[x_eq]] dentro del recorrido funcional seguro del montaje.

Si uno o mas criterios fallan, el modelo ideal pierde confiabilidad para decisiones de diseño.

## Señales de fallo del modelo

Indicadores practicos de ruptura:

- Historesis apreciable en ciclos de carga/descarga.
- Deriva de respuesta tras pocos ciclos (fatiga temprana o asentamiento).
- Sensibilidad excesiva a tolerancias de montaje.
- Predicciones de reparto interno incompatibles con mediciones locales.
- Necesidad repetida de "correcciones" empiricas no justificadas.

## Modelo extendido o alternativo

Cuando el modelo ideal no alcanza, se migra a:

- Rigideces efectivas por tramos segun nivel de deformacion.
- Modelo viscoelastico para dependencia temporal.
- Representacion con disipacion explicita en ciclos.
- Calibracion directa por curva experimental de red.

Transicion explicita: si la desviacion supera el umbral de error operativo acordado o falla el cierre de reparto interno, se abandona el modelo ideal y se recalibra con el modelo extendido.

## Comparación operativa

| Aspecto | Modelo ideal de red lineal | Modelo extendido |
|---------|----------------------------|------------------|
| Parametros | [[k1]], [[k2]], [[keq]] constantes | Parametros dependientes de estado |
| Reparto interno | Algebraico simple | Dependiente de historia o no linealidad |
| Costo de calculo | Bajo | Medio o alto |
| Uso recomendado | Diseño preliminar y verificacion rapida | Validacion final y casos fuera de rango |
| Trazabilidad | Alta y directa | Alta si hay datos de calibracion |

La regla practica es simple: usar el modelo ideal como primera aproximacion y escalar solo cuando los datos indiquen ruptura de hipotesis.
