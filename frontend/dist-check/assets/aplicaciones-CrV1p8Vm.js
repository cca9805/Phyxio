const e=`# Aplicaciones: Normal en planos\r
\r
## 1. Transporte inclinado en logística\r
\r
En cintas o rampas de transporte, la reacción normal [[N]] determina la carga transmitida a rodillos, guías y estructura de soporte. Cuando la masa [[m]] del paquete cambia entre lotes y el ángulo [[theta]] se ajusta para distintos productos, la estimación de [[N]] permite anticipar desgaste y estabilidad de contacto.\r
\r
La ventaja práctica de modelar [[N]] correctamente es doble: evita sobredimensionar componentes por intuición y previene subdimensionar soportes en picos de operación. Si además existe fuerza de guiado perpendicular [[Fextn]], la variación de [[N]] puede ser relevante para vida útil de recubrimientos y sensores.\r
\r
Variable dominante: [[theta]]\r
\r
Límite de validez: modelo válido mientras la superficie pueda aproximarse como rígida local y el contacto se mantenga activo sin fenómenos de deformación dominante.\r
\r
## 2. Diseño de apoyos en maquinaria industrial\r
\r
En bancadas inclinadas o guías de ensamblaje, la normal [[N]] se usa para estimar carga de contacto en puntos de apoyo. En operación real, la máquina puede introducir excitaciones que generan [[aperp]] pequeña pero no despreciable, especialmente en arranque, paro y cambio de receta.\r
\r
Aplicar el balance perpendicular general permite separar si una variación de contacto proviene de geometría [[theta]], de cambios de masa [[m]] o de dinámica perpendicular [[aperp]]. Esa separación causal mejora diagnóstico de vibración y evita ajustes erróneos en control.\r
\r
Cuando el equipo de mantenimiento observa marcas de desgaste asimétrico, la primera hipótesis suele ser desalineación geométrica. Sin embargo, el análisis de [[N]] también puede revelar que una fuerza externa [[Fextn]] mal calibrada está aumentando la compresión en ciertos tramos.\r
\r
Variable dominante: [[N]]\r
\r
Límite de validez: el esquema simple deja de ser suficiente si hay deformación significativa del soporte, contacto multipunto no representable con una sola normal efectiva o acoplamiento dinámico fuerte con otros ejes.\r
\r
## 3. Seguridad en plataformas y rampas de acceso\r
\r
En plataformas inclinadas de uso humano o robótico, la evaluación de [[N]] aporta información crítica para estabilidad del contacto y comportamiento de sistemas auxiliares. Aunque la fricción no sea tema principal de este leaf, su capacidad disponible en muchos modelos depende de [[N]], por lo que entender su evolución es esencial para análisis de riesgo.\r
\r
Una rampa que incrementa [[theta]] para ahorrar espacio puede reducir la componente perpendicular del peso y modificar condiciones de apoyo. Si además existen empujes perpendiculares externos [[Fextn]] por actuadores o barreras, la normal puede alejarse del valor esperado en el caso base.\r
\r
En protocolos de seguridad, conviene evaluar no solo el estado nominal, sino también escenarios transitorios con [[aperp]] debidos a cambios bruscos de operación. Este enfoque reduce incidentes asociados a pérdida parcial de contacto o inestabilidad local.\r
\r
Variable dominante: [[Fextn]]\r
\r
Límite de validez: resultados confiables mientras la interacción pueda describirse con contacto unilateral y sin adhesión compleja; si la superficie se deforma o vibra fuertemente, debe escalarse el modelo.\r
\r
## 4. Ensayos de laboratorio y calibración docente\r
\r
En laboratorios de física, el cálculo de [[N]] en planos inclinados es una herramienta didáctica para entrenar lectura vectorial y validación de hipótesis. Al variar [[theta]] y [[m]], el estudiante observa cómo la normal no reproduce automáticamente el peso total.\r
\r
Un protocolo bien diseñado incluye mediciones repetidas para comparar valor calculado y valor observado, incorporando incertidumbre instrumental. Cuando la discrepancia supera el margen esperado, se investiga si hubo error de eje, convención de signo, lectura angular o presencia inadvertida de [[Fextn]].\r
\r
También es útil introducir un caso con [[aperp]] controlada para mostrar que el balance perpendicular no siempre es estático. Ese paso conecta ejercicios introductorios con una visión más realista de sistemas en operación.\r
\r
Variable dominante: [[g]]\r
\r
Límite de validez: en aula suele asumirse [[g]] local constante y plano rígido; fuera de ese régimen, los resultados deben contextualizarse con el modelo experimental disponible.\r
\r
## 5. Ingeniería de producto y toma de decisiones\r
\r
En desarrollo de producto, la normal [[N]] se usa como indicador para decidir arquitectura mecánica, materiales de contacto y márgenes de operación. Una decisión robusta no se basa en un único cálculo, sino en sensibilidad respecto de [[theta]], [[m]], [[Fextn]] y [[aperp]].\r
\r
El equipo puede construir mapas de operación donde [[N]] se evalúa en esquinas de diseño: masa mínima y máxima, ángulo mínimo y máximo, forzamiento perpendicular favorable y desfavorable, y estados transitorios relevantes. Ese mapa permite identificar zonas seguras, zonas de advertencia y zonas no permitidas.\r
\r
La lectura final es estratégica: si el mínimo de [[N]] se acerca al límite de contacto, conviene modificar geometría, reducir perturbaciones perpendiculares o rediseñar la lógica de actuadores. Si el máximo de [[N]] excede capacidad estructural, puede requerirse refuerzo o redistribución de carga.\r
\r
Esta aplicación muestra la utilidad transversal del leaf: convierte una ecuación de curso en criterio de diseño verificable, comunicable y auditable entre análisis, pruebas y mantenimiento.\r
\r
Variable dominante: [[aperp]]\r
\r
Límite de validez: cuando los fenómenos de contacto requieren modelado de deformación avanzada o interacción multibody acoplada, el balance simple debe ser reemplazado por un modelo extendido con calibración experimental.\r
`;export{e as default};
