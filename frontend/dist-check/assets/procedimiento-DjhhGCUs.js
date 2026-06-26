const a=`# Procedimiento

## Antes de calcular

Comprueba si el problema habla de factores, razones, ordenes de magnitud o datos muy dispersos. Si solo necesitas diferencias absolutas pequenas, una escala lineal puede ser suficiente.

Verifica que los valores sean positivos antes de usar logaritmos. Si hay ceros, signos negativos o unidades sin cociente adimensional, debes replantear la variable o el modelo.

## Paso 1: identifica el objeto matematico

El objeto puede ser una escala, una grafica semilog, una grafica log-log o una formula logaritmica como dB o pH. Escribe que representa cada eje y que base logaritmica se usa si esta indicada.

En datos fisicos, distingue entre tomar logaritmo de una magnitud y tomar logaritmo de una razon. Muchas escalas reales, como decibelios, usan cocientes respecto a una referencia.

## Paso 2: elige la operacion

Usa escala semilog si esperas crecimiento o decaimiento exponencial. Usa log-log si esperas ley de potencia. Usa escala logaritmica directa si quieres comparar ordenes de magnitud.

Para decibelios o pH, aplica la definicion de la escala. No inventes una conversion lineal: cada unidad logaritmica representa un factor multiplicativo.

## Paso 3: conserva unidades y signos

Los argumentos de logaritmos deben ser positivos y, en formulas fisicas rigurosas, adimensionales. Por eso aparecen cocientes como \`I/I0\` o concentraciones expresadas respecto a unidad de referencia.

El signo delante del logaritmo tambien importa. En \`pH = -log10([H+])\`, una mayor concentracion de \`H+\` produce menor pH por el signo negativo.

## Paso 4: calcula

Para ordenes de magnitud, cuenta potencias de diez. De \`10^-3\` a \`10^2\` hay cinco ordenes de magnitud. Para dB, usa que \`10 dB\` multiplica razon de intensidad por \`10\` y \`20 dB\` por \`100\`.

En una grafica log-log, calcula pendiente como cambio vertical logaritmico dividido por cambio horizontal logaritmico. Esa pendiente es exponente de escala, no pendiente lineal ordinaria.

## Paso 5: interpreta el resultado

Traduce el resultado a factor. Decir "sube dos unidades logaritmicas" es incompleto; hay que decir por cuanto se multiplica la magnitud o la razon.

En una ley de potencia, interpreta el exponente: si es \`2\`, duplicar \`x\` multiplica \`y\` por \`4\`; si es \`-2\`, duplicar \`x\` divide \`y\` por \`4\`.

## Checklist de autocontrol

Valores positivos, cociente adimensional cuando proceda, base logaritmica conocida, escala elegida por modelo, resultado traducido a factor y dominio declarado. Si falta la traduccion a factor, la lectura logaritmica no esta cerrada.
`;export{a as default};
