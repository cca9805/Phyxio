# Aplicaciones

## 1. Lentes de vidrio en optica geometrica

Una lente funciona porque la luz cambia de velocidad al entrar en el vidrio y vuelve a cambiar al salir. Ese cambio de [[v_m]] se traduce en un cambio de direccion de los frentes de onda y permite concentrar o dispersar rayos. El indice [[indice_de_refraccion_efectivo]] decide cuanta desviacion se obtiene para una geometria dada.

La simplificacion dominante es tratar el vidrio como homogeneo e isotropo para la region visible. En ese contexto, [[lambda_m]] importa para fase e interferencia, pero el diseño geometrico inicial se apoya sobre todo en el indice. Si el material presenta dispersion, distintos colores enfocan en posiciones ligeramente distintas.

En instrumentos de precision, ese pequeño desenfoque cromatico obliga a combinar vidrios diferentes o a añadir correcciones. La propagacion en medios deja de ser una idea abstracta: determina la nitidez, el aumento util y la fidelidad del color.

Variable dominante: [[indice_de_refraccion_efectivo]] controla la reduccion de velocidad y la desviacion optica que permite formar imagenes.
Límite de validez: el modelo simple falla cuando la dispersion cromatica, la absorcion o la anisotropia del material dominan la imagen.

## 2. Fibras opticas de telecomunicacion

En una fibra, el nucleo y el revestimiento tienen indices distintos para mantener la luz guiada. La onda se propaga con una velocidad de fase menor que [[velocidad_de_la_luz_en_el_vacio]] y con una longitud de onda interna [[lambda_m]] menor que la de vacio. Esa escala interna afecta la fase acumulada en largas distancias.

La aplicacion real exige separar estimacion simple y diseño completo. El indice efectivo da el primer retardo, pero los pulsos de datos tambien dependen de dispersion, modos, curvaturas y perdidas. Aun asi, el control de [[indice_de_refraccion_efectivo]] es la base material del guiado.

En enlaces largos, una diferencia pequeña de velocidad se acumula durante kilometros. Por eso las redes de telecomunicacion especifican ventanas espectrales, tipo de fibra y compensacion de dispersion con gran cuidado.

Variable dominante: [[v_m]] gobierna el retardo de fase, mientras [[indice_de_refraccion_efectivo]] controla el guiado mediante contraste entre materiales.
Límite de validez: para pulsos cortos o enlaces largos hay que usar velocidad de grupo, dispersion y atenuacion.

## 3. Prismas y separacion de colores

Un prisma separa colores porque el indice efectivo no es exactamente igual para todas las frecuencias. Cada componente espectral experimenta una velocidad de fase distinta dentro del material y sale con direccion diferente. La luz blanca se descompone porque el medio tiene dispersion.

La lectura por propagacion evita decir que el prisma crea colores. El prisma separa componentes que ya estaban presentes, usando diferencias de [[indice_de_refraccion_efectivo]]. La longitud de onda dentro del material tambien cambia para cada componente, lo que afecta fase y camino optico.

Esta aplicacion es didacticamente potente porque muestra que el indice no es solo una correccion de velocidad. Tambien traduce la respuesta material en una separacion espacial visible, medible y util para espectroscopia.

Variable dominante: [[indice_de_refraccion_efectivo]] dependiente de frecuencia determina la separacion angular de las componentes.
Límite de validez: si el haz no es estrecho, si hay absorcion selectiva o si el material no es isotropo, el modelo de prisma simple es insuficiente.

## 4. Recubrimientos antirreflectantes

Los recubrimientos antirreflectantes usan capas delgadas cuyo espesor se diseña con la longitud de onda dentro del material. La magnitud relevante no es solo la longitud de onda de vacio [[lambda0]], sino [[lambda_m]], porque la fase se acumula dentro de la capa.

La aplicacion combina propagacion y interferencia. Una capa adecuada puede hacer que las reflexiones de dos superficies se compensen parcialmente. Para lograrlo, el indice y el espesor deben estar ajustados a la region espectral que se quiere transmitir.

La misma idea se usa en gafas, objetivos fotograficos, paneles solares y sensores. Un recubrimiento optimizado para visible puede no funcionar igual en infrarrojo, porque la longitud de onda material y el indice efectivo cambian con la region.

Variable dominante: [[lambda_m]] controla la fase acumulada en la capa y el criterio de interferencia.
Límite de validez: el diseño ideal vale para una banda limitada de frecuencias y para angulos cercanos al previsto.

## 5. Medicion de indice en liquidos

Un refractometro estima el indice de un liquido observando como se desvia o se guia la luz al entrar en la muestra. El valor obtenido permite identificar concentracion, pureza o composicion aproximada en alimentos, quimica y control industrial.

La fisica del instrumento es la misma del leaf: el medio modifica [[v_m]] y [[lambda_m]] mediante [[indice_de_refraccion_efectivo]]. Pero la lectura practica exige calibracion, temperatura controlada y longitud de onda conocida. Sin esas condiciones, el indice medido puede no representar la muestra de forma fiable.

En control de calidad, el indice sirve como dato rapido porque pequeñas variaciones de composicion cambian la respuesta optica del liquido. Esa sensibilidad es util, pero tambien exige no confundir una medida de indice con una identificacion quimica completa.

Variable dominante: [[indice_de_refraccion_efectivo]] es la magnitud medida y se interpreta como huella optica del medio.
Límite de validez: el resultado depende de temperatura, frecuencia usada, homogeneidad de la muestra y ausencia de turbidez fuerte.