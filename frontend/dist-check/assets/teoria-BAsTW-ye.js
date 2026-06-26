const e=`# Reflexion

## Contexto conceptual

La reflexion de la luz es el fenomeno por el cual un rayo luminoso cambia de direccion al encontrar una superficie sin atravesarla. Es la base de toda la optica de espejos y de numerosos dispositivos cotidianos, desde retrovisores hasta telescopios reflectores. Comprender la reflexion permite predecir hacia donde viaja la luz despues de impactar una superficie y explica fenomenos tan diversos como la formacion de imagenes en un espejo o la transmision de senales en fibra optica.

Dentro de la optica geometrica, la reflexion se trata como un cambio instantaneo de direccion del rayo en el punto de contacto con la superficie, sin considerar efectos ondulatorios. Esta idealizacion es valida siempre que la superficie sea lisa a la escala de la longitud de onda.

## 🟢 Nivel esencial

Cuando un rayo de luz llega a una superficie pulida, **rebota**. La direccion del rebote no es arbitraria: el rayo reflejado sale con el mismo angulo respecto a la perpendicular a la superficie con el que llego. Esa perpendicular se denomina **normal** y los angulos se miden siempre desde ella, no desde la superficie.

Esta regla es universal: funciona igual para un espejo de bano, la superficie de un lago en calma o una lamina metalica. El rayo incidente, la normal y el rayo reflejado comparten el mismo plano, y los angulos [[theta_i]] y [[theta_r]] resultan identicos. Si la luz llega perpendicular, vuelve por donde vino; si llega inclinada, se refleja con la misma inclinacion al otro lado de la normal.

## 🔵 Nivel formal

La ley de la reflexion se enuncia mediante una igualdad exacta entre angulos:

{{f:ley_reflexion}}

Esta relacion establece que [[theta_r]] replica siempre a [[theta_i]], independientemente de la naturaleza del material reflectante o de la longitud de onda de la luz. Los angulos se miden en el plano de incidencia, definido por el rayo entrante y la normal a la superficie en el punto de contacto. La ley se complementa con la condicion de coplanaridad: rayo incidente, normal y rayo reflejado pertenecen al mismo plano.

Cuando la luz viaja dentro de un medio opticamente denso y llega a una interfaz con un medio menos denso, existe un angulo limite por encima del cual no se transmite luz:

{{f:angulo_critico}}

El angulo critico [[theta_c]] depende exclusivamente del cociente entre los indices [[n2]] y [[n1]]. Si [[theta_i]] supera [[theta_c]], la reflexion es total: toda la energia luminosa se refleja sin perdida. Este fenomeno constituye la base del funcionamiento de la fibra optica y de los prismas de reflexion total.

La ley de reflexion es un caso particular del principio de Fermat (la luz sigue el camino de tiempo minimo) y tambien se deriva de las condiciones de contorno de las ecuaciones de Maxwell en la interfaz entre dos medios.

## 🔴 Nivel estructural

La estructura profunda de la reflexion revela que este fenomeno es consecuencia directa de la **continuidad de los campos electromagneticos** en la frontera entre dos medios. Las condiciones de contorno de Maxwell exigen que las componentes tangenciales del campo electrico y del campo magnetico sean continuas en la interfaz, lo que impone geometricamente la igualdad de angulos.

Desde la perspectiva del principio de Fermat, la reflexion minimiza el tiempo de propagacion entre dos puntos con la restriccion de tocar la superficie. Esta condicion variacional produce la igualdad entre [[theta_i]] y [[theta_r]] sin postularla como axioma independiente.

La reflexion presenta diferentes regimenes segun la calidad de la superficie:

- **Reflexion especular**: la superficie es lisa a la escala de la longitud de onda. La ley se cumple exactamente para cada rayo individual.
- **Reflexion difusa**: la superficie tiene rugosidades comparables a la longitud de onda. Cada punto tiene una normal local distinta y los rayos se dispersan en multiples direcciones.
- **Reflexion mixta**: superficies con componente especular dominante pero con dispersion residual por imperfecciones.

> [!WARNING]
> La ley de reflexion predice un rayo reflejado unico solo cuando la superficie es especular. Para superficies reales con rugosidad, se requiere un modelo estadistico de la distribucion de normales locales.

El angulo critico marca una **transicion abrupta** entre dos regimenes: por debajo de [[theta_c]], la interfaz transmite parcialmente; por encima, la reflexion es total. Esta transicion tiene implicaciones tecnologicas enormes, pues permite confinar la luz dentro de guias de onda sin perdidas por absorcion.

La relacion entre reflexion y refraccion no es independiente: ambas son manifestaciones complementarias de las condiciones de contorno electromagneticas. La ley de Snell y la ley de reflexion emergen simultaneamente del mismo analisis de frontera. Los coeficientes de Fresnel cuantifican que fraccion de la energia se refleja y que fraccion se transmite en funcion de [[theta_i]], la polarizacion y los indices de los medios.

## Interpretacion fisica profunda

El significado fisico de la ley de reflexion expresa una **simetria fundamental**: la interfaz no introduce asimetria entre el semiplano de entrada y el de salida del rayo. El rayo reflejado es la imagen especular del incidente respecto a la normal.

Esta simetria tiene consecuencias medibles. En un espejo plano, la imagen de un objeto se forma a la misma distancia detras del espejo que la distancia del objeto al espejo, conservando tamano y forma pero invirtiendo la quiralidad (reflexion lateral). La ley opera de forma local: en un espejo curvo, cada punto de la superficie refleja segun su propia normal local, y la imagen global resulta de la convergencia o divergencia colectiva de todos esos rayos individuales.

## Orden de magnitud

La ley de reflexion no tiene parametros dimensionales propios (opera con angulos puros), pero la escala relevante es la **rugosidad superficial comparada con la longitud de onda**. Para luz visible (longitud de onda de 400 a 700 nanometros), una superficie con rugosidad inferior a 50 nanometros produce reflexion especular. Un espejo de telescopio tiene rugosidad inferior a 20 nanometros. Una hoja de papel tiene rugosidad del orden de micrometros, mil veces mayor que la longitud de onda, y por eso refleja difusamente.

Si un alumno obtiene un angulo de reflexion diferente del de incidencia en una superficie especular, el resultado es fisicamente absurdo e indica error de medicion o de calculo.

## Metodo de resolucion personalizado

Para resolver problemas de reflexion, seguir esta secuencia:

1. Identificar la **superficie reflectante** y trazar la **normal** en el punto de incidencia.
2. Medir [[theta_i]] desde la normal, no desde la superficie.
3. Aplicar la ley de reflexion: [[theta_r]] es igual a [[theta_i]].
4. Si se pide angulo critico, verificar que [[n1]] sea mayor que [[n2]] y calcular [[theta_c]].
5. Comparar [[theta_i]] con [[theta_c]] para determinar si la reflexion es parcial o total.

> [!TIP]
> Si el enunciado da el angulo respecto a la superficie (llamemoslo alfa), el angulo respecto a la normal es 90 menos alfa.

## Casos especiales y ejemplo extendido

**Incidencia normal**: cuando [[theta_i]] es cero, el rayo reflejado vuelve exactamente por el camino de llegada. Este caso se usa en interferometros donde se necesita superposicion exacta de haces.

**Incidencia rasante**: cuando [[theta_i]] se acerca a 90 grados, el rayo apenas toca la superficie. La reflectancia aumenta dramaticamente (efecto visible al mirar una carretera mojada a angulo bajo). Los coeficientes de Fresnel predicen que toda superficie, incluso un dielectrico, se vuelve casi perfectamente reflectante en incidencia rasante.

**Reflexion total interna en fibra optica**: una fibra de vidrio con [[n1]] de 1.5 rodeada de aire ([[n2]] de 1.0) tiene un angulo critico de aproximadamente 42 grados. Cualquier rayo que entre con inclinacion mayor se propaga indefinidamente dentro de la fibra rebotando entre las paredes, permitiendo transmitir senales luminosas a cientos de kilometros.

## Preguntas reales del alumno

**¿Por que se mide el angulo desde la normal y no desde la superficie?**
Porque la normal es unica y perpendicular a la superficie en cada punto, lo que define un angulo sin ambiguedad. En superficies curvas, la tangente cambia continuamente pero la normal local siempre esta bien definida.

**¿La ley de reflexion funciona con cualquier tipo de luz?**
Si. La ley es independiente de la longitud de onda, la intensidad o la polarizacion. Estos factores afectan cuanta luz se refleja (coeficientes de Fresnel), pero no la direccion del rayo reflejado.

**¿Que ocurre si la superficie no es perfectamente lisa?**
Cada punto de la superficie refleja segun su normal local. Si las normales estan desordenadas (superficie rugosa), los rayos reflejados salen en muchas direcciones: es la reflexion difusa. La ley se sigue cumpliendo localmente, pero el efecto macroscopico es dispersion.

**¿La reflexion total interna es realmente total?**
En la optica geometrica clasica, si. En la optica ondulatoria, existe una onda evanescente que penetra una distancia del orden de la longitud de onda en el segundo medio, pero no transporta energia neta si el segundo medio es infinito.

## Conexiones transversales y rutas de estudio

La reflexion conecta directamente con [Espejos](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos), donde la ley se aplica a superficies curvas para formar imagenes. Tambien enlaza con la refraccion: ambos fenomenos son manifestaciones simultaneas de las condiciones de frontera electromagneticas y comparten la geometria del plano de incidencia.

En bloques superiores, la reflexion total interna conecta con la propagacion en [Fibra optica](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz) y con la polarizacion (angulo de Brewster). Los coeficientes de Fresnel pertenecen a un nivel mas avanzado pero parten de esta misma ley fundamental.

## Sintesis final

La reflexion es el fenomeno optico mas elemental y mas exacto: un unico principio de simetria (igualdad de angulos respecto a la normal) gobierna el comportamiento de la luz al rebotar en cualquier superficie especular. El angulo critico extiende este principio al regimen de confinamiento total, conectando la optica geometrica con la tecnologia de guias de onda y comunicaciones opticas.
`;export{e as default};
