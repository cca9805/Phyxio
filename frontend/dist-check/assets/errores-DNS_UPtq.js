const e=`## Errores conceptuales

### Error 1: pensar que resonancia es solo una frecuencia bonita
Por que parece correcto:
La mayoria de ejercicios escolares se detienen en calcular [[f0]].

Senal de deteccion:
Se reporta [[f0]] pero no se discuten [[Q]], [[BW]] ni limites de corriente.

Mini-ejemplo de contraste:
Dos circuitos pueden tener la misma [[f0]] y comportarse distinto si cambia [[R]].

Correccion conceptual:
Resonancia es posicion mas forma de respuesta, no solo posicion.

### Error 2: interpretar Q como eficiencia energetica
Por que parece correcto:
Q alta suena a "calidad alta" y se asocia intuitivamente a mejor rendimiento.

Senal de deteccion:
Se concluye que subir Q siempre mejora todo aspecto del sistema.

Mini-ejemplo de contraste:
Q alta mejora selectividad, pero reduce tolerancia a deriva y puede exigir control mas fino.

Correccion conceptual:
Trata [[Q]] como medida de selectividad y amortiguamiento, no como eficiencia global.

## Errores de modelo

### Error 3: usar modelo ideal sin validar perdidas efectivas
Por que parece correcto:
La ecuacion base es simple y da resultados plausibles.

Senal de deteccion:
La corriente medida cerca de resonancia difiere de forma sistematica de la predicha.

Mini-ejemplo de contraste:
Si resistencia parasita y carga modifican [[R]] efectiva, el modelo minimo deja de cerrar.

Correccion conceptual:
Incluye resistencia equivalente real y revisa umbrales de validez.

### Error 4: extrapolar respuesta resonante fuera de vecindad
Por que parece correcto:
Se aplica la misma intuicion de pico a cualquier frecuencia de barrido.

Senal de deteccion:
Se usan conclusiones de resonancia para regiones muy alejadas de [[f0]].

Mini-ejemplo de contraste:
Lejos de resonancia domina otra relacion de impedancia y la aproximacion de banda falla.

Correccion conceptual:
Declara rango de aplicacion antes de transferir conclusiones.

## Errores matemáticos

### Error 5: confundir conversion angular y ordinaria
Por que parece correcto:
Ambas se llaman frecuencia en lenguaje informal.

Senal de deteccion:
Aparecen escalas imposibles al comparar calculo con medicion.

Mini-ejemplo de contraste:
Usar [[omega0]] como si fuera [[f0]] desplaza numericamente toda la sintonia.

Correccion conceptual:
Fija convencion de unidad al inicio y manten conversion explicita.

### Error 6: tratar ancho de banda como constante
Por que parece correcto:
Se memoriza [[BW]] como dato fijo una vez calculado.

Senal de deteccion:
Se cambia [[R]] o [[Q]] y se conserva el mismo [[BW]] sin justificacion.

Mini-ejemplo de contraste:
Si aumenta amortiguamiento, la banda efectiva se ensancha en general.

Correccion conceptual:
Actualiza [[BW]] cada vez que cambie selectividad del circuito.

## Errores de interpretación

### Error 7: cerrar diseno sin verificar limite termico
Por que parece correcto:
La sintonia parece correcta y se asume que eso basta.

Senal de deteccion:
No se contrasta [[Ires]] con capacidad real de componente y proteccion.

Mini-ejemplo de contraste:
Un circuito puede estar bien sintonizado y aun asi operar fuera de margen seguro.

Correccion conceptual:
Integra respuesta resonante con validacion de seguridad electrica.

### Error 8: ignorar deriva de parametros
Por que parece correcto:
Los valores nominales de hoja de datos se tratan como invariantes.

Senal de deteccion:
El prototipo se ajusta en banco pero pierde sintonia en operacion.

Mini-ejemplo de contraste:
Variacion termica de [[L]] y [[C]] mueve [[f0]] y afecta [[BW]].

Correccion conceptual:
Incluye tolerancias y sensibilidad antes del cierre final.

## Regla de autocontrol rápido
Antes de validar el resultado, revisa cinco puntos: unidades coherentes, conversion entre [[omega0]] y [[f0]], consistencia entre [[Q]] y [[BW]], comparacion de [[Ires]] con limite termico, y dominio de validez del modelo usado.
`;export{e as default};
