# Modelos del pendulo

## Modelo ideal

El modelo ideal describe una masa puntual [[m]] unida a un hilo inextensible de longitud [[L]], sin rozamiento en el pivote ni perdidas por aire. La gravedad [[g]] actua como campo uniforme y el movimiento se restringe a un plano. La variable de estado es el angulo [[theta]], y el torque [[tau]] determina la accion restauradora respecto al equilibrio inferior.

En este marco, la lectura temporal principal usa [[omega]] y [[Tper]] para pequenas oscilaciones. El valor didactico del modelo ideal es separar con claridad parametros del sistema y estado instantaneo: [[L]] y [[g]] fijan el reloj, mientras [[theta]] fija el estado local desde el que se evalua [[tau]].

## Hipótesis

Se asume hilo sin masa relevante, masa concentrada en el extremo, pivote sin friccion dominante y amplitudes pequenas cuando se aplica lectura temporal lineal. Tambien se asume que [[g]] permanece constante durante el ensayo y que el movimiento no recibe forzamiento externo periodico.

Las unidades deben ser coherentes: [[L]] en metros, [[g]] en m/s^2, [[theta]] en radianes cuando se resuelve dinamica angular, [[omega]] en rad/s y [[Tper]] en segundos. Si [[L]] se introduce en centimetros o [[theta]] en grados sin conversion, el resultado puede quedar desplazado por factores grandes.

## Dominio de validez cuantitativo

Como regla practica, la lectura temporal lineal es robusta cuando el angulo maximo se mantiene en un rango pequeno, por ejemplo por debajo de aproximadamente 0.35 rad. En ese rango, el error relativo del periodo suele mantenerse en valores bajos para usos de laboratorio introductorio.

Tambien conviene exigir perdidas pequenas por ciclo, con una reduccion de amplitud moderada respecto a la amplitud inicial. Si la perdida por ciclo supera cerca de 5%, el modelo ideal de conservacion temporal deja de describir bien la evolucion medida. Cuando el error de periodo esperado supera 10%, conviene cambiar de modelo.

## Señales de fallo del modelo

Una senal clara de fallo es que [[Tper]] aumenta de forma apreciable al subir la amplitud inicial. Otra senal es la disminucion rapida de maximos por rozamiento, lo que indica que la aproximacion sin perdidas no representa el sistema real. Tambien falla si el pivote presenta friccion seca significativa o si el hilo cambia su longitud efectiva durante el movimiento.

En medicion, el fallo puede detectarse comparando series temporales con distintas amplitudes y verificando si el periodo converge al valor lineal. Si no converge, el sistema requiere una formulacion no lineal o amortiguada. Esta deteccion temprana evita interpretar como error instrumental lo que en realidad es limite del modelo.

## Modelo extendido o alternativo

El primer modelo extendido incorpora amortiguamiento, permitiendo estudiar decaimiento de amplitud y cambios de fase. Otro modelo extendido mantiene la no linealidad angular completa para amplitudes grandes. Tambien puede incluirse forzamiento periodico para analizar resonancia y sincronizacion con excitaciones externas.

La transicion explicita se resume asi: cuando conviene cambiar de modelo es cuando la comparacion entre medicion y prediccion lineal muestra desvio sistematico mayor que el tolerado por el objetivo experimental o de diseno. Si el interes es estimar solo orden de magnitud del ritmo en pequenas oscilaciones, el ideal basta. Si se necesita predecir detalle temporal en amplitudes altas o en presencia de perdidas, se debe escalar a un modelo extendido.

## Comparación operativa

El modelo ideal responde rapido y con alta interpretabilidad: relaciona [[L]], [[g]], [[omega]] y [[Tper]] sin sobrecarga matematica. Sirve para diseno preliminar de experimentos, calibracion educativa y deteccion de tendencias basicas.

El modelo extendido cuesta mas resolver, pero captura efectos que el ideal no puede reproducir, como dependencia del periodo con amplitud, disipacion por ciclo y respuesta a excitacion externa. Operativamente, la estrategia recomendada es usar primero el ideal como baseline y despues cuantificar el error residual para decidir si la complejidad adicional esta justificada.