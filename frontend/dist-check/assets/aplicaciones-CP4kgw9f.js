const e=`## 1. Arranque de un rotor industrial\r
\r
En el arranque de un rotor industrial, la ecuacion fundamental sirve para decidir si el motor disponible puede llevar el conjunto a la velocidad objetivo en el tiempo pedido por proceso. La pregunta no es solo cuanto torque entrega el motor, sino si ese torque es suficiente para vencer la inercia rotacional del rotor y de los elementos acoplados. En mantenimiento y diseño preliminar, esta lectura evita elegir un actuador por potencia nominal sin comprobar la respuesta transitoria del sistema.\r
\r
La aplicacion tambien permite comparar rediseños. Si se aligera el rotor, la inercia baja y el mismo motor puede acelerar mas rapido. Si el rotor crece en radio, la inercia aumenta y el tiempo de arranque se alarga aunque la masa total no cambie demasiado. La ecuacion fundamental resume esa sensibilidad de forma limpia.\r
\r
Variable dominante: momento de inercia total del conjunto giratorio.\r
Límite de validez: deja de ser suficiente si aparecen elasticidad del eje, saturacion del motor o torques resistentes comparables al torque disponible.\r
\r
## 2. Frenado de una rueda o disco\r
\r
En frenado, la ecuacion fundamental permite pasar de una intuicion cualitativa a una estimacion util: cuanto torque resistente hace falta para obtener una desaceleracion angular concreta. Esto es relevante en ruedas de maquinaria, discos de freno, mesas giratorias y sistemas de parada de emergencia. El objetivo no es solo detener el giro, sino hacerlo dentro de un tiempo o distancia compatible con seguridad.\r
\r
La clave fisica es que un sistema con mucha inercia puede almacenar un estado rotacional importante incluso aunque su velocidad no parezca extrema. Por eso, cuando el ingeniero evalua frenos, necesita mirar la relacion entre torque de frenado e inercia del conjunto, y no quedarse solo con la intuicion de que un disco grande gira fuerte.\r
\r
Variable dominante: torque resistente realmente disponible durante la maniobra de frenado.\r
Límite de validez: el modelo simple falla si el coeficiente de friccion cambia mucho con temperatura, si hay deslizamiento complejo o si el torque de frenado no puede tratarse como aproximadamente constante.\r
\r
## 3. Medicion experimental de inercia\r
\r
En laboratorio, la ecuacion fundamental es una herramienta de medicion. Si se aplica un torque conocido y se observa la respuesta angular, puede inferirse la inercia del sistema. Esto es especialmente util cuando la geometria del objeto es irregular o cuando no conviene estimar la inercia pieza por pieza.\r
\r
La potencia didactica de esta aplicacion es alta porque obliga a leer la ecuacion en sentido inverso. En lugar de usar la inercia para predecir la respuesta, se usa la respuesta para reconstruir la inercia. El alumno entiende entonces que la ecuacion no es una receta unica, sino un vinculo fisico que puede servir tanto para prediccion como para identificacion experimental.\r
\r
Variable dominante: calidad de la medida de aceleracion angular.\r
Límite de validez: la estimacion deja de ser fiable si la friccion del eje, la elasticidad del hilo o los retrasos de sensor tienen un peso comparable al torque aplicado.\r
\r
## 4. Control de actitud con rueda de reaccion\r
\r
En una rueda de reaccion de satelite, la ecuacion fundamental ayuda a predecir que respuesta angular se consigue en la plataforma al acelerar la rueda interna. La utilidad practica es inmediata: permite estimar cuanta maniobra de orientacion puede lograrse con un actuador dado y cuanto tarda en producirse una correccion de actitud.\r
\r
Esta aplicacion obliga a respetar una idea importante: el mismo torque que acelera la rueda interna reorganiza el estado rotacional del satelite en sentido opuesto. La ecuacion fundamental no se usa aqui como formula aislada, sino como parte de una lectura dinamica del conjunto acoplado.\r
\r
Variable dominante: inercia efectiva del satelite respecto al eje de control.\r
Límite de validez: hay que salir del modelo simple si existen combustibles con movimiento interno, apendices flexibles o torques externos comparables a los del actuador.\r
\r
## 5. Seleccion de un cabezal de maquina\r
\r
En maquinas herramienta, la ecuacion fundamental sirve para balancear diseño mecanico y exigencia del motor. Un cabezal mas pesado o con radio mayor puede aportar estabilidad, pero tambien exige mas torque para el mismo tiempo de arranque. Esa tension entre rigidez y agilidad es un problema real de seleccion de componentes.\r
\r
La ecuacion ayuda a convertir esa discusion en un criterio tecnico. Permite comparar variantes de diseño y ver cual de ellas da un margen razonable para acelerar, mantener velocidad y frenar sin sobredimensionar motor y freno a la vez. Asi, una ley fisica simple se convierte en herramienta de decision de ingenieria.\r
\r
Tambien ayuda a comunicar decisiones entre diseño mecanico y control, porque traduce cambios de geometria en consecuencias dinamicas comprensibles por todo el equipo tecnico.\r
\r
Variable dominante: compromiso entre inercia rotacional del cabezal y tiempo de respuesta exigido.\r
Límite de validez: el modelo debe ampliarse si aparecen vibraciones estructurales, flexion de herramienta o cambios fuertes de carga durante el proceso.`;export{e as default};
