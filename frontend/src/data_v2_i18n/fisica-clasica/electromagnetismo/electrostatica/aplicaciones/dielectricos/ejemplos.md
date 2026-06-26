# Ejemplo tipo examen


## Enunciado

Un condensador de placas paralelas tiene una capacitancia en vacío de 20 pF. Se rellena completamente con un dieléctrico de constante relativa igual a 4.5 y se conecta a una fuente de tensión continua de 100 V. Calcular: (a) la capacitancia con dieléctrico, (b) la carga almacenada, (c) el campo eléctrico en el interior del dieléctrico si la separación entre las placas es de 2 mm, (d) verificar que el condensador opera en el régimen seguro sabiendo que la tensión de ruptura del material es 10 MV/m.

## Datos

- [[capacitancia_en_vacio]] = 20 pF = 20 · 10⁻¹² F
- [[epsilon_r]] = 4.5 (adimensional)
- Tensión de alimentación: 100 V
- Separación entre placas: 2 mm = 2 · 10⁻³ m
- Tensión de ruptura del material: 10 MV/m = 10⁷ V/m

## Definición del sistema

El sistema es un condensador de placas paralelas ideales (efecto de borde despreciable) relleno completamente con un dieléctrico LHI de [[epsilon_r]] = 4.5. La fuente mantiene la tensión constante a 100 V durante el proceso de carga. El campo externo que habría en vacío sería la tensión dividida entre la separación.

## Modelo físico

Se aplica el modelo LHI estático: [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] y [[campo_electrico_en_el_dielectrico]] = campo externo / [[epsilon_r]]. Las magnitudes núcleo del leaf son [[capacitancia_con_dielectrico]], [[epsilon_r]], [[capacitancia_en_vacio]], [[campo_electrico_en_el_dielectrico]] y [[polarizacion_electrica]]. La condición de validez es que [[campo_electrico_en_el_dielectrico]] esté por debajo de la tensión de ruptura del material; [[polarizacion_electrica]] se puede calcular a partir de [[campo_electrico_en_el_dielectrico]] y [[epsilon_r]] pero en este ejemplo no es dato de entrada.

## Justificación del modelo

El modelo LHI es válido porque el campo aplicado es pequeño frente a la tensión de ruptura (se verificará en el apartado d), el dieléctrico rellena completamente el espacio de manera uniforme y la señal es de corriente continua, por lo que no hay efectos de dispersión dieléctrica. Si la tensión superara el 20 % de la tensión de ruptura, sería necesario considerar el modelo extendido con pérdidas.

## Resolución simbólica

Apartado (a): La capacitancia con dieléctrico se obtiene multiplicando [[capacitancia_en_vacio]] por [[epsilon_r]]:

{{f:capacitancia_dielectrico}}

Apartado (b): La carga almacenada se obtiene multiplicando [[capacitancia_con_dielectrico]] por la tensión aplicada. Usando la definición de capacitancia, la carga es el producto de la capacitancia y la tensión.

Apartado (c): El campo en el interior del dieléctrico se obtiene dividiendo el campo externo en vacío entre [[epsilon_r]]:

{{f:campo_en_dielectrico}}

El campo externo en vacío es la tensión dividida entre la separación, que da el campo que existiría si no hubiera dieléctrico.

Apartado (d): La condición de seguridad exige que [[campo_electrico_en_el_dielectrico]] sea mucho menor que la tensión de ruptura del material.

Apartado (e): La polarización volumétrica del material se obtiene a partir de [[campo_electrico_en_el_dielectrico]] y del factor de susceptibilidad ([[epsilon_r]] menos uno):

{{f:polarizacion_dielectrico}}

## Sustitución numérica

Apartado (a): Multiplicando 4.5 por 20 pF se obtiene 90 pF. Por tanto [[capacitancia_con_dielectrico]] ≈ 90 pF.

Apartado (b): Multiplicando 90 pF por 100 V se obtiene 9000 pC, equivalente a 9 nC. La carga almacenada es aproximadamente 9 nC.

