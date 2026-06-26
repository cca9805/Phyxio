# Aplicaciones: Definición de Momento de Inercia

## 1. Diseño de volantes de inercia (flywheels)

En la ingeniería de motores de combustión y sistemas de almacenamiento energético, los **volantes de inercia** se diseñan maximizando el radio de distribución de masa. Concentrar la mayor parte de la masa en el borde exterior permite obtener el mayor momento de inercia posible con la menor masa total, gracias a la dependencia cuadrática

{{f:radio_giro}}

.

Esta geometría optimiza la relación entre energía almacenada y masa total del componente, que es el parámetro crítico en sistemas portátiles como los KERS de Fórmula 1. Un volante con forma de anillo hueco de radio R tiene

{{f:radio_giro}}

, el doble que un disco macizo de igual masa y radio (

{{f:radio_giro}}

). Sin embargo, el anillo hueco concentra todo el esfuerzo centrífugo en la pared externa, lo que limita la velocidad angular máxima segura.

La capacidad de almacenamiento energético es

{{f:energia_rotacional}}

: duplicar [[omega]] cuadruplica la energía, pero también cuadruplica la tensión centrífuga. Por tanto, el diseño óptimo de un volante es un equilibrio entre geometría (maximizar [[I]]) y resistencia mecánica (limitar [[omega]]).

Variable dominante: r (radio de distribución de masa).
Límite de validez: la tensión centrífuga en el borde

{{f:definicion_continua}}

no debe superar el límite elástico del material; por encima, el modelo de sólido rígido falla.

## 2. Giro de patinadores y clavados deportivos

Los atletas **manipulan activamente su momento de inercia** durante el vuelo libre para controlar su velocidad angular. Al recoger brazos y piernas hacia el eje corporal, reducen [[r]] de sus masas periféricas y [[I]] disminuye. Por conservación del momento angular (sin torque externo), [[omega]] aumenta proporcionalmente.

Este es el único mecanismo físico disponible: en ausencia de torque externo, velocidad e inercia se intercambian inversamente. El atleta convierte esta herramienta en una habilidad técnica precisa. En un clavado desde plataforma de 10 m, el atleta dispone de aproximadamente 1,4 s de vuelo. Un patinador profesional puede pasar de

{{f:energia_rotacional}}

 kg·m² (brazos extendidos) a

{{f:energia_rotacional}}

kg·m² (brazos recogidos), triplicando su velocidad angular sin intervención externa alguna.

Variable dominante: r (distancia de la masa de extremidades al eje corporal).
Límite de validez: el modelo solo aplica en tramos de vuelo libre sin contacto con el suelo o el agua. Durante el despegue o el aterrizaje, hay torques externos que alteran el momento angular.

## 3. Equilibrado de neumáticos y ruedas

Un neumático con distribución de masa **asimétrica** respecto al eje de rotación tiene un momento de inercia descentrado que genera fuerzas centrífugas variables. A altas velocidades esto produce vibraciones que dañan la suspensión y el confort. Se añaden contrapesos para hacer que el eje de inercia principal coincida con el eje de rotación real.

El objetivo no es solo equilibrar la masa total, sino asegurar que el **tensor de inercia** tenga al eje de rotación como eje principal, eliminando los torques parásitos de desequilibrio. Una asimetría de tan solo 30 g en el borde de una llanta de 0,3 m de radio genera una fuerza centrífuga de más de 50 N a 120 km/h, suficiente para producir el característico «temblor» del volante que percibe el conductor.

Variable dominante: I (distribución de inercia respecto al eje de giro).
Límite de validez: solo corregible en régimen de sólido rígido. La deformación del caucho a alta temperatura o velocidad altera el equilibrio dinámico y requiere reequilibrado periódico.

## 4. Control de actitud de satélites con ruedas de reacción

Los satélites utilizan **ruedas de reacción** (discos con motor integrado) para cambiar su orientación sin gastar propergol. Al acelerar una rueda interna, el satélite —con un momento de inercia mucho mayor— gira en sentido opuesto para conservar el momento angular total del sistema.

El diseño requiere conocer con precisión el momento de inercia de cada componente del satélite: paneles solares, antenas, estructura. Un error del 5% en I produce un error equivalente en la velocidad de la maniobra de apuntamiento. Los satélites de observación terrestre como los Sentinel de la ESA tienen I del orden de 10^3 kg·m² y utilizan tres ruedas de reacción ortogonales, cada una con

{{f:energia_rotacional}}

–0{,}1 kg·m², para controlar los tres ejes de rotación de forma independiente.

Variable dominante: I (momento de inercia del satélite respecto al eje de orientación).
Límite de validez: el modelo falla durante el despliegue de paneles solares (I cambia dinámicamente) o ante impactos de micrometeoritos que redistribuyen masa. Se requiere estimación en tiempo real de I(t).

## 5. Diseño de prótesis de carrera de alta competición

Las prótesis tipo «blade» para velocistas se diseñan para **minimizar el momento de inercia** respecto al eje de la cadera. Cada zancada requiere acelerar y desacelerar la prótesis desde el reposo hasta la velocidad de vuelo y viceversa. Un I menor reduce el torque muscular necesario y permite frecuencias de paso imposibles con piernas biológicas pesadas.

La optimización es un problema de compromiso: reducir I implica geometrías más delgadas, que pueden superar el límite elástico ante el impacto con el suelo. Una pierna biológica promedio tiene

{{f:energia_rotacional}}

 kg·m² respecto a la cadera; las prótesis de competición logran valores de

{{f:energia_rotacional}}

–0{,}5 kg·m², lo que permite frecuencias de zancada un 15–20% mayores bajo el mismo torque muscular disponible.

Variable dominante: m (masa total de la prótesis ubicada lejos del eje articular).
Límite de validez: debe equilibrarse I mínimo con la resistencia estructural necesaria. La prótesis debe soportar impactos de hasta 6 veces el peso corporal en la fase de contacto.