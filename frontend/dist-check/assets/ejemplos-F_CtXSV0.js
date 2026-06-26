const e=`# Ejemplos de Flujo Laminar

# Ejemplo tipo examen

## Enunciado
Un laboratorio farmacéutico transporta un compuesto líquido altamente viscoso a través de una tubería de acero inoxidable de [[L]] = 12 m de longitud y un diámetro interno de 4 mm. La viscosidad dinámica del líquido es [[eta]] = 0.15 Pa*s y su densidad es densidad = 1050 kg/m^3. Se aplica una diferencia de presión de [[deltaP]] = 80 kPa entre los extremos. **Calcule** el caudal volumétrico [[Q]] en mililitros por segundo y la velocidad máxima [[v_max]] en el eje de la tubería. Además, **justifique** si el uso de la ley de Poiseuille es válido verificando el régimen mediante el Número de Reynolds.

## Datos
- **Longitud de la tubería:** [[L]] = 12 m (Dato de extensión axial).
- **Radio de la tubería:** [[R]] es 2 mm, es decir, 0.002 m (derivado del diámetro de 4 mm).
- **Viscosidad dinámica:** [[eta]] = 0.15 Pa*s (Resistencia interna al flujo).
- **Caída de presión:** [[deltaP]] = 80000 Pa (Motor impulsor del fluido).
- **Densidad:** densidad = 1050 kg/m^3 (Necesaria para el cálculo del Reynolds).

## Definición del sistema
El sistema se define como un flujo de fluido newtoniano, incompresible y estacionario dentro de un conducto cilíndrico rígido de sección circular constante. Se considera que el flujo está totalmente desarrollado, ignorando los efectos de entrada y salida debido a la gran relación longitud/diámetro (L/D = 3000).

## Modelo físico
El modelo físico adoptado es el **Flujo de Hagen-Poiseuille**. Este modelo predice que, bajo régimen laminar, el caudal es directamente proporcional a la cuarta potencia del radio y al gradiente de presión. La fricción interna del fluido domina sobre la inercia, resultando en un perfil de velocidades parabólico donde el fluido en contacto con la pared está en reposo.

## Justificación del modelo
Para validar el modelo, debemos estimar primero la velocidad media y el Número de Reynolds. Si [[Re]] < 2300, el régimen es laminar y el modelo es físicamente correcto. La gran viscosidad del fluido (150 veces la del agua) sugiere fuertemente que el flujo será laminar incluso bajo presiones considerables, ya que el denominador del Reynolds (viscosidad) amortiguará las fuerzas inerciales (numerador).

## Resolución simbólica
Primero, utilizamos la Ley de Poiseuille para hallar el caudal:
{{f:poiseuille}}

Luego, calculamos la velocidad máxima en el eje:
{{f:v_max_def}}

Finalmente, calculamos la velocidad media dividiendo el caudal entre el área circular de la sección y verificamos el régimen con [[Re]], comparando inercia y viscosidad. Para conocer la velocidad local en cualquier punto del radio, aplicaríamos el perfil:
{{f:perfil_velocidad}}

## Sustitución numérica
1.  **Cálculo del Caudal [[Q]]**:
    
    Convertido a mL/s, el resultado es aproximadamente [[Q]] = 0.279 mL/s.
2.  **Cálculo de [[v_max]]**:
    
3.  **Verificación de Reynolds**:
    v_{media} = [[v_max]]/2 = 0.0222  m/s.
    El número de Reynolds estimado es aproximadamente [[Re]] = 0.621.
    Como 0.621 es mucho menor que 2300, el régimen es profundamente laminar.

## Validación dimensional
Verificamos las unidades del caudal:
La dimensi?n de [[Q]] resulta en volumen por unidad de tiempo.
La unidad resultante es el metro cúbico por segundo, lo cual es correcto para un caudal volumétrico. Para la velocidad:
La dimensi?n de la velocidad resulta en longitud por unidad de tiempo.
Consistencia dimensional comprobada.

## Interpretación física
El resultado muestra un flujo extremadamente lento y ordenado. Un Número de Reynolds de 0.62 indica que las fuerzas viscosas son casi 4000 veces más potentes que las fuerzas de inercia en este sistema. El fluido se mueve con tal suavidad que no existe ninguna posibilidad de turbulencia. El bajo caudal (0.279 mL/s) a pesar de la alta presión (80 kPa) demuestra cómo la viscosidad y el pequeño diámetro de la tubería actúan como una gran resistencia hidráulica, limitando el transporte de masa.

# Ejemplo de aplicación real

## Contexto
Análisis de la resistencia vascular en el sistema circulatorio humano. Consideremos una arteriola típica con un radio de [[R]] = 0.05 mm (5e-5 m) y una longitud de [[L]] = 2 mm (2e-3 m). La sangre tiene una viscosidad de [[eta]] = 0.004 Pa*s. Queremos estimar la caída de presión necesaria para mantener un flujo fisiológico saludable.

## Estimación física
Si el caudal necesario para irrigar un tejido pequeño es de [[Q]] = 1e-10 m^3/s, despejamos [[deltaP]] de la ley de Poiseuille:

Sustituyendo los valores:

Esto equivale aproximadamente a 2.4 mmHg, un valor razonable para la caída de presión en una arteriola individual.

## Interpretación
Este cálculo ilustra por qué las arteriolas se denominan "vasos de resistencia". Debido a que el radio [[R]] está en el denominador elevado a la cuarta potencia, el cuerpo humano puede controlar el flujo sanguíneo hacia órganos específicos mediante vasoconstricción o vasodilatación minúscula. Una reducción del 10 % en el radio de la arteriola aumentaría la caída de presión necesaria en un 52 % para mantener el mismo caudal, obligando al corazón a trabajar mucho más. La física del flujo laminar es, por tanto, el motor silencioso que regula nuestra presión arterial y la distribución de nutrientes en cada rincón de nuestro organismo.
`;export{e as default};
