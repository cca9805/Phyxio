# Centro De Masas En Cuerpos Extendidos

## Idea clave
Cuando la masa esta distribuida de forma continua, el centro de masas se calcula integrando contribuciones diferenciales de masa.

## 1- Que aporta este subtema
Este subtema completa el bloque:
- ya no trabajas con particulas aisladas,
- trabajas con barras, laminas y volumenes con densidad.

## 2- Mecanismo fisico
Cada elemento diferencial \(dm\) aporta segun su posicion.
El centro de masas continuo es la version limite del caso discreto cuando el numero de elementos tiende a infinito.

## 3- Magnitudes clave
- \(M\): masa total.
- \(\rho\): densidad volumica.
- \(\lambda\): densidad lineal.
- \(\sigma\): densidad superficial.
- \(L, R\): dimensiones geometricas.
- \(x_{CM},y_{CM},z_{CM}\): coordenadas del centro de masas.

## 4- Formulas fundamentales
Definicion continua:

$$
\vec r_{CM}=\frac{1}{M}\int \vec r\,dm
$$

Componentes:

$$
x_{CM}=\frac{1}{M}\int x\,dm,\qquad
y_{CM}=\frac{1}{M}\int y\,dm,\qquad
z_{CM}=\frac{1}{M}\int z\,dm
$$

Casos tipicos uniformes:

$$
x_{CM,\text{barra}}=\frac{L}{2}
$$

$$
x_{CM,\text{triangulo recto}}=\frac{L}{3}
$$

$$
x_{CM,\text{semicirculo}}=\frac{4R}{3\pi}
$$

## 5- Simetria antes que calculo
Regla didactica:
- antes de integrar, busca simetrias.

Si hay simetria respecto a un eje, la coordenada perpendicular del centro de masas puede deducirse directamente.

## 6- Metodo de resolucion
1. Define geometria y densidad.
2. Elige sistema de coordenadas util.
3. Usa simetria para reducir componentes.
4. Escribe \(dm\) correcto (\(\lambda dx\), \(\sigma dA\), \(\rho dV\)).
5. Integra y divide por \(M\).
6. Verifica rango geometrico del resultado.

## 7- Errores frecuentes
- usar formula de cuerpo uniforme con densidad variable.
- escribir \(dm\) incorrecto para la dimension del cuerpo.
- olvidar limites de integracion.
- obtener un centro fuera del dominio geometrico sin revisarlo.

## 8- Ejemplo guiado
Barra uniforme de longitud \(L=2.4\ \text{m}\):

$$
x_{CM}=\frac{L}{2}=1.2\ \text{m}
$$

Semicirculo uniforme de radio \(R=0.9\ \text{m}\):

$$
x_{CM}=\frac{4R}{3\pi}
=\frac{4(0.9)}{3\pi}
\approx 0.382\ \text{m}
$$

## 9- Aplicaciones
- diseno estructural y estabilidad.
- balanceo de piezas mecanicas.
- control de masas en vehiculos.
- analisis biomecanico de segmentos corporales continuos.

## 10- Sintesis final
Dominar cuerpos extendidos es dominar el paso de suma a integral, usando simetria, geometria y densidad con criterio fisico.
