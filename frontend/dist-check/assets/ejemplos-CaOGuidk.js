const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Se analiza una red de corriente continua con un nodo de tres ramas y un lazo resistivo principal. Se pide obtener corriente de salida nodal, verificar cierre de malla y justificar interpretacion fisica de signos y magnitudes.\r
\r
## Datos\r
Se miden dos corrientes de rama en el nodo principal y la tension de la fuente del lazo. Tambien se conocen dos resistencias de la malla y una resistencia local de un tramo de interes para verificacion adicional.\r
\r
## Definición del sistema\r
En el nodo participan [[I1]], [[I2]] y [[I3]]. En la malla participan [[Vs]], [[I]], [[R1]] y [[R2]]. En la verificacion local participan [[V]], [[I]] y [[R]]. El objetivo es cerrar red con coherencia conservativa y trazabilidad de signo.\r
\r
## Modelo físico\r
Se usa modelo DC lineal con elementos concentrados. Conservacion de carga para nodo, conservacion de potencial para malla y relacion constitutiva local para tramo resistivo.\r
\r
El anclaje al leaf es explicito: el cierre nodal conecta [[I1]], [[I2]] y [[I3]]; el cierre de malla conecta [[Vs]], [[I]], [[R1]] y [[R2]]; y la verificacion local conecta [[V]], [[I]] y [[R]] en el mismo tramo fisico.\r
\r
## Justificación del modelo\r
El sistema opera en regimen estable y las ramas analizadas son resistivas en la ventana de trabajo. No hay evidencia de transitorio dominante ni de comportamiento no lineal que invalide el cierre basico.\r
\r
Tambien se exige coherencia metrologica: las magnitudes usadas pertenecen al mismo estado operativo y conservan la misma convencion de signos. Sin esta condicion, un aparente desbalance podria venir de referencia inconsistente y no de un problema fisico real.\r
\r
Fisicamente, el modelo se justifica porque las relaciones del leaf representan mecanismos identificables: [[I1]], [[I2]] y [[I3]] describen continuidad de carga en nodo; [[Vs]], [[R1]] y [[R2]] describen reparto de potencial en lazo; [[V]], [[I]] y [[R]] describen disipacion local. No son ecuaciones decorativas, sino restricciones de conservacion sobre objetos reales de la red.\r
\r
## Resolución simbólica\r
Balance nodal:\r
\r
{{f:kcl_nodo}}\r
\r
Esta ecuacion expresa conservacion de carga entre [[I1]], [[I2]] y [[I3]] con referencia fija.\r
\r
Balance de malla:\r
\r
{{f:kvl_malla}}\r
\r
Esta ecuacion expresa cierre de potencial de lazo entre la fuente [[Vs]] y las caidas asociadas a [[R1]] y [[R2]].\r
\r
Relación local:\r
\r
{{f:ohm_aux}}\r
\r
Esta relacion mantiene coherencia local al vincular [[V]], [[I]] y [[R]] en un mismo componente.\r
\r
## Sustitución numérica\r
Se sustituyen valores medidos en el balance nodal para obtener [[I3]]. El resultado se conserva con su signo original para interpretar direccion real respecto a la referencia.\r
\r
Luego se sustituyen datos de [[Vs]], [[R1]] y [[R2]] en la ecuacion de malla para estimar [[I]]. Este valor se utiliza para contrastar caidas de potencial de cada tramo y verificar que la suma algebraica del lazo se mantenga.\r
\r
Con [[I]] y [[R]] del tramo local, se estima [[V]] y se compara con medicion directa. Si la diferencia supera tolerancia esperada, se revisa si la resistencia efectiva de conexion fue correctamente representada.\r
\r
## Validación dimensional\r
En el nodo, todos los terminos estan en amperios. En la malla, todos los terminos estan en voltios. En la relacion local, el producto de corriente por resistencia produce tension. El cierre dimensional completo valida consistencia de formulacion.\r
\r
Tambien se aplica validacion de tendencia. Con fuente fija, aumentar resistencia equivalente reduce corriente de malla. Con corrientes de entrada mayores en nodo, la corriente de salida compatible debe aumentar en magnitud algebraica.\r
\r
## Interpretación física\r
El balance nodal expresa continuidad de carga. El balance de malla expresa cierre energetico de potencial en lazo. La relacion local conecta ambos niveles con comportamiento de tramo.\r
\r
La lectura del signo es clave. Si una corriente resulta negativa, no se corrige por estetica; se interpreta como direccion real opuesta a la suposicion. Esta interpretacion hace al resultado util para diagnostico, no solo para examen.\r
\r
La solucion completa se acepta cuando nodo, malla y tramo son compatibles entre si. Si uno de los tres niveles falla, el problema no esta cerrado aunque una incognita aislada parezca razonable.\r
\r
Por eso la interpretacion final no se limita a reportar cifras: identifica que magnitud gobierna el reparto de corriente, que magnitud gobierna el reparto de potencial y que evidencia de medicion sostiene la decision tecnica.\r
\r
La lectura fisica final tambien separa causa y sintoma. Un desbalance de [[I3]] puede ser sintoma de una conexion degradada; la causa se confirma al contrastar cierre de malla con [[Vs]] y caidas estimadas. Esta cadena causal convierte el resultado en accion de mantenimiento concreta.\r
\r
Ademas, la interpretacion incorpora criterio de decision: si el cierre nodal mejora al repetir medicion con nueva referencia, el problema era metrologico; si persiste con consistencia de signos, la hipotesis dominante pasa a ser degradacion fisica de rama o contacto. Esta distincion evita correcciones cosmeticas y orienta intervencion efectiva.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En un tablero de control se observan disparos intermitentes en una rama secundaria bajo carga variable. La inspeccion visual no identifica falla clara. Se adopta enfoque de Kirchhoff para localizar inconsistencias de red con mediciones rapidas.\r
\r
## Estimación física\r
Se miden corrientes en el nodo de distribucion y se evalua cierre con ecuacion nodal. El cierre no se cumple dentro de tolerancia, lo que sugiere problema de rama o de medicion.\r
\r
Luego se mide lazo de alimentacion y se verifica ecuacion de malla. La suma de caidas no coincide con la fuente medida, indicando posible resistencia no modelada en conexion.\r
\r
Se mide caida local en el tramo sospechoso y se estima resistencia efectiva con relacion local. El valor resultante es mayor que nominal, consistente con degradacion de contacto.\r
\r
Con esta evidencia, el equipo prioriza intervencion puntual en la conexion degradada en lugar de reemplazo masivo de componentes. El tiempo de parada disminuye y la falla deja de repetirse.\r
\r
## Interpretación\r
El caso muestra que Kirchhoff aporta valor operativo cuando se usa en capas: nodo para continuidad de carga, malla para cierre de potencial y tramo para validar componente.\r
\r
No se trata solo de obtener numeros, sino de convertir mediciones dispersas en una narrativa causal verificable. Esa narrativa mejora mantenimiento, reduce ensayo-error y fortalece confiabilidad.\r
\r
Ademas, el proceso deja trazabilidad para futuras auditorias: que se midio, que ecuacion no cerro, que hipotesis se ajusto y que accion se tomo. Esa trazabilidad es parte de la calidad tecnica del diagnostico.`;export{e as default};
