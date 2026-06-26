const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const dir = 'src/data_v2_i18n/fisica-clasica/mecanica/oscilaciones/pendulo-simple';

function check() {
  const errors = [];
  const warnings = [];
  const missing = [];

  const REQUIRED = ['meta.yaml', 'formulas.yaml', 'magnitudes.yaml', 'teoria.md', 'modelos.md', 'errores.md', 'ejemplos.md'];
  REQUIRED.forEach(f => {
    if (!fs.existsSync(path.join(dir, f))) missing.push(f);
  });

  if (missing.length) errors.push('Faltan archivos: ' + missing.join(', '));

  let meta, formulas, mags;
  try { meta = yaml.load(fs.readFileSync(path.join(dir, 'meta.yaml'), 'utf8')); } catch(e) { errors.push('meta.yaml: ' + e.message); }
  try { formulas = yaml.load(fs.readFileSync(path.join(dir, 'formulas.yaml'), 'utf8')); } catch(e) { errors.push('formulas.yaml: ' + e.message); }
  try { mags = yaml.load(fs.readFileSync(path.join(dir, 'magnitudes.yaml'), 'utf8')); } catch(e) { errors.push('magnitudes.yaml: ' + e.message); }

  if (meta && meta.id !== 'pendulo-simple') warnings.push('meta.id no coincide con carpeta');
  if (meta && !meta.icon) errors.push('meta.icon faltante');

  if (formulas && mags) {
     const magIds = new Set((mags.magnitudes || []).map(m => m.id));
     (formulas.sets || []).forEach(set => {
       (set.formulas || []).forEach(f => {
         if (!f.equation || !f.equation.includes('=')) errors.push('Formula ' + f.id + ' invÃ¡lida');
         if (!f.solve_for) warnings.push('Formula ' + f.id + ' sin solve_for');
         Object.keys(f.symbols || {}).forEach(s => {
           if (!magIds.has(f.symbols[s].magnitude)) errors.push('Formula ' + f.id + ' ref mag inexistente: ' + f.symbols[s].magnitude);
         });
       });
     });
  }
  
  // Extra checks for content files
  ['teoria.md', 'modelos.md', 'errores.md', 'ejemplos.md', 'aplicaciones.md'].forEach(f => {
    if (fs.existsSync(path.join(dir, f))) {
       const stat = fs.statSync(path.join(dir, f));
       if (stat.size < 10) errors.push(f + ' esta vacio');
    } else {
       if (f !== 'aplicaciones.md') errors.push(f + ' faltante');
    }
  });

  console.log(JSON.stringify({errors, warnings}, null, 2));
}
check();
