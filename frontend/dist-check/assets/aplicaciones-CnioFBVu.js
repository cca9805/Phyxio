const e=`## 1. Ensayos no destructivos por ultrasonidos en barras y cables

**Contexto:** En ingenieria civil y mecanica, la integridad de barras de anclaje, cables de pretensado y pernos se verifica mediante la emision de pulsos ultrasonicos longitudinales desde un extremo y la medicion de ecos reflejados por defectos internos (fisuras, vacios, corrosion).

**Hipotesis dominante:** La barra se modela como guia de ondas unidimensional esbelta. A las frecuencias de ensayo (20–200 kHz), la longitud de onda es suficientemente mayor que el diametro para que la velocidad de propagacion sea la del modelo simple.

Variable dominante: la velocidad [[v_barra]], que permite convertir tiempos de eco en distancias al defecto con precision milimetrica.

**Interpretacion fisica:** Un eco que llega a un tiempo t tras la emision indica un reflector (defecto o extremo) a una distancia de [[v_barra]] × t / 2. La amplitud del eco depende del cambio de impedancia en el defecto. Un vacio completo (impedancia cero) refleja el 100% de la amplitud; una corrosion parcial refleja proporcionalmente menos. La ausencia de dispersion garantiza que el eco mantiene la forma del pulso emitido, facilitando la identificacion automatica.

Limite de validez: para cables de acero de 7 mm de diametro, el limite superior de frecuencia con modelo simple es unos 120 kHz. Por encima, los modos de guia de onda multiples dificultan la interpretacion.

---

## 2. Barras de Hopkinson para ensayos de impacto a alta velocidad de deformacion

**Contexto:** El ensayo de barra de Hopkinson (SHPB) utiliza dos barras largas de acero o aluminio para aplicar cargas de impacto controladas a probetas de material. Un proyectil golpea la barra incidente, generando una onda de compresion que se transmite parcialmente a la probeta y a la barra transmisora. Midiendo las ondas en ambas barras se determinan las curvas tension-deformacion del material a velocidades de deformacion de 10² a 10⁴ por segundo.

**Hipotesis dominante:** Las barras incidente y transmisora se modelan como guias de onda unidimensionales sin dispersion. La duracion del pulso (determinada por la longitud del proyectil) se elige para que la frecuencia dominante cumpla la condicion de barra esbelta.

Variable dominante: la impedancia [[Z_barra]] de las barras, que debe ser similar a la de la probeta para maximizar la transmision de energia al especimen y minimizar reflexiones parasitas.

**Interpretacion fisica:** La fuerza en la probeta se calcula a partir de la señal transmitida multiplicada por la impedancia de la barra transmisora. La velocidad de deformacion se obtiene de la diferencia entre onda incidente y reflejada. Todo el analisis descansa en que la velocidad de propagacion es constante y conocida, permitiendo sincronizar temporalmente las señales de galgas extensometricas a lo largo de las barras.

Limite de validez: las barras de Hopkinson tipicas (20 mm de diametro) limitan la duracion minima del pulso a unos 20 microsegundos; pulsos mas cortos contienen frecuencias donde la dispersion de Pochhammer-Chree introduce oscilaciones espurias que requieren correccion numerica.

---

## 3. Diseño de lineas de retardo acusticas en electronica

**Contexto:** En sistemas de radar y telecomunicaciones analogicos, las lineas de retardo acusticas utilizan barras de vidrio, cuarzo o metal para retrasar señales electricas convirtiendolas en ondas mecanicas longitudinales. Un transductor piezoelectrico convierte la señal electrica en onda mecanica en un extremo; la onda recorre la barra y se reconvierte en señal electrica en el otro extremo con un retardo determinado por la longitud y la velocidad.

**Hipotesis dominante:** La barra actua como medio de propagacion sin dispersion ni atenuacion significativa a las frecuencias de operacion (MHz). La velocidad [[v_barra]] es estable con la temperatura dentro de la tolerancia requerida.

Variable dominante: la longitud de onda [[lambda_long]], que determina la resolucion espacial del dispositivo y la frecuencia maxima de operacion. Para barras de cuarzo fundido ([[v_barra]] de 5760 m/s), un retardo de 10 microsegundos requiere una barra de 57.6 mm.

**Interpretacion fisica:** La precision del retardo depende directamente de la estabilidad de [[v_barra]] con la temperatura. El cuarzo fundido tiene un coeficiente de variacion de velocidad con temperatura de solo 0.6 ppm/K, lo que lo convierte en el material preferido para aplicaciones de precision. La ausencia de dispersion garantiza que la señal no se distorsiona al atravesar la barra.

Limite de validez: a frecuencias superiores a 50 MHz en barras de diametro milimetrico, la longitud de onda se hace comparable al diametro y aparecen modos laterales que degradan la fidelidad de la señal.

---

## 4. Medicion in situ de propiedades elasticas de materiales por velocidad de pulso

**Contexto:** En ingenieria civil, la velocidad de pulso ultrasonico (UPV) a traves de probetas cilindricas o prismaticas de hormigon se utiliza como indicador de calidad y resistencia. La norma ASTM C597 especifica que un pulso longitudinal de baja frecuencia (20–150 kHz) se transmite a traves de la probeta y se mide su tiempo de transito.

**Hipotesis dominante:** La probeta se trata como barra esbelta si la relacion longitud de onda / dimension transversal es favorable. Para probetas cilindricas de 150 mm de diametro y frecuencias de 54 kHz (transductores estandar), [[lambda_long]] en hormigon (v de 3500–4500 m/s) es del orden de 65–83 mm, lo que viola la condicion de esbeltez. Por ello se aplica un factor de correccion geometrica.

Variable dominante: [[v_barra]] del hormigon, que se correlaciona empiricamente con la resistencia a compresion. Un hormigon de buena calidad tiene velocidad de 4000–4500 m/s; uno deteriorado baja de 3000 m/s.

**Interpretacion fisica:** Aunque el modelo simple no es exactamente valido (lambda comparable al diametro), la velocidad medida se corrige y se usa como proxy no destructivo de la rigidez del material. La ventaja del metodo es su rapidez: medir v en campo tarda segundos y permite evaluar uniformidad de grandes estructuras sin extraer testigos.

Limite de validez: la correlacion v-resistencia es empirica y depende del tipo de arido, contenido de humedad y temperatura. No es valida para hormigones con fibras metalicas o polimericos, donde la microestructura altera la relacion entre E y resistencia.

---

## 5. Propagacion de ondas de detonacion en barras de transferencia de energia explosiva

**Contexto:** En mineria y demolicion controlada, las barras de transferencia (boosters) conectan el detonador con la carga principal. La onda de detonacion genera un pulso de compresion intenso que se propaga por la barra metalica hasta iniciar la carga explosiva secundaria. El diseño requiere conocer exactamente el tiempo de transito para sincronizar multiples puntos de detonacion con precision de microsegundos.

**Hipotesis dominante:** A pesar de las presiones extremas (varios GPa), la barra de acero de alta resistencia permanece en regimen elastico durante la propagacion del frente de onda, porque la seccion es suficientemente gruesa para distribuir la carga. La velocidad de propagacion es [[v_barra]] del material.

Variable dominante: [[Z_barra]] de la barra de transferencia, que debe estar cuidadosamente ajustada para transmitir suficiente energia a la carga secundaria sin reflexiones excesivas que pudieran generar iniciaciones prematuras por rebote.

**Interpretacion fisica:** Si la impedancia de la barra no esta adaptada a la del explosivo receptor, parte de la energia se refleja y la onda regresa hacia el detonador. Un coeficiente de reflexion superior a 0.3 puede causar tension de traccion en la union barra-detonador, con riesgo de fractura. El diseño optimo iguala impedancias o usa transiciones graduales (conos) para minimizar reflexion.

Limite de validez: para presiones superiores al limite elastico del material de la barra (tipicamente 1–2 GPa para aceros de alta resistencia), la onda entra en regimen plastico donde la velocidad de propagacion disminuye y el modelo elastico lineal deja de ser aplicable.
`;export{e as default};
