const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
Un bloque de granito homogéneo, con una masa de 2500text{ kg} y un volumen de 1.2text{ m}^3, es descendido mediante un cable de acero de alta resistencia al fondo de un depósito experimental lleno de agua dulce ([[rho_f]] = 1000text{ kg/m}^3). Este experimento busca calibrar sensores de presión en condiciones de inmersión total. Debemos determinar, con precisión ingenieril, la magnitud de la fuerza de empuje que experimenta el bloque una vez que se encuentra completamente bajo el nivel del agua y, posteriormente, calcular cuál es el peso aparente que debe soportar el cable de suspensión para evitar su ruptura. Considera la aceleración de la gravedad estándar como 9.8text{ m/s}^2 y asume que no existen corrientes de convección significativas en el tanque que puedan distorsionar la lectura hidrostática.

## Datos
- Masa del cuerpo de granito: 2500text{ kg}
- Volumen total geométrico del cuerpo: 1.2text{ m}^3
- Densidad del medio (agua dulce): [[rho_f]] = 1000text{ kg/m}^3
- Aceleración gravitatoria local: [[g]] = 9.8text{ m/s}^2
- Estado de inmersión: Totalmente sumergido; el volumen desplazado [[V_des]] coincide con el volumen total de 1.2text{ m}^3.
- Incógnita principal 1: Empuje hidrostático [[E]] en Newtons.
- Incógnita principal 2: Peso aparente [[W_ap]] (tensión en el cable) en Newtons.

## Definición del sistema
El sistema se define como un sólido rígido de gran densidad (bloque de granito) inmerso en un medio continuo fluido (agua) en reposo. Las fronteras del sistema coinciden exactamente con la superficie mojada del bloque, donde se produce la transferencia de fuerzas de presión. Las fuerzas externas analizadas son tres: el peso real [[W]] generado por la masa del bloque y el campo gravitatorio (vector descendente), el empuje hidrostático [[E]] generado por el gradiente de presión del agua (vector ascendente) y la fuerza de soporte o tensión del cable [[W_ap]] que actúa hacia arriba para mantener el equilibrio estático del conjunto.

## Modelo físico
Se aplica rigurosamente el **modelo de fluido incompresible en reposo**. Este modelo presupone que el agua no sufre cambios en su densidad [[rho_f]] a pesar de la presión ejercida sobre las capas inferiores y que el bloque de granito mantiene su forma y volumen de forma absoluta (rigidez perfecta). Bajo estas premisas, el empuje se rige por la ley de Arquímedes, que establece una proporcionalidad directa entre el volumen de fluido desalojado y la fuerza ascendente generada. Se desprecia cualquier efecto de viscosidad dinámica o rozamiento, ya que el sistema se estudia en un estado de equilibrio estático final sin movimiento relativo entre el agua y el bloque.

## Justificación del modelo
Dada la baja profundidad relativa del depósito (escala de pocos metros) y la naturaleza altamente incompresible tanto del agua líquida como del granito sólido, el modelo de Arquímedes proporciona una precisión superior al 99.9%. Los efectos laterales como la tensión superficial en la línea del cable o las variaciones microscópicas de la gravedad son órdenes de magnitud menores que las fuerzas de miles de Newtons que dominan el problema. Por tanto, el uso de la ecuación fundamental de la hidrostática es la herramienta de diseño y validación más adecuada y eficiente para este escenario de ingeniería estructural submarina.

## Resolución simbólica
En primer lugar, debemos determinar la magnitud del peso real [[W]] del objeto basándonos en su masa y la gravedad:

[[W]] = m_c cdot [[g]]


En segundo lugar, invocamos el Principio de Arquímedes para calcular el empuje [[E]], que es el peso del fluido que ocuparía el lugar del bloque:
{{f:ley_arquimedes}}

[[E]] = [[rho_f]] cdot [[g]] cdot [[V_des]]


Finalmente, para hallar el peso aparente [[W_ap]], que representa la fuerza neta que el cable "siente" (es decir, la tensión requerida para evitar la caída del bloque), planteamos el equilibrio de fuerzas según la primera ley de Newton:
{{f:peso_aparente}}

[[W_ap]] = [[W]] - [[E]]


## Sustitución numérica
1. Cálculo del peso real gravitatorio sobre la masa de granito:

[[W]] = 2500 cdot 9.8 = 24500text{ N}


2. Cálculo del empuje ascendente generado por el agua desalojada:

[[E]] = 1000 cdot 9.8 cdot 1.2 = 11760text{ N}


3. Cálculo del peso aparente resultante o tensión del cable de seguridad:

[[W_ap]] = 24500 - 11760 = 12740text{ N}


## Validación dimensional
Realizamos un análisis dimensional para garantizar la consistencia física de la resolución:
- Para el empuje:

[E] = [kg/m^3] cdot [m/s^2] cdot [m^3] = [kg cdot m/s^2] = [N]

- Para el peso aparente:

[[[W_ap]]] = [N] - [N] = [N]

Ambos resultados terminan en Newtons (N), la unidad de fuerza en el Sistema Internacional, confirmando que la estructura algebraica de las ecuaciones es correcta.

## Interpretación física
El bloque de granito experimenta un empuje ascendente [[E]] de 11760text{ N}, lo que representa una reducción de la carga efectiva. El peso aparente [[W_ap]] de 12740text{ N} nos indica que, aunque el bloque tiende a hundirse, el fluido "ayuda" sustancialmente a sostenerlo, facilitando las maniobras de manipulación y reduciendo el estrés mecánico. Este resultado significa que el cable solo soporta aproximadamente el 52% del peso real del bloque mientras este se encuentra sumergido.

# Ejemplo de aplicación real

## Contexto
Un equipo internacional de oceanografía se encuentra diseñando una boya de monitorización esférica masiva de 2text{ m} de diámetro para estudiar las corrientes profundas en el Atlántico Norte. La boya debe permanecer anclada al fondo marino mediante un pesado lastre de hormigón. El diseño técnico requiere que la boya permanezca exactamente medio sumergida en la superficie para asegurar que las antenas de transmisión satelital superiores permanezcan secas.

## Estimación física
Para determinar el lastre necesario, calculamos primero el volumen total de la boya esférica: V_{total} approx 4.189text{ m}^3. Dado que el requerimiento de diseño exige que solo se sumerja la mitad de la esfera, el volumen de agua desalojado es [[V_des]] = 2.0945text{ m}^3. Considerando la densidad del agua de mar promedio ([[rho_f]] = 1025text{ kg/m}^3), el empuje ascendente estimado es:

{{f:ley_arquimedes}}


[[E]] = 1025 cdot 9.8 cdot 2.0945 = 21039text{ N}


Este valor representa un **orden de magnitud** típico para equipos de monitorización oceánica de gran calado.

## Interpretación
La boya requiere un peso total [[W]] de 21039text{ N} para quedar en equilibrio de flotación media. Si la boya pesa 15000text{ N} en el aire, se debe añadir un lastre de 6039text{ N} de hormigón para equilibrar el conjunto. Esta lectura cuantitativa **significa** que el lastre debe ser el 40% del peso de la boya para que la antena no se hunda por debajo del nivel de flotabilidad neutra predicho. El Principio de Arquímedes **indica** que si la salinidad del agua cambiara, la boya flotaría a una altura ligeramente distinta.

`;export{e as default};
