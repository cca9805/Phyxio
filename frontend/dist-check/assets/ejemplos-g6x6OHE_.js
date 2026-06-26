const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de hielo de 300 g a -10 C se introduce en un recipiente aislado con 500 g de agua a 60 C. Determinar si el hielo se funde por completo y la temperatura final.\r
\r
## Datos\r
\r
- Masa de hielo: [[m]] = 0.300 kg; temperatura inicial: -10 C.\r
- Masa de agua caliente: 0.500 kg; temperatura inicial: 60 C.\r
- Calor específico del hielo: 2090 J/(kg K); calor específico del agua: 4186 J/(kg K).\r
- Calor latente específico de fusion: [[L]] = 334000 J/kg; temperatura de transicion: [[T_trans]] = 0 C.\r
\r
## Definición del sistema\r
\r
El sistema es hielo más agua en un calorimetro ideal. La frontera no intercambia calor con el exterior, por lo que la energía cedida por el agua caliente debe ser igual a la energía absorbida por el hielo y por el agua que se forme.\r
\r
## Modelo físico\r
\r
El proceso tiene tres tramos. Primero el hielo sube hasta [[T_trans]]. Segundo, una masa [[m]] de hielo puede fundirse a temperatura constante. Tercero, si sobra energía después del tramo latente, toda el agua liquida se calienta por encima de [[T_trans]]. El nucleo del modelo es que [[Q_lat]] se calcula con [[m]] y [[L]], no con un cambio de temperatura.\r
\r
## Justificacion del modelo\r
\r
El intervalo de temperatura no incluye ebullicion ni perdidas al recipiente. El calor específico puede tomarse constante y el único cambio de estado posible es la fusion del hielo a [[T_trans]]. Antes de buscar una temperatura final, hay que verificar si el agua caliente aporta energía suficiente para completar el cambio de estado.\r
\r
## Resolucion simbolica\r
\r
La energía latente de fusion de la masa que cambia de estado se calcula con la relación general:\r
\r
{{f:calor_latente_general}}\r
\r
Para esta transicion concreta también aplica:\r
\r
{{f:calor_latente_fusion}}\r
\r
El criterio de decision es comparar el calor disponible al enfriar el agua hasta 0 C con la suma del calor sensible del hielo y el calor latente de fusion. Si el disponible es menor, la respuesta es una mezcla de hielo y agua a [[T_trans]]. Si es mayor, se calcula la temperatura final del agua liquida resultante.\r
\r
## Sustitucion numerica\r
\r
Calor para calentar el hielo hasta 0 C: 0.300 * 2090 * 10 = 6270 J.\r
\r
Calor latente para fundir todo el hielo: [[Q_lat]] = 0.300 * 334000 = 100200 J.\r
\r
Energía total necesaria hasta fusion completa: 106470 J. Energía máxima que puede ceder el agua al bajar a 0 C: 0.500 * 4186 * 60 = 125580 J. Como el disponible es mayor, el hielo se funde completamente y quedan 19110 J.\r
\r
Esa energía calienta 0.800 kg de agua desde 0 C: temperatura final = 19110 / (0.800 * 4186) = 5.7 C.\r
\r
## Validacion dimensional\r
\r
En el tramo latente, [[m]] esta en kg y [[L]] en J/kg, por lo que [[Q_lat]] queda en J. En los tramos sensibles, masa por calor específico por intervalo de temperatura también da J. La temperatura final es coherente: esta por encima de [[T_trans]] porque sobra energía, pero muy por debajo de 60 C porque el cambio de estado consume la mayor parte del calor.\r
\r
## Interpretacion física\r
\r
El resultado bajo, 5.7 C, no indica que el agua caliente tuviera poca energía; indica que fundir hielo es energeticamente caro. De los 125.6 kJ disponibles hasta 0 C, unos 100.2 kJ se consumen solo como [[Q_lat]]. Sin incluir el tramo latente, se obtendria una temperatura final mucho mayor y físicamente falsa.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una planta alimentaria debe congelar 50 kg de carne desde 20 C hasta -18 C. La carne contiene agua, de modo que el tramo dominante es el cambio de estado de esa fraccion acuosa. Se pide una estimacion de la energía que debe extraer el sistema frigorifico.\r
\r
## Estimacion física\r
\r
Datos de estimacion: calor específico sobre congelacion 3350 J/(kg K), punto de congelacion aproximado [[T_trans]] = -2 C, calor latente efectivo [[L]] = 233800 J/kg por la fraccion de agua, y calor específico de carne congelada 1750 J/(kg K).\r
\r
Enfriar de 20 C a -2 C requiere 50 * 3350 * 22 = 3.69 MJ. Congelar la masa se estima con:\r
\r
{{f:calor_latente_general}}\r
\r
El tramo latente da [[Q_lat]] = 50 * 233800 = 11.69 MJ. Enfriar después de -2 C a -18 C requiere 50 * 1750 * 16 = 1.40 MJ. La energía total a extraer es 16.78 MJ.\r
\r
## Interpretacion\r
\r
La lectura cuantitativa es clara: el cambio de estado representa aproximadamente el 70 % del total. Por eso el dimensionamiento del compresor depende más de [[m]] y [[L]] que del intervalo de temperatura. Si el proceso debe completarse en 2 h, dividir la energía total entre el tiempo da una potencia mínima media de unos 2.33 kW, antes de incluir perdidas y rendimiento real. En una instalacion real se sobredimensiona el equipo porque también hay calor que entra por paredes, aire de renovacion, bandejas y motores. La estimacion no pretende cerrar el diseno completo; sirve para mostrar que el termino latente fija la escala principal del problema.\r
\r
\r
La misma lectura permite comparar decisiones: reducir la masa procesada a la mitad reduce casi a la mitad el termino [[Q_lat]], mientras que cambiar unos pocos grados la temperatura final afecta solo a los tramos sensibles. Por eso, cuando hay cambio de estado, el primer control de plausibilidad es mirar masa, tipo de transicion y [[L]].\r
\r
`;export{e as default};
