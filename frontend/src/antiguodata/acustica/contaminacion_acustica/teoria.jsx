import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions';

export const metadata = {
  titulo: "Contaminación Acústica",
  descripcion: "Ruido excesivo como problema ambiental, efectos en la salud pública y prevención colectiva",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const ContaminacionAcusticaTheory = ({ exercises }) => (
  <>
    {/* 1. TEORÍA PRINCIPAL */}
    <TheorySection title="¿Qué es la contaminación acústica?">
      <Concept title="Definición y enfoque">
        <p>
          La contaminación acústica es el exceso de ruido que afecta negativamente a la salud de las personas y al medio ambiente. Es uno de los problemas ambientales más importantes en las ciudades modernas, considerado por la OMS como el segundo factor ambiental más dañino después de la contaminación del aire.
        </p>
        <Important>
          💡 Diferencia clave: El sonido es cualquier vibración que podemos oír. El ruido es un sonido no deseado, molesto o perjudicial para la salud.
        </Important>
        <div className="info-box">
          <h3>🔍 Enfoque de este tema</h3>
          <ul>
            <li>Fuentes de ruido urbano e industrial</li>
            <li>Efectos en la salud pública</li>
            <li>Normativa y límites legales</li>
            <li>Soluciones a nivel ciudad y comunidad</li>
          </ul>
          <p>💡 Nota: Para aprender sobre protección auditiva personal (tapones, orejeras, cálculos individuales), consulta el tema <a href="/acustica/proteccion-auditiva" style={{color: '#3b82f6'}}>Protección Auditiva</a>.</p>
        </div>
      </Concept>
      <Concept title="Fuentes principales de ruido">
        <div className="ejemplos-grid">
          <div className="ejemplo-item"><span className="ejemplo-emoji">🚗</span><p>Tráfico: Coches, motos, camiones. Principal fuente de ruido urbano (70-85 dB).</p></div>
          <div className="ejemplo-item"><span className="ejemplo-emoji">🏗️</span><p>Construcción: Martillos neumáticos, taladros, maquinaria pesada (90-110 dB).</p></div>
          <div className="ejemplo-item"><span className="ejemplo-emoji">🏭</span><p>Industria: Fábricas, maquinaria industrial, procesos de producción (80-100 dB).</p></div>
          <div className="ejemplo-item"><span className="ejemplo-emoji">🎵</span><p>Ocio: Discotecas, conciertos, bares con música alta (95-110 dB).</p></div>
          <div className="ejemplo-item"><span className="ejemplo-emoji">✈️</span><p>Transporte aéreo: Aviones despegando y aterrizando cerca de aeropuertos (120-140 dB).</p></div>
          <div className="ejemplo-item"><span className="ejemplo-emoji">🎆</span><p>Eventos: Petardos, fuegos artificiales, eventos deportivos (120-150 dB).</p></div>
        </div>
      </Concept>
      <Concept title="Escala de decibelios y sus efectos">
        <p>El nivel de ruido se mide en decibelios (dB). Cada aumento de 10 dB representa que el sonido es 10 veces más intenso.</p>
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Nivel (dB)</th>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Ejemplo</th>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Efecto</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{backgroundColor: '#d1fae5'}}><td style={{padding: '0.5em'}}>0-30 dB</td><td style={{padding: '0.5em'}}>Susurro, biblioteca</td><td style={{padding: '0.5em'}}>✅ Seguro, silencio</td></tr>
            <tr style={{backgroundColor: '#d1fae5'}}><td style={{padding: '0.5em'}}>40-60 dB</td><td style={{padding: '0.5em'}}>Conversación normal</td><td style={{padding: '0.5em'}}>✅ Cómodo</td></tr>
            <tr style={{backgroundColor: '#fef3c7'}}><td style={{padding: '0.5em'}}>70-85 dB</td><td style={{padding: '0.5em'}}>Tráfico intenso, aspiradora</td><td style={{padding: '0.5em'}}>⚠️ Molesto, estrés</td></tr>
            <tr style={{backgroundColor: '#fed7aa'}}><td style={{padding: '0.5em'}}>90-110 dB</td><td style={{padding: '0.5em'}}>Concierto, moto, cortacésped</td><td style={{padding: '0.5em'}}>⚠️ Peligroso, daño con exposición</td></tr>
            <tr style={{backgroundColor: '#fecaca'}}><td style={{padding: '0.5em'}}>120+ dB</td><td style={{padding: '0.5em'}}>Avión, petardo, sirena</td><td style={{padding: '0.5em'}}>❌ Doloroso, daño inmediato</td></tr>
          </tbody>
        </table>
        <Important>
          ⚠️ Límite de seguridad: A partir de 85 dB durante 8 horas, el ruido puede causar daño auditivo permanente. A mayor intensidad, menor tiempo de exposición segura.
        </Important>
      </Concept>
      <Concept title="Efectos del ruido en la salud">
        <ul>
          <li>1. Pérdida auditiva
            <ul>
              <li>Temporal: Después de un concierto, oídos tapados o zumbido (se recupera en horas/días)</li>
              <li>Permanente: Exposición prolongada destruye células del oído (irreversible)</li>
              <li>Dato alarmante: 1 de cada 4 jóvenes tiene daño auditivo por auriculares</li>
            </ul>
          </li>
          <li>2. Estrés y ansiedad
            <ul>
              <li>El ruido constante aumenta el cortisol (hormona del estrés)</li>
              <li>Irritabilidad, nerviosismo, dificultad para relajarse</li>
              <li>Afecta especialmente en casa y trabajo</li>
            </ul>
          </li>
          <li>3. Problemas de sueño
            <ul>
              <li>Dificultad para conciliar el sueño</li>
              <li>Despertares nocturnos frecuentes</li>
              <li>Sueño de mala calidad (no reparador)</li>
              <li>Cansancio y falta de concentración al día siguiente</li>
            </ul>
          </li>
          <li>4. Dificultad de concentración
            <ul>
              <li>Reduce el rendimiento escolar y laboral</li>
              <li>Dificulta la lectura y el estudio</li>
              <li>Aumenta los errores en tareas complejas</li>
            </ul>
          </li>
          <li>5. Problemas cardiovasculares
            <ul>
              <li>Exposición prolongada aumenta la presión arterial</li>
              <li>Mayor riesgo de infarto y problemas cardíacos</li>
              <li>Especialmente en personas que viven cerca de carreteras o aeropuertos</li>
            </ul>
          </li>
        </ul>
      </Concept>
      <Concept title="Normativa y límites legales en España">
        <p>La legislación española establece límites máximos de ruido para proteger la salud de los ciudadanos:</p>
        <div className="info-box">
          <h3>Zonas Residenciales</h3>
          <ul>
            <li>Día (7:00-23:00): Máximo 65 dB</li>
            <li>Noche (23:00-7:00): Máximo 55 dB</li>
          </ul>
          <h3>Lugares de Trabajo</h3>
          <ul>
            <li>Exposición diaria: Máximo 85 dB durante 8 horas</li>
            <li>Pico máximo: Nunca superar 137 dB</li>
            <li>Obligación: Protección auditiva a partir de 85 dB</li>
          </ul>
          <h3>Locales de Ocio</h3>
          <ul>
            <li>Discotecas y pubs: Máximo 100 dB</li>
            <li>Obligación: Medidores de ruido visibles</li>
            <li>Zonas de descanso: Áreas con menos de 85 dB</li>
          </ul>
        </div>
        <p>Mapas de ruido: Las ciudades de más de 100,000 habitantes deben elaborar mapas de ruido que muestran las zonas más afectadas y los planes de acción para reducirlo.</p>
      </Concept>
      <Concept title="Prevención individual: ¿Qué puedes hacer tú?">
        <ul>
          <li>En casa:
            <ul>
              <li>Reducir el volumen de TV, música y videojuegos</li>
              <li>Usar auriculares con cancelación de ruido (no necesitas subir tanto el volumen)</li>
              <li>Cerrar ventanas en horas de más tráfico</li>
              <li>Usar alfombras y cortinas (absorben el sonido)</li>
            </ul>
          </li>
          <li>Con auriculares:
            <ul>
              <li>Regla 60-60: Máximo 60% de volumen, máximo 60 minutos seguidos</li>
              <li>Hacer descansos de 10 minutos cada hora</li>
              <li>Si otros oyen tu música, está demasiado alto</li>
              <li>Preferir auriculares de diadema (mejor que in-ear)</li>
            </ul>
          </li>
          <li>En eventos ruidosos:
            <ul>
              <li>Alejarse de los altavoces en conciertos</li>
              <li>Usar tapones para oídos (reducen 20-30 dB)</li>
              <li>Hacer descansos auditivos (salir fuera 10-15 min)</li>
              <li>Evitar petardos y fuegos artificiales cerca</li>
            </ul>
          </li>
          <li>En la calle:
            <ul>
              <li>Elegir rutas más tranquilas para caminar</li>
              <li>No usar auriculares en el tráfico (peligro + ruido)</li>
              <li>Respetar las zonas de silencio (hospitales, colegios)</li>
            </ul>
          </li>
        </ul>
      </Concept>
    </TheorySection>

    {/* 2. FÓRMULAS Y CÁLCULOS */}
    <TheorySection title="Cálculos de contaminación acústica">
      <Concept title="Nivel Sonoro Equivalente (Leq)">
        <p>El Leq es el nivel de ruido promedio ponderado en el tiempo. Es la métrica más utilizada para evaluar la exposición al ruido en una zona.</p>
        <Formula expression={String.raw`L_{eq} = 10 \times \log_{10}\left(\frac{1}{T} \sum (10^{L_i/10} \times t_i)\right)`} calculatorId="contaminacion-nivel-equivalente" definitions={definitions} exercises={exercises} />
        <ul>
          <li>L<sub>eq</sub>: Nivel sonoro equivalente (dB)</li>
          <li>L<sub>i</sub>: Niveles de ruido en diferentes períodos (dB)</li>
          <li>t<sub>i</sub>: Duración de cada período (horas)</li>
          <li>T: Tiempo total (horas)</li>
        </ul>
      </Concept>
      <Concept title="Reducción de Ruido por Distancia">
        <p>El nivel de ruido disminuye con la distancia a la fuente. Esta fórmula es fundamental para planificación urbana y zonificación.</p>
        <Formula expression={String.raw`L_2 = L_1 - 20 \times \log_{10}\left(\frac{r_2}{r_1}\right)`} calculatorId="contaminacion-reduccion-distancia" definitions={definitions} exercises={exercises} />
        <ul>
          <li>L<sub>2</sub>: Nivel a la distancia r<sub>2</sub> (dB)</li>
          <li>L<sub>1</sub>: Nivel a la distancia r<sub>1</sub> (dB)</li>
          <li>r<sub>1</sub>, r<sub>2</sub>: Distancias desde la fuente (m)</li>
        </ul>
      </Concept>
      <Concept title="Atenuación de Barrera Acústica">
        <p>Las barreras acústicas (muros, pantallas) reducen el ruido. Su efectividad depende de la altura, distancia y frecuencia del sonido.</p>
        <Formula expression={String.raw`A = 10 \times \log_{10}(3 + 20 \times N)`} calculatorId="contaminacion-barrera-acustica" definitions={definitions} exercises={exercises} />
        <ul>
          <li>A: Atenuación de la barrera (dB)</li>
          <li>N: Número de Fresnel (adimensional, depende de geometría y frecuencia)</li>
        </ul>
      </Concept>
      <Concept title="Suma de Niveles Sonoros">
        <p>Cuando hay múltiples fuentes de ruido, no se suman aritméticamente. Se usa suma logarítmica.</p>
        <Formula expression={String.raw`L_{total} = 10 \times \log_{10}\left(\sum 10^{L_i/10}\right)`} calculatorId="contaminacion-suma-niveles" definitions={definitions} exercises={exercises} />
        <ul>
          <li>L<sub>total</sub>: Nivel total combinado (dB)</li>
          <li>L<sub>i</sub>: Nivel de cada fuente individual (dB)</li>
        </ul>
        <Important>
          💡 Regla práctica: Dos fuentes iguales aumentan el nivel en 3 dB. Si una fuente es 10 dB mayor que otra, domina el ruido total.
        </Important>
      </Concept>
      <Concept title="Índice de Ruido Día-Noche (Ldn)">
        <p>Métrica que pondera más el ruido nocturno (+10 dB) porque somos más sensibles por la noche. Usado en normativa internacional.</p>
        <Formula expression={String.raw`L_{dn} = 10 \times \log_{10}\left(\frac{15 \times 10^{L_d/10} + 9 \times 10^{(L_n+10)/10}}{24}\right)`} calculatorId="contaminacion-indice-ruido" definitions={definitions} exercises={exercises} />
        <ul>
          <li>L<sub>dn</sub>: Índice día-noche (dB)</li>
          <li>L<sub>d</sub>: Nivel promedio diurno 7:00-23:00 (dB)</li>
          <li>L<sub>n</sub>: Nivel promedio nocturno 23:00-7:00 (dB)</li>
        </ul>
        <div className="info-box">
          <h3>Interpretación del Ldn</h3>
          <ul>
            <li>&lt; 55 dB: Nivel aceptable</li>
            <li>55-65 dB: Nivel moderado, molestias</li>
            <li>65-75 dB: Nivel alto, problemas de salud</li>
            <li>&gt; 75 dB: Nivel muy alto, riesgo grave</li>
          </ul>
        </div>
      </Concept>
    </TheorySection>

    {/* 3. APLICACIONES */}
    <div className="theory-applications-section">
      <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
      <div className="theory-subsection">
        <h3>🏥 Salud pública</h3>
        <p>La reducción del ruido ambiental disminuye la incidencia de enfermedades cardiovasculares, estrés y trastornos del sueño en la población urbana.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏙️ Urbanismo y planificación</h3>
        <p>El diseño de ciudades con zonas verdes, barreras acústicas y normativas estrictas mejora la calidad de vida y reduce la contaminación acústica.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Industria y trabajo</h3>
        <p>La implementación de límites legales y protección auditiva en fábricas y obras protege la salud de los trabajadores y reduce el absentismo laboral.</p>
      </div>
    </div>

    {/* 4. HECHOS HISTÓRICOS */}
    <div className="theory-history-section">
      <h2><span role="img" aria-label="historia">📜</span> Historia: Hechos históricos relevantes</h2>
      <div className="theory-subsection">
        <h3>🏛️ Roma Antigua</h3>
        <p>Primeras quejas por ruido urbano y regulaciones para limitar el tráfico de carros en el centro de la ciudad.</p>
      </div>
      <div className="theory-subsection">
        <h3>🏭 Revolución Industrial</h3>
        <p>El auge de la industria y el transporte generó niveles de ruido sin precedentes, lo que llevó a las primeras regulaciones en ciudades europeas.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌍 Siglo XXI</h3>
        <p>La OMS reconoce la contaminación acústica como uno de los principales problemas ambientales de salud pública en Europa.</p>
      </div>
    </div>

    {/* 5. ANÉCDOTAS Y CURIOSIDADES */}
    <div className="theory-anecdotes-section">
      <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
      <div className="theory-subsection">
        <h3>🏙️ Nueva York: La ciudad que nunca duerme</h3>
        <p>En 2020, Nueva York recibió más de 300,000 quejas por ruido. El 90% de los neoyorquinos están expuestos a niveles superiores a 70 dB durante el día.</p>
      </div>
      <div className="theory-subsection">
        <h3>🎆 San Fermines</h3>
        <p>Durante el chupinazo de San Fermines en Pamplona, se han registrado picos de 120-130 dB, equivalente a un avión despegando.</p>
      </div>
      <div className="theory-subsection">
        <h3>🌳 París en confinamiento</h3>
        <p>Durante el confinamiento de 2020, el nivel de ruido en París bajó de 75 dB a 45 dB, mejorando la calidad de sueño y reduciendo el estrés de los ciudadanos.</p>
      </div>
    </div>

    {/* 6. RESUMEN */}
    <div className="theory-summary-section">
      <h2><span>📝</span> Resumen</h2>
      <ul>
        <li>La contaminación acústica es un problema ambiental y de salud pública.</li>
        <li>Las principales fuentes son el tráfico, la industria y el ocio.</li>
        <li>El ruido excesivo causa pérdida auditiva, estrés y enfermedades cardiovasculares.</li>
        <li>Existen límites legales y soluciones colectivas e individuales.</li>
        <li>La prevención y la planificación urbana son clave para reducir el impacto.</li>
      </ul>
      <Important>
        🎯 El daño auditivo es irreversible. La prevención y la concienciación son fundamentales.
      </Important>
    </div>
  </>
);

export default ContaminacionAcusticaTheory;
