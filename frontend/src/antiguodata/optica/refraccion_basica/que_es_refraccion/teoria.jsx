import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "¿Qué es la Refracción?",
  descripcion: "Refracción de la luz y cambio de medio",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const QueEsRefraccionTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Refracción?" emoji="💧">
        <p>
          La refracción es el fenómeno por el cual la luz cambia de dirección 
          cuando pasa de un medio a otro (por ejemplo, del aire al agua). Esto ocurre porque 
          la luz viaja a diferentes velocidades en diferentes materiales.
        </p>

        <Important>
          Este tema proporciona una base conceptual visual para ESO sobre el fenómeno de refracción de la luz.
          La luz viaja más rápido en el aire que en el agua o el vidrio. 
          Cuando cambia de velocidad, también cambia de dirección (excepto si entra perpendicular).
        </Important>
      </TheorySection>

      <TheorySection title="Ley de la Refracción" emoji="📐">
        <p>
          Al pasar de un medio a otro, el rayo se curva respecto a la normal.
          De forma cualitativa: si entra a un medio más lento (mayor índice), se acerca a la normal; si entra a uno más rápido, se aleja.
        </p>
        <Formula
          title="Relación cualitativa de ángulos"
          expression={`i \\leftrightarrow r`}
          where={[
            { symbol: 'i', description: 'Ángulo de incidencia (respecto a la normal)' },
            { symbol: 'r', description: 'Ángulo de refracción (respecto a la normal)' }
          ]}
        />
      </TheorySection>

      <TheorySection title="¿Por qué ocurre?" emoji="🤔">
        <Concept title="Velocidad de la luz en diferentes medios">
          <p>
            La luz viaja a diferentes velocidades según el medio:
          </p>

          <ul>
            <li>🌌 Vacío: 300,000 km/s (velocidad máxima)</li>
            <li>💨 Aire: ~300,000 km/s (casi igual que en el vacío)</li>
            <li>💧 Agua: ~225,000 km/s (75% de la velocidad en el vacío)</li>
            <li>🪟 Vidrio: ~200,000 km/s (67% de la velocidad en el vacío)</li>
            <li>💎 Diamante: ~124,000 km/s (41% de la velocidad en el vacío)</li>
          </ul>

          <p>
            Cuando la luz pasa de un medio "rápido" (aire) a uno "lento" (agua), 
            se desvía acercándose a la perpendicular. Cuando pasa de uno "lento" a uno "rápido", 
            se aleja de la perpendicular.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Cotidianos" emoji="🏠">
        <Concept title="Fenómenos que vemos todos los días">
          <h4>1. Lápiz "quebrado" en agua 🖊️💧</h4>
          <Example>
            Coloca un lápiz en un vaso con agua. Desde fuera, el lápiz parece estar 
            "quebrado" o doblado en la superficie del agua. Esto es refracción: 
            la luz que viene del lápiz bajo el agua se desvía al salir al aire.
          </Example>

          <h4>2. Piscina que parece menos profunda 🏊</h4>
          <Example>
            Cuando miras una piscina desde arriba, parece menos profunda de lo que realmente es. 
            La luz del fondo se refracta al salir del agua, haciendo que parezca más cerca.
          </Example>

          <h4>3. Moneda "aparece" en un vaso 🪙</h4>
          <Example>
            Coloca una moneda en un vaso vacío y aléjate hasta que no la veas. 
            Ahora añade agua sin moverte. ¡La moneda "aparece"! La refracción 
            hace que la luz de la moneda llegue a tus ojos.
          </Example>

          <h4>4. Espejismos en carreteras 🏜️</h4>
          <Example>
            En días calurosos, parece que hay agua en la carretera a lo lejos. 
            Es un espejismo causado por refracción: el aire caliente cerca del suelo 
            tiene diferente densidad y refracta la luz del cielo.
          </Example>

          <h4>5. Puesta de sol "alargada" 🌅</h4>
          <Example>
            Cuando el sol está en el horizonte, la refracción atmosférica hace que 
            lo veamos unos minutos más de lo que realmente está sobre el horizonte.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Índice de Refracción" emoji="📊">
        <Concept title="¿Qué es?">
          <p>
            El índice de refracción (n) es un número que indica cuánto se desvía la luz 
            al entrar en un material. Cuanto mayor es el índice, más se desvía la luz.
          </p>

          <h4>Índices de refracción comunes:</h4>
          <ul>
            <li>💨 Aire: n = 1.00 (referencia)</li>
            <li>💧 Agua: n = 1.33</li>
            <li>🪟 Vidrio: n = 1.5 - 1.9</li>
            <li>💎 Diamante: n = 2.42</li>
            <li>👁️ Cristalino del ojo: n = 1.41</li>
          </ul>

          <Important>
            Cuanto mayor es el índice de refracción, más lento viaja la luz en ese medio 
            y más se desvía al entrar desde el aire.
          </Important>
        </Concept>
        <Concept title="Tabla rápida de índices y efecto angular">
          <div style={{ display: 'block' }}>
            <table className="simple-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Medio</th>
                  <th>n</th>
                  <th>v_rel (% de c)</th>
                  <th>Efecto (desde aire)</th>
                  <th>Comentario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aire</td>
                  <td>1.00</td>
                  <td>~100%</td>
                  <td>Referencia (sin cambio de medio)</td>
                  <td>Prácticamente igual que el vacío</td>
                </tr>
                <tr>
                  <td>Agua</td>
                  <td>1.33</td>
                  <td>~75%</td>
                  <td>{'Se acerca a la normal (r < i)'}</td>
                  <td>Mayor desviación; objetos se ven "más cerca"</td>
                </tr>
                <tr>
                  <td>Vidrio</td>
                  <td>1.50</td>
                  <td>~67%</td>
                  <td>Mayor acercamiento a la normal</td>
                  <td>Usado en lentes; alta precisión óptica</td>
                </tr>
                <tr>
                  <td>Acrílico (PMMA)</td>
                  <td>1.49</td>
                  <td>~67%</td>
                  <td>Similar al vidrio</td>
                  <td>Ligero, común en lentes económicas</td>
                </tr>
                <tr>
                  <td>Cristalino (ojo humano)</td>
                  <td>~1.41</td>
                  <td>~71%</td>
                  <td>Enfoque hacia la normal</td>
                  <td>Elemento clave del sistema visual</td>
                </tr>
                <tr>
                  <td>Aceite</td>
                  <td>~1.47</td>
                  <td>~68%</td>
                  <td>Se acerca a la normal</td>
                  <td>Útil para reducir reflejos en óptica</td>
                </tr>
                <tr>
                  <td>Diamante</td>
                  <td>2.42</td>
                  <td>~41%</td>
                  <td>Se acerca fuertemente a la normal</td>
                  <td>Brillo extremo por alto índice y dispersión</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Refracción en la Naturaleza" emoji="🌈">
        <Concept title="Fenómenos naturales">
          <h4>1. Arcoíris 🌈</h4>
          <p>
            Se forma por refracción (y reflexión) de la luz del sol en gotas de agua. 
            Cada color se refracta en un ángulo ligeramente diferente, separando la luz blanca.
          </p>

          <h4>2. Estrellas titilantes ✨</h4>
          <p>
            Las estrellas "parpadean" porque su luz se refracta al pasar por capas de aire 
            de diferente temperatura y densidad en la atmósfera.
          </p>

          <h4>3. Peces bajo el agua 🐟</h4>
          <p>
            Cuando intentas pescar con arpón, debes apuntar más abajo de donde ves el pez, 
            porque la refracción hace que parezca estar más arriba de donde realmente está.
          </p>

          <h4>4. Halos solares y lunares ☀️🌙</h4>
          <p>
            Anillos de luz alrededor del sol o la luna causados por refracción en cristales 
            de hielo en la atmósfera.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Diagrama simple de refracción" emoji="🖼️">
        <p>Rayo incidente (i) que pasa a un medio con mayor índice y se acerca a la normal (r).</p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
          <svg width="360" height="220" viewBox="0 0 360 220">
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#333" />
              </marker>
            </defs>
            {/* Interface line */}
            <line x1="0" y1="110" x2="360" y2="110" stroke="#888" strokeWidth="2" />
            {/* Normal */}
            <line x1="180" y1="0" x2="180" y2="220" stroke="#bbb" strokeDasharray="4 4" />
            {/* Incident ray */}
            <line x1="60" y1="40" x2="180" y2="110" stroke="#2b6cb0" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* Refracted ray (towards normal) */}
            <line x1="180" y1="110" x2="260" y2="170" stroke="#c53030" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* Labels */}
            <text x="90" y="55" fill="#2b6cb0" fontSize="12">rayo incidente</text>
            <text x="215" y="165" fill="#c53030" fontSize="12">rayo refractado</text>
            <text x="186" y="20" fill="#666" fontSize="12">normal</text>
            {/* Angle arcs */}
            <path d="M180 110 A 40 40 0 0 1 150 80" fill="none" stroke="#2b6cb0" strokeWidth="1.5" />
            <path d="M180 110 A 35 35 0 0 0 210 140" fill="none" stroke="#c53030" strokeWidth="1.5" />
            <text x="148" y="86" fill="#2b6cb0" fontSize="12">i</text>
            <text x="212" y="138" fill="#c53030" fontSize="12">r</text>
          </svg>
        </div>
      </TheorySection>

      <TheorySection title="Experimentos Simples" emoji="🧪">
        <Concept title="1. Lápiz quebrado">
          <h4>Materiales:</h4>
          <ul>
            <li>Vaso transparente</li>
            <li>Agua</li>
            <li>Lápiz o pajita</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Llena el vaso con agua</li>
            <li>Introduce el lápiz inclinado</li>
            <li>Observa desde el lateral</li>
            <li>El lápiz parece "quebrado" en la superficie</li>
          </ol>
        </Concept>

        <Concept title="2. Moneda mágica">
          <h4>Materiales:</h4>
          <ul>
            <li>Tazón opaco</li>
            <li>Moneda</li>
            <li>Agua</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Coloca la moneda en el fondo del tazón</li>
            <li>Aléjate hasta que no la veas (el borde la tapa)</li>
            <li>Sin moverte, pide a alguien que añada agua</li>
            <li>¡La moneda "aparece"!</li>
          </ol>
        </Concept>

        <Concept title="3. Flecha que cambia de dirección">
          <h4>Materiales:</h4>
          <ul>
            <li>Papel con una flecha dibujada →</li>
            <li>Vaso transparente</li>
            <li>Agua</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Dibuja una flecha horizontal en un papel</li>
            <li>Coloca el vaso vacío delante</li>
            <li>La flecha se ve normal →</li>
            <li>Llena el vaso con agua</li>
            <li>¡La flecha se invierte! ←</li>
          </ol>
        </Concept>
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Lentes ópticas corrección visual y fotografía</h3>
          <p>
            Gafas-lentes contacto basan corrección visual principio refracción lentes convergentes-divergentes desvían rayos luz ángulos precisos compensan defectos refractivos ojo: miopía (ojo largo enfoca delante retina lentes divergentes f negativa empujan imagen posterior), hipermetropía (ojo corto enfoca detrás lentes convergentes f positiva adelantan imagen), astigmatismo (córnea irregular curvatura desigual meridianos cilindros tóricos corrigen), presbicia (pérdida acomodación cristalino edad 40+ años lentes lectura +1D a +3D adición cerca). Materiales lentes explotan índice refracción alto reducir grosor-peso: CR-39 polímero n=1.498 estándar económico $50-$150, policarbonato n=1.586 resistente impactos niños-deportes, alto índice n=1.67-1.74 reducen grosor 40-60% miopía alta -8D+ estética cosmética $200-$500, recubrimientos antirreflejantes multicapa λ/4 grosor óptico MgF₂-ZrO₂ reducen reflexiones Fresnel 8-12% superficie a 0.5-1% transmisión 98-99.5% eliminan halos nocturnos conducción. Objetivos fotográficos construcción 4-20 lentes elementos vidrio óptico diversos índices n=1.50-1.90 grupos móviles corrigen aberraciones cromáticas-esféricas-astigmatismo-distorsión zoom focal variable 24-70mm-70-200mm, vidrios especiales ED extra-low dispersion V=81-95 número Abbe fluorita CaF₂ n=1.434 apocromáticos eliminan franjas color bordes imágenes nitidez resolución 4K-8K sensores 24-61 MP full-frame.
          </p>

          <h3>Fibra óptica telecomunicaciones internet global</h3>
          <p>
            Fibra óptica cables transmisión datos luz infrarroja λ=1310nm-1550nm ventanas baja atenuación 0.2-0.4 dB/km permiten enlaces 80-120 km sin amplificación repetidores, núcleo core sílice SiO₂ dopado GeO₂ diámetro 8-10μm singlemode transmisión única modo láser coherente 10-100 Gbps por canal o 50-62.5μm multimode LED-VCSEL 1-10 Gbps aplicaciones LAN distancias cortas {'<'}2 km. Revestimiento cladding sílice pura índice refracción n_core=1.467 {'>'} n_cladding=1.457 diferencia Δn≈0.01 pequeña crítica guiado luz: rayos inciden interfaz core-cladding ángulo mayor crítico θ_c=arcsin(n_cladding/n_core)≈81° sufren reflexión total interna 100% sin pérdidas propagan zigzag longitudinal kilómetros-centenares km alcance transoceánico cables submarinos 10,000-20,000 km TAT-14 transatlántico 2.5 Tbps capacidad. Multiplexado DWDM dense wavelength division 40-80-160 canales λ separados 0.4-0.8 nm simultáneos misma fibra capacidad agregada 1-10 Tbps enlaces backbone internet-5G backhaul, amplificadores EDFA erbium-doped fiber 1530-1565 nm C-band ganancia 20-30 dB bombeado láser 980nm-1480nm permiten enlaces 400-600 km spacing estaciones amplificadoras vs 80 km sin EDFA coaxial copper limitado 100 Mbps distancias {'<'}1 km atenuación-interferencia electromagnética. Industria global mercado $6B anual 2023 proyectado $10B 2030 demanda streaming-cloud-IoT tráfico IP exabytes/mes crecimiento exponencial FTTH fiber-to-the-home despliegue urbano 100-1,000 Mbps residencial competencia cable-5G.
          </p>

          <h3>Prismas dispersión espectrómetros análisis</h3>
          <p>
            Prismas vidrio-cuarzo triángulo equilátero 60° o 30-60-90° dispersan luz blanca espectro colores rojo-naranja-amarillo-verde-azul-violeta λ=700-400nm refracción dependiente longitud onda índice n(λ) ecuación Cauchy n=A+B/λ² vidrio crown típico n_rojo=1.510 n_azul=1.528 diferencia Δn=0.018 desvía azul más que rojo ángulo 2-4° separación angular. Newton "Opticks" 1704 experimento clásico prisma dispersión luz solar habitación oscura rendija genera espectro continuo pared demuestra luz blanca compuesta colores componentes natura lux composite revoluciona óptica refuta teoría Aristotélica color modificación luz, segundo prisma inverso recombina espectro luz blanca confirma reversibilidad proceso. Espectrómetros prisma instrumentos análisis químico-astronómico dispersan luz muestra-estrella prisma rejilla difracción detectan intensidad λ individual identifican elementos químicos líneas espectrales emisión-absorción únicas cada átomo: sodio Na 589.0-589.6nm doblete amarillo, hidrógeno Hα 656.3nm rojo Hβ 486.1nm azul serie Balmer, helio He 587.6nm amarillo descubierto espectro solar 1868 antes Tierra aislado 1895. Aplicaciones modernas espectrometría absorción atómica AA cuantifica metales traza agua-alimentos-sangre ppb-ppm sensibilidad, espectrofotometría UV-Vis bioquímica concentraciones proteínas-DNA ley Beer-Lambert A=εcl absorbancia proporcional concentración, espectroscopia Raman vibracional molecular 532nm-785nm láser identifica compuestos orgánicos-inorgánicos farmacia-forense-arte fingerprint único.
          </p>

          <h3>Instrumentos ópticos telescopios-microscopios refractores</h3>
          <p>
            Telescopios refractores objetivo lente convergente grande diámetro 60-150mm focal 600-1,500mm capta luz estrellas-planetas forma imagen real focal plano, ocular lente magnificadora 5-25mm focal amplia imagen M=f_objetivo/f_ocular aumentos 40×-300× observación Luna cráteres-montañas 1-3 km resolución límite difracción Rayleigh θ=1.22λ/D≈1 arcseg 100mm aperture λ=550nm verde. Historia Galileo 1609 telescopio primitivo objetivo biconvexo 37mm f=980mm + ocular bicóncavo -47mm aumentos 8-20× observa satélites Júpiter Io-Europa-Ganimedes-Calisto fases Venus montañas Luna revoluciona cosmología heliocéntrica Copérnico-Kepler vs geocéntrica Ptolomeo-Aristotélica milenio, refractores dominan astronomía siglos XVII-XIX Yerkes Observatory 1897 refractor 102cm diámetro mayor mundo focal 19.4m peso lente 225 kg límite técnico vidrio flexiona gravedad aberraciones imposible fabricar-sostener mayores. Ventajas vs reflectores: imagen derecha orientación natural terrestre, tubo cerrado protege polvo-humedad bajo mantenimiento sin realuminización espejos 2-5 años, contraste alto obstrucción cero secondary mirror vs reflector 10-20% área bloqueada spider difracción planetas-Luna-dobles nitidez. Desventajas: aberración cromática lentes simples vidrio índice único franjas color púrpura-verde bordes estrellas brillantes mitigación dobletes acromáticos crown+flint apocromáticos ED fluorita triplets eliminan 95-99% color residual 0.5-2 arcseg halo $1,500-$8,000 vs refractores simples $300-$1,000. Microscopios ópticos compuestos objetivo convergente 4×-100× NA 0.10-1.40 magnificación primaria + ocular 10×-20× secundaria aumentos totales 40×-2,000× límite resolución Abbe d=λ/(2NA)≈200nm células-bacterias-organelos núcleos-mitocondrias aplicaciones biología-medicina histología-patología diagnóstico.
          </p>

          <h3>Fenómenos atmosféricos refracción astronómica-meteorológica</h3>
          <p>
            Refracción atmosférica curva rayos luz estrellas-planetas-Sol atraviesan capas aire densidad-índice decreciente altura n_superficie=1.000293 (15°C 1 atm) → n_10km≈1.000100 gradiente dn/dh≈-2×10⁻⁸ m⁻¹ desvía rayos hacia abajo objetos celestes aparecen elevados posición real ángulo refracción R depende altitud aparente: horizonte z=90° R≈34 arcmin (0.57°), z=45° R≈1 arcmin, zenith z=0° R≈0 despreciable. Consecuencias observacionales: Sol-Luna horizonte aparente diámetro angular 32 arcmin vs refracción 34 arcmin cuerpo completo visible cuando geométricamente está 0.57° bajo horizonte prolonga día luz 3-4 minutos amanecer-atardecer latitudes medias, aplanamiento aparente disco solar horizontal-vertical 32:29 ratio refracción diferencial borde inferior mayor superior distorsión oval sunrise-sunset fotografía icónica. Espejismos inferiores carretera-desierto aire caliente superficie n≈1.00026 vs frío altura n≈1.00029 diferencia Δn≈3×10⁻⁵ pequeña suficiente curvar rayos gradiente dn/dh≈-10⁻⁶ m⁻¹ abrupto 50-80°C asfalto verano objetos lejanos cielo reflejan suelo simulan charcos agua ilusión óptica, mirages superiores Fata Morgana inversión temperatura aire frío superficie-caliente altura polar-oceánico objetos horizonte barcos-islas aparecen flotantes-distorsionados-multiplicados castillos aire visibilidad 50-100 km curvatura Tierra normalmente 20-30 km Vikings posiblemente usaban detectar tierra días anticipados. Scintillation centelleo estrellas fluctuaciones rápidas brillo-color turbulencia atmosférica células aire 10-100m tamaño índice refracción variable desvían rayos aleatoriamente 0.5-2 arcseg ángulo imagen estelar puntual danza seeing FWHM 1-3 arcseg limitación telescopios terrestres degradan resolución vs 0.05 arcseg difracción teórica 1m aperture solución óptica adaptativa espejos deformables 1,000 actuadores compensan turbulencia 100×/s tiempo real mejora 10-20× calidad imagen approach Hubble ground-based VLT-Keck sistemas AO.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Antigüedad clásica observaciones cualitativas (300 a.C. - 1000 d.C.)</h3>
          <p>
            Euclides "Catoptrica" (Optics) ~300 a.C. trata reflexión espejos menciona refracción agua sin ley cuantitativa observación cualitativa rayo dobla interfaz aire-agua perpendicular sin cambio dirección oblicuo desvía towards normal intuición geométrica. Ptolomeo Alejandría "Optics" ~150 d.C. primeros experimentos cuantitativos refracción mide ángulos incidencia-refracción aire-agua-vidrio diversos valores tabula resultados intenta relación lineal θ_i vs θ_r aproximación errónea pequeños ángulos {'<'}30° razonable pero falla grandes concepto índice refracción ausente física aristotélica cualitativa. Alhacén Ibn al-Haytham "Kitab al-Manazir" (Book of Optics) 1011-1021 tratado monumental 7 volúmenes síntesis matemática-experimental refracción: experimentos sistemáticos aire-agua-vidrio confirma ángulos incidencia-refracción-reflexión plano coplanar perpendicular interfaz, rechazo extramission teoría griega ojos emiten rayos establece intromission luz viaja objetos→ojos modelo correcto visión, explicación cualitativa velocidad luz diferente medios causa refracción precursor siglos posteriores Descartes-Fermat, traducción latín "De aspectibus" 1200s influencia masiva Bacon-Witelo-Kepler renacimiento óptica europea fundamento ciencia visual moderna.
          </p>

          <h3>Renacimiento ley cuantitativa Snell-Descartes (1600-1700)</h3>
          <p>
            Thomas Harriot matemático inglés 1602 descubre ley refracción sin(θ₁)/sin(θ₂)=constante experimentación sistemática no publica manuscritos privados redescubiertos siglo XX reconocimiento póstumo prioridad histórica controversial. Willebrord Snellius Holanda 1621 redescubre independientemente ley senos refracción sin(θ₁)/sin(θ₂)=n₂/n₁ ratio constante par medios particular, manuscrito "Tractatus de Radiis" nunca publicado vida morte 1626 manuscrito circula estudiantes Leiden University difusión limitada. René Descartes "La Dioptrique" 1637 primer publicación impresa ley refracción presenta como deducción mecánica analogía pelota tenis atraviesa tela cambia velocidad componente tangencial conserva perpendicular varía ratio sines deriva geométricamente sin(θ₁)/sin(θ₂)=v₁/v₂ velocidades, aplicación diseño lentes telescopios geometría analítica coordenadas cartesianas optimización superficies asféricas-hiperbólicas corrigen aberraciones, controversia prioridad atribución Harriot-Snellius histórico nombre "Snell's Law" ley Snell tradición anglosajona Europa continental "ley Descartes" Francia. Pierre de Fermat 1662 principio tiempo mínimo luz viaja camino toma tiempo menor entre dos puntos deduce ley refracción cálculo variaciones matemática elegante sin(θ₁)/sin(θ₂)=v₁/v₂ implica luz medio denso lenta vs Descartes afirma rápida polémica filosófica resolved siglo XIX experimentos Fizeau-Foucault miden velocidad luz agua 225,000 km/s {'<'} aire 300,000 km/s confirman Fermat razón. Christiaan Huygens "Traité de la Lumière" 1690 teoría ondulatoria principio Huygens wavefronts cada punto fuente secundaria wavelets construyen frente onda refractado interfaz deriva ley Snell geométricamente ángulos sin mecánica corpuscular Descartes modelo ondulatorio coherente explica difracción-interferencia fenómenos vs Newton corpuscular "Opticks" 1704 competencia teorías dominancia Newton autoridad hasta Young 1801 experimento doble rendija confirma ondas definitivo.
          </p>

          <h3>Medición velocidad luz medios siglo XIX</h3>
          <p>
            Fizeau 1849 primera medición terrestre velocidad luz rueda dentada 720 dientes gira 12.6 rev/s ventanas 25 μs modula haz viaja 8,633 m espejo retorna bloqueada diente calcula c=313,000 km/s error 5% valor real 299,792 km/s, método adaptado 1850 medir velocidad agua llena tubo luz atraviesa ida-vuelta 7 m calcula v_agua≈225,000 km/s confirma predicción Fermat 1662 luz lenta medio denso vs Descartes rápida controversia historical resolved experimento. Foucault 1862 mejora técnica espejo rotatorio 800 rev/s desvía haz distancia focal 20 m imagen desplazada Δx=0.7 mm mide tiempo vuelta 2L/c geometría ángulos obtiene c_aire=298,000±500 km/s precisión 0.6%, experimento agua 1853 mide v_agua/c=0.7506 ratio confirma índice refracción n=c/v_medio agua n=1.333 concordancia ley Snell sin(θ₁)/sin(θ₂)=n₂/n₁ síntesis teoría-experimento óptica madura física. Michelson 1879-1926 perfecciona método espejos octagonales rotativos 528 rev/s trayectorias 35 km Mount Wilson-Mount San Antonio vacuum tubes finalmente c=299,796±4 km/s error 13 ppm establece estándar pre-láser Nobel 1907 mediciones precisas instrumentación, aplicación interferómetro 1881 experimento éter null result velocidad luz constante todas direcciones precursor relatividad Einstein 1905. Definición moderna metro 1983 CGPM velocidad luz exacta c=299,792,458 m/s constante fundamental define distancias metros longitud viaja luz vacío 1/299,792,458 segundo invierte relación histórica distancia-tiempo secondary standard primary relojes atómicos cesio-133 9,192,631,770 periodos definen segundo precisión 10⁻¹⁶ GPS satellites master timing.
          </p>

          <h3>Óptica moderna fibra óptica-comunicaciones (1960-2024)</h3>
          <p>
            Charles Kao-George Hockham 1966 Standard Telecommunication Laboratories UK publican artículo teórico propone fibra óptica vidrio ultra-puro atenuación {'<'}20 dB/km factible transmisión larga distancia datos luz infrarroja vs copper coaxial limitado 1 km 100 Mbps, comunidad científica escéptica vidrio época atenuación 1,000 dB/km pérdidas dominan impurezas metálicas transición iones OH absorbe 1,383nm agua residual manufactura. Corning Glass Works 1970 Robert Maurer-Donald Keck fabrican primera fibra sílice ultrapura atenuación 17 dB/km λ=633nm HeNe láser breakthrough técnicas deposición química vapor CVD purificación 99.9999% SiO₂ dopado GeO₂ core control índice refracción precisión Δn=0.01 crítico guiado luz reflexión total interna, mejoras subsecuentes alcanzan 0.2 dB/km 1,550nm ventana tercera telecomunicaciones atenuación mínima sílice fundamental. Demostración práctica 1977 General Telephone Electronics Chicago instala primer sistema fibra comercial 1.5 km 6 Mbps voz-datos revoluciona telecom transmisión digital vs analógica copper superior bandwidth-distancia-immunity interferencia electromagnética, adopción rápida 1980s-1990s redes trunk backbone long-distance AT&T TAT-8 1988 primer cable submarino transatlántico fibra 6,000 km 280 Mbps capacidad vs TAT-7 1983 coaxial último. Amplificadores EDFA erbium-doped fiber 1987 David Payne-Emmanuel Desurviere revolucionan transmisión larga distancia amplificación óptica directa sin conversión electrónica regeneradores espaciado 80 km convencional a 400-600 km EDFA ganancia 20-30 dB bombeado 980nm-1480nm láser C-band 1530-1565 nm ventana baja atenuación enlaces transoceánicos 10,000 km sin regeneración. WDM wavelength division multiplexing 1990s-2000s transmite 40-80-160 canales λ simultáneos 0.4-0.8 nm separación misma fibra capacidad agregada 1-10 Tbps backbone internet exponencial tráfico streaming-cloud-5G, cables modernos 2020s MAREA Microsoft-Facebook 2017 transatlántico 6,600 km 160 Tbps 8 pares fibra record capacidad soporta 71M streams HD simultáneos, 2Africa Google-Meta 2024 circunnavega África 45,000 km 180 Tbps conecta 33 países 3B personas internet accesibilidad global digital divide reducción. Kao Nobel Física 2009 contribuciones groundbreaking fibra óptica comunicaciones transformó sociedad información edad digital billones dólares industria global.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Ventana Snell peces ven mundo exterior cono 97°</h3>
          <p>
            Pez sumergido agua n=1.33 mira superficie ve mundo exterior aire n=1.00 comprimido cono circular apertura 97.6° semiángulo 48.8° ventana Snell (Snell's window) calculado ángulo crítico reflexión total interna θ_c=arcsin(n_aire/n_agua)=arcsin(1.00/1.33)=48.75° rayos luz aire inciden agua ángulos {'<'}48.75° refractan entran agua visibles pez, ángulos {'>'}48.75° reflejan totalmente superficie espejo plateado refleja fondo-objetos subacuáticos no penetra exterior. Observación práctica: pez centro estanque 2m profundidad radio ventana R=profundidad×tan(48.75°)=2×1.14=2.28m círculo diámetro 4.56m superficie ve totalidad hemisferio aéreo 180° campo comprimido 97° distorsión radial extrema horizonte comprimido borde ventana vertical aparece 48° elevado realidad horizontal, fuera ventana superficie actúa espejo perfecto refleja plantas-rocas-compañeros fondo visión limitada mundo subacuático solamente. Aplicaciones: buzos snorkelers invierten fenómeno aire-agua interfaz máscaras planas refracción magnifican objetos subacuáticos 33% más grandes-cercanos aparentan compensación cerebral experiencia, fotografía subacuarina cámaras puerto dome hemisférico minimiza refracción mantiene ángulos lentes gran angular 14-24mm cobertura 90-110° terrestres reduces 75-85° underwater distorsión barril corregible software, peces cazadores archerfish Toxotes escupe chorros agua 1-2m altura derriba insectos ramas compensan refracción apuntan ajuste ángulo calculado instintivamente experiencia precisión 80-90% hits training neural visual remarkable adaptation evolutionary.
          </p>

          <h3>Lápiz quebrado experimento clásico aula ESO</h3>
          <p>
            Experimento demostrativo refracción accesible materiales cotidianos: vaso transparente vidrio-plástico 200-500ml agua lápiz-pajita-cuchara objeto recto sumergir parcialmente, observación lateral vaso lápiz aparece quebrado-doblado discontinuidad interfaz aire-agua ángulo aparente 10-20° desviación depende inclinación objeto-visual perspectiva estudiante. Explicación física: luz lápiz sumergido viaja agua n=1.33 emerge aire n=1.00 refracta aleja normal ley Snell sin(θ_agua)/sin(θ_aire)=n_aire/n_agua=1.00/1.33=0.75 ángulo aire mayor agua θ_aire=1.33×θ_agua aproximación paraxial ángulos pequeños, cerebro proyecta rayos líneas rectas percibe lápiz posición desplazada hacia arriba acortamiento aparente porción sumergida 25% profundidad real parece 75% refracción efecto magnificación vertical. Variaciones experimento: moneda fondo vaso invisible ángulo rasante añadir agua aparece mágicamente refracción curva rayos hasta ojo observador, flecha dibujada papel detrás vaso vacío orientación normal → llena agua invierte ← lente cilíndrica agua-vidrio actúa magnificador inversor imagen double refraction interfaces aire-vidrio-agua-vidrio-aire compuesto. Pedagogía: experimento hands-on kinesthetic learning estudiantes ESO edad 12-16 años conceptos abstractos refracción-índice-velocidad luz concretos visibles memorable versus ecuaciones pizarra abstract memorization rote, discusión clase predicción-observación-explicación método científico hipótesis-experimento-conclusión critical thinking desarrolla inquiry-based STEM education effectiveness estudios mejoran retention comprensión 40-60% vs lecture tradicional.
          </p>

          <h3>Diamante brillo excepcional alto índice-dispersión</h3>
          <p>
            Diamante carbono cristalino cúbico FCC índice refracción n=2.417 λ=589nm sodio D-line altísimo materiales transparentes comunes vidrio n=1.5-1.9 agua n=1.33 zirconia cúbica CZ simulante n=2.15 inferior, consecuencia ángulo crítico reflexión total interna θ_c=arcsin(1.00/2.417)=24.4° pequeñísimo vs vidrio 33.7° agua 48.8° luz entra diamante fácilmente escapa difícil rayos interiores rebotan múltiples reflexiones internas emergen facetas talladas optimal cut angles pavilion-crown 40.75°-34.5° Tolkowsky ideal 1919 maximiza brillantez fuego scintillation. Dispersión cromática extraordinaria número Abbe V=55 bajo vidrio V=60-90 curva dispersión dn/dλ abrupta separa colores espectro 0.044 diferencia índice rojo-violeta vs 0.018 vidrio crown, resultado fire arcoíris colores destellos movimiento gema characteristic prismatic flashes observador mueve luz blanca separa componentes espectrales emergen facetas diferentes ángulos espectáculo visual. Talla brillante moderna 57-58 facetas tabla corona girdle pabellón culet geometría precisa tolerancias ±0.5° ángulos críticos optimización luz entra tabla rebounds pavillion facetas emerge tabla-corona hacia observador maximize return light brilliance intensidad luminosa, calidad corte proporciones excellent-ideal commanding premium 10-30% precio vs good-fair poorly cut diamond mismo peso quilates claridad color inferior optical performance leakage luz escapa fondo-lados dark appearance lifeless. Simulantes imitaciones: CZ zirconia cúbica n=2.15-2.18 V=40 más fire dispersión excesiva rainbow effect artificial detectable, moissanite SiC n=2.65 V=104 double refraction birefringente Δn=0.043 facetas traseras duplicadas visible lupa diagnóstico gemmology, vidrio lead glass n=1.6-1.9 inferior brillo detección fácil, lab-grown diamonds CVD-HPHT sintéticos propiedades ópticas idénticas naturales distinción requiere espectroscopía-fotoluminiscencia UV detecta nitrógeno-impurezas growth patterns certificación gemológica GIA-IGI necessary authentication.
          </p>

          <h3>Arcoíris doble reflexión-refracción gotas lluvia</h3>
          <p>
            Arcoíris primario formación: luz solar blanca entra gota lluvia esférica 0.5-5 mm diámetro refracta interfaz aire-agua n_aire=1.00 n_agua=1.33 dispersión cromática separa colores rojo λ=700nm n=1.331 desvía menos azul λ=400nm n=1.343 más ángulos refracción diferentes 0.012 diferencia índice crítico, luz atraviesa gota refleja internamente pared posterior single bounce reflexión interna ángulo incidencia 40-42° cercano crítico 48.8° alta reflectancia Fresnel 90-95%, emerge gota segunda refracción salida aire dispersión adicional amplifica separación colores total desvío ángulo 40-42° centro antisolar punto opuesto Sol espalda observador. Geometría observación: arcoíris arco circular radio angular 42° centro antisolar observador ve sección arco horizonte terrestre bloquea mitad inferior avión-montaña elevación ve círculo completo 360°, colores ordenados exterior-interior rojo-naranja-amarillo-verde-azul-violeta inverso expectativa intuitiva refracción mayor azul ángulo menor emerge interior arco. Arcoíris secundario doble reflexión interna gota luz rebota dos veces pared posterior antes emerger desvío total 51° radio angular mayor primario fuera este, colores invertidos exterior-interior violeta-azul-verde-amarillo-naranja-rojo orden reverso reflexión par invierte secuencia, intensidad 40-50% primario pérdida energía segunda reflexión Fresnel cada bounce absorción agua. Banda Alexander zona oscura entre arcoíris primario-secundario 42-51° región luz no emerge geometría reflexiones múltiples darkness contrasta brillantez arcos enhanced visible cielo tormentoso fondo oscuro nubes grises dramático appearance memorable. Arcoíris supernumerarios franjas interferencia finas colores adicionales dentro borde violeta primario gotas agua uniformes 0.5-1 mm tamaño difracción ondas coherencia parcial luz solar spatial filtering atmospheric turbulence visible condiciones ideales lluvia fine mist after storm.
          </p>

          <h3>Espejismos inferiores-superiores gradientes índice atmósfera</h3>
          <p>
            Espejismos inferiores desierto-asfalto verano aire caliente superficie suelo 50-80°C densidad baja n≈1.00026 vs aire frío altura 20-30°C mayor densidad n≈1.00029 diferencia Δn≈3×10⁻⁵ parece minúscula suficiente desviar luz gradiente dn/dh≈-10⁻⁶ m⁻¹ steep 0-50cm altura crítico, rayos luz objeto lejano árbol-coche-cielo viajan hacia abajo refractan continuamente capas aire índice decreciente curvan upward refracción gradual ángulo rasante superficie grazing incidence alcanza crítico refleja totalmente invierte dirección simula reflexión espejo agua charco ilusión óptica convincente. Física detallada: ecuación ray tracing medio estratificado n(h)=n_0(1-αh) índice lineal altura α=10⁻⁶ m⁻¹ coeficiente gradiente térmico, trayectoria rayo parábola x(h)=x_0+v_x0∫(dh/√(n²-n_0²sin²θ_0)) integral elíptica solución numérica computacional, altura turning point h_min donde rayo horizontal reflejado h_min=(n_0sin(θ_0)-n_surface)/α ejemplo θ_0=89° casi horizontal n_0=1.00029 n_surf=1.00026 h_min≈30cm concuerda observación espejismos visible rasante suelo desaparece elevación viewing angle. Espejismos superiores Fata Morgana inversión temperatura océanos-regiones polares aire frío superficie-caliente altura estabiliza atmósfera gradiente positivo dn/dh{'>'}0 inverso normal, objetos horizonte barcos-icebergs-islas luz curva downward refracción continua aparecen elevados-flotantes-distorsionados múltiples imágenes stacked vertically castles air legendario navigation polar Vikings posiblemente detectaban tierra días anticipados 50-100 km visibilidad vs 20-30 km curvatura Tierra normalmente ventaja exploración comercio rutas Atlántico Norte Groenlandia-Islandia-América. Novaya Zemlya effect raro fenómeno polar Sol ya set geométricamente below horizon visible 2-5° elevated refracción extrema ducting atmospheric inversión fuerte luz solar trapped layer air índice alto propagates hundreds km horizontally emerges distant location Sol aparece premature sunrise delayed sunset observación histórica expedición Barents 1597 overwintering Arctic documentado sketches diario sorpresa crew scientific explanation later atmospheric optics.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>La refracción es el cambio de dirección de la luz al pasar entre medios con diferente índice de refracción n, causado por cambio velocidad luz v=c/n en materiales</li>
          <li>Ley refracción Snell sin(θ₁)/sin(θ₂)=n₂/n₁ relaciona ángulos incidencia-refracción con índices medios, luz entra medio denso n mayor se acerca normal ángulo menor, sale medio rápido n menor se aleja normal</li>
          <li>Índices refracción comunes: aire n=1.00 referencia, agua n=1.33 velocidad 75% c, vidrio n=1.5-1.9 velocidad 50-67% c, diamante n=2.42 velocidad 41% c brillo excepcional ángulo crítico 24° pequeño reflexiones internas múltiples</li>
          <li>Fenómenos cotidianos explicados: lápiz quebrado agua magnificación vertical 33%, piscina parece menos profunda 25%, moneda aparece añadir agua, espejismos carretera gradiente térmico dn/dh≈-10⁻⁶ m⁻¹, arcoíris dispersión gotas lluvia 40-42° radio primario 51° secundario colores invertidos</li>
          <li>Aplicaciones: lentes gafas-contacto corrección miopía-hipermetropía-astigmatismo materiales alto índice n=1.67-1.74 reducen grosor, fibra óptica telecomunicaciones n_core=1.467 {'>'} n_cladding=1.457 reflexión total θ_c=81° guiado luz 0.2 dB/km atenuación enlaces transoceánicos MAREA 160 Tbps, telescopios-microscopios refractores magnificación M=f_objetivo/f_ocular aumentos 40×-2,000×, prismas espectrómetros dispersión análisis químico líneas espectrales elementos</li>
          <li>Historia desde Ptolomeo 150 d.C. tablas experimentales, Alhazen 1021 Book of Optics velocidad luz causa refracción, Snell 1621 ley senos sin(θ₁)/sin(θ₂)=constante, Descartes 1637 primera publicación, Fermat 1662 principio tiempo mínimo, Fizeau 1850 mide v_agua=225,000 km/s confirma n=1.33, Kao 1966 propone fibra óptica Nobel 2009 revolución comunicaciones digitales</li>
        </ul>
      </div>
    </>
  );
};

export default QueEsRefraccionTheory;
