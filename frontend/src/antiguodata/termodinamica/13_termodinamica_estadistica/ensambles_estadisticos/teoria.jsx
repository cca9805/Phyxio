import React from 'react';
import { TheorySection, Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Ensambles Estadísticos",
  descripcion: "Microcanónico, canónico y gran canónico",
  isTheoryOnly: true,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

const EnsambleEstadisticosTheory = () => {
  return (
    <>
      <TheorySection title="Introducción a los Ensambles Estadísticos">
        <p>
          Un <strong>ensamble estadístico</strong> es una colección conceptual de un número muy 
          grande de copias idénticas de un sistema, cada una en un microestado diferente pero 
          todas compartiendo las mismas restricciones macroscópicas. Este concepto, introducido 
          por Josiah Willard Gibbs, es fundamental para la mecánica estadística moderna.
        </p>

        <Important>
          Los ensambles estadísticos proporcionan un marco matemático riguroso para calcular 
          promedios estadísticos y conectar la mecánica microscópica con la termodinámica 
          macroscópica. Diferentes ensambles corresponden a diferentes condiciones experimentales.
        </Important>

        <p>
          En lugar de seguir la evolución temporal de un único sistema (lo cual es prácticamente 
          imposible para sistemas con 10²³ partículas), consideramos un ensamble de sistemas y 
          calculamos promedios sobre este ensamble. El postulado ergódico garantiza que estos 
          promedios de ensamble son equivalentes a promedios temporales.
        </p>
      </TheorySection>

      <TheorySection title="El Ensamble Microcanónico">
        <Concept title="Definición y Características">
          <p>
            El <strong>ensamble microcanónico</strong> describe sistemas completamente aislados 
            con energía, volumen y número de partículas fijos:
          </p>

          <ul>
            <li><strong>Energía E:</strong> Fija (dentro de un rango pequeño δE)</li>
            <li><strong>Volumen V:</strong> Fijo</li>
            <li><strong>Número de partículas N:</strong> Fijo</li>
            <li><strong>Aislamiento:</strong> No intercambia energía, volumen ni partículas</li>
          </ul>

          <Important>
            En el ensamble microcanónico, todos los microestados con energía entre E y E + δE 
            son igualmente probables (postulado de igual probabilidad a priori).
          </Important>
        </Concept>

        <Concept title="Función de Densidad de Estados">
          <p>
            La cantidad fundamental en el ensamble microcanónico es la <strong>densidad de 
            estados</strong> Ω(E, V, N), que cuenta el número de microestados accesibles:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            Ω(E, V, N) = número de microestados con energía E
          </div>

          <p>
            La entropía se define mediante la fórmula de Boltzmann:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            S(E, V, N) = k_B ln Ω(E, V, N)
          </div>

          <p>
            Esta es la definición más fundamental de entropía en mecánica estadística.
          </p>
        </Concept>

        <Concept title="Temperatura y Presión Microcanónicas">
          <p>
            Las variables termodinámicas se obtienen como derivadas de la entropía:
          </p>

          <ul>
            <li>
              <strong>Temperatura:</strong>
              <div style={{margin: '0.5rem 0'}}>
                1/T = (∂S/∂E)_V,N = k_B (∂ ln Ω / ∂E)_V,N
              </div>
            </li>
            <li>
              <strong>Presión:</strong>
              <div style={{margin: '0.5rem 0'}}>
                P/T = (∂S/∂V)_E,N = k_B (∂ ln Ω / ∂V)_E,N
              </div>
            </li>
            <li>
              <strong>Potencial químico:</strong>
              <div style={{margin: '0.5rem 0'}}>
                -μ/T = (∂S/∂N)_E,V = k_B (∂ ln Ω / ∂N)_E,V
              </div>
            </li>
          </ul>

          <Important>
            Estas definiciones conectan las cantidades microscópicas (Ω) con las variables 
            termodinámicas macroscópicas (T, P, μ).
          </Important>
        </Concept>

        <Example title="Ejemplo: Gas Ideal en Ensamble Microcanónico">
          Para un gas ideal monoatómico de N partículas en volumen V con energía total E:

          <strong>Densidad de estados (resultado clásico):</strong>
          <div style={{margin: '1rem 0'}}>
            Ω(E, V, N) ∝ V^N E^(3N/2)
          </div>

          <strong>Entropía:</strong>
          <div style={{margin: '1rem 0'}}>
            S = Nk_B [ln(V/N) + (3/2)ln(E/N) + constante]
          </div>

          <strong>Temperatura:</strong>
          <div style={{margin: '1rem 0'}}>
            1/T = (∂S/∂E) = (3/2)Nk_B/E  →  E = (3/2)Nk_B T
          </div>

          <strong>Presión:</strong>
          <div style={{margin: '1rem 0'}}>
            P/T = (∂S/∂V) = Nk_B/V  →  PV = Nk_B T
          </div>

          Recuperamos la ecuación de estado del gas ideal y el teorema de equipartición.
        </Example>

        <Concept title="Ventajas y Limitaciones">
          <p>
            <strong>Ventajas del ensamble microcanónico:</strong>
          </p>
          <ul>
            <li>Conceptualmente más simple: sistema completamente aislado</li>
            <li>Definición más fundamental de entropía</li>
            <li>Útil para sistemas pequeños donde las fluctuaciones importan</li>
          </ul>

          <p>
            <strong>Limitaciones:</strong>
          </p>
          <ul>
            <li>Difícil de calcular Ω(E) para sistemas complejos</li>
            <li>Energía fija es poco realista experimentalmente</li>
            <li>Matemáticamente más complicado que otros ensambles</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="El Ensamble Canónico">
        <Concept title="Definición y Características">
          <p>
            El <strong>ensamble canónico</strong> describe sistemas en contacto térmico con un 
            reservorio a temperatura T fija:
          </p>

          <ul>
            <li><strong>Temperatura T:</strong> Fija (contacto con reservorio térmico)</li>
            <li><strong>Volumen V:</strong> Fijo</li>
            <li><strong>Número de partículas N:</strong> Fijo</li>
            <li><strong>Energía E:</strong> Fluctúa (intercambio con el reservorio)</li>
          </ul>

          <Important>
            El ensamble canónico es el más utilizado en la práctica porque corresponde a la 
            situación experimental más común: un sistema en equilibrio térmico con su entorno.
          </Important>
        </Concept>

        <Concept title="Distribución de Probabilidad Canónica">
          <p>
            La probabilidad de encontrar el sistema en un microestado i con energía E_i es:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            P_i = (1/Z) exp(-E_i / k_B T)
          </div>

          <p>
            donde Z es la <strong>función de partición canónica</strong>:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            Z(T, V, N) = Σ_i exp(-E_i / k_B T)
          </div>

          <p>
            Esta es la distribución de Gibbs que estudiamos anteriormente.
          </p>
        </Concept>

        <Concept title="Función de Partición y Termodinámica">
          <p>
            La función de partición Z es la cantidad central del ensamble canónico. Todas las 
            propiedades termodinámicas se derivan de ella:
          </p>

          <ul>
            <li>
              <strong>Energía libre de Helmholtz:</strong>
              <div style={{margin: '0.5rem 0'}}>
                F(T, V, N) = -k_B T ln Z
              </div>
            </li>
            <li>
              <strong>Energía interna:</strong>
              <div style={{margin: '0.5rem 0'}}>
                U = {'<'}E{'>'} = -(∂ ln Z / ∂β)_V,N  donde β = 1/(k_B T)
              </div>
            </li>
            <li>
              <strong>Entropía:</strong>
              <div style={{margin: '0.5rem 0'}}>
                S = k_B ln Z + U/T = -(∂F/∂T)_V,N
              </div>
            </li>
            <li>
              <strong>Presión:</strong>
              <div style={{margin: '0.5rem 0'}}>
                P = k_B T (∂ ln Z / ∂V)_T,N = -(∂F/∂V)_T,N
              </div>
            </li>
            <li>
              <strong>Potencial químico:</strong>
              <div style={{margin: '0.5rem 0'}}>
                μ = -(k_B T / N)(∂ ln Z / ∂N)_T,V = (∂F/∂N)_T,V
              </div>
            </li>
          </ul>

          <Important>
            La energía libre de Helmholtz F = -k_B T ln Z es el potencial termodinámico natural 
            del ensamble canónico, análogo a como S es natural para el microcanónico.
          </Important>
        </Concept>

        <Example title="Ejemplo: Oscilador Armónico Cuántico">
          Un oscilador armónico cuántico tiene niveles de energía E_n = ℏω(n + 1/2):

          <strong>Función de partición:</strong>
          <div style={{margin: '1rem 0'}}>
            Z = Σ_n exp(-βℏω(n + 1/2)) = exp(-βℏω/2) / (1 - exp(-βℏω))
          </div>

          <strong>Energía libre:</strong>
          <div style={{margin: '1rem 0'}}>
            F = ℏω/2 + k_B T ln(1 - exp(-βℏω))
          </div>

          <strong>Energía promedio:</strong>
          <div style={{margin: '1rem 0'}}>
            {'<'}E{'>'} = ℏω/2 + ℏω/(exp(βℏω) - 1)
          </div>

          El primer término es la energía de punto cero (cuántica), el segundo es la 
          contribución térmica.

          <strong>Límites:</strong>
          <ul>
            <li>T → 0: {'<'}E{'>'} → ℏω/2 (solo energía de punto cero)</li>
            <li>T → ∞: {'<'}E{'>'} → k_B T (límite clásico, equipartición)</li>
          </ul>
        </Example>

        <Concept title="Fluctuaciones en el Ensamble Canónico">
          <p>
            A diferencia del microcanónico, la energía fluctúa en el ensamble canónico:
          </p>

          <div style={{margin: '1rem 0'}}>
            {'<'}(ΔE)²{'>'} = {'<'}E²{'>'} - {'<'}E{'>'}² = k_B T² C_V
          </div>

          <p>
            donde C_V es la capacidad calorífica a volumen constante.
          </p>

          <Important>
            Las fluctuaciones relativas escalan como 1/√N, haciéndose despreciables para 
            sistemas macroscópicos. Esto justifica la equivalencia entre ensambles en el 
            límite termodinámico.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="El Ensamble Gran Canónico">
        <Concept title="Definición y Características">
          <p>
            El <strong>ensamble gran canónico</strong> describe sistemas que pueden intercambiar 
            tanto energía como partículas con un reservorio:
          </p>

          <ul>
            <li><strong>Temperatura T:</strong> Fija (contacto térmico)</li>
            <li><strong>Potencial químico μ:</strong> Fijo (contacto de partículas)</li>
            <li><strong>Volumen V:</strong> Fijo</li>
            <li><strong>Energía E:</strong> Fluctúa</li>
            <li><strong>Número de partículas N:</strong> Fluctúa</li>
          </ul>

          <Important>
            El ensamble gran canónico es ideal para sistemas donde el número de partículas 
            no está fijo, como gases en equilibrio con su fase líquida, reacciones químicas, 
            o sistemas de adsorción.
          </Important>
        </Concept>

        <Concept title="Distribución Gran Canónica">
          <p>
            La probabilidad de encontrar el sistema con N partículas en un microestado i 
            con energía E_i es:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            P(N, i) = (1/Ξ) exp(-(E_i - μN) / k_B T)
          </div>

          <p>
            donde Ξ (xi mayúscula) es la <strong>gran función de partición</strong>:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            Ξ(T, V, μ) = Σ_N Σ_i exp(-(E_i - μN) / k_B T)
          </div>

          <p>
            Alternativamente, definiendo la fugacidad z = exp(βμ):
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem'}}>
            Ξ = Σ_N z^N Z(T, V, N)
          </div>
        </Concept>

        <Concept title="Gran Potencial y Termodinámica">
          <p>
            El potencial termodinámico natural del ensamble gran canónico es el 
            <strong> gran potencial</strong> Φ:
          </p>

          <div style={{textAlign: 'center', margin: '1.5rem 0', fontSize: '1.3rem', fontWeight: 'bold'}}>
            Φ(T, V, μ) = -k_B T ln Ξ = F - μN
          </div>

          <p>
            Propiedades termodinámicas:
          </p>

          <ul>
            <li>
              <strong>Número promedio de partículas:</strong>
              <div style={{margin: '0.5rem 0'}}>
                {'<'}N{'>'} = k_B T (∂ ln Ξ / ∂μ)_T,V = -(∂Φ/∂μ)_T,V
              </div>
            </li>
            <li>
              <strong>Energía promedio:</strong>
              <div style={{margin: '0.5rem 0'}}>
                {'<'}E{'>'} = -(∂ ln Ξ / ∂β)_V,μ + μ{'<'}N{'>'}
              </div>
            </li>
            <li>
              <strong>Presión:</strong>
              <div style={{margin: '0.5rem 0'}}>
                P = k_B T (∂ ln Ξ / ∂V)_T,μ = -Φ/V
              </div>
            </li>
            <li>
              <strong>Entropía:</strong>
              <div style={{margin: '0.5rem 0'}}>
                S = -(∂Φ/∂T)_V,μ
              </div>
            </li>
          </ul>
        </Concept>

        <Example title="Ejemplo: Gas Ideal en Ensamble Gran Canónico">
          Para un gas ideal monoatómico:

          <strong>Función de partición de una partícula:</strong>
          <div style={{margin: '1rem 0'}}>
            z_1 = V / λ_T³  donde λ_T = h / √(2πmk_B T) es la longitud térmica
          </div>

          <strong>Gran función de partición:</strong>
          <div style={{margin: '1rem 0'}}>
            Ξ = Σ_N (z z_1)^N / N! = exp(z z_1)  donde z = exp(βμ)
          </div>

          <strong>Número promedio de partículas:</strong>
          <div style={{margin: '1rem 0'}}>
            {'<'}N{'>'} = z z_1 = (V/λ_T³) exp(βμ)
          </div>

          <strong>Presión:</strong>
          <div style={{margin: '1rem 0'}}>
            PV = k_B T ln Ξ = k_B T z z_1 = k_B T {'<'}N{'>'}
          </div>

          Recuperamos PV = Nk_B T, la ecuación de estado del gas ideal.
        </Example>

        <Concept title="Fluctuaciones en el Ensamble Gran Canónico">
          <p>
            Tanto la energía como el número de partículas fluctúan:
          </p>

          <ul>
            <li>
              <strong>Fluctuaciones de N:</strong>
              <div style={{margin: '0.5rem 0'}}>
                {'<'}(ΔN)²{'>'} = k_B T (∂{'<'}N{'>'}/∂μ)_T,V
              </div>
            </li>
            <li>
              <strong>Compresibilidad isotérmica:</strong>
              <div style={{margin: '0.5rem 0'}}>
                κ_T = (1/V)(∂V/∂P)_T = {'<'}(ΔN)²{'>'} / (k_B T {'<'}N{'>'}²)
              </div>
            </li>
          </ul>

          <p>
            Las fluctuaciones relativas son nuevamente proporcionales a 1/√N.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación y Equivalencia de Ensambles">
        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333', backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Ensamble</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Variables Fijas</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Variables Fluctuantes</th>
                <th style={{padding: '0.75em', textAlign: 'left'}}>Potencial</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}><strong>Microcanónico</strong></td>
                <td style={{padding: '0.75em'}}>E, V, N</td>
                <td style={{padding: '0.75em'}}>Ninguna</td>
                <td style={{padding: '0.75em'}}>S(E, V, N)</td>
              </tr>
              <tr style={{borderBottom: '1px solid #ddd'}}>
                <td style={{padding: '0.75em'}}><strong>Canónico</strong></td>
                <td style={{padding: '0.75em'}}>T, V, N</td>
                <td style={{padding: '0.75em'}}>E</td>
                <td style={{padding: '0.75em'}}>F(T, V, N)</td>
              </tr>
              <tr>
                <td style={{padding: '0.75em'}}><strong>Gran Canónico</strong></td>
                <td style={{padding: '0.75em'}}>T, V, μ</td>
                <td style={{padding: '0.75em'}}>E, N</td>
                <td style={{padding: '0.75em'}}>Φ(T, V, μ)</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Equivalencia en el Límite Termodinámico">
          <p>
            Para sistemas macroscópicos (N → ∞), todos los ensambles dan resultados equivalentes:
          </p>

          <Important>
            En el límite termodinámico, las fluctuaciones relativas se vuelven despreciables 
            (∝ 1/√N), y los diferentes ensambles predicen las mismas propiedades termodinámicas 
            intensivas.
          </Important>

          <p>
            <strong>Razones de la equivalencia:</strong>
          </p>
          <ul>
            <li>Las fluctuaciones relativas son proporcionales a 1/√N</li>
            <li>Para N ≈ 10²³, las fluctuaciones son completamente despreciables</li>
            <li>Los valores promedio coinciden en todos los ensambles</li>
            <li>Las distribuciones de probabilidad se vuelven funciones delta</li>
          </ul>
        </Concept>

        <Concept title="Cuándo Usar Cada Ensamble">
          <p>
            <strong>Ensamble Microcanónico:</strong>
          </p>
          <ul>
            <li>Sistemas verdaderamente aislados</li>
            <li>Fundamentos teóricos y definición de entropía</li>
            <li>Sistemas pequeños donde las fluctuaciones importan</li>
          </ul>

          <p>
            <strong>Ensamble Canónico:</strong>
          </p>
          <ul>
            <li>Sistemas en equilibrio térmico (caso más común)</li>
            <li>Cálculos prácticos más sencillos</li>
            <li>Experimentos a temperatura controlada</li>
          </ul>

          <p>
            <strong>Ensamble Gran Canónico:</strong>
          </p>
          <ul>
            <li>Sistemas con número variable de partículas</li>
            <li>Reacciones químicas y equilibrio de fases</li>
            <li>Adsorción y sistemas abiertos</li>
            <li>Gases cuánticos (fermiones y bosones)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Otros Ensambles">
        <Concept title="Ensamble Isotérmico-Isobárico (NPT)">
          <p>
            Describe sistemas a temperatura y presión fijas (volumen fluctuante):
          </p>

          <ul>
            <li><strong>Variables fijas:</strong> N, P, T</li>
            <li><strong>Variables fluctuantes:</strong> E, V</li>
            <li><strong>Función de partición:</strong> Δ(N, P, T) = ∫ dV exp(-βPV) Z(N, V, T)</li>
            <li><strong>Potencial:</strong> Entalpía de Gibbs G = -k_B T ln Δ</li>
          </ul>

          <p>
            Este ensamble es muy útil para simulaciones de dinámica molecular a presión constante.
          </p>
        </Concept>

        <Concept title="Ensamble de Presión-Temperatura-Potencial Químico">
          <p>
            El ensamble más general donde N, V y E pueden fluctuar:
          </p>

          <ul>
            <li><strong>Variables fijas:</strong> μ, P, T</li>
            <li><strong>Variables fluctuantes:</strong> N, V, E</li>
            <li><strong>Aplicaciones:</strong> Transiciones de fase, equilibrio químico</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones de los Ensambles">
        <Concept title="Transiciones de Fase">
          <p>
            Los diferentes ensambles pueden dar perspectivas complementarias sobre transiciones de fase:
          </p>

          <ul>
            <li>
              <strong>Microcanónico:</strong> Puede mostrar entropía no convexa (calor específico negativo) 
              en sistemas pequeños
            </li>
            <li>
              <strong>Canónico:</strong> Transiciones de fase de primer orden aparecen como discontinuidades 
              en derivadas de F
            </li>
            <li>
              <strong>Gran canónico:</strong> Ideal para estudiar coexistencia de fases y equilibrio 
              líquido-vapor
            </li>
          </ul>
        </Concept>

        <Concept title="Gases Cuánticos">
          <p>
            El ensamble gran canónico es natural para gases cuánticos:
          </p>

          <ul>
            <li>
              <strong>Fermiones:</strong> Estadística de Fermi-Dirac
              <div style={{margin: '0.5rem 0'}}>
                {'<'}n_i{'>'} = 1 / (exp(β(ε_i - μ)) + 1)
              </div>
            </li>
            <li>
              <strong>Bosones:</strong> Estadística de Bose-Einstein
              <div style={{margin: '0.5rem 0'}}>
                {'<'}n_i{'>'} = 1 / (exp(β(ε_i - μ)) - 1)
              </div>
            </li>
          </ul>

          <p>
            Estas distribuciones emergen naturalmente del ensamble gran canónico con las 
            restricciones cuánticas apropiadas.
          </p>
        </Concept>

        <Concept title="Simulaciones Computacionales">
          <p>
            Los ensambles guían las simulaciones de Monte Carlo y dinámica molecular:
          </p>

          <ul>
            <li><strong>NVE (microcanónico):</strong> Dinámica molecular estándar</li>
            <li><strong>NVT (canónico):</strong> Termostatos (Nosé-Hoover, Berendsen)</li>
            <li><strong>NPT (isotérmico-isobárico):</strong> Barostatos para presión constante</li>
            <li><strong>μVT (gran canónico):</strong> Monte Carlo gran canónico</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Resumen y Conceptos Clave">
        <Important>
          <strong>Puntos fundamentales para recordar:</strong>
          <ul>
            <li>
              <strong>Ensamble microcanónico:</strong> E, V, N fijos; S = k_B ln Ω es fundamental
            </li>
            <li>
              <strong>Ensamble canónico:</strong> T, V, N fijos; F = -k_B T ln Z; más práctico
            </li>
            <li>
              <strong>Ensamble gran canónico:</strong> T, V, μ fijos; Φ = -k_B T ln Ξ; N fluctúa
            </li>
            <li>
              <strong>Equivalencia:</strong> Todos los ensambles dan resultados idénticos en el 
              límite termodinámico (N → ∞)
            </li>
            <li>
              <strong>Fluctuaciones:</strong> Proporcionales a 1/√N, despreciables para sistemas 
              macroscópicos
            </li>
            <li>
              <strong>Elección:</strong> Depende de las condiciones experimentales y la facilidad 
              de cálculo
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
          <li>Simulaciones computacionales: Monte Carlo, dinámica molecular (NVE, NVT, NPT, μVT)</li>
          <li>Estudio de transiciones de fase y equilibrio de fases</li>
          <li>Modelado de gases cuánticos (Bose-Einstein, Fermi-Dirac)</li>
          <li>Diseño de materiales y nanociencia</li>
          <li>Termodinámica de sistemas biológicos y reacciones químicas</li>
          <li>Física de partículas y astrofísica estadística</li>
        </ul>
      </div>

      {/* Sección de anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span role="img" aria-label="Curiosidades">✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>El concepto de ensamble fue introducido por Josiah Willard Gibbs, quien nunca viajó fuera de EE.UU. pero revolucionó la física teórica.</li>
          <li>El postulado ergódico, base de la equivalencia de ensambles, fue motivo de intensos debates filosóficos y matemáticos en el siglo XX.</li>
          <li>En sistemas pequeños, como cúmulos atómicos o biomoléculas, las diferencias entre ensambles pueden observarse experimentalmente.</li>
          <li>El uso de ensambles es clave en la física estadística de agujeros negros y cosmología moderna.</li>
        </ul>
      </div>

      {/* Sección de historia */}
      <div className="theory-history-section">
        <h2>
          <span role="img" aria-label="Historia">📜</span> Historia: El nacimiento de los ensambles
        </h2>
        <ul>
          <li>Josiah Willard Gibbs (1839-1903) desarrolló el formalismo de los ensambles en su obra "Elementary Principles in Statistical Mechanics" (1902).</li>
          <li>El concepto permitió unificar la termodinámica y la mecánica estadística, y fue fundamental para el desarrollo de la física moderna.</li>
          <li>Gibbs introdujo los términos microcanónico, canónico y gran canónico, y su notación aún se usa hoy.</li>
          <li>El trabajo de Gibbs fue inicialmente poco comprendido, pero hoy es considerado uno de los pilares de la física teórica.</li>
        </ul>
      </div>
    </>
  );
};

export default EnsambleEstadisticosTheory;
