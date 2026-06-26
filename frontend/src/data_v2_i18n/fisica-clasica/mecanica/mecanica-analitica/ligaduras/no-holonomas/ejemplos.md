# Ejemplo tipo examen

## Enunciado

Se estudia un sistema donde una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion. El enunciado da datos coherentes para [[Aai]], [[qdot_i]], [[aa]], [[lambda_a]], [[Lagr]], [[Qi]] y pide decidir si el regimen ideal puede explicar el comportamiento observado. No se busca una sustitucion rapida: se debe construir una lectura fisica completa.

## Datos

Las magnitudes se consideran medidas en el mismo sistema de referencia y con unidades SI: [[Aai]], [[qdot_i]], [[aa]], [[lambda_a]], [[Lagr]], [[Qi]], [[dqi]]. La magnitud dominante es [[Aai]]. Los valores numericos se dejan en forma parametrica hasta el final para que la solucion muestre primero la estructura.

## Definición del sistema

El sistema incluye solo las partes que participan en el mecanismo descrito por el leaf. Se excluyen perturbaciones pequenas, perdidas o acoplamientos secundarios mientras no superen la escala principal. Esta frontera evita mezclar datos de otro modelo.

## Modelo físico

El modelo fisico se basa en que Una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion. El punto didactico es entender que no toda condicion diferencial reduce simplemente el numero de coordenadas. Por tanto, [[Aai]] organiza la lectura y las relaciones nucleares del leaf determinan que cantidades pueden compararse.

## Justificación del modelo

El modelo vale porque las correcciones omitidas se mantienen por debajo de la escala dominante y porque el caso limite esperado sigue siendo reconocible. Dejaria de valer si una perturbacion creciera hasta competir con [[Aai]] o si el signo del resultado contradijera el comportamiento observable.

## Resolución simbólica

Se usan las relaciones nucleares:

{{f:ligadura_no_holonoma_lineal}}

{{f:desplazamiento_virtual_compatible}}

{{f:lagrange_dalembert_no_holonomo}}

{{f:potencia_ligadura_ideal}}

Primero se identifica la relacion que define el objeto principal. Despues se aplica el balance que conecta las magnitudes. Finalmente se usa la condicion auxiliar para decidir regimen, compatibilidad o reduccion. Esta secuencia obliga a justificar cada paso.

## Sustitución numérica

Con datos de escala razonable, se sustituye solo despues de cerrar la solucion simbolica. Si la correccion estimada es menor que el 10 % del termino principal, el modelo se acepta como primera aproximacion. Si no, se informa que el resultado es diagnostico de fallo del modelo. La parte numerica debe incluir una comparacion explicita entre contribucion principal y correccion, porque esa razon es la que convierte el calculo en juicio fisico.

## Validación dimensional

Cada termino debe conservar la dimension fisica esperada. Una energia debe leerse como `[M L² T⁻²]`, una fuerza como `[M L T⁻²]`, una velocidad como `[L T⁻¹]` y una aceleracion como `[L T⁻²]`. Si una relacion mezcla dimensiones incompatibles, el error es conceptual antes que aritmetico.

## Interpretación física

El resultado indica como cambia el sistema cuando cambia [[Aai]]. Si [[Aai]] aumenta y el regimen dominante se refuerza, el modelo predice mayor estabilidad, mayor flujo, mayor acoplamiento o mayor restriccion segun el contexto. Si disminuye hasta anularse, debe aparecer un limite simple.

# Ejemplo de aplicación real

## Contexto

Una aplicacion real aparece cuando se comparan datos de laboratorio, simulacion o campo con el modelo ideal del leaf. El docente puede pedir al alumno que estime el termino principal y una correccion secundaria antes de aceptar la conclusion.

## Estimación física

Si la escala principal asociada a [[Aai]] vale aproximadamente 100 unidades y la correccion observable vale entre 3 y 8 unidades, el error relativo queda entre el 3 % y el 8 %. En ese rango la tendencia puede discutirse con el modelo ideal, pero no conviene prometer precision de diseno.

## Interpretación

La lectura real no es el numero aislado. Es la decision: el modelo explica el fenomeno si conserva signo, escala y caso limite. Si esos controles fallan, la aplicacion no invalida la fisica; indica que se necesita el modelo extendido. Ese es el punto que debe evaluar el profesor: el alumno no solo ha usado relaciones, sino que ha decidido si aun describen el sistema real.

Para cerrar el ejemplo, el alumno debe escribir una frase de sensibilidad: si [[Aai]] aumenta un orden de magnitud, la conclusion cambia de forma cualitativa o solo cuantitativa. Esa frase obliga a mirar el resultado como modelo y no como cifra aislada. Tambien debe indicar que dato experimental pediria para confirmar la hipotesis principal.

La resolucion tambien debe incluir una lectura de sensibilidad. Si [[Aai]] se duplica, el alumno debe prever si el cambio esperado es lineal, cuadratico, inverso o cualitativo. Esa frase final es parte de la solucion, porque muestra si se comprende el mecanismo y no solo la sustitucion.

Para completar la validacion, se compara el resultado con dos escenarios: uno donde [[Aai]] se reduce a la mitad y otro donde se duplica. Si la respuesta no cambia de forma compatible con la teoria, el error no esta en la aritmetica sino en la eleccion del modelo. Esta prueba de sensibilidad debe quedar escrita porque muestra si el alumno entiende el control fisico de la solucion.
