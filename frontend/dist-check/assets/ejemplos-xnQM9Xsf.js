const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de masa [[m]] se mueve sobre un plano inclinado de ángulo [[theta]]. Se desea calcular la fuerza normal [[N]] en tres escenarios: caso base sin fuerza externa perpendicular, caso con una fuerza externa perpendicular [[Fextn]] dirigida hacia el plano y caso con aceleración perpendicular no nula [[aperp]]. El objetivo no es solo obtener un valor numérico, sino justificar qué ecuación del leaf corresponde a cada escenario y cómo interpretar físicamente el resultado en términos de contacto activo.\r
\r
El profesor pide explícitamente validar si el cuerpo mantiene contacto con la superficie y comparar cómo cambia [[N]] cuando cambia la geometría o cuando se aplica una acción externa perpendicular.\r
\r
## Datos\r
\r
Tomamos datos representativos de laboratorio:\r
\r
- [[m]] = 4.0 kg\r
- [[g]] = 9.8 m/s^2\r
- [[theta]] = 30 grados\r
- Caso A: [[Fextn]] = 0 N, [[aperp]] = 0 m/s^2\r
- Caso B: [[Fextn]] = 5 N hacia el plano, [[aperp]] = 0 m/s^2\r
- Caso C: [[Fextn]] = 2 N hacia fuera del plano, [[aperp]] = 0.4 m/s^2 en sentido positivo perpendicular definido\r
\r
La convención de signos se fija de modo que el eje perpendicular positivo apunta fuera del plano. Con esa convención, una fuerza que empuja hacia el plano entra con signo opuesto y una fuerza que tira hacia fuera entra con signo favorable al eje positivo.\r
\r
## Definición del sistema\r
\r
Sistema: bloque rígido tratado como partícula en contacto con una superficie rígida.\r
\r
Ejes:\r
\r
- Eje tangencial: paralelo al plano.\r
- Eje perpendicular: normal a la superficie.\r
\r
Magnitudes núcleo empleadas: [[N]], [[m]], [[g]], [[theta]], [[Fextn]], [[aperp]].\r
\r
Suposiciones para el caso base:\r
\r
- Contacto activo entre bloque y superficie.\r
- Sin separación ni adhesión especial.\r
- Geometría del plano bien definida por [[theta]].\r
\r
## Modelo físico\r
\r
El modelo del leaf establece que [[N]] surge del balance de fuerzas y dinámica en la dirección perpendicular al plano, no del peso total de forma directa. La proyección perpendicular del peso depende de [[theta]], y términos adicionales como [[Fextn]] o [[aperp]] pueden modificar la reacción necesaria.\r
\r
En condiciones básicas sin dinámica perpendicular y sin fuerzas extra perpendiculares, la normal se calcula con la relación inclinada base. Cuando existen acciones adicionales o aceleración perpendicular, debe usarse el balance general. Finalmente, la condición de contacto unilateral exige verificar que [[N]] no sea negativa dentro del modelo de contacto activo.\r
\r
## Justificación del modelo\r
\r
Este modelo es adecuado porque la pregunta central del problema es estrictamente perpendicular al plano. Por diseño, se requiere distinguir entre:\r
\r
1. Carga gravitatoria proyectada por [[theta]].\r
2. Acción externa perpendicular [[Fextn]].\r
3. Efecto dinámico perpendicular [[aperp]].\r
\r
Si usáramos únicamente una forma simplificada en todos los casos, perderíamos coherencia física en B y C. El modelo del leaf evita ese error al ofrecer una jerarquía explícita de ecuaciones: base horizontal, base inclinada, balance general y criterio de contacto.\r
\r
## Resolución simbólica\r
\r
Caso de referencia horizontal:\r
\r
{{f:normal_horizontal_base}}\r
\r
Caso base inclinado sin aceleración perpendicular:\r
\r
{{f:normal_inclinado_base}}\r
\r
Balance general perpendicular:\r
\r
{{f:balance_perpendicular_general}}\r
\r
Condición de contacto activo:\r
\r
{{f:condicion_contacto}}\r
\r
Despeje útil para contraste de parámetros locales:\r
\r
{{f:gravedad_desde_normal_horizontal}}\r
\r
Aplicamos ahora por escenarios.\r
\r
Escenario A (base inclinado): usar relación inclinada base para [[N]] con [[aperp]]=0 y [[Fextn]]=0.\r
\r
Escenario B (fuerza externa hacia el plano): usar balance general, incorporando [[Fextn]] con el signo consistente con la convención adoptada.\r
\r
Escenario C (fuerza hacia fuera y aceleración perpendicular): usar balance general completo, incluyendo simultáneamente [[Fextn]] y [[aperp]].\r
\r
En los tres escenarios se verifica al final la condición de contacto unilateral sobre [[N]].\r
\r
## Sustitución numérica\r
\r
Para [[theta]]=30 grados, usamos cos([[theta]]) aproximadamente 0.866.\r
\r
Peso proyectado perpendicular: [[m]]·[[g]]·cos([[theta]]) = 4.0·9.8·0.866 = 33.95 N (aprox).\r
\r
Escenario A:\r
\r
- [[N]]_A = 33.95 N (aprox)\r
\r
Escenario B (empuje adicional hacia el plano):\r
\r
- El empuje incrementa la compresión de contacto.\r
- [[N]]_B = 33.95 + 5.00 = 38.95 N (aprox)\r
\r
Escenario C (fuerza hacia fuera y [[aperp]] no nula):\r
\r
- La fuerza hacia fuera reduce parte de la reacción necesaria.\r
- El término inercial perpendicular puede compensar o reforzar según signo adoptado.\r
- Sustituyendo en el balance general con la convención fijada:\r
  [[N]]_C = 4.0·0.4 + 33.95 - 2.0 = 33.55 N (aprox)\r
