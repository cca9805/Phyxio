const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
En un torneo de billar profesional, un jugador lanza la bola blanca [[m1]] de 0.17 kg a una rapidez de [[v1i]] = 3.0 m/s hacia una bola de color [[m2]] de igual masa que reposa sobre el tapete. El impacto es descentrado, provocando que la bola blanca se desvíe un ángulo [[theta1]] = 30° respecto a su trayectoria original. Suponiendo que el choque es perfectamente elástico y despreciando la fricción y la rotación durante el brevísimo instante del choque, determina las rapideces finales de ambas bolas [[v1f]] y [[v2f]], y el ángulo de salida del blanco [[theta2]]. Calcula también la energía inicial [[Ki]] y la energía final [[Kf]] para verificar la elasticidad del proceso.

## Datos
- Masa del proyectil: [[m1]] = 0.17 kg
- Masa del blanco: [[m2]] = 0.17 kg (masas idénticas para billar estándar)
- Rapidez inicial incidente: [[v1i]] = 3.0 m/s
- Ángulo de desviación medido: [[theta1]] = 30°
- Naturaleza del impacto: Colisión elástica (sin pérdida de energía cinética)

## Definición del sistema
El sistema físico está compuesto por dos cuerpos rígidos esféricos (simplificados como partículas puntuales para el balance de momento) interactuando en un plano horizontal bidimensional (2D). Definimos un sistema de referencia cartesiano donde el eje X positivo coincide con la dirección de la velocidad inicial [[v1i]]. El blanco [[m2]] se encuentra inicialmente en el origen de coordenadas (0,0). Tras el choque, el proyectil [[m1]] se desplaza con un ángulo [[theta1]] positivo, mientras que el blanco [[m2]] es proyectado con un ángulo [[theta2]] que debe ser negativo en términos vectoriales, aunque trabajaremos con su magnitud para las proyecciones trigonométricas.

## Modelo físico
Utilizamos el modelo de **dispersión angular en 2D** basado en la conservación vectorial del momento lineal [[p]]. Este modelo descompone el balance dinámico en dos dimensiones independientes: el eje de incidencia (X) y el eje lateral (Y). Al ser un choque elástico entre masas iguales, el modelo predice una distribución geométrica específica donde las trayectorias de salida deben ser ortogonales. Ignoramos efectos de rozamiento con el tapete y la rotación propia de las bolas (spin) para centrarnos exclusivamente en el intercambio de impulsos traslacionales entre [[m1]] y [[m2]].

## Justificación del modelo
La aplicación de este modelo es obligatoria porque el choque no es frontal (1D), sino que presenta una desviación angular [[theta1]]. La conservación de [[p]] es la ley más robusta en este escenario ya que las fuerzas impulsivas internas durante el milisegundo del impacto superan por varios órdenes de magnitud a las fuerzas externas disipativas. El supuesto de elasticidad es una excelente aproximación para bolas de resina fenólica de alta calidad, permitiendo vincular las rapideces finales [[v1f]] y [[v2f]] con el estado energético inicial [[Ki]] de forma cerrada y determinista mediante los balances fundamentales.

## Resolución simbólica
Primero, establecemos los balances de momento lineal para cada eje:

{{f:p_x_balance}}

{{f:p_y_balance}}

Como las masas son iguales, se cancelan en todas las expresiones. Del balance en Y obtenemos una relación directa entre las rapideces finales:
[[v1f]] * sin([[theta1]]) = [[v2f]] * sin([[theta2]])

For an elastic collision of equal masses, we know structurally that:

{{f:theta_sum}}

[[theta_total]] = 90°
[[theta2]] = 90° - [[theta1]]

Finalmente, la conservación de energía cinética nos da la ecuación de cierre:

{{f:k_balance_elastic}}

## Sustitución numérica

### 1. Cálculo de ángulos y rapideces
Sustituimos el valor de [[theta1]] = 30°:
[[theta2]] = 90° - 30° = 60°

Usamos el balance de momento lateral para hallar la proporción de velocidades:
[[v1f]] * sin(30°) = [[v2f]] * sin(60°)
[[v1f]] * 0.5 = [[v2f]] * 0.866
[[v1f]] = 1.732 * [[v2f]]

