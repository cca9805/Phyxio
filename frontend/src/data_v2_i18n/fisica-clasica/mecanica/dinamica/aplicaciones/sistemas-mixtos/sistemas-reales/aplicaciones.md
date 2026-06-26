# Aplicaciones de sistemas reales

## 1. Cinta transportadora industrial con arranques frecuentes

En una línea de alimentación de envases, la cinta debe arrancar y detenerse cientos de veces por turno. El sistema parece sencillo, pero en operación real la disipación mecánica cambia de un ciclo a otro por temperatura, polvo y estado de lubricación. El operador suele mirar solo la consigna de motor, pero la variable que explica el comportamiento es la fuerza neta [[F_net]] y no la fuerza aplicada [[F_ap]] en bruto.

Cuando los rodamientos empiezan a degradarse, la fuerza de pérdidas [[F_loss]] sube gradualmente. El equipo sigue funcionando, pero la aceleración [[a]] cae y el tiempo de ciclo aumenta. Ese cambio suele ser interpretado como problema de programación, cuando en realidad es un fenómeno físico de pérdidas acumuladas.

Variable dominante: [[F_loss]]
Límite de validez: el modelo de pérdidas cuasi-constantes es razonable mientras la temperatura del conjunto no cambie de forma brusca durante el arranque.

Desde la perspectiva energética, el área de mejora más rentable no es aumentar indefinidamente [[P_in]], sino reducir [[P_loss]] por mantenimiento predictivo. Esa decisión evita sobreconsumo y retrasa fallas mayores.

## 2. Vehículo eléctrico urbano en tráfico denso

En tráfico de parada y arranque, un vehículo eléctrico alterna fases cortas de tracción y frenado. El conductor percibe variaciones de respuesta aunque pida aceleraciones parecidas. En este contexto, la eficiencia [[eta]] y la potencia de pérdidas [[P_loss]] cambian con temperatura de batería, estado del inversor y resistencia de rodadura.

Con batería fría, la electrónica restringe la entrega de potencia útil [[P_out]] para proteger celdas. Aunque el sistema mantenga potencia de entrada [[P_in]] en ciertos tramos, la conversión efectiva disminuye y la aceleración observada se reduce.

Variable dominante: [[eta]]
Límite de validez: la estimación de aceleración basada en eficiencia media pierde precisión cuando hay variaciones térmicas rápidas o fuertes cambios de pendiente.

La lectura física correcta conecta dinámica y energía: no basta con saber cuánta potencia entra, hay que saber cuánta se transforma realmente en movimiento útil.

## 3. Puente grúa con carga variable durante elevación y traslación

En una nave logística, un puente grúa eleva y desplaza piezas pesadas. Durante la maniobra, la masa efectiva [[m]] no siempre es constante: se añaden accesorios, cambia el balance de la eslinga y el sistema puede incorporar o soltar componentes intermedios. En fases concretas aparece una variación de masa representable por [[m_dot]].

Si el cálculo ignora esa variación y usa solo un valor fijo de masa, la predicción de [[a]] se desvía, especialmente en transiciones de carga. Además, el par de fricción en poleas y reductores [[tau_fr]] puede traducirse a pérdidas lineales mediante [[r]], lo que permite comparar sensores rotacionales y lineales en un marco común.

Variable dominante: [[m]]
Límite de validez: la versión de masa constante solo aplica cuando [[m_dot]] es despreciable frente a la masa total durante el intervalo de análisis.

Este caso muestra que la dinámica real no falla por “falta de ecuaciones”, sino por hipótesis de modelado mal elegidas para el régimen operativo.

## 4. Tren de laminación en metalurgia con desgaste progresivo

En un tren de laminación, el material sufre deformación y las superficies de contacto cambian su comportamiento con el tiempo. Aunque el control de planta mantenga consignas similares de fuerza y velocidad, la disipación interna se incrementa con desgaste de rodillos, desalineaciones y cambios de fricción en contacto.

El síntoma temprano es crecimiento de [[P_loss]] con producción nominal aparentemente estable. Si no se analiza el balance real, la planta puede reaccionar elevando [[F_ap]], lo que enmascara temporalmente el problema pero acelera la degradación térmica.

Variable dominante: [[P_loss]]
Límite de validez: el modelo agregado de pérdidas es útil para supervisión global, pero debe enriquecerse cuando aparecen vibraciones de alta frecuencia o no linealidades severas de contacto.

En operación avanzada, la mejor práctica combina indicadores de potencia, temperatura y respuesta dinámica para decidir mantenimiento antes de llegar a fallo funcional.

## 5. Banco de pruebas de actuadores para mantenimiento predictivo

En un laboratorio de fiabilidad, se ensayan actuadores lineales bajo perfiles repetitivos para estimar vida útil. El banco registra [[F]], [[v]], [[P]], [[P_in]], [[P_out]], [[P_loss]], [[F_ap]], [[F_loss]] y aceleración [[a]] en cada ciclo. El objetivo no es solo validar hoja técnica, sino detectar deriva de comportamiento a lo largo del envejecimiento.

Una métrica eficaz es comparar [[a]] real con [[a_ideal]] a carga equivalente. Si la brecha crece de forma monotónica, existe evidencia de aumento de pérdidas internas aunque el actuador todavía cumpla mínimos operativos. Esta lectura es más robusta que vigilar una sola señal aislada.

Variable dominante: [[a]]
Límite de validez: la comparación entre [[a]] y [[a_ideal]] conserva valor diagnóstico mientras la instrumentación tenga incertidumbre menor que la variación observada entre campañas.

La síntesis de esta aplicación es estratégica: modelar sistemas reales permite anticipar degradación, reducir paradas no planificadas y transformar datos dispersos en decisiones de mantenimiento con fundamento físico.

## Cierre

Estas cinco aplicaciones muestran un patrón común: en el mundo real, la frontera entre dinámica y energía es operacional, no académica. Cuando el análisis integra fuerzas, potencia y eficiencia con hipótesis explícitas de validez, el modelo deja de ser un ejercicio y se convierte en herramienta de ingeniería.