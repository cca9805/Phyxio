import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Polarización",
  descripcion: "Orientación del campo eléctrico en ondas electromagnéticas, demostrando la naturaleza transversal de la luz.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const PolarizacionTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Polarización?">
        <p>
          La polarización describe la orientación del campo eléctrico de una onda electromagnética. Mientras que la luz ordinaria tiene campos eléctricos vibrando en todas las direcciones perpendiculares a la propagación, la luz polarizada tiene una orientación preferencial.
        </p>
        <Important>
          La polarización es exclusiva de ondas transversales y prueba que la luz no es una onda longitudinal.
        </Important>
      </TheorySection>

      <TheorySection title="Tipos de Polarización">
        <Concept title="Polarización Lineal">
          <p>El campo eléctrico oscila en un solo plano. Se obtiene mediante polarizadores.</p>
        </Concept>

        <Concept title="Polarización Circular">
          <p>El campo eléctrico rota describiendo una hélice. Puede ser dextrógira o levógira.</p>
        </Concept>

        <Concept title="Polarización Elíptica">
          <p>Caso general donde el campo describe una elipse. Incluye los casos lineal y circular como casos especiales.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ley de Malus">
        <Concept title="Intensidad Transmitida">
          <p>Cuando luz polarizada pasa por un polarizador:</p>
          <Formula 
            expression={String.raw`I = I_0\cos^2\theta`}
            calculatorId="ley-malus"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>I₀: Intensidad incidente</li>
            <li>θ: Ángulo entre el eje del polarizador y la dirección de polarización</li>
          </ul>
          <p>
            Casos especiales: θ = 0° → I = I₀ (máxima transmisión), θ = 90° → I = 0 (polarizadores cruzados).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Métodos de Polarización">
        <Concept title="1. Polarización por Absorción Selectiva">
          <p>Materiales dicroicos (como polaroid) absorben una componente del campo eléctrico y transmiten la perpendicular. Los polarizadores modernos usan polímeros con moléculas alineadas que absorben luz polarizada en una dirección.</p>
        </Concept>

        <Concept title="2. Polarización por Reflexión">
          <p>Ángulo de Brewster:</p>
          <Formula 
            expression={String.raw`\theta_B = \arctan\left(\frac{n_2}{n_1}\right)`}
            calculatorId="angulo-brewster"
            definitions={definitions}
            exercises={exercises}
          />
          <p>A este ángulo, la luz reflejada está completamente polarizada perpendicular al plano de incidencia. El rayo reflejado y refractado son perpendiculares entre sí.</p>
        </Concept>

        <Concept title="3. Polarización por Refracción Doble (Birrefringencia)">
          <p>Cristales como la calcita dividen un rayo en dos con polarizaciones perpendiculares (rayo ordinario y extraordinario). El rayo ordinario obedece ley de Snell, el extraordinario no. Separación típica: 6-7 mm para calcita de 1 cm.</p>
        </Concept>

        <Concept title="4. Polarización por Dispersión (Rayleigh)">
          <p>La luz dispersada por partículas pequeñas está parcialmente polarizada. Perpendicular a la dirección del Sol, el cielo tiene ~60% de polarización. Los insectos usan esto para navegación.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Actividad Óptica">
        <Concept title="Rotación Óptica">
          <p>Sustancias quirálicas (como azúcares) rotan el plano de polarización de luz lineal:</p>
          <Formula 
            expression={String.raw`\theta = [\alpha] \times l \times c`}
            calculatorId="rotacion-optica"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>[α]: Rotación específica (propiedad del material)</li>
            <li>l: Longitud del tubo</li>
            <li>c: Concentración</li>
          </ul>
          <p>
            Usado en industria alimentaria para medir concentración de azúcares (polarímetro).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Birrefringencia y Láminas de Onda">
        <Concept title="Lámina de Media Onda">
          <p>Cambia el sentido de rotación de luz circular o rota 90° luz lineal. Espesor: t = λ/(2Δn)</p>
        </Concept>

        <Concept title="Lámina de Cuarto de Onda">
          <p>Convierte luz lineal en circular (o viceversa). Espesor: t = λ/(4Δn). Usada en gafas 3D y lectores CD/DVD.</p>
        </Concept>

        <Concept title="Fotoelasticidad">
          <p>Materiales transparentes bajo tensión se vuelven birrefringentes. Usado para analizar esfuerzos en ingeniería colocando modelo entre polarizadores cruzados.</p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>😎 Gafas de sol polarizadas</h3>
          <p>
            Reducen reflejos molestos de superficies horizontales (agua, asfalto, capó de autos). Los reflejos son luz polarizada horizontalmente cerca del ángulo de Brewster (~53° para agua). Las gafas tienen polarizadores verticales que bloquean esta componente, reduciendo deslumbramiento 90-99%. Problema: dificultan ver pantallas LCD (también polarizadas) y parabrisas laminados con tensiones internas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📺 Pantallas LCD (cristal líquido)</h3>
          <p>
            Cada píxel tiene dos polarizadores cruzados (90°) con cristal líquido entre ellos. Sin voltaje, el cristal líquido rota la luz 90° (píxel brillante). Con voltaje, las moléculas se alinean y no rotan luz (píxel oscuro, ley de Malus → I=0). Ventaja sobre CRT: sin radiación, bajo consumo. Las pantallas modernas IPS, TN, VA difieren en orientación molecular del líquido.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📷 Filtros polarizadores en fotografía</h3>
          <p>
            Los fotógrafos usan filtros polarizadores circulares (CPL) para: 1) Eliminar reflejos de agua/vidrio, 2) Intensificar cielo azul (90° del Sol, donde polarización es máxima), 3) Aumentar saturación de colores. Se roscan frente al objetivo y se rotan hasta lograr efecto deseado. Reducen luz ~1.5 pasos (ley de Malus: I≈I₀/2 promedio). No funcionan con ultra gran angular (&lt;24mm) por polarización desigual del cielo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎬 Cine 3D con polarización</h3>
          <p>
            Proyectan dos imágenes simultáneas con polarización perpendicular (lineal o circular). Gafas pasivas tienen polarizadores opuestos en cada ojo, separando imágenes. Polarización circular (RealD) es mejor que lineal: funciona inclinando cabeza. IMAX 3D usa polarización lineal con pantalla especial que preserva polarización. Alternativa: gafas activas con obturadores LCD sincronizados (120 Hz).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Microscopía de polarización y fotoelasticidad</h3>
          <p>
            Minerales, cristales y fibras son birrefringentes: aparecen con colores bajo polarizadores cruzados. Geólogos identifican minerales por colores de interferencia. En ingeniería, modelos de plástico transparente bajo carga muestran líneas de tensión coloreadas (fotoelasticidad). Boeing usa esto para analizar distribución de esfuerzos en estructuras. También detecta defectos en vidrio templado y plásticos inyectados.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Descubriendo la luz transversal
        </h2>
        
        <div className="theory-subsection">
          <h3>💎 Bartholinus y la calcita islandesa (1669)</h3>
          <p>
            Erasmus Bartholinus descubrió que un cristal de calcita (espato de Islandia) produce doble imagen: un rayo ordinario y uno extraordinario. Al rotar el cristal, uno permanece fijo y el otro gira alrededor. Este fenómeno misterioso (birrefringencia) no se explicó hasta que se entendió la polarización. Huygens (1690) propuso ondas longitudinales con ejes preferenciales, pero la explicación correcta requería ondas transversales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔍 Malus y la reflexión polarizante (1808)</h3>
          <p>
            Étienne-Louis Malus observó casualmente luz del Sol reflejada en ventanas del Palacio de Luxemburgo a través de un cristal de calcita islandesa. Notó que la doble imagen desaparecía en ciertos ángulos. Descubrió que la reflexión polariza luz y formuló su ley: I = I₀cos²θ. Acuñó el término "polarización" por analogía con polos magnéticos. Murió a los 36 años sin ver el impacto de su descubrimiento.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 Fresnel y Young: ondas transversales (1817-1821)</h3>
          <p>
            Augustin Fresnel y Thomas Young propusieron independientemente que la luz son ondas transversales (no longitudinales como sonido). Esto explicaba polarización: el campo eléctrico oscila perpendicular a la propagación. Inicialmente rechazado (¿cómo vibra el éter transversalmente si es fluido?), se confirmó cuando Maxwell (1865) demostró que luz son ondas electromagnéticas. Fresnel también explicó birrefringencia usando dos índices de refracción en cristales anisotrópicos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📱 Edwin Land y el polaroid (1928-1938)</h3>
          <p>
            Edwin Land, a los 19 años, inventó el primer polarizador sintético barato (Polaroid). Alineó microscópicos cristales de yodoquinina sulfato en hojas de celulosa. Fundó Polaroid Corporation en 1937. Inventó la cámara instantánea Polaroid (1948), pero su contribución a polarizadores transformó tecnología: LCD, gafas de sol, fotografía. Su polarizador sheet H-sheet (1938) sigue siendo estándar. Registró 535 patentes, solo superado por Edison.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🐝 Abejas, hormigas y navegación polarizada</h3>
          <p>
            Las abejas detectan polarización de luz en el cielo para navegar, incluso con Sol nublado. Sus ojos compuestos tienen fotorreceptores sensibles a ángulo de polarización. Pueden "ver" un mapa de polarización del cielo como brújula. Experimento clásico: rotando polarizador sobre colmena, abejas vuelan en dirección equivocada. Hormigas del desierto sahara (Cataglyphis) usan esto para regresar al hormiguero en línea recta tras vagar kilómetros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦑 Calamares y comunicación invisible</h3>
          <p>
            Muchos cefalópodos (calamares, sepias) reflejan luz polarizada con su piel iridiscente. Como pueden detectar polarización pero peces depredadores no, usan patrones polarizados para comunicación "encriptada". Un calamar macho puede mostrar cortejo polarizado a hembra en un lado mientras exhibe agresión (no polarizada) a rival en otro. Mantis marinas tienen la visión de polarización más compleja del reino animal: 12 tipos de receptores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Por qué no ves tu velocímetro con gafas polarizadas</h3>
          <p>
            Muchos autos tienen tableros LCD. Si inclinas la cabeza 90° con gafas de sol polarizadas, el tablero se vuelve negro. Razón: LCD del auto y gafas tienen polarizadores paralelos normalmente, pero al girar 90° quedan cruzados (ley de Malus → I=0). Algunos fabricantes usan LCDs con ángulos compensados. Pilotos de aviación no pueden usar gafas polarizadas: instrumentos digitales y parabrisas laminados (con tensiones) se ven negros o con patrones extraños.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 Arte y tensiones: el vidrio templado oculto</h3>
          <p>
            Vidrio templado (parabrisas, ventanas de edificios) tiene tensiones internas que lo vuelven birrefringente. Invisible a ojo desnudo, pero con gafas polarizadas ves patrones de colores y manchas oscuras. Estas revelan distribución de tensiones del templado. Artistas como Austine Wood Comarow usan vidrio bajo tensión entre polarizadores para crear "esculturas de luz" con colores cambiantes según ángulo. Un error de templado se detecta viendo el vidrio con luz polarizada.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Polarización: orientación del campo eléctrico de luz; demuestra naturaleza transversal (Maxwell, 1865).
          </li>
          <li>
            Ley de Malus: I = I₀cos²θ; intensidad transmitida por polarizador rotado ángulo θ.
          </li>
          <li>
            Ángulo de Brewster: θ_B = arctan(n₂/n₁); reflexión completamente polarizada, reflejado ⊥ refractado.
          </li>
          <li>
            Métodos: absorción (polaroid), reflexión (Brewster), birrefringencia (calcita), dispersión (cielo polarizado).
          </li>
          <li>
            Aplicaciones: gafas de sol, LCD, fotografía (CPL), 3D, microscopía, fotoelasticidad, polarímetros.
          </li>
          <li>
            Historia: Bartholinus (1669) → Malus (1808) → Fresnel/Young (1821) → Land (1938).
          </li>
        </ul>
      </div>
    </>
  );
};

export default PolarizacionTeoria;
