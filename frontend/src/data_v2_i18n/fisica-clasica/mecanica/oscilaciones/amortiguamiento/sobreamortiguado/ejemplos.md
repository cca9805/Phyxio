# Ejemplo tipo examen

## Enunciado

Un sensor mecánico vuelve a su posición de equilibrio tras una perturbación inicial. Su amortiguamiento equivalente es [[gamma]] = 12 s^-1 y su escala natural es [[omega0]] = 10 s^-1. Para las condiciones iniciales del ensayo se obtienen [[C1]] = 4 mm y [[C2]] = -1 mm. Calcula las raíces del régimen, decide si el modelo es sobreamortiguado y estima la posición [[x]] en [[t]] = 0,40 s.

## Datos

[[gamma]] = 12 s^-1, [[omega0]] = 10 s^-1, [[C1]] = 4 mm, [[C2]] = -1 mm y [[t]] = 0,40 s. La incógnita final es [[x]], pero antes deben calcularse [[r1]] y [[r2]].

## Definición del sistema

El sistema se modela como un oscilador lineal libre de segundo orden. La variable [[x]] mide el desplazamiento respecto al equilibrio. No se incluye fuerza externa durante el intervalo observado.

## Modelo físico

Se usa el régimen sobreamortiguado porque la relación central del leaf exige [[gamma]] > [[omega0]]. Esa comparación determina que la respuesta temporal de [[x]] no debe modelarse con seno y coseno amortiguados, sino con los dos modos reales [[r1]] y [[r2]]. En consecuencia, el cálculo no busca un periodo ni una frecuencia de oscilación, sino dos tasas de decaimiento y una combinación fijada por [[C1]] y [[C2]].

## Justificación del modelo

El modelo es apropiado si la amplitud de pocos milímetros mantiene al sensor en rango lineal y si la disipación puede aproximarse por una ley viscosa. También se supone que [[gamma]] y [[omega0]] no cambian con la temperatura ni con el desplazamiento durante el ensayo.

## Resolución simbólica

Primero se comprueba el régimen:

{{f:condicion_sobreamortiguado}}

Después se obtiene el modo lento:

{{f:raices_sobreamortiguado}}

El modo rápido se calcula con:

{{f:raiz2_sobreamortiguado}}

Finalmente, la posición temporal se evalúa mediante:

{{f:solucion_sobreamortiguada}}

## Sustitución numérica

Como 12 s^-1 > 10 s^-1, el régimen es sobreamortiguado. La raíz cuadrada vale sqrt(12^2 - 10^2) = sqrt(44) = 6,63 s^-1. Por tanto, [[r1]] = -12 + 6,63 = -5,37 s^-1 y [[r2]] = -12 - 6,63 = -18,63 s^-1.

Para [[t]] = 0,40 s, el primer exponente es exp(-5,37·0,40) = exp(-2,15) ≈ 0,117. El segundo es exp(-18,63·0,40) = exp(-7,45) ≈ 0,00058. Entonces [[x]] ≈ 4 mm·0,117 - 1 mm·0,00058 = 0,467 mm. El término rápido ya casi ha desaparecido y la lectura queda dominada por [[r1]].

## Validación dimensional

[[r1]] y [[r2]] están en s^-1, por lo que [[r1]][[t]] y [[r2]][[t]] son adimensionales. [[C1]], [[C2]] y [[x]] están en milímetros. La suma de términos tiene unidad de desplazamiento, así que la expresión es dimensionalmente coherente.

## Interpretación física

El sensor no oscila de manera ideal porque la condición de régimen se cumple. Sin embargo, el valor residual de 0,467 mm a 0,40 s muestra que no basta con decir "no hay rebote"; hay que juzgar si esa desviación es aceptable para la medición. Si el instrumento requiere error menor que 0,1 mm en ese tiempo, el sistema estaría demasiado lento aunque sea estable.

La lectura causal es que [[r2]] ya no decide casi nada en ese instante: su contribución es menor de una milésima de milímetro. El comportamiento visible depende de [[r1]], que todavía conserva una fracción apreciable del desplazamiento inicial. Por eso el resultado es físicamente coherente con un régimen sobreamortiguado: seguro frente al sobrepaso, pero no necesariamente rápido. Si el diseñador necesita una respuesta más breve, no debe aumentar [[gamma]] sin más; debe comparar con el caso crítico o modificar la escala natural [[omega0]].

# Ejemplo de aplicación real

## Contexto

Un cierre hidráulico de puerta se ajusta para evitar que la puerta golpee el marco. El técnico aumenta el amortiguamiento hasta que desaparece el rebote. La pregunta física es si el cierre quedó bien ajustado o si pasó a un régimen sobreamortiguado excesivo.

## Estimación física

Si el cierre tarda varios segundos en completar el último tramo, el modo rápido ya no importa: domina [[r1]]. Una estimación con vídeo puede ajustar la cola de [[x]] a una exponencial y obtener una tasa efectiva. Si esa tasa es muy pequeña en valor absoluto, el sistema está seguro frente al golpe pero lento para el uso cotidiano.

Por ejemplo, si la distancia restante se reduce de 4 cm a 2 cm en 1,5 s, la cola tiene una escala aproximada de ln(2)/1,5 s ≈ 0,46 s^-1 en valor absoluto. Esa tasa lenta no indica inestabilidad, sino una elección de amortiguamiento que sacrifica rapidez. El usuario percibe esa cola como una puerta que parece no terminar de cerrar.

## Interpretación

La decisión no se toma solo por ausencia de oscilación. Se toma comparando el tiempo de cierre con el objetivo práctico. El leaf permite explicar que el exceso de [[gamma]] eliminó el sobrepaso, pero dejó una raíz lenta que controla el comportamiento percibido por el usuario.

En una aplicación real, el diagnóstico completo debe incluir dos preguntas: si el cierre evita el golpe y si completa el movimiento dentro del tiempo admisible. Cuando ambas se responden con datos, el concepto de sobreamortiguamiento deja de ser una etiqueta y se convierte en una decisión de diseño.
