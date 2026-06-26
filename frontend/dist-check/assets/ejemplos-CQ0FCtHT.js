const e=`# Ejemplo tipo examen

## Enunciado

En un laboratorio se observa un muelle largo. En el primer montaje, un pulso avanza a lo largo del muelle mientras el extremo se mueve lateralmente. La amplitud total de la perturbacion es 4.0 cm y la componente perpendicular medida es 3.6 cm. En el segundo montaje, se comprimen espiras en la direccion del muelle. La amplitud total vuelve a ser 4.0 cm y la componente paralela medida es 3.2 cm.

Clasifica cada montaje como predominantemente transversal o longitudinal usando los indices del leaf. Explica por que la clasificacion depende de la orientacion de la perturbacion y no de la apariencia general del muelle.

## Datos

- Montaje lateral: amplitud total de 4.0 cm y componente perpendicular de 3.6 cm.
- Montaje de compresion: amplitud total de 4.0 cm y componente paralela de 3.2 cm.
- Direccion de propagacion: a lo largo del muelle.
- Medio: muelle mecanico con dos formas distintas de excitacion.

## Definición del sistema

El sistema es el pulso que viaja por el muelle. La direccion de propagacion queda fijada por el eje longitudinal del muelle. La magnitud [[A]] sirve como escala comun para comparar componentes, mientras [[u_perp]] y [[u_parallel]] indican como se orienta la perturbacion respecto al avance.

No se clasifica el objeto "muelle" de una vez para siempre. Se clasifica cada modo de excitacion. El mismo medio puede mostrar un pulso transversal cuando se desplaza lateralmente y un pulso longitudinal cuando se comprime.

## Modelo físico

El modelo separa la perturbacion en componente perpendicular y componente paralela. Para el montaje lateral se espera predominio de [[u_perp]] y por tanto un indice [[C_T]] alto. Para el montaje de compresion se espera predominio de [[u_parallel]] y un indice [[C_L]] alto.

La decision es geometrica. Primero se fija la direccion de propagacion; despues se comparan componentes de perturbacion. El tamaño absoluto de [[A]] no decide por si solo el tipo de onda.

## Justificación del modelo

El modelo vale porque los dos pulsos son reconocibles, la direccion de avance esta clara y las componentes se miden respecto al mismo eje del muelle. La amplitud total usada para normalizar es comun dentro de cada montaje.

Dejaria de valer si el muelle girara, si se mezclaran simultaneamente compresion y desplazamiento lateral sin separarlos, o si se midiera la componente perpendicular en un montaje y la amplitud en otro.

## Resolución simbólica

Para el montaje lateral se usa el indice transversal:

{{f:coeficiente_transversal}}

La lectura compara [[u_perp]] con [[A]]. Si el cociente se aproxima a uno, la perturbacion es mayoritariamente perpendicular al avance.

Para el montaje de compresion se usa el indice longitudinal:

{{f:coeficiente_longitudinal}}

La lectura compara [[u_parallel]] con [[A]]. Si el cociente se aproxima a uno, la perturbacion es mayoritariamente paralela al avance.

## Sustitución numérica

En el montaje lateral, dividir 3.6 cm entre 4.0 cm da aproximadamente 0.90. Por tanto [[C_T]] es alto y el pulso se clasifica como predominantemente transversal.

En el montaje de compresion, dividir 3.2 cm entre 4.0 cm da aproximadamente 0.80. Por tanto [[C_L]] es alto y el pulso se clasifica como predominantemente longitudinal.

Los dos resultados son adimensionales porque comparan longitudes con longitudes. No miden energia ni velocidad de propagacion; miden predominio de orientacion.

## Validación dimensional

- Cociente transversal: una longitud \`[L]\` dividida por una longitud \`[L]\` produce un indice \`[1]\`.
- Cociente longitudinal: una longitud \`[L]\` dividida por una longitud \`[L]\` produce un indice \`[1]\`.
- La clasificacion no depende de unidades centimetros o metros si todas las longitudes se convierten de forma coherente.

La validacion dimensional confirma que [[C_T]] y [[C_L]] son indices de comparacion. La fisica entra al decidir que componente corresponde a cada direccion.

## Interpretación física

El primer montaje muestra una onda transversal porque la perturbacion principal ocurre de lado respecto al avance. El pulso viaja por el muelle, pero los segmentos se apartan lateralmente. Un dibujo rotado seguiria representando el mismo tipo de onda si se conserva la perpendicularidad.

El segundo montaje muestra una onda longitudinal porque las espiras se acercan y se separan en la misma direccion en que avanza la compresion. La ausencia de una gran altura vertical no significa ausencia de amplitud; la amplitud esta en la compresion paralela.

Si en un montaje aparecieran valores comparables de [[C_T]] y [[C_L]], seria mejor hablar de onda mixta o de modo combinado. Forzar una etiqueta pura ocultaria informacion fisica sobre como se deforma el medio.

# Ejemplo de aplicación real

## Contexto

En una demostracion escolar se comparan una cuerda tensa y una columna de aire en un tubo. La cuerda muestra desplazamientos laterales visibles cuando pasa un pulso. El tubo no muestra desplazamiento lateral visible, pero un microfono detecta variaciones de presion alineadas con el avance del sonido.

## Estimación física

En la cuerda, si la perturbacion lateral medida es cercana a 9 mm y la amplitud total visible es cercana a 10 mm, el indice transversal es de orden 0.9. Esa lectura apoya una clasificacion transversal. En el tubo, si la componente paralela asociada a compresion domina la perturbacion medible, el indice longitudinal es el relevante.

La estimacion cuantitativa no pretende medir toda la energia de la onda. Sirve para decidir orientacion dominante. Un indice cercano a uno indica predominio claro; un valor cercano a 0.5 pediria revisar si el modo es mixto o si la medida no separa bien componentes.

## Interpretación

La comparacion muestra por que no basta mirar si hay crestas visibles. La cuerda permite ver desplazamiento perpendicular; el sonido requiere leer compresiones y rarefacciones. Ambos son ondas porque transportan perturbacion, pero el medio participa de manera distinta.

En aplicaciones reales, esta distincion decide que sensor usar. Para una cuerda basta una camara lateral; para sonido se necesita presion o densidad. Clasificar correctamente evita buscar una amplitud visual donde la magnitud fisica relevante es otra.
`;export{e as default};
