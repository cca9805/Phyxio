const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una varilla delgada de longitud 2.0 m se coloca sobre el eje horizontal. El origen est? en el extremo izquierdo y la densidad lineal aumenta proporcionalmente con la distancia al origen. Se pide decidir qu? modelo usar, calcular la masa total [[M]], localizar [[xcm]] y explicar por qu? el resultado no coincide con el centro geom?trico.\r
\r
El objetivo no es repetir una integral de memoria. El objetivo es reconocer que la varilla es un cuerpo extendido, que su masa no est? concentrada en puntos y que cada tramo peque?o aporta un [[dm]] distinto. Como la densidad crece hacia la derecha, el centro de masas debe quedar a la derecha del punto medio.\r
\r
## Datos\r
\r
- Cuerpo: varilla delgada, por tanto modelo lineal.\r
- Coordenada local: [[x]], medida desde el extremo izquierdo.\r
- Densidad: [[lambda]] aumenta con [[x]].\r
- Diferencial geom?trico: [[dL]].\r
- Elemento de masa: [[dm]], construido con la fórmula lineal.\r
- Comparación de modelos: una lámina usaría [[dA]] y un sólido usaría [[dV]], pero aquí se justifica el modelo lineal.\r
\r
## Definición del sistema\r
\r
El sistema incluye solo la varilla. No se incluyen soportes, aire ni marcas de medida. Se toma el eje de la varilla como eje de c?lculo, de modo que la componente transversal [[ycm]] queda anulada por simetr?a y la componente fuera del plano [[zcm]] no interviene.\r
\r
La magnitud relevante es [[xcm]], porque la distribuci?n cambia solo a lo largo de [[x]]. El vector [[rcm]] existe, pero en este caso toda su informaci?n ?til queda resumida por esa componente horizontal.\r
\r
## Modelo físico\r
\r
Primero se calcula la masa total:\r
\r
{{f:M}}\r
\r
Despu?s se usa la definici?n de componente horizontal:\r
\r
{{f:xcm}}\r
\r
Como el cuerpo es una varilla delgada, el diferencial de masa se construye as?:\r
\r
{{f:dm_linear}}\r
\r
Esta secuencia es importante. Si se intenta usar el centro geom?trico antes de revisar [[lambda]], se ignora justo la informaci?n que desplaza el promedio. Si se usa [[M]] dentro del integrando en lugar de [[dm]], se pierde la distribuci?n local de masa.

## Justificación del modelo

El modelo integral es necesario porque la varilla no es una partícula ni una colección pequeña de masas puntuales. La densidad [[lambda]] cambia con [[x]], así que cada tramo [[dL]] aporta un [[dm]] diferente. Este es precisamente el caso para el elemento lineal de masa, la masa total y la componente horizontal del centro de masas.

La simetría transversal justifica no calcular [[ycm]] ni [[zcm]], pero no permite sustituir [[xcm]] por el centro geométrico. La variación de densidad rompe la simetría longitudinal de masa aunque la forma sea recta.

## Resolución simbólica
\r
La densidad lineal crece hacia la derecha. Por tanto, los tramos cercanos al extremo derecho aportan más masa que los tramos cercanos al origen. Al integrar [[M]], cada pequeño tramo suma su masa local. Al integrar [[xcm]], cada tramo suma además su posición, de modo que los tramos lejanos y densos pesan doblemente en el primer momento.\r
\r
La formulación completa del leaf también reconoce el vector general y los otros diferenciales:\r
\r
{{f:rcm}}

{{f:dm_linear}}

{{f:dm_surface}}

{{f:dm_volume}}
\r
El resultado esperado debe cumplir tres condiciones:\r
\r
- [[M]] debe ser positiva.\r
- [[xcm]] debe tener unidades de longitud.\r
- [[xcm]] debe quedar entre el origen y el extremo derecho, pero m?s cerca del extremo derecho que del centro geom?trico.\r
\r
Si el c?lculo da una posici?n fuera de la varilla, el fallo suele estar en los l?mites. Si da el punto medio exacto, probablemente se ha tratado [[lambda]] como constante aunque el enunciado dec?a que variaba.\r
\r
## Sustitución numérica\r
\r
Para una varilla de 2.0 m con densidad que crece linealmente desde el origen, el centro de masas queda en torno a dos tercios de la longitud medida desde el extremo izquierdo. En este caso, eso corresponde aproximadamente a 1.33 m.\r
\r
La lectura física es clara: el punto no está en 1.00 m porque la mitad derecha contiene más masa efectiva. Esto implica que la densidad domina la posición del promedio y que el resultado es físicamente coherente con la distribución. Tampoco está pegado al extremo, porque la mitad izquierda sigue aportando masa. El valor intermedio expresa el equilibrio entre posición y cantidad de masa.\r
\r
## Validación dimensional\r
\r
La f?rmula de [[M]] suma elementos [[dm]], por eso el resultado es una masa. La f?rmula de [[xcm]] divide un primer momento de masa por [[M]], por eso el resultado vuelve a ser una longitud. Esta validaci?n dimensional impide aceptar resultados con unidades de masa, ?rea o densidad para una coordenada.\r
\r
## Interpretación física\r
\r
La varilla se equilibraría horizontalmente si se apoyara cerca de [[xcm]], no en el centro visual. Esto significa que el resultado indica una propiedad física medible: el apoyo compensa el primer momento de masa real, no el dibujo geométrico. En un laboratorio, esto se observaría moviendo un apoyo hasta que la varilla no gire.
\r
Este ejemplo también muestra por qué el gráfico debe reflejar la distribución. Si el sombreado o las marcas de densidad crecen hacia la derecha, el punto marcado como centro de masas tiene que desplazarse hacia esa región.
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una pala de aerogenerador es larga, ligera en la punta y reforzada cerca del buje. Su forma no basta para localizar el centro de masas, porque la distribuci?n de materiales cambia a lo largo de la pieza. El modelo lineal puede ser una primera aproximaci?n si se estudia solo la direcci?n longitudinal.\r
\r
## Estimación física\r
\r
El ingeniero identifica una coordenada [[x]] desde el buje hacia la punta. En cada tramo aparece una densidad lineal efectiva [[lambda]], asociada al material, al espesor y al ancho local. El diferencial [[dL]] representa un peque?o tramo de pala, y [[dm]] representa la masa de ese tramo.\r
\r
{{f:dm_linear}}

{{f:M}}

{{f:xcm}}
\r
Si el refuerzo del buje domina, [[xcm]] queda cerca del eje de giro. Si se a?ade demasiado material en la punta, [[xcm]] se desplaza hacia fuera y aumenta el riesgo de vibraciones. La lectura cuantitativa no es solo localizar un punto: permite comparar dise?os con diferente distribuci?n de masa.\r
\r
## Interpretación\r
\r
El centro de masas calculado se usa para dise?ar apoyos, equilibrado y control de vibraci?n. Si la pala real no coincide con el [[xcm]] previsto, el rotor puede generar cargas peri?dicas que reducen la vida ?til del sistema. Por eso la integral no es un adorno matem?tico, sino una herramienta de control f?sico.\r
\r
\r
\r
\r
`;export{e as default};
