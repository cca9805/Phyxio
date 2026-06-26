## Modelo ideal

El modelo ideal es el conjunto canónico: un sistema pequeño o macroscópico intercambia energía con un baño térmico que fija la [[temperatura]], mientras volumen y número de partículas permanecen constantes. Cada [[energia_microestado]] contribuye a la [[funcion_particion]] mediante un peso canónico controlado por [[beta]]. La [[energia_media]] se obtiene como respuesta estadística del logaritmo de [[funcion_particion]], no como simple media aritmética de niveles. La [[capacidad_calorifica]] aparece después como sensibilidad térmica de esa energía promedio.

## Hipótesis

- Equilibrio térmico: si el sistema no ha equilibrado, [[temperatura]] no define una distribución canónica fiable.
- Microestados conocidos: si faltan [[energia_microestado]] relevantes, [[funcion_particion]] queda truncada y [[energia_media]] se sesga.
- Baño térmico estable: si la [[temperatura]] fluctúa mucho, [[beta]] no representa una escala única.
- Unidades coherentes: si [[constante_boltzmann]] y [[energia_microestado]] se expresan en escalas incompatibles, las derivadas pierden sentido.
- Volumen constante: si el volumen cambia, puede mezclarse respuesta térmica con trabajo mecánico.

## Dominio de validez cuantitativo

Para un cálculo discreto simple conviene que la suma de [[funcion_particion]] incluya todos los estados con peso relativo mayor que 1e-4 respecto al estado dominante. La [[temperatura]] debe ser positiva, T > 0 K, y [[beta]] > 0. Si una separación energética ΔE cumple ΔE/([[constante_boltzmann]] T) > 20, su contribución suele ser despreciable; si ΔE/([[constante_boltzmann]] T) < 0.1, varios niveles participan casi por igual. La [[energia_media]] debe quedar dentro del intervalo energético accesible ponderado por los estados incluidos. La [[capacidad_calorifica]] calculada por diferencias requiere pasos de [[temperatura]] pequeños frente a la escala donde cambia la pendiente, por ejemplo ΔT/T < 0.05.

## Señales de fallo del modelo

Una [[energia_media]] fuera del rango de las [[energia_microestado]] incluidas indica signo incorrecto o derivada mal aplicada. Una [[capacidad_calorifica]] negativa en un sistema canónico estable puede revelar truncamiento, ruido numérico o modelo inadecuado. Si el gráfico de [[derivada_log_particion_beta]] cambia bruscamente sin un cambio físico en el espectro, probablemente se omitieron niveles o se mezclaron unidades. También falla el modelo si el sistema real tiene transición de fase, fuertes interacciones no incluidas o no alcanza equilibrio.

## Modelo extendido o alternativo

Cuando conviene pasar al conjunto gran canónico es cuando el intercambio de partículas importa y el número no puede mantenerse fijo. Si el volumen cambia, conviene trabajar con potenciales termodinámicos apropiados y no solo con [[energia_media]] a volumen fijo. Para espectros densos se sustituye la suma por una integral con densidad de estados. En sistemas pequeños o cuánticos, las degeneraciones deben incorporarse explícitamente en [[funcion_particion]].

## Comparación operativa

| Situación | Modelo útil | Señal principal |
| Niveles discretos y T fija | Canónico discreto | [[energia_media]] desde [[derivada_log_particion_beta]] |
| Datos frente a T | Derivada térmica | [[derivada_log_particion_temperatura]] |
| Respuesta al calentamiento | Modelo térmico diferencial | [[capacidad_calorifica]] |
| Espectro muy denso | Densidad de estados | Integral aproximada de [[funcion_particion]] |