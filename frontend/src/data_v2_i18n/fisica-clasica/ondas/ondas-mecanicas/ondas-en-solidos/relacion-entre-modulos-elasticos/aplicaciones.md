# Aplicaciones

## 1. Caracterizacion elastica por ultrasonidos

La medida de las velocidades de onda P y S en un solido permite calcular directamente G (densidad por velocidad S al cuadrado) y K (densidad por velocidad P al cuadrado menos cuatro tercios de G). Con G y K se obtienen E y nu usando las relaciones de conversion. Este metodo es no destructivo, rapido, y proporciona las cuatro constantes elasticas fundamentales a partir de tres medidas (velocidad P, velocidad S, densidad).

Es la tecnica estandar en control de calidad de materiales metalicos, ceramicos y composites. Cualquier desviacion respecto a valores tabulados indica heterogeneidad, defectos internos, anisotropia o cambio de composicion.

Variable dominante: los cocientes [[cociente_g_e]] y [[cociente_k_e]], que se comparan con tablas de materiales conocidos para verificar la identidad y calidad del material.
Limite de validez: el metodo asume isotropia. Si el material es anisotropo, las velocidades dependen de la direccion de propagacion y se obtienen modulos efectivos, no los verdaderos modulos del tensor de rigidez completo.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 1

## 2. Diseño estructural con seleccion de materiales

En ingenieria mecanica, la seleccion de materiales para componentes estructurales requiere conocer la particion entre rigidez a cizalla y rigidez a compresion. Un componente sometido a torsion necesita alto [[modulo_de_cizalla]]; un componente sometido a presion hidrostatica necesita alto [[modulo_de_compresibilidad]]. Las relaciones de conversion permiten estimar ambos a partir de E y nu tabulados, sin realizar ensayos adicionales.

Los diagramas de Ashby (mapas de propiedades de materiales) usan estas relaciones para representar la ubicacion de cada material en el espacio de constantes elasticas. La frontera del espacio factible esta determinada por los limites termodinamicos de [[nu_poisson]].

Variable dominante: [[nu_poisson]], que controla la particion entre G y K para un E dado. Un ingeniero que necesite maximizar G buscara materiales con nu bajo.
Limite de validez: en composites y materiales anisotropos, las relaciones isotropas dan una primera estimacion pero no valores exactos. Se requiere la matriz de rigidez completa.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 2

## 3. Geofisica y sismologia

Las velocidades de ondas sismicas P y S dependen de los modulos elasticos de las rocas. Invirtiendo las formulas de conversion, los sismologos obtienen E, G, K y nu de las capas geologicas a partir de los sismogramas. El cociente de velocidades vP/vS es una funcion univoca de [[nu_poisson]] y se usa como indicador litologico: rocas saturadas de agua tienen nu alto (cercano a 0.5), rocas secas o fracturadas tienen nu mas bajo.

La relacion entre modulos es la herramienta fundamental del analisis AVO (Amplitude Versus Offset), que estima las propiedades elasticas del subsuelo a partir de la variacion angular de la reflexion sismica.

Variable dominante: [[nu_poisson]], obtenido del cociente de velocidades sismicas, es el principal discriminante entre litologias.
Limite de validez: las rocas no son perfectamente isotropas (laminacion, fracturacion). Las relaciones isotropas dan promedios efectivos que pueden diferir de los valores direccionales reales.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 3

## 4. Simulacion por elementos finitos

Los codigos de elementos finitos para solidos isotropos requieren como entrada los parametros de Lame ([[lambda_lame]] y [[modulo_de_cizalla]]) o, equivalentemente, E y nu. Las relaciones de conversion se aplican dentro del propio codigo para transformar los datos de entrada del usuario en los parametros del tensor de rigidez.

La eleccion del par de entrada afecta la estabilidad numerica: para materiales casi incompresibles (nu cercano a 0.5), formular el problema en E y nu produce inestabilidades (K divergente). Es preferible usar una formulacion mixta (presion-desplazamiento) o descomponer la respuesta en parte volumetrica y deviatoria.

Variable dominante: [[lambda_lame]] y [[modulo_de_cizalla]] como entrada directa del tensor constitutivo.
Limite de validez: para materiales no lineales, anisotropos o dependientes de la velocidad de carga, se necesitan modelos constitutivos mas avanzados.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 4

## 5. Diseño de materiales auxeticos

Los materiales auxeticos (nu negativo) se diseñan manipulando la microestructura para lograr que la contraccion lateral se invierta. Las relaciones de conversion predicen las consecuencias mecanicas: un material con nu de -0.5 tiene G igual a 2E/3 y K igual a E/6. La rigidez a cizalla supera a la rigidez volumetrica, lo que es util en aplicaciones de absorcion de energia por cizalla (chalecos antibalas, amortiguadores, filtros acusticos).

El diseño se guia barriendo nu en las formulas y calculando los cocientes G/E y K/E resultantes para encontrar la combinacion optima segun la aplicacion.

Variable dominante: [[nu_poisson]] como parametro de diseño, con los cocientes [[cociente_g_e]] y [[cociente_k_e]] como funciones objetivo.
Limite de validez: los materiales auxeticos reales suelen tener anisotropia significativa y comportamiento no lineal a grandes deformaciones. Las relaciones isotropas son una guia inicial, no un modelo completo.

En todas estas aplicaciones, la utilidad practica del leaf no esta en memorizar una tabla de conversion, sino en decidir que par de constantes conviene medir o especificar. Para ensayos rapidos suele bastar E y nu; para ondas se prefiere G y K porque conectan directamente con velocidades P y S; para simulacion tensorial son naturales [[lambda_lame]] y [[modulo_de_cizalla]]. Esa eleccion reduce errores de escala, evita extrapolar fuera del rango elastico y hace visible cuando un material requiere un modelo anisotropo o no lineal.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 5