# Aplicaciones de las leyes de kepler

## 1. Estimacion de periodos de satelites terrestres

Las leyes de Kepler permiten estimar el periodo [[T]] de un satelite a partir del semieje mayor [[a]] y de la masa central terrestre [[M]]. En una primera fase de diseno, esta estimacion decide cuantas vueltas da el satelite por dia, cuanto tiempo tarda en regresar a una zona de interes y que ventanas de comunicacion aproximadas puede ofrecer. No hace falta conocer todos los detalles de la orbita para obtener una escala temporal razonable.

Variable dominante: [[a]]. El semieje mayor es la variable que mas directamente gobierna el periodo en la tercera ley. La excentricidad [[e]] modifica donde pasa mas o menos tiempo dentro de la orbita, pero no cambia el periodo ideal si [[a]] permanece fijo.

Límite de validez: el calculo es fiable como primera aproximacion si el arrastre atmosferico y las maniobras son pequenos durante la orbita considerada. En satelites muy bajos, [[a]] disminuye con el tiempo y el periodo deja de ser estrictamente constante. Tambien hay que recordar que la Tierra no es perfectamente esferica; para una prediccion fina, el achatamiento introduce precesiones que Kepler no recoge.

En la practica, esta estimacion se usa como filtro inicial: si el periodo aproximado ya no sirve para la mision, no merece la pena pasar todavia a un simulador orbital mas caro. Si encaja, el modelo kepleriano da una primera arquitectura que despues se corrige con perturbaciones.

## 2. Comparacion de orbitas planetarias

La forma comparativa de la tercera ley permite comparar periodos de planetas que orbitan el mismo Sol sin introducir explicitamente [[G]], [[M]] ni [[mu]]. Si se conoce una orbita de referencia, como la terrestre, se puede estimar el periodo de otra a partir del cociente de semiejes [[a2]]/[[a1]]. Esta es una herramienta didactica muy potente porque muestra que la escala temporal del sistema solar sigue una regularidad comun.

Variable dominante: relacion [[a2]]/[[a1]]. El cociente de semiejes decide como escala [[T2]] respecto a [[T1]].

Límite de validez: solo puede usarse si las orbitas comparten la misma masa central dominante. Comparar directamente un satelite terrestre con un planeta solar usando la forma comparativa seria un error de modelo. Ademas, si la precision requerida es muy alta, las perturbaciones mutuas entre planetas obligan a corregir la regularidad kepleriana ideal.

Esta aplicacion tambien ayuda a interpretar tablas astronomicas. Cuando se ordenan planetas por distancia media al Sol, sus periodos crecen de forma predecible, y las desviaciones pequenas se leen como senales de que el sistema real no es exactamente de dos cuerpos.

## 3. Interpretacion de orbitas excentricas

En cometas, satelites de transferencia y orbitas muy alargadas, la primera y la segunda ley explican por que el objeto parece acelerar mucho cerca del pericentro y pasar mucho tiempo lejos del foco. La variable [[e]] controla el alargamiento de la elipse, mientras [[dA_dt]] conserva el barrido areal. Esta lectura evita pensar que una orbita excentrica es simplemente una circunferencia deformada con velocidad uniforme.

Variable dominante: [[e]]. La excentricidad decide cuanto varian [[r]] y la rapidez a lo largo de la trayectoria.

Límite de validez: la interpretacion es eliptica ligada solo mientras 0 <= [[e]] < 1. Si la trayectoria es parabolica o hiperbolica, se necesita otro modelo. En cometas reales, ademas, la emision de gases y la influencia planetaria pueden alterar ligeramente el recorrido respecto a una elipse fija.

## 4. Planificacion de transferencias orbitales

En maniobras de transferencia, como pasar de una orbita baja a otra mas alta, se usan elipses intermedias. Kepler permite estimar el tiempo de vuelo de esa transferencia leyendo el semieje mayor de la elipse de transferencia. Aunque el diseno completo requiere dinamica, energia y maniobras, las leyes de Kepler dan el reloj basico del tramo balistico.

Variable dominante: [[a]] de la elipse de transferencia. Aunque el perigeo y el apogeo sean importantes, el tiempo de media vuelta depende de la escala global de la elipse.

Límite de validez: solo describe el tramo sin empuje apreciable. Durante los encendidos de motor, el movimiento no es puramente kepleriano y debe tratarse con dinamica de maniobras. Tampoco incluye restricciones de combustible, ventanas de lanzamiento ni orientacion del plano orbital.

## 5. Diagnostico de perturbaciones

Cuando una orbita real no conserva la relacion esperada entre [[a]] y [[T]], o cuando el barrido areal no se mantiene aproximadamente constante, las leyes de Kepler funcionan como prueba de referencia. La desviacion no significa que Kepler sea inutil, sino que hay fisica adicional: arrastre, achatamiento del planeta, influencia de otros cuerpos o propulsiones no modeladas.

Variable dominante: desviacion de [[T]], [[a]] o [[dA_dt]] respecto al comportamiento ideal. La ley ideal proporciona la linea base.

Límite de validez: el diagnostico exige datos de calidad y un intervalo temporal adecuado. Pequenas desviaciones pueden deberse a incertidumbre de medida, pero desviaciones sistematicas indican que el modelo de dos cuerpos ya no basta. La utilidad de Kepler en este caso es servir de patron de comparacion: cuanto mejor se conoce el ideal, mas claramente se detecta la fisica que falta.
