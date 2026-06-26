# Modelos físicos: sistemas reales

## Modelo ideal

El modelo base representa un sistema mecánico traslacional con pérdidas agregadas. La lógica causal es: fuerza aplicada [[F_ap]], pérdidas equivalentes [[F_loss]], fuerza neta [[F_net]] y aceleración [[a]] sobre masa efectiva [[m]].

Se complementa con lectura energética mediante [[P_in]], [[P_out]], [[P_loss]] y rendimiento [[eta]]. Esta doble lectura evita resolver la dinámica de forma aislada del consumo y de la disipación.

## Hipótesis

- Régimen cuasi-estacionario durante la ventana de cálculo.
- Variación moderada de parámetros internos en cada tramo.
- Equivalencia válida entre pérdidas rotacionales y lineales mediante [[tau_fr]] y [[r]].
- Masa efectiva [[m]] aproximadamente constante, salvo casos donde [[m_dot]] sea relevante.

Estas hipótesis no son opcionales: son el contrato de validez del modelo.

## Dominio de validez cuantitativo

Para usar el modelo con confianza didáctica y técnica, deben cumplirse criterios explícitos:

- [[F_loss]] < [[F_ap]] para asegurar arranque con [[F_net]] positiva.
- 0.5 < [[eta]] <= 0.98 como rango operativo realista.
- Error relativo de aceleración por debajo de 10 por ciento para validación de primer nivel.
- Variación de [[m]] por intervalo menor de 5 por ciento de la masa total, salvo formulación con [[m_dot]].
- Orden de magnitud típico en fuerza neta: entre 10^3 y 10^4 N en instalaciones industriales medianas.

Si estos criterios no se cumplen, el modelo base deja de ser predictivo y debe evolucionar.

## Señales de fallo del modelo

- La predicción de [[a]] se degrada sistemáticamente con el calentamiento.
- [[P_loss]] crece de forma sostenida sin cambio de carga equivalente.
- El balance entre [[P_in]] y [[P_out]] muestra deriva no explicada por [[eta]] constante.
- El cálculo de [[F_loss]] desde [[tau_fr]] y [[r]] ya no coincide con la pérdida inferida por dinámica.

Estas señales son observables y no dependen de interpretación subjetiva.

## Modelo extendido o alternativo

Cuando aparecen señales de fallo, el cambio de modelo no debe ser ambiguo.

Transición explícita al modelo alternativo:

- Si la discrepancia de aceleración supera de forma persistente el umbral definido por el equipo, pasar de pérdidas constantes a pérdidas dependientes de estado.
- Si la masa cambia durante la maniobra, introducir el término de variación de masa y utilizar el formalismo con [[m_dot]].
- Si la disipación térmica modifica parámetros en minutos, incorporar dependencia con temperatura en [[F_loss]] o [[eta]].

En términos operativos, cuando conviene cambiar de modelo es justo cuando la discrepancia deja de ser puntual y se vuelve persistente en varios ciclos comparables.

La regla práctica es simple: cuando el error deja de ser ruido y se vuelve patrón, el modelo base debe ser reemplazado por uno extendido.

## Comparación operativa

Modelo base:
- Bajo coste computacional.
- Alta interpretabilidad para diagnóstico rápido.
- Adecuado para control inicial y formación.

Modelo extendido:
- Mayor precisión en condiciones no lineales.
- Mejor capacidad de predicción en degradación.
- Requiere más instrumentación y calibración.

La elección correcta depende del objetivo: enseñar estructura causal, operar con margen o cerrar validación de alta precisión.

## 7. Cierre didáctico

El valor de este leaf no está en elegir un modelo único para siempre, sino en aprender cuándo cada modelo deja de ser suficiente. Dominar esa transición es la competencia que separa una resolución académica de una ingeniería robusta.