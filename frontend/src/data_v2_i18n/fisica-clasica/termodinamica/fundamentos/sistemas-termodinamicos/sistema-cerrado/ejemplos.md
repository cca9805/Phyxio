# Ejemplo tipo examen

## Enunciado

Un gas ideal diatómico contenido en un cilindro con émbolo de fricción despreciable recibe 800 J de calor de una fuente externa mientras se expande y realiza 320 J de trabajo sobre el émbolo. Determina la variación de energía interna del gas, clasifica el proceso según el segundo principio e indica si la entropía del sistema aumenta, disminuye o permanece constante.

## Datos

- Calor recibido por el sistema: 800 J
- Trabajo realizado por el sistema sobre el émbolo: 320 J (convención ingeniería) → con convención IUPAC, el sistema cede trabajo, por lo que W es negativo: W = −320 J
- Sistema: gas ideal diatómico en cilindro con émbolo
- Tipo de frontera: permeable al calor, móvil (trabajo pV), impermeable a la materia

## Definición del sistema

El sistema termodinámico es el gas ideal contenido en el interior del cilindro. La frontera está definida por las paredes del cilindro, la cabeza del émbolo y la tapa del fondo. La frontera transmite calor desde la fuente externa (no es adiabática) y puede desplazarse cuando el émbolo se mueve (permite trabajo de presión-volumen). No hay flujo de materia: el gas no escapa. El sistema es, por lo tanto, un sistema cerrado.

## Modelo físico

El sistema se modela como un **sistema cerrado** con intercambio de calor y trabajo mecánico con el entorno. Se aplica el primer principio con convención IUPAC: [[Q]] positivo (el sistema absorbe calor), [[W]] negativo (el sistema realiza trabajo, cediendo energía al entorno). La variación de [[DeltaU]] resulta de la diferencia entre la energía recibida como calor y la cedida como trabajo.

## Justificación del modelo

El modelo de sistema cerrado es válido porque el gas permanece dentro del cilindro durante todo el proceso: no hay flujo de masa a través de ninguna parte de la frontera. La frontera es claramente no adiabática (recibe calor de una fuente) y no rígida (el émbolo se desplaza), lo que descarta el modelo de sistema aislado. Al no haber flujo de masa, el modelo de sistema abierto tampoco aplica.

## Resolución simbólica

Aplicando el primer principio al sistema cerrado con convención IUPAC:

{{f:primer_principio_cerrado}}

Con [[Q]] positivo igual a 800 J y [[W]] negativo igual a menos 320 J (el sistema realiza trabajo, lo que equivale a recibir W negativo en convención IUPAC):

El resultado es que [[DeltaU]] es igual a Q más W, es decir, 800 J más (menos 320 J), lo que da 480 J positivos.

Para el segundo principio, como el proceso recibe calor a temperatura positiva y no se específica que sea reversible, la variación de [[S]] es mayor o igual que Q/T, con T la temperatura de la fuente. Como Q es positivo, [[S]] es positiva o cero.

## Sustitución numérica

Aplicando directamente la fórmula del primer principio:

[[DeltaU]] es igual a 800 J más (menos 320 J), lo que resulta en 480 J.

El gas ha ganado 480 J de energía interna. Para un gas ideal diatómico a temperatura moderada, la energía interna depende solo de la temperatura, por lo que este aumento de 480 J corresponde a un aumento de temperatura proporcional a la capacidad calorífica isocórica del gas.

## Validación dimensional

Las unidades de [[DeltaU]], [[Q]] y [[W]] son todas julios, con dimensión [M L² T⁻²]. El balance [[DeltaU]] igual a [[Q]] más [[W]] tiene el mismo significado dimensional en los tres términos, lo que confirma la coherencia dimensional. El resultado 480 J es positivo, lo que es físicamente consistente con un proceso en el que el sistema absorbe más energía como calor de la que cede como trabajo.

## Interpretación física

El resultado [[DeltaU]] = 480 J indica que el gas ha ganado 480 J de energía interna neta. Físicamente significa que el proceso combina dos efectos: el sistema absorbe energía térmica del entorno ([[Q]] = 800 J) y simultáneamente entrega energía mecánica al émbolo ([[W]] = −320 J). La diferencia, 480 J, aumenta la energía interna del gas, lo que corresponde a un aumento de temperatura. La variación de [[S]] del sistema es positiva porque depende del calor absorbido a temperatura finita: físicamente implica que el proceso es irreversible y el universo gana entropía. El signo positivo de [[DeltaU]] es coherente con un proceso neto de ganancia energética para el sistema.

---

# Ejemplo de aplicación real

## Contexto

Un motor de combustión interna de un automóvil ejecuta el ciclo de Otto a régimen estacionario. En la carrera de compresión, el pistón comprime la mezcla aire-combustible desde un volumen de 500 mL hasta 50 mL (relación de compresión 10:1) de forma aproximadamente adiabática en una fracción de segundo. La mezcla tiene una capacidad calorífica isocórica efectiva de aproximadamente 0.72 J/(g·K) y la masa de mezcla por cilindro es de 0.5 g. La temperatura inicial de la mezcla en el punto de cierre de la válvula es 330 K.

## Estimación física

En la carrera de compresión, [[Q]] es aproximadamente nulo porque el proceso ocurre en milisegundos y las pérdidas de calor a través de las paredes son despreciables en esa escala de tiempo. El sistema es la mezcla de gas en el cilindro: un sistema cerrado (las válvulas están cerradas) con trabajo de compresión realizado por el pistón.

El primer principio para proceso adiabático del sistema cerrado establece que [[DeltaU]] es igual a [[W]] (el trabajo recibido por el sistema, positivo en compresión con convención IUPAC). La energía interna aumenta exactamente en la cantidad de trabajo realizado por el pistón sobre la mezcla.

Para una compresión adiabática de gas ideal diatómico con cociente de calores específicos de 1.4, la temperatura final de compresión se puede estimar a partir de la relación entre el cociente de compresión elevado al exponente gamma menos 1. Con relación de compresión 10 y gamma de 1.4, la temperatura se multiplica aproximadamente por un factor de 2.51, dando una temperatura final de compresión de alrededor de 828 K.

## Interpretación

El trabajo de compresión realizado por el pistón ha convertido energía mecánica del motor en energía interna de la mezcla, elevando su temperatura de 330 K a unos 828 K. Este aumento de temperatura es fundamental para que la combustión posterior sea eficiente: una mezcla más caliente se inflama más rápidamente y produce una combustión más completa.

Durante esta carrera, [[DeltaU]] ha aumentado en un valor igual al trabajo de compresión, del orden de varios cientos de julios por cilindro. La variación de [[S]] del sistema es nula en el proceso adiabático reversible ideal (isentrópico), y ligeramente positiva en el proceso real por las irreversibilidades internas de la compresión. La carrera de compresión ilustra con claridad el sistema cerrado en acción: frontera móvil (pistón), sin flujo de masa (válvulas cerradas), sin calor significativo en la escala de tiempo del proceso.
