const e=`# Red eléctrica doméstica

## Contexto conceptual

La red eléctrica doméstica es el sistema que distribuye energía eléctrica desde la compañía suministradora hasta todos los receptores de una vivienda. A diferencia de una fuente de corriente constante, la red europea está diseñada para mantener una **tensión prácticamente constante** de 230 V a una frecuencia de 50 Hz, independientemente de cuántos aparatos estén conectados.

Este comportamiento de fuente de tensión constante tiene implicaciones físicas fundamentales. Cuando conectamos un receptor (una lámpara, un frigorífico, un ordenador), este extrae de la red la corriente que necesita para funcionar, proporcional a su potencia. La tensión no disminuye, pero la **corriente total** que circula por la línea aumenta. Este es el principio central que explica por qué los circuitos domésticos tienen límites de potencia y por qué existen los magnetotérmicos como protección.

Comprender este modelo es esencial para dimensionar instalaciones, evitar sobrecargas y entender las limitaciones prácticas de la electricidad en el hogar.

## 🟢 Nivel esencial

La idea física dominante es sorprendentemente sencilla: **la red eléctrica mantiene siempre 230 V**, y cada aparato que conectas "pide" la corriente que necesita. No es que la red "envíe" corriente, sino que los receptores la extraen según su potencia.

Imagina la red como un depósito de agua a presión constante (la tensión). Cuando abres un grifo, el agua sale con un caudal determinado (la corriente). Si abres más grifos, el caudal total aumenta, pero la presión permanece constante mientras el sistema pueda suministrar el agua. Solo cuando superas la capacidad de las tuberías, la presión comienza a caer o se activa una válvula de seguridad.

En electricidad ocurre lo mismo. Un horno de 2000 W extrae aproximadamente 8,7 A de la red. Si conectas además un secador de 1500 W, extrae otros 6,5 A. La **corriente total** suma ambas: 15,2 A. La tensión sigue siendo 230 V, pero el cableado y el magnetotérmico deben soportar esos 15,2 A sin sobrecalentarse.

El **magnetotérmico** es el guardián del circuito. Está calibrado para soportar una corriente máxima (típicamente 16 A, 20 A o 25 A en instalaciones domésticas). Si la corriente total supera ese límite, el dispositivo corta el suministro automáticamente para evitar incendios por sobrecalentamiento del cableado.

> [!IMPORTANT]
> La tensión de la red **no disminuye** cuando conectas más aparatos. La red está diseñada como fuente de tensión constante. Lo que aumenta es la corriente total, no la tensión.

## 🔵 Nivel formal

El modelo resistivo opera en el contexto de la red europea con sus parámetros característicos:

{{f:frecuencia_contexto}}

La relación matemática entre potencia, tensión y corriente se expresa mediante la fórmula fundamental del modelo resistivo:

{{f:corriente_total}}

Esta ecuación establece que la **corriente total** [[I_tot]] que demanda la instalación es directamente proporcional a la **potencia total conectada** [[P_tot]] e inversamente proporcional a la **tensión de red** [[V]], que permanece constante a 230 V en el estándar europeo.

La fórmula tiene un despeje natural que permite calcular la potencia si conocemos la corriente:

{{f:potencia_total}}

Este par de ecuaciones constituye el núcleo matemático del modelo. Ambas son válidas exclusivamente para **receptores resistivos** con factor de potencia unitario, donde la potencia activa coincide con la potencia aparente.

Para evaluar el riesgo de sobrecarga, introducimos una magnitud adimensional crucial: el **margen de uso** [[margen_uso]], definido como el cociente entre la corriente total demandada y la corriente máxima permitida por el magnetotérmico:

{{f:margen_capacidad}}

Donde [[I_max]] representa el **calibre nominal** del magnetotérmico (16 A, 20 A, 25 A, etc.). Cuando [[margen_uso]] alcanza o supera el valor 1, el circuito está en sobrecarga y la protección debe actuar.

> [!NOTE]
> El margen [[margen_uso]] es una fracción adimensional. Un valor de 0,8 indica que estamos usando el 80 % de la capacidad del circuito, dejando un margen de seguridad del 20 %.

## 🔴 Nivel estructural

El modelo de red eléctrica doméstica descansa sobre una **arquitectura de fuente de tensión ideal** con limitaciones prácticas que definen su dominio de validez y sus condiciones de fallo.

**Hipótesis estructurales del modelo:**

- La red se comporta como una fuente de tensión perfectamente constante (230 V ± tolerancia normativa)
- Los receptores se conectan en **paralelo**, no en serie
- La impedancia del cableado de la vivienda es despreciable frente a las resistencias de los receptores
- Los receptores son puramente resistivos (factor de potencia = 1)
- No existe desequilibrio de fases (instalación monofásica estándar)

**Condiciones de validez:**

El modelo es válido cuando:
- Receptores resistivos (calefactores, lámparas incandescentes, hornos eléctricos sin electrónica)
- Líneas cortas y sección adecuada (caída de tensión menor que 3 %)
- Tensión real en bornes permanece cercana a 230 V
- Sin armónicos significativos que distorsionen la onda sinusoidal

**Señales de fallo del modelo:**

El modelo deja de ser aplicable cuando:
- Los receptores son inductivos (motores, transformadores) o capacitivos, introduciendo desfases entre tensión y corriente
- El cableado es antiguo o de sección insuficiente, produciendo caídas de tensión apreciables
- Se producen sobretensiones o subtensiones en la red general
- La frecuencia de red varía significativamente de los 50 Hz nominales

> [!WARNING]
> El modelo **falla silenciosamente** cuando conectas muchos aparatos inductivos (motores de frigorífico, lavadora, aire acondicionado). La corriente real puede ser mayor que la calculada por el modelo resistivo debido al factor de potencia.

## Interpretación física profunda

La naturaleza de fuente de tensión de la red eléctrica doméstica tiene su origen en la **regulación de la compañía eléctrica**. Los transformadores de distribución están diseñados para mantener la tensión secundaria dentro de márgenes estrictos (±10 % típicamente), independientemente de la carga conectada. Esto contrasta con una fuente de corriente constante, donde la corriente sería fija y la tensión variaría con la carga.

La **conexión en paralelo** de los receptores es fundamental. Cuando conectas un segundo aparato, no reduces la tensión disponible para el primero (como ocurriría en una conexión en serie con resistencias), sino que ambos ven los mismos 230 V. Cada uno extrae su corriente independientemente, y el cable de alimentación debe transportar la suma de ambas.

El **magnetotérmico** actúa como un **fusible reusable sensible a la corriente**. Cuando la corriente total [[I_tot]] supera el límite [[I_max]] durante un tiempo suficiente, el calor generado por el efecto Joule en un elemento bimetálico provoca la apertura mecánica del circuito. El parámetro [[margen_uso]], obtenido al dividir [[I_tot]] entre [[I_max]], es un indicador directo del **riesgo térmico** del cableado.

## Orden de magnitud

En una instalación doméstica europea típica, los órdenes de magnitud son:

- **Tensión**: 230 V (constante normativa)
- **Potencia de un circuito básico**: hasta 3680 W
- **Potencia de un circuito potente**: hasta 4600 W o 5750 W
- **Corriente de un horno**: 8–12 A
- **Corriente de una lavadora**: 6–10 A
- **Corriente de iluminación LED**: 0,1–2 A

El margen de uso [[margen_uso]] típico varía:
- 0,0–0,3: Instalación con poca carga (segura)
- 0,3–0,7: Carga normal de una vivienda (segura con margen)
- 0,7–0,9: Carga elevada (precaución, evitar conectar más)
- 0,9–1,0: Carga crítica (riesgo de disparo inminente)
- mayor o igual que 1,0: Sobrecarga (el magnetotérmico debe disparar)

> [!TIP]
> Como regla práctica, **no superes el 80 % de la capacidad del circuito** de forma continua. Deja margen para picos de arranque de motores y expansiones futuras.

## Método de resolución personalizado

Para resolver problemas de dimensionamiento de circuitos domésticos, sigue esta secuencia:

1. **Inventario de potencias**: Suma las potencias nominales [[P_tot]] de todos los receptores que podrían funcionar simultáneamente en el circuito.

2. **Cálculo de corriente**: Aplica la fórmula de corriente usando [[V]] fija en 230 V. Obtienes la corriente máxima teórica.

3. **Aplicación de coeficiente de simultaneidad**: En la práctica, no todos los aparatos funcionan a la vez. Aplica un coeficiente de 0,7–1,0 según el uso real (1,0 para circuitos con un solo aparato fijo como un horno).

4. **Selección de calibre**: Elige un magnetotérmico con [[I_max]] superior a la corriente calculada, seleccionando el valor comercial inmediatamente superior (16, 20, 25 A).

5. **Verificación del margen**: Calcula el margen dividiendo la corriente total entre [[I_max]]. Si es mayor que 0,8, distribuye la carga o aumenta el calibre si el cableado lo permite.

6. **Verificación de la sección de cable**: Consulta la normativa eléctrica para confirmar que el cable soporta el [[I_max]] seleccionado.

## Casos especiales y ejemplo extendido

**Caso 1: Conexión de motores eléctricos**

Los motores (frigorífico, lavadora, bomba de lavavajillas) presentan un **factor de potencia** distinto de 1 y una **corriente de arranque** 5–7 veces superior a la nominal durante los primeros segundos. El modelo resistivo subestima la corriente real. En estos casos, es prudente dejar un margen de uso más conservador (valor de [[margen_uso]] menor que 0,7).

**Caso 2: Caída de tensión en líneas largas**

En viviendas grandes o locales comerciales con cableado muy extenso, la resistencia de los conductores no es despreciable. La tensión en los receptores extremos puede ser inferior a 230 V, haciendo que extraigan más corriente para compensar y mantener su potencia. El modelo falla en estas condiciones.

**Ejemplo numérico completo:**

Una cocina tiene los siguientes receptores en el mismo circuito de 16 A:
- Horno: 2400 W
- Vitrocerámica (2 fuegos): 2000 W
- Microondas: 800 W

La potencia total máxima [[P_tot]] alcanza 5200 W.

La corriente calculada dividiendo 5200 W entre 230 V da 22,6 A

El magnetotérmico de 16 A se disparará si intentas usar todo simultáneamente. La solución práctica es distribuir en dos circuitos (horno en uno, vitro y microondas en otro) o aumentar a 25 A si la instalación lo permite.

## Preguntas reales del alumno

**P: ¿Por qué no baja la tensión cuando conecto más aparatos?**
R: Porque la red está diseñada como fuente de tensión constante. Los transformadores de distribución regulan activamente la tensión. Lo que aumenta es la corriente total, no la tensión.

**P: ¿Puedo cambiar el magnetotérmico de 16 A por uno de 25 A para tener más potencia?**
R: Solo si el cableado está dimensionado para soportar 25 A sin sobrecalentarse. Un cable de 1,5 mm² no puede llevar 25 A de forma segura. Consulta un electricista antes de cambiar calibres.

**P: ¿Por qué el frigorífico hace que salte el plomo a veces cuando se pone en marcha?**
R: Los motores tienen corriente de arranque 5-7 veces superior a la nominal durante segundos. Si el circuito está cargado, ese pico supera [[I_max]] momentáneamente.

**P: ¿El modelo falla con los LED?**
R: Los LED tienen driver interno que altera su comportamiento resistivo, pero su bajo consumo hace que el error sea insignificante.

**P: ¿Cómo sé si estoy cerca del límite sin hacer cálculos?**
R: Suma mentalmente: cada 1000 W son unos 4,3 A a 230 V. Un circuito de 16 A soporta unos 3600 W. Si tienes horno (2000 W) y secador (1500 W), ya estás cerca.

## Conexiones transversales y rutas de estudio

Este leaf se conecta directamente con otros temas del bloque de electricidad doméstica, donde se analiza la maniobra de conexión de circuitos y las interfaces físicas de conexión.

Desde aquí, puedes avanzar hacia:
- **Análisis de consumo eléctrico**: Leaf sobre factura eléctrica, potencia contratada y optimización energética
- **Seguridad eléctrica doméstica**: Diferenciales, tomas de tierra, protección ante contactos indirectos
- **Electrónica de potencia**: Fuente de tensión versus fuente de corriente, regulación conmutada

En el bloque de **electromagnetismo**, este leaf es la base para comprender instalaciones reales antes de estudiar circuitos más complejos.

## Síntesis final

La red eléctrica doméstica opera como una **fuente de tensión constante de 230 V**. Cada receptor conectado en paralelo extrae la corriente que necesita según su potencia, y la **corriente total** es la suma de todas esas corrientes individuales. El **magnetotérmico** protege la instalación cortando el suministro cuando la corriente total supera el límite de seguridad del cableado.

El modelo resistivo, basado en la relación entre [[I_tot]], [[P_tot]] y [[V]], permite calcular la corriente esperada y evaluar el **margen de uso** del circuito. Sin embargo, este modelo tiene limitaciones: falla con cargas inductivas, líneas largas o cuando la impedancia del cableado no es despreciable. Comprender estas fronteras de validez es tan importante como dominar las ecuaciones del modelo básico.
`;export{e as default};
