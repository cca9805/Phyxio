const a=`# Ejemplo tipo examen

## Enunciado

Un proton entra en una region donde el campo magnetico uniforme es perpendicular a su velocidad. Se quiere estimar la intensidad de la fuerza magnetica, la aceleracion centripeta y el radio de la trayectoria circular. Tambien se pide explicar por que el resultado no significa que el proton gane rapidez por accion directa del campo.

## Datos

- Carga del proton: 1.60e-19 C, positiva.
- Masa del proton: 1.67e-27 kg.
- Rapidez de entrada: 2.00e6 m/s.
- Campo magnetico uniforme: 0.20 T.
- Orientacion: entrada perpendicular al campo, con factor angular maximo.

## Definición del sistema

El sistema es un proton aislado durante el tramo de entrada en el campo. La magnitud [[q]] identifica la carga que interactua con [[B]], [[v]] describe la rapidez de entrada y [[m]] mide la inercia. La respuesta principal es [[F_B]], y de ella se obtienen [[a_c]] y [[r]].

## Modelo físico

El modelo fisico es la parte magnetica de la fuerza de Lorentz aplicada a una carga puntual. Como el movimiento es perpendicular al campo, [[s_theta]] toma su valor maximo y la fuerza magnetica actua como fuerza centripeta. La trayectoria ideal se interpreta mediante [[r]], no mediante una aceleracion tangencial.

## Justificación del modelo

El campo se declara uniforme y la particula se considera aislada, por lo que la desviacion queda dominada por [[F_B]]. El modelo dejaria de valer si hubiera colisiones, si el campo cambiara mucho dentro de una vuelta, si existiera un campo electrico que modificara la energia o si la rapidez exigiera correcciones relativistas.

## Resolución simbólica

Primero se calcula la intensidad de la fuerza magnetica:

{{f:fuerza_magnetica_lorentz}}

Despues se traduce esa fuerza a aceleracion centripeta:

{{f:aceleracion_centripeta_magnetica}}

Finalmente se estima el radio circular asociado al movimiento perpendicular:

{{f:radio_trayectoria_circular}}

En esta resolucion aparecen las magnitudes nucleares [[F_B]], [[q]], [[v]], [[B]], [[s_theta]], [[m]], [[a_c]] y [[r]]. La direccion vectorial se decide al final con el signo positivo de la carga y la regla de la mano derecha.

## Sustitución numérica

Para [[F_B]], multiplicar 1.60e-19 C por 2.00e6 m/s, por 0.20 T y por el factor angular maximo da aproximadamente 6.4e-14 N. Por tanto [[F_B]] es del orden de diez a la menos catorce newtons.

Para [[a_c]], dividir 6.4e-14 N entre 1.67e-27 kg da aproximadamente 3.8e13 m/s². Aunque la fuerza parece pequena, la masa del proton es tan reducida que la aceleracion transversal resulta enorme.

Para [[r]], multiplicar 1.67e-27 kg por 2.00e6 m/s y dividir por el producto de 1.60e-19 C y 0.20 T da aproximadamente 0.104 m. La trayectoria tendria un radio cercano a diez centimetros en esas condiciones.

## Validación dimensional

- Fuerza magnetica: carga por rapidez por campo produce newtons, dimension \`[M L T⁻²]\`.
- Aceleracion centripeta: fuerza dividida entre masa produce metros por segundo cuadrado, dimension \`[L T⁻²]\`.
- Radio circular: masa por rapidez dividida entre carga y campo produce longitud, dimension \`[L]\`.

Las tres dimensiones son coherentes con las magnitudes buscadas. Tambien es razonable que un campo de decimas de tesla produzca radios observables de centimetros a decenas de centimetros para protones rapidos.

## Interpretación física

El resultado indica que [[F_B]] es pequena en escala cotidiana, pero domina el movimiento de una particula microscopica. La clave no es comparar 6.4e-14 N con fuerzas macroscospicas, sino con la [[m]] del proton. Al dividir por una masa tan pequena, la desviacion transversal se vuelve intensa y la trayectoria se curva de forma visible.

Si [[B]] se duplicara y el resto permaneciera igual, [[F_B]] tambien aumentaria y [[r]] disminuiria. Si se duplicara [[v]], la fuerza aumentaria, pero el radio tambien creceria porque la particula tendria mas inercia de movimiento. Esta doble lectura muestra por que no basta decir "mayor rapidez, mayor fuerza"; hay que mirar la forma completa de la trayectoria.

Como [[q]] es positiva, el sentido de curvatura se obtiene directamente con la regla de la mano derecha. Para una carga negativa con el mismo modulo, la intensidad de [[F_B]] y el valor de [[r]] serian iguales, pero la curva se cerraria hacia el lado opuesto. Esa diferencia es la base de muchas tecnicas de separacion de particulas.

# Ejemplo de aplicación real

## Contexto

En un espectrometro de masas simple, iones con una misma rapidez entran en una region con campo magnetico uniforme. La posicion donde impactan depende de su [[r]], por lo que medir la curva permite distinguir particulas con distinta relacion entre [[q]] y [[m]].

## Estimación física

Si dos iones tienen el mismo modulo de [[q]] y la misma [[v]], el ion mas masivo tendra un [[r]] mayor. Si el campo [[B]] aumenta, ambos radios disminuyen y el detector puede hacerse mas compacto. Para campos de decimas de tesla y velocidades de laboratorio, radios de centimetros a metros son fisicamente razonables.

La magnitud que inicia la lectura es [[F_B]], pero la magnitud que suele observar el instrumento es [[r]]. Por eso el diseno combina control de rapidez, intensidad de campo y resolucion espacial del detector.

## Interpretación

La aplicacion real muestra que la fuerza magnetica no se usa solo para "mover" particulas, sino para convertir diferencias invisibles de carga y masa en diferencias visibles de trayectoria. Un radio pequeno indica desviacion fuerte; un radio grande indica que la particula conserva mejor su direccion original.

La interpretacion correcta exige no mezclar modulo y sentido. Dos especies con signos opuestos pueden separarse hacia lados distintos; dos especies con masas distintas pueden separarse por radios distintos. Ambas lecturas salen del mismo modelo, pero responden a preguntas fisicas diferentes.
`;export{a as default};
