import React from 'react';
import { TheorySection, Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Estadísticas Cuánticas",
  descripcion: "Fermi-Dirac y Bose-Einstein",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const EstadisticasCuanticasTheory = () => {
  return (
    <>
      <TheorySection title="Introducción a las Estadísticas Cuánticas">
        <p>
          En mecánica cuántica, las partículas idénticas son fundamentalmente indistinguibles, 
          lo que tiene consecuencias profundas para su comportamiento estadístico. Dependiendo 
          de su <strong>spin</strong>, las partículas se dividen en dos categorías que obedecen 
          estadísticas cuánticas diferentes:
        </p>

        <ul>
          <li>
            <strong>Fermiones</strong> (spin semientero: 1/2, 3/2, ...): Obedecen la 
            <strong> estadística de Fermi-Dirac</strong>
          </li>
          <li>
            <strong>Bosones</strong> (spin entero: 0, 1, 2, ...): Obedecen la 
            <strong> estadística de Bose-Einstein</strong>
          </li>
        </ul>

        <Important>
          La distinción entre fermiones y bosones es una de las características más fundamentales 
          de la naturaleza cuántica y determina completamente el comportamiento colectivo de 
          sistemas de partículas idénticas.
        </Important>
      </TheorySection>

      <TheorySection title="El Principio de Exclusión de Pauli">
        <Concept title="Fundamento de la Estadística de Fermi-Dirac">
          <p>
            El <strong>principio de exclusión de Pauli</strong> establece que:
          </p>

          <Important>
            Dos fermiones idénticos no pueden ocupar el mismo estado cuántico simultáneamente.
          </Important>

          <p>
            Esto significa que para fermiones, el número de ocupación de cualquier estado 
            cuántico está restringido a:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            n_i = 0 o 1
          </div>

          <p>
            <strong>Ejemplos de fermiones:</strong>
          </p>
          <ul>
            <li>Electrones (spin 1/2)</li>
            <li>Protones (spin 1/2)</li>
            <li>Neutrones (spin 1/2)</li>
            <li>Quarks (spin 1/2)</li>
            <li>Neutrinos (spin 1/2)</li>
          </ul>
        </Concept>

        <Concept title="Consecuencias del Principio de Pauli">
          <p>
            El principio de exclusión tiene consecuencias fundamentales:
          </p>

          <ul>
            <li>
              <strong>Estructura atómica:</strong> Los electrones se organizan en capas y 
              subcapas, explicando la tabla periódica
            </li>
            <li>
              <strong>Estabilidad de la materia:</strong> Impide el colapso de átomos y 
              estrellas enanas blancas
            </li>
            <li>
              <strong>Propiedades de metales:</strong> Determina la estructura de bandas 
              electrónicas
            </li>
            <li>
              <strong>Presión de degeneración:</strong> Sostiene estrellas de neutrones 
              contra el colapso gravitacional
            </li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Estadística de Fermi-Dirac">
        <Concept title="Distribución de Fermi-Dirac">
          <p>
            Para un sistema de fermiones en equilibrio térmico a temperatura T y potencial 
            químico μ, el <strong>número promedio de ocupación</strong> de un estado con 
            energía ε es:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            f_FD(ε) = 1 / (exp((ε - μ) / k_B T) + 1)
          </div>

          <p>
            donde:
          </p>
          <ul>
            <li><strong>f_FD(ε):</strong> número promedio de fermiones en el estado con energía ε</li>
            <li><strong>μ:</strong> potencial químico (nivel de Fermi a T = 0)</li>
            <li><strong>k_B:</strong> constante de Boltzmann</li>
            <li><strong>T:</strong> temperatura absoluta</li>
          </ul>

          <Important>
            La distribución de Fermi-Dirac garantiza automáticamente que 0 ≤ f_FD ≤ 1, 
            respetando el principio de exclusión de Pauli.
          </Important>
        </Concept>

        <Concept title="Características de la Distribución FD">
          <p>
            <strong>A temperatura T = 0:</strong>
          </p>
          <ul>
            <li>f_FD(ε) = 1 para ε {'<'} μ (todos los estados ocupados)</li>
            <li>f_FD(ε) = 0 para ε {'>'} μ (todos los estados vacíos)</li>
            <li>Transición abrupta en ε = μ (energía de Fermi E_F)</li>
          </ul>

          <p>
            <strong>A temperatura T {'>'} 0:</strong>
          </p>
          <ul>
            <li>La transición se suaviza en un rango ~k_B T alrededor de μ</li>
            <li>f_FD(μ) = 1/2 siempre (independiente de T)</li>
            <li>Estados por debajo de μ mayormente ocupados</li>
            <li>Estados por encima de μ mayormente vacíos</li>
          </ul>

          <p>
            <strong>A temperaturas muy altas (k_B T {'>>'} μ):</strong>
          </p>
          <ul>
            <li>f_FD → exp(-(ε - μ) / k_B T) (límite clásico de Boltzmann)</li>
            <li>La ocupación se vuelve exponencialmente pequeña</li>
            <li>El principio de Pauli deja de ser relevante</li>
          </ul>
        </Concept>

        <Example title="Ejemplo: Electrones en un Metal">
          En un metal a temperatura ambiente (T ≈ 300 K):

          <strong>Energía de Fermi típica:</strong>
          <div style={{margin: '1rem 0'}}>
            E_F ≈ 5 eV ≈ 8 × 10⁻¹⁹ J
          </div>

          <strong>Energía térmica:</strong>
          <div style={{margin: '1rem 0'}}>
            k_B T ≈ 0.026 eV ≈ 4 × 10⁻²¹ J
          </div>

          <strong>Razón:</strong>
          <div style={{margin: '1rem 0'}}>
            k_B T / E_F ≈ 0.005 {'<<'} 1
          </div>

          <strong>Conclusión:</strong> Los electrones en metales están fuertemente degenerados 
          incluso a temperatura ambiente. Solo los electrones en una capa delgada (~k_B T) 
          alrededor de E_F participan en procesos térmicos.

          <strong>Temperatura de Fermi:</strong>
          <div style={{margin: '1rem 0'}}>
            T_F = E_F / k_B ≈ 58,000 K
          </div>

          El metal se comportaría clásicamente solo a temperaturas comparables a T_F, 
          mucho más altas que su punto de fusión.
        </Example>
      </TheorySection>

      <TheorySection title="Estadística de Bose-Einstein">
        <Concept title="Bosones y Condensación">
          <p>
            Los <strong>bosones</strong> no están sujetos al principio de exclusión de Pauli. 
            Múltiples bosones pueden ocupar el mismo estado cuántico, lo que lleva a fenómenos 
            cuánticos macroscópicos espectaculares.
          </p>

          <p>
            <strong>Ejemplos de bosones:</strong>
          </p>
          <ul>
            <li>Fotones (spin 1) - partículas de luz</li>
            <li>Fonones (spin 0) - cuantos de vibración en sólidos</li>
            <li>Átomos de ⁴He (spin 0) - superfluido</li>
            <li>Pares de Cooper (spin 0) - superconductividad</li>
            <li>Bosones de Higgs (spin 0)</li>
          </ul>
        </Concept>

        <Concept title="Distribución de Bose-Einstein">
          <p>
            Para un sistema de bosones en equilibrio térmico, el número promedio de ocupación 
            de un estado con energía ε es:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            f_BE(ε) = 1 / (exp((ε - μ) / k_B T) - 1)
          </div>

          <Important>
            Para bosones, el potencial químico debe satisfacer μ {'<'} ε_0 (donde ε_0 es la 
            energía del estado fundamental) para que f_BE sea positivo. Típicamente μ {'<'} 0.
          </Important>
        </Concept>

        <Concept title="Características de la Distribución BE">
          <p>
            <strong>Diferencias clave con Fermi-Dirac:</strong>
          </p>
          <ul>
            <li>No hay límite superior para f_BE (puede ser {'>'} 1)</li>
            <li>f_BE diverge cuando ε → μ</li>
            <li>Permite ocupación macroscópica del estado fundamental</li>
            <li>El signo menos en el denominador es crucial</li>
          </ul>

          <p>
            <strong>A temperaturas bajas:</strong>
          </p>
          <ul>
            <li>Los bosones tienden a acumularse en estados de baja energía</li>
            <li>Puede ocurrir <strong>condensación de Bose-Einstein</strong></li>
            <li>Una fracción macroscópica ocupa el estado fundamental</li>
          </ul>

          <p>
            <strong>A temperaturas altas:</strong>
          </p>
          <ul>
            <li>f_BE → exp(-(ε - μ) / k_B T) (límite clásico)</li>
            <li>Comportamiento similar a partículas clásicas</li>
          </ul>
        </Concept>

        <Example title="Ejemplo: Radiación de Cuerpo Negro (Fotones)">
          Los fotones son bosones con μ = 0 (el número de fotones no se conserva):

          <strong>Distribución de Planck:</strong>
          <div style={{margin: '1rem 0'}}>
            n(ω) = 1 / (exp(ℏω / k_B T) - 1)
          </div>

          <strong>Densidad de energía espectral:</strong>
          <div style={{margin: '1rem 0'}}>
            u(ω) = (ℏω³ / π²c³) × 1 / (exp(ℏω / k_B T) - 1)
          </div>

          <strong>Ley de Stefan-Boltzmann:</strong>
          <div style={{margin: '1rem 0'}}>
            u_total = σT⁴  donde σ = π²k_B⁴ / (60ℏ³c²)
          </div>

          Esta distribución explica perfectamente el espectro de radiación térmica y 
          resolvió la "catástrofe ultravioleta" de la física clásica.
        </Example>
      </TheorySection>

      <TheorySection title="Comparación de las Tres Estadísticas">
        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Estadística</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Distribución</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Partículas</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Ocupación</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}><strong>Maxwell-Boltzmann</strong></td>
                <td style={{padding: '0.75em'}}>exp(-(ε-μ)/k_B T)</td>
                <td style={{padding: '0.75em'}}>Clásicas distinguibles</td>
                <td style={{padding: '0.75em'}}>0 ≤ n ≤ ∞</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}><strong>Fermi-Dirac</strong></td>
                <td style={{padding: '0.75em'}}>1/(exp((ε-μ)/k_B T) + 1)</td>
                <td style={{padding: '0.75em'}}>Fermiones (spin 1/2, 3/2, ...)</td>
                <td style={{padding: '0.75em'}}>n = 0 o 1</td>
              </tr>
              <tr>
                <td style={{padding: '0.75em'}}><strong>Bose-Einstein</strong></td>
                <td style={{padding: '0.75em'}}>1/(exp((ε-μ)/k_B T) - 1)</td>
                <td style={{padding: '0.75em'}}>Bosones (spin 0, 1, 2, ...)</td>
                <td style={{padding: '0.75em'}}>0 ≤ n ≤ ∞</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Límite Clásico">
          <p>
            Cuando exp((ε - μ) / k_B T) {'>>'} 1, ambas estadísticas cuánticas convergen a 
            la distribución clásica de Maxwell-Boltzmann:
          </p>

          <div style={{textAlign: 'center', margin: '1rem 0', fontSize: '1.2rem'}}>
            f_FD ≈ f_BE ≈ exp(-(ε - μ) / k_B T)
          </div>

          <p>
            <strong>Condición para comportamiento clásico:</strong>
          </p>
          <div style={{textAlign: 'center', margin: '1rem 0'}}>
            n λ_T³ {'<<'} 1
          </div>

          <p>
            donde n es la densidad numérica y λ_T = h/√(2πmk_B T) es la longitud de onda 
            térmica de de Broglie.
          </p>

          <Important>
            El comportamiento cuántico se manifiesta cuando la separación promedio entre 
            partículas es comparable a su longitud de onda de de Broglie.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Físicas">
        <Concept title="Electrones en Semiconductores">
          <p>
            Los semiconductores son materiales donde el comportamiento de los electrones 
            está gobernado por la estadística de Fermi-Dirac:
          </p>

          <ul>
            <li>
              <strong>Banda de conducción:</strong> Electrones siguen f_FD con μ cerca del 
              borde de la banda
            </li>
            <li>
              <strong>Banda de valencia:</strong> Huecos (ausencia de electrones) se comportan 
              como partículas
            </li>
            <li>
              <strong>Dopaje:</strong> Modifica μ y controla la conductividad
            </li>
            <li>
              <strong>Uniones p-n:</strong> Base de diodos y transistores
            </li>
          </ul>
        </Concept>

        <Concept title="Superfluidez y Superconductividad">
          <p>
            Fenómenos cuánticos macroscópicos relacionados con estadísticas cuánticas:
          </p>

          <ul>
            <li>
              <strong>Helio-4 superfluido:</strong> Condensación de Bose-Einstein de átomos 
              de ⁴He por debajo de 2.17 K
            </li>
            <li>
              <strong>Superconductividad:</strong> Pares de Cooper (dos electrones) forman 
              bosones compuestos que se condensan
            </li>
            <li>
              <strong>Resistencia cero:</strong> Consecuencia de la coherencia cuántica 
              macroscópica
            </li>
          </ul>
        </Concept>

        <Concept title="Astrofísica">
          <p>
            Las estadísticas cuánticas son cruciales en objetos astrofísicos extremos:
          </p>

          <ul>
            <li>
              <strong>Enanas blancas:</strong> Sostenidas por presión de degeneración 
              electrónica (Fermi-Dirac)
            </li>
            <li>
              <strong>Estrellas de neutrones:</strong> Presión de degeneración de neutrones 
              previene el colapso
            </li>
            <li>
              <strong>Límite de Chandrasekhar:</strong> Masa máxima de enana blanca 
              (~1.4 masas solares)
            </li>
            <li>
              <strong>Radiación cósmica de fondo:</strong> Fotones con distribución de 
              Planck a T ≈ 2.7 K
            </li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Resumen y Conceptos Clave">
        <Important>
          <strong>Puntos fundamentales para recordar:</strong>
          <ul>
            <li>
              <strong>Fermiones:</strong> Spin semientero, obedecen Pauli, f_FD = 1/(e^((ε-μ)/k_B T) + 1)
            </li>
            <li>
              <strong>Bosones:</strong> Spin entero, sin restricción Pauli, f_BE = 1/(e^((ε-μ)/k_B T) - 1)
            </li>
            <li>
              <strong>Principio de Pauli:</strong> Fundamental para la estructura de la materia
            </li>
            <li>
              <strong>Degeneración:</strong> Comportamiento cuántico cuando n λ_T³ ≈ 1
            </li>
            <li>
              <strong>Límite clásico:</strong> Ambas estadísticas → Maxwell-Boltzmann cuando 
              n λ_T³ {'<<'} 1
            </li>
            <li>
              <strong>Aplicaciones:</strong> Desde semiconductores hasta estrellas de neutrones
            </li>
          </ul>
        </Important>
      </TheorySection>

      {/* Sección de aplicaciones */}
      <div className="theory-applications-section">
        <h2>
          <span role="img" aria-label="Aplicaciones">🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Electrónica y semiconductores: transistores, diodos, chips</li>
          <li>Astrofísica: estructura de enanas blancas y estrellas de neutrones</li>
          <li>Superconductividad y superfluidez</li>
          <li>Láseres y óptica cuántica (bosones)</li>
          <li>Refrigeración por evaporación cuántica</li>
          <li>Computación cuántica y tecnologías emergentes</li>
        </ul>
      </div>

      {/* Sección de anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span role="img" aria-label="Curiosidades">✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>Wolfgang Pauli propuso su principio de exclusión en 1925, revolucionando la física atómica.</li>
          <li>La estadística de Bose-Einstein fue desarrollada por Satyendra Nath Bose y extendida por Einstein en 1924-25.</li>
          <li>El primer condensado de Bose-Einstein fue creado en laboratorio en 1995, más de 70 años después de su predicción teórica.</li>
          <li>El comportamiento colectivo de fermiones y bosones es la base de fenómenos como la superconductividad y la superfluidez.</li>
          <li>El láser es una aplicación directa de la acumulación de bosones en un estado cuántico.</li>
        </ul>
      </div>

      {/* Sección de historia */}
      <div className="theory-history-section">
        <h2>
          <span role="img" aria-label="Historia">📜</span> Historia: El desarrollo de las estadísticas cuánticas
        </h2>
        <ul>
          <li>1924: S.N. Bose envía un artículo sobre fotones a Einstein, quien lo traduce y extiende a átomos.</li>
          <li>1925: Wolfgang Pauli formula el principio de exclusión para explicar la estructura atómica.</li>
          <li>1930: Enrico Fermi y Paul Dirac desarrollan la estadística para fermiones.</li>
          <li>Décadas posteriores: Se confirman experimentalmente predicciones como la degeneración de electrones y la condensación de bosones.</li>
          <li>1995: Primer condensado de Bose-Einstein observado en laboratorio (Cornell, Wieman, Ketterle).</li>
        </ul>
      </div>
    </>
  );
};

export default EstadisticasCuanticasTheory;
