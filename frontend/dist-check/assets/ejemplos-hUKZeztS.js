const e=`# Ejemplo tipo examen

## Enunciado

Un oscilador masa-muelle se desplaza inicialmente con amplitud [[A]] = 0,050 m. Su pulsación natural es [[omega0]] = 12 rad/s y la tasa de amortiguamiento es [[gamma]] = 3 s^-1. Para una fase inicial [[phi]] = 0, calcula la pulsación amortiguada [[omega_d]], la amplitud límite [[x_env]] y la posición [[x]] en [[t]] = 0,50 s.

## Datos

Los datos son [[A]] = 0,050 m, [[omega0]] = 12 rad/s, [[gamma]] = 3 s^-1, [[phi]] = 0 rad y [[t]] = 0,50 s. Se pide decidir primero si el régimen es subamortiguado, porque la solución con coseno solo tiene sentido si la oscilación sigue existiendo.

## Definición del sistema

El sistema es un oscilador lineal libre que se mueve alrededor de una posición de equilibrio. La variable [[x]] mide el desplazamiento instantáneo y la amplitud límite [[x_env]] mide el máximo posible en ese instante.

## Modelo físico

Se usa el régimen subamortiguado porque el leaf exige comparar [[gamma]] con [[omega0]]. Si [[gamma]] es menor que [[omega0]], la respuesta conserva cruces del equilibrio y una frecuencia visible [[omega_d]], pero la amplitud queda reducida por una cota exponencial.

## Justificación del modelo

La amplitud de cinco centímetros se supone pequeña frente al rango lineal del muelle. También se supone amortiguamiento viscoso constante, sin rozamiento seco ni fuerza externa periódica. Bajo esas condiciones, la pérdida de energía puede representarse mediante [[gamma]] y la parte oscilatoria mediante [[omega_d]].

## Resolución simbólica

Primero se clasifica el régimen:

{{f:condicion_subamortiguado}}

Después se calcula la frecuencia angular visible:

{{f:pulsacion_amortiguada}}

La amplitud disponible en el instante se obtiene con:

{{f:envolvente}}

Finalmente, la posición instantánea se calcula con:

{{f:solucion_subamortiguada}}

## Sustitución numérica

Como 3 s^-1 < 12 rad/s, el régimen es subamortiguado. La pulsación amortiguada vale [[omega_d]] = sqrt(12^2 - 3^2) = sqrt(135) = 11,62 rad/s. La amplitud límite en 0,50 s es [[x_env]] = 0,050 exp(-3·0,50) = 0,050 exp(-1,5) ≈ 0,0112 m.

La posición se obtiene multiplicando esa amplitud límite por el coseno del argumento angular. El argumento vale 11,62·0,50 + 0 = 5,81 rad. Por tanto, [[x]] ≈ 0,0112 cos(5,81) ≈ 0,00996 m. La posición queda dentro de la cota, como debe ocurrir.

## Validación dimensional

[[gamma]][[t]] es adimensional porque combina s^-1 con s. [[omega_d]][[t]] también es adimensional. [[A]], [[x_env]] y [[x]] se expresan en metros. La raíz que define [[omega_d]] combina magnitudes de tiempo inverso al cuadrado y devuelve una cantidad de tiempo inverso.

## Interpretación física

El resultado indica una oscilación todavía visible: [[omega_d]] es real y próxima a [[omega0]], por lo que los ciclos no han desaparecido. Sin embargo, la amplitud disponible bajó de 0,050 m a unos 0,011 m en medio segundo. Físicamente, el sistema conserva memoria oscilatoria, pero pierde energía con rapidez.

La diferencia entre [[x_env]] y [[x]] es clave. La amplitud límite dice cuánto podría valer el máximo en ese instante; la posición depende además de la fase del ciclo. Si se midiera un valor de [[x]] mayor que [[x_env]], habría un error de unidades, de signo o de modelo.

# Ejemplo de aplicación real

## Contexto

Una estructura ligera vibra después de recibir un golpe. El técnico observa varios máximos decrecientes y quiere saber si el comportamiento corresponde a un régimen subamortiguado y si la vibración desaparecerá con rapidez suficiente para no molestar al equipo cercano.

## Estimación física

Si dos máximos separados por 0,6 s tienen amplitudes de 8 mm y 4 mm, la amplitud límite se redujo a la mitad. Una estimación de la tasa de amortiguamiento es ln(2)/0,6 ≈ 1,16 s^-1. Si el tiempo entre máximos es de 0,35 s, la frecuencia angular visible aproximada es 2*pi/0,35 ≈ 18 rad/s. La lectura combina [[gamma]] para la pérdida de amplitud y [[omega_d]] para el ritmo de los ciclos.

## Interpretación

La estructura no está en régimen crítico ni sobreamortiguado porque sigue cruzando el equilibrio. Tampoco es un oscilador ideal sin pérdidas, porque los máximos decrecen. El diagnóstico subamortiguado permite decidir si conviene aumentar amortiguamiento, modificar rigidez o aceptar la vibración residual.

Si la vibración molesta al equipo, aumentar [[gamma]] puede reducir antes los máximos, pero también acerca el sistema a la frontera crítica. Si se cambia la rigidez, cambia [[omega0]] y por tanto también puede cambiar [[omega_d]]. La decisión real no es solo amortiguar más, sino elegir qué escala física se quiere modificar. El ejemplo muestra por qué una lectura completa necesita la curva de [[x]], el ritmo de [[omega_d]] y la reducción de amplitud indicada por [[x_env]].

En una respuesta de examen, esta interpretación debe aparecer explícitamente. El valor numérico de [[x]] solo describe un instante; la clasificación del régimen y la comparación entre ciclos explican el comportamiento completo. Por eso se informa tanto la posición como la amplitud límite y el ritmo angular visible.
`;export{e as default};
