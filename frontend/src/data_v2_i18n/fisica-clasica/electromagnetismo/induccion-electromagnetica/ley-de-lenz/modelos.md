## Modelo ideal

El modelo ideal de la ley de Lenz trata la polaridad inducida como una respuesta que se opone al cambio de flujo enlazado. El circuito tiene una superficie definida, una normal elegida y una convencion clara para leer [[epsilon_ind]].

Este modelo conserva la lectura esencial: signo del cambio, signo inducido y coherencia energetica. Ignora resistencia detallada, distribucion espacial del campo electrico inducido, parasitos, radiacion y multiples caminos de corriente.

## Hipótesis

- La superficie enlazada esta definida; si se viola, [[flujo_magnetico]] no tiene signo claro.
- La normal se mantiene fija; si se viola, cambian los signos aparentes.
- El cambio de flujo se puede resumir con [[cambio_de_flujo_magnetico]] o [[rapidez_media_de_cambio_de_flujo]].
- El circuito permite interpretar polaridad, aunque no siempre circule corriente apreciable.
- El proceso no esta dominado por parasitos de alta frecuencia.

## Dominio de validez cuantitativo

El modelo medio es razonable si el cambio de flujo puede compararse entre dos estados y si [[intervalo_de_tiempo]] es mayor que 1 ms en bobinas pequeñas de laboratorio. En ese rango, la polaridad inducida suele leerse sin resolver propagacion.

Criterio cuantitativo de uso: si [[intervalo_de_tiempo]] < 1 microsegundo o si el circuito tiene dimensiones mayores que 0.1 m, conviene sospechar retardos, capacitancias e inductancias parasitas. La regla de oposicion sigue orientando, pero el modelo elemental puede no bastar.

## Señales de fallo del modelo

Una señal de fallo es que la polaridad medida cambia al repetir el experimento sin que cambie la orientacion fisica ni la referencia. Otra es que la fem observada parece reforzar el cambio de flujo sin que exista fuente externa que aporte energia.

Tambien falla la lectura simple si hay varias bobinas acopladas, campos externos no controlados o trayectorias de corriente distribuidas. En esos casos, hay que separar fuentes de flujo antes de aplicar Lenz.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el circuito tiene resistencia, capacitancia y acoplos relevantes, se usa un modelo de circuito completo. Si el campo varia en el espacio, se usa una descripcion de campo con superficies y orientaciones explicitas.

En frenos magneticos y maquinas electricas, el modelo extendido incorpora fuerzas, velocidad, disipacion y geometria. Lenz conserva el criterio de sentido, pero el modulo y la distribucion requieren mas informacion.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precision | Buena para polaridad y signo | Mejor para corrientes, fuerzas y transitorios rapidos |
| Complejidad | Usa [[cambio_de_flujo_magnetico]], [[rapidez_media_de_cambio_de_flujo]] y [[epsilon_ind]] | Añade resistencia, parasitos, fuerzas y geometria |
| Rango | Espiras, bobinas y explicacion conceptual | Maquinas, frenos, sensores y circuitos reales |
| Lectura | Oposicion al cambio de flujo | Intensidad de corriente, disipacion y dinamica |
| Limite | No calcula distribucion local | Requiere parametros experimentales |