import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Difracción",
  descripcion: "Desviación y dispersión de ondas luminosas al pasar por aberturas u obstáculos, demostrando la naturaleza ondulatoria de la luz.",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const DifraccionTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Difracción?">
        <p>
          La difracción es el fenómeno por el cual las ondas luminosas se desvían al pasar por aberturas o alrededor de obstáculos. Este comportamiento es característico de las ondas y demuestra que la luz no viaja estrictamente en línea recta.
        </p>
        <Important>
          La difracción es más notable cuando el tamaño de la abertura es comparable a la longitud de onda de la luz (λ ≈ a).
        </Important>
        <p>
          Es el factor limitante fundamental en la resolución de instrumentos ópticos: microscopios, telescopios y cámaras fotográficas.
        </p>
      </TheorySection>

      <TheorySection title="Principio de Huygens-Fresnel">
        <Concept title="Principio de Huygens">
          <p>
            Cada punto de un frente de onda actúa como fuente de ondas secundarias esféricas. El nuevo frente de onda es la envolvente de todas estas ondas secundarias.
          </p>
        </Concept>

        <Concept title="Principio de Huygens-Fresnel">
          <p>
            Fresnel añadió que las ondas secundarias interfieren entre sí. La amplitud en cualquier punto es la suma de las contribuciones de todas las ondas secundarias, considerando su fase.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Difracción de Fraunhofer vs Fresnel">
        <Concept title="Difracción de Fraunhofer">
          <ul>
            <li>Condición: Fuente y pantalla a distancia infinita (o usando lentes)</li>
            <li>Frentes de onda: Planos</li>
            <li>Matemática: Más simple, usa transformada de Fourier</li>
            <li>Aplicaciones: Mayoría de casos prácticos</li>
          </ul>
        </Concept>

        <Concept title="Difracción de Fresnel">
          <ul>
            <li>Condición: Fuente o pantalla a distancia finita</li>
            <li>Frentes de onda: Esféricos</li>
            <li>Matemática: Más compleja (integrales de Fresnel)</li>
            <li>Aplicaciones: Campo cercano, zonas de Fresnel</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Difracción por Rendija Simple">
        <Concept title="Patrón de Difracción">
          <p>
            Cuando luz monocromática pasa por una rendija estrecha de ancho a, se produce un patrón con un máximo central brillante y máximos secundarios más débiles.
          </p>
        </Concept>

        <Concept title="Posición de los Mínimos">
          <Formula 
            expression={String.raw`a\sin\theta = m\lambda \quad (m = \pm 1, \pm 2, \pm 3, ...)`}
            calculatorId="difraccion-rendija-simple"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>a: Ancho de la rendija</li>
            <li>θ: Ángulo respecto al eje central</li>
            <li>m: Orden del mínimo (no incluye m=0)</li>
          </ul>
        </Concept>

        <Concept title="Ancho del Máximo Central">
          <p>
            El ancho angular del máximo central (entre primeros mínimos):
          </p>
          <Formula 
            expression={String.raw`\Delta\theta = \frac{2\lambda}{a} \quad \text{(Derivada de a sinθ = mλ)}`}
          />
          <p>
            En una pantalla a distancia L:
          </p>
          <Formula 
            expression={String.raw`w = \frac{2\lambda L}{a}`}
            calculatorId="ancho-maximo-central"
            definitions={definitions}
            exercises={exercises}
          />
        </Concept>

        <Concept title="Distribución de Intensidad">
          <Formula 
            expression={String.raw`I(\theta) = I_0\left[\frac{\sin(\beta)}{\beta}\right]^2 \quad \text{(Derivada de Huygens-Fresnel)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>β = (πa/λ)sin θ</li>
            <li>I₀: Intensidad en el centro</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Difracción por Abertura Circular">
        <Concept title="Patrón de Airy">
          <p>
            Una abertura circular produce un patrón con un disco central brillante (disco de Airy) rodeado de anillos concéntricos.
          </p>
        </Concept>

        <Concept title="Posición del Primer Mínimo">
          <Formula 
            expression={String.raw`\sin\theta = 1.22\frac{\lambda}{D} \quad \text{(Derivada de función de Bessel)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>D: Diámetro de la abertura</li>
          </ul>
        </Concept>

        <Concept title="Radio del Disco de Airy">
          <p>
            En una pantalla a distancia f (distancia focal):
          </p>
          <Formula 
            expression={String.raw`r = 1.22\frac{\lambda f}{D} \quad \text{(Derivada de sinθ = 1.22λ/D)}`}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Criterio de Rayleigh">
        <Concept title="Límite de Resolución">
          <p>
            Dos fuentes puntuales se consideran apenas resueltas cuando el máximo central de una coincide con el primer mínimo de la otra.
          </p>
          <Formula 
            expression={String.raw`\theta_{min} = 1.22\frac{\lambda}{D}`}
            calculatorId="criterio-rayleigh"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>θ_min: Ángulo mínimo resoluble</li>
            <li>D: Diámetro de la apertura del instrumento</li>
          </ul>
        </Concept>

        <Concept title="Poder de Resolución">
          <p>
            El poder de resolución es inversamente proporcional a θ_min:
          </p>
          <ul>
            <li>Mayor apertura (D) → Mejor resolución</li>
            <li>Menor longitud de onda → Mejor resolución</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li>Telescopios: Resolución angular limitada por difracción</li>
            <li>Microscopios: Resolución lateral ~λ/(2NA) donde NA es apertura numérica</li>
            <li>Fotografía: Difracción limita nitidez a aperturas pequeñas (f/16-f/22)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Red de Difracción">
        <Concept title="Descripción">
          <p>
            Una red de difracción consiste en muchas rendijas paralelas igualmente espaciadas (cientos o miles). Produce patrones de interferencia muy nítidos con máximos estrechos.
          </p>
        </Concept>

        <Concept title="Ecuación de la Red">
          <Formula 
            expression={String.raw`d\sin\theta = m\lambda`}
            calculatorId="red-difraccion"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>d: Separación entre rendijas (constante de red)</li>
            <li>m: Orden del máximo (0, ±1, ±2, ...)</li>
          </ul>
        </Concept>

        <Concept title="Poder Dispersivo">
          <p>
            Capacidad de separar longitudes de onda cercanas:
          </p>
          <Formula 
            expression={String.raw`D = \frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta} \quad \text{(Derivada de d sinθ = mλ)}`}
          />
        </Concept>

        <Concept title="Poder de Resolución">
          <p>
            Capacidad de distinguir dos longitudes de onda:
          </p>
          <Formula 
            expression={String.raw`R = \frac{\lambda}{\Delta\lambda} = mN \quad \text{(Derivada del criterio de Rayleigh)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>N: Número total de rendijas iluminadas</li>
            <li>m: Orden del espectro</li>
          </ul>
        </Concept>

        <Concept title="Tipos de Redes">
          <ul>
            <li>Redes de transmisión: Rendijas transparentes</li>
            <li>Redes de reflexión: Surcos reflectantes (CD, DVD, Blu-ray)</li>
            <li>Redes holográficas: Patrón de interferencia grabado</li>
          </ul>
          <p>
            Densidades típicas: 300-1200 líneas/mm (visible), hasta 3000 líneas/mm (UV)
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Difracción de Rayos X">
        <Concept title="Ley de Bragg">
          <p>
            Los cristales actúan como redes de difracción tridimensionales para rayos X:
          </p>
          <Formula 
            expression={String.raw`2d\sin\theta = n\lambda \quad \text{(Derivada de interferencia constructiva)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>d: Espaciado entre planos cristalinos (~0.1-1 nm)</li>
            <li>θ: Ángulo de incidencia (ángulo de Bragg)</li>
            <li>n: Orden de difracción (1, 2, 3, ...)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li>Cristalografía: Determinación de estructuras moleculares</li>
            <li>Análisis de materiales: Identificación de fases cristalinas</li>
            <li>Biología estructural: Estructura de proteínas y ADN (Watson & Crick, 1953)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Zonas de Fresnel">
        <Concept title="Construcción">
          <p>
            El frente de onda se divide en zonas anulares concéntricas. Zonas alternas contribuyen con fases opuestas.
          </p>
        </Concept>

        <Concept title="Radio de la n-ésima Zona">
          <Formula 
            expression={String.raw`r_n = \sqrt{n\lambda\frac{r_0 r_i}{r_0 + r_i}} \quad \text{(Derivada de diferencia de camino λ/2)}`}
          />
          <p>Donde:</p>
          <ul>
            <li>r₀: Distancia de la fuente a la abertura</li>
            <li>r_i: Distancia de la abertura al punto de observación</li>
          </ul>
        </Concept>

        <Concept title="Placa de Zona">
          <p>
            Dispositivo que bloquea zonas alternas, actuando como lente:
          </p>
          <ul>
            <li>Concentra luz en un foco</li>
            <li>Usado en rayos X (difícil hacer lentes convencionales)</li>
            <li>Aplicaciones en microscopía de rayos X</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Espectroscopía y análisis químico</h3>
          <p>
            Las redes de difracción separan la luz en sus componentes espectrales, permitiendo identificar elementos químicos. Los espectrómetros usan redes con 600-1200 líneas/mm para analizar composición de estrellas, materiales y contaminantes. En astronomía, el análisis espectral determinó que el Sol contiene hidrógeno, helio y otros elementos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Telescopios y astronomía</h3>
          <p>
            La difracción limita la resolución angular de telescopios. El Hubble (2.4 m de diámetro) tiene resolución teórica de 0.05 segundos de arco. Los telescopios terrestres gigantes (10+ metros) compensan turbulencia atmosférica con óptica adaptativa. La interferometría combina múltiples telescopios para simular aperturas de kilómetros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💿 Almacenamiento óptico (CD, DVD, Blu-ray)</h3>
          <p>
            Los discos ópticos tienen pistas con espaciado de micras que actúan como redes de difracción. CD: 1.6 µm (láser rojo 780 nm), DVD: 0.74 µm (láser rojo 650 nm), Blu-ray: 0.3 µm (láser azul 405 nm). Menor longitud de onda = mayor densidad de datos. Los colores del arcoíris en CDs son difracción de luz blanca.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 Hologramas de seguridad</h3>
          <p>
            Billetes, tarjetas de crédito y pasaportes usan hologramas de difracción imposibles de fotocopiar. Son patrones microscópicos grabados que difractan luz en colores específicos según el ángulo de visión. La holografía registra el frente de onda completo (amplitud y fase) mediante interferencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💻 Fabricación de chips (fotolitografía)</h3>
          <p>
            La difracción limita el tamaño mínimo de transistores en chips. Para circuitos de 5 nm, se usa luz ultravioleta extrema (EUV, 13.5 nm) y técnicas complejas. Cada generación de chips requiere innovaciones para superar el límite de difracción. La Ley de Moore enfrenta límites físicos fundamentales de la luz.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Demostrando ondas
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Grimaldi descubre la difracción (1665)</h3>
          <p>
            El jesuita italiano Francesco Grimaldi observó que la sombra de un objeto iluminado por un rayo fino de luz no era perfectamente nítida, sino que mostraba franjas de color en los bordes. Acuñó el término "difracción" (del latín diffringere, "romper en pedazos"). Fue la primera evidencia de que la luz no viaja estrictamente en línea recta.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Huygens y Fresnel: principio de ondas (1690-1818)</h3>
          <p>
            Christiaan Huygens propuso que cada punto de un frente de onda actúa como fuente de ondas secundarias. Augustin-Jean Fresnel extendió la teoría añadiendo interferencia entre ondas secundarias, explicando matemáticamente patrones de difracción. En 1818, Siméon Poisson intentó refutar la teoría prediciendo un punto brillante absurdo en el centro de la sombra de un disco. François Arago lo observó experimentalmente, confirmando la teoría ondulatoria.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 Fraunhofer y las redes de difracción (1821)</h3>
          <p>
            Joseph von Fraunhofer fabricó las primeras redes de difracción precisas usando hilos finos paralelos. Descubrió líneas oscuras en el espectro solar (líneas de Fraunhofer), que luego se identificaron como absorción de elementos químicos. Estableció la espectroscopía moderna, permitiendo analizar composición química de objetos lejanos sin tocarlos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧒 Lord Rayleigh: límites de resolución (1879)</h3>
          <p>
            John William Strutt (Lord Rayleigh) formuló el criterio de resolución basado en difracción: dos fuentes están apenas resueltas cuando el máximo de una coincide con el primer mínimo de la otra. Este criterio define límites fundamentales de microscopios y telescopios. Explicó por qué el cielo es azul (dispersión Rayleigh) y estableció bases de la física moderna.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔵 La mancha de Poisson: paradoja brillante</h3>
          <p>
            En 1818, Siméon Poisson intentó ridiculizar la teoría ondulatoria de Fresnel señalando una predicción "absurda": debería aparecer un punto brillante justo en el centro de la sombra de un disco opaco. François Arago construyó el experimento y efectivamente observó el punto brillante. Lo que parecía una refutación se convirtió en la confirmación definitiva. Hoy se llama "mancha de Poisson" o "mancha de Arago".
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Por qué los CDs son arcoíris</h3>
          <p>
            Las pistas de un CD están separadas 1.6 micras, actuando como red de difracción. La luz blanca se separa en colores según el ángulo de visión. Cada color se difracta diferentemente: rojo (~650 nm) se desvía más que azul (~450 nm). Por eso ves arcoíris iridiscente al girar un CD bajo luz. DVDs y Blu-rays tienen pistas más juntas, cambiando el patrón.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 El problema de los "super-telescopios"</h3>
          <p>
            El telescopio terrestre más grande es el Gran Telescopio de Canarias (10.4 m). ¿Por qué no construir uno de 100 m? La difracción ya no es el problema principal: la turbulencia atmosférica (seeing) limita resolución a ~1 segundo de arco. Telescopios gigantes necesitan óptica adaptativa (espejos deformables que corrigen turbulencia 1000 veces/segundo). El futuro son telescopios espaciales e interferometría.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧠 Watson y Crick gracias a difracción</h3>
          <p>
            En 1952, Rosalind Franklin obtuvo la famosa "Fotografía 51" usando difracción de rayos X en cristales de ADN. El patrón en forma de X reveló la estructura helicoidal. James Watson y Francis Crick usaron esta imagen (sin permiso de Franklin) para proponer el modelo de doble hélice en 1953. Franklin murió a los 37 años sin recibir el Nobel que fue para Watson, Crick y Wilkins en 1962.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Difracción: desviación de ondas al pasar por aberturas u obstáculos, notable cuando λ ≈ a.
          </li>
          <li>
            Rendija simple: mínimos en a sinθ = mλ; Abertura circular: θ_min = 1.22λ/D (disco de Airy).
          </li>
          <li>
            Criterio de Rayleigh: límite de resolución cuando máximo de una fuente coincide con mínimo de otra.
          </li>
          <li>
            Red de difracción: d sinθ = mλ; poder de resolución R = mN (espectroscopía).
          </li>
          <li>
            Rayos X: Ley de Bragg 2d sinθ = nλ para cristalografía (ADN, proteínas).
          </li>
          <li>
            Historia: Grimaldi (1665) → Huygens (1690) → Fresnel (1818) → Fraunhofer (1821) → Rayleigh (1879).
          </li>
        </ul>
      </div>
    </>
  );
};

export default DifraccionTeoria;
