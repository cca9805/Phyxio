const e=`# Aplicaciones

## 1. Motores electricos

En un motor, los conductores de una bobina transportan [[I]] dentro de un [[B]] creado por imanes o electroimanes. Las fuerzas sobre lados opuestos de la bobina pueden formar un par que produce giro.

Variable dominante: [[F_B]] como fuerza mecanica total sobre cada tramo activo.
Límite de validez: el modelo recto sirve por segmentos; para toda la bobina hay que sumar fuerzas y pares.

La aplicacion muestra por que la orientacion no es secundaria. Cambiar el sentido de corriente cambia el sentido de la fuerza, y la conmutacion mantiene el giro en la direccion deseada.

En el diseño real tambien se controla cuanta longitud activa queda dentro del campo. Mas vueltas de bobina aumentan el numero de tramos que contribuyen, pero tambien elevan resistencia y calentamiento. La fuerza util nace de equilibrar [[I]], [[L]], [[B]] y refrigeracion.

La lectura de este leaf ayuda a separar decisiones. Aumentar [[B]] exige mejores imanes o nucleos, aumentar [[I]] exige fuente y disipacion adecuadas, y aumentar [[L]] exige mas cobre dentro de la zona util. Un motor eficiente no maximiza una variable aislada, sino el conjunto completo.

## 2. Altavoces dinamicos

Un altavoz usa una bobina situada en el entrehierro de un iman permanente. La senal electrica cambia [[I]], y la fuerza magnetica mueve el diafragma hacia delante o hacia atras.

Variable dominante: [[I]] como control temporal de la fuerza.
Límite de validez: a grandes amplitudes, la bobina puede salir de la zona de campo uniforme.

La fuerza debe seguir la senal sin deformarse demasiado. Por eso importa que [[B]] sea estable, que la longitud efectiva de bobina sea conocida y que el calentamiento no altere la corriente.

La lectura de [[f_L]] es util para comparar imanes y bobinas antes de fijar el numero de vueltas. Si dos diseños dan la misma fuerza por metro, el de mayor longitud activa empujara mas, pero puede ser mas pesado o disipar mas calor.

La distorsion aparece cuando la fuerza deja de seguir fielmente a la corriente. Eso puede pasar si la bobina se desplaza hacia una zona de campo menor o si el calentamiento reduce la corriente para la misma señal aplicada. Por eso el altavoz combina diseño magnetico y diseño termico.

## 3. Balanzas de corriente

En una balanza de corriente, se mide la fuerza sobre un conductor dentro de un campo conocido. El montaje permite relacionar fuerza mecanica con corriente electrica de forma directa.

Variable dominante: [[L]] como tramo efectivo calibrado.
Límite de validez: el conductor debe permanecer recto y con orientacion estable.

Esta aplicacion es pedagogica porque convierte una magnitud electrica invisible en una lectura de peso o desplazamiento. Si la fuerza no cambia linealmente con [[I]], el montaje revela un fallo de alineacion o de uniformidad.

Tambien permite calibrar campos. Si se conoce [[I]] y [[L]], medir la fuerza ayuda a estimar [[B]]. La orientacion debe quedar bloqueada, porque un pequeno giro modifica [[s_theta]] y cambia la lectura aunque el campo no haya variado.

El valor didactico es que el alumno ve la proporcionalidad sin depender de un modelo invisible. Cambiar la corriente cambia la fuerza, cambiar la longitud activa cambia la fuerza total, y girar el conductor muestra que la geometria es tan importante como el valor numerico del campo.

## 4. Actuadores lineales

Un actuador lineal magnetico usa conductores o bobinas para producir una fuerza controlada sobre una pieza movil. La fuerza aparece en la direccion perpendicular definida por corriente y campo.

Variable dominante: [[f_L]] como fuerza disponible por metro activo.
Límite de validez: si la pieza se desplaza mucho, cambia la geometria del campo.

La ventaja es el control rapido. Una corriente variable permite modular la fuerza sin contacto mecanico directo, siempre que el campo y la refrigeracion mantengan el modelo dentro de su dominio.

En aplicaciones de precision se busca que la relacion entre corriente y fuerza sea repetible. Si el conductor se desplaza hacia una zona de campo menor, la misma corriente ya no produce la misma fuerza. Por eso el recorrido util del actuador se diseña dentro de una region magnetica estable.

La fuerza por longitud permite estimar esfuerzos antes de construir el dispositivo completo. Si [[f_L]] supera lo que el soporte puede tolerar, el problema no se resuelve solo bajando masa: hay que rediseñar campo, corriente o recorrido.

## 5. Barras conductoras sobre railes

En demostraciones de laboratorio, una barra conductora puede apoyarse sobre railes dentro de un campo magnetico. Al cerrar el circuito, la barra recibe fuerza y se desplaza.

Variable dominante: [[B]] como intensidad del entorno magnetico.
Límite de validez: el rozamiento y la resistencia de contacto no deben dominar la dinamica.

El experimento muestra de forma visual que una corriente en un campo puede producir movimiento. Tambien obliga a distinguir fuerza magnetica de efectos termicos, porque una corriente grande puede calentar el conductor.

La barra sobre railes tambien muestra el papel de la longitud efectiva. Solo el tramo que une los railes y cruza el campo participa en la fuerza principal. La resistencia de contacto, el rozamiento y la masa de la barra determinan si la fuerza calculada produce una aceleracion visible.

En todos estos casos, la plantilla de razonamiento es la misma: identificar tramo activo, corriente, campo y orientacion. Lo que cambia es el objetivo tecnico, desde girar un rotor hasta medir una corriente o mover una membrana.

La barra tambien permite estudiar la reaccion del circuito. Al moverse, cambia el estado mecanico del sistema y pueden aparecer efectos de induccion si el montaje se analiza mas alla del regimen inicial. Asi se conecta este leaf con generadores y frenado magnetico.
`;export{e as default};
