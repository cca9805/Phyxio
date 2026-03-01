import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as instalacionesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Instalaciones Eléctricas",
  descripcion: "Cableado, interruptores, conmutadores y enchufes domésticos",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const InstalacionesElectricas = ({ exercises }) => {
  return (
    <>
      <Concept 
        title="¿Qué es una instalación eléctrica?" 
        color="blue"
        icon="🔌"
      >
        <p>
          Una instalación eléctrica doméstica es el conjunto de cables, 
          interruptores, enchufes y protecciones que llevan la electricidad desde el 
          contador hasta cada punto de luz y enchufe de la casa.
        </p>
        <p>
          Es como el "sistema circulatorio" de la casa: la electricidad fluye por los 
          cables como la sangre por las venas, llevando energía a donde se necesita.
        </p>
        <Important>
          <p>
            💡 Idea clave: Toda instalación doméstica funciona con 
            corriente alterna (AC) a 230V y está protegida por fusibles y diferenciales.
          </p>
        </Important>
      </Concept>

      {/* Componentes básicos */}
      <TheorySection title="Componentes de la Instalación">
        <Concept title="Elementos principales">
          <TheorySection title="Elementos principales">
            <Concept title="🔌 Cables y Conductores">
              <p>Transportan la electricidad. Tienen colores estándar: marrón/negro (fase), azul (neutro), amarillo-verde (tierra)</p>
            </Concept>
            <Concept title="💡 Interruptores">
              <p>Controlan el paso de corriente a las luces. Pueden ser simples, dobles o con regulador</p>
            </Concept>
            <Concept title="🔄 Conmutadores">
              <p>Permiten encender/apagar una luz desde dos o más puntos diferentes</p>
            </Concept>
            <Concept title="🔌 Enchufes">
              <p>Puntos de conexión para aparatos eléctricos. Pueden ser simples o con toma de tierra</p>
            </Concept>
          </TheorySection>
        </Concept>
      </TheorySection>

      {/* Interruptores */}
      <TheorySection title="Interruptores">
        <Concept title="¿Cómo funciona un interruptor?">
          <p>
            Un interruptor es un dispositivo que abre o cierra un circuito 
            eléctrico. Cuando está cerrado, permite el paso de corriente; cuando está abierto, 
            la interrumpe.
          </p>
          
          {/* SVG del interruptor */}
          <div className="svg-container" style={{textAlign: 'center', margin: '30px 0', maxWidth: '100%'}}>
            <svg width="100%" height="200" viewBox="0 0 400 200" style={{maxWidth: '400px', margin: '0 auto', display: 'block'}}>
              {/* Circuito apagado */}
              <g>
                <text x="20" y="30" fontSize="14" fontWeight="bold" fill="#1302f8ff">Interruptor ABIERTO (Apagado)</text>
                {/* Cables */}
                <line x1="20" y1="60" x2="80" y2="60" stroke="#8B4513" strokeWidth="3"/>
                <line x1="120" y1="60" x2="180" y2="60" stroke="#8B4513" strokeWidth="3"/>
                {/* Interruptor abierto */}
                <line x1="80" y1="60" x2="110" y2="40" stroke="#333" strokeWidth="3"/>
                <circle cx="80" cy="60" r="3" fill="#333"/>
                <circle cx="120" cy="60" r="3" fill="#333"/>
                {/* Bombilla apagada */}
                <circle cx="190" cy="60" r="15" fill="none" stroke="#ccc" strokeWidth="2"/>
                <text x="182" y="65" fontSize="12" fill="#ccc">💡</text>
                <text x="20" y="90" fontSize="12" fill="red">❌ No pasa corriente</text>
              </g>
              
              {/* Circuito encendido */}
              <g transform="translate(0, 120)">
                <text x="20" y="30" fontSize="14" fontWeight="bold" fill="#1302f8ff">Interruptor CERRADO (Encendido)</text>
                {/* Cables */}
                <line x1="20" y1="60" x2="80" y2="60" stroke="#8B4513" strokeWidth="3"/>
                <line x1="80" y1="60" x2="120" y2="60" stroke="#8B4513" strokeWidth="3"/>
                <line x1="120" y1="60" x2="180" y2="60" stroke="#8B4513" strokeWidth="3"/>
                {/* Interruptor cerrado */}
                <circle cx="80" cy="60" r="3" fill="#333"/>
                <circle cx="120" cy="60" r="3" fill="#333"/>
                {/* Bombilla encendida */}
                <circle cx="190" cy="60" r="15" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
                <text x="182" y="65" fontSize="12">💡</text>
                <text x="20" y="90" fontSize="12" fill="green">✅ Pasa corriente</text>
                {/* Flechas de corriente */}
                <polygon points="40,55 50,60 40,65" fill="red"/>
                <polygon points="100,55 110,60 100,65" fill="red"/>
              </g>
            </svg>
          </div>

          <Example title="Tipos de interruptores" icon="🔌">
            <ul>
              <li>Simple: Controla una luz desde un punto</li>
              <li>Doble: Controla dos luces independientes</li>
              <li>Con piloto: Tiene una luz que indica si está encendido</li>
              <li>Regulador (dimmer): Controla la intensidad de la luz</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      {/* Conmutadores */}
      <TheorySection title="Conmutadores">
        <Concept title="Control desde múltiples puntos">
          <p>
            Un conmutador permite encender o apagar una luz desde dos 
            o más lugares diferentes. Es muy útil en pasillos, escaleras y habitaciones 
            con varias entradas.
          </p>
          
          {/* SVG del conmutador */}
          <div className="svg-container" style={{textAlign: 'center', margin: '30px 0', maxWidth: '100%'}}>
            <svg width="100%" height="300" viewBox="0 0 550 300" style={{maxWidth: '550px', margin: '0 auto', display: 'block'}}>
              {/* Título */}
              <text x="250" y="25" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1a1a1a">Conmutador Simple (2 puntos)</text>
              
              {/* Posición 1 - Luz encendida */}
              <g>
                <text x="20" y="60" fontSize="12" fontWeight="bold" fill="#c7ba03ff">Posición 1: Luz ENCENDIDA</text>
                {/* Cables principales */}
                <line x1="20" y1="80" x2="80" y2="80" stroke="#8B4513" strokeWidth="3"/>
                <line x1="420" y1="80" x2="480" y2="80" stroke="#8B4513" strokeWidth="3"/>
                
                {/* Conmutador izquierdo */}
                <circle cx="80" cy="80" r="4" fill="#333"/>
                <circle cx="80" cy="100" r="4" fill="#333"/>
                <line x1="80" y1="80" x2="80" y2="100" stroke="#333" strokeWidth="3"/>
                <text x="60" y="75" fontSize="10" fill="#888">Conmutador A</text>
                
                {/* Cables cruzados */}
                <line x1="80" y1="80" x2="420" y2="100" stroke="#8B4513" strokeWidth="2"/>
                <line x1="80" y1="100" x2="420" y2="80" stroke="#8B4513" strokeWidth="2" strokeDasharray="5,5"/>
                
                {/* Conmutador derecho */}
                <circle cx="420" cy="80" r="4" fill="#333"/>
                <circle cx="420" cy="100" r="4" fill="#333"/>
                <line x1="420" y1="80" x2="420" y2="100" stroke="#333" strokeWidth="3"/>
                <text x="400" y="75" fontSize="10" fill="#888">Conmutador B</text>
                
                {/* Bombilla encendida */}
                <circle cx="490" cy="80" r="15" fill="#f7edb7ff" stroke="#FFA500" strokeWidth="2"/>
                <text x="482" y="85" fontSize="12">💡</text>
                
                {/* Flechas de corriente */}
                <polygon points="40,75 50,80 40,85" fill="red"/>
                <polygon points="200,95 210,100 200,105" fill="red"/>
                <polygon points="300,95 310,100 300,105" fill="red"/>
              </g>
              
              {/* Posición 2 - Luz apagada */}
              <g transform="translate(0, 140)">
                <text x="20" y="60" fontSize="12" fontWeight="bold" fill="#7a7202ff">Posición 2: Luz APAGADA (cambió conmutador B)</text>
                {/* Cables principales */}
                <line x1="20" y1="80" x2="80" y2="80" stroke="#8B4513" strokeWidth="3"/>
                <line x1="420" y1="80" x2="480" y2="80" stroke="#8B4513" strokeWidth="3"/>
                
                {/* Conmutador izquierdo (igual) */}
                <circle cx="80" cy="80" r="4" fill="#333"/>
                <circle cx="80" cy="100" r="4" fill="#333"/>
                <line x1="80" y1="80" x2="80" y2="100" stroke="#333" strokeWidth="3"/>
                <text x="60" y="75" fontSize="10" fill="#888">Conmutador A</text>
                
                {/* Cables cruzados */}
                <line x1="80" y1="80" x2="420" y2="100" stroke="#8B4513" strokeWidth="2" strokeDasharray="5,5"/>
                <line x1="80" y1="100" x2="420" y2="80" stroke="#8B4513" strokeWidth="2"/>
                
                {/* Conmutador derecho (cambiado) */}
                <circle cx="420" cy="80" r="4" fill="#333"/>
                <circle cx="420" cy="100" r="4" fill="#333"/>
                <line x1="420" y1="100" x2="420" y2="80" stroke="#333" strokeWidth="3"/>
                <text x="400" y="75" fontSize="10" fill="#888">Conmutador B</text>
                
                {/* Bombilla apagada */}
                <circle cx="490" cy="80" r="15" fill="none" stroke="#ccc" strokeWidth="2"/>
                <text x="482" y="85" fontSize="12" fill="#ccc">💡</text>
                
                <text x="20" y="120" fontSize="12" fill="red">❌ Circuito abierto - No pasa corriente</text>
              </g>
            </svg>
          </div>

          <Important>
            <p>
              🔄 Funcionamiento: Los conmutadores tienen dos posiciones. 
              Cambiar cualquiera de ellos invierte el estado de la luz (encendida ↔ apagada).
            </p>
          </Important>

          <Example title="Aplicaciones de conmutadores" icon="🏠">
            <ul>
              <li>Pasillos largos: Encender al entrar, apagar al salir</li>
              <li>Escaleras: Control desde planta baja y superior</li>
              <li>Dormitorios: Desde la puerta y desde la cama</li>
              <li>Garajes: Desde casa y desde dentro del garaje</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      {/* Enchufes */}
      <TheorySection title="Enchufes y Tomas de Corriente">
        <Concept title="Conexión segura de aparatos">
          <p>
            Los enchufes proporcionan puntos de conexión seguros para 
            aparatos eléctricos. En España usamos el estándar europeo con toma de tierra.
          </p>
          
          {/* SVG del enchufe */}
          <div className="svg-container" style={{textAlign: 'center', margin: '30px 0', maxWidth: '100%'}}>
            <svg width="100%" height="290" viewBox="0 0 400 290" style={{maxWidth: '400px', margin: '0 auto', display: 'block'}}>
              <text x="200" y="25" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#2603beff">Enchufe Europeo (Schuko)</text>
              
              <g transform="translate(0, 40)">
              {/* Enchufe */}
              <circle cx="190" cy="80" r="60" fill="#f0f0f0" stroke="#333" strokeWidth="2"/>
              
              {/* Agujeros */}
              <circle cx="165" cy="80" r="8" fill="#333"/>
              <circle cx="215" cy="80" r="8" fill="#333"/>
              
              {/* Toma de tierra (lateral) */}
              <rect x="183" y="12" width="15" height="15" rx="4" fill="#017005ff"/>
              <rect x="183" y="130" width="15" height="15" rx="4" fill="#017005ff"/>
              
              {/* Etiquetas */}
              <text x="160" y="105" fontSize="10" fill="blue">N</text>
              <text x="212" y="105" fontSize="10" fill="brown">L</text>
              <text x="187" y="10" fontSize="8" fill="green">T</text>
              <text x="187" y="155" fontSize="8" fill="green">T</text>
              
              
              {/* Leyenda */}
              <g transform="translate(280, 60)">
                <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#726a01ff">Conexiones:</text>
                <text x="0" y="20" fontSize="10" fill="brown">L = Fase (230V)</text>
                <text x="0" y="35" fontSize="10" fill="blue">N = Neutro (0V)</text>
                <text x="0" y="50" fontSize="10" fill="green">T = Tierra (seguridad)</text>
              </g>
              </g>
            </svg>
          </div>

          <Important title="Tipos de enchufes">
            <ul>
              <li>Schuko (tipo F): Estándar europeo con toma de tierra lateral</li>
              <li>Tipo C: Sin toma de tierra, para aparatos de baja potencia</li>
              <li>Industriales: Para alta potencia, con protección IP</li>
            </ul>
          </Important>
        </Concept>
      </TheorySection>

      {/* Cálculos básicos */}
      <TheorySection title="Cálculos en Instalaciones">
        <Concept title="Potencia y corriente en casa">
          <p>
            En las instalaciones domésticas es importante calcular la corriente que 
            circula para dimensionar cables y protecciones:
          </p>
          <Formula 
            expression={String.raw`I = \frac{P}{V}`}
            calculatorId="instalaciones_electricas"
            definitions={instalacionesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Potencia (P)", expression: String.raw`P = V \cdot I` },
              { description: "Calcular Voltaje (V)", expression: String.raw`V = \frac{P}{I}` }
            ]}
          />
          
          <p>
            <strong>Donde:</strong>
          </p>
          <ul>
            <li>I: Corriente eléctrica (amperios, A)</li>
            <li>P: Potencia (vatios, W)</li>
            <li>V: Voltaje (voltios, V - en España 230V)</li>
          </ul>

          <Example title="Ejemplo: Horno eléctrico" icon="🔥">
            <p>
              Un horno de 3000W conectado a 230V consume:
            </p>
            <ul>
              <li>I = P / V = 3000W / 230V = 13 A</li>
              <li>Necesita un cable de al menos 2.5 mm² de sección</li>
              <li>Protección: magnetotérmico de 16 A</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      {/* Seguridad */}
      <TheorySection title="Seguridad en Instalaciones">
        <Concept title="Protecciones eléctricas" color="red" icon="⚠️">
          <Important title="⚠️ Protecciones obligatorias">
            <ul>
              <li>Magnetotérmico: Protege contra sobrecargas y cortocircuitos</li>
              <li>Diferencial: Protege contra electrocución (detecta fugas)</li>
              <li>Toma de tierra: Deriva corrientes de fuga de forma segura</li>
              <li>Cables adecuados: Sección apropiada para la corriente</li>
            </ul>
          </Important>

          <Important>
            <p>
              🚫 Nunca hagas esto: Manipular la instalación sin cortar 
              la corriente, usar cables pelados, sobrecargar enchufes, o hacer 
              instalaciones sin ser electricista autorizado.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Aplicaciones">🏠</span> Aplicaciones en el Hogar</>}>
        <Important>
          Las instalaciones eléctricas están presentes en cada rincón de la casa:
          <ul>
            <li>Iluminación: Interruptores y conmutadores en todas las habitaciones</li>
            <li>Enchufes: Puntos de conexión para electrodomésticos y dispositivos</li>
            <li>Cocina: Circuitos dedicados para horno, vitrocerámica y lavavajillas</li>
            <li>Baño: Instalaciones con protección especial contra humedad</li>
            <li>Climatización: Circuitos para aire acondicionado y calefacción</li>
            <li>Exterior: Iluminación de jardín y enchufes exteriores con protección IP</li>
          </ul>
        </Important>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Historia">📜</span> Historia de las Instalaciones Eléctricas</>}>
        <Important>
          Las primeras instalaciones eléctricas domésticas aparecieron en la década de 1880, poco después de que Edison inventara la bombilla. Inicialmente solo había iluminación, sin enchufes.
        </Important>
        <Important>
          El enchufe moderno fue inventado por Harvey Hubbell en 1904. Antes de eso, los aparatos se conectaban directamente a los portalámparas. El estándar Schuko europeo se desarrolló en Alemania en 1926 y se adoptó en España en los años 60.
        </Important>
      </TheorySection>

      <TheorySection title={<><span role="img" aria-label="Curiosidades">💡</span> Curiosidades</>}>
        <Important>
          En los años 50-60, muchas casas españolas tenían instalaciones de solo 125V, heredadas del sistema antiguo. La transición a 220V (ahora 230V) se completó en los años 70, obligando a cambiar todos los aparatos o usar transformadores.
        </Important>
        <Important>
          El color de los cables no siempre fue estándar. Hasta los años 80, cada país tenía sus propios códigos de colores. El estándar actual (marrón/negro=fase, azul=neutro, amarillo-verde=tierra) se estableció en Europa en 1977.
        </Important>
      </TheorySection>

      <Important title="Resumen">
        <ul>
          <li>Las instalaciones eléctricas llevan electricidad a todos los puntos de la casa</li>
          <li>Los interruptores controlan el paso de corriente a las luces</li>
          <li>Los conmutadores permiten control desde múltiples puntos</li>
          <li>Los enchufes proporcionan conexión segura para aparatos</li>
          <li>Las protecciones (magnetotérmico, diferencial) son obligatorias</li>
          <li>Solo electricistas autorizados pueden hacer instalaciones</li>
        </ul>
      </Important>
    </>
  );
};

export default InstalacionesElectricas;
