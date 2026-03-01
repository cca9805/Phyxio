import fs from 'node:fs';
import path from 'node:path';

const base = path.resolve('frontend/src/data_v2/fisica-clasica/mecanica/oscilaciones');

const topics = {
  'mhs/ecuacion-movimiento': {
    nombre: 'Ecuación de movimiento del MHS',
    fenomeno: 'la relación entre fuerza restauradora y oscilación armónica en un sistema lineal',
    ecuaciones: ['x(t)=A\\cos(\\omega t+\\varphi)', 'v(t)=-A\\omega\\sin(\\omega t+\\varphi)', 'a(t)=-\\omega^2 x(t)'],
    apps: ['Diseño de sensores inerciales y acelerómetros de pequeña amplitud.', 'Modelado de vibraciones controladas en mecanismos de precisión.', 'Análisis preliminar de oscilaciones en estructuras ligeras.'],
    calc: ['Amplitud, fase inicial y frecuencia angular a partir de condiciones iniciales.', 'Posición, velocidad y aceleración en cualquier instante.', 'Periodo y frecuencia del movimiento.'],
    decisions: ['Validar si la linealización del sistema es razonable.', 'Elegir la forma senoidal más conveniente según datos iniciales.', 'Comprobar coherencia entre signo de aceleración y posición.'],
    errores: ['Confundir frecuencia f con frecuencia angular \\omega.', 'Olvidar que la aceleración siempre apunta hacia el equilibrio.', 'Usar grados en lugar de radianes dentro de funciones trigonométricas.', 'Aplicar MHS cuando la fuerza no es proporcional al desplazamiento.', 'Perder el signo de la fase inicial al ajustar condiciones iniciales.', 'Calcular T sin revisar unidades de \\omega.'],
    historia: {
      contexto: 'El modelo armónico surgió como aproximación universal para oscilaciones pequeñas alrededor del equilibrio.',
      hitos: ['Galileo estudió regularidades temporales del péndulo.', 'Hooke y Newton conectaron elasticidad, fuerza restauradora y dinámica.', 'Euler y Lagrange consolidaron la forma analítica del oscilador armónico.'],
      relevancia: 'Se convirtió en una herramienta central porque aparece en mecánica, ondas, electricidad y física moderna.',
      continuidad: 'Hoy sigue siendo el modelo base para análisis modal, control y vibraciones lineales.'
    },
    ej1: {
      titulo: 'Obtención de estado instantáneo',
      enunciado: 'Un oscilador tiene A=0.08 m, \\omega=10 rad/s y \\varphi=0. Calcula x, v y a en t=0.20 s.',
      pasos: ['Calcula la fase: \\theta=\\omega t+\\varphi=2.0 rad.', 'Aplica x=A\\cos\\theta, v=-A\\omega\\sin\\theta y a=-\\omega^2x.', 'Interpreta el signo de v y a respecto al sentido de retorno al equilibrio.']
    },
    ej2: {
      titulo: 'Reconstrucción desde condiciones iniciales',
      enunciado: 'Si x(0)=0.05 m y v(0)=0.30 m/s con \\omega=6 rad/s, determina A y \\varphi.',
      pasos: ['Usa x(0)=A\\cos\\varphi y v(0)=-A\\omega\\sin\\varphi.', 'Resuelve el sistema para obtener A y \\varphi con cuadrante correcto.', 'Escribe x(t) completo y verifica sustituyendo t=0.']
    }
  },
  'mhs/energia-en-mhs': {
    nombre: 'Energía en MHS',
    fenomeno: 'el intercambio periódico entre energía potencial elástica y energía cinética',
    ecuaciones: ['E=K+U=\\tfrac12 kA^2', 'K=\\tfrac12 mv^2', 'U=\\tfrac12 kx^2'],
    apps: ['Estimación de fatiga en sistemas vibratorios.', 'Diseño de amortiguación a partir de energía acumulada por ciclo.', 'Calibración de osciladores mecánicos y resonadores.'],
    calc: ['Energía mecánica total a partir de A o de estado instantáneo.', 'Fracción de energía cinética y potencial en cada posición.', 'Velocidad máxima y energía máxima almacenada.'],
    decisions: ['Elegir variable de entrada más estable (A, x o v).', 'Validar conservación de energía en ausencia de disipación.', 'Detectar pérdidas cuando el experimento no conserva E.'],
    errores: ['Suponer que K y U son constantes durante el ciclo.', 'Usar U=mgx en lugar de U=\\tfrac12 kx^2 para muelle lineal.', 'Olvidar que E depende de A y no del instante.', 'Confundir v máxima con velocidad media.', 'No revisar unidades de k en N/m.', 'Concluir “no hay energía potencial” en x=0 sin justificar contexto.'],
    historia: {
      contexto: 'La visión energética permitió interpretar el MHS sin resolver toda la ecuación diferencial en cada caso.',
      hitos: ['Leibniz introdujo la energía cinética como magnitud de estado dinámico.', 'La mecánica analítica formalizó conservación y transferencia energética.', 'La teoría de oscilaciones adoptó este lenguaje para comparar sistemas distintos.'],
      relevancia: 'Facilitó una lectura unificada de vibraciones mecánicas, eléctricas y ondulatorias.',
      continuidad: 'Hoy es clave en ingeniería de vibraciones, control y análisis modal.'
    },
    ej1: {
      titulo: 'Energía total desde amplitud',
      enunciado: 'Con k=180 N/m y A=0.05 m, calcula la energía mecánica total.',
      pasos: ['Usa E=\\tfrac12 kA^2.', 'Sustituye en SI y calcula E.', 'Interpreta el resultado como cota máxima de intercambio K-U.']
    },
    ej2: {
      titulo: 'Distribución energética en posición dada',
      enunciado: 'Para k=120 N/m, m=0.8 kg y A=0.10 m, calcula U, K y v cuando x=0.06 m.',
      pasos: ['Calcula E=\\tfrac12 kA^2.', 'Obtén U=\\tfrac12 kx^2 y luego K=E-U.', 'Despeja v desde K=\\tfrac12 mv^2 y valida que x<A.']
    }
  },
  'mhs/fase': {
    nombre: 'Fase en MHS',
    fenomeno: 'la posición dentro del ciclo oscilatorio y la sincronización entre osciladores',
    ecuaciones: ['\\theta(t)=\\omega t+\\varphi', 'x=A\\cos\\theta', '\\Delta\\varphi=\\varphi_2-\\varphi_1'],
    apps: ['Sincronización de vibraciones en maquinaria rotativa.', 'Comparación de señales oscilatorias en instrumentación.', 'Diagnóstico de desfases en sistemas de control.'],
    calc: ['Fase instantánea y estado cinemático asociado.', 'Desfase temporal entre osciladores con igual frecuencia.', 'Interpretación de adelanto o retraso de señal.'],
    decisions: ['Elegir referencia temporal común antes de comparar fases.', 'Expresar fase siempre en radianes para cálculo.', 'Determinar correctamente el cuadrante al reconstruir fase.'],
    errores: ['Confundir fase con frecuencia.', 'Usar desfase sin indicar convención de signo.', 'Comparar fases de osciladores con distinta frecuencia como si fuera constante.', 'Olvidar sumar fase inicial al término \\omega t.', 'Perder periodicidad al no reducir módulo 2\\pi.', 'Mezclar grados y radianes en la misma resolución.'],
    historia: {
      contexto: 'El concepto de fase nació al estudiar fenómenos periódicos donde la posición en el ciclo era tan importante como la amplitud.',
      hitos: ['Fourier consolidó la representación de señales periódicas por componentes armónicas.', 'La teoría de ondas convirtió la fase en variable central de interferencia.', 'La instrumentación moderna formalizó medición de fase y desfase.'],
      relevancia: 'Es imprescindible para entender sincronía, interferencia y transmisión de información periódica.',
      continuidad: 'Sigue siendo base en electrónica, vibraciones y procesamiento de señales.'
    },
    ej1: {
      titulo: 'Fase instantánea y estado',
      enunciado: 'Con A=0.03 m, \\omega=15 rad/s, \\varphi=0.4 rad, calcula \\theta y x en t=0.12 s.',
      pasos: ['Evalúa \\theta=\\omega t+\\varphi.', 'Sustituye en x=A\\cos\\theta.', 'Interpreta si el oscilador está cerca de cresta, valle o cruce.']
    },
    ej2: {
      titulo: 'Desfase entre dos osciladores',
      enunciado: 'Dos osciladores tienen misma \\omega y fases iniciales 0.2 rad y 1.1 rad. Calcula el desfase y quién adelanta.',
      pasos: ['Calcula \\Delta\\varphi=\\varphi_2-\\varphi_1.', 'Evalúa el signo para identificar adelanto/atraso.', 'Convierte el desfase en fracción de periodo: \\Delta t=\\Delta\\varphi/\\omega.']
    }
  },
  'oscilador-masa-muelle': {
    nombre: 'Oscilador masa-muelle',
    fenomeno: 'la oscilación de una masa unida a un muelle lineal bajo fuerza restauradora de Hooke',
    ecuaciones: ['F=-kx', '\\omega=\\sqrt{k/m}', 'T=2\\pi\\sqrt{m/k}'],
    apps: ['Aislamiento vibratorio en instrumentación.', 'Diseño de suspensiones mecánicas simplificadas.', 'Calibración de constantes elásticas en laboratorio.'],
    calc: ['Periodo natural y frecuencia.', 'Respuesta cinemática para condiciones iniciales dadas.', 'Energía almacenada y fuerza restauradora máxima.'],
    decisions: ['Verificar linealidad del muelle en rango de trabajo.', 'Elegir masa y rigidez para evitar resonancias no deseadas.', 'Controlar amplitud para mantener régimen lineal.'],
    errores: ['Usar ley de Hooke fuera del rango elástico.', 'Confundir elongación desde equilibrio con longitud total.', 'Olvidar convertir k a N/m.', 'Aplicar fórmula de péndulo a sistema masa-muelle.', 'Despreciar masa efectiva del muelle cuando no corresponde.', 'No comprobar compatibilidad entre T, f y \\omega.'],
    historia: {
      contexto: 'El oscilador masa-muelle fue uno de los primeros sistemas mecánicos donde se conectó ley constitutiva y dinámica temporal.',
      hitos: ['Hooke estableció proporcionalidad fuerza-deformación en régimen elástico.', 'Newton formalizó ecuaciones de movimiento para fuerzas restauradoras.', 'La ingeniería del siglo XX lo adoptó como modelo base de vibraciones.'],
      relevancia: 'Es el arquetipo más usado para introducir oscilaciones en física e ingeniería.',
      continuidad: 'Sigue siendo referencia en diseño de dispositivos mecánicos y análisis modal.'
    },
    ej1: {
      titulo: 'Periodo natural de diseño',
      enunciado: 'Para m=0.50 kg y k=200 N/m, calcula \\omega y T.',
      pasos: ['Calcula \\omega=\\sqrt{k/m}.', 'Obtén T=2\\pi/\\omega.', 'Comprueba orden de magnitud físico del resultado.']
    },
    ej2: {
      titulo: 'Fuerza restauradora máxima',
      enunciado: 'Con k=150 N/m y amplitud A=0.04 m, calcula la fuerza máxima y la energía total.',
      pasos: ['Evalúa F_max=kA.', 'Calcula E=\\tfrac12kA^2.', 'Relaciona ambos resultados con el rango operativo del sistema.']
    }
  },
  'pendulo-simple': {
    nombre: 'Péndulo simple',
    fenomeno: 'la oscilación angular de una masa puntual suspendida bajo gravedad para ángulos pequeños',
    ecuaciones: ['\\omega_0=\\sqrt{g/L}', 'T=2\\pi\\sqrt{L/g}', '\\ddot\\theta+\\frac{g}{L}\\theta=0'],
    apps: ['Cronometraje y osciladores gravitatorios.', 'Estimación local de g en prácticas de laboratorio.', 'Modelado básico de oscilaciones angulares de baja amplitud.'],
    calc: ['Periodo en función de longitud.', 'Frecuencia natural y fase angular.', 'Sensibilidad del periodo a cambios en L o g.'],
    decisions: ['Verificar condición de pequeño ángulo.', 'Elegir longitud para el rango de periodo deseado.', 'Controlar fricción para aproximar sistema ideal.'],
    errores: ['Aplicar fórmula exacta de pequeño ángulo a amplitudes grandes.', 'Usar longitud de cuerda sin incluir punto de suspensión al centro de masa.', 'Confundir periodo con semiperiodo.', 'Tomar g constante en cualquier contexto sin justificar.', 'Mezclar grados y radianes en ecuación diferencial linealizada.', 'Despreciar amortiguamiento cuando domina el experimento.'],
    historia: {
      contexto: 'El péndulo simple fue clave en el nacimiento de la física cuantitativa del tiempo y del movimiento periódico.',
      hitos: ['Galileo observó isocronismo aproximado para pequeñas amplitudes.', 'Huygens mejoró teoría y aplicaciones horológicas.', 'La mecánica clásica formalizó su ecuación diferencial linealizada.'],
      relevancia: 'Conecta geometría, gravedad y dinámica en un sistema altamente didáctico.',
      continuidad: 'Sigue siendo estándar en docencia y calibración básica de instrumentos.'
    },
    ej1: {
      titulo: 'Periodo con longitud conocida',
      enunciado: 'Un péndulo de L=0.90 m oscila en la Tierra. Calcula T y f.',
      pasos: ['Aplica T=2\\pi\\sqrt{L/g}.', 'Calcula f=1/T.', 'Interpreta si el valor es razonable para laboratorio escolar.']
    },
    ej2: {
      titulo: 'Longitud para periodo objetivo',
      enunciado: 'Diseña un péndulo con T=2.2 s en g=9.81 m/s². Halla L.',
      pasos: ['Despeja L=g(T/2\\pi)^2.', 'Sustituye en SI.', 'Discute margen de error por amplitud no pequeña.']
    }
  },
  'pendulo-fisico': {
    nombre: 'Péndulo físico',
    fenomeno: 'la oscilación de un cuerpo rígido alrededor de un eje, gobernada por su inercia rotacional',
    ecuaciones: ['\\omega_0=\\sqrt{mgd/I}', 'T=2\\pi\\sqrt{I/(mgd)}', '\\tau=-mgd\\sin\\theta'],
    apps: ['Diseño de sistemas oscilantes con cuerpos extendidos.', 'Identificación experimental de momentos de inercia.', 'Análisis de estabilidad de elementos articulados.'],
    calc: ['Periodo natural desde geometría e inercia.', 'Influencia de d e I en la rapidez de oscilación.', 'Comparación entre péndulo simple equivalente y péndulo físico real.'],
    decisions: ['Elegir eje de giro y distancia d con precisión geométrica.', 'Usar aproximación de pequeño ángulo cuando proceda.', 'Incluir pérdidas si el decaimiento es apreciable.'],
    errores: ['Sustituir L del péndulo simple directamente por longitud física del cuerpo.', 'Usar I respecto a eje incorrecto.', 'Olvidar teorema de ejes paralelos cuando corresponde.', 'Confundir d con longitud total del objeto.', 'Aplicar linealización con amplitudes excesivas.', 'No validar unidades en I/(mgd).'],
    historia: {
      contexto: 'El péndulo físico generalizó el péndulo simple al caso real de cuerpos extensos.',
      hitos: ['Euler y Lagrange formalizaron el tratamiento de sólidos rígidos en rotación.', 'La teoría de momentos de inercia permitió predecir periodos de cuerpos complejos.', 'La instrumentación moderna usa este modelo para caracterización dinámica.'],
      relevancia: 'Es puente directo entre oscilaciones y dinámica rotacional.',
      continuidad: 'Se usa en ingeniería estructural, biomecánica y diseño mecánico.'
    },
    ej1: {
      titulo: 'Periodo de barra oscilante',
      enunciado: 'Una barra con I=0.32 kg·m², m=2.5 kg y d=0.18 m oscila en g=9.81 m/s². Calcula T.',
      pasos: ['Calcula \\omega_0=\\sqrt{mgd/I}.', 'Obtén T=2\\pi/\\omega_0.', 'Comenta cómo cambiaría T si d aumenta.']
    },
    ej2: {
      titulo: 'Comparación con péndulo simple equivalente',
      enunciado: 'Para el sistema anterior, calcula la longitud equivalente L_eq=I/(md).',
      pasos: ['Evalúa L_eq con datos.', 'Compara T con el de un péndulo simple de longitud L_eq.', 'Interpreta la equivalencia y sus límites.']
    }
  },
  'pendulo-fisico-avanzado': {
    nombre: 'Péndulo físico avanzado',
    fenomeno: 'la dinámica no lineal y el ajuste fino del péndulo físico fuera del régimen elemental',
    ecuaciones: ['\\ddot\\theta+\\frac{mgd}{I}\\sin\\theta=0', 'T(\\theta_0)\\approx T_0\\left(1+\\frac{\\theta_0^2}{16}+...\\right)', 'I_O=I_G+md^2'],
    apps: ['Caracterización avanzada de osciladores en laboratorio universitario.', 'Análisis de no linealidades en sistemas rotacionales reales.', 'Calibración de parámetros inerciales por ajuste de datos experimentales.'],
    calc: ['Corrección del periodo por amplitud finita.', 'Ajuste de I y d desde medidas de T.', 'Evaluación de sensibilidad y propagación de incertidumbre.'],
    decisions: ['Elegir modelo lineal o no lineal según amplitud.', 'Decidir cuándo usar expansión o integración numérica.', 'Separar efectos de amortiguamiento y no linealidad.'],
    errores: ['Usar T lineal para amplitudes grandes sin corrección.', 'Ignorar dependencia de T con \\theta_0.', 'Aplicar eje paralelo sin referencia geométrica clara.', 'Ajustar parámetros sin análisis de incertidumbre.', 'Confundir error sistemático de medida con efecto físico real.', 'No reportar dominio de validez del ajuste.'],
    historia: {
      contexto: 'La versión avanzada surge al estudiar desviaciones experimentales del modelo lineal de pequeño ángulo.',
      hitos: ['La teoría de funciones elípticas describió periodos exactos en no linealidad.', 'La mecánica analítica extendió el modelo a oscilaciones finitas.', 'La computación moderna permitió simulación precisa y ajuste paramétrico.'],
      relevancia: 'Permite pasar de teoría ideal a modelado de laboratorio de nivel universitario.',
      continuidad: 'Es referencia en identificación dinámica y análisis no lineal en ingeniería.'
    },
    ej1: {
      titulo: 'Corrección por amplitud finita',
      enunciado: 'Para T0=1.80 s y amplitud inicial 0.50 rad, estima T corregido con primer término.',
      pasos: ['Usa T\\approx T0(1+\\theta_0^2/16).', 'Sustituye \\theta_0 en radianes.', 'Compara con T0 y cuantifica el incremento porcentual.']
    },
    ej2: {
      titulo: 'Cálculo de inercia por periodo medido',
      enunciado: 'Con m=1.8 kg, d=0.22 m y T medido=2.05 s, estima I usando modelo lineal.',
      pasos: ['Despeja I desde T=2\\pi\\sqrt{I/(mgd)}.', 'Sustituye datos y calcula I.', 'Discute si la amplitud experimental permite usar este modelo.']
    }
  },
  'amortiguamiento/subamortiguado': {
    nombre: 'Régimen subamortiguado',
    fenomeno: 'oscilaciones con amplitud decreciente por disipación moderada',
    ecuaciones: ['x(t)=A_0e^{-\\beta t}\\cos(\\omega_d t+\\varphi)', '\\omega_d=\\sqrt{\\omega_0^2-\\beta^2}', '0<\\zeta<1'],
    apps: ['Diseño de sistemas con vibración controlada y decaimiento gradual.', 'Análisis de confort en suspensión mecánica.', 'Ajuste de coeficientes de amortiguamiento en prototipos.'],
    calc: ['Frecuencia amortiguada y constante de decaimiento.', 'Número de ciclos visibles antes de atenuación significativa.', 'Razón logarítmica de decremento entre picos.'],
    decisions: ['Escoger amortiguamiento para evitar oscilación persistente excesiva.', 'Mantener respuesta rápida sin pasar a sobreamortiguado.', 'Estimar \\zeta a partir de ensayos experimentales.'],
    errores: ['Confundir \\omega_d con \\omega_0.', 'Tomar amplitud constante en presencia de disipación.', 'Usar régimen subamortiguado cuando \\zeta\\ge1.', 'Olvidar el factor exponencial en cálculos de picos.', 'Ajustar \\beta sin verificar unidades.', 'Interpretar decrecimiento no exponencial con este modelo sin validar.'],
    historia: {
      contexto: 'El estudio del amortiguamiento permitió modelar sistemas reales donde la energía no se conserva ciclo a ciclo.',
      hitos: ['Rayleigh formalizó tratamientos energéticos de disipación.', 'La ingeniería mecánica incorporó modelos viscosos lineales.', 'La teoría de control adoptó \\zeta como parámetro de diseño estándar.'],
      relevancia: 'Es el régimen más frecuente en aplicaciones reales de vibración.',
      continuidad: 'Sigue siendo base en diseño de suspensiones y servosistemas.'
    },
    ej1: {
      titulo: 'Frecuencia amortiguada',
      enunciado: 'Con \\omega0=12 rad/s y \\beta=3 rad/s, calcula \\omega_d.',
      pasos: ['Verifica condición \\beta<\\omega0.', 'Aplica \\omega_d=\\sqrt{\\omega_0^2-\\beta^2}.', 'Interpreta diferencia entre frecuencia natural y amortiguada.']
    },
    ej2: {
      titulo: 'Amplitud tras cierto tiempo',
      enunciado: 'Si A0=0.05 m y \\beta=0.4 s^-1, calcula envolvente a t=5 s.',
      pasos: ['Usa A(t)=A0e^{-\\beta t}.', 'Sustituye y calcula valor numérico.', 'Interpreta pérdida relativa de amplitud.']
    }
  },
  'amortiguamiento/critico': {
    nombre: 'Amortiguamiento crítico',
    fenomeno: 'retorno al equilibrio en el menor tiempo sin oscilaciones',
    ecuaciones: ['\\zeta=1', 'x(t)=(C_1+C_2t)e^{-\\omega_0 t}', 'c_{crit}=2\\sqrt{km}'],
    apps: ['Diseño de cierres, compuertas y mecanismos sin sobreoscilación.', 'Ajuste de amortiguadores de instrumentos de medida.', 'Control de respuesta transitoria en sistemas mecánicos lineales.'],
    calc: ['Coeficiente crítico de amortiguamiento.', 'Constantes de respuesta desde condiciones iniciales.', 'Tiempo de establecimiento sin oscilación.'],
    decisions: ['Ajustar c cerca de c_crit para equilibrio rápido sin rebote.', 'Comparar costo de sobreamortiguar frente a requisito temporal.', 'Validar linealidad del amortiguamiento equivalente.'],
    errores: ['Confundir “crítico” con “máximo amortiguamiento”.', 'Esperar oscilaciones en \\zeta=1.', 'Usar solución subamortiguada en este régimen.', 'Ignorar condiciones iniciales al determinar C1 y C2.', 'No distinguir c real de c_crit en diseño.', 'Evaluar rapidez sin métrica temporal objetiva.'],
    historia: {
      contexto: 'El régimen crítico apareció como solución óptima entre rapidez y ausencia de oscilación.',
      hitos: ['La teoría lineal de segundo orden clasificó regímenes por raíces características.', 'La ingeniería de control consolidó \\zeta=1 como referencia de diseño.', 'Se generalizó en instrumentación para evitar sobrepaso.'],
      relevancia: 'Es criterio estándar en respuesta transitoria de muchos sistemas físicos.',
      continuidad: 'Se aplica en amortiguadores, actuadores y sistemas de posicionamiento.'
    },
    ej1: {
      titulo: 'Cálculo de amortiguamiento crítico',
      enunciado: 'Para k=400 N/m y m=1.5 kg, calcula c_crit.',
      pasos: ['Aplica c_crit=2\\sqrt{km}.', 'Sustituye en SI.', 'Interpreta el valor para selección de amortiguador.']
    },
    ej2: {
      titulo: 'Clasificación de régimen',
      enunciado: 'Si c=40 N·s/m y c_crit=49 N·s/m, clasifica régimen y justifica.',
      pasos: ['Calcula \\zeta=c/c_crit.', 'Compara con 1.', 'Concluye comportamiento esperado en el tiempo.']
    }
  },
  'amortiguamiento/sobreamortiguado': {
    nombre: 'Régimen sobreamortiguado',
    fenomeno: 'retorno no oscilatorio lento por disipación elevada',
    ecuaciones: ['\\zeta>1', 'x(t)=C_1e^{r_1 t}+C_2e^{r_2 t}', 'r_{1,2}=-\\omega_0(\\zeta\\pm\\sqrt{\\zeta^2-1})'],
    apps: ['Sistemas donde se prioriza estabilidad absoluta frente a rapidez.', 'Dispositivos de cierre pesado o seguridad mecánica.', 'Filtrado mecánico de vibraciones con alta disipación.'],
    calc: ['Raíces reales del sistema y constantes de respuesta.', 'Tiempo característico de retorno.', 'Comparación de velocidad de asentamiento frente a crítico.'],
    decisions: ['Aceptar respuesta más lenta para eliminar oscilaciones.', 'Dimensionar c según restricciones de seguridad.', 'Verificar que la lentitud no invalida requisitos funcionales.'],
    errores: ['Creer que más amortiguamiento siempre mejora desempeño.', 'Usar solución crítica para \\zeta>1.', 'No distinguir los dos exponentes de decaimiento.', 'Interpretar ausencia de oscilación como respuesta rápida.', 'No revisar impacto de c en consumo/actuación.', 'Omitir comparación con régimen crítico.'],
    historia: {
      contexto: 'El régimen sobreamortiguado se incorporó al diseño cuando la prioridad pasó a ser evitar cualquier oscilación residual.',
      hitos: ['Clasificación de regímenes en ecuaciones diferenciales lineales de segundo orden.', 'Aplicación en ingeniería civil y mecánica de seguridad.', 'Uso extendido en actuadores y sistemas de contención.'],
      relevancia: 'Es clave cuando la robustez frente a oscilación prima sobre la rapidez.',
      continuidad: 'Se mantiene en diseño de mecanismos críticos y amortiguación pasiva.'
    },
    ej1: {
      titulo: 'Identificación del régimen',
      enunciado: 'Con c=90 N·s/m y c_crit=60 N·s/m, clasifica el sistema y describe la respuesta.',
      pasos: ['Calcula \\zeta=c/c_crit.', 'Compara \\zeta con 1.', 'Describe cualitativamente la evolución temporal.']
    },
    ej2: {
      titulo: 'Comparación temporal con crítico',
      enunciado: 'Dos sistemas con misma m y k: uno crítico y otro sobreamortiguado (\\zeta=1.8). ¿Cuál tarda más en asentarse?',
      pasos: ['Usa criterio cualitativo de raíces reales separadas para \\zeta>1.', 'Compara con caso crítico.', 'Justifica por qué la respuesta sobreamortiguada es más lenta.']
    }
  },
  'forzadas-y-resonancia/fuerza-forzada': {
    nombre: 'Oscilación forzada',
    fenomeno: 'respuesta estacionaria y transitoria de un oscilador excitado externamente',
    ecuaciones: ['m\\ddot x+c\\dot x+kx=F_0\\cos(\\omega t)', 'X(\\omega)=\\frac{F_0}{\\sqrt{(k-m\\omega^2)^2+(c\\omega)^2}}', '\\tan\\phi=\\frac{c\\omega}{k-m\\omega^2}'],
    apps: ['Diseño de aislamiento ante excitaciones periódicas.', 'Análisis de maquinaria sometida a fuerzas armónicas.', 'Identificación de parámetros dinámicos por barrido en frecuencia.'],
    calc: ['Amplitud estacionaria en función de frecuencia de excitación.', 'Desfase entre fuerza aplicada y respuesta.', 'Separación entre transitorio y régimen permanente.'],
    decisions: ['Evitar operar cerca de picos de amplitud.', 'Ajustar c para reducir sensibilidad a excitación externa.', 'Elegir banda segura de operación en frecuencia.'],
    errores: ['Confundir frecuencia natural con frecuencia de forzado.', 'Analizar solo estado inicial sin separar transitorio.', 'Ignorar desfase en interpretación de respuesta.', 'Usar fórmula de resonancia exacta en sistemas muy amortiguados sin validar.', 'No revisar unidades de F0, c y k.', 'Concluir estabilidad por amplitud baja sin revisar fase y energía.'],
    historia: {
      contexto: 'La oscilación forzada se volvió central al pasar de sistemas aislados a sistemas reales excitados por el entorno.',
      hitos: ['Helmholtz y Rayleigh estudiaron respuestas en acústica y vibraciones.', 'La teoría de circuitos RLC consolidó analogías mecánico-eléctricas.', 'La ingeniería de control formalizó respuesta en frecuencia.'],
      relevancia: 'Permite predecir vibraciones inducidas y diseñar mitigación.',
      continuidad: 'Es base de análisis modal experimental y mantenimiento predictivo.'
    },
    ej1: {
      titulo: 'Amplitud estacionaria',
      enunciado: 'Con m=1 kg, c=2 N·s/m, k=100 N/m, F0=10 N y \\omega=8 rad/s, calcula X(\\omega).',
      pasos: ['Evalúa términos dinámicos (k-m\\omega^2) y c\\omega.', 'Sustituye en X(\\omega).', 'Interpreta magnitud de respuesta respecto a F0/k.']
    },
    ej2: {
      titulo: 'Desfase de la respuesta',
      enunciado: 'Con los mismos datos, calcula \\phi y explica si la respuesta adelanta o atrasa.',
      pasos: ['Usa \\tan\\phi=(c\\omega)/(k-m\\omega^2).', 'Determina cuadrante físico de fase.', 'Relaciona desfase con cercanía al régimen resonante.']
    }
  },
  'forzadas-y-resonancia/resonancia': {
    nombre: 'Resonancia',
    fenomeno: 'amplificación de respuesta cuando la excitación se aproxima a la frecuencia natural efectiva',
    ecuaciones: ['\\omega_r\\approx\\sqrt{\\omega_0^2-2\\beta^2}', 'Q\\approx\\frac{\\omega_0}{2\\beta}', 'X_{max}\\propto\\frac{1}{c}'],
    apps: ['Prevención de fallos por vibración excesiva en estructuras y máquinas.', 'Diseño de resonadores útiles en sensores y filtrado.', 'Planificación de bandas de operación fuera de picos resonantes.'],
    calc: ['Frecuencia de resonancia aproximada.', 'Factor de calidad y ancho de banda.', 'Ganancia de amplitud cerca del pico.'],
    decisions: ['Aumentar amortiguamiento para bajar pico resonante.', 'Separar frecuencia de operación de \\omega_r.', 'Establecer umbrales seguros de amplitud y fatiga.'],
    errores: ['Creer que resonancia solo ocurre con amortiguamiento nulo.', 'Confundir \\omega_r con \\omega_0 en cualquier condición.', 'No cuantificar ancho de banda al evaluar riesgo.', 'Tomar pico de laboratorio como universal sin incertidumbre.', 'Ignorar efectos no lineales a gran amplitud.', 'Omitir análisis energético durante operación continua.'],
    historia: {
      contexto: 'La resonancia pasó de curiosidad experimental a criterio crítico de seguridad e ingeniería.',
      hitos: ['Estudios en acústica y puentes revelaron amplificación peligrosa.', 'La teoría lineal y el factor Q permitieron cuantificar el fenómeno.', 'La ingeniería moderna incorporó resonancia en normas de diseño dinámico.'],
      relevancia: 'Es uno de los conceptos más determinantes en vibraciones aplicadas.',
      continuidad: 'Sigue guiando diseño de estructuras, dispositivos MEMS y sistemas de potencia.'
    },
    ej1: {
      titulo: 'Estimación de frecuencia resonante',
      enunciado: 'Con \\omega0=20 rad/s y \\beta=2 rad/s, estima \\omega_r.',
      pasos: ['Verifica régimen subamortiguado.', 'Aplica \\omega_r\\approx\\sqrt{\\omega_0^2-2\\beta^2}.', 'Compara con \\omega0 y comenta desplazamiento del pico.']
    },
    ej2: {
      titulo: 'Evaluación de selectividad',
      enunciado: 'Si \\omega0=50 rad/s y \\beta=1 rad/s, calcula Q aproximado e interpreta.',
      pasos: ['Usa Q\\approx\\omega0/(2\\beta).', 'Calcula valor numérico.', 'Relaciona Q con ancho de banda y sensibilidad resonante.']
    }
  }
};

