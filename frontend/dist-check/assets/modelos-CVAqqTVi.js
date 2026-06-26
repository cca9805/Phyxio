const e=`\uFEFF# Modelos fisicos: Concepto fuerzas ficticias

## Modelo ideal

El modelo ideal de este leaf supone un marco no inercial con translacion acelerada, una descripcion por proyecciones escalares y magnitudes suficientemente estables en la ventana de analisis. El objetivo no es capturar todo detalle direccional, sino ofrecer una lectura clara de como [[a_marco]] induce [[F_fict]] y como ambas intervienen en [[a_rel]].

## Hipotesis

1. El eje de analisis esta bien definido y no cambia durante la ventana.
2. [[a_marco]] representa razonablemente la aceleracion del marco en el intervalo.
3. [[m]] es conocida y constante para el cuerpo analizado.
4. [[F_res]] resume correctamente fuerzas reales proyectadas en el eje.
5. La interpretacion buscada es de primer orden, no de alta fidelidad vectorial.

## Dominio de validez cuantitativo

Criterios practicos del leaf:
- Variacion relativa de [[a_marco]] <= 10 por ciento en la ventana.
- Diferencia sistematica entre tendencia medida y estimada <= 10 por ciento para aceptar el modelo simple.
- Cambios de signo en [[a_rel]] deben ser coherentes con cambios en [[F_res]] mas [[F_fict]].

**Para fuerza_ficticia_traslacional:**
- abs(delta_a_marco / a_marco_ref) <= 0.10
- [[m]] > 0

**Para segunda_ley_marco_no_inercial:**
- abs(error_relativo_tendencia) <= 0.10
- abs([[F_res]] + [[F_fict]]) consistente con el signo de [[a_rel]]

Si se incumplen estos criterios, la lectura escalar pierde capacidad explicativa.

## Senales de fallo del modelo

- Residuo persistente mayor a 10 por ciento entre estimacion y observacion.
- Decisiones sensibles a direccion tomadas usando solo modulos.
- Saltos de conclusion ante pequenas variaciones de entradas.
- Inconsistencia entre [[a_in]] reconstruida y comportamiento observado.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo: si el residuo supera 10 por ciento de forma repetida o si la decision requiere direccion fina, conviene pasar a formulacion vectorial completa y, si aplica, incorporar acoples adicionales.

El modelo extendido puede incluir dinamica multieje, rotaciones, y tratamiento de perturbaciones que el esquema ideal no captura.

## Comparacion operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Objetivo | Comprension causal rapida | Prediccion de alta fidelidad |
| Variables clave | [[a_marco]], [[F_fict]], [[F_res]], [[a_rel]] | Conjunto vectorial completo |
| Costo computacional | Bajo | Medio/alto |
| Robustez fuera de regimen | Limitada | Mayor |
| Momento de uso | Diagnostico inicial | Validacion final o control exigente |

Recomendacion: comenzar por el modelo ideal para estructurar causalidad y escalar solo cuando las senales de fallo lo justifiquen.

Flujo recomendado de aplicacion:
1. Declarar ventana de analisis y estabilidad de [[a_marco]].
2. Estimar salida de primer orden y comparar tendencia con medicion.
3. Revisar umbrales cuantitativos declarados arriba.
4. Si se supera el umbral, cambiar de modelo de manera explicita.

Este flujo evita cambios de modelo por intuicion vaga y evita tambien sostener un modelo insuficiente solo por costumbre. En equipos reales, explicitar este protocolo mejora trazabilidad y calidad de auditoria tecnica.
`;export{e as default};
