import { Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Transferencia de Calor Cotidiana",
  descripcion: "Las tres formas en que el calor se transfiere: conducción, convección y radiación",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const TransferenciaCalorCotidiana = () => {
  return (
    <>
      <Concept 
        title="¿Cómo viaja el calor?" 
        color="red"
        icon="🔥"
      >
        <p>
          El calor puede viajar de un lugar a otro de tres formas diferentes: 
          conducción, convección y radiación. Cada una funciona de manera distinta.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: El calor siempre fluye de zonas calientes a zonas 
            frías, pero el cómo viaja depende del medio y las circunstancias.
          </p>
        </div>
      </Concept>

      <Concept 
        title="1. Conducción: Calor por contacto" 
        color="orange"
        icon="🍳"
      >
        <p>
          La conducción es la transferencia de calor por contacto directo. 
          Las moléculas calientes chocan con las frías y les transfieren energía.
        </p>

        <div className="info-box">
          <h3>Características de la conducción</h3>
          <ul>
            <li>Requiere contacto: Los objetos deben tocarse</li>
            <li>Ocurre en sólidos: Principalmente en metales</li>
            <li>Molécula a molécula: La energía pasa de una a otra</li>
            <li>Sin movimiento de materia: Las moléculas no se desplazan</li>
          </ul>
        </div>

        <p>Ejemplos cotidianos:</p>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🍳</span>
            <p>Sartén: El calor del fuego pasa al metal y luego al alimento</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🥄</span>
            <p>Cuchara en café: El calor del café sube por la cuchara metálica</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🧊</span>
            <p>Hielo en la mano: El calor de tu mano pasa al hielo y lo derrite</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔥</span>
            <p>Plancha: El calor pasa de la plancha a la ropa por contacto</p>
          </div>
        </div>

        <Important>
          <p>
            ⚠️ Cuidado: Los metales son excelentes conductores. Por eso una 
            cuchara metálica en café caliente se calienta rápido y puede quemarte.
          </p>
        </Important>
      </Concept>

      <Concept 
        title="2. Convección: Calor por movimiento de fluidos" 
        color="blue"
        icon="🌊"
      >
        <p>
          La convección es la transferencia de calor por movimiento de líquidos 
          o gases. El fluido caliente sube y el frío baja, creando corrientes.
        </p>

        <div className="info-box">
          <h3>Características de la convección</h3>
          <ul>
            <li>Solo en fluidos: Líquidos y gases</li>
            <li>Movimiento de materia: El fluido se desplaza</li>
            <li>Corrientes: Caliente sube, frío baja</li>
            <li>Puede ser natural o forzada: Por densidad o por ventilador</li>
          </ul>
        </div>

        <p>¿Por qué el fluido caliente sube?</p>
        <ul>
          <li>Al calentarse, el fluido se dilata</li>
          <li>Al dilatarse, se vuelve menos denso (más ligero)</li>
          <li>Al ser menos denso, flota y sube</li>
          <li>El fluido frío (más denso) baja para ocupar su lugar</li>
        </ul>

        <p>Ejemplos cotidianos:</p>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🍲</span>
            <p>Olla hirviendo: El agua caliente del fondo sube, la fría baja</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏠</span>
            <p>Calefacción: El aire caliente sube al techo, el frío baja al suelo</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌬️</span>
            <p>Aire acondicionado: Se pone arriba porque el aire frío baja</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌊</span>
            <p>Brisa marina: El aire caliente de tierra sube, el frío del mar entra</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔥</span>
            <p>Humo de vela: El aire caliente sube llevando el humo</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">☕</span>
            <p>Café enfriándose: El aire caliente sobre el café sube</p>
          </div>
        </div>
      </Concept>

      <Concept 
        title="3. Radiación: Calor por ondas" 
        color="yellow"
        icon="☀️"
      >
        <p>
          La radiación es la transferencia de calor por ondas electromagnéticas. 
          No necesita materia, puede viajar por el vacío.
        </p>

        <div className="info-box">
          <h3>Características de la radiación</h3>
          <ul>
            <li>No necesita medio: Viaja por el vacío</li>
            <li>Ondas electromagnéticas: Como la luz, pero infrarroja</li>
            <li>A la velocidad de la luz: 300,000 km/s</li>
            <li>Todos los objetos radian: Cuanto más calientes, más radian</li>
          </ul>
        </div>

        <p>Ejemplos cotidianos:</p>
        <div className="ejemplos-grid">
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">☀️</span>
            <p>Sol: El calor llega a la Tierra por radiación (no hay aire en el espacio)</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🔥</span>
            <p>Fogata: Sientes el calor sin tocar el fuego (radiación infrarroja)</p>
          </div>
          
          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🍞</span>
            <p>Tostadora: Las resistencias rojas calientan el pan por radiación</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌡️</span>
            <p>Termómetro infrarrojo: Mide la radiación que emite tu frente</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🏠</span>
            <p>Radiador de calefacción: Calienta por radiación y convección</p>
          </div>

          <div className="ejemplo-item">
            <span className="ejemplo-emoji">🌙</span>
            <p>Noche despejada: Pierdes calor por radiación hacia el cielo</p>
          </div>
        </div>

        <Important>
          <p>
            💡 Dato curioso: Los objetos oscuros absorben más radiación (se 
            calientan más al sol) y los claros la reflejan (se mantienen más frescos). Por eso 
            en verano es mejor usar ropa clara.
          </p>
        </Important>
      </Concept>

      <Concept 
        title="Comparación de los tres métodos" 
        color="purple"
        icon="⚖️"
      >
        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Aspecto</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Conducción</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Convección</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Radiación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5em'}}>Medio</td>
              <td style={{padding: '0.5em'}}>Sólidos</td>
              <td style={{padding: '0.5em'}}>Fluidos</td>
              <td style={{padding: '0.5em'}}>Cualquiera (incluso vacío)</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Contacto</td>
              <td style={{padding: '0.5em'}}>Necesario</td>
              <td style={{padding: '0.5em'}}>No necesario</td>
              <td style={{padding: '0.5em'}}>No necesario</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Movimiento</td>
              <td style={{padding: '0.5em'}}>Sin movimiento</td>
              <td style={{padding: '0.5em'}}>Con movimiento</td>
              <td style={{padding: '0.5em'}}>Sin movimiento</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Velocidad</td>
              <td style={{padding: '0.5em'}}>Lenta</td>
              <td style={{padding: '0.5em'}}>Media</td>
              <td style={{padding: '0.5em'}}>Muy rápida (luz)</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Ejemplo</td>
              <td style={{padding: '0.5em'}}>Cuchara en café</td>
              <td style={{padding: '0.5em'}}>Agua hirviendo</td>
              <td style={{padding: '0.5em'}}>Calor del Sol</td>
            </tr>
          </tbody>
        </table>
      </Concept>

      <Example 
        title="Ejemplo: Cocinar una sopa"
        problem="Estás cocinando sopa en una olla metálica sobre el fuego. ¿Qué tipos de transferencia de calor ocurren?"
        solution={
          <div style={{color: '#1f2937'}}>
            <p>Análisis completo:</p>
            
            <p>1. Conducción (fuego → olla → sopa)</p>
            <ul>
              <li>El calor del fuego pasa al fondo de la olla por conducción</li>
              <li>El metal de la olla conduce el calor rápidamente</li>
              <li>El calor pasa del metal al líquido en contacto con el fondo</li>
            </ul>

            <p>2. Convección (dentro de la sopa)</p>
            <ul>
              <li>La sopa del fondo se calienta y sube (menos densa)</li>
              <li>La sopa fría de arriba baja (más densa)</li>
              <li>Se crean corrientes de convección que mezclan la sopa</li>
              <li>Por eso no necesitas remover constantemente</li>
            </ul>

            <p>3. Radiación (fuego → aire)</p>
            <ul>
              <li>El fuego emite radiación infrarroja</li>
              <li>Puedes sentir el calor sin tocar la olla</li>
              <li>Los lados de la olla también se calientan por radiación</li>
            </ul>

            <p>Conclusión: Los tres métodos ocurren simultáneamente. La conducción 
            calienta el fondo, la convección distribuye el calor en el líquido, y la radiación 
            calienta el ambiente.</p>
          </div>
        }
      />

      <Concept 
        title="Aplicaciones en la vida diaria" 
        color="green"
        icon="🏠"
      >
        <p>En la cocina:</p>
        <ul>
          <li>Horno: Radiación (resistencias) + Convección (aire caliente)</li>
          <li>Microondas: Radiación de microondas que agita las moléculas de agua</li>
          <li>Olla a presión: Conducción + Convección a alta presión</li>
        </ul>

        <p>En casa:</p>
        <ul>
          <li>Calefacción por suelo radiante: Conducción (suelo) + Radiación + Convección (aire)</li>
          <li>Ventanas dobles: Reducen conducción con cámara de aire</li>
          <li>Termo: Vacío entre paredes elimina conducción y convección</li>
        </ul>

        <p>En la naturaleza:</p>
        <ul>
          <li>Brisa marina: Convección entre tierra y mar</li>
          <li>Efecto invernadero: Radiación solar atrapada por gases</li>
          <li>Corrientes oceánicas: Convección a gran escala</li>
        </ul>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Aislamiento térmico edificios eficiencia energética calefacción</h3>
          <p>El aislamiento térmico en edificios modernos es fundamental para reducir el consumo energético en calefacción y climatización. Los materiales más utilizados incluyen lana mineral y espuma de poliuretano, que presentan una conductividad térmica muy baja (λ = 0.03-0.04 W/(m·K)), lo que significa que dificultan enormemente la transferencia de calor por conducción a través de paredes y techos. Un espesor típico de 10-20 cm de estos materiales puede reducir las pérdidas de calor en un 60-80% durante el invierno.</p>
          <p>Sin embargo, la efectividad del aislamiento puede verse comprometida por los llamados "puentes térmicos", que son zonas donde se produce una discontinuidad en el aislamiento, como ventanas, marcos metálicos o pilares estructurales. En estas áreas, la conductividad térmica local aumenta significativamente (λ = 1-2 W/(m·K)), creando puntos de pérdida de energía concentrada que pueden representar hasta el 30% de las pérdidas totales del edificio.</p>
          <p>Las ventanas constituyen otro elemento crítico. Mientras que una ventana de vidrio simple tiene una transmitancia térmica de U = 5.7 W/(m²·K), las ventanas de doble o triple vidrio con cámara de aire o argón (12-16 mm de espesor) reducen este valor a U = 1.1-1.5 W/(m²·K), gracias a que el gas atrapado tiene una conductividad muy baja (λ = 0.024 W/(m·K)). Esta mejora es crucial en la certificación energética de edificios: una vivienda con clase A consume menos de 50 kWh/(m²·año), mientras que una de clase G puede superar los 300 kWh/(m²·año), con diferencias en el coste energético anual que pueden alcanzar miles de euros.</p>
        </div>
        <div className="theory-subsection">
          <h3>Refrigeración electrónica disipación calor procesadores GPU</h3>
          <p>Los procesadores modernos de alto rendimiento, como los Intel Core i9 o las GPUs de última generación, generan enormes cantidades de calor durante su funcionamiento, con una potencia térmica de diseño (TDP) que puede alcanzar entre 125 y 250 W. Sin refrigeración adecuada, estos componentes alcanzarían temperaturas destructivas en cuestión de segundos. El desafío consiste en transferir eficientemente este calor desde el diminuto chip (área típica de 2×2 cm) hacia el aire ambiente circundante.</p>
          <p>La solución más común utiliza un disipador metálico, generalmente de cobre (conductividad λ = 400 W/(m·K)) o aluminio (λ = 200 W/(m·K)), que maximiza la conducción térmica desde el procesador. La base del disipador se une al chip mediante pasta térmica (λ = 3-8 W/(m·K)), que rellena las microscópicas imperfecciones superficiales y reduce la resistencia térmica de contacto. Desde la base, el calor se distribuye por múltiples aletas que aumentan dramáticamente la superficie de contacto con el aire. Un ventilador girando a 1200-2500 RPM genera un flujo forzado de 50-100 CFM (pies cúbicos por minuto), evacuando el aire caliente y reemplazándolo con aire fresco en un proceso de convección forzada.</p>
          <p>Para sistemas de mayor rendimiento, la refrigeración líquida (AIO - All In One) ofrece ventajas significativas. Un líquido refrigerante circula mediante una bomba en circuito cerrado, absorbiendo calor del procesador y transportándolo hasta un radiador de 240-360 mm. La alta capacidad calorífica del líquido (4.18 kJ/(kg·K), similar al agua) permite transportar mucho más calor que el aire, resultando en temperaturas de operación más bajas y estables. Mantener el procesador por debajo de 85°C es crítico: superado este umbral, se activan mecanismos de protección (throttling) que reducen el rendimiento para evitar daños permanentes.</p>
        </div>
        <div className="theory-subsection">
          <h3>Hornos industriales tratamiento térmico refractarios cerámica</h3>
          <p>Los hornos industriales representan uno de los mayores desafíos en ingeniería térmica, debiendo alcanzar y mantener temperaturas extremadamente altas mientras minimizan las pérdidas energéticas. Un horno de mufla de laboratorio típico opera entre 1200-1600°C, utilizando resistencias eléctricas rodeadas por cerámica refractaria de alúmina (conductividad λ = 2-5 W/(m·K)). Aunque esta conductividad pueda parecer alta, es necesaria para distribuir uniformemente el calor en la cámara. El aislamiento real se logra mediante capas externas de fibra cerámica (λ = 0.1-0.2 W/(m·K)) que reducen drásticamente las pérdidas térmicas hacia el exterior.</p>
          <p>A temperaturas tan elevadas, la radiación térmica se convierte en el mecanismo dominante de transferencia de calor. Las superficies internas del horno, con emisividades de ε = 0.7-0.9, emiten radiación infrarroja intensa siguiendo la ley de Stefan-Boltzmann (P ∝ T⁴). Esta radiación es absorbida eficientemente por las piezas metálicas o cerámicas en tratamiento. En hornos de arco eléctrico de acerías, utilizados para fundir chatarra a 1600-1800°C, electrodos de grafito conducen corrientes de 50-150 kA con potencias totales de 100-200 MW. Los refractarios en estas aplicaciones extremas suelen ser de magnesia-carbono (MgO-C), seleccionados por su excepcional resistencia al choque térmico y a la corrosión por escorias metálicas.</p>
          <p>El control preciso del tiempo de calentamiento es crítico en tratamientos térmicos metalúrgicos. Velocidades de rampa típicas de 5-20°C/min permiten transformaciones de fase controladas en el acero (austenización, temple, revenido, recocido), determinando la microestructura final y, por tanto, las propiedades mecánicas de la pieza. Una rampa demasiado rápida puede generar tensiones internas y grietas, mientras que una demasiado lenta resulta ineficiente energéticamente.</p>
        </div>
        <div className="theory-subsection">
          <h3>Colectores solares térmicos agua caliente sanitaria</h3>
          <p>Los colectores solares térmicos aprovechan la radiación solar para calentar agua destinada a uso doméstico o calefacción, constituyendo una tecnología de energía renovable muy consolidada. Los paneles de placa plana son los más comunes: su superficie absorbente está recubierta con un tratamiento selectivo que presenta un coeficiente de absorción muy alto para radiación solar visible (α = 0.95), capturando eficientemente la energía entrante, pero una emisividad muy baja en el infrarrojo (ε = 0.05), lo que minimiza las pérdidas por reradiación térmica. Esta asimetría espectral es clave para maximizar la eficiencia.</p>
          <p>La cubierta de vidrio transparente cumple una función dual: permite el paso de aproximadamente el 90% de la radiación solar visible, pero atrapa la radiación infrarroja emitida por la placa caliente, creando un "efecto invernadero" que actúa como trampa térmica. Bajo esta cubierta, tubos de cobre transportan el agua que se calienta en contacto con la placa. En instalaciones de termosifón, la circulación del fluido ocurre de forma natural por convección: el agua caliente, menos densa, asciende hacia el acumulador (un depósito aislado de 150-300 L), mientras que el agua fría desciende para ser calentada, estableciendo un ciclo continuo sin necesidad de bombas.</p>
          <p>El rendimiento térmico de estos sistemas, definido como la fracción de energía solar incidente que se convierte en calor útil, oscila entre el 40-60%, permitiendo alcanzar temperaturas de salida de 50-80°C adecuadas para agua caliente sanitaria (ACS) y calefacción. En latitudes mediterráneas, la radiación solar incidente al mediodía en verano puede alcanzar 800-1200 W/m². Con instalaciones típicas en tejados o azoteas, estos sistemas pueden proporcionar ahorros energéticos del 50-70% en el consumo anual de gas o electricidad para ACS, con periodos de amortización de 5-8 años.</p>
        </div>
        <div className="theory-subsection">
          <h3>Mantas térmicas emergencia supervivencia hipotermia prevención</h3>
          <p>Las mantas térmicas de emergencia, también conocidas como mantas de supervivencia, son láminas delgadas de poliéster metalizado con aluminio (espesor típico 12-20 μm) que presentan una reflectividad del 90% para radiación infrarroja. Esta propiedad es crucial porque el cuerpo humano en reposo emite aproximadamente 100 W de potencia térmica en forma de radiación infrarroja. Al envolver a una persona con esta manta, la radiación térmica corporal es reflejada de vuelta, reduciendo drásticamente las pérdidas de calor. Además, el material impermeable protege contra viento y lluvia, bloqueando la convección forzada que aceleraría la pérdida de calor.</p>
          <p>Su utilidad médica es extraordinaria en situaciones de emergencia. En casos de shock o hipotermia (temperatura corporal inferior a 35°C), mantener el calor metabólico residual es vital para la supervivencia. La manta térmica, aunque no genera calor activamente, actúa como una barrera altamente efectiva contra los tres mecanismos de transferencia de calor: reflexiona la radiación, bloquea la convección y, al crear una capa de aire atrapado, reduce la conducción. Su carácter compacto (50-100 g plegado en 10×15 cm) las hace ideales para kits de emergencia en montaña, vehículos o botiquines de primeros auxilios.</p>
          <p>Estas mantas son de uso rutinario por bomberos, equipos de rescate, alpinistas y organizadores de maratones y deportes extremos, especialmente cuando existe riesgo de exposición a temperaturas bajas y viento. Con un coste de apenas 1-3 € por unidad, su efectividad para prevenir hipotermia en entornos hostiles las convierte en dispositivos salvavidas de alto valor añadido, demostrando cómo principios simples de termodinámica aplicados ingeniosamente pueden tener un impacto real en situaciones críticas.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>1807 Fourier ecuación conducción calor teoría analítica</h3>
          <p>Jean-Baptiste Joseph Fourier presentó sus investigaciones iniciales sobre la propagación del calor en 1807, aunque su obra magna "Théorie analytique de la chaleur" no se publicaría hasta 1822. En ella, Fourier formuló la ecuación diferencial que gobierna la conducción térmica: ∂T/∂t = α∇²T, donde α es la difusividad térmica (α = λ/(ρcₚ)), que combina la conductividad térmica, densidad y capacidad calorífica del material. Esta ecuación describe cómo evoluciona la distribución de temperatura en un sólido con el tiempo, permitiendo predecir cuándo y dónde se alcanzarán ciertas temperaturas.</p>
          <p>Para resolver esta ecuación diferencial parcial con diversas condiciones de contorno, Fourier desarrolló el método de series de Fourier, una técnica matemática que permite descomponer cualquier función periódica en una suma de senos y cosenos. Este método, aparentemente específico para problemas de calor, resultó ser revolucionario y de aplicación universal: hoy se utiliza en análisis de vibraciones, propagación de ondas, mecánica cuántica, procesamiento digital de señales, compresión de audio (MP3) y video, entre innumerables aplicaciones.</p>
          <p>El trabajo de Fourier estableció los fundamentos matemáticos de la ingeniería térmica moderna. Su ecuación permite diseñar sistemas de intercambio de calor, calcular el espesor óptimo de aislamientos térmicos, predecir la temperatura en procesos industriales y optimizar la climatización de edificios. Sin su contribución, la termodinámica aplicada carecería de base cuantitativa rigurosa.</p>
        </div>
        <div className="theory-subsection">
          <h3>1860 Tyndall absorción radiación infrarroja gases</h3>
          <p>En la década de 1860, el físico irlandés John Tyndall realizó una serie de experimentos pioneros que revolucionarían nuestra comprensión de la atmósfera terrestre. Utilizando un aparato experimental compuesto por un tubo relleno de diferentes gases, una fuente de radiación térmica y un detector sensible, Tyndall midió qué fracción de la radiación infrarroja era absorbida por cada gas. Descubrió que gases como el vapor de agua, el dióxido de carbono (CO₂) y el metano absorbían fuertemente la radiación infrarroja en longitudes de onda de 5-20 μm, precisamente el rango en el que la Tierra emite su radiación térmica hacia el espacio.</p>
          <p>Este hallazgo tenía profundas implicaciones: mientras que el nitrógeno y el oxígeno (que componen el 99% de la atmósfera) son prácticamente transparentes al infrarrojo, estos gases traza actúan como una "manta térmica" atmosférica, absorbiendo y reemitiendo la radiación infrarroja en todas direcciones, incluida de vuelta hacia la superficie. Este es el mecanismo físico fundamental del efecto invernadero natural, sin el cual la Tierra tendría una temperatura media de -18°C en lugar de los actuales +15°C.</p>
          <p>Las mediciones de Tyndall fueron precursoras de la ciencia del cambio climático. Desde la era preindustrial (280 ppm de CO₂) hasta 2024 (420 ppm), la concentración de CO₂ ha aumentado un 50%, intensificando el efecto invernadero y contribuyendo a un calentamiento global de aproximadamente +1.2°C en los últimos 150 años. El trabajo de Tyndall estableció las bases físicas de la climatología moderna y de nuestra comprensión de cómo la actividad humana puede alterar el balance energético del planeta.</p>
        </div>
        <div className="theory-subsection">
          <h3>1900 Planck ley radiación cuerpo negro cuantización</h3>
          <p>A finales del siglo XIX, la física clásica enfrentaba un problema desconcertante conocido como la "catástrofe ultravioleta": las teorías vigentes predecían que un cuerpo caliente debería emitir cantidades infinitas de energía en longitudes de onda cortas (ultravioleta), algo que obviamente no ocurría en la realidad. En 1900, Max Planck resolvió este problema mediante una hipótesis revolucionaria: la energía no se emite de forma continua, sino en "paquetes" discretos o cuantos, con E = hν, donde h = 6.626×10⁻³⁴ J·s es la constante de Planck y ν la frecuencia de la radiación. Con esta cuantización, Planck derivó su famosa ley para la distribución espectral de la radiación: I(λ,T) = 2hc²/λ⁵(e^(hc/λkT)-1)⁻¹, que describe perfectamente cómo un cuerpo negro emite radiación a diferentes longitudes de onda en función de su temperatura.</p>
          <p>Un "cuerpo negro" es un objeto ideal que absorbe toda la radiación incidente (emisividad ε = 1) y, en equilibrio térmico, emite radiación de forma perfecta según su temperatura. Aunque ningún objeto real es un cuerpo negro perfecto, muchos se aproximan: hornos con cavidades pequeñas, estrellas, y la radiación cósmica de fondo del universo. La ley de Planck se integra sobre todas las longitudes de onda para obtener la ley de Stefan-Boltzmann: P = σAT⁴, donde σ = 5.67×10⁻⁸ W/(m²·K⁴) y que indica que la potencia radiada es proporcional a la cuarta potencia de la temperatura absoluta.</p>
          <p>La hipótesis de cuantización de Planck, inicialmente considerada un truco matemático, resultó ser el punto de partida de la revolución cuántica: Einstein la aplicó al efecto fotoeléctrico (1905), Bohr al modelo atómico (1913), y eventualmente condujo al desarrollo completo de la mecánica cuántica en los años 1920s. Hoy, la ley de radiación de Planck tiene aplicaciones prácticas en astrofísica (determinación de temperaturas estelares), termografía infrarroja, diseño de fuentes de luz y pirometría óptica industrial.</p>
        </div>
        <div className="theory-subsection">
          <h3>1950s-60s tecnología aeroespacial protección térmica reentrada</h3>
          <p>El desarrollo de vehículos espaciales tripulados en las décadas de 1950 y 1960 planteó uno de los desafíos térmicos más extremos jamás enfrentados por la ingeniería. Las cápsulas Mercury, Gemini y Apollo debían sobrevivir a la reentrada atmosférica desde órbita, viajando a aproximadamente 11 km/s (casi 40,000 km/h). A estas velocidades hipersónicas, la compresión y fricción con el aire generan temperaturas superiores a 3000°C en la superficie del vehículo, suficientes para vaporizar instantáneamente la mayoría de los materiales conocidos.</p>
          <p>La solución adoptada fue el escudo térmico ablativo, fabricado con resina fenólica reforzada con fibra de vidrio. Este material "sacrificial" no intenta resistir el calor, sino que sublima y vaporiza gradualmente, absorbing enormes cantidades de energía en el proceso de cambio de fase (calor latente de sublimación). La capa de gas ablativo además crea una barrera protectora entre el plasma hipersónico exterior (Mach 25-30) y la estructura interna, reduciendo la convección forzada. Los flujos térmicos durante la reentrada pueden alcanzar 10-100 MW/m², equivalente a concentrar la potencia de miles de hogares en un metro cuadrado.</p>
          <p>El transbordador espacial (Space Shuttle) representó un avance posterior con su sistema de protección térmica reutilizable: miles de tejas cerámicas de sílice borosilicato, materiales compuestos de carbono-carbono en zonas críticas, y mantas térmicas flexibles. Estos desarrollos impulsaron avances en ciencia de materiales que hoy benefician aplicaciones terrestres. Misiones actuales como Mars InSight o Parker Solar Probe continúan este legado, protegiendo instrumentos en ambientes planetarios o solares extremos mediante ingeniería térmica de vanguardia.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>Iglú hielo hogar cálido conductividad térmica nieve</h3>
          <p>El iglú tradicional de los pueblos inuit del Ártico constituye un ejemplo fascinante de ingeniería térmica intuitiva desarrollada a lo largo de milenios. Construido con bloques de nieve compactada (densidad 300-500 kg/m³), este refugio aprovecha la baja conductividad térmica de la nieve (λ = 0.15-0.25 W/(m·K)), comparable a la de algunos aislantes modernos. La clave está en que la nieve contiene numerosas bolsas de aire atrapado, y el aire es un excelente aislante térmico (λ = 0.024 W/(m·K)). Gracias a este aislamiento natural, el interior de un iglú puede mantenerse entre -5 y +5°C, mientras que el exterior alcanza -40°C, una diferencia asombrosa de 40-45°C.</p>
          <p>Esta temperatura interior relativamente cálida se logra con fuentes de calor modestas: el calor corporal de los ocupantes (aproximadamente 100 W por persona en reposo) y pequeñas lámparas de aceite de foca (200-300 W). La forma hemisférica o de cúpula del iglú no es casual: esta geometría proporciona la máxima resistencia estructural con el mínimo de material, pero además optimiza la relación superficie/volumen, minimizando las pérdidas de calor por conducción a través de las paredes.</p>
          <p>Otro detalle ingenioso es el túnel de entrada, situado por debajo del nivel del piso principal. Este diseño aprovecha la estratificación térmica: el aire frío y denso del exterior queda atrapado en el túnel bajo, mientras que el aire caliente y ligero del interior permanece en la cúpula superior. Además, el túnel bloquea el viento, eliminando las pérdidas por convección forzada. El iglú representa un ejemplo excepcional de cómo el conocimiento empírico de principios termodinámicos puede crear soluciones de supervivencia efectivas en ambientes extremos, adelantándose siglos a la arquitectura bioclimática moderna.</p>
        </div>
        <div className="theory-subsection">
          <h3>Termografía infrarroja detección fugas energéticas edificios</h3>
          <p>Las cámaras termográficas, popularizadas por marcas como FLIR, han revolucionado la forma en que visualizamos la temperatura. Estos dispositivos detectan radiación infrarroja en el rango de 7.5-14 μm, longitudes de onda que corresponden a la emisión térmica de objetos a temperaturas ambiente (15-35°C). Con resoluciones que van desde 320×240 hasta 1024×768 píxeles y sensibilidades de hasta 0.05°C, estas cámaras pueden detectar diferencias de temperatura minúsculas. La imagen resultante se presenta en falso color: típicamente azul para zonas frías y rojo para zonas calientes, permitiendo una visualización intuitiva de la distribución de temperatura superficial.</p>
          <p>En el contexto de la eficiencia energética de edificios, la termografía infrarroja es una herramienta invaluable para auditorías térmicas. Permite identificar puentes térmicos, fugas de aislamiento, defectos en ventanas y puertas, y juntas constructivas mal selladas que serían invisibles al ojo humano. Una pared bien aislada aparecerá uniforme en temperatura, mientras que un puente térmico se revelará como una mancha claramente diferenciada. Detectar y corregir estas anomalías puede reducir el consumo energético de calefacción y climatización en un 20-40%, con ahorros económicos significativos a largo plazo.</p>
          <p>Las aplicaciones de la termografía se extienden mucho más allá: los bomberos la usan para localizar personas en edificios llenos de humo o detectar focos de calor ocultos en incendios; en medicina, permite diagnosticar inflamaciones y problemas circulatorios visualizando diferencias de temperatura en tejidos; en industria, el mantenimiento predictivo utiliza cámaras térmicas para detectar sobrecalentamientos en equipos eléctricos (conexiones defectuosas, fusibles sobrecargados) y mecánicos (rodamientos dañados, fricción excesiva) antes de que ocurran fallos catastróficos. Originalmente desarrollada para aplicaciones militares de visión nocturna, hoy la termografía infrarroja es una tecnología civil versátil y accesible.</p>
        </div>
        <div className="theory-subsection">
          <h3>Pingüinos emperador termorregulación Antártida -60°C supervivencia</h3>
          <p>Los pingüinos emperador (Aptenodytes forsteri) enfrentan probablemente las condiciones ambientales más extremas soportadas por cualquier vertebrado durante su reproducción. Durante el invierno austral antártico, en oscuridad total las 24 horas, las temperaturas descienden hasta -60°C, con vientos que pueden superar los 200 km/h, creando sensaciones térmicas cercanas a -100°C. En estas condiciones inimaginables, los machos incuban un único huevo durante 64 días consecutivos sin alimentarse, dependiendo únicamente de sus reservas corporales y de sofisticadas adaptaciones termodinámicas.</p>
          <p>Su primera línea de defensa es un plumaje extraordinariamente denso: aproximadamente 100 plumas por cm², creando múltiples capas superpuestas que atrapan aire en su interior. Este aire inmóvil actúa como un aislante térmico excelente, con una conductividad (λ = 0.025 W/(m·K)) comparable a la fibra de vidrio industrial. Bajo el plumaje, una capa de grasa subcutánea de 2-3 cm de espesor proporciona aislamiento adicional y sirve como reserva energética. Durante el ayuno, su metabolismo puede elevarse a 2-3 veces el nivel basal para generar suficiente calor interno metabólico, un equilibrio delicado entre conservar energía y mantenerse vivo.</p>
          <p>Sin embargo, la adaptación más sorprendente es comportamental: el "huddle" o agrupamiento. Miles de individuos (hasta 5000) se apiñan formando una masa compacta que actúa como un super-organismo térmico. Mediciones muestran que la temperatura en el centro del grupo puede alcanzar +37°C, mientras que en el exterior apenas llega a -20°C. Para evitar que unos pocos sufran todo el frío, los pingüinos rotan gradualmente desde la periferia hacia el centro y viceversa, garantizando equidad térmica. Este agrupamiento minimiza las pérdidas por convección (bloqueando el viento) y por radiación (reduciendo la superficie expuesta). Es una estrategia de supervivencia extraordinaria, producto de millones de años de selección evolutiva en el ambiente más hostil del planeta.</p>
        </div>
        <div className="theory-subsection">
          <h3>Horno microondas radiación 2.45GHz calentamiento dieléctrico agua</h3>
          <p>El horno microondas funciona mediante un principio radicalmente diferente al de los hornos convencionales. En su corazón se encuentra un magnetrón, un tubo de vacío que genera radiación electromagnética a una frecuencia de 2.45 GHz (longitud de onda de 12.2 cm). Esta frecuencia específica fue elegida porque se encuentra en una banda reservada internacionalmente para aplicaciones industriales, científicas y médicas (banda ISM), evitando interferencias con comunicaciones. Más importante aún, esta frecuencia interactúa eficientemente con las moléculas de agua, que son dipolos eléctricos (tienen carga positiva en un extremo y negativa en el otro). El campo electromagnético oscilante hace que estas moléculas intenten reorientarse billones de veces por segundo, generando fricción intermolecular que se manifiesta como calor.</p>
          <p>A diferencia de los hornos convencionales que calientan por conducción desde la superficie hacia el interior, las microondas penetran 2-3 cm en el alimento, depositando energía volumétricamente. Esto acelera drásticamente el proceso: con potencias típicas de 700-1200 W, un microondas puede calentar o cocinar alimentos en 3-10 minutos, comparado con 30-60 minutos de un horno convencional, resultando en un ahorro significativo de tiempo y energía. Sin embargo, la penetración limitada significa que piezas gruesas aún requieren conducción térmica desde las zonas exteriores hacia el centro.</p>
          <p>La historia del microondas es curiosa: fue descubierto accidentalmente en 1945 por Percy Spencer, ingeniero de Raytheon que trabajaba en sistemas de radar. Notó que una barra de chocolate en su bolsillo se había derretido al estar cerca de un magnetrón activo. Experimentando deliberadamente con maíz para palomitas y un huevo (que explotó), verificó el fenómeno. La patente se otorgó en 1946, y el primer horno comercial ("Radarange") apareció en 1947, aunque pesaba 340 kg y medía 1.8 m de altura, destinado a uso industrial. El primer modelo doméstico llegó en 1967. Hoy, aproximadamente el 90% de los hogares en EE.UU. poseen un microondas, una tecnología que transformó permanentemente hábitos culinarios por su rapidez y conveniencia.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>
            <strong>Conducción - transferencia por contacto directo:</strong> Es el mecanismo por el cual el calor se transfiere a través de materiales sólidos mediante colisiones entre átomos y moléculas adyacentes, sin movimiento macroscópico del material. Los metales como cobre, aluminio y hierro tienen conductividad térmica alta, por lo que son eficientes transmitiendo calor. Ejemplos cotidianos incluyen la cuchara que se calienta al remover café, o una sartén que transmite calor desde la placa hasta el alimento en contacto directo con su superficie.
          </li>
          <li>
            <strong>Convección - transferencia por movimiento de fluidos:</strong> Ocurre en líquidos y gases mediante el movimiento macroscópico del fluido: las zonas calientes se expanden, reducen su densidad y ascienden, mientras que las zonas frías, más densas, descienden, estableciendo corrientes térmicas circulatorias. Este mecanismo explica por qué el agua hierve formando burbujas ascendentes, cómo funcionan los radiadores de calefacción (el aire caliente sube desde el radiador y circula por la habitación) y la diferencia entre convección natural (movimiento espontáneo por diferencias de densidad) y forzada (impulsada por ventiladores o bombas).
          </li>
          <li>
            <strong>Radiación - transferencia por ondas electromagnéticas:</strong> A diferencia de conducción y convección, la radiación no requiere medio material, propagándose incluso en el vacío del espacio mediante ondas electromagnéticas en el infrarrojo. Es el mecanismo por el cual el Sol calienta la Tierra a través de 150 millones de km de vacío, y por el que sentimos calor de una fogata o estufa sin estar en contacto directo. Todos los objetos emiten y absorben radiación térmica en función de su temperatura y emisividad superficial, siguiendo la ley de Stefan-Boltzmann (P ∝ T⁴).
          </li>
          <li>
            <strong>Mecanismos simultáneos en la vida cotidiana:</strong> En la mayoría de situaciones reales, los tres mecanismos operan simultáneamente, aunque con importancia relativa diferente. Al cocinar, la conducción transfiere calor desde la sartén al alimento, la convección del aire caliente dentro del horno cocina desde el exterior, y la radiación de las llamas o resistencias eléctricas aporta calor adicional. Esta combinación es más efectiva que cualquier mecanismo individual aislado.
          </li>
          <li>
            <strong>Aplicaciones tecnológicas modernas:</strong> La comprensión de los mecanismos de transferencia de calor ha permitido desarrollar tecnologías esenciales: aislamiento térmico de edificios que minimiza pérdidas por conducción, sistemas de refrigeración electrónica que evacuan eficientemente el calor de procesadores mediante conducción y convección forzada, hornos industriales que operan a temperaturas extremas controlando radiación y conducción, colectores solares térmicos que capturan radiación solar para agua caliente sanitaria, y mantas de supervivencia que reflejan radiación infrarroja corporal. Todas estas aplicaciones buscan eficiencia energética y control preciso de temperatura.
          </li>
          <li>
            <strong>Desarrollo histórico y científico:</strong> El conocimiento actual sobre transferencia de calor es el resultado de contribuciones acumulativas: Fourier estableció las bases matemáticas de la conducción (1807-1822), Tyndall descubrió la absorción de radiación infrarroja por gases atmosféricos con implicaciones climatológicas (1860), Planck resolvió el problema de radiación del cuerpo negro introduciendo la cuantización y fundando la física cuántica (1900), y el desarrollo aeroespacial (1950s-1960s) impulsó materiales avanzados para protección térmica en reentrada. Este conocimiento fundamental sustenta toda la ingeniería térmica moderna.
          </li>
        </ul>
      </div>
    </>
  );
};

export default TransferenciaCalorCotidiana;
