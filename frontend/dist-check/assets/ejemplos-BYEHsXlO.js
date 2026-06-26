const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un recipiente contiene dos compartimentos de gas separados por un pistón movil y diatermo. Al inicio, un lado esta a 320 K y el otro a 300 K. Las presiones efectivas son 120 kPa y 100 kPa. Se deja evolucionar el sistema hasta que no se observan cambios macroscopicos. Decide que condiciones deben cumplirse para declarar equilibrio termodinámico.\r
\r
## Datos\r
\r
- Temperaturas iniciales distintas: [[DeltaT]] inicial de 20 K.\r
- Presiones efectivas distintas: [[DeltaP]] inicial de 20 kPa.\r
- La pared permite calor y el pistón permite ajuste de volumen.\r
- Variables relevantes: [[T]], [[P]], [[DeltaT]], [[DeltaP]], [[A]] y [[tau]].\r
\r
## Definición del sistema\r
\r
El sistema es el conjunto de ambos compartimentos. La frontera interna permite dos procesos: transferencia de calor y desplazamiento mecánico. No se indica intercambio de materia entre compartimentos, por lo que el potencial quimico no es el criterio principal.\r
\r
## Modelo físico\r
\r
Usamos el modelo de equilibrio parcial acoplado. Primero se revisa la condición térmica mediante [[DeltaT]]. Despues se revisa la condición mecánica mediante [[DeltaP]]. El equilibrio completo del sistema requiere que ambos gradientes relevantes desaparezcan dentro de la tolerancia del problema.\r
\r
## Justificacion del modelo\r
\r
La pared diaterma hace físicamente explicita la posibilidad de flujo de calor, y el pistón movil hace físicamente explicita la posibilidad de trabajo de expansión. Por eso no basta con una sola igualdad. Si queda diferencia de temperatura o de presión, existe una causa macroscopica para que el sistema siga evolucionando.\r
\r
La causalidad del modelo se ve en la frontera interna. Una diferencia de [[T]] selecciona un sentido de transferencia de energía, de modo que el lado caliente pierde energía interna y el lado frio la gana hasta acercarse a una temperatura comun. Una diferencia de [[P]] selecciona un sentido de desplazamiento del pistón: el lado con mayor presión efectiva realiza trabajo sobre el otro y cambia los volumenes disponibles. Como ambos procesos estan permitidos por la pared elegida, el estado final solo puede llamarse equilibrio si desaparecen las dos causas observables.\r
\r
## Resolucion simbolica\r
\r
Condición de equilibrio térmico:\r
\r
{{f:equilibrio_termico}}\r
\r
Temperatura comun asociada:\r
\r
{{f:igualdad_temperatura}}\r
\r
Condición de equilibrio mecánico:\r
\r
{{f:equilibrio_mecanico}}\r
\r
Presión efectiva comun asociada:\r
\r
{{f:igualdad_presion}}\r
\r
Si la frontera permitiera intercambio de materia, también se comprobaria:\r
\r
{{f:equilibrio_material}}\r
\r
Condición general para procesos permitidos:\r
\r
{{f:equilibrio_general}}\r
\r
## Sustitucion numerica\r
\r
Al inicio, [[DeltaT]] vale 20 K, por lo que no hay equilibrio térmico. También [[DeltaP]] vale 20 kPa, por lo que no hay equilibrio mecánico si el pistón puede moverse. El estado inicial no es equilibrio termodinámico.\r
\r
En el estado final, para declarar equilibrio, las lecturas de temperatura deben coincidir dentro de tolerancia y las presiones efectivas deben compensarse. Si queda una diferencia apreciable, el sistema solo esta en transicion o en equilibrio parcial.\r
\r
Si el enunciado diera las lecturas finales como 309.8 K y 309.9 K, y presiones efectivas de 109.9 kPa y 110.0 kPa, la decision dependeria de la tolerancia instrumental. Con una tolerancia de 0.2 K y 0.2 kPa, esas diferencias serian indistinguibles experimentalmente y se aceptaria equilibrio aproximado. Con instrumentos diez veces más precisos, el mismo estado podria clasificarse como relajación aun no terminada.\r
\r
## Validacion dimensional\r
\r
- [[DeltaT]] tiene dimension \`[Theta]\` y se mide en kelvin.\r
- [[DeltaP]] tiene dimension \`[M L⁻¹ T⁻²]\` y se mide en pascales.\r
- [[tau]] tiene dimension \`[T]\` y controla la escala temporal.\r
- [[A]] depende del proceso, pero su valor nulo indica ausencia de impulso generalizado.\r
\r
## Interpretacion física\r
\r
El resultado significa que equilibrio es una condición multiple. La igualdad de [[T]] elimina el flujo neto de calor, mientras que la igualdad efectiva de [[P]] elimina el empuje neto del pistón. Esto implica que el sistema final no solo dejo de cambiar numericamente: físicamente perdio las causas internas de evolucion.\r
\r
También se ve por que [[mu]] no domina este ejemplo. Como no se permite paso de materia entre compartimentos, una diferencia de potencial quimico no abre por si sola un canal de difusion. Si la pared se cambiara por una membrana permeable, el modelo tendria que incorporar equilibrio material y la condición de [[mu]] pasaria a ser tan importante como las de temperatura y presión.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un termometro se introduce en un liquido caliente. Al principio el termometro y el liquido no estan en equilibrio térmico, por lo que la lectura cambia. Solo cuando el sensor y el liquido comparten [[T]] dentro de tolerancia, la lectura representa la temperatura del liquido.\r
\r
## Estimacion física\r
\r
Si el sensor tarda unos 30 sí en estabilizarse, ese intervalo es una estimacion de [[tau]] para el montaje. Una lectura tomada a los 3 sí puede estar lejos del equilibrio aunque el número parezca razonable. Si la tolerancia deseada es 0.1 K, hay que esperar hasta que los cambios sean menores que esa escala.\r
\r
En una lectura real se puede registrar la temperatura cada 5 s. Si la diferencia entre dos lecturas sucesivas cae de 2 K a 0.6 K y luego a 0.08 K, la última etapa ya esta dentro de la tolerancia de 0.1 K. La estimacion no prueba equilibrio exacto, pero si justifica usar la lectura como temperatura comun del sensor y del liquido para el objetivo experimental.\r
\r
## Interpretacion\r
\r
La medición no es instantanea porque el equilibrio requiere relajación. La lectura cuantitativa conecta el concepto abstracto con una decision experimental: esperar varias veces [[tau]] antes de registrar [[T]]. Si no se espera, se mide un transitorio, no un estado de equilibrio.\r
\r
El mismo razonamiento se aplica a sensores de presión, camaras calorimetricas y recipientes de laboratorio. En todos los casos, el dato fiable aparece cuando el instrumento deja de cambiar porque el gradiente que lo alimentaba se hizo menor que la resolucion relevante. Por eso equilibrio es una condición física y también una regla de lectura experimental.\r
`;export{e as default};
