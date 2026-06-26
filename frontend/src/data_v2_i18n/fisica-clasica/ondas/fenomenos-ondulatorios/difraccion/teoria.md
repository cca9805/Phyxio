# Difraccion

## Contexto conceptual

Cuando una onda encuentra un obstaculo o atraviesa una abertura, su frente de onda se deforma y la onda se propaga en direcciones que no serian posibles segun la optica geometrica. Este fenomeno de desviacion y curvatura de las ondas se denomina difraccion.

La difraccion es caracteristica de toda onda: ondas electromagneticas (luz visible, radio, rayos X), ondas mecanicas (sonido, ondas en el agua) y ondas de materia (electrones, neutrones). La escala del fenomeno depende de la relacion entre la longitud de onda [[lambda]] y el tamano de la abertura [[a_abertura]].

El principio de Huygens-Fresnel interpreta este fenomeno considerando que cada punto del frente de onda que pasa por la abertura se convierte en una fuente secundaria de ondas esfericas. La superposicion de estas onditas produce el patron de intensidad caracteristico con maximos y minimos.

## 🟢 Nivel esencial

Imagina agua en una banera con una barrera que tiene una pequena abertura. Al pasar por el hueco, la onda se curva y se abre. Eso es difraccion: la onda deja de avanzar solo en linea recta.

La difraccion aumenta cuando la abertura es comparable a la longitud de onda. Aberturas grandes producen sombras definidas; aberturas pequenas dispersan la onda.

El patron tipico muestra un maximo central brillante y bandas laterales cada vez mas debiles.

La clave conceptual es comparar dos escalas: la escala de la onda y la escala del hueco. Si el hueco es enorme para la onda, casi no se nota la curvatura. Si el hueco es estrecho, la onda se reorganiza al salir y el patron se abre.

> [!TIP]
> Piensa en la difraccion como la tendencia de las ondas a abrirse despues de pasar por un hueco estrecho.

## 🔵 Nivel formal

Para una abertura rectangular de ancho [[a_abertura]], los angulos [[theta_dif]] donde aparecen los minimos de intensidad satisfacen:

{{f:condicion_minimos}}

Esta ecuacion expresa que los minimos ocurren cuando la diferencia de camino entre los bordes de la abertura equivale a un numero entero [[m_orden]] de longitudes de onda. El orden cero corresponde a la direccion de incidencia sin desviacion y no es un minimo oscuro.

La condicion formal contiene una lectura fisica directa: si aumenta [[lambda]], el mismo orden aparece a un angulo mayor; si aumenta [[a_abertura]], el patron se estrecha. Por eso una abertura grande se aproxima a la optica geometrica, mientras que una abertura estrecha produce una distribucion angular ancha.

Para angulos pequenos (menores que unos 10 grados), el seno del angulo es aproximadamente igual al angulo medido en radianes:

{{f:aproximacion_angulo_pequeno}}

Esta aproximacion no es una regla universal, sino una decision de modelo. Debe comprobarse con el valor angular estimado: en los primeros minimos de montajes de laboratorio suele funcionar bien; en ordenes altos o rendijas muy estrechas puede fallar.

Usando esta aproximacion, la posicion lineal [[y_posicion]] del minimo en una pantalla a distancia [[L_distancia]] resulta:

{{f:posicion_lineal_minimos}}

La posicion lineal permite conectar el calculo angular con la medicion experimental sobre una pantalla. La intensidad en la direccion del angulo varia segun el patron caracteristico de una rendija, con maximos secundarios de intensidad decreciente entre los minimos definidos por la condicion anterior.

## 🔴 Nivel estructural

La difraccion de Fraunhofer describe el patron observado en el campo lejano, cuando la pantalla esta a distancia mucho mayor que el ancho de la abertura. En este regimen, las ondas secundarias llegan a la pantalla aproximadamente planas y paralelas, de modo que el patron depende sobre todo del angulo de observacion.

