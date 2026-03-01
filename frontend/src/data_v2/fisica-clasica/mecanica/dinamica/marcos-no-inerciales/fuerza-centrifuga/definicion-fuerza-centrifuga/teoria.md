# Definicion De Fuerza Centrifuga

## Idea clave
La fuerza centrifuga es un termino inercial radial que aparece solo cuando describes el movimiento desde un marco en rotacion.

## 1- Que estudia este subtema
Este subtema formaliza el efecto "hacia afuera" que percibe un observador que gira con el sistema. El objetivo es distinguir con precision entre:
- fuerza centripeta real (en marco inercial),
- fuerza centrifuga aparente (en marco rotatorio).

## 2- De donde sale y por que no contradice a Newton
En un marco rotatorio, para mantener la forma operativa de la segunda ley se agregan terminos inerciales. Uno de ellos es el centrifugo:

$$
\vec F_{cf}=m\vec\Omega\times(\vec\Omega\times\vec r)
$$

Si \(\vec\Omega\perp\vec r\), su modulo queda:

$$
F_{cf}=m\Omega^2 r
$$

Como \(v=\Omega r\), tambien:

$$
F_{cf}=m\frac{v^2}{r}
$$

## 3- Que se calcula realmente
Se calcula el modulo del termino radial aparente en el marco que rota:
- en funcion de \(\Omega\): \(m\Omega^2r\),
- en funcion de \(v\): \(mv^2/r\).

Variables clave:
- \(m\): masa (kg),
- \(\Omega\): velocidad angular (rad/s),
- \(r\): distancia al eje (m),
- \(v\): velocidad tangencial (m/s).

## 4- Lectura fisica correcta de direcciones
- Centripeta real: apunta al centro.
- Centrifuga aparente (marco rotatorio): apunta hacia afuera.

No se suman como fuerzas reales en un mismo marco. Son descripciones distintas del mismo fenomeno segun el observador.

## 5- Relacion con aceleracion centrifuga aparente
En marco rotatorio, la aceleracion aparente asociada es:

$$
a_{cf}=\Omega^2r=\frac{v^2}{r}
$$

y el termino de fuerza se obtiene con:

$$
F_{cf}=m a_{cf}
$$

## 6- Dominio de validez
Estas expresiones basicas funcionan cuando:
- la distancia al eje esta bien definida,
- la rotacion es aproximadamente uniforme,
- se trabaja en mecanica clasica.

Si la rotacion cambia rapidamente o la geometria es compleja, se requieren terminos y modelos adicionales.

## 7- Metodo de resolucion recomendado
1. Declara explicitamente el marco (inercial o rotatorio).
2. Identifica \(m\), \(r\), \(v\), \(\Omega\).
3. Usa una sola forma de la formula y evita duplicar datos.
4. Verifica unidades: N para fuerza.
5. Interpreta tendencia: crecer \(r\) o \(\Omega\) aumenta fuerte el efecto (\(\Omega^2\)).

## 8- Errores frecuentes
- Usar fuerza centrifuga en ecuacion inercial sin justificar marco.
- Confundir \(r\) con diametro.
- Mezclar rpm con rad/s sin convertir.
- Suponer dependencia lineal con \(\Omega\) en vez de cuadratica.

## 9- Ejemplo guiado
Persona de \(m=70\,\text{kg}\) a \(r=2.5\,\text{m}\) en plataforma con \(\Omega=1.8\,\text{rad/s}\):

$$
F_{cf}=m\Omega^2r=70\cdot(1.8)^2\cdot 2.5=567\,\text{N}
$$

Interpretacion:
- si \(\Omega\) sube al doble, \(F_{cf}\) se cuadruplica.
- la percepcion de "empuje hacia afuera" crece muy rapido con la velocidad angular.

## 10- Sintesis final
Dominar la fuerza centrifuga es dominar el criterio de marco en sistemas rotatorios: misma fisica, distinta representacion matematica segun el observador.
