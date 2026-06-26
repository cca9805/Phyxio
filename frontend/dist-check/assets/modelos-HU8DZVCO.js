const e=`## Modelo ideal

El modelo ideal del régimen sobreamortiguado es un oscilador lineal de segundo orden en respuesta libre, con amortiguamiento viscoso equivalente y parámetros constantes. La comparación [[gamma]] > [[omega0]] clasifica el régimen, y la evolución de [[x]] se obtiene como suma de dos exponenciales reales gobernadas por [[r1]] y [[r2]]. El equilibrio se alcanza sin oscilación sostenida ideal. Este modelo no pretende describir todos los detalles microscópicos de la disipación; su valor está en reducir el problema a dos tasas reales negativas y una salida que se aproxima al equilibrio sin seno ni coseno.

## Hipótesis

La masa efectiva, la rigidez y el coeficiente disipativo no cambian durante el transitorio. La amplitud queda dentro del dominio lineal, de modo que [[C1]] y [[C2]] solo codifican condiciones iniciales y no cambian la estructura del sistema. El rozamiento se aproxima por una ley proporcional a la velocidad. No hay fuerza externa periódica dominante y el intervalo estudiado empieza en [[t]] >= 0.

## Dominio de validez cuantitativo

El criterio mínimo es [[gamma]]/[[omega0]] > 1. Para hablar de sobreamortiguamiento claro, una razón entre 1.1 y 5 suele separar el caso de la frontera crítica sin producir aún una cola exageradamente lenta. Si [[gamma]]/[[omega0]] es 1.01, la diferencia con el caso crítico puede quedar dentro de la incertidumbre experimental. Si supera 10, la raíz lenta puede dominar tanto que el sistema sea no oscilatorio pero poco operativo.

El argumento de las exponenciales debe ser adimensional: [[r1]][[t]] y [[r2]][[t]] no pueden arrastrar unidades. Además, [[r1]] y [[r2]] deben ser negativos; si alguno sale positivo, el sistema no describe retorno estable.

## Señales de fallo del modelo

El modelo falla si la curva medida de [[x]] muestra ciclos sostenidos, si aparecen golpes contra topes, si el rozamiento cambia bruscamente con la velocidad o si la temperatura modifica la disipación durante el experimento. También falla cuando hay excitación externa continua, porque entonces la respuesta observada no es solo libre.

## Modelo extendido o alternativo

Si la disipación no es viscosa, puede emplearse un modelo con rozamiento seco, amortiguamiento dependiente de velocidad o integración numérica. Si hay excitación, conviene pasar al modelo forzado. Cerca de [[gamma]] = [[omega0]], el modelo crítico puede ser una aproximación práctica cuando la incertidumbre impide distinguir raíces separadas.

## Comparación operativa

El modelo ideal sirve para clasificar y estimar tiempos de asentamiento. El modelo extendido sirve cuando los datos reales ya no pueden explicarse con dos exponenciales. La decisión correcta consiste en usar el modelo simple mientras sus signos, escalas y forma gráfica se mantengan coherentes. Si el objetivo práctico es seguridad frente al sobrepaso, el modelo sobreamortiguado puede ser suficiente. Si el objetivo es rapidez, conviene compararlo con el crítico antes de aceptar el diseño.
`;export{e as default};
