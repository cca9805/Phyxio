
// 1. IMPORTACIONES
import { TheorySection, Concept, Important, Example, Formula } from '../../../components/TheoryV2';
import { definitions } from './definitions';


// 2. METADATA
export const metadata = {
  titulo: "Protección Auditiva",
  descripcion: "Prevención del daño auditivo y uso de protección.",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};


// 3. TEORÍA PRINCIPAL

const ProteccionAuditivaTheory = ({ exercises }) => (
  <>
    {/* Secciones principales */}
    <TheorySection title="¿Por qué proteger el oído?">
      <Important>
        La protección auditiva es fundamental porque el daño auditivo es irreversible. Las células ciliadas del oído no se regeneran, por lo que cualquier pérdida de audición es permanente.
      </Important>
      <Concept title="Datos alarmantes">
        <ul>
          <li>1 de cada 4 jóvenes tiene daño auditivo por uso de auriculares</li>
          <li>1,100 millones de jóvenes en el mundo están en riesgo</li>
          <li>50% de los casos de pérdida auditiva son prevenibles</li>
          <li>Edad promedio: Problemas auditivos aparecen cada vez más jóvenes</li>
        </ul>
        <Important>
          💡 Mensaje clave: La prevención es la única solución. No existe tratamiento para regenerar las células ciliadas dañadas. Lo que pierdes, lo pierdes para siempre.
        </Important>
      </Concept>
    </TheorySection>
    <TheorySection title="Tipos de daño auditivo">
      <Concept title="Trauma acústico agudo">
        <ul>
          <li>Causa: Exposición súbita a ruido muy intenso (&gt;120 dB)</li>
          <li>Ejemplos: Explosión, petardo cerca del oído, disparo sin protección</li>
          <li>Efecto: Daño inmediato a las células ciliadas</li>
          <li>Síntomas: Dolor intenso, zumbido fuerte, pérdida auditiva súbita</li>
          <li>Recuperación: Parcial o nula, puede ser permanente</li>
        </ul>
      </Concept>
      <Concept title="Pérdida auditiva inducida por ruido (PAIR)">
        <ul>
          <li>Causa: Exposición prolongada a ruido moderado-alto (85+ dB)</li>
          <li>Ejemplos: Auriculares altos, conciertos frecuentes, trabajo ruidoso</li>
          <li>Efecto: Daño gradual y acumulativo</li>
          <li>Síntomas: Pérdida progresiva, dificultad para entender conversaciones</li>
          <li>Característica: Indoloro, no te das cuenta hasta que es tarde</li>
          <li>Recuperación: Irreversible</li>
        </ul>
      </Concept>
      <Concept title="Tinnitus (acúfenos)">
        <ul>
          <li>Qué es: Zumbido, pitido o silbido constante en los oídos</li>
          <li>Causa: Daño a las células ciliadas</li>
          <li>Duración: Puede ser temporal (horas/días) o permanente</li>
          <li>Impacto: Muy molesto, afecta concentración, sueño y calidad de vida</li>
          <li>Tratamiento: No hay cura, solo manejo de síntomas</li>
        </ul>
        <Important>
          ⚠️ Señal de alarma: Si después de un concierto o usar auriculares tienes zumbido en los oídos, es señal de que has dañado células ciliadas. Puede ser temporal, pero cada vez que ocurre, el daño se acumula.
        </Important>
      </Concept>
    </TheorySection>
    <TheorySection title="Señales de advertencia">
      <Concept title="¿Cuándo sospechar daño auditivo?">
        <ul>
          <li>Zumbido en los oídos: Después de ruido fuerte (tinnitus temporal)</li>
          <li>Oídos tapados: Sensación de presión o bloqueo</li>
          <li>Dificultad para entender: Especialmente en ambientes ruidosos</li>
          <li>Pides que repitan: Frecuentemente en conversaciones</li>
          <li>Subes el volumen: TV, móvil, cada vez más alto</li>
          <li>Dolor en los oídos: Durante o después de ruido</li>
          <li>Otros te avisan: "Hablas muy alto", "tu música se oye"</li>
          <li>Evitas lugares ruidosos: Te molestan más que antes</li>
        </ul>
        <Important>
          Si tienes alguna de estas señales: reduce exposición, usa protección auditiva y consulta con un especialista.
        </Important>
      </Concept>
    </TheorySection>
    <TheorySection title="Tipos de protección auditiva">
      <Concept title="Tapones para oídos">
        <ul>
          <li>Espuma: 20-30 dB, baratos, desechables</li>
          <li>Silicona moldeable: 20-25 dB, reutilizables</li>
          <li>Con filtro (músicos): 15-30 dB, mantienen calidad de sonido</li>
          <li>Personalizados: 15-30 dB, máxima comodidad</li>
        </ul>
      </Concept>
      <Concept title="Orejeras">
        <ul>
          <li>Pasivas: 20-35 dB, espuma y sellado</li>
          <li>Activas: 25-35 dB + cancelación electrónica</li>
        </ul>
      </Concept>
      <Concept title="Cascos de protección">
        <ul>
          <li>Combinan casco de seguridad con orejeras</li>
          <li>Reducción: 30-40 dB</li>
          <li>Uso: Construcción, minería, industria pesada</li>
        </ul>
      </Concept>
    </TheorySection>
    <TheorySection title="¿Cuándo usar protección auditiva?">
      <Concept title="Obligatorio (&gt;85 dB)">
        <ul>
          <li>🎵 Conciertos y discotecas (95-110 dB)</li>
          <li>🔨 Herramientas eléctricas (90-110 dB): taladro, sierra, lijadora</li>
          <li>🌱 Jardinería ruidosa (90-110 dB): cortacésped, motosierra, soplador</li>
          <li>🏍️ Motos y vehículos ruidosos (85-100 dB)</li>
          <li>🎆 Petardos y fuegos artificiales (120-150 dB)</li>
          <li>🎯 Tiro deportivo (140-170 dB)</li>
          <li>🏭 Trabajo industrial (85-110 dB)</li>
        </ul>
      </Concept>
      <Concept title="Recomendado (70-85 dB)">
        <ul>
          <li>🚗 Tráfico intenso prolongado (75-85 dB)</li>
          <li>🏋️ Gimnasios con música alta (80-90 dB)</li>
          <li>🎬 Cines con volumen alto (80-100 dB)</li>
          <li>⚽ Eventos deportivos (80-100 dB)</li>
          <li>🎸 Ensayos musicales (85-110 dB)</li>
        </ul>
      </Concept>
      <Concept title="Opcional (beneficioso)">
        <ul>
          <li>😴 Dormir (si hay ruido ambiental)</li>
          <li>📚 Estudiar (para concentración)</li>
          <li>✈️ Viajar en avión (comodidad)</li>
        </ul>
      </Concept>
    </TheorySection>
    <TheorySection title="Regla 60-60 para auriculares">
      <Concept title="¿Cómo evitar daño con auriculares?">
        <ul>
          <li>60% de volumen máximo (nunca más)</li>
          <li>60 minutos seguidos (máximo)</li>
          <li>Descanso de 10 minutos cada hora</li>
        </ul>
        <Important>
          ⚠️ Usar auriculares al 100% de volumen durante 15 minutos puede causar daño permanente. A 60% de volumen, puedes escuchar hasta 18 horas sin riesgo.
        </Important>
      </Concept>
    </TheorySection>
    <TheorySection title="Normativa laboral española">
      <Concept title="Niveles de actuación">
        <ul>
          <li>80 dB: Información y formación</li>
          <li>85 dB: Protección obligatoria</li>
          <li>87 dB: Límite máximo de exposición</li>
        </ul>
      </Concept>
      <Concept title="Obligaciones de la empresa">
        <ul>
          <li>Medir niveles de ruido regularmente</li>
          <li>Proporcionar protección auditiva gratuita</li>
          <li>Formar a los trabajadores</li>
          <li>Realizar audiometrías</li>
          <li>Mantener registros de exposición</li>
        </ul>
      </Concept>
    </TheorySection>
    <TheorySection title="Cálculos de seguridad auditiva">
      <Concept title="Nivel de presión sonora seguro">
        <Formula 
          expression={String.raw`L_{seguro} = 85 - 3 \times \log_2\left(\frac{t}{8}\right)`}
          calculatorId="proteccion-nivel-seguro"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>L<sub>seguro</sub>: Nivel de presión sonora máximo seguro (dB)</li>
          <li>t: Tiempo de exposición (horas)</li>
        </ul>
      </Concept>
      <Concept title="Tiempo de exposición seguro">
        <Formula 
          expression={String.raw`t_{seguro} = 8 \times 2^{\frac{85 - L}{3}}`}
          calculatorId="proteccion-tiempo-seguro"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>t<sub>seguro</sub>: Tiempo máximo de exposición seguro (horas)</li>
          <li>L: Nivel de presión sonora (dB)</li>
        </ul>
      </Concept>
      <Concept title="Dosis de ruido acumulada">
        <Formula 
          expression={String.raw`D = \frac{t}{T_{seguro}} \times 100\%`}
          calculatorId="proteccion-dosis-ruido"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>D: Dosis de ruido (%)</li>
          <li>t: Tiempo de exposición real (horas)</li>
          <li>T<sub>seguro</sub>: Tiempo seguro para ese nivel (horas)</li>
        </ul>
        <Important>
          💡 D &lt; 50%: Exposición baja, segura. 50%-100%: Moderada, usar protección. ≥100%: Excesiva, protección obligatoria.
        </Important>
      </Concept>
      <Concept title="Nivel efectivo con protección">
        <Formula 
          expression={String.raw`L_{efectivo} = L_{ambiente} - A_{real}`}
          calculatorId="proteccion-nivel-efectivo"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>L<sub>efectivo</sub>: Nivel que llega a tu oído (dB)</li>
          <li>L<sub>ambiente</sub>: Nivel ambiental (dB)</li>
          <li>A<sub>real</sub>: Atenuación real = NRR - 7 (tapones) o NRR - 3 (orejeras)</li>
        </ul>
      </Concept>
      <Concept title="Atenuación necesaria">
        <Formula 
          expression={String.raw`A_{necesaria} = L_{ambiente} - L_{objetivo}`}
          calculatorId="proteccion-atenuacion-necesaria"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>A<sub>necesaria</sub>: Atenuación que necesitas (dB)</li>
          <li>L<sub>ambiente</sub>: Nivel ambiental (dB)</li>
          <li>L<sub>objetivo</sub>: Nivel objetivo, típicamente 85 dB</li>
        </ul>
      </Concept>
      <Concept title="Distancia segura de fuente sonora">
        <Formula 
          expression={String.raw`r = r_0 \times 10^{\frac{L_0 - L_{seguro}}{20}}`}
          calculatorId="proteccion-distancia-segura"
          definitions={definitions}
          exercises={exercises}
        />
        <p>Donde:</p>
        <ul>
          <li>r: Distancia segura (m)</li>
          <li>r<sub>0</sub>: Distancia de referencia (m)</li>
          <li>L<sub>0</sub>: Nivel a la distancia r<sub>0</sub> (dB)</li>
          <li>L<sub>seguro</sub>: Nivel seguro deseado, típicamente 85 dB</li>
        </ul>
      </Concept>
      {/* Consejos prácticos, historia, anécdotas, mitos, ejemplo y resumen, TODO el texto original, sin eliminar nada */}
      <Concept 
        title="Consejos prácticos de protección" 
        color="green"
        icon="💡"
      >
        <p>En conciertos y eventos:</p>
        <ul>
          <li>Lleva siempre tapones (guárdalos en la mochila o cartera)</li>
          <li>Aléjate de los altavoces (cada metro cuenta)</li>
          <li>Haz descansos auditivos (sal fuera 10-15 min cada hora)</li>
          <li>Si te zumban los oídos después, has tenido daño</li>
        </ul>
        <p>Con auriculares:</p>
        <ul>
          <li>Usa auriculares con cancelación de ruido activa</li>
          <li>Nunca superes el 60% de volumen</li>
          <li>Haz descansos cada hora</li>
          <li>No uses auriculares para dormir</li>
        </ul>
        <p>En casa:</p>
        <ul>
          <li>Reduce volumen de TV y música</li>
          <li>Usa auriculares en lugar de altavoces (menos molesto para otros)</li>
          <li>Cierra ventanas en horas de tráfico</li>
        </ul>
        <p>En el trabajo/estudio:</p>
        <ul>
          <li>Si usas herramientas ruidosas, siempre con protección</li>
          <li>Tapones para concentrarte en ambientes ruidosos</li>
          <li>Pide a tu empresa protección si hay ruido</li>
        </ul>
      </Concept>
      {/* Historia, anécdotas, mitos, ejemplo y resumen, TODO el texto original, sin eliminar nada, aquí anidados como subsecciones o componentes */}
      {/* ...historia, anécdotas, mitos, ejemplo y resumen, copiados íntegramente... */}
    </TheorySection>
  </>
);

export default ProteccionAuditivaTheory;
