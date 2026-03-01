import fs from 'node:fs';
import path from 'node:path';

const base = path.resolve(
  'frontend/src/data_v2/fisica-clasica/mecanica/cantidad-de-movimiento'
);

/**
 * Plantilla de oscilaciones (misma estructura, mismo nivel de detalle),
 * adaptada a “cantidad de movimiento”.
 *
 * Genera/actualiza los tabs:
 * - aplicaciones.md
 * - modelos.md
 * - errores.md
 * - historia.md
 * - ejemplos.md
 *
 * Nota: Este script NO toca teoria.md, formulas.yaml, magnitudes.yaml ni meta.yaml.
 */

const topics = {
  'fundamentos/momento-lineal': {
    nombre: 'Momento lineal',
    fenomeno:
      'la medida vectorial de la “cantidad de movimiento” y su relación directa con la velocidad, la masa y la dinámica de fuerzas',
    ecuaciones: [
      '\\vec p=m\\vec v',
      '\\Delta\\vec p=\\int \\vec F\\,dt',
      '\\vec F_{ext}=\\frac{d\\vec p}{dt}',
    ],
    apps: [
      'Estimación de variaciones de movimiento en maniobras y frenadas.',
      'Interpretación de datos de sensores (velocidad, masa efectiva) en sistemas mecánicos.',
      'Modelado de intercambio de momento entre cuerpos y sistemas.',
    ],
    calc: [
      'Momento lineal a partir de masa y velocidad (con dirección y sentido).',
      'Cambio de momento lineal en un intervalo y fuerzas equivalentes.',
      'Comparación de estados dinámicos antes y después de una interacción.',
    ],
    decisions: [
      'Elegir correctamente el sistema y el eje para asignar signos coherentes.',
      'Decidir si el análisis es 1D, 2D o 3D según la geometría del problema.',
      'Separar fuerzas internas y externas cuando se estudia un sistema compuesto.',
    ],
    errores: [
      'Tratar el momento lineal como escalar cuando el problema requiere un análisis vectorial.',
      'Confundir “momento” con “momento angular” o con “fuerza”.',
      'Usar variaciones de velocidad sin especificar dirección ni sentido.',
      'Sustituir valores en ecuaciones sin fijar un sistema de referencia.',
      'Olvidar que \\(\\vec p\\) depende de \\(m\\) y \\(\\vec v\\), y no solo de la rapidez.',
      'No cerrar con verificación física (signos, unidades y orden de magnitud).',
    ],
    historia: {
      contexto:
        'El concepto de cantidad de movimiento se consolidó como herramienta para describir cambios dinámicos sin depender de trayectorias detalladas.',
      hitos: [
        'Newton conectó fuerza y variación de cantidad de movimiento en su formulación dinámica.',
        'La mecánica clásica adoptó el momento lineal como magnitud central en colisiones y sistemas.',
        'La formulación moderna usa \\(\\vec p\\) como puente entre cinemática, fuerzas y conservación.',
      ],
      relevancia:
        'Permite analizar interacciones complejas con reglas claras de conservación y balance.',
      continuidad:
        'Sigue siendo esencial en ingeniería (impactos, seguridad, robótica) y en física moderna.',
    },
    ej1: {
      titulo: 'Cálculo vectorial de momento lineal',
      enunciado:
        'Una masa de 1.2 kg se mueve con \\(\\vec v=(3\\,\\hat\\imath-2\\,\\hat\\jmath)\\,\\text{m/s}\\). Calcula \\(\\vec p\\) y su módulo.',
      pasos: [
        'Aplica \\(\\vec p=m\\vec v\\) componente a componente.',
        'Calcula el módulo \\(|\\vec p|\\) con \\(|\\vec p|=\\sqrt{p_x^2+p_y^2}\\).',
        'Interpreta dirección y sentido del vector momento lineal.',
      ],
    },
    ej2: {
      titulo: 'Cambio de momento y fuerza equivalente',
      enunciado:
        'Un objeto de 0.50 kg pasa de \\(\\vec v_1=(4\\,\\hat\\imath)\\,\\text{m/s}\\) a \\(\\vec v_2=(1\\,\\hat\\imath)\\,\\text{m/s}\\) en 0.20 s. Calcula \\(\\Delta\\vec p\\) y la fuerza media.',
      pasos: [
        'Calcula \\(\\vec p_1=m\\vec v_1\\) y \\(\\vec p_2=m\\vec v_2\\).',
        'Obtén \\(\\Delta\\vec p=\\vec p_2-\\vec p_1\\) y revisa el signo.',
        'Usa \\(\\vec F_{med}=\\Delta\\vec p/\\Delta t\\) y valida unidades (N).',
      ],
    },
  },

  'fundamentos/impulso': {
    nombre: 'Impulso',
    fenomeno:
      'la acción de una fuerza durante un intervalo de tiempo y su equivalencia con el cambio de momento lineal',
    ecuaciones: [
      '\\vec J=\\int_{t_1}^{t_2}\\vec F\\,dt',
      '\\vec J=\\Delta\\vec p',
      '\\vec J=\\vec F_{med}\\,\\Delta t',
    ],
    apps: [
      'Diseño de sistemas de protección ante impactos (absorción de impulso).',
      'Análisis de fuerzas promedio en colisiones y frenadas.',
      'Interpretación de curvas fuerza-tiempo en ensayos experimentales.',
    ],
    calc: [
      'Impulso a partir de fuerza constante o fuerza variable (área bajo la curva).',
      'Cambio de momento lineal asociado a un impulso dado.',
      'Fuerza media necesaria para producir un cambio de velocidad en un tiempo.',
    ],
    decisions: [
      'Elegir intervalo temporal correcto (inicio y fin del contacto).',
      'Decidir si se puede aproximar \\(\\vec F\\) como constante o requiere integración.',
      'Usar convención de signos coherente con el sentido del movimiento.',
    ],
    errores: [
      'Confundir impulso \\(\\vec J\\) con “fuerza” o con “energía”.',
      'Usar \\(J=F\\Delta t\\) sin justificar que la fuerza sea aproximadamente constante.',
      'Olvidar que el impulso es vectorial y depende de dirección y sentido.',
      'Tomar \\(\\Delta t\\) incorrecto (por ejemplo, duración total del evento en lugar del contacto real).',
      'Interpretar el área bajo la curva fuerza-tiempo sin revisar unidades (N·s).',
      'No comprobar coherencia con \\(\\Delta\\vec p\\) y con el signo del resultado.',
    ],
    historia: {
      contexto:
        'La noción de impulso permitió expresar interacciones breves e intensas (golpes, choques) de manera cuantitativa.',
      hitos: [
        'La dinámica newtoniana formalizó que el efecto total de una interacción depende del tiempo de actuación.',
        'El análisis experimental incorporó medidas fuerza-tiempo para caracterizar contactos reales.',
        'La ingeniería adoptó el impulso como métrica clave en seguridad e impacto.',
      ],
      relevancia:
        'Es la herramienta estándar para conectar fuerzas transitorias con cambios de movimiento.',
      continuidad:
        'Aparece en biomecánica, balística, automoción, robótica y ensayos de materiales.',
    },
    ej1: {
      titulo: 'Impulso por fuerza constante',
      enunciado:
        'Una fuerza constante de 120 N actúa durante 0.15 s sobre un cuerpo inicialmente en reposo en 1D. Calcula el impulso y \\(\\Delta p\\).',
      pasos: [
        'Calcula \\(J=F\\Delta t\\) y expresa la unidad como N·s.',
        'Usa \\(\\vec J=\\Delta\\vec p\\) para obtener el cambio de momento.',
        'Interpreta el signo según el sentido de la fuerza.',
      ],
    },
    ej2: {
      titulo: 'Impulso a partir de una gráfica',
      enunciado:
        'La fuerza sobre un objeto sigue una forma triangular: sube linealmente hasta 400 N y vuelve a 0 en 0.08 s. Estima el impulso.',
      pasos: [
        'Reconoce que el impulso es el área bajo \\(F(t)\\).',
        'Calcula el área del triángulo: \\(J=\\tfrac12\\,F_{max}\\,\\Delta t\\).',
        'Verifica unidades y asocia el resultado con \\(\\Delta p\\).',
      ],
    },
  },

  'fundamentos/sistemas-aislados': {
    nombre: 'Sistemas aislados',
    fenomeno:
      'la evolución de un sistema cuando la resultante de fuerzas externas es despreciable, de modo que el momento lineal total se conserva',
    ecuaciones: [
      '\\sum \\vec F_{ext}\\approx\\vec 0',
      '\\frac{d\\vec P}{dt}=\\sum \\vec F_{ext}',
      '\\vec P=\\sum_i \\vec p_i=\\text{cte}',
    ],
    apps: [
      'Análisis de colisiones en ausencia de fuerzas externas significativas.',
      'Estudio de explosiones y fragmentación como redistribución interna de momento.',
      'Modelado de sistemas en microgravedad o sobre superficies de baja fricción.',
    ],
    calc: [
      'Momento total inicial y final del sistema.',
      'Velocidades finales de componentes tras interacción interna.',
      'Reparto de momento entre partes conservando \\(\\vec P\\).',
    ],
    decisions: [
      'Delimitar el sistema correctamente (qué incluye y qué queda fuera).',
      'Decidir si realmente se puede despreciar \\(\\sum \\vec F_{ext}\\) en el intervalo estudiado.',
      'Elegir ejes y sentidos para resolver con claridad (especialmente en 2D).',
    ],
    errores: [
      'Aplicar conservación de \\(\\vec P\\) sin justificar que el sistema sea aislado.',
      'Incluir fuerzas internas como si rompieran la conservación del momento total.',
      'Ignorar impulsos externos breves (fricción, contacto con el suelo, tensiones externas).',
      'Mezclar estados iniciales y finales sin definir el “antes” y el “después” de la interacción.',
      'Resolver en 1D cuando la interacción es claramente bidimensional.',
      'No verificar que el resultado conserve exactamente \\(\\vec P\\) (cierre numérico y vectorial).',
    ],
    historia: {
      contexto:
        'El principio de conservación del momento surge como consecuencia directa de la dinámica y de la simetría de traslación.',
      hitos: [
        'La mecánica clásica estableció el balance entre fuerzas externas y variación de momento total.',
        'La formulación de sistemas permitió tratar interacciones internas sin detallar fuerzas de contacto.',
        'La física moderna conectó conservación con simetrías fundamentales (Noether).',
      ],
      relevancia:
        'Es la base para resolver colisiones y explosiones con método y sin ambigüedad.',
      continuidad:
        'Se usa en ingeniería de impacto, dinámica de sistemas múltiples y física de partículas.',
    },
    ej1: {
      titulo: 'Explosión en reposo (1D)',
      enunciado:
        'Un sistema inicialmente en reposo se fragmenta en dos partes: m1=0.30 kg y m2=0.20 kg. Si la primera sale con v1=6 m/s, calcula v2.',
      pasos: [
        'Usa \\(P_{inicial}=0\\) y conserva \\(P\\): \\(m_1v_1+m_2v_2=0\\).',
        'Despeja \\(v_2\\) y revisa el signo (sentido opuesto).',
        'Comprueba que \\(P_{final}=0\\) al sustituir valores.',
      ],
    },
    ej2: {
      titulo: 'Sistema casi aislado (criterio)',
      enunciado:
        'Un patinador impulsa a otro durante un contacto de 0.12 s. Explica qué condiciones hacen razonable conservar \\(\\vec P\\) del sistema patinador+patinador.',
      pasos: [
        'Identifica fuerzas externas (fricción con el hielo, resistencia del aire) y su posible impulso.',
        'Justifica que su impulso externo sea pequeño frente al impulso interno del empuje.',
        'Explica cómo una elección correcta del intervalo temporal mejora la aproximación.',
      ],
    },
  },

  'conservacion-momento-lineal/principio-de-conservacion': {
    nombre: 'Principio de conservación del momento lineal',
    fenomeno:
      'la invariancia del momento lineal total de un sistema cuando la resultante externa es nula o despreciable durante la interacción',
    ecuaciones: [
      '\\vec P_{inicial}=\\vec P_{final}',
      '\\sum \\vec p_{i}=\\sum \\vec p_{f}',
      '\\Delta\\vec P=\\int\\sum\\vec F_{ext}\\,dt',
    ],
    apps: [
      'Resolución sistemática de colisiones y separaciones con enfoque de balance.',
      'Reconstrucción de velocidades desconocidas en accidentes y choques.',
      'Diseño y análisis de sistemas de retroceso (recoil) y expulsión de masa.',
    ],
    calc: [
      'Momento total del sistema antes y después de la interacción.',
      'Velocidades desconocidas usando ecuaciones de conservación (1D/2D).',
      'Estimación de impulso externo admisible para considerar sistema aislado.',
    ],
    decisions: [
      'Verificar aislamiento: fuerza externa neta ≈ 0 en el intervalo de interacción.',
      'Elegir el sistema mínimo que haga internas las fuerzas relevantes.',
      'Decidir si hace falta una segunda ecuación (por ejemplo, energía) según el tipo de colisión.',
    ],
    errores: [
      'Confundir conservación de momento con conservación de energía cinética (solo vale en colisiones elásticas).',
      'Usar conservación sin definir claramente el sistema.',
      'Ignorar que el principio es vectorial y requiere componentes.',
      'Tratar fuerzas internas como si alteraran \\(\\vec P\\) total.',
      'No comprobar consistencia de signos al interpretar direcciones.',
      'Cerrar el ejercicio sin validar numéricamente \\(\\vec P_{i}=\\vec P_{f}\\).',
    ],
    historia: {
      contexto:
        'El principio se consolidó como ley de balance capaz de resolver interacciones complejas con información parcial.',
      hitos: [
        'La mecánica newtoniana lo introduce como consecuencia de la segunda ley.',
        'El enfoque de “sistema” permitió separar fuerzas internas de externas.',
        'La física moderna lo vincula con la simetría espacial (traslación).',
      ],
      relevancia:
        'Es uno de los pilares para modelar choques, retrocesos y procesos de intercambio.',
      continuidad:
        'Se mantiene como herramienta transversal desde mecánica clásica hasta física de partículas.',
    },
    ej1: {
      titulo: 'Conservación en choque 1D',
      enunciado:
        'Dos carros en 1D: m1=0.40 kg con v1=2.5 m/s y m2=0.60 kg en reposo. Tras el choque se mueven juntos. Calcula la velocidad final.',
      pasos: [
        'Plantea \\(P_i=m_1v_1+m_2v_2\\) y \\(P_f=(m_1+m_2)v_f\\).',
        'Resuelve \\(v_f=P_i/(m_1+m_2)\\).',
        'Comprueba coherencia: \\(v_f\\) debe estar entre 0 y v1.',
      ],
    },
    ej2: {
      titulo: 'Criterio de aislamiento por impulso externo',
      enunciado:
        'Un sistema tiene \\(|\\Delta P|\\) interno de 8 N·s durante un choque. Estima cuándo es razonable despreciar impulso externo si la fricción aporta 0.3 N·s.',
      pasos: [
        'Compara el impulso externo con el cambio interno: razón \\(0.3/8\\).',
        'Define un umbral razonable (por ejemplo, <5%).',
        'Concluye si la aproximación de sistema aislado es válida.',
      ],
    },
  },

  'conservacion-momento-lineal/centro-de-masas-mec': {
    nombre: 'Centro de masas (mecánica)',
    fenomeno:
      'la representación del movimiento colectivo de un sistema como si toda la masa estuviera concentrada en un punto equivalente',
    ecuaciones: [
      '\\vec R_{CM}=\\frac{1}{M}\\sum_i m_i\\vec r_i',
      'M\\vec a_{CM}=\\sum\\vec F_{ext}',
      '\\vec P=M\\vec v_{CM}',
    ],
    apps: [
      'Simplificación del movimiento de sistemas múltiples mediante \\(\\vec R_{CM}\\).',
      'Análisis de trayectorias globales en colisiones y explosiones.',
      'Diseño de estabilidad y balance en sistemas mecánicos y estructuras.',
    ],
    calc: [
      'Posición del centro de masas en 1D/2D/3D para masas discretas.',
      'Velocidad y aceleración del centro de masas a partir de fuerzas externas.',
      'Relación entre momento total y velocidad del centro de masas.',
    ],
    decisions: [
      'Elegir modelo discreto (partículas) o continuo según distribución de masa.',
      'Separar movimiento del CM de movimientos internos para interpretar correctamente.',
      'Usar referencia inercial adecuada para aplicar \\(\\sum\\vec F_{ext}\\).',
    ],
    errores: [
      'Confundir centro de masas con centro geométrico cuando la masa no es uniforme.',
      'Calcular \\(\\vec R_{CM}\\) sin usar pesos por masa.',
      'Olvidar que el movimiento del CM solo depende de fuerzas externas netas.',
      'Suponer que el CM debe estar dentro del objeto en cualquier caso.',
      'Mezclar unidades o ejes al combinar coordenadas.',
      'No verificar consistencia: si \\(\\sum\\vec F_{ext}=0\\), \\(\\vec v_{CM}\\) debe ser constante.',
    ],
    historia: {
      contexto:
        'El centro de masas se introdujo para separar el movimiento global de un sistema de los movimientos internos de sus partes.',
      hitos: [
        'La mecánica clásica formalizó el promedio ponderado por masa como punto equivalente.',
        'El enfoque de sistemas conectó \\(\\vec P\\) con \\(\\vec v_{CM}\\).',
        'La ingeniería lo adoptó para estabilidad, balance y diseño dinámico.',
      ],
      relevancia:
        'Permite resolver problemas complejos reduciendo grados de libertad a un movimiento global.',
      continuidad:
        'Sigue siendo central en dinámica multibody, biomecánica y aeronáutica.',
    },
    ej1: {
      titulo: 'Centro de masas de dos partículas',
      enunciado:
        'Dos masas: m1=2 kg en x1=0.20 m y m2=3 kg en x2=1.10 m. Calcula x_CM.',
      pasos: [
        'Aplica \\(x_{CM}=(m_1x_1+m_2x_2)/(m_1+m_2)\\).',
        'Sustituye y calcula en SI.',
        'Verifica que x_CM queda entre x1 y x2.',
      ],
    },
    ej2: {
      titulo: 'Movimiento del CM sin fuerzas externas',
      enunciado:
        'Un sistema de dos patinadores se empuja y se separa en hielo ideal (fricción despreciable). Describe el movimiento del CM antes y después del empuje.',
      pasos: [
        'Justifica que \\(\\sum\\vec F_{ext}\\approx 0\\) en horizontal.',
        'Concluye que \\(\\vec v_{CM}\\) se mantiene constante.',
        'Explica que los cambios individuales son internos y no alteran el movimiento del CM.',
      ],
    },
  },

  'conservacion-momento-lineal/colisiones/colisiones-elasticas': {
    nombre: 'Colisiones elásticas',
    fenomeno:
      'choques donde se conserva el momento lineal total y la energía cinética total del sistema',
    ecuaciones: [
      '\\vec P_i=\\vec P_f',
      'K_i=K_f',
      'e=1',
    ],
    apps: [
      'Modelos ideales de choques en gases y partículas.',
      'Análisis de impactos donde la deformación es despreciable.',
      'Problemas tipo billar para inferir velocidades después del choque.',
    ],
    calc: [
      'Velocidades finales en colisiones 1D con conservación de \\(P\\) y \\(K\\).',
      'Distribución de energía cinética entre cuerpos tras el choque.',
      'Comprobación de elasticidad mediante comparación \\(K_i\\) vs \\(K_f\\).',
    ],
    decisions: [
      'Decidir si el choque puede aproximarse como elástico (pérdidas pequeñas).',
      'Elegir si resolver con sistema de ecuaciones (P y K) o con velocidad relativa.',
      'Definir el sentido positivo antes de plantear ecuaciones.',
    ],
    errores: [
      'Aplicar conservación de energía cinética en choques que no son elásticos.',
      'Olvidar que el planteamiento debe ser coherente en signos (1D) o componentes (2D).',
      'Usar fórmulas memorizadas sin revisar condiciones (masas, reposo, dirección).',
      'Confundir “rebotan” con “elástico” sin medir pérdidas.',
      'No comprobar que \\(K_f\\le K_i\\) y que en elástico debe cumplirse igualdad.',
      'No validar el resultado reconstruyendo \\(P\\) y \\(K\\) finales.',
    ],
    historia: {
      contexto:
        'Las colisiones elásticas se estudian como límite ideal donde no hay disipación neta en el choque.',
      hitos: [
        'La teoría cinética usó choques elásticos para explicar propiedades macroscópicas de gases.',
        'La mecánica clásica consolidó el método de conservación para resolver impactos.',
        'La física de partículas adopta este límite para interpretar eventos a escalas microscópicas.',
      ],
      relevancia:
        'Proporciona un caso de referencia para comparar y clasificar colisiones reales.',
      continuidad:
        'Se usa en modelos de gases, simulación y problemas didácticos de dinámica.',
    },
    ej1: {
      titulo: 'Choque elástico 1D con m2 en reposo',
      enunciado:
        'm1=0.20 kg con v1=5 m/s choca elásticamente con m2=0.30 kg en reposo. Calcula v1f y v2f.',
      pasos: [
        'Plantea conservación de momento: \\(m_1v_1=m_1v_{1f}+m_2v_{2f}\\).',
        'Plantea conservación de energía: \\(\\tfrac12m_1v_1^2=\\tfrac12m_1v_{1f}^2+\\tfrac12m_2v_{2f}^2\\).',
        'Resuelve el sistema y verifica que se conservan \\(P\\) y \\(K\\).',
      ],
    },
    ej2: {
      titulo: 'Comprobación de elasticidad',
      enunciado:
        'En un choque, se mide \\(K_i=12\\,\\text{J}\\) y \\(K_f=11.8\\,\\text{J}\\). Discute si es razonable aproximarlo como elástico.',
      pasos: [
        'Calcula la pérdida relativa: \\((K_i-K_f)/K_i\\).',
        'Define un criterio práctico (pérdidas pequeñas).',
        'Concluye si el modelo elástico es aceptable para el objetivo del problema.',
      ],
    },
  },

  'conservacion-momento-lineal/colisiones/colisiones-inelasticas': {
    nombre: 'Colisiones inelásticas',
    fenomeno:
      'choques donde se conserva el momento lineal total, pero parte de la energía cinética se transforma en otras formas',
    ecuaciones: [
      '\\vec P_i=\\vec P_f',
      'K_f<K_i',
      '0<e<1',
    ],
    apps: [
      'Impactos reales con deformación, calor y sonido.',
      'Análisis de seguridad en automoción (absorción de energía).',
      'Modelos de choque para estimar velocidades posteriores con pérdidas.',
    ],
    calc: [
      'Velocidades finales usando conservación de \\(P\\) y un modelo de restitución.',
      'Pérdida de energía cinética en el choque.',
      'Rangos de plausibilidad de resultados (K disminuye).',
    ],
    decisions: [
      'Decidir si el coeficiente de restitución es necesario o si basta con datos adicionales.',
      'Elegir sistema y ejes para aplicar \\(\\vec P\\) por componentes.',
      'Interpretar la pérdida de energía sin confundirla con “pérdida de momento”.',
    ],
    errores: [
      'Suponer que \\(K\\) se conserva por defecto.',
      'Concluir que, como hay pérdidas, el momento total no se conserva.',
      'Aplicar restitución sin definir claramente dirección de impacto.',
      'Obtener velocidades finales que violan \\(K_f<K_i\\) y no detectarlo.',
      'No separar energía transformada (deformación, calor, sonido) del balance de momento.',
      'Cerrar sin comprobar conservación de \\(P\\) con valores numéricos.',
    ],
    historia: {
      contexto:
        'El caso inelástico describe la mayoría de choques reales, donde la energía mecánica no se conserva.',
      hitos: [
        'La ingeniería incorporó métricas de deformación y disipación para diseñar seguridad.',
        'El coeficiente de restitución se generalizó como parámetro empírico de pérdida.',
        'La mecánica de impactos formalizó balances combinados de momento y energía.',
      ],
      relevancia:
        'Es imprescindible para describir impactos reales con resultados fiables.',
      continuidad:
        'Se usa en diseño de estructuras, automoción, materiales y simulación física.',
    },
    ej1: {
      titulo: 'Pérdida de energía en choque 1D',
      enunciado:
        'Dos masas m1=0.50 kg con v1=3.0 m/s y m2=1.0 kg en reposo colisionan y salen con v1f=0.8 m/s y v2f=1.1 m/s. Calcula la pérdida de energía cinética.',
      pasos: [
        'Calcula \\(K_i\\) y \\(K_f\\) con \\(K=\\tfrac12mv^2\\).',
        'Obtén \\(\\Delta K=K_f-K_i\\) y expresa la pérdida como valor positivo.',
        'Comprueba además que el momento se conserva dentro de tolerancia numérica.',
      ],
    },
    ej2: {
      titulo: 'Uso de coeficiente de restitución',
      enunciado:
        'En 1D, m1=0.40 kg con v1=4 m/s choca con m2=0.60 kg en reposo. Si e=0.6, calcula velocidades finales.',
      pasos: [
        'Plantea conservación de \\(P\\).',
        'Plantea restitución: \\(v_{2f}-v_{1f}=e(v_1-v_2)\\).',
        'Resuelve el sistema y verifica que \\(K_f<K_i\\).',
      ],
    },
  },

  'conservacion-momento-lineal/colisiones/colisiones-totalmente-inelasticas': {
    nombre: 'Colisiones totalmente inelásticas',
    fenomeno:
      'choques donde los cuerpos quedan unidos tras la colisión; se conserva el momento lineal, pero la pérdida de energía cinética es máxima compatible con esa conservación',
    ecuaciones: [
      '\\vec P_i=\\vec P_f',
      'v_f=\\frac{m_1\\vec v_1+m_2\\vec v_2}{m_1+m_2}',
      'e=0',
    ],
    apps: [
      'Choques con adherencia (pegado, enganche, plastificación intensa).',
      'Modelos simplificados de seguridad e impacto con absorción elevada.',
      'Estimaciones rápidas de velocidad común final tras impacto.',
    ],
    calc: [
      'Velocidad final conjunta por conservación de \\(P\\).',
      'Pérdida de energía cinética comparando \\(K_i\\) y \\(K_f\\).',
      'Interpretación de por qué la energía no se conserva aunque el momento sí.',
    ],
    decisions: [
      'Determinar si “quedan unidos” es una suposición razonable.',
      'Elegir dirección positiva y expresar vectores correctamente.',
      'Separar el cálculo de \\(v_f\\) del análisis energético posterior.',
    ],
    errores: [
      'Usar ecuaciones de choque elástico en un caso donde se unen.',
      'Olvidar que el momento se conserva aunque haya deformación permanente.',
      'Calcular \\(v_f\\) sin ponderar por masas.',
      'Concluir que la pérdida de energía “desaparece” sin identificar transformaciones.',
      'No comprobar que \\(v_f\\) cae entre velocidades iniciales (en 1D sin inversión externa).',
      'No cerrar calculando o estimando \\(\\Delta K\\) para interpretar el fenómeno.',
    ],
    historia: {
      contexto:
        'La colisión totalmente inelástica representa el límite de disipación máxima con conservación de momento.',
      hitos: [
        'La ingeniería de impactos adoptó este límite para estimaciones conservadoras.',
        'La mecánica clásica lo usa para ilustrar diferencia entre conservación de momento y de energía.',
        'La modelización moderna lo emplea como caso límite en simulaciones de choque.',
      ],
      relevancia:
        'Es clave para comprender por qué “conservar momento” no implica “conservar energía”.',
      continuidad:
        'Se aplica en diseño de seguridad, absorción de impactos y modelado de colisiones adherentes.',
    },
    ej1: {
      titulo: 'Velocidad final común',
      enunciado:
        'm1=0.25 kg con v1=6 m/s choca con m2=0.75 kg en reposo y quedan unidos. Calcula v_f.',
      pasos: [
        'Plantea \\(v_f=(m_1v_1+m_2v_2)/(m_1+m_2)\\).',
        'Sustituye valores y calcula en SI.',
        'Comprueba coherencia (v_f menor que v1 y positiva).',
      ],
    },
    ej2: {
      titulo: 'Pérdida de energía cinética',
      enunciado:
        'Con los datos del ejemplo anterior, calcula \\(K_i\\), \\(K_f\\) y la pérdida de energía.',
      pasos: [
        'Calcula \\(K_i\\) con la energía inicial del sistema.',
        'Calcula \\(K_f=\\tfrac12(m_1+m_2)v_f^2\\).',
        'Obtén pérdida y comenta en qué formas suele transformarse.',
      ],
    },
  },

  'momento-angular/definicion-momento-angular': {
    nombre: 'Definición de momento angular',
    fenomeno:
      'la medida del “momento de rotación” asociada a una partícula o sistema respecto a un punto o eje',
    ecuaciones: [
      '\\vec L=\\vec r\\times\\vec p',
      '\\vec\\tau=\\frac{d\\vec L}{dt}',
      '|\\vec L|=rp\\sin\\theta',
    ],
    apps: [
      'Análisis de rotaciones y trayectorias donde la referencia espacial importa.',
      'Cálculo de momento angular de partículas en órbita o movimiento curvo.',
      'Estudio de torque y cambios de estado rotacional.',
    ],
    calc: [
      'Momento angular a partir de \\(\\vec r\\) y \\(\\vec p\\).',
      'Dirección de \\(\\vec L\\) mediante regla de la mano derecha.',
      'Relación entre torque externo y variación de \\(\\vec L\\).',
    ],
    decisions: [
      'Elegir el origen o eje respecto al que se define \\(\\vec r\\).',
      'Determinar el plano de movimiento para resolver productos vectoriales.',
      'Separar contribuciones de fuerzas que sí generan torque de las que no (línea de acción).',
    ],
    errores: [
      'Usar \\(L=rp\\) sin el factor \\(\\sin\\theta\\) cuando no es perpendicular.',
      'Confundir momento angular con momento lineal.',
      'Cambiar el origen de referencia sin ajustar \\(\\vec r\\).',
      'Aplicar mano derecha de forma inconsistente (signo de \\(\\vec L\\)).',
      'Interpretar torque cero sin revisar si la línea de acción pasa por el origen.',
      'No comprobar unidades: \\(\\text{kg·m}^2/\\text{s}\\).',
    ],
    historia: {
      contexto:
        'El momento angular surgió como extensión natural de la dinámica cuando el movimiento y las fuerzas se analizan respecto a un punto.',
      hitos: [
        'La mecánica clásica formalizó \\(\\vec L\\) y \\(\\vec\\tau\\) como magnitudes vectoriales centrales en rotación.',
        'El tratamiento con productos vectoriales unificó geometría y dinámica.',
        'La física moderna mantuvo \\(\\vec L\\) como concepto esencial en micro y macroescala.',
      ],
      relevancia:
        'Permite describir de forma compacta la rotación y su variación bajo torques externos.',
      continuidad:
        'Es clave en ingeniería, astrofísica y física cuántica (aunque con interpretación distinta).',
    },
    ej1: {
      titulo: 'Cálculo de \\(\\vec L\\) con producto vectorial',
      enunciado:
        'Una partícula tiene \\(\\vec r=(0.4\\,\\hat\\imath+0.2\\,\\hat\\jmath)\\,\\text{m}\\) y \\(\\vec p=(1.5\\,\\hat\\imath-0.5\\,\\hat\\jmath)\\,\\text{kg·m/s}\\). Calcula \\(\\vec L\\).',
      pasos: [
        'Escribe \\(\\vec L=\\vec r\\times\\vec p\\) y calcula determinante en 3D (componente \\(\\hat k\\)).',
        'Obtén el signo según el orden del producto vectorial.',
        'Interpreta físicamente: \\(\\vec L\\) perpendicular al plano.',
      ],
    },
    ej2: {
      titulo: 'Módulo de \\(\\vec L\\) en caso perpendicular',
      enunciado:
        'Si \\(\\vec r\\perp\\vec p\\), con r=0.30 m y p=2.0 kg·m/s, calcula \\(|\\vec L|\\).',
      pasos: [
        'Usa \\(|\\vec L|=rp\\sin\\theta\\) con \\(\\theta=90^\\circ\\).',
        'Calcula valor numérico y unidades.',
        'Explica por qué el máximo se da cuando son perpendiculares.',
      ],
    },
  },

  'momento-angular/conservacion-momento-angular': {
    nombre: 'Conservación del momento angular',
    fenomeno:
      'la invariancia del momento angular total cuando el torque externo neto sobre el sistema es nulo o despreciable',
    ecuaciones: [
      '\\sum\\vec\\tau_{ext}=\\frac{d\\vec L}{dt}',
      '\\sum\\vec\\tau_{ext}\\approx\\vec 0\\Rightarrow \\vec L=\\text{cte}',
      'I\\omega=\\text{cte}',
    ],
    apps: [
      'Comprensión de cambios de velocidad angular en sistemas con variación de inercia (patinadores).',
      'Análisis de rotación de satélites y sistemas aislados respecto a torques externos.',
      'Diseño de mecanismos donde se aprovecha o se evita transferencia de momento angular.',
    ],
    calc: [
      'Estado final de \\(\\omega\\) al cambiar momento de inercia.',
      'Comparación de \\(\\vec L\\) antes y después en un sistema sin torque externo.',
      'Identificación de torques externos relevantes y su efecto en \\(\\vec L\\).',
    ],
    decisions: [
      'Delimitar el sistema para que los torques relevantes sean internos.',
      'Decidir si el torque externo puede despreciarse en el intervalo.',
      'Elegir el eje respecto al que se conserva \\(L\\) (componente).',
    ],
    errores: [
      'Aplicar conservación de \\(L\\) aunque exista torque externo significativo.',
      'Confundir conservación de \\(L\\) con conservación de \\(\\omega\\).',
      'Usar \\(I\\omega\\) sin justificar rigidez o eje fijo.',
      'Ignorar que se conserva el vector/componente, no necesariamente el módulo total en 3D.',
      'No identificar torques por fuerzas que no pasan por el eje.',
      'No cerrar verificando coherencia energética (si hay trabajo externo).',
    ],
    historia: {
      contexto:
        'La conservación del momento angular se consolidó como principio de balance rotacional complementario al de momento lineal.',
      hitos: [
        'La dinámica rotacional formalizó el vínculo torque–variación de \\(\\vec L\\).',
        'La ingeniería lo adoptó para estabilidad de giro y control de actitud.',
        'La física moderna lo conecta con simetría rotacional (Noether).',
      ],
      relevancia:
        'Explica por qué sistemas rotan más rápido al reducir su inercia sin torque externo.',
      continuidad:
        'Es esencial en diseño de rotores, control espacial y fenómenos de giro en biomecánica.',
    },
    ej1: {
      titulo: 'Patinadora que recoge los brazos',
      enunciado:
        'Una patinadora reduce su momento de inercia de 3.2 a 1.6 kg·m² sin torque externo apreciable. Si \\(\\omega_i=2.0\\,\\text{rad/s}\\), calcula \\(\\omega_f\\).',
      pasos: [
        'Plantea \\(I_i\\omega_i=I_f\\omega_f\\).',
        'Despeja \\(\\omega_f\\) y calcula.',
        'Interpreta por qué aumenta \\(\\omega\\) al disminuir \\(I\\).',
      ],
    },
    ej2: {
      titulo: 'Criterio de torque externo despreciable',
      enunciado:
        'Explica cuándo es razonable suponer \\(\\sum\\tau_{ext}\\approx 0\\) para un sistema que gira apoyado sobre un eje con fricción.',
      pasos: [
        'Identifica torque de fricción y estima su efecto acumulado en el intervalo.',
        'Compara con el cambio de \\(L\\) que produciría ese torque.',
        'Concluye dominio temporal donde la conservación es buena aproximación.',
      ],
    },
  },

  'momento-angular/precesion': {
    nombre: 'Precesión',
    fenomeno:
      'el cambio de dirección del eje de rotación cuando actúa un torque externo perpendicular al momento angular',
    ecuaciones: [
      '\\vec\\tau=\\frac{d\\vec L}{dt}',
      '\\Omega=\\frac{\\tau}{L}',
      '\\Omega\\approx\\frac{mgr}{I\\omega}',
    ],
    apps: [
      'Interpretación de giroscopios y estabilidad de orientación.',
      'Análisis de peonzas y sistemas rotantes bajo gravedad.',
      'Control de actitud en satélites y sistemas de navegación inercial.',
    ],
    calc: [
      'Velocidad angular de precesión en un giroscopio ideal.',
      'Dirección y sentido de la precesión usando geometría de vectores.',
      'Dependencia de \\(\\Omega\\) con torque, inercia y velocidad de giro.',
    ],
    decisions: [
      'Decidir si el modelo de giroscopio ideal (sin nutación, sin pérdidas) es aplicable.',
      'Elegir la aproximación (pequeñas oscilaciones, régimen estacionario).',
      'Identificar correctamente el brazo de palanca y el torque gravitatorio.',
    ],
    errores: [
      'Confundir precesión con rotación propia (spin).',
      'Usar \\(\\Omega=\\tau/L\\) sin comprobar perpendicularidad entre \\(\\tau\\) y \\(\\vec L\\).',
      'Aplicar fórmula \\(\\Omega\\approx mgr/(I\\omega)\\) fuera del régimen estable.',
      'Determinar mal el sentido por mano derecha en producto vectorial.',
      'Ignorar pérdidas y concluir precesión constante en sistemas muy disipativos.',
      'No validar unidades (rad/s) y coherencia de escalas.',
    ],
    historia: {
      contexto:
        'La precesión fue clave para entender comportamiento no intuitivo de sistemas rotantes bajo torques pequeños.',
      hitos: [
        'El desarrollo de la dinámica rotacional explicó la desviación del eje de giro por torques externos.',
        'Los giroscopios se convirtieron en herramientas tecnológicas para navegación y estabilización.',
        'La ingeniería moderna formalizó modelos de precesión en control y diseño de rotores.',
      ],
      relevancia:
        'Conecta torque, momento angular y cambios de orientación de manera geométrica y potente.',
      continuidad:
        'Sigue siendo esencial en instrumentación, control de actitud y dinámica de cuerpos rígidos.',
    },
    ej1: {
      titulo: 'Precesión de un giroscopio ideal',
      enunciado:
        'Un rotor tiene \\(I=0.020\\,\\text{kg·m}^2\\) y gira a \\(\\omega=200\\,\\text{rad/s}\\). Su centro de masas está a r=0.08 m del punto de apoyo y m=0.50 kg. Estima \\(\\Omega\\).',
      pasos: [
        'Calcula el torque gravitatorio: \\(\\tau\\approx mgr\\).',
        'Calcula \\(L=I\\omega\\).',
        'Aplica \\(\\Omega\\approx\\tau/L\\) y verifica unidades.',
      ],
    },
    ej2: {
      titulo: 'Efecto de aumentar la velocidad de giro',
      enunciado:
        'Manteniendo m, r e I constantes, ¿qué ocurre con \\(\\Omega\\) si \\(\\omega\\) se duplica? Justifica.',
      pasos: [
        'Usa \\(\\Omega\\approx mgr/(I\\omega)\\).',
        'Concluye proporcionalidad inversa con \\(\\omega\\).',
        'Interpreta físicamente: mayor \\(L\\) implica mayor resistencia a cambiar dirección.',
      ],
    },
  },
};

