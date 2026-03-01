import { TheorySection, Concept, Important, Example } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Aplicaciones Cotidianas del Magnetismo",
  descripcion: "Dónde encontramos magnetismo en la vida diaria",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const AplicacionesCotidianas = ({ exercises }) => {
  return (
    <>
      <Concept title="El magnetismo está en todas partes" color="purple" icon="🏠">
        <p>
          Aunque no lo veas, el magnetismo está presente en docenas 
          de objetos y tecnologías que usas cada día. Desde tu móvil hasta el tren, 
          pasando por altavoces, motores y tarjetas de crédito.
        </p>
        <div className="destacado">
          <p>
            💡 Dato curioso: Una casa moderna típica contiene más de 
            50 imanes y electroimanes en diferentes dispositivos. ¡Probablemente llevas 
            varios en tu bolsillo ahora mismo!
          </p>
        </div>
      </Concept>

      <TheorySection title="En Casa">
        <Concept title="Electrodomésticos y hogar">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>❄️ Nevera y Congelador</h4>
              <p>
                Imanes en la puerta: Mantienen el cierre hermético. 
                Son tiras de goma con polvo magnético.
              </p>
              <p>
                Motor del compresor: Electroimán que hace girar el 
                compresor para enfriar.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>👕 Lavadora y Secadora</h4>
              <p>
                Motor eléctrico: Electroimanes que hacen girar el tambor. 
                Pueden invertir el giro (atracción/repulsión).
              </p>
              <p>
                Válvulas electromagnéticas: Controlan el paso del agua.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🍽️ Lavavajillas</h4>
              <p>
                Bomba de agua: Motor electromagnético que impulsa el agua.
              </p>
              <p>
                Electroválvulas: Abren y cierran el paso del agua.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🌀 Ventiladores</h4>
              <p>
                Motor eléctrico: Electroimanes que hacen girar las aspas. 
                Diferentes velocidades = diferentes corrientes.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔔 Timbre</h4>
              <p>
                Electroimán vibrante: Atrae un martillo que golpea 
                una campana repetidamente.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🚪 Cerraduras Magnéticas</h4>
              <p>
                Electroimán potente: Mantiene la puerta cerrada. 
                Se desactiva con tarjeta o código.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Electrónica y Comunicación">
        <Concept title="Dispositivos electrónicos">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>📱 Teléfonos Móviles</h4>
              <p>
                Altavoz y micrófono: Imanes que convierten señal 
                eléctrica en sonido y viceversa.
              </p>
              <p>
                Motor de vibración: Pequeño motor con peso excéntrico.
              </p>
              <p>
                Brújula digital: Sensor magnético (magnetómetro).
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔊 Altavoces y Auriculares</h4>
              <p>
                Imán permanente + bobina: La señal eléctrica hace 
                vibrar la bobina en el campo magnético, moviendo la membrana.
              </p>
              <p>
                Señal eléctrica → Movimiento → Ondas sonoras
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🎤 Micrófonos</h4>
              <p>
                Proceso inverso al altavoz: El sonido mueve una 
                membrana con bobina en un campo magnético, generando señal eléctrica.
              </p>
              <p>
                Ondas sonoras → Movimiento → Señal eléctrica
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>💾 Discos Duros</h4>
              <p>
                Almacenamiento magnético: Millones de pequeñas 
                regiones magnetizadas representan 0s y 1s.
              </p>
              <p>
                Cabezal electromagnético: Lee y escribe datos 
                magnetizando/desmagnetizando regiones.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>📺 Televisores Antiguos (CRT)</h4>
              <p>
                Electroimanes deflectores: Dirigían el haz de 
                electrones para dibujar la imagen.
              </p>
              <p>
                (Los TV modernos LED/OLED no usan magnetismo)
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Transporte">
        <Concept title="Vehículos y movilidad">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🚗 Automóviles</h4>
              <p>
                Motor de arranque: Potente electroimán que arranca 
                el motor de combustión.
              </p>
              <p>
                Alternador: Genera electricidad usando magnetismo 
                (inducción electromagnética).
              </p>
              <p>
                Sensores ABS: Detectan la velocidad de las ruedas 
                magnéticamente.
              </p>
              <p>
                Altavoces: Sistema de audio del coche.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🚄 Trenes Maglev</h4>
              <p>
                Levitación magnética: Electroimanes potentes levantan 
                el tren, eliminando fricción.
              </p>
              <p>
                Propulsión: Campos magnéticos alternos impulsan el tren.
              </p>
              <p>
                Velocidad: Pueden alcanzar 600 km/h.
              </p>
              <p>
                Ejemplos: Shanghái Maglev (China), SCMaglev (Japón)
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🚲 Bicicletas Eléctricas</h4>
              <p>
                Motor eléctrico: Electroimanes que asisten el pedaleo.
              </p>
              <p>
                Sensor de pedaleo: Detecta magnéticamente cuando pedaleas.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🧭 Navegación</h4>
              <p>
                Brújula: Imán que se alinea con el campo magnético terrestre.
              </p>
              <p>
                GPS: Aunque usa satélites, incluye magnetómetro para orientación.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Medicina y Salud">
        <Concept title="Aplicaciones médicas" color="red" icon="🏥">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🏥 Resonancia Magnética (MRI)</h4>
              <p>
                Electroimanes superconductores: Crean campos de 1.5-3 T 
                (30,000 veces el campo terrestre).
              </p>
              <p>
                Funcionamiento: Los átomos de hidrógeno del cuerpo se 
                alinean con el campo y emiten señales al relajarse.
              </p>
              <p>
                Ventaja: Imágenes detalladas sin radiación.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>💊 Separación Magnética</h4>
              <p>
                Nanopartículas magnéticas: Se unen a células específicas 
                y se separan con imanes.
              </p>
              <p>
                Aplicación: Purificación de sangre, detección de células cancerosas.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🧲 Estimulación Magnética Transcraneal</h4>
              <p>
                Pulsos magnéticos: Estimulan regiones del cerebro.
              </p>
              <p>
                Uso: Tratamiento de depresión, investigación neurológica.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Industria y Tecnología">
        <Concept title="Aplicaciones industriales" color="orange" icon="🏭">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🏗️ Grúas Electromagnéticas</h4>
              <p>
                Electroimanes gigantes: Levantan toneladas de chatarra 
                y materiales ferromagnéticos.
              </p>
              <p>
                Ventaja: Se encienden para agarrar, se apagan para soltar.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>♻️ Separadores Magnéticos</h4>
              <p>
                Reciclaje: Separan metales ferromagnéticos de otros materiales.
              </p>
              <p>
                Minería: Separan minerales magnéticos.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔌 Transformadores</h4>
              <p>
                Núcleo magnético: Transfiere energía entre bobinas 
                mediante inducción electromagnética.
              </p>
              <p>
                Uso: Cambiar voltaje en la red eléctrica.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚡ Generadores Eléctricos</h4>
              <p>
                Imanes giratorios: Generan electricidad por inducción 
                electromagnética.
              </p>
              <p>
                Uso: Centrales eléctricas, dinamos de bicicleta.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔬 Aceleradores de Partículas</h4>
              <p>
                Electroimanes potentes: Guían partículas a velocidades 
                cercanas a la luz.
              </p>
              <p>
                Ejemplo: LHC (CERN) usa 9,300 electroimanes.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Seguridad y Acceso">
        <Concept title="Sistemas de seguridad">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>💳 Tarjetas Magnéticas</h4>
              <p>
                Banda magnética: Almacena información en regiones 
                magnetizadas.
              </p>
              <p>
                Uso: Tarjetas de crédito, transporte, hoteles.
              </p>
              <p>
                Problema: Se pueden desmagnetizar con imanes potentes.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🚪 Cerraduras Electromagnéticas</h4>
              <p>
                Electroimán potente: Mantiene la puerta cerrada con 
                cientos de kg de fuerza.
              </p>
              <p>
                Seguridad: Se desactiva al cortar corriente (salidas de emergencia).
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🛒 Sistemas Antirrobo</h4>
              <p>
                Etiquetas magnéticas: Activan alarmas si no se desmagnetizan.
              </p>
              <p>
                Arcos detectores: Detectan campos magnéticos de las etiquetas.
              </p>
            </div>
          </div>
        </Concept>
      </TheorySection>

      <Concept title="El futuro del magnetismo" color="teal" icon="🚀">
        <p>
          Las aplicaciones del magnetismo siguen evolucionando:
        </p>
        <ul>
          <li>
            Computación cuántica: Usa propiedades magnéticas de átomos 
            para procesar información
          </li>
          <li>
            Levitación magnética: Hyperloop y nuevos sistemas de transporte
          </li>
          <li>
            Almacenamiento magnético: Discos duros cada vez más densos
          </li>
          <li>
            Energía: Generadores más eficientes, fusión nuclear controlada
          </li>
          <li>
            Medicina: Nanorobots magnéticos para cirugía mínimamente invasiva
          </li>
          <li>
            Materiales: Metamateriales con propiedades magnéticas únicas
          </li>
        </ul>
      </Concept>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia de las aplicaciones magnéticas</h2>
        <p>
          La primera aplicación práctica del magnetismo fue la brújula, inventada en China hace más de 
          2,000 años. En 1831, Michael Faraday descubrió la inducción electromagnética, permitiendo 
          crear generadores y motores eléctricos. Thomas Edison construyó la primera central eléctrica 
          en 1882, usando generadores electromagnéticos. En 1879, Werner von Siemens presentó el primer 
          tren eléctrico. El siglo XX vio la explosión de aplicaciones: altavoces (1924), discos duros 
          (1956), resonancia magnética (1977), y trenes maglev comerciales (2004).
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Un disco duro moderno puede almacenar 20 TB usando magnetismo en un espacio del tamaño de un libro. 
          Los altavoces más potentes del mundo, en conciertos de rock, usan electroimanes que consumen 
          suficiente electricidad para alimentar una casa. Las tarjetas magnéticas se pueden borrar 
          accidentalmente si las guardas junto a tu móvil o imanes de nevera. El tren maglev de Shanghái 
          recorre 30 km en solo 7 minutos, flotando a 1 cm sobre las vías. Una resonancia magnética cuesta 
          más de 1 millón de euros y consume tanta electricidad como 50 casas, pero salva miles de vidas 
          cada año detectando enfermedades invisibles a otros métodos.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>El magnetismo está presente en docenas de dispositivos cotidianos</li>
            <li>Motores eléctricos: Electrodomésticos, vehículos, ventiladores</li>
            <li>Altavoces y micrófonos: Conversión sonido ↔ electricidad</li>
            <li>Almacenamiento: Discos duros, tarjetas magnéticas</li>
            <li>Transporte: Trenes maglev, motores de arranque</li>
            <li>Medicina: Resonancia magnética, tratamientos</li>
            <li>Industria: Grúas, separadores, generadores</li>
          </ul>
          <Important>
            <p>
              🌟 Conclusión: El magnetismo es una de las fuerzas más útiles 
              y versátiles de la naturaleza. Sin él, la tecnología moderna sería imposible.
            </p>
          </Important>
        </div>
      </div>
    </>
  );
};

export default AplicacionesCotidianas;
