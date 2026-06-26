const e=`\uFEFF# Modelos fisicos: Definicion fuerza coriolis

## Modelo ideal

El modelo ideal de este leaf describe el termino de Coriolis en un marco rotatorio usando magnitudes escalares para intensidad y una referencia conceptual para direccion. El objetivo principal es interpretativo y operativo: entender como se define la respuesta lateral y como se conecta con una lectura de fuerza.

El modelo ideal supone que la representacion escalar del modulo es suficiente para la pregunta principal. No intenta reemplazar la formulacion vectorial completa cuando la orientacion fina del movimiento es decisiva.

## Hipótesis

1. El sistema de referencia analizado es rotatorio y esa condicion esta declarada.
2. [[omega]] es representativa del intervalo de analisis.
3. [[v_rel]] describe correctamente el movimiento relativo en el mismo intervalo.
4. [[alpha]] resume de forma util la geometria efectiva entre rotacion y velocidad.
5. La conversion entre [[a_cor]] y [[F_cor]] se interpreta con [[m]] bien definida.

Si estas hipotesis fallan, el modelo puede seguir calculando pero pierde valor explicativo.

## Dominio de validez cuantitativo

Criterios cuantitativos operativos para este leaf:

- Estabilidad de entrada: variacion relativa de [[v_rel]] <= 10% en el tramo analizado.
- Estabilidad geometrica: variacion de [[alpha]] <= 15 grados en el intervalo considerado.
- Coherencia de rotacion: variacion relativa de [[omega]] <= 10% durante el analisis.
- Control de salida: discrepancia repetida entre tendencia observada y estimacion > 10% sugiere salir del modelo ideal.

Estos umbrales no son absolutos universales, pero son utiles para decidir si mantener o escalar el esquema de trabajo.

## Señales de fallo del modelo

- La tendencia esperada al cambiar [[omega]] o [[v_rel]] no aparece en datos observados.
- Cambios pequenos de entrada producen cambios incoherentes de salida sin justificacion fisica.
- El analisis requiere direccion espacial fina y solo se uso modulo escalar.
- La diferencia observacion-prediccion supera 10% de forma repetida.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, conviene pasar a formulacion vectorial completa y, si aplica, integrar otros acoples dinamicos del sistema real.

Transicion explicita: cuando la discrepancia repetida supera 10% o cuando la direccion de desviacion es variable critica de decision, cambiar del modelo escalar ideal al modelo vectorial extendido.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Salida principal | Modulo [[a_cor]] y [[F_cor]] | Direccion y modulo acoplados |
| Complejidad | Baja | Media/alta |
| Velocidad de uso | Alta | Menor |
| Uso recomendado | Definicion y chequeo rapido | Analisis direccional fino |
| Criterio de cambio | Umbral de error y necesidad direccional | Regimen avanzado |

Estrategia recomendada: iniciar con el ideal para fijar definicion y orden de magnitud; escalar cuando los indicadores de fallo lo exijan.\r
`;export{e as default};
