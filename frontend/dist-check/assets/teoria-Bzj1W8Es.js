const e=`# Linealizacion y ajuste

## Que es

Linealizar es transformar una relacion no lineal para que sus datos se representen como una recta. Ajustar es estimar la recta que mejor resume datos con dispersion. La meta no es dibujar una linea bonita, sino obtener parametros fisicos interpretables.

Una recta ajustada tiene pendiente, corte y residuos. La pendiente suele representar una constante fisica; el corte puede representar valor inicial o error sistematico; los residuos muestran cuanto se apartan los datos del modelo.

## Por que aparece en fisica

Aparece en laboratorio porque las medidas tienen ruido y porque muchos modelos se prueban mejor al transformarlos. Un muelle se verifica con fuerza frente a estiramiento, un gas ideal con presion frente a temperatura, y un decaimiento con logaritmo de la magnitud frente al tiempo.

Tambien aparece en campos y leyes de potencia. Si una relacion parece \`y = k x^n\`, una grafica log-log puede convertir el exponente en pendiente. Asi se decide si el modelo propuesto tiene apoyo experimental.

## Idea visual o geometrica

La imagen mental es enderezar una curva sin cambiar la pregunta fisica. No se manipulan datos para ocultar problemas; se eligen nuevos ejes que vuelven lineal la relacion esperada por el modelo.

Si despues de transformar los puntos quedan alineados, la pendiente y el corte pueden leerse con mas claridad. Si quedan patrones curvos en los residuos, el modelo linealizado no esta capturando toda la fisica.

## Lenguaje simbolico minimo

Una recta se escribe \`Y = m X + b\`, donde \`X\` e \`Y\` pueden ser variables transformadas. Por ejemplo, si \`y = A e^(kt)\`, entonces \`ln(y) = ln(A) + kt\`; al graficar \`ln(y)\` frente a \`t\`, la pendiente es \`k\`.

En una ley de potencia \`y = C x^n\`, tomar logaritmos da \`log(y) = log(C) + n log(x)\`. En una grafica log-log, la pendiente representa el exponente \`n\` y el corte representa la escala \`C\`.

## Que significa el resultado

El resultado de un ajuste no es solo una ecuacion. La pendiente debe tener unidad y significado, el corte debe ser fisicamente razonable y la dispersion debe indicar la calidad del modelo. Un buen ajuste no sustituye al juicio fisico.

Si la pendiente de \`F\` frente a \`x\` es \`120 N/m\`, se interpreta como constante elastica. Si el corte no es cero cuando deberia, puede indicar calibracion, rozamiento, offset instrumental o modelo incompleto.

## Cuando no debes usarlo

No debes linealizar sin modelo. Probar transformaciones hasta que algo parezca recto puede fabricar una conclusion falsa. La transformacion debe venir de una relacion fisica esperada.

Tampoco debes aceptar un ajuste por tener alta correlacion si los residuos muestran patron, si las unidades no tienen sentido o si el intervalo incluye datos fuera del regimen del modelo.

## Resumen operativo

Primero formula el modelo fisico esperado. Despues decide que variables transformar, grafica los datos, ajusta una recta, lee pendiente y corte con unidades, revisa residuos e interpreta el resultado dentro del dominio medido.

Nivel basico: reconocer nube, recta y dispersion. Nivel intermedio: calcular pendiente y corte. Nivel avanzado: elegir transformacion, interpretar residuos, incertidumbre y limites del modelo.
`;export{e as default};
