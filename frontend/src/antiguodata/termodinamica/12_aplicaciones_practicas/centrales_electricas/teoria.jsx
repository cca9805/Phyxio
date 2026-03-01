
import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as centralesDefinitions } from './definitions.js';


export const metadata = {
  titulo: "Centrales Eléctricas",
  descripcion: "Generación de electricidad a gran escala",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CentralesElectricasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Centrales Eléctricas">
        <Concept title="¿Qué es una Central Eléctrica?">
          <p>
            Una <strong>central eléctrica</strong> es una instalación industrial que transforma energía primaria 
            (combustibles fósiles, nuclear, renovable) en energía eléctrica para su distribución y consumo. 
            Son la columna vertebral del sistema eléctrico moderno.
          </p>

          <Important>
            <p><strong>Función principal:</strong></p>
            <ul>
              <li>Generar electricidad a gran escala (MW a GW)</li>
              <li>Suministro continuo y estable</li>
              <li>Adaptarse a la demanda variable</li>
              <li>Minimizar costos y emisiones</li>
            </ul>
          </Important>
        return (
          <>
            {/* ...toda la teoría existente... */}
            <ExtraCentralesElectricas />
          </>
        );

          <p><strong>Proceso:</strong></p>
          <ul>
            <li><strong>Ciclo superior (Brayton):</strong> Combustión de gas → turbina de gas → electricidad</li>
            <li><strong>Recuperación de calor:</strong> Gases de escape (500-600°C) generan vapor</li>
            <li><strong>Ciclo inferior (Rankine):</strong> Vapor → turbina de vapor → electricidad adicional</li>
          </ul>

          <p><strong>Ventajas:</strong> Máxima eficiencia, menores emisiones, arranque rápido</p>
          <p><strong>Desventajas:</strong> Dependencia del gas natural, mayor costo inicial</p>
        </Concept>

        <Concept title="3. Centrales Nucleares">
          <p><strong>Combustible:</strong> Uranio-235 (fisión nuclear)</p>
          <p><strong>Ciclo:</strong> Rankine (vapor de agua)</p>
          <p><strong>Eficiencia:</strong> 30-35%</p>

          <p><strong>Proceso:</strong></p>
          <ul>
            <li>Fisión nuclear en reactor genera calor</li>
            <li>Circuito primario (agua presurizada) extrae calor del reactor</li>
            <li>Intercambiador genera vapor en circuito secundario</li>
            <li>Vapor mueve turbina → electricidad</li>
          </ul>

          <p><strong>Ventajas:</strong> Cero emisiones de CO₂, alta densidad energética, operación continua</p>
          <p><strong>Desventajas:</strong> Residuos radiactivos, alto costo, riesgos de seguridad</p>

          <p><strong>Nota:</strong> Eficiencia menor que térmicas convencionales debido a limitaciones de temperatura 
          del reactor (≈320°C vs 600°C en calderas)</p>
        </Concept>

        <Concept title="4. Centrales Geotérmicas">
          <p><strong>Fuente:</strong> Calor del interior de la Tierra</p>
          <p><strong>Ciclo:</strong> Rankine (vapor geotérmico o binario)</p>
          <p><strong>Eficiencia:</strong> 10-20%</p>

          <p><strong>Tipos:</strong></p>
          <ul>
            <li><strong>Vapor seco:</strong> Vapor directo del yacimiento → turbina</li>
            <li><strong>Flash:</strong> Agua caliente se vaporiza parcialmente por reducción de presión</li>
            <li><strong>Binario:</strong> Fluido geotérmico calienta fluido secundario de bajo punto de ebullición</li>
          </ul>

          <p><strong>Ventajas:</strong> Renovable, operación continua, bajas emisiones</p>
          <p><strong>Desventajas:</strong> Ubicaciones limitadas, baja eficiencia por bajas temperaturas (150-300°C)</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia de Centrales">
        <Concept title="Definición de Eficiencia">
          <Formula 
            expression={String.raw`\eta = \frac{W_{electrico}}{Q_{combustible}}`}
            description="Eficiencia de central eléctrica"
            calculatorId="centrales_electricas-grupo-1"
            definitions={centralesDefinitions}
            exercises={exercises}
            complementary={[
              {
                description: "Cálculo de pérdidas totales",
                expression: String.raw`Q_{perdidas} = Q_{combustible} - W_{electrico}`,
                definitionId: "perdidas-central",
                exercises: exercises,
                showCalculator: false
              },
              {
                description: "Calor residual evacuado",
                expression: String.raw`Q_{residual} = Q_{combustible} \times (1-\eta)`,
                definitionId: "calor-residual-central",
                exercises: exercises,
                showCalculator: false
              }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>η:</strong> Eficiencia de la central (adimensional, 0-1)</li>
            <li><strong>W_electrico:</strong> Energía eléctrica generada (J o MWh)</li>
            <li><strong>Q_combustible:</strong> Energía química del combustible consumido (J o MWh)</li>
          </ul>
        </Concept>

        <Concept title="Factores que Limitan la Eficiencia">
          <p><strong>1. Límite termodinámico (Carnot):</strong></p>
          <ul>
            <li>η_Carnot = 1 - T_fría/T_caliente</li>
            <li>Temperatura máxima limitada por materiales (≈600°C en vapor, ≈1400°C en gas)</li>
            <li>Temperatura mínima limitada por ambiente (≈20-30°C)</li>
          </ul>

          <p><strong>2. Pérdidas en componentes:</strong></p>
          <ul>
            <li><strong>Caldera/combustor:</strong> 5-10% (combustión incompleta, pérdidas por chimenea)</li>
            <li><strong>Turbina:</strong> 10-15% (fricción, fugas, irreversibilidades)</li>
            <li><strong>Generador:</strong> 1-2% (pérdidas eléctricas y mecánicas)</li>
            <li><strong>Condensador:</strong> 40-50% (calor rechazado al ambiente)</li>
            <li><strong>Auxiliares:</strong> 2-5% (bombas, ventiladores, controles)</li>
          </ul>

          <p><strong>3. Factores operativos:</strong></p>
          <ul>
            <li>Carga parcial reduce eficiencia</li>
            <li>Envejecimiento de equipos</li>
            <li>Calidad del combustible</li>
            <li>Condiciones ambientales (temperatura, presión)</li>
          </ul>
        </Concept>

        <Concept title="Potencia Generada">
          <Formula 
            expression={String.raw`P = \eta \times \dot{Q}_{combustible}`}
            description="Potencia eléctrica generada"
            calculatorId="potencia-central"
            definitions={centralesDefinitions}
            exercises={exercises}
            complementary={[]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>P:</strong> Potencia eléctrica (W o MW)</li>
            <li><strong>η:</strong> Eficiencia de la central</li>
            <li><strong>Q̇_combustible:</strong> Flujo de energía del combustible (W o MW)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación de Tecnologías">
        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Tipo</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Eficiencia</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Emisiones CO₂</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Costo kWh</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Flexibilidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '0.5em'}}>Carbón</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>35-40%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Alta (900 g/kWh)</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Bajo</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Baja</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Ciclo combinado</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>55-65%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Media (350 g/kWh)</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Medio</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Alta</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Nuclear</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>30-35%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Cero</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Medio-Alto</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Muy baja</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Geotérmica</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>10-20%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Muy baja</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Medio</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Media</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Tendencias Futuras">
          <ul>
            <li><strong>Descarbonización:</strong> Cierre de centrales de carbón, expansión de ciclos combinados</li>
            <li><strong>Integración renovable:</strong> Centrales térmicas como respaldo de solar/eólica</li>
            <li><strong>Captura de CO₂:</strong> Tecnologías CCS para reducir emisiones</li>
            <li><strong>Hidrógeno:</strong> Combustión de H₂ en turbinas de gas (cero emisiones)</li>
            <li><strong>Reactores avanzados:</strong> Generación IV (mayor eficiencia y seguridad)</li>
            <li><strong>Almacenamiento térmico:</strong> Mejora de flexibilidad operativa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Impacto Ambiental y Sostenibilidad">
        <Concept title="Emisiones y Contaminación">
          <p><strong>Centrales de combustibles fósiles emiten:</strong></p>
          <ul>
            <li><strong>CO₂:</strong> Principal gas de efecto invernadero</li>
            <li><strong>SO₂ y NOₓ:</strong> Lluvia ácida, problemas respiratorios</li>
            <li><strong>Partículas:</strong> Contaminación del aire</li>
            <li><strong>Metales pesados:</strong> Mercurio, plomo (especialmente carbón)</li>
          </ul>

          <p><strong>Mitigación:</strong></p>
          <ul>
            <li>Filtros y precipitadores electrostáticos</li>
            <li>Desulfuración de gases</li>
            <li>Reducción catalítica selectiva (NOₓ)</li>
            <li>Captura y almacenamiento de carbono (CCS)</li>
          </ul>
        </Concept>

        <Concept title="Uso del Agua">
          <p>
            Las centrales térmicas requieren grandes cantidades de agua para enfriamiento (condensadores). 
            Una central de 1000 MW puede consumir 100-200 millones de litros/día.
          </p>

          <p><strong>Soluciones:</strong></p>
          <ul>
            <li>Torres de refrigeración (recirculación)</li>
            <li>Refrigeración en seco (aire)</li>
            <li>Ubicación costera (agua de mar)</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};


// Sección extra: Problemas de dimensionamiento, casos reales e integración renovable
export const ExtraCentralesElectricas = () => (
  <>
    <TheorySection title="Problemas de Dimensionamiento y Casos Reales">
      <Concept title="Ejemplo 1: Dimensionamiento de combustible">
        <p>
          <strong>Enunciado:</strong> Se requiere que una central entregue 900 MW eléctricos con eficiencia 0.36. ¿Qué flujo de energía de combustible se necesita?
        </p>
        <p>
          <strong>Solución:</strong> Q_combustible = 900 / 0.36 = <strong>2500 MW</strong>.
        </p>
      </Concept>
      <Concept title="Ejemplo 2: Comparación de eficiencia">
        <p>
          <strong>Enunciado:</strong> Una central A tiene eficiencia 0.38 y una central B, 0.45. Si ambas consumen 1200 MW de combustible, ¿cuánta electricidad genera cada una y cuál es la diferencia?
        </p>
        <p>
          <strong>Solución:</strong> 
          <ul>
            <li>Central A: 0.38 × 1200 = 456 MW</li>
            <li>Central B: 0.45 × 1200 = 540 MW</li>
            <li>Diferencia: <strong>84 MW</strong></li>
          </ul>
        </p>
      </Concept>
      <Concept title="Ejemplo 3: Impacto de mejora tecnológica">
        <p>
          <strong>Enunciado:</strong> Una mejora tecnológica aumenta la eficiencia de una central de 0.33 a 0.40. Si el consumo de combustible es 1500 MW, ¿cuánto aumenta la potencia eléctrica generada?
        </p>
        <p>
          <strong>Solución:</strong> 
          <ul>
            <li>Antes: 0.33 × 1500 = 495 MW</li>
            <li>Después: 0.40 × 1500 = 600 MW</li>
            <li>Aumento: <strong>105 MW</strong></li>
          </ul>
        </p>
      </Concept>
      <Concept title="Ejemplo 4: Integración renovable (caso real)">
        <p>
          <strong>Enunciado:</strong> Una central térmica convencional de 500 MW se complementa con 200 MW de energía solar. ¿Cuál es la reducción porcentual en consumo de combustible si la demanda total es 500 MW?
        </p>
        <p>
          <strong>Solución:</strong> 
          <ul>
            <li>La central solo debe cubrir 300 MW (500 - 200)</li>
            <li>Reducción = 200 / 500 = <strong>40%</strong></li>
          </ul>
        </p>
      </Concept>
    </TheorySection>
  </>
);

export default CentralesElectricasTheory;
