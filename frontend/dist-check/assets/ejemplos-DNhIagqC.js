const e=`# Ejemplo tipo examen
## Enunciado
Un modulo resistivo de laboratorio se conecta a una fuente de corriente continua. Durante una prueba estable se registran [[V]] de 12 voltios y [[I]] de 1.8 amperios en el mismo elemento. El docente pide tres tareas: estimar [[P]] en el punto de operacion, calcular [[E]] disipada en un intervalo de quince minutos y decidir si la operacion es segura cuando la potencia nominal continua del componente es 20 vatios. La meta no es solo obtener numeros, sino justificar la conclusion con lectura fisica y limite de validez.

## Datos
1. [[V]] medida en bornes del elemento: 12 voltios.
2. [[I]] medida en serie con el elemento: 1.8 amperios.
3. [[t]] de operacion: quince minutos.
4. Potencia nominal continua declarada por fabricante: 20 vatios.
5. Entorno de laboratorio con ventilacion natural y sin disipador adicional.
6. Hipotesis inicial: comportamiento resistivo dominante en el intervalo observado.

## Definición del sistema
El sistema analizado es un unico componente resistivo. La frontera del sistema coincide con sus terminales electricos. Se consideran como entradas las magnitudes [[V]] e [[I]] medidas de forma coherente en el mismo instante representativo. Como salida principal se interpreta [[P]] y como acumulacion temporal se interpreta [[E]]. Esta definicion evita mezclar datos de nodos distintos y permite una lectura causal clara entre excitacion electrica y efecto termico.

## Modelo físico
Se adopta un modelo resistivo ideal para primera estimacion. La potencia se obtiene desde medicion directa de tension y corriente, y la energia acumulada se obtiene a partir de potencia y tiempo.

{{f:potencia_base}}

{{f:energia_desde_potencia}}

## Justificación del modelo
El modelo elegido es apropiado porque las mediciones de [[V]] e [[I]] corresponden al mismo elemento y no hay evidencia de comportamiento fuertemente reactivo en la ventana temporal de prueba. Ademas, el objetivo didactico es verificar margen nominal bajo condiciones controladas, por lo que una primera aproximacion de potencia instantanea y acumulacion energetica resulta suficiente. Tambien se asume que la [[R]] termica del sistema se mantiene constante en este breve ensayo.

Tambien se explicita un criterio de salida del modelo: si en una repeticion de ensayo la resistencia efectiva deriva de forma apreciable por calentamiento o si aparecen discrepancias sistematicas entre metodos de estimacion, se debe migrar a modelo extendido electrotermico.

## Resolución simbólica
La resolucion simbolica se organiza en dos pasos para mantener coherencia fisica.

Paso A. Obtener la potencia de operacion usando la relacion entre tension y corriente medidas.

{{f:potencia_base}}

Paso B. Obtener energia acumulada en el intervalo usando potencia y tiempo de exposicion.

{{f:energia_desde_potencia}}

Paso C. Alternativamente, si se comprobara el valor de resistencia equivalente del componente, la potencia disipada tambien se podria haber estimado con la forma dependiente de la corriente.

{{f:potencia_resistiva_corriente}}

Paso D. De igual forma, si se conociera la resistencia y se prefiriera usar el dato de tension directamente:

{{f:potencia_resistiva_tension}}


Esta secuencia conserva la logica de tasa primero y acumulacion despues. Tambien facilita detectar en que etapa aparece un posible error de unidades.

## Sustitución numérica
Se realiza conversion temporal a unidades del sistema internacional antes de calcular energia. Quince minutos corresponden a novecientos segundos.

Con los valores medidos, la potencia de operacion obtenida es 21.6 vatios.

Con esa potencia y el intervalo convertido, la energia acumulada en la prueba es 19440 joules.

Como referencia de consumo practico, el mismo resultado puede expresarse como 5.4 watt hora, lo cual ayuda a comparar con medidores domesticos.

## Validación dimensional
La coherencia dimensional del primer paso confirma que el producto de unidad de tension por unidad de corriente conduce a unidad de potencia.

La coherencia dimensional del segundo paso confirma que unidad de potencia multiplicada por unidad temporal conduce a unidad de energia.

El control de dimensiones coincide con el orden de magnitud esperado para un componente pequeno en laboratorio. Esta validacion reduce el riesgo de errores silenciosos por conversion incompleta de tiempo.

## Interpretación física
La lectura fisica central es que el componente opera por encima de su potencia nominal continua. Aunque el exceso porcentual no parece extremo, la tendencia termica puede ser acumulativa y reducir vida util en ensayos repetidos. El hecho relevante no es solo la energia total del intervalo, sino la tasa de disipacion sostenida en relacion con capacidad de enfriamiento.

Una conclusion tecnica prudente es reducir la exigencia electrica o aumentar margen de diseno del componente. Tambien conviene monitorear temperatura de superficie para confirmar que el modelo ideal no este ocultando deriva de resistencia.

# Ejemplo de aplicación real
## Contexto
Una estacion de carga para aula tecnica alimenta simultaneamente varios dispositivos portatiles. El gestor del laboratorio quiere decidir si la fuente actual es suficiente o si debe reemplazarse por una de mayor capacidad. Se dispone de mediciones promedio por puerto y de tiempo de uso de una sesion tipica. El objetivo es integrar calculo de potencia con criterio de seguridad y continuidad del servicio.

Datos de operacion representativos:
1. Ocho dispositivos conectados en promedio.
2. Tension de salida por puerto de cinco voltios.
3. Corriente media por puerto de 1.2 amperios.
4. Duracion de sesion de dos horas.
5. Ventilacion limitada por gabinete compacto.

## Estimación física
Primero se estima potencia por puerto mediante relacion directa entre tension y corriente.

{{f:potencia_base}}

La potencia media por puerto resulta de seis vatios. Para ocho puertos, la potencia media agregada llega a cuarenta y ocho vatios.

Luego se estima energia acumulada de sesion usando potencia total media y tiempo.

{{f:energia_desde_potencia}}

La energia total de sesion alcanza 345600 joules, equivalente a 96 watt hora. Este valor describe consumo acumulado, mientras la potencia media describe exigencia instantanea del sistema de alimentacion.

Para lectura de riesgo, se compara potencia media con posibles picos por conexion simultanea y arranque de baterias descargadas. Si en ciertos intervalos la corriente agregada sube por encima de la media, la fuente puede entrar en saturacion termica aun cuando el consumo total del dia parezca aceptable.

## Interpretación
La variable dominante del escenario es la corriente agregada, no la energia total diaria. Una fuente ajustada al promedio sin margen puede operar al limite, elevar temperatura interna y reducir confiabilidad. En servicio educativo esto se traduce en reinicios, caidas de tension y desgaste prematuro.

La decision recomendada es usar una fuente con margen operativo superior al promedio esperado, acompanar con control basico de temperatura interna y definir politica de conexion escalonada cuando el aula alcance maxima ocupacion. Con esta medida se mejora seguridad electrica, estabilidad de carga y vida util del equipamiento.

Como aprendizaje transversal, el caso muestra que interpretar [[P]] y [[E]] de forma separada pero coordinada permite decidir mejor que mirar una sola cifra de consumo. Ese enfoque es transferible a diseno de laboratorios, mantenimiento preventivo y auditoria energetica de pequena escala.
`;export{e as default};
