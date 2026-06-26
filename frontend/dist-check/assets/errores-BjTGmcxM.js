const e=`## Errores conceptuales

### Error 1: Pensar que la bobina se opone a la corriente

**Por qué parece correcto**

La analogia incorrecta viene de comparar la bobina con una resistencia. Como ambos elementos pueden reducir la corriente en un circuito real, parece que [[L]] actua contra [[I]].

**Por qué es incorrecto**

La autoinduccion se opone a cambios de corriente, no a corriente constante. En una bobina ideal, [[epsilon_L]] desaparece cuando [[I]] deja de variar.

**Señal de detección**

El alumno predice fem autoinducida aunque la corriente sea constante y no exista cambio temporal.

**Corrección conceptual**

Pregunta siempre si hay [[DeltaI]] durante un [[Deltat]]. Sin cambio de corriente no hay fem autoinducida ideal.

**Mini-ejemplo de contraste**

Una bobina conectada a corriente continua estable mantiene campo y energia, pero no genera nueva fem autoinducida. El transitorio ocurrio al conectar o desconectar.

## Errores de modelo

### Error 2: Usar inductancia constante en saturacion

**Por qué parece correcto**

El alumno ve [[L]] como dato fijo de catalogo y lo aplica a cualquier corriente. Es una generalizacion excesiva de un modelo lineal.

**Por qué es incorrecto**

Con nucleo ferromagnetico, el flujo enlazado puede dejar de crecer proporcionalmente con [[I]]. Entonces [[L]] efectiva cambia y la prediccion de [[epsilon_L]] se deforma.

**Señal de detección**

La bobina presenta calentamiento, zumbido, curva no lineal o corriente mucho mayor que la prevista.

**Corrección conceptual**

Usa [[L]] constante solo en el tramo lineal. Si el problema menciona saturacion, usa curva experimental o inductancia local.

**Mini-ejemplo de contraste**

Un inductor de potencia puede comportarse bien a baja corriente y perder inductancia al saturarse. Usar el valor inicial exagera su capacidad de limitar el cambio.

## Errores matemáticos

### Error 3: Olvidar convertir el tiempo

**Por qué parece correcto**

El dato de tiempo suele darse en ms o microsegundos, y el alumno lo copia sin convertir porque la formula parece simple.

**Por qué es incorrecto**

La rapidez media de cambio usa segundos. Un error de conversion puede cambiar [[epsilon_L]] por factores de mil o de un millon.

**Señal de detección**

El resultado de tension es absurdamente pequeño para un corte rapido, o absurdamente grande para un cambio lento.

**Corrección conceptual**

Antes de sustituir, expresa [[Deltat]] en segundos y conserva el signo de [[DeltaI]].

**Mini-ejemplo de contraste**

Cambiar 2 A en milisegundos no es lo mismo que cambiar 2 A en segundos. La bobina responde a la rapidez, no solo al tamaño del cambio.

## Errores de interpretación

### Error 4: Pensar que la energia desaparece al abrir el circuito

**Por qué parece correcto**

Al abrir el interruptor, la corriente visible cae y parece que el sistema simplemente se apaga.

**Por qué es incorrecto**

La energia [[U_B]] almacenada en el campo debe transferirse o disiparse. Si no hay camino seguro, la tension sube y puede aparecer una chispa.

**Señal de detección**

El alumno no menciona diodo, resistencia de descarga, arco o sobretension al analizar una bobina con corriente.

**Corrección conceptual**

Todo analisis de apertura debe incluir el destino de [[U_B]].

**Mini-ejemplo de contraste**

Un rele pequeño puede producir un pico visible al desconectarse. El pico no viene de una bateria oculta, sino de la energia magnetica liberada.

## Regla de autocontrol rápido

Comprueba tres cosas antes de cerrar: si cambia [[I]], cuanto vale [[DeltaI]] y cuanto dura [[Deltat]]. Si alguna falta, la fem autoinducida no esta bien definida.

Despues pregunta donde va [[U_B]] cuando el circuito cambia. Si no hay camino de descarga, espera una sobretension o un arco.
`;export{e as default};
