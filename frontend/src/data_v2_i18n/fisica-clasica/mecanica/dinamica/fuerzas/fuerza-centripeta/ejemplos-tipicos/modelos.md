# Modelos físicos: Ejemplos tipicos

## Modelo ideal

El modelo ideal de este leaf trata cada ejemplo como trayectoria circular con fuente radial dominante identificable. La demanda de curvatura se expresa con [[ac]] y [[Frad]], y luego se asigna el agente fisico segun la escena: [[Tn]] en cuerda, [[fs]] en curva plana, componente de [[Nn]] en peralte, condicion de contacto en loop y gravedad en orbita.

La ventaja de este modelo no es solo calcular rapido. Es ordenar pensamiento: misma estructura radial, distintas implementaciones fisicas.

## Hipótesis

- Radio [[r]] bien definido en el tramo analizado.
- Velocidad [[v]] representativa del regimen del problema.
- Fuerza radial dominante claramente identificable en cada escenario.
- En curva plana, adherencia modelada con [[mu]] efectivo.
- En peralte ideal, geometria [[th]] estable y regimen cercano al de diseno.

## Dominio de validez cuantitativo

El modelo funciona cuando:

- [[r]] > 0 y [[m]] > 0 en formulacion radial base.
- [[mu]] > 0 para limite de curva plana.
- [[th]] dentro de rango geometrico razonable en peralte.
- En loop, se evalua expresamente la zona de cima para contacto.
- En orbita, masa central [[M]] domina y se aproxima circularidad.

## Señales de fallo del modelo

- Prediccion y medicion discrepan de forma sistematica.
- Cambios pequenos de entrada producen saltos no fisicos en salida.
- Aparecen fenomenos fuera del marco (derrape sostenido, vibracion intensa, maniobra no circular).
- El resultado contradice tendencia causal esperada.

## Modelo extendido o alternativo

Cuando el modelo ideal deja de capturar el fenomeno dominante, se usa un modelo extendido:

- Neumatico no lineal y transitorios en vehiculos.
- Elasticidad y oscilaciones acopladas en sistemas con cuerda.
- Dinamica multibody en loops reales.
- Perturbaciones orbitales en mecanica espacial.

### Transición explícita de modelo alternativo

Conviene cambiar de modelo cuando la discrepancia entre prediccion ideal y observacion deja de ser error menor y se vuelve patron repetido en condiciones operativas reales. En ese punto, mantener el modelo simple no simplifica: distorsiona la decision fisica.

### Cuando conviene cambiar de modelo

Si la decision tecnica depende de efectos que el modelo ideal no representa (derrape transitorio, acoplamientos dinamicos, perturbaciones persistentes), se debe migrar a un modelo alternativo antes de emitir recomendaciones de seguridad o diseno.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Estructura | Radial base + caso tipico | Dinamica acoplada de alta fidelidad |
| Costo | Bajo | Medio/alto |
| Uso | Formacion y diagnostico inicial | Validacion critica |
| Riesgo de uso fuera de dominio | Alto | Menor, si hay datos suficientes |

La secuencia correcta es pedagogica y profesional: comprender primero el modelo ideal y cambiar a extendido cuando el contexto lo exige.
