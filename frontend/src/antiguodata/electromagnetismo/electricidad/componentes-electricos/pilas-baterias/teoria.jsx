import { TheorySection, Concept, Formula, Important, Example, ExercisesSection } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Pilas y Baterías",
  descripcion: "Fuentes de energía portátiles: tipos, voltaje, capacidad y conexiones",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const PilasBaterias = () => {
  return (
    <>
      <TheorySection title="¿Qué son las Pilas y Baterías?">
        <Concept title="Fuentes de Energía Portátiles">
          <p>
            Las pilas y baterías son dispositivos que almacenan energía química 
            y la convierten en energía eléctrica. Son la fuente de alimentación de miles de 
            dispositivos portátiles que usamos cada día.
          </p>
          <Important>
            Diferencia técnica: Una "pila" es una sola celda electroquímica (1.5V), 
            mientras que una "batería" son varias pilas conectadas. Pero en el lenguaje cotidiano, 
            usamos ambos términos indistintamente.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Pilas">
        <Concept title="Pilas Alcalinas (No Recargables)">
          <p>Características:</p>
          <ul>
            <li>💰 Económicas al comprar, pero caras a largo plazo</li>
            <li>⚡ Voltaje: 1.5V por pila</li>
            <li>🔋 Capacidad: 2000-3000 mAh (AA)</li>
            <li>⏱️ Duración: Larga vida útil en almacenamiento</li>
            <li>❌ Un solo uso: Se desechan después de agotarse</li>
          </ul>
          <p>Tamaños comunes:</p>
          <ul>
            <li>🔋 AAA (mini): Mandos a distancia, ratones</li>
            <li>🔋 AA (estándar): Linternas, juguetes, relojes de pared</li>
            <li>🔋 C y D (grandes): Radios, linternas potentes</li>
            <li>🔋 9V (rectangular): Detectores de humo, guitarras eléctricas</li>
            <li>🔋 Botón: Relojes, calculadoras, audífonos</li>
          </ul>
        </Concept>

        <Concept title="Pilas Recargables (NiMH)">
          <p>Características:</p>
          <ul>
            <li>💚 Ecológicas: Se pueden recargar 500-1000 veces</li>
            <li>⚡ Voltaje: 1.2V por pila (ligeramente menor)</li>
            <li>🔋 Capacidad: 1900-2500 mAh (AA)</li>
            <li>💰 Económicas a largo plazo</li>
            <li>⚠️ Autodescarga: Se descargan solas con el tiempo</li>
          </ul>
          <Example title="Cálculo de ahorro">
            <p>Comparación económica:</p>
            <ul>
              <li>Pilas alcalinas: 2€ × 100 usos = 200€</li>
              <li>Pilas recargables: 10€ + (0.10€ × 100 recargas) = 20€</li>
              <li>Ahorro: 180€ 💰</li>
            </ul>
          </Example>
        </Concept>

        <Concept title="Baterías de Litio">
          <p>Características:</p>
          <ul>
            <li>📱 Uso: Móviles, portátiles, cámaras, drones</li>
            <li>⚡ Voltaje: 3.7V por celda</li>
            <li>🔋 Alta capacidad: 2000-5000 mAh</li>
            <li>⚖️ Ligeras: Mucha energía en poco peso</li>
            <li>🔥 Cuidado: Pueden ser peligrosas si se dañan</li>
          </ul>
        </Concept>

        <Concept title="Batería de Coche (12V)">
          <p>Características:</p>
          <ul>
            <li>🚗 Voltaje: 12V (6 celdas de 2V en serie)</li>
            <li>🔋 Capacidad: 40-100 Ah (¡mucho más que pilas AA!)</li>
            <li>⚡ Corriente de arranque: 300-800 A</li>
            <li>🔄 Recargable: Se recarga con el alternador</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Voltaje Nominal">
        <Concept title="¿Qué es el Voltaje?">
          <p>
            El voltaje nominal es el voltaje "normal" de funcionamiento de una pila. 
            Es como la "presión" eléctrica que proporciona.
          </p>
          <div className="tabla-simbolos" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Tipo de Pila</th>
                  <th style={{ width: '20%' }}>Voltaje</th>
                  <th style={{ width: '45%' }}>Ejemplo de Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Alcalina AA/AAA</td><td>1.5V</td><td>Mando a distancia</td></tr>
                <tr><td>Recargable AA/AAA</td><td>1.2V</td><td>Cámara digital</td></tr>
                <tr><td>Pila 9V</td><td>9V</td><td>Detector de humo</td></tr>
                <tr><td>Batería móvil</td><td>3.7V</td><td>Smartphone</td></tr>
                <tr><td>Batería coche</td><td>12V</td><td>Arranque motor</td></tr>
              </tbody>
            </table>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Capacidad (mAh)">
        <Concept title="¿Cuánto Dura una Pila?">
          <p>
            La capacidad se mide en miliamperios-hora (mAh) 
            e indica cuánta corriente puede suministrar la pila durante una hora.
          </p>
          <Formula
            expression={String.raw`\text{Duración (h)} = \frac{\text{Capacidad (mAh)}}{\text{Consumo (mA)}}`}
            calculatorId="pilas_baterias"
            definitions={definitions}
            exercises={ejercicios}
            description="Tiempo que durará una pila según su capacidad y el consumo del dispositivo"
            complementary={[
              { description: "Calcular la Capacidad necesaria", expression: String.raw`\text{Capacidad} = \text{Duración} \times \text{Consumo}` },
              { description: "Calcular el Consumo", expression: String.raw`\text{Consumo} = \frac{\text{Capacidad}}{\text{Duración}}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>Duración: Tiempo de funcionamiento (horas)</li>
            <li>Capacidad: Capacidad de la pila (mAh)</li>
            <li>Consumo: Corriente que consume el dispositivo (mA)</li>
          </ul>
          <Example title="Linterna LED">
            <p>Datos:</p>
            <ul>
              <li>Pilas AA: 2500 mAh</li>
              <li>Consumo linterna: 250 mA</li>
            </ul>
            <p>Duración: 2500 / 250 = 10 horas ⏱️</p>
          </Example>

          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>Pila AA Alcalina</h4>
              <p>2000-3000 mAh</p>
            </div>
            <div className="concepto-fundamental">
              <h4>Pila AA Recargable</h4>
              <p>1900-2500 mAh</p>
            </div>
            <div className="concepto-fundamental">
              <h4>Batería Móvil</h4>
              <p>3000-5000 mAh</p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Conexión de Pilas">
        <Concept title="Serie: Sumar Voltajes">
          <p>
            Cuando conectamos pilas en serie (una detrás de otra), 
            los voltajes se suman:
          </p>
          <Formula
            expression={String.raw`V_{total} = V_1 + V_2 + V_3 + ...`}
            calculatorId="pilas_baterias"
            definitions={definitions}
            exercises={ejercicios}
            description="El voltaje total es la suma de los voltajes individuales"
            complementary={[
              { description: "Para n pilas iguales", expression: String.raw`V_{total} = n \times V_{pila}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>V_total: Voltaje total (V)</li>
            <li>V_1, V_2, V_3: Voltajes individuales de cada pila (V)</li>
          </ul>
          <Example title="Linterna con 3 pilas">
            <p>3 pilas AA de 1.5V en serie:</p>
            <p>V_total = 1.5V + 1.5V + 1.5V = 4.5V</p>
            <p>La capacidad se mantiene igual (2500 mAh)</p>
          </Example>
        </Concept>

        <Concept title="Paralelo: Sumar Capacidades">
          <p>
            Cuando conectamos pilas en paralelo (positivo con positivo, 
            negativo con negativo), las capacidades se suman:
          </p>
          <Formula
            expression={String.raw`C_{total} = C_1 + C_2 + C_3 + ...`}
            calculatorId="pilas_baterias"
            definitions={definitions}
            exercises={ejercicios}
            description="La capacidad total es la suma de las capacidades individuales"
            complementary={[
              { description: "Para n pilas iguales", expression: String.raw`C_{total} = n \times C_{pila}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>C_total: Capacidad total (mAh)</li>
            <li>C_1, C_2, C_3: Capacidades individuales de cada pila (mAh)</li>
          </ul>
          <Example title="Power bank">
            <p>2 baterías de 3.7V y 2500 mAh en paralelo:</p>
            <p>V_total = 3.7V (se mantiene)</p>
            <p>C_total = 2500 + 2500 = 5000 mAh</p>
          </Example>
          <Important>
            ⚠️ Importante: Solo conectar en paralelo pilas idénticas 
            (mismo voltaje, misma capacidad, mismo estado de carga). Si no, pueden dañarse.
          </Important>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Cotidianas</h3>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔦</span>
            <p>Linternas: 2-4 pilas AA en serie</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📺</span>
            <p>Mandos: 2 pilas AAA</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🎮</span>
            <p>Consolas portátiles: Batería recargable</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📱</span>
            <p>Móviles: Batería Li-ion 3.7V</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">⏰</span>
            <p>Relojes de pared: 1 pila AA</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚗</span>
            <p>Coches: Batería 12V de plomo</p>
          </div>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h3>🔒 Cuidados y Seguridad</h3>
        <p>Uso Seguro de Pilas:</p>
        <ul>
          <li>❌ No mezclar: Pilas nuevas con usadas, o tipos diferentes</li>
          <li>❌ No cortocircuitar: Nunca unir directamente + y -</li>
          <li>🔥 No al fuego: Pueden explotar</li>
          <li>💧 No mojar: Pueden corroerse</li>
          <li>🌡️ Temperatura: Evitar calor extremo o frío</li>
          <li>👶 Pilas de botón: Muy peligrosas si se tragan</li>
        </ul>
        <p>Reciclaje:</p>
        <p>
          Las pilas contienen metales pesados (mercurio, cadmio, plomo) que son 
          muy contaminantes. ¡NUNCA las tires a la basura normal!
        </p>
        <ul>
          <li>♻️ Lleva las pilas usadas a puntos de reciclaje</li>
          <li>🏪 Supermercados y tiendas tienen contenedores</li>
          <li>🌍 Una sola pila puede contaminar 3000 litros de agua</li>
          <li>💚 Las pilas recargables reducen residuos en un 99%</li>
        </ul>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Las pilas y baterías almacenan energía química y la convierten en eléctrica</li>
          <li>Tipos principales: alcalinas (1.5V), recargables (1.2V), litio (3.7V), coche (12V)</li>
          <li>La capacidad (mAh) indica cuánto tiempo durará la pila</li>
          <li>En serie: se suman los voltajes. En paralelo: se suman las capacidades</li>
          <li>Siempre reciclar las pilas usadas en puntos de reciclaje</li>
        </ul>
      </div>

      <ExercisesSection 
        exercises={ejercicios} 
        groupId="pilas_baterias"
        title="Ejercicios de Práctica - Pilas y Baterías"
      />
    </>
  );
};

export default PilasBaterias;
