# Modelo de difraccion

## Modelo ideal

El modelo ideal de difraccion describe el patron de intensidad producido por una abertura rectangular iluminada por ondas planas monocromaticas en regimen de campo lejano (Fraunhofer). Este modelo considera que la onda incidente es perfectamente plana, la abertura tiene bordes nitidos y la pantalla de observacion esta a distancia infinita (o practicamente infinita).

En este modelo simplificado, los minimos de intensidad aparecen en angulos definidos por la condicion de interferencia destructiva entre abertura, angulo, orden y [[lambda]]. El patron es simetrico respecto al eje de incidencia, con un maximo central brillante y minimos equiespaciados en seno del angulo.

La simplificacion central consiste en ignorar el caracter finito de la distancia fuente-abertura, considerar la iluminacion perfectamente monocromatica y asumir bordes de abertura geometricamente perfectos sin efectos de borde adicionales.

## Hipótesis

- **Iluminacion plana monocromatica**: La onda incidente tiene frentes perfectamente planos y longitud de onda unica [[lambda]] constante en el tiempo y el espacio.

- **Abertura rectangular ideal**: La abertura tiene bordes perfectamente rectos y transmision uniforme (binaria: 100% dentro, 0% fuera).

- **Campo lejano (Fraunhofer)**: La distancia a la pantalla [[L_distancia]] es mucho mayor que el ancho de la abertura [[a_abertura]], permitiendo aproximar las ondas secundarias como planas en la pantalla.

- **Observacion paraxial**: Los angulos de difraccion [[theta_dif]] son pequenos, permitiendo aproximaciones seno aproximado a theta y tangente aproximado a theta.

- **Medio homogeneo isotropo**: El espacio entre abertura y pantalla tiene indice de refraccion uniforme y no dispersivo.

**Consecuencia de violar cada hipótesis**:

- Si la iluminacion no es plana (onda esferica desde fuente puntual cercana), el frente de onda curvado modifica las fases relativas y el patron difiere del ideal.

- Si la abertura tiene bordes difusos o transmision gradual, los minimos son menos pronunciados y el patron se suaviza.

- Si se opera en campo cercano (Fresnel), las ondas secundarias llegan con curvatura apreciable y las franjas difieren en posicion y forma.

- Si los angulos son grandes, las aproximaciones lineales fallan y las posiciones lineales ya no son proporcionales al orden.

- Si el medio es dispersivo (indice depende de [[lambda]]), diferentes longitudes de onda difractan en angulos diferentes incluso a igual orden.

## Dominio de validez cuantitativo

El modelo es valido cuando se cumplen simultaneamente:

- La distancia a la pantalla es al menos 10 veces mayor que el ancho de la abertura: L > 10a, garantizando regimen de Fraunhofer.

- Los angulos de difraccion son menores que 0.14 rad (8 grados), donde la aproximacion sin(theta) aproximado a theta tiene error menor al 1%.

- La longitud de onda esta dentro del rango visible o cercano (400 nm a 1000 nm tipicamente), donde la optica paraxial es aplicable.

- El ancho de abertura esta entre 10 y 1000 veces la longitud de onda [[lambda]], asegurando difraccion observable sin dispersion excesiva.

El error relativo del modelo respecto al comportamiento real es inferior al 5% cuando se operan dentro de estos limites.

## Señales de fallo del modelo

- **Desplazamiento del maximo central**: Si el maximo de intensidad no esta centrado en la posicion geometrica esperada, existe inclinacion del haz incidente o asimetria de la abertura.

- **Minimos incompletos**: Si los minimos de intensidad no alcanzan valores cercanos a cero, existe luz incoherente de fondo o la iluminacion no es monocromatica pura.

- **Franjas asimetricas**: Si las franjas a un lado del centro son mas anchas o intensas que al otro lado, la abertura tiene bordes irregulares o la iluminacion incide oblicuamente.

- **Desaparicion de ordenes altos**: Si ordenes superiores al tercero o cuarto no son visibles aunque deberian estarlo, la funcion de transmision de la abertura no es binaria (bordes difusos).

- **Dependencia del tamano de haz**: Si el patron cambia al variar el tamano del haz incidente (sin cambiar la abertura), la iluminacion no es uniforme sobre toda la abertura.

## Modelo extendido o alternativo

El **modelo extendido de Fresnel (campo cercano)** describe la difraccion cuando la distancia a la pantalla es comparable al tamano de la abertura. En este modelo, las ondas secundarias se suman considerando sus fases y amplitudes exactas sin aproximacion de rayos paralelos. Las integrales de Fresnel describen el patron de transicion entre campo cercano y lejano.

El **modelo de aberturas de transmision gradual** considera que la funcion de transmision varia suavemente en los bordes en lugar de ser un escalon binario. Este modelo suaviza los minimos y reduce el contraste de las franjas, acercandose a aberturas reales con bordes difuminados por procesos de fabricacion.

Cuando conviene pasar al modelo de Fresnel: cuando la distancia a la pantalla es menor que 10 veces el ancho de abertura, o cuando se necesita calcular el patron exacto en la region de transicion entre campo cercano y lejano.

Cuando conviene cambiar al modelo de transmision gradual: cuando los bordes de la abertura tienen rugosidad o difusion comparable a la longitud de onda, o cuando el material de la abertura tiene espesor finito que produce transmision parcial en los bordes.

## Comparación operativa

| Caracteristica | Modelo ideal (Fraunhofer) | Modelo de Fresnel | Modelo de transmision gradual |
|---|---|---|---|
| **Distancia** | L mucho mayor que a | L comparable a a | Cualquier distancia |
| **Forma de onda** | Planas en la pantalla | Curvas (esfericas) | Depende de la distancia |
| **Bordes de abertura** | Perfectos y nitidos | Perfectos y nitidos | Difusos o graduales |
| **Matematicas** | Funciones trigonometricas simples | Integrales de Fresnel | Transformadas de Fourier |
| **Complejidad** | Simple, soluciones cerradas | Moderada, requiere integracion numerica | Variable segun perfil de transmision |
| **Aplicacion tipica** | Espectrometros, laboratorio optico | Microscopia, focalizacion cercana | Filtros opticos reales, difusores |
| **Precision** | Alta en campo lejano | Exacta en todas las distancias | Depende del perfil medido |

**Ventajas y limites**:

El modelo de Fraunhofer proporciona calculos rapidos y analyticamente tratables, pero falla sistematicamente en campo cercano y no captura efectos de borde reales. El modelo de Fresnel es exacto pero requiere herramientas matematicas mas avanzadas. El modelo de transmision gradual describe aberturas reales con mayor fidelidad pero necesita caracterizacion experimental de la funcion de transmision. La transicion entre modelos depende de la relacion geometrica entre longitud de onda, tamano de abertura y distancia de observacion.
