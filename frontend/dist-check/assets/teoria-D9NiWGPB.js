const e=`# Energia y momento de la onda em\r
\r
## Contexto conceptual\r
\r
Una onda electromagnetica no solo lleva una oscilacion de campos. Tambien transporta **energia medible** y **momento lineal**. Por eso puede calentar una superficie, alimentar un panel, empujar una vela solar o ejercer una presion diminuta sobre un espejo. Este leaf estudia como pasar de los campos de la onda a una lectura energetica y mecanica.\r
\r
La idea central es que el campo oscilante [[E]] almacena energia localmente, y al propagarse convierte esa energia volumetrica en flujo. La magnitud dominante es la intensidad media [[S_med]], porque expresa cuanta potencia cruza cada unidad de area. Desde ella se leen la densidad de momento [[g_EM]], la presion de radiacion [[p_rad]] y la potencia total [[P_rad]] sobre un area efectiva [[A]].
\r
## 🟢 Nivel esencial\r
\r
La onda electromagnetica puede imaginarse como un frente que avanza llevando energia repartida por el espacio. El grafico puede mostrar el campo instantaneo [[E]], pero el calculo energetico usa el campo eficaz [[E0]]. Si ese campo eficaz aumenta, la energia almacenada en cada volumen tambien aumenta; si esa energia avanza con la velocidad de propagacion, aparece un flujo de energia.
\r
La clave intuitiva es distinguir **energia local**, **flujo local** y **efecto mecanico**. La densidad [[u_EM]] dice cuanta energia hay en un volumen pequeño de la onda. La intensidad [[S_med]] dice cuanta potencia atraviesa una superficie. La presion de radiacion dice cuanto empuje puede producir esa energia al ser absorbida.
\r
> [!NOTE]\r
> Una onda no necesita masa material para transportar momento. El momento electromagnetico esta ligado al transporte de energia y aparece como presion cuando la onda interactua con una superficie.
\r
## 🔵 Nivel formal\r
\r
El modelo usa una onda plana armonica, valores eficaces y propagacion en el vacio. Primero se vinculan las escalas de campo. El campo magnetico eficaz [[B0]] no se elige de forma independiente: queda fijado por [[E0]] y [[c]], lo que mantiene el acoplamiento transversal de la onda.\r
\r
{{f:relacion_campos_rms}}\r
\r
La energia media por volumen procede del campo eficaz. La constante [[epsilon0]] fija la escala electrica del vacio y convierte el cuadrado del campo en densidad [[u_EM]]. El uso de valor eficaz evita tener que promediar explicitamente la oscilacion temporal.\r
\r
{{f:densidad_energia_rms}}\r
\r
Cuando esa energia volumetrica viaja con la onda, se obtiene la intensidad media [[S_med]]. Esta relacion es la lectura operativa principal: una mayor [[u_EM]] o una mayor rapidez de propagacion implican mas potencia atravesando cada metro cuadrado.\r
\r
{{f:intensidad_media_onda}}\r
\r
La misma energia transportada lleva momento electromagnetico. La densidad [[g_EM]] es pequena en unidades ordinarias porque la conversion entre energia y momento incluye la escala enorme de [[c]]. Esa pequeñez explica por que el empuje luminoso suele ser sutil aunque la energia transferida sea apreciable.\r
\r
{{f:densidad_momento_onda}}\r
\r
Si la onda se absorbe en una superficie, el flujo de momento produce presion de radiacion [[p_rad]]. Si en vez de presion local interesa la entrega total, se multiplica la intensidad por el area efectiva [[A]] para obtener [[P_rad]].\r
\r
{{f:presion_radiacion_absorbente}}\r
\r
{{f:potencia_incidente_area}}\r
\r
> [!TIP]\r
> En problemas, decide primero si se pide una magnitud local por area, como [[S_med]] o [[p_rad]], o una magnitud total de dispositivo, como [[P_rad]].\r
\r
## 🔴 Nivel estructural\r
\r
La estructura profunda del leaf es una cadena de conversiones. El campo eficaz [[E0]] fija una densidad de energia [[u_EM]]. La propagacion convierte esa densidad en intensidad [[S_med]]. La intensidad conecta con dos lecturas distintas: potencia total si aparece un area [[A]], o empuje mecanico si aparece absorcion y por tanto presion [[p_rad]].\r
\r
Esta cadena tambien impone limites de validez. El frente debe poder tratarse como aproximadamente plano sobre el area considerada. Si la fuente esta muy cerca, si hay enfoque extremo, si el medio absorbe o dispersa con fuerza, o si la superficie refleja en vez de absorber, las relaciones simples dejan de ser lectura completa del fenomeno.\r
\r
La diferencia entre [[S_med]] y [[P_rad]] es estructural, no solo de unidades. [[S_med]] pertenece a la onda en una region del espacio; [[P_rad]] pertenece al sistema que intercepta esa onda. Dos detectores en la misma radiacion pueden medir la misma intensidad y recibir potencias distintas si sus areas efectivas son diferentes.\r
\r
El momento electromagnetico [[g_EM]] tambien tiene una lectura estructural. No se añade como un detalle posterior: acompaña al flujo de energia desde el inicio. Por eso una superficie absorbente recibe impulso. La presion [[p_rad]] es pequeña porque se reparte sobre area y porque la escala de [[c]] es enorme, pero no es decorativa; en astronomia, optica de precision y velas solares puede acumular efectos medibles.\r
\r
> [!WARNING]\r
> No mezcles el caso absorbente con el reflectante. Una superficie perfectamente reflectante invierte el momento de la radiacion y cambia la presion efectiva. Este leaf usa la presion absorbida como modelo base.\r
\r
## Interpretación física profunda\r
\r
La energia de la onda no esta guardada en un soporte material invisible. Esta distribuida en los propios campos. Por eso aumentar [[E0]] tiene un efecto energetico fuerte: una subida moderada del campo puede producir una subida notable de [[u_EM]] y, despues, de [[S_med]].\r
\r
El momento de la onda aclara una pregunta frecuente: si la radiacion no tiene masa en reposo, ¿por que puede empujar? La respuesta fisica es que energia y momento forman parte del mismo transporte electromagnetico. Cuando la onda entrega energia a una superficie, tambien entrega momento en la direccion de avance.\r
\r
## Orden de magnitud\r
\r
La luz solar cerca de la Tierra tiene [[S_med]] de alrededor de 1000 W/m2. Dividir esa escala por [[c]] da una presion [[p_rad]] de pocos micropascales en absorcion ideal. Un laser tecnico puede superar esa intensidad por varios ordenes de magnitud, pero aun asi la presion suele ser pequeña frente a una presion atmosferica ordinaria.\r
\r
Un resultado absurdo suele detectarse comparando escalas: si una intensidad de iluminacion comun predice presiones parecidas a las de un gas comprimido, probablemente se ha confundido [[S_med]] con [[P_rad]] o se ha omitido la division por [[c]].\r
\r
## Método de resolución personalizado\r
\r
Para resolver un problema, identifica primero la entrada: campo eficaz [[E0]], densidad [[u_EM]], intensidad [[S_med]] o potencia total [[P_rad]]. Despues decide que salida fisica se pide. Si aparece una superficie, piensa en [[p_rad]]; si aparece un dispositivo de area finita, piensa en [[A]] y [[P_rad]].\r
\r
El orden recomendable es: convertir campos a energia, energia a intensidad, intensidad a momento o potencia. Al final revisa las unidades: W/m2 para intensidad, Pa para presion, J/m3 para densidad de energia y W para potencia total.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Una onda de baja intensidad puede tener campos no nulos y, aun asi, presion casi imperceptible. Eso no contradice el modelo: [[p_rad]] mide empuje por area, no presencia de campo. En sensores opticos delicados, esa fuerza pequeña puede importar porque se integra durante mucho tiempo o porque actua sobre masas muy reducidas.\r
\r
Otro caso sutil aparece con el area efectiva [[A]]. Un panel inclinado no intercepta toda su area geometrica como si estuviera perpendicular al frente. En ese caso, la potencia [[P_rad]] debe calcularse con el area proyectada. El error tipico es multiplicar [[S_med]] por una superficie que la onda no atraviesa realmente.\r
\r
## Preguntas reales del alumno\r
\r
**¿La intensidad es lo mismo que energia?** No. [[S_med]] es potencia por area; [[u_EM]] es energia por volumen. Estan relacionadas porque la energia se desplaza con la onda, pero no representan la misma lectura fisica.\r
\r
**¿Por que aparece presion si la luz no es un fluido material?** Porque la onda lleva momento [[g_EM]]. Al absorberse, ese momento cambia el estado mecanico de la superficie y aparece [[p_rad]].\r
\r
**¿Puedo usar siempre el area total del objeto?** No. Debes usar el area efectiva [[A]] que intercepta el frente de onda. Si el objeto esta inclinado o parcialmente sombreado, el area geometrica total exagera [[P_rad]].\r
\r
**¿Por que [[B0]] parece tan pequeño frente a [[E0]]?** Porque en unidades SI ambos campos tienen escalas numericas distintas y estan conectados mediante [[c]]. No significa que el campo magnetico sea irrelevante.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se apoya en [Campos oscilantes acoplados](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados), donde se entiende la geometria transversal de [[E0]] y [[B0]]. Tambien conecta con [Espectro electromagnetico](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), porque distintas regiones espectrales pueden tener intensidades y efectos materiales muy diferentes.\r
\r
La ruta natural es: campos acoplados, energia y momento, propagacion en medios y aplicaciones tecnologicas. Asi se evita estudiar la onda como una simple curva y se la entiende como un mecanismo de transferencia fisica.\r
\r
## Síntesis final\r
\r
La energia y el momento de una onda electromagnetica se leen mediante una cadena coherente: campo eficaz, densidad de energia, intensidad, presion y potencia interceptada. La intensidad [[S_med]] es el puente central entre la descripcion de campo y los efectos observables.\r
\r
`;export{e as default};