En el campo cercano (regimen de Fresnel), la curvatura de los frentes de onda es significativa y el patron difiere del de Fraunhofer. Los maximos y minimos pueden desplazarse, ensancharse o cambiar de contraste. Los calculos requieren integrales que consideran la variacion de fase a lo largo de la abertura y la distancia finita a la pantalla.

La difraccion por redes periodicas (conjuntos de rendijas equiespaciadas) produce maximos muy agudos en direcciones especificas. Cuantas mas rendijas iluminadas participan, mas estrechos son esos maximos y mayor es la capacidad de separar longitudes de onda cercanas. Esta es la base de la espectroscopia de red.

Para aberturas circulares, el patron no es una serie de franjas rectas, sino una mancha de Airy con anillos concentricos. El limite de resolucion de telescopios, microscopios y camaras esta determinado por esta estructura: dos puntos cercanos solo se distinguen si sus maximos centrales no se superponen excesivamente.

La estructura del patron tambien depende de la coherencia y de la forma real de la abertura. Bordes rugosos, iluminacion no uniforme o fuentes extensas suavizan los minimos y reducen el contraste. Por eso los montajes reales requieren controlar geometria, alineacion, longitud de onda y calidad de la fuente.

## Interpretación física profunda

La difraccion revela la naturaleza ondulatoria del fenomeno fisico. Las ondas no siguen trayectorias definidas como particulas clasicas; se extienden y superponen segun el principio de Huygens-Fresnel. Cada elemento del frente de onda contribuye a la amplitud resultante en cada punto del espacio.

El patron de intensidad es el resultado de la interferencia de las onditas secundarias. Los minimos aparecen donde las contribuciones se cancelan por interferencia destructiva. La condicion de minimo expresa que la mitad superior y la mitad inferior de la abertura contribuyen con desfase de media longitud de onda.

El principio de incertidumbre de Heisenberg tiene una analogia optica: una abertura estrecha (localizacion precisa de la posicion transversal) fuerza una gran dispersion angular del momento (direccion del momentum). Cuanto mas se restringe la coordenada espacial, mayor es la incertidumbre angular.

## Orden de magnitud

Para luz visible (longitud de onda aproximadamente 500 nm) y aberturas milimetricas, los angulos de difraccion son de miliradianes (fracciones de grado). El maximo central tiene ancho angular aproximadamente proporcional al cociente entre longitud de onda y ancho de abertura.

Para ondas de radio ([[lambda]] de metros) por aberturas de edificios, la difraccion puede llenar zonas de sombra. Para rayos X ([[lambda]] de angstroms) por cristales (espaciados atomicos), la difraccion permite determinar estructuras cristalinas.

El limite de resolucion de un telescopio de diametro D para luz de longitud de onda [[lambda]] viene dado por el criterio de Rayleigh, proporcional al cociente entre longitud de onda y diametro. Un telescopio de 10 cm de apertura tiene limite de resolucion de aproximadamente un arco segundo para luz verde.

## Método de resolución personalizado

Para analizar problemas de difraccion:

1. **Identificar el regimen**: campo lejano (Fraunhofer) para distancias grandes, campo cercano (Fresnel) para distancias comparables al tamano de abertura.

2. **Aplicar la condicion de minimos**: usar la relacion formal del nivel anterior para encontrar angulos donde la intensidad se anula.

3. **Verificar la aproximacion de angulo pequeno**: si los angulos son menores que 0.14 rad (8 grados), puede usarse la simplificacion angular en radianes.

4. **Calcular posiciones lineales**: convertir angulos a posiciones en la pantalla solo cuando la geometria sea de angulo pequeno.

5. **Interpretar el patron**: contar ordenes desde el centro, notar la simetria bilateral y la disminucion de intensidad de maximos secundarios.

> [!WARNING]
> No apliques la aproximacion de angulo pequeno indiscriminadamente. Para ordenes altos o aberturas muy estrechas, los angulos pueden ser grandes y la aproximacion introduce errores significativos.

## Casos especiales y ejemplo extendido

