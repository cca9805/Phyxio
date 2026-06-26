# Ejemplo tipo examen

## Enunciado

Dos patinadores A y B se encuentran sobre una pista horizontal de muy baja friccion. Inicialmente ambos estan en reposo. En un intervalo corto de empuje, A ejerce sobre B una fuerza horizontal casi constante. Se pide analizar el par accion-reaccion, validar la consistencia por componentes y relacionar la reciprocidad de fuerzas con la diferencia de respuesta dinamica de cada patinador.

Ademas, en una segunda fase, se considera un contacto inclinado con componente vertical para estudiar el par normal reciproco y evitar la confusion entre fuerza normal y peso.

## Datos

- Masa del patinador A: [[mA]] = 50 kg.
- Masa del patinador B: [[mB]] = 70 kg.
- Intervalo de interaccion: [[t]] = 0.40 s.
- Componente de A sobre B en x: [[FAx]] = +120 N.
- Componente de A sobre B en y (fase inclinada): [[FAy]] = +35 N.
- Velocidad inicial comun: [[v0]] = 0 m/s.
- Aceleracion de la gravedad: [[g]] = 9.8 m/s^2.

En esta etapa no se busca resolver todas las fuerzas de soporte, sino identificar y verificar correctamente el par reciproco en cada eje.

## Definición del sistema

Sistema 1: cuerpo A (patinador A).

Sistema 2: cuerpo B (patinador B).

Regla de modelado: cada cuerpo tiene su propio diagrama de cuerpo libre. En el diagrama de B aparece [[FAB]] y en el de A aparece [[FBA]].

Ejes: x horizontal positiva hacia la derecha; y vertical positiva hacia arriba. La convencion se mantiene igual para ambos cuerpos durante toda la resolucion.

## Modelo físico

Se adopta el modelo clasico de tercera ley para el mismo evento de interaccion entre A y B. Se verifican cuatro relaciones: vectorial global, componentes en x, componentes en y y par normal de contacto.

Anclaje explicito del modelo al leaf: el par [[FAB]]-[[FBA]] se modela con la forma vectorial de tercera ley, las componentes [[FAx]]-[[FBx]] y [[FAy]]-[[FBy]] con las formas por eje, y el contacto [[Nab]]-[[Nba]] con la relacion reciproca de normales.

## Justificación del modelo

El modelo es apropiado porque la interaccion esta bien delimitada en tiempo y participantes, las masas se consideran constantes en el intervalo y la friccion horizontal es pequena frente a la fuerza de empuje. Estas condiciones permiten identificar con claridad el par reciproco sin ambiguedad de canal.

Tambien es fisicamente explicito porque distingue dos niveles distintos:

1. Estructura de fuerzas reciprocas ([[FAB]] y [[FBA]]).
2. Respuesta dinamica de cada cuerpo, que depende de masa y neta resultante.

Esta separacion evita el error comun de creer que igualdad de fuerzas implica igualdad de velocidades o aceleraciones.

## Resolución simbólica

{{f:tercera_ley_vectorial}}

{{f:tercera_ley_eje_x}}

{{f:tercera_ley_eje_y}}

{{f:par_normal_vectorial}}

Lectura simbolica:

- Si [[FAx]] es conocida para la interaccion A-B, entonces [[FBx]] debe ser su opuesto.
- Si existe componente vertical de interaccion [[FAy]], la reciproca [[FBy]] debe cambiar de signo.
- En contacto normal reciproco, [[Nab]] y [[Nba]] siguen la misma estructura de oposicion.

## Sustitución numérica

Con [[FAx]] = +120 N, la tercera ley por x exige:

- [[FBx]] = -120 N.

Con [[FAy]] = +35 N en la fase inclinada:

- [[FBy]] = -35 N.

A partir de la lectura dinamica (segunda ley aplicada por cuerpo), la diferencia de masa implica respuesta distinta:

- Aceleracion de B por el empuje horizontal: [[aB]] = [[FAx]]/[[mB]] = 120/70 ≈ 1.71 m/s^2.
- Aceleracion de A por la reciproca horizontal: [[aA]] = |[[FBx]]|/[[mA]] = 120/50 = 2.40 m/s^2.

