# Concepto De Fuerza Centripeta

## Idea clave
La fuerza centripeta no es una fuerza nueva. Es el nombre de la componente radial de la fuerza resultante que apunta hacia el centro de curvatura y permite cambiar la direccion de la velocidad.

## 1- Que duda resuelve este tema
Muchos estudiantes preguntan: "cual es la fuerza centripeta" como si fuera una fuerza adicional, parecida al peso o a la tension.

La respuesta correcta es:
- no existe como agente independiente,
- la aporta alguna fuerza real (o combinacion de fuerzas) con componente hacia el centro.

## 2- Por que hace falta una fuerza hacia el centro
En movimiento curvo, aunque la rapidez pueda ser constante, la velocidad vectorial cambia de direccion.

Cambiar direccion de \(\vec v\) implica aceleracion. En movimiento circular, esa aceleracion apunta hacia el centro:

$$
a_c=\frac{v^2}{r}
$$

## 3- Segunda ley en direccion radial
Aplicando Newton por el eje radial:

$$
\sum F_{rad}=m a_c
$$

Sustituyendo \(a_c\):

$$
\sum F_{rad}=m\frac{v^2}{r}
$$

Esa suma radial es lo que llamamos "fuerza centripeta requerida":

$$
F_c=\frac{mv^2}{r}
$$

## 4- Formas equivalentes utiles
Si usas velocidad angular:

$$
v=\omega r
$$

entonces:

$$
a_c=\omega^2 r
$$

$$
F_c=m\omega^2 r
$$

Con periodo \(T\):

$$
\omega=\frac{2\pi}{T},\quad v=\frac{2\pi r}{T}
$$

## 5- Que fuerzas reales pueden aportar la centripeta
Depende del sistema:
- tension en cuerda (objeto girando atado),
- gravedad en orbitas,
- rozamiento estatico lateral en un coche sobre curva plana,
- normal y/o tension en loops o curvas peraltadas.

Regla practica: identifica fuerzas reales en DCL y proyecta su componente radial.

## 6- Diferencia con fuerza centrifuga
En marco inercial:
- usas solo fuerzas reales,
- la dinamica radial es \(\sum F_{rad}=mv^2/r\).

En marco no inercial giratorio, puede introducirse fuerza centrifuga como fuerza ficticia para reescribir ecuaciones en ese marco.

Confusion tipica: mezclar ambas descripciones en el mismo planteo.

## 7- Metodo de resolucion recomendado
1. Dibuja DCL del cuerpo.
2. Define eje radial hacia el centro.
3. Proyecta fuerzas sobre eje radial.
4. Plantea:

$$
\sum F_{rad}=m\frac{v^2}{r}
$$

5. Usa relaciones \(v,\omega,T\) segun datos.
6. Verifica unidades y sentido fisico del resultado.

## 8- Ejemplo guiado corto
Masa \(m=0.5\,\text{kg}\) en cuerda de radio \(r=0.8\,\text{m}\), rapidez \(v=4\,\text{m/s}\).

Fuerza centripeta requerida:

$$
F_c=\frac{mv^2}{r}=\frac{0.5\cdot 16}{0.8}=10\ \text{N}
$$

Si la unica fuerza radial es la tension, entonces:

$$
T=10\ \text{N}
$$

## 9- Errores tipicos
- Tratar \(F_c\) como fuerza adicional al sumar fuerzas.
- Olvidar proyectar por eje radial.
- Usar \(v^2/r\) con \(v\) en km/h.
- Confundir rapidez constante con aceleracion nula.
- Mezclar marco inercial y no inercial en el mismo calculo.

## 10- Sintesis final
La idea central es simple y potente: la trayectoria curva exige aceleracion radial, y esa aceleracion exige fuerza radial resultante. "Fuerza centripeta" es nombre funcional de esa resultante, no un nuevo agente fisico.

