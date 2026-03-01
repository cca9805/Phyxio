# Poleas

## Idea clave
Una polea redistribuye direccion y magnitud de la fuerza. En sistemas compuestos, la carga se reparte entre varios tramos de cuerda y la fuerza necesaria disminuye.

## 1- Que estudia este tema y por que es clave
Este tema explica como calcular la fuerza que debes aplicar para mover una carga con poleas, y como cambian los resultados cuando hay perdidas reales.

## 2- Mecanismo fisico real de la polea
La cuerda transmite tension casi igual en cada tramo ideal. Si la carga esta sostenida por \(n\) tramos efectivos, cada tramo contribuye al soporte.

Por eso:
- mas tramos efectivos \(\Rightarrow\) menor fuerza aplicada,
- pero mas recorrido de cuerda para mover la misma carga.

## 3- Magnitudes esenciales
- \(R\): carga o resistencia (N).
- \(P\): fuerza aplicada por el operador (N).
- \(n\): numero de tramos que sostienen la carga.
- \(\eta\): rendimiento del sistema (0 a 1).
- \(VM\): ventaja mecanica.
- \(T\): tension en cuerda (N).
- \(s_P\): desplazamiento del extremo libre.
- \(s_R\): desplazamiento de la carga.

## 4- Formulas clave y su significado
Sistema ideal:

$$
P=\frac{R}{n}
$$

Sistema real con rendimiento:

$$
P=\frac{R}{n\eta}
$$

Ventaja mecanica:

$$
VM=\frac{R}{P}=n\eta
$$

Relacion de desplazamientos:

$$
s_P=n\,s_R
$$

Lectura fisica:
- no se regala energia,
- se intercambia fuerza por recorrido.

## 5- Dominio de validez del modelo
Modelo simple valido cuando:
- cuerda casi inextensible,
- poleas con perdida moderada representable por \(\eta\),
- movimiento cuasiestatico.

Debe corregirse cuando:
- hay aceleraciones grandes,
- la cuerda pesa mucho o se estira,
- aparecen oscilaciones y golpeteos.

## 6- Metodo de resolucion paso a paso
1. Dibuja el sistema y cuenta tramos que sostienen la carga.
2. Elige modelo ideal o real (\(\eta\)).
3. Escribe ecuacion principal de fuerza.
4. Si hay recorrido, usa \(s_P=n\,s_R\).
5. Despeja simbolico y luego sustituye.
6. Revisa orden de magnitud y viabilidad fisica.

## 7- Errores tipicos
- contar mal los tramos efectivos.
- usar \(n\) de forma geometrica en vez de mecanica.
- olvidar rendimiento en sistemas reales.
- confundir tension con fuerza total de entrada.
- no distinguir polea fija de polea movil.

## 8- Ejemplo completo guiado
Datos: carga \(R=1200\ \text{N}\), sistema con \(n=4\), rendimiento \(\eta=0.85\).

Paso 1. Fuerza ideal:

$$
P_{ideal}=\frac{R}{n}=\frac{1200}{4}=300\ \text{N}
$$

Paso 2. Fuerza real:

$$
P=\frac{R}{n\eta}
=\frac{1200}{4\cdot 0.85}
\approx 352.9\ \text{N}
$$

Paso 3. Ventaja mecanica real:

$$
VM=\frac{R}{P}\approx \frac{1200}{352.9}\approx 3.40
$$

Interpretacion:
- las perdidas reducen la ventaja frente al ideal de 4.

## 9- Aplicaciones reales
- Polipastos de taller.
- Grues y maniobras de izado.
- Elevacion en obra y mantenimiento industrial.
- Sistemas de rescate y aparejos nauticos.

## 10- Sintesis final
Dominar poleas es saber leer el sistema fisico: cuantos tramos sostienen la carga, cuanto rendimiento real tiene y que compromiso existe entre fuerza y recorrido.
