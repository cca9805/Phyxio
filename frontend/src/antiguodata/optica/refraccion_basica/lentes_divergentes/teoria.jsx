import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

export const metadata = {
  titulo: "Lentes Divergentes",
  descripcion: "Lentes que hacen que los rayos de luz se separen (divergentes).",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const LentesDivergentesTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="Lentes Divergentes" emoji="🔎">
        <p>
          Las lentes divergentes son más delgadas en el centro y más gruesas en los bordes. 
          Hacen que los rayos de luz paralelos se separen como si procedieran de un punto virtual.
        </p>

        <Important>
          Este tema proporciona una base conceptual visual para ESO sobre lentes divergentes y corrección de miopía.
          Las lentes divergentes forman imágenes virtuales, menores y derechas; se usan en gafas para miopía.
        </Important>
      </TheorySection>

      <TheorySection title="Cómo funcionan" emoji="⚡">
        <Concept title="Refracción en lentes divergentes">
          <p>
            Cuando la luz atraviesa una lente divergente, cada rayo se refracta de modo que
            parece provenir de un punto situado delante de la lente (foco virtual).
          </p>

          <ul>
            <li>🎯 Foco virtual (F): Punto desde el que parecen divergir los rayos</li>
            <li>📏 Distancia focal (f): Negativa para lentes divergentes</li>
            <li>🔁 Imagen: Virtual, derecha y de menor tamaño</li>
          </ul>

          <Example>
            Ejemplo: Las gafas para miopía usan lentes divergentes para trasladar la imagen hacia atrás y que se enfoque en la retina.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Experimentos simples" emoji="🧪">
        <Concept title="Ver la acción de una lente divergente">
          <h4>Materiales:</h4>
          <ul>
            <li>Lente divergente</li>
            <li>Linterna o haz de luz</li>
            <li>Pantalla translúcida</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>Apunta la linterna hacia la lente desde una distancia moderada.</li>
            <li>Coloca la pantalla detrás de la lente; no verás una imagen nítida (imagen virtual).</li>
            <li>Observa cómo los rayos parecen divergir desde un punto frente a la lente.</li>
          </ol>
        </Concept>
      </TheorySection>

      <TheorySection title="Fórmulas Clave" emoji="📐">
        <Concept title="1. Ecuación de las lentes delgadas (puntos conjugados)">
          <p>
            Las lentes divergentes también siguen la ecuación fundamental de las lentes, pero con una diferencia crucial: 
            la distancia focal f es siempre negativa:
          </p>

          <Formula
            title="Relación de lentes (puntos conjugados)"
            expression={`\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}`}
            where={[
              { symbol: 'f', description: 'Distancia focal de la lente (m o cm), NEGATIVA en divergentes' },
              { symbol: 'd_o', description: 'Distancia del objeto a la lente (m o cm), positiva' },
              { symbol: 'd_i', description: 'Distancia de la imagen a la lente (m o cm), NEGATIVA (virtual)' },
            ]}
          />

          <p>
            Para lentes divergentes, el foco es virtual (está del mismo lado que el objeto), por eso f es negativa. 
            La imagen que forma también es virtual, así que d_i resulta negativa al resolver la ecuación.
          </p>

          <Important>
            Convención de signos para lentes divergentes: f {'<'} 0 (focal negativa), d_o {'>'} 0 (objeto real siempre positivo), 
            d_i {'<'} 0 (imagen virtual del mismo lado del objeto). El signo negativo de d_i indica que para ver la imagen 
            debes mirar a través de la lente hacia el objeto, como cuando usas gafas de miopía.
          </Important>

          <Example>
            Ejemplo práctico: Una lente divergente con focal f = -20 cm. Si colocas un objeto a 30 cm de la lente (d_o = 30 cm), 
            calculas: 1/d_i = 1/(-20) - 1/30 = -0.05 - 0.0333 = -0.0833, entonces d_i = -12 cm. El signo negativo 
            confirma que la imagen es virtual y está a 12 cm del mismo lado que el objeto. Esta imagen se ve reducida 
            y derecha a través de la lente.
          </Example>
        </Concept>

        <Concept title="2. Aumento lateral (magnificación)">
          <p>
            El aumento en lentes divergentes siempre produce imágenes más pequeñas que el objeto:
          </p>

          <Formula
            title="Aumento (magnificación)"
            expression={`m = - \\frac{d_i}{d_o}`}
            where={[
              { symbol: 'm', description: 'Aumento lateral (adimensional)' },
              { symbol: 'd_i', description: 'Distancia imagen (m o cm), negativa para virtual' },
              { symbol: 'd_o', description: 'Distancia objeto (m o cm), positiva' },
            ]}
          />

          <p>
            Características del aumento en lentes divergentes:
          </p>
          <ul>
            <li>✅ m es siempre POSITIVO: Como d_i es negativa y d_o positiva, al calcular m = -d_i/d_o el resultado es positivo, 
            lo que indica que la imagen está derecha (no invertida)</li>
            <li>📉 |m| {'<'} 1 siempre: El valor absoluto del aumento es menor que 1, lo que significa que la imagen 
            es más pequeña que el objeto (reducida)</li>
            <li>👁️ Visión normal: Por ejemplo, m = +0.4 significa que la imagen es derecha y tiene el 40% del tamaño del objeto</li>
          </ul>

          <Example>
            Ejemplo: Continuando con el caso anterior (d_o = 30 cm, d_i = -12 cm), el aumento es m = -(-12)/30 = +0.4. 
            El signo positivo confirma que la imagen está derecha, y el valor 0.4 indica que la imagen tiene el 40% 
            del tamaño del objeto (reducida). Esto es exactamente lo que ves cuando miras objetos a través de gafas 
            de miopía: se ven un poco más pequeños pero más nítidos.
          </Example>
        </Concept>

        <Concept title="3. Potencia óptica negativa">
          <p>
            Las lentes divergentes tienen potencia óptica negativa, lo que las distingue claramente de las convergentes:
          </p>

          <Formula
            title="Potencia de una lente"
            expression={`P = \\frac{1}{f}`}
            where={[
              { symbol: 'P', description: 'Potencia en dioptrías (D), NEGATIVA en divergentes' },
              { symbol: 'f', description: 'Distancia focal en metros (m), negativa' },
            ]}
          />

          <p>
            La potencia negativa indica que la lente diverge (separa) los rayos de luz en lugar de convergerlos. 
            En las recetas de gafas, los valores negativos identifican lentes para miopía:
          </p>
          <ul>
            <li>👓 Miopía leve: P = -0.5 D a -3 D → f = -2 m a -0.33 m (ve borroso a distancia media)</li>
            <li>👓 Miopía moderada: P = -3 D a -6 D → f = -0.33 m a -0.17 m (ve borroso más allá de 30 cm)</li>
            <li>👓 Miopía alta: P = -6 D a -10 D → f = -0.17 m a -0.10 m (ve borroso más allá de 15 cm)</li>
            <li>👓 Miopía muy alta: P {'<'} -10 D → f {'<'} -0.10 m (miopía magna, requiere lentes especiales)</li>
          </ul>

          <Important>
            ⚠️ Interpretación clínica: Una persona con receta -3.0 D necesita una lente con focal f = 1/(-3) = -0.33 m = -33 cm. 
            Esto significa que su ojo enfoca naturalmente a 33 cm delante de la retina sin corrección. La lente divergente 
            de -3 D "empuja" la imagen hacia atrás para que se forme exactamente sobre la retina, permitiendo visión nítida de lejos.
          </Important>

          <Example>
            Ejemplo receta óptica: Una receta que dice "OD: -2.50 D, OI: -2.75 D" indica miopía bilateral. 
            El ojo derecho (OD) necesita una lente con f = 1/(-2.5) = -0.40 m = -40 cm, y el izquierdo (OI) necesita 
            f = 1/(-2.75) = -0.36 m = -36 cm. La diferencia entre ambos ojos (0.25 D) es común y se llama anisometropía leve.
          </Example>
        </Concept>

        <Concept title="Diferencias clave con lentes convergentes">
          <p>
            Comparación directa entre lentes convergentes (+) y divergentes (-):
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Característica</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Convergente (+)</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Divergente (-)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem' }}>Forma física</td>
                <td style={{ padding: '0.5rem' }}>Gruesa centro, delgada bordes</td>
                <td style={{ padding: '0.5rem' }}>Delgada centro, gruesa bordes</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Focal (f)</td>
                <td style={{ padding: '0.5rem' }}>Positiva (f {'>'} 0)</td>
                <td style={{ padding: '0.5rem' }}>Negativa (f {'<'} 0)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Potencia (P)</td>
                <td style={{ padding: '0.5rem' }}>Positiva (P {'>'} 0)</td>
                <td style={{ padding: '0.5rem' }}>Negativa (P {'<'} 0)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Tipo de foco</td>
                <td style={{ padding: '0.5rem' }}>Real (luz converge)</td>
                <td style={{ padding: '0.5rem' }}>Virtual (luz diverge)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Imagen objeto lejano</td>
                <td style={{ padding: '0.5rem' }}>Real, invertida, reducida</td>
                <td style={{ padding: '0.5rem' }}>Virtual, derecha, reducida</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Aumento (m)</td>
                <td style={{ padding: '0.5rem' }}>Puede ser {'>'} 1 (lupa)</td>
                <td style={{ padding: '0.5rem' }}>Siempre {'<'} 1 (reducida)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Uso principal</td>
                <td style={{ padding: '0.5rem' }}>Hipermetropía, lupas</td>
                <td style={{ padding: '0.5rem' }}>Miopía, expansores haz</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Important>
          💡 Nota sobre las calculadoras: Al igual que con lentes convergentes, estas tres fórmulas están integradas 
          en una sola calculadora unificada (ver sección siguiente) porque trabajan juntas como sistema. Cuando introduces 
          la focal negativa (f {'<'} 0) y la distancia del objeto (d_o), la calculadora automáticamente: 1) calcula 
          la posición de la imagen virtual (d_i {'<'} 0), 2) determina el aumento reducido (0 {'<'} m {'<'} 1), 
          3) clasifica la imagen como virtual, derecha y reducida. Esta integración refleja la práctica real en óptica 
          oftálmica donde las tres características se consideran simultáneamente para diseñar la corrección visual adecuada.
        </Important>
      </TheorySection>

      <TheorySection title="Calculadora y ejercicios" emoji="🧮">
        <Formula
          calculatorId="lentes-divergentes"
          definitions={definitions}
          exercises={exercises}
          expression={`\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}`}
          donde={{
            f: 'distancia focal (cm, negativa)',
            d_o: 'distancia del objeto a la lente (cm)',
            d_i: 'distancia de la imagen a la lente (cm, negativa si virtual)'
          }}
        />
      </TheorySection>

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Corrección miopía gafas y lentes contacto</h3>
          <p>
            Miopía defecto refractivo ojo largo o córnea excesivamente curvada enfoca imagen delante retina visión borrosa distancia (prevalencia mundial 30-40% adultos, 80-90% jóvenes urbanos Asia estudios 2020), gafas lentes divergentes negativas -0.5D a -15D retrasan imagen focal retina visión nítida. Lentes monofocales esféricas CR-39 índice n=1.498 grosor centro-borde ratio 1:2-1:4 miopía alta -6D grosor borde 8-12mm antiestético peso 30-50g montura, alto índice n=1.67-1.74 reducen grosor-peso 40-60% lentes delgadas estética mejorada -10D grosor 4-6mm borde $200-$500 vs estándar $50-$150. Lentes asféricas superficie elipsoidal-parabólica vs esférica tradicional eliminan distorsión periférica aberración campo 20-30% menos engrosamiento bordes perfil plano cosméticamente superior miopía -4D a -12D rango. Tratamientos antirreflejantes multicapa 7-15 capas λ/4 MgF₂-ZrO₂ reducen reflejos fantasma 8-12% a 0.5-1% transmisión 98-99.5% luz eliminan halos nocturnos conducción $50-$150 upgrade, hidrofóbico-oleofóbico nanocoating repele agua-grasa limpieza fácil ángulo contacto 110-120° $30-$80.
          </p>

          <h3>Lentes contacto blandas y RGP miopía</h3>
          <p>
            Lentes contacto blandas hidrogel convencional 38-55% agua Dk transmisibilidad oxígeno 20-30 barrer/mm espesor central 0.07-0.15mm potencias -0.50D a -12.00D pasos 0.25D hasta -6D luego 0.50D, diámetro total 13.8-14.5mm radio base curvatura 8.3-9.0mm fitting corneal individual, reemplazo diario-mensual higiene prevención infecciones queratitis incidencia 2-4 por 10,000 usuarios año. Silicona-hidrogel segunda generación 2000s Dk/t 100-175 vs 20-30 convencional permite uso extendido-continuo 30 días nights sleeping aprobado FDA reduce hipoxia corneal neovascularización riesgo 80-90%, marcas Acuvue Oasys-Air Optix-Biofinity -12D máximo $30-$60 caja 6 lentes mensual. RGP rígidas gas-permeables PMMA-silicona Dk 50-150 diámetro 9-10mm radio 7.5-8.5mm potencias -20D a +20D rango extremo custom miopía magna-irregular, ventajas ópticas nitidez superior astigmatismo corneales permeabilidad oxígeno 100% adaptación 1-2 semanas inicial incomodidad vs blandas confort inmediato, durabilidad 1-3 años costo $150-$400 pareja amortiza largo plazo. Ortoqueratología lentes RGP nocturnas remodelan córnea temporalmente 6-8h sueño frenan progresión miopía niños-adolescentes 30-60% efectividad estudios ATOM-LAMP 2010s-2020s, reversible discontinuación retorna curvatura original 1-2 semanas seguimiento trimestral topografía $800-$2,000 fitting anual renovación lentes.
          </p>

          <h3>Expansores haz láser beam expanders</h3>
          <p>
            Beam expanders galileanos telescopio Keplerian inverso lente divergente entrada + convergente salida aumentan diámetro haz láser 2×-10× reduce divergencia angular proporción inversa aplicaciones industrial-científico, diseño afocal no focal punto salida haz paralelo colimado ideal corte-grabado-litografía precisión. Configuración típica HeNe 632.8nm o Nd:YAG 1064nm entrada 1-3mm diámetro divergencia 1-2 mrad expandido 5-20mm divergencia 0.2-0.5 mrad spot size reducido 80-90% distancia trabajo 1-10m aplicaciones metrología interferometría láser, manufactura Edmund Optics-Thorlabs expansores fijos magnification 2×-20× $200-$2,000 ajustables zoom continuo 2×-10× $1,000-$5,000. Fibra óptica acoplamiento colimadores lentes divergentes-convergentes matched NA numerical aperture 0.1-0.3 singlemode 9μm core o 0.22-0.5 multimode 50-62.5μm optimizan transmisión luz fuente LED-laser efficiency 60-90% vs 20-40% acople directo, conectores FC/PC-SC/APC pulido 8° ángulo reducen back-reflection -40dB a -60dB crítico láseres coherencia. Sistemas LIDAR expansores beam aumentan diámetro salida 50-200mm reducen divergencia 0.1-0.5 mrad rango detección 100-500m automotriz autonomous vehicles resolución angular 0.1-0.25° escaneo 360° horizontal ±15° vertical Velodyne-Luminar sensores $500-$8,000.
          </p>

          <h3>Óptica cine broadcast control campo-distorsión</h3>
          <p>
            Objetivos cinematográficos gran angular 14-35mm full-frame incorporan elementos divergentes frontales corrigen distorsión barril curvatura campo aberraciones esféricas-cromáticas inherentes focal corta ángulo visión amplio 90-110° horizontales, construcción compleja 12-18 elementos 4-6 grupos asféricos ED fluorita apocromáticos sharpness uniforme centro-esquinas resolución 4K-8K 33-66 MP sensores digitales, rectilinear diseño líneas rectas permanecen rectas vs fisheye 180° circular deliberadamente distorsionado. Zeiss CP.3 15mm T2.1 cine prime 14 elementos lente divergente frontal 95mm diámetro filtros breathing mínimo enfoque close 0.28m campo 110° diagonal cobertura Super 35 FF focus throw 300° suave follow-focus ergonómico grips $4,500, conjunto 15-135mm 6 focales fijas set $25k-$40k productions. Zoom cine 24-290mm Angenieux Optimo 15:1 ratio construcción 23 elementos divergentes-convergentes grupos internos compensan focal-foco aberraciones constantes apertura T2.8 todo rango parfocal mantiene foco zoom-through operación broadcast live sports-events-news, peso 3.5kg longitud 30cm precio $45k-$65k rental $500-$1,500 día producciones grandes presupuesto. Anamórficos squeeze horizontal 1.33×-2× cilindros divergentes-convergentes comprimen imagen sensor descomprimen post-producción aspect ratio 2.39:1 cinemascope estética bokeh ovalado flares horizontales característicos $8k-$80k vintage Panavision-Cooke modernos.
          </p>

          <h3>Mirillas puerta peepholes gran angular</h3>
          <p>
            Mirillas seguridad puertas-hoteles lente divergente frontal + convergente trasera diseño fisheye invertido campo visión 160-220° permite ver visitante completo cabeza-pies altura 1.2-1.8m distancia 0.3-2m rellano escalera, diámetro instalación 12-16mm perforación puerta grosor 35-55mm ajustable construcción vidrio óptico 3-5 elementos longitud total 40-60mm económico $5-$30 brass-chrome acabados. Digital peepholes electrónicos pantalla LCD 2.8-7" interior cámara CMOS 1-5 MP exterior FOV 120-160° grabación vídeo detección movimiento PIR batería recargable Li-ion 3,000-10,000 mAh autonomía 2-6 meses visión nocturna IR 850-940nm LEDs invisibles rango 3-5m seguridad avanzada $80-$300 Ring-Brinno modelos WiFi conectividad smartphone notificaciones tiempo real $150-$400. Aplicaciones militares-aerospace visores tanques-aeronaves periscopios submarinos gran angular campo amplio situational awareness lentes divergentes óptica compleja 8-15 elementos recubrimientos antirreflejantes multicapa transmisión 90-98% visión nocturna image intensifier tubes Gen 2-3 ganancia luminosidad 10,000-50,000× detección 100-300m oscuridad total 0.001-0.0001 lux luz estelar $3k-$15k civiles táctica policial-búsqueda rescate, thermal imaging FLIR 320×240 a 640×512 microbolómetro uncooled sensibilidad 50 mK detecta diferencias temperatura cuerpo humano 37°C ambiente 10-25°C rango 500-2,000m día-noche all-weather niebla-humo penetración $5k-$30k profesionales.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Primeras gafas miopía Renacimiento (1450-1600)</h3>
          <p>
            Gafas primeras Italia 1286 convexas presbicia hipermetropía lectores ancianos, miopía jóvenes no reconocida problema hasta imprenta difusión lectura Gutenberg 1450 demanda leer distancia aumenta awareness defectos visuales. Nicolás de Cusa cardenal alemán "De Beryllo" 1458 primer registro uso lentes cóncavas divergentes corregir visión lejana borrosa aunque descripción ambigua interpretación historiadores debate, producción limitada artesanal vidrio pulido manual convexo-cóncavo difícil fabricar simétricamente. Francisco Maurolico matemático siciliano 1554 tratado óptica describe corrección miopía lentes cóncavas negativas principio divergencia luz retrasa imagen focal, asocia condición cristalino excesivamente convexo ojo elongado anatomía ocular emergente Vesalius 1543 "De Humani Corporis Fabrica" ilustraciones precisas globo ocular. Johannes Kepler "Dioptrice" 1611 análisis sistemático refracción lentes teoría formación imágenes explica miopía punto remoto cercano focal anterior retina corrección lentes divergentes negativas empujan imagen posterior, diseños cálculo radios curvatura superficies optimización potencias prescripciones inicios óptica científica vs empírica artesanal. Producción masiva gafas miopía 1600s-1700s centros Venecia-Nuremberg exportación Europa precios bajan accesibilidad $50-$200 equivalente actual montura metal-cuero lentes vidrio crown índice único n=1.52 sin corrección aberraciones cromáticas franjas color bordes visión periférica limitada.
          </p>

          <h3>Óptica oftálmica científica siglo XIX</h3>
          <p>
            Thomas Young 1801 experimento doble rendija interferencia luz ondulatory theory + oftalmoscopia pionera midió refracción ocular propio ojo astigmatismo cilindros lentes tóricas corrección meridians diferentes potencias, publicación "On the Mechanism of the Eye" Royal Society establece bases óptica fisiológica cuantitativa. Hermann von Helmholtz inventa oftalmoscopio 1851 primer instrumento visualiza retina fondo ojo in vivo revoluciona diagnóstico enfermedades oculares permite correlacionar anatomía-refracción mediciones precisas miopía-hipermetropía clasificación grados severidad -1D a -10D+ escalas, tratado "Handbuch der Physiologischen Optik" 1867 tres volúmenes estándar oro óptica visual siglo anatomía-fisiología-psicofísica percepción. Donders Franciscus 1864 Holanda sistematiza refracción clínica introduce notación dioptrías unidad estándar potencia óptica reemplaza pulgadas-focal medidas inconsistentes, clasificación ametropías miopía-hipermetropía-astigmatismo protocolos examen refractivo lensómetro retinoscopía técnicas medición objetiva-subjetiva prescripción gafas precisión ±0.25D modernidad. Snellen chart 1862 optotipos estandarizados agudeza visual 20/20 equivale 1.0 decimal 6/6 métrico letras tamaño progresivo distancia test 6m/20ft normaliza evaluación visión pre-post corrección gafas contacto cirugía refractiva universal adoption worldwide. Industria óptica Carl Zeiss-Ernst Abbe 1866-1880s Jena Alemania manufactura lentes oftálmicas precisión científica vidrios Schott catálogo índices-dispersiones crown-flint combinaciones acromáticas dobletes eliminan aberración cromática ±0.5D a ±0.05D tolerancias mejoran nitidez periférica gafas confort visual, exportación global dominancia alemana óptica 1880-1920.
          </p>

          <h3>Lentes contacto modernas siglo XX</h3>
          <p>
            Adolf Fick oftalmólogo alemán 1888 fabrica primeras lentes contacto vidrio soplado escleral grande 18-21mm diámetro cubren toda córnea-esclera potencias -2D a -14D miopía visión corregida pero intolerancia 1-2h máximo peso-hipoxia córnea falta oxígeno transparencia central edema, experimentación conejos-cadáveres humanos autocobayo propio ojo tolera 30min publicación "A Contact Lens" Archiv für Augenheilkunde establece feasibility concepto revolucionario. PMMA polimetilmetacrilato plástico duro 1936-1948 desarrollo contactos rígidos corneales 9-10mm diámetro cubren córnea solamente vs escleral mejora tolerancia 4-8h wear tiempo anoxia corneal límite permeabilidad cero O₂ edema acumulativo microquistes endoteliales, manufactura lathing CNC precisión ±0.02mm radios 7.5-8.5mm potencias -20D a +20D rango extremo custom fitting topografía corneal mapas curvatura. Hydrogel polímero hidrofílico Otto Wichterle 1959 Checoslovaquia inventa HEMA 2-hydroxyethyl methacrylate 38% agua contenido lente blanda flexible confort inmediato tolerancia 8-12h día Dk oxígeno 9 barrer/mm todavía bajo pero revoluciona industria FDA aprueba 1971 Bausch+Lomb SoftLens producción masiva $300-$600 pareja 1970s vs $50-$150 modernos economía escala. Silicona-hidrogel Night&Day Ciba Vision 1999 FDA extended wear 30 noches continuas Dk/t 175 vs 20-30 hydrogel convencional elimina hipoxia permite sleeping córnea respira 100% O₂ metabolismo aeróbico normal salud epitelial-endotelial largo plazo, materiales segunda-tercera generación 2005-2015 Acuvue Oasys-Air Optix balance hidratación-transmisibilidad módulo elasticidad 0.5-1.0 MPa confort humectación superficie plasma treatment wettability ángulo 40-60° vs 90-110° HEMA inicial.
          </p>

          <h3>Cirugía refractiva láser corrección permanente (1980-2024)</h3>
          <p>
            Keratotomía radial RK Fyodorov 1970s URSS incisiones radiales 4-8 córnea aplanar curvatura central reduce miopía -1D a -5D rango limitado cicatrización impredecible ±1D variabilidad regression 20-30% casos largo plazo fluctuación diurna visión, introducción USA 1980 PERK study 1985-1995 seguimiento 10 años efectividad 70-80% satisfacción complications glare halos nocturnos 15-25%, obsoleto láser precisión superior. PRK photorefractive keratectomy excimer laser ArF 193nm UV ablación corneal superficie 1988 Berlin-USA primeros tratamientos miopía -1D a -8D rango removes 12-15μm/D estroma anterior zona óptica 6-7mm, dolor postoperatorio 2-5 días reepitelización recuperación visual 1-2 semanas haze corneal cicatrización 5-10% casos mitomicina-C 0.02% 20-40s prevención, efectividad 90-95% ±0.5D target seguimiento 10-20 años estabilidad refractiva. LASIK laser-assisted in situ keratomileusis Pallikaris 1990 Grecia flap corneal microkeratome 90-130μm grosor ablación láser estroma profundo reposición flap adhesión natural sin suturas, recuperación visual 24h dolor mínimo analgésicos orales comfort inmediato vs PRK 1 semana, complicaciones flap-related 1-5% incidencia striae-displacement dry eye 15-30% temporal 6-12 meses resolución mayoría casos, dominancia procedimiento 1995-2020 40M cirugías worldwide $2,000-$4,000 ojo promedio USA-Europa. SMILE small-incision lenticule extraction femtosecond laser 1040nm 2011 Carl Zeiss Alemania incisión 2-4mm extrae lenticule tissue 100-150μm grosor corrige miopía -1D a -10D astigmatismo -5D max, ventaja biomecánica preserva integridad corneal anterior nervios sensitivity reducción dry eye 50-70% vs LASIK, adopción creciente 2015-2024 Asia-Europa 5M procedimientos competitive LASIK outcomes similares 20/20 vision 95-98% casos satisfacción.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Recetas ópticas negativas interpretación signos</h3>
          <p>
            Receta típica formato "OD: -3.25 -0.50 × 180, OI: -3.50 -0.75 × 170" indica ojo derecho (OD oculus dexter) esfera -3.25D miopía + cilindro -0.50D astigmatismo eje 180° horizontal, ojo izquierdo (OI oculus sinister) esfera -3.50D + cilindro -0.75D eje 170°, diferencia 0.25D interocular anisometropía leve común 15-25% población. Signo negativo crítico identifica lentes divergentes vs positivo convergentes hipermetropía, confusión farmacia-óptica puede resultar gafas incorrectas visión borrosa mareos adaptación imposible verification lensómetro confirma potencia ±0.12D tolerancia fabricación ISO. Adición "Add +2.00" recetas bifocales-progresivas indica potencia adicional near vision presbicia edad 40-65 años, ejemplo OD -3.25 Add +2.00 significa lejos -3.25D cerca -1.25D combinación algebraica (zona inferior lente progresiva gradiente vertical 14-18mm corredor), confusion potencias total vs componente requiere clarificación óptico-optometrista. Cilindro astigmatismo notación minus-cylinder vs plus-cylinder equivalentes matemáticamente: -0.50 × 180 = +0.50 × 90 conversión eje perpendicular 90° diferencia, USA-Europa predomina minus-cylinder prescription, Asia plus-cylinder tradicional confusión internacional standardization necesaria. Distancia pupilar PD 54-74mm típico adultos centra lentes ópticas alineación visual evita prisma inducido cefaleas-fatiga medición precisa pupilómetro-regla milimétrica error ±1-2mm tolerable ±3mm+ problemático decentración aberraciones periféricas incomodidad.
          </p>

          <h3>Miopía epidemia Asia tasas 80-90% jóvenes urbanos</h3>
          <p>
            Prevalencia miopía explota últimamente Asia Oriental: Singapur 80-90% conscriptos militares 18 años 1990s-2020 incremento vs 25-30% 1960s-70s generación previa, Corea Sur 96.5% hombres 19 años 2017 study record mundial miopía universal, China urbana Shanghái-Beijing 85-90% estudiantes secundaria vs rural 40-50% gradiente urbano-rural educación intensa factores ambientales. Causas multifactoriales genética asiática susceptibilidad + ambiente critical: educación intensiva 10-14h diarias estudio lectura cerca distancia 20-30cm prolongada axial elongation ojo crece 0.1-0.3mm/año infancia-adolescencia permanente irreversible miopía progresiva -0.50D a -1.0D annual increment, actividad outdoor reducida tiempo exterior 30-90min día protección natural dopamina retinal inhibe elongation luz solar 10,000-100,000 lux vs indoor 100-500 lux hypothesis confirmada estudios intervención Australian-Chinese 2-3h outdoor daily reduce incidencia 30-50%. Consecuencias salud pública miopía alta -6D+ aumenta riesgo desprendimiento retina 10×, glaucoma 3×, cataratas precoces 5×, degeneración macular miópica 40× ceguera irreversible complicación 2-5% casos miopía magna WHO classifica miopía alta amenaza visual global 2018 report. Intervenciones: lentes contacto ortoqueratología nocturna frena progresión 30-50% niños 6-14 años reshape cornea reversible, atropina 0.01-0.05% colirio dilata pupila mínimo side-effects photophobia reduce elongation 50-60% eficacia trials ATOM Singapore LAMP Hong Kong 2010s-2020s, outdoor time incremento políticas educativas Taiwán-China "bright classrooms" 2h recess obligatorio escuelas reducción 10-20% nuevos casos miopía health interventions.
          </p>

          <h3>Objetos parecen más pequeños gafas miopía efecto magnificación</h3>
          <p>
            Usuario gafas miopía -3D a -6D nota objetos mundo reducidos 5-15% tamaño aparente vs visión sin corrección borrosa, fenómeno magnificación espectacular retinal image size reducción lentes divergentes negativas aumentan distancia focal efectiva ojo-lente sistema óptico combinado vs ojo solo. Cálculo magnificación espectacular M_spec = 1 / (1 - d·P) donde d distancia vértice lente-córnea 12-14mm típico gafas, P potencia dioptrías, ejemplo -5D: M = 1/(1-0.012·(-5)) = 1/1.06 ≈ 0.943 imagen 94.3% tamaño original reducción 5.7% perceptible consciente usuario. Efecto aumenta miopía alta -10D: M = 1/(1+0.12) ≈ 0.893 reducción 10.7% objetos-personas parecen miniatura distorsión espacial profundidad-distancias percepción alterada adaptación cerebral 1-2 semanas compensa parcialmente, contactos lentes d≈0mm eliminan magnificación espectacular M≈1.0 visión natural tamaño real ventaja cosmética-funcional preferencia usuarios cambio gafas-contactos adjustment period reverse adaptation. Consecuencia práctica: examen conducir visión 20/40 mínimo legal gafas miopía -8D reducen imagen 15-20% dificulta leer señales tráfico 50-100m distancia vs contactos mejoran safety performance estudios DMV California. Hipermetropía positiva efecto opuesto magnificación M{'>'}1.0 objetos amplificados +5D→M≈1.06 aumento 6% ojos grandes appearance lentes gruesas centro estética fish-eye bulging distorsión cosmética razón preferencia contactos alto índice lentes delgadas reducir efecto.
          </p>

          <h3>Lentes divergentes nunca forman imágenes reales proyectables</h3>
          <p>
            Diferencia fundamental convergentes-divergentes formación imágenes: convergentes objeto distancia apropiada pueden proyectar imagen real pantalla-pared luz converge punto físico espacial cámaras-proyectores-ojos funcionan principio, divergentes SIEMPRE forman imágenes virtuales luz nunca converge realmente diverge desde punto virtual aparente detrás lente observador debe mirar través lente percibir imagen cannot project screen. Experimento demostración: lente convergente +5D focal 20cm objeto 30cm distancia calcular 1/di = 1/20 - 1/30 = 0.017 → di = 60cm imagen real proyectable pantalla colocada 60cm otro lado lente nitidez verificable, lente divergente -5D focal -20cm mismo objeto 30cm calcular 1/di = 1/(-20) - 1/30 = -0.083 → di = -12cm negativo indica imagen virtual mismo lado objeto 12cm dentro lente impossible project physically observador mira través ve imagen reducida derecha magnification m = -(-12)/30 = +0.4 tamaño 40% original. Aplicación pedagógica ESO: setup experimento aula obscura proyector overhead transparency convergentes proyectan pared nítido visible todos estudiantes, divergentes pantalla permanece oscura-borrosa sin imagen frustration initial luego explicación virtual image concept mirar directo lente objeto behind see reduced upright aha moment understanding optics. Consecuencia diseño óptico: sistemas requieren imágenes reales proyección-enfoque siempre usan convergentes finales (cámaras sensor-película, proyectores screen, ojos retina receptores), divergentes solo intermediarios beam expansion-correction aberrations nunca elemento imagen final.
          </p>

          <h3>Kepler miopía astronómico telescopios sin corrección personal</h3>
          <p>
            Johannes Kepler (1571-1630) astrónomo-matemático leyes movimiento planetario descubrimientos fundamentales sufría miopía severa estimada -6D a -8D visión lejana borrosa {'<'}5-7m nitidez limita observaciones telescópicas pioneras 1610s competencia Galileo superior visión. Ironía histórica: Kepler teorizó lentes divergentes corrección miopía "Dioptrice" 1611 tratado óptica explica divergencia empuja imagen focal posterior retina principio correcto pero nunca fabricó-usó gafas correctoras propio defecto posiblemente vidrieros época incapaces fabricar lentes cóncavas negativas precisión suficiente ±2D tolerancias vs ±0.25D moderno o vanity personal rechazó appearance gafas noble-científico estatus social. Limitaciones observacionales: telescopio refractor Kepler diseño 1611 dos convergentes objetivo-ocular inverted image científica-astronómica vs Galileo convergente-divergente upright image popularidad, Kepler miopía sin corregir dificultó observaciones planetary details manchas solares-lunas Júpiter rivals Galileo-Hevelius superior visión documentaron primeros fenómenos, concentró matemática-teoría vs observación empírica strengths computation-analysis laws motion elípticas orbits 1609-1619 Harmonices Mundi síntesis. Reconocimiento póstumo: gafas miopía estandarizan 1650s-1700s accesibilidad mejora astrónomos posteriores Huygens-Cassini-Newton observaciones precisas instrumental quality correlates visual acuity, lesson historia ciencia limitaciones físicas-sensoriales investigadores compensan ingenio-matemática-colaboración networked knowledge overcoming individual disabilities collective progress.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>Las lentes divergentes son más delgadas en el centro que en los bordes, separan rayos paralelos haciéndolos divergir desde un foco virtual negativo</li>
          <li>Ecuación conjugados 1/f = 1/d_o + 1/d_i con f{'<'}0 negativa focal virtual, d_i{'<'}0 imagen virtual misma lado objeto, siempre forman imágenes virtuales nunca proyectables</li>
          <li>Aumento m = -d_i/d_o siempre positivo (imagen derecha no invertida) y menor que 1 (imagen reducida 40-90% tamaño objeto típico), magnificación espectacular gafas reduce mundo 5-15%</li>
          <li>Potencia P = 1/f negativa miopía -0.5D leve a -15D+ magna, recetas ópticas OD/OI signo negativo identifica divergentes vs positivo convergentes hipermetropía, adición Add+ bifocales presbicia</li>
          <li>Aplicaciones: gafas-contactos miopía prevalencia 30-40% mundial 80-90% Asia urbana epidemia educación, expansores haz láser 2×-10× colimación, óptica cine gran angular 14-35mm corrección distorsión, mirillas puerta 160-220° FOV seguridad</li>
          <li>Historia desde Nicolás Cusa 1458 primeras cóncavas, Kepler 1611 teoría corrección miopía (irónico sufría -6D sin gafas propias), Helmholtz 1851 oftalmoscopio sistemático, Fick 1888 contactos vidrio, LASIK 1990 cirugía láser permanente 95-98% éxito</li>
        </ul>
      </div>
    </>
  );
};

export default LentesDivergentesTheory;