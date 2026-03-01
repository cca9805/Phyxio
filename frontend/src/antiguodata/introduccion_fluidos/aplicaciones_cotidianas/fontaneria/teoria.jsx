import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Fontanería: Presión en Tuberías y Abastecimiento",
  descripcion: "Cómo la presión permite el suministro de agua y ejemplos cotidianos en fontanería",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

export default function TeoriaFontaneria() {
  return (
    <>
      <TheorySection title="Introducción">
        <p>
          La presión es esencial para llevar agua a las viviendas y permite que el agua salga con fuerza por grifos y duchas. Los sistemas de fontanería modernos utilizan principios físicos fundamentales para garantizar un suministro constante y seguro de agua en edificios de todas las alturas.
        </p>
      </TheorySection>

      <TheorySection title="Bombas y Depósitos">
        <p>
          Las bombas aumentan la presión del agua para elevarla a pisos altos, venciendo la fuerza de la gravedad. Los depósitos elevados actúan como reservas que mantienen una presión constante mediante la altura de la columna de agua.
        </p>
        
        <Concept title="Funcionamiento de las Bombas">
          <p>
            Las bombas hidráulicas convierten energía mecánica en energía de presión. Existen diferentes tipos:
          </p>
          <ul>
            <li>Bombas centrífugas: utilizan la rotación para impulsar el agua</li>
            <li>Bombas de desplazamiento positivo: mueven volúmenes fijos de agua</li>
            <li>Bombas de presión constante: ajustan automáticamente su velocidad según la demanda</li>
          </ul>
        </Concept>

        <Concept title="Depósitos de Agua">
          <p>
            Los depósitos en azoteas aprovechan la gravedad para mantener presión. La presión en un punto depende de la altura de la columna de agua sobre ese punto. Por cada 10 metros de altura, la presión aumenta aproximadamente 1 bar (100,000 Pa).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión en Tuberías">
        <p>
          La presión en las tuberías debe ser suficiente para que el agua llegue a todos los puntos de consumo, pero no tan alta que dañe las instalaciones o provoque fugas. La presión típica en viviendas oscila entre 2 y 4 bares.
        </p>
        
        <Concept title="Factores que Afectan la Presión">
          <ul>
            <li>Altura del edificio: a mayor altura, se necesita más presión</li>
            <li>Diámetro de las tuberías: tuberías más estrechas generan mayor pérdida de presión</li>
            <li>Longitud del recorrido: tuberías más largas pierden más presión por fricción</li>
            <li>Número de consumos simultáneos: más grifos abiertos reducen la presión disponible</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Fugas y Seguridad">
        <p>
          Una fuga provoca pérdida de presión y puede dañar instalaciones. Por eso se usan válvulas de corte, reguladores de presión y sistemas de detección para mantener la seguridad del sistema.
        </p>
        
        <Concept title="Válvulas de Seguridad">
          <p>
            Las válvulas de corte permiten aislar secciones de la instalación para reparaciones sin interrumpir todo el suministro. Las válvulas reductoras de presión protegen las instalaciones de presiones excesivas que podrían dañar tuberías, grifos y electrodomésticos.
          </p>
        </Concept>

        <Concept title="Detección de Fugas">
          <p>
            Las fugas pueden detectarse mediante:
          </p>
          <ul>
            <li>Inspección visual de manchas de humedad</li>
            <li>Medidores de consumo que detectan flujo continuo</li>
            <li>Sensores de humedad en zonas críticas</li>
            <li>Pruebas de presión periódicas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Concept title="Presión en la Ducha">
          <p>
            La presión del agua determina la fuerza con que sale por la ducha. Una presión baja produce un chorro débil, mientras que una presión excesiva puede ser incómoda y desperdiciar agua. Los reguladores de caudal permiten mantener un flujo agradable ahorrando agua.
          </p>
        </Concept>

        <Concept title="Regulación de Caudal en Grifos">
          <p>
            Los aireadores en grifos mezclan aire con el agua, manteniendo la sensación de presión mientras reducen el consumo. Estos dispositivos pueden ahorrar hasta un 50% de agua sin afectar la comodidad de uso.
          </p>
        </Concept>

        <Concept title="Sistemas de Riego Doméstico">
          <p>
            Los sistemas de riego automático requieren presión constante para funcionar correctamente. Los aspersores necesitan presión suficiente para alcanzar el radio de cobertura deseado, mientras que los sistemas de goteo funcionan con presiones más bajas pero constantes.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span>🚰</span> Aplicaciones en Fontanería Moderna</h2>
        
        <h4>Sistemas de Agua Caliente</h4>
        <p>
          Los calentadores de agua deben mantener presión adecuada para funcionar correctamente. Los sistemas de agua caliente sanitaria incluyen válvulas de seguridad que liberan presión si la temperatura aumenta excesivamente, evitando explosiones.
        </p>

        <h4>Inodoros y Cisternas</h4>
        <p>
          Las cisternas utilizan la presión del agua para llenarse rápidamente después de cada descarga. Los mecanismos modernos incluyen sistemas de doble descarga que permiten ahorrar agua ajustando el volumen según la necesidad.
        </p>

        <h4>Lavavajillas y Lavadoras</h4>
        <p>
          Estos electrodomésticos requieren presión mínima (generalmente 1 bar) para funcionar correctamente. Presiones insuficientes alargan los ciclos de lavado y reducen la eficiencia de limpieza.
        </p>

        <h4>Sistemas Contra Incendios</h4>
        <p>
          Los edificios altos incluyen sistemas de presión dedicados para bocas de incendio. Estos sistemas mantienen presión elevada constantemente para garantizar que el agua llegue con fuerza suficiente en caso de emergencia.
        </p>
      </div>

      <div className="theory-history-section">
        <h2><span>📜</span> Historia de la Fontanería</h2>
        <p>
          Los primeros sistemas de fontanería datan de civilizaciones antiguas. Los romanos construyeron acueductos impresionantes que transportaban agua desde manantiales hasta las ciudades, utilizando la gravedad y la presión hidrostática. Algunos acueductos romanos siguen funcionando después de 2,000 años.
        </p>
        <p>
          En el siglo XIX, el desarrollo de bombas de vapor permitió llevar agua a edificios altos. La invención de tuberías de hierro fundido y posteriormente de cobre mejoró la durabilidad y seguridad de las instalaciones. Las ciudades comenzaron a construir redes de distribución centralizadas con depósitos elevados.
        </p>
        <p>
          El siglo XX trajo innovaciones como las tuberías de PVC y polietileno, más ligeras y resistentes a la corrosión. Los sistemas de presión constante con bombas automáticas eliminaron la necesidad de depósitos elevados en muchos edificios. Los reguladores de presión y válvulas de seguridad mejoraron la fiabilidad de las instalaciones.
        </p>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span>💡</span> Curiosidades sobre Fontanería</h2>
        <p>
          El edificio más alto del mundo, el Burj Khalifa en Dubái (828 metros), requiere un sistema de bombeo en cascada con múltiples estaciones intermedias. No es posible bombear agua directamente desde el suelo hasta la cima debido a las limitaciones de presión de las tuberías.
        </p>
        <p>
          En la Estación Espacial Internacional, el agua se recicla constantemente debido al alto coste de transportarla desde la Tierra. El sistema de reciclaje recupera agua de la orina, el sudor y la humedad del aire, purificándola hasta hacerla potable. La presión se mantiene mediante bombas especiales que funcionan en gravedad cero.
        </p>
        <p>
          Las fugas de agua pueden ser muy costosas. Una fuga pequeña que gotea una vez por segundo puede desperdiciar más de 10,000 litros al año. Por eso, muchas ciudades utilizan sistemas de detección acústica que identifican fugas en tuberías subterráneas mediante el sonido del agua escapando.
        </p>
        <p>
          El grifo moderno con mezclador de agua fría y caliente fue inventado en 1937 por Alfred M. Moen después de quemarse las manos con agua demasiado caliente. Antes de esto, los grifos tenían mandos separados para agua fría y caliente, dificultando obtener la temperatura deseada.
        </p>
      </div>

      <div className="formula-card">
        <h3>Resumen: Fontanería y Presión del Agua</h3>
        <p>
          La fontanería moderna depende del control preciso de la presión del agua para garantizar un suministro eficiente y seguro. Las bombas y depósitos elevados generan y mantienen la presión necesaria para que el agua llegue a todos los puntos de consumo, incluso en edificios altos.
        </p>
        <p>
          La presión en las tuberías debe equilibrarse cuidadosamente: suficiente para un funcionamiento adecuado pero no excesiva para evitar daños. Los sistemas de seguridad como válvulas reductoras, válvulas de corte y detectores de fugas protegen las instalaciones y previenen desperdicios.
        </p>
        <p>
          Comprender los principios de presión en fontanería permite optimizar el consumo de agua, detectar problemas tempranamente y mantener sistemas eficientes. La evolución de la fontanería desde los acueductos romanos hasta los sistemas automatizados modernos demuestra la importancia continua de estos principios físicos fundamentales.
        </p>
      </div>
    </>
  );
}
