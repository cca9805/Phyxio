const e=`# Reflexion y transmision en solidos

## Contexto conceptual

Cuando una onda elastica viaja por un solido y encuentra una interfaz donde cambian las propiedades del medio, parte de su energia rebota y parte continua hacia el segundo material. Ese reparto no es accidental: depende exclusivamente de las impedancias acusticas de ambos medios. La impedancia resume en un solo numero la capacidad del medio de oponerse al paso de la onda, y el contraste entre impedancias gobierna cuanta amplitud y cuanta energia se reflejan o se transmiten.

Este fenomeno tiene consecuencias directas en ingenieria (inspeccion por ultrasonidos, diseño de capas de acoplamiento), en geofisica (deteccion de discontinuidades sismicas) y en medicina (ecografia). Entender la reflexion y la transmision es previo a cualquier analisis de señales ondulatorias que atraviesen mas de un medio.

## 🟢 Nivel esencial

La idea central es que una onda no puede cruzar una interfaz sin adaptarse a las nuevas condiciones del medio. Si el segundo material tiene la misma impedancia que el primero, la onda pasa sin percibir la frontera. Si las impedancias son muy diferentes, la mayor parte de la onda rebota.

La [[Z_1]] y la [[Z_2]] son los dos numeros que se comparan. Cada una se calcula como el producto de la densidad del medio por la velocidad de la onda en ese medio. Un medio denso y rigido (como el acero) tiene impedancia alta. Un medio ligero y flexible (como el aire) tiene impedancia baja.

El [[R_amp]] indica que fraccion de la amplitud rebota. Si las impedancias coinciden, [[R_amp]] es cero: no hay reflexion. Si difieren mucho, [[R_amp]] se acerca a la unidad en valor absoluto: casi toda la onda rebota.

El coeficiente de transmision en amplitud indica que fraccion de la amplitud pasa al segundo medio. Para incidencia normal, la amplitud reflejada y la transmitida suman la amplitud incidente en terminos de continuidad de desplazamiento.

Un punto que confunde es que la amplitud transmitida puede ser mayor que la incidente sin violar ninguna ley. Eso ocurre cuando el segundo medio tiene impedancia menor. No hay contradiccion porque la energia transmitida depende del producto de la amplitud al cuadrado por la impedancia, y ese producto siempre respeta la conservacion.

En este nivel basta retener que contraste de impedancias produce reflexion, y que la ausencia de contraste produce transmision total.

## 🔵 Nivel formal

La condicion de contorno en la interfaz exige continuidad de desplazamiento y de tension normal. Imponiendo estas dos condiciones sobre ondas planas de incidencia normal, se obtienen los coeficientes de reflexion y transmision en amplitud:

{{f:coeficiente_reflexion_amplitud}}

{{f:coeficiente_transmision_amplitud}}

La relacion entre ambos coeficientes satisface la identidad de continuidad. Sumando las contribuciones se verifica que la amplitud total en la interfaz (incidente mas reflejada por el lado 1, transmitida por el lado 2) es consistente.

Para balances energeticos se usan los coeficientes en energia o intensidad:

{{f:coeficiente_reflexion_energia}}

{{f:coeficiente_transmision_energia}}

La conservacion de energia exige que la suma [[R_E]] mas [[T_E]] sea exactamente la unidad. Esta condicion sirve como control inmediato de cualquier calculo.

La impedancia acustica de cada medio se calcula como:

{{f:impedancia_acustica}}

donde [[rho_medio]] es la densidad y [[v_onda]] es la velocidad de la onda (longitudinal o transversal, segun el caso). El resultado generico es [[Z_medio]]; al aplicarlo al medio incidente se obtiene [[Z_1]] y al medio transmitido se obtiene [[Z_2]]. Para ondas P se usa la velocidad longitudinal; para ondas S, la transversal.

La estructura algebraica muestra que solo importa el cociente de impedancias, no sus valores absolutos. Dos interfaces con el mismo cociente [[Z_2]]/[[Z_1]] producen exactamente la misma reflexion, independientemente de los materiales concretos.

El signo de [[R_amp]] tiene significado fisico: si [[Z_2]] es mayor que [[Z_1]], la onda reflejada mantiene la fase de la incidente. Si [[Z_2]] es menor que [[Z_1]], la onda reflejada invierte su fase. Este cambio de fase es analogo al que experimenta una cuerda fijada en un extremo rigido frente a un extremo libre.

## 🔴 Nivel estructural

La derivacion parte de la ecuacion de onda unidimensional y la condicion de que la interfaz (en una posicion fija) debe satisfacer simultaneamente la continuidad del desplazamiento y la continuidad del esfuerzo normal. Estas dos condiciones determinan univocamente los dos coeficientes.

En incidencia oblicua, la situacion se complica porque una onda P puede generar tanto una onda P reflejada como una onda S reflejada (conversion de modo), y lo mismo ocurre con la transmision. Las ecuaciones de Zoeppritz describen este caso general y producen cuatro coeficientes (PP, PS, SP, SS) que dependen del angulo de incidencia y de las velocidades P y S en ambos medios.

Existe un angulo critico mas alla del cual la onda transmitida deja de propagarse como onda volumetrica y se convierte en onda evanescente o de superficie. Este fenomeno es analogo a la reflexion total interna en optica y tiene aplicaciones directas en sismologia (ondas cabeceras) y en ensayos ultrasonicos (tecnica de onda de superficie).

La teoria asume interfaces planas, infinitas y perfectamente unidas. En la realidad, las interfaces pueden ser rugosas, tener capas intermedias de acoplamiento o estar parcialmente desunidas. Cada una de estas desviaciones modifica los coeficientes reales respecto a los ideales.

## Interpretacion fisica profunda

La reflexion no es un rebote mecanico en el sentido cotidiano. Es una consecuencia de la incompatibilidad de las condiciones de contorno: si el segundo medio no puede sostener la misma relacion entre esfuerzo y velocidad de particula que la onda incidente, necesariamente se genera una onda reflejada para compensar. La reflexion es la respuesta del sistema a la imposibilidad de transmitir toda la informacion mecanica sin ajuste.

Esta lectura explica por que la reflexion desaparece cuando las impedancias coinciden: si el segundo medio acepta exactamente la misma relacion esfuerzo/velocidad, no hay nada que compensar y toda la onda pasa. Es el equivalente acustico de la adaptacion de impedancias en circuitos electricos.

## Orden de magnitud

En interfaces acero-aluminio, el coeficiente de reflexion en amplitud es del orden de 0.35 y el de energia del orden de 0.12. En interfaces acero-aire, la reflexion es practicamente total ([[R_E]] cercano a 1) porque la impedancia del aire es unas cien mil veces menor que la del acero.

En ecografia medica, las interfaces tejido blando-hueso reflejan fuertemente (contraste alto), mientras que las interfaces entre tejidos blandos similares reflejan debilmente (contraste bajo). La deteccion de estructuras internas depende de estos contrastes.

Un control rapido: si [[R_E]] sale mayor que 1 o negativo, hay error. Si [[R_E]] mas [[T_E]] no suma 1, hay error.

## Metodo de resolucion personalizado

Primero calcular la impedancia de cada medio como producto de densidad por velocidad. Segundo, calcular el coeficiente de reflexion en amplitud como diferencia dividida entre suma. Tercero, elevar al cuadrado para obtener la reflexion energetica. Cuarto, verificar que [[R_E]] mas [[T_E]] es igual a 1.

Si se pide la impedancia desconocida a partir de un coeficiente medido, despejar la formula correspondiente. Si se trabaja en incidencia oblicua, identificar el angulo y aplicar Zoeppritz (nivel universitario avanzado).

## Casos especiales y ejemplo extendido

Si [[Z_2]] tiende a infinito (pared rigida ideal), R se acerca a 1 y T se acerca a 2 en amplitud. La amplitud en la interfaz se duplica (interferencia constructiva entre incidente y reflejada), pero la energia transmitida es nula porque no hay desplazamiento neto en la pared.

Si [[Z_2]] tiende a cero (superficie libre ideal), R se acerca a -1 y T se acerca a 0 en amplitud. La onda reflejada invierte su fase y toda la energia vuelve.

En un ensayo ultrasonico de acero con un defecto tipo grieta (aire interno), la interfaz acero-aire produce reflexion casi total. La señal de eco detectada por el transductor indica la presencia y profundidad del defecto.

## Preguntas reales del alumno

¿Como puede la amplitud transmitida ser mayor que la incidente? Porque la energia no depende solo de la amplitud, sino del producto de amplitud al cuadrado por impedancia. En un medio de baja impedancia la amplitud crece, pero la energia por unidad de amplitud es menor.

¿La reflexion siempre produce perdida de energia en el segundo medio? No es una perdida, es un reparto. La energia total se conserva: lo que no se transmite, se refleja. No hay disipacion en una interfaz ideal.

## Conexiones transversales y rutas de estudio

Este tema conecta con impedancia mecanica (prerequisito), propiedades elasticas (fuente de velocidades y densidades), ondas sismicas (aplicacion geofisica), ensayos no destructivos (aplicacion industrial) y ecografia (aplicacion medica). Tambien prepara la comprension de capas de adaptacion de impedancia (cuarto de longitud de onda) y filtros acusticos.

## Sintesis final

La reflexion y la transmision en solidos son consecuencia directa del contraste de impedancias acusticas en una interfaz. El cociente de impedancias determina completamente los coeficientes para incidencia normal. La conservacion de energia impone que la suma de coeficientes energeticos sea la unidad. La clave didactica es no confundir amplitud con energia: una amplitud transmitida mayor que uno no viola la fisica, porque la potencia transportada depende tambien de la impedancia del medio receptor.
`;export{e as default};
