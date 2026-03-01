const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = 'src/data_v2/fisica-clasica/mecanica/oscilaciones';

const PROFILE = {
  'ecuacion-movimiento': ['Ecuación de movimiento en MHS', 'La ecuación del MHS permite conocer el estado completo del oscilador en cualquier instante.', 'La fuerza restauradora lineal devuelve al equilibrio y genera oscilación sinusoidal.', '🧭', 2, 55],
  'energia-en-mhs': ['Energía en MHS', 'La energía total ideal se conserva y alterna entre forma cinética y potencial.', 'En equilibrio domina K y en extremos domina U, sin pérdidas en modelo ideal.', '⚡', 2, 55],
  fase: ['Fase en oscilaciones', 'La fase indica en qué punto del ciclo está el sistema y permite comparar oscilaciones.', 'El avance de fase depende de ω y traduce tiempo en ángulo físico.', '🌀', 2, 50],
  'oscilador-masa-muelle': ['Oscilador masa-muelle', 'Sistema prototipo para entender oscilaciones lineales en mecánica.', 'Ley de Hooke e inercia determinan período y frecuencia natural.', '🧲', 2, 60],
  'pendulo-simple': ['Péndulo simple', 'Para ángulos pequeños se comporta como oscilador armónico angular.', 'La gravedad aporta torque restaurador y aparece dinámica periódica.', '🪀', 2, 60],
  subamortiguado: ['Régimen subamortiguado', 'La oscilación persiste con envolvente decreciente exponencial.', 'La disipación extrae energía, pero no elimina de inmediato la oscilación.', '📉', 3, 55],
  critico: ['Amortiguamiento crítico', 'Retorno más rápido al equilibrio sin oscilaciones.', 'Está en el umbral exacto entre oscilación y sobreamortiguamiento.', '🧯', 3, 50],
  sobreamortiguado: ['Régimen sobreamortiguado', 'No hay oscilación y la respuesta es más lenta que la crítica.', 'La disipación alta produce suma de decaimientos exponenciales reales.', '🛑', 3, 50],
  'fuerza-forzada': ['Oscilación forzada', 'Una excitación periódica externa fija amplitud y desfase estacionarios.', 'Tras el transitorio, la respuesta vibra a la frecuencia de forzado.', '🎛️', 3, 60],
  resonancia: ['Resonancia', 'Cerca de la frecuencia característica la amplitud puede crecer de forma crítica.', 'La transferencia de energía por ciclo se maximiza cerca del pico resonante.', '📡', 3, 60],
  'pendulo-fisico/            (avanzado)': ['Péndulo físico (avanzado)', 'Oscila un cuerpo rígido completo: importa el momento de inercia.', 'El torque gravitatorio y la inercia rotacional gobiernan la dinámica angular.', '🧱', 4, 65],
  'pendulo-fisico-avanzado': ['Péndulo físico (avanzado)', 'Oscila un cuerpo rígido completo: importa el momento de inercia.', 'El torque gravitatorio y la inercia rotacional gobiernan la dinámica angular.', '🧱', 4, 65],
};

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(full));
    else out.push(full);
  }
  return out;
}

function varsText(mags) {
  return mags.map((m) => `- \\(${m.symbol || m.simbolo || m.id}\\): ${m.nombre || m.id} (${m.unidad_si || m.unidad || 'SI'}). ${m.descripcion || ''}`).join('\n');
}

