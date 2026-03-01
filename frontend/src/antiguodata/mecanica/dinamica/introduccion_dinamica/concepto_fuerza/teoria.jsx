import { TheorySection, Concept } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Concepto de Fuerza",
  descripcion: "Definición, características y propiedades de las fuerzas",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO', 'BACHILLERATO']
};

const ConceptoFuerzaTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es una Fuerza?">
        <p>
          Una fuerza es una interacción entre dos objetos que puede cambiar el estado de movimiento de un objeto o deformarlo. Es la causa de toda aceleración y de todo cambio en el movimiento.
        </p>
        <p>
          Aunque no podemos "ver" las fuerzas directamente, podemos observar sus efectos: un objeto que se mueve, se detiene, cambia de dirección o se deforma.
        </p>
      </TheorySection>

      <TheorySection title="Características de las Fuerzas">
        <Concept title="Las fuerzas son vectores">
          <p>
            Una fuerza no solo tiene magnitud (intensidad), sino también dirección y sentido. Por eso se representa como un vector con una flecha:
          </p>
          <ul>
            <li>La longitud de la flecha representa la magnitud (cuán fuerte es)</li>
            <li>La dirección de la flecha indica hacia dónde apunta</li>
            <li>El sentido indica si va en una dirección u otra</li>
          </ul>
          <p>
            Empujar una caja hacia la derecha con 10 N es diferente de empujarla hacia la izquierda con 10 N, aunque la magnitud sea la misma.
          </p>
        </Concept>

        <Concept title="Unidad de medida: El Newton (N)">
          <p>
            La unidad del Sistema Internacional para medir fuerzas es el Newton (N), en honor a Isaac Newton.
          </p>
          <p>
            Un Newton es la fuerza necesaria para acelerar un objeto de 1 kg a 1 m/s². Para tener una referencia:
          </p>
          <ul>
            <li>Una manzana pesa aproximadamente 1 N</li>
            <li>Levantar una botella de agua de 1 litro requiere unos 10 N</li>
            <li>Un coche en movimiento puede ejercer miles de Newtons al frenar</li>
          </ul>
        </Concept>

        <Concept title="Las fuerzas siempre actúan en pares">
          <p>
            Nunca existe una fuerza aislada. Si un objeto A ejerce una fuerza sobre un objeto B, entonces B ejerce una fuerza igual y opuesta sobre A. Esto es la tercera ley de Newton (acción y reacción).
          </p>
          <p>
            Cuando empujas una pared, la pared te empuja a ti con la misma fuerza. Por eso sientes la resistencia en tus manos.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Efectos de las Fuerzas">
        <Concept title="1. Cambiar el estado de movimiento">
          <p>
            Este es el efecto más importante de las fuerzas en dinámica:
          </p>
          <ul>
            <li>Poner en movimiento un objeto en reposo (acelerar desde cero)</li>
            <li>Detener un objeto en movimiento (desacelerar hasta cero)</li>
            <li>Cambiar la velocidad de un objeto (acelerar o frenar)</li>
            <li>Cambiar la dirección del movimiento (como en una curva)</li>
          </ul>
          <p>
            Todos estos efectos implican una aceleración, que es el cambio en la velocidad.
          </p>
        </Concept>

        <Concept title="2. Deformar objetos">
          <p>
            Las fuerzas también pueden cambiar la forma de los objetos:
          </p>
          <ul>
            <li>Estirar un resorte o una banda elástica</li>
            <li>Comprimir una esponja</li>
            <li>Doblar una varilla de metal</li>
            <li>Romper un objeto si la fuerza es muy grande</li>
          </ul>
          <p>
            Algunos materiales recuperan su forma original (elásticos), otros quedan deformados permanentemente (plásticos).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Suma de Fuerzas: La Fuerza Neta">
        <p>
          Cuando varias fuerzas actúan sobre un objeto simultáneamente, el efecto total es la suma vectorial de todas ellas. Esta suma se llama fuerza neta o fuerza resultante.
        </p>
        
        <Concept title="Fuerzas en la misma dirección">
          <p>
            Si dos personas empujan una caja en la misma dirección, las fuerzas se suman:
          </p>
          <ul>
            <li>Persona A empuja con 50 N hacia la derecha</li>
            <li>Persona B empuja con 30 N hacia la derecha</li>
            <li>Fuerza neta = 50 N + 30 N = 80 N hacia la derecha</li>
          </ul>
        </Concept>

        <Concept title="Fuerzas en direcciones opuestas">
          <p>
            Si empujan en direcciones opuestas, las fuerzas se restan:
          </p>
          <ul>
            <li>Persona A empuja con 50 N hacia la derecha</li>
            <li>Persona B empuja con 30 N hacia la izquierda</li>
            <li>Fuerza neta = 50 N - 30 N = 20 N hacia la derecha</li>
          </ul>
        </Concept>

        <Concept title="Equilibrio: Fuerza neta cero">
          <p>
            Cuando la fuerza neta es cero, el objeto está en equilibrio:
          </p>
          <ul>
            <li>Si estaba en reposo, permanece en reposo</li>
            <li>Si estaba en movimiento, continúa con velocidad constante</li>
          </ul>
          <p>
            Un libro sobre una mesa está en equilibrio: la gravedad lo empuja hacia abajo, pero la mesa lo empuja hacia arriba con la misma fuerza.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Representación Gráfica de Fuerzas">
        <p>
          Las fuerzas se representan con flechas (vectores) que parten del objeto sobre el que actúan:
        </p>
        <ul>
          <li>El punto de aplicación es donde comienza la flecha</li>
          <li>La dirección es la línea de la flecha</li>
          <li>El sentido es hacia donde apunta la punta</li>
          <li>La magnitud se representa con la longitud (a escala)</li>
        </ul>
        <p>
          Esta representación visual es fundamental para analizar problemas de dinámica y se desarrolla completamente en los diagramas de cuerpo libre.
        </p>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏋️ Entrenamiento con pesas</h3>
          <p>
            Cuando levantas una pesa, aplicas una fuerza hacia arriba que debe superar el peso (fuerza de gravedad hacia abajo). Los entrenadores calculan las fuerzas en cada ejercicio para diseñar rutinas efectivas y seguras. Levantar 50 kg significa aplicar una fuerza de aproximadamente 500 N.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Sistemas de frenado</h3>
          <p>
            Los frenos de un coche convierten la presión hidráulica en fuerza de fricción sobre los discos. Los ingenieros diseñan sistemas que distribuyen la fuerza de frenado entre las cuatro ruedas para detener el vehículo de forma segura y controlada, incluso a altas velocidades.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Grúas y construcción</h3>
          <p>
            Las grúas deben calcular exactamente las fuerzas necesarias para levantar materiales pesados. Los cables deben soportar no solo el peso del objeto, sino también las fuerzas adicionales durante la aceleración y el movimiento. Un error en estos cálculos puede ser catastrófico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎾 Deportes de raqueta</h3>
          <p>
            En tenis, la raqueta aplica una fuerza sobre la pelota durante milisegundos. La magnitud y dirección de esta fuerza determinan la velocidad y trayectoria de la pelota. Los jugadores profesionales aprenden intuitivamente a controlar estas fuerzas para colocar la pelota exactamente donde quieren.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌉 Diseño de puentes</h3>
          <p>
            Los ingenieros calculan todas las fuerzas que actuarán sobre un puente: el peso propio, el peso de los vehículos, el viento, las vibraciones. Cada cable, viga y columna debe diseñarse para soportar estas fuerzas con un amplio margen de seguridad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦴 Ortopedia y prótesis</h3>
          <p>
            Los médicos ortopedistas analizan las fuerzas en huesos y articulaciones para diagnosticar lesiones y diseñar tratamientos. Las prótesis deben soportar las mismas fuerzas que los huesos naturales: el peso del cuerpo, las fuerzas al caminar, correr o saltar.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La evolución del concepto de fuerza
        </h2>
        
        <div className="theory-subsection">
          <h3>Aristóteles: La fuerza como causa del movimiento</h3>
          <p>
            Aristóteles (384-322 a.C.) creía que todo movimiento requería una fuerza constante. Pensaba que si dejas de empujar un objeto, este se detiene porque la fuerza desaparece. Esta idea, aunque incorrecta, dominó el pensamiento durante casi 2,000 años porque coincidía con la experiencia cotidiana (donde la fricción detiene los objetos).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Galileo: Cuestionando a Aristóteles</h3>
          <p>
            Galileo Galilei (1564-1642) realizó experimentos con planos inclinados y péndulos que contradecían a Aristóteles. Descubrió que un objeto en movimiento tiende a mantener su movimiento, y que la fricción (no la ausencia de fuerza) es lo que lo detiene. Este fue un cambio conceptual revolucionario.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Newton: La definición moderna</h3>
          <p>
            Isaac Newton (1643-1727) formalizó el concepto de fuerza en su segunda ley: F = ma. Esta ecuación simple pero poderosa define la fuerza como aquello que causa aceleración. Newton también introdujo la idea de que las fuerzas son vectores y que siempre vienen en pares (acción-reacción).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Newton como unidad</h3>
          <p>
            La unidad de fuerza se llamó "Newton" en honor a Isaac Newton en 1946, casi 300 años después de su muerte. Antes se usaban unidades como la dina (sistema CGS) o la libra-fuerza. La estandarización del Newton en el Sistema Internacional facilitó la comunicación científica global.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>💪 La fuerza de un puñetazo</h3>
          <p>
            Un boxeador profesional puede generar una fuerza de hasta 5,000 N en un puñetazo, equivalente al peso de media tonelada. Pero lo impresionante no es solo la magnitud, sino la velocidad: el puñetazo dura solo 0.1 segundos. La combinación de fuerza y velocidad es lo que hace el impacto devastador.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦅 La fuerza de agarre de un águila</h3>
          <p>
            Un águila real puede ejercer una fuerza de agarre de hasta 400 N con sus garras, suficiente para romper huesos. Esta fuerza, concentrada en puntos pequeños (las garras), crea una presión enorme. Es un ejemplo perfecto de cómo la misma fuerza puede tener efectos muy diferentes según el área de aplicación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 La fuerza de un cohete</h3>
          <p>
            El cohete Saturno V que llevó al hombre a la Luna generaba una fuerza de empuje de 34 millones de Newtons al despegar. Para ponerlo en perspectiva, eso es equivalente al peso de 3,400 elefantes empujando hacia arriba. Y aun así, el cohete aceleraba lentamente al principio porque su masa era enorme.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐜 La fuerza relativa de una hormiga</h3>
          <p>
            Una hormiga puede cargar objetos de 10 a 50 veces su propio peso. Si un humano tuviera la misma fuerza relativa, podría levantar un coche. Pero esto es engañoso: las fuerzas no escalan linealmente con el tamaño. Las hormigas son fuertes relativamente porque son pequeñas, no a pesar de serlo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌊 La fuerza de un tsunami</h3>
          <p>
            Un tsunami puede ejercer fuerzas de millones de Newtons sobre estructuras costeras. La fuerza no viene solo de la altura de la ola, sino de la enorme masa de agua en movimiento. Es por eso que un tsunami de solo 1 metro puede ser devastador: la fuerza es proporcional a la masa, no solo a la altura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎸 La tensión de las cuerdas de guitarra</h3>
          <p>
            Las seis cuerdas de una guitarra acústica ejercen una fuerza total de unos 700 N sobre el puente y el mástil. Eso es como colgar un peso de 70 kg del instrumento. Los luthiers deben diseñar guitarras que soporten esta tensión constante sin deformarse, manteniendo la afinación durante años.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          Una fuerza es una interacción que puede cambiar el estado de movimiento de un objeto o deformarlo. Las fuerzas son magnitudes vectoriales con magnitud, dirección y sentido, y se miden en Newtons (N).
        </p>
        <p>
          Las fuerzas pueden acelerar, frenar, cambiar la dirección del movimiento o deformar objetos. Cuando múltiples fuerzas actúan sobre un objeto, su efecto combinado es la fuerza neta. Si la fuerza neta es cero, el objeto está en equilibrio.
        </p>
        <p>
          Las fuerzas siempre actúan en pares (acción-reacción) y son fundamentales para entender todo movimiento y toda interacción en el universo físico.
        </p>
      </div>
    </>
  );
};

export default ConceptoFuerzaTheory;
