const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de laboratorio se apoya sobre una rampa rigida. Se pide determinar si el reposo es sostenible cuando se conoce la masa del bloque, la inclinacion [[alpha]] del plano y el coeficiente de adherencia [[mu_s]] del contacto. El objetivo no es solo obtener un resultado numerico, sino justificar que mecanismo controla el estado del sistema.\r
\r
## Datos\r
\r
El problema entrega como datos principales la masa [[m]], la gravedad [[g]], la inclinacion [[alpha]] y el parametro de contacto [[mu_s]]. Tambien indica que no hay cuerda y que el bloque permanece inicialmente en reposo. Por tanto, las magnitudes de interes son [[W]], [[N]], [[W_parallel]] y [[F_s_max]].\r
\r
## Definición del sistema\r
\r
El sistema aislado es solo el bloque. Se excluyen suelo y rampa del sistema para que aparezcan como interacciones externas. En el DCL del bloque deben figurar peso, normal y fuerza de rozamiento estatico real. La orientacion de ejes se elige con eje tangencial a la rampa y eje normal a la superficie.\r
\r
Esta eleccion minimiza ambiguedades al comparar demanda y capacidad tangencial. Tambien permite traducir de forma clara el valor de [[alpha]] a proyecciones de [[W]].\r
\r
## Modelo físico\r
\r
La conversion de masa a peso se hace con:\r
\r
{{f:peso_desde_masa}}\r
\r
La reaccion normal se calcula con:\r
\r
{{f:normal_plano_inclinado}}\r
\r
La demanda tangencial de deslizamiento se obtiene con:\r
\r
{{f:componente_paralela_del_peso}}\r
\r
La capacidad maxima de adherencia se estima con:\r
\r
{{f:rozamiento_estatico_limite}}\r
\r
## Justificación del modelo\r
\r
El modelo es adecuado porque el enunciado describe reposo inicial, contacto seco y rampa rigida. No hay indicios de aceleracion significativa, deformacion dominante ni vibracion intensa. Por eso se usa equilibrio traslacional con comparacion entre demanda tangencial y techo de adherencia.\r
\r
Ademas, este modelo es coherente con la pregunta fisica del leaf: decidir que restriccion controla cada ejemplo. En este caso, la variable de control no es solo la carga [[W]], sino la relacion entre [[W_parallel]] y [[F_s_max]].\r
\r
## Resolución simbólica\r
\r
Primero se identifica [[W]] a partir de [[m]] y [[g]]. Luego se proyecta [[W]] para obtener la componente tangencial [[W_parallel]] y la reaccion normal [[N]]. Con [[N]] y [[mu_s]] se calcula [[F_s_max]].\r
\r
{{f:peso_desde_masa}}\r
\r
{{f:componente_paralela_del_peso}}\r
\r
{{f:rozamiento_estatico_limite}}\r
\r
Como contraste de mecanismo dentro del mismo leaf, cuando la carga se transmite por cables y no por contacto dominante, la resolucion simbólica usa:\r
\r
{{f:tension_nudo_simetrico}}\r
\r
El criterio de decision simbolico es comparativo:\r
\r
- Si [[W_parallel]] queda por debajo de [[F_s_max]], el reposo es compatible.\r
- Si [[W_parallel]] supera [[F_s_max]], la adherencia no alcanza y el reposo no puede sostenerse.\r
\r
Este punto es didacticamente central: la fuerza de rozamiento real no se fija por anticipado en el maximo; se ajusta segun demanda hasta su limite.\r
\r
## Sustitución numérica\r
\r
Con los valores del enunciado, se obtiene un peso de orden habitual para laboratorio. Al proyectar con [[alpha]], la demanda tangencial resulta moderada. La normal se mantiene en escala comparable al peso total, como corresponde a una inclinacion intermedia.\r
\r
Al aplicar [[mu_s]] sobre [[N]], la capacidad de adherencia calculada queda por encima de la demanda tangencial. La diferencia entre ambas magnitudes no es enorme, por lo que el sistema esta en reposo pero con margen limitado ante perturbaciones.\r
\r
## Validación dimensional\r
\r
Las relaciones usadas preservan consistencia dimensional en cada paso: fuerza con fuerza, coeficiente adimensional por fuerza, y proyecciones de fuerza por funciones trigonométricas adimensionales. No aparece mezcla de unidades de masa en ecuaciones de fuerza.\r
\r
Tambien se valida coherencia de signo: la componente tangencial de [[W]] apunta cuesta abajo y el rozamiento estatico real se orienta en sentido opuesto mientras haya adherencia.\r
\r
## Interpretación física\r
\r
El resultado enseña que el reposo en rampa no depende de una unica cifra, sino de una competencia entre demanda de deslizamiento y capacidad de contacto. Esa lectura permite anticipar como cambia el estado si varian parametros.\r
\r
Si [[alpha]] aumenta, [[W_parallel]] crece y el margen cae. Si [[mu_s]] disminuye por suciedad o desgaste, [[F_s_max]] cae y el equilibrio se vuelve fragil. Por eso el criterio de comparacion entre magnitudes es mas informativo que memorizar una regla aislada.\r
\r
En suma, este ejemplo muestra un control por contacto: la variable decisiva es la brecha entre demanda tangencial y capacidad de adherencia.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un taller de montaje escenico, un panel decorativo se sostiene temporalmente mediante dos cables simetricos anclados a una viga superior. El equipo debe decidir si la geometria elegida es segura para una carga central sin exceder tension operativa recomendada.\r
\r
Se conoce la masa [[m]] del panel, la gravedad [[g]] local y el angulo [[theta]] que cada cable forma con la horizontal. El objetivo practico es estimar la tension [[T]] en cada rama y evaluar sensibilidad ante pequenos cambios de geometria.\r
\r
## Estimación física\r
\r
Primero se convierte la carga a [[W]] usando masa y gravedad. Con esa carga, se aplica el modelo de nudo simetrico para estimar [[T]] por rama:\r
\r
{{f:tension_nudo_simetrico}}\r
\r
La lectura comparativa se hace sobre [[theta]]: al reducirse el angulo, cada cable pierde eficiencia vertical y la tension requerida crece con rapidez. En montaje real, esto significa que un pequeno cambio de inclinacion puede desplazar el sistema desde margen confortable hasta zona de riesgo.\r
\r
Al contrastar con el ejemplo de rampa, se observa una diferencia de mecanismo: aqui no domina adherencia de contacto, sino proyeccion geometrica de soporte. Sin embargo, la logica de comparacion sigue siendo la misma: demanda versus capacidad.\r
\r
## Interpretación\r
\r
Este ejemplo confirma que la comparacion entre configuraciones es el nucleo del leaf. Con la misma carga [[W]], dos geometrías distintas pueden requerir esfuerzos muy diferentes. La decision tecnica no depende solo del peso total, sino de como la geometria distribuye ese peso entre interacciones.\r
\r
En contexto profesional, la conclusion operativa es clara: se debe controlar [[theta]] durante montaje, no solo verificar masa. Si el angulo cae por debajo del rango previsto, la tension [[T]] puede crecer aun sin cambio de carga y comprometer seguridad.\r
\r
Como siguiente paso didactico, conviene pedir al estudiante una comparacion escrita entre este caso y el de rampa: cual variable domina en cada uno y que accion de diseño aumenta margen de equilibrio. Esa comparacion es la evidencia de aprendizaje profundo en este leaf.\r
`;export{e as default};
