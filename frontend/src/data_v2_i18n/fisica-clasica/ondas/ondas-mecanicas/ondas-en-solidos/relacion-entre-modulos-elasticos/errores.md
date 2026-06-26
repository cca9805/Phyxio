## Errores conceptuales


### Error 1: Creer que E, G y K son independientes en un solido isotropo

**Por que parece correcto**

El alumno ha visto cada modulo definido por separado (E en traccion, G en cizalla, K en compresion) y asume que medir los tres requiere tres ensayos distintos e independientes.

**Por que es incorrecto**

En un medio isotropo, la simetria esferica reduce el tensor de rigidez a exactamente dos parametros independientes. Conocer E y [[nu_poisson]] es suficiente para calcular [[modulo_de_cizalla]] y [[modulo_de_compresibilidad]] sin ensayos adicionales. Los tres modulos estan vinculados algebraicamente.

**Señal de deteccion**

El alumno propone medir E, G y K por separado y luego verificar si "coinciden", sin reconocer que la coincidencia es una consecuencia obligatoria de la isotropia.

**Correccion conceptual**

En un isotropo, dos constantes determinan todas las demas. Si los tres modulos medidos experimentalmente no cumplen las relaciones algebraicas, la conclusion es que el material no es perfectamente isotropo (anisotropia, heterogeneidad) o que hay error experimental, no que las formulas fallan.

**Mini-ejemplo de contraste**

Se mide E de 200 GPa, G de 77 GPa y nu de 0.30 en un acero. Verificacion: G deberia ser 200/(2 por 1.30) es decir 76.9 GPa. Los 77 GPa medidos concuerdan: el material es isotropo. Si G medido fuera 60 GPa, indicaria textura cristalografica o anisotropia inducida.


### Error 2: Suponer que el coeficiente de Poisson siempre es positivo

**Por que parece correcto**

Todos los materiales comunes (metales, ceramicos, polimeros convencionales) tienen [[nu_poisson]] positivo. El alumno generaliza pensando que nu negativo es imposible.

**Por que es incorrecto**

Existen materiales auxeticos con [[nu_poisson]] negativo, que se expanden lateralmente cuando se estiran. Son estructuras especiales (espumas reentrantes, ciertos cristales, metamateriales) con geometria interna diseñada. Los limites termodinamicos permiten nu desde -1 hasta 0.5.

**Señal de deteccion**

El alumno descarta un resultado de [[nu_poisson]] negativo como "error de calculo" o marca las formulas como invalidas cuando nu es negativo.

**Correccion conceptual**

Las formulas son validas para todo nu en (-1, 0.5]. Un nu negativo simplemente indica un material con mecanismo de deformacion inusual. Las relaciones algebraicas funcionan exactamente igual.

**Mini-ejemplo de contraste**

Un metamaterial auxetico con nu de -0.7 y E de 10 MPa tiene G de 10/(2 por 0.3) que es 16.7 MPa, mayor que E/2. K seria 10/(3 por 2.4) que es 1.39 MPa, mucho menor que E/3. Ambos resultados son fisicamente validos.

## Errores de modelo


### Error 3: Aplicar las relaciones isotropas a un material anisotropo

**Por que parece correcto**

Las formulas de conversion son sencillas y el alumno las aplica a cualquier material solido sin verificar si el material es isotropo.

**Por que es incorrecto**

En materiales anisotropos (composites, madera, cristales no cubicos), el tensor de rigidez tiene mas de dos componentes independientes. Las relaciones G igual a E dividido entre 2(1+nu) dejan de ser validas. Cada direccion puede tener un E diferente y la nocion de un unico nu global no existe.

**Señal de deteccion**

El alumno usa la formula de conversion sobre un composite unidireccional o sobre madera y obtiene resultados inconsistentes con valores medidos en distintas direcciones.

**Correccion conceptual**

Antes de aplicar las formulas de este leaf, verificar que el material es razonablemente isotropo. Si es anisotropo, se necesita la matriz de rigidez completa (hasta 21 constantes independientes para simetria general, 9 para ortotropia, 5 para isotropia transversal).

**Mini-ejemplo de contraste**

Una lamina de composite carbono/epoxi tiene E1 de 135 GPa (direccion de fibras) y E2 de 10 GPa (transversal). Si se intenta usar la formula isotropa con E de 135 GPa y un nu medido de 0.28, se obtiene G de 52.7 GPa, pero el G12 real es solo 5 GPa. La discrepancia revela la anisotropia.

## Errores matemáticos


### Error 4: Usar la formula de K sin verificar que el denominador no se anula

**Por que parece correcto**

El alumno sustituye directamente en K igual a E/(3(1-2nu)) sin examinar el denominador.

**Por que es incorrecto**

Cuando [[nu_poisson]] es exactamente 0.5, el denominador se anula y [[modulo_de_compresibilidad]] diverge. Esto no es un error matematico sino una singularidad fisica real (material incompresible). Si el alumno sustituye nu de 0.5 sin precaucion, obtiene K infinito o una division por cero.

**Señal de deteccion**

El alumno informa de "error de calculo" al sustituir nu de 0.499 o 0.5, o descarta el resultado por ser "demasiado grande".

**Correccion conceptual**

Cuando nu se acerca a 0.5, K crece legitimamente: el material es casi incompresible. No es un error del calculo. Si nu es exactamente 0.5, K es formalmente infinito y el modelo debe interpretarse como un material que no cambia de volumen bajo ninguna presion finita.

**Mini-ejemplo de contraste**

Caucho con E de 3 MPa y nu de 0.4999: K resulta 3/(3 por 0.0002) que es 5000 MPa (5 GPa). Con nu de 0.49999: K resulta 50 GPa. El valor crece pero es fisicamente correcto: el caucho tiene K mucho mayor que G.

## Errores de interpretación


### Error 5: Interpretar lambda como una rigidez fisica directamente medible

**Por que parece correcto**

Lambda tiene unidades de presion (Pa) como E, G y K, y aparece en la misma tabla de constantes elasticas. El alumno asume que corresponde a un ensayo mecanico especifico.

**Por que es incorrecto**

[[lambda_lame]] no corresponde a ningun ensayo puro. Es un coeficiente de la formulacion tensorial que multiplica la dilatacion volumetrica. No se puede medir aisladamente como E (traccion uniaxial) o G (torsion pura) o K (presion hidrostatica). Su utilidad es computacional y teorica, no experimental.

**Señal de deteccion**

El alumno propone un ensayo para "medir lambda" o interpreta su signo como indicador de algun tipo de rigidez especifica.

**Correccion conceptual**

Lambda es un parametro de conveniencia algebraica. Su signo indica el signo de nu (lambda positivo cuando nu positivo, lambda negativo cuando nu negativo, lambda nulo cuando nu nulo). Su valor se calcula siempre a partir de otros modulos, nunca se mide directamente.

**Mini-ejemplo de contraste**

Para acero (nu 0.29), lambda resulta 112 GPa. Para corcho (nu aprox. 0), lambda resulta 0. Para un auxetico (nu -0.3), lambda resulta negativo. En ningun caso lambda tiene una lectura mecanica directa comparable a decir "la rigidez a traccion es E" o "la rigidez a cizalla es G".

## Regla de autocontrol rápido

Verificar siempre que G esta entre 0 y E/2 (igualdad cuando nu es cero), que K es mayor o igual que E/3 (igualdad cuando nu es cero), y que la ecuacion E en funcion de G y K reproduce el valor de E original. Si cualquiera de estas condiciones falla, revisar si nu esta dentro del rango permitido y si la sustitucion numerica es correcta.