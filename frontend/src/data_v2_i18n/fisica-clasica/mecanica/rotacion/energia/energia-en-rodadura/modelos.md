# Modelos de energía en rodadura

## Modelo ideal

El modelo ideal considera un sólido rígido que rueda sin deslizar sobre una superficie fija. El centro de masas avanza con [[v_cm]], el cuerpo gira con [[omega]] y ambas magnitudes quedan conectadas por [[R]]. La energía cinética total [[K_total]] se calcula sumando traslación y rotación. El contacto no disipa energía porque el punto de contacto instantáneo está en reposo relativo.

## Hipótesis

Las hipótesis son rigidez, radio efectivo constante, eje central definido y contacto sin deslizamiento. También se supone que [[I]] no cambia durante el proceso y que la masa [[m]] se mantiene distribuida de forma estable. Si se usa [[a_cm]] junto con [[alpha]], se está aceptando la misma condición cinemática de rodadura pura.

## Dominio de validez cuantitativo

El modelo es fiable si la deformación modifica [[R]] menos de `2%`, si la pérdida térmica es menor que `5%` de [[K_total]] y si el contacto puede proporcionar el torque requerido sin superar el límite de adherencia. En una rampa, el ángulo [[phi]] debe ser compatible con fricción estática suficiente; de lo contrario, aparece deslizamiento.

## Señales de fallo del modelo

Hay fallo observable cuando la marca de contacto resbala, cuando [[v_cm]] no coincide con [[R]] por [[omega]], cuando el objeto vibra o cuando la energía mecánica [[E_total]] disminuye sin término de pérdida declarado. También falla si se usa el [[I]] de un eje distinto o si el radio efectivo cambia por deformación del material.

## Modelo extendido o alternativo

Cuando conviene cambiar a modelo alternativo: si hay patinaje, deformación apreciable, rodamientos disipativos o contacto con radio efectivo variable. El modelo extendido añade energía térmica, trabajo de rozamiento, deformación elástica o una ley de adherencia. En dinámica completa también pueden aparecer [[tau]], [[theta]], [[g]] y [[phi]] para describir trabajo y movimiento en rampas.

## Comparación operativa

Usa el modelo ideal para ruedas rígidas, cilindros y esferas que ruedan sin deslizar. Usa el modelo disipativo si hay patinaje o frenado con pérdidas. Usa un modelo deformable para neumáticos, bolas blandas o superficies elásticas. Usa [[E_total]] cuando haya potencial gravitatorio; usa [[K_total]] cuando solo quieras la energía cinética instantánea.

La comparación práctica se hace observando qué dato queda sin explicar. Si el problema solo pregunta por reparto cinético, basta con [[K_total]]. Si pregunta por descenso desde una altura, [[E_total]] debe aparecer. Si pregunta por fuerzas o aceleraciones, conviene conectar [[a_cm]], [[alpha]] y el torque de contacto. Esta separación impide que un cálculo energético se use como sustituto de un análisis dinámico completo.