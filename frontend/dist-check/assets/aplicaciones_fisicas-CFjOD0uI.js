const e=`# Aplicaciones fisicas\r
\r
## 1. Control de resultados en problemas\r
\r
El uso mas inmediato es detectar respuestas imposibles. Si una aceleracion humana sale como \`10^5 m/s^2\`, el problema no necesita mas decimales: necesita revisar unidades, formula o datos.\r
\r
Este control debe hacerse antes de entregar cualquier resultado. La calculadora puede dar muchos digitos a una respuesta que fisicamente no tiene sentido.\r
\r
## 2. Cinematica\r
\r
<!-- algebra-numbered-app-fix-v1:2 -->\r
Contexto fisico: movimiento con rangos conocidos de velocidad, distancia y tiempo. Uso operativo: estima la escala antes de calcular y detecta conversiones imposibles.\r
\r
En movimiento, el orden de magnitud permite distinguir caminar, correr, circular en coche, volar o viajar en una orbita. Cada situacion ocupa rangos distintos de velocidad, distancia y tiempo.\r
\r
Tambien ayuda a detectar conversiones equivocadas entre kilometros por hora y metros por segundo, o entre minutos y segundos.\r
\r
## 3. Dinamica y fuerzas\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Contexto fisico: interacciones mecanicas que compiten sobre el mismo cuerpo. Uso operativo: compara ordenes de fuerza para decidir que termino domina el modelo.\r
\r
En dinamica, comparar ordenes de fuerza ayuda a saber que interacciones dominan. Una fuerza de \`10^3 N\` no se trata igual que una de \`10^-2 N\` si actuan sobre el mismo cuerpo.\r
\r
Esto es clave para decidir si rozamiento, peso, empuje, tension o resistencia del aire pueden despreciarse en una primera aproximacion.\r
\r
## 4. Energia y potencia\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Contexto fisico: transferencia o consumo de energia en dispositivos y procesos. Uso operativo: estima potencia o energia y detecta si el resultado pertenece a otra escala fisica.\r
\r
Los ordenes de magnitud permiten diferenciar energia cotidiana, energia industrial y energia astronomica. Un julio, un kilojulio, un megajulio y un gigajulio pertenecen a escalas muy distintas.\r
\r
En potencia ocurre lo mismo: miliwatios, vatios, kilovatios y megavatios describen dispositivos y procesos radicalmente diferentes.\r
\r
## 5. Escalas astronomicas y microscopicas\r
\r
En astronomia y fisica microscopica, el orden de magnitud es imprescindible porque los numeros exactos son menos informativos que la escala. Radios planetarios, distancias orbitales, atomos y moleculas se separan por muchas potencias de diez.\r
\r
Leer exponentes permite situar el fenomeno en el nivel correcto y evitar comparar objetos que pertenecen a escalas incompatibles.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Cierre intensivo de transferencia\r
\r
En mecanica, el contexto tipico es estimar si una velocidad, una aceleracion o una energia tiene escala humana, planetaria o microscopica. El uso operativo es hacer una cuenta aproximada antes del calculo fino para detectar errores de unidades.\r
\r
En electricidad, una potencia estimada por orden de magnitud permite distinguir un sensor, una bombilla, un motor y una central. Si el resultado cae seis ordenes fuera de lo esperado, el problema no es redondeo: probablemente hay una conversion o modelo mal usado.\r
\r
En laboratorio, estimar el orden de magnitud decide si una medida sera visible con el instrumento disponible. Una incertidumbre de \`0.1 mm\` no sirve para resolver una variacion esperada de \`10^-6 m\` sin cambiar de tecnica.\r
\r
`;export{e as default};
