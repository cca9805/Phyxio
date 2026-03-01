import { TheorySection, Concept, Formula, Important, Example, ExercisesSection } from '../../../../../components/TheoryV2';
import { definitions } from './definitions.js';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Fusibles y Protecciones",
  descripcion: "Dispositivos de protección eléctrica: función, tipos y selección",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const Fusibles = () => {
  return (
    <>
      <TheorySection title="¿Qué es un Fusible?">
        <Concept title="El Guardián del Circuito">
          <p>
            Un fusible es un dispositivo de seguridad que protege los circuitos eléctricos 
            contra sobrecargas y cortocircuitos. Es como un "eslabón débil" diseñado para romperse y salvar el resto del circuito.
          </p>
          <Important>
            💡 Función principal: Cuando pasa demasiada corriente, el fusible se funde (se rompe) 
            y corta el circuito, evitando daños en los aparatos o incluso incendios.
          </Important>
        </Concept>

        <Concept title="¿Cómo Funciona?">
          <p>
            El fusible contiene un filamento metálico (generalmente de estaño o plomo) que se calienta 
            con el paso de la corriente. Si la corriente es excesiva:
          </p>
          <ol>
            <li>El filamento se calienta demasiado</li>
            <li>Se funde (se derrite)</li>
            <li>Se rompe el circuito</li>
            <li>Se detiene el flujo de corriente</li>
          </ol>
          <p>Es un sacrificio controlado: el fusible se destruye para salvar el resto.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Fusibles">
        <Concept title="Fusibles de Vidrio (Cilíndricos)">
          <ul>
            <li>🔍 Aspecto: Tubo de vidrio transparente con tapas metálicas</li>
            <li>⚡ Uso: Electrónica, electrodomésticos pequeños</li>
            <li>📏 Tamaños: 5×20mm, 6×32mm</li>
            <li>🔢 Corrientes: 0.5A a 10A típicamente</li>
            <li>👁️ Ventaja: Se ve si está fundido</li>
          </ul>
        </Concept>

        <Concept title="Fusibles de Cerámica">
          <ul>
            <li>🏺 Aspecto: Cilindro de cerámica blanca</li>
            <li>⚡ Uso: Instalaciones industriales, alta potencia</li>
            <li>🔥 Ventaja: Soportan altas temperaturas</li>
            <li>🔢 Corrientes: Hasta 100A o más</li>
          </ul>
        </Concept>

        <Concept title="Fusibles de Coche">
          <ul>
            <li>🚗 Aspecto: Plástico de colores con dos patillas</li>
            <li>🎨 Código de colores: Cada color indica el amperaje</li>
            <li>🔢 Corrientes: 5A, 10A, 15A, 20A, 25A, 30A</li>
            <li>📍 Ubicación: Caja de fusibles del coche</li>
          </ul>
          <div className="tabla-simbolos" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Color</th>
                  <th style={{ width: '25%' }}>Amperaje</th>
                  <th style={{ width: '45%' }}>Uso Típico</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Marrón</td><td>5A</td><td>Luces interiores</td></tr>
                <tr><td>Rojo</td><td>10A</td><td>Radio, encendedor</td></tr>
                <tr><td>Azul</td><td>15A</td><td>Limpiaparabrisas</td></tr>
                <tr><td>Amarillo</td><td>20A</td><td>Ventilador</td></tr>
                <tr><td>Transparente</td><td>25A</td><td>Aire acondicionado</td></tr>
                <tr><td>Verde</td><td>30A</td><td>Elevalunas</td></tr>
              </tbody>
            </table>
          </div>
        </Concept>

        <Concept title="Magnetotérmicos (Automáticos)">
          <p>
            Técnicamente no son fusibles, pero cumplen la misma función con una ventaja: 
            se pueden resetear sin necesidad de reemplazo.
          </p>
          <ul>
            <li>🔄 Reutilizables: Se resetean con un interruptor</li>
            <li>🏠 Uso: Cuadro eléctrico de casa (ICP, PIAs)</li>
            <li>⚡ Protección: Sobrecarga y cortocircuito</li>
            <li>💰 Coste: Más caros inicialmente, pero duran años</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Selección del Fusible Correcto">
        <Concept title="Cálculo del Amperaje">
          <p>
            Para elegir el fusible adecuado, necesitas calcular la corriente máxima 
            que consumirá el circuito:
          </p>
          <Formula
            expression={String.raw`I = \frac{P}{V}`}
            calculatorId="fusibles"
            definitions={definitions}
            exercises={ejercicios}
            description="Corriente que consume un aparato"
            complementary={[
              { description: "Calcular la Potencia (P)", expression: String.raw`P = I \cdot V` },
              { description: "Calcular el Voltaje (V)", expression: String.raw`V = \frac{P}{I}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I: Corriente (amperios, A)</li>
            <li>P: Potencia (vatios, W)</li>
            <li>V: Voltaje (voltios, V)</li>
          </ul>
          <p>
            Luego, añade un margen de seguridad del 20-25%:
          </p>
          <Formula
            expression={String.raw`I_{fusible} = I_{max} \times 1.25`}
            calculatorId="fusibles"
            definitions={definitions}
            exercises={ejercicios}
            description="Fusible recomendado con margen de seguridad"
            complementary={[
              { description: "Calcular la Corriente Máxima (I_max)", expression: String.raw`I_{max} = \frac{I_{fusible}}{1.25}` }
            ]}
          />
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I_fusible: Corriente del fusible (A)</li>
            <li>I_max: Corriente máxima del circuito (A)</li>
          </ul>
          <Example title="Secador de pelo">
            <p>Datos: Secador de 2000W a 230V</p>
            <p>Cálculo:</p>
            <ul>
              <li>I = 2000W / 230V = 8.7A</li>
              <li>I_fusible = 8.7A × 1.25 = 10.9A</li>
              <li>Fusible recomendado: 10A o 13A</li>
            </ul>
          </Example>
        </Concept>

        <Concept title="Reglas de Selección">
          <ul>
            <li>✅ Nunca usar un fusible de mayor amperaje del necesario</li>
            <li>✅ Respetar el voltaje nominal (230V en España)</li>
            <li>✅ Usar el tamaño correcto para el portafusibles</li>
            <li>❌ NUNCA puentear un fusible con alambre o papel de aluminio</li>
            <li>❌ NUNCA usar un fusible de más amperaje "porque se funde mucho"</li>
          </ul>
          <Important>
            ⚠️ PELIGRO: Usar un fusible de mayor amperaje o puentearlo puede causar 
            sobrecalentamiento, daños en los aparatos o incluso incendios.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="¿Por Qué se Funde un Fusible?">
        <Concept title="Causas Comunes">
          <ul>
            <li>⚡ Sobrecarga: Demasiados aparatos conectados a la vez</li>
            <li>⚡ Cortocircuito: Contacto directo entre fase y neutro</li>
            <li>🔌 Aparato defectuoso: Un electrodoméstico con fallo interno</li>
            <li>💧 Humedad: Agua en contactos eléctricos</li>
            <li>⏰ Envejecimiento: Fusible viejo que se debilita</li>
          </ul>
        </Concept>

        <Concept title="¿Qué Hacer si se Funde?">
          <ol>
            <li>🔌 Desconectar aparatos: Quita todos los aparatos del circuito</li>
            <li>🔍 Identificar la causa: ¿Sobrecarga? ¿Aparato defectuoso?</li>
            <li>🔧 Reemplazar el fusible: Con uno del mismo amperaje</li>
            <li>⚡ Probar: Conecta los aparatos uno a uno</li>
            <li>🔁 Si se vuelve a fundir: Hay un problema serio, llama a un electricista</li>
          </ol>
          <Important>
            ⚠️ Si un fusible se funde repetidamente, NO uses uno de mayor amperaje. 
            Hay un problema que debe ser reparado por un profesional.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Fusible vs Magnetotérmico vs Diferencial">
        <Concept title="Diferencias Clave">
          <div className="tabla-simbolos" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Dispositivo</th>
                  <th style={{ width: '30%' }}>Protege Contra</th>
                  <th style={{ width: '20%' }}>Reutilizable</th>
                  <th style={{ width: '25%' }}>Ubicación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fusible</td>
                  <td>Sobrecarga, cortocircuito</td>
                  <td>❌ No (se reemplaza)</td>
                  <td>Aparatos, coches</td>
                </tr>
                <tr>
                  <td>Magnetotérmico</td>
                  <td>Sobrecarga, cortocircuito</td>
                  <td>✅ Sí (se resetea)</td>
                  <td>Cuadro eléctrico</td>
                </tr>
                <tr>
                  <td>Diferencial</td>
                  <td>Fugas de corriente, electrocución</td>
                  <td>✅ Sí (se resetea)</td>
                  <td>Cuadro eléctrico</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>En casa: El cuadro eléctrico tiene magnetotérmicos (PIAs) y un diferencial (ID) 
          que protegen toda la instalación. Los fusibles se usan en aparatos individuales.</p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h3>🏠 Aplicaciones Cotidianas</h3>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🚗</span>
            <p>Coches: Caja de fusibles (luces, radio, etc.)</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">📺</span>
            <p>Televisores: Fusible interno de protección</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔌</span>
            <p>Regletas: Algunas tienen fusible integrado</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏭</span>
            <p>Maquinaria: Fusibles industriales de alta potencia</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔋</span>
            <p>Baterías: Fusibles en sistemas de baterías</p>
          </div>
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏠</span>
            <p>Electrodomésticos: Microondas, lavadoras</p>
          </div>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Los fusibles son dispositivos de seguridad que protegen circuitos contra sobrecargas</li>
          <li>Se funden (se rompen) cuando pasa demasiada corriente</li>
          <li>Existen varios tipos: vidrio, cerámica, coche, magnetotérmicos</li>
          <li>Para seleccionar el fusible correcto: calcular corriente y añadir 20-25% de margen</li>
          <li>NUNCA usar un fusible de mayor amperaje ni puentearlo</li>
        </ul>
      </div>

      <ExercisesSection 
        exercises={ejercicios} 
        groupId="fusibles"
        title="Ejercicios de Práctica - Fusibles"
      />
    </>
  );
};

export default Fusibles;
