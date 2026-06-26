const e=`# Modelos físicos: Coeficiente de rozamiento\r
\r
## Modelo ideal\r
\r
El leaf usa un modelo de contacto seco de primer orden. El modelo no intenta describir todos los microprocesos de superficie, sino capturar el comportamiento dominante para analisis mecanico util.\r
\r
Las simplificaciones principales son:\r
\r
- Contacto seco sin lubricacion activa.\r
- Coeficientes [[mu_s]] y [[mu_k]] aproximadamente constantes en el rango operativo.\r
- Direccion de rozamiento opuesta al deslizamiento o a su tendencia.\r
- Ausencia de desgaste severo durante la ventana temporal analizada.\r
\r
Estas idealizaciones son validas para docencia y para estimaciones de ingenieria preliminar.\r
\r
## Hipótesis\r
\r
Las hipotesis operativas son:\r
\r
- La interfaz se mantiene en contacto mecanico estable mientras se evalua el estado.\r
- El valor de [[N]] se conoce o puede inferirse de forma fiable.\r
- El estado de regimen (estatico o dinamico) puede identificarse con datos disponibles.\r
- No hay excitaciones de alta frecuencia que invaliden el modelo cuasiestatico.\r
\r
Si alguna hipotesis falla, el resultado requiere modelo extendido.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:\r
\r
- Regimen estatico: [[fs]] <= [[fs_max]].\r
- Umbral estatico: [[fs_max]] = [[mu_s]]*[[N]] con [[N]] > 0.\r
- Regimen dinamico: [[fk]] = [[mu_k]]*[[N]] con deslizamiento relativo confirmado.\r
- Coherencia empirica habitual: [[mu_k]] <= [[mu_s]].\r
- Angulo critico en plano inclinado: [[mu_s]] = tan([[theta_c]]) para montaje ideal.\r
\r
Transicion explicita: cuando conviene cambiar de modelo. Si la diferencia entre medicion y prediccion supera 10 por ciento de forma persistente, o si la variacion de velocidad relativa altera claramente el coeficiente efectivo, conviene cambiar del modelo de coeficientes constantes a un modelo dependiente de velocidad y estado superficial.\r
\r
Fuera de estos rangos, los terminos ignorados pueden dominar la respuesta.\r
\r
## Señales de fallo del modelo\r
\r
¿Como detectar fallo del modelo? Indicadores observables:\r
\r
- Error sistematico superior a tolerancia en banco experimental.\r
- Inconsistencia entre criterio estatico y observacion de deslizamiento.\r
- Tendencia fuerte con velocidad que no puede explicarse con [[mu_k]] constante.\r
- Deterioro de superficie que modifica parametros durante la prueba.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, se recomiendan extensiones:\r
\r
- Coeficientes dependientes de velocidad y temperatura.\r
- Modelos de contacto elastico y area real de apoyo.\r
- Efectos de lubricacion mixta o transicion seco-humedo.\r
- Actualizacion de parametros por desgaste acumulado.\r
\r
El modelo extendido es mas costoso, pero necesario en aplicaciones de seguridad o certificacion.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal | Modelo extendido |\r
|---------|--------------|------------------|\r
| Variable dominante | [[mu_s]], [[mu_k]], [[N]] | Estado superficial y velocidad |\r
| Regimen | Estatico o dinamico simple | Multirregimen |\r
| Costo de calculo | Bajo | Medio-alto |\r
| Datos requeridos | Minimos | Ensayo adicional |\r
| Uso tipico | Docencia y prediccion inicial | Validacion fina y diseno critico |\r
\r
Aprende a usar el modelo ideal primero. Una vez lo domines, transición al extendido según necesidad.\r
`;export{e as default};
