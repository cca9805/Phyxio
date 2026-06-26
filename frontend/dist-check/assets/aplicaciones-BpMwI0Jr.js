const e=`## 1. Detección de defectos por ondas guiadas en raíles

**Contexto:** Los sistemas de inspección ultrasónica por ondas guiadas excitan ondas flexionales en raíles de tren para detectar fisuras internas sin detener el tráfico. La dispersión flexional se aprovecha para separar señales de defectos de reflexiones en juntas.

**Hipótesis dominante:** Se asume que el raíl se comporta como una viga de Euler-Bernoulli a las frecuencias de excitación (20–100 kHz), aunque para raíles UIC-60 esta hipótesis es marginal en el extremo superior del rango.

Variable dominante: la velocidad de grupo [[v_grupo_flex]], que determina la ventana temporal donde buscar ecos de defectos.

**Interpretación física:** Un transductor emite un pulso a frecuencia controlada; el eco de un defecto regresa a velocidad de grupo. Conociendo la dispersión, el sistema calcula la distancia al defecto midiendo el retardo temporal. La dispersión flexional hace que los ecos se ensanchen, reduciendo la resolución espacial a distancias grandes.

Límite de validez: para frecuencias por encima de 80 kHz en raíles con espesor de alma de 16 mm, la longitud de onda se hace comparable al espesor y debe usarse el modelo de Timoshenko para calcular correctamente la velocidad de grupo.

---

## 2. Diseño acústico de instrumentos de percusión de barra

**Contexto:** Los metalófonos, marimbas y vibráfonos utilizan barras metálicas o de madera cuyas frecuencias de resonancia a flexión determinan la nota musical. La forma de la sección se modifica (adelgazando el centro) para ajustar los armónicos superiores en relaciones consonantes.

**Hipótesis dominante:** Cada barra se modela como viga libre-libre en los dos extremos. Los nodos del modo fundamental están a un 22.4 % de cada extremo, que es donde se colocan los apoyos para minimizar el amortiguamiento.

Variable dominante: el momento de inercia [[I_seccion]] de la sección, que al variarse a lo largo de la barra (perfil arqueado) permite independientemente controlar la frecuencia del fundamental y de los parciales superiores.

**Interpretación física:** La relación entre frecuencias de modos sucesivos en una barra uniforme no es armónica (los parciales no son múltiplos enteros del fundamental). Tallando la barra para reducir [[I_seccion]] en el centro, el constructor baja la frecuencia del segundo parcial hasta hacerlo coincidir con una relación consonante (por ejemplo 4:1 respecto al fundamental).

Límite de validez: para las láminas de marimba más largas (graves), la barra puede ser tan corta que solo caben 1–2 longitudes de onda flexional. En ese caso las condiciones de contorno dominan completamente y la velocidad de fase pierde su significado como propiedad propagante.

---

## 3. Aislamiento de vibraciones en estructuras de edificios

**Contexto:** En edificios con maquinaria pesada (hospitales con resonancia magnética, salas de concierto sobre garajes), las ondas flexionales en forjados y vigas transmiten vibración no deseada. Los ingenieros estructurales diseñan discontinuidades (cortes, materiales absorbentes) para interrumpir la propagación.

**Hipótesis dominante:** El forjado se modela como conjunto de vigas paralelas donde la onda flexional se propaga con la dispersión de Euler-Bernoulli en el rango de 50–500 Hz relevante para la percepción humana.

Variable dominante: la longitud de onda [[lambda_flex]], que determina la separación mínima efectiva entre discontinuidades de aislamiento.

**Interpretación física:** Para que una discontinuidad sea efectiva como barrera, su tamaño debe ser comparable a [[lambda_flex]] en la frecuencia de interés. A 100 Hz en un forjado de hormigón armado típico, [[lambda_flex]] vale del orden de 2–4 m. Esto explica por qué los cortes de aislamiento deben extenderse a toda la anchura del forjado y por qué los parches locales son ineficaces a baja frecuencia.

Límite de validez: a frecuencias por debajo de 30 Hz, la longitud de onda flexional supera las dimensiones del forjado y el modelo de propagación libre deja de ser adecuado; la respuesta se describe mejor en términos de modos propios del forjado completo.

---

## 4. Análisis de vibraciones en ejes de maquinaria rotativa

**Contexto:** Los ejes de turbinas, motores y compresores están sometidos a cargas que excitan ondas de flexión. La velocidad crítica de un eje (velocidad de giro a la que entra en resonancia) depende directamente de la dispersión flexional y de las condiciones de contorno en los cojinetes.

**Hipótesis dominante:** El eje se modela como viga de Euler-Bernoulli con sección circular constante y apoyos simples en los cojinetes. Las velocidades críticas corresponden a las frecuencias propias de flexión del eje.

Variable dominante: el radio de giro [[r_giro]] de la sección circular (igual a r/2 para un eje macizo), que junto con la longitud entre apoyos determina las velocidades críticas.

**Interpretación física:** A la velocidad crítica, la frecuencia de rotación coincide con la frecuencia del primer modo flexional del eje. La onda de flexión resultante crece en amplitud hasta que el amortiguamiento la limita o se produce la rotura. La dispersión implica que las velocidades críticas de orden superior no son múltiplos exactos de la primera.

Límite de validez: para ejes gruesos (longitud/diámetro menor que 8), la deformación por cortante modifica las velocidades críticas hasta un 10 % y el modelo de Timoshenko es necesario para predicciones de diseño.

---

## 5. Propagación de ondas sísmicas en pilotes de cimentación

**Contexto:** Los ensayos de integridad de pilotes utilizan un impacto en la cabeza del pilote y analizan las ondas reflejadas para detectar defectos (estrangulaciones, cavernas, discontinuidades). Las ondas flexionales coexisten con las longitudinales y su correcta identificación es esencial para el diagnóstico.

**Hipótesis dominante:** El pilote se modela como una viga empotrada en el terreno con sección circular. La componente flexional se excita cuando el golpe no es perfectamente centrado, produciendo señales parásitas que pueden confundirse con defectos.

Variable dominante: la velocidad de fase [[v_fase_flex]] a la frecuencia dominante del impacto (típicamente 500–2000 Hz), que permite separar temporalmente las reflexiones flexionales de las longitudinales.

**Interpretación física:** Dado que la onda flexional viaja mucho más lenta que la longitudinal a la misma frecuencia, las reflexiones flexionales llegan después. Si no se conoce la dispersión, el ingeniero puede interpretar un eco flexional retardado como una reflexión longitudinal en un defecto profundo que no existe. La correcta identificación del tipo de onda requiere conocer la relación de dispersión del pilote.

Límite de validez: para pilotes de gran diámetro (mayor de 1 m) a frecuencias superiores a 1 kHz, la longitud de onda flexional puede ser comparable al diámetro y la modelización como viga simple es insuficiente. Se requieren métodos de elementos finitos o guías de onda cilíndrica.
`;export{e as default};
