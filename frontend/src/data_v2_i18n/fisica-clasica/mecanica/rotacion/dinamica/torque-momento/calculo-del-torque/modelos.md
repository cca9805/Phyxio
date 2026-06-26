# Modelos Fisicos para Calculo del Torque

## Modelo ideal
El modelo ideal supone cuerpo rigido, eje fijo, ausencia de perdidas disipativas y fuerza conocida con direccion exacta. Bajo estas hipotesis, el calculo del torque es directo y altamente trazable. Se usa

{{f:torque_brazo}}

 cuando el brazo perpendicular es conocido, o

{{f:torque_por_angulo}}

cuando se conoce geometria angular. Este modelo es util para aprender el mecanismo causal del giro y para analizar configuraciones de referencia donde el ruido experimental es bajo.

Su principal ventaja es la transparencia: cada termino tiene una lectura fisica inmediata. Si [[F]] se duplica con [[b]] constante, [[tau]] se duplica; si [[theta]] se acerca a cero, el torque cae hacia cero. Esta claridad hace del modelo ideal una herramienta pedagogica y de pre-diseno.

## Hipótesis
Las hipotesis que sostienen el modelo ideal del calculo de torque son cinco:

1. **Cuerpo rigido**: el solido no se deforma durante la aplicacion de la fuerza, por lo que las distancias [[r]] y [[b]] no cambian con el tiempo.
2. **Eje fijo**: el eje de giro no traslada ni rota durante el intervalo de analisis, lo que permite fijar un origen unico para medir [[r]] y declarar [[tau_z]].
3. **Fuerza puntual conocida**: la fuerza [[F]] actua en un punto definido con direccion y modulo bien determinados; las componentes [[F_x]] y [[F_y]] son estables durante el calculo.
4. **Geometria plana o reducible a plana**: el problema se puede representar en un plano con eje z normal, lo que hace que la formula de componentes plana sea suficiente.
5. **Sin perdidas disipativas en primera aproximacion**: rozamiento en apoyos, histeresis y flexibilidad se desprecian en el modelo base; se incorporan solo si la discrepancia con datos es relevante.

## Dominio de validez cuantitativo
Como criterio cuantitativo practico para este leaf, se propone usar el modelo ideal cuando el error relativo estimado por disipacion y holguras cumpla epsilon_rel < 0.10. Si el error se ubica entre 0.10 y 0.25, el modelo ideal puede servir para primera aproximacion, pero la toma de decisiones debe apoyarse en modelo extendido. Para errores superiores a 0.25, usar solo el modelo ideal deja de ser aceptable para diseno o seguridad.

Otro umbral util es la razon entre torque aplicado y torque resistente. Si |tau_aplicado|/|tau_resistente| esta cerca de 1, pequenas variaciones de datos cambian el diagnostico de equilibrio o arranque. En ese rango conviene medir de forma redundante y reportar incertidumbre. En cambio, cuando la razon supera 2, la conclusion suele ser robusta frente a ruido moderado.

## Señales de fallo del modelo
Hay senales concretas de que el modelo elegido falla. Primera senal: resultados incompatibles con unidades o con orden de magnitud de la aplicacion. Segunda: cambios minimos en [[theta]] o [[b]] generan saltos desproporcionados en torque, indicando que la geometria declarada no coincide con la real. Tercera: discrepancia sistematica entre prediccion y medicion en varios ensayos.

Cuarta senal: el signo calculado de torque contradice de forma recurrente el sentido de giro observado. Esto suele apuntar a un convenio de ejes inconsistente entre etapas del calculo. Quinta senal: el modelo necesita correcciones ad hoc en cada caso para aproximar datos reales; cuando ocurre, no hay modelo estable, solo ajuste manual. Ante estas senales se debe escalar al modelo extendido y documentar hipotesis.

## Modelo extendido o alternativo

**Cuándo conviene pasar al modelo extendido o alternativo:** cuando el error relativo supera el 10 por ciento, cuando aparecen senales de fallo del modelo ideal, o cuando el sistema opera cerca del limite de material o de saturacion de control.

El modelo extendido incorpora efectos que en la practica no pueden ignorarse: friccion en apoyos, flexibilidad estructural, tolerancias geometricas, error de montaje y variaciones temporales de fuerza. En este marco, el torque util sobre el eje puede diferir del torque aplicado en la entrada. Por ejemplo, un actuador puede entregar un par nominal alto, pero una parte se disipa en acoplamientos o rodamientos.

Tambien se incluyen restricciones de operacion: limites de material, saturacion de control y fenomenos vibratorios. En sistemas reales conviene representar torque como banda de valores en lugar de numero unico. El resultado se expresa con incertidumbre y con condicion de validez. Este enfoque no contradice el modelo ideal, lo envuelve con informacion de realidad para evitar conclusiones optimistas.

## Comparación operativa
Frente al modelo por torque puro, existen enfoques alternativos. En simulacion multicuerpo se modelan fuerzas y contactos de forma distribuida, obteniendo torque como resultado emergente. En metodos energeticos se analiza trabajo y potencia angular para inferir par equivalente. En control, se usan modelos en espacio de estados donde el torque es entrada o perturbacion segun arquitectura.

Ningun enfoque reemplaza por completo al calculo directo de torque. El modelo ideal y el extendido son la base conceptual comun que permite interpretar resultados de herramientas mas complejas. Para aprendizaje y diagnostico rapido, el modelo directo es superior por trazabilidad. Para certificacion, fatiga o comportamiento transitorio fino, los modelos alternativos aportan precision adicional, siempre que se mantenga consistencia con la fisica fundamental del torque.