import React from 'react';
import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as fononesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Fonones y Modelo de Debye",
  descripcion: "Cuantización de vibraciones en sólidos",
  isTheoryOnly: false, // Debe ser false si hay calculadoras
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const FononesModeloDebyeTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fonones">
        <Concept title="¿Qué son los Fonones?">
          <p>
            Los <strong>fonones</strong> son cuasipartículas que representan cuantos de vibración en 
            una red cristalina. Son los análogos de los fotones para las ondas sonoras en sólidos.
          </p>
          <p>
            Los fonones son bosones (espín 0) y obedecen la estadística de Bose-Einstein. Son fundamentales 
            para entender propiedades térmicas, acústicas y ópticas de los sólidos.
          </p>
        </Concept>

        <Concept title="Propiedades de los Fonones">
          <ul>
            <li><strong>Energía:</strong> E = ℏω</li>
            <li><strong>Momento cristalino:</strong> p = ℏk (cuasimomento)</li>
            <li><strong>Estadística:</strong> Bose-Einstein</li>
            <li><strong>Número de ocupación:</strong> n(ω) = 1/(e<sup>ℏω/k<sub>B</sub>T</sup> - 1)</li>
            <li><strong>Conservación:</strong> En procesos de dispersión (con vectores de red recíproca)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Modelo de Debye">
        <Concept title="Aproximación de Debye">
          <p>
            El <strong>modelo de Debye</strong> (1912) trata las vibraciones de la red como ondas sonoras 
            continuas con una frecuencia de corte:
          </p>
          <ul>
            <li><strong>Relación de dispersión lineal:</strong> ω = v<sub>s</sub>k</li>
            <li><strong>Frecuencia de Debye ω<sub>D</sub>:</strong> Frecuencia máxima</li>
            <li><strong>Densidad de estados:</strong> g(ω) ∝ ω² para ω &lt; ω<sub>D</sub></li>
            <li><strong>Corte:</strong> g(ω) = 0 para ω &gt; ω<sub>D</sub></li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Temperatura de Debye">
        <Formula 
          expression={String.raw`\Theta_D = \frac{\hbar\omega_D}{k_B} = \frac{\hbar v_s}{k_B}(6\pi^2 n)^{1/3}`}
          description="Temperatura de Debye"
          calculatorId="temperatura-debye"
          definitions={fononesDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Frecuencia de Debye", expression: String.raw`\omega_D = v_s(6\pi^2 n)^{1/3}` },
            { description: "Energía de Debye", expression: String.raw`E_D = k_B\Theta_D` }
          ]}
        />
        <div style={{ margin: '1em 0 1.5em 0' }}>
          <strong>Donde:</strong>
          <ul>
            <li>\(\Theta_D\): Temperatura de Debye (K)</li>
            <li>\(\hbar\): Constante de Planck reducida (J·s)</li>
            <li>\(\omega_D\): Frecuencia de Debye (rad/s)</li>
            <li>\(k_B\): Constante de Boltzmann (J/K)</li>
            <li>\(v_s\): Velocidad del sonido en el sólido (m/s)</li>
            <li>\(n\): Densidad numérica de átomos (m⁻³)</li>
          </ul>
        </div>

        <Concept title="Variables de la Temperatura de Debye">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em', marginBottom: '1.5em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '0.75em', textAlign: 'left', width: '15%'}}>Símbolo</th>
                <th style={{padding: '0.75em', textAlign: 'left', width: '35%'}}>Nombre</th>
                <th style={{padding: '0.75em', textAlign: 'left', width: '20%'}}>Unidades</th>
                <th style={{padding: '0.75em', textAlign: 'left', width: '30%'}}>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>Θ<sub>D</sub></td>
                <td style={{padding: '0.75em'}}>Temperatura de Debye</td>
                <td style={{padding: '0.75em'}}>K (kelvin)</td>
                <td style={{padding: '0.75em'}}>Escala característica de temperatura</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>ℏ</td>
                <td style={{padding: '0.75em'}}>Constante de Planck reducida</td>
                <td style={{padding: '0.75em'}}>1.054572 × 10⁻³⁴ J·s</td>
                <td style={{padding: '0.75em'}}>ℏ = h/(2π)</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>ω<sub>D</sub></td>
                <td style={{padding: '0.75em'}}>Frecuencia de Debye</td>
                <td style={{padding: '0.75em'}}>rad/s</td>
                <td style={{padding: '0.75em'}}>Frecuencia de corte máxima</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>v<sub>s</sub></td>
                <td style={{padding: '0.75em'}}>Velocidad del sonido</td>
                <td style={{padding: '0.75em'}}>m/s</td>
                <td style={{padding: '0.75em'}}>Velocidad de propagación de ondas en el sólido</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>n</td>
                <td style={{padding: '0.75em'}}>Densidad numérica</td>
                <td style={{padding: '0.75em'}}>m⁻³</td>
                <td style={{padding: '0.75em'}}>Número de átomos por unidad de volumen</td>
              </tr>
              <tr>
                <td style={{padding: '0.75em', fontWeight: 'bold'}}>k<sub>B</sub></td>
                <td style={{padding: '0.75em'}}>Constante de Boltzmann</td>
                <td style={{padding: '0.75em'}}>1.380649 × 10⁻²³ J/K</td>
                <td style={{padding: '0.75em'}}>Constante fundamental</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Significado de Θ<sub>D</sub>">
          <p>
            La temperatura de Debye es una escala característica que divide dos regímenes:
          </p>
          <ul>
            <li><strong>T ≫ Θ<sub>D</sub>:</strong> Régimen clásico (ley de Dulong-Petit)</li>
            <li><strong>T ≪ Θ<sub>D</sub>:</strong> Régimen cuántico (ley T³ de Debye)</li>
            <li><strong>Valores típicos:</strong> 100-1000 K para la mayoría de sólidos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Calor Específico en el Modelo de Debye">
        <Formula 
          expression={String.raw`C_v = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3\int_0^{\Theta_D/T}\frac{x^4e^x}{(e^x-1)^2}dx`}
          description="Calor específico de Debye (forma general)"
          calculatorId="calor-especifico-debye"
          definitions={fononesDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Límite de alta T", expression: String.raw`C_v \approx 3Nk_B` },
            { description: "Límite de baja T", expression: String.raw`C_v \approx \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3` }
          ]}
        />
        <div style={{ margin: '1em 0 1.5em 0' }}>
          <strong>Donde:</strong>
          <ul>
            <li>\(C_v\): Calor específico a volumen constante (J/K)</li>
            <li>\(N\): Número de átomos</li>
            <li>\(k_B\): Constante de Boltzmann (J/K)</li>
            <li>\(T\): Temperatura (K)</li>
            <li>\(\Theta_D\): Temperatura de Debye (K)</li>
            <li>\(x\): Variable de integración adimensional</li>
          </ul>
        </div>

        <Concept title="Límites del Calor Específico">
          <h3>Alta Temperatura (T ≫ Θ<sub>D</sub>)</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            <strong>C<sub>v</sub> → 3Nk<sub>B</sub> = 3R</strong>
          </p>
          <p>
            Recupera la <strong>ley de Dulong-Petit</strong> clásica: ~25 J/(mol·K) para sólidos monoatómicos.
          </p>

          <h3>Baja Temperatura (T ≪ Θ<sub>D</sub>)</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            <strong>C<sub>v</sub> ∝ T³</strong>
          </p>
          <p>
            La famosa <strong>ley T³ de Debye</strong>, confirmada experimentalmente para muchos sólidos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación: Einstein vs Debye">
        <Concept title="Modelo de Einstein (1907)">
          <p>
            Einstein propuso que todos los átomos vibran con la misma frecuencia ω<sub>E</sub>:
          </p>
          <ul>
            <li><strong>Calor específico:</strong> C<sub>v</sub> = 3Nk<sub>B</sub>(ℏω<sub>E</sub>/k<sub>B</sub>T)²e<sup>ℏω<sub>E</sub>/k<sub>B</sub>T</sup>/(e<sup>ℏω<sub>E</sub>/k<sub>B</sub>T</sup>-1)²</li>
            <li><strong>Baja T:</strong> C<sub>v</sub> ∝ e<sup>-Θ<sub>E</sub>/T</sup> (exponencial, no T³)</li>
            <li><strong>Limitación:</strong> No reproduce bien datos a bajas temperaturas</li>
          </ul>
        </Concept>

        <Concept title="Ventajas del Modelo de Debye">
          <ul>
            <li><strong>Espectro realista:</strong> Incluye fonones de todas las frecuencias</li>
            <li><strong>Ley T³:</strong> Acuerdo excelente con experimentos a bajas T</li>
            <li><strong>Base física:</strong> Ondas sonoras en medio continuo</li>
            <li><strong>Aplicabilidad:</strong> Válido para la mayoría de sólidos</li>
          </ul>
        </Concept>

        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Aspecto</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Einstein</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Debye</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Frecuencias</td>
                <td style={{padding: '0.75em'}}>Una sola (ω<sub>E</sub>)</td>
                <td style={{padding: '0.75em'}}>Espectro continuo hasta ω<sub>D</sub></td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Densidad de estados</td>
                <td style={{padding: '0.75em'}}>δ(ω - ω<sub>E</sub>)</td>
                <td style={{padding: '0.75em'}}>g(ω) ∝ ω²</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>C<sub>v</sub> a baja T</td>
                <td style={{padding: '0.75em'}}>∝ e<sup>-Θ<sub>E</sub>/T</sup></td>
                <td style={{padding: '0.75em'}}>∝ T³</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>C<sub>v</sub> a alta T</td>
                <td style={{padding: '0.75em'}}>3Nk<sub>B</sub></td>
                <td style={{padding: '0.75em'}}>3Nk<sub>B</sub></td>
              </tr>
              <tr>
                <td style={{padding: '0.75em'}}>Acuerdo experimental</td>
                <td style={{padding: '0.75em'}}>Bueno a T alta</td>
                <td style={{padding: '0.75em'}}>Excelente en todo rango</td>
              </tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Fonones">
        <Concept title="Fonones Acústicos">
          <p>
            <strong>Modos acústicos</strong> tienen ω → 0 cuando k → 0:
          </p>
          <ul>
            <li><strong>Longitudinales (LA):</strong> Vibración paralela a la dirección de propagación</li>
            <li><strong>Transversales (TA):</strong> Vibración perpendicular (2 modos)</li>
            <li><strong>Velocidad:</strong> v<sub>LA</sub> &gt; v<sub>TA</sub> típicamente</li>
            <li><strong>Contribución:</strong> Dominan el calor específico a bajas T</li>
          </ul>
        </Concept>

        <Concept title="Fonones Ópticos">
          <p>
            <strong>Modos ópticos</strong> aparecen en cristales con más de un átomo por celda:
          </p>
          <ul>
            <li><strong>Frecuencia finita:</strong> ω<sub>óptico</sub> ≠ 0 cuando k = 0</li>
            <li><strong>Origen:</strong> Átomos en la celda vibran en contrafase</li>
            <li><strong>Interacción:</strong> Pueden acoplarse con luz (IR, Raman)</li>
            <li><strong>Ejemplo:</strong> NaCl tiene 3 modos acústicos + 3 ópticos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Valores de Θ<sub>D</sub> para Materiales Comunes">
        <Concept title="Tabla de Temperaturas de Debye">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Material</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Θ<sub>D</sub> (K)</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Plomo (Pb)</td>
                <td style={{padding: '0.75em'}}>105</td>
                <td style={{padding: '0.75em'}}>Metal blando</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Aluminio (Al)</td>
                <td style={{padding: '0.75em'}}>428</td>
                <td style={{padding: '0.75em'}}>Metal ligero</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Cobre (Cu)</td>
                <td style={{padding: '0.75em'}}>343</td>
                <td style={{padding: '0.75em'}}>Metal</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Hierro (Fe)</td>
                <td style={{padding: '0.75em'}}>470</td>
                <td style={{padding: '0.75em'}}>Metal</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}>Diamante (C)</td>
                <td style={{padding: '0.75em'}}>2230</td>
                <td style={{padding: '0.75em'}}>Covalente duro</td>
              </tr>
              <tr>
                <td style={{padding: '0.75em'}}>Silicio (Si)</td>
                <td style={{padding: '0.75em'}}>645</td>
                <td style={{padding: '0.75em'}}>Semiconductor</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Interpretación de Θ<sub>D</sub>">
          <ul>
            <li><strong>Θ<sub>D</sub> alta:</strong> Enlaces fuertes, átomos ligeros (diamante)</li>
            <li><strong>Θ<sub>D</sub> baja:</strong> Enlaces débiles, átomos pesados (plomo)</li>
            <li><strong>Correlación:</strong> Θ<sub>D</sub> ∝ √(rigidez/masa)</li>
            <li><strong>Aplicación:</strong> Predicción de propiedades térmicas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones de los Fonones">
        <Concept title="Conductividad Térmica">
          <p>
            Los fonones son los principales portadores de calor en aislantes:
          </p>
          <ul>
            <li><strong>Ley de Fourier:</strong> J<sub>Q</sub> = -κ∇T</li>
            <li><strong>Conductividad:</strong> κ ∝ C<sub>v</sub>vℓ (calor específico × velocidad × camino libre medio)</li>
            <li><strong>Dispersión:</strong> Límites de grano, impurezas, otros fonones</li>
            <li><strong>Dependencia con T:</strong> κ(T) tiene un máximo característico</li>
          </ul>
        </Concept>

        <Concept title="Dispersión de Neutrones">
          <ul>
            <li><strong>Técnica experimental:</strong> Neutrones dispersados por fonones</li>
            <li><strong>Información:</strong> Relación de dispersión ω(k) completa</li>
            <li><strong>Conservación:</strong> Energía y momento en la dispersión</li>
            <li><strong>Aplicación:</strong> Determinación de fuerzas interatómicas</li>
          </ul>
        </Concept>

        <Concept title="Espectroscopía Raman e Infrarroja">
          <ul>
            <li><strong>Raman:</strong> Dispersión inelástica de luz por fonones</li>
            <li><strong>IR:</strong> Absorción de luz por fonones ópticos</li>
            <li><strong>Reglas de selección:</strong> Determinadas por simetría</li>
            <li><strong>Aplicaciones:</strong> Caracterización de materiales, sensores</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interacciones de Fonones">
        <Concept title="Procesos Anarmónicos">
          <p>
            Las interacciones entre fonones surgen de términos anarmónicos en el potencial:
          </p>
          <ul>
            <li><strong>Procesos de 3 fonones:</strong> 1 fonón → 2 fonones o viceversa</li>
            <li><strong>Procesos normales (N):</strong> Conservan momento cristalino</li>
            <li><strong>Procesos Umklapp (U):</strong> Involucran vector de red recíproca</li>
            <li><strong>Consecuencias:</strong> Resistencia térmica, expansión térmica</li>
          </ul>
        </Concept>

        <Concept title="Interacción Electrón-Fonón">
          <ul>
            <li><strong>Dispersión:</strong> Electrones dispersados por vibraciones de la red</li>
            <li><strong>Resistividad:</strong> ρ(T) ∝ T a altas T (dispersión por fonones)</li>
            <li><strong>Superconductividad:</strong> Atracción mediada por fonones (teoría BCS)</li>
            <li><strong>Polarones:</strong> Electrones "vestidos" por nube de fonones</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Numéricos">
        <Concept title="Ejemplo 1: Cobre a Temperatura Ambiente">
          <h3>Datos</h3>
          <ul>
            <li>Material: Cu</li>
            <li>Θ<sub>D</sub> = 343 K</li>
            <li>T = 300 K</li>
            <li>T/Θ<sub>D</sub> = 0.87 (régimen intermedio)</li>
          </ul>

          <h3>Cálculo</h3>
          <p style={{marginLeft: '1em'}}>
            <strong>Calor específico molar:</strong><br/>
            C<sub>v</sub> ≈ 3R × f(T/Θ<sub>D</sub>)<br/>
            C<sub>v</sub> ≈ 24.5 J/(mol·K)
          </p>
          <p style={{marginLeft: '1em'}}>
            <strong>Valor experimental:</strong> 24.4 J/(mol·K) ✓
          </p>
        </Concept>

        <Concept title="Ejemplo 2: Diamante a Baja Temperatura">
          <h3>Datos</h3>
          <ul>
            <li>Material: C (diamante)</li>
            <li>Θ<sub>D</sub> = 2230 K</li>
            <li>T = 100 K</li>
            <li>T/Θ<sub>D</sub> = 0.045 (régimen de baja T)</li>
          </ul>

          <h3>Cálculo (Ley T³)</h3>
          <p style={{marginLeft: '1em'}}>
            <strong>Calor específico:</strong><br/>
            C<sub>v</sub> ≈ (12π⁴/5)R(T/Θ<sub>D</sub>)³<br/>
            C<sub>v</sub> ≈ 0.23 J/(mol·K)
          </p>
          <p style={{marginLeft: '1em'}}>
            <strong>Observación:</strong> Mucho menor que 3R = 24.9 J/(mol·K)
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Limitaciones del Modelo de Debye">
        <Concept title="Aproximaciones del Modelo">
          <ul>
            <li><strong>Relación de dispersión lineal:</strong> ω = v<sub>s</sub>k solo válida para k pequeño</li>
            <li><strong>Velocidad constante:</strong> En realidad v<sub>s</sub> depende de la dirección</li>
            <li><strong>Corte abrupto:</strong> La densidad de estados real es más suave</li>
            <li><strong>Isotropía:</strong> Asume cristal isotrópico</li>
          </ul>
        </Concept>

        <Concept title="Mejoras Posibles">
          <ul>
            <li><strong>Cálculos ab initio:</strong> Dinámica de red desde primeros principios</li>
            <li><strong>Dispersión real:</strong> Medida por dispersión de neutrones</li>
            <li><strong>Anisotropía:</strong> Considerar diferentes direcciones cristalográficas</li>
            <li><strong>Anharmonicidad:</strong> Incluir términos no cuadráticos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Tecnológicas">
        <Concept title="Ingeniería de Materiales">
          <ul>
            <li><strong>Aislantes térmicos:</strong> Materiales con baja conductividad térmica</li>
            <li><strong>Disipadores de calor:</strong> Alta conductividad térmica (diamante, grafeno)</li>
            <li><strong>Termoeléctricos:</strong> Optimización de figura de mérito ZT</li>
            <li><strong>Superconductores:</strong> Diseño basado en acoplamiento electrón-fonón</li>
          </ul>
        </Concept>

        <Concept title="Nanotecnología">
          <ul>
            <li><strong>Nanoestructuras:</strong> Confinamiento de fonones</li>
            <li><strong>Cristales fonónicos:</strong> Control de propagación de calor</li>
            <li><strong>Grafeno:</strong> Fonones en 2D</li>
            <li><strong>Nanohilos:</strong> Transporte térmico cuantizado</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia Histórica">
        <Concept title="Desarrollo Histórico">
          <ul>
            <li><strong>1819:</strong> Dulong y Petit descubren ley empírica</li>
            <li><strong>1907:</strong> Einstein propone modelo cuántico</li>
            <li><strong>1912:</strong> Debye mejora modelo con espectro continuo</li>
            <li><strong>1929:</strong> Peierls desarrolla teoría de procesos Umklapp</li>
            <li><strong>1950s:</strong> Dispersión de neutrones confirma teoría</li>
          </ul>
        </Concept>

        <Concept title="Impacto Científico">
          <ul>
            <li><strong>Validación de mecánica cuántica:</strong> Explicación del calor específico</li>
            <li><strong>Concepto de cuasipartícula:</strong> Fonones como excitaciones elementales</li>
            <li><strong>Física del estado sólido:</strong> Base de la teoría moderna</li>
            <li><strong>Aplicaciones prácticas:</strong> Diseño de materiales térmicos</li>
          </ul>
        </Concept>
      </TheorySection>
      {/* Sección de aplicaciones */}
      <div className="theory-applications-section">
        <h2>
          <span role="img" aria-label="Aplicaciones">🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Diseño de materiales aislantes y conductores térmicos</li>
          <li>Nanotecnología: control de fonones en nanoestructuras</li>
          <li>Termoeléctricos y refrigeración sólida</li>
          <li>Caracterización de materiales mediante espectroscopía Raman e IR</li>
          <li>Superconductividad y acoplamiento electrón-fonón</li>
          <li>Ingeniería de dispositivos electrónicos y sensores</li>
        </ul>
      </div>

      {/* Sección de anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span role="img" aria-label="Curiosidades">✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>El término "fonón" fue introducido en 1932 por Tamm, inspirado en el "fotón".</li>
          <li>El modelo de Debye resolvió el misterio del calor específico a bajas temperaturas, que la física clásica no podía explicar.</li>
          <li>El diamante, con la mayor temperatura de Debye conocida, es un excelente conductor térmico.</li>
          <li>La espectroscopía Raman permite "ver" fonones en acción dentro de los materiales.</li>
          <li>Los fonones pueden manipularse en cristales fonónicos para controlar el flujo de calor, como si fueran "luz sólida".</li>
        </ul>
      </div>

      {/* Sección de historia */}
      <div className="theory-history-section">
        <h2>
          <span role="img" aria-label="Historia">📜</span> Historia: El desarrollo del modelo de Debye y los fonones
        </h2>
        <ul>
          <li>1907: Einstein propone el primer modelo cuántico del calor específico.</li>
          <li>1912: Peter Debye introduce el espectro continuo de vibraciones y la temperatura de Debye.</li>
          <li>1932: Tamm acuña el término "fonón" para describir los cuantos de vibración.</li>
          <li>Décadas posteriores: La dispersión de neutrones y la espectroscopía confirman la existencia de fonones.</li>
          <li>Hoy: El concepto de fonón es central en la física del estado sólido y la ingeniería de materiales.</li>
        </ul>
      </div>
    </>
  );
};

export default FononesModeloDebyeTheory;
