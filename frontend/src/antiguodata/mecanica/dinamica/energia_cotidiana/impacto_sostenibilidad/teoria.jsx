import { Concept, Example, Formula, Important, TheorySection } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Impacto y Sostenibilidad",
  descripcion: "Huella de carbono, consejos de ahorro y sostenibilidad energética",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const ImpactoSostenibilidadTeoria = ({ exercises }) => {
  return (
    <TheorySection
      title="Impacto Ambiental y Sostenibilidad"
      emoji="♻️"
      nivel="ESO"
    >

      {/* Concepto 1: Impacto ambiental */}
      <Concept title="El impacto ambiental del consumo energético" emoji="🌍">
        <p>
          Nuestro consumo de energía tiene un impacto directo en el medio ambiente.
          La principal consecuencia es la emisión de gases de efecto invernadero (GEI), especialmente
          CO₂, que causan el calentamiento global.
        </p>

        <h4>Huella de carbono:</h4>
        <p>
          La huella de carbono es la cantidad total de gases de efecto invernadero
          que producimos con nuestras actividades, medida en toneladas de CO₂ equivalente (CO₂e) al año.
        </p>

        <h4>Huella de carbono media en España:</h4>
        <ul>
          <li>🏠 Hogar (electricidad + calefacción): 2-3 toneladas CO₂/año</li>
          <li>🚗 Transporte personal: 2-4 toneladas CO₂/año</li>
          <li>🍖 Alimentación: 1.5-2 toneladas CO₂/año</li>
          <li>🛍️ Consumo (compras, ropa): 1-2 toneladas CO₂/año</li>
          <li>✈️ Vuelos ocasionales: Variable (0.5-3 toneladas)</li>
          <li>📊 TOTAL MEDIO: 7-12 toneladas CO₂e/persona/año</li>
        </ul>

        <Important>
          Para limitar el calentamiento global a 1.5°C según el Acuerdo de París, cada persona
          debería emitir menos de 2 toneladas de CO₂ al año para 2030. Actualmente
          estamos muy por encima en países desarrollados.
        </Important>

        <div className="carbon-footprint-comparison">
          <h5>Huella de carbono por país (toneladas CO₂/persona/año):</h5>
          <ul>
            <li>🇶🇦 Qatar: 37 toneladas (mayor del mundo)</li>
            <li>🇺🇸 Estados Unidos: 15 toneladas</li>
            <li>🇨🇳 China: 7.4 toneladas</li>
            <li>🇪🇸 España: 6.8 toneladas</li>
            <li>🇫🇷 Francia: 4.6 toneladas (mucha nuclear)</li>
            <li>🇮🇳 India: 1.9 toneladas</li>
            <li>🇰🇪 Kenia: 0.3 toneladas</li>
            <li>🌍 Objetivo 2030: 2 toneladas</li>
          </ul>
        </div>

        <Example>
          Emisiones de actividades comunes:<br/>
          • Cargar un smartphone: 8-10 g CO₂<br/>
          • Ver Netflix 1 hora: 36 g CO₂<br/>
          • Lavar ropa (lavadora): 0.6 kg CO₂<br/>
          • Ducha caliente 10 min: 0.5-1 kg CO₂<br/>
          • 1 kg carne vacuno: 27 kg CO₂<br/>
          • Vuelo Madrid-Nueva York: 1,200 kg CO₂ (ida y vuelta)
        </Example>
      </Concept>

      {/* Concepto 2: Consejos de ahorro */}
      <Concept title="Consejos prácticos para ahorrar energía" emoji="💡">
        <p>
          Pequeños cambios en nuestros hábitos pueden generar grandes ahorros energéticos y económicos.
          Aquí tienes las acciones más efectivas que puedes implementar en tu día a día.
        </p>

        <h4>🏠 En casa (por orden de impacto):</h4>

        <div className="savings-tips">
          <div className="tip-card high-impact">
            <h5>1. 🌡️ Ajusta la calefacción/aire acondicionado</h5>
            <p>Ahorro potencial: 15-20%</p>
            <ul>
              <li>Calefacción: 20-21°C día, 15-17°C noche</li>
              <li>Aire: 24-26°C (cada grado menos = 8% más consumo)</li>
              <li>Usa termostato programable</li>
              <li>Cierra persianas por la noche (aísla)</li>
            </ul>
            <p className="savings">💰 Ahorro: 150-300€/año</p>
          </div>

          <div className="tip-card high-impact">
            <h5>2. 💡 Cambia a bombillas LED</h5>
            <p>Ahorro potencial: 80-90% en iluminación</p>
            <ul>
              <li>LED consume 8W vs 60W incandescente</li>
              <li>Duran 25 veces más</li>
              <li>Se amortizan en 4-6 meses</li>
            </ul>
            <p className="savings">💰 Ahorro: 100-150€/año</p>
          </div>

          <div className="tip-card medium-impact">
            <h5>3. 👻 Elimina consumo fantasma</h5>
            <p>Ahorro potencial: 7-11% de la factura</p>
            <ul>
              <li>Regletas con interruptor</li>
              <li>Desenchufa cargadores sin usar</li>
              <li>Apaga completamente TV, PC, consolas</li>
            </ul>
            <p className="savings">💰 Ahorro: 50-80€/año</p>
          </div>

          <div className="tip-card medium-impact">
            <h5>4. ❄️ Usa electrodomésticos eficientemente</h5>
            <p>Ahorro potencial: 10-15%</p>
            <ul>
              <li>Lavadora/lavavajillas: Cargas completas, programas ECO</li>
              <li>Frigorífico: No pongas comida caliente, limpia rejillas</li>
              <li>Horno: Apágalo antes (inercia térmica)</li>
              <li>No abras el frigorífico innecesariamente</li>
            </ul>
            <p className="savings">💰 Ahorro: 60-100€/año</p>
          </div>

          <div className="tip-card medium-impact">
            <h5>5. 💧 Agua caliente: Optimiza</h5>
            <p>Ahorro potencial: 10-15%</p>
            <ul>
              <li>Duchas cortas (5-7 min) en lugar de baños</li>
              <li>Temperatura caldera: 45-50°C (no más)</li>
              <li>Cierra grifo al enjabonar</li>
              <li>Reparar fugas (1 gota/seg = 30L/día)</li>
            </ul>
            <p className="savings">💰 Ahorro: 80-120€/año</p>
          </div>

          <div className="tip-card low-impact">
            <h5>6. 🪟 Mejora el aislamiento</h5>
            <p>Ahorro potencial: 20-30% (inversión inicial)</p>
            <ul>
              <li>Ventanas de doble acristalamiento</li>
              <li>Burletes en puertas y ventanas</li>
              <li>Cortinas gruesas en invierno</li>
              <li>Aislamiento paredes/tejado (largo plazo)</li>
            </ul>
            <p className="savings">💰 Ahorro: 200-400€/año</p>
          </div>
        </div>

        <h4>🔌 Electrodomésticos: Cómo elegir y usar:</h4>
        <ul>
          <li>✅ Al comprar: Prioriza etiqueta A o B (ahorro a largo plazo)</li>
          <li>✅ Frigorífico: Temperatura ideal 4°C (congelador -18°C)</li>
          <li>✅ Lavadora: 30°C en lugar de 60°C = 60% menos energía</li>
          <li>✅ Secadora: Evítala si puedes tender (consume muchísimo)</li>
          <li>✅ Lavavajillas: Programa ECO (más largo pero -30% energía)</li>
          <li>✅ Horno: Usa calor residual, no precalientes innecesariamente</li>
        </ul>

        <Example>
          Caso real - Familia Rodríguez:<br/>
          Aplicaron 5 medidas principales:<br/>
          1. Bajaron calefacción 2°C → 180€/año<br/>
          2. Cambiaron 12 bombillas a LED → 140€/año<br/>
          3. Regletas con interruptor → 60€/año<br/>
          4. Lavadora en frío y ECO → 45€/año<br/>
          5. Duchas 5 min (vs 10 min) → 90€/año<br/>
          Total: 515€/año de ahorro + 650 kg CO₂ menos<br/>
          Inversión inicial: 150€ (amortizada en 4 meses)
        </Example>

        <Important>
          El mayor ahorro viene de cambiar hábitos, no solo de comprar tecnología. Una casa
          con electrodomésticos eficientes pero mal usada consume más que una casa con
          electrodomésticos normales pero hábitos inteligentes.
        </Important>
      </Concept>

      {/* Concepto 3: Energía y sostenibilidad */}
      <Concept title="Hacia un futuro energético sostenible" emoji="🌱">
        <p>
          La transición energética hacia un sistema sostenible es uno de los mayores
          desafíos de nuestra generación. Implica cambiar de combustibles fósiles a energías renovables,
          mejorar la eficiencia y cambiar patrones de consumo.
        </p>

        <h4>Objetivos globales y de España:</h4>

        <div className="sustainability-goals">
          <div className="goal-card">
            <h5>🇪🇺 Unión Europea 2030</h5>
            <ul>
              <li>55% reducción emisiones (vs 1990)</li>
              <li>40% energía renovable</li>
              <li>36% mejora eficiencia energética</li>
            </ul>
          </div>

          <div className="goal-card">
            <h5>🇪🇸 España 2030</h5>
            <ul>
              <li>23% reducción emisiones (vs 1990)</li>
              <li>42% energía renovable</li>
              <li>74% electricidad renovable</li>
              <li>5 millones coches eléctricos</li>
            </ul>
          </div>

          <div className="goal-card">
            <h5>🌍 París 2050</h5>
            <ul>
              <li>Neutralidad carbono (net zero)</li>
              <li>Limitar calentamiento a 1.5°C</li>
              <li>100% energías renovables</li>
            </ul>
          </div>
        </div>

        <h4>Acciones individuales con mayor impacto:</h4>
        <table className="impact-actions" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Acción</th>
              <th>Ahorro CO₂/año</th>
              <th>Dificultad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>✈️ Evitar 1 vuelo transoceánico</td>
              <td className="high-impact">1,600 kg</td>
              <td>Media</td>
            </tr>
            <tr>
              <td>🚗 Vivir sin coche (ciudad)</td>
              <td className="high-impact">2,400 kg</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>⚡ Cambiar a coche eléctrico</td>
              <td className="high-impact">1,200 kg</td>
              <td>Media-Alta</td>
            </tr>
            <tr>
              <td>🌱 Dieta vegetariana</td>
              <td className="medium-impact">800 kg</td>
              <td>Media</td>
            </tr>
            <tr>
              <td>☀️ Instalar paneles solares 3kW</td>
              <td className="medium-impact">1,800 kg</td>
              <td>Media-Alta</td>
            </tr>
            <tr>
              <td>🏠 Mejorar aislamiento hogar</td>
              <td className="medium-impact">500-1,000 kg</td>
              <td>Media-Alta</td>
            </tr>
            <tr>
              <td>🚌 Transporte público (vs coche)</td>
              <td className="medium-impact">700 kg</td>
              <td>Baja-Media</td>
            </tr>
            <tr>
              <td>♻️ Reducir, reutilizar, reciclar</td>
              <td className="low-impact">300 kg</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>💡 LED + electrodomésticos A</td>
              <td className="low-impact">300 kg</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>🥩 Reducir carne (1 vez/semana menos)</td>
              <td className="low-impact">200 kg</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </table>

        <Example>
          Joven adulto comprometido (25 años):<br/>
          • Vive en ciudad, usa transporte público y bici<br/>
          • Dieta flexitariana (poca carne)<br/>
          • Vuelos: 0-1 al año (nacional)<br/>
          • Hogar eficiente (LED, electrodomésticos A)<br/>
          • Consumo consciente (compra local, segunda mano)<br/>
          Huella: ~3 toneladas CO₂/año (vs media 7-12 toneladas)
        </Example>

        <Important>
          Según estudios, las 4 acciones individuales con mayor impacto son:<br/>
          1. Tener menos hijos (58 ton CO₂/año evitadas/hijo menos)<br/>
          2. Vivir sin coche (2.4 ton/año)<br/>
          3. Evitar vuelos transoceánicos (1.6 ton/vuelo)<br/>
          4. Dieta basada en plantas (0.8 ton/año)
        </Important>
      </Concept>

      {/* Concepto 4: Resumen y acción */}
      <Concept title="Tú puedes marcar la diferencia" emoji="🌟">
        <p>
          El cambio climático es el mayor desafío de nuestra época, pero cada acción cuenta.
          No necesitas ser perfecto, pero sí puedes ser mejor cada día.
        </p>

        <h4>🎯 Plan de acción de 3 niveles:</h4>

        <div className="action-levels">
          <div className="level-card beginner">
            <h5>Nivel 1: Básico (Empieza hoy) 🌱</h5>
            <ul>
              <li>✅ Apaga luces al salir de habitaciones</li>
              <li>✅ Desenchufa cargadores sin usar</li>
              <li>✅ Duchas de 5-7 minutos</li>
              <li>✅ Recicla correctamente</li>
              <li>✅ Usa bolsas reutilizables</li>
              <li>✅ Cierra grifos al enjabonar</li>
            </ul>
            <p className="impact">Impacto: 200-300 kg CO₂/año</p>
          </div>

          <div className="level-card intermediate">
            <h5>Nivel 2: Intermedio (1-3 meses) 🌿</h5>
            <ul>
              <li>✅ Cambia todas las bombillas a LED</li>
              <li>✅ Baja calefacción 2°C</li>
              <li>✅ Transporte público o bici para trayectos cortos</li>
              <li>✅ Lavadora en frío y carga completa</li>
              <li>✅ Compra electrodomésticos A cuando toque renovar</li>
              <li>✅ Reduce consumo de carne (1-2 veces/semana)</li>
            </ul>
            <p className="impact">Impacto: 600-900 kg CO₂/año</p>
          </div>

          <div className="level-card advanced">
            <h5>Nivel 3: Avanzado (6-12 meses) 🌳</h5>
            <ul>
              <li>✅ Instala paneles solares si es posible</li>
              <li>✅ Mejora aislamiento del hogar</li>
              <li>✅ Prioriza tren sobre avión</li>
              <li>✅ Considera coche eléctrico o compartido</li>
              <li>✅ Dieta mayormente vegetal</li>
              <li>✅ Consumo consciente (comprar menos y mejor)</li>
            </ul>
            <p className="impact">Impacto: 1,500-3,000 kg CO₂/año</p>
          </div>
        </div>

        <h4>💚 Recuerda:</h4>
        <ul>
          <li>🎯 Progreso, no perfección: Pequeños cambios sostenidos &gt; grandes cambios temporales</li>
          <li>🗣️ Habla del tema: Influyes en familia y amigos (efecto multiplicador)</li>
          <li>🗳️ Vota consciente: Políticas públicas tienen gran impacto</li>
          <li>📚 Sigue aprendiendo: Mantente informado sobre sostenibilidad</li>
          <li>🌍 Piensa global, actúa local: Tu ejemplo inspira a otros</li>
        </ul>

        <Important>
          Si cada español redujera su huella de carbono en 1 tonelada al año (fácilmente alcanzable
          con nivel 2), España evitaría 47 millones de toneladas de CO₂ anuales.
          Eso es más que las emisiones totales de países como Portugal o Suecia.
        </Important>

        <Example>
          El poder del efecto multiplicador:<br/>
          Tú aplicas cambios → reduces 1 ton CO₂/año<br/>
          Inspiras a 5 amigos → 6 ton/año<br/>
          Ellos inspiran a otros 5 cada uno → 36 ton/año<br/>
          En 3 generaciones: 216 ton CO₂/año evitadas<br/>
          Tu acción inicial se multiplica por 216×
        </Example>

        <div className="final-message">
          <h5>🌟 Mensaje final:</h5>
          <p>
            La crisis climática puede parecer abrumadora, pero recuerda que estás viviendo
            en el momento más importante de la historia humana. Las decisiones que tomemos
            en esta década determinarán el futuro del planeta para siglos.
          </p>
          <p>
            No subestimes el poder de tus acciones individuales. Cada kWh ahorrado, cada viaje en
            transporte público, cada comida basada en plantas, cuenta. Y lo más importante:
            tú eres el ejemplo para otros.
          </p>
          <p className="highlight">
            💚 El futuro no está escrito. Construyámoslo juntos, paso a paso. 🌍
          </p>
        </div>
      </Concept>

    </TheorySection>
  );
};

export default ImpactoSostenibilidadTeoria;
