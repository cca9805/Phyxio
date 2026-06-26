## Contexto conceptual

Una onda electromagnetica no solo lleva una oscilacion de campos. Tambien transporta **energia medible** y **momento lineal**. Por eso puede calentar una superficie, alimentar un panel, empujar una vela solar o ejercer una presion diminuta sobre un espejo. Este leaf estudia como pasar de los campos de la onda a una lectura energetica y mecanica.

La idea central es que el campo oscilante [[campo_electrico_instantaneo_representado]] almacena energia localmente, y al propagarse convierte esa energia volumetrica en flujo. La magnitud dominante es la intensidad media [[intensidad_media_de_poynting]], porque expresa cuanta potencia cruza cada unidad de area. Desde ella se leen la densidad de momento [[densidad_de_momento_electromagnetico]], la presion de radiacion [[p_rad]] y la potencia total [[potencia_electromagnetica_incidente]] sobre un area efectiva [[area_iluminada]].

## 🟢 Nivel esencial

La onda electromagnetica puede imaginarse como un frente que avanza llevando energia repartida por el espacio. El grafico puede mostrar el campo instantaneo [[campo_electrico_instantaneo_representado]], pero el calculo energetico usa el campo eficaz [[campo_electrico_eficaz]]. Si ese campo eficaz aumenta, la energia almacenada en cada volumen tambien aumenta; si esa energia avanza con la velocidad de propagacion, aparece un flujo de energia.

La clave intuitiva es distinguir **energia local**, **flujo local** y **efecto mecanico**. La densidad [[densidad_media_de_energia_electromagnetica]] dice cuanta energia hay en un volumen pequeño de la onda. La intensidad [[intensidad_media_de_poynting]] dice cuanta potencia atraviesa una superficie. La presion de radiacion dice cuanto empuje puede producir esa energia al ser absorbida.

> [!NOTE]
> Una onda no necesita masa material para transportar momento. El momento electromagnetico esta ligado al transporte de energia y aparece como presion cuando la onda interactua con una superficie.

## 🔵 Nivel formal

El modelo usa una onda plana armonica, valores eficaces y propagacion en el vacio. Primero se vinculan las escalas de campo. El campo magnetico eficaz [[campo_magnetico_eficaz]] no se elige de forma independiente: queda fijado por [[campo_electrico_eficaz]] y [[velocidad_de_la_luz_en_el_vacio]], lo que mantiene el acoplamiento transversal de la onda.

{{f:relacion_campos_rms}}

La energia media por volumen procede del campo eficaz. La constante [[epsilon0]] fija la escala electrica del vacio y convierte el cuadrado del campo en densidad [[densidad_media_de_energia_electromagnetica]]. El uso de valor eficaz evita tener que promediar explicitamente la oscilacion temporal.

{{f:densidad_energia_rms}}

Cuando esa energia volumetrica viaja con la onda, se obtiene la intensidad media [[intensidad_media_de_poynting]]. Esta relacion es la lectura operativa principal: una mayor [[densidad_media_de_energia_electromagnetica]] o una mayor rapidez de propagacion implican mas potencia atravesando cada metro cuadrado.

{{f:intensidad_media_onda}}

La misma energia transportada lleva momento electromagnetico. La densidad [[densidad_de_momento_electromagnetico]] es pequena en unidades ordinarias porque la conversion entre energia y momento incluye la escala enorme de [[velocidad_de_la_luz_en_el_vacio]]. Esa pequeñez explica por que el empuje luminoso suele ser sutil aunque la energia transferida sea apreciable.

{{f:densidad_momento_onda}}

Si la onda se absorbe en una superficie, el flujo de momento produce presion de radiacion [[p_rad]]. Si en vez de presion local interesa la entrega total, se multiplica la intensidad por el area efectiva [[area_iluminada]] para obtener [[potencia_electromagnetica_incidente]].

{{f:presion_radiacion_absorbente}}

{{f:potencia_incidente_area}}

> [!TIP]
> En problemas, decide primero si se pide una magnitud local por area, como [[intensidad_media_de_poynting]] o [[p_rad]], o una magnitud total de dispositivo, como [[potencia_electromagnetica_incidente]].

## 🔴 Nivel estructural

La estructura profunda del leaf es una cadena de conversiones. El campo eficaz [[campo_electrico_eficaz]] fija una densidad de energia [[densidad_media_de_energia_electromagnetica]]. La propagacion convierte esa densidad en intensidad [[intensidad_media_de_poynting]]. La intensidad conecta con dos lecturas distintas: potencia total si aparece un area [[area_iluminada]], o empuje mecanico si aparece absorcion y por tanto presion [[p_rad]].

Esta cadena tambien impone limites de validez. El frente debe poder tratarse como aproximadamente plano sobre el area considerada. Si la fuente esta muy cerca, si hay enfoque extremo, si el medio absorbe o dispersa con fuerza, o si la superficie refleja en vez de absorber, las relaciones simples dejan de ser lectura completa del fenomeno.

La diferencia entre [[intensidad_media_de_poynting]] y [[potencia_electromagnetica_incidente]] es estructural, no solo de unidades. [[intensidad_media_de_poynting]] pertenece a la onda en una region del espacio; [[potencia_electromagnetica_incidente]] pertenece al sistema que intercepta esa onda. Dos detectores en la misma radiacion pueden medir la misma intensidad y recibir potencias distintas si sus areas efectivas son diferentes.

