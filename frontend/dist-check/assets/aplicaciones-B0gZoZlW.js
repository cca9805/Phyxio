const e=`\uFEFF# Aplicaciones del principio de Arquímedes\r
\r
## 1. Aplicación soberana: Arquitectura naval y diseño de buques de gran calado\r
En el ámbito monumental de la ingeniería naval, el principio de Arquímedes no es una simple ecuación de aula, sino la ley constitutiva y absoluta que permite que estructuras de acero de cientos de miles de toneladas desafíen la gravedad y permanezcan en la superficie del océano. El diseño de un superpetrolero o de un portaaviones se basa en el cálculo preciso del volumen del casco sumergido para generar un empuje [[E]] que iguale o supere el peso total de la embarcación y su carga útil. Los ingenieros deben esculpir la geometría del casco para que, incluso con el máximo tonelaje cargado, el volumen desalojado sea suficiente para mantener el francobordo necesario para la navegación segura. Esta aplicación requiere un dominio absoluto de la densidad del agua de mar [[rho_f]], que varía ligeramente según la salinidad y la temperatura, obligando a los buques a llevar marcas de línea de carga (como el disco de Plimsoll) que indican hasta dónde pueden sumergirse según el medio donde operen.\r
\r
- **Variable dominante**: [[V_des]] (Volumen desplazado por la geometría del casco).\r
- **Límite de validez**: Solo operativo mientras el casco se mantenga estanco y no haya inundaciones compartimentadas que mermen drásticamente el volumen de aire interno, alterando la densidad promedio del sistema.\r
\r
## 2. Aplicación estratégica: Ingeniería de submarinos y control de flotabilidad activa\r
A diferencia de los barcos de superficie, los submarinos deben operar en un estado de equilibrio dinámico alternando entre la flotación positiva, neutra y negativa. Esto se logra mediante el uso de tanques de lastre que pueden llenarse de agua de mar o vaciarse con aire comprimido. Al alterar la cantidad de agua en su interior, el submarino cambia su peso propio [[W]] sin alterar su volumen externo. Así, el principio de Arquímedes permite que, al igualar [[W]] con el empuje [[E]], el submarino alcance una flotación neutra ([[W_ap]] = 0) que le permite "flotar" a profundidad constante. Para emerger, el submarino expulsa el agua de los tanques mediante aire a presión, reduciendo su peso total hasta que el empuje de Arquímedes lo impulsa de regreso a la superficie.\r
\r
- **Variable dominante**: [[W_ap]] (Peso aparente del sumergible controlado mediante lastre).\r
- **Límite de validez**: Limitado por la resistencia estructural del casco a la presión hidrostática extrema, la cual podría comprimir el volumen total del submarino y reducir su empuje a grandes profundidades.\r
\r
## 3. Aplicación aerostática: Navegación de globos y zepelines en la atmósfera\r
Aunque comúnmente se asocia con líquidos, el principio de Arquímedes es la fuerza motriz detrás de toda la aerostática. Un globo de aire caliente o de helio asciende porque desplaza un volumen masivo de aire atmosférico. Dado que el aire tiene una densidad [[rho_f]] aproximada de 1.2text{ kg/m}^3 a nivel del mar, un globo con un volumen [[V_des]] de 1000text{ m}^3 recibe un empuje hacia arriba de aproximadamente 12000text{ Newtons}. Si el peso total del globo (incluida la barquilla, el quemador y el gas interno) es menor que este empuje, el globo ascenderá. Esta aplicación es crítica para el diseño de sondas meteorológicas que transportan instrumentos científicos a la estratósfera, donde la densidad del aire decae y el volumen del globo debe expandirse para compensar la pérdida de empuje.\r
\r
- **Variable dominante**: [[rho_f]] (Densidad del aire circundante, altamente variable con la altitud).\r
- **Límite de validez**: El empuje desaparece gradualmente a medida que el globo alcanza capas de aire tan tenue que su densidad iguala a la densidad promedio del sistema (techo de vuelo).\r
\r
## 4. Aplicación metrológica: Determinación de pureza y densidad mediante balanza hidrostática\r
Heredada directamente del experimento original de Arquímedes con la corona del rey Hierón, esta aplicación permite identificar materiales y detectar fraudes en aleaciones sin destruir la pieza. Se utiliza una balanza hidrostática para medir el peso real [[W]] de un objeto en el aire y su peso aparente [[W_ap]] al sumergirlo en un líquido de densidad conocida (generalmente agua pura). A partir de la diferencia entre ambos valores, que es igual al empuje [[E]], se puede calcular el volumen exacto [[V_des]] del objeto, por muy irregular que sea su forma. Dividiendo el peso real entre este volumen multiplicado por la gravedad, obtenemos la densidad del material, permitiendo confirmar si un lingote es de oro puro o si ha sido adulterado con metales menos densos.\r
\r
- **Variable dominante**: [[E]] (Magnitud del empuje detectada por la pérdida de peso).\r
- **Límite de validez**: Requiere que el objeto no sea poroso y que no atrape burbujas de aire en su superficie, lo que falsearía la medición del volumen desalojado.\r
\r
## 5. Aplicación instrumental: Hidrómetros y densímetros de inmersión industrial\r
En las industrias química, alimentaria y petrolera, se utilizan hidrómetros para medir de forma instantánea la densidad de líquidos como la leche, el vino o el combustible. Un hidrómetro es un cilindro de vidrio lastrado con un vástago graduado que flota verticalmente en la muestra. El principio de Arquímedes establece que el hidrómetro se hundirá hasta que el peso del volumen de líquido desplazado iguale su propio peso. Si el líquido es muy denso, se requiere menos volumen para generar el empuje necesario y el hidrómetro flota alto. Si el líquido es poco denso, el hidrómetro se hunde más. Esta aplicación permite un control de calidad rápido y preciso en procesos de fermentación y destilación mediante la lectura directa del nivel de flotación.\r
\r
- **Variable dominante**: [[rho_f]] (Propiedad intrínseca del líquido bajo prueba).\r
- **Límite de validez**: La lectura debe corregirse según la temperatura, ya que la densidad del fluido varía y la dilatación térmica del propio instrumento puede introducir errores sistemáticos.\r
\r
`;export{e as default};
