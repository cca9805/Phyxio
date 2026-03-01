import { TheorySection, Concept, Important, ExercisesSection } from '../../../../../components/TheoryV2';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Primeros Auxilios",
  descripcion: "Actuación ante accidentes eléctricos y electrocución",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const PrimerosAuxilios = () => {
  return (
    <>
      <Concept title="Protocolo PAS: Proteger, Avisar, Socorrer" color="red" icon="🚑">
        <div className="conceptos-fundamentales">
          <div className="concepto-fundamental">
            <h4>1️⃣ PROTEGER</h4>
            <p>¡LO MÁS IMPORTANTE!</p>
            <ul>
              <li>NUNCA toques a la víctima si sigue en contacto con la corriente</li>
              <li>Corta la corriente: Baja el interruptor general o desenchufa</li>
              <li>Si no puedes cortar: Separa a la víctima con material aislante (palo de madera seco, cuerda, ropa seca)</li>
              <li>Mantén distancia: Si hay cables de alta tensión, mínimo 20 metros</li>
            </ul>
          </div>

          <div className="concepto-fundamental">
            <h4>2️⃣ AVISAR</h4>
            <p>Llama inmediatamente:</p>
            <ul>
              <li>112: Emergencias (España)</li>
              <li>Informa: Accidente eléctrico, ubicación, estado de la víctima</li>
              <li>No cuelgues hasta que te lo indiquen</li>
              <li>Sigue instrucciones del operador</li>
            </ul>
          </div>

          <div className="concepto-fundamental">
            <h4>3️⃣ SOCORRER</h4>
            <p>Solo si es seguro:</p>
            <ul>
              <li>Comprueba consciencia y respiración</li>
              <li>Si no respira: RCP (si sabes hacerla)</li>
              <li>Posición lateral de seguridad si respira</li>
              <li>Cubre quemaduras con paño limpio</li>
              <li>Mantén a la víctima caliente</li>
            </ul>
          </div>
        </div>

        <Important>
          <p>
            ⚠️ CRÍTICO: Si tocas a alguien que está electrocutado, TÚ TAMBIÉN 
            te electrocutarás. PRIMERO corta la corriente, LUEGO ayuda. Un héroe muerto no 
            salva a nadie.
          </p>
        </Important>
      </Concept>

      <TheorySection title="Actuación Detallada">
        <Concept title="Paso a paso ante una electrocución">
          <div className="warning-box">
            <h3>🚨 Secuencia de actuación</h3>
            <ol>
              <li>
                Evalúa la escena (2 segundos):
                <ul>
                  <li>¿Hay peligro para ti?</li>
                  <li>¿La víctima sigue en contacto con corriente?</li>
                  <li>¿Puedes cortar la corriente fácilmente?</li>
                </ul>
              </li>
              <li>
                Corta la corriente:
                <ul>
                  <li>Interruptor general del cuadro</li>
                  <li>Desenchufa el aparato</li>
                  <li>Si es imposible, llama al 112 y espera</li>
                </ul>
              </li>
              <li>
                Llama al 112:
                <ul>
                  <li>"Accidente eléctrico en [dirección]"</li>
                  <li>"Víctima [consciente/inconsciente]"</li>
                  <li>"[Respira/No respira]"</li>
                </ul>
              </li>
              <li>
                Comprueba signos vitales:
                <ul>
                  <li>¿Responde a estímulos? (habla, toca hombro)</li>
                  <li>¿Respira? (mira, escucha, siente)</li>
                  <li>¿Tiene pulso? (carótida en cuello)</li>
                </ul>
              </li>
              <li>
                Actúa según el estado:
                <ul>
                  <li>Consciente: Tranquiliza, no muevas, espera ambulancia</li>
                  <li>Inconsciente pero respira: Posición lateral de seguridad</li>
                  <li>No respira: RCP inmediata (si sabes)</li>
                </ul>
              </li>
            </ol>
          </div>
        </Concept>

        <Concept title="RCP Básica (solo si estás formado)" color="orange" icon="❤️">
          <p>Si la víctima NO respira:</p>
          <ol>
            <li>Coloca a la víctima boca arriba en superficie dura</li>
            <li>Abre vía aérea: Inclina cabeza hacia atrás, eleva mentón</li>
            <li>30 compresiones torácicas:
              <ul>
                <li>Centro del pecho, entre pezones</li>
                <li>Profundidad: 5-6 cm</li>
                <li>Ritmo: 100-120 por minuto (al ritmo de "Stayin' Alive")</li>
              </ul>
            </li>
            <li>2 ventilaciones: Boca a boca (si sabes y te atreves)</li>
            <li>Repite ciclos 30:2 hasta que llegue ayuda o la víctima respire</li>
          </ol>

          <Important>
            <p>
              💡 Importante: Si NO sabes hacer RCP, haz solo compresiones 
              torácicas continuas. Es mejor que nada. Y aprende RCP en un curso, puede 
              salvar vidas.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Qué NO Hacer">
        <Concept title="Errores que pueden empeorar la situación" color="red" icon="🚫">
          <div className="warning-box">
            <h3>❌ NUNCA hagas esto:</h3>
            <ul>
              <li>Tocar a la víctima si sigue en contacto con corriente</li>
              <li>Usar agua para apagar fuego eléctrico (usa extintor CO₂)</li>
              <li>Mover a la víctima innecesariamente (posible lesión medular)</li>
              <li>Dar agua o comida a víctima inconsciente</li>
              <li>Aplicar pomadas en quemaduras eléctricas</li>
              <li>Quitar ropa pegada a quemaduras</li>
              <li>Dejar sola a la víctima</li>
              <li>Intentar RCP si no sabes (salvo compresiones simples)</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Primeros Auxilios</h3>
        <ul>
          <li>PAS: Proteger, Avisar (112), Socorrer</li>
          <li>NUNCA toques a víctima electrocutada sin cortar corriente</li>
          <li>Comprueba: consciencia, respiración, pulso</li>
          <li>RCP: 30 compresiones + 2 ventilaciones (si sabes)</li>
          <li>Aprende RCP: Puede salvar vidas</li>
        </ul>
        <p>
          🎓 Recomendación: Haz un curso de primeros auxilios. Saber RCP 
          y actuación ante emergencias puede marcar la diferencia entre la vida y la muerte.
        </p>
      </div>
      {/* Ejercicios de Práctica */}
      <ExercisesSection 
        exercises={ejercicios} 
        groupId="primeros_auxilios"
        title="Ejercicios de Práctica - Primeros Auxilios"
      />
    </>
  );
};

export default PrimerosAuxilios;
