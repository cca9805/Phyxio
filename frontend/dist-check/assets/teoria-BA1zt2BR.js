const e=`\uFEFF# Concepto de vector

## Que es

Un vector es una cantidad que necesita modulo, direccion y sentido para quedar descrita. En fisica no basta con saber cuanto vale una fuerza o una velocidad: tambien importa hacia donde actua y desde que referencia se interpreta. El vector separa cantidad, orientacion y efecto fisico.

## Por que aparece en fisica

Aparece en fuerzas, desplazamientos, velocidades, aceleraciones y campos. Dos fuerzas de igual modulo pueden producir efectos opuestos si tienen sentidos contrarios. Dos velocidades de igual rapidez pueden llevar a posiciones distintas si apuntan a direcciones diferentes.

## Idea visual o geometrica

La imagen basica es una flecha. La longitud representa modulo, la linea indica direccion y la punta indica sentido. El punto donde se dibuja puede importar en torque o equilibrio, aunque en movimiento traslacional muchas veces basta con desplazar la flecha sin cambiarla.

![Vector con componentes, modulo, direccion y sentido](/graphs/matematicas/vectores-matematicos/vector-componentes.svg)

## Lenguaje simbolico minimo

Un vector puede escribirse como \`vec A\`, como par de componentes \`(A_x, A_y)\` o como modulo y angulo \`(A, theta)\`. Su modulo se calcula con \`sqrt(A_x^2 + A_y^2)\` y sus componentes dependen del sistema de ejes elegido.

## Que significa el resultado

El resultado vectorial indica una accion orientada. Si una aceleracion apunta hacia abajo, no significa solo que su modulo sea positivo: significa que cambia la velocidad en ese sentido. El signo de cada componente traduce orientacion respecto a los ejes.

## Cuando no debes usarlo

No debes usar un vector como si fuera un numero sin direccion. Tampoco debes confundir modulo con componente: una componente puede ser negativa aunque el modulo sea siempre no negativo. Si cambias ejes, cambian componentes, no el vector fisico.

## Resumen operativo

Primero identifica magnitud, modulo, direccion, sentido y referencia. Despues decide si necesitas componentes, modulo, angulo o punto de aplicacion. Nivel basico: leer flechas. Nivel intermedio: pasar a componentes. Nivel avanzado: separar vector fisico de su representacion.
`;export{e as default};