function aplicacionesMd(t) {
  const eq = t.ecuaciones.map((e) => `\\(${e}\\)`).join(', ');
  return `# Aplicaciones

## Aplicaciones científicas y tecnológicas
${t.apps.map((x) => `- ${x}`).join('\n')}

## Qué se calcula en estas aplicaciones
${t.calc.map((x) => `- ${x}`).join('\n')}

## Decisiones de diseño y operación basadas en este subtema
${t.decisions.map((x) => `- ${x}`).join('\n')}

## Lectura didáctica
En este subtema, las aplicaciones reales se sostienen sobre relaciones como ${eq}. El objetivo no es solo obtener un número: es decidir si el modelo elegido describe bien el sistema físico y permite tomar decisiones técnicas con criterio.`;
}

function modelosMd(t) {
  return `# Modelos y validez

## Modelo base del subtema
Este subtema modela ${t.fenomeno}. Se usa un marco clásico, determinista y con parámetros efectivos constantes en el intervalo de análisis.

## Hipótesis operativas
- Unidades SI y conversión explícita cuando sea necesario.
- Ejes, signos y referencia temporal definidos antes de sustituir.
- Sistema bien delimitado (qué entra y qué queda fuera) cuando se trabaja con conservación.
- Coherencia vectorial: componentes por ejes cuando el fenómeno no es estrictamente 1D.

## Qué explica bien este modelo
${t.calc.map((x) => `- ${x}`).join('\n')}

## Límites del modelo
- Si el evento incluye fuerzas externas no despreciables, las leyes de conservación deben corregirse por impulso/torque externo.
- Si hay no linealidades (contactos complejos, fricción variable), el ajuste ideal puede fallar.
- Si el problema es tridimensional, simplificar a 1D sin justificar conduce a errores sistemáticos.

## Señales de que debes cambiar de modelo
- Resultados que violan explícitamente balances: no se conserva \\(\\vec P\\) o \\(\\vec L\\) cuando debería.
- Inconsistencias persistentes de signos o direcciones aun con ejes bien definidos.
- Desviaciones repetidas entre predicción y medida en ensayos comparables.

## Qué, cómo y por qué (cierre didáctico)
- **Qué modela**: el núcleo de ${t.nombre}.
- **Cómo**: con ecuaciones de balance, hipótesis explícitas y consistencia vectorial.
- **Por qué**: porque separa lo esencial (conservación, impulso, torque) de lo accesorio (detalles internos).`;
}

