import { Concept, Important, Example } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Gráficas Temperatura-Tiempo",
  descripcion: "Curvas de calentamiento y enfriamiento de sustancias",
  educationLevel: "ESO",
  levels: ['ESO'],
  isTheoryOnly: true
};

const GraficasTemperaturaTiempo = () => {
  return (
    <>
      <Concept 
        title="¿Qué son las gráficas temperatura-tiempo?" 
        color="blue"
        icon="📊"
      >
        <p>
          Las gráficas temperatura-tiempo muestran cómo cambia la temperatura 
          de una sustancia a medida que se le añade o quita calor. Son muy útiles para visualizar 
          los cambios de estado.
        </p>
        <div className="destacado">
          <p>
            💡 Idea clave: En estas gráficas, las zonas horizontales 
            (temperatura constante) representan cambios de estado. Las zonas inclinadas 
            representan calentamiento o enfriamiento sin cambio de estado.
          </p>
        </div>
      </Concept>

      <Concept 
        title="Curva de calentamiento del agua" 
        color="red"
        icon="🔥"
      >
        <p>
          Imagina que calentamos hielo desde -20°C hasta convertirlo en vapor a 120°C. 
          La gráfica tiene 5 zonas distintas:
        </p>

        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <svg viewBox="0 0 600 400" style={{width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto'}}>
            {/* Ejes */}
            <line x1="50" y1="350" x2="550" y2="350" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="350" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
            
            {/* Etiquetas ejes */}
            <text x="300" y="385" textAnchor="middle" fontSize="14" fill="#333">Tiempo (min) →</text>
            <text x="25" y="200" textAnchor="middle" fontSize="14" fill="#333" transform="rotate(-90 25 200)">Temperatura (°C) →</text>
            
            {/* Marcas temperatura */}
            <line x1="45" y1="310" x2="50" y2="310" stroke="#333" strokeWidth="1"/>
            <text x="40" y="315" textAnchor="end" fontSize="12" fill="#333">-20</text>
            
            <line x1="45" y1="230" x2="50" y2="230" stroke="#333" strokeWidth="1"/>
            <text x="40" y="235" textAnchor="end" fontSize="12" fill="#333">0</text>
            
            <line x1="45" y1="70" x2="50" y2="70" stroke="#333" strokeWidth="1"/>
            <text x="40" y="75" textAnchor="end" fontSize="12" fill="#333">100</text>
            
            <line x1="45" y1="50" x2="50" y2="50" stroke="#333" strokeWidth="1"/>
            <text x="40" y="55" textAnchor="end" fontSize="12" fill="#333">120</text>
            
            {/* Curva de calentamiento */}
            {/* Zona 1: Hielo -20 a 0 */}
            <line x1="50" y1="310" x2="120" y2="230" stroke="#2563eb" strokeWidth="3"/>
            <text x="85" y="290" fontSize="11" fill="#2563eb" fontWeight="bold">1</text>
            
            {/* Zona 2: Fusión 0°C */}
            <line x1="120" y1="230" x2="220" y2="230" stroke="#f59e0b" strokeWidth="3"/>
            <text x="170" y="220" fontSize="11" fill="#f59e0b" fontWeight="bold">2</text>
            
            {/* Zona 3: Agua 0 a 100 */}
            <line x1="220" y1="230" x2="320" y2="70" stroke="#2563eb" strokeWidth="3"/>
            <text x="270" y="170" fontSize="11" fill="#2563eb" fontWeight="bold">3</text>
            
            {/* Zona 4: Ebullición 100°C */}
            <line x1="320" y1="70" x2="480" y2="70" stroke="#f59e0b" strokeWidth="3"/>
            <text x="400" y="60" fontSize="11" fill="#f59e0b" fontWeight="bold">4</text>
            
            {/* Zona 5: Vapor 100 a 120 */}
            <line x1="480" y1="70" x2="530" y2="50" stroke="#2563eb" strokeWidth="3"/>
            <text x="505" y="45" fontSize="11" fill="#2563eb" fontWeight="bold">5</text>
            
            {/* Referencias estados */}
            <text x="85" y="325" fontSize="10" fill="#666">HIELO</text>
            <text x="150" y="245" fontSize="10" fill="#666">H+A</text>
            <text x="270" y="190" fontSize="10" fill="#666">AGUA</text>
            <text x="380" y="85" fontSize="10" fill="#666">A+V</text>
            <text x="495" y="35" fontSize="10" fill="#666">VAPOR</text>
          </svg>
          
          <div style={{marginTop: '15px', fontSize: '13px', color: '#666'}}>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
              <span><span style={{color: '#2563eb', fontWeight: 'bold'}}>━━</span> Calentamiento</span>
              <span><span style={{color: '#f59e0b', fontWeight: 'bold'}}>━━</span> Cambio de estado</span>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3>Zona 1: Calentamiento del hielo (-20°C → 0°C)</h3>
          <ul>
            <li>Estado: Sólido (hielo)</li>
            <li>Temperatura: Aumenta de -20°C a 0°C</li>
            <li>Pendiente: Inclinada hacia arriba</li>
            <li>Qué ocurre: Las moléculas de hielo vibran más rápido</li>
          </ul>

          <h3>Zona 2: Fusión (0°C constante)</h3>
          <ul>
            <li>Estado: Sólido + Líquido (mezcla)</li>
            <li>Temperatura: Constante en 0°C</li>
            <li>Pendiente: Horizontal (plana)</li>
            <li>Qué ocurre: El hielo se derrite, coexisten hielo y agua</li>
          </ul>

          <h3>Zona 3: Calentamiento del agua (0°C → 100°C)</h3>
          <ul>
            <li>Estado: Líquido (agua)</li>
            <li>Temperatura: Aumenta de 0°C a 100°C</li>
            <li>Pendiente: Inclinada hacia arriba</li>
            <li>Qué ocurre: Las moléculas de agua se mueven más rápido</li>
          </ul>

          <h3>Zona 4: Ebullición (100°C constante)</h3>
          <ul>
            <li>Estado: Líquido + Gas (mezcla)</li>
            <li>Temperatura: Constante en 100°C</li>
            <li>Pendiente: Horizontal (plana)</li>
            <li>Qué ocurre: El agua hierve, coexisten agua y vapor</li>
          </ul>

          <h3>Zona 5: Calentamiento del vapor (100°C → 120°C)</h3>
          <ul>
            <li>Estado: Gas (vapor)</li>
            <li>Temperatura: Aumenta de 100°C a 120°C</li>
            <li>Pendiente: Inclinada hacia arriba</li>
            <li>Qué ocurre: Las moléculas de vapor se mueven aún más rápido</li>
          </ul>
        </div>

        <Important>
          <p>
            ⚠️ Importante: Las zonas horizontales (2 y 4) son las más largas 
            porque se necesita mucha energía para cambiar de estado. La zona 4 (ebullición) 
            es especialmente larga porque vaporizar requiere mucha más energía que fundir.
          </p>
        </Important>
      </Concept>

      <Concept 
        title="Curva de enfriamiento" 
        color="blue"
        icon="❄️"
      >
        <p>
          La curva de enfriamiento es el proceso inverso: vapor → agua → hielo. 
          La gráfica es similar pero al revés (de arriba abajo).
        </p>

        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <svg viewBox="0 0 600 400" style={{width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto'}}>
            {/* Ejes */}
            <line x1="50" y1="350" x2="550" y2="350" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="350" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
            
            {/* Etiquetas ejes */}
            <text x="300" y="385" textAnchor="middle" fontSize="14" fill="#333">Tiempo (min) →</text>
            <text x="25" y="200" textAnchor="middle" fontSize="14" fill="#333" transform="rotate(-90 25 200)">Temperatura (°C) →</text>
            
            {/* Marcas temperatura */}
            <line x1="45" y1="310" x2="50" y2="310" stroke="#333" strokeWidth="1"/>
            <text x="40" y="315" textAnchor="end" fontSize="12" fill="#333">-20</text>
            
            <line x1="45" y1="230" x2="50" y2="230" stroke="#333" strokeWidth="1"/>
            <text x="40" y="235" textAnchor="end" fontSize="12" fill="#333">0</text>
            
            <line x1="45" y1="70" x2="50" y2="70" stroke="#333" strokeWidth="1"/>
            <text x="40" y="75" textAnchor="end" fontSize="12" fill="#333">100</text>
            
            <line x1="45" y1="50" x2="50" y2="50" stroke="#333" strokeWidth="1"/>
            <text x="40" y="55" textAnchor="end" fontSize="12" fill="#333">120</text>
            
            {/* Curva de enfriamiento (inversa) */}
            {/* Zona 1: Vapor 120 a 100 */}
            <line x1="50" y1="50" x2="100" y2="70" stroke="#dc2626" strokeWidth="3"/>
            <text x="75" y="45" fontSize="11" fill="#dc2626" fontWeight="bold">1</text>
            
            {/* Zona 2: Condensación 100°C */}
            <line x1="100" y1="70" x2="260" y2="70" stroke="#7c3aed" strokeWidth="3"/>
            <text x="180" y="60" fontSize="11" fill="#7c3aed" fontWeight="bold">2</text>
            
            {/* Zona 3: Agua 100 a 0 */}
            <line x1="260" y1="70" x2="360" y2="230" stroke="#dc2626" strokeWidth="3"/>
            <text x="310" y="170" fontSize="11" fill="#dc2626" fontWeight="bold">3</text>
            
            {/* Zona 4: Solidificación 0°C */}
            <line x1="360" y1="230" x2="460" y2="230" stroke="#7c3aed" strokeWidth="3"/>
            <text x="410" y="220" fontSize="11" fill="#7c3aed" fontWeight="bold">4</text>
            
            {/* Zona 5: Hielo 0 a -20 */}
            <line x1="460" y1="230" x2="530" y2="310" stroke="#dc2626" strokeWidth="3"/>
            <text x="495" y="290" fontSize="11" fill="#dc2626" fontWeight="bold">5</text>
            
            {/* Referencias estados */}
            <text x="75" y="35" fontSize="10" fill="#666">VAPOR</text>
            <text x="160" y="85" fontSize="10" fill="#666">V+A</text>
            <text x="310" y="190" fontSize="10" fill="#666">AGUA</text>
            <text x="390" y="245" fontSize="10" fill="#666">A+H</text>
            <text x="485" y="325" fontSize="10" fill="#666">HIELO</text>
          </svg>
          
          <div style={{marginTop: '15px', fontSize: '13px', color: '#666'}}>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
              <span><span style={{color: '#dc2626', fontWeight: 'bold'}}>━━</span> Enfriamiento</span>
              <span><span style={{color: '#7c3aed', fontWeight: 'bold'}}>━━</span> Cambio de estado</span>
            </div>
          </div>
        </div>

        <div className="info-box">
          <h3>Proceso de enfriamiento</h3>
          <ol>
            <li>Enfriamiento del vapor: 120°C → 100°C (pendiente descendente)</li>
            <li>Condensación: 100°C constante (horizontal) - vapor → agua</li>
            <li>Enfriamiento del agua: 100°C → 0°C (pendiente descendente)</li>
            <li>Solidificación: 0°C constante (horizontal) - agua → hielo</li>
            <li>Enfriamiento del hielo: 0°C → -20°C (pendiente descendente)</li>
          </ol>
        </div>

        <p>Ejemplos cotidianos:</p>
        <ul>
          <li>Café enfriándose: Sigue una curva de enfriamiento desde ~90°C hasta temperatura ambiente</li>
          <li>Hacer cubitos de hielo: Agua a 20°C → 0°C → solidificación → hielo a -18°C</li>
          <li>Sopa caliente: Se enfría siguiendo una curva exponencial hasta temperatura ambiente</li>
        </ul>
      </Concept>

      <Concept 
        title="¿Por qué las zonas horizontales son más largas?" 
        color="orange"
        icon="⏱️"
      >
        <p>
          En las gráficas, las zonas de cambio de estado (horizontales) suelen ser más largas 
          que las de calentamiento. Esto se debe a que:
        </p>

        <ul>
          <li>
            Cambiar de estado requiere mucha energía: Hay que romper todos 
            los enlaces entre moléculas
          </li>
          <li>
            Calentar requiere menos energía: Solo hay que hacer que las 
            moléculas se muevan más rápido
          </li>
        </ul>

        <div className="destacado">
          <p>
            Ejemplo numérico: Para calentar 1 kg de agua de 0°C a 100°C 
            se necesitan 420 kJ. Pero para vaporizar ese mismo kg de agua a 100°C se necesitan 
            2257 kJ (¡más de 5 veces más energía!).
          </p>
        </div>
      </Concept>

      <Example 
        title="Ejemplo: Hervir agua para pasta"
        problem="Pones una olla con 2 litros de agua a 20°C en el fuego. ¿Qué ocurre con la temperatura?"
        solution={
          <div style={{color: '#1f2937'}}>
            <p>Proceso completo:</p>
            <ol>
              <li>
                Fase 1 - Calentamiento (20°C → 100°C):
                <p>El agua absorbe calor y su temperatura sube gradualmente. Tarda unos 10-15 minutos.</p>
              </li>
              <li>
                Fase 2 - Ebullición (100°C constante):
                <p>
                  El agua empieza a hervir. Aunque sigas calentando, la temperatura se mantiene 
                  en 100°C. El calor se usa para convertir agua líquida en vapor. Verás burbujas 
                  subiendo desde el fondo.
                </p>
              </li>
              <li>
                Observación:
                <p>
                  Si sigues calentando indefinidamente, toda el agua se evaporará, pero mientras 
                  haya agua líquida, la temperatura no superará los 100°C (a nivel del mar).
                </p>
              </li>
            </ol>

            <p>Gráfica:</p>
            <p>
              La gráfica mostraría una línea inclinada de 20°C a 100°C, y luego una línea 
              horizontal en 100°C mientras el agua hierve.
            </p>
          </div>
        }
      />

      <Concept 
        title="Comparación de sustancias diferentes" 
        color="green"
        icon="⚗️"
      >
        <p>
          Cada sustancia tiene sus propias temperaturas de fusión y ebullición. 
          Esto se ve claramente comparando sus gráficas:
        </p>

        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <svg viewBox="0 0 600 350" style={{width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto'}}>
            {/* Ejes */}
            <line x1="50" y1="300" x2="550" y2="300" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="300" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
            
            {/* Etiquetas ejes */}
            <text x="300" y="330" textAnchor="middle" fontSize="14" fill="#333">Tiempo →</text>
            <text x="25" y="165" textAnchor="middle" fontSize="14" fill="#333" transform="rotate(-90 25 165)">Temperatura (°C)</text>
            
            {/* Marcas temperatura */}
            <line x1="45" y1="280" x2="50" y2="280" stroke="#333" strokeWidth="1"/>
            <text x="40" y="285" textAnchor="end" fontSize="11" fill="#333">0</text>
            
            <line x1="45" y1="180" x2="50" y2="180" stroke="#333" strokeWidth="1"/>
            <text x="40" y="185" textAnchor="end" fontSize="11" fill="#333">100</text>
            
            <line x1="45" y1="80" x2="50" y2="80" stroke="#333" strokeWidth="1"/>
            <text x="40" y="85" textAnchor="end" fontSize="11" fill="#333">200</text>
            
            {/* AGUA (azul) */}
            <polyline points="70,280 130,280 200,180 260,180 380,100" 
              fill="none" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="390" y="105" fontSize="11" fill="#2563eb" fontWeight="bold">Agua (0°C, 100°C)</text>
            
            {/* ALCOHOL (verde) */}
            <polyline points="70,230 120,230 170,160 210,160 300,100" 
              fill="none" stroke="#10b981" strokeWidth="2.5"/>
            <text x="310" y="90" fontSize="11" fill="#10b981" fontWeight="bold">Alcohol (-114°C, 78°C)</text>
            
            {/* HIERRO (rojo) */}
            <polyline points="70,50 100,50 140,45 170,45 210,40" 
              fill="none" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="220" y="45" fontSize="11" fill="#dc2626" fontWeight="bold">Hierro (1538°C, 2862°C)</text>
            
            {/* Anotaciones zonas agua */}
            <text x="100" y="270" fontSize="9" fill="#2563eb">Fusión</text>
            <text x="230" y="170" fontSize="9" fill="#2563eb">Ebullición</text>
            
            {/* Líneas punteadas referencia */}
            <line x1="130" y1="280" x2="130" y2="305" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2"/>
            <text x="130" y="320" textAnchor="middle" fontSize="9" fill="#2563eb">0°C</text>
            
            <line x1="260" y1="180" x2="260" y2="305" stroke="#2563eb" strokeWidth="1" strokeDasharray="2,2"/>
            <text x="260" y="320" textAnchor="middle" fontSize="9" fill="#2563eb">100°C</text>
          </svg>
          
          <div style={{marginTop: '15px', fontSize: '12px', color: '#666', textAlign: 'center'}}>
            <p><strong>Observa:</strong> Las zonas horizontales (cambios de estado) están a diferentes temperaturas según la sustancia</p>
          </div>
        </div>

        <table style={{width: '100%', borderCollapse: 'collapse', margin: '1em 0'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd', background: '#f8f9fa'}}>
              <th style={{padding: '0.5em', textAlign: 'left'}}>Sustancia</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Punto Fusión</th>
              <th style={{padding: '0.5em', textAlign: 'center'}}>Punto Ebullición</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5em'}}>Agua</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>0°C</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>100°C</td>
            </tr>
            <tr style={{background: '#f8f9fa'}}>
              <td style={{padding: '0.5em'}}>Alcohol etílico</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>-114°C</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>78°C</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Mercurio</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>-39°C</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>357°C</td>
            </tr>
            <tr style={{background: '#f8f9fa'}}>
              <td style={{padding: '0.5em'}}>Plomo</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>327°C</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>1749°C</td>
            </tr>
            <tr>
              <td style={{padding: '0.5em'}}>Hierro</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>1538°C</td>
              <td style={{padding: '0.5em', textAlign: 'center'}}>2862°C</td>
            </tr>
          </tbody>
        </table>
      </Concept>

      <Concept 
        title="Factores que afectan las gráficas" 
        color="purple"
        icon="🔧"
      >
        <p>1. Presión atmosférica</p>
        <ul>
          <li>A mayor altitud, menor presión → el agua hierve a menos de 100°C</li>
          <li>En el Everest (8848 m), el agua hierve a ~70°C</li>
          <li>En una olla a presión, el agua hierve a ~120°C</li>
        </ul>

        <p>2. Pureza de la sustancia</p>
        <ul>
          <li>Agua pura: punto de fusión exacto en 0°C</li>
          <li>Agua con sal: punto de fusión más bajo (~-2°C)</li>
          <li>Agua con sal: punto de ebullición más alto (~102°C)</li>
        </ul>

        <p>3. Cantidad de sustancia</p>
        <ul>
          <li>Más masa → zonas horizontales más largas (tarda más en cambiar de estado)</li>
          <li>Menos masa → cambios de estado más rápidos</li>
        </ul>
      </Concept>

      <Concept 
        title="Aplicaciones prácticas" 
        color="green"
        icon="🏠"
      >
        <ul>
          <li>
            Cocina: Entender por qué el agua no se calienta más de 100°C 
            aunque subas el fuego
          </li>
          <li>
            Congelador: Saber cuánto tarda en congelarse el agua (zona horizontal larga)
          </li>
          <li>
            Climatización: Diseñar sistemas de calefacción y refrigeración eficientes
          </li>
          <li>
            Industria: Controlar procesos de fundición, destilación y cristalización
          </li>
          <li>
            Meteorología: Predecir formación de hielo, nieve y lluvia
          </li>
        </ul>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>Metalurgia: Tratamientos térmicos del acero mediante curvas TTT</h3>
          <p>
            Las curvas TTT (Transformación-Temperatura-Tiempo) son diagramas fundamentales para el control de la microestructura del acero durante tratamientos térmicos. El proceso comienza con austenización: calentamiento del acero a 850-900°C hasta obtener una estructura austenítica uniforme de grano fino. Esta fase es crítica para el tratamiento posterior.
          </p>
          <p>
            El temple consiste en un enfriamiento extremadamente rápido (200-300°C/s) mediante inmersión en aceite o agua. Este enfriamiento tan rápido "congela" la estructura austenítica, transformándola en martensita: una estructura cristalina tetragonal extremadamente dura pero frágil, con durezas de HRC 60-65 en la escala Rockwell. La velocidad de enfriamiento es crítica y debe seguirse mediante gráficas temperatura-tiempo para evitar transformaciones intermedias no deseadas.
          </p>
          <p>
            El revenido posterior, a temperaturas de 150-650°C, reduce la fragilidad excesiva de la martensita, aumentando la tenacidad y ajustando las propiedades mecánicas según la aplicación específica. Las gráficas temperatura-tiempo son críticas en la industria automotriz, fabricación de herramientas de corte y componentes estructurales que requieren alta resistencia mecánica controlada con precisión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Análisis térmico DSC: Caracterización de polímeros y transiciones</h3>
          <p>
            La calorimetría diferencial de barrido (DSC, Differential Scanning Calorimetry) es una técnica analítica que mide el flujo de calor entre una muestra y una referencia mientras ambas se someten a una rampa de temperatura controlada, típicamente 10°C/min. El instrumento registra gráficas que revelan transiciones térmicas fundamentales de los materiales.
          </p>
          <p>
            Las curvas endotérmicas (absorción de calor) y exotérmicas (liberación de calor) revelan información crucial: la temperatura de transición vítrea (Tg) donde las cadenas poliméricas adquieren movilidad, la fusión cristalina (Tm) con picos que permiten calcular la entalpía de fusión y el porcentaje de cristalinidad, y la temperatura de descomposición térmica que indica la estabilidad del material.
          </p>
          <p>
            Esta técnica es fundamental en la caracterización de plásticos: PET con fusión a 250-260°C, polietileno a 130°C, y numerosos otros polímeros. Las aplicaciones abarcan la industria de envases (optimización de propiedades de barrera), automoción (selección de materiales resistentes a temperatura), y biomedicina (desarrollo de implantes y sistemas de liberación controlada de fármacos).
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Pasteurización de leche: Control mediante curvas de calentamiento</h3>
          <p>
            El proceso HTST (High Temperature Short Time) de pasteurización de leche a 72°C durante 15 segundos es un ejemplo perfecto de control mediante gráficas temperatura-tiempo precisas. Este tratamiento térmico elimina patógenos peligrosos como Listeria y Salmonella mientras conserva nutrientes esenciales y vitaminas que se degradarían con tratamientos más agresivos.
          </p>
          <p>
            La rampa de calentamiento debe ser rápida: 2-3°C/s mediante intercambiadores de calor de placas de acero inoxidable que maximizan la transferencia térmica. La meseta isotérmica a 72°C debe mantenerse exactamente durante 15 segundos: tiempo suficiente para la inactivación microbiana pero minimizando la coagulación de proteínas. La inactivación de la enzima fosfatasa alcalina es el indicador bioquímico de eficacia del proceso.
          </p>
          <p>
            El enfriamiento posterior debe ser igualmente rápido, bajando a 4°C mediante un sistema regenerativo que recupera aproximadamente el 90% de la energía térmica, maximizando la eficiencia energética. La monitorización continua con registradores de temperatura proporciona trazabilidad completa, esencial para la seguridad alimentaria y cumplimiento de normativas sanitarias estrictas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Cromatografía de gases: Separación mediante programación térmica</h3>
          <p>
            La cromatografía de gases (GC) utiliza programas de temperatura del horno con rampas controladas de 50-300°C a velocidades de 5-20°C/min para la elución de componentes de una mezcla. Cada sustancia tiene un tiempo de retención característico que depende de la temperatura, permitiendo la separación y análisis de compuestos volátiles complejos.
          </p>
          <p>
            El cromatograma resultante es esencialmente una gráfica con picos a temperaturas específicas que identifican sustancias, mientras que el área bajo cada pico permite la cuantificación de concentraciones. Esta técnica es fundamental en análisis de alimentos (pesticidas, contaminantes), fragancias y perfumería (perfiles aromáticos), contaminantes ambientales (VOCs), y análisis forense de drogas y toxinas.
          </p>
          <p>
            Las columnas capilares modernas de sílice fundida (30 m de longitud, 0.25 mm de diámetro) con fases estacionarias selectivas permiten separaciones extraordinarias. Los detectores FID (Flame Ionization Detector) ofrecen sensibilidad en el rango de partes por billón (ppb), permitiendo la resolución de componentes traza en mezclas extremadamente complejas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Climatología: Registro de temperaturas y predicción meteorológica</h3>
          <p>
            Las estaciones meteorológicas equipadas con termógrafos digitales registran la temperatura ambiente de manera continua con intervalos de 10-60 minutos y resolución de 0.1°C. Las gráficas diarias revelan el ciclo térmico natural: máxima temperatura entre las 14-16h (después del mediodía solar) y mínima al amanecer (6-8h). La amplitud térmica (diferencia entre máxima y mínima) es un indicador clave que distingue climas continentales (alta amplitud) de marítimos (baja amplitud).
          </p>
          <p>
            Los datos históricos acumulados en series temporales de 30-100 años permiten el análisis de tendencias climáticas a largo plazo. Los registros muestran un calentamiento global de aproximadamente +1.1°C entre el periodo preindustrial (1850) y la actualidad (2020), una tendencia que se acelera en décadas recientes y que tiene profundas implicaciones para los ecosistemas y sociedades humanas.
          </p>
          <p>
            Los modelos de predicción meteorológica como GFS (Global Forecast System) y ECMWF (European Centre for Medium-Range Weather Forecasts) utilizan simulación numérica de ecuaciones termodinámicas de la atmósfera para generar pronósticos de 7-15 días con anticipación razonable. Estos modelos permiten la anticipación de eventos extremos como olas de calor o heladas, información crítica para agricultura, turismo, gestión de recursos hídricos y protección civil.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        <div className="theory-subsection">
          <h3>1760s: Joseph Black descubre el calor latente de fusión</h3>
          <p>
            Joseph Black, profesor de la Universidad de Glasgow, realizó experimentos cuantitativos revolucionarios midiendo cuidadosamente la temperatura de mezclas de hielo y agua caliente. Observó un fenómeno desconcertante: la temperatura permanecía constante a 0°C durante un periodo prolongado mientras el hielo se fundía, a pesar de que se continuaba aplicando calor. El hielo absorbía calor sin cambiar su temperatura.
          </p>
          <p>
            Este descubrimiento llevó a Black a formular el concepto revolucionario de "calor latente" (del latín "latens", oculto): energía que rompe los enlaces moleculares durante transiciones de fase sin elevar la agitación térmica (temperatura). Utilizando calorimetría precisa con balanzas y termómetros de mercurio con sensibilidad de ±0.1°C, Black estableció la diferencia fundamental entre calor específico (cambio de temperatura) y calor latente (cambio de fase).
          </p>
          <p>
            Este trabajo sentó las bases de la termodinámica moderna y proporcionó la primera interpretación cuantitativa correcta de las mesetas horizontales en las gráficas temperatura-tiempo, explicando por qué los cambios de estado ocurren a temperatura constante mientras se absorbe o libera energía.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>1840s: James Joule y el equivalente mecánico del calor</h3>
          <p>
            James Prescott Joule realizó experimentos meticulosos donde pesas en caída hacían rotar paletas sumergidas en agua, disipando energía mecánica por fricción. Registrando gráficas temperatura-tiempo con termómetros de extraordinaria precisión (0.005°F), observó que el incremento de temperatura era perfectamente proporcional a la energía mecánica disipada.
          </p>
          <p>
            Las gráficas temperatura-tiempo resultantes eran lineales, demostrando una relación cuantitativa directa: aproximadamente 4.184 julios de trabajo mecánico producían el calor necesario para elevar 1 gramo de agua en 1°C (1 caloría). Este "equivalente mecánico del calor" fue reproducido consistentemente durante 40 años de investigación obsesiva.
          </p>
          <p>
            Este trabajo refutó definitivamente la teoría del calórico (calor como sustancia material) y demostró que el calor es una forma de energía. Estableció el principio de conservación de energía (Primera Ley de la Termodinámica) y unificó la mecánica clásica con la termodinámica, transformando fundamentalmente nuestra comprensión de la naturaleza del calor.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>1900s: Tammann y los diagramas de transformación en metalurgia</h3>
          <p>
            Gustav Tammann fue pionero en el análisis térmico sistemático de aleaciones metálicas, desarrollando curvas de enfriamiento que registraban temperatura versus tiempo durante la solidificación. Sus diagramas temperatura-tiempo revelaron transformaciones de fase complejas: reacciones eutécticas (mezclas que solidifican a temperatura constante menor que los componentes puros) y peritécticas (reacciones entre sólido y líquido).
          </p>
          <p>
            Tammann identificó puntos críticos en las curvas: temperaturas de transición para composiciones específicas que correspondían a cambios en la estructura cristalina. Desarrolló la metalografía microscópica, correlacionando las gráficas temperatura-tiempo con la estructura cristalina observable y las propiedades mecánicas resultantes.
          </p>
          <p>
            Este trabajo tuvo aplicación industrial inmediata en la fundición de aceros y aleaciones de cobre y aluminio, permitiendo la optimización de procesos de manufactura para producir componentes metálicos con resistencia mecánica controlada y predecible. Los diagramas de Tammann son precursores directos de las modernas curvas TTT utilizadas en tratamientos térmicos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>1960s-70s: Automatización del registro térmico e instrumentación digital</h3>
          <p>
            Las décadas de 1960-70 presenciaron la revolución de la instrumentación térmica con la integración de termopares tipo K (cromel-alumel) y termoresistencias Pt100 (platino) con registradores gráficos en papel continuo, permitiendo el trazo de temperatura en tiempo real durante procesos industriales continuos. Esta automatización eliminó la necesidad de lectura manual periódica.
          </p>
          <p>
            Los sistemas de adquisición de datos (DAQ) con conversión analógica-digital permitieron conectar sensores térmicos directamente a computadoras, almacenando y procesando curvas térmicas digitalmente. Esto habilitó análisis sofisticados, control automatizado y optimización de procesos imposibles con métodos manuales.
          </p>
          <p>
            El desarrollo de software de análisis como MATLAB y LabVIEW proporcionó herramientas poderosas para visualización, ajuste de modelos matemáticos, optimización de procesos y control de calidad. Esta revolución en instrumentación científica transformó laboratorios de investigación y plantas industriales en química, farmacéutica, alimentaria y manufactura avanzada, permitiendo niveles de precisión y control térmico previamente inalcanzables.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>🎭</span> Curiosidades y Anécdotas
        </h2>
        <div className="theory-subsection">
          <h3>En el Everest, el agua hierve a 70°C por la presión reducida</h3>
          <p>
            En la cumbre del monte Everest, a 8849 metros de altitud, la presión atmosférica es de apenas 0.33 atm, comparada con 1 atm al nivel del mar. Esta reducción drástica de presión tiene una consecuencia sorprendente: el punto de ebullición del agua desciende a aproximadamente 70°C, haciendo prácticamente imposible cocinar alimentos correctamente. La pasta, el arroz y las proteínas no alcanzan la desnaturalización completa necesaria para una cocción adecuada.
          </p>
          <p>
            Los alpinistas que ascienden el Everest deben utilizar ollas a presión para compensar este efecto. Estas ollas aumentan la presión interna a aproximadamente 2 atm, elevando el punto de ebullición del agua a 120°C, lo que permite una cocción efectiva de los alimentos. Sin este equipamiento, preparar comida caliente adecuadamente cocida sería extremadamente difícil.
          </p>
          <p>
            Este fenómeno ilustra perfectamente la dependencia de la temperatura de transición de fase con la presión externa. Las gráficas temperatura-presión (diagramas de fases) del agua muestran cómo el punto de ebullición varía con la altitud, una consideración crítica no solo para el montañismo sino también para procesos industriales que operan a diferentes presiones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Supercooling: Agua líquida a -40°C sin congelar</h3>
          <p>
            El agua ultrapura, sin impurezas que actúen como núcleos de cristalización, puede enfriarse hasta -40°C permaneciendo líquida en un estado metaestable llamado "supercooling" o sobreenfriamiento. En este estado precario, el agua está por debajo de su punto de congelación normal pero no se solidifica espontáneamente.
          </p>
          <p>
            Una perturbación mínima – un golpe, una vibración, o incluso introducir una pequeña impureza – desencadena la solidificación instantánea. La liberación súbita del calor latente hace que la temperatura salte espectacularmente desde -40°C hasta 0°C (el punto de congelación de equilibrio), creando la característica meseta horizontal en la gráfica temperatura-tiempo mientras el hielo se forma.
          </p>
          <p>
            Este fenómeno ocurre naturalmente en nubes de gran altitud, donde las gotas superenfriadas representan un peligro real para la aviación: al chocar con las aeronaves, se congelan instantáneamente, formando hielo que puede afectar la aerodinámica. En aulas de física, una demostración espectacular consiste en colocar una botella de agua destilada en el congelador a -20°C durante varias horas; al golpearla suavemente, se solidifica en segundos ante los ojos atónitos de los estudiantes.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>El termómetro clínico de máxima: Una invención ingeniosa de 1866</h3>
          <p>
            Thomas Clifford Allbutt revolucionó el diagnóstico médico en 1866 al diseñar un termómetro clínico compacto de apenas 15 cm de longitud, reemplazando los engorrosos termómetros de 30 cm que requerían 20 minutos de medición. Su innovación clave fue el "estrangulamiento" del capilar: una constricción que evita el retroceso del mercurio una vez alcanzada la temperatura máxima.
          </p>
          <p>
            Este diseño permitía retirar el termómetro del paciente mientras mantenía la lectura de temperatura máxima registrada, facilitando enormemente su uso práctico. La gráfica temperatura-tiempo típica muestra una meseta a 37°C después de 3-5 minutos de contacto axilar u oral, tiempo necesario para alcanzar el equilibrio térmico entre el termómetro y el cuerpo.
          </p>
          <p>
            Esta invención revolucionó la medicina, permitiendo el diagnóstico rápido de fiebres e infecciones (temperatura &gt;38°C como indicador de patología). Los termómetros digitales e infrarrojos actuales, con tiempos de respuesta de 1-3 segundos y precisión de ±0.1°C, son herederos directos de la innovación de Allbutt, ofreciendo lectura instantánea pero manteniendo el mismo principio fundamental de medición de temperatura corporal.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>Champagne: La ciencia de Pasteur aplicada al control de la fermentación</h3>
          <p>
            Históricamente, la producción de champagne enfrentaba un problema mortal: botellas que explotaban debido a fermentación incontrolada que generaba presión de CO₂ superior a 10 atm, muy por encima del límite estructural del vidrio. Las bodegas eran lugares peligrosos donde los trabajadores usaban máscaras protectoras contra las explosiones frecuentes.
          </p>
          <p>
            Louis Pasteur, en la década de 1860, estudió meticulosamente curvas de calentamiento del vino e identificó que temperaturas de 55-60°C inactivan las levaduras, deteniendo la fermentación mientras conservan el sabor y aroma del vino. Este proceso, conocido como pasteurización, se aplica ahora en la producción de champagne y cava para controlar precisamente la fermentación.
          </p>
          <p>
            La fermentación primaria y secundaria en botella se controla manteniendo temperatura constante de 12°C durante 15-24 meses de maduración, alcanzando una presión de equilibrio de 5-6 atm. Los termógrafos modernos en las cavas monitorizan continuamente la temperatura con precisión de ±1°C, garantizando estabilidad, calidad y consistencia en la producción. La enología moderna es fundamentalmente una aplicación de la ciencia de gráficas temperatura-tiempo y control térmico preciso.
          </p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <ul>
          <li>
            <strong>Gráficas temperatura-tiempo como herramienta fundamental:</strong> Las gráficas temperatura-tiempo representan la evolución térmica de una sustancia durante procesos de calentamiento o enfriamiento, incluyendo cambios de estado. Son herramientas esenciales para la visualización de procesos termodinámicos tanto en contextos didácticos (educación) como industriales (control de procesos de manufactura, química y tratamientos térmicos).
          </li>
          <li>
            <strong>Zonas inclinadas: Cambio continuo de temperatura:</strong> Las rampas inclinadas en las gráficas representan calentamiento o enfriamiento donde la temperatura cambia continuamente. Durante estas fases, la sustancia absorbe o libera calor sin experimentar transiciones de fase. La pendiente de estas rampas está directamente relacionada con el calor específico de la sustancia: mayor calor específico resulta en pendientes más suaves (cambio más lento de temperatura).
          </li>
          <li>
            <strong>Zonas horizontales: Mesetas isotérmicas durante cambios de estado:</strong> Las mesetas horizontales (temperatura constante) ocurren durante las transiciones de fase: fusión a 0°C y ebullición a 100°C para el agua a presión atmosférica. Durante estas mesetas, todo el calor suministrado se utiliza como calor latente para romper enlaces intermoleculares, sin aumentar la energía cinética (temperatura) de las moléculas.
          </li>
          <li>
            <strong>Duración de mesetas proporcional al calor latente:</strong> La longitud temporal de las mesetas horizontales es directamente proporcional al calor latente de la transformación. Para el agua, la vaporización requiere 2257 kJ/kg (significativamente mayor que la fusión, que requiere 334 kJ/kg), por lo que la meseta de ebullición es notablemente más larga que la meseta de fusión en las gráficas para igual cantidad de sustancia y potencia de calentamiento.
          </li>
          <li>
            <strong>Efecto de la presión en los puntos de transición:</strong> La presión externa afecta significativamente los puntos de transición de fase. A mayor altitud, la menor presión atmosférica reduce la temperatura de ebullición (70°C en el Everest vs 100°C al nivel del mar). Los diagramas de fases del agua muestran el punto triple (0.01°C, 611 Pa) donde coexisten los tres estados, y el punto crítico (374°C, 221 bar) donde desaparece la distinción entre líquido y gas.
          </li>
          <li>
            <strong>Aplicaciones tecnológicas omnipresentes:</strong> Las gráficas temperatura-tiempo son fundamentales en múltiples campos: metalurgia (tratamientos térmicos del acero mediante curvas TTT), análisis térmico (DSC para caracterización de polímeros), control de procesos industriales (pasteurización de leche con rampas controladas), cromatografía de gases (separación por programación térmica), meteorología y climatología (predicción y análisis de tendencias). Estas aplicaciones demuestran la relevancia universal de comprender la evolución térmica de sistemas en ciencia y tecnología moderna.
          </li>
        </ul>
      </div>
    </>
  );
};

export default GraficasTemperaturaTiempo;