Sustituimos en la ecuación de energía cinética:
(3.0)^2 = (1.732 * [[v2f]])^2 + [[v2f]]^2
9.0 = 4.0 * [[v2f]]^2
[[v2f]]^2 = 2.25 => [[v2f]] = 1.5 m/s

Calculamos la rapidez del proyectil:
[[v1f]] = 1.732 * 1.5 = 2.6 m/s (aproximadamente)

### 2. Verificación energética
Calculamos los estados inicial y final:

{{f:k_initial}}

[[Ki]] = 0.5 * 0.17 * (3.0)^2 = 0.765 J

{{f:k_final}}

[[Kf]] = 0.5 * 0.17 * (2.6)^2 + 0.5 * 0.17 * (1.5)^2
Se comprueba que [[Ki]] = [[Kf]], validando el modelo elástico.

## Validación dimensional
Todas las ecuaciones utilizadas mantienen la coherencia de unidades del Sistema Internacional. El balance de momento lineal tiene dimensiones de masa por velocidad (M L T-1), resultando en kg·m/s en ambos miembros. Las funciones trigonométricas son adimensionales, por lo que no afectan al análisis dimensional de las proyecciones. El balance de energía utiliza el cuadrado de la velocidad (L2 T-2), lo que tras multiplicar por la masa resulta en Julios (M L2 T-2), unidad estándar de energía mecánica. La consistencia es absoluta en toda la derivación de [[v1f]] y [[v2f]].

## Interpretación física
El resultado demuestra que la bola blanca ha cedido una parte significativa de su impulso al blanco. Debido a que el ángulo de desviación es pequeño (30°), la bola blanca conserva la mayor parte de su rapidez original (2.6 m/s frente a 3.0 m/s), mientras que la bola de color sale con una rapidez menor (1.5 m/s) pero en un ángulo mucho más pronunciado (60°). Este "reparto de velocidad" es el mecanismo físico que permite que el sistema cumpla simultáneamente la conservación de momento en X y la anulación de momento en Y. La perpendicularidad de las trayectorias es la firma geométrica indeleble de un choque elástico perfecto entre cuerpos de la misma inercia.

# Ejemplo de aplicación real

## Contexto
En la **física nuclear de bajas energías**, se utiliza la dispersión de partículas alfa (núcleos de helio) para estudiar la composición de láminas delgadas de materiales. Aunque a nivel microscópico las fuerzas son de repulsión eléctrica (ley de Coulomb), el balance macroscópico de los detectores de partículas se rige por las mismas leyes de conservación del momento lineal en 2D que hemos aplicado a las bolas de billar. En este contexto, medir el ángulo [[theta1]] de una partícula alfa dispersada permite deducir si ha chocado con un núcleo ligero o pesado.

## Estimación física
Consideremos un proyectil alfa ([[m1]] ~ 4 u) incidiendo sobre un núcleo de carbono ([[m2]] ~ 12 u). Si el detector registra una desviación de [[theta1]] = 45°, podemos realizar una estimación de **orden de magnitud**. Puesto que el blanco es tres veces más pesado, el núcleo de carbono absorberá menos rapidez que en el caso de masas iguales. Un **valor razonable** para la rapidez final del proyectil [[v1f]] sería de aproximadamente el 80% de [[v1i]], mientras que el blanco apenas se desplazaría con un ángulo [[theta2]] pequeño. La transferencia de energía cinética es menor cuando hay un gran desajuste de masas, lo que explica por qué las partículas ligeras "rebotan" con facilidad en núcleos pesados sin perder mucha energía.

## Interpretación
La interpretación física de este fenómeno revela que la dispersión no es solo un rebote, sino un escaneo de la masa interna. Al medir [[theta1]], estamos sondeando la relación de inercia entre el proyectil y el blanco sin necesidad de contacto directo. Si el proyectil conservara toda su rapidez inicial [[v1i]] tras una gran desviación, sabríamos que el blanco es infinitamente masivo. Sin embargo, la reducción observada en [[v1f]] nos informa sobre el retroceso del núcleo de carbono. Este experimento es la base de la espectroscopia de retrodispersión, donde la geometría del ángulo [[theta_total]] se convierte en el lenguaje con el que interrogamos la estructura de la materia. Dominar este cálculo es dominar la visión indirecta de la realidad física.
\r
`;export{e as default};
