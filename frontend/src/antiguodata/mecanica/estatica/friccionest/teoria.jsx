import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Fricción Estática",
  descripcion: "Fricción estática, coeficiente de fricción y equilibrio en superficies",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const FriccionEst_Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Fricción en Equilibrio">
        <p>
          La fricción estática (ƒs) es la fuerza que se opone al inicio del deslizamiento entre dos superficies en contacto. A diferencia de la fricción cinética, su valor es variable y se ajusta a la fuerza externa que intenta provocar el movimiento.
        </p>
        <p>
          La fricción es fundamental en nuestra vida diaria: permite caminar sin resbalar, que los neumáticos agarren el asfalto, 
          y que los objetos permanezcan en reposo sobre superficies inclinadas. Sin fricción, sería imposible moverse o sostener objetos.
        </p>
        <Important>
          <p>Mientras un objeto permanezca en reposo, la fuerza de fricción estática será siempre igual y opuesta a la componente de la fuerza aplicada que es paralela a la superficie.</p>
        </Important>
      </TheorySection>

      <TheorySection title="Fuerza de Fricción Estática Máxima">
        <Concept title="Condición de Deslizamiento Inminente">
          <p>
            La fuerza de fricción estática no puede aumentar indefinidamente. Existe un valor máximo, conocido como fricción estática máxima (ƒs,max), que depende del coeficiente de fricción estática (μs) y de la magnitud de la fuerza normal (N) entre las superficies.
          </p>
          <Formula
            expression={String.raw`f_s \le \mu_s \cdot N`}
            calculatorId="friccion-estatica"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Fuerza Máxima de Fricción Estática", expression: String.raw`f_{s,max} = \mu_s \cdot N` },
            ]}
          />
          
          <p>Donde:</p>
          <ul>
            <li>f_s: Fuerza de fricción estática (N)</li>
            <li>μ_s: Coeficiente de fricción estática (adimensional)</li>
            <li>N: Fuerza normal (N)</li>
            <li>f_s,max: Fuerza máxima de fricción estática (N)</li>
          </ul>
          
          <p>
            Si la fuerza aplicada supera a ƒs,max, el objeto comenzará a moverse y la fricción pasará a ser cinética (ƒk), que generalmente es menor.
          </p>
          
          <Example>
            Un bloque de 10 kg sobre una superficie con μs = 0.5 tiene una fuerza normal N = 98 N. 
            La fricción estática máxima es ƒs,max = 0.5 × 98 = 49 N. Si empujas con 30 N, el bloque no se mueve 
            (ƒs = 30 N). Si empujas con 60 N, superas ƒs,max y el bloque comienza a deslizarse.
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Coeficiente de Fricción Estática">
        <Concept title="Factores que Afectan la Fricción">
          <p>
            El coeficiente de fricción estática (μs) es una propiedad que depende de los materiales en contacto 
            y del estado de las superficies (rugosidad, limpieza, temperatura). Es adimensional y típicamente 
            mayor que el coeficiente de fricción cinética (μk).
          </p>
          <p>Valores típicos de μs:</p>
          <ul>
            <li>Acero sobre acero (seco): μs ≈ 0.74</li>
            <li>Madera sobre madera: μs ≈ 0.25-0.50</li>
            <li>Caucho sobre asfalto (seco): μs ≈ 0.90</li>
            <li>Caucho sobre asfalto (mojado): μs ≈ 0.60</li>
            <li>Hielo sobre hielo: μs ≈ 0.10</li>
            <li>Teflón sobre teflón: μs ≈ 0.04</li>
          </ul>
          <Important>
            <p>
              La fricción NO depende del área de contacto aparente. Un bloque de 1 kg tiene la misma fricción 
              ya sea apoyado sobre su cara grande o pequeña (siempre que la fuerza normal sea la misma).
            </p>
          </Important>
        </Concept>

        <Concept title="Fricción en Planos Inclinados">
          <p>
            En un plano inclinado, un objeto permanece en reposo si la componente del peso paralela al plano 
            (mg sin θ) no supera la fricción estática máxima (μs N). La fuerza normal es N = mg cos θ.
          </p>
          <p>
            El ángulo máximo antes de que el objeto comience a deslizar se llama ángulo de reposo (θmax), 
            y cumple: tan θmax = μs
          </p>
          <Example>
            Si μs = 0.5 entre un bloque y un plano, el ángulo de reposo es θmax = arctan(0.5) ≈ 26.6°. 
            Si el plano se inclina más, el bloque comenzará a deslizarse.
          </Example>
        </Concept>
      </TheorySection>

      <h2><span>🏗️</span> Aplicaciones Prácticas</h2>
      <div className="theory-applications-section">
        <div className="theory-subsection">
          <h3>🚗 Neumáticos y Seguridad Vial</h3>
          <p>
            Los neumáticos dependen de la fricción estática para acelerar, frenar y girar. En asfalto seco, 
            μs ≈ 0.9, pero en mojado baja a 0.6 y en hielo a 0.1. Los sistemas ABS evitan que las ruedas se bloqueen, 
            manteniendo la fricción estática (mayor que la cinética). Un coche a 100 km/h en asfalto seco necesita 
            unos 40 m para frenar, pero en hielo necesita más de 400 m.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>👟 Calzado Deportivo</h3>
          <p>
            Las suelas de zapatillas deportivas se diseñan para maximizar μs. Las zapatillas de baloncesto tienen 
            μs ≈ 1.0 en parquet para permitir cambios de dirección rápidos. Los tacos de fútbol penetran el césped 
            aumentando la fricción. Las zapatillas de escalada usan caucho especial con μs superior a 1.2 en roca.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏗️ Construcción y Estructuras</h3>
          <p>
            La fricción entre bloques de hormigón o ladrillos permite construir muros sin mortero en algunas técnicas. 
            Los tornillos y tuercas se mantienen apretados por fricción estática. Los clavos sostienen por fricción 
            entre el metal y la madera. Las vigas de acero en puentes se apoyan sobre neopreno que proporciona 
            fricción controlada.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎸 Instrumentos Musicales</h3>
          <p>
            Los violinistas aplican resina al arco para aumentar μs con las cuerdas, permitiendo que el arco 
            "agarre" la cuerda y la haga vibrar. Sin fricción suficiente, el arco simplemente resbalaría. 
            Los guitarristas usan púas con superficies texturizadas para aumentar la fricción con las cuerdas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏔️ Escalada y Montañismo</h3>
          <p>
            Los escaladores dependen de la fricción entre sus manos, pies y la roca. Usan magnesio (carbonato de magnesio) 
            para secar el sudor y aumentar μs. Las cuerdas de escalada generan fricción en los dispositivos de aseguramiento 
            para detener caídas. Un mosquetón con cuerda puede generar fuerzas de fricción de miles de newtons.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔧 Herramientas y Maquinaria</h3>
          <p>
            Las llaves de tuercas funcionan por fricción entre la herramienta y la tuerca. Los frenos de disco 
            en bicicletas y automóviles usan fricción para convertir energía cinética en calor. Las correas de 
            transmisión en motores transfieren potencia por fricción. Los embragues de automóviles conectan 
            motor y transmisión mediante fricción controlada.
          </p>
        </div>
      </div>

      <h2><span>📜</span> Historia y Desarrollo</h2>
      <div className="theory-history-section">
        <div className="theory-subsection">
          <h3>🏛️ Antigüedad: Observaciones Empíricas (3000 a.C.)</h3>
          <p>
            Los egipcios usaban troncos como rodillos y lubricaban con agua o aceite para reducir la fricción 
            al mover bloques de piedra de las pirámides. Comprendían empíricamente que superficies más lisas 
            y lubricadas facilitaban el movimiento, aunque no tenían teoría formal.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Renacimiento: Primeros Estudios (1500)</h3>
          <p>
            Leonardo da Vinci (1452-1519) fue el primero en estudiar sistemáticamente la fricción. Descubrió 
            que la fricción es proporcional a la carga (fuerza normal) e independiente del área de contacto. 
            También observó que μs &gt; μk, aunque no usó esta notación. Sus estudios permanecieron en cuadernos 
            privados durante siglos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚖️ Era Clásica: Leyes de la Fricción (1699-1785)</h3>
          <p>
            Guillaume Amontons (1663-1705) redescubrió las leyes de Leonardo en 1699 y las publicó. 
            Charles-Augustin de Coulomb (1736-1806) realizó experimentos exhaustivos en 1785, distinguiendo 
            claramente entre fricción estática y cinética, y estableciendo las leyes que llevan su nombre. 
            Introdujo el concepto de coeficiente de fricción.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔬 Era Moderna: Teoría Microscópica (1950-presente)</h3>
          <p>
            En el siglo XX se desarrolló la comprensión microscópica de la fricción. Se descubrió que la fricción 
            se debe a enlaces atómicos entre superficies en contacto real (que es mucho menor que el área aparente). 
            La tribología moderna estudia fricción, desgaste y lubricación a nivel molecular. Los microscopios 
            de fuerza atómica (AFM) permiten medir fricción entre átomos individuales.
          </p>
        </div>
      </div>

      <h2><span>🎯</span> Anécdotas y Curiosidades</h2>
      <div className="theory-anecdotes-section">
        <div className="theory-subsection">
          <h3>🏎️ El Récord de Frenado más Corto</h3>
          <p>
            En 2020, un Porsche 911 GT2 RS frenó de 100 a 0 km/h en solo 29.8 metros, gracias a neumáticos 
            especiales con μs ≈ 1.2 y frenos de carbono-cerámica. Esto representa una desaceleración de 1.2 g, 
            cerca del límite físico de la fricción entre caucho y asfalto.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🧊 El Hielo No Es Tan Resbaladizo</h3>
          <p>
            Contrario a la creencia popular, el hielo puro a -40°C tiene μs ≈ 0.3 (similar a madera sobre madera). 
            Es resbaladizo cerca de 0°C porque la presión de nuestro peso derrite una fina capa de agua que actúa 
            como lubricante. Los patinadores de hielo se deslizan sobre esta película de agua microscópica.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🦎 Los Geckos y la Fricción Molecular</h3>
          <p>
            Los geckos pueden caminar por paredes y techos gracias a millones de pelos microscópicos (setae) 
            en sus patas que generan fuerzas de Van der Waals. Cada pata puede soportar 20 veces el peso del gecko. 
            Esto inspiró el desarrollo de adhesivos sintéticos que funcionan sin pegamento químico.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏔️ El Accidente del Everest (1996)</h3>
          <p>
            Durante la tragedia del Everest de 1996, varios escaladores murieron parcialmente porque el hielo 
            a -40°C tenía fricción insuficiente para los crampones. A esas temperaturas extremas, el hielo es 
            más duro y resbaladizo. Los crampones modernos tienen diseños especiales para aumentar la fricción 
            en hielo extremadamente frío.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🚀 Fricción en el Espacio</h3>
          <p>
            En el vacío del espacio, dos superficies metálicas limpias pueden soldarse en frío por fricción 
            molecular, un fenómeno llamado adhesión por vacío. Los satélites usan lubricantes especiales y 
            recubrimientos para evitar que las partes móviles se peguen. La ISS tiene problemas ocasionales 
            con mecanismos que se atascan por este efecto.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🎯 El Material Más Resbaladizo</h3>
          <p>
            El PTFE (teflón) tiene uno de los coeficientes de fricción más bajos: μs ≈ 0.04. Sin embargo, 
            científicos han creado superficies superhidrofóbicas inspiradas en hojas de loto con μs &lt; 0.01. 
            El grafeno tiene μs ≈ 0.001, casi sin fricción. Estas superficies tienen aplicaciones en 
            recubrimientos antiadherentes y reducción de arrastre en fluidos.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          La fricción estática es la fuerza que se opone al inicio del movimiento entre superficies en contacto. 
          Su valor se ajusta automáticamente a la fuerza aplicada hasta alcanzar un máximo: ƒs,max = μs × N, 
          donde μs es el coeficiente de fricción estática y N es la fuerza normal.
        </p>
        <p>
          El coeficiente μs depende de los materiales en contacto y es independiente del área de contacto aparente. 
          Valores típicos van desde 0.04 (teflón) hasta 1.2 (caucho sobre asfalto). La fricción estática es 
          generalmente mayor que la cinética, por eso es más difícil iniciar el movimiento que mantenerlo.
        </p>
        <p>
          La fricción es esencial en aplicaciones cotidianas: permite caminar, que los vehículos frenen, 
          que las herramientas funcionen y que las estructuras permanezcan estables. Desde los estudios de 
          Leonardo da Vinci hasta la tribología moderna, la comprensión de la fricción ha sido fundamental 
          para el desarrollo tecnológico.
        </p>
      </div>
    </>
  );
};

export default FriccionEst_Theory;
