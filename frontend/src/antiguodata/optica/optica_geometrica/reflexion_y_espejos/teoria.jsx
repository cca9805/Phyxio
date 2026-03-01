import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

// Metadatos del tema
export const metadata = {
  titulo: "Reflexión y Espejos",
  descripcion: "Leyes de reflexión, espejos planos y esféricos que explican cómo la luz rebota en superficies",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ReflexionEspejosTeoria = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Reflexión de la Luz?">
        <p>
          La reflexión es el fenómeno óptico por el cual un rayo de luz que incide sobre una superficie cambia de dirección, permaneciendo en el mismo medio. Este fenómeno es fundamental para entender cómo vemos los objetos y cómo funcionan los espejos.
        </p>
        <p>
          Cuando la luz incide sobre una superficie pulida y lisa, como un espejo, se produce una reflexión especular, donde los rayos reflejados mantienen su organización. En superficies rugosas, ocurre una reflexión difusa, donde los rayos se dispersan en múltiples direcciones.
        </p>
        <Important>
          La reflexión es responsable de que podamos ver los objetos: la luz rebota en ellos y llega a nuestros ojos. Sin reflexión, el mundo sería completamente oscuro incluso con luz presente.
        </Important>
      </TheorySection>

      <TheorySection title="Leyes de la Reflexión">
        <Concept title="Primera Ley de la Reflexión">
          <p>
            El rayo incidente, el rayo reflejado y la normal a la superficie en el punto de incidencia se encuentran en el mismo plano.
          </p>
        </Concept>

        <Concept title="Segunda Ley de la Reflexión">
          <p>
            El ángulo de incidencia es igual al ángulo de reflexión:
          </p>
          <Formula 
            expression={String.raw`\theta_i = \theta_r`}
            calculatorId="ley-reflexion"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>θᵢ: Ángulo de incidencia (medido desde la normal)</li>
            <li>θᵣ: Ángulo de reflexión (medido desde la normal)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Espejos Planos">
        <p>
          Un espejo plano es una superficie reflectante perfectamente lisa. Las imágenes formadas por espejos planos tienen características especiales:
        </p>
        <ul>
          <li>Virtual: La imagen se forma detrás del espejo</li>
          <li>Derecha: Mantiene la misma orientación que el objeto</li>
          <li>Mismo tamaño: La imagen tiene el mismo tamaño que el objeto</li>
          <li>Simétrica: La distancia objeto-espejo = distancia imagen-espejo</li>
          <li>Invertida lateralmente: La izquierda y derecha se intercambian</li>
        </ul>
      </TheorySection>

      <TheorySection title="Espejos Esféricos">
        <p>
          Los espejos esféricos son superficies reflectantes que forman parte de una esfera. Se clasifican en dos tipos:
        </p>

        <Concept title="Espejo Cóncavo (Convergente)">
          <p>
            La superficie reflectante es la parte interior de la esfera. Los rayos paralelos al eje óptico convergen en el foco después de reflejarse.
          </p>
          <ul>
            <li>Puede formar imágenes reales o virtuales</li>
            <li>Puede ampliar o reducir la imagen</li>
            <li>Usado en telescopios reflectores y espejos de aumento</li>
          </ul>
        </Concept>

        <Concept title="Espejo Convexo (Divergente)">
          <p>
            La superficie reflectante es la parte exterior de la esfera. Los rayos paralelos al eje óptico divergen después de reflejarse, como si provinieran del foco.
          </p>
          <ul>
            <li>Siempre forma imágenes virtuales, derechas y reducidas</li>
            <li>Proporciona un campo de visión amplio</li>
            <li>Usado en espejos retrovisores y de seguridad</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de los Espejos Esféricos">
        <Concept title="Ecuación del Espejo">
          <p>
            Relaciona la distancia del objeto, la distancia de la imagen y la distancia focal:
          </p>
          <Formula 
            expression={String.raw`\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}`}
            calculatorId="ecuacion-espejos"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>f: Distancia focal (cm)</li>
            <li>d_o: Distancia del objeto al espejo (cm)</li>
            <li>d_i: Distancia de la imagen al espejo (cm)</li>
          </ul>
          <p>Convención de signos:</p>
          <ul>
            <li>f {'>'} 0 para espejos cóncavos, f {'<'} 0 para espejos convexos</li>
            <li>d_i {'>'} 0 para imágenes reales, d_i {'<'} 0 para imágenes virtuales</li>
          </ul>
        </Concept>

        <Concept title="Relación entre Radio y Distancia Focal">
          <p>
            La distancia focal es la mitad del radio de curvatura:
          </p>
          <Formula 
            expression={String.raw`f = \frac{R}{2}`}
            calculatorId="relacion-focal-radio"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>R: Radio de curvatura del espejo (cm)</li>
            <li>f: Distancia focal (cm)</li>
          </ul>
        </Concept>

        <Concept title="Aumento Lateral">
          <p>
            Relaciona el tamaño de la imagen con el tamaño del objeto:
          </p>
          <Formula 
            expression={String.raw`m = -\frac{d_i}{d_o} = \frac{h_i}{h_o}`}
            calculatorId="aumento-espejos"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>m: Aumento lateral (adimensional)</li>
            <li>h_i: Altura de la imagen (cm)</li>
            <li>h_o: Altura del objeto (cm)</li>
          </ul>
          <p>Interpretación:</p>
          <ul>
            <li>|m| {'>'} 1: imagen ampliada</li>
            <li>|m| {'<'} 1: imagen reducida</li>
            <li>m {'>'} 0: imagen derecha</li>
            <li>m {'<'} 0: imagen invertida</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Construcción de Rayos Principales">
        <p>
          Para determinar gráficamente la posición y características de la imagen, se trazan tres rayos principales:
        </p>
        <ol>
          <li>Rayo paralelo: Un rayo paralelo al eje óptico se refleja pasando por el foco (cóncavo) o como si viniera del foco (convexo)</li>
          <li>Rayo focal: Un rayo que pasa por el foco se refleja paralelo al eje óptico</li>
          <li>Rayo central: Un rayo que pasa por el centro de curvatura se refleja sobre sí mismo</li>
        </ol>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔭 Telescopios Reflectores Profesionales</h3>
          <p>
            Los telescopios astronómicos modernos usan espejos cóncavos parabólicos en lugar de lentes. El Gran Telescopio Canarias (GTC) tiene un espejo primario de 10.4 m compuesto por 36 segmentos hexagonales, cada uno controlado por actuadores que mantienen alineación nanométrica. Los espejos reflectores evitan aberración cromática y son más fáciles de fabricar en grandes tamaños que las lentes. El telescopio espacial James Webb usa un espejo de 6.5 m de berilio recubierto con oro (100 nm de espesor) optimizado para infrarrojo, que costó $500 millones fabricar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Espejos Retrovisores Convexos</h3>
          <p>
            Los espejos retrovisores del lado del copiloto son convexos con radio de curvatura típico de 1-2 m, proporcionando campo de visión 2-3× mayor que espejos planos. La advertencia "Los objetos en el espejo están más cerca de lo que parecen" existe porque el espejo convexo reduce el tamaño aparente (|m| {'<'} 1), haciendo que los vehículos parezcan más lejanos. Los espejos de seguridad en tiendas y estacionamientos usan radio de curvatura más pequeño (30-60 cm) para abarcar 180° de visión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Faros Parabólicos y Concentradores Solares</h3>
          <p>
            Los faros de automóviles usan espejos parabólicos que colocan la fuente de luz (LED o halógena) en el foco, produciendo haz paralelo según principio de reversibilidad. Los faros bi-xenón (potencia 35W, flujo luminoso 3,200 lúmenes) cuestan $200-$500 por unidad. Los concentradores solares parabólicos (CSP) en centrales termosolares como Ivanpah (California, 392 MW) usan miles de heliostatos (espejos planos) que reflejan luz hacia torre central, alcanzando temperaturas de 565°C para generar vapor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💄 Espejos de Aumento Cosméticos</h3>
          <p>
            Los espejos de maquillaje son cóncavos con aumentos típicos de 5×-10× (distancia focal 10-20 cm). Funcionan cuando el rostro se coloca entre el foco y el espejo (d_o {'<'} f), produciendo imagen virtual, derecha y ampliada. Los espejos profesionales de salones ($50-$200) tienen iluminación LED periférica (5000K-6500K temperatura de color) y doble cara: normal (1×) y aumento (7×-10×). Los espejos quirúrgicos dentales son cóncavos con aumentos 2×-3× para visualizar detalles de 0.5 mm.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Efectos Especiales y Casas de los Espejos</h3>
          <p>
            Los parques de atracciones usan combinaciones de espejos cóncavos, convexos y planos para crear ilusiones ópticas. Espejos cóncavos cerca del piso hacen que las piernas se vean alargadas (m {'>'} 1), mientras espejos convexos en el techo reducen la parte superior del cuerpo. Los ilusionistas usan espejos semi-transparentes (50% reflectancia, 50% transmitancia) para trucos de "fantasmas" mediante reflexión parcial. El espejo de Pepper (1862) proyecta imagen fantasmal usando vidrio inclinado 45° que refleja actor oculto.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de los espejos
        </h2>
        
        <div className="theory-subsection">
          <h3>🪨 Espejos Antiguos: de Obsidiana a Metal Pulido (6000 a.C. - 1500)</h3>
          <p>
            Los primeros espejos (6000 a.C., Anatolia, Turquía) eran obsidiana pulida (vidrio volcánico negro). Los egipcios fabricaron espejos de cobre pulido (2500 a.C.), mientras los romanos usaron bronce y plata pulidos. Plinio el Viejo (77 d.C.) describió espejos de vidrio respaldados con plomo derretido. Los espejos medievales eran artículos de lujo: un espejo de metal pulido en el siglo XIII costaba el equivalente a $5,000 actuales. Venecia monopolizó fabricación de espejos de vidrio (siglo XV), con técnicas tan secretas que revelarlas era traición castigada con muerte.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Leyes de Reflexión: de Euclides a Ibn al-Haytham (300 a.C. - 1021)</h3>
          <p>
            Euclides formuló las primeras leyes de reflexión en "Catóptrica" (300 a.C.), aunque creía incorrectamente que la visión emitía rayos desde los ojos. Hero de Alejandría (60 d.C.) demostró que la luz toma el camino más corto en reflexión, anticipando principio de Fermat por 1,600 años. Ibn al-Haytham (Alhazen, 965-1040) escribió "Libro de Óptica" (1021), estableciendo correctamente que la luz viaja desde objetos hacia ojos, y formuló las leyes de reflexión modernas: θ_i = θ_r. Sus experimentos con cámaras oscuras y espejos curvos fundaron la óptica como ciencia experimental.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔭 Telescopios Reflectores: Newton y Herschel (1668-1789)</h3>
          <p>
            Isaac Newton inventó el telescopio reflector (1668) para evitar aberración cromática de telescopios refractores. Su diseño usaba espejo primario cóncavo (diámetro 3.3 cm) y espejo secundario plano en ángulo 45° que desviaba luz hacia ocular lateral. William Herschel construyó telescopios reflectores gigantes: su "telescopio de 40 pies" (1789) tenía espejo de 1.2 m de diámetro pulido durante 200 horas, pesaba 1 tonelada, y descubrió Urano (1781) y dos lunas de Saturno. El espejo se oxidaba rápidamente y requería repulido mensual.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✨ Espejos Modernos: de Plata a Aluminio (1835-presente)</h3>
          <p>
            Justus von Liebig inventó el proceso de plateado químico (1835), depositando capa uniforme de plata sobre vidrio mediante reducción química de nitrato de plata. Este método democratizó los espejos: el precio cayó 95% en 50 años. Los espejos astronómicos modernos usan aluminio vaporizado (1930+) depositado en vacío, con capa de 100-200 nm que refleja 90% luz visible. El Hubble requiere realuminización cada 10 años ($1 millón por operación). Los espejos dieléctricos multicapa (1950+) alcanzan 99.99% reflectancia para longitudes de onda específicas usando interferencia constructiva.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 El Espejo de Arquímedes: ¿Mito o Realidad?</h3>
          <p>
            Según la leyenda, Arquímedes defendió Siracusa (214-212 a.C.) usando espejos gigantes que concentraban luz solar para incendiar barcos romanos a distancia. Los historiadores debatieron esto durante siglos. En 2005, el MIT recreó el experimento con estudiantes: 127 espejos planos (30×30 cm) enfocados en barco a 30 m lo incendiaron en 10 minutos. Mythbusters (2006) concluyó que era "plausible pero impráctico": requiere día soleado, mar calmado, barco estacionario, y 10-15 minutos de exposición. Los arcos incendiarios convencionales eran más efectivos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👻 El Espejo que "No Existe": Semitransparente</h3>
          <p>
            Los espejos semi-transparentes (beam splitters) reflejan y transmiten luz simultáneamente (típicamente 50/50). Se usan en teleprompters: el presentador lee texto reflejado mientras la cámara filma a través del espejo. Los trucos de "fantasmas" en cine y teatro desde 1860 usan este principio: actor iluminado fuera de escena se refleja en vidrio inclinado, apareciendo como figura translúcida. Los interrogatorios policiales usan vidrio polarizado: espejo por un lado (sala interrogación), ventana transparente por el otro (sala observación), funcionando mediante diferencia de iluminación 10:1.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎨 ¿Por Qué los Espejos Invierten Izquierda-Derecha pero No Arriba-Abajo?</h3>
          <p>
            Esta es una ilusión perceptual clásica. Los espejos NO invierten izquierda-derecha: invierten adelante-atrás (perpendicular al espejo). Si levantas tu mano derecha, tu reflejo levanta su mano derecha (desde su perspectiva). La confusión surge porque imaginamos "entrar" al espejo rotando 180° verticalmente, no porque el espejo invierta horizontal. Si te acuestas paralelo al espejo, el reflejo también estará acostado (no se invierte arriba-abajo). Los espejos invierten profundidad (dimensión z), no dimensiones x o y. Richard Feynman dedicó una conferencia completa a explicar este concepto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💎 El Espejo más Reflectivo del Mundo: 99.9999%</h3>
          <p>
            Los espejos dieléctricos multicapa pueden alcanzar reflectancia de 99.9999% para longitudes de onda específicas, absorbiendo solo 0.0001% (1 ppm). Estos espejos se fabrican depositando 20-40 capas alternas de materiales con índices de refracción diferentes (típicamente TiO₂ y SiO₂), cada capa con espesor λ/4. Se usan en láseres de alta potencia y cavidades ópticas: LIGO usa espejos con pérdidas {'<'} 10 ppm para que luz láser rebote 400 veces antes de escapar. Un espejo con R=99.9999% a 1064 nm cuesta $5,000-$15,000.
        </p>
        </div>

        <div className="theory-subsection">
          <h3>🌙 Los Espejos Lunares: Reflectores Apollo</h3>
          <p>
            Las misiones Apollo 11, 14 y 15 (1969-1971) dejaron reflectores láser en la Luna: paneles con 100 prismas de esquina (corner cubes) que reflejan luz exactamente hacia su origen. Observatorios terrestres disparan pulsos láser (duración 100 picosegundos, energía 250 mJ) hacia la Luna, y detectan fotones reflejados 2.5 segundos después (distancia 384,400 km). De cada 10¹⁷ fotones enviados, solo 1-5 regresan detectables. Estos experimentos midieron que la Luna se aleja 3.8 cm/año, confirmaron relatividad general con precisión de milímetros, y demostraron que el núcleo lunar es parcialmente fundido.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>La reflexión es el fenómeno donde la luz rebota en una superficie manteniéndose en el mismo medio. Ley fundamental: θ_i = θ_r (ángulo incidencia = ángulo reflexión).</li>
          <li>Espejos planos producen imágenes virtuales, derechas, mismo tamaño, simétricas (distancia objeto = distancia imagen), e invertidas lateralmente.</li>
          <li>Espejos esféricos: cóncavos (convergentes) forman imágenes reales/virtuales ampliadas/reducidas según posición objeto; convexos (divergentes) siempre forman imágenes virtuales, derechas y reducidas con campo visión amplio.</li>
          <li>Ecuaciones fundamentales: 1/f = 1/d_o + 1/d_i (ecuación espejo), f = R/2 (focal = mitad radio), m = -d_i/d_o (aumento lateral). Convención signos: f {'>'} 0 cóncavos, f {'<'} 0 convexos.</li>
          <li>Historia: Espejos antiguos obsidiana/metal pulido (6000 a.C.), leyes reflexión Ibn al-Haytham (1021), telescopio reflector Newton (1668), plateado químico Liebig (1835), aluminio vaporizado modernos (1930+).</li>
          <li>Aplicaciones: Telescopios reflectores (GTC 10.4 m, James Webb 6.5 m $500M), retrovisores convexos (radio 1-2 m, campo 2-3×), concentradores solares parabólicos (565°C), espejos aumento cosméticos (5×-10×, d_o {'<'} f), efectos especiales semi-transparentes.</li>
        </ul>
      </div>
    </>
  );
};

export default ReflexionEspejosTeoria;
