# Analisis completo

## Contexto conceptual

Cuando un bloque reposa sobre una mesa y empujas horizontalmente, la superficie responde con **rozamiento estático** que iguala tu empuje y mantiene el reposo. Si sigues aumentando la fuerza, llega un instante en que la adherencia se agota: el bloque arranca y pasa al **régimen cinético**, donde el rozamiento ya no crece sino que toma un valor constante inferior al máximo estático. El análisis completo de sistemas con rozamiento consiste precisamente en decidir cuándo ocurre esa transición y qué aceleración resulta después de ella.

Este leaf pertenece al bloque de dinámica traslacional dentro de la mecánica clásica. Es un método de resolución: no define una ley nueva, sino que organiza la aplicación conjunta de la segunda ley de Newton y las leyes de Coulomb del rozamiento seco para resolver de forma sistemática cualquier problema horizontal con fricción. Dominar este procedimiento es imprescindible antes de abordar planos inclinados con rozamiento o sistemas de varios cuerpos.

## 🟢 Nivel esencial

Imagina que empujas una caja pesada con la mano. Al principio la caja no se mueve: la superficie genera una fuerza de rozamiento que **crece automáticamente** hasta igualar tu empuje. Ese rozamiento no tiene un valor fijo mientras haya reposo; simplemente se ajusta para impedir el deslizamiento. Existe, sin embargo, un límite máximo que depende del peso de la caja y del tipo de superficie.

Cuando tu empuje supera ese límite, la caja arranca y empieza a acelerar. El rozamiento que actúa durante el deslizamiento es menor que el máximo estático, lo que explica por qué cuesta más arrancar un mueble que mantenerlo en movimiento. La magnitud [[a]] que adquiere el bloque depende de cuánto excede [[F_ext]] al rozamiento cinético, dividido entre la [[m]] del objeto.

¿De qué depende la capacidad de la superficie para sujetar la caja? De dos cosas: del peso del objeto (que determina cuánto se «aprieta» contra la mesa) y del par de materiales en contacto. Dos superficies rugosas aguantan más que dos pulidas. Este «aguante» se cuantifica con un número llamado **coeficiente de rozamiento estático** [[mu_e]], que es mayor cuanto más áspero sea el contacto. Para el deslizamiento existe un segundo coeficiente, [[mu_c]], generalmente algo menor.

La idea central es que todo problema de rozamiento se resuelve en dos etapas: primero decidir si el objeto se mueve o no, y después —solo si se mueve— calcular cuánto acelera. Esa secuencia de decisión es la esencia de este leaf y reaparece en cualquier problema de fricción, desde una caja en una mesa hasta un neumático en una carretera.

## 🔵 Nivel formal

El punto de partida es calcular la fuerza de contacto perpendicular. En una superficie horizontal sin aceleración vertical, la **fuerza normal** vale:

{{f:normal_horizontal}}

[[N]] fija la escala de toda la fricción disponible. A partir de ella se obtiene el **rozamiento estático máximo**:

{{f:friccion_estatica_max}}

> [!WARNING]
> [[f_emax]] es una **cota superior**, no el valor real de la fricción en reposo. Mientras el bloque no deslice, la fricción real vale exactamente lo necesario para anular el empuje.

Mientras el sistema permanece en reposo, la **fuerza de rozamiento real** se ajusta al equilibrio:

{{f:friccion_estatica_reposo}}

La transición de régimen ocurre cuando [[F_ext]] alcanza el umbral estático. La **fuerza externa crítica** es:

{{f:umbral_deslizamiento}}

Una vez superado ese umbral, la fricción pasa a ser cinética y la **aceleración** del bloque responde a:

{{f:aceleracion_dinamica}}

Finalmente, durante el deslizamiento la **fuerza de rozamiento cinético** toma un valor constante:

{{f:friccion_cinetica}}

Observa la cadena lógica: [[N]] se obtiene del peso (vía [[m]] y [[g]]), luego [[f_emax]] se construye sobre [[N]] (vía [[mu_e]]), el umbral [[F_ext_crit]] hereda esa misma escala, y la aceleración dinámica depende de la diferencia entre [[F_ext]] y el rozamiento cinético [[f_r]] dividida entre [[m]]. Cada fórmula «alimenta» a la siguiente, por lo que un error en la primera (por ejemplo, una normal mal calculada) se propaga a todos los resultados posteriores. Esta dependencia en cascada es la razón por la que el orden de resolución importa y no se debe saltar ningún paso.

