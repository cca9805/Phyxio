const e=`# Modelos fisicos: colisión con pared

## Modelo ideal
El modelo ideal para una colisión con una pared asume que uno de los dos cuerpos tiene una inercia infinita comparada con el proyectil. En este escenario, la superficie se considera un límite geométrico fijo e indeformable en el marco de referencia inercial del laboratorio. La simplificación fundamental es la separación de efectos: la pared solo ejerce una fuerza normal impulsiva que invierte la componente perpendicular de la velocidad, mientras que la ausencia de fricción garantiza la conservación de la componente paralela. Este modelo es la base para el estudio de rebotes elásticos y parcialmente inelásticos en física elemental, permitiendo predecir trayectorias sin necesidad de resolver las ecuaciones de onda dentro del sólido.

## Hipótesis
Las hipótesis fundamentales de este modelo son:
- **Cuerpos puntuales o rígidos**: El proyectil se trata como una masa[[m]]sin estructura interna relevante.
- **Inercia infinita de la pared**: No hay retroceso apreciable de la superficie de impacto.
- **Ausencia de fuerzas externas netas**: Durante el brevísimo tiempo de contacto[[Delta_t]], solo actúan las fuerzas impulsivas.
- **Marco de referencia inercial**: El laboratorio se considera un sistema en reposo absoluto para el cálculo de velocidades.

## Dominio de validez cuantitativo
Este modelo es altamente preciso bajo las siguientes condiciones:
- **Rapideces subsónicas**: La velocidad de impacto[[vi]]debe ser inferior a la velocidad del sonido en los materiales implicados (típicamente < 100 m/s).
- **Relación de masas**: La masa de la pared debe ser al menos 1000 veces superior a la masa[[m]]del cuerpo.
- **Escalas geométricas**: El tamaño del cuerpo debe ser pequeño comparado con el radio de curvatura de la pared (aproximación de pared plana).
- **Variaciones relativas**: Se aceptan errores de orden 10^-2 en el coeficiente[[e]]siempre que no se supere el límite elástico.

## Señales de fallo del modelo
Las señales de fallo del modelo no suelen empezar en la calculadora, sino en la lectura física:
- **Cambio inesperado de signo**: Si la velocidad final[[vf]]resulta tener el mismo sentido que la inicial, la hipótesis de rebote se ha roto.
- **Aparición de spin**: Si el cuerpo tiene una rotación significativa, la interacción generará fuerzas de fricción que cambiarán la componente tangencial, invalidando la igualdad entre[[vit]]y[[vft]].
- **Deformación permanente**: Si el impacto deja un cráter, el modelo impulsivo ideal deja de ser fiable ya que gran parte de la energía se ha invertido en trabajo plástico.

## Modelo extendido o alternativo
El modelo extendido introduce correcciones cuando las hipótesis ideales se rompen. En una pared rugosa, se introduce un coeficiente de fricción de impacto que reduce la componente tangencial. En paredes deformables, se considera un sistema de dos masas donde la pared tiene una frecuencia de vibración propia, absorbiendo parte de la energía cinética[[K]]en forma de energía elástica residual. Si los tiempos de contacto[[Delta_t]]son prolongados, se debe sustituir el modelo impulsivo por un análisis de fuerzas dinámicas dependientes del tiempo.

**Cuando conviene pasar al modelo extendido:** Si las hipótesis del modelo ideal se rompen de forma medible (aparición de fricción, deformación de la pared o retroceso del soporte), la transición al modelo extendido o alternativo es necesaria para mantener la precisión predictiva.

## Comparación operativa
Comparado con el modelo de colisión entre dos cuerpos móviles, el modelo de pared es mucho más sencillo algebraicamente ya que elimina las incógnitas de la segunda masa. La mejor elección es la que conserva significado físico con el menor número de supuestos discutibles. Un error común es intentar aplicar la conservación del momento lineal total del sistema ignorando que la pared está anclada a la Tierra: el momento del proyectil no se conserva, se trasfiere íntegramente al planeta.
`;export{e as default};
