import { TheorySection, Concept, Important, Example } from '../../../components/TheoryV2';

export const metadata = {
  titulo: "Hipótesis y Experimentación",
  descripcion: "Cómo formular hipótesis y diseñar experimentos científicos",
  isTheoryOnly: true,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const HipotesisExperimentacionTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es una Hipótesis?">
        <p>
          Una hipótesis es una explicación provisional de un fenómeno observado, basada en conocimientos previos y que puede ser 
          sometida a prueba mediante experimentos.
        </p>
        
        <Concept title="Características de una Buena Hipótesis">
          <ul>
            <li>Comprobable: Debe poder verificarse mediante experimentos</li>
            <li>Falsable: Debe poder ser refutada si es incorrecta</li>
            <li>Específica: Debe ser clara y precisa</li>
            <li>Basada en conocimientos: No debe ser una suposición al azar</li>
          </ul>
        </Concept>

        <Important>
          <p>
            Una hipótesis NO es una simple pregunta ni una afirmación sin fundamento. Es una predicción educada que relaciona causa y efecto.
          </p>
        </Important>
      </TheorySection>

      <TheorySection title="Cómo Formular una Hipótesis">
        <Concept title="Estructura Básica">
          <p>
            Una hipótesis típicamente sigue el formato:
          </p>
          <div className="formula-display">
            "Si [cambio en variable independiente], entonces [efecto en variable dependiente]"
          </div>
        </Concept>

        <Concept title="Ejemplos de Hipótesis" variant="detailed">
          <div className="detailed-content">
            <p>Ejemplo 1 - Caída Libre:</p>
            <ul>
              <li>Observación: Los objetos caen cuando se sueltan</li>
              <li>Pregunta: ¿La masa afecta la velocidad de caída?</li>
              <li>Hipótesis: "Si aumento la masa de un objeto, entonces el tiempo de caída NO cambiará" (en ausencia de resistencia del aire)</li>
            </ul>

            <p>Ejemplo 2 - Péndulo:</p>
            <ul>
              <li>Observación: Un péndulo oscila de lado a lado</li>
              <li>Pregunta: ¿Qué factores afectan el período de oscilación?</li>
              <li>Hipótesis: "Si aumento la longitud del péndulo, entonces el período de oscilación aumentará"</li>
            </ul>

            <p>Ejemplo 3 - Calor:</p>
            <ul>
              <li>Observación: Los metales se sienten más fríos que la madera</li>
              <li>Pregunta: ¿Los metales están realmente más fríos?</li>
              <li>Hipótesis: "Si mido la temperatura de metal y madera en la misma habitación, entonces tendrán la misma temperatura"</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Diseño de Experimentos">
        <p>
          Un experimento bien diseñado es fundamental para comprobar una hipótesis de manera fiable.
        </p>

        <Concept title="Elementos de un Experimento">
          <ul>
            <li><strong>Variable independiente:</strong> Lo que CAMBIAS</li>
            <li><strong>Variable dependiente:</strong> Lo que MIDES</li>
            <li><strong>Variables controladas:</strong> Lo que MANTIENES CONSTANTE</li>
            <li><strong>Grupo de control:</strong> Condición de referencia sin cambios</li>
            <li><strong>Grupo experimental:</strong> Condición con el cambio aplicado</li>
          </ul>
        </Concept>

        <Concept title="Ejemplo de Diseño Experimental" variant="detailed">
          <div className="detailed-content">
            <p><strong>Pregunta:</strong> ¿Cómo afecta el ángulo de lanzamiento al alcance de un proyectil?</p>
            
            <p><strong>Hipótesis:</strong> "Si lanzo un proyectil a 45°, entonces alcanzará la máxima distancia horizontal"</p>
            
            <p><strong>Diseño del experimento:</strong></p>
            <ul>
              <li><strong>Variable independiente:</strong> Ángulo de lanzamiento (15°, 30°, 45°, 60°, 75°)</li>
              <li><strong>Variable dependiente:</strong> Distancia horizontal alcanzada</li>
              <li><strong>Variables controladas:</strong>
                <ul>
                  <li>Velocidad inicial (misma fuerza de lanzamiento)</li>
                  <li>Altura inicial de lanzamiento</li>
                  <li>Masa del proyectil</li>
                  <li>Condiciones ambientales (viento, temperatura)</li>
                </ul>
              </li>
              <li><strong>Mediciones:</strong> Medir la distancia horizontal 5 veces para cada ángulo</li>
              <li><strong>Análisis:</strong> Calcular la media de cada conjunto de medidas y graficar</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Control Experimental">
        <Important>
          <p>
            El control experimental es CRÍTICO. Solo debemos cambiar UNA variable a la vez para saber qué causa el efecto observado.
          </p>
        </Important>

        <Concept title="¿Por qué es Importante el Control?">
          <p>
            Si cambiamos múltiples variables simultáneamente, no podremos saber cuál de ellas causó el efecto observado.
          </p>
          
          <p><strong>Ejemplo de experimento MAL controlado:</strong></p>
          <p>
            Queremos ver si la temperatura afecta la velocidad de disolución del azúcar. Usamos agua a diferentes temperaturas, pero también usamos diferentes cantidades de azúcar y agitamos unos vasos pero otros no.
          </p>
          <p>❌ <strong>Problema:</strong> Si observamos diferencias, ¿son por la temperatura, la cantidad de azúcar o la agitación?</p>
          
          <p><strong>Experimento BIEN controlado:</strong></p>
          <ul>
            <li>Cambiamos SOLO la temperatura del agua</li>
            <li>Mantenemos constante: cantidad de azúcar, volumen de agua, velocidad de agitación, tipo de recipiente</li>
          </ul>
          <p>✅ <strong>Ahora</strong> podemos estar seguros de que cualquier diferencia se debe a la temperatura.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Reproducibilidad">
        <p>
          Un experimento científico debe ser <strong>reproducible</strong>: otros científicos deben poder repetirlo y obtener los mismos resultados.
        </p>

        <Concept title="Cómo Asegurar la Reproducibilidad">
          <ul>
            <li><strong>Documentar todo:</strong> Materiales, procedimiento, condiciones</li>
            <li><strong>Ser preciso:</strong> No decir "un poco de agua", decir "50 ml de agua"</li>
            <li><strong>Especificar condiciones:</strong> Temperatura, presión, humedad cuando sean relevantes</li>
            <li><strong>Repetir mediciones:</strong> Hacer múltiples medidas para verificar consistencia</li>
            <li><strong>Usar instrumentos calibrados:</strong> Asegurar que los instrumentos miden correctamente</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Interpretación de Resultados">
        <Concept title="Resultados que Apoyan la Hipótesis">
          <p>
            Si los resultados experimentales coinciden con lo predicho por la hipótesis, esta queda <strong>apoyada</strong> (no "demostrada").
          </p>
          <p>
            <strong>Importante:</strong> Un experimento no "demuestra" una hipótesis, solo la apoya. Se necesitan muchos experimentos repetidos para establecer confianza.
          </p>
        </Concept>

        <Concept title="Resultados que Refutan la Hipótesis">
          <p>
            Si los resultados contradicen la hipótesis, esta queda <strong>refutada</strong>. Esto NO es un fracaso, es parte del proceso científico.
          </p>
          <p>
            <strong>Siguiente paso:</strong> Formular una nueva hipótesis basada en lo aprendido y diseñar un nuevo experimento.
          </p>
        </Concept>

        <Concept title="Resultados Ambiguos">
          <p>
            A veces los resultados no son claros. Puede deberse a:
          </p>
          <ul>
            <li>Errores en las mediciones</li>
            <li>Variables no controladas</li>
            <li>Hipótesis mal formulada</li>
            <li>Diseño experimental inadecuado</li>
          </ul>
          <p>
            <strong>Solución:</strong> Revisar el diseño experimental y repetir con mejor control.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Ejemplos Históricos">
        <Concept title="Galileo y la Caída de los Cuerpos">
          <p>
            Aristóteles afirmaba que los objetos pesados caen más rápido que los ligeros. Galileo formuló la hipótesis contraria: todos los objetos caen con la misma aceleración (sin resistencia del aire).
          </p>
          <p>
            <strong>Experimento:</strong> Según la leyenda, soltó objetos de diferentes masas desde la Torre de Pisa. Todos llegaron al suelo al mismo tiempo, refutando a Aristóteles.
          </p>
          <p>
            <strong>Experimento más preciso:</strong> Usó planos inclinados para "diluir" la gravedad y poder medir los tiempos con precisión.
          </p>
        </Concept>

        <Concept title="Pasteur y la Generación Espontánea">
          <p>
            Se creía que los microorganismos surgían espontáneamente de la materia inerte. Pasteur hipotizó que venían del aire.
          </p>
          <p>
            <strong>Experimento:</strong> Usó matraces con cuellos curvos que permitían el paso de aire pero no de partículas. El caldo no se echó a perder, demostrando que los microorganismos no surgían espontáneamente.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Consejos Prácticos">
        <ul>
          <li><strong>Empieza simple:</strong> No intentes resolver preguntas muy complejas al principio</li>
          <li><strong>Sé específico:</strong> "El agua caliente se evapora más rápido" es mejor que "El calor afecta al agua"</li>
          <li><strong>Usa el formato Si...entonces:</strong> Te ayuda a estructurar tu pensamiento</li>
          <li><strong>Piensa en el control:</strong> Antes de hacer el experimento, lista todas las variables y decide cuáles controlarás</li>
          <li><strong>Planifica las mediciones:</strong> ¿Qué vas a medir? ¿Con qué? ¿Cuántas veces?</li>
          <li><strong>Documenta todo:</strong> Incluso los "errores" pueden enseñarte algo importante</li>
        </ul>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>Investigación Científica</h3>
          <p>
            La formulación de hipótesis y experimentación son la base de toda investigación:
          </p>
          <ul>
            <li>Investigación médica: Desarrollo de medicamentos mediante ensayos clínicos controlados</li>
            <li>Investigación farmacéutica: Prueba de nuevos tratamientos con grupos control y experimental</li>
            <li>Investigación agrícola: Mejora de cultivos mediante experimentos controlados</li>
            <li>Investigación tecnológica: Desarrollo de nuevos materiales y dispositivos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Control de Calidad Industrial</h3>
          <p>
            Las empresas usan el método científico para:
          </p>
          <ul>
            <li>Probar la calidad de productos mediante experimentos controlados</li>
            <li>Optimizar procesos de producción variando una variable a la vez</li>
            <li>Desarrollar nuevos productos siguiendo un proceso sistemático</li>
            <li>Resolver problemas de producción mediante hipótesis y pruebas</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Educación y Aprendizaje</h3>
          <p>
            El método científico se aplica en educación:
          </p>
          <ul>
            <li>Experimentos escolares para aprender conceptos científicos</li>
            <li>Feria de ciencias: Estudiantes formulan hipótesis y las prueban</li>
            <li>Desarrollo de pensamiento crítico y analítico</li>
            <li>Enseñanza de resolución de problemas sistemáticos</li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Resolución de Problemas Cotidianos</h3>
          <p>
            Aplicamos el método científico inconscientemente:
          </p>
          <ul>
            <li>Observación: "Mi coche no arranca"</li>
            <li>Hipótesis: "Puede ser la batería"</li>
            <li>Experimento: "Pruebo las luces"</li>
            <li>Análisis: "Las luces funcionan, no es la batería"</li>
            <li>Nueva hipótesis: "Puede ser el motor de arranque"</li>
            <li>Y así sucesivamente...</li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de la experimentación científica
        </h2>

        <div className="theory-subsection">
          <h3>Antigüedad: Observación sin Experimentación</h3>
          <p>
            Los filósofos griegos como Aristóteles (384-322 a.C.) realizaron observaciones sistemáticas pero raramente experimentaron. 
            Sus conclusiones a veces eran incorrectas porque no las verificaron experimentalmente. Por ejemplo, afirmó que los objetos 
            pesados caen más rápido que los ligeros, algo que Galileo refutaría 2000 años después.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Galileo Galilei: El Padre de la Experimentación (1564-1642)</h3>
          <p>
            Galileo revolucionó la ciencia al combinar observación cuidadosa con experimentación controlada. Sus experimentos con 
            planos inclinados para estudiar la caída de objetos fueron fundamentales. Diluyó la gravedad para poder medir tiempos 
            con mayor precisión, mostrando que la distancia es proporcional al cuadrado del tiempo.
          </p>
          <p>
            Galileo formuló hipótesis comprobables y las verificó mediante experimentos reproducibles, estableciendo el método 
            experimental moderno.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Francis Bacon: Método Inductivo (1561-1626)</h3>
          <p>
            Bacon propuso el método inductivo en "Novum Organum" (1620): partir de observaciones específicas para llegar a conclusiones 
            generales. Describió un método sistemático de investigación basado en experimentación controlada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Louis Pasteur: Experimentos Controlados (1822-1895)</h3>
          <p>
            Pasteur demostró la importancia del control experimental en su refutación de la generación espontánea. Usó matraces con 
            cuellos curvos que permitían el paso de aire pero no de partículas, mostrando que los microorganismos no surgían 
            espontáneamente. Este experimento es un ejemplo clásico de diseño experimental controlado.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Siglo XX: Formalización del Método Experimental</h3>
          <p>
            En el siglo XX, el método experimental se formalizó con:
          </p>
          <ul>
            <li>Estadística aplicada a experimentos (Ronald Fisher)</li>
            <li>Diseño de experimentos con grupos control y experimental</li>
            <li>Métodos de doble ciego en ensayos clínicos</li>
            <li>Replicación sistemática de experimentos</li>
          </ul>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>La Torre de Pisa y Galileo</h3>
          <p>
            Aunque la historia de Galileo soltando objetos desde la Torre de Pisa es probablemente apócrifa, ilustra perfectamente 
            el método científico. Si realmente ocurrió, Galileo habría observado que objetos de diferente masa caen al mismo tiempo, 
            refutando a Aristóteles mediante experimentación directa.
          </p>
          <p>
            Lo que sí hizo Galileo fue usar planos inclinados para "diluir" la gravedad y poder medir tiempos con mayor precisión. 
            Este ingenioso método experimental permitió descubrir la ley de caída libre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Experimento de Pasteur</h3>
          <p>
            Pasteur diseñó un experimento elegante para refutar la generación espontánea. Usó matraces con cuellos curvos en forma 
            de "S" que permitían el paso de aire pero no de partículas. El caldo en estos matraces no se echó a perder, demostrando 
            que los microorganismos venían del aire, no surgían espontáneamente.
          </p>
          <p>
            Este experimento es un ejemplo perfecto de control experimental: todas las condiciones eran iguales excepto el acceso 
            de partículas del aire.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Experimento de la Doble Hélice</h3>
          <p>
            Watson y Crick formularon la hipótesis de la estructura del ADN basándose en datos experimentales de otros científicos. 
            Su modelo fue verificado mediante experimentos de difracción de rayos X realizados por Rosalind Franklin. Este es un 
            ejemplo de cómo las hipótesis se construyen sobre evidencia experimental previa.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Hipótesis que Resultaron Incorrectas</h3>
          <p>
            Muchas hipótesis importantes resultaron incorrectas, pero fueron valiosas:
          </p>
          <ul>
            <li>La hipótesis del éter luminífero (medio para ondas de luz) fue refutada por el experimento de Michelson-Morley, 
            llevando a la teoría de la relatividad</li>
            <li>La hipótesis del flogisto (sustancia que se liberaba en la combustión) fue refutada por Lavoisier, estableciendo 
            la química moderna</li>
            <li>La hipótesis de la generación espontánea fue refutada por Pasteur</li>
          </ul>
          <p>
            Estos ejemplos muestran que refutar hipótesis es tan valioso como confirmarlas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>El Método Científico en la Vida Diaria</h3>
          <p>
            Aplicamos el método científico sin darnos cuenta:
          </p>
          <ul>
            <li>Observación: "Mi coche no arranca"</li>
            <li>Hipótesis: "Puede ser la batería"</li>
            <li>Experimento: "Pruebo las luces"</li>
            <li>Análisis: "Las luces funcionan, no es la batería"</li>
            <li>Nueva hipótesis: "Puede ser el motor de arranque"</li>
            <li>Y así sucesivamente...</li>
          </ul>
        </div>
      </div>

      <div className="theory-section-highlight">
        <h2>📝 Resumen</h2>
        <p>
          Una hipótesis es una explicación provisional de un fenómeno observado, basada en conocimientos previos y que puede ser 
          sometida a prueba mediante experimentos. Debe ser comprobable, falsable, específica y basada en conocimientos. 
          Típicamente sigue el formato "Si [cambio en variable independiente], entonces [efecto en variable dependiente]".
        </p>
        <p>
          Un experimento bien diseñado incluye: variable independiente (lo que cambiamos), variable dependiente (lo que medimos), 
          variables controladas (lo que mantenemos constante), grupo de control y grupo experimental. El control experimental es 
          crítico: solo debemos cambiar una variable a la vez para saber qué causa el efecto observado.
        </p>
        <p>
          Un experimento científico debe ser reproducible: otros científicos deben poder repetirlo y obtener los mismos resultados. 
          Esto requiere documentar todo, ser preciso, especificar condiciones y repetir mediciones.
        </p>
        <p>
          Los resultados pueden apoyar o refutar la hipótesis. Un experimento no "demuestra" una hipótesis, solo la apoya. Si la 
          hipótesis es refutada, se formula una nueva y se repite el proceso. Galileo Galilei fue pionero en aplicar rigurosamente 
          el método experimental, combinando observación, experimentación y análisis matemático.
        </p>
      </div>
    </>
  );
};

export default HipotesisExperimentacionTheory;
