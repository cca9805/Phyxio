## Contexto conceptual

La conducción es una forma de transferencia térmica que aparece cuando dos zonas de un cuerpo, o dos cuerpos en contacto, no tienen la misma [[temperatura_caliente]] y [[temperatura_fria]]. Antes de hablar de motores, edificios o electrónica, la idea básica es sencilla: la energía microscópica se transmite desde regiones más agitadas hacia regiones menos agitadas mediante choques e interacciones internas. En sólidos metálicos intervienen vibraciones de la red y electrones libres; en aislantes predominan las vibraciones internas del material. El fenómeno no necesita desplazamiento macroscópico de materia, por eso se distingue de la convección.

Históricamente, la conducción fue una puerta de entrada a la física del calor como proceso cuantificable. La pregunta práctica era cómo comparar una pared, una varilla metálica, una manta o una placa de vidrio. Esa comparación exige mirar [[conductividad_termica]], [[area]], [[espesor]] y [[diferencia_temperatura]] como piezas de un mismo sistema. El objetivo del leaf es leer cuándo aparece [[potencia_termica]], cuándo interesa [[flujo_calor]], cómo se acumula [[calor_transferido]] durante un periodo de [[tiempo]], y por qué la [[resistencia_termica]] resume la oposición al paso térmico.

## 🟢 Nivel esencial

La conducción puede imaginarse como un paso de energía de mano en mano dentro del material. Si una cara está asociada a mayor temperatura y la otra a menor temperatura, la energía tiende a cruzar desde la zona caliente hacia la zona fría. La diferencia detemperatura actúa como empuje térmico: cuando esa separación térmica es pequeña, el intercambio es débil; cuando es grande, el material recibe una invitación más intensa a transportar energía. Esta descripción no depende todavía de números concretos, sino de una lectura física: el calor no aparece porque sí, aparece porque existe una desigualdad térmica mantenida.

Un metal y una madera pueden tener el mismo [[espesor]] y la misma porción de área, pero comportarse de forma muy distinta. La clave está en la [[conductividad_termica]], que expresa la facilidad microscópica con la que el material deja pasar energía. Un material con alta [[conductividad_termica]] permite un tránsito rápido; uno con baja [[conductividad_termica]] frena el paso y funciona como aislante. El [[flujo_calor]] describe cuánto paso térmico corresponde a cada porción de superficie, mientras que la [[potencia_termica]] mira el conjunto completo. Si el proceso dura más, se acumula más [[calor_transferido]]. La resistencia al paso térmico ofrece la lectura inversa: no pregunta cuánto conduce el material, sino cuánto se opone.

La geometría cambia mucho la historia. Una pared gruesa aumenta el recorrido interno y hace que la variación de temperatura interna sea más suave para la misma separación térmica. Una superficie amplia abre más camino simultáneo para el tránsito energético. Por eso, en conducción, no basta decir que un material es bueno o malo conduciendo: también hay que saber por dónde pasa el calor, cuánto camino recorre y durante cuánto, se mantiene la situación.

## 🔵 Nivel formal

{{f:diferencia_temperatura}}

{{f:gradiente_temperatura_1d}}

{{f:ley_fourier_conduccion_1d}}

{{f:flujo_calor_conduccion}}

{{f:flujo_potencia_area}}

{{f:calor_potencia_tiempo}}

{{f:resistencia_termica_conduccion}}

{{f:potencia_resistencia_termica}}

en líneas propias)

El nivel formal organiza la conducción en relaciones entre magnitudes. Primero se define la [[diferencia_temperatura]] entre la [[temperatura_caliente]] y la [[temperatura_fria]]. Esta magnitud concentra el desequilibrio térmico que impulsa el proceso. Si la [[diferencia_temperatura]] se reparte a lo largo de un [[espesor]], aparece el [[gradiente_temperatura]], que indica cuánto cambia la temperatura por unidad de longitud. Cuando el material se considera homogéneo y el proceso es unidimensional, la [[conductividad_termica]] conecta ese cambio espacial con el transporte térmico.

{{f:diferencia_temperatura}}

La relación espacial se expresa mediante:

