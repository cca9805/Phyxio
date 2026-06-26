const e=`# Modelos físicos: Sistemas con muelles\r
\r
## Modelo ideal\r
\r
El modelo ideal representa una red de muelles lineales sin masa apreciable y sin disipacion dominante. En ese marco, cada rama se modela con rigidez constante y el sistema completo se resume por [[keq]] segun la topologia (serie o paralelo).\r
\r
El objetivo del modelo no es capturar todos los detalles materiales, sino producir una aproximacion trazable para calcular [[Fel]], [[Fm]], reparto interno y, en vertical, [[x_eq]].\r
\r
## Hipótesis\r
\r
Hipotesis operativas:\r
\r
- [[k1]] y [[k2]] se mantienen aproximadamente constantes en el intervalo de trabajo.\r
- La relacion fuerza-deformacion es lineal para cada muelle.\r
- La conexion mecanica impone correctamente las restricciones de serie o paralelo.\r
- No hay holguras ni fricciones que dominen el reparto interno.\r
- En equilibrio vertical, [[g]] se toma uniforme y [[m]] bien conocida.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo lineal es defendible cuando se cumplen simultaneamente criterios como:\r
\r
- Variacion relativa de rigidez por rama menor al 10% en el rango operativo.\r
- Ajuste lineal de fuerza vs deformacion con calidad alta en el tramo usado.\r
- Error medio entre prediccion y medida menor al 5% para cargas nominales.\r
- Reparto interno coherente: en serie, [[x]] cercana a [[x1]] + [[x2]]; en paralelo, [[Fm]] cercana a [[F1]] + [[F2]].\r
- Hundimiento estatico [[x_eq]] dentro del recorrido funcional seguro del montaje.\r
\r
Si uno o mas criterios fallan, el modelo ideal pierde confiabilidad para decisiones de diseño.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores practicos de ruptura:\r
\r
- Historesis apreciable en ciclos de carga/descarga.\r
- Deriva de respuesta tras pocos ciclos (fatiga temprana o asentamiento).\r
- Sensibilidad excesiva a tolerancias de montaje.\r
- Predicciones de reparto interno incompatibles con mediciones locales.\r
- Necesidad repetida de "correcciones" empiricas no justificadas.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal no alcanza, se migra a:\r
\r
- Rigideces efectivas por tramos segun nivel de deformacion.\r
- Modelo viscoelastico para dependencia temporal.\r
- Representacion con disipacion explicita en ciclos.\r
- Calibracion directa por curva experimental de red.\r
\r
Transicion explicita: si la desviacion supera el umbral de error operativo acordado o falla el cierre de reparto interno, se abandona el modelo ideal y se recalibra con el modelo extendido.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal de red lineal | Modelo extendido |\r
|---------|----------------------------|------------------|\r
| Parametros | [[k1]], [[k2]], [[keq]] constantes | Parametros dependientes de estado |\r
| Reparto interno | Algebraico simple | Dependiente de historia o no linealidad |\r
| Costo de calculo | Bajo | Medio o alto |\r
| Uso recomendado | Diseño preliminar y verificacion rapida | Validacion final y casos fuera de rango |\r
| Trazabilidad | Alta y directa | Alta si hay datos de calibracion |\r
\r
La regla practica es simple: usar el modelo ideal como primera aproximacion y escalar solo cuando los datos indiquen ruptura de hipotesis.\r
`;export{e as default};