## 🔴 Nivel estructural

La clave estructural del leaf es la **discontinuidad de régimen** en el punto [[F_ext_crit]]. La curva [[a]] frente a [[F_ext]] presenta dos tramos claramente diferenciados: una zona plana en cero (régimen estático) y una recta ascendente con pendiente inversamente proporcional a [[m]] (régimen cinético). El salto entre ambos tramos no es suave sino abrupto, porque [[mu_e]] suele ser mayor que [[mu_c]]. En el instante justo del arranque, el bloque experimenta un incremento brusco de la fuerza neta al pasar de fricción estática máxima a fricción cinética menor.

La dependencia con [[N]] revela que **cualquier cambio en la carga vertical** modifica simultáneamente el umbral de deslizamiento y la fricción cinética. Por ejemplo, añadir peso encima del bloque eleva [[N]], lo que aumenta [[f_emax]] y [[F_ext_crit]], pero también eleva la fricción cinética, reduciendo la aceleración una vez iniciado el movimiento. Esta doble influencia de [[N]] es la razón por la que el análisis requiere evaluar siempre primero la normal antes de cualquier cálculo de fricción.

El modelo se rompe cuando la velocidad es alta y la dependencia de [[mu_c]] con [[v]] deja de ser despreciable, o cuando la superficie no es rígida y se deforma bajo carga. También falla si existen fuerzas con componente normal adicional (un empuje inclinado, por ejemplo) porque entonces la normal ya no coincide con el peso. En todos estos casos el procedimiento sigue siendo válido conceptualmente, pero las fórmulas necesitan correcciones específicas que exceden el modelo horizontal simple.

La coherencia dimensional confirma la solidez del esquema: [[F_ext_crit]] tiene dimensiones de fuerza porque es el producto de un número adimensional ([[mu_e]]) por una fuerza ([[N]]); la aceleración tiene dimensiones correctas porque la diferencia de fuerzas dividida entre [[m]] produce `[M L T⁻²]`/`[M]` que da `[L T⁻²]`.

## Interpretación física profunda

El **signo** de [[a]] indica el sentido del movimiento respecto al eje elegido. Si resulta positivo, el bloque acelera en la dirección de [[F_ext]]; si resultara negativo, significaría que el modelo cinético aplicado no es autoconsistente (la fricción supera al empuje) y el bloque debería estar frenando o en reposo, lo que obliga a reconsiderar el régimen.

La **magnitud** de [[f_r]] salta de un valor variable (igual a [[F_ext]] en reposo) a un valor fijo ([[mu_c]] por [[N]] en deslizamiento). Ese salto es la manifestación macroscópica de la rotura de microcontactos entre superficies: mientras hay adherencia, la superficie «pide» la fuerza justa; al romperse, solo queda disipación cinética constante.

> [!TIP]
> Pensar en la curva [[a]] frente a [[F_ext]] como un gráfico con un codo ayuda a visualizar que el problema es esencialmente una **decisión de régimen** seguida de una lectura lineal.

## Orden de magnitud

- **[[m]]**: de 0.5 kg a 50 kg en ejercicios habituales de aula.
- **[[g]]**: aproximadamente 9.8 m/s² en la superficie terrestre.
- **[[N]]**: del mismo orden que el peso en apoyo horizontal, es decir de 5 N a 500 N.
- **[[mu_e]]**: entre 0.2 y 0.8 para pares comunes (madera-madera, caucho-asfalto, metal-metal seco). Valores superiores a 1.0 son raros y sugieren adherencia especial.
- **[[mu_c]]**: típicamente un 20–30 % menor que [[mu_e]] para el mismo par de materiales.
- **[[a]]**: del orden de 1 a 5 m/s² en situaciones de laboratorio escolar.

Si tu cálculo arroja una aceleración de 50 m/s² para un bloque empujado a mano, el resultado es físicamente absurdo y debes revisar unidades o régimen.

## Método de resolución personalizado

