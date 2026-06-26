# Modelos físicos: Coeficiente de rozamiento

## Modelo ideal

El leaf usa un modelo de contacto seco de primer orden. El modelo no intenta describir todos los microprocesos de superficie, sino capturar el comportamiento dominante para analisis mecanico util.

Las simplificaciones principales son:

- Contacto seco sin lubricacion activa.
- Coeficientes [[mu_s]] y [[mu_k]] aproximadamente constantes en el rango operativo.
- Direccion de rozamiento opuesta al deslizamiento o a su tendencia.
- Ausencia de desgaste severo durante la ventana temporal analizada.

Estas idealizaciones son validas para docencia y para estimaciones de ingenieria preliminar.

## Hipótesis

Las hipotesis operativas son:

- La interfaz se mantiene en contacto mecanico estable mientras se evalua el estado.
- El valor de [[N]] se conoce o puede inferirse de forma fiable.
- El estado de regimen (estatico o dinamico) puede identificarse con datos disponibles.
- No hay excitaciones de alta frecuencia que invaliden el modelo cuasiestatico.

Si alguna hipotesis falla, el resultado requiere modelo extendido.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:

- Regimen estatico: [[fs]] <= [[fs_max]].
- Umbral estatico: [[fs_max]] = [[mu_s]]*[[N]] con [[N]] > 0.
- Regimen dinamico: [[fk]] = [[mu_k]]*[[N]] con deslizamiento relativo confirmado.
- Coherencia empirica habitual: [[mu_k]] <= [[mu_s]].
- Angulo critico en plano inclinado: [[mu_s]] = tan([[theta_c]]) para montaje ideal.

Transicion explicita: cuando conviene cambiar de modelo. Si la diferencia entre medicion y prediccion supera 10 por ciento de forma persistente, o si la variacion de velocidad relativa altera claramente el coeficiente efectivo, conviene cambiar del modelo de coeficientes constantes a un modelo dependiente de velocidad y estado superficial.

Fuera de estos rangos, los terminos ignorados pueden dominar la respuesta.

## Señales de fallo del modelo

¿Como detectar fallo del modelo? Indicadores observables:

- Error sistematico superior a tolerancia en banco experimental.
- Inconsistencia entre criterio estatico y observacion de deslizamiento.
- Tendencia fuerte con velocidad que no puede explicarse con [[mu_k]] constante.
- Deterioro de superficie que modifica parametros durante la prueba.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, se recomiendan extensiones:

- Coeficientes dependientes de velocidad y temperatura.
- Modelos de contacto elastico y area real de apoyo.
- Efectos de lubricacion mixta o transicion seco-humedo.
- Actualizacion de parametros por desgaste acumulado.

El modelo extendido es mas costoso, pero necesario en aplicaciones de seguridad o certificacion.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---------|--------------|------------------|
| Variable dominante | [[mu_s]], [[mu_k]], [[N]] | Estado superficial y velocidad |
| Regimen | Estatico o dinamico simple | Multirregimen |
| Costo de calculo | Bajo | Medio-alto |
| Datos requeridos | Minimos | Ensayo adicional |
| Uso tipico | Docencia y prediccion inicial | Validacion fina y diseno critico |

Aprende a usar el modelo ideal primero. Una vez lo domines, transición al extendido según necesidad.
