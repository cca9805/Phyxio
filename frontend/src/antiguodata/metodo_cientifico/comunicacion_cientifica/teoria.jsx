import { TheorySection, Concept, Important } from '../../../components/TheoryV2';

export const metadata = {
  titulo: "Comunicación Científica",
  descripcion: "Informes de laboratorio, presentaciones y comunicación de resultados científicos",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const ComunicacionCientificaTheory = () => {
  return (
    <>
      <TheorySection title="Importancia de la Comunicación Científica">
        <p>
          La ciencia no está completa hasta que sus resultados se comunican. Un experimento brillante sin una comunicación clara tiene poco valor para la comunidad científica.
        </p>

        <Important>
          <p>
            "La ciencia no es lo que sabes, sino lo que puedes comunicar". Los descubrimientos solo avanzan el conocimiento humano cuando se comparten efectivamente.
          </p>
        </Important>

        <Concept title="Objetivos de la Comunicación Científica">
          <ul>
            <li>Reproducibilidad: Otros deben poder repetir tu experimento</li>
            <li>Transparencia: Mostrar métodos, datos y limitaciones</li>
            <li>Validación: Permitir revisión y crítica constructiva</li>
            <li>Difusión: Compartir conocimiento con la comunidad</li>
            <li>Registro: Documentar para referencia futura</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="El Informe de Laboratorio">
        <p>
          El informe de laboratorio es el formato estándar para documentar experimentos científicos.
        </p>

        <Concept title="Estructura Estándar">
          <p>
            Un informe típico tiene 6-7 secciones principales:
          </p>
          <ol>
            <li>Título</li>
            <li>Resumen (Abstract)</li>
            <li>Introducción</li>
            <li>Materiales y Métodos</li>
            <li>Resultados</li>
            <li>Discusión</li>
            <li>Conclusiones</li>
            <li>Referencias</li>
          </ol>
        </Concept>

        <Concept title="1. Título" variant="detailed">
          <div className="detailed-content">
            <p>Características:</p>
            <ul>
              <li>Breve pero descriptivo (10-15 palabras)</li>
              <li>Indica claramente el tema del experimento</li>
              <li>Menciona variables principales</li>
            </ul>

            <p>Ejemplos:</p>
            <ul>
              <li>✅ "Determinación de la aceleración gravitatoria mediante péndulo simple"</li>
              <li>✅ "Relación entre temperatura y presión en gases ideales"</li>
              <li>❌ "Experimento de física" (demasiado vago)</li>
              <li>❌ "Un estudio exhaustivo de las propiedades..." (demasiado largo)</li>
            </ul>

            <p>Información adicional:</p>
            <ul>
              <li>Nombres de los autores</li>
              <li>Fecha de realización</li>
              <li>Institución/curso</li>
            </ul>
          </div>
        </Concept>

        <Concept title="2. Resumen (Abstract)">
          <p>
            Síntesis del informe completo en un solo párrafo (100-250 palabras).
          </p>
          
          <p>Debe incluir:</p>
          <ul>
            <li>Objetivo del experimento (1 frase)</li>
            <li>Método usado brevemente (1-2 frases)</li>
            <li>Resultados principales (1-2 frases)</li>
            <li>Conclusión clave (1 frase)</li>
          </ul>

          <p>Ejemplo:</p>
          <p style={{ padding: '10px', borderLeft: '3px solid #3498db', fontStyle: 'italic' }}>
            <em>
              "Se determinó la aceleración gravitatoria local mediante la medición del período de oscilación de un péndulo simple. 
              Se variaron longitudes de cuerda entre 20 cm y 100 cm, midiendo 10 oscilaciones para cada longitud. 
              Los datos se analizaron mediante regresión lineal de T² vs L, obteniendo g = 9.78 ± 0.15 m/s². 
              Este valor difiere del teórico (9.81 m/s²) en un 0.3%, dentro del margen de error experimental, 
              confirmando la relación predicha por la teoría del péndulo simple."
            </em>
          </p>

          <p>Características:</p>
          <ul>
            <li>Se escribe al final (aunque aparece al principio)</li>
            <li>Sin referencias ni citas</li>
            <li>Tiempo pasado para describir lo hecho</li>
            <li>Autónomo (debe entenderse sin leer el resto)</li>
          </ul>
        </Concept>

        <Concept title="3. Introducción" variant="detailed">
          <div className="detailed-content">
            <p>Propósito: Contextualizar el experimento y establecer su importancia.</p>

            <p>Contenido:</p>
            <ul>
              <li>Marco teórico: Conceptos físicos relevantes (leyes, ecuaciones)</li>
              <li>Antecedentes: ¿Qué se sabe sobre el tema?</li>
              <li>Objetivo específico: ¿Qué queremos investigar?</li>
              <li>Hipótesis: Predicción basada en teoría</li>
            </ul>

            <p>Ejemplo (péndulo simple):</p>
            <p style={{ padding: '10px', borderLeft: '3px solid #3498db', fontSize: '0.95em', fontStyle: 'italic' }}>
              <em>
                "El péndulo simple es un sistema mecánico compuesto por una masa suspendida de un hilo inextensible. 
                Para oscilaciones pequeñas (θ {'<'} 15°), la teoría predice que el período de oscilación T está relacionado 
                con la longitud L mediante T = 2π√(L/g), donde g es la aceleración gravitatoria. Esta relación implica 
                que T² es proporcional a L. El objetivo de este experimento es verificar esta relación y determinar el 
                valor de g localmente. Se hipotetiza que los datos experimentales se ajustarán a una recta T² vs L con 
                pendiente m = 4π²/g, permitiendo calcular g con precisión del 5%."
              </em>
            </p>

            <p>Errores comunes:</p>
            <ul>
              <li>❌ Demasiado general ("La física estudia la naturaleza...")</li>
              <li>❌ Solo copiar teoría del libro de texto</li>
              <li>❌ No establecer objetivo claro</li>
              <li>❌ No conectar teoría con el experimento específico</li>
            </ul>
          </div>
        </Concept>

        <Concept title="4. Materiales y Métodos">
          <p>
            Descripción detallada de qué se usó y cómo se hizo.
          </p>

          <p>Materiales:</p>
          <ul>
            <li>Lista de instrumentos con especificaciones (marca, modelo, precisión)</li>
            <li>Materiales usados</li>
          </ul>
          <p><em>Ejemplo: "Cronómetro digital Casio HS-3V (precisión ±0.01 s), regla metálica graduada (precisión ±1 mm), 
          cuerda inextensible, masa cilíndrica de acero (50 g)."</em></p>

          <p>Procedimiento:</p>
          <ul>
            <li>Pasos secuenciales numerados</li>
            <li>Suficiente detalle para que otro pueda replicar</li>
            <li>Incluir condiciones controladas</li>
            <li>Mencionar repeticiones</li>
          </ul>

          <p>Ejemplo de procedimiento:</p>
          <ol style={{ padding: '15px 15px 15px 30px', borderLeft: '3px solid #3498db' }}>
            <li>Se fijó la cuerda al soporte universal con longitud L = 20 cm.</li>
            <li>Se ató la masa al extremo libre de la cuerda.</li>
            <li>Se desplazó la masa un ángulo pequeño (≈10°) y se soltó.</li>
            <li>Se midió el tiempo de 10 oscilaciones completas con el cronómetro.</li>
            <li>Se repitió el paso 4 tres veces para cada longitud.</li>
            <li>Se aumentó la longitud en incrementos de 20 cm hasta L = 100 cm.</li>
            <li>Se calculó el período dividiendo el tiempo entre 10.</li>
          </ol>

          <p>Tiempo verbal: Pasado impersonal ("se midió...") o voz activa ("medimos...").</p>
        </Concept>

        <Concept title="5. Resultados" variant="detailed">
          <div className="detailed-content">
            <p>Propósito: Presentar datos experimentales de forma clara y objetiva.</p>

            <p>Contenido:</p>
            <ul>
              <li>Datos crudos: Tablas con medidas originales</li>
              <li>Datos procesados: Promedios, cálculos derivados</li>
              <li>Gráficas: Visualización de relaciones</li>
              <li>Ecuaciones ajustadas: Líneas de mejor ajuste con parámetros</li>
              <li>Incertidumbres: Errores calculados</li>
            </ul>

            <p>Reglas importantes:</p>
            <ul>
              <li>Solo hechos, sin interpretación (eso va en Discusión)</li>
              <li>Cada tabla y gráfica debe estar numerada y titulada</li>
              <li>Referirse a las figuras en el texto: "Como se observa en la Figura 1..."</li>
              <li>Incluir unidades en todas las magnitudes</li>
            </ul>

            <p>Ejemplo de presentación:</p>
            <p>
              "La Tabla 1 muestra los períodos medidos para cada longitud. La Figura 1 presenta la gráfica de T² vs L, 
              donde se observa una relación lineal clara. El ajuste por mínimos cuadrados produce la ecuación:".
            </p>
            <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
              T² = (4.04 ± 0.08) L + (0.02 ± 0.05)
            </p>
            <p>
              con coeficiente de correlación r = 0.998.
            </p>

            <h4 style={{ marginTop: '16px' }}>Tabla 1. Períodos medidos y T² vs Longitud</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '8px', textAlign: 'center' }}>L (cm)</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>T (s)</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>T² (s²)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>20.0</td><td style={{ padding: '6px', textAlign: 'center' }}>0.90</td><td style={{ padding: '6px', textAlign: 'center' }}>0.81</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>40.0</td><td style={{ padding: '6px', textAlign: 'center' }}>1.27</td><td style={{ padding: '6px', textAlign: 'center' }}>1.61</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>60.0</td><td style={{ padding: '6px', textAlign: 'center' }}>1.56</td><td style={{ padding: '6px', textAlign: 'center' }}>2.43</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>80.0</td><td style={{ padding: '6px', textAlign: 'center' }}>1.80</td><td style={{ padding: '6px', textAlign: 'center' }}>3.24</td></tr>
                <tr><td style={{ padding: '6px', textAlign: 'center' }}>100.0</td><td style={{ padding: '6px', textAlign: 'center' }}>2.01</td><td style={{ padding: '6px', textAlign: 'center' }}>4.04</td></tr>
              </tbody>
            </table>

            <h4 style={{ marginTop: '16px' }}>Figura 1. Gráfica de T² vs L con ajuste lineal</h4>
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'center' }}>
              <svg viewBox="0 0 400 220" width="50%" height="110" role="img" aria-label="Gráfica de T² vs L" style={{ display: 'block' }}>
                <rect x="40" y="20" width="330" height="170" fill="#fafafa" stroke="#ccc" />
                {/* Ejes */}
                <line x1="40" y1="190" x2="370" y2="190" stroke="#333" />
                <line x1="40" y1="190" x2="40" y2="20" stroke="#333" />
                {/* Puntos */}
                <circle cx="70" cy="175" r="3" fill="#2c7be5" />
                <circle cx="120" cy="155" r="3" fill="#2c7be5" />
                <circle cx="170" cy="135" r="3" fill="#2c7be5" />
                <circle cx="220" cy="110" r="3" fill="#2c7be5" />
                <circle cx="270" cy="85" r="3" fill="#2c7be5" />
                {/* Recta de ajuste aproximada */}
                <line x1="60" y1="180" x2="300" y2="80" stroke="#e55353" strokeWidth="2" />
                {/* Etiquetas simples */}
                <text x="180" y="210" fontSize="12" fill="#2c7be5">L (cm)</text>
                <text x="-80" y="60" fontSize="12" fill="#2c7be5" transform="rotate(-90 5,35)">T² (s²)</text>
              </svg>
              <p style={{ textAlign: 'center', fontSize: '0.85em', marginTop: '8px' }}>
                Ajuste: T² = (4.04 ± 0.08) L + (0.02 ± 0.05); r = 0.998
              </p>
            </div>
          </div>
        </Concept>

        <Concept title="6. Discusión">
          <p>
            Aquí interpretas los resultados, comparas con teoría, identificas fuentes de error.
          </p>

          <p>Preguntas a responder:</p>
          <ul>
            <li>¿Los resultados confirman la hipótesis?</li>
            <li>¿Qué significa la pendiente/ordenada obtenida?</li>
            <li>¿Cómo se comparan con valores teóricos o de referencia?</li>
            <li>¿Qué errores afectaron el experimento?</li>
            <li>¿Cómo podrían mejorarse las medidas?</li>
            <li>¿Hay limitaciones en el método?</li>
          </ul>

          <p>Análisis de errores:</p>
          <ul>
            <li>Identificar errores sistemáticos (calibración, condiciones)</li>
            <li>Identificar errores aleatorios (tiempo de reacción, vibraciones)</li>
            <li>Estimar impacto de cada fuente de error</li>
            <li>Proponer mejoras específicas</li>
          </ul>

          <p>Ejemplo:</p>
          <p style={{ padding: '10px', borderLeft: '3px solid #3498db', fontSize: '0.95em', fontStyle: 'italic' }}>
            <em>
              "El valor obtenido de g = 9.78 ± 0.15 m/s² difiere del valor aceptado (9.81 m/s²) en solo 0.3%, 
              lo cual está dentro del margen de incertidumbre experimental. Esto valida la teoría del péndulo simple 
              para oscilaciones pequeñas. La principal fuente de error fue la dificultad para mantener un ángulo inicial 
              constante, introduciendo variabilidad en las medidas del período. El tiempo de reacción humano al usar el 
              cronómetro (±0.2 s) también contribuyó al error aleatorio. Mejoras futuras incluirían usar un sensor fotoeléctrico 
              para medir el período automáticamente y un transportador para controlar el ángulo inicial con precisión."
            </em>
          </p>
        </Concept>

        <Concept title="7. Conclusiones">
          <p>
            Síntesis breve de los hallazgos principales (3-5 frases).
          </p>

          <p>Debe incluir:</p>
          <ul>
            <li>Respuesta directa al objetivo del experimento</li>
            <li>Resultado numérico principal con incertidumbre</li>
            <li>Validación o rechazo de la hipótesis</li>
            <li>Limitación principal identificada (opcional)</li>
          </ul>

          <p>Ejemplo:</p>
          <p style={{ padding: '10px', borderLeft: '3px solid #3498db', fontStyle: 'italic' }}>
            <em>
              "Se verificó experimentalmente que el período del péndulo simple es proporcional a la raíz cuadrada de su longitud, 
              conforme a la teoría. El valor de g obtenido (9.78 ± 0.15 m/s²) concuerda con el valor estándar dentro de un 0.3%. 
              El método es adecuado para determinar g con precisión aceptable en un laboratorio escolar."
            </em>
          </p>
        </Concept>

        <Concept title="8. Referencias">
          <p>
            Lista de fuentes consultadas (libros, artículos, páginas web confiables).
          </p>

          <p>Formato típico (Harvard):</p>
          <ul style={{ fontSize: '0.9em' }}>
            <li>Libro: Apellido, Inicial. (Año). <em>Título</em>. Editorial.</li>
            <li>Artículo: Apellido, Inicial. (Año). Título del artículo. <em>Nombre de la Revista</em>, volumen(número), páginas.</li>
            <li>Web: Apellido, Inicial. (Año). Título. Recuperado de URL (fecha de acceso)</li>
          </ul>

          <p>Ejemplo:</p>
          <p style={{ fontSize: '0.9em', paddingLeft: '20px' }}>
            Tipler, P. A. & Mosca, G. (2010). <em>Física para la ciencia y la tecnología</em> (6ª ed.). Reverté.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Presentaciones Orales">
        <p>
          Las presentaciones orales son otra forma común de comunicar resultados científicos.
        </p>

        <Concept title="Estructura de una Presentación">
          <ol>
            <li>Título y autores (diapositiva 1)</li>
            <li>Introducción: Contexto y objetivo (1-2 diapositivas)</li>
            <li>Métodos: Esquema del experimento (1 diapositiva)</li>
            <li>Resultados: Gráficas y tablas principales (2-3 diapositivas)</li>
            <li>Discusión y Conclusiones: Interpretación (1-2 diapositivas)</li>
          </ol>

          <p>Total recomendado: 6-10 diapositivas para una presentación de 5-10 minutos.</p>
        </Concept>

        <Concept title="Diseño de Diapositivas" variant="detailed">
          <div className="detailed-content">
            <p>Principios:</p>
            <ul>
              <li>Simplicidad: Una idea por diapositiva</li>
              <li>Legibilidad: Fuente grande (≥24 pt para texto, ≥32 pt para títulos)</li>
              <li>Visual: Más imágenes/gráficas, menos texto</li>
              <li>Contraste: Fondo claro con texto oscuro (o viceversa)</li>
              <li>Consistencia: Mismo estilo en todas las diapositivas</li>
            </ul>

            <p>Regla 6x6:</p>
            <p>Máximo 6 líneas por diapositiva, máximo 6 palabras por línea (aproximado).</p>

            <p>Errores comunes:</p>
            <ul>
              <li>❌ Párrafos largos (el público no los leerá)</li>
              <li>❌ Animaciones excesivas (distraen)</li>
              <li>❌ Colores chillones o combinaciones difíciles de leer</li>
              <li>❌ Gráficas sin etiquetas o demasiado pequeñas</li>
              <li>❌ Leer exactamente lo que dice la diapositiva</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Técnicas de Presentación">
          <ul>
            <li>Contacto visual: Mira a la audiencia, no a la pantalla</li>
            <li>Volumen y ritmo: Habla claro y a velocidad moderada</li>
            <li>Postura: Mantente erguido y abierto</li>
            <li>Gestos: Usa las manos para enfatizar (sin exagerar)</li>
            <li>Práctica: Ensaya varias veces, cronométrate</li>
            <li>Preguntas: Anticipa preguntas posibles y prepara respuestas</li>
          </ul>
        </Concept>

        <Concept title="Manejo de Nervios">
          <ul>
            <li>La preparación reduce la ansiedad</li>
            <li>Respira profundamente antes de empezar</li>
            <li>Recuerda: la audiencia quiere que tengas éxito</li>
            <li>Si te equivocas, continúa sin disculparte excesivamente</li>
            <li>Usa notas discretas (tarjetas pequeñas) si es necesario</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Pósters Científicos">
        <p>
          Los pósters son presentaciones visuales autónomas, comunes en congresos y ferias científicas.
        </p>

        <Concept title="Estructura Típica">
          <ul>
            <li>Título grande y visible (parte superior, ~2-3% del espacio)</li>
            <li>Autores e institución (bajo el título)</li>
            <li>Introducción (izquierda, arriba)</li>
            <li>Métodos (izquierda, abajo)</li>
            <li>Resultados (centro y derecha, dominante: ~50% del espacio)</li>
            <li>Conclusiones (abajo, derecha)</li>
            <li>Referencias (esquina inferior)</li>
          </ul>
        </Concept>

        <Concept title="Diseño Efectivo" variant="detailed">
          <div className="detailed-content">
            <p>Principios clave:</p>
            <ul>
              <li>Flujo visual: Lectura natural (izquierda a derecha, arriba a abajo)</li>
              <li>Jerarquía: Títulos grandes, subtítulos medianos, texto pequeño</li>
              <li>Espacios en blanco: No abarrotar, dejar márgenes</li>
              <li>Gráficas grandes: Deben verse desde 1-2 metros de distancia</li>
              <li>Color estratégico: Para destacar, no decorar</li>
            </ul>

            <p>Tamaños recomendados:</p>
            <ul>
              <li>Título: 72-96 pt</li>
              <li>Autores: 48-60 pt</li>
              <li>Encabezados de sección: 36-48 pt</li>
              <li>Texto principal: 24-28 pt</li>
            </ul>

            <p>Regla de oro:</p>
            <p>
              Un observador debe captar la idea principal del póster en 30 segundos. 
              Si le interesa, dedicará 2-3 minutos a leer detalles.
            </p>
          </div>
        </Concept>

        <Concept title="Presentación del Póster">
          <ul>
            <li>Estate cerca para responder preguntas</li>
            <li>Prepara un "elevator pitch" (resumen de 1 minuto)</li>
            <li>Ten copias de contacto o versiones reducidas para llevar</li>
            <li>Sé entusiasta: es tu trabajo, muéstralo con orgullo</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ética en la Comunicación Científica">
        <Important>
          <p>
            La integridad científica es fundamental. La honestidad no es opcional, es el fundamento de la ciencia.
          </p>
        </Important>

        <Concept title="Principios Éticos">
          <ul>
            <li>Honestidad: Reporta datos reales, no inventes ni modifiques resultados</li>
            <li>Transparencia: Comparte métodos completos, menciona limitaciones</li>
            <li>Atribución: Cita fuentes, reconoce contribuciones de otros</li>
            <li>Objetividad: Presenta datos sin sesgos, incluye resultados negativos</li>
            <li>Responsabilidad: Asume las consecuencias de tus afirmaciones</li>
          </ul>
        </Concept>

        <Concept title="Plagio y Cómo Evitarlo">
          <p>
            Plagio es usar ideas, datos o texto de otros sin dar crédito apropiado.
          </p>

          <p>Formas de plagio:</p>
          <ul>
            <li>Copiar texto palabra por palabra sin comillas ni cita</li>
            <li>Parafrasear sin citar la fuente original</li>
            <li>Usar datos o figuras de otros sin permiso/cita</li>
            <li>Presentar trabajo de otro como propio</li>
          </ul>

          <p>Cómo evitarlo:</p>
          <ul>
            <li>Parafrasea con tus propias palabras + cita la fuente</li>
            <li>Usa comillas para citas textuales + cita la fuente</li>
            <li>Cita todas las fuentes consultadas, incluso si no citaste directamente</li>
            <li>Cuando tengas dudas, cita</li>
          </ul>
        </Concept>

        <Concept title="Fabricación y Falsificación">
          <ul>
            <li>Fabricación: Inventar datos que no existen</li>
            <li>Falsificación: Manipular datos para que se ajusten a hipótesis</li>
            <li>Consecuencias: Pérdida de credibilidad, sanciones académicas, daño a la ciencia</li>
          </ul>

          <p>Nunca:</p>
          <ul>
            <li>Elimines datos "inconvenientes" sin justificación</li>
            <li>Ajustes medidas para que "se vean mejor"</li>
            <li>Inventes resultados si el experimento falló</li>
          </ul>

          <p>
            Si el experimento no funcionó, reporta por qué y qué aprendiste del fracaso. 
            Los resultados negativos también contribuyen al conocimiento.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Consejos Finales para Comunicación Efectiva">
        <Concept title="Escritura Científica">
          <ul>
            <li>Claridad sobre elegancia: Frases cortas y directas</li>
            <li>Voz activa cuando sea posible: "Medimos..." es más claro que "fue medido..."</li>
            <li>Evita jerga innecesaria: Escribe para tu audiencia</li>
            <li>Define acrónimos: La primera vez que aparecen</li>
            <li>Revisa ortografía y gramática: Errores distraen del contenido</li>
          </ul>
        </Concept>

        <Concept title="Visualización de Datos">
          <ul>
            <li>Una buena gráfica vale más que una tabla larga</li>
            <li>Usa colores con propósito, no decorativamente</li>
            <li>Considera daltonismo (evita solo verde-rojo)</li>
            <li>Etiqueta todo: ejes, unidades, leyendas</li>
            <li>Simplifica: elimina elementos innecesarios</li>
          </ul>
        </Concept>

        <Concept title="Revisión y Retroalimentación">
          <ul>
            <li>Pide a otros que lean tu informe antes de entregarlo</li>
            <li>Lee en voz alta para detectar frases confusas</li>
            <li>Deja pasar un día, luego relee con ojos frescos</li>
            <li>Acepta críticas constructivamente: mejoran tu trabajo</li>
            <li>Verifica que todas las figuras/tablas estén referenciadas en el texto</li>
          </ul>
        </Concept>

        <Concept title="Audiencia">
          <ul>
            <li>Identifica tu audiencia: ¿Expertos, compañeros, público general?</li>
            <li>Ajusta el nivel: Menos detalles técnicos para audiencia general</li>
            <li>Anticipa preguntas: ¿Qué querrán saber?</li>
            <li>Propósito: ¿Informar, persuadir, enseñar?</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Recursos y Herramientas">
        <Concept title="Software Útil">
          <ul>
            <li>Escritura: Microsoft Word, Google Docs, LaTeX (para documentos técnicos avanzados)</li>
            <li>Análisis de datos: Excel, Google Sheets, Python (Matplotlib, Pandas), Origin</li>
            <li>Presentaciones: PowerPoint, Google Slides, Prezi</li>
            <li>Pósters: PowerPoint (plantillas de póster), Canva, Adobe Illustrator</li>
            <li>Referencias: Zotero, Mendeley (gestores bibliográficos)</li>
            <li>Diagramas: Draw.io, Inkscape</li>
          </ul>
        </Concept>

        <Concept title="Plantillas">
          <p>
            Muchas revistas científicas y universidades ofrecen plantillas gratuitas para informes, presentaciones y pósters. 
            Úsalas como punto de partida.
          </p>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            La comunicación científica es fundamental en investigación:
          </p>
          <ul>
            <li>Publicaciones científicas: Artículos en revistas especializadas</li>
            <li>Conferencias: Presentaciones orales en congresos</li>
            <li>Colaboración: Compartir resultados con otros investigadores</li>
            <li>Revisión por pares: Validación de resultados por expertos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Educación</h3>
          <p>
            La comunicación científica se aplica en educación:
          </p>
          <ul>
            <li>Informes de laboratorio: Estudiantes documentan experimentos</li>
            <li>Presentaciones escolares: Exponer proyectos científicos</li>
            <li>Ferias de ciencias: Pósters y presentaciones</li>
            <li>Enseñanza: Profesores comunican conceptos científicos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Medicina y Salud</h3>
          <p>
            La comunicación es crucial en medicina:
          </p>
          <ul>
            <li>Informes médicos: Documentar diagnósticos y tratamientos</li>
            <li>Investigación clínica: Publicar resultados de ensayos</li>
            <li>Educación médica: Enseñar a estudiantes de medicina</li>
            <li>Divulgación: Informar al público sobre avances médicos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Industria y Tecnología</h3>
          <p>
            Las empresas usan comunicación científica para:
          </p>
          <ul>
            <li>Documentación técnica: Manuales y especificaciones</li>
            <li>Presentaciones: Exponer proyectos a clientes o inversores</li>
            <li>Patentes: Documentar invenciones</li>
            <li>Control de calidad: Reportar resultados de pruebas</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Divulgación Científica</h3>
          <p>
            Comunicar ciencia al público general:
          </p>
          <ul>
            <li>Artículos de divulgación: Hacer ciencia accesible</li>
            <li>Documentales: Visualizar conceptos científicos</li>
            <li>Museos de ciencia: Exposiciones interactivas</li>
            <li>Redes sociales: Compartir descubrimientos</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: La evolución de la comunicación científica
        </h2>

        <div className="theory-subsection">
          <h3>Antigüedad: Comunicación Oral y Escrita</h3>
          <p>
            En la antigüedad, el conocimiento científico se transmitía principalmente de forma oral (maestro a discípulo) o mediante 
            manuscritos. Los filósofos griegos escribieron tratados, pero la comunicación era lenta y limitada a pocos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XVII: Nacimiento de las Revistas Científicas</h3>
          <p>
            En 1665 se publicaron las primeras revistas científicas: "Journal des Sçavans" en Francia y "Philosophical Transactions" 
            en Inglaterra. Estas revistas permitieron compartir descubrimientos rápidamente con la comunidad científica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XVII: Nacimiento de las Revistas Científicas</h3>
          <p>
            En 1665 se publicaron las primeras revistas científicas: "Journal des Sçavans" en Francia y "Philosophical Transactions" 
            en Inglaterra. Estas revistas permitieron compartir descubrimientos rápidamente con la comunidad científica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XIX: Estándares de Publicación</h3>
          <p>
            En el siglo XIX se establecieron estándares para publicaciones científicas:
          </p>
          <ul>
            <li>Estructura estándar: Introducción, Métodos, Resultados, Discusión</li>
            <li>Revisión por pares: Validación por expertos antes de publicar</li>
            <li>Citaciones: Reconocimiento de trabajos previos</li>
            <li>Especialización: Revistas específicas por disciplina</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Comunicación Masiva</h3>
          <p>
            El siglo XX trajo nuevas formas de comunicación:
          </p>
          <ul>
            <li>Conferencias internacionales: Reuniones de científicos</li>
            <li>Medios de comunicación: Divulgación al público general</li>
            <li>Fotografía y cine: Visualización de fenómenos científicos</li>
            <li>Televisión: Documentales científicos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Era Digital: Internet y Acceso Abierto</h3>
          <p>
            La era digital revolucionó la comunicación científica:
          </p>
          <ul>
            <li>Internet: Acceso instantáneo a publicaciones</li>
            <li>Acceso abierto: Publicaciones gratuitas en línea</li>
            <li>Preprints: Compartir resultados antes de revisión</li>
            <li>Redes sociales: Comunicación rápida entre científicos</li>
            <li>Multimedia: Videos, animaciones, visualizaciones interactivas</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Primera Gráfica de Línea de Tiempo</h3>
          <p>
            El economista escocés William Playfair (1759-1823) creó las primeras gráficas de líneas de tiempo y gráficas de barras 
            modernas. Sus gráficas ayudaron a visualizar datos económicos de forma que las tablas no podían.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Descubrimiento de la Correlación</h3>
          <p>
            Francis Galton descubrió la correlación mientras estudiaba la herencia. Notó que padres altos tendían a tener hijos altos, 
            pero no tan altos (regresión hacia la media). Este descubrimiento fue fundamental para el desarrollo de la estadística.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Gráficas que Salvaron Vidas</h3>
          <p>
            En 1854, John Snow usó un mapa (una forma de visualización de datos) para identificar que un brote de cólera en Londres 
            estaba relacionado con una bomba de agua específica. Esta visualización ayudó a establecer la conexión entre agua 
            contaminada y enfermedad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Poder de las Gráficas</h3>
          <p>
            Una buena gráfica puede revelar patrones que no son evidentes en tablas. Por ejemplo, la gráfica de temperatura global 
            vs tiempo muestra claramente el calentamiento global, mientras que una tabla de números sería difícil de interpretar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Correlación vs Causalidad</h3>
          <p>
            Un ejemplo clásico: existe una correlación fuerte entre el número de ahogamientos y el consumo de helados. ¿Los helados 
            causan ahogamientos? No, ambos están correlacionados con el verano. Este ejemplo ilustra que correlación no implica 
            causalidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Análisis de Datos en la Era Digital</h3>
          <p>
            Hoy, generamos más datos en dos días que en toda la historia hasta 2003. El análisis de estos datos requiere métodos 
            sofisticados, pero los principios fundamentales (organización, visualización, identificación de patrones) siguen siendo 
            los mismos.
          </p>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          La ciencia no está completa hasta que sus resultados se comunican. Un experimento brillante sin una comunicación clara tiene 
          poco valor para la comunidad científica. Los objetivos de la comunicación científica son: reproducibilidad (otros deben poder 
          repetir el experimento), transparencia (mostrar métodos y limitaciones), validación (permitir revisión), difusión (compartir 
          conocimiento) y registro (documentar para referencia futura).
        </p>
        <p>
          El informe de laboratorio es el formato estándar para documentar experimentos. Tiene estructura estándar: título, resumen, 
          introducción, materiales y métodos, resultados, discusión, conclusiones y referencias. Cada sección tiene propósitos específicos 
          y debe seguir convenciones establecidas.
        </p>
        <p>
          Las presentaciones orales y pósters son otras formas comunes de comunicar resultados. Requieren diseño efectivo, técnicas de 
          presentación y manejo de nervios. La ética en comunicación científica es fundamental: honestidad, transparencia, atribución 
          adecuada y evitar plagio, fabricación y falsificación.
        </p>
        <p>
          La comunicación científica se desarrolló desde la comunicación oral y manuscritos en la antigüedad hasta las primeras revistas 
          científicas en el siglo XVII, estándares de publicación en el siglo XIX, y la era digital con internet y acceso abierto. La 
          comunicación científica es fundamental en investigación, educación, medicina, industria y divulgación. Una comunicación efectiva 
          requiere claridad, precisión, ética y adaptación a la audiencia.
        </p>
      </div>
    </>
  );
};

export default ComunicacionCientificaTheory;
