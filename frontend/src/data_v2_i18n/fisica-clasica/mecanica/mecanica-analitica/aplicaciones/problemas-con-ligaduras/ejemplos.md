# Ejemplo tipo examen

## Enunciado
Se dispone de una maquina de Atwood ideal con dos masas conocidas [[m1]] y [[m2]] conectadas por cuerda inextensible sobre polea de baja friccion. Se pide determinar la respuesta dinamica compartida del sistema y la fuerza interna de acoplamiento, justificando cada decision de modelado. Ademas, se solicita verificar coherencia por caso limite de simetria y discutir que ocurriria si aparecieran perdidas no despreciables.

## Datos
Datos base del caso: masas medidas en el mismo sistema de unidades, valor de [[g]] declarado por entorno de laboratorio, registro de tiempos y recorridos para contraste posterior, y evidencia de que la cuerda permanece tensa durante toda la trayectoria. Tambien se documenta estado mecanico de la polea para descartar friccion extrema.

## Definición del sistema
El sistema se define como dos cuerpos puntuales en movimiento vertical restringido. Se elige un eje positivo consistente con el sentido esperado del movimiento dominante. La cuerda se considera siempre tensa y sin deformacion relevante. El entorno gravitatorio se representa con [[g]] uniforme en el intervalo analizado. No se incluyen vibraciones laterales ni inercia apreciable de la polea en este nivel de aproximacion. Esta definicion permite tratar el problema con un unico grado de libertad efectivo y con variables internas que emergen del cierre acoplado.

## Modelo físico
El modelo fisico usa segunda ley por cada masa y una condicion de ligadura que impone compatibilidad de movimiento. La restriccion cinemática obliga igualdad de modulos de aceleracion en ambas ramas, por lo que la salida compartida [[a]] se calcula a partir de [[m1]], [[m2]] y [[g]]. La fuerza interna [[T]] transmitida por la cuerda aparece como variable de cierre y no como dato independiente. El modelo representa un caso ideal de acoplamiento mecanico con causalidad distribuida entre ramas.

## Justificación del modelo
La justificacion se apoya en la escala del experimento: cuerda ligera, polea bien mantenida, velocidades moderadas y trayectorias limpias. En estas condiciones, los efectos de segundo orden se pueden omitir sin perder la lectura causal principal. El objetivo del ejercicio es interpretar estructura dinamica compartida, no ajustar microefectos de friccion. Por eso, el modelo ideal es pertinente para resolver y comprender el mecanismo de ligadura. Si al comparar con datos apareciera sesgo sistematico, se habilitaria una extension de modelo en etapa posterior.

## Resolución simbólica
Se escribe una ecuacion dinamica por cada masa con la misma respuesta de movimiento impuesta por la ligadura. Al combinar ambas ecuaciones se elimina la fuerza interna y se obtiene expresion de respuesta comun en terminos de [[m1]], [[m2]] y [[g]]. Luego se sustituye ese resultado en una ecuacion individual para recuperar la fuerza interna de acoplamiento.

{{f:a_comun}}

{{f:T}}

La lectura simbolica clave es que el desbalance entre [[m1]] y [[m2]] impulsa la respuesta, mientras la suma de masas modula inercia total. El segundo resultado muestra que la fuerza interna depende de ambas masas y no de una sola rama.

## Sustitución numérica
Para la sustitucion numerica se usan valores consistentes de masa en el mismo sistema de unidades y valor local razonable de [[g]]. Se reemplazan magnitudes en la expresion de respuesta comun y luego en la expresion de fuerza interna. El reporte numerico debe indicar signo segun la convencion definida al inicio y magnitud con cifras razonables para el contexto experimental. Tambien se recomienda incluir una breve nota de sensibilidad: como variaria el resultado si una masa cambiara levemente. Esa nota ayuda a evitar lectura mecanica y conecta el numero con su causa fisica.

## Validación dimensional
La validacion dimensional exige unidad de aceleracion en la primera relacion y unidad de fuerza en la segunda. Tambien se verifica el limite de simetria: cuando [[m1]] y [[m2]] son iguales, la respuesta comun debe anularse por ausencia de desbalance. Otro control es el sentido fisico: al invertir el orden relativo de masas, la direccion prevista del movimiento tambien se invierte respecto del eje escogido. Si alguno de estos controles falla, se revisa planteamiento antes de aceptar el resultado.

## Interpretación física
Fisicamente, el resultado confirma que el mecanismo dominante no es una fuerza aislada de una rama, sino la compatibilidad impuesta por la ligadura en todo el sistema. Cuando el desbalance relativo crece, la respuesta compartida se intensifica; cuando se reduce, el sistema entra en regimen sensible a efectos residuales. Esta lectura permite anticipar comportamiento cualitativo antes de calcular, y usar el calculo para cuantificar una tendencia ya justificada causalmente.

# Ejemplo de aplicación real

## Contexto
En un banco de ensayo de docencia, un equipo desea comparar diferentes combinaciones de masas para disenar una practica segura y pedagogicamente clara. El objetivo no es maximizar velocidad, sino obtener respuestas medibles con buena trazabilidad y bajo riesgo de golpes al final de recorrido. El montaje utiliza sensores de tiempo y marcas de posicion para estimar la respuesta compartida del sistema. Se registra ademas la condicion de mantenimiento de polea para valorar si el modelo ideal sigue siendo apropiado.

## Estimación física
La estimacion fisica parte de orden de magnitud. Si las masas son casi iguales, se espera respuesta lenta y mayor sensibilidad a rozamiento residual. Si la diferencia crece, la respuesta aumenta y conviene ampliar margen de seguridad en recorrido libre. Con base en ese preanalisis, se seleccionan combinaciones de [[m1]] y [[m2]] que entreguen tiempos suficientemente largos para medicion repetible. Luego se contrasta la prediccion del modelo con datos observados para detectar sesgo. Si la discrepancia es pequena y no sistematica, el montaje se considera apto para actividad docente de nivel base.

## Interpretación
La interpretacion final debe explicar por que el sistema responde asi, no solo cuanto vale un numero. En este caso, la ligadura convierte la diferencia de cargas en respuesta compartida y fuerza interna de acoplamiento. La comparacion entre prediccion y medicion permite decidir si el modelo ideal basta o si se requiere extenderlo por no idealidades. Esta decision cierra el ciclo didactico completo: definir, modelar, estimar, verificar y justificar alcance.

