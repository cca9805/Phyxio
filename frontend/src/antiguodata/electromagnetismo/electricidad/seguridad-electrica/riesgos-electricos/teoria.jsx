import { TheorySection, Concept, Important, Example, ExercisesSection } from '../../../../../components/TheoryV2';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Riesgos Eléctricos",
  descripcion: "Peligros de la electricidad: electrocución, quemaduras e incendios",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const RiesgosElectricos = () => {
  return (
    <>
      <Concept title="Los 4 peligros principales de la electricidad" color="red" icon="⚡">
        <div className="conceptos-fundamentales">
          <div className="concepto-fundamental">
            <h4>⚡ Electrocución</h4>
            <p>Paso de corriente eléctrica por el cuerpo. Puede causar desde cosquilleos hasta paro cardíaco y muerte.</p>
            <ul>
              <li><strong>Umbral de percepción:</strong> 1 mA</li>
              <li><strong>Umbral de dolor:</strong> 5-10 mA</li>
              <li><strong>Umbral letal:</strong> 30-75 mA</li>
            </ul>
          </div>

          <div className="concepto-fundamental">
            <h4>🔥 Quemaduras</h4>
            <p>La corriente genera calor al pasar por el cuerpo. Puede causar quemaduras internas y externas graves.</p>
            <ul>
              <li>Quemaduras en puntos de entrada/salida</li>
              <li>Daño a órganos internos</li>
              <li>Pueden ser más graves de lo que parecen</li>
            </ul>
          </div>

          <div className="concepto-fundamental">
            <h4>🔥 Incendios</h4>
            <p>Cortocircuitos, sobrecargas o chispas pueden iniciar incendios devastadores.</p>
            <ul>
              <li>Cables sobrecalentados</li>
              <li>Cortocircuitos en instalaciones</li>
              <li>Aparatos defectuosos</li>
            </ul>
          </div>

          <div className="concepto-fundamental">
            <h4>💥 Explosiones</h4>
            <p>Chispas eléctricas pueden encender gases o vapores inflamables.</p>
            <ul>
              <li>Peligro en cocinas (gas)</li>
              <li>Garajes (gasolina)</li>
              <li>Ambientes con vapores</li>
            </ul>
          </div>
        </div>
      </Concept>

      <TheorySection title="Factores de Riesgo">
        <Concept title="¿Qué hace que la electricidad sea más peligrosa?">
          <div className="info-box">
            <h3>Factores que aumentan el riesgo</h3>
            <ul>
              <li>Humedad: Reduce la resistencia del cuerpo x10-100</li>
              <li>Voltaje alto: 230V doméstico puede ser mortal</li>
              <li>Contacto prolongado: Más tiempo = más daño</li>
              <li>Trayectoria: Mano-mano o mano-pie atraviesa el corazón</li>
              <li>Frecuencia: 50 Hz (red eléctrica) es especialmente peligrosa</li>
            </ul>
          </div>

          <Example title="¿Por qué el agua es tan peligrosa?" icon="💧">
            <p>El cuerpo humano seco tiene una resistencia de 100,000 Ω. Con las manos mojadas, baja a 1,000 Ω.</p>
            <ul>
              <li>Seco: I = 230V / 100,000Ω = 2.3 mA (cosquilleo)</li>
              <li>Mojado: I = 230V / 1,000Ω = 230 mA (MORTAL)</li>
            </ul>
            <p>Conclusión: El agua multiplica el riesgo por 100.</p>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Situaciones de Alto Riesgo">
        <Concept title="Dónde y cuándo hay más peligro" color="orange" icon="⚠️">
          <div className="warning-box">
            <h3>🚨 Situaciones de máximo peligro</h3>
            <ul>
              <li>Baño: Agua + electricidad = combinación mortal</li>
              <li>Cocina: Humedad, agua y muchos aparatos</li>
              <li>Exterior: Lluvia, charcos, tierra mojada</li>
              <li>Piscinas: Nunca usar aparatos eléctricos cerca</li>
              <li>Sótanos: Humedad y posibles inundaciones</li>
            </ul>
          </div>

          <Important>
            <p>
              ⚠️ Regla de oro: NUNCA uses aparatos eléctricos con las manos 
              mojadas, descalzo sobre suelo mojado, o cerca de agua (bañera, piscina, etc.).
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Riesgos Eléctricos</h3>
        <ul>
          <li>Los 4 peligros: electrocución, quemaduras, incendios, explosiones</li>
          <li>30 mA pueden ser mortales</li>
          <li>El agua multiplica el riesgo por 100</li>
          <li>Baños y cocinas son las zonas más peligrosas</li>
          <li>La prevención es la mejor protección</li>
        </ul>
      </div>

      {/* Ejercicios de Práctica */}
      <ExercisesSection 
        exercises={ejercicios} 
        groupId="riesgos_electricos"
        title="Ejercicios de Práctica - Riesgos Eléctricos"
      />
    </>
  );
};

export default RiesgosElectricos;