Apartado (c): El campo externo en vacío es 100 V entre 2 mm, que da 50 000 V/m o 50 kV/m. Dividiendo entre [[epsilon_r]] = 4.5 se obtiene aproximadamente 11 111 V/m, es decir, unos 11.1 kV/m. Por tanto [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m.

Apartado (d): La tensión de ruptura del material es 10 MV/m, equivalente a 10 000 kV/m. El campo de operación [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m representa apenas el 0.11 % de ese límite, muy por debajo del margen de seguridad del 20 %. El condensador opera en el régimen seguro sin riesgo de ruptura dieléctrica.

Apartado (e): La permitividad del vacío es 8.85 × 10⁻¹² F/m. El factor de susceptibilidad es 4.5 menos 1, es decir 3.5. Multiplicando 8.85 × 10⁻¹² F/m por 3.5 y por 11 111 V/m se obtiene [[polarizacion_electrica]] ≈ 344 × 10⁻¹² C/m², equivalente a aproximadamente 344 pC/m².

## Validación dimensional

Apartado (a): La expresión [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] combina un factor adimensional por faradios, que resulta faradios. Expresando en unidades SI fundamentales, el faradio tiene dimensión de C²·s²/(kg·m²); multiplicar por un adimensional no altera las dimensiones `[M⁻¹ L⁻² T⁴ I²]` ✓

Apartado (c): Para [[campo_electrico_en_el_dielectrico]], la relación es tensión entre longitud dividida entre un adimensional. El voltio se descompone en kg·m²·A⁻¹·s⁻³; dividido entre metros resulta kg·m·A⁻¹·s⁻³, que son las unidades correctas del campo eléctrico `[M L T⁻³ I⁻¹]` ✓

## Interpretación física

El resultado del apartado (a) muestra que insertar el dieléctrico multiplica la capacitancia por exactamente [[epsilon_r]] = 4.5. Esto significa que a la misma tensión de 100 V, el condensador con dieléctrico almacena 4.5 veces más carga que en vacío. La razón física es que la polarización del material genera cargas superficiales internas que se oponen al campo externo, reduciendo el campo interior y permitiendo que la batería inyecte más carga para mantener la tensión.

El campo interior [[campo_electrico_en_el_dielectrico]] ≈ 11.1 kV/m es 4.5 veces menor que el campo que existiría en vacío (50 kV/m). Esta reducción es la manifestación macroscópica de la polarización: los dipolos del material crean un campo opuesto que amortigua el campo libre. El hecho de que el campo de operación sea solo el 0.11 % de la tensión de ruptura indica que el diseño es extremadamente conservador y que podría aumentarse la tensión de operación en un factor de hasta 900 antes de alcanzar el límite de fallo del material.

Si se aumentara [[epsilon_r]] manteniendo fija la geometría, [[capacitancia_con_dielectrico]] crecería linealmente y [[campo_electrico_en_el_dielectrico]] disminuiría proporcionalmente. Sin embargo, materiales de muy alta [[epsilon_r]] (como el titanato de bario) suelen tener mayor factor de pérdidas, mayor dependencia de la temperatura y mayor no linealidad, lo que limita su uso a aplicaciones donde la compacidad es prioritaria sobre la estabilidad.

---

# Ejemplo de aplicación real


## Contexto

Un ingeniero de electrónica de potencia necesita seleccionar el material dieléctrico para un condensador de filtrado en una fuente de alimentación conmutada. Los requisitos son: capacitancia mínima de 100 nF, tensión de operación de 400 V, temperatura de trabajo hasta 85 °C y frecuencia de conmutación de 100 kHz. La geometría disponible permite un condensador de placas con [[capacitancia_en_vacio]] = 10 nF.

## Estimación física

Para obtener [[capacitancia_con_dielectrico]] = 100 nF con [[capacitancia_en_vacio]] = 10 nF, se necesita un [[epsilon_r]] de aproximadamente 10. Los candidatos con [[epsilon_r]] entre 8 y 15 son el polipropileno ([[epsilon_r]] ≈ 2.2, insuficiente), el poliéster/PET ([[epsilon_r]] ≈ 3.3, insuficiente), la mica ([[epsilon_r]] ≈ 7, límite), la alúmina ([[epsilon_r]] ≈ 10, adecuado) y el vidrio estándar ([[epsilon_r]] ≈ 8).

A 100 kHz el polipropileno tiene pérdidas mínimas (factor de disipación menor de 0.0005) y la alúmina tiene pérdidas moderadas (factor de disipación alrededor de 0.001). Para la tensión de operación de 400 V, el campo [[campo_electrico_en_el_dielectrico]] en el condensador con separación de 1 mm sería de 400 kV/m dividido entre [[epsilon_r]]: para alúmina con [[epsilon_r]] = 10, el campo interior es 40 kV/m, frente a una tensión de ruptura de 13 MV/m. El margen de seguridad es de más de 300 veces, aceptable.

La conclusión de la estimación es que la alúmina o la mica son candidatos razonables. El polipropileno queda descartado porque requeriría una geometría diez veces mayor para alcanzar los 100 nF.

## Interpretación

La magnitud central [[epsilon_r]] actúa aquí como factor de compacidad: materiales con [[epsilon_r]] más alto permiten condensadores más pequeños a igual capacitancia y geometría base. Sin embargo, aumentar [[epsilon_r]] suele ir acompañado de mayores pérdidas a alta frecuencia, lo que eleva el calentamiento del componente y puede afectar la estabilidad de la fuente de alimentación.

El ingeniero debe equilibrar compacidad (favorece [[epsilon_r]] alto), pérdidas a 100 kHz (favorece materiales de baja pérdida como polipropileno o mica) y estabilidad térmica hasta 85 °C (elimina materiales con fuerte dependencia de [[epsilon_r]] con la temperatura, como el titanato de bario). Esta decisión multivariable ilustra por qué en la práctica no se selecciona el material con mayor [[epsilon_r]] disponible, sino el que mejor equilibra todos los requisitos de la aplicación.

Variable dominante: [[epsilon_r]] del material dieléctrico seleccionado, que determina la relación entre la geometría disponible y la capacitancia obtenida.
Límite de validez: el modelo LHI es válido mientras la tensión de operación esté por debajo del 20 % de la tensión de ruptura del material y la frecuencia esté por debajo de la frecuencia de relajación dieléctrica.