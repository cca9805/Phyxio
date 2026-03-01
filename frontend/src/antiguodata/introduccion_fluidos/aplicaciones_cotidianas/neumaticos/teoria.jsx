import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Neumáticos: Presión y Seguridad",
  descripcion: "Cómo la presión afecta al rendimiento y seguridad de los neumáticos",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaNeumaticos() {
  return (
    <>
      <TheorySection title="Introducción">
        <p>
          Mantener la presión adecuada en los neumáticos es clave para la seguridad, el consumo de combustible y la durabilidad. Los neumáticos son el único punto de contacto entre el vehículo y la carretera, y su correcto funcionamiento depende críticamente de la presión del aire en su interior.
        </p>
      </TheorySection>

      <TheorySection title="Por Qué la Presión Importa">
        <p>
          La presión distribuye la carga del vehículo sobre la superficie de contacto del neumático con el suelo. Una presión incorrecta afecta negativamente múltiples aspectos del rendimiento y seguridad del vehículo.
        </p>
        
        <Concept title="Presión Baja">
          <p>
            Cuando la presión es inferior a la recomendada:
          </p>
          <ul>
            <li>Aumenta la resistencia a la rodadura, incrementando el consumo de combustible hasta un 3%</li>
            <li>Provoca desgaste excesivo en los laterales del neumático</li>
            <li>Genera más calor por flexión excesiva, aumentando el riesgo de reventón</li>
            <li>Reduce la estabilidad en curvas y aumenta la distancia de frenado</li>
            <li>Empeora la respuesta de la dirección, haciendo el vehículo menos preciso</li>
          </ul>
        </Concept>

        <Concept title="Presión Alta">
          <p>
            Cuando la presión es superior a la recomendada:
          </p>
          <ul>
            <li>Reduce la superficie de contacto, concentrando el desgaste en el centro del neumático</li>
            <li>Empeora el agarre, especialmente en superficies mojadas</li>
            <li>Reduce el confort de marcha al transmitir más vibraciones</li>
            <li>Aumenta el riesgo de daños por impactos (baches, bordillos)</li>
            <li>Puede provocar pérdida de tracción en aceleraciones bruscas</li>
          </ul>
        </Concept>

        <Concept title="Presión Correcta">
          <p>
            La presión adecuada optimiza el área de contacto, distribuyendo uniformemente la carga. Esto proporciona el mejor equilibrio entre seguridad, confort, durabilidad y eficiencia. La presión recomendada varía según el vehículo, la carga y las condiciones de uso.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Cómo Comprobar la Presión">
        <p>
          Utiliza un manómetro para medir la presión y sigue las recomendaciones del fabricante del vehículo. La presión correcta suele indicarse en una etiqueta en el marco de la puerta del conductor o en el manual del vehículo.
        </p>
        
        <Concept title="Procedimiento Correcto">
          <ul>
            <li>Comprueba la presión en frío (antes de circular o después de 3 horas parado)</li>
            <li>La temperatura aumenta la presión del aire; medir en caliente da lecturas falsamente altas</li>
            <li>Verifica las cuatro ruedas y la rueda de repuesto</li>
            <li>Ajusta la presión según la carga: más presión si viajas con carga pesada o remolque</li>
            <li>Comprueba la presión al menos una vez al mes y antes de viajes largos</li>
          </ul>
        </Concept>

        <Concept title="Unidades de Medida">
          <p>
            La presión de neumáticos se expresa en diferentes unidades según el país:
          </p>
          <ul>
            <li>Bar: común en Europa (1 bar = 100,000 Pa)</li>
            <li>PSI (libras por pulgada cuadrada): común en EE.UU. (1 bar ≈ 14.5 PSI)</li>
            <li>kPa (kilopascales): unidad del Sistema Internacional (1 bar = 100 kPa)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Consecuencias de la Presión Incorrecta">
        <Concept title="Mayor Consumo de Combustible">
          <p>
            Los neumáticos con presión baja aumentan la resistencia a la rodadura. El motor debe trabajar más para mantener la velocidad, incrementando el consumo de combustible. Estudios demuestran que una presión 20% inferior a la recomendada puede aumentar el consumo hasta un 3%.
          </p>
        </Concept>

        <Concept title="Desgaste Irregular">
          <p>
            La presión incorrecta provoca patrones de desgaste característicos:
          </p>
          <ul>
            <li>Presión baja: desgaste en los laterales</li>
            <li>Presión alta: desgaste en el centro</li>
            <li>Desalineación: desgaste en un solo lado</li>
            <li>Desequilibrio: desgaste en parches irregulares</li>
          </ul>
        </Concept>

        <Concept title="Riesgo de Reventón">
          <p>
            Los neumáticos con presión baja se flexionan excesivamente, generando calor. A altas velocidades o temperaturas ambientales elevadas, este calor puede debilitar la estructura del neumático y provocar un reventón súbito, especialmente peligroso en autopista.
          </p>
        </Concept>

        <Concept title="Pérdida de Control">
          <p>
            La presión incorrecta afecta la capacidad del neumático para mantener contacto óptimo con la carretera. Esto reduce el agarre en curvas, aumenta la distancia de frenado y puede provocar aquaplaning en superficies mojadas.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Factores que Afectan la Presión">
        <Concept title="Temperatura">
          <p>
            La presión del aire aumenta aproximadamente 0.1 bar por cada 10°C de incremento de temperatura. Por eso es importante comprobar la presión en frío y ajustarla según la estación del año. En invierno, la presión puede bajar significativamente.
          </p>
        </Concept>

        <Concept title="Pérdida Natural">
          <p>
            Los neumáticos pierden presión gradualmente incluso sin pinchazos, aproximadamente 0.1 bar al mes. Esto ocurre porque las moléculas de aire atraviesan lentamente el caucho. Por eso es necesario comprobar la presión regularmente.
          </p>
        </Concept>

        <Concept title="Altitud">
          <p>
            Al subir a altitudes elevadas, la presión atmosférica disminuye pero la presión dentro del neumático permanece constante. Esto puede hacer que los neumáticos parezcan sobreinflados. Al descender, el efecto es inverso.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🚗</span> Aplicaciones y Tipos de Neumáticos</h2>
        
        <h4>Neumáticos de Automóvil</h4>
        <p>
          Los neumáticos de turismos típicamente operan entre 2.0 y 2.5 bares. Los neumáticos de verano, invierno y todas las estaciones tienen diferentes características de presión y rendimiento. Los neumáticos de invierno mantienen mejor flexibilidad a bajas temperaturas, mejorando el agarre en frío.
        </p>

        <h4>Neumáticos de Bicicleta</h4>
        <p>
          Las bicicletas de carretera utilizan presiones muy altas (7-9 bares) para minimizar la resistencia a la rodadura. Las bicicletas de montaña usan presiones más bajas (2-3 bares) para mejorar el agarre y absorción de impactos en terreno irregular.
        </p>

        <h4>Neumáticos de Camión</h4>
        <p>
          Los camiones utilizan presiones más altas (hasta 9 bares) para soportar cargas pesadas. Tienen sistemas de monitorización de presión obligatorios que alertan al conductor de pérdidas de presión, críticas para la seguridad con cargas pesadas.
        </p>

        <h4>Neumáticos de Avión</h4>
        <p>
          Los neumáticos de aviones comerciales operan a presiones extremadamente altas (12-15 bares) para soportar el enorme peso durante el aterrizaje. Están rellenos de nitrógeno en lugar de aire para evitar cambios de presión con la temperatura y reducir el riesgo de incendio.
        </p>

        <h4>Neumáticos Run-Flat</h4>
        <p>
          Los neumáticos run-flat tienen flancos reforzados que permiten circular hasta 80 km a velocidad reducida incluso con pérdida total de presión. Esto elimina la necesidad de rueda de repuesto, pero requieren sistemas de monitorización de presión obligatorios.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de los Neumáticos</h2>
        <p>
          Los primeros vehículos utilizaban ruedas de madera o metal, proporcionando una marcha extremadamente incómoda. En 1845, Robert William Thomson patentó el primer neumático inflable, pero la idea no prosperó debido a limitaciones tecnológicas de la época.
        </p>
        <p>
          John Boyd Dunlop reinventó el neumático inflable en 1888 para mejorar la comodidad de la bicicleta de su hijo. Su diseño utilizaba una cámara de aire dentro de una cubierta de caucho, revolucionando el transporte. La empresa Dunlop se convirtió en uno de los mayores fabricantes de neumáticos del mundo.
        </p>
        <p>
          En 1895, los hermanos Michelin desarrollaron el primer neumático desmontable para automóviles, facilitando las reparaciones. Anteriormente, los neumáticos estaban pegados permanentemente a las llantas, haciendo las reparaciones extremadamente laboriosas.
        </p>
        <p>
          El neumático sin cámara (tubeless) fue introducido por Goodrich en 1947. Estos neumáticos sellan directamente contra la llanta, eliminando la cámara interior. Son más seguros porque pierden presión gradualmente en caso de pinchazo, en lugar del desinflado súbito de los neumáticos con cámara.
        </p>
        <p>
          Los sistemas de monitorización de presión de neumáticos (TPMS) se hicieron obligatorios en Estados Unidos en 2007 y en Europa en 2014. Estos sistemas alertan al conductor cuando la presión cae por debajo del nivel seguro, mejorando significativamente la seguridad vial.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Neumáticos</h2>
        <p>
          Los neumáticos de los vehículos lunares de las misiones Apollo no contenían aire. Estaban hechos de malla de acero trenzado porque no hay atmósfera en la Luna. Podían soportar el peso del vehículo y absorber impactos sin necesidad de presión interna.
        </p>
        <p>
          Un neumático de Fórmula 1 pierde hasta 0.5 kg de peso durante una carrera debido al desgaste. Los neumáticos de F1 operan a temperaturas de 100-130°C y presiones cuidadosamente controladas. Los equipos ajustan la presión en incrementos de 0.1 PSI para optimizar el rendimiento.
        </p>
        <p>
          El neumático más grande del mundo es el Titan 63, utilizado en camiones mineros gigantes. Mide 4 metros de diámetro, pesa 5.5 toneladas y cuesta más de 40,000 euros. Puede soportar cargas de hasta 100 toneladas.
        </p>
        <p>
          Los neumáticos modernos contienen más de 200 componentes diferentes, incluyendo caucho natural, caucho sintético, acero, textiles y diversos productos químicos. El proceso de fabricación es tan complejo que un neumático puede tardar varios días en completarse.
        </p>
        <p>
          El nitrógeno se utiliza en neumáticos de competición y aviación porque sus moléculas son más grandes que las del oxígeno, reduciendo la pérdida de presión. Además, el nitrógeno no contiene humedad, evitando cambios de presión por condensación y reduciendo la corrosión de las llantas.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Neumáticos y Presión</h3>
        <p>
          La presión correcta de los neumáticos es fundamental para la seguridad, eficiencia y durabilidad. Una presión inadecuada afecta negativamente el agarre, aumenta el consumo de combustible, provoca desgaste irregular y puede causar reventones peligrosos.
        </p>
        <p>
          Es esencial comprobar la presión regularmente (al menos mensualmente) en frío, siguiendo las recomendaciones del fabricante. La presión debe ajustarse según la carga, la temperatura ambiente y las condiciones de uso. Los sistemas modernos de monitorización (TPMS) ayudan a mantener la presión óptima alertando de pérdidas.
        </p>
        <p>
          Comprender la importancia de la presión de neumáticos y mantenerla correctamente no solo mejora la seguridad y el rendimiento del vehículo, sino que también reduce costes de combustible y prolonga la vida útil de los neumáticos. Es una de las tareas de mantenimiento más simples pero más importantes que puede realizar cualquier conductor.
        </p>
      </div>
    </>
  );
}
