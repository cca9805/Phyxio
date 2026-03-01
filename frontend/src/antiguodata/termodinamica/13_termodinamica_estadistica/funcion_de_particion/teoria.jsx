// 1. IMPORTACIONES
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as particionDefinitions } from './definitions.js';

// 2. METADATA
export const metadata = {
  titulo: "Función de Partición",
  descripcion: "La función de partición es el puente entre la física microscópica y las propiedades macroscópicas de la materia. Permite deducir toda la termodinámica de un sistema en equilibrio.",
  isTheoryOnly: false,
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};

// 3. TEORÍA PRINCIPAL
const FuncionDeParticionTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection >
        <Concept title="Introducción">
          <p>La <strong>función de partición</strong> es el objeto central de la mecánica estadística. Permite conectar el mundo microscópico con las propiedades macroscópicas de la materia y es clave para entender el equilibrio térmico.</p>
        </Concept>
      
        <Concept title="Definición y Fórmula General">
          Para el ensamble canónico (T, V, N fijos), la función de partición se define como:
        
        <Formula
          expression={String.raw`Z = \sum_i e^{-E_i / (k_B T)}`}
          description="Definición general de la función de partición para el ensamble canónico."
        />
          <strong>Donde:</strong>
          <ul>
            <li><b>Z</b>: función de partición (adimensional)</li>
            <li><b>E_i</b>: energía del microestado i (J)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
            <li><b>T</b>: temperatura absoluta (K)</li>
          </ul>
        </Concept>
        <Concept title="Significado Físico"> 
          <p>
            La función de partición Z resume toda la información estadística del sistema. Cada término en la suma representa la contribución de un microestado ponderado por su factor de Boltzmann exp(-E_i / (k_B T)). Los microestados con menor energía tienen mayor peso a bajas temperaturas.
          </p>
        </Concept>
        <Concept title="Contexto en Termodinámica Estadística">
          <p>
            Z es el puente entre la física microscópica (niveles de energía y microestados) y las propiedades macroscópicas observables (energía, entropía, presión, etc.). A partir de Z se pueden derivar todas las funciones termodinámicas relevantes.
          </p>
        </Concept>
        <Important>
          Si se conoce Z, se puede deducir toda la termodinámica del sistema: energía, entropía, presión, calor específico, etc. Es la base de la predicción de propiedades macroscópicas a partir de la física microscópica.
        </Important>
      </TheorySection>

      <TheorySection title="Ejemplo Práctico: Sistema de Dos Niveles">
        <Example>
          Considera un sistema con dos niveles de energía: E_0 = 0 y E_1 = ε. La función de partición es:
          <Formula
            expression={String.raw`Z = 1 + e^{-\varepsilon / (k_B T)}`}
            description="Función de partición para dos niveles."
            calculatorId="dos-niveles-particion"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li>Si ε = 1e-20 J y T = 300 K, k_B = 1.38e-23 J/K</li>
            <li>β = 1 / (k_B * T) ≈ 2.42e+20 1/J</li>
            <li>Z ≈ 1 + exp(-ε / (k_B * T)) ≈ 1 + exp(-0.242) ≈ 1.785</li>
          </ul>
        </Example>
      </TheorySection>

      {/* 4. SECCIÓN DE FÓRMULAS */}
      <TheorySection title="Fórmulas Fundamentales y Derivadas">
        <Concept title="Energía Libre de Helmholtz">
          <Formula
            expression={String.raw`F = -k_B T \ln Z`}
            description="Energía libre de Helmholtz a partir de la función de partición."
            calculatorId="funcion-particion-energia-libre"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>F</b>: energía libre de Helmholtz (J)</li>
            <li><b>Z</b>: función de partición (adimensional)</li>
            <li><b>T</b>: temperatura (K)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
          </ul>
        </Concept>
        <Concept title="Energía Interna">
          <Formula
            expression={String.raw`U = k_B T^2 \frac{\partial \ln Z}{\partial T}`}
            description="Energía interna promedio desde la función de partición."
            calculatorId="funcion-particion-energia-interna"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>U</b>: energía interna (J)</li>
            <li><b>T</b>: temperatura (K)</li>
            <li><b>Z</b>: función de partición (adimensional)</li>
          </ul>
        </Concept>
        <Concept title="Entropía">
          <Formula
            expression={String.raw`S = k_B \ln Z + \frac{U}{T}`}
            description="Entropía desde la función de partición y la energía interna."
            calculatorId="funcion-particion-entropia"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>S</b>: entropía (J/K)</li>
            <li><b>U</b>: energía interna (J)</li>
            <li><b>T</b>: temperatura (K)</li>
            <li><b>Z</b>: función de partición (adimensional)</li>
          </ul>
        </Concept>
        <Concept title="Presión">
          <Formula
            expression={String.raw`P = k_B T \frac{\partial \ln Z}{\partial V}`}
            description="Presión desde la función de partición."
            calculatorId="funcion-particion-presion"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong>Donde:</strong>
          <ul>
            <li><b>P</b>: presión (Pa)</li>
            <li><b>T</b>: temperatura (K)</li>
            <li><b>Z</b>: función de partición (adimensional)</li>
            <li><b>V</b>: volumen (m³)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* 5. OTRAS CONSIDERACIONES (opcional, aquí no aplica) */}

      {/* 6. APLICACIONES */}
      <TheorySection title="Aplicaciones y Sistemas Simples">
        <Concept title="Oscilador Armónico Cuántico">
          <Formula
            expression={String.raw`Z = \frac{e^{-\beta \hbar \omega / 2}}{1 - e^{-\beta \hbar \omega}}`}
            description="Función de partición para el oscilador armónico cuántico."
            calculatorId="oscilador-armonico-particion"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>Z</b>: función de partición (adimensional)</li>
            <li><b>\beta</b>: 1/(k_B T), inversa de la temperatura (1/J)</li>
            <li><b>\hbar</b>: constante de Planck reducida (J·s)</li>
            <li><b>\omega</b>: frecuencia angular (rad/s)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
            <li><b>T</b>: temperatura absoluta (K)</li>
          </ul>
        </Concept>
        <Concept title="Partículas Independientes">
          <Formula
            expression={String.raw`Z_N = \frac{Z_1^N}{N!}`}
            description="Factorización de la función de partición para N partículas indistinguibles."
            calculatorId="particulas-independientes"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>Z_N</b>: función de partición total para N partículas</li>
            <li><b>Z_1</b>: función de partición de una partícula</li>
            <li><b>N</b>: número de partículas</li>
          </ul>
        </Concept>
        <Concept title="Calor Específico">
          <Formula
            expression={String.raw`C_V = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2}`}
            description="Calor específico a volumen constante desde la función de partición."
            calculatorId="calor-especifico-particion"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>C_V</b>: calor específico a volumen constante (J/K)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
            <li><b>\beta</b>: 1/(k_B T), inversa de la temperatura (1/J)</li>
            <li><b>Z</b>: función de partición (adimensional)</li>
          </ul>
        </Concept>
        <Concept title="Fluctuaciones">
          <Formula
            expression={String.raw`\langle (\Delta E)^2 \rangle = k_B T^2 C_V`}
            description="Relación entre la varianza de la energía y el calor específico."
            calculatorId="fluctuaciones-energia"
            definitions={particionDefinitions}
            exercises={exercises}
          />
          <strong className="donde-campo">Donde:</strong>
          <ul>
            <li><b>\langle (\Delta E)^2 \rangle</b>: varianza de la energía (J²)</li>
            <li><b>k_B</b>: constante de Boltzmann (J/K)</li>
            <li><b>T</b>: temperatura absoluta (K)</li>
            <li><b>C_V</b>: calor específico a volumen constante (J/K)</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* 7. HECHOS HISTÓRICOS */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>La función de partición surge en el siglo XIX con el desarrollo de la mecánica estadística.</li>
          <li>James Clerk Maxwell y Ludwig Boltzmann sentaron las bases de la estadística clásica.</li>
          <li>Josiah Willard Gibbs formalizó el concepto de ensamble y función de partición en 1902.</li>
          <li>La función de partición permitió conectar la física microscópica con la termodinámica macroscópica.</li>
          <li>Su uso se extendió con la física cuántica y la estadística moderna.</li>
        </ul>
        <Important>
          <strong>Relevancia:</strong> La función de partición es el núcleo de la predicción estadística en física y química.
        </Important>
      </div>

      {/* 8. DATOS ANECDÓTICOS */}
      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anécdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>La función de partición es tan poderosa que, en teoría, permite calcular cualquier propiedad macroscópica si se conocen todos los microestados.</li>
          <li>En sistemas cuánticos, la función de partición se generaliza a sumas sobre estados cuánticos y es la base de la física estadística moderna.</li>
          <li>En la práctica, calcular Z para sistemas reales puede ser imposible por la cantidad de microestados.</li>
          <li>La función de partición aparece en algoritmos de inteligencia artificial y simulaciones Monte Carlo.</li>
          <li>El término "función de partición" se traduce en inglés como "partition function" y en alemán como "Zustandssumme".</li>
        </ul>
        <Important>
          <strong>Aplicaciones inesperadas:</strong> Z se usa en biología molecular, economía estadística y teoría de redes.
        </Important>
      </div>

      {/* 9. RESUMEN */}
      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <p>
          La función de partición conecta la física microscópica con la termodinámica macroscópica. Permite calcular energía, entropía, presión, calor específico y más. Es la base de la predicción estadística en física, química y otras ciencias. Su cálculo exacto solo es posible en sistemas simples; en sistemas reales se usan aproximaciones.
        </p>
        <ul>
          <li>
            <Formula
              expression={String.raw`Z = \sum_i e^{-E_i / (k_B T)}`}
              description="Definición de la función de partición"
            />
          </li>
          <li>
            <Formula
              expression={String.raw`F = -k_B T \ln Z`}
              description="Energía libre de Helmholtz"
            />
          </li>
          <li>
            <Formula
              expression={String.raw`U = k_B T^2 \frac{\partial \ln Z}{\partial T}`}
              description="Energía interna"
            />
          </li>
          <li>
            <Formula
              expression={String.raw`S = k_B \ln Z + \frac{U}{T}`}
              description="Entropía"
            />
          </li>
          <li>
            <Formula
              expression={String.raw`P = k_B T \frac{\partial \ln Z}{\partial V}`}
              description="Presión"
            />
          </li>
          <li>
            <Formula
              expression={String.raw`C_V = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2}`}
              description="Calor específico"
            />
          </li>
        </ul>
        <Important>
          <strong>Utilidad práctica:</strong> La función de partición es esencial para entender el comportamiento de gases, sólidos, líquidos y sistemas biológicos desde la perspectiva estadística.
        </Important>
      </div>
    </>
  );
};

export default FuncionDeParticionTheory;
