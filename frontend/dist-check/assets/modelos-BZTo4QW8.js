const e=`# Modelos Físicos: La Palanca

## Modelo ideal

El modelo estándar de la palanca se basa en la aproximación del **sólido rígido** en equilibrio estático. Se asume que la barra no sufre ninguna deformación bajo carga y que toda la energía aplicada en el punto de potencia se transmite íntegramente al punto de resistencia. Este modelo es la base para la enseñanza de las máquinas simples y permite entender la ventaja mecánica geométrica sin las complicaciones de la disipación energética.

## Hipótesis

Para que los cálculos de este modelo sean válidos, deben cumplirse las siguientes simplificaciones:
1. **Rigidez infinita**: La barra no se dobla ni se rompe, manteniendo los brazos [[bP]] y [[bR]] constantes.
2. **Barra sin masa**: El peso propio de la palanca se considera despreciable frente a [[P]] y [[R]].
3. **Fulcro puntual**: El punto de apoyo no tiene extensión física ni rozamiento interno.
4. **Fuerzas perpendiculares**: Se asume que las fuerzas actúan en dirección vertical, formando 90° con la barra.

## Dominio de validez cuantitativo

Este modelo es altamente preciso (error inferior al 1%) cuando las cargas aplicadas son mucho menores que el límite elástico del material de la barra y cuando el peso de la barra es inferior al 5% de la carga mínima. En términos de escala, es válido para sistemas mecánicos desde milímetros (pinzas) hasta decenas de metros (grúas industriales), siempre que la velocidad de operación sea baja para ignorar efectos dinámicos e inerciales.

## Señales de fallo del modelo

El modelo ideal deja de representar la realidad cuando:
- La barra muestra una flexión visible (curvatura), lo que acorta los brazos efectivos.
- El sistema no se mueve a pesar de que los cálculos indican equilibrio (presencia de fricción estática alta).
- La palanca vibra o se deforma permanentemente tras retirar la carga.

## Modelo extendido o alternativo

Cuando conviene realizar la transición al modelo real (modelo alternativo) es cuando el fulcro presenta rozamiento significativo o el sistema se bloquea. También se debe pasar al modelo real si el calor generado por la fricción en el eje es una variable crítica del diseño, o cuando el rendimiento mecánico [[eta]] sea inferior a 0.8. En el modelo real, se incluyen fuerzas disipativas en el apoyo y la masa propia de la barra como una fuerza adicional aplicada en su centro de gravedad.

## Comparación operativa

| Característica | Modelo Ideal | Modelo Real (Extendido) |
| :--- | :--- | :--- |
| **Pérdida energética** | Nula (100% eficiencia) | Considera fricción ([[eta]] menor a 1) |
| **Masa de la barra** | Despreciable | Considerada (fuerza en el centro) |
| **Deformación** | Sólido rígido indeformable | Considera flexión elástica |
| **Uso recomendado** | Enseñanza y diseño preliminar | Ingeniería de detalle y seguridad |
`;export{e as default};
