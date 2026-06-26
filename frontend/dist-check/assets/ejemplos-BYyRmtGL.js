const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
El coche A circula por una autopista a 20 m/s y pasa por el origen (0) en el instante $t = 0$. En ese mismo instante, el coche B se encuentra $240\\;\\text{m}$ por delante (240 m) y circula a 8 m/s en el mismo sentido.\r
\r
Calcula: **(a)** la separación inicial [[d_0]] y la velocidad relativa de A respecto a B; **(b)** el instante en que A alcanza a B; **(c)** la posición donde se produce el encuentro; **(d)** verifica la posición calculando también desde la ecuación horaria de B.\r
\r
## Datos\r
\r
| Símbolo | Significado | Valor |\r
|---|---|---|\r
| $x_{A0}$ | posición inicial de A | $0\\;\\text{m}$ |\r
| $x_{B0}$ | posición inicial de B | $240\\;\\text{m}$ |\r
| $v_A$ | velocidad de A | $20\\;\\text{m/s}$ |\r
| $v_B$ | velocidad de B | $8\\;\\text{m/s}$ |\r
\r
Sentido positivo: dirección del movimiento de ambos vehículos. Los dos cuerpos se mueven en MRU.\r
\r
## Definición del sistema\r
\r
Se consideran dos móviles sobre el mismo eje rectilíneo, descritos dentro del mismo sistema de referencia. La magnitud [[d_0]] representa la separación inicial; la magnitud [[v_rel]] (velocidad relativa de aproximación [[v_rel]] ) resume a qué ritmo A reduce la distancia respecto a B; [[t_e]] es el instante de encuentro [[t_e]] y [[x_e]] es la posición donde se produce. La la relacion correspondiente (x_A( [[t_e]] ) → x_B( [[t_e]] )) es el principio organizador de toda la resolución.\r
\r
{{f:condicion_encuentro}}\r
\r
\r
## Modelo físico\r
\r
Ambos móviles mantienen velocidad constante, por lo que la estructura aplicable es la relacion correspondiente. La la relacion correspondiente fija la magnitud de la ventaja de B; la la relacion correspondiente determina con qué rapidez A recorta esa ventaja. Una vez conocido $ [[t_e]] $, la la relacion correspondiente da la coordenada del cruce.\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
{{f:separacion_inicial}}\r
\r
{{f:velocidad_relativa_encuentro}}\r
\r
{{f:posicion_encuentro_mru}}\r
\r
\r
## Justificación del modelo\r
\r
En una autopista recta y con crucero activado, la velocidad de cada vehículo puede considerarse constante durante el intervalo de tiempo relevante. La escala del problema — tramos de pocos kilómetros y velocidades de 20–30 m/s — es compatible con ese régimen: la aceleración media medida por GPS sería inferior a 0,1 m/s², lo que produce un error en la posición inferior al 1 % sobre los 400 m de recorrido. Por tanto, el modelo la relacion correspondiente describe el encuentro con suficiente precisión. Si alguno de los dos vehículos estuviera acelerando o frenando activamente, habría que sustituir la relacion correspondiente por la relacion correspondiente y resolver una ecuación cuadrática; en ese caso, la magnitud [[v_rel]] dejaría de ser constante y la noción de "tiempo de cierre" requeriría integrar la velocidad relativa en el tiempo.\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
{{f:encuentro_mrua}}\r
\r
\r
## Resolución simbólica\r
\r
{{f:encuentro_retrasado}}\r
\r
\r
{{f:encuentro_mrua}}\r
\r
\r
**Apartado (a) — separación y velocidad relativa:**\r
\r
{{f:separacion_inicial}}\r
\r
\r
{{f:velocidad_relativa_encuentro}}\r
\r
\r
**Apartado (b) — instante de encuentro** (\`la relacion correspondiente):\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
\r
**Apartado (c) — posición de encuentro [[x_e]] ** (ecuación horaria de A, la relacion correspondiente\`):\r
\r
{{f:posicion_encuentro_mru}}\r
\r
\r
\r
**Apartado (d) — verificación** (ecuación horaria de B):\r
\r
\r
Si ambas expresiones dan el mismo valor, la la relacion correspondiente queda satisfecha.\r
\r
{{f:condicion_encuentro}}\r
\r
\r
## Sustitución numérica\r
\r
**Apartado (a):**\r
\r
\r
La velocidad relativa es positiva: A se aproxima a B a razón de 12 m/s.\r
\r
**Apartado (b):**\r
\r
\r
**Apartado (c):**\r
\r
\r
**Apartado (d):**\r
\r
\r
## Validación dimensional\r
\r
La separaci?n inicial es longitud y la velocidad relativa es longitud por tiempo, de modo que su cociente devuelve segundos. La posici?n de encuentro suma posici?n inicial y velocidad por tiempo, conservando unidades de longitud.\r
\r
\r
## Interpretación física\r
\r
El apartado (a) pone de relieve que la magnitud [[v_rel]] — la velocidad relativa de aproximación — es el dato estructuralmente central del problema: aunque A va a 20 m/s y B a 8 m/s en el mismo sentido, lo que determina si hay encuentro y cuándo es la diferencia [[v_rel]]. Si $v_{rel}$ fuera nula (misma velocidad), la separación [[d_0]] nunca se cerraría y el encuentro no existiría. Si fuera negativa (B más rápido que A), la distancia crecería. El apartado (b) aplica la relacion correspondiente directamente: el tiempo de encuentro es simplemente la separación inicial [[d_0]] dividida por la velocidad relativa [[v_rel]], una relación que se puede leer como "¿cuánto tiempo necesita A para cubrir esa ventaja a ritmo de cierre constante?". El resultado de 20 s no depende de la velocidad absoluta de ninguno de los dos: solo de la diferencia entre ellas y de la separación inicial. El apartado (c) obtiene la posición de encuentro 400 m sustituyendo $ [[t_e]] $ en la ecuación horaria de A. El apartado (d) verifica que la ecuación horaria de B conduce al mismo valor, lo que confirma que la \`la relacion correspondiente (x_A) se cumple en ese instante y posición. Obsérvese que en los 20 s previos al encuentro B ha avanzado 160 m desde su posición inicial, pero A le ha ganado exactamente los 240 m de ventaja inicial que B tenía al comienzo.\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
{{f:condicion_encuentro}}\r
\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un coche de policía está parado en un control (0, 0) cuando pasa junto a él un vehículo infractor a 30 m/s. El policía tarda Δ t [[dt]] → 4 s en arrancar y alcanza una velocidad constante de crucero de 40 m/s al terminar la aceleración (se simplifica el arranque asumiendo que, pasados los 4 s, el policía circula ya a 40 m/s constante).\r
\r
## Estimación física\r
\r
Antes de calcular, se puede estimar el resultado cualitativamente: el policía tiene una ventaja de velocidad de [[v_rel]] . La ventaja espacial del infractor al arrancar el policía es [[d_0]] ' → 30 × 4 → 120 m. Con 10 m/s, el tiempo de persecución efectiva es del orden de 120/10 → 12 s, lo que confirma que el encuentro ocurre en decenas de segundos y a menos de un kilómetro. Con esta estimación previa, el cálculo detallado no produce sorpresas.\r
\r
Durante los Δ t → 4 s de retraso, el infractor avanza:\r
\r
\r
A partir de ese instante, se aplica la relacion correspondiente\` con x_I0' → 120 m (ventaja del infractor cuando el policía arranca), 30 m/s y 40 m/s:\r
\r
{{f:encuentro_retrasado}}\r
\r
\r
\r
\r
La posición de interceptación es:\r
\r
\r
desde el control original.\r
\r
## Interpretación\r
\r
La velocidad relativa [[v_rel]] de 10 m/s determina la rapidez con que el policía recorta la ventaja de 120 m que el infractor lleva en el momento del arranque. Nótese que esa ventaja de 120 m es v_I · Δ t → 30 × 4: el intervalo de retraso $\\Delta t$ multiplica la velocidad del infractor para generar la separación inicial efectiva. El modelo la relacion correspondiente reexpresa el retraso $\\Delta t$ como una ventaja espacial inicial del móvil más rápido, trasladando el problema al esquema estándar de la relacion correspondiente. Los 12 s de persecución efectiva, sumados a los 4 s de retraso, dan 16 s totales desde el paso del infractor por el control hasta la interceptación a 640 m. Si el policía necesitara acelerar durante un tramo antes de alcanzar los 40 m/s, ese tramo requeriría la relacion correspondiente para modelar correctamente la posición durante la fase de arranque; el esquema simplificado aquí usado subestima ligeramente la distancia real de interceptación pero es suficiente para una estimación de primer orden.\r
\r
{{f:encuentro_retrasado}}\r
\r
{{f:tiempo_encuentro_mru_mru}}\r
\r
{{f:encuentro_mrua}}\r
\r
`;export{e as default};
