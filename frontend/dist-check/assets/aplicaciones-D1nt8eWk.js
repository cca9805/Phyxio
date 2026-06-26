const e=`\uFEFF# manómetros - Aplicaciones\r
\r
## 1. Aplicacion principal: control de filtros y perdidas de carga en HVAC\r
**Variable dominante:** [[dp]], diferencia de presion entre antes y despues del filtro.\r
\r
**Limite de validez:** Regimen cuasiestatico, lectura vertical correcta y fluido manometrico bien calibrado; si hay vibraciones intensas o pulsaciones fuertes, la lectura oscila y el promedio debe tratarse con cuidado.\r
\r
En climatizacion industrial y hospitalaria, un manómetro diferencial es una herramienta de mantenimiento continuo. El filtro limpio presenta un [[dp]] pequeno; al ensuciarse, la resistencia al paso del aire crece y el desnivel aumenta. El tecnico no necesita abrir el sistema ni desmontar conductos para saber que la instalacion esta perdiendo eficiencia: basta con interpretar el salto de presion. Esa lectura se transforma luego en una decision operativa concreta, como cambiar el filtro, ajustar el ventilador o comprobar si la malla esta colapsada por polvo.\r
\r
El valor de la aplicacion no es solo metrologico. Permite detectar fallos antes de que aparezcan sintomas secundarios mas caros, como bajo caudal, sobrecarga del motor o empeoramiento de la calidad del aire interior.\r
\r
## 2. Aplicacion tecnica: diagnostico de lineas de gas y vapor\r
**Variable dominante:** [[p2]], presion reconstruida en el punto de interes a partir de una referencia [[p1]].\r
\r
**Limite de validez:** El instrumento debe estar correctamente purgado y el liquido manometrico no debe reaccionar con el gas o el vapor del proceso.\r
\r
En redes de gas, calderas y pequenos sistemas de vapor, los manómetros siguen siendo utiles para verificar si una linea mantiene la presion prevista en distintos puntos. El tecnico mide la diferencia [[dp]], fija una referencia [[p1]] y obtiene [[p2]]. Si la presion resultante cae por debajo de la especificacion, el problema puede apuntar a fugas, estrangulamientos o ajustes incorrectos de valvulas. Frente a un sensor electronico, el manómetro ofrece una gran ventaja pedagogica y practica: hace visible la lectura y permite comprobar de un vistazo si la desviacion es real o si parece incompatible con la geometria del instrumento.\r
\r
## 3. Aplicacion de laboratorio: calibracion y comparacion de sensores\r
**Variable dominante:** [[dh]], porque la lectura primaria del instrumento es geometrica y se usa como patron de comparacion.\r
\r
**Limite de validez:** La precision depende de una lectura fina del menisco, de la verticalidad del montaje y del conocimiento de [[rho]].\r
\r
En laboratorios docentes y de metrologia basica, el manómetro se usa como patron simple para contrastar sensores de presion digitales. La ventaja es conceptual: el sensor electronico entrega un numero, mientras que el manómetro entrega una cadena fisica completa entre causa y lectura. Si ambos no coinciden, el alumno o el tecnico puede preguntar donde esta el problema: en la densidad usada, en la conversion de unidades, en el cero del sensor o en la interpretacion de la referencia. Esta aplicacion convierte al manómetro en una herramienta de verificacion y tambien de formacion.\r
\r
## 4. Aplicacion biomedica e historica: medicion de presiones bajas\r
**Variable dominante:** [[rho]], porque la seleccion del fluido manometrico fija la sensibilidad del instrumento para presiones pequenas.\r
\r
**Limite de validez:** Solo es util cuando el rango de presiones y la seguridad del fluido elegido son compatibles con el entorno experimental o clinico.\r
\r
Historicamente, los manómetros se utilizaron para medir presiones fisiologicas bajas y para estudiar respiracion y circulacion. En aplicaciones de baja presion, un fluido menos denso aumenta la sensibilidad porque el mismo [[dp]] produce un [[dh]] mayor. Aunque hoy muchos equipos clinicos son electronicos, esta idea sigue viva en el diseno de sensores diferenciales: a pequena presion interesa una lectura amplificada y bien resuelta. El manómetro enseña de forma transparente por que la sensibilidad depende del fluido y no solo de la escala dibujada en el tubo.\r
\r
## 5. Aplicacion de ingenieria de procesos: paneles de operacion y seguridad\r
**Variable dominante:** [[p1]] o la referencia de presion desde la que se interpreta la lectura.\r
\r
**Limite de validez:** Las presiones comparadas deben expresarse con la misma referencia; mezclar absoluta y manometrica invalida el diagnostico.\r
\r
En paneles de proceso, calderas, reactores sencillos y bancos de prueba, un manómetro aporta una lectura robusta cuando se necesita confirmar si una linea esta por encima o por debajo de la presion esperada. Su papel no siempre es dar el valor final mas refinado, sino confirmar que la tendencia fisica es coherente con el estado del sistema. Si el operador sabe cual es la referencia [[p1]], puede traducir la lectura [[dp]] en una [[p2]] util para decidir si conviene abrir una purga, detener una bomba o revisar un regulador. En muchos entornos, esa transparencia fisica sigue siendo valiosa incluso junto a instrumentacion digital avanzada.\r
\r
Esta aplicacion tambien recuerda una idea de seguridad: una lectura diferencial sencilla puede detectar una deriva antes de que el sistema entre en una zona peligrosa. El valor del manómetro no reside solo en la precision, sino en que su lectura obliga a pensar fisicamente que rama empuja mas, que referencia se esta usando y que cambio operativo conviene hacer.\r
`;export{e as default};
