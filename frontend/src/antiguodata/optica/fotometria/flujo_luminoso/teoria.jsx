import React from 'react';
import { definitions as flujoDefinitions } from './definitions.js';
import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: 'Flujo Luminoso (Fotometría)',
  descripcion: 'Definición de flujo luminoso, relación con intensidad luminosa y ángulo sólido',
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const FlujoLuminoso = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es el flujo luminoso?" emoji="💡">
        <p>
          El flujo luminoso (Φ) mide la cantidad de luz emitida por una fuente por unidad de tiempo, ponderada por la sensibilidad del ojo humano. Se mide en lúmenes (lm).
        </p>
        <Important>
          A diferencia de la energía radiante, el flujo luminoso está ajustado a la visión humana (función de luminosidad V(λ)).
        </Important>
      </TheorySection>

      <TheorySection title="Diagrama: fuente, ángulo sólido e intensidad" emoji="📐">
        <p>Esquema cualitativo de una fuente que emite luz hacia un ángulo sólido, con intensidad luminosa y flujo resultante.</p>
        <div style={{ maxWidth: 780, margin: '1rem auto' }}>
          <svg viewBox="0 0 780 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flujo luminoso, intensidad y ángulo sólido">
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" fill="#000" />
              </marker>
              <radialGradient id="sourceGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff8" />
                <stop offset="100%" stopColor="#ffd70022" />
              </radialGradient>
            </defs>

            {/* Fuente */}
            <g>
              <circle cx="140" cy="130" r="24" fill="#ffe08a" stroke="#a67c00" />
              <circle cx="140" cy="130" r="48" fill="url(#sourceGlow)" />
              <text x="100" y="70" fontSize="12" fill="#fff">Fuente</text>
            </g>

            {/* Ángulo sólido aproximado (cono) */}
            <path d="M160 120 L320 60 L320 200 Z" fill="#90cdf4" fillOpacity="0.25" stroke="#2b6cb0" />
            <text x="240" y="48" fontSize="12" fill="#fff">Ángulo sólido (Ω)</text>

            {/* Intensidad luminosa y rayos */}
            <line x1="160" y1="120" x2="320" y2="60" stroke="#2b6cb0" strokeWidth="3" markerEnd="url(#arrow)" />
            <line x1="160" y1="140" x2="320" y2="200" stroke="#2b6cb0" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="180" y="210" fontSize="12" fill="#fff">Intensidad luminosa I (cd)</text>

            {/* Superficie receptora */}
            <rect x="600" y="80" width="120" height="100" fill="#e2e8f0" stroke="#718096" />
            <text x="610" y="70" fontSize="12" fill="#fff">Superficie</text>

            {/* Flujo hacia la superficie */}
            <line x1="320" y1="60" x2="600" y2="100" stroke="#f6ad55" strokeWidth="4" markerEnd="url(#arrow)" />
            <line x1="320" y1="200" x2="600" y2="160" stroke="#f6ad55" strokeWidth="4" markerEnd="url(#arrow)" />
            <text x="420" y="120" fontSize="12" fill="#fff">Flujo luminoso Φ (lm)</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Relaciones fundamentales" emoji="🧪">
        <Formula 
          title="Flujo vs intensidad"
          expression={String.raw`\Phi = \int_{\Omega} I\,\mathrm{d}\Omega`}
          calculatorId="flujo-solido"
          definitions={flujoDefinitions}
          exercises={exercises}
          where={[
            { symbol: 'Φ (lúmenes)', description: 'Flujo luminoso total emitido en el ángulo sólido Ω' },
            { symbol: 'I (candela)', description: 'Intensidad luminosa (lm/sr) en una dirección' },
            { symbol: 'Ω (esteradianes)', description: 'Ángulo sólido sobre el que se integra' }
          ]}
        />
        <Formula 
          title="Caso uniforme"
          expression={String.raw`\text{Si } I \text{ es constante:}\quad \Phi = 4\pi\,I`}
          calculatorId="flujo-uniforme"
          definitions={flujoDefinitions}
          exercises={exercises}
        />
      </TheorySection>

      <TheorySection title="Conversión radiométrica → fotométrica" emoji="🔄">
        <p>
          El flujo luminoso se obtiene ponderando el flujo radiante espectral por la sensibilidad del ojo humano. Esta conversión usa la función de luminosidad fotópica V(λ).
        </p>
        <Formula
          title="De flujo radiante a flujo luminoso"
          expression={String.raw`\Phi = \int_{380\,\text{nm}}^{780\,\text{nm}} K(\lambda)\,\Phi_e(\lambda)\\,\mathrm{d}\lambda`}
          calculatorId="conversion-espectral-simple"
          definitions={flujoDefinitions}
          exercises={exercises}
          where={[
            { symbol: 'Φ (lm)', description: 'Flujo luminoso resultante' },
            { symbol: 'Φ_e(λ) (W/nm)', description: 'Flujo radiante espectral' },
            { symbol: 'K(λ)', description: 'Eficacia luminosa espectral' }
          ]}
        />
        <Formula
          title="Eficacia luminosa espectral"
          expression={String.raw`K(\lambda) = 683\,\text{ lm/W}\;\cdot\;V(\lambda)`}
          calculatorId="conversion-espectral-simple"
          definitions={flujoDefinitions}
          exercises={exercises}
          where={[
            { symbol: '683 lm/W', description: 'Constante de referencia a 555 nm (fotópico)' },
            { symbol: 'V(λ)', description: 'Función de luminosidad fotópica (0–1)' }
          ]}
        />
        <Example>
          Una fuente con potencia concentrada en 555 nm convierte casi toda su potencia en lúmenes; en el infrarrojo la sensibilidad V(λ) es muy baja, por lo que apenas contribuye al flujo luminoso Φ.
        </Example>
      </TheorySection>

      <TheorySection title="Curva de luminosidad V(λ)" emoji="📈">
        <p>Representación cualitativa de la sensibilidad fotópica del ojo humano.</p>
        <div style={{ maxWidth: 680, margin: '1rem auto' }}>
          <svg viewBox="0 0 680 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curva V(lambda) fotópica">
            <defs>
              <linearGradient id="specColors" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6a00ff" />
                <stop offset="20%" stopColor="#0033ff" />
                <stop offset="40%" stopColor="#00cc66" />
                <stop offset="60%" stopColor="#ffee00" />
                <stop offset="80%" stopColor="#ff9900" />
                <stop offset="100%" stopColor="#ff0000" />
              </linearGradient>
            </defs>
            {/* Ejes */}
            <line x1="60" y1="180" x2="640" y2="180" stroke="#888" />
            <line x1="60" y1="30" x2="60" y2="180" stroke="#888" />
            <text x="50" y="25" fontSize="12" fill="#fff">V(λ)</text>
            <text x="600" y="200" fontSize="12" fill="#fff">λ (nm)</text>
            {/* Banda espectral de fondo */}
            <rect x="60" y="160" width="580" height="20" fill="url(#specColors)" />
            <text x="90" y="155" fontSize="12" fill="#fff">380</text>
            <text x="620" y="155" fontSize="12" fill="#fff">780</text>
            {/* Curva V(λ) estilizada */}
            <path d="M60 175 C 200 60, 360 40, 500 120 C 560 150, 620 170, 640 175" fill="none" stroke="#f6ad55" strokeWidth="3" />
            <circle cx="360" cy="60" r="4" fill="#f6ad55" />
            <text x="330" y="45" fontSize="12" fill="#fff">máximo ≈ 555 nm</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Fotópico vs escotópico" emoji="🌗">
        <p>
          En condiciones diurnas se usa V(λ) (fotópico). En baja iluminación se emplea la curva escotópica V'(λ), con máximo en ~507 nm. El concepto de flujo luminoso es análogo, cambiando la función de sensibilidad.
        </p>
      </TheorySection>

      <TheorySection title="Ejemplos numéricos y casos" emoji="🧮">
        <Concept title="Fuente uniforme">
          <p>Si una lámpara emite con intensidad I = 100 cd uniformemente en todas las direcciones:</p>
          <Formula 
            expression={String.raw`\Phi = 4\pi I \approx 1256\,\text{ lm}`}
            calculatorId="flujo-uniforme"
            definitions={flujoDefinitions}
            exercises={exercises}
          />
        </Concept>
        <Concept title="Haz direccional">
          <p>Un foco que concentra la luz en un cono pequeño puede tener gran intensidad I en esa dirección pero un flujo total Φ moderado. El diseño óptico determina la distribución angular de I(θ, φ).</p>
        </Concept>
        <Concept title="Eficacia luminosa global">
          <p>La eficacia de una lámpara es η = Φ / P. Por ejemplo, Φ = 1000 lm con P = 10 W da η = 100 lm/W.</p>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>💡 Comparación de bombillas y luminarias</h3>
          <p>
            Los fabricantes especifican el flujo luminoso en lúmenes para comparar el brillo real de diferentes bombillas. Una LED de 10W puede producir 800 lm, mientras que una incandescente de 60W produce solo 700 lm, demostrando la mayor eficiencia de la tecnología LED. Los consumidores pueden elegir la bombilla adecuada comparando lúmenes en lugar de vatios.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Diseño arquitectónico y urbano</h3>
          <p>
            Los arquitectos utilizan simulaciones de flujo luminoso para diseñar la iluminación de edificios, calles y espacios públicos. Software especializado calcula cómo se distribuye la luz emitida por cada luminaria, permitiendo optimizar la colocación y minimizar zonas oscuras o sobre-iluminadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Eficiencia energética</h3>
          <p>
            La eficacia luminosa (η = Φ/P) permite evaluar cuánta luz útil produce una fuente por cada vatio consumido. Las LEDs modernas alcanzan 150 lm/W, mientras que las incandescentes apenas llegan a 15 lm/W. Esta métrica es clave para normativas de eficiencia energética y etiquetado de productos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌌 Control de contaminación lumínica</h3>
          <p>
            Las regulaciones ambientales limitan el flujo luminoso hacia el cielo nocturno para reducir la contaminación lumínica. Los diseñadores de alumbrado público calculan qué porcentaje del flujo total de cada luminaria se dirige hacia arriba, buscando minimizar el impacto en la observación astronómica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎥 Fotografía y cine</h3>
          <p>
            Los directores de fotografía seleccionan fuentes de luz por su flujo luminoso total para asegurar niveles de iluminación adecuados en sets. Un reflector de 10,000 lm puede iluminar una escena pequeña, mientras que estudios grandes requieren múltiples fuentes que suman cientos de miles de lúmenes.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Medición de la luz
        </h2>
        
        <div className="theory-subsection">
          <h3>🕯️ La vela como unidad (siglo XVII-XIX)</h3>
          <p>
            Antes de las definiciones modernas, la intensidad luminosa se medía en "bujías" o "candelas" literales: la luz producida por una vela de cera de ballena de tamaño estandarizado. Diferentes países usaban velas distintas, lo que generaba confusión en comparaciones internacionales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 La curva de sensibilidad V(λ) (1924)</h3>
          <p>
            La Comisión Internacional de Iluminación (CIE) estableció la función de sensibilidad espectral del ojo humano V(λ) mediante experimentos psicofísicos. Esta curva, con máximo en 555 nm, se convirtió en la base para definir todas las magnitudes fotométricas, incluido el flujo luminoso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ Redefinición del lumen (1979)</h3>
          <p>
            La XVI Conferencia General de Pesas y Medidas redefinió la candela usando radiación monocromática de 540 THz con 683 lm/W de eficacia luminosa espectral. Esta definición estableció K(555 nm) = 683 lm/W como constante fundamental, y el lumen se derivó automáticamente como cd·sr.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📊 Normativas modernas (siglo XXI)</h3>
          <p>
            Hoy, organizaciones como CIE e ISO desarrollan estándares de iluminación basados en flujo luminoso. Las normativas especifican niveles mínimos de lúmenes por metro cuadrado (lux) para oficinas, hospitales, calles, etc., asegurando condiciones óptimas de visibilidad y confort.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌈 El color importa más que la potencia</h3>
          <p>
            Una lámpara infrarroja de 100W puede emitir 1000W de potencia radiante pero producir 0 lúmenes, porque el ojo no percibe el infrarrojo. En cambio, un LED verde-amarillo de 10W puede generar 1500 lm porque su emisión coincide con el pico de sensibilidad del ojo (555 nm). ¡El espectro es más importante que la potencia eléctrica!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔦 Focos direccionales: mucha candela, pocos lúmenes</h3>
          <p>
            Los láseres y focos de escenario pueden tener intensidades luminosas de millones de candelas en una dirección específica, pero su flujo luminoso total puede ser menor que una simple bombilla doméstica. Esto ocurre porque concentran toda la luz en un ángulo sólido muy pequeño, en lugar de distribuirla uniformemente.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌞 El Sol produce 3.8×10²⁸ lúmenes</h3>
          <p>
            El Sol emite aproximadamente 3.8×10²⁸ lm totales, pero solo una minúscula fracción (unos 10¹⁵ lm) alcanza la Tierra. Aún así, es suficiente para proporcionar unos 100,000 lux en un día despejado. Si pudiéramos capturar todo el flujo luminoso solar, tendríamos energía prácticamente ilimitada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧑‍🔬 El ojo humano: detector de 10⁻⁶ lm</h3>
          <p>
            En condiciones de oscuridad total, el ojo humano adaptado puede detectar flujos luminosos tan pequeños como un millón de veces menores que un lumen. Esto equivale a ver la luz de una vela a 20 km de distancia en una noche clara. Nuestros ojos son detectores de luz increíblemente sensibles.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚫 La paradoja de la "luz negra"</h3>
          <p>
            Las lámparas UV ("luz negra") emiten mucha potencia radiante pero casi 0 lúmenes, porque operan fuera del espectro visible (~365 nm). Aunque iluminan objetos fluorescentes que brillan intensamente, la propia lámpara apenas contribuye al flujo luminoso medible. Es luz "invisible" que hace que otras cosas brillen.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El flujo luminoso (Φ) es la potencia luminosa total emitida por una fuente, ponderada por la sensibilidad del ojo humano.
          </li>
          <li>
            La unidad es el lumen (lm), definido a partir de la candela y el estereorradián.
          </li>
          <li>
            Para una fuente isotrópica: Φ = 4πI, donde I es la intensidad luminosa.
          </li>
          <li>
            La eficacia luminosa espectral K(λ) = 683·V(λ) pondera la contribución de cada longitud de onda.
          </li>
          <li>
            La conversión espectral se realiza mediante: Φ = ∫ K(λ)·Φₑ(λ) dλ, donde Φₑ es el flujo radiante.
          </li>
        </ul>
      </div>
    </>
  );
};

export default FlujoLuminoso;
