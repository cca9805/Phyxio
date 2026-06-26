const e=`# Modelos físicos: sistemas reales\r
\r
## Modelo ideal\r
\r
El modelo base representa un sistema mecánico traslacional con pérdidas agregadas. La lógica causal es: fuerza aplicada [[F_ap]], pérdidas equivalentes [[F_loss]], fuerza neta [[F_net]] y aceleración [[a]] sobre masa efectiva [[m]].\r
\r
Se complementa con lectura energética mediante [[P_in]], [[P_out]], [[P_loss]] y rendimiento [[eta]]. Esta doble lectura evita resolver la dinámica de forma aislada del consumo y de la disipación.\r
\r
## Hipótesis\r
\r
- Régimen cuasi-estacionario durante la ventana de cálculo.\r
- Variación moderada de parámetros internos en cada tramo.\r
- Equivalencia válida entre pérdidas rotacionales y lineales mediante [[tau_fr]] y [[r]].\r
- Masa efectiva [[m]] aproximadamente constante, salvo casos donde [[m_dot]] sea relevante.\r
\r
Estas hipótesis no son opcionales: son el contrato de validez del modelo.\r
\r
## Dominio de validez cuantitativo\r
\r
Para usar el modelo con confianza didáctica y técnica, deben cumplirse criterios explícitos:\r
\r
- [[F_loss]] < [[F_ap]] para asegurar arranque con [[F_net]] positiva.\r
- 0.5 < [[eta]] <= 0.98 como rango operativo realista.\r
- Error relativo de aceleración por debajo de 10 por ciento para validación de primer nivel.\r
- Variación de [[m]] por intervalo menor de 5 por ciento de la masa total, salvo formulación con [[m_dot]].\r
- Orden de magnitud típico en fuerza neta: entre 10^3 y 10^4 N en instalaciones industriales medianas.\r
\r
Si estos criterios no se cumplen, el modelo base deja de ser predictivo y debe evolucionar.\r
\r
## Señales de fallo del modelo\r
\r
- La predicción de [[a]] se degrada sistemáticamente con el calentamiento.\r
- [[P_loss]] crece de forma sostenida sin cambio de carga equivalente.\r
- El balance entre [[P_in]] y [[P_out]] muestra deriva no explicada por [[eta]] constante.\r
- El cálculo de [[F_loss]] desde [[tau_fr]] y [[r]] ya no coincide con la pérdida inferida por dinámica.\r
\r
Estas señales son observables y no dependen de interpretación subjetiva.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando aparecen señales de fallo, el cambio de modelo no debe ser ambiguo.\r
\r
Transición explícita al modelo alternativo:\r
\r
- Si la discrepancia de aceleración supera de forma persistente el umbral definido por el equipo, pasar de pérdidas constantes a pérdidas dependientes de estado.\r
- Si la masa cambia durante la maniobra, introducir el término de variación de masa y utilizar el formalismo con [[m_dot]].\r
- Si la disipación térmica modifica parámetros en minutos, incorporar dependencia con temperatura en [[F_loss]] o [[eta]].\r
\r
En términos operativos, cuando conviene cambiar de modelo es justo cuando la discrepancia deja de ser puntual y se vuelve persistente en varios ciclos comparables.\r
\r
La regla práctica es simple: cuando el error deja de ser ruido y se vuelve patrón, el modelo base debe ser reemplazado por uno extendido.\r
\r
## Comparación operativa\r
\r
Modelo base:\r
- Bajo coste computacional.\r
- Alta interpretabilidad para diagnóstico rápido.\r
- Adecuado para control inicial y formación.\r
\r
Modelo extendido:\r
- Mayor precisión en condiciones no lineales.\r
- Mejor capacidad de predicción en degradación.\r
- Requiere más instrumentación y calibración.\r
\r
La elección correcta depende del objetivo: enseñar estructura causal, operar con margen o cerrar validación de alta precisión.\r
\r
## 7. Cierre didáctico\r
\r
El valor de este leaf no está en elegir un modelo único para siempre, sino en aprender cuándo cada modelo deja de ser suficiente. Dominar esa transición es la competencia que separa una resolución académica de una ingeniería robusta.`;export{e as default};
