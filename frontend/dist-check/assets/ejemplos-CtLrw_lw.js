const e=`# Ejemplo tipo examen

## Enunciado
Una señal de tensión de red puede aproximarse por modelo sinusoidal ideal. Se conocen amplitud [[Vmax]], frecuencia [[f]], corriente eficaz [[Irms]] y desfase [[phi]] respecto a la corriente de carga. Se pide construir la señal temporal, obtener [[omega]], calcular [[T]], convertir a [[Vrms]] y estimar [[P]], justificando cada paso.

## Datos
Datos del caso: [[Vmax]] igual a 325 V, [[f]] igual a 50 Hz, [[Irms]] igual a 8 A y [[phi]] igual a 40 grados. Se trabajará en unidades SI y con régimen sinusoidal estacionario. El objetivo no es solo obtener valores, sino verificar coherencia entre dominio temporal y dominio energético.

## Definición del sistema
El sistema considerado es el par fuente-carga en régimen periódico estable. La variable temporal independiente es [[t]], la tensión instantánea es [[v_t]], y la lectura energética se hará con [[Vrms]], [[Irms]] y [[P]]. Esta definición evita mezclar magnitudes de naturaleza distinta en una sola interpretación.

## Modelo físico
Modelo adoptado: senoide pura con frecuencia única y desfase constante. Bajo ese modelo, la señal temporal se representa con amplitud y fase, la conversión de [[f]] a [[omega]] es directa, el período se obtiene por reciprocidad y la potencia activa se interpreta con factor de fase.

## Justificación del modelo
El modelo es adecuado porque el enunciado asume señal de red estable y no reporta distorsión dominante. Por tanto, la cadena de fórmulas de este leaf es operativa. Si se detectaran armónicos fuertes o recorte de onda, este modelo dejaría de ser suficiente y habría que pasar a evaluación RMS general.

## Resolución simbólica
La señal temporal se expresa con:

{{f:senal_sinusoidal}}

La frecuencia angular se obtiene con:

{{f:omega_f}}

El período se obtiene con:

{{f:periodo}}

La conversión de amplitud a eficaz en senoide pura se obtiene con:

{{f:valor_eficaz}}

La potencia activa media se estima con:

{{f:potencia_activa}}

## Sustitución numérica
Con [[f]] igual a 50 Hz, [[omega]] resulta aproximadamente 314 rad/s. El período [[T]] queda en 0.02 s, coherente con red de 50 Hz. A partir de [[Vmax]] igual a 325 V, [[Vrms]] se aproxima a 230 V en senoide pura. Con [[Irms]] de 8 A y [[phi]] de 40 grados, la potencia activa [[P]] queda del orden de 1.4 kW.

El valor numérico exacto no es lo más importante; lo central es la estructura causal: amplitud fija escala, frecuencia fija ritmo, fase ajusta transferencia útil y RMS conecta señal con energía media.

## Validación dimensional
La validación dimensional es consistente en toda la cadena. [[omega]] queda en rad/s, [[T]] en segundos, [[Vrms]] en voltios y [[P]] en vatios. Además, la reciprocidad entre [[f]] y [[T]] se verifica numéricamente, y la conversión de pico a RMS respeta que [[Vrms]] sea menor que [[Vmax]].

También cierra la validación física: potencia activa se reduce con desfase no nulo aunque [[Vrms]] e [[Irms]] permanezcan altos. Esta lectura evita sobreestimar consumo útil.

## Interpretación física
El caso muestra que una señal puede tener amplitud elevada sin traducirse automáticamente en máxima transferencia activa. [[phi]] reorganiza el balance útil y, por eso, dos cargas con la misma [[Irms]] pueden operar de forma energética distinta.

Además, el ejemplo conecta instrumentación con modelo. El osciloscopio informa forma y pico; el medidor RMS informa equivalencia energética. Sin esa distinción, la interpretación de potencia queda sesgada.

Una lectura física madura no termina en el valor de [[P]]. También debe explicar por qué ese valor emerge del estado temporal y cómo cambiaría si se alteran frecuencia, fase o forma de onda. Esa conexión causal es la que vuelve útil el cálculo para diagnóstico real.

Desde el punto de vista conceptual, la interpretación correcta separa tres capas: descripción de señal, relación entre variables y consecuencia energética. Cuando esas capas se mezclan, se obtienen conclusiones numéricas que parecen correctas, pero no guían decisiones técnicas reales. Cuando se separan, el cálculo deja de ser un trámite y se convierte en criterio.

Por eso este ejemplo no busca solo cerrar una cuenta: busca entrenar una lectura explicativa. El estudiante debe poder justificar qué significa físicamente cada magnitud y por qué la respuesta final tiene sentido en un escenario operativo, incluso antes de considerar una intervención sobre el sistema.

# Ejemplo de aplicación real

## Contexto
En un laboratorio de mantenimiento industrial, se revisa una línea donde el medidor RMS reporta tensión estable pero el equipo presenta calentamiento y rendimiento menor al esperado. Se decide analizar magnitudes alternas antes de intervenir circuitos de reactancia o compensación.

## Estimación física
El técnico recopila [[Vmax]], [[f]], [[Irms]] y desfase [[phi]] de operación. Primero verifica coherencia temporal con [[omega]] y [[T]], para descartar errores de frecuencia o adquisición. Luego convierte a [[Vrms]] en el tramo donde la forma de onda se aproxima a senoide. Finalmente estima [[P]] para comparar potencia útil con expectativa del proceso.

La estimación revela que la amplitud era adecuada, pero el desfase elevaba demanda aparente frente a transferencia útil. Esa lectura evita cambiar componentes de forma impulsiva y orienta acciones concretas: revisar sincronía de cargas, corregir condiciones de operación o medir armónicos para decidir si el modelo básico aún aplica.

## Interpretación
La aplicación real confirma que magnitudes alternas no es teoría ornamental. Es una herramienta de diagnóstico que permite separar problemas de escala, problemas temporales y problemas energéticos. Cuando esa separación se hace bien, la decisión técnica mejora: se evita confundir pico con eficacia, se evita culpar a la frecuencia sin evidencia y se evita sobrestimar potencia útil.

También deja una lección metodológica: antes de intervenir hardware, conviene cerrar coherencia entre modelo, unidades e instrumentos. Ese orden reduce errores costosos y prepara el terreno para análisis más profundos de reactancia o calidad de energía.

En términos de aprendizaje, este ejemplo enseña a justificar decisiones y no solo operaciones. Un resultado numérico aislado puede impresionar, pero solo una interpretación física articulada permite sostener una intervención técnica responsable.
`;export{e as default};