Con intervalo [[t]] = 0.40 s y [[v0]] = 0:

- [[vB]] ≈ [[aB]]*[[t]] ≈ 0.68 m/s.
- [[vA]] ≈ [[aA]]*[[t]] ≈ 0.96 m/s (en sentido opuesto segun signos de eje).

El resultado es coherente: fuerzas reciprocas iguales en modulo, cambios de velocidad distintos por masas distintas.

## Validación dimensional

- Fuerza en N para [[FAx]], [[FBx]], [[FAy]], [[FBy]], [[FAB]], [[FBA]], [[Nab]], [[Nba]].
- Aceleracion en m/s^2 para [[aA]] y [[aB]].
- Velocidad en m/s para [[vA]] y [[vB]].
- Tiempo en s para [[t]].

No hay mezcla de dimensiones incompatibles. Las ecuaciones de tercera ley conservan coherencia dimensional de fuerza en ambos lados.

## Interpretación física

La interpretacion fisica central no es numerica aislada, sino causal: una sola interaccion genera dos fuerzas reciprocas simultaneas en cuerpos distintos. El par [[FAB]]-[[FBA]] expresa simetria de interaccion, mientras la diferencia entre [[aA]] y [[aB]] expresa asimetria de inercia por [[mA]] y [[mB]].

Esto implica que no hay contradiccion entre "fuerzas iguales" y "movimientos diferentes". La tercera ley no predice por si sola velocidades finales; predice la estructura reciproca de fuerzas. La evolucion de [[vA]] y [[vB]] requiere integrar esa estructura con masa y tiempo.

Tambien se clarifica una confusion clave: el peso [[W]] y una normal generica [[N_gen]] pueden equilibrarse en un mismo cuerpo, pero no constituyen accion-reaccion entre si. La reaccion del peso de A esta en la fuerza gravitatoria de A sobre la Tierra, no en la normal del piso sobre A.

Finalmente, la lectura por componentes evita errores de signo. Si [[FAx]] cambia de signo por cambio de direccion de empuje, [[FBx]] debe cambiar en sentido opuesto. Lo mismo para [[FAy]] y [[FBy]]. Esa regla permite auditar rapidamente consistencia de datos medidos.

# Ejemplo de aplicación real

## Contexto

En una linea de manufactura, dos carros acoplados temporalmente mediante un actuador lineal se separan para ocupar posiciones distintas. El control debe garantizar que la interaccion interna no se interprete como fuerza externa neta del sistema total y, al mismo tiempo, debe estimar velocidad de separacion de cada carro para evitar choques con topes.

## Estimación física

Supongamos masas efectivas [[mA]] = 180 kg y [[mB]] = 120 kg, con impulso de interaccion casi constante equivalente a [[FAB]] ≈ 600 N durante [[t]] = 0.25 s.

Por reciprocidad, [[FBA]] = -600 N en el eje de accion. Entonces:

- [[aA]] ≈ 600/180 = 3.33 m/s^2 (en sentido opuesto al de B).
- [[aB]] ≈ 600/120 = 5.00 m/s^2.

Si la velocidad inicial [[v0]] es cercana a cero, en 0.25 s se estima:

- [[vA]] ≈ 0.83 m/s.
- [[vB]] ≈ 1.25 m/s.

El par de fuerzas sigue siendo simetrico, pero la respuesta dinamica no lo es por diferencia de masas.

## Interpretación

La aplicacion industrial confirma la idea del leaf: la tercera ley organiza la reciprocidad de interaccion y permite construir controles robustos de separacion. El ingeniero evita dos errores criticos:

1. Cancelar indebidamente fuerzas reciprocas dentro del diagrama de un solo carro.
2. Suponer velocidades finales iguales por el solo hecho de tener fuerzas de igual modulo.

La lectura fisica completa integra par reciproco, masas, tiempo de actuacion y limites de seguridad. Si el control observa desajustes persistentes entre par esperado y medicion (por ejemplo, residual |[[FBx]] + [[FAx]]| alto), la accion correcta es revisar identificacion de canal y calibracion de sensores, no declarar automaticamente "fallo de la tercera ley".
