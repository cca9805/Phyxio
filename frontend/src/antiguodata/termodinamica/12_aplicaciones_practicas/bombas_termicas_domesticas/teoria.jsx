import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as bombasDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Bombas Térmicas Domésticas",
  descripcion: "Aplicación de bombas de calor en viviendas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const BombasTermicasDomesticasTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a las Bombas Térmicas">
        return (
          <>
            {/* ...existing teoría principal... */}
            <TheorySection title="Introducción a las Bombas Térmicas">
              <Concept title="¿Qué es una Bomba Térmica?">
                <p>
                  Una <strong>bomba térmica</strong> es un dispositivo que transfiere calor desde una fuente fría 
                  (exterior) hacia un espacio caliente (interior de la vivienda), consumiendo energía eléctrica. 
                  Es esencialmente un refrigerador funcionando "al revés".
                </p>
                <Important>
                  <p><strong>Principio fundamental:</strong></p>
                  <p>
                    Mientras que el calor fluye naturalmente de caliente a frío, una bomba térmica usa trabajo 
                    (electricidad) para "bombear" calor en dirección contraria: del frío exterior al caliente interior.
                  </p>
                </Important>
                <p><strong>Ventajas clave:</strong></p>
                <ul>
                  <li><strong>Alta eficiencia:</strong> COP típico 3-5 (entregan 3-5 veces más energía que consumen)</li>
                  <li><strong>Ahorro económico:</strong> 60-80% menos consumo vs calefacción eléctrica directa</li>
                  <li><strong>Reversibles:</strong> Calefacción en invierno, aire acondicionado en verano</li>
                  <li><strong>Energía renovable:</strong> Extraen calor gratuito del ambiente</li>
                  <li><strong>Bajas emisiones:</strong> Especialmente con electricidad renovable</li>
                  <li><strong>Sin combustión:</strong> Mayor seguridad, sin emisiones locales</li>
                </ul>
              </Concept>
              <Concept title="Ciclo Termodinámico">
                <p>Las bombas térmicas operan mediante un <strong>ciclo de compresión de vapor</strong>:</p>
                <p><strong>1. Evaporación (exterior):</strong></p>
                <ul>
                  <li>Refrigerante líquido a baja presión absorbe calor del exterior</li>
                  <li>Se evapora a temperatura baja (incluso con -15°C exterior)</li>
                  <li>Extrae calor del aire, suelo o agua</li>
                </ul>
                <p><strong>2. Compresión:</strong></p>
                <ul>
                  <li>Compresor eléctrico comprime el vapor</li>
                  <li>Aumenta presión y temperatura del refrigerante</li>
                  <li>Vapor caliente a 60-80°C</li>
                  <li>Aquí se consume la energía eléctrica</li>
                </ul>
                <p><strong>3. Condensación (interior):</strong></p>
                <ul>
                  <li>Vapor caliente cede calor al sistema de calefacción</li>
                  <li>Se condensa a líquido a alta presión</li>
                  <li>Calor entregado a radiadores, suelo radiante o aire</li>
                </ul>
                <p><strong>4. Expansión:</strong></p>
                <ul>
                  <li>Válvula de expansión reduce presión del líquido</li>
                  <li>Temperatura baja nuevamente</li>
                  <li>Listo para volver a evaporarse</li>
                </ul>
              </Concept>
            </TheorySection>
            {/* ...existing teoría principal... */}
            <TheorySection title="Consideraciones Prácticas">
              <Concept title="Instalación">
                <p><strong>Ubicación unidad exterior:</strong></p>
                <ul>
                  <li>Espacio libre para circulación de aire</li>
                  <li>Protegida de vientos dominantes</li>
                  <li>Alejada de dormitorios (ruido)</li>
                  <li>Base sólida y nivelada</li>
                </ul>
                <p><strong>Aislamiento de tuberías:</strong></p>
                <ul>
                  <li>Evita pérdidas de calor</li>
                  <li>Previene condensación</li>
                  <li>Mejora eficiencia 5-10%</li>
                </ul>
              </Concept>
              <Concept title="Mantenimiento">
                <p><strong>Anual:</strong></p>
                <ul>
                  <li>Limpieza de filtros e intercambiadores</li>
                  <li>Verificación de presión de refrigerante</li>
                  <li>Revisión de conexiones eléctricas</li>
                  <li>Comprobación de drenajes</li>
                </ul>
                <p><strong>Cada 2-3 años:</strong></p>
                <ul>
                  <li>Revisión completa por técnico</li>
                  <li>Análisis de rendimiento</li>
                  <li>Recarga de refrigerante si necesario</li>
                </ul>
              </Concept>
              <Concept title="Combinación con Otras Tecnologías">
                <p><strong>Sistema híbrido (bomba + caldera):</strong></p>
                <ul>
                  <li>Bomba térmica hasta -5°C</li>
                  <li>Caldera de gas en días muy fríos</li>
                  <li>Optimiza costos y eficiencia</li>
                </ul>
                <p><strong>Con energía solar:</strong></p>
                <ul>
                  <li>Paneles fotovoltaicos alimentan bomba</li>
                  <li>Autoconsumo reduce costos</li>
                  <li>Sistema casi cero emisiones</li>
                </ul>
              </Concept>
            </TheorySection>
            {/* Sección extra didáctica */}
            <ExtraBombasTermicas />
          </>
        );
        <Concept title="COP Estacional (SCOP)">
          <p>
            El <strong>SCOP</strong> (Seasonal Coefficient of Performance) es el COP promedio durante toda 
            la temporada de calefacción, considerando las variaciones de temperatura exterior.
          </p>

          <p><strong>Valores típicos de SCOP:</strong></p>
          <ul>
            <li>Bomba aire-aire: SCOP = 3.5-4.5</li>
            <li>Bomba aire-agua: SCOP = 3.0-4.0</li>
            <li>Bomba geotérmica: SCOP = 4.0-5.0</li>
          </ul>

          <p>
            El SCOP es más representativo del rendimiento real que el COP nominal (medido a 7°C exterior).
          </p>
        </Concept>

        <Concept title="Ahorro Energético">
          <Formula 
            expression={String.raw`\text{Ahorro} = 1 - \frac{1}{\text{COP}}`}
            description="Ahorro vs calefacción eléctrica directa"
            calculatorId="bombas_termicas_domesticas-grupo-1"
            definitions={bombasDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Consumo relativo", expression: String.raw`\frac{W_{bomba}}{W_{electrico}} = \frac{1}{\text{COP}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Ahorro:</strong> Fracción de energía ahorrada (0-1 o 0-100%)</li>
            <li><strong>COP:</strong> Coeficiente de rendimiento de la bomba térmica</li>
          </ul>

          <p><strong>Ejemplos prácticos:</strong></p>
          <ul>
            <li>COP = 3 → Ahorro = 1 - 1/3 = 0.67 = 67%</li>
            <li>COP = 4 → Ahorro = 1 - 1/4 = 0.75 = 75%</li>
            <li>COP = 5 → Ahorro = 1 - 1/5 = 0.80 = 80%</li>
          </ul>

          <p><strong>Ahorro económico anual:</strong></p>
          <p>
            Para una vivienda que consume 10,000 kWh/año en calefacción eléctrica (≈1,500€ a 0.15€/kWh):
          </p>
          <ul>
            <li>Con COP = 4: Consumo = 2,500 kWh → Costo = 375€ → <strong>Ahorro = 1,125€/año</strong></li>
            <li>Amortización típica: 5-10 años</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Tipos de Bombas Térmicas">
        <Concept title="1. Bombas Aire-Aire">
          <p><strong>Fuente:</strong> Aire exterior → <strong>Destino:</strong> Aire interior</p>
          <p><strong>COP:</strong> 2.5-3.5 (SCOP: 3.5-4.5)</p>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Más económicas (1,500-3,000€ instaladas)</li>
            <li>Instalación sencilla (split o multisplit)</li>
            <li>Reversibles (calefacción + aire acondicionado)</li>
            <li>Respuesta rápida</li>
          </ul>

          <p><strong>Limitaciones:</strong></p>
          <ul>
            <li>COP disminuye con frío extremo (&lt; -10°C)</li>
            <li>Requiere desescarche frecuente en climas húmedos</li>
            <li>Distribución de calor menos uniforme</li>
            <li>Puede resecar el ambiente</li>
          </ul>

          <p><strong>Ideal para:</strong> Climas templados, viviendas bien aisladas, complemento a calefacción existente</p>
        </Concept>

        <Concept title="2. Bombas Aire-Agua">
          <p><strong>Fuente:</strong> Aire exterior → <strong>Destino:</strong> Agua de calefacción</p>
          <p><strong>COP:</strong> 2.5-4.0 (SCOP: 3.0-4.0)</p>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Compatible con radiadores y suelo radiante</li>
            <li>Puede producir agua caliente sanitaria (ACS)</li>
            <li>Distribución uniforme del calor</li>
            <li>Mayor confort térmico</li>
          </ul>

          <p><strong>Consideraciones:</strong></p>
          <ul>
            <li>Inversión media (5,000-10,000€)</li>
            <li>Mejor con suelo radiante (35-45°C) que radiadores (60-70°C)</li>
            <li>Requiere espacio para unidad exterior e interior</li>
            <li>Inercia térmica (respuesta más lenta)</li>
          </ul>

          <p><strong>Ideal para:</strong> Viviendas con calefacción central, suelo radiante, necesidad de ACS</p>
        </Concept>

        <Concept title="3. Bombas Geotérmicas (Suelo-Agua)">
          <p><strong>Fuente:</strong> Suelo/agua subterránea → <strong>Destino:</strong> Agua de calefacción</p>
          <p><strong>COP:</strong> 4.0-5.0 (SCOP: 4.0-5.0)</p>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Máxima eficiencia y estabilidad</li>
            <li>COP constante (temperatura del suelo estable 10-15°C)</li>
            <li>Vida útil larga (25-30 años)</li>
            <li>Funcionamiento silencioso</li>
            <li>Mínimo mantenimiento</li>
          </ul>

          <p><strong>Tipos de captación:</strong></p>
          <ul>
            <li><strong>Horizontal:</strong> Tubos enterrados 1-2 m, requiere 200-400 m² de terreno</li>
            <li><strong>Vertical:</strong> Sondas a 50-150 m de profundidad, menor superficie necesaria</li>
            <li><strong>Agua subterránea:</strong> Pozo de extracción y reinyección, máximo COP</li>
          </ul>

          <p><strong>Limitaciones:</strong></p>
          <ul>
            <li>Alta inversión inicial (15,000-25,000€)</li>
            <li>Requiere terreno disponible o perforación</li>
            <li>Permisos y estudios geológicos</li>
            <li>Amortización más larga (10-15 años)</li>
          </ul>

          <p><strong>Ideal para:</strong> Viviendas unifamiliares con terreno, climas fríos, uso intensivo</p>
        </Concept>

        <Concept title="4. Bombas Agua-Agua">
          <p><strong>Fuente:</strong> Agua (río, lago, mar) → <strong>Destino:</strong> Agua de calefacción</p>
          <p><strong>COP:</strong> 4.5-5.5</p>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Máximo COP por temperatura estable del agua</li>
            <li>Aplicaciones industriales y grandes edificios</li>
            <li>Requiere proximidad a fuente de agua</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Dimensionamiento y Selección">
        <Concept title="Cálculo de Potencia Necesaria">
          <p><strong>Factores a considerar:</strong></p>
          <ul>
            <li><strong>Pérdidas térmicas:</strong> Aislamiento, superficie, orientación</li>
            <li><strong>Temperatura de diseño:</strong> Mínima exterior esperada</li>
            <li><strong>Temperatura interior deseada:</strong> Típicamente 20-22°C</li>
            <li><strong>Volumen a calefactar:</strong> m³ de la vivienda</li>
          </ul>

          <p><strong>Regla aproximada:</strong></p>
          <ul>
            <li>Vivienda bien aislada: 40-60 W/m²</li>
            <li>Vivienda aislamiento medio: 60-80 W/m²</li>
            <li>Vivienda mal aislada: 80-120 W/m²</li>
          </ul>

          <p><strong>Ejemplo:</strong> Vivienda 100 m², aislamiento medio → Potencia = 100 × 70 = 7 kW</p>
        </Concept>

        <Concept title="Criterios de Selección">
          <p><strong>1. Clima:</strong></p>
          <ul>
            <li>Templado (T_min &gt; -5°C): Aire-aire o aire-agua</li>
            <li>Frío (T_min -5 a -15°C): Aire-agua con apoyo o geotérmica</li>
            <li>Muy frío (T_min &lt; -15°C): Geotérmica preferible</li>
          </ul>

          <p><strong>2. Sistema de distribución:</strong></p>
          <ul>
            <li>Suelo radiante: Cualquier tipo (óptimo para COP)</li>
            <li>Radiadores baja temperatura: Aire-agua o geotérmica</li>
            <li>Radiadores alta temperatura: Geotérmica o híbrida</li>
            <li>Sin instalación previa: Aire-aire (splits)</li>
          </ul>

          <p><strong>3. Presupuesto:</strong></p>
          <ul>
            <li>Bajo (≤5,000€): Aire-aire</li>
            <li>Medio (5,000-15,000€): Aire-agua</li>
            <li>Alto (&gt;15,000€): Geotérmica</li>
          </ul>

          <p><strong>4. Espacio disponible:</strong></p>
          <ul>
            <li>Sin terreno: Aire-aire o aire-agua</li>
            <li>Con jardín: Geotérmica horizontal</li>
            <li>Terreno limitado: Geotérmica vertical</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Consideraciones Prácticas">
        <Concept title="Instalación">
          <p><strong>Ubicación unidad exterior:</strong></p>
          <ul>
            <li>Espacio libre para circulación de aire</li>
            <li>Protegida de vientos dominantes</li>
            <li>Alejada de dormitorios (ruido)</li>
            <li>Base sólida y nivelada</li>
          </ul>

          <p><strong>Aislamiento de tuberías:</strong></p>
          <ul>
            <li>Evita pérdidas de calor</li>
            <li>Previene condensación</li>
            <li>Mejora eficiencia 5-10%</li>
          </ul>
        </Concept>

        <Concept title="Mantenimiento">
          <p><strong>Anual:</strong></p>
          <ul>
            <li>Limpieza de filtros e intercambiadores</li>
            <li>Verificación de presión de refrigerante</li>
            <li>Revisión de conexiones eléctricas</li>
            <li>Comprobación de drenajes</li>
          </ul>

          <p><strong>Cada 2-3 años:</strong></p>
          <ul>
            <li>Revisión completa por técnico</li>
            <li>Análisis de rendimiento</li>
            <li>Recarga de refrigerante si necesario</li>
          </ul>
        </Concept>

        <Concept title="Combinación con Otras Tecnologías">
          <p><strong>Sistema híbrido (bomba + caldera):</strong></p>
          <ul>
            <li>Bomba térmica hasta -5°C</li>
            <li>Caldera de gas en días muy fríos</li>
            <li>Optimiza costos y eficiencia</li>
          </ul>

          <p><strong>Con energía solar:</strong></p>
          <ul>
            <li>Paneles fotovoltaicos alimentan bomba</li>
            <li>Autoconsumo reduce costos</li>
            <li>Sistema casi cero emisiones</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};

