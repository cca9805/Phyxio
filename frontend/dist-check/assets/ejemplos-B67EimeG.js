const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Una sonda de observacion debe entrar en orbita circular alrededor de la Tierra. Se conoce [[M]] de la Tierra, su radio [[R]] y una altura de operacion [[h]]. El equipo necesita tres salidas: la [[v_orb]] circular, el periodo [[T]] de revoluciones y una comparacion con [[v_escape]] en el mismo radio. Ademas, se pide justificar si el modelo usado sigue siendo valido en la fase preliminar y explicar como cambiaria el resultado si la altura aumenta.\r
\r
## Datos\r
Datos en SI para mantener consistencia con [[G]]: masa central [[M]] igual a 5.97e24 kg, radio [[R]] igual a 6.37e6 m, altura [[h]] igual a 4.00e5 m. Con esto, el radio orbital [[r]] se obtiene por construccion geometrica. Para extender la lectura, se usa tambien [[mu]] como producto de [[G]] y [[M]], y se estima [[E]] para clasificar regimen.\r
\r
## Definición del sistema\r
Sistema de dos cuerpos con masa central dominante. La sonda se modela como partícula de prueba. Se desprecia arrastre en esta etapa y no se incluyen perturbaciones de terceros cuerpos para la primera aproximacion. La coordenada clave es [[r]] al centro, no la altura [[h]] por separado. El objetivo es describir el estado circular ideal y su margen respecto del umbral de escape.\r
\r
## Modelo físico\r
El modelo usa relaciones nucleares del leaf: velocidad circular, umbral de escape, periodo orbital y energia especifica. Primero se convierte geometria con [[r]] desde [[R]] y [[h]]. Luego se calcula [[v_orb]] con la relacion circular. Despues se contrasta con [[v_escape]] para lectura de frontera energetica. Se obtiene [[T]] para escala temporal de operacion. Finalmente, con [[a]] igual [[r]] en circular ideal, se evalua [[E]] y se verifica signo de regimen ligado.\r
\r
## Justificación del modelo\r
El modelo es fisicamente valido porque la mision se plantea como lectura de primer orden y la fuerza dominante es la gravitacion central. La causalidad fisica es clara: la atraccion central aporta aceleracion centripeta y fija la rapidez circular necesaria. Si la altura fuera muy baja con arrastre relevante o si se exigiera precision fina de largo plazo, el modelo dejaria de valer por omision de perturbaciones. Tambien perderia validez si se intentara usarlo para maniobras con empuje continuo no despreciable.\r
\r
## Resolución simbólica\r
Relacion circular:\r
\r
{{f:velocidad_orbital_circular}}\r
\r
Umbral de escape:\r
\r
{{f:velocidad_escape}}\r
\r
Periodo:\r
\r
{{f:periodo_orbital}}\r
\r
Parametro gravitacional:\r
\r
{{f:parametro_gravitacional}}\r
\r
Lectura de energia especifica:\r
\r
{{f:energia_orbital_especifica}}\r
\r
Relacion general de rapidez para contraste conceptual:\r
\r
{{f:vis_viva}}\r
\r
La resolucion simbolica separa con claridad geometria, dinamica y energia. Primero se construye [[r]], luego se obtienen velocidades, despues periodo, y por ultimo energia. Este orden reduce errores de sustitucion cruzada.\r
\r
## Sustitución numérica\r
Con [[r]] igual [[R]] mas [[h]], se obtiene un radio orbital cercano a 6.77e6 m. Al sustituir en la expresion circular, [[v_orb]] queda en escala de varios km/s, coherente con orbita baja terrestre. La evaluacion de [[v_escape]] en ese mismo radio entrega un valor mayor, como exige la lectura energetica del sistema.\r
\r
Con el mismo [[r]] y [[M]], el periodo [[T]] cae en escala de alrededor de hora y media, coherente con observacion en orbita baja. El parametro [[mu]] facilita repetir cuentas sin volver a expandir producto de constante y masa central. Para energia, al usar [[a]] igual [[r]] se obtiene [[E]] negativa, indicando estado ligado en modelo clasico.\r
\r
## Validación dimensional\r
Chequeo de [[v_orb]]: unidad esperada de velocidad. Verificacion en estilo de notacion azul con backticks: \`[L T⁻¹]\` en ambos lados.\r
\r
Chequeo de [[v_escape]]: misma clase dimensional de velocidad. Notacion: \`[L T⁻¹]\`.\r
\r
Chequeo de [[T]]: salida temporal pura. Notacion: \`[T]\`.\r
\r
Chequeo de [[mu]]: producto gravitacional. Notacion: \`[L³ T⁻²]\`.\r
\r
Chequeo de [[E]]: energia por unidad de masa. Notacion: \`[L² T⁻²]\`.\r
\r
La validacion dimensional confirma que la cadena de ecuaciones es consistente y evita aceptar resultados numericos sin base fisica.\r
\r
## Interpretación física\r
El resultado indica una orbita circular ligada con rapidez elevada pero inferior al umbral de escape. Esto significa que la sonda puede sostener trayectoria cerrada sin requerir energia de salida del sistema. El periodo obtenido es compatible con operaciones de observacion frecuentes.\r
\r
Si [[r]] aumentara manteniendo [[M]], [[v_orb]] disminuiria y [[T]] aumentaria de forma no lineal. Si [[M]] aumentara con [[r]] fijo, aumentarian tanto [[v_orb]] como [[v_escape]]. Esta lectura causal muestra que el valor numerico no es el final del analisis: lo central es entender como cambia el estado orbital al variar magnitudes dominantes.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Un operador de constelacion evalua subir parcialmente la altura de una parte de su flota para mejorar cobertura regional nocturna. La decision afecta consumo de correccion, ventanas de enlace y frecuencia de revisita. El equipo necesita una estimacion fisica rapida antes de ejecutar simulaciones de alto costo.\r
\r
## Estimación física\r
Se comparan dos radios candidatos con la misma [[M]] central. En el radio mayor, la tendencia esperada es menor [[v_orb]] y mayor [[T]]. El cambio de rapidez reduce exigencia dinamica instantanea, pero alarga ciclo de paso sobre estaciones de control. La diferencia de umbral [[v_escape]] tambien baja con radio, aunque sigue por encima de velocidad circular.\r
\r
Como lectura de orden de magnitud, una variacion radial de algunos cientos de kilometros en orbita baja no cambia de categoria de velocidad, pero si desplaza de forma apreciable el periodo. Esa variacion temporal puede ser operativamente mas relevante que la variacion de rapidez en determinadas tareas de programacion de carga util.\r
\r
## Interpretación\r
La estimacion sugiere que aumentar altura puede mejorar cobertura continua en ciertas franjas, pero reduce frecuencia de revisita por unidad de tiempo. La variable dominante para la decision inmediata es [[T]], mientras que [[v_orb]] actua como restriccion dinamica secundaria. El limite de validez de esta conclusion es el uso de modelo ideal: para implementacion final deben incorporarse perturbaciones, restricciones de energia y control de fase de constelacion.`;export{e as default};
