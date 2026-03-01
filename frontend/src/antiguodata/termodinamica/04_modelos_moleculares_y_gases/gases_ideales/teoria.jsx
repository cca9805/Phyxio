import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as gases_idealesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Gases Ideales",
  descripcion: "Modelo simplificado del comportamiento de gases a bajas presiones y altas temperaturas",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO'],
  isTheoryOnly: false
};

const GasesIdealesTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es un Gas Ideal?">
        <Concept title="Definición">
          <p>
            Un gas ideal es un modelo teórico que describe el comportamiento de gases bajo ciertas condiciones simplificadas. Aunque ningún gas real es perfectamente ideal, muchos gases se comportan de manera muy similar a este modelo a bajas presiones y altas temperaturas.
          </p>

          <Important>
            <p>Suposiciones del Modelo de Gas Ideal:</p>
            <ul>
              <li>Sin interacciones: Las moléculas no ejercen fuerzas entre sí (excepto durante colisiones)</li>
              <li>Volumen despreciable: El volumen de las moléculas es insignificante comparado con el volumen del recipiente</li>
              <li>Colisiones elásticas: No se pierde energía en las colisiones</li>
              <li>Movimiento aleatorio: Las moléculas se mueven en todas direcciones con velocidades variadas</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Condiciones de Aplicabilidad">
          <p>El modelo de gas ideal funciona mejor cuando:</p>
          <ul>
            <li>Presión baja: Típicamente P &lt; 10 atm</li>
            <li>Temperatura alta: Alejada del punto de condensación</li>
            <li>Gases monoatómicos o diatómicos simples: He, Ne, Ar, N₂, O₂, H₂</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuación de Estado del Gas Ideal">
        <Concept title="Ecuación Fundamental: PV = nRT">
          <p>
            La ecuación de estado del gas ideal relaciona las cuatro variables termodinámicas principales:
          </p>

          <Formula
            expression={String.raw`PV = nRT`}
            description="Ecuación de estado del gas ideal"
            calculatorId="gases_ideales-grupo-1"
            definitions={gases_idealesDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Presión", expression: String.raw`P = \frac{nRT}{V}` },
              { description: "Volumen", expression: String.raw`V = \frac{nRT}{P}` },
              { description: "Temperatura", expression: String.raw`T = \frac{PV}{nR}` },
              { description: "Moles", expression: String.raw`n = \frac{PV}{RT}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>P: Presión del gas (Pa)</li>
            <li>V: Volumen del gas (m³)</li>
            <li>n: Número de moles (mol)</li>
            <li>R: Constante universal de los gases = 8.314 J/(mol·K)</li>
            <li>T: Temperatura absoluta (K)</li>
          </ul>

          <Important>
            <p>Valores de R en diferentes unidades:</p>
            <ul>
              <li>R = 8.314 J/(mol·K)</li>
              <li>R = 0.08206 L·atm/(mol·K)</li>
              <li>R = 8.314 kPa·L/(mol·K)</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Leyes de los Gases">
          <p>La ecuación PV = nRT engloba tres leyes históricas importantes:</p>
          
          <p>Ley de Boyle (T y n constantes):</p>
          <p style={{textAlign: 'center', margin: '0.5em 0'}}>P₁V₁ = P₂V₂</p>
          
          <p>Ley de Charles (P y n constantes):</p>
          <p style={{textAlign: 'center', margin: '0.5em 0'}}>V₁/T₁ = V₂/T₂</p>
          
          <p>Ley de Gay-Lussac (V y n constantes):</p>
          <p style={{textAlign: 'center', margin: '0.5em 0'}}>P₁/T₁ = P₂/T₂</p>
          
          <p>Ley de Avogadro (P y T constantes):</p>
          <p style={{textAlign: 'center', margin: '0.5em 0'}}>V₁/n₁ = V₂/n₂</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Prácticos">
        <Example 
          title="Ejemplo 1: Cálculo de Presión"
          problem="Un recipiente de 2 m³ contiene 3 moles de gas ideal a 300 K. Calcula la presión del gas."
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>V = 2 m³</li>
                <li>n = 3 mol</li>
                <li>T = 300 K</li>
                <li>R = 8.314 J/(mol·K)</li>
              </ul>
              
              <p>Solución:</p>
              <p>P = nRT / V</p>
              <p>P = (3 mol × 8.314 J/(mol·K) × 300 K) / 2 m³</p>
              <p>P = 7482.6 / 2 = 3741.3 Pa</p>
              
              <p>Resultado: P = 3741.3 Pa ≈ 3.74 kPa</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 2: Expansión Isotérmica"
          problem="Un gas ideal a 300 K y 1 atm ocupa 1 L. Si se expande isotérmicamente a 2.5 L, ¿cuál es la presión final?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>T = 300 K (constante)</li>
                <li>P₁ = 1 atm</li>
                <li>V₁ = 1 L</li>
                <li>V₂ = 2.5 L</li>
              </ul>
              
              <p>Solución:</p>
              <p>Como T es constante, usamos la Ley de Boyle:</p>
              <p>P₁V₁ = P₂V₂</p>
              <p>P₂ = (P₁ × V₁) / V₂</p>
              <p>P₂ = (1 atm × 1 L) / 2.5 L</p>
              <p>P₂ = 0.4 atm</p>
              
              <p>Resultado: P₂ = 0.4 atm</p>
            </div>
          }
        />

        <Example 
          title="Ejemplo 3: Condiciones Normales"
          problem="¿Cuántos moles de gas ideal hay en 22.4 L a 0°C y 1 atm (condiciones normales)?"
          solution={
            <div>
              <p>Datos:</p>
              <ul>
                <li>V = 22.4 L = 0.0224 m³</li>
                <li>T = 0°C = 273.15 K</li>
                <li>P = 1 atm = 101325 Pa</li>
                <li>R = 8.314 J/(mol·K)</li>
              </ul>
              
              <p>Solución:</p>
              <p>n = PV / (RT)</p>
              <p>n = (101325 Pa × 0.0224 m³) / (8.314 J/(mol·K) × 273.15 K)</p>
              <p>n = 2269.68 / 2271.15 ≈ 1 mol</p>
              
              <p>Resultado: n ≈ 1 mol</p>
              <p>Nota: Este es el volumen molar estándar: 1 mol de cualquier gas ideal ocupa 22.4 L a 0°C y 1 atm.</p>
            </div>
          }
        />
      </TheorySection>

      <TheorySection title="Aplicaciones Prácticas">
        <Concept title="Ejemplos en la Vida Real">
          <ul>
            <li>Neumáticos: Cálculo de presión según temperatura ambiente</li>
            <li>Globos aerostáticos: Relación entre temperatura y volumen</li>
            <li>Buceo: Cálculo de consumo de aire a diferentes profundidades</li>
            <li>Meteorología: Predicción de comportamiento de masas de aire</li>
            <li>Industria química: Diseño de reactores y cálculo de rendimientos</li>
          </ul>
        </Concept>

        <Concept title="Gases que se Comportan Idealmente">
          <p>A condiciones normales (25°C, 1 atm), estos gases se aproximan bien al modelo ideal:</p>
          <ul>
            <li>Gases nobles: He, Ne, Ar (excelente aproximación)</li>
            <li>Gases diatómicos: H₂, N₂, O₂ (buena aproximación)</li>
            <li>Aire: Mezcla de gases que se comporta idealmente</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Limitaciones del Modelo">
        <Concept title="Cuándo NO usar el Modelo de Gas Ideal">
          <ul>
            <li>Altas presiones: Las moléculas están muy cerca y las fuerzas intermoleculares son significativas</li>
            <li>Bajas temperaturas: Cerca del punto de condensación, las fuerzas atractivas dominan</li>
            <li>Gases polares: H₂O, NH₃, HCl tienen fuertes interacciones intermoleculares</li>
            <li>Cerca de cambios de fase: El modelo falla cuando el gas está por condensarse</li>
          </ul>
          
          <p>Alternativa: Para gases reales bajo estas condiciones, usar la ecuación de Van der Waals u otras ecuaciones de estado más complejas.</p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2><span className="emoji-icon">🔧</span> Aplicaciones en la Vida Real</h2>
        
        <div className="theory-subsection">
          <h3>Neumáticos automóvil presión 2.2bar temperatura 20°C verano 35°C aumento 2.5bar Ley Gay-Lussac P/T constante seguridad revisión</h3>
          <p>Neumáticos automóvil presión recomendada 2.2bar=220kPa temperatura ambiente 20°C=293K verificación matutina calentamiento rodaje fricción asfalto verano 35°C=308K aumento presión Ley Gay-Lussac volumen constante P₁/T₁=P₂/T₂ P₂=P₁×T₂/T₁=2.2×308/293=2.5bar sobrepresión 13% desgaste irregular adherencia reducida consumo combustible aumentado revisión periódica válvula purga ajuste presión fría normativa fabricante etiqueta puerta conductor manual vehículo aplicación PV=nRT cantidad gas constante volumen neumático rígido temperatura factor crítico seguridad vial.</p>
        </div>

        <div className="theory-subsection">
          <h3>Globo aerostático volumen 2500m³ aire caliente 100°C elevación 400kg densidad menor ambiente Arquímedes empuje ascenso controlado</h3>
          <p>Globo aerostático envoltura nylon poliéster volumen típico 2500m³ aire caliente quemador propano temperatura 100°C=373K densidad ρ=P×M/(RT) presión atmosférica 101325Pa masa molar aire 28.97g/mol densidad caliente 0.946kg/m³ ambiente 20°C 1.204kg/m³ diferencia 0.258kg/m³ empuje Arquímedes F=ΔρgV=0.258×9.81×2500=6330N capacidad carga 645kg peso envoltura cesta quemador 245kg pasajeros 400kg control altitud calentamiento ascenso enfriamiento descenso válvula superior venteo rápido aterrizaje Ley Charles V∝T presión constante aplicación turismo deportivo meteorología transporte histórico récord altitud 21000m presurizado.</p>
        </div>

        <div className="theory-subsection">
          <h3>Buceo profundidad 30metros presión 4bar consumo aire 60L/min botella 15L 200bar autonomía 50minutos Ley Boyle descompresión</h3>
          <p>Buceo recreativo botella aluminio acero 15L presión carga 200bar=20MPa cantidad aire n=PV/(RT)=20×10⁶×0.015/(8.314×288)=125mol equivalente 2800L presión atmosférica profundidad 30m presión absoluta P=P₀+ρgh=101325+1025×9.81×30=403kPa≈4bar consumo buceador reposo 15L/min ejercicio 40L/min medio 25L/min superficie profundidad Ley Boyle P₁V₁=P₂V₂ volumen pulmonar constante presión aumenta consumo proporcional 25×4=100L/min presión atmosférica autonomía 2800/100=28minutos reserva seguridad 50bar ascenso paradas descompresión nitrógeno disuelto sangre tejidos enfermedad descompresión burbujas embolia tratamiento cámara hiperbárica aplicación PV=nRT cantidad gas respirado.</p>
        </div>

        <div className="theory-subsection">
          <h3>Meteorología masa aire cálido 30°C expansión ascenso enfriamiento adiabático 10°C/km formación nubes precipitación predicción</h3>
          <p>Meteorología masa aire tropical 30°C=303K presión superficie 1013hPa densidad baja flotación ascenso expansión adiabática reducción presión altitud enfriamiento gradiente adiabático seco 9.8°C/km húmedo 6°C/km condensación vapor agua temperatura rocío formación nubes cúmulos desarrollo vertical convección 5000m temperatura -20°C precipitación lluvia granizo tormenta modelo numérico ecuación gas ideal PV=nRT densidad ρ=PM/(RT) estabilidad atmosférica inversión térmica contaminación predicción vientos gradiente presión horizontal fuerza Coriolis rotación Tierra ciclogénesis anticiclón aplicación pronóstico tiempo cambio climático.</p>
        </div>

        <div className="theory-subsection">
          <h3>Reactor químico síntesis amoníaco Haber-Bosch 200bar 450°C N₂+3H₂→2NH₃ equilibrio rendimiento 15% reciclaje gases cálculo estequiométrico</h3>
          <p>Reactor síntesis amoníaco proceso Haber-Bosch presión 200bar temperatura 450°C=723K catalizador hierro promotores reacción N₂+3H₂⇌2NH₃ equilibrio químico rendimiento conversión 15% presión alta desplazamiento derecho menor volumen moles temperatura compromiso cinética termodinámica cálculo estequiométrico gas ideal alimentación nitrógeno aire separación criogénica hidrógeno reformado vapor metano CH₄+H₂O→CO+3H₂ relación molar 1:3 caudal 1000mol/h nitrógeno 250mol/h conversión 15% producción amoníaco 75mol/h reciclaje gases no reaccionados 85% separación licuefacción amoníaco -33°C presión atmosférica aplicación fertilizantes 80% producción mundial 150millones toneladas año seguridad alimentaria.</p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2><span className="emoji-icon">📜</span> Contexto Histórico</h2>
        
        <div className="theory-subsection">
          <h3>1662 Robert Boyle Ley volumen presión temperatura constante P₁V₁=P₂V₂ experimento tubo mercurio aire compresión verificación cuantitativa</h3>
          <p>Robert Boyle científico irlandés 1662 publicación experimentos físico-mecánicos resorte aire elasticidad tubo vidrio forma J mercurio atrapamiento aire rama cerrada adición mercurio rama abierta aumento presión medición reducción volumen proporcional inversión presión doblada volumen mitad Ley Boyle temperatura constante isoterma P₁V₁=P₂V₂ relación hiperbólica primera ley gas cuantitativa reproducible método científico experimental verificación hipótesis Mariotte 1676 independiente confirmación Francia reconocimiento Ley Boyle-Mariotte aplicación bomba vacío Torricelli barómetro presión atmosférica fundamento química neumática gases.</p>
        </div>

        <div className="theory-subsection">
          <h3>1787 Jacques Charles Ley volumen temperatura presión constante V₁/T₁=V₂/T₂ expansión térmica gases coeficiente 1/273 cero absoluto anticipación</h3>
          <p>Jacques Charles físico francés 1787 experimentos no publicados expansión térmica gases calentamiento volumen proporcional temperatura presión constante isobara V∝T coeficiente expansión α=1/273 1°C todos gases similar independiente naturaleza química extrapolación volumen cero temperatura -273°C anticipación cero absoluto concepto no formalizado Kelvin 1848 Gay-Lussac 1802 publicación Ley Charles-Gay-Lussac V₁/T₁=V₂/T₂ temperatura Celsius conversión Kelvin T(K)=T(°C)+273.15 aplicación globos aerostáticos pionero vuelo hidrógeno 1783 Montgolfier aire caliente desarrollo aviación.</p>
        </div>

        <div className="theory-subsection">
          <h3>1811 Amedeo Avogadro hipótesis volúmenes iguales gases misma temperatura presión contienen igual número moléculas n₁/V₁=n₂/V₂ mol</h3>
          <p>Amedeo Avogadro químico italiano 1811 hipótesis revolucionaria volúmenes iguales gases diferentes temperatura presión iguales contienen mismo número moléculas distinción átomos moléculas H₂ O₂ N₂ diatómicas explicación Gay-Lussac leyes volúmenes combinación 2H₂+O₂→2H₂O relación simple rechazada Dalton contemporáneos aceptación 1860 Congreso Karlsruhe Cannizzaro defensa reconocimiento póstumo constante Avogadro N_A=6.022×10²³ mol⁻¹ número partículas mol volumen molar 22.4L condiciones normales 0°C 1atm fundamento estequiometría química cuantitativa.</p>
        </div>

        <div className="theory-subsection">
          <h3>1834 Émile Clapeyron ecuación estado unificada PV=nRT combinación leyes Boyle Charles Gay-Lussac Avogadro constante universal gases</h3>
          <p>Benoît Paul Émile Clapeyron ingeniero físico francés 1834 memoria potencia motriz calor máquinas vapor unificación leyes gases ecuación estado única PV=nRT presión volumen cantidad moles temperatura absoluta constante universal gases R introducción trabajo Carnot ciclo termodinámico diagrama Clapeyron presión-volumen representación gráfica procesos isoterma adiabática análisis eficiencia máquinas determinación valor R=8.314J/(mol·K) mediciones experimentales múltiples gases verificación universalidad aplicación ingeniería diseño calderas turbinas termodinámica clásica ecuación Clausius-Clapeyron cambios fase evaporación sublimación presión vapor temperatura.</p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span className="emoji-icon">💡</span> Curiosidades y Anécdotas</h2>
        
        <div className="theory-subsection">
          <h3>Volumen molar 22.4L condiciones normales 0°C 1atm independiente gas hidrógeno oxígeno nitrógeno mismo número moléculas Avogadro cubo 28cm</h3>
          <p>Volumen molar estándar 22.414L 0°C=273.15K 1atm=101325Pa independiente naturaleza gas ideal hidrógeno masa 2g oxígeno 32g nitrógeno 28g todos ocupan 22.4L contienen 6.022×10²³ moléculas constante Avogadro verificación PV=nRT n=1mol P=101325Pa T=273.15K V=nRT/P=1×8.314×273.15/101325=0.02241m³=22.41L visualización cubo lado 28.2cm caja zapatos pequeña cantidad enorme moléculas densidad relativa hidrógeno 0.09g/L oxígeno 1.43g/L aplicación química cálculos estequiométricos conversión masa volumen gas laboratorio industrial.</p>
        </div>

        <div className="theory-subsection">
          <h3>Constante gases R valor universal 8.314J/(mol·K) unidades múltiples 0.08206L·atm/(mol·K) 62.36L·mmHg/(mol·K) conversión factores aplicación</h3>
          <p>Constante universal gases R=8.314J/(mol·K) unidades SI energía temperatura mol conversión otras unidades 0.08206L·atm/(mol·K) química presión atmosférica volumen litros 62.36L·mmHg/(mol·K) presión mercurio 1.987cal/(mol·K) calorías termodinámica clásica 8.314kPa·L/(mol·K) kilopascales valor universal todos gases ideales independiente composición química relación constante Boltzmann k_B=1.381×10⁻²³J/K R=N_A×k_B número Avogadro puente microscópico macroscópico aplicación elección unidades coherencia problema presión atmósferas volumen litros usar R=0.08206 evitar conversiones errores cálculo.</p>
        </div>

        <div className="theory-subsection">
          <h3>Aire comportamiento ideal temperatura ambiente presión atmosférica mezcla 78%N₂ 21%O₂ 1%Ar trazas masa molar 28.97g/mol propiedades</h3>
          <p>Aire atmosférico mezcla gases composición 78.08%N₂ 20.95%O₂ 0.93%Ar 0.04%CO₂ trazas Ne He CH₄ comportamiento gas ideal temperatura ambiente 15-25°C presión atmosférica 101325Pa desviación menor 0.1% ecuación PV=nRT masa molar promedio M=0.7808×28+0.2095×32+0.0093×40=28.97g/mol densidad ρ=PM/(RT)=101325×0.02897/(8.314×288)=1.225kg/m³ 20°C nivel mar aplicación aeronáutica empuje sustentación meteorología altitud 5000m presión 54kPa densidad 0.736kg/m³ rendimiento motor combustión oxígeno disponible montañismo aclimatación altitud.</p>
        </div>

        <div className="theory-subsection">
          <h3>Helio comportamiento ideal excelente temperatura ambiente gas noble monoatómico sin interacciones aplicación calibración instrumentos referencia estándar</h3>
          <p>Helio gas noble monoatómico configuración electrónica 1s² estable inerte sin enlaces químicos interacciones intermoleculares mínimas fuerzas Van der Waals débiles comportamiento gas ideal excelente temperatura ambiente presión atmosférica desviación ecuación PV=nRT inferior 0.01% rango amplio temperatura -200°C +1000°C presión 0.1-100atm aplicación calibración instrumentos medición presión volumen temperatura estándar referencia cromatografía gas portador inerte detector ionización llama purga sistemas vacío fugas helio detector espectrómetro masas globos sondas meteorológicas atmosféricas refrigeración criogenia 4.2K superconductores resonancia magnética escasez recurso no renovable conservación reciclaje.</p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2><span className="emoji-icon">📋</span> Resumen de Conceptos Clave</h2>
        
        <ul className="key-points-list">
          <li>Gas ideal: modelo teórico simplificado moléculas puntuales sin interacciones colisiones elásticas movimiento aleatorio válido bajas presiones altas temperaturas</li>
          <li>Ecuación estado PV=nRT: relación fundamental presión volumen cantidad temperatura constante universal R=8.314J/(mol·K) unifica leyes históricas Boyle Charles Avogadro</li>
          <li>Leyes gases: Boyle P₁V₁=P₂V₂ isoterma Charles V₁/T₁=V₂/T₂ isobara Gay-Lussac P₁/T₁=P₂/T₂ isócora Avogadro V/n constante temperatura presión</li>
          <li>Condiciones aplicabilidad: presión baja inferior 10atm temperatura alta alejada condensación gases simples monoatómicos diatómicos He Ne Ar N₂ O₂ H₂</li>
          <li>Volumen molar: 22.4L condiciones normales 0°C 1atm 1mol cualquier gas ideal constante Avogadro 6.022×10²³ moléculas estequiometría conversión</li>
          <li>Aplicaciones: neumáticos seguridad globos aerostáticos empuje buceo consumo aire meteorología masas aire reactores químicos estequiometría ingeniería diseño</li>
        </ul>
      </div>
    </>
  );
};

export default GasesIdealesTheory;