{{f:gradiente_temperatura_1d}}

La ley de Fourier para una capa plana permite estimar la [[potencia_termica]] que atraviesa el conjunto:

{{f:ley_fourier_conduccion_1d}}

Si interesa la transferencia por unidad de [[area]], se usa el [[flujo_calor]]:

{{f:flujo_calor_conduccion}}

También puede obtenerse el [[flujo_calor]] a partir de la [[potencia_termica]] total y la [[area]] atravesada:

{{f:flujo_potencia_area}}

Cuando la [[potencia_termica]] se mantiene durante un [[tiempo]], el resultado acumulado es el [[calor_transferido]]:

{{f:calor_potencia_tiempo}}

La misma física puede leerse con [[resistencia_termica]], útil cuando se comparan capas o se piensa en aislamiento:

{{f:resistencia_termica_conduccion}}

Con esa lectura, la [[potencia_termica]] se obtiene dividiendo el empuje térmico por la oposición térmica:

{{f:potencia_resistencia_termica}}

Estas relaciones no son listas aisladas. Juntas dicen que la conducción crece con [[conductividad_termica]], [[area]] y [[diferencia_temperatura]], pero disminuye si aumenta [[espesor]]. Además, separan tres preguntas distintas: cuánta energía total se transfiere, con qué rapidez ocurre y qué intensidad superficial tiene el paso térmico.

## 🔴 Nivel estructural

Estructuralmente, el modelo de conducción de este leaf trabaja como una arquitectura de capas: material, geometría, salto térmico y duración. El primer nivel es material, dominado por [[conductividad_termica]]. El segundo es geométrico, controlado por [[area]] y [[espesor]]. El tercero es térmico, marcado por [[temperatura_caliente]], [[temperatura_fria]], [[diferencia_temperatura]] y [[gradiente_temperatura]]. El cuarto es temporal, donde [[tiempo]] convierte una rapidez en [[calor_transferido]]. Separar estas capas evita errores frecuentes: cambiar el material no es lo mismo que cambiar la superficie, y aumentar el grosor no equivale a reducir la temperatura de una cara.

El modelo supone que el calor viaja de forma aproximadamente unidimensional. Eso significa que las líneas de paso térmico son casi paralelas y que las pérdidas laterales no dominan. También supone propiedades constantes: si la [[conductividad_termica]] cambia mucho con la temperatura, la lectura lineal se vuelve aproximada. La [[resistencia_termica]] ayuda a detectar esta estructura porque agrupa la dificultad geométrica y material en una sola magnitud operativa. Esta simplificación es muy potente para paredes, placas, ventanas, aislantes y disipadores, pero pierde precisión cuando hay esquinas, contactos imperfectos, radiación dominante o convección intensa en las superficies.

Desde el punto de vista práctico, el modelo enseña a mirar el sistema antes de calcular. Una placa delgada con gran [[area]] y alta [[conductividad_termica]] puede transmitir mucha [[potencia_termica]], aunque la [[diferencia_temperatura]] no sea extrema. Una capa gruesa y poco conductora puede reducir drásticamente el [[flujo_calor]]. El papel del cálculo no es sustituir esta lectura, sino hacerla precisa. Por eso el resultado debe interpretarse siempre junto con el contexto físico, las unidades y las hipótesis de validez.

## Interpretación física profunda

La conducción no es simplemente “calor que pasa”. Es una respuesta del material a una desigualdad térmica sostenida. La [[temperatura_caliente]] y la [[temperatura_fria]] no son etiquetas decorativas: establecen una dirección espontánea. La [[diferencia_temperatura]] mide la intensidad de esa desigualdad, mientras que el [[gradiente_temperatura]] traduce esa diferencia a una caída espacial. Si el mismo salto térmico ocurre en poco [[espesor]], la variación interna es más abrupta y el transporte se vuelve más intenso.

La [[potencia_termica]] indica rapidez global, el [[flujo_calor]] indica intensidad por superficie, y el [[calor_transferido]] indica acumulación durante un [[tiempo]]. La [[resistencia_termica]] une la intuición de aislamiento con el cálculo: una resistencia alta significa que hace falta una separación térmica mayor para conseguir el mismo paso de energía.

