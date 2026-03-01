# Energia potencial elastica

## Idea clave
Un elemento elastico ideal (resorte lineal) almacena energia al deformarse. Esa energia puede recuperarse y transformarse en movimiento cuando el resorte se libera.

## 1- Que estudia este tema y por que es fundamental
Este tema modela almacenamiento energetico por deformacion y aparece en oscilaciones, amortiguacion, mecanismos de retorno y sistemas de absorcion de impactos.

## 2- Imagen fisica correcta
Al estirar o comprimir un resorte, aplicas trabajo externo que queda guardado como energia potencial elastica. Al liberarlo, el sistema devuelve esa energia.

## 3- Variables y parametros
- Constante elastica: $k$ (N/m).
- Deformacion respecto al equilibrio: $x$ (m).
- Fuerza elastica: $F_e$ (N).
- Energia potencial elastica: $U_e$ (J).

## 4- Formulas esenciales
Ley de Hooke (modelo lineal):

$$
F_e=-kx
$$

Energia potencial elastica:

$$
U_e=\frac{1}{2}kx^2
$$

Cambio de energia entre dos deformaciones:

$$
\Delta U_e=\frac{1}{2}k(x_f^2-x_i^2)
$$

Trabajo de la fuerza elastica:

$$
W_e=-\Delta U_e
$$

## 5- Dominio de validez
Valido en regimen elastico lineal (deformaciones moderadas, sin plasticidad). Fuera de ese rango, $k$ deja de ser constante y el modelo debe corregirse.

## 6- Metodo de resolucion
1- Define claramente $x=0$ en equilibrio.
2- Identifica $x_i$ y $x_f$ con signo y modulo coherentes.
3- Calcula $U_e$ o $\Delta U_e$ segun pida el problema.
4- Conecta con $K$ y otras energias para balance completo.
5- Interpreta si el sistema almacena o libera energia.

## 7- Errores tipicos
- Usar $x$ medido desde punto incorrecto.
- Olvidar cuadrado en $x^2$.
- Mezclar fuerza elastica con fuerza externa aplicada.
- Aplicar Hooke fuera de rango elastico lineal.

## 8- Ejemplo guiado
Resorte con $k=300\,\text{N/m}$ comprimido desde $x_i=0$ hasta $x_f=0.08\,\text{m}$:

$$
\Delta U_e=\frac{1}{2}\cdot300\cdot(0.08^2)=0.96\,\text{J}
$$

Esa energia queda almacenada y disponible para convertirse en cinetica al liberar.

## 9- Aplicaciones reales
- Suspensiones y sistemas de absorcion.
- Mecanismos de retorno por muelle.
- Diseno de sistemas oscilatorios controlados.

## 10- Sintesis final
La energia potencial elastica modela almacenamiento reversible por deformacion y es clave para entender conversion energia-movimiento en sistemas con resortes.
