const e=`# Ejemplo tipo examen

## Enunciado

Un bloque macizo de titanio grado 5 (aleacion Ti-6Al-4V) va a inspeccionarse mediante ultrasonidos para detectar posibles inclusiones internas. El tecnico necesita conocer las tres velocidades de onda del material antes de configurar el sistema de inspeccion. Calcular la velocidad de la onda longitudinal, la velocidad de la onda transversal y la velocidad de la onda de Rayleigh para ese material, y verificar que la jerarquia de velocidades se cumple.

## Datos

- Modulo de Young: 114 GPa
- Modulo de corte: 44 GPa
- Densidad: 4430 kg/m³
- Coeficiente de Poisson: 0.34

## Definición del sistema

El sistema es un semiespacio de titanio Ti-6Al-4V, isotropo, homogeneo y en regimen elastico lineal. Las ondas se propagan en el interior del volumen (ondas P y S) y en la superficie libre (onda de Rayleigh). El sistema se modela como medio continuo sin defectos, lo que permite aplicar las formulas de velocidad de onda del modelo elastico isotropo.

## Modelo físico

El modelo elegido es el de **elasticidad lineal isotropa en medio 3D**, que relaciona las velocidades de onda con los modulos elasticos [[E_young]], [[G_corte]], [[rho]] y [[nu]] mediante las tres formulas del leaf. Para la onda longitudinal, el modelo usa el modulo confinado efectivo, que incluye el efecto de la compresion lateral impedida. Para la onda transversal, el modelo usa exclusivamente [[G_corte]] y [[rho]]. Para la onda de Rayleigh, se aplica la aproximacion de Viktorov.

## Justificación del modelo

El modelo elastico isotropo es adecuado para el titanio Ti-6Al-4V en el rango de frecuencias de ultrasonidos de inspeccion (1 a 10 MHz): la longitud de onda resultante (del orden del milimetro) es mucho mayor que el tamaño de grano del material (menor de 100 µm), por lo que el scattering de grano es despreciable. El material en estado no deformado cumple la hipotesis de isotropia macroscopica cuando el acabado superficial y la textura de fabricacion no son criticos. El modelo dejaria de valer si se aplicara con frecuencias ultrasonicas tan altas que la longitud de onda se aproximara al tamaño del grano, o si la pieza hubiera sufrido deformacion plastica previa que indujera anisotropia residual.

## Resolución simbólica

Velocidad de onda longitudinal aplicando la formula del solido tridimensional:

{{f:vel_longitudinal}}

Velocidad de onda transversal, que depende unicamente del modulo de corte y la densidad:

{{f:vel_transversal}}

Velocidad de onda de Rayleigh mediante la aproximacion de Viktorov a partir del resultado de [[v_T]] y el coeficiente de Poisson [[nu]]:

{{f:vel_rayleigh}}

La jerarquia simbolica que debe verificarse es que [[v_L]] sea mayor que [[v_T]] y que [[v_T]] sea mayor que [[v_R]].

## Sustitución numérica

Para la onda longitudinal, introduciendo los valores numericos en la formula de velocidad P: el numerador usa el producto de 114×10⁹ Pa por la cantidad (1 menos 0.34), que da 75.24×10⁹ Pa. El denominador usa 4430 kg/m³ multiplicado por la cantidad (1 mas 0.34) multiplicado por la cantidad (1 menos 2 por 0.34), que resulta en 4430 por 1.34 por 0.32, aproximadamente 1902. El cociente 75.24×10⁹ partido entre 1902 da aproximadamente 39.56×10⁶ m²/s². La raiz cuadrada de esa cantidad es aproximadamente 6290 m/s. Por tanto [[v_L]] es aproximadamente 6290 m/s.

Para la onda transversal, introduciendo en la relacion de corte: el cociente de 44×10⁹ Pa entre 4430 kg/m³ da aproximadamente 9.93×10⁶ m²/s². La raiz cuadrada es aproximadamente 3152 m/s. Por tanto [[v_T]] es aproximadamente 3150 m/s.

Para la onda de Rayleigh, introduciendo en la aproximacion superficial: el numerador es 0.862 mas el producto de 1.14 por 0.34, que es 0.862 mas 0.388, resultando en 1.250. El denominador es 1 mas 0.34, igual a 1.34. El cociente 1.250 partido entre 1.34 es aproximadamente 0.933. Multiplicando por [[v_T]] de 3150 m/s se obtiene [[v_R]] aproximadamente igual a 2939 m/s, redondeando a 2940 m/s.

## Validación dimensional

Las tres formulas tienen la misma estructura dimensional: la raiz cuadrada de una presion (Pa) entre una densidad (kg/m³). Expresando Pa en unidades fundamentales, Pa es kg/(m·s²), y kg/m³ es kg/m³. El cociente Pa/(kg/m³) resulta en m²/s². La raiz cuadrada de m²/s² es m/s. Verificacion dimensional para [[v_L]] y [[v_T]]: \`[M L⁻¹ T⁻²] / [M L⁻³] = [L² T⁻²]\` → raiz cuadrada \`[L T⁻¹]\` ✓. La formula de [[v_R]] es un cociente adimensional por [[v_T]], por lo que tiene las mismas unidades que [[v_T]]: m/s ✓.

## Interpretación física

Los tres valores obtenidos —[[v_L]] de aproximadamente 6290 m/s, [[v_T]] de aproximadamente 3150 m/s y [[v_R]] de aproximadamente 2940 m/s— cumplen la jerarquia obligatoria y son coherentes con los valores tabulados en la literatura para el Ti-6Al-4V (tipicamente 6100 a 6300 m/s, 3100 a 3200 m/s y 2900 a 3000 m/s respectivamente). La pequeña diferencia con algunos valores de referencia se debe a la variacion composicional y de tratamiento termico entre lotes del mismo material.

La onda longitudinal viaja aproximadamente el doble de rapido que la transversal, lo que refleja que el modulo confinado del titanio es aproximadamente cuatro veces mayor que [[G_corte]]. Esto es tipico de metales con [[nu]] moderado. Para el tecnico de inspeccion, esto significa que en un ensayo de pulso-eco, el primer eco en llegar corresponde a la onda P, y si se emite simultaneamente una onda S (con transductor de corte), el segundo eco llegara aproximadamente el doble de tarde para la misma profundidad de defecto.

La onda de Rayleigh esta a solo el 6.7 % por debajo de [[v_T]], lo que es tipico de metales con [[nu]] alrededor de 0.30 a 0.35. Este resultado tiene implicacion directa para los ensayos superficiales: la ventana temporal entre la llegada de la onda S y la de Rayleigh es muy corta, por lo que los sistemas de inspeccion superficial deben tener resolucion temporal suficiente para distinguir las dos llegadas si se usan en modo de transmision.

---

# Ejemplo de aplicación real

## Contexto

En sismologia, la clasificacion de tipos de onda es esencial para la lectura de sismogramas. Cuando un terremoto ocurre, los sismografos distribuidos por el planeta reciben primero las ondas P (longitudinales), despues las ondas S (transversales) y por ultimo las ondas superficiales (Rayleigh y Love). El tiempo entre la llegada de la onda P y la de la onda S en una estacion determinada —el intervalo de Wadati— permite calcular la distancia al epicentro sin necesidad de conocer el instante exacto del terremoto.

En la corteza terrestre, los valores tipicos son [[v_L]] (onda P) de aproximadamente 6000 m/s y [[v_T]] (onda S) de aproximadamente 3500 m/s. Para una estacion a 700 km del epicentro, la onda P tarda aproximadamente 117 segundos en llegar y la onda S tarda aproximadamente 200 segundos. El intervalo entre ambas llegadas es de aproximadamente 83 segundos.

## Estimación física

La razon [[v_T]]/[[v_L]] de 3500 partido entre 6000 da aproximadamente 0.583. Usando la relacion entre esta razon y [[nu]], el coeficiente de Poisson estimado de la corteza es aproximadamente 0.25, coherente con los valores geologicos conocidos para roca granitica. Este dato —obtenido puramente de la medicion de tiempos de llegada— es uno de los metodos mas directos para estimar las propiedades elasticas de la litosfera sin necesidad de extraer muestras de la corteza profunda.

La onda de Rayleigh llega en torno a 233 segundos despues del epicentro (700 km a [[v_R]] de 3000 m/s), es decir, unos 33 segundos despues de la onda S. Aunque llega la ultima, su amplitud sobre la superficie es mucho mayor que la de las ondas de volumen, y su duracion puede extenderse varios minutos para terremotos de gran magnitud.

## Interpretación

La clasificacion de tipos de onda no es solo una categoría academica: es la herramienta operativa que permite a los sismologos localizar epicentros, determinar la profundidad focal y estimar las propiedades elasticas de la litosfera en tiempo real. El hecho de que [[v_L]] sea mayor que [[v_T]] proporciona unos minutos de aviso entre la llegada de la onda P y la de la onda S en zonas alejadas del epicentro, lo que es la base fisica del concepto de alerta sismica temprana. Las ondas de Rayleigh, por su mayor amplitud y confinamiento superficial, son las responsables de la mayor parte del dano en estructuras de varios pisos, cuyas frecuencias de resonancia coinciden con el rango dominante de las ondas superficiales.
`;export{e as default};