## Orden de magnitud

En materiales aislantes habituales, [[conductividad_termica]] < 1 W/(m·K). En muchos metales, [[conductividad_termica]] > 10 W/(m·K). Para una pared doméstica, [[espesor]] > 0,01 m y normalmente [[area]] > 1 m². En una estimación razonable de edificio, [[diferencia_temperatura]] < 50 K suele ser más realista que diferencias extremas. Un aislamiento eficaz busca [[resistencia_termica]] > 1 K/W en elementos pequeños o valores equivalentes altos por unidad de superficie. Si el [[flujo_calor]] > 1000 W/m² en un cerramiento ordinario, conviene revisar unidades, material y geometría.

## Método de resolución personalizado

Primero identifica qué se pide: [[calor_transferido]], [[potencia_termica]], [[flujo_calor]], [[gradiente_temperatura]] o [[resistencia_termica]]. Después separa datos térmicos, datos geométricos y datos temporales. Convierte [[area]] a metros cuadrados, [[espesor]] a metros y [[tiempo]] a segundos. Calcula o revisa la [[diferencia_temperatura]] con cuidado, porque de ella nacen casi todos los resultados.

A continuación decide si conviene una lectura de potencia total, flujo por superficie o resistencia. Usa [[potencia_termica]] cuando quieras saber cuánta energía cruza por segundo el conjunto. Usa [[flujo_calor]] cuando quieras comparar intensidad superficial. Usa [[resistencia_termica]] cuando el problema suene a aislamiento o a comparación de capas.

## Casos especiales y ejemplo extendido

Si [[temperatura_caliente]] y [[temperatura_fria]] son muy parecidas, la [[diferencia_temperatura]] es pequeña y la conducción neta puede ser despreciable. Si el [[espesor]] aumenta mucho, la capa se comporta mejor como barrera. Si la [[area]] aumenta, la potencia total puede crecer aunque el flujo por unidad de superficie no cambie. En una placa metálica delgada, una pequeña [[diferencia_temperatura]] puede bastar para producir una [[potencia_termica]] apreciable; en un panel aislante grueso, incluso una diferencia mayor puede conducir poco.

Imagina una puerta con una placa interior y una exterior. Si se cambia el material por otro con menor [[conductividad_termica]], se reduce el paso térmico. Si además aumenta el [[espesor]], sube la [[resistencia_termica]]. El resultado esperado es menor [[flujo_calor]] y, durante el mismo [[tiempo]], menor [[calor_transferido]].

## Preguntas reales del alumno

¿Por qué una cuchara metálica se calienta más deprisa que una de madera? Porque su [[conductividad_termica]] es mayor y permite que la energía viaje con menos oposición interna.

¿Por qué importa tanto el grosor del aislante? Porque el [[espesor]] alarga el camino térmico y reduce el [[gradiente_temperatura]] para una misma [[diferencia_temperatura]].

¿La potencia y el calor son lo mismo? No. La [[potencia_termica]] mide ritmo de transferencia, mientras que el [[calor_transferido]] mide energía acumulada durante un [[tiempo]].

## Conexiones transversales y rutas de estudio

La conducción conecta con la termodinámica porque describe cómo se transporta energía entre sistemas a distinta temperatura. También se relaciona con ingeniería de materiales, eficiencia energética, electrónica y geofísica. La idea de [[resistencia_termica]] anticipa modelos de capas y analogías con circuitos eléctricos. El [[flujo_calor]] permite comparar superficies muy distintas sin confundir tamaño con intensidad. Para estudiar después, conviene enlazar este leaf con convección, radiación, equilibrio térmico y capacidad calorífica.

## Síntesis final

La conducción describe el transporte de energía térmica dentro de un material debido a una diferencia de temperatura. Su lectura combina material, geometría y duración. Un buen análisis distingue el ritmo global, la intensidad superficial y la energía acumulada. La clave no es memorizar relaciones, sino entender qué magnitud responde a cada pregunta física: qué empuja, qué se opone, por dónde pasa y durante cuánto [[tiempo]] ocurre.