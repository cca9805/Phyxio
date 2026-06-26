const e=`# Modelos físicos: Ejemplos tipicos\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf trata cada ejemplo como trayectoria circular con fuente radial dominante identificable. La demanda de curvatura se expresa con [[ac]] y [[Frad]], y luego se asigna el agente fisico segun la escena: [[Tn]] en cuerda, [[fs]] en curva plana, componente de [[Nn]] en peralte, condicion de contacto en loop y gravedad en orbita.\r
\r
La ventaja de este modelo no es solo calcular rapido. Es ordenar pensamiento: misma estructura radial, distintas implementaciones fisicas.\r
\r
## Hipótesis\r
\r
- Radio [[r]] bien definido en el tramo analizado.\r
- Velocidad [[v]] representativa del regimen del problema.\r
- Fuerza radial dominante claramente identificable en cada escenario.\r
- En curva plana, adherencia modelada con [[mu]] efectivo.\r
- En peralte ideal, geometria [[th]] estable y regimen cercano al de diseno.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona cuando:\r
\r
- [[r]] > 0 y [[m]] > 0 en formulacion radial base.\r
- [[mu]] > 0 para limite de curva plana.\r
- [[th]] dentro de rango geometrico razonable en peralte.\r
- En loop, se evalua expresamente la zona de cima para contacto.\r
- En orbita, masa central [[M]] domina y se aproxima circularidad.\r
\r
## Señales de fallo del modelo\r
\r
- Prediccion y medicion discrepan de forma sistematica.\r
- Cambios pequenos de entrada producen saltos no fisicos en salida.\r
- Aparecen fenomenos fuera del marco (derrape sostenido, vibracion intensa, maniobra no circular).\r
- El resultado contradice tendencia causal esperada.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal deja de capturar el fenomeno dominante, se usa un modelo extendido:\r
\r
- Neumatico no lineal y transitorios en vehiculos.\r
- Elasticidad y oscilaciones acopladas en sistemas con cuerda.\r
- Dinamica multibody en loops reales.\r
- Perturbaciones orbitales en mecanica espacial.\r
\r
### Transición explícita de modelo alternativo\r
\r
Conviene cambiar de modelo cuando la discrepancia entre prediccion ideal y observacion deja de ser error menor y se vuelve patron repetido en condiciones operativas reales. En ese punto, mantener el modelo simple no simplifica: distorsiona la decision fisica.\r
\r
### Cuando conviene cambiar de modelo\r
\r
Si la decision tecnica depende de efectos que el modelo ideal no representa (derrape transitorio, acoplamientos dinamicos, perturbaciones persistentes), se debe migrar a un modelo alternativo antes de emitir recomendaciones de seguridad o diseno.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal | Modelo extendido |\r
|---|---|---|\r
| Estructura | Radial base + caso tipico | Dinamica acoplada de alta fidelidad |\r
| Costo | Bajo | Medio/alto |\r
| Uso | Formacion y diagnostico inicial | Validacion critica |\r
| Riesgo de uso fuera de dominio | Alto | Menor, si hay datos suficientes |\r
\r
La secuencia correcta es pedagogica y profesional: comprender primero el modelo ideal y cambiar a extendido cuando el contexto lo exige.\r
`;export{e as default};