function aplicacionesMd(t) {
  const eq = t.ecuaciones.map((e) => `\\(${e}\\)`).join(', ');
  return `# Aplicaciones\n\n## Aplicaciones científicas y tecnológicas\n${t.apps.map((x) => `- ${x}`).join('\n')}\n\n## Qué se calcula en estas aplicaciones\n${t.calc.map((x) => `- ${x}`).join('\n')}\n\n## Decisiones de diseño y operación basadas en este subtema\n${t.decisions.map((x) => `- ${x}`).join('\n')}\n\n## Lectura didáctica\nEn este subtema, las aplicaciones reales se sostienen sobre relaciones como ${eq}. El objetivo no es solo obtener un número: es decidir si el modelo elegido describe bien el sistema físico y permite tomar decisiones técnicas con criterio.`;
}

function modelosMd(t) {
  return `# Modelos y validez\n\n## Modelo base del subtema\nEste subtema modela ${t.fenomeno}. Se usa un marco clásico, determinista y con parámetros efectivos constantes en el intervalo de análisis.\n\n## Hipótesis operativas\n- Régimen de pequeñas perturbaciones cuando la linealización lo exige.\n- Parámetros del sistema aproximadamente constantes durante el ensayo o problema.\n- Unidades SI y definición explícita de ejes, signos y referencia temporal.\n\n## Qué explica bien este modelo\n${t.calc.map((x) => `- ${x}`).join('\n')}\n\n## Límites del modelo\n- Si aparecen no linealidades fuertes, el modelo lineal pierde precisión.\n- Si el amortiguamiento real no es equivalente al supuesto, cambian amplitud y fase.\n- Si hay acoplamientos externos relevantes, se requiere un modelo de mayor orden.\n\n## Señales de que debes cambiar de modelo\n- Desviaciones sistemáticas entre medida y predicción en más de un ciclo.\n- Dependencia clara de parámetros con amplitud o frecuencia fuera del marco esperado.\n- Incoherencias físicas persistentes aun con unidades y signos correctos.`;
}

