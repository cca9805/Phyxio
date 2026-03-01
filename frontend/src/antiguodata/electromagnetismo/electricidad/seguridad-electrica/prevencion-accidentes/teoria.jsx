import { TheorySection, Concept, Important, ExercisesSection } from '../../../../../components/TheoryV2';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Prevención de Accidentes",
  descripcion: "Medidas de seguridad y protecciones eléctricas",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const PrevencionAccidentes = () => {
  return (
    <>
      <Concept title="Las 10 reglas de oro de la prevención" color="green" icon="✅">
        <ol>
          <li>Desconecta antes de manipular: Baja el interruptor general o desenchufa</li>
          <li>Manos secas siempre: Nunca toques electricidad con manos mojadas</li>
          <li>No sobrecargues enchufes: Máximo 3680W por enchufe (16A)</li>
          <li>Cables en buen estado: Reemplaza cables pelados o dañados</li>
          <li>Protecciones activas: Nunca anules fusibles o diferenciales</li>
          <li>Toma de tierra: Asegúrate de que funciona correctamente</li>
          <li>Herramientas aisladas: Usa destornilladores con mango aislante</li>
          <li>Distancia de seguridad: No toques cables de alta tensión</li>
          <li>Profesionales cualificados: Instalaciones solo por electricistas</li>
          <li>Revisiones periódicas: Inspecciona la instalación cada 5-10 años</li>
        </ol>
      </Concept>

      <TheorySection title="Protecciones Eléctricas">
        <Concept title="Dispositivos que salvan vidas">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🔴 Interruptor Diferencial</h4>
              <p>Protege contra: Electrocución</p>
              <p>Cómo funciona: Detecta fugas de corriente &gt;30mA y corta en 0.03 segundos</p>
              <p>Prueba: Pulsa el botón TEST mensualmente</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔵 Magnetotérmico</h4>
              <p>Protege contra: Sobrecargas e incendios</p>
              <p>Cómo funciona: Corta si la corriente supera el límite (10A, 16A, 25A...)</p>
              <p>Importante: Nunca lo anules con un puente</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🟢 Toma de Tierra</h4>
              <p>Protege contra: Descargas por fallos</p>
              <p>Cómo funciona: Deriva corrientes de fuga al suelo</p>
              <p>Cable: Amarillo-verde, nunca lo cortes</p>
            </div>
          </div>

          <Important>
            <p>
              ⚠️ Crítico: Si el diferencial salta frecuentemente, HAY UN PROBLEMA. 
              No lo anules, llama a un electricista. Está detectando una fuga peligrosa.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Prevención en Casa">
        <Concept title="Medidas específicas por zona">
          <div className="info-box">
            <h3>🛁 Baño</h3>
            <ul>
              <li>Enchufes con protección IP44 (resistentes a salpicaduras)</li>
              <li>Distancia mínima 60cm de bañera/ducha</li>
              <li>Nunca uses secador cerca del agua</li>
              <li>Diferencial de 30mA obligatorio</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>🍳 Cocina</h3>
            <ul>
              <li>Línea independiente para horno y vitrocerámica</li>
              <li>Enchufes alejados de fregadero</li>
              <li>No toques aparatos con manos mojadas</li>
              <li>Desenchufa pequeños electrodomésticos tras uso</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>👶 Habitaciones infantiles</h3>
            <ul>
              <li>Protectores de enchufes</li>
              <li>Cables fuera del alcance</li>
              <li>Enchufes a 1.5m de altura mínimo</li>
              <li>Educación sobre peligros eléctricos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Prevención de Accidentes</h3>
        <ul>
          <li>10 reglas de oro para prevenir accidentes</li>
          <li>3 protecciones esenciales: diferencial, magnetotérmico, tierra</li>
          <li>Zonas críticas: baño, cocina, habitaciones infantiles</li>
          <li>Revisiones periódicas cada 5-10 años</li>
          <li>Ante la duda: llama a un profesional</li>
        </ul>
      </div>
      {/* Ejercicios de Práctica */}
      <ExercisesSection 
        exercises={ejercicios} 
        groupId="prevencion_accidentes"
        title="Ejercicios de Práctica - Prevención de Accidentes"
      />
    </>
  );
};

export default PrevencionAccidentes;