function formulasText(forms) {
  return forms.map((f) => `**${f.title || f.titulo || f.id}:**\n\n$$\n${f.latex || f.formula_latex || f.equation}\n$$`).join('\n\n');
}
for (const metaPath of walk(ROOT).filter((f) => f.endsWith('meta.yaml'))) {
  const dir = path.dirname(metaPath);
  const foPath = path.join(dir, 'formulas.yaml');
  const maPath = path.join(dir, 'magnitudes.yaml');

  const meta = yaml.load(fs.readFileSync(metaPath, 'utf8')) || {};
  const key = meta.id;
  if (!PROFILE[key]) continue;

  const [titulo, idea, mecanismo, icono, dificultad, tiempo] = PROFILE[key];
  const formulasDoc = yaml.load(fs.readFileSync(foPath, 'utf8')) || {};
  const magnitudesDoc = yaml.load(fs.readFileSync(maPath, 'utf8')) || {};
  const forms = Array.isArray(formulasDoc.formulas) ? formulasDoc.formulas : [];
  const mags = Array.isArray(magnitudesDoc.magnitudes) ? magnitudesDoc.magnitudes : [];

  formulasDoc.version = 1;
  formulasDoc.topic = { id: formulasDoc.topic?.id || key, title: titulo };
  const calculables = forms.filter((f) => f.calculable !== false).map((f) => f.id);
  const conceptuales = forms.filter((f) => f.calculable === false).map((f) => f.id);
  formulasDoc.ui = {
    default_formula: formulasDoc.ui?.default_formula || forms[0]?.id,
    groups: [
      { title: 'Fórmulas calculables', items: calculables },
      ...(conceptuales.length ? [{ title: 'Fórmulas conceptuales', items: conceptuales }] : []),
    ],
  };

  magnitudesDoc.version = 1;
  magnitudesDoc.magnitudes = mags;

  meta.version = 1;
  meta.nombre = titulo;
  meta.icon = icono;
  meta.dificultad = dificultad;
  meta.tiempo_estimado_min = tiempo;
  meta.descripcion_corta = `Subtema ${titulo}: teoría extendida, resolución guiada y validación física completa.`;
  meta.objetivos = [
    `Comprender ${titulo.toLowerCase()} con fundamento físico y matemático.`,
    'Aplicar fórmulas del subtema con unidades SI y despejes coherentes.',
    'Interpretar resultados y detectar errores de modelo antes de cerrar la resolución.',
  ];

  const teoria = `# ${titulo}\n\n## Idea clave\n${idea}\n\n## 1- ¿Qué estudia este subtema y por qué es fundamental?\nEste subtema te enseña a modelar, calcular e interpretar la respuesta oscilatoria con criterio físico, no solo con sustitución mecánica de datos.\n\n## 2- ¿Cómo funciona físicamente el fenómeno?\n${mecanismo}\n\n## 3- Magnitudes y parámetros que debes identificar siempre\n${varsText(mags)}\n\n## 4- Fórmulas esenciales y lectura física\n${formulasText(forms)}\n\n## 5- Condiciones de validez del modelo\n- Modelo lineal dentro de hipótesis del subtema.\n- Parámetros físicos bien definidos y constantes en primera aproximación.\n- Conversión completa a unidades SI antes de operar.\n\n## 6- Método de resolución paso a paso\n1. Define sistema, incógnita y criterio de signos.\n2. Verifica hipótesis del modelo antes de calcular.\n3. Despeja en simbólico y luego sustituye en SI.\n4. Comprueba unidades y orden de magnitud.\n5. Interpreta el resultado físicamente en el contexto del problema.\n\n## 7- Preguntas lógicas de un alumno (y respuesta corta)\n- **¿Por qué cambia tanto el resultado al variar un parámetro?**\n  Porque en oscilaciones cada parámetro tiene un papel dinámico directo (inercia, rigidez, disipación o frecuencia de excitación).\n\n- **¿Cómo sé si mi resultado es razonable?**\n  Verifica unidades, compara con el dominio de validez y comprueba tendencia física esperada al variar datos.\n\n## 8- Ejemplo guiado completo\n1. Extrae datos y conviértelos a SI.\n2. Selecciona la ecuación principal del subtema.\n3. Calcula la incógnita objetivo.\n4. Cierra con interpretación: rapidez de oscilación, estabilidad y sensibilidad del sistema.\n\n## 9- Aplicaciones reales\n- Diseño y análisis de vibraciones mecánicas.\n- Instrumentación, control y validación de respuesta dinámica.\n- Optimización de seguridad y desempeño en sistemas oscilatorios.\n\n## 10- Síntesis final\nDominar ${titulo.toLowerCase()} significa resolver con rigor matemático y explicar con claridad física por qué el sistema se comporta como se comporta.\n`;

  const aplicaciones = `# Aplicaciones\n\n## Dónde se usa este subtema\n- Ingeniería mecánica y dinámica estructural.\n- Diseño de sistemas de control y amortiguación.\n- Instrumentación y análisis de señales periódicas.\n\n## Qué se calcula en práctica\n- Parámetros del sistema (inercia, rigidez, amortiguamiento, frecuencia).\n- Variables de operación (amplitud, fase, energía, tiempo de respuesta).\n- Márgenes de seguridad en condiciones reales.\n\n## Criterio técnico\nPrimero se valida el modelo físico; después se calcula. Ese orden evita errores de interpretación.\n`;
  const ejemplos = `# Ejemplos resueltos\n\n## Ejemplo 1- Cálculo base\n1. Plantea variables y unidades SI.\n2. Aplica la fórmula principal del subtema.\n3. Interpreta el resultado físico.\n\n## Ejemplo 2- Sensibilidad de parámetros\n1. Repite el cálculo variando un parámetro dominante.\n2. Compara cambios en la respuesta.\n3. Justifica la tendencia con el mecanismo físico.\n\n## Ejemplo 3- Verificación final\n- Comprobación dimensional.\n- Coherencia con hipótesis del modelo.\n- Plausibilidad del resultado en contexto real.\n`;
  const errores = `# Errores comunes\n\n## Errores de planteamiento\n- Aplicar fórmulas fuera de su dominio de validez.\n- Mezclar variables angulares y lineales sin criterio.\n- Definir mal referencia de equilibrio o signos.\n\n## Errores de cálculo\n- No convertir a SI antes de operar.\n- Perder factores 2π, signos o exponentes.\n- Redondear en exceso en pasos intermedios.\n\n## Errores de interpretación\n- Dar solo el número final sin lectura física.\n- Ignorar orden de magnitud y tendencia esperada.\n- No contrastar si el régimen asumido realmente aplica.\n`;
  const historia = `# Historia y contexto\n\n## Desarrollo del concepto\n- El estudio de oscilaciones nació con péndulos y sistemas mecánicos de cronometraje.\n- La teoría matemática de ecuaciones diferenciales permitió modelar regímenes libres, amortiguados y forzados.\n- Hoy estos modelos son base en ingeniería, vibraciones y control.\n\n## Valor didáctico\nEste subtema desarrolla pensamiento físico y capacidad de modelización cuantitativa con criterio técnico.\n`;
  const modelos = `# Modelos y alcance\n\n## Modelo base del subtema\n- Sistema lineal de segundo orden con parámetros efectivos.\n- Variables y ecuaciones definidas en unidades SI.\n- Hipótesis explícitas para acotar validez.\n\n## Qué explica bien\n- Tendencias principales de la respuesta temporal/frecuencial.\n- Dependencia entre parámetros y comportamiento.\n- Criterios prácticos de diseño de primer nivel.\n\n## Límites del modelo\n- No cubre no linealidades fuertes sin correcciones.\n- Puede requerir simulación numérica en sistemas complejos.\n- Exige validación experimental cuando se requiere alta precisión.\n`;

  fs.writeFileSync(path.join(dir, 'teoria.md'), teoria, 'utf8');
  fs.writeFileSync(path.join(dir, 'aplicaciones.md'), aplicaciones, 'utf8');
  fs.writeFileSync(path.join(dir, 'ejemplos.md'), ejemplos, 'utf8');
  fs.writeFileSync(path.join(dir, 'errores.md'), errores, 'utf8');
  fs.writeFileSync(path.join(dir, 'historia.md'), historia, 'utf8');
  fs.writeFileSync(path.join(dir, 'modelos.md'), modelos, 'utf8');
  fs.writeFileSync(foPath, yaml.dump(formulasDoc, { lineWidth: 120, noRefs: true }), 'utf8');
  fs.writeFileSync(maPath, yaml.dump(magnitudesDoc, { lineWidth: 120, noRefs: true }), 'utf8');
  fs.writeFileSync(metaPath, yaml.dump(meta, { lineWidth: 120, noRefs: true }), 'utf8');
}

console.log('oscilaciones-regeneradas');
