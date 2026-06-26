const e=`# Ejemplo tipo examen

## Enunciado

Un satelite de masa [[m]] = 800 kg se mueve alrededor de la Tierra, cuya masa central es [[M]] = 5,97e24 kg. En un punto de la trayectoria se encuentra a [[r]] = 8,0e6 m del centro terrestre y su rapidez instantanea es [[v]] = 7000 m/s. Calcula [[K]], [[U]], [[E]] y [[eps]], y clasifica energeticamente el estado orbital.

## Datos

Se usa [[G]] = 6,674e-11 N*m2/kg2, [[M]] = 5,97e24 kg, [[m]] = 800 kg, [[r]] = 8,0e6 m y [[v]] = 7000 m/s. Las magnitudes buscadas son energia cinetica [[K]], energia potencial [[U]], energia total [[E]] y energia especifica [[eps]]. El umbral de referencia es [[E0]] = 0, asociado al escape ideal.

## Definición del sistema

El sistema es un problema de dos cuerpos aproximado: la Tierra actua como masa central dominante y el satelite como masa orbital. No se incluyen rozamiento atmosferico, empuje ni perturbaciones de la Luna. La posicion se toma respecto al centro terrestre y la energia potencial se mide con referencia cero en el infinito.

## Modelo físico

El modelo combina energia cinetica, potencial y energia especifica de estado. Las relaciones nucleares son:

{{f:energia_cinetica}}

{{f:energia_potencial}}

{{f:energia_total_desde_k_u}}

{{f:energia_especifica_estado}}

La clasificacion se cierra con:

{{f:clasificacion_orbital_conceptual}}

No se usa directamente la relacion con [[a]] porque el enunciado da un estado instantaneo, no el semieje mayor de una orbita ligada.

## Justificación del modelo

El problema da [[r]] y [[v]], asi que la lectura energetica de estado es la herramienta natural. La masa central [[M]] domina y la velocidad es no relativista, por lo que el modelo newtoniano es adecuado. Como no se menciona motor ni rozamiento, se puede interpretar [[E]] como energia mecanica conservada durante el tramo ideal.

## Resolución simbólica

Primero se obtiene [[K]] a partir de la rapidez. Despues se obtiene [[U]], cuidando el signo negativo por la referencia en el infinito. La energia total [[E]] es la suma de ambas. La energia especifica [[eps]] se calcula por unidad de masa y debe tener el mismo signo clasificatorio que [[E]].

Para conectar con orbitas ligadas, si el resultado es negativo se podria calcular un semieje mayor equivalente mediante:

{{f:energia_total_ligada}}

o por unidad de masa:

{{f:energia_especifica_ligada}}

Si el estado fuera circular, se comprobaria con:

{{f:energia_circular}}

En este ejercicio esas relaciones sirven como lectura complementaria, no como sustituto del calculo desde [[r]] y [[v]].

## Sustitución numérica

La energia cinetica resulta aproximadamente [[K]] = 1,96e10 J. La energia potencial resulta aproximadamente [[U]] = -3,98e10 J. Por tanto, [[E]] = [[K]] + [[U]] ≈ -2,02e10 J. Al dividir por [[m]], se obtiene [[eps]] ≈ -2,52e7 J/kg.

El signo es negativo tanto en [[E]] como en [[eps]], por lo que el estado esta ligado. No se ha alcanzado el umbral [[E0]]. El satelite no tiene energia suficiente para escapar en este modelo conservativo.

## Validación dimensional

[[K]] tiene unidades de kg*m2/s2, equivalentes a joule. [[U]] combina [[G]], [[M]], [[m]] y [[r]], dando tambien joule. Al sumar [[K]] y [[U]], [[E]] conserva unidades de energia. Al dividir por [[m]], [[eps]] queda en J/kg, equivalente a m2/s2.

## Interpretación física

El satelite se mueve rapido, pero no lo suficiente para superar la profundidad del pozo gravitatorio en ese radio. La energia potencial negativa domina en valor absoluto sobre la cinetica positiva, dejando [[E]] negativa. La conclusion fisica no es solo "sale un numero negativo": significa que el satelite pertenece a una trayectoria ligada mientras no reciba energia adicional o aparezcan fuerzas no conservativas.

# Ejemplo de aplicación real

## Contexto

Una sonda en orbita de aparcamiento debe decidir si una maniobra la deja en transferencia ligada o en escape. Los ingenieros conocen el estado despues del impulso y calculan [[eps]] para no depender de la masa concreta de la sonda. Esta lectura permite comparar diseños de mision con sondas de masas distintas.

## Estimación física

Antes de la maniobra, la sonda tiene [[eps]] negativa y por tanto esta ligada. El motor aumenta [[v]], sube [[K]] y hace que [[eps]] se acerque a cero. Si despues del impulso [[eps]] sigue siendo negativa, la trayectoria sera una orbita mas grande o una transferencia eliptica. Si [[eps]] llega a [[E0]], se alcanza escape ideal. Si [[eps]] queda positiva, la sonda sale con energia sobrante.

Una estimacion rapida consiste en comparar el valor de [[eps]] antes y despues del impulso. No basta con decir que la velocidad aumento: hay que mirar si el incremento de energia cinetica compensa la energia potencial negativa en el radio donde se realiza la maniobra.

## Interpretación

La energia orbital actua como criterio de decision de mision. Si [[eps]] es negativa, el plan sigue dentro de trayectorias ligadas y se puede hablar de semieje mayor [[a]]. Si [[eps]] es no negativa, cambia el tipo de trayectoria y el modelo operativo pasa a escape o trayectoria abierta. La utilidad fisica es evitar confundir "ir mas rapido" con "escapar".
`;export{e as default};
