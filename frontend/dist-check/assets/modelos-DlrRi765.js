const e=`# Modelos

## Modelo ideal
El modelo de la formulación integral de Maxwell se sitúa en el marco de la **electrodinámica clásica macroscópica**. Su objetivo es describir el comportamiento global de los campos eléctrico [[flux_E]] y magnético [[flux_B]] en presencia de distribuciones de carga [[q_enc]] y corriente [[I_enc]]. Es el modelo estándar para el diseño de circuitos, motores y sistemas de telecomunicaciones donde las dimensiones L son mucho mayores que las escalas atómicas, cumpliendo la condición cuantitativa L > 10^{-10} metros. Este modelo permite ignorar las fluctuaciones cuánticas individuales de los electrones y tratar a la materia como un medio continuo con propiedades promediadas.

## Hipótesis
1. **Continuidad de los campos**: Se asume que los campos son funciones integrables sobre las superficies y contornos elegidos para el análisis físico.
2. **Linealidad del vacío**: El modelo utiliza [[epsilon0]] y [[mu0]] asumiendo relaciones lineales entre fuentes y flujos, lo cual es válido en la mayoría de aplicaciones de ingeniería.
3. **Fronteras cerradas**: Se asume que las superficies de integración son cerradas y topológicamente simples para aplicar los teoremas fundamentales de Gauss y Stokes.
4. **Estado cuasi-estacionario**: En muchas aplicaciones, se asume que las variaciones temporales son lo suficientemente lentas como para que el campo se propague instantáneamente por el sistema.

## Dominio de validez cuantitativo
El modelo integral es extremadamente robusto para el diseño tecnológico, pero encuentra sus límites en las siguientes fronteras cuantitativas:
- **Límite atómico**: El modelo deja de ser preciso para distancias menores a 10^{-10} metros, donde la naturaleza discreta de la materia invalida el concepto de flujo continuo.
- **Régimen de altas energías**: Para densidades de energía superiores a un valor de 10^{18} julios por metro cúbico, la linealidad del vacío se rompe debido al efecto Schwinger.
- **Orden de magnitud**: El modelo es óptimo para frecuencias por debajo del orden de magnitud de 10^{14} hercios. Por encima de este rango, la interacción con los electrones individuales requiere un enfoque de fotones y electrodinámica cuántica.

## Señales de fallo del modelo
- **Inconsistencia de carga**: Si el flujo neto [[flux_E]] no se corresponde con la variación de carga interna, el modelo está omitiendo la corriente de desplazamiento necesaria en regímenes dinámicos.
- **Flujo magnético no nulo**: Un resultado de [[flux_B]] diferente de cero indica un fallo estructural en la definición de la superficie de Gauss o la presencia de monopolos magnéticos no observados.
- **Divergencias locales**: Si el campo varía bruscamente en distancias comparables al tamaño de los componentes físicos, el modelo global puede ocultar comportamientos críticos locales.
- **Pérdidas excesivas**: Si el balance de energía integral no cierra, es probable que el modelo esté ignorando la radiación electromagnética emitida por el sistema.

## Modelo extendido o alternativo
Cuando se requiere analizar el comportamiento en un punto específico o cuando las fuentes tienen geometrías extremadamente complejas sin simetría, es necesario realizar una transicion hacia el modelo alternativo diferencial de las ecuaciones de Maxwell. El modelo diferencial permite resolver los campos punto a punto mediante métodos numéricos. Asimismo, para efectos a escala nanométrica o en presencia de campos gravitatorios extremos, se debe transicionar hacia el modelo extendido de la electrodinámica cuántica (QED) o la relatividad general. Cuando conviene cambiar a estos modelos depende de si la escala de interés es comparable al tamaño atómico o a la longitud de onda de de Broglie.

## Comparación operativa

| Modelo | Ventaja | Limitación |
| :--- | :--- | :--- |
| **Integral (este)** | Proporciona balances globales rápidos y medibles. | Requiere alta simetría para soluciones analíticas. |
| **Diferencial** | Analiza el comportamiento en cada punto del espacio. | Complejidad matemática elevada (EDP). |
| **Numérico (FEM)** | Resuelve geometrías reales complejas. | Requiere alta capacidad de cómputo. |
| **Relativista** | Válido para velocidades cercanas a la de la luz. | Cálculos tensoriales fuera del rango clásico. |
`;export{e as default};
