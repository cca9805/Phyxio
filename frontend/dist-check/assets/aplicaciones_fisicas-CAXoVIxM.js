const e=`# Aplicaciones fisicas\r
\r
## 1. Radiactividad\r
\r
Aparece en leyes de decaimiento. Se calcula cantidad restante, vida media o tiempo transcurrido. El resultado significa fraccion de nucleos no desintegrados. El error peligroso es restar la misma cantidad cada intervalo en lugar de aplicar el mismo factor. Como control final, el alumno debe explicar que dato cambia, que magnitud se calcula y que conclusion fisica permite aceptar o rechazar el resultado.\r
\r
## 2. Amortiguamiento\r
\r
Aparece cuando amplitudes de oscilacion disminuyen proporcionalmente a su valor. Se calcula envolvente, constante de tiempo o reduccion relativa. El resultado interpreta disipacion. El error peligroso es confundir frecuencia de oscilacion con tasa exponencial de perdida. Como control final, el alumno debe explicar que dato cambia, que magnitud se calcula y que conclusion fisica permite aceptar o rechazar el resultado.\r
\r
## 3. Ondas y sonido\r
\r
Aparece en decibelios y escalas de intensidad. Se calculan comparaciones multiplicativas mediante logaritmos. El resultado significa razon entre intensidades. El error peligroso es tratar decibelios como si fueran unidades lineales. Como control final, el alumno debe explicar que dato cambia, que magnitud se calcula y que conclusion fisica permite aceptar o rechazar el resultado.\r
\r
## 4. Termodinamica\r
\r
Aparece en procesos con razones, entropia y relajacion hacia equilibrio. Se calcula cambio asociado a cocientes o evolucion temporal. El resultado expresa tendencia relativa. El error peligroso es aplicar logaritmos a magnitudes con unidades sin formar primero una razon adimensional. Como control final, el alumno debe explicar que dato cambia, que magnitud se calcula y que conclusion fisica permite aceptar o rechazar el resultado.\r
\r
## 5. Electronica\r
\r
Aparece en carga y descarga de capacitores. Se calcula tension, corriente o tiempo para alcanzar un porcentaje. El resultado significa aproximacion asintotica. El error peligroso es esperar que el capacitor alcance exactamente el valor final en tiempo finito. Como control final, el alumno debe explicar que dato cambia, que magnitud se calcula y que conclusion fisica permite aceptar o rechazar el resultado.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Cierre intensivo de transferencia\r
\r
En radiactividad, enfriamiento y circuitos RC, el contexto fisico es un cambio proporcional a la cantidad presente. El uso operativo del logaritmo es despejar el tiempo a partir de una razon adimensional como \`N/N0\`, \`T/T0\` o \`V/V0\`.\r
\r
En ondas, sonido y medidas de intensidad, las escalas logaritmicas comparan ordenes de magnitud. Decibelios y pH no son unidades lineales: una diferencia pequena en la escala puede representar un factor grande en la magnitud fisica.\r
\r
En analisis de datos, una grafica semilog permite detectar si un decaimiento experimental es realmente exponencial. Si los puntos no forman una recta, el modelo puede requerir varias constantes de tiempo, ruido de fondo o un mecanismo fisico distinto.\r
\r
`;export{e as default};
