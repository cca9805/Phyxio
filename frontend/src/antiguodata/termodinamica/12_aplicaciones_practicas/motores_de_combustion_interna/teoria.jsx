  import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
  import { definitions as motoresDefinitions } from './definitions.js';
 

export const metadata = {
  titulo: "Motores de Combustión Interna",
  descripcion: "Motores Otto y Diesel en aplicaciones reales",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const MotoresCombustionInternaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Motores de Combustión Interna">
        <Concept title="¿Qué es un Motor de Combustión Interna?">
          <p>
            Un motor de combustión interna (MCI) es una máquina térmica que convierte 
            la energía química del combustible en trabajo mecánico mediante la combustión dentro de cilindros. 
            Son la base del transporte terrestre y muchas aplicaciones industriales.
          </p>

          <Important>
              <p>Características fundamentales:</p>
            <ul>
              <li>Combustión ocurre dentro del cilindro (vs externa en turbinas de vapor)</li>
              <li>Movimiento alternativo de pistones (vs rotativo en turbinas)</li>
              <li>Ciclo de 4 tiempos (admisión, compresión, expansión, escape)</li>
              <li>Alta relación potencia/peso</li>
              <li>Arranque rápido y respuesta inmediata</li>
            </ul>
          </Important>

          <p>Ventajas generales:</p>
          <ul>
            <li>Compactos y portátiles</li>
            <li>Costo relativamente bajo</li>
            <li>Infraestructura de combustible establecida</li>
            <li>Tecnología madura y confiable</li>
            <li>Amplia gama de potencias (1 kW a 100 MW)</li>
          </ul>

          <p>Desventajas:</p>
          <ul>
            <li>Eficiencia limitada (25-40%)</li>
            <li>Emisiones contaminantes</li>
            <li>Ruido y vibraciones</li>
            <li>Mantenimiento frecuente</li>
            <li>Dependencia de combustibles fósiles</li>
          </ul>
        </Concept>

        <Concept title="Componentes Principales">
           <p>Bloque motor:</p>
          <ul>
            <li>Cilindros: Cámaras donde ocurre la combustión</li>
            <li>Pistones: Se mueven alternativamente dentro de los cilindros</li>
            <li>Bielas: Conectan pistones con cigüeñal</li>
            <li>Cigüeñal: Convierte movimiento lineal en rotativo</li>
            <li>Volante: Almacena energía cinética, suaviza rotación</li>
          </ul>

          <p>Culata:</p>
          <ul>
            <li>Válvulas: Controlan admisión y escape</li>
            <li>Árbol de levas: Acciona las válvulas</li>
            <li>Bujías (Otto): Generan chispa para ignición</li>
            <li>Inyectores (Diesel): Inyectan combustible a alta presión</li>
          </ul>

          <p>Sistemas auxiliares:</p>
          <ul>
            <li>Lubricación: Reduce fricción, enfría componentes</li>
            <li>Refrigeración: Mantiene temperatura operativa</li>
            <li><strong>Alimentación:</strong> Suministra aire y combustible</li>
            <li><strong>Escape:</strong> Expulsa gases quemados</li>
            <li><strong>Encendido (Otto):</strong> Genera chispa en momento preciso</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Motor Otto (Gasolina)">
        <Concept title="Principio de Funcionamiento">
          <p>
            El <strong>motor Otto</strong> es un motor de encendido por chispa que utiliza gasolina como combustible. 
            Fue inventado por Nikolaus Otto en 1876 y es el motor más común en automóviles de pasajeros.
          </p>

          <p><strong>Ciclo de 4 tiempos:</strong></p>
          
          <p><strong>1. Admisión:</strong></p>
          <ul>
            <li>Pistón desciende de PMS (Punto Muerto Superior) a PMI (Punto Muerto Inferior)</li>
            <li>Válvula de admisión abierta, válvula de escape cerrada</li>
            <li>Mezcla aire-combustible entra al cilindro por succión</li>
            <li>Relación aire/combustible: 14.7:1 (estequiométrica)</li>
          </ul>

          <p><strong>2. Compresión:</strong></p>
          <ul>
            <li>Pistón asciende de PMI a PMS</li>
            <li>Ambas válvulas cerradas</li>
            <li>Mezcla se comprime (relación 8:1 a 12:1)</li>
            <li>Temperatura y presión aumentan</li>
            <li>Momento crítico: evitar autoignición (knock)</li>
          </ul>

          <p><strong>3. Expansión (Carrera de potencia):</strong></p>
          <ul>
            <li>Bujía genera chispa justo antes del PMS</li>
            <li>Combustión rápida eleva presión (40-60 bar) y temperatura (2000-2500°C)</li>
            <li>Gases calientes empujan pistón hacia PMI</li>
            <li>Trabajo útil se produce en esta carrera</li>
          </ul>

          <p><strong>4. Escape:</strong></p>
          <ul>
            <li>Pistón asciende de PMI a PMS</li>
            <li>Válvula de escape abierta</li>
            <li>Gases quemados son expulsados</li>
            <li>Ciclo se repite</li>
          </ul>
        </Concept>

        <Concept title="Características Técnicas">
          <p><strong>Relación de compresión:</strong></p>
          <ul>
            <li>Motores atmosféricos: 8:1 a 11:1</li>
            <li>Motores turbo: 8:1 a 10:1 (menor para evitar knock)</li>
            <li>Limitada por octanaje del combustible</li>
            <li>Mayor relación → mayor eficiencia pero mayor riesgo de knock</li>
          </ul>

          <p><strong>Octanaje:</strong></p>
          <ul>
            <li>Mide resistencia a la autoignición</li>
            <li>Gasolina 95: 95% resistencia vs isooctano</li>
            <li>Gasolina 98: Mayor octanaje, permite mayor compresión</li>
            <li>Aditivos antidetonantes mejoran octanaje</li>
          </ul>

          <p><strong>Sistemas de inyección:</strong></p>
          <ul>
            <li><strong>Carburador:</strong> Obsoleto, mezcla mecánica</li>
            <li><strong>Inyección multipunto (MPI):</strong> Inyector por cilindro, mejor control</li>
            <li><strong>Inyección directa (GDI):</strong> Inyecta en cámara, mayor eficiencia (+15%)</li>
          </ul>

          <p><strong>Sobrealimentación:</strong></p>
          <ul>
            <li><strong>Turbocompresor:</strong> Usa gases de escape, +30-50% potencia</li>
            <li><strong>Compresor mecánico:</strong> Accionado por motor, respuesta inmediata</li>
            <li>Permite motores más pequeños con igual potencia (downsizing)</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li><strong>Automóviles:</strong> 90% de vehículos ligeros</li>
            <li><strong>Motocicletas:</strong> Prácticamente todos</li>
            <li><strong>Generadores portátiles:</strong> 1-10 kW</li>
            <li><strong>Herramientas:</strong> Motosierras, cortacéspedes</li>
            <li><strong>Aviación ligera:</strong> Avionetas</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Motor Diesel">
        <Concept title="Principio de Funcionamiento">
          <p>
            El <strong>motor Diesel</strong> es un motor de encendido por compresión inventado por Rudolf Diesel 
            en 1892. La combustión ocurre por autoignición del combustible al inyectarlo en aire muy caliente.
          </p>

          <p><strong>Ciclo de 4 tiempos:</strong></p>
          
          <p><strong>1. Admisión:</strong></p>
          <ul>
            <li>Solo aire entra al cilindro (sin combustible)</li>
            <li>Permite mayor relación de compresión</li>
            <li>Válvula de admisión abierta</li>
          </ul>

          <p><strong>2. Compresión:</strong></p>
          <ul>
            <li>Aire se comprime fuertemente (relación 14:1 a 25:1)</li>
            <li>Temperatura alcanza 700-900°C</li>
            <li>Presión llega a 30-50 bar</li>
            <li>Temperatura suficiente para autoignición</li>
          </ul>

          <p><strong>3. Expansión (Carrera de potencia):</strong></p>
          <ul>
            <li>Combustible se inyecta a alta presión (200-2000 bar)</li>
            <li>Se atomiza en finas gotas</li>
            <li>Autoignición inmediata al contacto con aire caliente</li>
            <li>Combustión progresiva mientras se inyecta</li>
            <li>Presión máxima: 80-120 bar</li>
          </ul>

          <p><strong>4. Escape:</strong></p>
          <ul>
            <li>Gases quemados son expulsados</li>
            <li>Similar al motor Otto</li>
          </ul>
        </Concept>

        <Concept title="Características Técnicas">
          <p><strong>Relación de compresión:</strong></p>
          <ul>
            <li>Motores ligeros: 14:1 a 18:1</li>
            <li>Motores pesados: 16:1 a 25:1</li>
            <li>Mayor que Otto → mayor eficiencia</li>
            <li>No limitada por knock (no hay premezcla)</li>
          </ul>

          <p><strong>Sistema de inyección:</strong></p>
          <ul>
            <li><strong>Inyección indirecta (IDI):</strong> Precámara, más suave, obsoleta</li>
            <li><strong>Inyección directa (DI):</strong> Directa en cilindro, más eficiente</li>
            <li><strong>Common Rail:</strong> Riel común a alta presión, control electrónico preciso</li>
            <li>Presión de inyección: 200-2500 bar (vs 3-10 bar en Otto)</li>
          </ul>

          <p><strong>Turboalimentación:</strong></p>
          <ul>
            <li>Prácticamente todos los diésel modernos son turbo</li>
            <li>Mejora potencia y eficiencia</li>
            <li>Intercooler enfría aire comprimido</li>
            <li>Geometría variable (VGT) optimiza en todo el rango</li>
          </ul>

          <p><strong>Control de emisiones:</strong></p>
          <ul>
            <li><strong>EGR:</strong> Recirculación de gases de escape, reduce NOₓ</li>
            <li><strong>DPF:</strong> Filtro de partículas diésel</li>
            <li><strong>SCR:</strong> Reducción catalítica selectiva con urea (AdBlue)</li>
            <li><strong>DOC:</strong> Catalizador de oxidación diésel</li>
          </ul>
        </Concept>

        <Concept title="Ventajas sobre Otto">
          <ul>
            <li><strong>Mayor eficiencia:</strong> 30-40% vs 25-30% (mayor compresión)</li>
            <li><strong>Mayor torque:</strong> Especialmente a bajas RPM</li>
            <li><strong>Menor consumo:</strong> 20-30% menos combustible</li>
            <li><strong>Combustible más económico:</strong> Diésel más barato que gasolina</li>
            <li><strong>Mayor durabilidad:</strong> Construcción más robusta</li>
            <li><strong>Menor riesgo de incendio:</strong> Diésel menos volátil</li>
          </ul>
        </Concept>

        <Concept title="Desventajas">
          <ul>
            <li><strong>Mayor peso:</strong> Componentes más robustos</li>
            <li><strong>Mayor costo inicial:</strong> +20-30% vs Otto equivalente</li>
            <li><strong>Más ruido y vibraciones:</strong> Combustión más brusca</li>
            <li><strong>Mayores emisiones de NOₓ y partículas:</strong> Requiere tratamiento complejo</li>
            <li><strong>Menor potencia específica:</strong> kW/litro menor que Otto</li>
            <li><strong>Arranque en frío difícil:</strong> Requiere bujías de precalentamiento</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones">
          <ul>
            <li><strong>Transporte pesado:</strong> Camiones, autobuses (100%)</li>
            <li><strong>Maquinaria:</strong> Construcción, agrícola, minería</li>
            <li><strong>Generación eléctrica:</strong> Grupos electrógenos 10 kW - 10 MW</li>
            <li><strong>Propulsión marina:</strong> Barcos, ferries</li>
            <li><strong>Ferrocarril:</strong> Locomotoras diésel-eléctricas</li>
            <li><strong>Automóviles:</strong> En declive por emisiones, aún común en Europa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de Rendimiento">
        <Concept title="Eficiencia del Motor">
          <Formula 
            expression={String.raw`\eta_{motor} = \frac{W_{util}}{Q_{combustible}}`}
            description="Eficiencia del motor"
            calculatorId="motores_de_combustion_interna-eficiencia"
            definitions={motoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Eficiencia indicada", expression: String.raw`\eta_i = \frac{W_{indicado}}{Q_{combustible}}` },
              { description: "Eficiencia mecánica", expression: String.raw`\eta_m = \frac{W_{util}}{W_{indicado}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>η_motor:</strong> Eficiencia efectiva del motor (adimensional)</li>
            <li><strong>W_util:</strong> Trabajo útil en el eje (J o kWh)</li>
            <li><strong>Q_combustible:</strong> Energía química del combustible (J o kWh)</li>
          </ul>

          <p><strong>Eficiencias típicas:</strong></p>
          <ul>
            <li>Otto atmosférico: 25-28%</li>
            <li>Otto turbo: 28-32%</li>
            <li>Diesel ligero: 30-35%</li>
            <li>Diesel pesado: 35-42%</li>
            <li>Diesel marino grande: 45-50% (los más eficientes)</li>
          </ul>

          <p><strong>Distribución de energía:</strong></p>
          <ul>
            <li>Trabajo útil: 25-40%</li>
            <li>Calor al refrigerante: 20-30%</li>
            <li>Calor en gases de escape: 30-40%</li>
            <li>Fricción y auxiliares: 5-10%</li>
            <li>Radiación: 2-5%</li>
          </ul>
        </Concept>

        <Concept title="Consumo Específico de Combustible">
          <Formula 
            expression={String.raw`\text{SFC} = \frac{\dot{m}_{combustible}}{P}`}
            description="Consumo específico de combustible"
            calculatorId="motores_de_combustion_interna-sfc"
            definitions={motoresDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Relación con eficiencia", expression: String.raw`\text{SFC} = \frac{1}{\eta \times \text{PCI}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>SFC:</strong> Consumo específico (g/(kW·h) o kg/(kW·s))</li>
            <li><strong>ṁ_combustible:</strong> Flujo másico de combustible (g/h o kg/s)</li>
            <li><strong>P:</strong> Potencia del motor (kW o W)</li>
          </ul>

          <p><strong>Valores típicos (g/(kW·h)):</strong></p>
          <ul>
            <li>Otto atmosférico: 280-320</li>
            <li>Otto turbo: 250-280</li>
            <li>Diesel ligero: 220-250</li>
            <li>Diesel pesado: 190-220</li>
            <li>Diesel marino: 170-190</li>
          </ul>

          <p><strong>Menor SFC = Mayor eficiencia</strong></p>
        </Concept>

        <Concept title="Curvas Características">
          <p><strong>Potencia vs RPM:</strong></p>
          <ul>
            <li>Otto: Potencia máxima a altas RPM (5000-7000 rpm)</li>
            <li>Diesel: Potencia máxima a RPM medias (3000-4500 rpm)</li>
            <li>Curva más plana en Diesel</li>
          </ul>

          <p><strong>Torque vs RPM:</strong></p>
          <ul>
            <li>Otto: Torque máximo a RPM medias-altas</li>
            <li>Diesel: Torque máximo a bajas RPM, más constante</li>
            <li>Diesel turbo: Torque plano en amplio rango</li>
          </ul>

          <p><strong>Consumo vs Carga:</strong></p>
          <ul>
            <li>Mínimo consumo específico: 70-80% de carga</li>
            <li>Ralentí: Consumo alto relativo (0 trabajo útil)</li>
            <li>Carga parcial: Eficiencia reducida</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Otros tipos de motores de combustión interna">
        <Concept title="Motor de dos tiempos (variante)">
          <p>
            Realiza el ciclo completo en solo dos movimientos del pistón. Es más simple y ligero, pero menos eficiente y más contaminante. Se usa donde el peso y la simplicidad son clave.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Ligero, alta potencia por peso, simple.</li>
            <li><strong>Desventajas:</strong> Más emisiones, mayor consumo de aceite y combustible.</li>
            <li><strong>Aplicaciones:</strong> Motos pequeñas, motosierras, motores fuera de borda, cortacésped.</li>
          </ul>
        </Concept>
        <Concept title="Motor rotativo Wankel (caso especial)">
          <p>
            Utiliza un rotor triangular en vez de pistones. Es muy compacto y suave, pero menos eficiente y con mayor consumo de aceite.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Muy compacto, pocas piezas móviles, funcionamiento suave.</li>
            <li><strong>Desventajas:</strong> Menor eficiencia, desgaste de sellos, consumo de aceite.</li>
            <li><strong>Aplicaciones:</strong> Autos deportivos (Mazda RX-7/RX-8), aviones ligeros, prototipos.</li>
          </ul>
        </Concept>
        <Concept title="Motor de ciclo Atkinson (variante de Otto)">
          <p>
            Variante del Otto que modifica el tiempo de apertura de válvulas para aumentar la expansión respecto a la compresión, logrando mayor eficiencia térmica a costa de menor potencia específica.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Muy eficiente, ideal para híbridos.</li>
            <li><strong>Desventajas:</strong> Menor potencia máxima.</li>
            <li><strong>Aplicaciones:</strong> Autos híbridos (Toyota Prius y similares).</li>
          </ul>
        </Concept>
        <Concept title="Motor de ciclo Miller (variante de Otto/Atkinson)">
          <p>
            Similar al Atkinson, pero emplea control especial de válvulas y a menudo sobrealimentación. Permite mejorar la eficiencia y reducir emisiones.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Eficiencia mejorada, menos emisiones.</li>
            <li><strong>Desventajas:</strong> Mayor complejidad técnica.</li>
            <li><strong>Aplicaciones:</strong> Algunos autos modernos, motores industriales y marinos.</li>
          </ul>
        </Concept>
        <Concept title="Motores a gas (GLP, GNC, biogás)">
          <p>
            Adaptados para quemar combustibles gaseosos en vez de líquidos. Son más limpios y se usan en flotas urbanas y generación eléctrica.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Menos emisiones, menor costo de combustible.</li>
            <li><strong>Desventajas:</strong> Menor autonomía, infraestructura limitada.</li>
            <li><strong>Aplicaciones:</strong> Taxis, autobuses urbanos, cogeneración eléctrica, vehículos de reparto.</li>
          </ul>
        </Concept>
        <Concept title="Motores de combustión interna de turbina (caso especial)">
          <p>
            Funcionan por flujo continuo de gases, no por movimiento alternativo. Son muy potentes y ligeros para su tamaño, pero menos eficientes a baja carga.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> Alta potencia específica, funcionamiento suave, pocos componentes móviles.</li>
            <li><strong>Desventajas:</strong> Bajo rendimiento a baja carga, alto consumo de combustible.</li>
            <li><strong>Aplicaciones:</strong> Aviación (turbinas, turbohélice), generación eléctrica, barcos rápidos.</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Mantenimiento y Operación">
        <Concept title="Mantenimiento Preventivo">
          <p><strong>Cada 10,000-15,000 km:</strong></p>
          <ul>
            <li>Cambio de aceite y filtro</li>
            <li>Inspección de niveles</li>
            <li>Revisión de correas</li>
          </ul>

          <p><strong>Cada 20,000-30,000 km:</strong></p>
          <ul>
            <li>Cambio de filtro de aire</li>
            <li>Cambio de filtro de combustible</li>
            <li>Revisión de bujías (Otto)</li>
          </ul>

          <p><strong>Cada 60,000-100,000 km:</strong></p>
          <ul>
            <li>Cambio de correa de distribución</li>
            <li>Cambio de líquido refrigerante</li>
            <li>Limpieza de inyectores</li>
          </ul>
        </Concept>

        <Concept title="Conducción Eficiente">
          <ul>
            <li>Mantener RPM bajas (2000-3000 rpm)</li>
            <li>Anticipar frenadas</li>
            <li>Evitar aceleraciones bruscas</li>
            <li>Usar marchas altas</li>
            <li>Mantener presión de neumáticos</li>
            <li>Reducir peso innecesario</li>
            <li>Ahorro potencial: 10-20%</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Futuro de los MCI">
        <Concept title="Tendencias">
          <ul>
            <li><strong>Electrificación progresiva:</strong> Más híbridos, menos puros</li>
            <li><strong>Regulaciones estrictas:</strong> Euro 7, emisiones cero en ciudades</li>
            <li><strong>Combustibles sintéticos:</strong> E-fuels para neutralidad carbono</li>
            <li><strong>Hidrógeno:</strong> Combustión H₂ en motores adaptados</li>
            <li><strong>Nichos específicos:</strong> Transporte pesado, maquinaria, generación</li>
          </ul>
        </Concept>

        <Concept title="Perspectivas">
          <p>
            Aunque los vehículos eléctricos ganan terreno, los MCI seguirán siendo relevantes por décadas en:
          </p>
          <ul>
            <li>Transporte pesado de larga distancia</li>
            <li>Maquinaria móvil (construcción, agrícola)</li>
            <li>Generación de respaldo</li>
            <li>Aviación (difícil electrificar)</li>
            <li>Países en desarrollo</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};

export default MotoresCombustionInternaTheory;