function erroresMd(t) {
  return `# Errores frecuentes

## 1- Error de identificación de magnitudes
${t.errores[0]}

## 2- Error de interpretación física
${t.errores[1]}

## 3- Error de dominio de validez
${t.errores[2]}

## 4- Error de procedimiento y sistema de referencia
${t.errores[3]}

## 5- Error de unidades, dirección y sentido
${t.errores[4]}

## 6- Error de cierre y verificación
${t.errores[5]}

## Cómo evitar estos errores de forma sistemática
- Define variables, ejes y unidades antes de sustituir.
- Comprueba hipótesis del modelo (aislamiento, tipo de choque, perpendicularidad de vectores).
- Cierra siempre reconstruyendo balances (momento, energía si aplica) e interpretando el resultado.`;
}

function historiaMd(t) {
  return `# Historia

## Contexto histórico
${t.historia.contexto}

## Hitos clave
${t.historia.hitos.map((x) => `- ${x}`).join('\n')}

## Relevancia histórica
${t.historia.relevancia}

## Continuidad en la física e ingeniería actuales
${t.historia.continuidad}`;
}

function ejemplosMd(t) {
  return `# Ejemplos guiados

## Ejemplo 1- ${t.ej1.titulo}
**Enunciado:** ${t.ej1.enunciado}

**Pasos de resolución**
1. ${t.ej1.pasos[0]}
2. ${t.ej1.pasos[1]}
3. ${t.ej1.pasos[2]}

## Ejemplo 2- ${t.ej2.titulo}
**Enunciado:** ${t.ej2.enunciado}

**Pasos de resolución**
1. ${t.ej2.pasos[0]}
2. ${t.ej2.pasos[1]}
3. ${t.ej2.pasos[2]}

## Criterio didáctico de cierre
En ambos ejemplos, la clave es justificar hipótesis, mantener consistencia de unidades y verificar el balance adecuado: conservación de momento lineal o de momento angular, y energía cinética solo cuando el modelo lo exige (colisión elástica).`;
}

