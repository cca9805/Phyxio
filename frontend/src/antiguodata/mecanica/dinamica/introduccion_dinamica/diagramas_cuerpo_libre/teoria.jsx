import { TheorySection, Concept } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Diagramas de Cuerpo Libre",
  descripcion: "Representación gráfica de fuerzas para resolver problemas de dinámica",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO', 'BACHILLERATO']
};

const DiagramasCuerpoLibreTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es un Diagrama de Cuerpo Libre?">
        <p>
          Un Diagrama de Cuerpo Libre (DCL) es una representación gráfica simplificada que muestra todas las fuerzas que actúan sobre un objeto específico. Es la herramienta más importante para resolver problemas de dinámica.
        </p>
        <p>
          El nombre "cuerpo libre" significa que aislamos el objeto del resto del entorno y mostramos solo las fuerzas que actúan sobre él, ignorando todo lo demás.
        </p>
      </TheorySection>

      <TheorySection title="¿Por qué son importantes los DCL?">
        <ul>
          <li>Visualizan todas las fuerzas de forma clara y organizada</li>
          <li>Ayudan a identificar fuerzas que podrías pasar por alto</li>
          <li>Facilitan la aplicación de las leyes de Newton</li>
          <li>Permiten descomponer fuerzas en componentes</li>
          <li>Son esenciales para resolver problemas complejos</li>
        </ul>
        <p>
          Un buen DCL es el primer paso para resolver correctamente cualquier problema de dinámica. Los ingenieros y físicos siempre comienzan dibujando un DCL.
        </p>
      </TheorySection>

      <TheorySection title="Cómo Dibujar un Diagrama de Cuerpo Libre">
        <Concept title="Paso 1: Identificar el objeto de interés">
          <p>
            Decide qué objeto vas a analizar. Si hay varios objetos, necesitarás un DCL separado para cada uno.
          </p>
          <p>
            Ejemplo: Si analizas un libro sobre una mesa, el objeto de interés es el libro (no la mesa).
          </p>
        </Concept>

        <Concept title="Paso 2: Dibujar el objeto como un punto o forma simple">
          <p>
            Representa el objeto con un punto, un cuadrado o un círculo simple. No necesitas dibujar detalles; solo una forma que represente el objeto.
          </p>
          <p>
            La simplificación ayuda a concentrarse en las fuerzas, no en la apariencia del objeto.
          </p>
        </Concept>

        <Concept title="Paso 3: Identificar todas las fuerzas">
          <p>
            Pregúntate: ¿Qué está tocando el objeto? ¿Qué fuerzas a distancia actúan sobre él?
          </p>
          <ul>
            <li>¿Hay gravedad? → Dibuja el peso (W o Fg) hacia abajo</li>
            <li>¿Está sobre una superficie? → Dibuja la normal (N) perpendicular a la superficie</li>
            <li>¿Hay fricción? → Dibuja la fricción (f) paralela a la superficie, opuesta al movimiento</li>
            <li>¿Hay cuerdas o cables? → Dibuja la tensión (T) a lo largo de la cuerda</li>
            <li>¿Alguien empuja o tira? → Dibuja la fuerza aplicada (Fa)</li>
          </ul>
        </Concept>

        <Concept title="Paso 4: Dibujar las fuerzas como vectores">
          <p>
            Cada fuerza se representa con una flecha (vector) que:
          </p>
          <ul>
            <li>Comienza en el centro del objeto</li>
            <li>Apunta en la dirección de la fuerza</li>
            <li>Tiene longitud proporcional a la magnitud (opcional, pero útil)</li>
            <li>Está etiquetada con su nombre (N, W, f, T, etc.)</li>
          </ul>
        </Concept>

        <Concept title="Paso 5: Establecer un sistema de coordenadas">
          <p>
            Dibuja ejes x e y para definir direcciones positivas y negativas. Esto facilita descomponer fuerzas y aplicar las leyes de Newton.
          </p>
          <p>
            Convención común: x horizontal (positivo a la derecha), y vertical (positivo hacia arriba).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos de Diagramas de Cuerpo Libre">
        <Concept title="Ejemplo 1: Libro sobre una mesa">
          <p>
            Un libro en reposo sobre una mesa horizontal.
          </p>
          <p>
            Fuerzas presentes:
          </p>
          <ul>
            <li>Peso (W): hacia abajo, magnitud = mg</li>
            <li>Normal (N): hacia arriba, perpendicular a la mesa</li>
          </ul>
          <p>
            Como el libro está en equilibrio: N = W (las fuerzas se cancelan).
          </p>
        </Concept>

        <Concept title="Ejemplo 2: Caja siendo empujada">
          <p>
            Una caja sobre el suelo siendo empujada horizontalmente hacia la derecha.
          </p>
          <p>
            Fuerzas presentes:
          </p>
          <ul>
            <li>Peso (W): hacia abajo</li>
            <li>Normal (N): hacia arriba</li>
            <li>Fuerza aplicada (Fa): hacia la derecha</li>
            <li>Fricción (f): hacia la izquierda (opuesta al movimiento)</li>
          </ul>
          <p>
            Verticalmente: N = W (equilibrio). Horizontalmente: si Fa mayor que f, la caja acelera.
          </p>
        </Concept>

        <Concept title="Ejemplo 3: Objeto colgando de una cuerda">
          <p>
            Una lámpara colgando del techo mediante una cuerda.
          </p>
          <p>
            Fuerzas presentes:
          </p>
          <ul>
            <li>Peso (W): hacia abajo</li>
            <li>Tensión (T): hacia arriba, a lo largo de la cuerda</li>
          </ul>
          <p>
            Como la lámpara está en equilibrio: T = W.
          </p>
        </Concept>

        <Concept title="Ejemplo 4: Objeto en un plano inclinado">
          <p>
            Una caja sobre una rampa inclinada.
          </p>
          <p>
            Fuerzas presentes:
          </p>
          <ul>
            <li>Peso (W): hacia abajo (vertical)</li>
            <li>Normal (N): perpendicular a la rampa</li>
            <li>Fricción (f): paralela a la rampa, hacia arriba (si la caja tiende a deslizar hacia abajo)</li>
          </ul>
          <p>
            El peso se descompone en dos componentes: una paralela a la rampa (W sin θ) y una perpendicular (W cos θ).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Errores Comunes al Dibujar DCL">
        <Concept title="Error 1: Incluir fuerzas que el objeto ejerce">
          <p>
            El DCL solo debe mostrar fuerzas que actúan SOBRE el objeto, no fuerzas que el objeto ejerce sobre otros.
          </p>
          <p>
            Incorrecto: Dibujar la fuerza que el libro ejerce sobre la mesa en el DCL del libro.
            Correcto: Solo dibujar la normal que la mesa ejerce sobre el libro.
          </p>
        </Concept>

        <Concept title="Error 2: Olvidar el peso">
          <p>
            El peso (gravedad) siempre actúa sobre objetos con masa. Es fácil olvidarlo, especialmente en problemas horizontales.
          </p>
          <p>
            Siempre pregúntate: ¿Tiene masa el objeto? Entonces tiene peso hacia abajo.
          </p>
        </Concept>

        <Concept title="Error 3: Confundir normal con peso">
          <p>
            La normal no siempre es igual al peso. Solo son iguales en superficies horizontales sin otras fuerzas verticales.
          </p>
          <p>
            En un plano inclinado, N es menor que W. Si empujas hacia abajo, N es mayor que W.
          </p>
        </Concept>

        <Concept title="Error 4: Dibujar la fricción en dirección incorrecta">
          <p>
            La fricción siempre se opone al movimiento (o al movimiento potencial si el objeto está en reposo).
          </p>
          <p>
            Si el objeto se mueve hacia la derecha, la fricción apunta hacia la izquierda.
          </p>
        </Concept>

        <Concept title="Error 5: Incluir fuerzas que no existen">
          <p>
            No inventes fuerzas. Solo dibuja fuerzas reales que resulten de interacciones físicas.
          </p>
          <p>
            No existe una "fuerza de movimiento" o "fuerza de inercia" en sistemas inerciales.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicando las Leyes de Newton con DCL">
        <p>
          Una vez que tienes el DCL, puedes aplicar la segunda ley de Newton:
        </p>
        <p>
          ΣF = ma (la suma de todas las fuerzas es igual a masa por aceleración)
        </p>
        <Concept title="Procedimiento">
          <ul>
            <li>Descompón fuerzas en componentes x e y si es necesario</li>
            <li>Suma todas las fuerzas en dirección x: ΣFx = max</li>
            <li>Suma todas las fuerzas en dirección y: ΣFy = may</li>
            <li>Resuelve las ecuaciones para encontrar la incógnita</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🏗️ Análisis estructural de edificios</h3>
          <p>
            Los ingenieros civiles crean DCL de cada viga, columna y conexión en un edificio. Analizan las fuerzas de compresión, tensión y cortante para asegurar que la estructura soporte su propio peso, el peso de los ocupantes, el viento y los terremotos. Un error en el DCL puede llevar al colapso de la estructura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Diseño de sistemas de suspensión</h3>
          <p>
            Los ingenieros automotrices usan DCL para analizar las fuerzas en cada componente de la suspensión: resortes, amortiguadores, brazos de control. Deben considerar fuerzas verticales (baches), horizontales (curvas) y longitudinales (frenado). El DCL ayuda a optimizar el diseño para comodidad y seguridad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎢 Seguridad en montañas rusas</h3>
          <p>
            Los diseñadores de montañas rusas crean DCL para cada punto de la trayectoria. Calculan las fuerzas G que experimentan los pasajeros en cada curva, caída y loop. Deben asegurar que las fuerzas sean emocionantes pero no excedan los límites de seguridad (típicamente 4-5 G).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚓ Diseño de grúas y poleas</h3>
          <p>
            Las grúas de construcción levantan cargas de decenas de toneladas. Los ingenieros usan DCL para calcular la tensión en cada cable, la fuerza en cada polea y el momento en la base. Un DCL incorrecto podría resultar en cables que se rompen o grúas que se vuelcan.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚀 Análisis de lanzamiento de cohetes</h3>
          <p>
            Durante el lanzamiento, un cohete experimenta empuje hacia arriba, peso hacia abajo, y resistencia del aire. Los ingenieros aeroespaciales crean DCL para cada fase del vuelo, calculando la aceleración y trayectoria. El DCL cambia constantemente a medida que el cohete quema combustible y pierde masa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏥 Biomecánica y prótesis</h3>
          <p>
            Los ingenieros biomédicos usan DCL para analizar fuerzas en articulaciones y huesos. Al diseñar una prótesis de rodilla, crean DCL de la articulación durante caminar, correr y subir escaleras. Esto asegura que la prótesis soporte las fuerzas reales sin fallar.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La evolución del análisis de fuerzas
        </h2>
        
        <div className="theory-subsection">
          <h3>Leonardo da Vinci (1452-1519): Los primeros diagramas</h3>
          <p>
            Leonardo da Vinci fue uno de los primeros en dibujar diagramas de fuerzas en sus cuadernos. Analizó poleas, palancas y estructuras, dibujando flechas para representar fuerzas. Aunque no tenía las leyes de Newton, su enfoque visual fue revolucionario para su época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Isaac Newton (1643-1727): Formalizando el análisis</h3>
          <p>
            Newton no solo formuló las leyes del movimiento, sino que también desarrolló métodos para analizar sistemas de fuerzas. Sus "Principia" incluyen diagramas de fuerzas en problemas de mecánica celeste y terrestre. Estableció el método de aislar un objeto y analizar las fuerzas sobre él.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Estandarización en ingeniería</h3>
          <p>
            Durante la Revolución Industrial, los ingenieros necesitaban métodos sistemáticos para diseñar máquinas y estructuras. Los DCL se convirtieron en herramienta estándar en la educación de ingeniería. Libros de texto comenzaron a enseñar el método paso a paso que usamos hoy.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Computadoras y análisis complejo</h3>
          <p>
            Con las computadoras, los ingenieros pueden analizar sistemas con miles de fuerzas simultáneamente. Programas de Análisis de Elementos Finitos (FEA) crean DCL automáticamente para cada parte de una estructura. Pero el concepto fundamental sigue siendo el mismo que Newton estableció hace 300 años.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🌉 El colapso del puente de Quebec (1907)</h3>
          <p>
            Durante la construcción del puente de Quebec en Canadá, los ingenieros subestimaron las fuerzas de compresión en las vigas principales. El puente colapsó, matando a 75 trabajadores. La investigación reveló errores en el análisis de fuerzas. Este desastre llevó a estándares más rigurosos en el análisis estructural y el uso de DCL.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚁 El rescate del Apollo 13</h3>
          <p>
            Cuando el Apollo 13 sufrió una explosión en 1970, los ingenieros en tierra tuvieron que calcular rápidamente las fuerzas necesarias para una trayectoria de retorno. Crearon DCL de la nave considerando la gravedad de la Tierra y la Luna, el empuje disponible y la resistencia atmosférica. Sus cálculos precisos salvaron a los astronautas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎪 El equilibrista y las fuerzas</h3>
          <p>
            Los equilibristas que caminan sobre cuerdas flojas usan intuitivamente los principios de DCL. La vara larga que llevan aumenta su momento de inercia, haciendo más fácil mantener el equilibrio. Constantemente ajustan su posición para mantener la fuerza neta vertical cero y evitar caer.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ La Torre de Pisa: Un DCL inclinado</h3>
          <p>
            La Torre de Pisa se inclina porque el suelo bajo un lado es más blando. El DCL de la torre muestra que el peso no pasa por el centro de la base, creando un momento que la inclina más. Los ingenieros han estabilizado la torre ajustando el suelo para cambiar el DCL y evitar el colapso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🦅 Las aves y el vuelo</h3>
          <p>
            Un ave en vuelo es un DCL viviente. Debe equilibrar cuatro fuerzas: peso (hacia abajo), sustentación (hacia arriba), empuje (hacia adelante) y resistencia del aire (hacia atrás). Las aves ajustan constantemente el ángulo de sus alas para modificar estas fuerzas y maniobrar. Es física pura en acción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎯 El récord de fuerza G</h3>
          <p>
            El piloto de pruebas John Stapp soportó 46.2 G en un trineo cohete en 1954 (46 veces su peso). Los médicos usaron DCL para predecir las fuerzas en su cuerpo y diseñar el arnés de seguridad. Stapp sobrevivió, pero sufrió daños temporales en los ojos. Este experimento mejoró la seguridad en aviación y automovilismo.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h2>
          <span>📝</span> Resumen
        </h2>
        <p>
          Un Diagrama de Cuerpo Libre (DCL) es una representación gráfica que muestra todas las fuerzas que actúan sobre un objeto aislado. Es la herramienta fundamental para resolver problemas de dinámica.
        </p>
        <p>
          Para crear un DCL: identifica el objeto, dibújalo como forma simple, identifica todas las fuerzas que actúan sobre él, represéntalas como vectores (flechas) desde el centro del objeto, y establece un sistema de coordenadas.
        </p>
        <p>
          Los DCL permiten visualizar fuerzas, aplicar las leyes de Newton sistemáticamente, y resolver problemas complejos. Son esenciales en ingeniería, física y cualquier campo que involucre análisis de fuerzas y movimiento.
        </p>
      </div>
    </>
  );
};

export default DiagramasCuerpoLibreTheory;
