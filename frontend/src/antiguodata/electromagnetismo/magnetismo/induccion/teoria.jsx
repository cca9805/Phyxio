import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
  titulo: "Inducción Electromagnética",
  descripcion: "Ley de Faraday, inductancia, transformadores y aplicaciones",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const InduccionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Flujo Magnético y Ley de Faraday">
        <p>
          La inducción electromagnética es el fenómeno que origina la producción de una fuerza electromotriz (FEM o voltaje) en un medio o cuerpo expuesto a un campo magnético variable.
        </p>
        <Concept title="Flujo Magnético (Φ_B)">
          <p>El primer paso para entender la inducción es cuantificar el 'paso' de campo magnético a través de una superficie. A esto se le llama flujo magnético.</p>
          <Formula
            expression={String.raw`\Phi_B = B \cdot A \cdot \cos(\alpha)`}
            calculatorId="flujo_magnetico"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Campo magnético", expression: String.raw`B = \frac{\Phi_B}{A \cos(\alpha)}` },
              { description: "Área de la superficie", expression: String.raw`A = \frac{\Phi_B}{B \cos(\alpha)}` },
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>Φ_B = Flujo magnético (Wb - Webers o T·m²)</li>
            <li>B = Campo magnético (T - Teslas)</li>
            <li>A = Área de la superficie (m² - metros cuadrados)</li>
            <li>α = Ángulo entre el campo magnético y la normal a la superficie (grados o radianes)</li>
          </ul>
        </Concept>
        <Concept title="Ley de Faraday-Lenz">
          <p>La Ley de Faraday establece que la FEM inducida en cualquier circuito cerrado es igual al negativo de la velocidad con que el flujo magnético a través del circuito cambia con el tiempo. El signo negativo, conocido como Ley de Lenz, indica que la FEM inducida se opone al cambio de flujo.</p>
          <Formula
            expression={String.raw`\varepsilon = -N \frac{\Delta\Phi_B}{\Delta t}`}
            calculatorId="ley_faraday"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Número de espiras", expression: String.raw`N = -\frac{\varepsilon \Delta t}{\Delta\Phi_B}` },
              { description: "Cambio de flujo", expression: String.raw`\Delta\Phi_B = -\frac{\varepsilon \Delta t}{N}` },
              { description: "Intervalo de tiempo", expression: String.raw`\Delta t = -\frac{N \Delta\Phi_B}{\varepsilon}` },
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>ε = Fuerza electromotriz (FEM) inducida (V - Voltios)</li>
            <li>N = Número de espiras de la bobina (adimensional)</li>
            <li>ΔΦ_B = Cambio en el flujo magnético (Wb - Webers)</li>
            <li>Δt = Intervalo de tiempo (s - segundos)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Inductancia">
        <p>
          La inductancia (L) es una medida de la oposición de un circuito al cambio en la corriente eléctrica. Un componente diseñado para tener inductancia se llama inductor.
        </p>
        <Concept title="Autoinductancia (L)">
          <p>La autoinductancia relaciona el flujo magnético generado por la propia bobina con la corriente que la atraviesa.</p>
          <Formula
            expression={String.raw`L = \frac{N \Phi_B}{I}`}
            calculatorId="autoinductancia"
            definitions={definitions}
            exercises={exercises}
            complementary={[
                { description: "Número de espiras", expression: String.raw`N = \frac{L I}{\Phi_B}` },
                { description: "Flujo magnético", expression: String.raw`\Phi_B = \frac{L I}{N}` },
                { description: "Corriente", expression: String.raw`I = \frac{N \Phi_B}{L}` },
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>L = Autoinductancia o inductancia (H - Henrios)</li>
            <li>N = Número de espiras de la bobina (adimensional)</li>
            <li>Φ_B = Flujo magnético (Wb - Webers)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
          </ul>
        </Concept>
        <Concept title="FEM Autoinducida (ε_L)">
          <p>Cuando la corriente cambia en un inductor, se induce una FEM que se opone a este cambio.</p>
          <Formula
            expression={String.raw`\varepsilon_L = -L \frac{\Delta I}{\Delta t}`}
            calculatorId="fem_autoinducida"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Autoinductancia", expression: String.raw`L = -\frac{\varepsilon_L \Delta t}{\Delta I}` },
              { description: "Cambio de corriente", expression: String.raw`\Delta I = -\frac{\varepsilon_L \Delta t}{L}` },
              { description: "Intervalo de tiempo", expression: String.raw`\Delta t = -\frac{L \Delta I}{\varepsilon_L}` },
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>ε_L = FEM autoinducida (V - Voltios)</li>
            <li>L = Autoinductancia (H - Henrios)</li>
            <li>ΔI = Cambio en la corriente (A - Amperios)</li>
            <li>Δt = Intervalo de tiempo (s - segundos)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Energía en un Inductor">
        <p>
         Un inductor almacena energía en el campo magnético creado por la corriente que lo atraviesa.
        </p>
        <Concept title="Energía Magnética Almacenada (U_L)">
          <p>La energía es proporcional a la inductancia y al cuadrado de la corriente.</p>
          <Formula
            expression={String.raw`U_L = \frac{1}{2} L I^2`}
            calculatorId="energia_inductor"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Autoinductancia", expression: String.raw`L = \frac{2 U_L}{I^2}` },
              { description: "Corriente", expression: String.raw`I = \sqrt{\frac{2 U_L}{L}}` },
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>U_L = Energía magnética almacenada (J - Joules)</li>
            <li>L = Autoinductancia (H - Henrios)</li>
            <li>I = Corriente eléctrica (A - Amperios)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Transformadores (Análisis Avanzado)">
        <p>
          Los transformadores son dispositivos que utilizan la inducción electromagnética para cambiar el voltaje de la corriente alterna. 
          Son aplicaciones directas de la Ley de Faraday y fundamentales en el sistema eléctrico moderno.
        </p>
        
        <Concept title="Principio de Funcionamiento">
          <p>
            Un transformador consta de dos bobinas (primaria y secundaria) enrolladas alrededor de un núcleo ferromagnético común. 
            Cuando circula corriente alterna por la bobina primaria, genera un flujo magnético variable en el núcleo, que induce 
            una FEM en la bobina secundaria según la Ley de Faraday.
          </p>
          <p>Proceso físico:</p>
          <ol>
            <li>Corriente alterna I₁ en el primario → Campo magnético variable B(t)</li>
            <li>Flujo magnético variable Φ(t) en el núcleo</li>
            <li>Inducción de FEM en el secundario: ε₂ = -N₂(dΦ/dt)</li>
            <li>Corriente I₂ en el secundario alimenta la carga</li>
          </ol>
        </Concept>

        <Concept title="Relación de Transformación Completa">
          <p>
            Para un transformador ideal (sin pérdidas), se cumplen las siguientes relaciones:
          </p>
          <Formula
            expression={String.raw`\frac{V_2}{V_1} = \frac{N_2}{N_1} = \frac{I_1}{I_2}`}
            calculatorId="transformador_completo"
            definitions={definitions}
            exercises={exercises}
            description="Relación entre voltajes, número de espiras y corrientes"
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>V₁, V₂ = Voltajes en primario y secundario (V)</li>
            <li>N₁, N₂ = Número de espiras en primario y secundario</li>
            <li>I₁, I₂ = Corrientes en primario y secundario (A)</li>
          </ul>
          
          <p>Observaciones importantes:</p>
          <ul>
            <li>Si N₂ &gt; N₁ → V₂ &gt; V₁ (transformador elevador) pero I₂ &lt; I₁</li>
            <li>Si N₂ &lt; N₁ → V₂ &lt; V₁ (transformador reductor) pero I₂ &gt; I₁</li>
            <li>La potencia se conserva: P₁ = P₂ (en transformador ideal)</li>
          </ul>
        </Concept>

        <Concept title="Conservación de la Potencia">
          <p>
            En un transformador ideal, la potencia de entrada es igual a la potencia de salida:
          </p>
          <Formula
            expression={String.raw`P_1 = P_2 \quad \Rightarrow \quad V_1 I_1 = V_2 I_2`}
            calculatorId="potencia_transformador"
            definitions={definitions}
            exercises={exercises}
            description="Conservación de la energía en el transformador"
          />
          
          <p>
            Esto explica por qué cuando aumentamos el voltaje, disminuye la corriente (y viceversa). 
            La energía no se crea ni se destruye, solo se transforma.
          </p>
        </Concept>

        <Concept title="Transformador Real: Pérdidas">
          <p>
            En la práctica, los transformadores reales tienen pérdidas de energía que reducen su eficiencia:
          </p>
          <ul>
            <li>
              <strong>Pérdidas por efecto Joule (I²R):</strong> Calentamiento de las bobinas debido a su resistencia eléctrica. 
              Se minimiza usando cables gruesos de cobre.
            </li>
            <li>
              <strong>Pérdidas por histéresis:</strong> Energía necesaria para magnetizar y desmagnetizar el núcleo en cada ciclo. 
              Se reduce usando materiales ferromagnéticos blandos.
            </li>
            <li>
              <strong>Corrientes de Foucault:</strong> Corrientes inducidas en el propio núcleo que generan calor. 
              Se minimizan usando núcleos laminados (chapas aisladas entre sí).
            </li>
            <li>
              <strong>Flujo de dispersión:</strong> No todo el flujo magnético pasa por ambas bobinas. 
              Se reduce con diseños que acoplan mejor las bobinas.
            </li>
          </ul>
          
          <p><strong>Rendimiento del transformador:</strong></p>
          <Formula
            expression={String.raw`\eta = \frac{P_2}{P_1} = \frac{V_2 I_2}{V_1 I_1} \times 100\%`}
            calculatorId="rendimiento_transformador"
            definitions={definitions}
            exercises={exercises}
            description="Eficiencia del transformador (típicamente 95-99%)"
          />
        </Concept>

        <Concept title="Aplicaciones en el Transporte de Energía">
          <p>
            Los transformadores son esenciales para el transporte eficiente de energía eléctrica a largas distancias:
          </p>
          <ol>
            <li>
              <strong>En la central eléctrica:</strong> Transformadores elevadores aumentan el voltaje de ~20 kV a 400 kV 
              para el transporte de alta tensión.
            </li>
            <li>
              <strong>¿Por qué alta tensión?</strong> Las pérdidas por efecto Joule son P = I²R. Si aumentamos el voltaje, 
              disminuye la corriente (P = VI constante), y las pérdidas se reducen drásticamente.
            </li>
            <li>
              <strong>Ejemplo numérico:</strong> Transportar 1000 MW:
              <ul>
                <li>A 20 kV: I = 50.000 A → Pérdidas ∝ (50.000)² = 2.5×10⁹</li>
                <li>A 400 kV: I = 2.500 A → Pérdidas ∝ (2.500)² = 6.25×10⁶</li>
                <li>Reducción de pérdidas: 400 veces menor</li>
              </ul>
            </li>
            <li>
              <strong>Subestaciones:</strong> Transformadores reductores bajan progresivamente el voltaje 
              (400 kV → 132 kV → 20 kV → 230 V) hasta llegar a los hogares.
            </li>
          </ol>
        </Concept>

        <Concept title="Tipos de Transformadores">
          <p><strong>Según su función:</strong></p>
          <ul>
            <li><strong>Elevadores:</strong> N₂ &gt; N₁, aumentan el voltaje (centrales eléctricas)</li>
            <li><strong>Reductores:</strong> N₂ &lt; N₁, disminuyen el voltaje (distribución doméstica)</li>
            <li><strong>De aislamiento:</strong> N₂ = N₁, mismo voltaje pero aislamiento eléctrico</li>
          </ul>
          
          <p><strong>Según su construcción:</strong></p>
          <ul>
            <li><strong>Núcleo tipo columna:</strong> Bobinas rodean el núcleo</li>
            <li><strong>Núcleo tipo acorazado:</strong> Núcleo rodea las bobinas</li>
            <li><strong>Toroidales:</strong> Núcleo en forma de anillo, muy eficientes</li>
          </ul>
          
          <p><strong>Según su aplicación:</strong></p>
          <ul>
            <li><strong>De potencia:</strong> Grandes transformadores en centrales y subestaciones</li>
            <li><strong>De distribución:</strong> En postes de la calle (20 kV → 230 V)</li>
            <li><strong>De medida:</strong> Para instrumentos de medición (transformadores de corriente y voltaje)</li>
            <li><strong>De pulsos:</strong> En electrónica de alta frecuencia</li>
          </ul>
        </Concept>

        <Concept title="Autotransformadores">
          <p>
            Un <strong>autotransformador</strong> es un tipo especial que usa una sola bobina con una toma intermedia. 
            Parte de la bobina es común al primario y secundario.
          </p>
          <p><strong>Ventajas:</strong></p>
          <ul>
            <li>Más pequeño y económico</li>
            <li>Mayor eficiencia (menos pérdidas)</li>
            <li>Menor peso</li>
          </ul>
          <p><strong>Desventajas:</strong></p>
          <ul>
            <li>No hay aislamiento eléctrico entre primario y secundario</li>
            <li>Solo útil para relaciones de transformación cercanas a 1</li>
          </ul>
          <p><strong>Aplicaciones:</strong> Arranque de motores, regulación de voltaje, laboratorios (variacs)</p>
        </Concept>

        <Concept title="Transformadores Trifásicos">
          <p>
            En sistemas de potencia se usan transformadores trifásicos para manejar las tres fases de la corriente alterna. 
            Pueden ser tres transformadores monofásicos o un único transformador con tres juegos de bobinas.
          </p>
          <p><strong>Configuraciones comunes:</strong></p>
          <ul>
            <li><strong>Estrella-Estrella (Y-Y):</strong> Neutro disponible en ambos lados</li>
            <li><strong>Delta-Delta (Δ-Δ):</strong> Sin neutro, mayor corriente de línea</li>
            <li><strong>Estrella-Delta (Y-Δ):</strong> Común en generación (central → red)</li>
            <li><strong>Delta-Estrella (Δ-Y):</strong> Común en distribución (red → consumo)</li>
          </ul>
        </Concept>

        <Concept title="Cálculos Avanzados">
          <p><strong>Ejemplo completo:</strong></p>
          <p>
            Un transformador tiene 1000 espiras en el primario y 100 en el secundario. Se conecta a 230 V y alimenta 
            una carga de 50 Ω. Calcular: V₂, I₂, I₁, P₁, P₂ y el rendimiento si las pérdidas son 20 W.
          </p>
          <p><strong>Solución:</strong></p>
          <ol>
            <li>Voltaje secundario: V₂ = V₁(N₂/N₁) = 230(100/1000) = 23 V</li>
            <li>Corriente secundaria: I₂ = V₂/R = 23/50 = 0.46 A</li>
            <li>Potencia secundaria: P₂ = V₂I₂ = 23 × 0.46 = 10.58 W</li>
            <li>Potencia primaria: P₁ = P₂ + Pérdidas = 10.58 + 20 = 30.58 W</li>
            <li>Corriente primaria: I₁ = P₁/V₁ = 30.58/230 = 0.133 A</li>
            <li>Rendimiento: η = (P₂/P₁) × 100% = (10.58/30.58) × 100% = 34.6%</li>
          </ol>
          <p>Nota: Este rendimiento es bajo debido a las altas pérdidas relativas a la potencia transmitida.</p>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Inducción Electromagnética</h3>
        <ul>
          <li>Flujo magnético: Φ_B = B·A·cos(α)</li>
          <li>Ley de Faraday-Lenz: ε = -N(ΔΦ_B/Δt)</li>
          <li>Autoinductancia: L = NΦ_B/I</li>
          <li>FEM autoinducida: ε_L = -L(ΔI/Δt)</li>
          <li>Energía en inductor: U_L = ½LI²</li>
          <li>Transformadores: V₂/V₁ = N₂/N₁ = I₁/I₂</li>
          <li>Conservación de potencia: P₁ = P₂ (transformador ideal)</li>
          <li>Aplicaciones: transporte de energía, cargadores, motores</li>
        </ul>
      </div>
    </>
  );
};

export default InduccionTheory;
