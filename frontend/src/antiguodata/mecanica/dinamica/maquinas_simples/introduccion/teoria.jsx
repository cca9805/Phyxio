import { TheorySection, Concept, Important, Example } from '../../../../../components/TheoryV2';

// Metadatos del tema
export const metadata = {
  titulo: "Introducción a las Máquinas Simples",
  descripcion: "Fundamentos y clasificación de las máquinas simples",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const IntroduccionMaquinasTheory = ({ exercises = [] }) => {
  return (
    <>
      <TheorySection title="¿Qué son las Máquinas Simples?" emoji="🔧">
        <p>
          Las máquinas simples son dispositivos mecánicos básicos que nos ayudan a realizar trabajos
          aplicando menos fuerza de la que sería necesaria sin ellas. Son los componentes fundamentales
          de todas las herramientas y máquinas complejas que usamos diariamente.
        </p>

        <h4>Las 6 máquinas simples clásicas:</h4>
        <ul>
          <li>🎭 Palanca: Barra rígida que gira sobre un punto de apoyo (fulcro)</li>
          <li>⚙️ Polea: Rueda con ranura por donde pasa una cuerda</li>
          <li>⛰️ Plano inclinado: Superficie inclinada que reduce el esfuerzo para elevar objetos</li>
          <li>🔪 Cuña: Dos planos inclinados unidos (derivado del plano inclinado)</li>
          <li>🔩 Tornillo: Plano inclinado enrollado en espiral</li>
          <li>🎡 Rueda y eje (Torno): Dos cilindros de diferente radio unidos</li>
        </ul>

        <Important>
          Principio fundamental: Las máquinas simples NO crean energía, solo transforman la fuerza.
          Reducen la fuerza necesaria (esfuerzo) a costa de aumentar la distancia recorrida.
          El trabajo total (Fuerza × Distancia) permanece constante (sin contar fricción).
        </Important>

        <p>
          Estas seis máquinas son la base de toda la tecnología mecánica. Desde las herramientas más 
          primitivas hasta las máquinas más complejas, todas están construidas combinando estos 
          elementos fundamentales.
        </p>
      </TheorySection>

      <TheorySection title="Tabla Comparativa de Máquinas Simples">
        <Concept title="Comparación de las 6 Máquinas Simples">
          <p>
            Cada máquina simple tiene características únicas, pero todas cumplen el mismo principio: 
            transformar fuerza por distancia. Aquí comparamos sus ventajas mecánicas típicas y 
            aplicaciones principales.
          </p>

          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
            <thead>
              <tr style={{backgroundColor: 'var(--color-primary-light)', borderBottom: '2px solid var(--color-primary)'}}>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Máquina Simple</th>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Ventaja Mecánica</th>
                <th style={{padding: '0.75rem', textAlign: 'left'}}>Ejemplos Principales</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Palanca 1er género</td>
                <td style={{padding: '0.75rem'}}>Variable (VM ≥ 1 o &lt; 1)</td>
                <td style={{padding: '0.75rem'}}>Balancín, tijeras, alicates</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Palanca 2º género</td>
                <td style={{padding: '0.75rem'}}>Siempre VM &gt; 1</td>
                <td style={{padding: '0.75rem'}}>Carretilla, cascanueces, remo</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Palanca 3er género</td>
                <td style={{padding: '0.75rem'}}>Siempre VM &lt; 1</td>
                <td style={{padding: '0.75rem'}}>Brazo humano, pinzas, caña</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Polea fija</td>
                <td style={{padding: '0.75rem'}}>VM = 1</td>
                <td style={{padding: '0.75rem'}}>Bandera, pozo, persianas</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Polea móvil</td>
                <td style={{padding: '0.75rem'}}>VM = 2</td>
                <td style={{padding: '0.75rem'}}>Grúas, polipastos simples</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Polipasto</td>
                <td style={{padding: '0.75rem'}}>VM = n tramos</td>
                <td style={{padding: '0.75rem'}}>Grúas torre, talleres, rescate</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Plano inclinado</td>
                <td style={{padding: '0.75rem'}}>VM = L / h</td>
                <td style={{padding: '0.75rem'}}>Rampas, carreteras, escaleras</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Cuña</td>
                <td style={{padding: '0.75rem'}}>Depende del ángulo</td>
                <td style={{padding: '0.75rem'}}>Hacha, cuchillo, cincel</td>
              </tr>
              <tr style={{borderBottom: '1px solid var(--color-border)'}}>
                <td style={{padding: '0.75rem'}}>Tornillo</td>
                <td style={{padding: '0.75rem'}}>VM = 2πr / p (muy alta)</td>
                <td style={{padding: '0.75rem'}}>Gato coche, prensa, tornillo</td>
              </tr>
              <tr>
                <td style={{padding: '0.75rem'}}>Rueda y eje</td>
                <td style={{padding: '0.75rem'}}>VM = R / r</td>
                <td style={{padding: '0.75rem'}}>Pozo, volante, carrete pesca</td>
              </tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      <TheorySection title="Principio de Conservación del Trabajo">
        <Concept title="No hay energía gratis">
          <Important>
            Principio de conservación del trabajo: En todas las máquinas simples (sin fricción):
            <br /><br />
            Trabajo aplicado = Trabajo realizado
            <br />
            F_esfuerzo × d_esfuerzo = F_resistencia × d_resistencia
            <br /><br />
            Si reducimos la fuerza a la mitad (VM=2), debemos mover el doble de distancia. 
            No hay "ganancia gratis" de energía, solo transformación de fuerza por distancia.
          </Important>

          <p>
            Este principio fundamental nos dice que las máquinas simples no crean trabajo ni energía 
            adicional. Solo redistribuyen el trabajo: aplicamos menos fuerza, pero durante más distancia, 
            de modo que el trabajo total permanece constante.
          </p>

          <Example>
            Ejemplo práctico: Polea móvil
            <br /><br />
            Si usamos una polea móvil (VM = 2) para levantar una carga de 100 kg a 2 metros de altura:
            <br /><br />
            Sin polea: Levantamos 100 kg × 2 m = 200 kg·m de trabajo
            <br />
            Con polea: Tiramos de 50 kg × 4 m = 200 kg·m de trabajo
            <br /><br />
            El trabajo total es el mismo (200 kg·m), pero distribuido de forma diferente. 
            Aplicamos la mitad de fuerza (50 kg vs 100 kg) pero movemos el doble de cuerda (4 m vs 2 m).
          </Example>

          <Example>
            Ejemplo práctico: Plano inclinado
            <br /><br />
            Subir una caja de 60 kg a una altura de 1 metro:
            <br /><br />
            Verticalmente: 60 kg × 1 m = 60 kg·m de trabajo
            <br />
            Por rampa de 3 m: 20 kg × 3 m = 60 kg·m de trabajo
            <br /><br />
            Misma cantidad de trabajo total. La rampa nos permite usar solo 20 kg de fuerza 
            (en lugar de 60 kg), pero empujamos la caja 3 metros (en lugar de 1 metro).
          </Example>
        </Concept>

        <Concept title="Eficiencia Real: El papel de la fricción">
          <p>
            En la realidad, las máquinas simples no son 100% eficientes debido a la fricción. 
            Parte de la energía se pierde como calor por el rozamiento entre las piezas.
          </p>

          <p>
            La eficiencia o rendimiento de una máquina se define como:
            <br /><br />
            <code>η = (Trabajo útil / Trabajo aplicado) × 100%</code>
          </p>

          <ul>
            <li>Poleas con rodamientos bien lubricados: 90-95% eficiencia</li>
            <li>Plano inclinado con superficie lisa: 85-90% eficiencia</li>
            <li>Tornillo sin lubricar: 20-40% eficiencia (mucha fricción)</li>
            <li>Palancas con buen fulcro: 95-99% eficiencia</li>
          </ul>

          <Important>
            Por eso es importante lubricar las máquinas: reducir la fricción aumenta la eficiencia, 
            aprovechando mejor nuestra fuerza aplicada y reduciendo el desgaste de las piezas.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Las Máquinas Simples en la Civilización Humana">
        <Concept title="De la prehistoria a la modernidad">
          <Example>
            Las máquinas simples han sido fundamentales en el desarrollo de la humanidad
            <br /><br />
            Observa a tu alrededor: casi todas las herramientas que usamos son máquinas simples o 
            combinaciones de ellas. Un cortaúñas combina 2 palancas. Una bicicleta usa rueda-eje 
            (pedales), palancas (frenos), y tornillos (ajustes). Un abrelatas combina palanca, cuña 
            y rueda-eje.
            <br /><br />
            La civilización humana se construyó sobre estas 6 máquinas simples. Desde las pirámides 
            de Egipto hasta los rascacielos modernos, todas las estructuras se levantaron usando 
            combinaciones inteligentes de palancas, poleas, planos inclinados y tornillos.
          </Example>

          <h4>🏛️ Hitos históricos con máquinas simples:</h4>
          <ul>
            <li>3000 a.C. - Pirámides de Egipto: Planos inclinados y palancas para mover bloques de 2.5 toneladas</li>
            <li>2000 a.C. - Rueda y eje: Revolución en transporte y alfarería</li>
            <li>500 a.C. - Arquímedes: Formaliza matemáticamente las palancas y el tornillo</li>
            <li>1500 d.C. - Leonardo da Vinci: Diseña máquinas complejas combinando simples</li>
            <li>1700 d.C. - Revolución Industrial: Poleas y tornillos en fábricas</li>
            <li>1900 d.C. - Rascacielos: Polipastos eléctricos levantan estructuras de acero</li>
            <li>2000 d.C. - Robótica: Servomotores basados en principios de palancas y tornillos</li>
          </ul>

          <h4>🔧 Aplicaciones modernas:</h4>
          <p>
            Aunque vivimos en la era digital, las máquinas simples siguen siendo esenciales:
          </p>
          <ul>
            <li>Construcción: Grúas torre (poleas), excavadoras (palancas hidráulicas), rampas</li>
            <li>Transporte: Frenos de bicicleta (palancas), gatos hidráulicos (tornillo + fluidos)</li>
            <li>Medicina: Instrumental quirúrgico (palancas de precisión, cuñas afiladas)</li>
            <li>Hogar: Tijeras, destornilladores, abrelatas, cascanueces, rampas accesibilidad</li>
            <li>Industria: Prensas (tornillo), cintas transportadoras (poleas), robots (combinaciones)</li>
          </ul>

          <Important>
            Comprender las máquinas simples no es solo aprender física del pasado, es entender 
            los principios fundamentales que aún rigen toda la tecnología mecánica moderna.
          </Important>
        </Concept>

        <Concept title="Actividad de observación">
          <p>
            Durante los próximos días, intenta identificar máquinas simples en tu entorno:
          </p>
          <ul>
            <li>🏠 En casa: ¿Cuántas tijeras, cuchillos (cuñas), persianas (poleas) y tornillos encuentras?</li>
            <li>🏫 En el instituto: ¿Las puertas usan bisagras (palancas)? ¿Hay rampas de accesibilidad?</li>
            <li>🚲 En tu bicicleta: Identifica palancas (frenos, cambios), rueda-eje (pedales), tornillos</li>
            <li>🏗️ En construcción: Observa grúas (poleas), rampas para escombros, cuñas en herramientas</li>
          </ul>

          <p>
            Te sorprenderás de cuántas máquinas simples usas cada día sin darte cuenta. 
            ¡La física está en todas partes!
          </p>
        </Concept>
      </TheorySection>
    </>
  );
};

export default IntroduccionMaquinasTheory;
