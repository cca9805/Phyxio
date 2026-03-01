import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as refrigeracionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclos de Refrigeración",
  descripcion: "Aplicaciones prácticas de refrigeración",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CiclosRefrigeracionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a la Refrigeración">
        <Concept title="¿Qué es un Sistema de Refrigeración?">
          <p>
            Un <strong>sistema de refrigeración</strong> es un dispositivo que extrae calor de un espacio frío y lo transfiere a uno caliente, consumiendo trabajo (energía eléctrica). Es esencialmente una bomba de calor operando en modo refrigeración.
          </p>
          <Important>
            <p><strong>Principio fundamental:</strong></p>
            <p>
              El calor fluye naturalmente de caliente a frío. Un refrigerador usa trabajo para "bombear" calor en dirección contraria: del espacio frío (interior) al ambiente caliente (exterior).
            </p>
          </Important>
          <p><strong>Aplicaciones cotidianas:</strong></p>
          <ul>
            <li>Refrigeradores y congeladores domésticos</li>
            <li>Aires acondicionados residenciales y comerciales</li>
            <li>Bombas de calor para calefacción y ACS</li>
            <li>Cámaras frigoríficas y túneles de congelación</li>
            <li>Refrigeración de data centers y equipos electrónicos</li>
            <li>Transporte refrigerado (camiones, barcos, trenes)</li>
            <li>Aplicaciones industriales: química, farmacéutica, alimentaria</li>
            <li>Criogenia y licuefacción de gases</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-history-section">
        <h2>📜 Historia de la refrigeración</h2>
        <p>
          Los primeros sistemas de refrigeración artificial surgieron en el siglo XIX, con inventos como la máquina de hielo de Jacob Perkins (1834) y el ciclo de compresión de vapor de James Harrison (1856). El desarrollo de refrigerantes seguros y eficientes permitió la expansión de la refrigeración doméstica y comercial en el siglo XX. Hoy, la refrigeración es esencial para la conservación de alimentos, la medicina y la industria global.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2>🧊 Anécdotas y curiosidades</h2>
        <ul>
          <li>El primer refrigerador doméstico eléctrico se comercializó en 1913.</li>
          <li>El uso masivo de CFCs en refrigeración llevó a la destrucción de la capa de ozono, lo que impulsó el Protocolo de Montreal (1987).</li>
          <li>Algunos refrigerantes modernos, como el CO₂ y el propano, son naturales y tienen bajo impacto ambiental.</li>
          <li>La criogenia permite conservar células y órganos a temperaturas cercanas al cero absoluto.</li>
        </ul>
      </div>
            

      <TheorySection title="Introducción a los Ciclos de Refrigeración">
        <Concept title="¿Qué es un Ciclo de Refrigeración?">
          <p>
            Un <strong>ciclo de refrigeración</strong> es un proceso termodinámico cíclico que transfiere calor desde un espacio frío (interior) a uno caliente (exterior), consumiendo trabajo externo. Es la base de funcionamiento de refrigeradores, aires acondicionados y bombas de calor.
          </p>
          <Important>
            <p><strong>Características clave:</strong></p>
            <ul>
              <li>El fluido de trabajo (refrigerante) circula en un ciclo cerrado.</li>
              <li>Absorbe calor del espacio frío (Q<sub>L</sub>).</li>
              <li>Rechaza calor al espacio caliente (Q<sub>H</sub>).</li>
              <li>Requiere aporte de trabajo externo (W).</li>
              <li>La eficiencia está limitada por el ciclo de Carnot.</li>
            </ul>
          </Important>
          <p><strong>Ejemplos de aplicación:</strong></p>
          <ul>
            <li>Refrigerador doméstico</li>
            <li>Aire acondicionado</li>
            <li>Bomba de calor</li>
            <li>Congelador</li>
          </ul>
        </Concept>
        <Concept title="Componentes principales de un ciclo de refrigeración por compresión de vapor">
          <ul>
            <li><strong>Evaporador:</strong> El refrigerante absorbe calor del espacio frío y se evapora.</li>
            <li><strong>Compresor:</strong> Eleva la presión y temperatura del vapor de refrigerante.</li>
            <li><strong>Condensador:</strong> El refrigerante cede calor al ambiente y se condensa.</li>
            <li><strong>Válvula de expansión:</strong> Reduce la presión y temperatura del líquido refrigerante.</li>
          </ul>
        </Concept>
        <Concept title="Etapas del ciclo de refrigeración (diagrama de procesos)">
          <ul>
            <li><strong>1→2 (Evaporador):</strong> El refrigerante líquido absorbe calor y se evapora a baja presión.</li>
            <li><strong>2→3 (Compresor):</strong> El vapor se comprime, aumentando su presión y temperatura.</li>
            <li><strong>3→4 (Condensador):</strong> El vapor caliente cede calor al ambiente y se condensa a líquido.</li>
            <li><strong>4→1 (Válvula de expansión):</strong> El líquido se expande, reduciendo su presión y temperatura antes de volver al evaporador.</li>
          </ul>
        </Concept>
        <Concept title="Resumen didáctico del ciclo">
          <ul>
            <li>El ciclo de refrigeración permite extraer calor de un espacio frío y expulsarlo a uno caliente, usando energía eléctrica.</li>
            <li>El rendimiento se mide mediante el COP (coeficiente de rendimiento).</li>
            <li>La comprensión de los procesos y componentes es clave para optimizar la eficiencia y el uso en la vida real.</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Rendimiento (COP)">
        <Concept title="Definición del COP">
            <Formula 
              expression={String.raw`\text{COP}_R = \frac{Q_L}{W}`}
              description="COP de refrigerador"
              calculatorId="ciclos_de_refrigeracion-grupo-1"
              definitions={refrigeracionDefinitions}
              exercises={exercises}
              complementary={[
                { description: "COP ideal (Carnot)", expression: String.raw`\text{COP}_{Carnot} = \frac{T_L}{T_H - T_L}` },
                { description: "Relación energética", expression: String.raw`Q_H = Q_L + W` }
              ]}
            />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>COP_R:</strong> Coeficiente de rendimiento del refrigerador (adimensional)</li>
            <li><strong>Q_L:</strong> Calor extraído del espacio frío (J o kWh)</li>
            <li><strong>W:</strong> Trabajo eléctrico consumido (J o kWh)</li>
          </ul>

          <p><strong>Interpretación:</strong></p>
          <p>
            Un COP_R = 3 significa que por cada 1 kWh de electricidad consumida, el refrigerador 
            extrae 3 kWh de calor del espacio frío. El calor total rechazado al ambiente es 4 kWh.
          </p>

          <p><strong>Diferencia con bomba de calor:</strong></p>
          <ul>
            <li><strong>Refrigerador:</strong> COP_R = Q_L / W (interesa el calor extraído)</li>
            <li><strong>Bomba de calor:</strong> COP_H = Q_H / W (interesa el calor entregado)</li>
            <li><strong>Relación:</strong> COP_H = COP_R + 1</li>
          </ul>
        </Concept>

        <Concept title="Factores que Afectan el COP">
          <p><strong>1. Diferencia de temperatura:</strong></p>
          <ul>
            <li>Mayor diferencia (T_ambiente - T_interior) → menor COP</li>
            <li>Ejemplo: Refrigerador a -18°C con 25°C ambiente → COP ≈ 1.5</li>
            <li>Ejemplo: Aire acondicionado 20°C con 35°C exterior → COP ≈ 3.5</li>
          </ul>

          <p><strong>2. Temperatura de evaporación:</strong></p>
          <ul>
            <li>Menor temperatura → menor COP</li>
            <li>Congelador (-18°C): COP = 1.5-2.0</li>
            <li>Refrigerador (4°C): COP = 2.0-2.5</li>
            <li>Aire acondicionado (7°C): COP = 2.5-4.0</li>
          </ul>

          <p><strong>3. Eficiencia de componentes:</strong></p>
          <ul>
            <li>Compresor: eficiencia isentrópica 70-85%</li>
            <li>Intercambiadores: área y diseño</li>
            <li>Válvula de expansión: pérdidas de presión</li>
          </ul>

          <p><strong>4. Refrigerante utilizado:</strong></p>
          <ul>
            <li>R134a: COP moderado, bajo impacto ambiental</li>
            <li>R410A: Alto COP, usado en AC</li>
            <li>R32: Mejor COP, menor GWP</li>
            <li>Propano (R290): Excelente COP, natural</li>
          </ul>
        </Concept>

      </TheorySection>

      <TheorySection title="Tipos de Sistemas de Refrigeración">
        <Concept title="1. Refrigeradores Domésticos">
          <p><strong>Características:</strong></p>
          <ul>
            <li>Temperatura: 2-8°C (refrigerador), -18 a -24°C (congelador)</li>
            <li>COP: 1.5-2.5</li>
            <li>Capacidad: 100-300 litros</li>
            <li>Consumo: 200-400 kWh/año</li>
          </ul>

          <p><strong>Tecnologías:</strong></p>
          <ul>
            <li><strong>Compresor fijo:</strong> On/off, menos eficiente</li>
            <li><strong>Compresor inverter:</strong> Velocidad variable, COP +20-30%</li>
            <li><strong>No Frost:</strong> Sin formación de hielo, ventiladores</li>
            <li><strong>Clase energética:</strong> A+++ consume 60% menos que A</li>
          </ul>

          <p><strong>Consejos de eficiencia:</strong></p>
          <ul>
            <li>Ubicar lejos de fuentes de calor</li>
            <li>Dejar espacio para ventilación trasera</li>
            <li>No introducir alimentos calientes</li>
            <li>Mantener puertas cerradas</li>
            <li>Limpiar condensador periódicamente</li>
          </ul>
        </Concept>

        <Concept title="2. Aire Acondicionado">
          <p><strong>Tipos:</strong></p>
          <ul>
            <li><strong>Split:</strong> Unidad interior + exterior, COP 3-4</li>
            <li><strong>Multisplit:</strong> Varias unidades interiores, una exterior</li>
            <li><strong>VRF/VRV:</strong> Caudal variable, edificios grandes</li>
            <li><strong>Portátil:</strong> Monobloque, COP 2-2.5</li>
            <li><strong>Ventana:</strong> Compacto, COP 2.5-3</li>
          </ul>

          <p><strong>Eficiencia energética:</strong></p>
          <ul>
            <li><strong>EER:</strong> Energy Efficiency Ratio (modo refrigeración)</li>
            <li><strong>SEER:</strong> Seasonal EER (promedio estacional)</li>
            <li><strong>Clase A+++:</strong> SEER &gt; 8.5</li>
            <li><strong>Inverter:</strong> Ahorro 30-50% vs on/off</li>
          </ul>

          <p><strong>Dimensionamiento:</strong></p>
          <ul>
            <li>Regla aproximada: 100-150 W/m² (clima templado)</li>
            <li>Considerar: aislamiento, orientación, ocupación, equipos</li>
            <li>Sobredimensionar reduce eficiencia (ciclos cortos)</li>
          </ul>
        </Concept>

        <Concept title="3. Refrigeración Comercial">
          <p><strong>Aplicaciones:</strong></p>
          <ul>
            <li><strong>Vitrinas refrigeradas:</strong> Supermercados, COP 2-3</li>
            <li><strong>Cámaras frigoríficas:</strong> Almacenamiento, COP 2.5-4</li>
            <li><strong>Túneles de congelación:</strong> Congelación rápida, COP 1.5-2</li>
            <li><strong>Máquinas de hielo:</strong> Producción de hielo, COP 2-3</li>
          </ul>

          <p><strong>Sistemas centralizados:</strong></p>
          <ul>
            <li>Una sala de máquinas para todo el establecimiento</li>
            <li>Distribución por tuberías de refrigerante o salmuera</li>
            <li>Mayor eficiencia y control</li>
            <li>Recuperación de calor para calefacción/ACS</li>
          </ul>
        </Concept>

        <Concept title="4. Refrigeración Industrial">
          <p><strong>Sectores:</strong></p>
          <ul>
            <li><strong>Alimentaria:</strong> Conservación, procesado, congelación</li>
            <li><strong>Química:</strong> Control de temperatura en procesos</li>
            <li><strong>Farmacéutica:</strong> Almacenamiento de medicamentos</li>
            <li><strong>Plásticos:</strong> Enfriamiento de moldes</li>
            <li><strong>Data centers:</strong> Refrigeración de servidores</li>
          </ul>

          <p><strong>Sistemas especiales:</strong></p>
          <ul>
            <li><strong>Amoníaco (NH₃):</strong> Alta eficiencia, industrial</li>
            <li><strong>CO₂ transcrítico:</strong> Natural, bajas temperaturas</li>
            <li><strong>Cascada:</strong> Dos ciclos para temperaturas muy bajas</li>
            <li><strong>Absorción:</strong> Usa calor residual en lugar de electricidad</li>
          </ul>
        </Concept>

        <Concept title="5. Criogenia">
          <p><strong>Aplicaciones:</strong></p>
          <ul>
            <li>Licuefacción de gases (N₂, O₂, He, H₂)</li>
            <li>Almacenamiento de gases licuados (GNL)</li>
            <li>Superconductores</li>
            <li>Investigación científica</li>
            <li>Medicina (criopreservación)</li>
          </ul>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Temperaturas: -150°C a -270°C</li>
            <li>COP muy bajo (&lt; 1) debido a gran diferencia de temperatura</li>
            <li>Ciclos en cascada o Linde-Hampson</li>
            <li>Aislamiento al vacío</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Refrigerantes">
        <Concept title="Evolución de Refrigerantes">
          <p><strong>Generaciones:</strong></p>
          <ul>
            <li><strong>1ª generación (hasta 1930):</strong> NH₃, SO₂, CO₂ - tóxicos o inflamables</li>
            <li><strong>2ª generación (1930-1990):</strong> CFCs (R12) - destruyen ozono</li>
            <li><strong>3ª generación (1990-2020):</strong> HFCs (R134a, R410A) - alto GWP</li>
            <li><strong>4ª generación (actual):</strong> HFOs, naturales - bajo GWP</li>
          </ul>

          <p><strong>Refrigerantes actuales:</strong></p>
          <ul>
            <li><strong>R32:</strong> Bajo GWP (675), alto COP, AC residencial</li>
            <li><strong>R290 (propano):</strong> GWP 3, excelente COP, inflamable</li>
            <li><strong>R600a (isobutano):</strong> GWP 3, refrigeradores domésticos</li>
            <li><strong>R744 (CO₂):</strong> GWP 1, supermercados, transcrítico</li>
            <li><strong>R717 (NH₃):</strong> GWP 0, industrial, tóxico</li>
          </ul>

          <p><strong>Criterios de selección:</strong></p>
          <ul>
            <li>Impacto ambiental (ODP, GWP)</li>
            <li>Eficiencia energética (COP)</li>
            <li>Seguridad (toxicidad, inflamabilidad)</li>
            <li>Compatibilidad con materiales</li>
            <li>Costo y disponibilidad</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia y Ahorro Energético">
        <Concept title="Mejoras de Eficiencia">
          <p><strong>Diseño del sistema:</strong></p>
          <ul>
            <li>Compresor inverter (ahorro 30-50%)</li>
            <li>Intercambiadores de mayor área</li>
            <li>Válvula de expansión electrónica</li>
            <li>Subenfriamiento y sobrecalentamiento óptimos</li>
          </ul>

          <p><strong>Operación:</strong></p>
          <ul>
            <li>Temperatura de consigna adecuada (cada °C menos = +5% consumo)</li>
            <li>Mantenimiento preventivo</li>
            <li>Control inteligente y programación</li>
            <li>Detección de fugas</li>
          </ul>

          <p><strong>Recuperación de calor:</strong></p>
          <ul>
            <li>Calor del condensador para ACS</li>
            <li>Deshumidificación gratuita</li>
            <li>Precalentamiento de aire de ventilación</li>
          </ul>
        </Concept>

        <Concept title="Normativa y Etiquetado">
          <p><strong>Etiqueta energética (UE):</strong></p>
          <ul>
            <li>Escala A+++ a D (refrigeradores)</li>
            <li>Escala A+++ a D (aire acondicionado)</li>
            <li>Indica consumo anual en kWh</li>
            <li>A+++ consume 60% menos que A</li>
          </ul>

          <p><strong>Regulaciones:</strong></p>
          <ul>
            <li><strong>F-Gas:</strong> Reducción progresiva de HFCs</li>
            <li><strong>Ecodiseño:</strong> Requisitos mínimos de eficiencia</li>
            <li><strong>Protocolo de Montreal:</strong> Eliminación de CFCs/HCFCs</li>
            <li><strong>Protocolo de Kioto:</strong> Reducción de GEI</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tendencias Futuras">
        <Concept title="Innovaciones Tecnológicas">
          <ul>
            <li><strong>Refrigeración magnética:</strong> Sin refrigerante, efecto magnetocalórico</li>
            <li><strong>Refrigeración termoeléctrica:</strong> Efecto Peltier, sin partes móviles</li>
            <li><strong>Refrigeración termoacústica:</strong> Ondas sonoras</li>
            <li><strong>Ciclos transcríticos de CO₂:</strong> Mayor adopción</li>
            <li><strong>Integración con renovables:</strong> Solar + refrigeración</li>
            <li><strong>IoT y AI:</strong> Optimización predictiva</li>
          </ul>
        </Concept>

        <Concept title="Sostenibilidad">
          <ul>
            <li>Transición a refrigerantes naturales</li>
            <li>Economía circular (reciclaje de equipos)</li>
            <li>Diseño para desmontaje</li>
            <li>Reducción de fugas (sistemas herméticos)</li>
            <li>Certificación ambiental</li>
          </ul>
        </Concept>
     
        <Concept title="Consumo de Energía">
          <Formula 
              expression={String.raw`W = \frac{Q_L}{\text{COP}_R}`}
              description="Trabajo requerido"
              calculatorId="ciclos_de_refrigeracion-grupo-1"
              definitions={refrigeracionDefinitions}
              exercises={exercises}
              complementary={[
                { description: "Potencia eléctrica", expression: String.raw`P = \frac{\dot{Q}_L}{\text{COP}_R}` },
                { description: "Consumo anual", expression: String.raw`E_{año} = P \times h_{operación}` }
              ]}
            />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>W:</strong> Trabajo requerido (J o kWh)</li>
            <li><strong>Q_L:</strong> Calor a extraer (J o kWh)</li>
            <li><strong>COP_R:</strong> Coeficiente de rendimiento</li>
          </ul>

          <p><strong>Ejemplo práctico:</strong></p>
          <p>
            Refrigerador que debe extraer 500 W de calor con COP_R = 2.5:
          </p>
          <ul>
            <li>Potencia eléctrica: P = 500 / 2.5 = 200 W</li>
            <li>Operación 8 h/día: Consumo diario = 0.2 kW × 8 h = 1.6 kWh</li>
            <li>Consumo anual: 1.6 × 365 = 584 kWh/año</li>
            <li>Costo anual (0.15 €/kWh): 584 × 0.15 = 87.6 €/año</li>
          </ul>
        </Concept>
      </TheorySection>


      <div className="theory-applications-section">
        <h2>
          <span role="img" aria-label="Aplicaciones">🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Refrigeradores y congeladores domésticos</li>
          <li>Aires acondicionados residenciales y comerciales</li>
          <li>Bombas de calor para calefacción y ACS</li>
          <li>Cámaras frigoríficas y túneles de congelación</li>
          <li>Refrigeración de data centers y equipos electrónicos</li>
          <li>Transporte refrigerado (camiones, barcos, trenes)</li>
          <li>Aplicaciones industriales: química, farmacéutica, alimentaria</li>
          <li>Criogenia y licuefacción de gases</li>
        </ul>
      </div>

      <div className="theory-section-highlight">
        <h2>🔎 Resumen didáctico</h2>
        <ul>
          <li>Los ciclos de refrigeración permiten transferir calor de un espacio frío a uno caliente usando trabajo externo.</li>
          <li>El COP (coeficiente de rendimiento) mide la eficiencia de estos sistemas.</li>
          <li>La refrigeración es clave en la vida moderna: alimentos, salud, industria, tecnología.</li>
          <li>La sostenibilidad futura depende de refrigerantes ecológicos y eficiencia energética.</li>
        </ul>
      </div>
    </>
  );
};

export default CiclosRefrigeracionTheory;
