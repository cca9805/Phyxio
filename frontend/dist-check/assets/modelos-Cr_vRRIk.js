const e=`# Modelos físicos

## Modelo ideal

El modelo ideal usa un tramo conductor recto con [[I]] estacionaria dentro de un [[B]] uniforme. La longitud relevante es [[L]], no la longitud total del circuito. La fuerza calculada [[F_B]] representa el modulo total sobre el tramo expuesto.

La simplificacion central es que la corriente, el campo y la orientacion se mantienen constantes sobre el segmento. Asi, la fuerza puede tratarse como una accion distribuida uniforme, resumida tambien por [[f_L]].

## Hipótesis

- El conductor es recto; si esta curvado, hay que sumar segmentos.
- El campo es uniforme; si varia, [[F_B]] cambia de punto a punto.
- La corriente [[I]] es estacionaria; si cambia rapidamente, aparecen efectos transitorios.
- La longitud [[L]] esta completamente dentro del campo; si no, se debe usar solo el tramo efectivo.
- La deformacion mecanica es pequena; si el cable se mueve mucho, cambia la geometria.

## Dominio de validez cuantitativo

El modelo es adecuado en campos de 10^-3 T a varios teslas y corrientes de laboratorio de 0.1 A a 20 A, siempre que el conductor no se caliente de forma apreciable. Una condicion practica es [[L]] > 1 cm para que el tramo efectivo tenga sentido experimental.

El error suele ser inferior al 5 % cuando el campo es casi uniforme y la incertidumbre de orientacion es pequena. En maquinas reales, esta condicion se comprueba por calibracion mecanica y termica.

## Señales de fallo del modelo

Una senal de fallo es que la fuerza medida no crezca linealmente con [[I]]. Otra es que al duplicar la longitud expuesta la fuerza no cambie en la proporcion esperada. Eso sugiere campo no uniforme, mala medicion de [[L]] o calentamiento.

Tambien falla si el conductor vibra, se dobla o cambia de posicion durante la lectura. Entonces la orientacion y [[s_theta]] dejan de ser constantes.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si el conductor no es recto, dividirlo en tramos pequenos y sumar la fuerza de cada segmento. Si el campo cambia, usar el valor local de [[B]] en cada tramo.

La transicion al modelo de espira conviene cuando dos o mas lados del circuito reciben fuerzas que producen giro. En ese caso la pregunta central ya no es solo fuerza total, sino par mecanico.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Geometria | Tramo recto unico | Cable curvo o espira |
| Campo | Uniforme | Variable por posicion |
| Resultado | [[F_B]] y [[f_L]] | Suma de fuerzas o par |
| Uso | Aula y estimacion rapida | Motor, altavoz o actuador real |
`;export{e as default};
