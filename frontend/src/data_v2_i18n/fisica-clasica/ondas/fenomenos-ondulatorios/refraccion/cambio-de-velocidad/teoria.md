# Cambio de velocidad

## Contexto conceptual

La velocidad de la luz en el vacio, representada por [[c_vacio]], es una constante fundamental de la naturaleza con un valor aproximadamente de trescientos mil millones de metros por segundo. Sin embargo, cuando la luz atraviesa materiales como el agua, el vidrio o el diamante, su velocidad de propagacion se reduce de manera significativa. Este fenomeno es la base de la optica geometrica y de fenomenos como la refraccion.

La razon de esta reduccion esta en la interaccion entre la onda electromagnetica y los atomos del material. En medios transparentes, los campos de la onda inducen oscilaciones en los electrones atomicos y retrasan la propagacion colectiva. Este efecto se cuantifica mediante el [[n_indice]], una propiedad adimensional caracteristica de cada material.

Comprender como cambia la velocidad de las ondas al pasar entre diferentes medios es esencial para explicar por que un palmo parece doblarse cuando lo sumergimos en agua, por que los objetos bajo el agua parecen mas cercanos de lo que realmente estan, y como funcionan lentes, prismas y fibras opticas.

## 🟢 Nivel esencial

Imagina que corres por una playa de arena firme. Avanzas rapido y sin obstaculos. Ahora imagina que entras en el agua hasta la cintura. Sigues avanzando, pero cada paso cuesta mas, la resistencia del agua te frena. La luz experimenta algo similar cuando pasa del aire al agua o al vidrio.

En el vacio, la luz viaja a su maxima velocidad posible porque no encuentra nada que la obstaculice. Pero en un medio material, los atomos y sus electrones interactuan con la onda electromagnetica. Estas interacciones constantes hacen que la luz tarde mas tiempo en atravesar el mismo espacio fisico, aunque siga siendo increiblemente rapida.

El factor clave es el [[n_indice]]. Un valor alto significa que el material ralentiza mucho la luz. El diamante, con un indice aproximadamente de dos coma cuatro, frena la luz considerablemente. El agua, con indice aproximadamente uno coma tres, la ralentiza menos. El aire apenas afecta la velocidad porque su indice es muy cercano a uno.

> [!TIP]
> Piensa en el indice de refraccion como la densidad optica del material. Al igual que es mas dificil correr en arena movediza que en arena compacta, la luz se propaga mas lentamente en materiales con mayor indice de refraccion.

## 🔵 Nivel formal

La relacion fundamental entre la velocidad de la luz en el vacio [[c_vacio]], la velocidad en un medio [[v_medio]] y el [[n_indice]] se expresa mediante:

{{f:velocidad_medio}}

Esta ecuacion establece que la velocidad en el medio es inversamente proporcional al indice de refraccion. Para el vacio, donde [[n_indice]] es exactamente uno, la velocidad coincide con [[c_vacio]]. En cualquier medio material, donde [[n_indice]] es mayor que uno, la velocidad resultante sera menor.

El [[n_indice]] se define formalmente como el cociente entre la velocidad en vacio y la velocidad en el medio:

{{f:indice_refraccion}}

Esta definicion adimensional captura la capacidad del material para ralentizar la propagacion de la onda. Valores tipicos incluyen aire seco aproximadamente uno coma cero cero tres, agua a temperatura ambiente aproximadamente uno coma treinta y tres, vidrio optico entre uno coma cinco y uno coma nueve, y diamante aproximadamente dos coma cuatro dos.

Cuando una onda pasa de un medio a otro, su [[frecuencia_onda]] se mantiene constante porque viene determinada por la fuente emisora. Sin embargo, como la velocidad cambia, la [[lambda_medio]] debe ajustarse consecuentemente siguiendo la relacion:

{{f:longitud_onda_medio}}

La longitud de onda en el medio se reduce por el mismo factor [[n_indice]] que ralentiza la velocidad. Este efecto es crucial para entender fenomenos de interferencia en peliculas delgadas y recubrimientos opticos.

La misma lectura tambien puede expresarse desde la relacion ondulatoria general:

{{f:velocidad_onda_frecuencia}}

Como [[frecuencia_onda]] queda fijada por la fuente, cualquier cambio en [[v_medio]] obliga a reajustar [[lambda_medio]].

## 🔴 Nivel estructural

La reduccion de velocidad en medios materiales nace de la respuesta de los electrones atomicos al campo electrico oscilante de la onda. Cuando la luz atraviesa el material, el campo induce oscilaciones forzadas en los electrones, que responden a la misma [[frecuencia_onda]] de la onda incidente.

Los electrones oscilantes actuan como fuentes secundarias. La onda resultante combina la onda original y la radiacion reemitida, creando un frente que avanza con velocidad aparente menor que [[c_vacio]].

La estructura del [[n_indice]] depende de la polarizabilidad electronica del material. Materiales con alta densidad electronica y alta polarizabilidad presentan indices elevados; gases y solidos ligeros suelen quedar cerca de uno.