1. **Dibujar el diagrama de cuerpo libre** del bloque indicando [[F_ext]], peso, [[N]] y [[f_r]].
2. **Calcular [[N]]** a partir del equilibrio vertical.
3. **Obtener [[f_emax]]** multiplicando [[mu_e]] por [[N]].
4. **Comparar [[F_ext]] con [[F_ext_crit]]**: si [[F_ext]] es menor, el sistema está en reposo y [[f_r]] iguala a [[F_ext]]; si es mayor, hay deslizamiento.
5. **Calcular [[a]]** usando la fórmula dinámica solo si se confirmó el régimen cinético.
6. **Validar**: comprobar signo, orden de magnitud y coherencia dimensional.

> [!NOTE]
> El error más frecuente es saltar al paso 5 sin haber verificado el régimen en el paso 4.

## Casos especiales y ejemplo extendido

**Caso especial — Empuje justo en el umbral**: cuando [[F_ext]] coincide exactamente con [[F_ext_crit]], el bloque está a punto de deslizar pero técnicamente sigue en reposo. [[a]] es cero y [[f_r]] alcanza su valor máximo. Este punto frontera requiere cuidado porque cualquier perturbación infinitesimal inicia el deslizamiento.

**Caso especial — Coeficientes iguales**: si [[mu_e]] y [[mu_c]] fuesen idénticos, el salto de fuerza al arrancar desaparecería y la transición sería suave. En la práctica esto casi nunca ocurre, pero el caso teórico aclara que la brusquedad del arranque se debe precisamente a la diferencia entre ambos coeficientes.

**Ejemplo extendido**: un bloque de 10 kg sobre una mesa con [[mu_e]] de 0.5 y [[mu_c]] de 0.4 se somete a un empuje creciente. El peso vale aproximadamente 98 N, por lo que [[N]] es 98 N. El umbral [[F_ext_crit]] es 0.5 por 98 N, es decir 49 N. Si el empuje llega a 60 N, se supera el umbral y la aceleración resulta de restar la fricción cinética (0.4 por 98 N, unos 39.2 N) al empuje y dividir entre [[m]]: aproximadamente 2.08 m/s². El resultado es razonable para un bloque de laboratorio.

## Preguntas reales del alumno

**¿Por qué la fricción estática «sabe» cuánto empujo?**
Porque es una **fuerza reactiva**: la superficie genera exactamente la oposición necesaria para mantener el equilibrio mientras pueda. Solo tiene un techo, que es [[f_emax]].

**¿Por qué el bloque se mueve más fácilmente una vez que arranca?**
Porque [[mu_c]] suele ser menor que [[mu_e]]. Al pasar de régimen estático a cinético, la fricción cae y queda un empuje neto mayor, lo que produce [[a]] positiva.

**¿Puedo usar la fórmula de aceleración dinámica antes de comprobar el régimen?**
No. Si [[F_ext]] es menor que [[F_ext_crit]], la fórmula daría una aceleración negativa que no tiene sentido físico en este contexto. Primero decides régimen, después aplicas la ecuación correspondiente.

**¿Y si empujo hacia abajo además de hacia delante?**
Entonces la normal ya no coincide con el peso, porque la componente vertical del empuje se suma a la carga sobre la mesa. El procedimiento es el mismo, pero la fórmula de [[N]] debe incluir esa componente adicional.

## Conexiones transversales y rutas de estudio

- **Prerequisito directo**: [Segunda ley de Newton](leaf:fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa). Sin ella no tiene sentido hablar de aceleración resultante.
- **Prerequisito de geometría**: [Plano inclinado con rozamiento](leaf:fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/con-rozamiento). Allí la normal ya no coincide con el peso y el procedimiento se amplía.
- **Extensión natural**: los sistemas de varios cuerpos con rozamiento reutilizan exactamente este método aplicado a cada bloque por separado, añadiendo fuerzas de contacto internas.
- **Conexión energética**: el trabajo realizado contra la fricción cinética se disipa como calor, lo que enlaza este leaf con el principio de conservación de la energía y la termodinámica básica.

## Síntesis final

El análisis completo de sistemas con rozamiento se reduce a una decisión de régimen (estático o cinético) seguida de la aplicación de la ecuación correspondiente. La clave es que [[f_r]] no tiene un valor fijo en reposo, que [[F_ext_crit]] marca la frontera entre ambos regímenes y que [[a]] solo aparece cuando se supera ese umbral. Dominar este procedimiento es la base para abordar cualquier problema de dinámica traslacional con fricción.
