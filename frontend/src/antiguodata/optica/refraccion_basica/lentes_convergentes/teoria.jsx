import { TheorySection, Concept, Important, Example, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

export const metadata = {
  titulo: 'Lentes Convergentes',
  descripcion: 'Lentes convexas que concentran la luz; formación de imágenes y magnificación',
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const LentesConvergentesTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="Lentes Convergentes" emoji="🔍">
        <p>
          Las lentes convergentes son lentes más gruesas en el centro que en los bordes. 
          Concentran (convergen) los rayos de luz paralelos en un punto llamado foco.
        </p>

        <Important>
          Este tema proporciona una base conceptual visual para ESO sobre lentes convergentes y formación de imágenes.
          Las lentes convergentes se llaman también lentes convexas o positivas. 
          Una lupa muy potente tiene una distancia focal corta.
        </Important>
      </TheorySection>

      <TheorySection title="Fórmulas Clave" emoji="📐">
        <Concept title="1. Ecuación de las lentes delgadas (puntos conjugados)">
          <p>
            Esta es la fórmula fundamental que relaciona la distancia focal de la lente con las posiciones del objeto y su imagen:
          </p>

          <Formula
            title="Relación de lentes (ecuación de los puntos conjugados)"
            expression={`\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}`}
            where={[
              { symbol: 'f', description: 'Distancia focal de la lente (m o cm)' },
              { symbol: 'd_o', description: 'Distancia del objeto a la lente (m o cm)' },
              { symbol: 'd_i', description: 'Distancia de la imagen a la lente (m o cm)' },
            ]}
          />

          <p>
            Esta ecuación te permite calcular dónde se formará la imagen de un objeto colocado frente a una lente convergente. 
            Si conoces la focal (f) de la lente y la distancia del objeto (d_o), puedes encontrar dónde aparecerá la imagen (d_i).
          </p>

          <Important>
            Valores positivos y negativos: Para lentes convergentes, f es siempre positiva. Si d_i resulta positiva, 
            la imagen es real (se forma del otro lado de la lente). Si d_i resulta negativa, la imagen es virtual 
            (se forma del mismo lado que el objeto, como en una lupa).
          </Important>

          <Example>
            Ejemplo práctico: Una lupa con focal f = 10 cm. Si colocas un objeto a 5 cm de la lente (d_o = 5 cm), 
            calculas: 1/d_i = 1/10 - 1/5 = -0.1, entonces d_i = -10 cm. El signo negativo indica que la imagen 
            es virtual y está a 10 cm del mismo lado del objeto. Por eso ves la imagen aumentada al mirar a través de la lupa.
          </Example>
        </Concept>

        <Concept title="2. Aumento lateral (magnificación)">
          <p>
            El aumento lateral indica cuánto más grande o pequeña es la imagen comparada con el objeto original:
          </p>

          <Formula
            title="Aumento (magnificación)"
            expression={`m = - \\frac{d_i}{d_o}`}
            where={[
              { symbol: 'm', description: 'Aumento lateral (adimensional)' },
              { symbol: 'd_i', description: 'Distancia imagen (m o cm)' },
              { symbol: 'd_o', description: 'Distancia objeto (m o cm)' },
            ]}
          />

          <p>
            El signo negativo en la fórmula tiene significado físico importante:
          </p>
          <ul>
            <li>Si m es negativo (como m = -2): la imagen está invertida y es 2 veces más grande</li>
            <li>Si m es positivo (como m = +3): la imagen está derecha y es 3 veces más grande</li>
            <li>Si |m| {'>'} 1: la imagen es aumentada (más grande que el objeto)</li>
            <li>Si |m| {'<'} 1: la imagen es reducida (más pequeña que el objeto)</li>
            <li>Si |m| = 1: la imagen tiene el mismo tamaño que el objeto</li>
          </ul>

          <Example>
            Ejemplo: En el caso anterior (d_o = 5 cm, d_i = -10 cm), el aumento es m = -(-10)/5 = +2. 
            El signo positivo indica que la imagen está derecha (no invertida), y el valor 2 significa 
            que es el doble de grande que el objeto. Esto es típico de una lupa.
          </Example>
        </Concept>

        <Concept title="3. Potencia óptica de la lente">
          <p>
            La potencia óptica mide qué tan fuerte es la lente para desviar (refractar) los rayos de luz:
          </p>

          <Formula
            title="Potencia de una lente"
            expression={`P = \\frac{1}{f}`}
            where={[
              { symbol: 'P', description: 'Potencia en dioptrías (D)' },
              { symbol: 'f', description: 'Distancia focal en metros (m)' },
            ]}
          />

          <p>
            La potencia se mide en dioptrías (D), que son el inverso de metros (m⁻¹). Cuanto mayor es la potencia, 
            más corta es la distancia focal y más fuerte es la lente:
          </p>
          <ul>
            <li>🔍 Lente débil: P = +2 D → f = 0.5 m = 50 cm (lupa de lectura suave)</li>
            <li>🔍 Lente moderada: P = +5 D → f = 0.2 m = 20 cm (lupa estándar)</li>
            <li>🔍 Lente fuerte: P = +10 D → f = 0.1 m = 10 cm (lupa potente)</li>
            <li>🔍 Lente muy fuerte: P = +20 D → f = 0.05 m = 5 cm (lupa joyero)</li>
          </ul>

          <Important>
            ⚠️ Cuidado con las unidades: La potencia P se calcula con la focal en metros. Si tienes la focal 
            en centímetros, primero debes convertir a metros dividiendo entre 100. Por ejemplo: 
            f = 10 cm = 0.10 m → P = 1/0.10 = 10 D
          </Important>

          <Example>
            Ejemplo: Las gafas de lectura que venden en farmacias típicamente tienen potencias de +1.0 D, +1.5 D, 
            +2.0 D, +2.5 D o +3.0 D. Una de +2.0 D tiene una focal de f = 1/2 = 0.5 m = 50 cm. Esto significa 
            que ayuda a enfocar objetos cercanos, compensando la pérdida de acomodación del ojo con la edad (presbicia).
          </Example>
        </Concept>

        <Important>
          💡 Nota sobre las calculadoras: Estas tres fórmulas están integradas en una sola calculadora unificada 
          (ver sección siguiente) porque están interrelacionadas. Cuando introduces la focal (f) y la distancia 
          del objeto (d_o), la calculadora automáticamente determina: 1) la distancia de la imagen (d_i) usando 
          la ecuación de lentes, 2) el aumento (m) usando la fórmula de magnificación, 3) las características 
          de la imagen (real/virtual, derecha/invertida, aumentada/reducida). Esta integración refleja cómo 
          se usan estas fórmulas en la práctica: nunca se calculan aisladamente, sino como un sistema completo 
          para caracterizar completamente la formación de la imagen.
        </Important>
      </TheorySection>

      <TheorySection title="Calculadora y ejercicios" emoji="🧮">
        <Formula
          calculatorId="lentes-convergentes"
          definitions={definitions}
          exercises={exercises}
          expression={`\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}`}
          donde={{
            f: 'distancia focal (cm)',
            d_o: 'distancia del objeto a la lente (cm)',
            d_i: 'distancia de la imagen a la lente (cm)'
          }}
        />
      </TheorySection>

      {/* La sección de aplicaciones se trasladó al bloque especial al final, según plantilla */}

      <TheorySection title="Formación de Imágenes" emoji="📸">
        <Concept title="Depende de la distancia">
          <p>
            La imagen que forma una lente convergente depende de dónde coloques el objeto:
          </p>

          <h4>Objeto muy lejos (más allá de 2f):</h4>
          <ul>
            <li>📸 Imagen real (se puede proyectar)</li>
            <li>🔬 Imagen más pequeña</li>
            <li>🙃 Imagen invertida</li>
            <li>📷 Ejemplo: Cámara fotográfica</li>
          </ul>

          <h4>Objeto cerca (entre f y 2f):</h4>
          <ul>
            <li>📸 Imagen real</li>
            <li>🔍 Imagen más grande</li>
            <li>🙃 Imagen invertida</li>
            <li>🎬 Ejemplo: Proyector</li>
          </ul>

          <h4>Objeto muy cerca (menos de f):</h4>
          <ul>
            <li>👻 Imagen virtual (no se puede proyectar)</li>
            <li>🔍 Imagen aumentada</li>
            <li>😊 Imagen derecha (no invertida)</li>
            <li>🔍 Ejemplo: Lupa</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Secciones especiales se mueven al final según plantilla */}

      <TheorySection title="Experimentos Simples" emoji="🧪">
        <Concept title="1. Quemar papel con lupa">
          <h4>Materiales:</h4>
          <ul>
            <li>Lupa</li>
            <li>Papel oscuro</li>
            <li>Día soleado</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>☀️ En un día soleado, sal al exterior</li>
            <li>🔍 Sostén la lupa sobre el papel</li>
            <li>📏 Muévela hasta encontrar el punto más pequeño y brillante</li>
            <li>⏱️ Espera unos segundos</li>
            <li>🔥 El papel empezará a humear y arder</li>
          </ol>

          <Important>
            ⚠️ ¡CUIDADO! Hazlo con supervisión de un adulto. Nunca mires al sol 
            a través de la lupa, puedes dañar tus ojos permanentemente.
          </Important>
        </Concept>

        <Concept title="2. Proyectar una imagen">
          <h4>Materiales:</h4>
          <ul>
            <li>Lupa grande</li>
            <li>Ventana con luz</li>
            <li>Pared blanca</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>🪟 Colócate entre una ventana iluminada y una pared</li>
            <li>🔍 Sostén la lupa cerca de la pared</li>
            <li>📏 Aléjala lentamente de la pared</li>
            <li>🖼️ En cierto punto verás la imagen de la ventana proyectada (invertida)</li>
          </ol>
        </Concept>

        <Concept title="3. Lupa casera con botella">
          <h4>Materiales:</h4>
          <ul>
            <li>Botella de plástico transparente</li>
            <li>Agua</li>
            <li>Texto pequeño</li>
          </ul>

          <h4>Procedimiento:</h4>
          <ol>
            <li>💧 Llena la botella con agua</li>
            <li>📄 Coloca texto pequeño detrás</li>
            <li>👀 Mira a través de la botella</li>
            <li>🔍 El texto se verá aumentado</li>
          </ol>
        </Concept>
      </TheorySection>

      <TheorySection title="Potencia de una Lente" emoji="💪">
        <Concept title="Dioptrías">
          <p>
            La potencia de una lente se mide en dioptrías (D). 
            Cuanto mayor es el número de dioptrías, más potente es la lente.
          </p>

          <ul>
            <li>🔍 Lupa débil: +2 a +5 dioptrías</li>
            <li>🔍 Lupa fuerte: +10 a +20 dioptrías</li>
            <li>👓 Gafas de lectura: +1 a +3 dioptrías</li>
            <li>🔬 Microscopio: cientos de dioptrías</li>
          </ul>

          <Important>
            Las lentes convergentes tienen potencia positiva (+). 
            Cuanto mayor es la potencia, menor es la distancia focal.
          </Important>
        </Concept>
      </TheorySection>

      {/* Sección Curiosidades se integra en "Anécdotas" al final */}

      {/* Bloques finales en orden estricto: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Corrección visual hipermetropía y presbicia</h3>
          <p>
            Gafas lectura lentes convergentes positivas compensan hipermetropía (ojo corto imagen enfoca detrás retina, potencia +0.5D a +6D típico adultos jóvenes, hasta +8D casos severos) y presbicia (pérdida acomodación cristalino edad 40-50 años, necesidad +1D a +2.5D lectura 30-40cm, progresa +0.25D cada 2-3 años hasta +3D estabilización 60-65 años). Lentes monofocales lectura esféricas CR-39 índice n=1.498 grosor 2-4 mm centro apertura 50-60 mm $20-$100 comerciales, policarbonato n=1.586 resistente impactos niños-deportes, alto índice n=1.67-1.74 reducen grosor-peso 30-40% estética +4D prescripciones altas $150-$300. Lentes progresivas multifocales corrección continua lejos-intermedia-cerca gradiente potencia vertical sin líneas visibles, pasillo progresión 12-18 mm longitudinal +2D a +3D adición near, zonas laterales aberración astigmática adaptación 1-2 semanas, tecnología digital freeform CNC 0.01D precisión mapeo 10,000-20,000 puntos superficie $300-$800.
          </p>

          <h3>Lupas manuales y magnificación portátil</h3>
          <p>
            Lupas clásicas lentes biconvexas simple +5D a +20D (f=20cm a 5cm) aumentos 2×-5× observación texto-monedas-insectos-joyería, vidrio óptico BK7 o plástico acrílico diámetro 50-100 mm económicas $5-$30, lupas profesionales apocromáticas dobletes acromáticos eliminan aberración cromática franjas color bordes imágenes nítidas 10×-20× aumentos $50-$200 Schweizer-Eschenbach. Lupas iluminadas LED anillo 2-12 LEDs 6,000K temperatura color 50-300 lúmenes batería AAA mejoran contraste observación sombras $15-$80, lupas plegables bolsillo tamaño tarjeta crédito 3×-5× aumentos asféricas compactas viajes lectura menú-etiquetas. Lupas electrónicas videomagnificadores portátiles cámara digital pantalla LCD 3-5" aumentos digitales 2×-50× contraste-color ajustables baja visión degeneración macular-retinopatía $200-$2,000, conexión TV HDMI aumentos 10×-70× lectura extendida confort postura cuello. Lupas manos libres collares headband 2×-4× aumentos trabajos precisión manualidades-soldadura-relojería liberan manos binoculares estereoscópicas distancia trabajo 20-40 cm $20-$150.
          </p>

          <h3>Proyectores presentaciones y cine</h3>
          <p>
            Proyectores LCD-DLP lentes convergentes zoom objetivos enfocan imagen chip microdisplay 0.5-1.5" pantalla 60-300" distancia 1-10 m throw ratio 1:1 a 2:1 (distancia:ancho pantalla), resolución XGA 1024×768 educación básica, Full HD 1920×1080 presentaciones profesionales, 4K 3840×2160 cine hogar premium. Lúmenes ANSI 2,000-3,000 lm aulas iluminadas ambientales, 3,500-6,000 lm auditorios grandes competir luz solar ventanas, contrast ratio 2,000:1 a 10,000:1 negros profundos escenas oscuras películas. Tecnologías: LCD 3-chip RGB transmisivas brillo alto 4,000-10,000 lm instalación fija educación-corporativo $500-$5,000, DLP chip DMD Texas Instruments 1-3 chips microspejos tilt modulan luz contraste alto 3,000:1-10,000:1 portátiles-cine $800-$20,000, laser-LED fuentes luz sólida vida 20,000-30,000h sin reemplazo lámpara vs mercury 2,000-5,000h costo mantenimiento reducido 80-90%. Lentes intercambiables corto-estándar-largo alcance adaptan arquitectura sala instalación permanente cableado techo, ultra-corto 0.3:1 a 0.6:1 throw proyectan 100" desde 50-80 cm pared evitan sombras presentador interactivo educación $1,500-$8,000.
          </p>

          <h3>Cámaras fotográficas objetivos</h3>
          <p>
            Objetivos fotográficos conjuntos 4-20 lentes convergentes-divergentes grupos móviles corrigen aberraciones mantienen nitidez abertura-zoom, focal fija 35mm f/1.8 compacto 5-8 elementos $200-$500 versatilidad street-retrato, 50mm f/1.4 "normal" visión humana 50° 6-8 elementos $300-$800 clásico estándar, 85mm f/1.8 retrato tele-corto comprime perspectiva desenfoque cremoso bokeh f/1.4 $500-$1,500. Zoom estándar 24-70mm f/2.8 construcción 14-20 elementos 4-6 grupos asféricos lentes ED (extra-low dispersion) fluorita reducen aberración cromática apocromático sharpness profesional $1,000-$2,500 Canon-Nikon-Sony. Teleobjetivos 70-200mm f/2.8 deportes-fauna 18-25 elementos estabilización óptica IS-VR compensa vibración 3-5 stops equivalentes velocidad obturador enfoque rápido motores ultrasonicos USM-SWM AF 0.3-0.5s adquisición sujetos movimiento $1,500-$3,000. Macros 100mm f/2.8 reproducción 1:1 flat field planar distancia trabajo 12-20cm extensión enfoque interno grupos flotantes insectos-flores-productos close-up $600-$1,200. Coatings multicapa 7-15 capas λ/4 MgF₂-nanoestructuras reducen flares-ghosting transmitancia {'>'}98% por superficie 10-15 superficies aire-vidrio 85-90% transmisión total sin coatings vs 98-99% coated.
          </p>

          <h3>Microscopios ópticos compuestos biología</h3>
          <p>
            Microscopios compuestos dos etapas magnificación: objetivo lente convergente primaria forma imagen real aumentada muestra, ocular lente convergente secundaria lupa magnificación adicional imagen virtual ojo observador, aumento total M_total = M_objetivo × M_ocular. Objetivos estándar DIN 160mm tube length parfocales mantienen foco cambio aumentos: 4× plan achromat NA 0.10 campo overview 4-5 mm diámetro, 10× NA 0.25 observación general células 1-2 mm campo, 40× NA 0.65 alta resolución núcleos-organelos 0.4-0.5 mm campo trabajo 0.5-0.8 mm, 100× oil immersion NA 1.25-1.40 aceite inmersión índice n=1.515 iguala vidrio elimina refracción interfaz resolución máxima 200 nm λ/2NA bacterias-cromosomas campo 0.18 mm trabajo 0.1-0.2 mm requiere aceite cedro-sintético $300-$1,500 objetivo. Oculares widefield 10× campo 20-22 mm binoculares ergonómicos 30° inclinación reducen fatiga cuello sesiones prolongadas, 15×-20× mayor detalle campo reducido 10-15 mm. Iluminación Köhler condensador enfoca filamento lámpara pupila trasera objetivo ilumina uniforme campo condensador NA ajustable apertura diafragma optimiza contraste-resolución balanceo numerical apertures, halógeno 20-50W temperatura 3,200K económico vs LED 5,000-6,500K daylight 20,000-50,000h vida CRI 85-95 color fidelidad tinciones histológicas Gram-Giemsa. Microscopios estudiantes biológicos 40×-400× aumentos $100-$500 educación secundaria-universidad introductorios, investigación Olympus-Zeiss-Leica infinity-corrected UIS-UIS2 plan apochromats NA 1.45 oil fluorescencia-contraste fase-DIC $5,000-$30,000 sistemas.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>Lentes antiguas y primeras gafas (1000 a.C. - 1300 d.C.)</h3>
          <p>
            Lente Nimrud asiria 750-710 a.C. cristal roca pulido convexo 42×38 mm focal ~11 cm aumento 3× posiblemente lupa-encender fuego o joya decorativa, excavada palacio Kalhu (actual Irak) Museo Británico, debate función real arqueólogos algunos sugieren peso papiros vs lente óptica intencional. Romanos esferas vidrio llenas agua magnificación lectores Nerón emperador 37-68 d.C. usaba esmeralda pulida observar gladiadores arena posiblemente corrección miopía o reducir glare luz solar. Edad Media "piedras lectura" berilo-cuarzo lentes planoconvexas simples monjes copistas manuscritos 900-1200 d.C., Roger Bacon "Opus Majus" 1266 primera descripción clara lentes magnificación visión débil elderly presbicia segment vitreous spherical less than portion sphere place atop letters magnified. Gafas primeras invención Italia ~1286 Pisa-Venecia, Giordano da Pisa sermón 1305 "no hace aún veinte años que se inventó el arte de hacer gafas", lentes convexas biconvexas vidrio pulido montura cuero-hueso-bronce puente nariz tipo "riveted spectacles" corregían presbicia +1D a +3D lectura, producción artesanal Venecia monopolio secreto maestros vidrieros Murano 1300s-1600s exportación Europa gafas lujo aristócratas-clérigos equivalente $500-$2,000 actuales accesibilidad limitada.
          </p>

          <h3>Revolución instrumentos ópticos siglo XVII</h3>
          <p>
            Invención microscopio compuesto Zacharias Janssen Holanda ~1590 tubo dos lentes convergentes objetivo+ocular aumento 3×-9× primitivo observaciones insectos-objetos pequeños, diseño mejorado Galileo 1609 "occhialino" enfoca cerca vs telescopio lejos. Robert Hooke "Micrographia" 1665 ilustraciones detalladas microscopio compuesto observaciones pulga-corcho-células primera vez término "cell" estructura tejidos vegetales cámaras panal abejas, microscopio tres lentes aumentos 20×-50× iluminación lámpara aceite reflector esférico concentra luz muestra, dibujos grabados revolucionan biología Royal Society Londres. Antonie van Leeuwenhoek 1670s-1723 lentes simples extraordinarias focal 1-3 mm aumento 50×-275× récord época, pulido manual vidrio esférico secreto técnica calidad óptica λ/4 planicidad superior contemporáneos, descubre bacterias (1676 "animálculos" agua lluvia-placa dental), protozoos (1674 agua estanque Paramecium), espermatozoides (1677 humanos-animales), glóbulos rojos (1695 capilares sangre), total 500+ lentes fabricadas vida 9 supervivientes museos Rijksmuseum-Utrecht magnificaciones verificadas modernas confirman 266× máximo. Microscopios compuestos siglo XVIII aumentos limitados 100×-200× aberración cromática-esférica severa lentes simples vidrio crown índice único franjas colores bordes imágenes blur distorsión.
          </p>

          <h3>Lentes acromáticas y corrección aberraciones (1700-1900)</h3>
          <p>
            Chester Moor Hall 1733 Inglaterra inventa doblete acromático combina lente convergente vidrio crown (bajo índice n≈1.52, bajo dispersión V≈60) + lente divergente flint (alto índice n≈1.62, alta dispersión V≈35) compensa aberración cromática enfoca rojo-azul mismo plano focal, mantiene secreto encarga dos opticians separados construir componentes descubren conspiración fabricante común George Bass. John Dollond 1758 patenta lentes acromáticas aplica telescopios fabricación comercial Royal Society Copley Medal, monopolio legal 1772 expiración permite proliferación telescopios refractores acromáticos observatorios Europa Gran Bretaña superioridad reflectores metálicos speculum tarnish degradación. Microscopios acromáticos 1820s-1830s Giovanni Amici Italia + Joseph Jackson Lister (padre cirujano antiséptico) calculan combinaciones crown-flint corrigen aberración cromática-esférica objetivos apocromáticos triple combinación fluorita CaF₂ vidrios especiales Schott-Abbe 1880s eliminan aberración cromática tres colores rojo-verde-azul resolución teórica límite difracción Abbe d=λ/(2NA) bacterias 200nm visible. Carl Zeiss-Ernst Abbe partnership 1866 Jena Alemania revoluciona óptica científica cálculo sistemático lentes rayos teoría difracción numerical aperture NA=n·sin(θ) define resolución, objetivos plan-apochromat flat field 25mm diámetro nitidez uniforme borde-centro fotomicrografía documentación científica 1880s-1900s estándares modernos.
          </p>

          <h3>Óptica moderna diseño computacional (1950-2024)</h3>
          <p>
            Lentes asféricas manufactura CNC (Computer Numerical Control) 1960s-1980s superficies no-esféricas perfil cuadrático-polynomial z=cr²/(1+√(1-(1+k)c²r²))+Σα_i·r^i corrigen aberración esférica coma single surface vs múltiples elementos esféricos reducción peso-costo-compacidad, molding precisión vidrio 1-5 μm tolerancias, diamond turning infrarrojo germanio-ZnSe precisión 100nm Ra roughness aplicaciones térmica-militar. Diseño óptico software ZEMAX-CODE V 1990s-2000s ray tracing Monte Carlo optimización automática 10-30 variables superficie aspheric coefficients minimiza spot size RMS wavefront error aberraciones balancean performance field curvature-distortion-vignetting, bibliotecas vidrios catálogo Schott-Ohara-Hoya 400+ tipos índices n=1.45-2.0 dispersión V=20-95 selección optimal acromático-apocromático. Lentes gradiente índice GRIN 1970s-presente material índice refracción varía radialmente n(r)=n₀(1-Ar²/2) enfoca luz curvatura gradiente vs superficies curved, fibras óptica multimode GRIN 50-62.5μm core pitch 0.23-0.29 acoplan fuentes LED-laser, lentes GRIN cilíndricas diámetro 0.5-10mm pitch fractions 0.25P=colima, 0.5P=relay 1:1, endoscopios rígidos-flexibles diámetro 1-5mm gradiente radial elimina lentes convencionales compacidad cirugía mínima invasiva laparoscopía. Metalentes planar 2016-2024 nanoestructuras dieléctricas TiO₂-GaN periodo 200-500nm fase-shifting subwavelength manipulan frente onda grosor single layer 300-800nm vs milímetros bulk lenses, demostraciones laboratorio eficiencia 80-90% visible-NIR, limitaciones ángulos incidencia ±10-20° bandwidth estrecho Δλ=50-100nm, aplicaciones futuras smartphones AR-VR compacidad extrema integración fotónica.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y Curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>Botella agua lupa improvisada incendios</h3>
          <p>
            Botellas plástico transparente PET llenas agua actúan lentes convergentes focales 5-15 cm dependiendo curvatura-diámetro botella 5-10 cm cilindro, concentran luz solar 100,000 lux punto 2-5 mm diámetro intensidad 10,000-50,000× temperatura 200-400°C suficiente ignición papel-hojas secas 10-30 segundos exposición día soleado claro. Incendios vehiculares accidentales: botella agua olvidada asiento trasero ventana amplifica sol foco tapicería-plásticos interior temperatura verano 40-60°C crítica térmica, casos documentados bomberos UK-Australia 2010s-2020s educación pública no dejar botellas vehículos estacionados prevención siniestros. Survival bushcraft técnica primitiva encender fuego sin fósforos-mechero: botella agua-preservativo lleno-bolsa plástico inflada esférica actúa lente concentra sol yesca carbón vegetal-algodón-fibras secas humea 30-60s ignición soplar oxígeno llama, competencias supervivencia habilidad crítica emergencia wilderness. Experimento educativo ESO: aluminio papel envoltorio chocolate reflector parabólico improvisado fondo botella foco térmico doble concentración reflexión+refracción alcanza 500-700°C funde estaño-plomo soldadura temperatura fusión 180-230°C demostración energía solar renovable principios óptica geométrica accesibles materiales cotidianos.
          </p>

          <h3>Relación inversa dioptrías-focal lentes potentes</h3>
          <p>
            Ecuación potencia P=1/f(m) donde f focal metros establece relación hiperbólica inversa: lente +1D tiene f=1m=100cm débil magnificación mínima, +2D→f=50cm, +5D→f=20cm lupa estándar aumento 2-3×, +10D→f=10cm lupa fuerte 3-4×, +20D→f=5cm lupa muy potente 5-6× observación insectos-texturas, +50D→f=2cm joyeros-relojeros magnificación extrema 10-12× campo visual minúsculo 3-5mm diámetro. Gafas lectura comerciales graduaciones +1.00D, +1.25D, +1.50D, +1.75D, +2.00D, +2.50D, +3.00D incrementos 0.25D-0.5D farmacias-ópticas $10-$50 readers universales vs prescripción custom astigmatismo-prism-adición personalizada $100-$400. Implantes intraoculares cirugía cataratas potencias +10D a +30D típico dependiendo longitud axial ojo 22-25mm biometría IOLMaster mide precisión 0.01mm cálculo fórmulas Barrett-Haigis-Holladay predicen potencia óptima emetropía (visión sin gafas lejos) error refractivo target ±0.5D accuracy 90-95% casos, lentes multifocales +2.5D a +4D adición near reducen dependencia gafas lectura compromiso halos nocturnos glare 10-20% pacientes adaptación. Lentes contacto rígidas gas-permeables RGP potencias -20D a +20D rango miopía-hipermetropía extrema, blandas hidrogel silicona -12D a +8D típico 38-75% contenido agua Dk/t transmisibilidad oxígeno 20-175 córnea 21% O₂ metabólico salud evita neovascularización hipoxia.
          </p>

          <h3>Leeuwenhoek maestro lentes simples secreto perdido</h3>
          <p>
            Antonie van Leeuwenhoek (1632-1723) comerciante telas Delft Holanda sin educación científica formal revoluciona microbiología fabricando lentes simples extraordinarias superioridad microscopios compuestos contemporáneos aberraciones múltiples superficies, técnica pulido secreto nunca publicó llevó tumba especulaciones historiadores: posiblemente esfera vidrio pequeña 1-3mm diámetro fusión llama soplete-filamento fino controlado enfriamiento lento recocido stress-free, pulido manual lap estaño-cobre rouge polvo Fe₂O₃ fino 1-10μm grano semanas trabajo por lente alcanzando planicidad λ/4=140nm curvatura perfecta esférica minimiza aberración esferoidal Abbe sine condition. Montaje único latón-plata soporte single lens apertura 1-2mm limita campo visual 0.5-1mm diámetro compensa depth-of-field extendido f/# alto f/8-f/16 enfoque crítico tornillo micrométrico posiciona muestra lumen anterior specimen clip transparencia iluminación vela-sol reflejado espejo cóncavo. Aumentos verificados modernos: 9 lentes supervivientes Rijksmuseum Utrecht analizadas 2021 microscopio electrónico AFM miden curvaturas radios 0.5-1.5mm focales 0.75-3mm aumentos calculados M=250mm/f × NA apertura numérica rangos 50×-266× confirman descripciones contemporáneos, comparación microscopios compuestos Hooke 1665 ~50× máximo useful magnification antes acromáticos Leeuwenhoek ventaja 5× resolución detecta bacterias 1μm longitud onda límite difracción. Correspondencia Royal Society Londres 1673-1723 envía 190 cartas reporta descubrimientos dibujos detallados never visited Inglaterra idioma holandés traducido Latín-Inglés, Fellows escépticos inicialmente 1676 confirmación comité Hooke-Wren-Grew validan observaciones microscopios inferiores, membership Fellow RS 1680 honor ciudadano autodidacta dedicación empírica.
          </p>

          <h3>Peligro incendios objetos transparentes sol concentrado</h3>
          <p>
            Bomberos advierten múltiples objetos domésticos lentes convergentes improvisadas iniciar incendios focalizando luz solar: espejos cosméticos magnificación +5D a +10D cóncavos concentran sol punto focal 10-20cm encienden cortinas-papel contacto 15-30s exposición directa ventana orientación sur climas soleados, casos reportados UK-Australia incendios residenciales causados espejos baño-tocador olvidados superficies combustibles. Bolas cristal decorativas pisapapeles 50-100mm diámetro esfera vidrio focal f=D/2=25-50mm índice n=1.5 concentración 100-500× sol intensidad 10-50 MW/m² temperatura 300-600°C carboniza madera-plástico-tela rápidamente, incendios documentados salas estar-jardines bolas expuestas luz directa mediodía verano ignición mantillo-hojas-muebles. Acuarios peces rectangular-esférico vidrio 5-10mm grosor agua índice n=1.33 lente biconvexa improvisada focal 20-100cm dependiendo geometría curvatura paredes concentra sol alféizar ventana quema cortinas-marcos madera-alfombras background, prevención cerrar persianas ausencia prolongada orientar acuario evitar incidencia directa sol horas pico 11-15h. Dispensadores gel hidroalcohólico pandemia COVID-19 botellas transparentes PET contenido 60-70% alcohol índice n=1.36 similar agua lente convergente focal 10-30cm, casos reportados 2020-2021 vehículos estacionados sol botellas gel ventanilla ignición tapicería interior temperatura 50-70°C crítica vaporización alcohol LFL (Lower Flammability Limit) 3.3% concentración aire chispa-calor inicia combustión. Educación prevención incendios: no dejar objetos transparentes-reflectantes cerca ventanas exposición solar directa, almacenar botellas-vidrios lugares sombra-armarios cerrados, inspecciones vivienda riesgo lentes inadvertidas pueden concentrar energía térmica crítica ignición materiales combustibles domésticos.
          </p>

          <h3>Microscopio Hooke pulga Micrographia ícono científico</h3>
          <p>
            "Micrographia" Robert Hooke 1665 primer bestseller científico ilustrado Royal Society Londres 38 cm × 30 cm folio grande grabados cobre plegables detalle extraordinario observaciones microscopio compuesto aumentos 20×-50×, ilustración pulga Scheme XXXIV desplegable 45 cm página doble muestra anatomía externa completa ojos compuestos facetas hexagonales, patas articuladas garras, segmentos abdominales espiráculos respiratorios, antenas sensoriales, detalle magnificado ~100× representación amplifica 2,000-5,000× página impresa permite lectores sin microscopio visualizar mundo invisible revolucionario concepto divulgación. Células corcho Observation XVIII sección fina microscopio observa estructura panal abejas poros cámaras air-cells llama "cells" primera vez término biología modern usage describe estructura tejidos vegetales leñosos muerte celular pared celulosa visible Hooke no observa contenido vivo células animales-vegetales posteriores Leeuwenhoek-Schleiden-Schwann 1830s teoría celular. Otras ilustraciones icónicas: mosca doméstica cabeza compuesta ojos 4,000 ommatidia, agujas coser punta irregular magnificada parece tosca manufactura visible ojo, filos navajas afiladas irregularidades microscópicas, moho bread-rose hongos filamentos sporangia esféricos germinación, textiles seda-lino fibras estructuras woven. Impacto cultural: Samuel Pepys diario 1665 "el libro más ingenioso que jamás leí en mi vida", inspiración ilustradores-artistas siglos posteriores estética microscopio, reimpresiones facsímiles modernas Dover-Taschen accesibilidad historia ciencia $20-$100, exhibiciones museo Ciencia Londres-Smithsonian originales preservados Royal Society archivos Transactions. Microscopio Hooke réplicas funcionales modernas construibles hobbyists latón-vidrio diseño 1665 aumentos 30×-50× verifican observaciones cardboard tube lentes biconvexas 10-25mm diámetro focales 20-50mm oculares 10-15mm focal iluminación vela-LED reflector espejo plano redirects luz muestra transparencia entre vidrios demostración historia óptica talleres educativos STEM.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>Las lentes convergentes son más gruesas en el centro que en los bordes, concentran rayos paralelos en un foco real formando imágenes reales o virtuales</li>
          <li>Ecuación conjugados 1/f = 1/d_o + 1/d_i relaciona focal-objeto-imagen; aumento m = -d_i/d_o indica magnificación e inversión (signo negativo)</li>
          <li>Potencia P = 1/f (dioptrías) inversamente proporcional a focal: +1D→f=1m débil, +10D→f=10cm potente lupa, +20D→f=5cm muy potente magnificación extrema</li>
          <li>Formación imágenes depende posición objeto: {'>'}2f imagen real invertida reducida (cámara), entre f-2f real invertida aumentada (proyector), {'<'}f virtual derecha aumentada (lupa)</li>
          <li>Aplicaciones: gafas hipermetropía +0.5D a +6D presbicia +1D a +3D progresivas, lupas 2×-20× aumentos portátiles-electrónicas, proyectores LCD-DLP 2,000-6,000 lúmenes, objetivos fotográficos 24-200mm zoom asféricos, microscopios 4×-100× oil immersion NA 1.40 resolución 200nm</li>
          <li>Historia desde lente Nimrud 750 a.C. gafas Italia 1286, Leeuwenhoek lentes simples 1670s 50×-275× aumentos secreto bacteria-protozoos, acromáticos Dollond 1758, Zeiss-Abbe apocromáticos 1880s, diseño computacional ZEMAX moderno asféricos-GRIN-metalentes</li>
        </ul>
      </div>
    </>
  );
};

export default LentesConvergentesTheory;