El momento electromagnetico [[densidad_de_momento_electromagnetico]] tambien tiene una lectura estructural. No se añade como un detalle posterior: acompaña al flujo de energia desde el inicio. Por eso una superficie absorbente recibe impulso. La presion [[p_rad]] es pequeña porque se reparte sobre area y porque la escala de [[velocidad_de_la_luz_en_el_vacio]] es enorme, pero no es decorativa; en astronomia, optica de precision y velas solares puede acumular efectos medibles.

> [!WARNING]
> No mezcles el caso absorbente con el reflectante. Una superficie perfectamente reflectante invierte el momento de la radiacion y cambia la presion efectiva. Este leaf usa la presion absorbida como modelo base.

## Interpretación física profunda

La energia de la onda no esta guardada en un soporte material invisible. Esta distribuida en los propios campos. Por eso aumentar [[campo_electrico_eficaz]] tiene un efecto energetico fuerte: una subida moderada del campo puede producir una subida notable de [[densidad_media_de_energia_electromagnetica]] y, despues, de [[intensidad_media_de_poynting]].

El momento de la onda aclara una pregunta frecuente: si la radiacion no tiene masa en reposo, ¿por que puede empujar? La respuesta fisica es que energia y momento forman parte del mismo transporte electromagnetico. Cuando la onda entrega energia a una superficie, tambien entrega momento en la direccion de avance.

## Orden de magnitud

La luz solar cerca de la Tierra tiene [[intensidad_media_de_poynting]] de alrededor de 1000 W/m2. Dividir esa escala por [[velocidad_de_la_luz_en_el_vacio]] da una presion [[p_rad]] de pocos micropascales en absorcion ideal. Un laser tecnico puede superar esa intensidad por varios ordenes de magnitud, pero aun asi la presion suele ser pequeña frente a una presion atmosferica ordinaria.

Un resultado absurdo suele detectarse comparando escalas: si una intensidad de iluminacion comun predice presiones parecidas a las de un gas comprimido, probablemente se ha confundido [[intensidad_media_de_poynting]] con [[potencia_electromagnetica_incidente]] o se ha omitido la division por [[velocidad_de_la_luz_en_el_vacio]].

## Método de resolución personalizado

Para resolver un problema, identifica primero la entrada: campo eficaz [[campo_electrico_eficaz]], densidad [[densidad_media_de_energia_electromagnetica]], intensidad [[intensidad_media_de_poynting]] o potencia total [[potencia_electromagnetica_incidente]]. Despues decide que salida fisica se pide. Si aparece una superficie, piensa en [[p_rad]]; si aparece un dispositivo de area finita, piensa en [[area_iluminada]] y [[potencia_electromagnetica_incidente]].

El orden recomendable es: convertir campos a energia, energia a intensidad, intensidad a momento o potencia. Al final revisa las unidades: W/m2 para intensidad, Pa para presion, J/m3 para densidad de energia y W para potencia total.

## Casos especiales y ejemplo extendido

Una onda de baja intensidad puede tener campos no nulos y, aun asi, presion casi imperceptible. Eso no contradice el modelo: [[p_rad]] mide empuje por area, no presencia de campo. En sensores opticos delicados, esa fuerza pequeña puede importar porque se integra durante mucho tiempo o porque actua sobre masas muy reducidas.

Otro caso sutil aparece con el area efectiva [[area_iluminada]]. Un panel inclinado no intercepta toda su area geometrica como si estuviera perpendicular al frente. En ese caso, la potencia [[potencia_electromagnetica_incidente]] debe calcularse con el area proyectada. El error tipico es multiplicar [[intensidad_media_de_poynting]] por una superficie que la onda no atraviesa realmente.

## Preguntas reales del alumno

**¿La intensidad es lo mismo que energia?** No. [[intensidad_media_de_poynting]] es potencia por area; [[densidad_media_de_energia_electromagnetica]] es energia por volumen. Estan relacionadas porque la energia se desplaza con la onda, pero no representan la misma lectura fisica.

**¿Por que aparece presion si la luz no es un fluido material?** Porque la onda lleva momento [[densidad_de_momento_electromagnetico]]. Al absorberse, ese momento cambia el estado mecanico de la superficie y aparece [[p_rad]].

**¿Puedo usar siempre el area total del objeto?** No. Debes usar el area efectiva [[area_iluminada]] que intercepta el frente de onda. Si el objeto esta inclinado o parcialmente sombreado, el area geometrica total exagera [[potencia_electromagnetica_incidente]].

**¿Por que [[campo_magnetico_eficaz]] parece tan pequeño frente a [[campo_electrico_eficaz]]?** Porque en unidades SI ambos campos tienen escalas numericas distintas y estan conectados mediante [[velocidad_de_la_luz_en_el_vacio]]. No significa que el campo magnetico sea irrelevante.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Campos oscilantes acoplados](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados), donde se entiende la geometria transversal de [[campo_electrico_eficaz]] y [[campo_magnetico_eficaz]]. Tambien conecta con [Espectro electromagnetico](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), porque distintas regiones espectrales pueden tener intensidades y efectos materiales muy diferentes.

La ruta natural es: campos acoplados, energia y momento, propagacion en medios y aplicaciones tecnologicas. Asi se evita estudiar la onda como una simple curva y se la entiende como un mecanismo de transferencia fisica.

## Síntesis final

La energia y el momento de una onda electromagnetica se leen mediante una cadena coherente: campo eficaz, densidad de energia, intensidad, presion y potencia interceptada. La intensidad [[intensidad_media_de_poynting]] es el puente central entre la descripcion de campo y los efectos observables.