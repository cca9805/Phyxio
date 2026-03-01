import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as climatizacionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Sistemas de Climatización",
  descripcion: "Principios, tipos y aplicaciones de los sistemas HVAC",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const SistemasClimatizacionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Sistemas de Climatización (HVAC)">
        <Concept title="¿Qué es un sistema de climatización?">
          <p>
            Un <strong>sistema de climatización</strong> (HVAC: Heating, Ventilation, and Air Conditioning) es el conjunto de tecnologías y equipos que permiten controlar la temperatura, humedad, calidad y movimiento del aire en espacios interiores, para garantizar confort y salud.
          </p>
          <Important>
            <p>Funciones principales:</p>
            <ul>
              <li>Calefacción: Mantener temperatura confortable en invierno (20-22°C)</li>
              <li>Refrigeración: Mantener temperatura confortable en verano (23-26°C)</li>
              <li>Ventilación: Renovar aire, eliminar contaminantes</li>
              <li>Control de humedad: 40-60% humedad relativa óptima</li>
              <li>Filtración: Eliminar partículas, polen, bacterias</li>
            </ul>
          </Important>
          <p>Importancia:</p>
          <ul>
            <li>Confort térmico y productividad</li>
            <li>Salud: previene moho, alergias, enfermedades</li>
            <li>Conservación de edificios y equipos</li>
            <li>Procesos industriales sensibles</li>
            <li>Hasta 60% del consumo energético de edificios</li>
          </ul>
        </Concept>
        <Concept title="Componentes principales de un sistema HVAC">
          <ul>
            <li><strong>Generación:</strong> Calderas, bombas de calor, enfriadoras, recuperadores de calor</li>
            <li><strong>Distribución:</strong> Conductos de aire, tuberías de agua, suelo/techo radiante</li>
            <li><strong>Terminales:</strong> Difusores, rejillas, radiadores, fancoils, splits</li>
            <li><strong>Control:</strong> Termostatos, sensores, sistemas BMS</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Historia y evolución de la climatización">
        <Concept title="Breve historia">
          <p>
            Los primeros sistemas de climatización datan de la antigua Roma (hipocaustos para calefacción). El aire acondicionado moderno fue inventado por Willis Carrier en 1902. Desde entonces, la climatización ha evolucionado hacia sistemas más eficientes, inteligentes y sostenibles.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de sistemas de climatización">
        <Concept title="1. Calefacción">
          <p>
            Sistemas que aportan calor al ambiente. Incluyen calderas de gas/gasoil, bombas de calor, radiadores eléctricos, suelo radiante y estufas.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Confort en invierno, variedad de tecnologías</li>
            <li><strong>Desventajas:</strong> Consumo energético, emisiones (si usan combustibles fósiles)</li>
            <li><strong>Aplicaciones:</strong> Viviendas, oficinas, industria</li>
          </ul>
        </Concept>
        <Concept title="2. Refrigeración (Aire acondicionado)">
          <p>
            Sistemas que extraen calor del ambiente. Incluyen aire acondicionado split, multisplit, VRF, enfriadoras, bombas de calor en modo frío.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Confort en verano, control preciso</li>
            <li><strong>Desventajas:</strong> Consumo eléctrico, impacto ambiental de refrigerantes</li>
            <li><strong>Aplicaciones:</strong> Hogares, comercios, hospitales, data centers</li>
          </ul>
        </Concept>
        <Concept title="3. Ventilación y calidad de aire">
          <p>
            Sistemas que renuevan el aire interior y controlan contaminantes. Incluyen ventilación mecánica controlada (VMC), recuperadores de calor, filtros HEPA y purificadores.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Aire saludable, elimina CO₂ y olores</li>
            <li><strong>Desventajas:</strong> Puede requerir obra, consumo de energía</li>
            <li><strong>Aplicaciones:</strong> Viviendas, oficinas, hospitales, laboratorios</li>
          </ul>
        </Concept>
        <Concept title="4. Bombas de calor (sistemas mixtos)">
          <p>
            Equipos reversibles que pueden calentar o enfriar según la estación. Muy eficientes (COP 3-5), pueden ser aire-aire, aire-agua o geotérmicas.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Alta eficiencia, una sola máquina para todo el año</li>
            <li><strong>Desventajas:</strong> Inversión inicial, rendimiento depende de clima</li>
            <li><strong>Aplicaciones:</strong> Viviendas, edificios, industria</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de rendimiento y eficiencia">
        <Concept title="Carga térmica total">
          <Formula 
            expression={String.raw`Q_{total} = Q_{sensible} + Q_{latente}`}
            description="Carga térmica total"
            calculatorId="sistemas_de_climatizacion-carga_termica"
            definitions={climatizacionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Toneladas de refrigeración", expression: String.raw`1\,TR = 3516.85\,W` }
            ]}
          />
          <p>Donde:</p>
          <ul>
            <li>Q_total: Carga térmica total (W)</li>
            <li>Q_sensible: Carga sensible (W)</li>
            <li>Q_latente: Carga latente (W)</li>
          </ul>
        </Concept>
        <Concept title="Eficiencia energética (EER, COP)">
          <Formula 
            expression={String.raw`\text{EER} = \frac{Q_{enfriamiento}}{W_{electrico}}`}
            description="Relación de eficiencia energética (EER)"
            calculatorId="sistemas_de_climatizacion-eer"
            definitions={climatizacionDefinitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>EER: Energy Efficiency Ratio (BTU/(W·h))</li>
            <li>Q_enfriamiento: Capacidad de enfriamiento (BTU/h)</li>
            <li>W_electrico: Potencia eléctrica consumida (W)</li>
          </ul>
          <p>Valores típicos:</p>
          <ul>
            <li>EER doméstico: 8-12 BTU/(W·h)</li>
            <li>COP bomba de calor: 2.5-5</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones y tendencias">
        <Concept title="Aplicaciones cotidianas e industriales">
          <ul>
            <li>Viviendas y oficinas</li>
            <li>Centros comerciales y hospitales</li>
            <li>Industria alimentaria y farmacéutica</li>
            <li>Data centers y laboratorios</li>
            <li>Transporte (trenes, aviones, autobuses)</li>
          </ul>
        </Concept>
        <Concept title="Tendencias y futuro de la climatización">
          <ul>
            <li>Bombas de calor de alta eficiencia</li>
            <li>Integración con energías renovables</li>
            <li>Domótica y control inteligente</li>
            <li>Refrigerantes ecológicos (R32, CO₂, propano)</li>
            <li>Recuperación de calor y ventilación eficiente</li>
            <li>Descarbonización de edificios</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Mantenimiento y uso eficiente">
        <Concept title="Mantenimiento básico">
          <ul>
            <li>Limpieza de filtros y difusores</li>
            <li>Revisión de fugas de refrigerante</li>
            <li>Comprobación de termostatos y sensores</li>
            <li>Revisión de aislamientos y sellados</li>
            <li>Programación de horarios y temperaturas</li>
          </ul>
        </Concept>
        <Concept title="Consejos de uso eficiente">
          <ul>
            <li>Temperatura de consigna adecuada (verano: 24-26°C, invierno: 20-22°C)</li>
            <li>Ventilar en horas frescas</li>
            <li>Evitar obstruir difusores y radiadores</li>
            <li>Usar persianas y toldos para reducir cargas</li>
            <li>Revisar el aislamiento del edificio</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia Energética">
        <Concept title="EER y SEER">
          <Formula 
            expression={String.raw`\text{EER} = \frac{Q_{enfriamiento}}{W_{electrico}}`}
            description="Relación de eficiencia energética"
            calculatorId="sistemas_de_climatizacion-grupo-1"
            definitions={climatizacionDefinitions}
            exercises={exercises}
            complementary={[
              { description: "SEER (estacional)", expression: String.raw`\text{SEER} = \frac{\sum Q_{enfriamiento}}{\sum W_{electrico}}` },
              { description: "COP (calefacción)", expression: String.raw`\text{COP} = \frac{Q_{calefacción}}{W_{electrico}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>EER:</strong> Energy Efficiency Ratio (BTU/(W·h) o adimensional)</li>
            <li><strong>Q_enfriamiento:</strong> Capacidad de enfriamiento (BTU/h o W)</li>
            <li><strong>W_electrico:</strong> Potencia eléctrica consumida (W)</li>
          </ul>

          <p><strong>Valores típicos:</strong></p>
          <ul>
            <li>EER &gt; 3.2 (A+++) → Excelente</li>
            <li>EER 2.6-3.2 (A++ a A+) → Bueno</li>
            <li>EER &lt; 2.6 (A o inferior) → Mejorable</li>
          </ul>

          <p><strong>SEER vs EER:</strong></p>
          <ul>
            <li>EER: Medido a condiciones estándar (35°C exterior)</li>
            <li>SEER: Promedio estacional, más representativo</li>
            <li>SEER típicamente 10-20% mayor que EER</li>
          </ul>
        </Concept>

        <Concept title="Estrategias de Ahorro">
          <p><strong>Diseño:</strong></p>
          <ul>
            <li>Aislamiento térmico adecuado</li>
            <li>Ventanas eficientes (doble vidrio, bajo emisivo)</li>
            <li>Protección solar (toldos, lamas)</li>
            <li>Orientación óptima del edificio</li>
          </ul>

          <p><strong>Equipos:</strong></p>
          <ul>
            <li>Alta eficiencia energética (A+++)</li>
            <li>Dimensionamiento correcto (ni sobre ni subdimensionar)</li>
            <li>Tecnología inverter</li>
            <li>Recuperación de calor</li>
          </ul>

          <p><strong>Operación:</strong></p>
          <ul>
            <li>Temperatura de consigna razonable (26°C verano, 20°C invierno)</li>
            <li>Programación horaria</li>
            <li>Mantenimiento preventivo</li>
            <li>Control por zonas</li>
            <li>Free-cooling cuando sea posible</li>
          </ul>

          <p><strong>Ahorro potencial: 30-50% vs sistema básico</strong></p>
        </Concept>
      </TheorySection>

      <TheorySection title="Calidad de Aire Interior">
        <Concept title="Parámetros de Calidad">
          <ul>
            <li><strong>CO₂:</strong> &lt; 1000 ppm (indicador de ventilación)</li>
            <li><strong>Partículas PM2.5:</strong> &lt; 25 μg/m³</li>
            <li><strong>Humedad relativa:</strong> 40-60%</li>
            <li><strong>Temperatura:</strong> 20-26°C según estación</li>
            <li><strong>COVs:</strong> Compuestos orgánicos volátiles bajos</li>
          </ul>
        </Concept>

        <Concept title="Ventilación">
          <p><strong>Caudales mínimos:</strong></p>
          <ul>
            <li>Viviendas: 0.5-1.0 renovaciones/hora</li>
            <li>Oficinas: 8-12 l/(s·persona)</li>
            <li>Aulas: 12-15 l/(s·persona)</li>
            <li>Hospitales: 6-12 renovaciones/hora</li>
          </ul>

          <p><strong>Sistemas:</strong></p>
          <ul>
            <li><strong>Natural:</strong> Ventanas, chimeneas solares</li>
            <li><strong>Mecánica simple:</strong> Extracción o impulsión</li>
            <li><strong>Doble flujo:</strong> Extracción + impulsión</li>
            <li><strong>Con recuperación:</strong> Intercambiador de calor (eficiencia 70-95%)</li>
          </ul>
        </Concept>

        <Concept title="Filtración">
          <p><strong>Tipos de filtros:</strong></p>
          <ul>
            <li><strong>G4 (gruesos):</strong> Polvo, polen</li>
            <li><strong>F7-F9 (finos):</strong> Partículas pequeñas</li>
            <li><strong>H13-H14 (HEPA):</strong> 99.95-99.995% eficiencia, virus, bacterias</li>
            <li><strong>Carbón activo:</strong> Gases, olores</li>
          </ul>

          <p><strong>Mantenimiento:</strong></p>
          <ul>
            <li>Cambio cada 3-6 meses (según uso)</li>
            <li>Filtros sucios reducen caudal y eficiencia</li>
            <li>Monitorización de pérdida de carga</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Normativa y Certificación">
        <Concept title="Normativa Europea">
          <ul>
            <li><strong>RITE:</strong> Reglamento de Instalaciones Térmicas (España)</li>
            <li><strong>ErP:</strong> Ecodiseño, requisitos mínimos de eficiencia</li>
            <li><strong>F-Gas:</strong> Control de gases fluorados</li>
            <li><strong>CTE:</strong> Código Técnico de la Edificación</li>
          </ul>
        </Concept>

        <Concept title="Certificaciones">
          <ul>
            <li><strong>LEED:</strong> Certificación edificios sostenibles</li>
            <li><strong>BREEAM:</strong> Evaluación ambiental de edificios</li>
            <li><strong>Passivhaus:</strong> Estándar de edificios de consumo casi nulo</li>
            <li><strong>WELL:</strong> Certificación de salud y bienestar</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tendencias Futuras">
        <Concept title="Innovaciones">
          <ul>
            <li><strong>Edificios nZEB:</strong> Consumo energético casi nulo</li>
            <li><strong>Integración con renovables:</strong> Solar + bomba de calor</li>
            <li><strong>Almacenamiento térmico:</strong> Hielo, PCM</li>
            <li><strong>Control predictivo:</strong> AI optimiza operación</li>
            <li><strong>IoT:</strong> Sensores inteligentes, mantenimiento predictivo</li>
            <li><strong>Refrigerantes naturales:</strong> CO₂, propano</li>
            <li><strong>Ventilación adaptativa:</strong> Según ocupación y calidad de aire</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};

export default SistemasClimatizacionTheory;
