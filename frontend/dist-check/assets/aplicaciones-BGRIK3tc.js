const e=`# Aplicaciones

## 1. Tubos de órgano

Variable dominante: [[f_n]]

Límite de validez: la aproximacion ideal funciona si el tubo es estrecho, la temperatura es casi uniforme y la boca se comporta como frontera acustica estable.

Los tubos de organo muestran de forma directa la diferencia entre tubo abierto y tubo cerrado. Un tubo abierto por ambos extremos usa una serie completa de modos; un tubo cerrado por un extremo produce una serie impar y puede dar una nota grave con menor longitud efectiva. Por eso el constructor puede elegir no solo la longitud [[L]], sino tambien el tipo de extremo para controlar tono y timbre.

La magnitud que se escucha es [[f_n]], pero el diseno depende de [[L_eff]], [[v]] y de la familia modal. Un organo real incorpora correcciones de boca, campanas y acoplamiento con el aire de la sala. Aun asi, el modelo ideal explica por que cerrar un extremo no es un detalle menor, sino una decision acustica de primer orden.

En mantenimiento, esta lectura permite diagnosticar desafinaciones. Si todos los tubos se desplazan al subir la temperatura, domina [[v]]. Si solo falla una familia de tubos cerrados, conviene revisar el extremo tapado, la fuga de aire o la longitud efectiva local.

## 2. Flautas y agujeros laterales

Variable dominante: [[L_eff]]

Límite de validez: el modelo simple vale mientras el agujero abierto pueda actuar como nueva frontera acustica dominante.

En una flauta, abrir un agujero lateral reduce la longitud efectiva de la columna de aire. El tubo no necesita acortarse fisicamente; basta con crear una frontera acustica antes del extremo. Al disminuir [[L_eff]], aumenta [[f_n]] y la nota sube. Esta es una aplicacion clara de que la longitud acustica no siempre coincide con la longitud material visible.

La interpretacion requiere cuidado porque los agujeros no son extremos ideales perfectos. Su diametro, posicion y combinacion con otros agujeros modifican la correccion acustica. El modelo de tubo sirve como primera lectura para entender la escala de notas, pero los instrumentos reales necesitan modelos extendidos para afinacion fina.

La aplicacion tambien muestra que tocar un instrumento de viento es controlar fronteras. El musico no cambia la velocidad del sonido de forma significativa; cambia la geometria acustica disponible. Por eso dos digitaciones pueden tener longitudes efectivas parecidas pero timbres distintos.

## 3. Botellas sopladas

Variable dominante: [[lambda_n]]

Límite de validez: una botella solo se parece a un tubo si la geometria del cuello domina de forma compatible; si domina el volumen, hace falta otro modelo.

Al soplar sobre una botella, aparece una resonancia audible. El alumno suele pensar que es simplemente un tubo abierto-cerrado, pero muchas botellas se comportan mejor como resonadores con cuello y cavidad. Aun asi, la idea de frontera acustica ayuda: la boca permite movimiento del aire y la cavidad restringe la respuesta.

La estimacion con [[lambda_n]] y [[L_eff]] puede dar el orden de magnitud, pero el limite de validez es importante. Si la botella tiene cuello corto y volumen grande, la frecuencia depende mucho de la compresibilidad del aire encerrado. La aplicacion enseña que reconocer el modelo es tan importante como aplicar una formula.

En clase, la botella es util precisamente porque obliga a discutir el modelo. Si la prediccion de tubo no coincide con el tono observado, el fallo no es solo numerico: indica que la cavidad tiene otro mecanismo dominante.

## 4. Silbatos y tubos cortos

Variable dominante: [[v]]

Límite de validez: el flujo de aire no debe ser tan turbulento que la frecuencia quede dominada por vortices y no por la columna resonante.

Un silbato usa una columna de aire corta, por eso sus frecuencias suelen ser altas. Como [[v]] en aire esta en el orden de cientos de metros por segundo, reducir [[L_eff]] a pocos centimetros desplaza [[f_n]] hacia kilohertz. Esta lectura explica por que los objetos pequenos producen sonidos agudos.

En silbatos reales, el chorro de aire interactua con bordes y cavidades. El tubo ideal aporta la escala, pero no todos los detalles. Si el flujo cambia mucho, la frecuencia puede saltar de modo o volverse inestable. Por eso la aplicacion combina resonancia de tubo y dinamica de flujo.

Esta lectura sirve para separar tono y volumen. Soplar mas fuerte puede aumentar la amplitud, pero la frecuencia estable sigue ligada a la compatibilidad modal mientras no cambie el regimen de flujo.

## 5. Diagnostico acustico de conductos

Variable dominante: [[L]]

Límite de validez: el conducto debe comportarse aproximadamente como una columna unidimensional y no como una cavidad tridimensional compleja.

Conductos de ventilacion, tubos de ensayo, mangueras y resonadores de laboratorio pueden producir zumbidos cuando una fuente externa excita una frecuencia cercana a [[f_n]]. La longitud fisica [[L]], corregida a [[L_eff]], permite estimar que frecuencias pueden amplificarse. Si el conducto se cierra parcialmente, la serie cambia y aparecen resonancias distintas.

Esta aplicacion es util para detectar ruidos persistentes. En lugar de atribuir el sonido a azar, se compara su frecuencia con el orden esperado por longitud y velocidad del sonido. Si coincide con una resonancia, se puede cambiar longitud efectiva, abrir un extremo, añadir amortiguamiento o desplazar la fuente para reducir la respuesta.

En instalaciones reales, esta estimacion evita intervenciones ciegas. Si el ruido coincide con el primer modo de un conducto largo, anadir material absorbente o modificar una abertura puede ser mas eficaz que sustituir toda la maquina que excita el aire.
`;export{e as default};
