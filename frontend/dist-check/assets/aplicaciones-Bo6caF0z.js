const e=`\uFEFF## 1. Sistemas de refrigeración por compresión de vapor\r
\r
El frigorifico domestico, el aire acondicionado y la camara frigorifica industrial funcionan haciendo circular un refrigerante que cambia de estado. En el evaporador, el fluido se vaporiza a baja temperatura y absorbe [[Q_lat]] del espacio que se quiere enfriar. En el condensador, el mismo fluido vuelve a liquido y libera ese calor al exterior. La utilidad tecnica del ciclo no esta en cambiar muchos grados la temperatura del fluido, sino en mover mucha energía durante la transicion de fase.\r
\r
En una instalacion real, el caudal de refrigerante y su [[L]] determinan la escala del calor transportado por unidad de tiempo. Si el refrigerante elegido tiene un calor latente específico alto, se puede transportar más energía con menos masa circulante. Por eso la seleccion del fluido no es solo ambiental o de seguridad: también condiciona el tamano del compresor, los intercambiadores y el consumo electrico.\r
\r
Variable dominante: [[L]] del refrigerante en el evaporador y masa que cambia de estado por segundo.\r
\r
Límite de validez: el modelo de [[L]] constante es una primera estimacion. Si la presión de evaporacion cambia mucho, también cambian [[T_trans]] y el calor latente efectivo.\r
\r
## 2. Almacenamiento térmico con materiales de cambio de fase\r
\r
Los materiales de cambio de fase, llamados PCM, almacenan energía casi a temperatura constante. Una cera de parafina que funde cerca de 25 C puede absorber calor durante el dia sin elevar mucho la temperatura interior de un edificio. Por la noche, al solidificarse, devuelve esa energía. La ventaja frente a una masa ordinaria de hormigon o agua es que una parte grande del almacenamiento ocurre como [[Q_lat]], no solo como calor sensible.\r
\r
El criterio de diseno es elegir una [[T_trans]] cercana a la temperatura que se quiere estabilizar. Si el punto de fusion esta muy bajo, el material ya estara liquido y no almacenara energía latente en el momento útil. Si esta muy alto, no llegara a fundirse. La masa [[m]] de PCM fija la capacidad total de almacenamiento junto con [[L]].\r
\r
Variable dominante: [[Q_lat]] durante la fase de carga, porque mide la energía almacenada mientras el PCM funde.\r
\r
Límite de validez: el modelo ideal supone transicion completa. En paneles grandes puede haber gradientes internos y solo una fraccion del PCM cambia de estado en cada ciclo diario.\r
\r
## 3. Esterilizacion con vapor en autoclaves\r
\r
Un autoclave esteriliza usando vapor de agua a presión superior a la atmosférica. Al aumentar la presión, la ebullicion ocurre a una [[T_trans]] mayor que 100 C; por eso el vapor puede estar alrededor de 121 C. Cuando condensa sobre el material frio, libera una gran cantidad de [[Q_lat]] directamente en la superficie, calentando de forma rápida y eficaz instrumentos, envases o medios de cultivo.\r
\r
El efecto no se explica solo por la temperatura. El vapor transporta energía latente que se libera al condensar, por eso puede transferir calor mucho más intensamente que aire seco a temperatura parecida. En aplicaciones sanitarias, el tiempo de exposicion se fija para garantizar que toda la carga alcance la temperatura de esterilizacion durante el intervalo requerido.\r
\r
Variable dominante: [[T_trans]] del vapor a la presión del autoclave y [[Q_lat]] liberado por la condensacion.\r
\r
Límite de validez: si quedan bolsas de aire, superficies mal mojadas o zonas sin contacto con vapor, el modelo de condensacion uniforme no describe bien la transferencia real.\r
\r
## 4. Sudoracion y refrigeración corporal\r
\r
La sudoracion enfria el cuerpo porque el agua de la piel se evapora absorbiendo [[Q_lat]]. Ese calor sale del cuerpo y permite disipar potencia térmica durante ejercicio o ambientes calurosos. La temperatura de la piel no necesita bajar mucho para que el mecanismo sea eficaz; la clave es que cada pequeña masa [[m]] de agua que se evapora retira energía latente.\r
\r
La humedad relativa controla el proceso. En aire seco, el sudor se evapora con facilidad y el cuerpo pierde calor. En aire saturado, el sudor queda liquido sobre la piel: hay incomodidad, pero poca evaporacion y poca extraccion de energía latente. Por eso la misma temperatura ambiente puede ser tolerable en clima seco y peligrosa en clima humedo.\r
\r
Variable dominante: [[Q_lat]] extraido por evaporacion de agua sobre la piel.\r
\r
Límite de validez: el modelo solo estima la energía retirada por evaporacion; no incluye circulacion sanguinea, radiacion, conveccion ni limites fisiologicos de produccion de sudor.\r
\r
## 5. Nubes, tormentas y liberacion de calor latente\r
\r
Cuando aire humedo asciende, se expande y se enfria. Al llegar al punto de rocio, parte del vapor de agua condensa en gotitas de nube. Esa condensacion libera [[Q_lat]] al aire circundante, lo calienta respecto al ambiente y puede reforzar la corriente ascendente. Por eso el calor latente de condensacion es una fuente energética central en nubes convectivas y tormentas.\r
\r
En una tormenta intensa, grandes masas de vapor cambian de estado en pocas horas. Aunque cada kilogramo se condense en microgotas, la suma de [[m]] sobre todo el volumen de nube produce una energía enorme. Este mecanismo conecta la termodinámica microscopica del cambio de fase con fenómenos atmosféricos de escala kilometrica.\r
\r
Variable dominante: masa total de vapor que condensa y [[L]] del agua en las condiciones atmosféricas.\r
\r
Límite de validez: la atmósfera real no mantiene temperatura ni presión constantes; los modelos meteorologicos calculan [[T_trans]], humedad y liberacion latente de forma distribuida en altura.\r
`;export{e as default};
