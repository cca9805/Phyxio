const e=`# Aplicaciones

## 1. Cuenta sobre guia sin rozamiento

Variable dominante: [[Wv]]

Límite de validez: guia ideal, contacto permanente y ausencia de rozamiento tangencial.

Una cuenta que se desliza sobre una guia muestra la utilidad directa del principio. La normal de la guia existe, pero no realiza trabajo virtual sobre el desplazamiento permitido [[dr]]. El balance se centra en las fuerzas activas [[F]] y en el termino inercial asociado a [[m]] y [[a]].

Esta aplicacion permite explicar que una fuerza puede sostener una ligadura sin aparecer en la ecuacion reducida. El alumno ve que la geometria decide los desplazamientos admisibles y que la dinamica solo se proyecta sobre esos desplazamientos.

## 2. Pendulo ideal

Variable dominante: [[Qj]]

Límite de validez: cuerda inextensible, masa puntual y rozamiento despreciable.

En el pendulo ideal, la tension mantiene constante la distancia al punto de suspension. Si se usa el angulo como [[qi]], el desplazamiento virtual es angular y la tension no aporta trabajo virtual. La gravedad, en cambio, si proyecta sobre la coordenada y produce una fuerza generalizada.

El valor didactico es alto porque evita una confusion frecuente: no se elimina la tension porque sea pequena, sino porque su trabajo virtual compatible es nulo. Despues puede calcularse si se quiere estudiar rotura de la cuerda o fuerza sobre el soporte.

## 3. Maquina de Atwood ideal

Variable dominante: [[Feff]]

Límite de validez: cuerda inextensible y sin masa, polea ideal y ausencia de deslizamiento.

En una maquina de Atwood, elegir una coordenada compatible con la cuerda permite reducir el sistema. Las tensiones internas pueden cancelarse en el trabajo virtual porque actuan como reacciones ideales de la ligadura. La aceleracion queda determinada por el desequilibrio de pesos y por la inercia total.

La aplicacion muestra que D'Alembert no es solo una tecnica abstracta. Es una forma de decidir que fuerzas internas no hacen falta para obtener la evolucion. Si la polea tiene rozamiento o inercia apreciable, el limite de validez se rompe y el modelo debe ampliarse.

## 4. Robotica y articulaciones

Variable dominante: [[Qj]]

Límite de validez: articulaciones modeladas como ligaduras ideales y fuerzas proyectables sobre coordenadas articulares.

En robotica, las reacciones internas de una articulacion pueden ser numerosas. Para calcular el movimiento, suele interesar mas el torque generalizado que mueve una coordenada articular. El trabajo virtual permite pasar de fuerzas aplicadas a aportes [[Qj]] sin resolver primero cada contacto interno.

La utilidad practica esta en separar control y estructura. Las reacciones importan para dimensionar piezas, pero la ecuacion de movimiento puede escribirse en coordenadas generalizadas. Esta separacion reduce complejidad y mejora la interpretacion fisica del modelo.

## 5. Elementos finitos y formulaciones debiles

Variable dominante: [[dr]]

Límite de validez: pequenas variaciones compatibles y modelo continuo dentro del rango elastico o dinamico declarado.

En mecanica computacional, el trabajo virtual es la base de muchas formulaciones debiles. En vez de exigir equilibrio punto a punto de forma fuerte, se prueba el equilibrio contra desplazamientos virtuales admisibles. Aunque este leaf no desarrolla elementos finitos, introduce la idea fisica que los sostiene.

El profesor puede usar esta aplicacion para conectar mecanica analitica con ingenieria real. El criterio no es memorizar una suma, sino entender que las ecuaciones se validan frente a variaciones compatibles. Esa forma de pensar aparece en estructuras, vibraciones, medios continuos y simulacion numerica.

La misma lectura tambien sirve para diagnosticar modelos mal planteados. Si el desplazamiento virtual elegido no pertenece al sistema, la aplicacion deja de ser valida aunque la expresion algebraica parezca correcta. Si una reaccion interna realiza trabajo virtual, debe permanecer en el balance o transformarse en una fuerza generalizada. Esta vigilancia convierte el principio en una herramienta de modelado y no solo en una tecnica de simplificacion.

En todos estos usos, el criterio comun es la compatibilidad. Una aplicacion mecanica puede tener muchas fuerzas visibles, pero solo las que proyectan sobre desplazamientos admisibles entran en el trabajo virtual efectivo. Esta idea ayuda a ordenar problemas con muchos contactos, apoyos o articulaciones. Primero se decide que movimientos virtuales permite el sistema; despues se pregunta que agentes pueden hacer trabajo en ellos. La secuencia evita ecuaciones largas con incognitas innecesarias y conserva una lectura fisica clara.

Para cerrar la aplicacion, conviene subrayar que el principio no sustituye al analisis de esfuerzos internos cuando estos son el objetivo. En una estructura, un robot o una maquina, las reacciones eliminadas pueden ser decisivas para diseno, seguridad o desgaste. D'Alembert solo dice que, para obtener la evolucion en coordenadas compatibles, no siempre deben entrar como incognitas iniciales. Esa diferencia entre calcular movimiento y dimensionar componentes es una competencia profesional importante.

En clase, esta distincion permite proponer dos fases de trabajo: primero obtener el movimiento reducido, despues recuperar las reacciones si el problema las pide. Asi el alumno no confunde simplificacion dinamica con perdida de informacion. El metodo conserva la posibilidad de volver al sistema completo cuando la pregunta cambia.
`;export{e as default};
