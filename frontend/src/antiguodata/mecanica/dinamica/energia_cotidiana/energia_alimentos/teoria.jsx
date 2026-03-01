import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

import { definitions as alimentosDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Energía y Alimentos",
  descripcion: "Calorías, gasto energético y actividad física",
  isTheoryOnly: false,
  educationLevel: "ESO",
  levels: ['ESO']
};

const EnergiaAlimentosTeoria = ({ exercises }) => {
  return (
    <TheorySection
      title="Energía y Alimentos"
      emoji="🍎"
      nivel="ESO"
    >

      {/* Concepto 1: La energía de los alimentos */}
      <Concept title="Los alimentos: Combustible para tu cuerpo" emoji="🍎">
        <p>
          Los alimentos son la fuente de energía química que nuestro cuerpo
          transforma en energía mecánica (movimiento), térmica (calor corporal) y química
          (procesos metabólicos).
        </p>

        <h4>Medimos la energía alimentaria en:</h4>
        <ul>
          <li>🔥 Calorías (cal): Unidad tradicional</li>
          <li>🔥 Kilocalorías (kcal): 1 kcal = 1000 cal = 1 "Caloría" de nutrición</li>
          <li>⚡ Julios (J): Unidad del Sistema Internacional</li>
          <li>Conversión: 1 kcal = 4,184 J ≈ 4.2 kJ</li>
        </ul>

        <Important>
          Cuando lees "200 Calorías" en un paquete de comida, realmente son 200 kilocalorías
          (200,000 calorías pequeñas). En física usamos julios: 200 kcal = 837 kJ.
        </Important>

        <Formula
          expression="1\,\text{kcal} = 4{,}184\,\text{J}"
          calculatorId="calorias-a-julios"
          definitions={alimentosDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>kcal: Kilocaloría (Caloría alimentaria)</li>
          <li>J: Julio (unidad SI de energía)</li>
          <li>4,184: Factor de conversión</li>
        </ul>

        <h4>Contenido energético de los macronutrientes:</h4>
        <table className="nutrients-table" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Nutriente</th>
              <th>Energía (kcal/g)</th>
              <th>Energía (kJ/g)</th>
              <th>Función principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🥖 Carbohidratos</td>
              <td>4</td>
              <td>17</td>
              <td>Energía rápida</td>
            </tr>
            <tr>
              <td>🥩 Proteínas</td>
              <td>4</td>
              <td>17</td>
              <td>Construcción y reparación</td>
            </tr>
            <tr>
              <td>🥑 Grasas</td>
              <td>9</td>
              <td>37</td>
              <td>Energía de reserva</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Análisis de un bocadillo:<br/>
          • Pan (60g): 30g carbohidratos = 120 kcal<br/>
          • Jamón (40g): 8g proteínas + 2g grasa = 50 kcal<br/>
          • Queso (20g): 5g grasa + 4g proteínas = 61 kcal<br/>
          Total: ~230 kcal = 963 kJ
        </Example>
      </Concept>

      {/* Concepto 2: Necesidades energéticas */}
      <Concept title="¿Cuánta energía necesitas al día?" emoji="📊">
        <p>
          Nuestro cuerpo consume energía constantemente, incluso en reposo. El gasto energético
          total depende de tres factores principales:
        </p>

        <h4>Componentes del gasto energético:</h4>
        <ul>
          <li>🛌 Metabolismo basal (60-70%): Energía para funciones vitales (respirar, circular sangre, mantener temperatura)</li>
          <li>🏃 Actividad física (20-30%): Ejercicio y movimiento diario</li>
          <li>🍽️ Termogénesis (10%): Energía para digerir y metabolizar alimentos</li>
        </ul>

        <h4>Necesidades calóricas diarias aproximadas:</h4>
        <table className="caloric-needs" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Perfil</th>
              <th>kcal/día</th>
              <th>kJ/día</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>👧 Niña 10-12 años</td>
              <td>1,800-2,000</td>
              <td>7,500-8,400</td>
            </tr>
            <tr>
              <td>👦 Niño 10-12 años</td>
              <td>2,000-2,200</td>
              <td>8,400-9,200</td>
            </tr>
            <tr>
              <td>👩 Adolescente mujer</td>
              <td>2,000-2,400</td>
              <td>8,400-10,000</td>
            </tr>
            <tr>
              <td>👨 Adolescente varón</td>
              <td>2,500-3,000</td>
              <td>10,500-12,500</td>
            </tr>
            <tr>
              <td>👩 Mujer adulta sedentaria</td>
              <td>1,800-2,000</td>
              <td>7,500-8,400</td>
            </tr>
            <tr>
              <td>👩 Mujer adulta activa</td>
              <td>2,200-2,400</td>
              <td>9,200-10,000</td>
            </tr>
            <tr>
              <td>👨 Hombre adulto sedentario</td>
              <td>2,200-2,500</td>
              <td>9,200-10,500</td>
            </tr>
            <tr>
              <td>👨 Hombre adulto activo</td>
              <td>2,800-3,200</td>
              <td>11,700-13,400</td>
            </tr>
            <tr>
              <td>🏃 Deportista intensivo</td>
              <td>3,500-5,000+</td>
              <td>14,600-21,000+</td>
            </tr>
          </tbody>
        </table>

        <Important>
          El balance energético es clave: consumir más calorías de las que gastas → aumento de peso.
          Gastar más de las que consumes → pérdida de peso. Para mantener el peso, entrada = salida.
        </Important>
      </Concept>

      {/* Concepto 3: Gasto calórico por actividad */}
      <Concept title="Calorías que quemas haciendo ejercicio" emoji="🏃">
        <p>
          Diferentes actividades consumen distintas cantidades de energía. El gasto calórico
          depende de la intensidad del ejercicio, tu peso corporal y la duración.
        </p>

        <Formula
          expression="\text{Gasto} = \text{MET} \times \text{Peso} \times \text{Tiempo}"
          calculatorId="gasto-calorico-actividad"
          definitions={alimentosDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Gasto: Calorías quemadas (kcal)</li>
          <li>MET: Equivalente metabólico de la actividad</li>
          <li>Peso: Peso corporal (kg)</li>
          <li>Tiempo: Duración de la actividad (h)</li>
        </ul>

        <h4>MET (Equivalente Metabólico):</h4>
        <p>
          El MET es una medida de intensidad. 1 MET = energía en reposo.
          Una actividad de 5 MET consume 5 veces más energía que estar sentado.
        </p>

        <h4>Valores MET de actividades comunes:</h4>
        <table className="met-table" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>MET</th>
              <th>kcal/h (persona 70 kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>😴 Dormir</td>
              <td>0.9</td>
              <td>63</td>
            </tr>
            <tr>
              <td>🛋️ Ver TV sentado</td>
              <td>1.0</td>
              <td>70</td>
            </tr>
            <tr>
              <td>🚶 Caminar lento (3 km/h)</td>
              <td>2.0</td>
              <td>140</td>
            </tr>
            <tr>
              <td>🧹 Tareas domésticas ligeras</td>
              <td>2.5</td>
              <td>175</td>
            </tr>
            <tr>
              <td>🚶 Caminar normal (5 km/h)</td>
              <td>3.5</td>
              <td>245</td>
            </tr>
            <tr>
              <td>🚴 Bici recreativa (&lt;16 km/h)</td>
              <td>4.0</td>
              <td>280</td>
            </tr>
            <tr>
              <td>🏋️ Gimnasio moderado</td>
              <td>5.0</td>
              <td>350</td>
            </tr>
            <tr>
              <td>🏃 Correr suave (8 km/h)</td>
              <td>8.0</td>
              <td>560</td>
            </tr>
            <tr>
              <td>🚴 Bici intensa (&gt;20 km/h)</td>
              <td>10.0</td>
              <td>700</td>
            </tr>
            <tr>
              <td>🏃 Correr rápido (12 km/h)</td>
              <td>12.0</td>
              <td>840</td>
            </tr>
            <tr>
              <td>🏊 Natación intensa</td>
              <td>10.0</td>
              <td>700</td>
            </tr>
            <tr>
              <td>⚽ Fútbol (partido)</td>
              <td>10.0</td>
              <td>700</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Persona de 70 kg camina 1 hora a 5 km/h:<br/>
          • MET = 3.5<br/>
          • Gasto = 3.5 × 70 kg × 1 h = 245 kcal<br/>
          • Equivale a: 1 croissant, 2 manzanas, 400 ml de refresco
        </Example>

        <h4>¿Cuánto ejercicio para quemar alimentos comunes?</h4>
        <Formula
          expression="\text{Tiempo} = \frac{\text{Calorías}_{\text{alimento}}}{\text{MET} \times \text{Peso}}"
          calculatorId="tiempo-quemar-calorias"
          definitions={alimentosDefinitions}
          exercises={exercises}
        />

        <p>Donde:</p>
        <ul>
          <li>Tiempo: Tiempo de ejercicio necesario (h)</li>
          <li>Calorías_alimento: Calorías del alimento consumido (kcal)</li>
          <li>MET: Intensidad del ejercicio (MET)</li>
          <li>Peso: Peso corporal (kg)</li>
        </ul>

        <div className="burn-foods">
          <h5>Tiempo corriendo (8 km/h) para quemar alimentos (persona 70 kg):</h5>
          <ul>
            <li>🍎 Manzana (80 kcal): 9 minutos</li>
            <li>🍌 Plátano (105 kcal): 11 minutos</li>
            <li>🍞 Rebanada pan con mantequilla (150 kcal): 16 minutos</li>
            <li>🍕 Porción pizza (285 kcal): 30 minutos</li>
            <li>🍔 Hamburguesa completa (540 kcal): 58 minutos</li>
            <li>🍩 Donut (250 kcal): 27 minutos</li>
            <li>🥤 Refresco 330ml (140 kcal): 15 minutos</li>
            <li>🍫 Chocolate 100g (530 kcal): 57 minutos</li>
          </ul>
        </div>

        <Important>
          Es más fácil controlar calorías comiendo menos que intentando quemarlas
          con ejercicio. Una bolsa de patatas (500 kcal) = 1 hora corriendo. ¡El ejercicio es
          fundamental para salud, pero la dieta es clave para el peso!
        </Important>

        <Example>
          Balance de un día activo:<br/>
          Hombre 75 kg, oficina + gimnasio:<br/><br/>

          Entrada (comida):<br/>
          • Desayuno: 450 kcal<br/>
          • Almuerzo: 700 kcal<br/>
          • Cena: 600 kcal<br/>
          • Snacks: 250 kcal<br/>
          • Total: 2,000 kcal<br/><br/>

          Salida (gasto):<br/>
          • Metabolismo basal: 1,650 kcal<br/>
          • Actividades cotidianas: 200 kcal<br/>
          • Gimnasio 1h (MET 5): 375 kcal<br/>
          • Total: 2,225 kcal<br/><br/>

          Balance: -225 kcal → pérdida lenta de peso (30g grasa/día)
        </Example>
      </Concept>

      {/* Concepto 4: Eficiencia del cuerpo humano */}
      <Concept title="Tu cuerpo: Una máquina del 25%" emoji="💪">
        <p>
          El cuerpo humano, como cualquier máquina, tiene una eficiencia limitada.
          Los músculos convierten energía química (de los alimentos) en energía mecánica (movimiento),
          pero solo el ~25% se aprovecha. El resto se pierde como calor.
        </p>

        <h4>Eficiencia muscular:</h4>
        <ul>
          <li>⚡ Entrada: Energía química de ATP (glucosa, grasas)</li>
          <li>💪 Salida útil: Trabajo mecánico (~25%)</li>
          <li>🔥 Pérdidas: Calor corporal (~75%)</li>
        </ul>

        <Example>
          Subir escaleras:<br/>
          Subes 3 pisos (10 metros verticales), peso 70 kg:<br/>
          • Energía potencial ganada: E = mgh = 70 × 10 × 10 = 7,000 J = 7 kJ<br/>
          • Energía realmente gastada (eficiencia 25%): 7 kJ / 0.25 = 28 kJ = 6.7 kcal<br/>
          • El resto (21 kJ) se convierte en calor → por eso sudas al hacer ejercicio
        </Example>

        <div className="efficiency-comparison">
          <h5>Eficiencias comparadas:</h5>
          <table style={{width: '100%'}}>
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Eficiencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>💪 Músculos humanos</td>
                <td>~25%</td>
              </tr>
              <tr>
                <td>🚗 Motor gasolina</td>
                <td>20-30%</td>
              </tr>
              <tr>
                <td>🔋 Motor eléctrico</td>
                <td>85-95%</td>
              </tr>
              <tr>
                <td>🚴 Bicicleta (sistema completo)</td>
                <td>~20% (músculo × transmisión)</td>
              </tr>
              <tr>
                <td>💡 Bombilla LED</td>
                <td>85-90%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Important>
          Aunque la eficiencia muscular es baja (~25%), el cuerpo humano es una máquina increíblemente
          adaptable, capaz de usar múltiples combustibles (glucosa, grasas, proteínas) y optimizar
          el gasto según la actividad. Además, el "calor de desperdicio" nos mantiene a 37°C.
        </Important>

        <Example>
          Ciclista profesional en el Tour de Francia:<br/>
          • Etapa de montaña: 5,000 kcal gastadas en 5 horas<br/>
          • Trabajo mecánico útil (25%): 1,250 kcal = 5,230 kJ<br/>
          • Calor generado (75%): 3,750 kcal → necesita beber mucha agua para no sobrecalentarse<br/>
          • Potencia media: 5,230 kJ / 18,000 s = 290 W de trabajo mecánico
        </Example>
      </Concept>

    </TheorySection>
  );
};

export default EnergiaAlimentosTeoria;
