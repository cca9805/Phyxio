# Ejemplo tipo examen

## Enunciado
Un pequeño avión de reconocimiento tiene una superficie alar total [[A]] de  15text{ m}^2 . En condiciones de vuelo nivelado y estacionario a una altitud donde la densidad del aire [[rho]] es de  1.0text{ kg/m}^3 , el avión mantiene una velocidad de crucero constante [[v]] de  60text{ m/s} . Sabiendo que el coeficiente de sustentación [[C_L]] para este régimen es de  0.45  y el coeficiente de resistencia aerodinamica [[C_D]] es de  0.035 , se solicita: 1) Calcular la fuerza de sustentación [[L_f]] que genera el avión para mantenerse en el aire, 2) Determinar la fuerza de resistencia aerodinamica [[D_f]] que los motores deben compensar con su empuje, y 3) Estimar el peso total del avión basándose en el equilibrio de fuerzas verticales.

## Datos
-   Superficie alar: [[A]]  igual a   15text{ m}^2 
-   Densidad del aire: [[rho]]  igual a   1.0text{ kg/m}^3 
-   Velocidad de crucero: [[v]]  igual a   60text{ m/s} 
-   Coeficiente de sustentación: [[C_L]]  igual a   0.45 
-   Coeficiente de resistencia aerodinamica: [[C_D]]  igual a   0.035 
-   Gravedad:  g  igual a  9.8text{ m/s}^2 

## Definición del sistema
El sistema de estudio es el avión completo considerado como un sólido rígido en un sistema de referencia ligado a tierra. El aire se modela como un fluido continuo e incompresible (ya que la velocidad de  60text{ m/s}  es muy inferior a la del sonido). Se asume que el flujo es estacionario y que no existen ráfagas de viento externas, lo que permite el uso directo de los coeficientes aerodinámicos constantes del leaf.

## Modelo físico
Utilizaremos las relaciones operativas fundamentales de la aerodinámica básica definidas en este módulo para el cálculo de fuerzas en régimen subsónico:

{{f:lift_aero}}

{{f:arrastre}}

Además, aplicaremos la Primera Ley de Newton para el equilibrio de traslación en vuelo nivelado:

sum F_y  igual a  0 Rightarrow [[L_f]] - W  igual a  0


sum F_x  igual a  0 Rightarrow T - [[D_f]]  igual a  0


## Justificación del modelo
La justificación física del modelo reside en que el número de Mach ( M approx 0.17 ) es significativamente inferior a 0.3, lo que garantiza que los efectos de compresibilidad son despreciables y el aire actúa como un fluido de densidad constante. Además, para las dimensiones del avión y la velocidad de vuelo, el número de Reynolds es lo suficientemente alto como para asegurar un régimen de flujo donde los coeficientes [[C_L]] y [[C_D]] son estables y no dependen de fluctuaciones viscosas de pequeña escala, permitiendo un análisis estático de fuerzas preciso.

## Resolución simbólica
Primero, calculamos la presión dinámica  q  que actúa sobre las superficies del avión:

q  igual a  frac{1}{2} [[rho]] [[v]]^2


A partir de este valor, obtenemos la sustentación multiplicando por el área y el coeficiente correspondiente:

[[L_f]]  igual a  q cdot [[A]] cdot [[C_L]]


De manera análoga, calculamos el resistencia aerodinamica total:

[[D_f]]  igual a  q cdot [[A]] cdot [[C_D]]


Finalmente, para hallar el peso  W , igualamos la sustentación a la fuerza gravitatoria según el equilibrio vertical:

W  igual a  [[L_f]]


## Sustitución numérica
Calculamos la presión dinámica:

q  igual a  0.5 cdot 1.0 cdot (60)^2  igual a  1800text{ Pa}


Calculamos la sustentación:

[[L_f]]  igual a  1800 cdot 15 cdot 0.45  igual a  12150text{ N}


Calculamos el resistencia aerodinamica:

[[D_f]]  igual a  1800 cdot 15 cdot 0.035  igual a  945text{ N}


El peso del avión es, por tanto:

W  igual a  12150text{ N} Rightarrow m  igual a  frac{12150}{9.8} approx 1240text{ kg}


## Validación dimensional
La presión dinámica tiene unidades de Pascales ( text{N/m}^2 ). Al multiplicar por el área ( text{m}^2 ) y por un coeficiente adimensional, el resultado final es en Newtons ( text{N} ), que es la unidad correcta para una fuerza en el SI. La estructura dimensional es consistente para una fuerza en el SI.

## Interpretación física
El avión genera una sustentación de  12150text{ N} , lo que le permite sostener una masa de aproximadamente 1.24 toneladas en el aire. Es interesante observar que el resistencia aerodinamica ( 945text{ N} ) es mucho menor que la sustentación, lo que indica una buena eficiencia aerodinámica ( L/D approx 12.8 ). Esto significa que por cada Newton de empuje que proporcionan los motores, el ala genera casi 13 Newtons de fuerza ascendente "gratis" gracias a la interacción con el aire.

---

# Ejemplo de aplicación real

## Contexto
En el diseño de vehículos terrestres de alta eficiencia, como un prototipo de coche solar, el objetivo principal es minimizar el resistencia aerodinamica para maximizar la autonomía de las baterías. Un equipo de ingenieros está probando una carrocería con un área frontal proyectada [[A]] de  1.2text{ m}^2 . Se necesita estimar la potencia adicional necesaria para vencer la resistencia del aire cuando el vehículo aumenta su velocidad de  50text{ km/h}  a  100text{ km/h} , asumiendo un [[C_D]] constante de  0.18  y una densidad del aire de  1.225text{ kg/m}^3 .

## Estimación física
Para realizar esta estimación cuantitativa, primero convertimos las velocidades a metros por segundo:
-    v_1  igual a  50text{ km/h} approx 13.89text{ m/s} 
-    v_2  igual a  100text{ km/h} approx 27.78text{ m/s} 

Calculamos el resistencia aerodinamica inicial [[D_f]] a  50text{ km/h} :

[[D_f]]_1  igual a  0.5 cdot 1.225 cdot 0.18 cdot 1.2 cdot (13.89)^2 approx 25.5text{ N}


Calculamos el resistencia aerodinamica final a  100text{ km/h} :

[[D_f]]_2  igual a  0.5 cdot 1.225 cdot 0.18 cdot 1.2 cdot (27.78)^2 approx 102.1text{ N}


Observamos que al duplicar la velocidad, el resistencia aerodinamica se ha multiplicado por cuatro (de 25.5 a 102.1). La potencia necesaria ( P  igual a  F cdot v ) se ve afectada aún más:
-    P_1  igual a  25.5 cdot 13.89 approx 354text{ W} 
-    P_2  igual a  102.1 cdot 27.78 approx 2836text{ W} 

## Interpretación
La potencia necesaria para vencer el viento ha pasado de 354 vatios a casi 2836 vatios. Esto representa un aumento de **ocho veces** en la demanda de energía por parte del motor solar. Esta estimación física es crucial para los diseñadores, ya que demuestra que por encima de los  80text{ km/h} , la aerodinámica se convierte en el factor dominante del consumo energético, superando incluso a la fricción de los neumáticos. Esta es la razón por la cual los coches eléctricos e hiper-eficientes priorizan formas extremadamente suaves y áreas frontales mínimas; cualquier pequeña reducción en el [[C_D]] o en el área [[A]] se traduce en una ganancia de autonomía masiva a altas velocidades de crucero.


