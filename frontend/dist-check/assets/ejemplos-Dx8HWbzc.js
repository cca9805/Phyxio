const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un carrito de laboratorio de masa conocida avanza en linea recta sobre un riel horizontal de baja friccion. Se registran datos de fuerza y velocidad durante un intervalo de 6 s despues de que cesa el empuje inicial. El docente pide decidir si el tramo pertenece al dominio de la primera ley, justificar el modelo y concluir si el estado de movimiento se conserva o cambia. Ademas, se solicita distinguir claramente entre fuerzas individuales y resultante neta para evitar interpretaciones intuitivas incorrectas.\r
\r
## Datos\r
\r
- Masa del carrito: 0.50 kg.\r
- Ventana temporal analizada: de 2 s a 8 s.\r
- Lectura media de [[F_net]]: 0.01 N.\r
- Fluctuacion instrumental de fuerza: hasta 0.02 N.\r
- Velocidad inicial en la ventana: 1.20 m/s.\r
- Velocidad final en la ventana: 1.18 m/s.\r
- Criterio de aula para equilibrio dinamico: modulo de [[a]] no mayor que 0.02 m/s^2 en promedio.\r
\r
## Definición del sistema\r
\r
Sistema elegido: carrito completo con ruedas, tratado como una sola unidad mecanica.\r
\r
Interacciones externas relevantes: normal del riel, peso, rozamiento residual de eje y aire. El empuje humano solo actuo antes de iniciar la ventana de analisis y no se incluye como fuerza activa durante el intervalo evaluado.\r
\r
Marco de referencia: laboratorio, tomado como inercial para esta practica por la escala de tiempo y desplazamiento.\r
\r
## Modelo físico\r
\r
Se adopta el modelo inercial de primera ley para describir el intervalo principal, con validacion por tolerancia experimental. La idea central es que una resultante externa cero o cero compatible produce [[a]] compatible con cero y, en consecuencia, conserva el estado de [[v]].\r
\r
## Justificación del modelo\r
\r
La justificacion no se basa en que el carrito se vea suave o recto, sino en la cadena causal completa: lectura de [[F_net]], consistencia de [[a]] y evolucion de [[v]]. El valor de fuerza medido se mantiene dentro de la banda de ruido del sensor y no muestra sesgo sostenido en una direccion. Por eso, no hay evidencia de una causa neta robusta que imponga cambio dinamico sostenido.\r
\r
Ademas, la diferencia de velocidad entre inicio y fin de ventana es pequena y puede explicarse por disipacion residual y resolucion de medicion. Esto respalda tratar el tramo como caso de primera ley en aproximacion principal.\r
\r
## Resolución simbólica\r
\r
{{f:first_law_condition}}\r
\r
{{f:equilibrium_dynamics_relation}}\r
\r
{{f:constant_velocity_inertia}}\r
\r
Lectura simbolica: condicion de resultante nula conduce a aceleracion nula y esta a conservacion de velocidad en el marco inercial.\r
\r
## Sustitución numérica\r
\r
Si se toma [[F_net]] igual a 0.01 N y masa 0.50 kg, la aceleracion estimada por cociente fuerza masa es 0.02 m/s^2. Ese valor coincide con el limite de tolerancia del montaje. Como no hay tendencia acumulada clara y la lectura oscila alrededor de cero, se interpreta como regimen practicamente inercial.\r
\r
La deriva de rapidez de 1.20 m/s a 1.18 m/s en 6 s implica un cambio promedio pequeno, coherente con perturbaciones residuales de bajo impacto para la escala didactica del ejercicio.\r
\r
## Validación dimensional\r
\r
La consistencia dimensional se mantiene en cada paso: N dividido por kg produce m/s^2, y variacion de velocidad dividida por tiempo produce tambien m/s^2. No se mezclan unidades de longitud o tiempo sin conversion.\r
\r
## Interpretación física\r
\r
El resultado no dice que no existan fuerzas. Dice que su suma externa efectiva no produce cambio dinamico relevante en la ventana estudiada. La lectura correcta es conservacion de estado de movimiento, no ausencia de interacciones.\r
\r
En lenguaje fisico operativo: el sistema permanece en estado inercial aproximado, con pequenas desviaciones esperables por disipacion no ideal. Por eso, primera ley explica el tramo de forma suficiente y transparente.\r
\r
Ademas, la interpretacion causal permite anticipar conducta ante perturbaciones futuras. Si aparece una fuerza externa sostenida, el primer signo observable sera una desviacion persistente de [[a]] y luego una deriva clara de [[v]]. Esta secuencia confirma que la primera ley funciona como criterio diagnostico y no solo como frase teorica.\r
\r
La lectura tambien tiene contenido explicativo sobre interacciones: peso y normal no desaparecen, pero su balance con rozamientos pequenos evita una causa neta dominante. Esto muestra que equilibrio dinamico no significa ausencia de mundo externo, sino compensacion efectiva de efectos. Entender esta diferencia cambia la forma de resolver problemas posteriores, porque obliga a justificar el modelo con causalidad y no con memoria de formulas.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una bodega automatizada, un carro autonomo transporta cajas ligeras por pasillos rectos. El sistema de control trabaja en ciclos cortos y necesita decidir si mantener modo de crucero inercial o activar correccion dinamica completa. Esta decision se toma con base en mediciones de [[F_net]], [[a]] y estabilidad de [[v]].\r
\r
## Estimación física\r
\r
Se fija como criterio de operacion que la variacion relativa de [[v]] no supere 2 por ciento en ventanas de 4 s. Durante una corrida tipica, el algoritmo estima aceleracion parasita media de 0.015 m/s^2 con rapidez nominal 3.0 m/s.\r
\r
Primero se calcula el cambio maximo permitido de rapidez: 2 por ciento de 3.0 m/s, que da 0.06 m/s. Luego se estima tiempo inercial util dividiendo ese margen por la aceleracion parasita. El resultado aproximado es 4 s.\r
\r
La lectura operativa es directa: mientras la ventana de prediccion no exceda 4 s, tratar [[v]] como constante mantiene error dentro del umbral de servicio. Si se requiere horizonte mayor, el sistema debe cambiar a modelo con fuerza neta efectiva no nula y correccion activa mas frecuente.\r
\r
Este procedimiento no contradice primera ley. La usa como referencia ideal y define cuantitativamente cuando el entorno real obliga a extender el modelo.\r
\r
## Interpretación\r
\r
La aplicacion muestra el valor ingenieril de la primera ley: permite separar fases de movimiento conservado de fases de accion neta. Esa separacion mejora eficiencia, porque evita sobrecontrol cuando el sistema ya esta estable, y tambien mejora seguridad, porque activa correccion cuando aparece deriva sostenida.\r
\r
Didacticamente, el caso real refuerza tres mensajes: una velocidad constante no requiere empuje permanente, la decision causal depende de [[F_net]], y los umbrales cuantitativos convierten una idea teorica en criterio de operacion reproducible.\r
\r
Tambien se ve una consecuencia metodologica: el modelo no se descarta por pequenas discrepancias instantaneas, sino cuando la evidencia acumulada supera un umbral definido. Esa lectura evita dos extremos frecuentes: negar cambios reales y sobreinterpretar ruido instrumental. Con este criterio, el alumno aprende a tomar decisiones fisicas defendibles en escenarios reales.\r
\r
Finalmente, la interpretacion conecta con decisiones de ingenieria. En modo inercial, conviene priorizar estabilidad y eficiencia energetica; en modo no inercial, conviene priorizar correccion y seguridad. La primera ley, bien interpretada, no solo explica lo que ocurre: orienta que hacer cuando cambian las condiciones del sistema.\r
`;export{e as default};
