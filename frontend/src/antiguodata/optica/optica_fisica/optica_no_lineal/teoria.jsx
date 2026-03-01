import { TheorySection, Concept, Important } from '../../../../components/TheoryV2';

export const metadata = {
  titulo: "Óptica No Lineal",
  descripcion: "Fenómenos ópticos en régimen de alta intensidad con láseres",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const OpticaNoLinealTheory = () => {
  return (
    <>
      <TheorySection title="¿Qué es la Óptica No Lineal?">
        <p>
          La óptica no lineal estudia los fenómenos ópticos que ocurren cuando la respuesta de un material a la luz no es proporcional a la intensidad del campo eléctrico. Estos efectos se vuelven significativos a altas intensidades, típicamente alcanzables con láseres.
        </p>
        
        <Important>
          La óptica no lineal requiere intensidades extremadamente altas (10¹²-10¹⁸ W/m²) donde el campo eléctrico del láser es comparable al campo atómico interno. Por eso fue imposible observarla antes de la invención del láser en 1960.
        </Important>

        <p>
          En la óptica lineal tradicional, la polarización P del material es proporcional al campo eléctrico E:
        </p>
        <div className="formula-display">P = ε₀χE</div>
        <p>
          En óptica no lineal, aparecen términos adicionales:
        </p>
        <div className="formula-display">P = ε₀(χ⁽¹⁾E + χ⁽²⁾E² + χ⁽³⁾E³ + ...)</div>
        <p>Donde:</p>
        <ul>
          <li>χ⁽¹⁾: Susceptibilidad lineal (óptica convencional)</li>
          <li>χ⁽²⁾: Susceptibilidad no lineal de segundo orden</li>
          <li>χ⁽³⁾: Susceptibilidad no lineal de tercer orden</li>
        </ul>
      </TheorySection>

      <TheorySection title="Condiciones para Óptica No Lineal">
        <Concept title="Intensidades Requeridas" variant="detailed">
          <div className="detailed-content">
            <p>
              Los efectos no lineales requieren intensidades muy altas:
            </p>
            <ul>
              <li>Luz solar: ~10³ W/m² (efectos lineales)</li>
              <li>Láser continuo enfocado: ~10⁶ W/m² (efectos débiles)</li>
              <li>Láser pulsado: ~10¹² W/m² (efectos no lineales significativos)</li>
              <li>Láser ultracorto: ~10¹⁸ W/m² (efectos extremos)</li>
            </ul>
            <p>
              Nota: El campo eléctrico del láser debe ser comparable al campo atómico interno (~10¹¹ V/m).
            </p>
          </div>
        </Concept>

        <Concept title="Materiales No Lineales" variant="detailed">
          <div className="detailed-content">
            <p>
              Materiales comúnmente usados en óptica no lineal:
            </p>
            <ul>
              <li>Cristales: KDP, BBO, LiNbO₃, KTP</li>
              <li>Semiconductores: GaAs, InP, ZnSe</li>
              <li>Vidrios especiales: Vidrios dopados</li>
              <li>Fibras ópticas: Sílice dopada</li>
              <li>Materiales orgánicos: Polímeros conjugados</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Efectos No Lineales de Segundo Orden (χ⁽²⁾)">
        <Concept title="Generación de Segundo Armónico (SHG)" variant="detailed">
          <div className="detailed-content">
            <p>
              El efecto no lineal más conocido: dos fotones de frecuencia ω se combinan para generar un fotón de frecuencia 2ω.
            </p>
            <div className="formula-display">ω + ω → 2ω</div>
            <p>Características:</p>
            <ul>
              <li>Conversión de frecuencia: Luz roja → luz verde, infrarrojo → visible</li>
              <li>Eficiencia: Típicamente 10-50% con láseres intensos</li>
              <li>Condición de phase matching: Necesaria para eficiencia alta</li>
              <li>Aplicaciones: Láseres verdes (532 nm desde 1064 nm)</li>
            </ul>
            <p>
              Ejemplo: Láser Nd:YAG (1064 nm, infrarrojo) + cristal KDP → láser verde (532 nm)
            </p>
          </div>
        </Concept>

        <Concept title="Generación de Suma y Diferencia de Frecuencias" variant="detailed">
          <div className="detailed-content">
            <p>
              Dos ondas de frecuencias diferentes interactúan:
            </p>
            <div className="formula-display">ω₁ + ω₂ → ω₃ (suma)</div>
            <div className="formula-display">ω₁ - ω₂ → ω₃ (diferencia)</div>
            <p>Aplicaciones:</p>
            <ul>
              <li>Generación de frecuencias sintonizables: Láseres de longitud de onda variable</li>
              <li>Conversión al infrarrojo: Espectroscopía</li>
              <li>Conversión al UV: Litografía, medicina</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Amplificación Paramétrica Óptica (OPA)" variant="detailed">
          <div className="detailed-content">
            <p>
              Un fotón de alta energía (bomba) se divide en dos fotones de menor energía (señal e idler):
            </p>
            <div className="formula-display">ω_bomba → ω_señal + ω_idler</div>
            <p>Características:</p>
            <ul>
              <li>Amplificación: La señal débil se amplifica</li>
              <li>Sintonizable: Ajustando el ángulo del cristal</li>
              <li>Aplicaciones: Láseres sintonizables, pulsos ultracortos</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Rectificación Óptica" variant="detailed">
          <div className="detailed-content">
            <p>
              Generación de un campo eléctrico DC (frecuencia cero) a partir de luz intensa:
            </p>
            <div className="formula-display">ω - ω → 0</div>
            <p>
              Útil para generar radiación terahertz y estudiar propiedades de materiales.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Efectos No Lineales de Tercer Orden (χ⁽³⁾)">
        <Concept title="Generación de Tercer Armónico (THG)" variant="detailed">
          <div className="detailed-content">
            <p>
              Tres fotones se combinan para generar uno de triple frecuencia:
            </p>
            <div className="formula-display">ω + ω + ω → 3ω</div>
            <p>
              Menos eficiente que SHG pero ocurre en todos los materiales (incluso centrosimétricos).
            </p>
          </div>
        </Concept>

        <Concept title="Efecto Kerr Óptico" variant="detailed">
          <div className="detailed-content">
            <p>
              El índice de refracción depende de la intensidad de la luz:
            </p>
            <div className="formula-display">n = n₀ + n₂I</div>
            <p>Donde:</p>
            <ul>
              <li>n₀: Índice de refracción lineal</li>
              <li>n₂: Coeficiente no lineal (~10⁻²⁰ m²/W en vidrio)</li>
              <li>I: Intensidad de la luz</li>
            </ul>
            <p>Consecuencias:</p>
            <ul>
              <li>Autoenfoque: El haz se enfoca a sí mismo</li>
              <li>Automodulación de fase: Ensanchamiento espectral</li>
              <li>Solitones ópticos: Pulsos que no se dispersan</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Mezcla de Cuatro Ondas (FWM)" variant="detailed">
          <div className="detailed-content">
            <p>
              Tres ondas interactúan para generar una cuarta:
            </p>
            <div className="formula-display">ω₁ + ω₂ - ω₃ → ω₄</div>
            <p>Aplicaciones:</p>
            <ul>
              <li>Conjugación de fase: Corrección de aberraciones</li>
              <li>Amplificación: En fibras ópticas</li>
              <li>Conversión de longitud de onda: En telecomunicaciones</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Absorción de Dos Fotones (TPA)" variant="detailed">
          <div className="detailed-content">
            <p>
              Un material absorbe simultáneamente dos fotones de baja energía:
            </p>
            <div className="formula-display">ω + ω → transición electrónica</div>
            <p>Características:</p>
            <ul>
              <li>No lineal: Probabilidad proporcional a I²</li>
              <li>Selectividad espacial: Solo en el foco del láser</li>
              <li>Aplicaciones: Microscopía 3D, microfabricación</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔬 Microscopía de dos fotones en medicina</h3>
          <p>
            Revolucionó la biología al permitir imagen 3D profunda en tejidos vivos (hasta 1 mm). Usa luz infrarroja (700-1000 nm) que es menos dañina y penetra más que UV/visible. Solo en el foco del láser la intensidad es suficiente para absorción de dos fotones, generando fluorescencia puntual. Ventaja: sin fotodaño fuera del foco. Se usa para estudiar cerebro de ratones vivos, detectar cáncer en tiempo real durante cirugía, y observar actividad neuronal en 3D.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💚 Punteros láser verdes (SHG)</h3>
          <p>
            Los punteros láser verdes baratos usan un láser infrarrojo (808 nm diodo + Nd:YVO₄ → 1064 nm) seguido de un cristal KTP para duplicación de frecuencia (SHG: 1064 nm → 532 nm verde). Son hasta 10x más brillantes que rojos de igual potencia (ojo humano es más sensible a verde). Problema: filtro IR deficiente en modelos baratos permite escape de 1064 nm invisible, peligroso para retina. Algunos alcanzan 5 mW visible + 50 mW IR oculto.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📡 Telecomunicaciones y amplificadores paramétricos</h3>
          <p>
            Internet transatlántico usa fibras ópticas con amplificadores (cada 50-100 km). OPA (amplificación paramétrica óptica) amplifica señales débiles mediante χ⁽²⁾ sin convertir a electricidad. Ventaja: funciona en cualquier longitud de onda simultáneamente (WDM, wavelength division multiplexing). Mezcla de cuatro ondas (FWM, χ⁽³⁾) permite conversión de longitudes de onda para enrutamiento todo-óptico. Problema: FWM también genera ruido (crosstalk entre canales).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Generación de rayos X con HHG</h3>
          <p>
            Generación de armónicos altos (HHG) produce rayos X ultravioleta extremo (10-100 nm) mediante χ⁽ⁿ⁾ con n muy alto. Proceso: láser ultraintenso ioniza átomo, electrón vuelve al núcleo emitiendo fotones de energía extrema (100-1000 eV). Se usa para espectroscopía con resolución attosegundo (10⁻¹⁸ s), observando movimiento electrónico en átomos. Aplicaciones: química ultrarrápida, imagen de moléculas en tiempo real, litografía EUV para chips (ASML, 13.5 nm).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🖨️ Microfabricación 3D por absorción de dos fotones</h3>
          <p>
            Polimerización de dos fotones (2PP) crea estructuras 3D con resolución ~100 nm. Resina líquida fotosensible solo solidifica donde el láser infrarrojo enfocado alcanza intensidad de TPA. Ventaja sobre litografía plana: construye geometrías 3D complejas (scaffolds para tejidos, micromáquinas, metamateriales). Se fabrican lentes intraoculares personalizadas, microrrobots nadadores para entrega de fármacos, y cristales fotónicos 3D. Impresoras 3D comerciales de Nanoscribe logran 1 mm³ en ~1 hora.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: Del láser a attosegundos
        </h2>
        
        <div className="theory-subsection">
          <h3>💎 Franken y el primer efecto no lineal (1961)</h3>
          <p>
            Peter Franken (U. Michigan) observó SHG apenas 1 año después del invento del láser rubí (Maiman, 1960). Enfocó láser rojo (694 nm) en cristal de cuarzo y detectó UV débil (347 nm) en placa fotográfica. El efecto era tan débil que los editores de Physical Review Letters borraron la pequeña mancha UV de la foto publicada, creyendo que era un defecto de impresión. Este "error editorial" es anécdota clásica: la evidencia del nacimiento de la óptica no lineal fue borrada de su propia publicación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📚 Bloembergen y la teoría (1965)</h3>
          <p>
            Nicolaas Bloembergen (Premio Nobel 1981) desarrolló la teoría matemática completa de óptica no lineal: tensores de susceptibilidad χ⁽²⁾ y χ⁽³⁾, condiciones de phase matching, eficiencia de conversión. Su libro "Nonlinear Optics" (1965) sigue siendo referencia fundamental. Predijo la mayoría de efectos no lineales antes de su observación experimental. Bloembergen también inventó el láser de colorante sintonizable, fundamental para espectroscopía no lineal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Pulsos ultracortos: femto y attosegundos (1987-2001)</h3>
          <p>
            Ahmed Zewail (Nobel 1999) usó pulsos femtosegundo (10⁻¹⁵ s) para observar reacciones químicas en tiempo real (femtoquímica). Limitation: movimiento electrónico es más rápido (~attosegundos). Anne L'Huillier, Pierre Agostini y Ferenc Krausz (Nobel 2023) lograron pulsos de 100-250 attosegundos (10⁻¹⁸ s) mediante HHG. Esto permite "fotografiar" electrones moviéndose en átomos. Récord actual: 43 attosegundos (2017).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏆 Strickland, Mourou y CPA (1985-2018)</h3>
          <p>
            Donna Strickland y Gérard Mourou (Nobel 2018) inventaron Chirped Pulse Amplification (CPA): estirar pulso en tiempo, amplificar sin destruir material, recomprimir a duración ultracorta. Revolucionó láseres de alta intensidad (10¹⁸-10²² W/cm²), haciendo posible HHG, aceleración de partículas por láser, fusión por confinamiento inercial (NIF), y cirugía láser femtosegundo (LASIK). Strickland hizo el descubrimiento como estudiante de doctorado a los 26 años.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🔴 El puntero láser verde "imposible" de 1 mW</h3>
          <p>
            Regulaciones limitan punteros láser a 1-5 mW para seguridad ocular. Paradoja: láser verde de 1 mW parece 5-10x más brillante que rojo de 5 mW. Razón: ojo humano tiene sensibilidad máxima a 555 nm (verde-amarillo), 7x mayor que a 650 nm (rojo). Los verdes usan SHG (1064→532 nm) con eficiencia ~30-50%, así que para 1 mW verde visible necesitas ~3 mW IR bomba. Resultado: parecer "más potente" con misma energía, pero respetando límites legales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💥 Láser de 10 PW: potencia de toda la civilización humana</h3>
          <p>
            El láser más potente del mundo (ELI-NP, Rumania, 2023) alcanza 10 PW (10¹⁶ W) durante 10 fs. Potencia equivalente: 1000x el consumo eléctrico mundial (~20 TW). ¿Cómo es posible? Truco: duración ultra-corta. Energía total es solo ~100 J (equivalente a levantar 1 kg a 10 m altura). Comparación: batería AA tiene ~10,000 J, pero liberada en 1 hora. CPA permite concentrar poca energía en tiempo cortísimo para potencia instantánea gigante.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌈 Supercontinuo: "luz blanca" láser</h3>
          <p>
            Enfocando láser intenso en fibra óptica especial o zafiro, efectos no lineales (SPM, FWM, Raman) generan "supercontinuo": espectro casi continuo desde UV hasta infrarrojo medio (400-2500 nm). Parece luz blanca, pero es coherente. Aplicación fascinante: tomografía de coherencia óptica (OCT) para imagen de retina en 3D con resolución micrónica. También se usa en espectroscopía, detección de gases traza, y sincronización de relojes atómicos ópticos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 Nobel de Química 2014 con óptica no lineal</h3>
          <p>
            Eric Betzig, Stefan Hell y William Moerner ganaron el Nobel por microscopía de super-resolución (STED, PALM, STORM), rompiendo límite de difracción (~200 nm). STED de Hell usa absorción no lineal: láser de excitación + láser de depleción en forma de rosquilla (efecto Kerr). Solo el centro nanométrico emite fluorescencia. Resolución: ~20 nm (10x mejor que convencional). Se observan proteínas individuales moviéndose en células vivas. "Imposible" según teoría clásica de Abbe (1873).
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Óptica no lineal: respuesta del material no proporcional a campo eléctrico (P = ε₀(χ⁽¹⁾E + χ⁽²⁾E² + χ⁽³⁾E³ + ...)), requiere intensidades de láser 10¹²-10¹⁸ W/m².
          </li>
          <li>
            Efectos χ⁽²⁾: SHG (ω+ω→2ω, láseres verdes), suma/diferencia de frecuencias (sintonizables), OPA (amplificación).
          </li>
          <li>
            Efectos χ⁽³⁾: THG (3ω), efecto Kerr óptico (n=n₀+n₂I, autoenfoque), FWM (telecomunicaciones), TPA (microscopía).
          </li>
          <li>
            Aplicaciones: láseres sintonizables, telecomunicaciones (amplificadores paramétricos), microscopía 2P (medicina), microfabricación 3D, generación rayos X.
          </li>
          <li>
            Historia: Franken SHG (1961), Bloembergen teoría (1965), Zewail femtoquímica (1987), Strickland CPA (1985), L'Huillier/Agostini/Krausz attosegundos (2001).
          </li>
          <li>
            Desafíos: phase matching (Δk=0), daño óptico a altas intensidades, eficiencia baja en muchos procesos, dispersión de pulsos ultracortos, costo elevado.
          </li>
        </ul>
      </div>
    </>
  );
};

export default OpticaNoLinealTheory;
