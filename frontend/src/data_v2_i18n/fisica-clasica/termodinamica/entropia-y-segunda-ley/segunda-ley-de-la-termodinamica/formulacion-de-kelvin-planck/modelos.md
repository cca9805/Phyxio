# Modelos físicos para la Formulación de Kelvin-Planck

## Modelo ideal

El modelo ideal representa una maquina térmica que opera en [[ciclo]] entre dos focos: uno caliente a [[T_H]] y uno frio a [[T_C]]. En cada vuelta absorbe [[Q_H]], produce [[W]] y rechaza [[Q_C]]. La sustancia de trabajo vuelve al estado inicial, por lo que el balance de energía no puede esconder acumulacion interna.

En este modelo la frontera conceptual es clara: una maquina con [[Q_C]] nulo y [[W]] positivo intentaria convertir todo el calor en trabajo como único efecto. Esa es precisamente la situación prohibida por Kelvin-Planck.

## Hipótesis

- La maquina opera ciclicamente y no cambia su estado interno al final.
- Los focos térmicos mantienen temperaturas absolutas bien definidas.
- Las magnitudes [[Q_H]], [[Q_C]] y [[W]] se miden por [[ciclo]].
- No hay almacenamiento neto de energía interna en la sustancia de trabajo.
- El trabajo útil se distingue de calor rechazado y de perdidas disipativas.

Estas hipótesis permiten separar la primera ley, que conserva energía, de la segunda ley, que limita la conversion completa de calor en trabajo.

## Dominio de validez cuantitativo

El modelo es adecuado cuando el dispositivo puede representarse como motor ciclico y cuando los focos son suficientemente grandes para tratar [[T_H]] y [[T_C]] como casi constantes durante un [[ciclo]]. En problemas escolares, suele bastar con exigir [[T_H]] mayor que [[T_C]], [[Q_H]] positivo, [[Q_C]] no negativo y [[eta]] menor que uno.

Como criterio operativo, si el tiempo de un [[ciclo]] es mucho menor que el tiempo de enfriamiento del foco caliente, la aproximacion de foco casi constante es razonable. Si el foco cambia mucho de temperatura durante una vuelta, conviene cambiar a un modelo de reservorios finitos con capacidades térmicas.

Criterio cuantitativo mínimo: [[eta]] en rango 0-1, [[Q_H]] positiva, [[Q_C]] no negativa y [[T_H]] mayor que [[T_C]] con ambas temperaturas positivas. Si además se usa Carnot, [[eta]] debe quedar por debajo de [[eta_carnot]]. En orden de magnitud, motores reales de vapor o combustión suelen quedar entre 0.2 y 0.5, no cerca de 1.

## Señales de fallo del modelo

El modelo ideal falla cuando el dispositivo no es ciclico, cuando la sustancia de trabajo termina en otro estado o cuando hay reacciones quimicas no contabilizadas como parte del balance. También falla si se intenta describir una pila, una celda de combustible o una expansión única como si fueran maquinas térmicas ciclicas ordinarias.

Otra senal de fallo aparece cuando [[eta]] calculada supera [[eta_carnot]]. En ese caso no se ha descubierto una tecnologia superior; se han usado temperaturas incorrectas, se ha omitido [[Q_C]] o se mezclaron trabajo bruto y trabajo neto.

## Modelo extendido o alternativo

Cuando los focos no son ideales, el modelo extendido incluye capacidades calorificas, transferencias finitas, friccion, potencia, irreversibilidades internas y temperatura variable durante el proceso. Entonces [[DeltaS_universo]] deja de ser solo una advertencia conceptual y se convierte en una magnitud de diagnostico.

Conviene pasar al modelo alternativo si se pide potencia real, consumo de combustible, eficiencia de planta, condensador, turbina, gradientes finitos o exergia. En esos casos Kelvin-Planck sigue siendo el limite, pero el calculo necesita más variables que el esquema [[Q_H]], [[Q_C]] y [[W]] por [[ciclo]].

## Comparacion operativa

El modelo ideal sirve para decidir si una propuesta viola la segunda ley y para estimar limites superiores. El modelo extendido sirve para dimensionar equipos y comparar tecnologias reales. El primero responde "es posible"; el segundo responde "cuanto se aproxima al limite".
