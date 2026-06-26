const a=`## 1. Medida del modulo de Young por excitacion por impulso (ASTM E1876)

Una barra rectangular o cilindrica se apoya en sus puntos nodales del primer modo flexional y se golpea en el centro. Se mide la frecuencia fundamental longitudinal con un microfono. La frecuencia libre-libre permite obtener [[v_L]] y la relacion de velocidad longitudinal permite obtener [[E_young]]. El metodo es no destructivo, rapido (segundos por muestra) y preciso (error menor del 1 %). Es el estandar industrial para ceramicas, metales sinterizados y materiales fragiles.

Variable dominante: [[f_n]] medida, de la que se extrae [[v_L]] y finalmente [[E_young]].
Limite de validez: la barra debe ser delgada y el modo identificado correctamente. Si se excita un modo flexional en lugar del longitudinal, el modulo obtenido estara mal calculado.
Lectura operativa: el tecnico no interpreta un pico aislado como modulo de forma automatica; primero verifica que el pico pertenece a una familia modal coherente y que el espaciado esperado aparece en el espectro. Si la pieza tiene porosidad o fisuras, [[f_n]] baja porque la rigidez efectiva disminuye antes de que cambie apreciablemente la masa.

## 2. Diseño de diapasones y resonadores acusticos

Un diapason es una barra doblada en U que vibra en su modo flexional fundamental. La frecuencia se ajusta cortando la longitud de las puntas. Barras rectas se usan como resonadores en instrumentos de percusion (xilofono, metalofono): la longitud de cada barra se calcula para afinar una nota concreta usando la formula de resonancia longitudinal o flexional segun el diseño.

Variable dominante: [[L_barra]], que se ajusta para obtener la [[f_n]] deseada con el [[v_L]] del material elegido.
Limite de validez: para barras gruesas o modos altos, la dispersion altera la afinacion y se requieren correcciones empiricas o modelos numericos.
Lectura operativa: el afinador escucha o mide la frecuencia resultante, retira material de forma controlada y vuelve a medir. Reducir la longitud eleva [[f_n]], mientras que rebajar zonas concretas puede desplazar nodos y antinodos. Por eso un instrumento real combina calculo inicial con ajuste experimental fino.

## 3. Transductores ultrasonicos de potencia (sonotrodos)

En procesos industriales (soldadura ultrasonica, limpieza, homogeneizacion), se usan barras metalicas que vibran longitudinalmente a su frecuencia de resonancia (tipicamente 20-40 kHz). El diseño consiste en calcular la longitud para que la barra resuene a la frecuencia del generador electrico. Se usa la formula libre-libre o con condiciones de contorno que modelan la carga mecanica en la punta.

Variable dominante: [[L_barra]] y [[v_L]] del material (titanio, aluminio, acero), ajustados para que [[f_n]] coincida con la frecuencia del generador.
Limite de validez: a potencias altas, la temperatura sube y cambia [[E_young]] y [[rho]] ligeramente, desplazando la frecuencia de resonancia. Se requiere control de frecuencia activo.
Lectura operativa: el sonotrodo se diseña para que el antinodo de desplazamiento quede en la punta de trabajo. Una desviacion pequeña de [[f_n]] reduce la transferencia de energia y aumenta el calentamiento, de modo que la electronica suele seguir la resonancia en tiempo real durante la soldadura o limpieza.

## 4. Sensores de masa basados en resonadores MEMS

Micro-barras de silicio (cantilevers) vibran a su frecuencia natural. Cuando una masa se deposita sobre la barra, la frecuencia disminuye proporcionalmente a la masa añadida. Midiendo el desplazamiento de frecuencia se detectan masas del orden de picogramos. Es la base de nanobalanzas, sensores biologicos y detectores quimicos.

Variable dominante: [[f_n]], cuyo desplazamiento revela la masa añadida.
Limite de validez: el modelo de barra simple falla cuando la masa distribuida es comparable a la masa del resonador o cuando hay amortiguamiento por el medio circundante (liquido vs vacio).
Lectura operativa: el sensor se calibra midiendo cambios muy pequeños de [[f_n]] alrededor de una referencia limpia. La señal util no es la frecuencia absoluta, sino su desplazamiento respecto al estado inicial. En aire o liquido, el amortiguamiento ensancha el pico y limita la resolucion de masa.

## 5. Control de calidad de materiales por analisis de espectro de resonancia

Se excita una pieza (barra, cilindro, disco) y se mide todo su espectro de frecuencias de resonancia. La comparacion con el espectro predicho por el modelo elastico isotropo revela defectos internos (porosidad, grietas), anisotropia o cambios de composicion. Un material homogeneo tiene armonicos equiespaciados; desviaciones indican heterogeneidad.

Variable dominante: el conjunto de [[f_n]] para multiples modos, y su espaciado relativo.
Limite de validez: piezas geometricamente complejas requieren simulacion numerica para predecir el espectro. El metodo funciona mejor cuanto mas simple sea la geometria (barras, cilindros, discos).
Lectura operativa: en una barra sana, los modos longitudinales mantienen una pauta de espaciado reconocible y los torsionales aparecen en otra familia. Si un lote de piezas muestra una familia desplazada o ensanchada, se revisan densidad, rigidez, tratamientos termicos y defectos internos antes de aceptar la partida.
En planta, esta lectura se cruza con tolerancias de fabricacion: dos piezas con igual geometria pero distinto tratamiento pueden conservar la misma familia modal y aun asi desplazar todo el espectro unos pocos puntos porcentuales. Esa diferencia basta para separar material aceptable, material sospechoso y piezas que requieren inspeccion destructiva posterior.
`;export{a as default};
