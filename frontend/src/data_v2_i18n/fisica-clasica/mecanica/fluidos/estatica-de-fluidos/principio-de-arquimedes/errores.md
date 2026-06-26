# Errores comunes en el Principio de Arquímedes

## Errores conceptuales

### Error 1: Creer que el empuje depende de la profundidad
#### Por qué parece correcto
Dado que la presión hidrostática aumenta linealmente con la profundidad, es intuitivo y frecuente para el estudiante asumir que el empuje, al ser una fuerza originada por el fluido, también debe aumentar a medida que un cuerpo se sumerge más profundamente. Se visualiza erróneamente que "más agua encima" o "mayor profundidad" implica un empuje más potente.

#### Por qué es incorrecto
Analíticamente, el empuje de Arquímedes depende exclusivamente de la diferencia de presión entre la cara inferior y la superior de un cuerpo. Aunque ambas presiones aumentan con la profundidad, su **diferencia** permanece constante si el fluido es incompresible y el volumen desplazado [[V_des]] no varía. Una vez que el objeto está totalmente sumergido, el empuje no cambia independientemente de si está a 1text{ metro} o a 100text{ metros} de la superficie.

#### Señal de detección
Usted detectará este error cuando en la resolución de problemas se intente incluir la variable de profundidad h dentro de la fórmula de Arquímedes, o cuando el alumno afirme que un submarino experimenta mayor fuerza hacia arriba cuanto más desciende en la fosa.

#### Corrección conceptual
Debe recordar que el empuje es igual al **peso del volumen de fluido desalojado**. Mientras el volumen sumergido [[V_des]] sea el mismo, el peso del agua apartada será el mismo, y por lo tanto la fuerza de empuje [[E]] será constante.

#### Mini-ejemplo
- ❌ **Incorrecto**: Una bola de acero a 50text{ m} de profundidad siente más empuje que a 5text{ m}.
- ✅ **Correcto**: En ambos casos, si la bola no se comprime, el empuje [[E]] es idéntico porque desplaza el mismo volumen de fluido.

## Errores de modelo

### Error 2: Confundir el volumen total con el volumen sumergido
#### Por qué parece correcto
Muchos enunciados proporcionan las dimensiones totales de un objeto (por ejemplo, el volumen total de un barco o de una boya). Por inercia técnica, el estudiante tiende a introducir el volumen total de manera directa en la fórmula de empuje.

#### Por qué es incorrecto
El Principio de Arquímedes es explícito: el empuje solo es proporcional al volumen del fluido que ha sido **desalojado** (apartado). Para un cuerpo que flota parcialmente, el volumen que queda por encima de la superficie no contribuye en absoluto a la generación de la fuerza de empuje. Usar el volumen total sobreestima masivamente el empuje y conduce a resultados de flotación físicamente imposibles.

#### Señal de detección
Ocurre cuando el cálculo del empuje para un objeto que flota (se asume en equilibrio) resulta ser mucho mayor que su propio peso real [[W]].

#### Corrección conceptual
Se debe distinguir siempre entre el volumen geométrico total del objeto y el volumen sumergido [[V_des]]. En problemas de flotación, [[V_des]] es la incógnita que permite que el sistema se equilibre con el peso real.

#### Mini-ejemplo
- ❌ **Incorrecto**: El empuje sobre un barco de 1000text{ m}^3 es rho cdot g cdot 1000 aunque esté flotando.
- ✅ **Correcto**: El empuje es rho cdot g cdot V_{casco_bajo_agua}, donde V_{casco_bajo_agua} es solo una fracción del total.

## Errores matemáticos

### Error 3: Uso equivocado de densidades (Cuerpo vs Fluido)
#### Por qué parece correcto
La fórmula del empuje involucra una densidad. Al tener dos materiales en interacción (el objeto y el líquido), es muy común elegir por error la densidad del sólido sumergido, ya que es el protagonista visual del problema.

#### Por qué es incorrecto
El empuje es una fuerza ejercida **por el fluido**. Por lo tanto, la magnitud de la fuerza depende de cuánto "pesa" el fluido que ya no está en ese hueco. La densidad que define el empuje es estrictamente la densidad del fluido [[rho_f]]. La densidad del sólido solo sirve para calcular el peso real del cuerpo [[W]], pero no influye en la magnitud del empuje hidrostático per se.

#### Señal de detección
Detectado cuando al intentar calcular el empuje sobre una esfera de plomo en agua, se utiliza la densidad del plomo (11300text{ kg/m}^3) en lugar de la del agua (1000text{ kg/m}^3).

#### Corrección conceptual
Siga esta regla: el empuje es una fuerza "externa" que viene del medio. Use siempre [[rho_f]] para la fórmula de Arquímedes. Use la densidad del objeto solo para determinar su masa o peso propio.

#### Mini-ejemplo
- ❌ **Incorrecto**: usar la densidad del hierro para calcular el empuje en una bola de hierro sumergida en aceite.
- ✅ **Correcto**: usar la densidad del aceite para calcular el empuje. El aceite es quien empuja.

## Errores de interpretación

### Error 4: Pensar que el empuje solo ocurre en líquidos
#### Por qué parece correcto
La mayoría de los ejemplos clásicos involucran agua, barcos y piscinas. Esto genera un sesgo cognitivo donde se asocia Arquímedes únicamente a la fase líquida de la materia.

#### Por qué es incorrecto
El Principio de Arquímedes es un principio de la **mecánica de fluidos**, y el aire es un fluido. Cualquier objeto en la atmósfera terrestre experimenta un empuje de Arquímedes hacia arriba. Habitualmente lo ignoramos porque la densidad del aire es muy baja, pero es la fuerza fundamental que permite que los globos aerostáticos y zepelines asciendan.

#### Señal de detección
Se manifiesta cuando el estudiante afirma que un globo de helio sube debido a que el helio "no tiene peso" o "tiene peso negativo", olvidando que el helio sube porque el aire circundante lo empuja hacia arriba.

#### Corrección conceptual
El empuje existe en gases y líquidos. Siempre que haya un gradiente de presión y una densidad de fluido [[rho_f]] no nula, habrá empuje de Arquímedes.

#### Mini-ejemplo
- ❌ **Incorrecto**: Un globo de helio sube porque el helio es antigravitatorio.
- ✅ **Correcto**: Sube porque el empuje del aire ([[rho_f]]) sobre el volumen del globo es mayor que el peso total del helio y la tela.

## Regla de autocontrol rápido
Antes de concluir su ejercicio, verifique estos tres puntos críticos:
1.  **Consistencia de Unidades**: ¿Están sus densidades en kg/m^3 y sus volúmenes en m^3? (Evite los g/cm^3 y litros en el cálculo final).
2.  **Identidad de Densidad**: ¿He usado la densidad del fluido para el [[E]] y la del cuerpo para el [[W]]?
3.  **Realismo de Flotación**: Si el cuerpo flota, el empuje calculado no puede ser mayor que el peso total (si lo es, es que ha usado el volumen total en lugar del sumergido).

