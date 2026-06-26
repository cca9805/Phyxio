const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un laboratorio de mecanica usa una barra rigida perforada para estudiar oscilaciones alrededor de un eje desplazable. Para una configuracion concreta se midieron las siguientes propiedades: [[m]] = 1.80 kg, [[I]] = 0.145 kg*m^2 respecto al eje usado, [[d]] = 0.210 m y [[g]] = 9.81 m/s^2. Se pide calcular [[omega0]], [[T]] y [[f]] en el regimen de pequena amplitud, justificar por que el modelo lineal es razonable y discutir como cambiaria el resultado si el eje se acerca al centro de masas.\r
\r
Ademas, el docente solicita una lectura fisica cualitativa del signo de [[theta_dd]] cuando [[theta]] es positivo y pequeno. No basta con entregar numeros: se debe explicar la causalidad del torque restaurador y el papel de la inercia.\r
\r
## Datos\r
\r
Datos en SI y su interpretacion inmediata:\r
\r
- [[m]] = 1.80 kg. Masa total del cuerpo oscilante.\r
- [[I]] = 0.145 kg*m^2. Momento de inercia respecto al eje real de giro.\r
- [[d]] = 0.210 m. Distancia eje-centro de masas.\r
- [[g]] = 9.81 m/s^2. Aceleracion gravitatoria local.\r
\r
Magnitudes objetivo:\r
\r
- [[omega0]] en rad/s.\r
- [[T]] en s.\r
- [[f]] en Hz.\r
\r
Variable dinamica de contexto:\r
\r
- [[theta]] para describir posicion angular instantanea.\r
- [[theta_dd]] para describir aceleracion angular instantanea.\r
\r
## Definición del sistema\r
\r
Se define como sistema toda la barra rigida que oscila en un plano vertical alrededor de un pivote idealizado como fijo. El sentido positivo de [[theta]] se toma antihorario desde el equilibrio estable. El eje de giro es el mismo usado para determinar [[I]]. Esta coherencia es critica: si [[I]] se tomara de otro eje, toda la solucion quedaria sesgada.\r
\r
Se asume que la amplitud inicial de practica es moderada y que el soporte tiene friccion secundaria durante los primeros ciclos. Bajo esas condiciones, la respuesta temporal puede aproximarse por el modelo lineal para estimar [[omega0]], [[T]] y [[f]].\r
\r
## Modelo físico\r
\r
El modelo fisico adopta la dinamica de pendulo fisico en pequena amplitud. La relacion entre inercia y torque gravitatorio define la pulsacion natural por medio de [[I]], [[m]], [[g]] y [[d]]. Desde esa pulsacion se obtiene el periodo y luego la frecuencia. Para interpretar comportamiento fuera de pequena amplitud, se conserva la ecuacion no lineal que liga [[theta_dd]] con [[theta]].\r
\r
Ecuaciones del leaf utilizadas en este ejemplo:\r
\r
{{f:omega0_pf}}\r
\r
{{f:periodo_pf}}\r
\r
{{f:frecuencia_pf}}\r
\r
{{f:ecuacion_no_lineal_pf}}\r
\r
## Justificación del modelo\r
\r
El uso del modelo lineal se justifica porque el montaje se opera con amplitudes iniciales pequenas y porque el objetivo del ejercicio es estimar parametros basicos del ciclo temporal. En este rango, la diferencia entre solucion lineal y no lineal suele ser menor que otros errores experimentales como lectura de tiempo o incertidumbre en [[d]].\r
\r
Tambien se justifica porque los datos entregados incluyen [[I]] respecto al eje real, lo cual ancla correctamente la inercia del sistema. Si faltara esa referencia, seria mas prudente detener el calculo y revisar metrologia antes de continuar.\r
\r
La ecuacion no lineal se mantiene como herramienta de control conceptual: confirma que el signo de [[theta_dd]] depende del signo de [[theta]] y del torque restaurador, aunque el calculo numerico principal se haga con expresiones lineales.\r
\r
## Resolución simbólica\r
\r
Primero se despeja [[omega0]] con la relacion estructural del leaf:\r
\r
{{f:omega0_pf}}\r
\r
Luego se obtiene [[T]] a partir de [[omega0]] o de su forma directa:\r
\r
{{f:periodo_pf}}\r
\r
Finalmente, se calcula [[f]] con reciprocidad:\r
\r
{{f:frecuencia_pf}}\r
\r
Para la lectura de signo dinamico se usa la ecuacion completa. Si [[theta]] es pequeno y positivo, el termino senoidal mantiene signo positivo y obliga a [[theta_dd]] negativo, coherente con restauracion hacia el equilibrio.\r
\r
## Sustitución numérica\r
\r
Calculo de [[omega0]]:\r
\r
[[omega0]] = sqrt(([[m]]*[[g]]*[[d]])/[[I]]) = sqrt((1.80*9.81*0.210)/0.145)\r
\r
[[omega0]] = sqrt(25.58) = 5.06 rad/s aproximadamente.\r
\r
Calculo de [[T]]:\r
\r
[[T]] = 2*pi/[[omega0]] = 2*pi/5.06 = 1.24 s aproximadamente.\r
\r
Calculo de [[f]]:\r
\r
[[f]] = 1/[[T]] = 1/1.24 = 0.81 Hz aproximadamente.\r
\r
Control interno:\r
\r
[[f]] y [[omega0]] son coherentes porque 2*pi*[[f]] produce una tasa angular cercana al valor calculado de [[omega0]].\r
\r
## Validación dimensional\r
\r
Para [[omega0]] la dimension esperada es T^-1. El cociente ([[m]]*[[g]]*[[d]])/[[I]] tiene unidades:\r
\r
(kg*m/s^2*m)/(kg*m^2) = 1/s^2\r
\r
Su raiz produce 1/s, que corresponde a rad/s para [[omega0]].\r
\r
Para [[T]], la relacion de periodo entrega segundos porque la raiz de [[I]]/( [[m]]*[[g]]*[[d]] ) tiene dimension de tiempo y el factor 2*pi es adimensional. Para [[f]], la unidad Hz aparece por reciprocidad temporal. Esta cadena dimensional confirma que no se mezclaron unidades inconsistentes.\r
\r
## Interpretación física\r
\r
El resultado indica oscilacion relativamente rapida para una barra corta con [[d]] moderado y [[I]] no excesivo. Si el eje se acerca al centro de masas, [[d]] disminuye y el torque restaurador efectivo cae, por lo que [[T]] aumentaria y [[f]] disminuiria. Si, en cambio, se aleja el eje incrementando [[d]] sin cambiar mucho [[I]], la oscilacion se acelera.\r
\r
La lectura de [[theta_dd]] es consistente con estabilidad: para [[theta]] pequeno y positivo, [[theta_dd]] tiende a ser negativo, de modo que el sistema corrige desplazamiento y cruza equilibrio. Esta observacion enlaza el calculo numerico con el mecanismo causal del modelo.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de mantenimiento ferroviario instala un sensor inercial basado en un conjunto oscilante para monitorear vibraciones de baja frecuencia en un bastidor. El componente principal se comporta como pendulo fisico alrededor de un eje mecanizado. Durante comisionamiento se detecta que la respuesta temporal cambia entre unidades de distintas series de fabricacion. Se sospecha que pequenas variaciones geometricas alteran [[d]] y [[I]].\r
\r
El objetivo operativo no es resolver un problema escolar aislado, sino estimar si la frecuencia natural del conjunto queda lejos de la banda de excitacion dominante de servicio. Si la frecuencia natural cae muy cerca de la excitacion, el sistema amplifica vibraciones y deteriora confiabilidad del sensor.\r
\r
## Estimación física\r
\r
Se toma una unidad representativa con [[m]] = 2.3 kg, [[I]] = 0.26 kg*m^2 y [[d]] = 0.17 m. Con [[g]] estandar, se estima [[omega0]] con el modelo lineal y luego [[f]]. El calculo entrega orden de magnitud cercano a 0.7-0.9 Hz, lo que obliga a comparar con la banda de excitacion observada en via.\r
\r
Si la banda dominante del entorno esta alrededor de 0.8 Hz, la separacion de seguridad es insuficiente y conviene redisenar geometria para desplazar frecuencia natural. Dos rutas de diseno son posibles: aumentar [[I]] para bajar [[f]] de forma controlada o aumentar [[d]] para elevar [[f]], segun la zona de riesgo detectada. La decision depende de restricciones de volumen y robustez mecanica.\r
\r
Tambien se evalua sensibilidad metrologica: una incertidumbre de apenas unos milimetros en [[d]] puede mover [[f]] lo suficiente para cambiar la conclusion de riesgo. Por eso se recomienda medir [[d]] con plantilla dedicada y verificar repetibilidad entre lotes.\r
\r
## Interpretación\r
\r
La aplicacion real muestra por que el pendulo fisico es un modelo de ingenieria y no solo academico. Las magnitudes [[I]], [[d]] y [[m]] no son parametros abstractos; son variables de manufactura y montaje que controlan comportamiento vibratorio. El calculo de [[T]] y [[f]] se convierte en criterio de aceptacion de producto.\r
\r
Desde la perspectiva de mantenimiento, interpretar bien el modelo permite decidir si el problema se corrige con rediseno geometrico, con cambio de posicion de eje o con aislamiento adicional. Tambien evita falsas soluciones: aumentar masa total sin analizar [[I]] puede no resolver la proximidad a resonancia.\r
\r
La conclusion cuantitativa de este caso es que una estimacion simple, bien justificada y con orden de magnitud correcto, puede ahorrar ciclos de prueba costosos y mejorar fiabilidad del sistema final.`;export{e as default};
