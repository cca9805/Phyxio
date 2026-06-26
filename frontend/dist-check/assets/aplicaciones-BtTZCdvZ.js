const a=`# Aplicaciones

## 1. Pendulo simple como trayectoria angular

Variable dominante: [[S]]

Límite de validez: amplitudes moderadas, cuerda ideal y movimiento suave sin rozamiento dominante.

En el pendulo simple, el principio variacional permite dejar de resolver la tension como incognita principal. La coordenada angular [[qi]] ya incorpora la longitud fija, y el lagrangiano [[L]] concentra energia cinetica y potencial. Al formar [[S]], la trayectoria angular fisica se selecciona por estacionariedad, no por una eleccion visual de la curva.

Esta aplicacion es muy util en docencia porque muestra que una fuerza real puede no ser la protagonista de la ecuacion reducida. El alumnado ve que la tension mantiene la ligadura, pero el movimiento angular sale de comparar trayectorias admisibles. La accion no sustituye a la fisica del pendulo: organiza sus condiciones en una forma compacta.

## 2. Particula libre entre dos puntos

Variable dominante: [[deltaS]]

Límite de validez: masa constante, ausencia de fuerzas externas y extremos espaciales y temporales fijados.

Una particula libre ilustra el significado de estacionariedad sin esconderse detras de potenciales. Entre dos puntos fijados, la trayectoria rectilinea uniforme es la que hace estacionaria la accion. Otras curvas pueden unir los mismos extremos, pero introducen variaciones de velocidad que alteran el balance cinetico.

El ejemplo permite combatir la idea de que la naturaleza busca siempre la distancia mas corta por una razon geometrica simple. Lo que se estaciona es [[S]], construida desde [[L]], y el resultado coincide con la trayectoria recta porque el modelo no contiene interacciones. Si se anade un potencial, el camino estacionario cambia.

## 3. Diseno de simulaciones mecanicas

Variable dominante: [[Ri]]

Límite de validez: integracion numerica con pasos suficientemente pequenos y lagrangiano regular.

En simulaciones de sistemas mecanicos, el principio variacional ayuda a construir algoritmos que respetan mejor la estructura del movimiento. Aunque un curso inicial no programe integradores variacionales, la idea es didactica: una simulacion no debe solo actualizar posiciones, sino conservar la coherencia entre trayectoria, energia y restricciones.

El residuo [[Ri]] funciona como prueba de calidad del modelo. Si la trayectoria numerica acumula residuo sistematico, la discretizacion, el paso temporal o el lagrangiano usado pueden estar mal planteados. La lectura es fisica, no solo computacional: el calculo debe seguir representando una trayectoria estacionaria aproximada.

## 4. Optica y principio de Fermat como analogia

Variable dominante: [[S]]

Límite de validez: analogia formal; no se debe confundir accion mecanica con tiempo optico sin declarar el modelo.

El principio de Fermat en optica ofrece una analogia potente: el rayo real hace estacionario el tiempo optico. La mecanica analitica usa otra magnitud, la accion, pero comparte la idea de comparar caminos completos. Esta aplicacion ayuda a los alumnos a reconocer que los principios variacionales no son exclusivos de masas y fuerzas.

La analogia debe usarse con cuidado. No se trata de decir que la luz y una particula obedecen la misma formula local, sino que ambos problemas pueden formularse como seleccion de trayectorias por estacionariedad. Esa lectura prepara el salto a fisica moderna sin adelantar formalismos innecesarios.

## 5. Auditoria de modelos con coordenadas generalizadas

Variable dominante: [[L]]

Límite de validez: coordenadas suaves, ligaduras compatibles y energias escritas en la misma configuracion.

Cuando un problema se expresa con coordenadas generalizadas, la accion sirve como auditoria. Si [[L]] mezcla energias de configuraciones distintas, [[S]] pierde sentido. Si [[t1]] y [[t2]] no estan fijados, el conjunto de trayectorias comparadas cambia. Si una variacion no respeta la ligadura, no pertenece al modelo.

Esta aplicacion es especialmente importante para profesores. Permite revisar soluciones antes de derivar ecuaciones largas: primero se comprueba que las variables, energias, extremos y variaciones pertenecen al mismo sistema. Despues se usa el principio variacional. El objetivo no es decorar con una integral, sino asegurar que el modelo dinamico esta bien construido.

En ejercicios avanzados, esta auditoria tambien ayuda a decidir si conviene pasar a fuerzas generalizadas, multiplicadores o una formulacion hamiltoniana. Si el problema no tiene extremos bien definidos, si la trayectoria presenta saltos o si el lagrangiano no representa todas las interacciones relevantes, la accion estacionaria simple no debe aplicarse de forma automatica. La aplicacion, por tanto, enseña criterio de frontera: cuando el principio es potente y cuando hay que cambiar de herramienta.

Una segunda utilidad es comunicativa. Dos alumnos pueden elegir coordenadas distintas y obtener ecuaciones equivalentes si ambos respetan la misma accion y las mismas variaciones admisibles. Comparar sus planteamientos desde [[S]] permite distinguir diferencias de notacion de errores de modelo. Si uno cambia el cero de potencial pero conserva la estructura variacional, la dinamica no debe cambiar. Si otro altera una condicion de borde, ya no esta resolviendo el mismo problema. Esta aplicacion convierte el principio en lenguaje comun para debatir soluciones.

Tambien sirve para evaluar explicaciones cualitativas. Una respuesta puede tener derivadas correctas y aun asi no explicar que caminos se comparan, que extremos permanecen fijos o que informacion fisica contiene [[L]]. Al exigir esas tres piezas, la aplicacion eleva el nivel de una solucion de calculo a una solucion de mecanica analitica. Para un profesor, esto facilita corregir no solo el resultado final, sino el contrato fisico que lo hace valido.
`;export{a as default};
