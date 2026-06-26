const e=`# Ejemplo tipo examen

## Enunciado

Un rayo de luz viaja por el interior de una fibra de vidrio de indice de refraccion 1.52 y llega a la interfaz con el revestimiento de indice 1.38. El rayo incide formando un angulo de 25 grados con la superficie de la interfaz. Determinar el angulo de incidencia respecto a la normal, el angulo critico de la interfaz y si el rayo sufrira reflexion total interna o se transmitira parcialmente al revestimiento.

## Datos

Indice del nucleo [[n1]] de 1.52. Indice del revestimiento [[n2]] de 1.38. Angulo del rayo con la superficie: 25 grados.

## Definicion del sistema

El sistema es la interfaz entre el nucleo de la fibra optica (medio denso) y el revestimiento (medio menos denso). La normal a la interfaz es perpendicular a la superficie de contacto entre ambos materiales.

## Modelo fisico

Se aplica la optica geometrica en la aproximacion de rayos. La ley de reflexion rige el comportamiento del rayo en la interfaz, y la condicion de reflexion total interna se determina comparando [[theta_i]] con [[theta_c]]. El angulo critico se calcula mediante la formula que relaciona [[theta_c]] con los indices [[n1]] y [[n2]].

## Justificacion del modelo

El modelo es valido porque la fibra optica tiene dimensiones transversales (decenas de micrometros) mucho mayores que la longitud de onda de la luz (cientos de nanometros), y la interfaz es lisa a escala nanometrica. El modelo dejaria de ser valido en fibras monomodo donde los efectos ondulatorios dominan la propagacion.

## Resolucion simbolica

Primero se convierte el angulo dado respecto a la superficie al angulo respecto a la normal:

[[theta_i]] se obtiene como 90 grados menos el angulo con la superficie.

Luego se aplica la formula del angulo critico:

{{f:angulo_critico}}

Finalmente se compara [[theta_i]] con [[theta_c]]: si [[theta_i]] es mayor que [[theta_c]], hay reflexion total.

La ley de reflexion confirma la direccion del rayo reflejado:

{{f:ley_reflexion}}

## Sustitucion numerica

Para [[theta_i]]: 90 menos 25 da 65 grados.

Para [[theta_c]]: el cociente [[n2]] entre [[n1]] es 1.38 dividido entre 1.52, que da aproximadamente 0.9079. El arcoseno de 0.9079 es aproximadamente 65.2 grados.

Comparacion: [[theta_i]] de 65 grados es ligeramente menor que [[theta_c]] de 65.2 grados.

Por tanto [[theta_r]] es 65 grados (igual a [[theta_i]] por la ley de reflexion), pero el rayo no alcanza la condicion de reflexion total porque no supera [[theta_c]].

## Validacion dimensional

Los angulos [[theta_i]], [[theta_r]] y [[theta_c]] son magnitudes adimensionales expresadas en grados (o radianes). Los indices [[n1]] y [[n2]] son adimensionales (cocientes de velocidades). El argumento del arcoseno es adimensional (cociente de dos indices), coherente con la funcion trigonometrica.

## Interpretacion fisica

El resultado muestra que el rayo incide justo por debajo del angulo critico, lo que significa que habra **reflexion parcial y transmision parcial** en la interfaz. Una pequena fraccion de la luz escapara hacia el revestimiento en cada rebote, provocando atenuacion progresiva de la senal a lo largo de la fibra.

Fisicamente, la proximidad entre [[theta_i]] y [[theta_c]] (solo 0.2 grados de diferencia) indica que el sistema opera en el limite de confinamiento. Si el angulo con la superficie fuera 24 grados (es decir, [[theta_i]] de 66 grados), se superaria [[theta_c]] y la reflexion seria total, sin perdida de senal. Este ejemplo ilustra por que el diseno de fibras opticas busca maximizar la diferencia entre [[n1]] y [[n2]]: un contraste mayor reduce [[theta_c]] y facilita el confinamiento total para un rango mas amplio de angulos de entrada.

La sensibilidad es alta: un grado de diferencia en [[theta_i]] decide entre confinamiento total y fuga de luz. Esta es la razon por la que las fibras opticas comerciales usan revestimientos con indice cuidadosamente controlado y nucleos con perfil de indice optimizado.

# Ejemplo de aplicacion real

## Contexto

Un periscopio simple utiliza dos espejos planos inclinados a 45 grados respecto al eje vertical del tubo. Se requiere verificar que un rayo que entra horizontalmente por la apertura superior sale horizontalmente por la apertura inferior, y estimar la perdida angular si uno de los espejos tiene una desviacion de 2 grados respecto a la inclinacion ideal.

## Estimacion fisica

Con espejos a 45 grados exactos, un rayo horizontal incide con [[theta_i]] de 45 grados sobre el primer espejo. Por la ley de reflexion, [[theta_r]] es 45 grados, y el rayo sale vertical (hacia abajo). Al llegar al segundo espejo (tambien a 45 grados), incide con [[theta_i]] de 45 grados y sale horizontal. La desviacion total es de 0 grados respecto a la horizontal de entrada, que es la funcion del periscopio.

Si el primer espejo tiene 2 grados de error (inclinado a 47 grados del eje), el rayo incide con [[theta_i]] de 43 grados sobre la normal local. Por la ley de reflexion, [[theta_r]] es 43 grados. El rayo reflejado se desvia 4 grados respecto a la vertical (doble del error del espejo). Al llegar al segundo espejo correcto, acumula otros 4 grados de desviacion. El rayo de salida forma 4 grados con la horizontal, produciendo una imagen desplazada.

La lente del nucleo de vidrio con [[n1]] de 1.52 y revestimiento de [[n2]] de 1.38 otorga un angulo critico [[theta_c]] de aproximadamente 65 grados, lo que no aplica en este ejemplo de espejos al aire pero contextualiza el contraste entre reflexion en interfaces metalicas (espejos) y dielectricas (fibras).

## Interpretacion

El resultado confirma la regla practica de que un error de alfa grados en la orientacion de un espejo plano produce una desviacion de dos alfa grados en el rayo reflejado. Esta duplicacion se debe a la geometria: al rotar el espejo un angulo, la normal tambien rota ese angulo, y la suma del cambio en incidencia y en reflexion duplica el efecto. En periscopios militares y endoscopios medicos, la tolerancia angular de los espejos es critica y se controla al minuto de arco. El modelo geometrico de reflexion especular predice exactamente estas desviaciones sin necesidad de recurrir a la optica ondulatoria, siempre que los espejos sean planos y lisos a la escala de la longitud de onda.
`;export{e as default};