function erroresMd(t) {
  return `# Errores frecuentes\n\n## 1- Error de identificación de variables\n${t.errores[0]}\n\n## 2- Error de interpretación física\n${t.errores[1]}\n\n## 3- Error de dominio de validez\n${t.errores[2]}\n\n## 4- Error de procedimiento algebraico\n${t.errores[3]}\n\n## 5- Error de unidades y parámetros\n${t.errores[4]}\n\n## 6- Error de cierre de resolución\n${t.errores[5]}\n\n## Cómo evitar estos errores de forma sistemática\n- Define variables y unidades antes de sustituir.\n- Comprueba hipótesis del modelo antes de calcular.\n- Cierra siempre con verificación física del resultado.`;
}

function historiaMd(t) {
  return `# Historia\n\n## Contexto histórico\n${t.historia.contexto}\n\n## Hitos clave\n${t.historia.hitos.map((x) => `- ${x}`).join('\n')}\n\n## Relevancia histórica\n${t.historia.relevancia}\n\n## Continuidad en la física e ingeniería actuales\n${t.historia.continuidad}`;
}

function ejemplosMd(t) {
  return `# Ejemplos guiados\n\n## Ejemplo 1- ${t.ej1.titulo}\n**Enunciado:** ${t.ej1.enunciado}\n\n**Pasos de resolución**\n1. ${t.ej1.pasos[0]}\n2. ${t.ej1.pasos[1]}\n3. ${t.ej1.pasos[2]}\n\n## Ejemplo 2- ${t.ej2.titulo}\n**Enunciado:** ${t.ej2.enunciado}\n\n**Pasos de resolución**\n1. ${t.ej2.pasos[0]}\n2. ${t.ej2.pasos[1]}\n3. ${t.ej2.pasos[2]}\n\n## Criterio didáctico de cierre\nEn ambos ejemplos, la clave es justificar hipótesis, mantener consistencia de unidades y verificar que el resultado describe de forma coherente el comportamiento oscilatorio esperado.`;
}

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

console.log('Tabs de oscilaciones regenerados con estructura homogénea y contenido personalizado.');

