# Aplicaciones

## 1. Dimensionado del circuito de cocina en una reforma integral

El proyecto de reforma de una cocina requiere decidir cuántos circuitos independientes instalar. La normativa permite distintas configuraciones, pero la física del leaf impone una condición de diseño: la suma de potencias no debe traducirse en una [[corriente_total_de_linea]] que sature el [[corriente_maxima_del_circuito]] del magnetotérmico durante el uso simultáneo real.

El instalador debe estimar no la potencia nominal de cada electrodoméstico, sino la corriente que efectivamente circulará. Un horno de [[potencia_total_conectada]] elevada exige un calibre diferente al de una vitrocerámica de igual potencia nominal si sus perfiles de uso difieren. La decisión técnica consiste en predecir [[margen_uso]] ante escenarios de simultaneidad variable.

La experiencia del instalador cuenta con que no todos los receptores funcionan a la vez. El horno puede estar en funcionamiento mientras la vitrocerámica está apagada. Sin embargo, en momentos de preparación intensiva de comidas, la probabilidad de coincidencia aumenta. El cálculo debe considerar ese peor escenario para garantizar que la protección no dispare injustificadamente.

La corriente total [[corriente_total_de_linea]] se obtiene sumando las corrientes individuales que cada receptor demanda de la red. Como todos comparten la misma tensión [[tension_de_red]], la potencia de cada uno determina su aporte a la corriente agregada. Un error común consiste en sumar potencias sin convertirlas a corriente, olvidando que la decisión técnica se toma en el dominio de la corriente que el cable debe transportar.

Variable dominante: [[corriente_total_de_linea]] en régimen de máxima demanda simultánea.

Límite de validez: Receptores resistivos con factor de potencia próximo a la unidad; líneas con impedancia despreciable respecto a la protección.

## 2. Integración de aire acondicionado en vivienda antigua

Una vivienda de más de treinta años dispone de circuitos protegidos a 10 A y 16 A. El propietario desea instalar un aire acondicionado de 2500 W. La cuestión no es si el aparato funciona, sino si el circuito elegido puede transportar la [[corriente_total_de_linea]] resultante sin que [[margen_uso]] se aproxime peligrosamente al límite.

El análisis comparativo entre circuitos existentes revela que uno de ellos alimenta iluminación LED de bajo consumo, mientras que otro comparte tomas con televisión y cargadores. La decisión de derivación no puede basarse solo en la potencia del aparato, sino en la corriente residual disponible en cada circuito. Un error de asignación transforma el arranque del compresor en un disparo repetido del magnetotérmico.

Las viviendas antiguas fueron diseñadas para cargas mucho menores que las actuales. Un refrigerador de décadas pasadas consumía fracciones de potencia comparado con los equipos modernos. Los cables, si están en buen estado, pueden soportar más carga que la prevista originalmente, pero la protección no debe superarse.

El margen de uso [[margen_uso]] indica qué fracción de la capacidad del circuito está comprometida. Un valor cercano a la unidad significa que el circuito opera al límite, sin reserva para imprevistos. La buena práctica exige mantener este margen suficientemente alejado del cien por cien para absorber picos de arranque y variaciones de tensión.

Variable dominante: [[margen_uso]] disponible en cada circuito candidato.

Límite de validez: Condiciones estacionarias de temperatura; no se consideran picos de arranque inductivo prolongados.

## 3. Taller doméstico con herramientas eléctricas

Un aficionado al bricolaje instala en un cuarto de servicio una mesa de trabajo con taladro, lijadora y aspirador de virutas. Cada herramienta tiene potencia nominal distinta, pero todas comparten la característica de motores universales con comportamiento próximo al resistivo en régimen establecido. El riesgo emerge cuando varias herramientas operan simultáneamente.

El cálculo de diseño debe considerar no solo la suma aritmética de potencias, sino la distribución temporal del uso. La aspiradora puede funcionar de forma continua mientras el taladro opera en ciclos breves. La corriente máxima instantánea determina el calibre de protección, pero la corriente media influye en el calentamiento acumulado del cableado.

