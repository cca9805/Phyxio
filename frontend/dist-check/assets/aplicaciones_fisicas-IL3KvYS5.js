const e=`# Aplicaciones fisicas\r
\r
## 1. Medidas de laboratorio\r
\r
<!-- algebra-numbered-app-fix-v1:1 -->\r
Contexto fisico: medicion experimental con instrumentos de distinta resolucion. Uso operativo: calcula la conversion a unidad SI y detecta cambios de escala antes de sustituir.\r
\r
En el laboratorio se miden longitudes en milimetros, masas en gramos, tiempos en milisegundos y voltajes en milivoltios. La notacion cientifica permite llevar esos datos a unidades compatibles antes de aplicar una formula.\r
\r
Esta conversion evita errores de escala. Una masa de \`5 g\` no es \`5 kg\`, y una distancia de \`2 mm\` no es \`2 m\`. El prefijo cambia el orden de magnitud del calculo.\r
\r
## 2. Cinematica\r
\r
En movimiento, las distancias pueden ir desde milimetros en una vibracion hasta kilometros en un trayecto. Las velocidades pueden expresarse en \`m/s\`, \`km/h\` o incluso escalas astronomicas.\r
\r
Usar potencias de diez ayuda a comparar si una velocidad o aceleracion calculada tiene sentido. Si una persona caminando aparece con \`10^5 m/s\`, hay una conversion mal hecha.\r
\r
## 3. Electricidad\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Contexto fisico: circuito o dispositivo con corrientes y potencias de escalas diferentes. Uso operativo: calcula con prefijos convertidos y compara si el resultado pertenece a electronica o potencia industrial.\r
\r
La electricidad usa prefijos constantemente: miliamperios, microculombios, kilohmios, megavatios. Operar sin convertirlos puede cambiar una corriente o una potencia por factores de mil o de un millon.\r
\r
En circuitos, escribir cada prefijo como potencia de diez permite calcular con unidades coherentes y leer si el resultado esta en escala domestica, electronica o industrial.\r
\r
## 4. Fisica atomica y microscopica\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Contexto fisico: fenomenos atomicos, moleculares o microscopicos. Uso operativo: calcula la potencia de diez equivalente e interpreta si la escala corresponde al objeto estudiado.\r
\r
Las escalas atomicas usan nanometros, picometros, electronvoltios y cargas muy pequenas. Sin notacion cientifica, los numeros microscopicos quedan ocultos entre ceros y se vuelven dificiles de comparar.\r
\r
La potencia de diez permite ver si una longitud pertenece a una molecula, a una celula o a un objeto cotidiano. Esa lectura evita mezclar niveles fisicos incompatibles.\r
\r
## 5. Astronomia\r
\r
En astronomia aparecen kilometros, unidades astronomicas, masas enormes y tiempos muy largos. La notacion cientifica permite escribir esos valores sin perderse en cadenas de ceros.\r
\r
Tambien permite comparar escalas. Un radio planetario, una distancia orbital y una distancia interestelar no estan en el mismo orden de magnitud; leer los exponentes ayuda a situar el fenomeno.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Cierre intensivo de transferencia\r
\r
En laboratorio, el contexto aparece al pasar de milimetros a metros, de microsegundos a segundos o de miliamperios a amperios. El uso operativo es convertir todos los datos antes de comparar, porque un prefijo mal leido puede cambiar el resultado por factores de mil o de un millon.\r
\r
En electricidad, una corriente de \`2 mA\` y una de \`2 MA\` no son variantes tipograficas: describen sistemas fisicos radicalmente distintos. Detectar esa escala evita errores peligrosos en potencia, resistencia y energia disipada.\r
\r
En astronomia y fisica microscopica, la notacion cientifica permite comparar radios, masas, tiempos y energias que no caben en escritura decimal ordinaria. La interpretacion correcta no es solo mover comas, sino conservar orden de magnitud y unidad.\r
\r
`;export{e as default};
