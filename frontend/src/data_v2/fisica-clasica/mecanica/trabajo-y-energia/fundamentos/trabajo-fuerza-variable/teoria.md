# Trabajo con fuerza variable

## Idea clave
Cuando la fuerza cambia con la posicion, el trabajo no puede obtenerse con un solo producto $Fd$. Debe sumarse aporte a aporte mediante integral o area bajo la curva $F(x)$.

## 1- Que estudia este tema y por que es fundamental
Este tema resuelve situaciones reales donde la fuerza no es constante: muelles, fuerzas dependientes de posicion, campos no uniformes o empujes variables.

## 2- Imagen fisica correcta: suma de aportes diferenciales
Cada tramo pequeno $dx$ aporta un trabajo elemental $dW=F(x)dx$. El trabajo total es la acumulacion de todos esos aportes.

## 3- Magnitudes y parametros relevantes
- Variable de posicion: $x$ (m).
- Fuerza como funcion de posicion: $F(x)$ (N).
- Limites inicial y final: $x_1, x_2$ (m).
- Trabajo total: $W$ (J).

## 4- Formulas esenciales
Definicion integral:

$$
W=\int_{x_1}^{x_2}F(x)\,dx
$$

Interpretacion grafica equivalente:

$$
W=\text{area algebraica bajo }F(x)\text{ entre }x_1\text{ y }x_2
$$

Caso lineal tipo muelle ideal $F(x)=kx$:

$$
W=\int_{x_1}^{x_2}kx\,dx=\frac{k}{2}(x_2^2-x_1^2)
$$

## 5- Dominio de validez
Necesitas modelo de fuerza suficientemente definido en el intervalo. Si hay cambios por tramos, integra por segmentos y suma resultados.

## 6- Metodo de resolucion
1- Escribe explicitamente $F(x)$ y el intervalo.
2- Decide via integral analitica o area grafica.
3- Cuida el signo: area bajo el eje aporta trabajo negativo.
4- Si hay tramos, separa por intervalos.
5- Verifica unidades: N·m = J.

## 7- Errores tipicos
- Reemplazar fuerza variable por promedio sin justificar.
- Ignorar cambio de signo de $F(x)$ en parte del intervalo.
- Integrar respecto a variable incorrecta.
- Olvidar limites inicial/final correctos.

## 8- Ejemplo guiado
Si $F(x)=3x^2$ N y el cuerpo pasa de $x=1$ a $x=4$ m:

$$
W=\int_1^4 3x^2\,dx=[x^3]_1^4=64-1=63\,\text{J}
$$

## 9- Aplicaciones reales
- Trabajo en compresion y extension de resortes.
- Fuerzas elasticas no lineales.
- Modelado energetico en actuadores con fuerza dependiente de posicion.

## 10- Sintesis final
Trabajo con fuerza variable es acumulacion continua de transferencia energetica. La integral no es un formalismo extra: es la forma correcta de sumar cambios fisicos reales.