Las herramientas de bricolaje operan en ráfagas cortas con pausas entre operaciones. Pero no elimina la necesidad de verificar el peor caso de simultaneidad.

El potencia total [[potencia_total_conectada]] en el instante de máxima demanda determina si la instalación puede soportar el uso intensivo del taller. Un taller bien diseñado permite trabajar sin preocupación por los disparos de la protección, mientras que uno mal calculado transforma cada proyecto de bricolaje en una lucha contra el magnetotérmico.

Variable dominante: [[potencia_total_conectada]] pico en escenarios de uso simultáneo parcial.

Límite de validez: Ciclos de trabajo intermitentes con tiempo de reposo entre activaciones; no se aplica a máquinas de arranque directo prolongado.

## 4. Oficina en casa con múltiples cargadores

El teletrabajo ha convertido un dormitorio secundario en espacio de oficina con ordenador portátil, monitor externo, impresora láser, router dedicado y lámpara de escritorio. Todas estas cargas son pequeñas individualmente, pero su acumulación en una única regleta conectada a una toma de 16 A requiere valoración física.

La tentación de añadir una regleta adicional en cascada multiplica los puntos de fallo y oculta la suma real de corrientes. La regleta no es un circuito nuevo, sino una extensión del existente. La protección del circuito original sigue siendo la única barrera contra la sobrecarga. El cálculo de [[corriente_total_de_linea]] debe incluir todas las cargas conectadas a través de cualquier nivel de regletas.

Los equipos informáticos modernos consumen menos que sus predecesores, pero la proliferación de dispositivos compensa la eficiencia individual. Un portátil, un monitor, un router y una impresora suman una corriente apreciable cuando comparten la misma regleta. La corriente agregada [[corriente_total_de_linea]] puede acercarse al límite sin que ningún dispositivo individual parezca excesivo.

El riesgo aumenta cuando se añaden cargadores de dispositivos móviles, lámparas adicionales o incluso una cafetera de sobremesa. Cada elemento aporta su corriente a la suma total. La regleta muestra luces indicadoras, pero no protege contra la sobrecarga del circuito aguas arriba.

Variable dominante: [[corriente_total_de_linea]] agregada en configuración de extensión múltiple.

Límite de validez: Cargas electrónicas con fuentes conmutadas de alta eficiencia; no se incluyen transformadores lineales antiguos de bajo factor de potencia.

## 5. Análisis de consumo para optimización de tarifa eléctrica

Un hogar pretende migrar a una tarifa con discriminación horaria. El ahorro depende de trasladar consumos a periodos valle, pero la viabilidad física exige que el circuito que alimenta esos receptores pueda soportar la nueva distribución temporal sin sobrecargas concentradas. Un electrodoméstico que antes funcionaba dispersado ahora opera en franja nocturna junto a otros.

El estudio de viabilidad debe verificar que la corriente de diseño no supere el calibre en ningún escenario horario. La optimización económica no puede violar la condición física de seguridad. El análisis requiere conocer [[corriente_maxima_del_circuito]] de cada circuito afectado y compararlo con la [[corriente_total_de_linea]] proyectada en la nueva franja de uso.

Las tarifas horarias incentivan concentrar el consumo cuando el precio es menor. Sin embargo, concentrar significa sumar potencias que antes estaban separadas en el tiempo. El lavavajillas que funcionaba a mediodía y el termo eléctrico que calentaba por la mañana pueden terminar coincidiendo en la madrugada valle.

El calibre del circuito [[corriente_maxima_del_circuito]] representa el límite absoluto que no debe superarse. Si la redistribución de cargas concentra demasiada potencia en una misma franja horaria, el ahorro económico se verá anulado por los disparos frecuentes del magnetotérmico. El análisis debe anticipar estos escenarios antes de comprometerse con la nueva tarifa.

Variable dominante: [[corriente_maxima_del_circuito]] del circuito en relación con la redistribución de cargas.

Límite de validez: Reprogramación de usos sin cambio de potencia instalada; no se contemplan ampliaciones de potencia en la migración de tarifa.