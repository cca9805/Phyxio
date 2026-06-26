const e=`\uFEFF# Vasos comunicantes - Modelo y validez\r
\r
## Modelo ideal\r
El modelo ideal del leaf supone que dos ramas conectadas comparten una misma presion a igual profundidad. Cuando el sistema esta en reposo, la comparacion correcta no se hace entre puntos arbitrarios, sino entre puntos que estan sobre una misma horizontal dentro del liquido.\r
\r
La expresion mas util del equilibrio es:\r
\r
\r
[[rho1]] * [[h1]] = [[rho2]] * [[h2]]\r
\r
\r
o, si el problema pide la altura en la rama 2,\r
\r
\r
[[h2]] = frac{[[rho1]] * [[h1]]}{[[rho2]]}\r
\r
\r
Su fuerza didactica es que conecta una imagen muy simple, dos columnas conectadas, con una lectura fisica precisa: la rama mas ligera necesita mayor altura para compensar la misma presion de fondo.\r
\r
## Hipótesis\r
- El sistema esta en equilibrio hidrostatico.\r
- Las dos alturas se miden desde la misma horizontal de referencia.\r
- La gravedad es la misma para ambas ramas.\r
- Las densidades [[rho1]] y [[rho2]] pueden tratarse como constantes.\r
\r
## Dominio de validez cuantitativo\r
El modelo funciona especialmente bien cuando las columnas son claramente identificables y las interfaces no estan deformadas por agitacion o mezcla. En problemas escolares y en montajes tecnicos simples, un criterio razonable es trabajar con [[h1]] >= 0, [[h2]] >= 0 y densidades positivas. Tambien conviene tener una referencia cuantitativa util: si [[rho1]] = [[rho2]], el equilibrio obliga a [[h1]] = [[h2]]; si [[rho2]] vale la mitad de [[rho1]], entonces [[h2]] debe ser aproximadamente el doble de [[h1]]. Ese tipo de comparacion por orden de magnitud permite detectar resultados absurdos sin recalcular toda la expresion.\r
\r
## Señales de fallo del modelo\r
Hay avisos observables de que el modelo ideal ya no basta. Si las superficies no se estabilizan, el sistema no esta en equilibrio. Si las alturas se leen desde referencias distintas, el resultado deja de tener significado fisico. Tambien hay fallo de modelo cuando se usan varias interfaces o varios fluidos por rama y se pretende reducir todo a una sola [[h1]] y una sola [[h2]]. Otra senal clara aparece cuando el resultado contradice el limite evidente: fluidos iguales no pueden terminar con alturas distintas en el modelo ideal.\r
\r
## Modelo extendido o alternativo\r
Cuando hay mas de dos tramos relevantes, el modelo debe ampliarse a una suma de contribuciones hidrostaticas. En vez de una sola igualdad [[rho1]] [[h1]] = [[rho2]] [[h2]], se construye un balance por segmentos. Cada tramo aporta su densidad y su altura efectiva. Este modelo extendido tambien es necesario si el problema incluye geometria compleja, interfaces multiples o ramas en las que no toda la columna pertenece al mismo fluido.\r
\r
## Comparación operativa\r
El modelo ideal es mejor cuando una rama puede resumirse con [[rho1]] y [[h1]] y la otra con [[rho2]] y [[h2]]. El modelo extendido es necesario cuando el esquema real ya no permite esa reduccion sin perder informacion fisica. La regla operativa es simple: si una misma horizontal compara dos columnas equivalentes, usa el modelo ideal; si la ruta de presiones atraviesa varios fluidos o varias interfaces, cambia al modelo extendido antes de calcular.\r
\r
La ventaja del leaf es precisamente esa claridad. Primero ofrece una lectura compacta del equilibrio entre dos ramas. Despues deja claro cuando esa compacidad deja de ser suficiente. Esa transicion entre modelo ideal y modelo ampliado es una parte central del aprendizaje experto.\r
\r
`;export{e as default};
