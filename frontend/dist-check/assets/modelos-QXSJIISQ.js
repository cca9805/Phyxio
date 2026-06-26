const e=`# Modelos físicos: Diagramas cuerpo libre\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf supone mecanica clasica, sistema bien aislado y fuerzas externas identificables con agente fisico. El objetivo no es describir todos los detalles materiales, sino construir un mapa dinamico fiable para proyectar por ejes.\r
\r
Supuestos base:\r
\r
- El cuerpo se aproxima como particula o solido rigido segun escala.\r
- Las fuerzas externas relevantes son representables como [[P]], [[N]], [[T]], y rozamiento [[fs]] o [[fk]].\r
- La masa [[m]] es positiva y constante en el intervalo analizado.\r
- La gravedad [[g]] se toma uniforme.\r
\r
## Hipotesis\r
\r
1. Hipotesis de aislamiento: solo se incluyen fuerzas externas con agente declarado.\r
2. Hipotesis de ejes consistentes: cada proyeccion usa una convencion de signos fija.\r
3. Hipotesis de regimen: no se mezclan formulas de [[fs]] y [[fk]] sin evento de transicion.\r
4. Hipotesis geometrica: en plano inclinado, [[theta]] esta bien definido antes de usar [[Ppar]] y [[Pperp]].\r
\r
Si alguna hipotesis falla, el diagrama sigue siendo util como base, pero requiere extension de modelo.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es operativo cuando se cumplen criterios medibles:\r
\r
- Coherencia de equilibrio por eje: |[[Fy]]| <= 0.05*|[[P]]| en configuraciones sin despegue.\r
- Regimen estatico valido si [[fs]] <= [[mu_s]]*[[N]].\r
- Regimen cinetico consistente si [[fk]] = [[mu_k]]*[[N]] con [[mu_k]] >= 0.\r
- Coherencia dinamica: |[[Fx]] - [[m]]*[[ax]]| <= tolerancia de medicion.\r
\r
Criterios de transicion explicitos:\r
\r
- Si demanda tangencial supera cota estatica, pasar de modelo con [[fs]] a modelo con [[fk]].\r
- Si [[N]] tiende a cero, revisar contacto y abandonar equilibrio vertical simple.\r
\r
Referencia numerica operacional:\r
\r
- Si |[[Fy]]| <= 5 N en un ensayo de banco, se considera equilibrio normal aceptable.\r
- Si el error relativo en [[Fx]] frente a [[m]]*[[ax]] es <= 10%, el cierre por eje se acepta para diagnostico inicial.\r
- Si la diferencia prediccion-medicion supera 15% en tres ensayos consecutivos, conviene cambiar de modelo.\r
\r
## Señales de fallo del modelo\r
\r
- Predicciones de signo en [[ax]] o [[ay]] incompatibles con observacion.\r
- Resultados que exigen [[N]] negativa en contacto ordinario.\r
- Sensibilidad extrema a pequenos cambios de [[theta]] o [[mu_s]] sin respaldo experimental.\r
- Necesidad de alternar continuamente entre equilibrio y deslizamiento sin criterio de evento.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo base no alcanza, se puede extender por capas:\r
\r
1) Contacto dependiente de estado superficial y velocidad.\r
2) Friccion no lineal con histeresis.\r
3) Dinamica transitoria con impactos o vibracion.\r
4) Deformacion del soporte para corregir distribucion de [[N]].\r
\r
Transicion recomendada:\r
\r
- Escalar de modelo cuando el error persistente en balances por eje supere tolerancia en varios ensayos consecutivos, aun con diagrama y unidades verificados.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo base DCL | Modelo extendido |\r
|---|---|---|\r
| Objetivo | Trazabilidad de fuerzas y balances por eje | Capturar efectos no lineales y transitorios |\r
| Datos requeridos | Bajos a medios | Medios a altos |\r
| Costo computacional | Bajo | Medio o alto |\r
| Interpretabilidad | Muy alta | Media |\r
| Mejor uso | Docencia, diagnostico inicial | Validacion fina e incidentes complejos |\r
\r
Estrategia recomendada: comenzar siempre con modelo base bien auditado y escalar solo cuando la evidencia lo exija.\r
`;export{e as default};
