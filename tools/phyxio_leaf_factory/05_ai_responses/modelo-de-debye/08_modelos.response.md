# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-debye
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Modelo de debye

## Modelo ideal

El modelo ideal de Debye representa un sólido cristalino como una red continua de osciladores acoplados cuyos modos vibracionales son fonones acústicos. La pregunta central es cómo cambia el [[calor_especifico]] cuando la [[temperatura]] se compara con la [[temperatura_debye]]. En lugar de asignar a todos los átomos la misma energía clásica desde el inicio, el modelo cuenta cuántos modos están térmicamente accesibles. La [[frecuencia_debye]] actúa como corte del espectro y la [[funcion_debye]] resume la contribución estadística de todos los modos.

## Hipótesis

- Red cristalina simple: si el sólido es amorfo o muy defectuoso, la densidad de estados real no sigue la forma de Debye.
- Vibraciones armónicas: si hay anharmonicidad fuerte, el [[calor_especifico]] puede depender de expansión térmica y acoplamientos entre fonones.
- Equilibrio térmico: si no existe una única [[temperatura]], no tiene sentido aplicar directamente las fórmulas de equilibrio.
- Dominio acústico: si los modos ópticos son relevantes, el modelo subestima o desplaza la contribución real.
- Volumen prácticamente constante: si se mide a presión constante, el resultado experimental puede incluir expansión.

## Dominio de validez cuantitativo

Para baja [[temperatura]], la ley cúbica es razonable cuando [[temperatura]]/[[temperatura_debye]] < 0,1. En el régimen intermedio, 0,1 ≤ [[temperatura]]/[[temperatura_debye]] ≤ 2, conviene usar la forma integral.

{{f:calor_especifico_debye_integral}}

A alta [[temperatura]], si [[temperatura]]/[[temperatura_debye]] > 3 y no hay transición de fase, el [[calor_especifico_molar]] se aproxima al límite clásico.

{{f:limite_dulong_petit}}

La [[temperatura_debye]] puede obtenerse desde [[frecuencia_debye]] si el corte espectral es conocido.

{{f:temperatura_debye}}

## Señales de fallo del modelo

Una desviación lineal apreciable del [[calor_especifico]] a baja [[temperatura]] suele indicar contribución electrónica, típica de metales. Una curva que no se aproxima a una meseta cerca de 3R por mol puede señalar modos ópticos, composición compleja o medición no comparable. Saltos bruscos sugieren transiciones de fase. Si el ajuste exige una [[temperatura_debye]] distinta en cada intervalo estrecho, el espectro real no está siendo capturado por una sola escala.

## Modelo extendido o alternativo

Para cristales con varios átomos por celda puede usarse un modelo Debye-Einstein, combinando modos acústicos con modos ópticos localizados. En metales a baja [[temperatura]], se añade un término electrónico al [[calor_especifico]]. En sólidos no cristalinos, se usan densidades de estados medidas o modelos de vidrio. El cambio de modelo es adecuado cuando el objetivo ya no es solo explicar la tendencia general, sino ajustar datos experimentales finos.

## Comparación operativa

| Situación | Modelo útil | Variable clave | Señal esperada |
|---|---|---|---|
| [[temperatura]] muy baja | Debye cúbico | [[temperatura_debye]] | [[calor_especifico]] proporcional a T³ |
| [[temperatura]] intermedia | Debye integral | [[funcion_debye]] | Curva suave sin potencia simple |
| [[temperatura]] alta | Dulong-Petit | [[constante_gases]] | Meseta cercana a 3R |
| Metal frío | Debye + electrones | [[calor_especifico]] | Término lineal adicional |

