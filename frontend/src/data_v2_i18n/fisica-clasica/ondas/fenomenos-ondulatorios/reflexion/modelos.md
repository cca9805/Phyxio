## Modelo ideal

El modelo ideal de reflexión usa una frontera plana, lisa frente a la longitud de onda y fija durante la interacción. En ese caso, una normal local única permite relacionar [[theta_i]] y [[theta_r]] mediante simetría especular.

Para la energía, el modelo usa [[R_reflectancia]] como fracción efectiva de [[I_incidente]] que vuelve como [[I_reflejada]]. La dirección y la intensidad se tratan por separado: una frontera puede reflejar en la dirección correcta aunque devuelva poca energía.

## Hipótesis

- La frontera es localmente plana: si se viola, cada punto tiene una normal distinta y el frente reflejado puede curvarse.
- La rugosidad es pequeña frente a la longitud de onda: si no se cumple, aparece reflexión difusa.
- El medio incidente es homogéneo: si cambia cerca de la frontera, la normal geométrica no basta para predecir toda la trayectoria.
- [[R_reflectancia]] resume bien absorción y transmisión: si depende mucho del ángulo o de la frecuencia, debe modelarse con más detalle.
- La frontera es pasiva: si hay ganancia, [[I_reflejada]] podría superar la lectura pasiva.

## Dominio de validez cuantitativo

El modelo especular es razonable cuando la rugosidad típica es menor que 10 % de la longitud de onda. Para luz visible, eso exige superficies pulidas a escala submicrométrica; para sonido grave, una pared corriente puede ser suficientemente regular.

En una frontera pasiva, [[R_reflectancia]] debe estar entre 0 y 1. Si se usa porcentaje, 80 % debe introducirse como fracción 0.80. La ley angular sigue siendo útil para ángulos entre 0 y 90 grados respecto a la normal.

## Señales de fallo del modelo

Una señal clara de fallo es que la onda reflejada no salga en una dirección dominante, sino repartida en muchas direcciones. Eso indica rugosidad, textura o dispersión por irregularidades comparables con la longitud de onda.

Otra señal es obtener [[I_reflejada]] mayor que [[I_incidente]] en una frontera pasiva. También es sospechoso que el ángulo calculado parezca complementario al esperado; normalmente significa que se midió desde la superficie en lugar de desde la normal.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si la superficie es rugosa, si hay curvatura apreciable, si el material absorbe de forma dependiente de la frecuencia o si aparecen muchas reflexiones internas. Entonces se usan modelos de reflexión difusa, coeficientes de Fresnel, acústica geométrica o dispersión.

En óptica avanzada, [[R_reflectancia]] depende de polarización y ángulo. En acústica arquitectónica, se combina reflexión especular con absorción y difusión. En superficies curvas, se aplica la ley localmente y se reconstruye el frente reflejado completo.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Dirección | Una sola [[theta_r]] especular | Muchas direcciones o normales locales |
| Intensidad | [[R_reflectancia]] constante | Reflectancia dependiente de material, ángulo y frecuencia |
| Complejidad | Baja y geométrica | Mayor, con dispersión o absorción detallada |
| Uso típico | Espejos planos, ecos simples, rayos idealizados | Superficies rugosas, lentes reales, salas y recubrimientos |
