const e=`\uFEFF## Errores conceptuales\r
\r
### Error 1: Suponer que la temperatura sigue subiendo durante el cambio de estado\r
\r
**Por que parece correcto**\r
El alumno trata el cambio de estado como si fuera calentamiento sensible. Suma energía y espera que la temperatura subía, aunque el sistema este en [[T_trans]] con dos fases presentes.\r
\r
**Por que es incorrecto**\r
Se recuerda que el calor suele aumentar temperatura, pero se olvida que durante una transicion la energía cambia estructura molecular. En fusion rompe orden cristalino; en vaporizacion separa moleculas del liquido.\r
\r
**Senal de deteccion**\r
Aparece una temperatura mayor que [[T_trans]] mientras aun queda fase inicial, o se dibuja una grafica sin meseta horizontal.\r
\r
**Correccion conceptual**\r
Antes de calcular temperatura final, aplicar el tramo latente con [[Q_lat]], [[m]] y [[L]]. Mientras la transicion no termine, la temperatura queda fijada en [[T_trans]].\r
\r
**Mini-ejemplo de contraste**\r
Se suministran 250 kJ a 500 g de hielo a 0 C. Primero se gastan 167 kJ en fusion; solo el resto calienta el agua liquida. El resultado no puede tratarse como si toda la energía calentara agua desde el principio.\r
\r
## Errores de modelo\r
\r
### Error 2: Confundir el calor latente de fusion con el de vaporizacion\r
\r
**Por que parece correcto**\r
Se usa el valor tabulado de fusion cuando el proceso es vaporizacion, o al revés. La formula general es la misma, pero [[L]] debe corresponder al tipo de transicion.\r
\r
**Por que es incorrecto**\r
Ambos datos se llaman calor latente y suelen aparecer en tablas cercanas. El estudiante memoriza un número de agua sin asociarlo al proceso físico.\r
\r
**Senal de deteccion**\r
El calor para vaporizar una masa de agua sale del mismo orden que el calor para fundir hielo de igual masa. Para agua, el valor de vaporizacion es varias veces mayor que el de fusion.\r
\r
**Correccion conceptual**\r
Leer primero el verbo físico: fundir, solidificar, vaporizar o condensar. Despues escoger el [[L]] adecuado y mantener el signo de [[Q_lat]] segun si el sistema absorbe o cede energía.\r
\r
**Mini-ejemplo de contraste**\r
Para vaporizar 200 g de agua a 100 C, usar el valor de vaporizacion. Si se usa el de fusion, el resultado queda casi siete veces menor y el balance de energía subestima gravemente el proceso.\r
\r
## Errores matemáticos\r
\r
### Error 3: No verificar si la energía disponible es suficiente para completar el cambio de estado\r
\r
**Por que parece correcto**\r
Se supone que toda la masa [[m]] cambia de estado sin comparar la energía disponible con el tramo latente requerido.\r
\r
**Por que es incorrecto**\r
En problemas de calorimetria se busca rápidamente una temperatura final. Pero cuando hay dos fases, la incognita puede ser la masa transformada y no la temperatura.\r
\r
**Senal de deteccion**\r
La temperatura calculada queda por debajo o por encima de [[T_trans]] aunque el planteamiento habia supuesto una transicion completa. Otra senal es que el calor disponible sea menor que el requerido por [[m]] y [[L]].\r
\r
**Correccion conceptual**\r
Primero calcular el coste latente de la masa que se quiere transformar. Si la energía no alcanza, el sistema queda a [[T_trans]] y solo cambia una fraccion de masa.\r
\r
**Mini-ejemplo de contraste**\r
Si agua caliente puede ceder 10 kJ y fundir todo el hielo requiere 16 kJ, no hay temperatura final por encima de 0 C. El resultado correcto es mezcla de hielo y agua a [[T_trans]].\r
\r
## Errores de interpretacion\r
\r
### Error 4: Confundir la temperatura de transicion de la sustancia pura con la de una solucion\r
\r
**Por que parece correcto**\r
Se usa [[T_trans]] de agua pura para una mezcla, una solucion salina o un fluido a presión distinta de la atmosférica.\r
\r
**Por que es incorrecto**\r
Los valores 0 C y 100 C para agua son muy familiares, pero no son universales. Cambian con presión y composicion.\r
\r
**Senal de deteccion**\r
El enunciado menciona sal, soluto, presión elevada, autoclave, refrigerante real o fluido no puro, y aun así se usa una temperatura de transicion estándar.\r
\r
**Correccion conceptual**\r
Identificar material, presión y pureza antes de elegir [[T_trans]]. Si el problema da un valor efectivo, usar ese valor aunque no coincida con el del agua pura.\r
\r
**Mini-ejemplo de contraste**\r
El agua de mar no congela exactamente a 0 C. Usar agua pura para hielo marino desplaza el punto de transicion y altera el balance de calor latente.\r
\r
## Errores de unidades\r
\r
### Error 5: Usar unidades de L en J/g en lugar de J/kg con masa en kg\r
\r
**Por que parece correcto**\r
Se mezcla una masa en kg con un valor de [[L]] tomado de una tabla en J/g, o una energía en kJ con un balance expresado en J.\r
\r
**Por que es incorrecto**\r
Las tablas usan varias escalas para que los números sean manejables. Copiar solo el número sin la unidad desplaza el resultado por factores de mil.\r
\r
**Senal de deteccion**\r
[[Q_lat]] resulta mil veces mayor o menor de lo esperado, o domina el balance de forma absurda para una masa pequena.\r
\r
**Correccion conceptual**\r
Unificar unidades antes de aplicar la formula. Para obtener [[Q_lat]] en J, usar [[m]] en kg y [[L]] en J/kg.\r
\r
**Mini-ejemplo de contraste**\r
Con 200 g de agua, escribir la masa como 0.200 kg si se va a usar [[L]] en J/kg. Si la tabla esta en J/g, convertir el dato antes de multiplicar.\r
\r
## Regla de autocontrol rápido\r
\r
1. Si hay dos fases coexistiendo, la temperatura debe ser [[T_trans]].\r
2. Antes de buscar temperatura final, comprobar si la energía disponible completa el tramo latente.\r
3. Verificar que [[L]] corresponde al proceso y a las unidades usadas.\r
4. En la grafica temperatura-calor, todo cambio de estado debe aparecer como meseta horizontal.\r
\r
`;export{e as default};
