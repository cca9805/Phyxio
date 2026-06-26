## Modelo ideal

El modelo ideal de radiación térmica trata la superficie como gris: emite como una fracción fija de un cuerpo negro mediante una [[emisividad]] efectiva. El objetivo es responder cómo la [[potencia_radiada]] y el intercambio neto dependen de la [[temperatura_absoluta]], la [[area_superficie]] y la [[emisividad]]. La emisión bruta usa la relación de Stefan-Boltzmann.

{{f:ley_stefan_boltzmann}}

Si aparece un entorno con [[temperatura_ambiente]], el modelo cambia de “cuánto emite” a “cuánto pierde o gana en balance”, usando [[potencia_neta]].

{{f:radiacion_neta}}

El [[flujo_radiativo]] se usa cuando interesa emisión por unidad de superficie.

{{f:flujo_radiativo_emitido}}

## Hipótesis

- [[temperatura_absoluta]] uniforme: si se viola, una sola temperatura no representa toda la [[area_superficie]].
- [[emisividad]] constante: si cambia con longitud de onda, acabado o temperatura, el modelo gris es solo aproximado.
- [[area_superficie]] efectiva conocida: si hay cavidades, sombras o geometría compleja, el área simple puede fallar.
- [[temperatura_ambiente]] radiativa uniforme: si el entorno tiene fuentes muy distintas, la [[potencia_neta]] necesita un modelo más rico.
- Medio transparente: si el aire, vapor o vidrio absorbe radiación relevante, la energía intercambiada cambia.

## Dominio de validez cuantitativo

El dominio físico mínimo exige [[temperatura_absoluta]] ≥ 0 K, [[temperatura_ambiente]] ≥ 0 K, [[area_superficie]] ≥ 0 y 0 ≤ [[emisividad]] ≤ 1. Como estimación escolar o de primera ingeniería, el modelo es razonable si la variación relativa de temperatura superficial cumple ΔT/T < 0,1 y si la [[emisividad]] puede tratarse como constante. Para superficies ambientales, un intervalo típico es 250 K ≤ [[temperatura_absoluta]] ≤ 400 K. En hornos o metales calientes, con [[temperatura_absoluta]] > 600 K, la dependencia T⁴ hace que una incertidumbre pequeña en temperatura pueda producir errores grandes en [[potencia_radiada]].


> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.
## Señales de fallo del modelo

Hay señales claras de fallo: manchas térmicas intensas, superficies brillantes con reflexión dominante, [[emisividad]] ajustada mayor que uno, o [[potencia_neta]] experimental que no cambia de signo al invertir la comparación entre [[temperatura_absoluta]] y [[temperatura_ambiente]]. También falla si conducción o convección explican la mayor parte del intercambio, o si la geometría entre superficies requiere factores de forma.

## Modelo extendido o alternativo

Si la superficie no es gris, se usa un modelo espectral con [[emisividad]] dependiente de longitud de onda. Si la geometría importa, se añaden factores de forma radiativos. Si intervienen aire, soportes o fluidos, la [[potencia_neta]] radiativa se integra en un balance con conducción y convección. Si la superficie no es uniforme, se divide la [[area_superficie]] en regiones con su propia [[temperatura_absoluta]].


Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.
## Comparación operativa

| Situación | Modelo útil | Magnitud central | Límite |
| Superficie uniforme aislada | Superficie gris | [[potencia_radiada]] | Usar K |
| Cuerpo con entorno térmico | Balance neto | [[potencia_neta]] | Restar T⁴ |
| Comparar acabados | Flujo por área | [[flujo_radiativo]] | Controlar [[emisividad]] |
| Metal brillante | Modelo espectral | [[emisividad]] variable | ε única puede fallar |
| Geometría compleja | Factores de forma | [[area_superficie]] efectiva | Área visible no basta |