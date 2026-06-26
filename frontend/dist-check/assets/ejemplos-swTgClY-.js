const a=`# Ejemplo tipo examen

## Enunciado

Un sistema de retorno lineal se modela con pulsacion natural [[omega0]] igual a 12 rad/s y coeficiente de amortiguamiento equivalente [[gamma]] igual a 12 1/s. La perturbacion inicial tiene amplitud efectiva [[A]] igual a 0.040 m. Se pide clasificar el regimen, calcular el tiempo caracteristico [[tau]] y estimar la salida [[x]] cuando [[t]] vale 0.25 s. Debe cerrarse con una interpretacion fisica sobre rapidez y ausencia de oscilacion sostenida.

## Datos

Los datos relevantes son [[omega0]] = 12 rad/s, [[gamma]] = 12 1/s, [[A]] = 0.040 m y [[t]] = 0.25 s. Las unidades son coherentes: [[omega0]] y [[gamma]] tienen dimension temporal inversa, [[A]] y [[x]] se expresan en metros, y [[t]] se expresa en segundos. El objetivo no es solo sustituir, sino decidir si el sistema esta en la frontera critica y que predice esa frontera para el transitorio.

## Definición del sistema

El sistema se considera un oscilador lineal de segundo orden con disipacion viscosa equivalente. La salida observable es [[x]], que representa desplazamiento o desviacion respecto al equilibrio. La escala natural del sistema queda resumida en [[omega0]] y la intensidad de disipacion queda resumida en [[gamma]]. La amplitud [[A]] describe la perturbacion inicial que se disipara durante la respuesta libre.

## Modelo físico

Usamos el modelo de amortiguamiento critico porque la pregunta compara directamente [[gamma]] con [[omega0]] y luego solicita una respuesta temporal sin oscilacion sostenida. En este modelo, la igualdad entre ambas escalas coloca al sistema justo en la frontera entre subamortiguado y sobreamortiguado. Despues de clasificar el regimen, [[tau]] actua como reloj de asentamiento y la expresion de [[x]] describe la forma temporal de la caida.

## Justificación del modelo

La eleccion es fisicamente razonable porque el enunciado declara un sistema lineal y no menciona forzamiento externo dominante, rozamiento no lineal ni cambios de parametros durante el intervalo observado. La amplitud inicial es moderada, por lo que se acepta que [[A]] escala la salida sin modificar el regimen. Si aparecieran rebotes claros en los datos, o si [[gamma]] variara con temperatura o velocidad, habria que abandonar esta lectura ideal.

## Resolución simbólica

Primero se verifica la condicion de frontera:

{{f:condicion_critica}}

Como el problema da los mismos valores numericos para [[gamma]] y [[omega0]], el sistema cumple la condicion critica ideal.

Luego se calcula la escala temporal:

{{f:tiempo_caracteristico}}

Finalmente se estima la salida temporal critica:

{{f:solucion_critica}}

El orden importa: no se debe evaluar la salida critica antes de comprobar el regimen. La salida solo representa el caso critico si la igualdad entre escalas disipativa y natural ha sido validada.

## Sustitución numérica

Con [[omega0]] = 12 rad/s, el tiempo caracteristico resulta [[tau]] = 1/12 s, aproximadamente 0.083 s. El instante [[t]] = 0.25 s corresponde a unas tres veces [[tau]], por lo que esperamos que la respuesta haya decaido de forma clara.

Para la salida, el factor adimensional [[omega0]] por [[t]] vale 3. El factor lineal es 1 + 3 = 4 y el decaimiento exponencial asociado es pequeño, aproximadamente 0.050. Multiplicando por [[A]] = 0.040 m, la salida queda alrededor de 0.008 m. El valor exacto no es lo principal: lo importante es que la respuesta ya esta muy por debajo de la amplitud inicial.

## Validación dimensional

La igualdad critica compara dos magnitudes de dimension temporal inversa, por lo que es dimensionalmente coherente. El calculo de [[tau]] invierte una magnitud en 1/s y produce segundos. En la salida temporal, el producto [[omega0]] por [[t]] es adimensional, el factor exponencial tambien es adimensional y [[A]] aporta la unidad de longitud de [[x]].

## Interpretación física

El sistema esta en amortiguamiento critico ideal: retorna sin oscilacion sostenida y con una escala temporal corta. A los 0.25 s, que equivalen a unos tres tiempos caracteristicos, la salida se ha reducido de 0.040 m a un valor del orden de milimetros. Esto indica asentamiento rapido, aunque no instantaneo.

La lectura fisica es que [[gamma]] no debe aumentarse automaticamente. Si se aumentara mucho, se perderia oscilacion, pero tambien podria aumentar la lentitud del retorno. Si se redujera, apareceria tendencia a rebote. El resultado muestra por que el caso critico es una referencia de diseño: combina rapidez y ausencia ideal de sobrepaso.

# Ejemplo de aplicación real

## Contexto

Un equipo diseña un mecanismo de cierre para una tapa ligera de laboratorio. La tapa no debe rebotar al llegar al final de recorrido porque podria dañar un sensor, pero tampoco debe tardar varios segundos en estabilizarse. En una primera calibracion se estima [[omega0]] = 9 rad/s y se ajusta [[gamma]] hasta hacerlo comparable con esa escala natural.

## Estimación física

La primera estimacion consiste en comparar [[gamma]] con [[omega0]]. Si ambos quedan dentro de una tolerancia de diseño cercana, se toma el ajuste como criticamente amortiguado. Despues se calcula [[tau]], que para [[omega0]] = 9 rad/s vale aproximadamente 0.11 s. Eso permite planificar medidas en 0.1 s, 0.3 s y 0.5 s para comprobar que [[x]] cae de forma monotona.

Si la tapa parte de una amplitud efectiva [[A]] de 0.030 m, el modelo predice que en varios multiplos de [[tau]] la salida sera mucho menor que la inicial. Esta lectura no sustituye el ensayo: sirve para decidir que tiempos son razonables y que forma debe tener la curva. Si el registro muestra cruce repetido del equilibrio, el ajuste esta por debajo del umbral critico. Si no rebota pero tarda demasiado, puede estar sobreamortiguado.

## Interpretación

La aplicacion real muestra que amortiguamiento critico no es una etiqueta abstracta. Es una herramienta para decidir si el mecanismo esta calibrado para volver con rapidez sin rebote relevante. La variable [[tau]] conecta el modelo con tiempos de prueba, mientras [[x]] permite verificar la forma de la respuesta. El criterio final debe combinar calculo, grafica y tolerancia del dispositivo.

Si el sistema cambia con temperatura, desgaste o lubricacion, la igualdad entre [[gamma]] y [[omega0]] debe revisarse. Un diseño robusto no se queda en un valor nominal: comprueba que el comportamiento siga siendo aceptable cerca de la frontera critica y dentro del rango real de uso.
`;export{a as default};
