import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions';

export const metadata = {
  titulo: "El Oído Humano",
  descripcion: "Anatomía, funcionamiento y proceso de audición",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ["ESO"]
};

const OidoHumanoTheory = ({ exercises }) => (
  <>
    {/* 3. TEORÍA PRINCIPAL */}
    <TheorySection title="El oído humano: anatomía y funcionamiento">
      <Concept title="El oído: nuestro receptor de sonidos">
        <p>
          El oído es el órgano sensorial que nos permite percibir los sonidos. 
          Es un sistema complejo y delicado que convierte las ondas sonoras (vibraciones del aire) 
          en señales eléctricas que el cerebro puede interpretar.
        </p>
        <Important>
          💡 Proceso completo: Onda sonora → Vibración mecánica → Movimiento de líquido → Señal eléctrica → Interpretación cerebral
        </Important>
      </Concept>
      <Concept title="Las tres partes del oído">
        <p>
          El oído se divide en tres partes principales, cada una con funciones específicas:
        </p>
        <ul>
          <li>👂 Oído Externo: Capta y dirige el sonido hacia el interior. Incluye la oreja (pabellón auditivo) y el conducto auditivo.</li>
          <li>🥁 Oído Medio: Amplifica las vibraciones sonoras. Contiene el tímpano y los tres huesos más pequeños del cuerpo humano.</li>
          <li>🐚 Oído Interno: Convierte las vibraciones en señales eléctricas. Contiene la cóclea (caracol) y el nervio auditivo.</li>
        </ul>
      </Concept>
      <Concept title="Oído Externo: Captando el sonido">
        <p>1. Pabellón auditivo (oreja)</p>
        <ul>
          <li>Función: Capta las ondas sonoras del ambiente</li>
          <li>Forma: Su diseño en espiral ayuda a dirigir el sonido hacia dentro</li>
          <li>Localización: Las dos orejas permiten saber de dónde viene el sonido</li>
          <li>Curiosidad: Algunos animales pueden mover las orejas para captar mejor el sonido</li>
        </ul>
        <p>2. Conducto auditivo</p>
        <ul>
          <li>Longitud: Unos 2.5 cm de largo</li>
          <li>Función: Canal que lleva el sonido hasta el tímpano</li>
          <li>Amplificación: Su forma amplifica las frecuencias del habla humana (2000-5000 Hz)</li>
          <li>Protección: Produce cerumen (cera) que protege de polvo, bacterias e insectos</li>
        </ul>
        <Important>
          ⚠️ Cuidado: Nunca uses bastoncillos de algodón para limpiar el oído. Empujan la cera hacia dentro y pueden dañar el tímpano. El oído se limpia solo.
        </Important>
      </Concept>
      <Concept title="Oído Medio: Amplificando las vibraciones">
        <p>1. Tímpano (membrana timpánica)</p>
        <ul>
          <li>Qué es: Membrana fina y elástica que separa el oído externo del medio</li>
          <li>Función: Vibra cuando las ondas sonoras llegan</li>
          <li>Tamaño: Unos 8-10 mm de diámetro</li>
          <li>Sensibilidad: Puede detectar vibraciones de menos de 1 nanómetro</li>
        </ul>
        <p>2. Cadena de huesecillos</p>
        <p>Tres huesos diminutos que transmiten y amplifican las vibraciones:</p>
        <ul>
          <li>🔨 Martillo: Conectado al tímpano, recibe las vibraciones</li>
          <li>⚙️ Yunque: En el medio, transmite las vibraciones</li>
          <li>🏇 Estribo: El más pequeño (3 mm), conecta con el oído interno</li>
        </ul>
        <p>Función conjunta: Amplifican el sonido unas 20 veces</p>
        <p>3. Trompa de Eustaquio</p>
        <ul>
          <li>Qué es: Tubo que conecta el oído medio con la garganta</li>
          <li>Función: Equilibra la presión del aire a ambos lados del tímpano</li>
          <li>Experiencia: Cuando "se te tapan los oídos" en un avión o montaña</li>
          <li>Solución: Bostezar o tragar abre la trompa y equilibra la presión</li>
        </ul>
      </Concept>
      <Concept title="Oído Interno: Convirtiendo en señales eléctricas">
        <p>1. Cóclea (caracol)</p>
        <ul>
          <li>Forma: Espiral como un caracol, 2.5 vueltas completas</li>
          <li>Tamaño: Del tamaño de un guisante</li>
          <li>Interior: Llena de líquido (perilinfa y endolinfa)</li>
          <li>Función: Las vibraciones del estribo crean ondas en el líquido</li>
        </ul>
        <p>2. Células ciliadas (las más importantes)</p>
        <ul>
          <li>Cantidad: Unas 15,000 células en cada oído</li>
          <li>Aspecto: Tienen "pelitos" (cilios) que se mueven con el líquido</li>
          <li>Función: Cuando se mueven, generan señales eléctricas</li>
          <li>Distribución: Diferentes zonas detectan diferentes frecuencias:
            <ul>
              <li>Base de la cóclea: sonidos agudos (alta frecuencia)</li>
              <li>Punta de la cóclea: sonidos graves (baja frecuencia)</li>
            </ul>
          </li>
        </ul>
        <Important>
          ⚠️ CRÍTICO: Las células ciliadas NO se regeneran. Si se dañan por ruido excesivo, el daño es permanente e irreversible. Por eso es tan importante proteger el oído.
        </Important>
        <p>3. Nervio auditivo</p>
        <ul>
          <li>Función: Transmite las señales eléctricas al cerebro</li>
          <li>Velocidad: Las señales viajan a unos 120 m/s</li>
          <li>Información: Lleva datos sobre intensidad, frecuencia y dirección del sonido</li>
        </ul>
      </Concept>
      <Concept title="El proceso de audición paso a paso">
        <ol>
          <li>Captación: La oreja capta las ondas sonoras del aire</li>
          <li>Conducción: El sonido viaja por el conducto auditivo</li>
          <li>Vibración del tímpano: Las ondas hacen vibrar la membrana timpánica</li>
          <li>Amplificación: Los tres huesecillos (martillo, yunque, estribo) amplifican las vibraciones 20 veces</li>
          <li>Transmisión al líquido: El estribo golpea la ventana oval de la cóclea, creando ondas en el líquido interior</li>
          <li>Movimiento de células: Las ondas en el líquido mueven los cilios de las células ciliadas</li>
          <li>Generación de señal: Las células ciliadas convierten el movimiento mecánico en señales eléctricas</li>
          <li>Transmisión al cerebro: El nervio auditivo lleva las señales al cerebro</li>
          <li>Interpretación: El cerebro procesa las señales y las interpreta como sonido (música, voz, ruido, etc.)</li>
        </ol>
        <p>Tiempo total: Todo este proceso ocurre en milisegundos. ¡Tu cerebro procesa sonidos casi instantáneamente!</p>
      </Concept>
    </TheorySection>
    {/* ...existing code... (mantener el resto de las secciones como están, pero envolver resumen en TheorySection al final y ajustar export) */}
    <TheorySection>
      {/* Rango audible */}
      <Concept 
        title="Rango audible humano" 
        color="blue"
        icon="📊"
      >
        <p>Frecuencias que podemos oír:</p>
        <ul>
          <li>Rango general: 20 Hz - 20,000 Hz (20 kHz)</li>
          <li>Máxima sensibilidad: 2,000-5,000 Hz (rango de la voz humana)</li>
          <li>Por debajo de 20 Hz: Infrasonidos (no audibles, pero algunos animales sí)</li>
          <li>Por encima de 20 kHz: Ultrasonidos (no audibles, murciélagos y delfines sí)</li>
        </ul>

        <p>Cambios con la edad:</p>
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Edad</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Rango Audible</th>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5em'}}>Niños (0-12 años)</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>20 Hz - 20,000 Hz</td>
              <td style={{padding: '0.5em'}}>Audición perfecta</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Adolescentes (13-19)</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>20 Hz - 18,000 Hz</td>
              <td style={{padding: '0.5em'}}>Pérdida leve de agudos</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Adultos (20-40)</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>20 Hz - 15,000 Hz</td>
              <td style={{padding: '0.5em'}}>Pérdida gradual</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Mayores (60+)</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>20 Hz - 10,000 Hz</td>
              <td style={{padding: '0.5em'}}>Presbiacusia (normal)</td>
            </tr>
          </tbody>
        </table>

        <p>Nota: La exposición a ruido excesivo acelera esta pérdida. 
        Jóvenes con daño auditivo pueden tener audición de personas mayores.</p>

        <Formula 
          expression={String.raw`f_{max} = 20000 - (\text{edad} \times 160)`}
          calculatorId="oido-rango-audible"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>f<sub>max</sub>: Frecuencia máxima audible (Hz)</li>
          <li>edad: Edad de la persona (años)</li>
        </ul>
      </Concept>

      {/* Localización del sonido */}
      <Concept 
        title="¿Cómo localizamos de dónde viene un sonido?" 
        color="teal"
        icon="🎯"
      >
        <p>
          Tener dos oídos no es casualidad. Nos permite localizar la fuente 
          del sonido en el espacio tridimensional.
        </p>

        <p>Tres mecanismos principales:</p>

        <p>1. Diferencia de tiempo (ITD)</p>
        <ul>
          <li>El sonido llega primero al oído más cercano a la fuente</li>
          <li>Diferencia de tiempo: microsegundos</li>
          <li>El cerebro calcula la dirección por esta diferencia</li>
          <li>Funciona mejor con sonidos graves</li>
        </ul>

        <p>2. Diferencia de intensidad (ILD)</p>
        <ul>
          <li>El sonido es más fuerte en el oído más cercano</li>
          <li>La cabeza hace "sombra" al sonido</li>
          <li>Funciona mejor con sonidos agudos</li>
        </ul>

        <p>3. Forma de la oreja</p>
        <ul>
          <li>Los pliegues de la oreja modifican el sonido según la dirección</li>
          <li>Ayuda a distinguir si el sonido viene de arriba, abajo, delante o detrás</li>
        </ul>

        <p>Experimento: Cierra los ojos y pide a alguien que haga un sonido 
        en diferentes posiciones. ¡Podrás señalar de dónde viene con sorprendente precisión!</p>

        <Formula 
          expression={String.raw`ITD = \frac{d \times \sin(\theta)}{v}`}
          calculatorId="oido-itd"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>ITD: Diferencia de tiempo interaural (μs)</li>
          <li>d: Distancia entre oídos (cm, típicamente 17-23 cm)</li>
          <li>θ: Ángulo de la fuente sonora respecto al frente (°)</li>
          <li>v: Velocidad del sonido (0.0343 cm/μs a 20°C)</li>
        </ul>

        <Formula 
          expression={String.raw`ILD = 20 \times \log_{10}\left(\frac{I_1}{I_2}\right)`}
          calculatorId="oido-ild"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>ILD: Diferencia de nivel interaural (dB)</li>
          <li>I₁: Intensidad en el oído más cercano (W/m²)</li>
          <li>I₂: Intensidad en el oído más lejano (W/m²)</li>
        </ul>

        <Formula 
          expression={String.raw`\Delta\theta = \frac{v \times \Delta t}{d \times \cos(\theta)} \times \frac{180}{\pi}`}
          calculatorId="oido-precision-angular"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Δθ: Precisión angular de localización (°)</li>
          <li>v: Velocidad del sonido (343 m/s a 20°C)</li>
          <li>Δt: Precisión temporal del oído (μs, típicamente 10-20 μs)</li>
          <li>d: Distancia entre oídos (m, típicamente 0.20 m)</li>
          <li>θ: Ángulo de la fuente sonora (°)</li>
        </ul>
      </Concept>

      {/* Protección auditiva */}
      <Concept 
        title="Protección auditiva: niveles y tiempos seguros" 
        color="red"
        icon="🛡️"
      >
        <p>
          Las células ciliadas NO se regeneran. Una vez dañadas, el daño es 
          permanente e irreversible. Por eso es crucial conocer los niveles 
          y tiempos de exposición seguros.
        </p>

        <p>Regla de los 3 dB:</p>
        <ul>
          <li>Por cada 3 dB de aumento, el tiempo seguro se reduce a la mitad</li>
          <li>85 dB → 8 horas seguras</li>
          <li>88 dB → 4 horas seguras</li>
          <li>91 dB → 2 horas seguras</li>
          <li>94 dB → 1 hora segura</li>
          <li>100 dB → 15 minutos seguros</li>
        </ul>

        <Formula 
          expression={String.raw`L_{seguro} = 85 - 3 \times \log_2\left(\frac{t}{8}\right)`}
          calculatorId="oido-nivel-seguro"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>L<sub>seguro</sub>: Nivel de presión sonora máximo seguro (dB)</li>
          <li>t: Tiempo de exposición (horas)</li>
        </ul>

        <Formula 
          expression={String.raw`t_{seguro} = 8 \times 2^{\frac{85 - L}{3}}`}
          calculatorId="oido-tiempo-seguro"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>t<sub>seguro</sub>: Tiempo máximo de exposición seguro (horas)</li>
          <li>L: Nivel de presión sonora (dB)</li>
        </ul>

        <Formula 
          expression={String.raw`r = r_0 \times 10^{\frac{L_0 - 120}{20}}`}
          calculatorId="oido-umbral-dolor"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>r: Distancia al umbral de dolor (m)</li>
          <li>r₀: Distancia de referencia (m)</li>
          <li>L₀: Nivel de presión sonora a la distancia r₀ (dB)</li>
        </ul>

        <div className="info-box">
          <h3>Niveles de sonido comunes</h3>
          <ul>
            <li>30 dB: Susurro, biblioteca</li>
            <li>60 dB: Conversación normal</li>
            <li>85 dB: Tráfico intenso, límite seguro para 8h</li>
            <li>100 dB: Discoteca, concierto, solo 15 min seguros</li>
            <li>110 dB: Concierto de rock, motosierra</li>
            <li>120 dB: Umbral de dolor, avión despegando</li>
            <li>140 dB: Petardo cerca, daño inmediato</li>
          </ul>
        </div>

        <Important>
          <p>
            ⚠️ Señales de daño auditivo:
          </p>
          <ul>
            <li>Zumbido en los oídos (tinnitus) después de exposición a ruido</li>
            <li>Sensación de oídos "tapados" o "amortiguados"</li>
            <li>Dificultad para entender conversaciones en ambientes ruidosos</li>
            <li>Necesidad de subir el volumen de TV o música</li>
          </ul>
          <p>
            Si experimentas estos síntomas, reduce la exposición inmediatamente 
            y consulta a un especialista.
          </p>
        </Important>

        <Formula 
          expression={String.raw`N_{dañadas} = N_{total} \times \left(1 - 10^{-\frac{pérdida}{20}}\right)`}
          calculatorId="oido-celulas-danadas"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>N<sub>dañadas</sub>: Número estimado de células ciliadas dañadas</li>
          <li>N<sub>total</sub>: Número total de células ciliadas (típicamente 15,000)</li>
          <li>pérdida: Pérdida auditiva medida en audiometría (dB)</li>
        </ul>
      </Concept>

      {/* Aspectos cuantitativos */}
      <Concept 
        title="Aspectos cuantitativos del oído" 
        color="teal"
        icon="📐"
      >
        <p>Resonancia del conducto auditivo:</p>
        <p>
          El conducto auditivo actúa como un tubo cerrado en un extremo (cerrado por el tímpano). 
          Esto crea una resonancia que amplifica naturalmente las frecuencias del habla humana.
        </p>

        <Formula 
          expression={String.raw`f_{res} = \frac{v}{4 \times L}`}
          calculatorId="oido-resonancia"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>f<sub>res</sub>: Frecuencia de resonancia (Hz)</li>
          <li>v: Velocidad del sonido (343 m/s a 20°C)</li>
          <li>L: Longitud del conducto auditivo (m, típicamente 0.025 m)</li>
        </ul>

        <p>Amplificación de los huesecillos:</p>
        <p>
          Los tres huesecillos del oído medio (martillo, yunque y estribo) forman un sistema 
          de palancas que amplifica la presión sonora. Esta amplificación es necesaria para 
          transferir eficientemente la energía del aire al líquido de la cóclea.
        </p>

        <Formula 
          expression={String.raw`G = \frac{A_{tímpano}}{A_{ventana}} \times L_{palanca}`}
          calculatorId="oido-amplificacion"
          definitions={definitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>G: Ganancia de amplificación (veces)</li>
          <li>A<sub>tímpano</sub>: Área del tímpano (mm², típicamente 55 mm²)</li>
          <li>A<sub>ventana</sub>: Área de la ventana oval (mm², típicamente 3.2 mm²)</li>
          <li>L<sub>palanca</sub>: Ventaja mecánica de la palanca (adimensional, típicamente 1.3)</li>
        </ul>

        <div className="destacado">
          <p>
            💡 Diseño perfecto: El oído humano combina amplificación mecánica 
            (huesecillos), resonancia acústica (conducto) y transducción electroquímica 
            (células ciliadas) para detectar sonidos desde 0 dB (umbral de audición) hasta 
            120 dB (umbral de dolor). ¡Un rango de 1 billón de veces en intensidad!
          </p>
        </div>
      </Concept>

      {/* Curiosidades */}
      <Concept 
        title="Datos curiosos sobre el oído" 
        color="orange"
        icon="🤔"
      >
        <ul>
          <li>
            Nunca descansa: El oído funciona 24 horas al día, 7 días a la semana, 
            incluso mientras duermes.
          </li>
          <li>
            400,000 sonidos: Podemos distinguir hasta 400,000 sonidos diferentes.
          </li>
          <li>
            El hueso más pequeño: El estribo mide solo 3 mm, más pequeño que un grano de arroz.
          </li>
          <li>
            Movimiento nanométrico: Las células ciliadas detectan movimientos 
            de 1 nanómetro (0.000001 mm), ¡más pequeño que el diámetro de un átomo!
          </li>
          <li>
            Equilibrio: El oído interno también controla el equilibrio (canales semicirculares).
          </li>
          <li>
            Autolimpieza: El cerumen se mueve solo hacia fuera, limpiando el conducto.
          </li>
          <li>
            Único para cada persona: La forma del oído es única, como las huellas dactilares.
          </li>
          <li>
            Crecimiento: Las orejas y la nariz nunca dejan de crecer (muy lentamente).
          </li>
        </ul>
      </Concept>
    </TheorySection>

    
    <div className="theory-applications-section" title="Aplicaciones en la vida real" type="applications">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🏥 Medicina y Salud</h3>
        <ul>
          <li>
            Audífonos digitales: Usan modelos psicoacústicos para amplificar 
            selectivamente las frecuencias que el usuario ha perdido, compensando la presbiacusia 
            o daño auditivo.
          </li>
          <li>
            Implantes cocleares: Dispositivos electrónicos que estimulan 
            directamente el nervio auditivo, permitiendo a personas sordas profundas escuchar. 
            Más de 700,000 personas en el mundo los usan.
          </li>
          <li>
            Audiometrías: Pruebas que miden el rango audible y detectan pérdida 
            auditiva temprana. Esenciales para diagnóstico y prevención.
          </li>
          <li>
            Protección laboral: Normativas de seguridad basadas en los límites 
            de exposición (85 dB por 8 horas) protegen a trabajadores en industrias ruidosas.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎵 Música y Entretenimiento</h3>
        <ul>
          <li>
            Audio 3D y espacial: Tecnologías como Dolby Atmos y Apple Spatial 
            Audio usan ITD e ILD para crear sensación de sonido tridimensional en auriculares.
          </li>
          <li>
            Cancelación activa de ruido: Auriculares que generan ondas inversas 
            para cancelar ruido ambiental, protegiendo el oído en ambientes ruidosos.
          </li>
          <li>
            Ecualización personalizada: Apps que ajustan la música según tu 
            perfil auditivo individual, compensando pérdidas específicas de frecuencia.
          </li>
          <li>
            Monitores in-ear para músicos: Protegen la audición de músicos 
            profesionales mientras les permiten escuchar su mezcla perfectamente.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔬 Tecnología y Comunicación</h3>
        <ul>
          <li>
            Telefonía: Los códecs de voz (como Opus) eliminan frecuencias que 
            el oído no necesita para entender el habla, reduciendo el ancho de banda necesario.
          </li>
          <li>
            Asistentes de voz: Alexa, Siri y Google Assistant usan modelos de 
            localización de sonido (ITD/ILD) para detectar de dónde viene tu voz en una habitación.
          </li>
          <li>
            Videoconferencias: Zoom y Teams usan supresión de eco y ruido basada 
            en cómo el oído humano procesa el sonido.
          </li>
          <li>
            Realidad virtual: Los cascos VR usan HRTF (Head-Related Transfer 
            Function) personalizada para crear audio 3D realista.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🏗️ Arquitectura y Diseño</h3>
        <ul>
          <li>
            Diseño de salas de concierto: Se optimizan para el rango de 
            frecuencias más sensible del oído humano (2000-5000 Hz).
          </li>
          <li>
            Aislamiento acústico: Edificios diseñados para bloquear frecuencias 
            molestas mientras permiten comunicación clara.
          </li>
          <li>
            Alarmas de emergencia: Diseñadas en frecuencias de máxima sensibilidad 
            auditiva (~3000 Hz) para asegurar que se escuchen.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🚗 Automoción</h3>
        <ul>
          <li>
            Sistemas de alerta: Coches eléctricos emiten sonidos artificiales 
            en frecuencias audibles para peatones (especialmente importantes para personas con 
            visión reducida).
          </li>
          <li>
            Reducción de ruido en cabina: Materiales y diseños que bloquean 
            frecuencias molestas del motor y carretera.
          </li>
          <li>
            Sistemas de audio premium: Ajustados según la acústica del habitáculo 
            y la posición de los pasajeros.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🎮 Videojuegos</h3>
        <ul>
          <li>
            Audio posicional: Los jugadores pueden localizar enemigos por el 
            sonido usando las mismas claves (ITD/ILD) que usa el oído humano.
          </li>
          <li>
            Diseño de efectos de sonido: Optimizados para las frecuencias más 
            perceptibles, creando experiencias inmersivas.
          </li>
        </ul>
      </div>
      <div className="theory-subsection">
        <h3>🔐 Seguridad y Defensa</h3>
        <ul>
          <li>
            Sistemas de detección acústica: Detectan disparos o explosiones 
            usando arrays de micrófonos que imitan la localización binaural humana.
          </li>
          <li>
            Protección auditiva militar: Tapones que bloquean ruidos fuertes 
            (disparos) pero permiten comunicación normal.
          </li>
        </ul>
      </div>
      <div className="theory-section-highlight">
        <p>
          💡 Dato clave: Prácticamente toda la tecnología de audio moderna 
          (desde MP3 hasta Bluetooth, desde Spotify hasta Zoom) está optimizada basándose en 
          cómo funciona el oído humano. Entender la audición no es solo biología, ¡es la base 
          de la revolución digital del sonido!
        </p>
      </div>
    </div>
              
    <div className="theory-history-section" title="Historia: Descubriendo el oído" type="history">
      <h2><span role="img" aria-label="historia">📜</span> Historia: Descubriendo el oído</h2>
      <div className="theory-subsection">
        <h3>🔬 Alfonso Corti (1822-1876)</h3>
        <p>
          El anatomista italiano Alfonso Corti descubrió en 1851 el órgano de Corti, 
          la estructura dentro de la cóclea que contiene las células ciliadas. Usando microscopios 
          primitivos, identificó estas células como las responsables de convertir las vibraciones 
          en señales nerviosas.
        </p>
        <p>
          Curiosidad: Corti abandonó la medicina a los 33 años por problemas de salud 
          y se retiró a su villa en Italia. Su descubrimiento revolucionó la comprensión de la audición, 
          pero él nunca supo el impacto que tendría.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎵 Georg von Békésy (1899-1972)</h3>
        <p>
          El físico húngaro Georg von Békésy ganó el Premio Nobel de Medicina en 1961 
          por descubrir cómo funciona la cóclea. Demostró que diferentes frecuencias crean ondas que 
          alcanzan su máximo en diferentes posiciones de la membrana basilar.
        </p>
        <p>
          Experimento ingenioso: Békésy construyó modelos mecánicos gigantes de la 
          cóclea para visualizar las ondas. También experimentó con su propio oído, perforando su 
          tímpano para insertar instrumentos de medición. ¡Dedicación extrema a la ciencia!
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔊 Harvey Fletcher (1884-1981)</h3>
        <p>
          Conocido como el "padre de la acústica estereofónica", Fletcher trabajó en Bell Labs 
          estudiando la percepción auditiva humana. Desarrolló los primeros audífonos 
          eléctricos en la década de 1920.
        </p>
        <p>
          Legado: Sus investigaciones sobre el rango dinámico del oído y el 
          enmascaramiento de frecuencias fueron fundamentales para el desarrollo de la telefonía, 
          la radio y la música grabada.
        </p>
      </div>
    </div>

    <div className="theory-anecdotes-section" title="Anécdotas y casos fascinantes" type="anecdotes">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3>🎸 Pete Townshend y The Who</h3>
        <p>
          El guitarrista de The Who, Pete Townshend, sufre tinnitus severo y pérdida 
          auditiva por décadas de exposición a música amplificada. En una entrevista 
          dijo: "Tengo el sonido de un jet en mis oídos las 24 horas del día".
        </p>
        <p>
          Lección: Townshend ahora es un activista de la protección auditiva 
          y advierte a los jóvenes músicos: "Usen tapones. Yo no lo hice y ahora pago el precio 
          cada segundo de mi vida".
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎧 El caso de Evelyn Glennie</h3>
        <p>
          Evelyn Glennie es una percusionista profesional sorda. Perdió la 
          audición a los 12 años, pero desarrolló la capacidad de "sentir" la música a través 
          de las vibraciones en su cuerpo.
        </p>
        <p>
          Fascinante: Toca descalza en el escenario para sentir las vibraciones 
          del suelo. Demuestra que la percepción del sonido no depende solo del oído, sino de 
          todo el sistema nervioso.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🦇 El "sonar humano"</h3>
        <p>
          Daniel Kish, ciego desde bebé, desarrolló la ecolocalización humana. 
          Hace chasquidos con la lengua y escucha los ecos para "ver" su entorno, similar a los 
          murciélagos.
        </p>
        <p>
          Increíble: Puede andar en bicicleta, hacer senderismo y navegar por 
          ciudades usando solo el sonido. Estudios de resonancia magnética muestran que su 
          corteza visual se activa cuando procesa los ecos. ¡Su cerebro "ve" con los oídos!
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🎵 El "oído absoluto"</h3>
        <p>
          Solo 1 de cada 10,000 personas tiene oído absoluto: la capacidad de 
          identificar o producir una nota musical sin referencia. Mozart, Beethoven y Ella 
          Fitzgerald lo tenían.
        </p>
        <p>
          Misterio: Es mucho más común en personas que hablan idiomas tonales 
          (como el mandarín o el vietnamita), donde el tono de la voz cambia el significado de 
          las palabras. Esto sugiere que el oído absoluto puede ser una habilidad aprendida en 
          la infancia temprana.
        </p>
      </div>
      <div className="theory-subsection">
        <h3>🔇 El silencio más silencioso</h3>
        <p>
          La cámara anecoica de Microsoft en Redmond, Washington, es el lugar 
          más silencioso del mundo: -20.6 dB. Es tan silencioso que puedes escuchar tu corazón 
          latir, tu sangre fluir y tus huesos crujir.
        </p>
        <p>
          Efecto psicológico: La mayoría de las personas no pueden estar más 
          de 45 minutos dentro. El cerebro, acostumbrado al ruido constante, empieza a generar 
          alucinaciones auditivas para "llenar" el silencio. ¡Nuestro oído nunca descansa!
        </p>
      </div>
    </div>


    {/* 9. RESUMEN */}
    <TheorySection className="theory-summary-section">
      <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
      <ul>
        <li>El oído tiene tres partes: externo, medio e interno</li>
        <li>Oído externo: Oreja y conducto auditivo (capta y resuena a ~3400 Hz)</li>
        <li>Oído medio: Tímpano y 3 huesecillos (amplifica ~22 veces)</li>
        <li>Oído interno: Cóclea con 15,000 células ciliadas (convierte a señal eléctrica)</li>
        <li>Células ciliadas NO se regeneran: Daño permanente e irreversible</li>
        <li>Rango audible: 20 Hz - 20,000 Hz (disminuye ~160 Hz por año de edad)</li>
        <li>Localización: ITD (diferencia de tiempo) e ILD (diferencia de intensidad)</li>
        <li>Protección: 85 dB máximo para 8h, 100 dB solo 15 minutos</li>
        <li>Proceso completo: Onda → Vibración → Líquido → Señal → Cerebro</li>
      </ul>
      <Important>
        🎯 Recuerda: El oído es un órgano delicado y complejo. Las células ciliadas no se regeneran, por lo que cualquier daño es permanente. Proteger tu audición ahora es protegerla para toda la vida.
      </Important>
    </TheorySection>
  </>
);

export default OidoHumanoTheory;