export default BombasTermicasDomesticasTheory;

// Sección extra: Problemas de dimensionamiento, casos reales e integración con energías renovables
export const ExtraBombasTermicas = () => (
  <>
    <TheorySection title="Problemas de Dimensionamiento y Casos Reales">
      <Concept title="Ejemplo 1: Dimensionamiento básico">
        <p>
          <strong>Enunciado:</strong> Una vivienda de 120 m², aislamiento medio, requiere calefacción. ¿Qué potencia de bomba térmica se recomienda?
        </p>
        <p>
          <strong>Solución:</strong> Para aislamiento medio se recomienda 70 W/m².<br/>
          Potencia necesaria = 120 × 70 = <strong>8,400 W = 8.4 kW</strong>.
        </p>
      </Concept>
      <Concept title="Ejemplo 2: COP bajo en clima frío">
        <p>
          <strong>Enunciado:</strong> En una ola de frío, el COP de una bomba baja de 4 a 2.5. Si la demanda de calor es 10 kW, ¿cuánto sube el consumo eléctrico?
        </p>
        <p>
          <strong>Solución:</strong> 
          <ul>
            <li>COP habitual: W = 10 / 4 = 2.5 kW</li>
            <li>COP frío: W = 10 / 2.5 = 4 kW</li>
            <li>Diferencia: 4 - 2.5 = <strong>1.5 kW más consumo</strong></li>
          </ul>
        </p>
      </Concept>
      <Concept title="Ejemplo 3: Integración con energía solar">
        <p>
          <strong>Enunciado:</strong> Una bomba térmica (COP=3, consumo 4,000 kWh/año) se alimenta con paneles solares que cubren el 60% del consumo. ¿Cuánta energía de la red se necesita?
        </p>
        <p>
          <strong>Solución:</strong> 
          <ul>
            <li>Energía solar: 60% de 4,000 = 2,400 kWh</li>
            <li>Energía de red: 4,000 - 2,400 = <strong>1,600 kWh</strong></li>
          </ul>
        </p>
      </Concept>
      <Concept title="Ejemplo 4: Amortización con autoconsumo solar">
        <p>
          <strong>Enunciado:</strong> Si el ahorro anual con bomba térmica es 1,200€ y el autoconsumo solar lo aumenta a 1,500€/año, ¿en cuántos años se amortiza una inversión de 10,000€?
        </p>
        <p>
          <strong>Solución:</strong> Años = 10,000 / 1,500 = <strong>6.7 años</strong>.
        </p>
      </Concept>
    </TheorySection>
  </>
);