\r
En este conjunto de datos, los tres escenarios conservan [[N]] positiva, por lo que no se detecta pérdida de contacto.\r
\r
## Validación dimensional\r
\r
Chequeo de unidades:\r
\r
- [[m]] en kg\r
- [[g]] y [[aperp]] en m/s^2\r
- Producto [[m]]·aceleración en N\r
- [[Fextn]] en N\r
- [[N]] resultante en N\r
\r
Todo término del balance perpendicular tiene dimensión de fuerza. Por tanto, la suma y resta son dimensionalmente válidas.\r
\r
Chequeo físico rápido:\r
\r
1. En el caso base inclinado, [[N]] es menor que [[m]]·[[g]], coherente con la proyección por [[theta]].\r
2. Al empujar hacia el plano (B), [[N]] aumenta, como exige causalidad mecánica.\r
3. Con fuerza hacia fuera (C), [[N]] disminuye respecto de B y puede acercarse a límite de contacto según magnitud de perturbación.\r
\r
## Interpretación física\r
\r
La lectura central es causal: la normal [[N]] no es una constante del bloque, sino una variable de contacto que responde al balance perpendicular completo. Cambiar [[theta]] cambia la fracción del peso que comprime el contacto; cambiar [[Fextn]] cambia compresión externa; cambiar [[aperp]] modifica demanda dinámica perpendicular.\r
\r
Esto tiene implicación práctica inmediata. Si un diseño requiere contacto robusto, no basta con estimar [[N]] en un solo estado nominal. Debe analizarse margen frente a variaciones de [[theta]], acciones perpendiculares externas y aceleraciones transitorias. Un sistema que parece seguro en estático puede quedar cerca de desacople en maniobras.\r
\r
También se obtiene una regla de modelado: usar siempre la ecuación más simple compatible con hipótesis declaradas, y migrar al balance general apenas aparezcan términos que el caso base no representa. Esa disciplina evita resultados aparentemente correctos pero físicamente incompletos.\r
\r
Desde el punto de vista causal, el mensaje clave es este: la geometría no "acompaña" al resultado, lo determina. Si [[theta]] cambia, cambia el reparto de peso entre ejes; si cambia [[Fextn]], cambia el nivel de compresión de contacto; si cambia [[aperp]], cambia la demanda dinámica. Por eso un mismo bloque puede pasar de apoyo robusto a apoyo marginal sin cambiar material ni masa, solo por cambiar condiciones de operación.\r
\r
En términos de decisión, la interpretación física también orienta mantenimiento. Si el sistema opera cerca del umbral de contacto, conviene priorizar control de perturbaciones perpendiculares y tolerancias geométricas antes que aumentar complejidad de modelo sin diagnóstico. Esa lectura conecta cálculo con acción técnica concreta.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una banda transportadora inclinada para embalaje, cajas de masa [[m]] variable avanzan sobre una guía rígida. El equipo de ingeniería monitorea la reacción normal [[N]] porque de ella dependen vibración, desgaste de apoyos y estabilidad de contacto con sensores laterales. El ángulo de operación [[theta]] puede cambiar según configuración del turno y existe una acción neumática que, según modo de trabajo, aplica fuerza perpendicular adicional [[Fextn]] para mejorar guiado.\r
\r
Además, durante arranques y frenadas, se registran oscilaciones pequeñas pero medibles en dirección perpendicular, equivalentes a [[aperp]] transitoria. El objetivo no es solo calcular un caso, sino anticipar condiciones en que el contacto se vuelve frágil.\r
\r
## Estimación física\r
\r
Se plantea un barrido operacional:\r
\r
- [[theta]] entre 15 y 35 grados.\r
- [[Fextn]] entre -4 N (hacia fuera) y +8 N (hacia el plano).\r
- [[aperp]] entre -0.3 y +0.5 m/s^2.\r
\r
Con estos intervalos se usa el balance general para estimar bandas de [[N]], no un único valor puntual. La lectura muestra que el mínimo de [[N]] aparece combinando ángulo alto, fuerza externa hacia fuera y aceleración perpendicular desfavorable. Esa combinación define el caso crítico para riesgo de pérdida de contacto.\r
\r
El equipo define una regla de seguridad: mantener [[N]] por encima de un umbral operativo interno para asegurar confiabilidad de guiado y repetibilidad de medición.\r
\r
## Interpretación\r
\r
La aplicación demuestra por qué este leaf es operacionalmente útil. El cálculo de [[N]] conecta directamente con decisiones de ajuste de máquina: límite de inclinación permitido, estrategia de actuación neumática y perfil de aceleración admisible.\r
\r
También muestra continuidad entre teoría y práctica: las mismas magnitudes núcleo [[N]], [[m]], [[g]], [[theta]], [[Fextn]] y [[aperp]] explican desde un ejercicio de aula hasta un protocolo de operación industrial. Cuando esa continuidad se mantiene, el modelo deja de ser decorativo y se convierte en herramienta de control y seguridad.\r
`;export{e as default};
