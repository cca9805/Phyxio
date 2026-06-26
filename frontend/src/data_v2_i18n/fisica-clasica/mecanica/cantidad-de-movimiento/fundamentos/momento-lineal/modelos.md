# Modelos y limitaciones: Momento Lineal [[p]]

## Modelo ideal

El modelo ideal asume que toda la dinámica ocurre sin rotación o deformación estructural, tratando al cuerpo como un ente puntual.

## Hipótesis

Para que el análisis del momento lineal mediante las fórmulas estándar sea válido, el sistema debe cumplir las siguientes condiciones ideales:

1.  **Partícula puntual**: Se asume que toda la masa del objeto está concentrada en un único punto. Esto permite ignorar rotaciones internas y deformaciones durante el movimiento traslacional.
2.  **Masa invariante**: Se asume que el sistema no gana ni pierde materia durante el intervalo de análisis (tasa de cambio nula). Para sistemas de masa variable (como cohetes), se debe recurrir a la forma general de la Segunda Ley.
3.  **Sistema inercial**: El observador debe estar en reposo o moverse a velocidad constante. En sistemas no inerciales, aparecerían fuerzas ficticias que complicarían el balance de momento.

---

## Dominio de validez cuantitativo

El modelo clásico de momento lineal basado en la masa constante y la velocidad galileana tiene límites de precisión bien definidos:

*   **Límite de velocidad**: Rapidez inferior a 0.1c (menos del 10% de la velocidad de la luz). Por encima de este valor, el error de la fórmula clásica respecto a la relativista empieza a ser significativo para cálculos de ingeniería.
*   **Límite cuántico**: El producto de la incertidumbre en la posición y en el momento debe cumplir el Principio de Heisenberg. Para objetos macroscópicos (balas, coches, planetas), este límite es despreciable.
*   **Fuerzas impulsivas**: La aproximación de fuerza media es válida siempre que el intervalo de impacto sea lo suficientemente pequeño para que otras fuerzas constantes (como la gravedad) tengan un efecto despreciable durante la colisión.

---

## Señales de fallo del modelo

Debes abandonar este modelo y buscar uno más complejo si detectas:

1.  **Variación de masa evidente**: Si el objeto se está desintegrando, quemando combustible masivamente o acumulando materia.
2.  **Efectos de rotación dominantes**: Si el objeto es un sólido extenso que gira mientras se traslada (se requiere el momento angular).
3.  **Velocidades extremas**: Si los resultados de fuerza media superan los límites de la física clásica o involucran fracciones de c.

---

## Modelo extendido o alternativo

Cuando el sistema supera los límites del modelo ideal, se establece una transición explícita. Es imperativo cambiar a un modelo más avanzado cuando conviene porque la masa varía en el tiempo de forma continua o si la velocidad entra de lleno en el régimen relativista.

1.  **Modelo de Sistema Variable**: Requerido para el despegue del Saturno V. Sin considerar la pérdida de masa del combustible, el cálculo de la velocidad final sería erróneo por un factor de 5.
2.  **Modelo Relativista**: Indispensable en el diseño del LHC (Gran Colisionador de Hadrones). A esas energías, el momento lineal de un protón es miles de veces superior al calculado con la fórmula clásica.

---

## Comparación operativa

| Característica | Modelo de Partícula (Estándar) | Modelo de Sistema Variable | Modelo Relativista |
| :--- | :--- | :--- | :--- |
| **Masa** | Constante | m(t) | Escala con factor de Lorentz |
| **Relación clave** | Definición clásica | Ley de Newton generalizada | Corrección de Lorentz |
| **Uso principal** | Dinámica general y choques | Cohetes y cintas transportadoras | Partículas a altas energías |
| **Fallo del modelo** | Cuando v se acerca a c | Masa constante | Velocidades bajas (innecesario) |
