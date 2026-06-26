const e=`## 1. Cierres hidráulicos de puertas

Un cierre hidráulico busca evitar que la puerta golpee el marco. Si el amortiguamiento es bajo, la puerta puede rebotar o cerrar con impacto. Si [[gamma]] supera a [[omega0]], el movimiento puede volverse sobreamortiguado y avanzar hacia el equilibrio sin oscilación visible. La lectura útil no es solo que el golpe desaparece, sino si el último tramo se completa en un tiempo aceptable.

En mantenimiento real, el técnico no observa directamente las raíces, pero sí observa la cola del movimiento. Si el cierre recorre rápido los primeros grados y luego tarda demasiado, la interpretación física apunta a un [[r1]] pequeño en valor absoluto. Ajustar el fluido o la válvula cambia la disipación y desplaza esa raíz.

Variable dominante: [[r1]], porque controla la cola lenta del cierre.

Límite de validez: el modelo falla si hay topes, fricción seca dominante, fugas hidráulicas variables o cambios fuertes de temperatura.

## 2. Instrumentos de aguja y medidores analógicos

En un instrumento de aguja, el sobrepaso puede dificultar la lectura. Un ajuste sobreamortiguado evita que la aguja oscile alrededor del valor final, pero puede retrasar la lectura. [[C1]] y [[C2]] dependen del desplazamiento y velocidad inicial de la aguja, mientras que [[r1]] y [[r2]] dependen del diseño mecánico.

La aplicación es didácticamente potente porque separa precisión visual y tiempo de lectura. Una aguja que no rebota puede parecer más profesional, pero si tarda varios segundos en estabilizarse introduce retraso en la medida. El leaf permite explicar esa diferencia con una curva concreta de [[x]].

Variable dominante: [[x]], porque representa el desplazamiento observable de la aguja.

Límite de validez: si el eje tiene fricción seca o el campo magnético produce fuerzas no lineales, la respuesta deja de ser una suma limpia de dos exponentes.

## 3. Suspensiones con retorno lento

Algunos soportes antivibración se diseñan para no transmitir rebotes al equipo protegido. Si el amortiguamiento es elevado, el retorno después de una perturbación puede ser sobreamortiguado. Esto protege frente a oscilaciones, pero puede mantener una deformación residual durante más tiempo.

En bancos ópticos, equipos de laboratorio o maquinaria sensible, esa cola lenta puede ser aceptable si evita vibraciones secundarias. En otros casos, como una plataforma que debe recolocarse rápido, el mismo comportamiento sería un defecto. El criterio sale de comparar el tiempo asociado a [[r1]] con el proceso que se quiere proteger.

Variable dominante: [[gamma]], porque decide si la disipación supera la escala natural.

Límite de validez: amplitudes grandes, contacto con topes o comportamiento viscoelástico dependiente del tiempo requieren modelos más amplios.

## 4. Actuadores y sistemas de posicionamiento

En un actuador, el sobreamortiguamiento puede evitar sobrepaso cuando se aproxima a una posición delicada. Sin embargo, un exceso de [[gamma]] reduce agilidad. La curva de [[x]] ayuda a decidir si la estrategia de control prioriza seguridad o velocidad.

La lectura física se usa en robótica, posicionamiento de lentes y pequeñas compuertas. Si el actuador se acerca a una pieza frágil, el sobrepaso puede ser peor que una llegada lenta. Si trabaja en ciclos repetidos, una cola lenta aumenta el tiempo de proceso. Por eso la misma clasificación puede ser correcta o inadecuada según el objetivo.

Variable dominante: [[t]], porque el criterio práctico suele ser alcanzar una tolerancia antes de un tiempo máximo.

Límite de validez: si hay control activo variable, saturación del motor o fuerza externa continua, el leaf solo describe una aproximación del transitorio libre.

## 5. Sistemas biológicos y materiales blandos

Tejidos, membranas y materiales blandos pueden volver lentamente a una forma de equilibrio después de deformarse. En intervalos pequeños, la respuesta puede aproximarse por un doble decaimiento exponencial. El régimen sobreamortiguado ayuda a describir deformaciones sin rebote visible.

Esta lectura aparece en ensayos de relajación, recuperación de polímeros y modelos simplificados de tejido. La suma de modos permite separar una recuperación rápida inicial de una recuperación lenta asociada a reorganización interna. Aunque el material real sea más complejo, la idea de modo lento ofrece una primera escala de comparación.

En todas estas aplicaciones, el criterio común es el mismo: no basta con observar que no hay rebote. Hay que medir cuánto tarda la cola lenta en hacerse irrelevante para el objetivo del sistema. El leaf aporta una forma compacta de hablar de esa cola mediante [[r1]], de distinguirla del transitorio rápido asociado a [[r2]] y de decidir si el exceso de amortiguamiento es una ventaja o una penalización. Esta lectura es especialmente útil en clase porque conecta una desigualdad abstracta con decisiones de diseño: cerrar sin golpear, medir sin oscilar, aislar sin transmitir vibraciones y recuperar forma sin sobrepaso visible.

Variable dominante: [[C1]] y [[C2]], porque la preparación inicial determina cuánto pesa cada modo.

Límite de validez: la viscoelasticidad real suele depender de historia, amplitud y temperatura; si esos efectos dominan, las raíces constantes [[r1]] y [[r2]] son solo una aproximación local.
`;export{e as default};
