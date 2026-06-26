const e=`# Movimiento Circular Uniformemente Acelerado (MCUA)\r
\r
El estudio de la rotación que cambia de ritmo es fundamental para comprender la ingeniería de motores, turbinas y sistemas de transmisión. El MCUA nos permite modelar con precisión cómo un objeto pasa del reposo a la alta velocidad de giro.\r
\r
## Contexto conceptual\r
\r
El Movimiento Circular Uniformemente Acelerado es el análogo rotacional del MRUA en cinemática lineal. Mientras que en el MRUA la velocidad lineal cambia a ritmo constante, en el MCUA es la velocidad angular la que varía de forma uniforme en el tiempo. Este paralelismo es completo: cada magnitud lineal tiene su contraparte angular, y las ecuaciones adoptan la misma forma matemática. Comprender este modelo es esencial para analizar el arranque y frenado de motores eléctricos, turbinas de vapor, ruedas dentadas y cualquier sistema rotativo que deba cambiar de régimen de giro de forma controlada.\r
\r
## 🟢 Nivel esencial\r
\r
Imagina que enciendes un ventilador. Al principio, las aspas están quietas, pero poco a poco empiezan a girar cada vez más rápido hasta alcanzar su velocidad de crucero. Ese proceso de "ganar rapidez" mientras se sigue una trayectoria circular es lo que llamamos Movimiento Circular Uniformemente Acelerado.\r
\r
La idea central es que el objeto no solo está girando, sino que su ritmo de giro aumenta o disminuye de forma constante. A ese cambio de ritmo lo llamamos aceleración angular[[alpha]]. Es como pisar el acelerador de un coche, pero en lugar de movernos por una carretera recta, estamos obligando al sistema a girar sobre el mismo eje cada vez con más brío.\r
\r
Durante el proceso, el punto del objeto que se mueve en el borde de la circunferencia experimenta dos tipos de empuje simultáneos: uno que lo acelera a lo largo del camino circular y otro que lo empuja hacia el centro para mantenerlo en la trayectoria curva. A mayor rapidez de giro, mayor es este segundo empuje hacia el interior.\r
\r
En este nivel, recordamos tres cosas fundamentales:\r
- El camino siempre es un círculo perfecto; el radio[[R]]no cambia.\r
- La aceleración angular[[alpha]]es constante: el ritmo de giro crece o decrece de forma uniforme en el tiempo.\r
- La rapidez tangencial[[v]]en el borde del disco aumenta proporcionalmente al ritmo de giro.\r
\r
## 🔵 Nivel formal\r
\r
Para describir matemáticamente este fenómeno, trasladamos las leyes de la cinemática lineal al dominio angular. La evolución del sistema se define mediante las siguientes relaciones fundamentales:\r
\r
1. **Ecuación de velocidad angular**: Describe cómo cambia la velocidad angular[[omega]]en función del tiempo[[delta_t]]y la aceleración[[alpha]].\r
{{f:mcua_omega_t}}\r
\r
2. **Ecuación de posición angular**: Determina la orientación exacta del objeto[[theta]]en cualquier instante a partir de la posición inicial[[theta_0]].\r
{{f:mcua_theta_t}}\r
\r
3. **Relación sin tiempo**: Permite calcular el desplazamiento angular[[delta_theta]]conociendo solo las velocidades angular inicial[[omega_0]]y final[[omega]].\r
{{f:mcua_sin_t}}\r
\r
4. **Componentes lineales**: Vinculan el giro con la realidad física en el borde del disco de radio[[R]], definiendo la rapidez tangencial[[v]].\r
{{f:mcua_v_omega}}\r
\r
5. **Aceleraciones locales**: El sistema presenta una aceleración tangencial[[a_t]]constante y una aceleración centrípeta[[a_c]]que crece con la velocidad.\r
{{f:mcua_at}}\r
{{f:mcua_ac}}\r
\r
6. **Aceleración total**: El módulo resultante[[a]]de la combinación vectorial de ambas aceleraciones, perpendiculares entre sí.\r
{{f:mcua_a_total}}\r
\r
7. **Desplazamiento angular mediante velocidad media**: Relaciona el ángulo barrido con la velocidad angular media y el intervalo de tiempo[[delta_t]].\r
{{f:mcua_delta_t_theta}}\r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
{{f:mcua_dtheta}}\r
\r
{{f:mcua_delta_omega}}\r
\r
{{f:mcua_omega_med}}\r
\r
{{f:mcua_longitud_arco}}\r
\r
{{f:mcua_vueltas}}\r
\r
## 🔴 Nivel estructural\r
\r
El MCUA es un modelo idealizado que solo es válido bajo condiciones estructurales específicas. Su aplicación incorrecta puede llevar a predicciones erróneas en sistemas de ingeniería reales.\r
\r
- **Rigidez del radio**: La distancia[[R]]al centro debe ser constante a lo largo de todo el movimiento. Si el radio fluctúa, el movimiento deja de ser puramente circular y entramos en dinámicas de espirales o trayectorias elípticas, que requieren un tratamiento diferente.\r
- **Constancia de la aceleración angular**: El modelo exige que[[alpha]]sea estrictamente constante durante el intervalo analizado. Si el torque aplicado varía (por rozamiento creciente, por ejemplo), la aceleración angular cambia y el modelo deja de ser válido.\r
- **Inercia constante**: Se asume que el momento de inercia del cuerpo no cambia durante el movimiento. Si la distribución de masas varía (por ejemplo, en un sistema donde se enrolla una cuerda), hay que recurrir a modelos más generales de dinámica rotacional.\r
- **Límites físicos y de validez temporal**: En sistemas reales, la fricción y la resistencia del aire suelen aumentar con la velocidad, lo que eventualmente rompe la uniformidad de[[alpha]]. El modelo es válido solo cuando estas perturbaciones son despreciables frente a la fuerza motriz. En la práctica, esto limita su uso a intervalos cortos o a regímenes de baja velocidad.\r
- **Condición de no reversión**: Las ecuaciones sin tiempo suponen que el sistema no cambia el sentido del giro. Si[[omega]]cruza cero y el movimiento invierte la dirección, se deben tratar los dos tramos por separado.\r
\r
Este análisis estructural es vital para la seguridad industrial: permite predecir cuándo las fuerzas centrípetas superarán la resistencia de los materiales durante un arranque crítico, y establecer los límites de operación segura.\r
\r
## Interpretación física profunda\r
\r
La clave para entender el MCUA es distinguir entre los dos tipos de aceleración presentes. La aceleración tangencial[[a_t]]es responsable de que la rapidez cambie: si es positiva, el objeto gira más rápido; si es negativa, frena. La aceleración centrípeta[[a_c]]no cambia la rapidez, sino la dirección del movimiento: la dobla hacia el centro para mantener la trayectoria circular.\r
\r
En el MCUA, mientras[[a_t]]permanece constante (porque[[alpha]]y[[R]]son constantes),[[a_c]]crece cuadráticamente con[[omega]]. Esto significa que la aceleración total[[a]]del punto no es constante: al principio (con[[omega]]pequeña) predomina la componente tangencial, y al final (con[[omega]]grande) predomina la centrípeta. El vector aceleración total rota respecto al punto de aplicación a medida que avanza el movimiento.\r
\r
Este comportamiento diferencia radicalmente el MCUA del MRUA: en el movimiento rectilíneo solo existe una dirección de aceleración, mientras que aquí siempre hay dos componentes ortogonales que deben tratarse por separado.\r
\r
## Orden de magnitud\r
\r
| Sistema Físico | Aceleración Angular | Tiempo | Velocidad Final | Aceleración Tangencial |\r
|---|---|---|---|---|\r
| **Tocadiscos** | Baja | Corto | Moderada | Muy baja |\r
| **Bicicleta** | Media | Medio | Alta | Baja |\r
| **Motor Industrial** | Alta | Corto | Muy alta | Media |\r
| **Ultracentrífuga** | Muy alta | Largo | Extrema | Muy alta |\r
\r
## Método de resolución personalizado\r
\r
1. **Definir estado inicial**: Identificar[[omega_0]]y[[theta_0]], asignando signos según el sentido de referencia elegido.\r
2. **Elegir herramienta**: Usar la ecuación temporal si el tiempo es dato, o la relación sin tiempo si solo se conocen velocidades y posiciones.\r
3. **Calcular componentes**: Hallar[[a_t]]y[[a_c]]por separado antes de combinarlas en la aceleración total[[a]].\r
4. **Obtener magnitudes derivadas**: Si se necesita la longitud de arco[[s]]o el número de vueltas[[N]], aplicarlas tras tener el ángulo.\r
5. **Verificar unidades**: Asegurar que todos los ángulos estén en radianes antes de operar.\r
\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso 1 — Arranque desde el reposo**: Cuando[[omega_0]]es cero, las ecuaciones se simplifican notablemente. La velocidad angular es simplemente el producto[[alpha]]por el tiempo, y la posición angular crece cuadráticamente. Es el caso típico del arranque de un motor eléctrico.\r
\r
**Caso 2 — Frenado hasta el reposo**: Si[[alpha]]es negativo y[[omega_0]]es positiva, el sistema desacelera. El tiempo de parada se obtiene igualando[[omega]]a cero en la ecuación de velocidad angular. La distancia angular recorrida hasta detenerse se calcula convenientemente con la relación sin tiempo.\r
\r
**Caso 3 — Movimiento simétrico**: Cuando el intervalo de aceleración y el de desaceleración son iguales (mismo módulo de[[alpha]]y mismo intervalo), la velocidad angular media del ciclo completo es exactamente[[omega_0]]. Este caso aparece en sistemas de control de posición angular.\r
\r
**Ejemplo extendido — Motor industrial**: Un motor parte del reposo con aceleración angular constante de 2 rad/s² durante 10 s. En ese tiempo, la velocidad angular final alcanza 20 rad/s, el ángulo girado es 100 rad, y si el rotor tiene radio 0,1 m, la rapidez tangencial en el borde pasa de 0 a 2 m/s mientras la aceleración centrípeta crece de 0 a 40 m/s².\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué no se puede sumar la aceleración tangencial y la centrípeta directamente?** Porque son vectores perpendiculares entre sí. La tangencial apunta en la dirección del movimiento (tangente al círculo) y la centrípeta apunta hacia el centro. Su suma vectorial sigue el teorema de Pitágoras, no la suma algebraica.\r
\r
**¿Qué ocurre si[[alpha]]es cero durante parte del movimiento?** Si la aceleración angular se anula, el movimiento pasa a ser MCU (Movimiento Circular Uniforme) en ese tramo. Se debe dividir el problema en etapas y aplicar el modelo adecuado a cada una.\r
\r
**¿Cuándo usar la ecuación sin tiempo?** Cuando el enunciado no da el tiempo ni lo pide, pero sí proporciona las velocidades angulares y el desplazamiento angular. Evita tener que resolver ecuaciones cuadráticas.\r
\r
**¿El desplazamiento angular puede ser mayor que 2π?** Sí, sin ningún problema. Cuando supera 2π, el objeto ha dado más de una vuelta completa. El número de vueltas[[N]]se obtiene dividiendo el ángulo total por 2π.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
El MCUA es el puente natural entre la cinemática lineal y la rotacional. Quien domine el MRUA tiene ya la mitad del trabajo hecho: basta con sustituir posición por ángulo, velocidad por velocidad angular y aceleración por aceleración angular.\r
\r
El paso siguiente en el estudio es la **dinámica rotacional**, donde se relaciona la aceleración angular con el torque neto aplicado y el momento de inercia del cuerpo rígido (segunda ley de Newton para la rotación). La aceleración centrípeta calculada aquí se convierte en el punto de partida para analizar las fuerzas reales que actúan sobre el sistema.\r
\r
La **energía cinética rotacional** y el **trabajo del par motor** son otras conexiones directas: el trabajo neto igual a la variación de energía cinética rotacional es el equivalente angular del teorema trabajo-energía en traslación.\r
\r
El **MCU** es el caso límite del MCUA cuando[[alpha]]tiende a cero, y el **movimiento helicoidal** combina MCUA con traslación simultánea, apareciendo en tornillos y hélices de paso variable.\r
\r
## Síntesis final\r
\r
El MCUA describe cómo varía uniformemente el ritmo de giro de un objeto que sigue una trayectoria circular. Sus tres ecuaciones fundamentales —velocidad angular, posición angular y relación sin tiempo— son el exacto paralelo angular de las del MRUA. La característica más importante del modelo es la coexistencia de dos aceleraciones perpendiculares: la tangencial[[a_t]], constante, que cambia la rapidez, y la centrípeta[[a_c]], creciente, que mantiene la curvatura. La aceleración total[[a]]varía en módulo y dirección a lo largo del movimiento. El modelo es válido mientras el radio[[R]]y la aceleración angular[[alpha]]permanezcan constantes, condición que en sistemas reales se verifica solo en intervalos temporales acotados.\r
`;export{e as default};
