# Modelos de velocidad orbital

## Modelo ideal
El modelo ideal de velocidad orbital asume que un cuerpo de masa despreciable respecto de la [[M]] central se mueve bajo una fuerza gravitatoria puramente central. En ese marco, la orbita circular queda determinada por [[r]] y la masa central, y la [[v_orb]] se obtiene sin introducir terminos de rozamiento ni empujes externos continuos. Este modelo es extremadamente util porque captura el nucleo fisico del problema y ofrece predicciones limpias para escalas de primer orden.

Tambien se considera que la fuente gravitatoria es esfericamente simetrica, de modo que la dinamica depende solo de la distancia radial. Esta simplificacion permite usar [[mu]] como parametro compacto y construir comparaciones entre orbitas distintas sin rehacer derivaciones completas. En aplicaciones educativas, esta idealizacion es la puerta de entrada para entender por que orbita baja implica mayor rapidez y menor periodo.

## Hipótesis
Hipotesis 1. La [[M]] central domina el sistema, por lo que la masa del satelite no altera significativamente el campo.

Hipotesis 2. No hay fuerzas disipativas relevantes, como arrastre atmosferico apreciable o frenado por interaccion con medio.

Hipotesis 3. No se consideran perturbaciones fuertes de terceros cuerpos durante la escala temporal analizada.

Hipotesis 4. La aproximacion newtoniana es suficiente, es decir, no se requieren correcciones relativistas para el objetivo del problema.

Hipotesis 5. Los parametros se expresan en unidades coherentes, especialmente [[r]] en metros y [[M]] en kilogramos, para evitar incoherencias dimensionales.

Estas hipotesis no son adorno. Funcionan como contrato de validez. Si se incumplen, el modelo puede seguir siendo pedagogicamente orientativo, pero deja de ser cuantitativamente fiable para toma de decisiones finas.

## Dominio de validez cuantitativo
El modelo ideal suele funcionar bien en orbitas donde el arrastre atmosferico es pequeno frente a la aceleracion gravitatoria media. En practicas introductorias, esto se cumple para gran parte de orbitas no extremadamente bajas y para escalas de tiempo donde perturbaciones acumuladas aun no dominan.

Un criterio operativo simple es exigir que la aceleracion de perturbacion cumpla a_pert < 0.05 * a_grav durante la ventana de analisis. Tambien puede usarse un control de orden de magnitud: si la deriva de periodo por vuelta es menor que 1e-3 respecto del valor ideal, la aproximacion de dos cuerpos suele ser suficiente para decisiones preliminares.

Tambien es valido cuando la diferencia de masa entre cuerpo central y satelite es muy grande. En ese caso, tratar la fuente como fija produce errores menores en comparacion con la precision buscada en cursos de fundamentos.

En terminos energeticos, la expresion de [[E]] y la ecuacion vis viva conservan utilidad mientras la dinamica sea aproximadamente kepleriana. Si el sistema entra en regimen muy perturbado, las magnitudes siguen siendo descriptivas, pero la prediccion puntual puede requerir integracion numerica completa.

## Señales de fallo del modelo
Senal 1. El modelo predice una orbita estable, pero la trayectoria observada decae rapidamente. Esto sugiere arrastre no despreciable.

Senal 2. La comparacion entre datos medidos y calculados muestra derivas sistematicas no explicables por redondeo. Puede haber oblaticidad, perturbacion de terceros cuerpos o empujes no modelados.

Senal 3. Se obtiene un valor de [[v_orb]] coherente, pero el periodo real no coincide de forma sostenida. Esto indica que la geometria real no es circular o que la dinamica no es estrictamente de dos cuerpos.

Senal 4. Aparecen inconsistencias de energia al usar [[E]]: el signo no concuerda con el regimen observado. En ese caso, hay error de datos o el modelo base se quedo corto.

## Modelo extendido o alternativo
Una extension natural incorpora perturbaciones: arrastre atmosferico, terminos geopotenciales y accion de terceros cuerpos. Este enfoque exige ecuaciones diferenciales con integracion temporal y, con frecuencia, actualizacion de parametros en cada paso.

La transicion de modelo debe hacerse cuando se detecta cualquiera de estas condiciones: a_pert >= 0.05 * a_grav, deriva acumulada de fase superior al margen de mision, o discrepancia sistematica entre telemetria y prediccion ideal en mas de tres pasos consecutivos de control.

Otra alternativa es trabajar con elementos orbitales osculadores y propagadores semianaliticos. Para cursos iniciales puede ser excesivo, pero en aplicaciones reales ofrece balance entre costo computacional y fidelidad.

En entornos de alta precision, la inclusion de correcciones relativistas y modelos de no esfericidad deja de ser opcional. Sin embargo, incluso esos modelos avanzados usan el caso ideal como referencia para diagnosticar que parte del error viene de fisica omitida y que parte proviene de datos o unidades.

## Comparación operativa
Modelo ideal:
- Ventaja principal: claridad conceptual y calculo rapido.
- Costo: bajo.
- Uso recomendado: aprendizaje, estimacion preliminar, chequeo de coherencia.

Modelo extendido:
- Ventaja principal: mejor ajuste a datos reales y prediccion de largo plazo.
- Costo: alto en datos, tiempo y procesamiento.
- Uso recomendado: diseno de mision, navegacion precisa, control operacional.

La comparacion operativa no busca reemplazar uno por otro, sino entender su rol complementario. El modelo ideal ordena la intuicion y fija escalas; el modelo extendido corrige desviaciones cuando la realidad exige detalle adicional.