const e=`\uFEFF# Ejemplo tipo examen: Explosión en vuelo de un proyectil

## Enunciado
Un proyectil de artillería de masa total [[M]] con valor de cuatro kilogramos se desplaza por una región del espacio donde las fuerzas gravitatorias son despreciables. Inicialmente, el proyectil se mueve de forma rectilínea y uniforme sobre el eje horizontal a una velocidad constante de cincuenta metros por segundo. En un instante determinado, una carga explosiva interna detona, dividiendo el proyectil en dos fragmentos de masas idénticas, [[m1]] de dos kilogramos y [[m2]] de dos kilogramos. Tras la explosión, se mide que el primer fragmento sale proyectado verticalmente hacia arriba con una rapidez de cien metros por segundo. El objetivo del problema es determinar el vector velocidad completo del segundo fragmento [[v2]] y demostrar que el movimiento del centro de masas global del sistema no se ve afectado por la detonación interna.

## Datos
- Masa total del sistema [[M]]: cuatro kilogramos.
- Masa del primer fragmento [[m1]]: dos kilogramos.
- Masa del segundo fragmento [[m2]]: dos kilogramos.
- Velocidad inicial del centro de masas [[v_cm]]: cincuenta metros por segundo en el eje horizontal.
- Velocidad final del primer fragmento [[v1]]: cien metros por segundo en el eje vertical.
- Sistema de referencia: Marco inercial con origen en el punto de la explosión.

## Definición del sistema
Definimos el sistema como el conjunto formado por toda la materia que inicialmente constituía el proyectil. Tras la explosión, el sistema pasa a ser un conjunto de dos partículas discretas que interactúan a través de fuerzas impulsivas internas. Consideramos que el entorno no ejerce ninguna fuerza neta sobre el conjunto durante el intervalo de tiempo en el que ocurre el estallido, lo que nos permite tratar al sistema como un sistema aislado en términos de su momento lineal total.

## Modelo físico
Utilizamos el modelo de sistema de partículas discretas para describir la dinámica traslacional. En este enfoque, el centro de masas [[v_cm]] actúa como un punto matemático ideal que concentra toda la inercia del sistema de masa total [[M]]. El comportamiento de este punto está gobernado exclusivamente por las fuerzas externas aplicadas [[F_ext]], ignorando por completo la complejidad de las interacciones internas.

## Justificación del modelo
La aplicación de este modelo se fundamenta en la segunda ley de Newton para sistemas. Según este principio, la rapidez de cambio del momento lineal total es igual a la suma de todas las fuerzas externas. Puesto que las fuerzas de la explosión son internas, su suma vectorial es estrictamente nula. Al no existir una fuerza externa neta [[F_ext]], la aceleración del centro de masas [[a_cm]] es cero. Esto justifica la ley de conservación del momento lineal total, asegurando que el baricentro del sistema mantenga su estado de movimiento previo a la explosión.

## Resolución simbólica
Para resolver el estado cinemático del sistema, integramos las leyes fundamentales de la dinámica del centro de masas:
1. **Definición del momento lineal total**: Establecemos que [[p_tot]] es el producto de la masa total y la velocidad del baricentro.
   {{f:momentum_cm}}
2. **Media ponderada de velocidades**: Utilizamos la relación estructural para las partes del sistema.
   {{f:vcm_weighted_average}}
3. **Segunda Ley de Newton para sistemas**: Justificamos la invarianza de la trayectoria dado que [[F_ext]] es nula.
   {{f:newton_cm}}
4. **Relación general de momento**: Consideramos que la rapidez de cambio [[dp_tot]] es nula.
   {{f:newton_general_momentum}}
5. **Teorema del impulso**: Confirmamos que al no haber impulso externo [[J_ext]], la variación [[Delta_vcm]] es cero.
   {{f:impulse_momentum_cm}}
6. **Definiciones auxiliares**:
   {{f:vcm_weighted_average}}
   {{f:fext_zero_condition}}
   {{f:acm_zero_result}}

## Sustitución numérica
1. **Cálculo del momento inicial**: El proyectil porta un momento [[p_tot]] equivalente al producto de la masa [[M]] por la velocidad [[v_cm]], resultando en doscientos kilogramos metros por segundo en la dirección horizontal.
2. **Momento del fragmento 1**: [[p1]] se calcula como la masa [[m1]] por su velocidad [[v1]], resultando en doscientos kilogramos metros por segundo en la dirección vertical ascendente.
3. **Determinación del momento del fragmento 2**: Por conservación, [[p2]] se halla restando el momento del fragmento uno al momento total. El resultado es un vector con componente horizontal de doscientos y vertical de menos doscientos kilogramos metros por segundo.
4. **Cálculo de la velocidad [[v2]]**: Dividimos el momento resultante por la masa [[m2]]; la velocidad [[v2]] resulta en cien metros por segundo hacia la derecha y cien metros por segundo hacia abajo.

## Validación dimensional
Verificamos que las unidades del resultado sean coherentes. Al dividir una magnitud de momento por una masa, obtenemos dimensiones de velocidad, lo cual es correcto. El módulo de la velocidad obtenida es de aproximadamente ciento cuarenta y uno metros por segundo. Este valor es físicamente razonable dado que la explosión ha convertido energía química en energía cinética extra para ambos fragmentos, respetando siempre el balance vectorial de la inercia total.

## Interpretación física
El resultado obtenido **significa** que, a pesar de la violencia de la explosión y de que los fragmentos salen en direcciones divergentes, el "corazón inercial" del sistema ignora el suceso. Esto **indica** que el centro de masas sigue moviéndose a cincuenta metros por segundo, lo cual **esto implica** que las fuerzas internas solo pueden redistribuir el movimiento entre las partes. Por tanto, el sistema es **coherente** con la ley de conservación. Es **físicamente** imposible que una fuerza interna desvíe la trayectoria del baricentro global del sistema bajo estudio.

# Ejemplo de aplicación real: Propulsión y colisiones ferroviarias

## Contexto
Analizamos dos escenarios comunes en ingeniería donde la inercia del centro de masas es el factor determinante. Primero, la propulsión de una sonda de mil doscientos kilogramos que eyecta un módulo de doscientos kilogramos a una velocidad de escape [[v_escape]] de dos mil quinientos metros por segundo. Segundo, el choque inelástico de un vagón de diez mil kilogramos contra uno de cinco mil kilogramos en reposo. En ambos casos, las fuerzas externas horizontales [[F_ext]] se consideran despreciables frente a las intensas interacciones internas.

## Estimación física
Para la sonda, el impulso externo [[J_ext]] es nulo, lo que garantiza que la variación de la velocidad del CM [[Delta_vcm]] sea estrictamente cero.
{{f:impulse_momentum_cm}}
La sonda gana un incremento de velocidad [[Delta_v]] de quinientos metros por segundo en la dirección opuesta a la eyección del combustible.
Para el choque ferroviario, la aceleración del centro de masas [[a_cm]] es cero porque no hay empuje externo. Aplicando la definición de media ponderada de la inercia:
{{f:newton_cm}}
Estimamos que el conjunto de vagones acoplados mantiene una velocidad constante de un metro con treinta y tres centímetros por segundo, idéntica a la velocidad original del baricentro del sistema antes del impacto.

## Interpretación
Ambos casos confirman que el centro de masas actúa como el "ancla de movimiento" del sistema. Ya sea mediante la eyección controlada de masa o mediante un choque destructivo inelástico, el estado traslacional global (representado por el CM) permanece inalterado mientras no intervenga una fuerza externa neta. Esta invarianza permite simplificar enormemente el análisis de sistemas complejos, centrándose en el punto donde la física del conjunto se comporta de manera determinista y predecible.
\r
`;export{e as default};
