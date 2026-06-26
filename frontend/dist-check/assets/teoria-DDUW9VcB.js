const e=`# Proceso adiabático\r
\r
## Contexto conceptual\r
\r
Un proceso adiabático es aquel en el que el sistema no intercambia calor con su entorno durante toda la transformación. Esta condición no significa que la temperatura permanezca constante, sino que toda la energía que entra o sale lo hace exclusivamente en forma de trabajo mecánico. El concepto es fundamental en termodinámica porque permite analizar transformaciones rápidas, ciclos de motor y fenómenos atmosféricos sin necesidad de conocer los detalles del flujo de calor.\r
\r
La condición adiabatica se alcanza de dos maneras prácticas. La primera es aislar térmicamente el sistema con paredes que impidan el flujo de calor. La segunda, más frecuente en la práctica, es realizar el proceso tan rápidamente que el calor no tenga tiempo de transferirse apreciablemente. Las explosiones en motores de combustión, la compresión en ciclos de refrigeración y el ascenso de masas de aire en la atmósfera son ejemplos donde el proceso es esencialmente adiabático.\r
\r
Desde el punto de vista del primer principio, eliminar el termino de calor reduce la ecuación a una relación directa entre trabajo y energía interna. Esto convierte el proceso adiabático en un caso privilegiado para estudiar como el trabajo mecánico modifica el estado termodinámico del gas sin la interferencia del calor.\r
\r
## 🟢 Nivel esencial\r
\r
La idea central del proceso adiabático es que **el gas y el entorno no intercambian calor**, pero si pueden intercambiar trabajo. Cuando un gas se expande adiabáticamente, empuja el pistón y realiza trabajo. Como no puede recuperar esa energía en forma de calor, la toma de su propia energía interna. Por eso la **temperatura del gas cae**: el gas se enfria al expandirse en condiciones adiabaticas.\r
\r
El caso contrario también ocurre. Si el entorno comprime el gas adiabáticamente, el trabajo recibido no puede escapar como calor y se queda almacenado como energía interna. Esto eleva la [[T2]] del gas; el gas se calienta. Este efecto es el responsable de que el aire se caliente en una bomba de bicicleta al comprimirlo rápidamente o de que el diesel se encienda por compresión en un motor.\r
\r
> [!NOTE]\r
> En un proceso adiabático, ausencia de calor no significa ausencia de cambio de temperatura. Es exactamente al revés: sin calor que compensar, el trabajo produce el máximo cambio térmico posible.\r
\r
Los dos casos se resumen con una regla intuitiva: **expansión adiabatica enfria; compresión adiabatica calienta**. El mecanismo es siempre el mismo: el trabajo mecánico transforma directamente la energía interna del gas.\r
\r
## 🔵 Nivel formal\r
\r
El primer principio de la termodinámica para un proceso adiabático se escribe imponiendo que el calor es nulo:\r
\r
{{f:primer_principio_adiabatico}}\r
\r
Esta relación muestra que [[DeltaU]] y [[W]] son exactamente opuestos. Si el gas realiza trabajo positivo sobre el entorno, su energía interna disminuye en la misma cantidad. Si el entorno realiza trabajo sobre el gas, la energía interna del gas aumenta.\r
\r
Para calcular el trabajo en una expansión reversible de gas ideal, se integra la presión a lo largo de la curva adiabatica. El resultado depende de las presiones y volumenes en ambos estados y del **coeficiente adiabático** [[gamma]]:\r
\r
{{f:trabajo_adiabatico_ideal}}\r
\r
La curva que traza el gas en el diagrama presión-volumen durante este proceso sigue una ley específica que conecta los estados inicial y final:\r
\r
{{f:ley_adiabata_presion_volumen}}\r
\r
Esta relación es más restrictiva que la ley de gas ideal ordinaria porque el exponente [[gamma]] es mayor que 1, lo que hace que la curva adiabatica sea más inclinada que la isoterma que pasa por el mismo punto.\r
\r
La temperatura final del gas tras el proceso adiabático reversible queda determinada por:\r
\r
{{f:cambio_temperatura_adiabatico}}\r
\r
Este resultado muestra que [[T2]] depende de la razon de volumenes elevada al exponente [[gamma]] menos 1. Cuanto mayor es la razon de expansión y mayor es [[gamma]], más cae [[T1]]. Para un gas diatomico como el aire, [[gamma]] vale aproximadamente 1.4, lo que produce cambios de temperatura apreciables incluso para variaciones de volumen moderadas.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura del proceso adiabático revela como [[gamma]] actúa como un amplificador del efecto térmico respecto al proceso isotérmico. En una expansión isotérmica, la presión sigue la curva del producto presión por volumen constante, y la temperatura no cambia. En la expansión adiabática, la presión sigue la ley adiabática con [[gamma]] mayor que 1 como exponente, lo que implica que la presión cae más rápidamente con el volumen. Este descenso más pronunciado de [[p2]] es precisamente la señal de que el gas no recibe calor del entorno para mantener la temperatura.\r
\r
El valor de [[gamma]] depende de los grados de libertad del gas. Un gas monatomico tiene tres grados de libertad traslacionales y [[gamma]] aproximadamente igual a 5/3 o 1.67. Un gas diatomico tiene además dos grados de libertad rotacionales, lo que da un [[gamma]] de 7/5 o 1.40. A temperaturas muy elevadas, los modos vibracionales se activan y [[gamma]] desciende. Esto significa que el comportamiento de la adiabata no es universal: depende de la naturaleza molecular del gas.\r
\r
La reversibilidad es otro eje estructural. La ley adiabática reversible solo es exactamente válida para un proceso cuasiestático reversible. En una expansión irreversible, como la expansión libre de Joule (el gas se expande contra el vacío), el proceso es adiabático pero **no** sigue esa curva. En la expansión libre adiabatica de gas ideal, [[DeltaU]] = 0 porque tampoco hay trabajo, de modo que la temperatura no cambia. Este caso extremo muestra que adiabático no implica automaticamente enfriamiento: se requiere además intercambio de trabajo.\r
\r
La conexion con ciclos termodinámicos es estructuralmente central. En el ciclo de Carnot, los dos procesos adiabaticos conectan las isotermas caliente y fria. En el ciclo de Brayton (motor a reaccion), la compresión y la expansión de aire son aproximadamente adiabaticas. En el ciclo de refrigeración, la expansión adiabatica produce el frio que interesa al usuario. El proceso adiabático no es un caso academico: es la pieza que convierte diferencias de temperatura en trabajo útil y viceversa.\r
\r
Los limites del modelo aparecen cuando el proceso real es suficientemente lento para que haya intercambio de calor apreciable, cuando la friccion interna disipa energía o cuando el gas se acerca a condiciones de licuefaccion. En esos casos, el modelo de gas ideal con [[gamma]] constante sobreestima el cambio de temperatura y hay que recurrir a tablas de propiedades o a ecuaciones de estado más realistas.\r
\r
## Interpretacion física profunda\r
\r
El proceso adiabático pone en evidencia la equivalencia energética entre calor y trabajo que el primer principio establece. Cuando se elimina el calor, el trabajo asume el rol de único agente de cambio de energía interna. Esto hace visible una asimetria que normalmente queda oculta: en un proceso general, el calor puede compensar o amplificar el efecto del trabajo. En el proceso adiabático, el trabajo actua sin red de seguridad.\r
\r
El [[DeltaT_ad]] resultante es un termometro del trabajo realizado. Si se mide la temperatura inicial y final de un proceso adiabático, se puede calcular el trabajo sin necesidad de medir la fuerza ni el desplazamiento del pistón. Este principio se usa en calorimetria de gases y en el calculo de la temperatura de mezcla en procesos rápidos.\r
\r
## Orden de magnitud\r
\r
Para un gas diatomico como el aire con [[gamma]] = 1.4 en condiciones normales, una expansión que duplica el volumen (razon 2) produce una temperatura final de aproximadamente 0.76 veces la inicial. Si [[T1]] es 300 K, [[T2]] es unos 228 K, un descenso de unos 72 K. Una compresión que reduce el volumen a la mitad eleva [[T2]] a unos 395 K, un aumento de 95 K.\r
\r
Estos valores son típicos de cilindros de motor y de masas de aire en la atmósfera. En un motor diesel, la relación de compresión es del orden de 15:1 a 20:1 y la temperatura del aire puede subir de 300 K hasta 800-900 K, suficiente para encender el combustible sin chispa.\r
\r
Para distinguir si un resultado es absurdo: si tras una expansión adiabatica [[T2]] supera [[T1]], algo esta mal en los datos o en la interpretacion del proceso. Si [[T2]] cae por debajo de 50 K en condiciones ordinarias de laboratorio, es probable que el modelo de gas ideal haya fallado porque el gas se ha licuado o acercado a condiciones criticas.\r
\r
## Metodo de resolucion personalizado\r
\r
1. **Identificar el estado inicial**: registrar [[T1]], [[p1]] y [[V1]] con sus unidades. Convertir temperatura a Kelvin si esta en Celsius.\r
2. **Determinar [[gamma]]**: monatomico ≈ 1.67, diatomico ≈ 1.40, poliatom ≈ 1.30.\r
3. **Identificar la incognita**: [[T2]], [[p2]], [[V2]], [[W]] o [[DeltaU]].\r
4. **Aplicar la ley de la adiabata** usando la relación entre las variables conocidas y la incognita.\r
5. **Calcular [[DeltaU]]** como el negativo de [[W]] o mediante la diferencia de temperatura.\r
6. **Verificar coherencia**: expansión implica [[T2]] < [[T1]] y [[p2]] < [[p1]]; compresión implica lo opuesto.\r
7. **Revisar unidades**: energía en julios, presión en pascales, volumen en metros cubicos, temperatura en Kelvin.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Expansión adiabatica libre (expansión de Joule).** Si el gas se expande contra el vacío sin mover ningún pistón, el trabajo es nulo aunque el volumen aumente. En ese caso, [[DeltaU]] = 0 y [[T2]] = [[T1]] para gas ideal. La expansión adiabatica libre no produce enfriamiento porque no hay trabajo extraido.\r
\r
**Compresión adiabatica rápida.** En un motor de combustión interna, el tiempo de compresión es tan corto que la condición adiabatica es una buena aproximacion. El calentamiento adiabático del aire es la base del encendido por compresión del motor diesel.\r
\r
**Ejemplo extendido.** Un mol de gas diatomico ideal a [[T1]] = 300 K y [[p1]] = 200 kPa se expande adiabáticamente hasta [[V2]] = 2 [[V1]]. Usando la relación adiabatica, [[T2]] = 300 K x (1/2)^0.4 ≈ 228 K. El trabajo realizado puede calcularse como [[W]] = [[p1]] [[V1]] - [[p2]] [[V2]] dividido entre [[gamma]] - 1, y [[DeltaU]] = -[[W]]. La caida de temperatura de unos 72 K no es resultado de perdida de calor, sino de la conversion de energía interna en trabajo mecánico.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por que cambia la temperatura si no hay calor?** La temperatura refleja la energía interna, que cambia mediante trabajo. En expansión el gas usa su energía interna para empujar el pistón; en compresión el pistón deposita energía en el gas.\r
\r
**¿Por que [[gamma]] importa tanto?** [[gamma]] determina cuantos grados de libertad tiene el gas. Más grados de libertad: el mismo trabajo produce menor [[DeltaT_ad]] por modo traslacional. Un gas monatomico se calienta más por la misma compresión.\r
\r
**¿Qué pasa si el proceso adiabatico es irreversible?** La ley adiabática reversible deja de aplicarse y la entropía aumenta. El trabajo real es menor que el calculado por la formula reversible.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
El proceso adiabático conecta directamente con el primer principio de la termodinámica, con la ley de gas ideal, con los calores específicos de los gases y con los ciclos termodinámicos. La ruta recomendada es: primer principio, gas ideal, calores específicos y coeficiente adiabático, proceso adiabático y finalmente ciclo de Carnot y ciclo de Brayton.\r
\r
En mecánica de fluidos, el flujo isentropico de gases compresibles es una generalizacion del proceso adiabático reversible. En atmósfera, el gradiente adiabático seco describe como cae la temperatura con la altitud en una masa de aire que asciende sin intercambiar calor. En acustica, la velocidad del sonido en un gas depende de [[gamma]] precisamente porque las ondas sonoras se propagan de forma esencialmente adiabatica.\r
\r
## Sintesis final\r
\r
Un proceso adiabático transforma exclusivamente trabajo en cambio de energía interna. La expansión enfria el gas porque su energía interna financia el trabajo mecánico; la compresión lo calienta porque el trabajo del entorno se almacena como energía interna. La curva adiabatica en el diagrama pV es más inclinada que la isoterma por un factor [[gamma]], y [[T2]] queda determinada por la razon de volumenes y el coeficiente adiabático del gas.\r
`;export{e as default};