El modelo de indice constante tiene limites. En medios dispersivos, el [[n_indice]] varia con [[lambda_vacio]], lo que explica la separacion de colores en un prisma. En medios absorbentes o no lineales, la velocidad deja de tener una lectura simple y se requieren modelos mas completos.

## Interpretacion fisica profunda

La conservacion de la [[frecuencia_onda]] al cambiar de medio es clave: la fuente fija la oscilacion y el material modifica la velocidad. Por eso la [[lambda_medio]] se reduce cuando la luz entra en un medio de mayor [[n_indice]].

Esta reduccion de longitud de onda cambia condiciones de interferencia y difraccion. En peliculas delgadas, por ejemplo, el camino optico determina que colores se refuerzan o se cancelan.

El camino optico combina distancia geometrica e [[n_indice]]. Dos trayectos fisicos distintos pueden ser equivalentes opticamente si el mas corto atraviesa un medio mas refringente.

## Orden de magnitud

La velocidad de la luz en el vacio [[c_vacio]] es aproximadamente tres por diez a la ocho metros por segundo. En agua, con indice uno coma treinta y tres, baja a unos dos coma veintiseis por diez a la ocho metros por segundo.

En vidrio optico tipico, con indice uno coma cinco, baja a dos por diez a la ocho metros por segundo. En diamante, con indice cercano a dos coma cuatro, queda cerca de la mitad de la velocidad en vacio.

Un resultado absurdo aparece si [[v_medio]] supera [[c_vacio]] en un medio ordinario, o si una sustancia transparente comun da una velocidad extremadamente baja sin justificacion material.

## Metodo de resolucion personalizado

Para analizar problemas de cambio de velocidad:

1. Identifica el medio y su [[n_indice]].
2. Recuerda que la [[frecuencia_onda]] se conserva al cambiar de medio.
3. Usa la relacion entre [[v_medio]], [[c_vacio]] y [[n_indice]].
4. Si se pide interferencia o difraccion, calcula [[lambda_medio]].
5. Verifica que la velocidad calculada sea menor que [[c_vacio]] en medios ordinarios.

> [!WARNING]
> No confundas la velocidad en el medio con la velocidad en vacio. En la mayoria de medios materiales, la velocidad se reduce significativamente respecto a c.

## Casos especiales y ejemplo extendido

**Medios dispersivos**: en vidrio, el [[n_indice]] varia con el color. El azul suele propagarse mas lentamente que el rojo, lo que permite que un prisma separe la luz blanca.

**Medios no homogeneos**: si el indice cambia gradualmente, la luz puede curvarse. Es la base de espejismos y de desviaciones atmosfericas.

**Ejemplo extendido: tiempo de cruce de un acuario**. Un laser que atraviesa vidrio y agua viaja mas lento que en aire. En vidrio, con indice cercano a uno coma cinco, la velocidad es unos dos tercios de c; en agua, con indice cercano a uno coma treinta y tres, es unas tres cuartas partes de c.

Aunque la distancia sea pequena, el retraso acumulado importa en fibras opticas, donde la velocidad reducida limita tiempos de transmision.

## Preguntas reales del alumno

**¿Por que la luz se frena si los fotones no tienen masa?**

En optica clasica, la onda interactua colectivamente con los electrones del material. Esa respuesta retardada crea una onda resultante con menor velocidad de fase.

**¿Es la velocidad reducida la velocidad de fase o de grupo?**

La relacion entre [[v_medio]], [[c_vacio]] y [[n_indice]] describe la velocidad de fase. Para pulsos, la velocidad de grupo puede diferir si el medio es dispersivo.

**¿Se conserva la energia de la onda al cambiar de velocidad?**

La intensidad puede reducirse por reflexion o absorcion, pero la frecuencia conserva la energia asociada a cada foton. La energia total transmitida depende tambien de amplitud y area.

**¿Por que no podemos superar la velocidad c en un medio?**

[[c_vacio]] es el limite de transmision de informacion. Superar la velocidad de la luz en un medio puede producir radiacion Cherenkov, pero no permite superar la velocidad del vacio.

## Conexiones transversales y rutas de estudio

El cambio de velocidad se conecta con la [ley de Snell](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/ley-de-snell), que describe el cambio de direccion al pasar de medio.

En optica ondulatoria, la longitud de onda reducida afecta las condiciones de [interferencia](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva) en peliculas delgadas y recubrimientos.

Para profundizar, estudia dispersion y polarizacion electronica inducida: conectan la optica geometrica con propiedades microscopicas del material.

## Sintesis final

El cambio de velocidad en un medio material se resume en una idea central: [[v_medio]] es menor que [[c_vacio]] por el factor [[n_indice]]. La [[frecuencia_onda]] se conserva, mientras que [[lambda_medio]] se reduce. Esa relacion permite entender refraccion, interferencia en medios y diseno optico.
