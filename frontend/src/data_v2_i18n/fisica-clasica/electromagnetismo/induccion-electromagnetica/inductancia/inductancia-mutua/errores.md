## Errores conceptuales


### Error 1: confundir acoplamiento mutuo con autoinduccion

**Por qué parece correcto**

La analogia incorrecta surge porque ambas ideas usan bobinas, flujo y fem inducida. El alumno generaliza la autoinduccion y cree que cualquier fem de bobina debe calcularse con una inductancia propia.

**Por qué es incorrecto**

En inductancia mutua, la causa es el cambio de corriente de otra bobina. [[inductancia_propia_primaria]] y [[inductancia_propia_secundaria]] describen bobinas individuales; [[inductancia_mutua]] describe el enlace magnetico entre ambas.

**Señal de detección**

El calculo usa [[inductancia_propia_primaria]] para obtener [[epsilon_2]] aunque el enunciado habla de cambio de corriente primaria.

**Corrección conceptual**

Primero identifica si la bobina se induce a si misma o si recibe flujo de otra. Si recibe flujo externo de otra bobina, la magnitud central es [[inductancia_mutua]].

**Mini-ejemplo de contraste**

Dos bobinas separadas pueden tener [[inductancia_propia_primaria]] grande y aun asi inducir poca tension secundaria. El resultado correcto atiende al flujo compartido, no solo a la inductancia propia.

## Errores de modelo


### Error 2: suponer acoplamiento perfecto por cercania

**Por qué parece correcto**

La percepcion espacial engaña: si dos bobinas estan cerca, parece natural imaginar que todo el campo de una atraviesa la otra.

**Por qué es incorrecto**

El campo puede dispersarse, cerrarse por otra ruta o atravesar la secundaria con mala orientacion. [[coeficiente_de_acoplamiento]] mide esa fraccion efectiva y puede ser pequeño aunque la distancia visual sea reducida.

**Señal de detección**

El alumno trata [[coeficiente_de_acoplamiento]] como si fuera maximo sin que el enunciado mencione nucleo comun, alineacion o acoplamiento fuerte.

**Corrección conceptual**

La cercania no sustituye al enlace de flujo. Hay que leer [[lambda_21]] o estimar [[coeficiente_de_acoplamiento]] antes de asumir transferencia eficaz.

**Mini-ejemplo de contraste**

Dos bobinas perpendiculares pueden estar juntas y compartir poco flujo. Una bobina mas alejada, pero alineada con un nucleo comun, puede acoplar mejor.

## Errores matemáticos


### Error 3: usar corriente final en lugar de cambio de corriente

**Por qué parece correcto**

La confusion de magnitudes aparece porque la corriente final suele ser el numero mas visible del enunciado. El alumno lo sustituye como si una corriente grande bastara para inducir fem.

**Por qué es incorrecto**

La fem secundaria depende del cambio de [[corriente_fuente]] durante [[intervalo_de_tiempo]]. Una corriente primaria constante puede sostener [[lambda_21]], pero no produce fem media sostenida.

**Señal de detección**

El resultado no cambia al modificar el tiempo del transitorio, o usa [[corriente_fuente]] donde el planteamiento exige [[cambio_de_corriente_primaria]].

**Corrección conceptual**

Antes de calcular [[epsilon_2]], determina cuanto cambia la corriente primaria y en que intervalo ocurre ese cambio.

**Mini-ejemplo de contraste**

Una primaria con corriente alta pero constante puede tener flujo mutuo sin fem secundaria media. Una corriente menor, pero cambiando rapido, puede inducir una fem mayor.

## Errores de interpretación


### Error 4: negar fem si el secundario esta abierto

**Por qué parece correcto**

La intuicion de circuito cerrado lleva a pensar que sin corriente secundaria no hay efecto electrico. Se confunde fem con corriente entregada a una carga.

**Por qué es incorrecto**

La fem [[epsilon_2]] puede existir como diferencia de potencial inducida aunque el circuito secundario no deje circular corriente apreciable.

**Señal de detección**

El alumno descarta [[epsilon_2]] solo porque el secundario esta conectado a un voltimetro o queda abierto.

**Corrección conceptual**

Distingue fem inducida de corriente secundaria. La fem aparece por cambio de flujo; la corriente requiere un camino cerrado y una carga.

**Mini-ejemplo de contraste**

Un transformador en vacio puede mostrar tension secundaria medida con voltimetro. La potencia entregada es casi nula, pero la fem inducida no desaparece.

## Regla de autocontrol rápido

Antes de sustituir datos, aplica cuatro preguntas: que bobina cambia su corriente, que bobina recibe el flujo, cuanto vale el acoplamiento y durante cuanto tiempo ocurre el cambio. Si la respuesta usa [[inductancia_propia_primaria]] o [[inductancia_propia_secundaria]] para una fem causada por otra bobina, probablemente mezclaste autoinduccion con induccion mutua.

Despues revisa unidades y sentido fisico. [[intervalo_de_tiempo]] debe estar en segundos, [[coeficiente_de_acoplamiento]] debe comportarse como fraccion de acoplamiento y el signo de [[epsilon_2]] debe expresar oposicion al cambio de flujo enlazado.