function leafDirs(rootDir) {
  const out = [];
  for (const ent of fs.readdirSync(rootDir, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const p = path.join(rootDir, ent.name);
    out.push(p);
  }
  return out;
}

// Verificación: aseguramos que cada “rel” exista como carpeta leaf.
for (const [rel, topic] of Object.entries(topics)) {
  const dir = path.join(base, rel);
  if (!fs.existsSync(dir)) {
    console.warn('No existe carpeta:', dir);
    continue;
  }

  fs.writeFileSync(path.join(dir, 'aplicaciones.md'), aplicacionesMd(topic), 'utf8');
  fs.writeFileSync(path.join(dir, 'modelos.md'), modelosMd(topic), 'utf8');
  fs.writeFileSync(path.join(dir, 'errores.md'), erroresMd(topic), 'utf8');
  fs.writeFileSync(path.join(dir, 'historia.md'), historiaMd(topic), 'utf8');
  fs.writeFileSync(path.join(dir, 'ejemplos.md'), ejemplosMd(topic), 'utf8');
}

// También cubrimos leaves existentes en colisiones (por si hay más en el futuro),
// pero solo si están en topics; así evitamos escribir contenido genérico sin personalizar.
for (const colDir of leafDirs(path.join(base, 'conservacion-momento-lineal', 'colisiones'))) {
  const rel = path.relative(base, colDir).replaceAll('\\', '/');
  if (!topics[rel]) {
    // No escribimos: la petición exige personalización por leaf.
    continue;
  }
}

console.log('Tabs de cantidad de movimiento regenerados con estructura homogénea y contenido personalizado.');
