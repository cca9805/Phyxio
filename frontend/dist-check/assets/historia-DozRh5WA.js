const a=`## Problema histórico

El estudio de la propagacion del sonido en solidos fue uno de los primeros problemas de la mecanica ondulatoria. En el siglo XVIII, los filosofos naturales sabian que el sonido viajaba mas rapido en solidos que en aire, pero no tenian un marco teorico para cuantificarlo. La pregunta central era: ¿que propiedad del material determina la velocidad de propagacion de perturbaciones mecanicas?

La respuesta requirio conectar dos dominios conceptuales que hasta entonces estaban separados: la elasticidad de los materiales (estatica) y la propagacion de ondas (dinamica). Fue necesario formular la ley de Hooke en forma diferencial, aplicar las leyes de Newton a elementos infinitesimales y resolver la ecuacion resultante.

## Dificultad conceptual previa

El obstaculo principal no era matematico sino fisico: comprender que un solido rigido puede transmitir perturbaciones a velocidad finita. La experiencia cotidiana sugiere que un solido rigido transmite fuerzas instantaneamente (cuando se empuja una barra, el otro extremo parece moverse de inmediato). Reconocer que existe un tiempo de transito finito, proporcional a la longitud e inversamente proporcional a la raiz cuadrada de la rigidez, fue un salto conceptual importante.

Otra dificultad fue distinguir entre la velocidad del material (velocidad de particula, que es pequeña) y la velocidad de propagacion de la perturbacion (velocidad de onda, que es grande). Esta distincion es trivial hoy pero fue confusa durante decadas.

## Qué cambió

Los trabajos de Euler, d'Alembert y Lagrange en el siglo XVIII establecieron la ecuacion de onda unidimensional. La aplicacion especifica a barras elasticas fue desarrollada progresivamente:

- **Daniel Bernoulli** (1740s) estudio las vibraciones longitudinales de barras, identificando los modos propios y sus frecuencias.
- **Euler** formalizo la ecuacion del movimiento para un elemento de barra, conectando el modulo elastico con la velocidad de propagacion.
- **Chladni** (1787) midio experimentalmente la velocidad del sonido en barras de diferentes materiales, confirmando la dependencia con la raiz cuadrada de E/rho.
- **Young** (1807) introdujo el concepto de modulo elastico que lleva su nombre, proporcionando la variable clave para la formula de velocidad.

La formula final [[v_barra]] igual a raiz de (E/rho) emergio como consecuencia natural de estos desarrollos, sintetizando elasticidad (Hooke-Young) y dinamica (Newton-Euler-d'Alembert).

## Impacto en la física

La comprension de las ondas longitudinales en barras tuvo impacto en multiples areas:

- Permitio el diseño racional de instrumentos musicales de percusion (diapasones, carrillones).
- Establecio las bases para la sismologia: las ondas P en la Tierra son la generalizacion tridimensional del mismo fenomeno.
- Hizo posible el desarrollo de ensayos no destructivos por ultrasonidos en el siglo XX.
- La barra de Hopkinson (1914) revoluciono el estudio de materiales a altas velocidades de deformacion.
- Las lineas de retardo acusticas fueron componentes criticos en radares de la Segunda Guerra Mundial.

## Conexión con física moderna

El concepto de impedancia mecanica desarrollado para barras se generalizo a todos los sistemas de ondas (electromagnetismo, acustica, optica) y es la base del analisis de transmision en redes y circuitos. La idea de que la reflexion ocurre en discontinuidades de impedancia es universal en fisica de ondas.

En materiales avanzados (composites, metamateriales acusticos), la manipulacion deliberada de la impedancia local permite diseñar barras con propiedades de propagacion inusuales: bandas prohibidas, focalizacion, o cloaking acustico. Estos desarrollos modernos descansan sobre la misma fisica fundamental establecida en el siglo XVIII.
`;export{a as default};
