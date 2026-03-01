# Difraccion

## Idea clave
La difraccion aparece cuando una onda encuentra una abertura u obstaculo de tamano comparable con su longitud de onda. En ese caso la onda no sigue solo un rayo geometrico: se abre angularmente.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la expansion angular de ondas tras pasar por rendijas, bordes o aperturas.

Es fundamental porque permite:
- explicar por que una sombra no siempre es nitida,
- predecir minimos y maximos en pantalla,
- establecer limites de resolucion en instrumentos.

Sin difraccion no se entiende el limite fisico de enfoque de sistemas opticos y acusticos.

## 2- Mecanismo fisico del fenomeno
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Al atravesar una abertura:
- cada punto de la abertura actua como emisor secundario,
- esas contribuciones interfieren entre si,
- el patron angular resultante depende de lambda y del tamano de abertura a.

Regla de escala:
- si lambda << a, difraccion pequena,
- si lambda ~ a, difraccion marcada.

## 3- Magnitudes y parametros esenciales
- a: ancho de rendija o abertura efectiva (m).
- lambda: longitud de onda (m).
- m: orden entero del minimo (1,2,3,...).
- theta: angulo de observacion (rad).
- sin_theta: seno del angulo (1).
- L: distancia rendija-pantalla (m).
- y_m: posicion del minimo m en pantalla (m).
- w0: ancho del maximo central (m).
- D: diametro de apertura circular (m).
- theta_R: angulo de resolucion Rayleigh (rad).

## 4- Formulas esenciales y lectura fisica
Minimos de difraccion en rendija simple:

$$
a\sin\theta=m\lambda\qquad (m=1,2,3,\ldots)
$$

Angulo del minimo m:

$$
\theta_m=\arcsin\left(\frac{m\lambda}{a}\right)
$$

Aproximacion de angulo pequeno (pantalla lejana):

$$
y_m\approx\frac{m\lambda L}{a}
$$

Ancho del maximo central:

$$
w_0\approx\frac{2\lambda L}{a}
$$

Criterio de Rayleigh (apertura circular):

$$
\theta_R\approx1.22\frac{\lambda}{D}
$$

Lectura fisica importante:
- al aumentar lambda, el patron se abre,
- al aumentar a, el patron se estrecha,
- el limite de resolucion mejora al aumentar D y empeora al aumentar lambda.

## 5- Nota conceptual importante
La difraccion no contradice la propagacion rectilinea. La completa: la optica geometrica es el limite de longitudes de onda pequenas frente al tamano de abertura.

## 6- Dominio de validez del modelo
Estas formulas funcionan bien cuando:
- regimen lineal,
- geometria de rendija/apertura bien definida,
- condiciones de difraccion de Fraunhofer para expresiones de pantalla simple,
- aproximacion de angulo pequeno cuando se usa y_m~m*lambda*L/a.

Si la geometria es cercana (Fresnel) o compleja, se requieren modelos de campo mas completos.

## 7- Metodo de resolucion recomendado
1- Identifica tipo de abertura (rendija o circular).
2- Selecciona formula de angulo o pantalla segun datos.
3- Comprueba condicion de existencia m*lambda<=a.
4- Calcula theta_m, y_m o w0 con SI.
5- Si es resolucion, usa Rayleigh con D.
6- Verifica orden de magnitud y tendencia fisica.
7- Cierra explicando como cambia el patron al variar lambda o abertura.

## 8- Errores tipicos que debes evitar
- usar m=0 en minimos de rendija simple.
- olvidar que m*lambda/a debe ser <=1 para usar arcsin.
- mezclar mm, um y m sin conversion.
- aplicar angulo pequeno fuera de su dominio.
- confundir minimos de difraccion con maximos de interferencia.

## 9- Ejemplo completo guiado
Datos:
- lambda=500 nm=5.0e-7 m,
- a=0.20 mm=2.0e-4 m,
- L=2.0 m,
- m=1.

Paso 1- angulo del primer minimo:

$$
\sin\theta_1=\frac{m\lambda}{a}=\frac{5.0\times10^{-7}}{2.0\times10^{-4}}=2.5\times10^{-3}
$$

$$
\theta_1\approx2.5\times10^{-3}\ \text{rad}
$$

Paso 2- posicion en pantalla (angulo pequeno):

$$
y_1\approx\frac{m\lambda L}{a}=\frac{(1)(5.0\times10^{-7})(2.0)}{2.0\times10^{-4}}=5.0\times10^{-3}\ \text{m}
$$

Paso 3- ancho del maximo central:

$$
w_0\approx2y_1=1.0\times10^{-2}\ \text{m}=1.0\ \text{cm}
$$

Interpretacion:
- patron claramente observable,
- el maximo central se ensancha si aumenta lambda o disminuye a.

## 10- Sintesis final
Dominar difraccion significa:
- identificar cuando la escala lambda/a domina,
- calcular angulos y posiciones de minimos con criterio,
- usar Rayleigh para limites de resolucion,
- interpretar patrones reales mas alla de la optica de rayos.
