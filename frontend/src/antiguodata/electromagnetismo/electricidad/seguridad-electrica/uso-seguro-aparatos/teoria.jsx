import { TheorySection, Concept, Important, Example, ExercisesSection } from '../../../../../components/TheoryV2';
import ejercicios from './ejercicios.json';

export const metadata = {
  titulo: "Uso Seguro de Aparatos",
  descripcion: "Cómo usar electrodomésticos y herramientas eléctricas de forma segura",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const UsoSeguroAparatos = () => {
  return (
    <>
      <Concept title="Reglas básicas de uso seguro" color="blue" icon="🔌">
        <ol>
          <li>Lee el manual: Cada aparato tiene instrucciones específicas</li>
          <li>Inspecciona antes de usar: Cable, enchufe, carcasa en buen estado</li>
          <li>Enchufa correctamente: Hasta el fondo, sin forzar</li>
          <li>Desenchufa tirando del enchufe: Nunca del cable</li>
          <li>No sobrecargues: Máximo 3680W por enchufe</li>
          <li>Apaga antes de desenchufar: Evita chispas</li>
          <li>Guarda en seco: Protege de humedad</li>
          <li>Mantenimiento regular: Limpieza y revisión</li>
        </ol>
      </Concept>

      <TheorySection title="Señales de Peligro en Aparatos">
        <Concept title="Cuándo NO usar un aparato">
          <div className="warning-box">
            <h3>🚨 Señales de alarma - NO USES el aparato si:</h3>
            <ul>
              <li>Cable dañado: Pelado, cortado, derretido</li>
              <li>Enchufe roto: Pines sueltos, carcasa agrietada</li>
              <li>Chispas: Al enchufar o durante uso</li>
              <li>Olor a quemado: Plástico o cables quemándose</li>
              <li>Calor excesivo: Cable o aparato muy caliente</li>
              <li>Ruidos extraños: Zumbidos, chasquidos anormales</li>
              <li>Descargas leves: Cosquilleos al tocar</li>
              <li>Funcionamiento errático: Se apaga solo, falla</li>
              <li>Carcasa rota: Partes internas visibles</li>
              <li>Mojado: Ha caído al agua o está húmedo</li>
            </ul>
          </div>

          <Important>
            <p>
              ⚠️ Acción: Si detectas cualquiera de estas señales, desenchufa 
              inmediatamente, no lo uses más y llévalo a reparar o deséchalo. Un aparato 
              defectuoso puede matarte.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Uso Seguro por Tipo de Aparato">
        <Concept title="Electrodomésticos comunes">
          <div className="info-box">
            <h3>🔥 Aparatos de calor (horno, plancha, secador)</h3>
            <ul>
              <li>Nunca los dejes desatendidos mientras funcionan</li>
              <li>Mantén alejados de materiales inflamables</li>
              <li>Desenchufa tras cada uso</li>
              <li>Deja enfriar antes de guardar</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>💧 Aparatos en zonas húmedas (secador, afeitadora)</h3>
            <ul>
              <li>Manos secas siempre</li>
              <li>Lejos de bañera, lavabo, ducha</li>
              <li>Desenchufa si cae al agua (NO lo saques enchufado)</li>
              <li>Guarda en lugar seco</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>🔌 Aparatos de alta potencia (horno, lavadora)</h3>
            <ul>
              <li>Línea eléctrica independiente</li>
              <li>No uses alargadores</li>
              <li>Toma de tierra obligatoria</li>
              <li>Revisión profesional periódica</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>🔧 Herramientas eléctricas (taladro, sierra)</h3>
            <ul>
              <li>Herramientas con doble aislamiento (símbolo ⧈)</li>
              <li>Guantes y gafas de protección</li>
              <li>Desenchufa para cambiar accesorios</li>
              <li>Nunca en ambientes húmedos</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Alargadores y Regletas">
        <Concept title="Uso correcto de extensiones">
          <Example title="Cálculo de carga en regleta" icon="🔌">
            <p>Regleta de 16A (máximo 3680W a 230V):</p>
            <ul>
              <li>TV (150W) + Ordenador (300W) + Impresora (800W) = 1250W ✅ OK</li>
              <li>Calefactor (2000W) + Microondas (1200W) = 3200W ✅ OK (justo)</li>
              <li>Horno (3000W) + Calefactor (2000W) = 5000W ❌ PELIGRO</li>
            </ul>
            <p>Regla: Suma las potencias. Si supera 3680W, NO lo hagas.</p>
          </Example>

          <div className="warning-box">
            <h3>⚠️ Reglas para alargadores y regletas</h3>
            <ul>
              <li>No encadenes: Nunca regleta → alargador → regleta</li>
              <li>Desenrolla completamente: Cable enrollado se calienta</li>
              <li>Calidad certificada: Marca CE, no compres baratos</li>
              <li>Con interruptor: Para apagar todo fácilmente</li>
              <li>Con protección sobretensión: Protege aparatos caros</li>
              <li>Revisa regularmente: Calor, desgaste, daños</li>
              <li>No bajo alfombras: Riesgo de sobrecalentamiento</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Mantenimiento Preventivo">
        <Concept title="Cómo mantener aparatos seguros" color="green" icon="🔧">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>📅 Revisión mensual</h4>
              <ul>
                <li>Inspecciona cables y enchufes</li>
                <li>Prueba el botón TEST del diferencial</li>
                <li>Limpia polvo de aparatos</li>
                <li>Comprueba que no haya sobrecalentamiento</li>
              </ul>
            </div>

            <div className="concepto-fundamental">
              <h4>🧹 Limpieza</h4>
              <ul>
                <li>Desenchufa antes de limpiar</li>
                <li>Paño seco o ligeramente húmedo</li>
                <li>No mojes partes eléctricas</li>
                <li>Deja secar completamente</li>
              </ul>
            </div>

            <div className="concepto-fundamental">
              <h4>🔄 Reemplazo</h4>
              <ul>
                <li>Cables dañados: reemplaza inmediatamente</li>
                <li>Aparatos viejos (&gt;15 años): considera renovar</li>
                <li>Enchufes flojos: cambia</li>
                <li>Regletas desgastadas: no repares, reemplaza</li>
              </ul>
            </div>
          </div>
        </Concept>
      </TheorySection>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen - Uso Seguro de Aparatos</h3>
        <ul>
          <li>Inspecciona antes de usar: cable, enchufe, carcasa</li>
          <li>10 señales de peligro que indican NO usar el aparato</li>
          <li>Reglas específicas según tipo de aparato</li>
          <li>Regletas: No superar 3680W, no encadenar</li>
          <li>Mantenimiento: Revisión mensual, limpieza, reemplazo</li>
        </ul>
        <p>
          💡 Recuerda: Un aparato en buen estado es un aparato seguro. 
          La prevención y el mantenimiento son más baratos que un accidente o un incendio.
        </p>
      </div>
      {/* Ejercicios de Práctica */}
      <ExercisesSection 
        exercises={ejercicios} 
        groupId="uso_seguro_aparatos"
        title="Ejercicios de Práctica - Uso Seguro de Aparatos"
      />
    </>
  );
};

export default UsoSeguroAparatos;
