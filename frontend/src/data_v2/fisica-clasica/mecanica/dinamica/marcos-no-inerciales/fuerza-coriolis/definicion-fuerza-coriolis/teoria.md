# Definicion De Fuerza Coriolis

## Idea clave
La fuerza de Coriolis aparece en marcos rotatorios cuando el movil tiene velocidad relativa dentro del marco.

## 1- Que estudia este subtema
Este subtema explica el origen y la forma matematica del termino de Coriolis, esencial para describir desviaciones laterales observadas en sistemas en rotacion como la Tierra.

## 2- Formula vectorial base
La expresion general es:

$$
\vec F_{cor}=-2m(\vec\Omega\times\vec v_{rel})
$$

donde:
- \(m\): masa,
- \(\vec\Omega\): velocidad angular del marco,
- \(\vec v_{rel}\): velocidad del movil respecto al marco.

## 3- Que condiciones deben cumplirse para que exista
Para que haya Coriolis deben darse las dos:
1. marco en rotacion (\(\vec\Omega\neq 0\)),
2. velocidad relativa no nula (\(\vec v_{rel}\neq 0\)).

Si cualquiera es cero:

$$
\vec F_{cor}=\vec 0
$$

## 4- Modulo y dependencia angular
El modulo vale:

$$
F_{cor}=2m\Omega v_{rel}\sin\alpha
$$

\(\alpha\) es el angulo entre \(\vec\Omega\) y \(\vec v_{rel}\). El efecto es maximo para \(\alpha=90^\circ\).

## 5- Direccion y sentido
La direccion viene del producto vectorial:
- perpendicular a \(\vec\Omega\) y \(\vec v_{rel}\),
- cambia de sentido segun hemisferio y orientacion del movimiento.

En superficie terrestre, la desviacion tipica es:
- hemisferio norte: hacia la derecha del movimiento,
- hemisferio sur: hacia la izquierda.

## 6- Interpretacion fisica correcta
No es una fuerza de contacto ni una fuerza de campo adicional. Es un termino inercial que aparece por describir trayectorias desde un sistema que rota.

## 7- Dominio de validez
Uso escolar tipico:
- tiempos moderados,
- escalas donde se puede usar \(\Omega\) terrestre constante,
- mecanica clasica no relativista.

Para problemas atmosfericos avanzados, se integran presion, viscosidad y terminos geofisicos adicionales.

## 8- Metodo de resolucion recomendado
1. Confirmar marco rotatorio.
2. Determinar \(\Omega\), \(v_{rel}\), \(\alpha\).
3. Calcular modulo con SI.
4. Fijar sentido con regla del producto vectorial.
5. Validar si el orden de magnitud justifica incluir el efecto.

## 9- Ejemplo numerico
Datos: \(m=0.15\,\text{kg}\), \(\Omega=7.29\times10^{-5}\,\text{rad/s}\), \(v_{rel}=250\,\text{m/s}\), \(\alpha=90^\circ\).

$$
F_{cor}=2m\Omega v_{rel}\sin\alpha
$$

$$
F_{cor}=2(0.15)(7.29\times10^{-5})(250)(1)
$$

$$
F_{cor}\approx 5.47\times10^{-3}\,\text{N}
$$

Pequena para escalas cortas, relevante en trayectorias largas o precisas.

## 10- Sintesis final
Dominar Coriolis es dominar tres cosas a la vez: condicion de existencia, direccion vectorial y escala fisica del efecto.
