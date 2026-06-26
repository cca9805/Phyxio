# Modelos físicos: Condicion sumatoria fuerzas

## Modelo ideal

El modelo central del leaf afirma que un cuerpo esta en equilibrio traslacional cuando la suma vectorial de fuerzas externas es nula. No exige ausencia de fuerzas; exige compensacion global por componentes.

Idealizaciones relevantes:

- Cuerdas ideales (masa despreciable, tension uniforme).
- Apoyos idealizados con reaccion bien definida.
- Plano de analisis 2D con ejes cartesianos.
- Marco aproximadamente inercial.

Estas hipotesis permiten concentrar el diagnostico en [[R]] y en los balances por eje.

## Hipótesis

Hipotesis minimas para aplicar correctamente el modelo:

1. Todas las fuerzas externas significativas estan incluidas en el DCL.
2. El convenio de signos en x e y se mantiene constante durante todo el calculo.
3. Si aparece [[m]], se convierte a fuerza peso antes de sumar con otras fuerzas.
4. El angulo [[theta]] se mide respecto de una referencia declarada.

Si se viola una de estas hipotesis, la anulacion algebraica puede ser aparente y no fisica.

## Dominio de validez cuantitativo

En laboratorio y problemas de ingenieria basica, puede usarse este criterio cuantitativo:

1. abs(sumFx) <= 0.02 * F_ref
2. abs(sumFy) <= 0.02 * F_ref
3. abs(delta[[theta]]) <= 2 grados para montajes manuales
4. Error relativo en [[T]] estimada <= 5 % frente a medicion instrumental

Con F_ref entre 10 N y 1000 N, estos umbrales suelen separar equilibrio compatible de desequilibrio medible. Si los residuos exceden la tolerancia de forma sistematica, el modelo usado es incompleto o los datos son inconsistentes.

## Señales de fallo del modelo

Indicadores de que la descripcion debe revisarse:

- Residuos de fuerza persistentes con mismo signo en repeticiones experimentales.
- Resultado de tension negativa en cuerda ideal tras revisar algebra.
- Necesidad de valores imposibles de [[theta]] para cerrar ecuaciones.
- Observacion de giro del cuerpo aunque sumFx y sumFy parezcan cerradas.

El cuarto punto es clave: equilibrio traslacional no implica equilibrio rotacional.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo? Conviene cambiar cuando la pregunta fisica supera el alcance de la suma de fuerzas por ejes.

Casos de cambio frecuentes:

1. Hay rotacion apreciable: pasar a sumatoria de momentos.
2. Hay friccion dominante: pasar al modelo con fuerza de rozamiento.
3. Hay aceleracion no despreciable: pasar a dinamica con segunda ley.

La transicion explicita es: cuando conviene cambiar de modelo, conviene pasar al modelo con friccion o al modelo con momentos segun el mecanismo que domina el error.

## Comparación operativa

| Aspecto | Balance traslacional | Modelo extendido |
|---------|----------------------|------------------|
| Cierre principal | sumFx = 0, sumFy = 0 | sumF + efectos extra |
| Complejidad | Baja | Media o alta |
| Parametros | [[F]], [[T]], [[m]], [[theta]] | agrega friccion, momentos, inercia |
| Precision en campo real | buena si tolerancias se cumplen | mejor en escenarios complejos |
| Uso recomendado | diagnostico rapido de equilibrio | validacion final de diseno |

Dominar este modelo base es necesario para elegir con criterio el siguiente nivel de descripcion.
