# Ejemplos Clasicos

## Idea clave
Los ejemplos clasicos de rodadura sin deslizamiento te entrenan para pasar de una condicion cinematica simple a decisiones correctas en problemas reales: calcular, verificar y detectar patinamiento.

## 1- Que fenomeno estudia este subtema
Este subtema no introduce una ley nueva: entrena el uso correcto de la relacion \(v=\omega R\) en contextos tipicos de examen y de laboratorio.

Objetivo practico:
- resolver rapido,
- con unidades correctas,
- y con interpretacion fisica.

## 2- Base conceptual: como leer cada caso
En cada ejemplo debes separar tres preguntas:
1. Que variable te piden (\(v\), \(\omega\), \(R\)).
2. Se cumple rodadura pura o hay deslizamiento
3. Los signos y unidades son coherentes

Sin ese filtro previo, es facil obtener un numero correcto en calculo pero incorrecto en fisica.

## 3- Elementos que debes identificar siempre
- \(v\): velocidad lineal del centro.
- \(\omega\): velocidad angular.
- \(R\): radio efectivo.
- \(\Delta=v-\omega R\): indicador de consistencia de rodadura.
- \(n\): velocidad de giro en rpm (si aparece en enunciados tecnicos).

## 4- Formulacion matematica minima
Relacion base:

$$
v=\omega R
$$

Chequeo de consistencia:

$$
\Delta=v-\omega R
$$

Conversion rpm a rad/s:

$$
\omega=\frac{2\pi n}{60}
$$

Interpretacion de \(\Delta\):
- \(\Delta=0\): rodadura pura,
- \(\Delta\neq 0\): hay deslizamiento o datos inconsistentes.

## 5- Cuando aplica esta estrategia de ejemplo
Aplica cuando:
- el enunciado explicita "sin deslizamiento",
- o los datos cumplen razonablemente \(\Delta\approx 0\) dentro de error experimental.

No aplica directamente cuando:
- hay derrape,
- la rueda cambia radio efectivo por deformacion fuerte,
- el movimiento incluye vibraciones o perdida severa de contacto.

## 6- Metodo de resolucion en ejercicios tipo
1. Pasa todas las magnitudes a SI.
2. Si \(\omega\) viene en rpm, convierte primero.
3. Despeja en simbolico la variable pedida.
4. Sustituye datos y calcula.
5. Evalua \(\Delta\) si el problema pide validar rodadura.
6. Cierra con interpretacion fisica breve.

## 7- Errores frecuentes que debes evitar
- Usar cm en \(R\) y m/s en \(v\) sin convertir.
- Mezclar rpm con rad/s.
- Ignorar signos en movimientos con sentido opuesto.
- Concluir "rodadura pura" sin comprobar \(\Delta\).

## 8- Ejemplo guia (de principio a fin)
Datos: \(R=0.25\ \text{m}\), \(n=120\ \text{rpm}\), \(v=3.2\ \text{m/s}\).

Paso 1. Convertir \(n\) a \(\omega\):

$$
\omega=\frac{2\pi n}{60}=\frac{2\pi(120)}{60}=4\pi\approx 12.57\ \text{rad/s}
$$

Paso 2. Velocidad esperada por rodadura pura:

$$
v_{modelo}=\omega R=12.57\cdot 0.25\approx 3.14\ \text{m/s}
$$

Paso 3. Consistencia:

$$
\Delta=v-v_{modelo}=3.2-3.14=0.06\ \text{m/s}
$$

Interpretacion:
hay buena aproximacion a rodadura pura (desviacion pequena).

## 9- Aplicaciones reales
- Verificacion de odometria en robots.
- Diagnostico basico de deslizamiento en ruedas.
- Ajuste de velocidad en rodillos de transporte.
- Control preliminar de sistemas de traccion.

## 10- Sintesis final
Resolver ejemplos clasicos de rodadura no es solo aplicar una formula: es entrenar criterio fisico para validar si el modelo de rodadura pura realmente describe los datos.