**Difraccion por una rendija estrecha**: el patron caracteristico tiene un maximo central brillante con anchura angular inversamente proporcional al ancho de la rendija. Rendijas mas estrechas producen patrones mas anchos.

**Difraccion por una red de rendijas**: la interferencia constructiva de multiples rendijas produce maximos muy agudos en direcciones especificas, permitiendo alta resolucion espectral.

**Difraccion por un obstaculo circular**: en lugar de un punto focal perfecto, aparece la mancha de Airy con un disco central rodeado de anillos. Este limite de difraccion determina la resolucion de microscopios y telescopios.

**Ejemplo extendido - Espectrometro de red**: una red de difraccion con 500 lineas por milimetro separa la luz de una lampara de sodio, cuya [[lambda]] esta cerca de 589 nm. El primer orden aparece a un angulo donde el seno es proporcional al cociente entre longitud de onda y espaciado de la red, resultando aproximadamente 17 grados. Segundos y terceros ordenes aparecen a angulos mayores, permitiendo separar la doble linea del sodio con resolucion suficiente para identificar el elemento.

## Preguntas reales del alumno

**¿Por que se produce difraccion? ¿La onda "sabe" que hay un obstaculo?**

La difraccion no requiere que la onda "sepa" nada. Cada punto del frente de onda avanza segun las leyes de propagacion. Cuando parte del frente se bloquea, el resto continua y se curva para llenar la region de sombra. Es geometria de propagacion, no percepcion.

**¿Por que la difraccion es mas fuerte con aberturas pequenas?**

Con aberturas grandes, las partes del frente de onda que se bloquean son proporcionalmente pequenas, asi que la onda emergente es similar a la incidente. Con aberturas pequenas, el bloqueo afecta la mayoria del frente, forzando una reconstruccion completa del frente a partir de pocos puntos fuente.

**¿Como se relaciona difraccion con interferencia?**

La difraccion es interferencia. El patron de difraccion resulta de la superposicion de onditas secundarias provenientes de todos los puntos de la abertura. Los minimos son interferencia destructiva; los maximos son interferencia constructiva.

**¿Puede haber difraccion sin ondas?**

No. La difraccion es un fenomeno exclusivamente ondulatorio. Particulas clasicas siguen trayectorias definidas sin difraccion. Las particulas cuanticas si muestran difraccion porque tienen naturaleza ondulatoria asociada (longitud de onda de de Broglie).

## Conexiones transversales y rutas de estudio

La difraccion se conecta directamente con [interferencia](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva): ambos fenomenos resultan de la superposicion de ondas. La diferencia es que la interferencia tipicamente involucra ondas de pocas fuentes (dos o varias), mientras que la difraccion considera contribuciones continuas de infinitas fuentes secundarias.

En optica, la difraccion limita la resolucion de [instrumentos opticos](leaf:fisica-clasica/ondas/optica/limites-de-resolucion) y se aplica en [espectroscopia](leaf:fisica-clasica/ondas/optica/difraccion-redes) para analisis de materiales.

La difraccion de rayos X por cristales (descubierta por los Bragg) es herramienta fundamental para determinar estructuras atomicas, desde proteinas hasta nanomateriales.

Para profundizar, estudiar optica de Fourier donde la difraccion se interpreta como transformacion entre espacio real y espacio de frecuencias.

## Síntesis final

La difraccion describe la capacidad de las ondas para desviarse al encontrar obstaculos o atravesar aberturas. El patron resultante depende de la relacion entre longitud de onda y tamano de la abertura.

La condicion de minimos encapsula la fisica del fenomeno: los angulos de difraccion estan determinados por el cociente entre longitud de onda y tamano de abertura. Aberturas pequenas producen difraccion amplia; aberturas grandes producen sombras definidas.

La difraccion no es anomalia: es comportamiento ondulatorio natural. Limita la resolucion de instrumentos opticos, permite analisis espectral preciso y es manifestacion observable de la naturaleza ondulatoria de la luz y otras radiaciones.
