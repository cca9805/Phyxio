## Modelo ideal

El modelo estándar de la interpretación geométrica trata el diagrama p-V como un espacio continuo donde cada punto es un estado de equilibrio bien definido del gas. Las trayectorias son curvas suaves (diferenciables) que conectan estados de equilibrio a través de una sucesión continua de estados intermedios. Bajo esta hipótesis, el trabajo es exactamente el área bajo la curva, sin correcciones.

Los cuatro tipos de proceso estándar tienen representaciones canónicas: línea horizontal (isobárico), línea vertical (isocórico), hipérbola (isotérmico) y curva politrópica con exponente γ (adiabático).

## Hipótesis

El modelo se basa en las siguientes hipótesis:

- El proceso es cuasi-estático: el sistema permanece en equilibrio termodinámico en cada instante.
- La presión es una función continua y bien definida del [[volumen]] a lo largo de la trayectoria.
- No hay disipación interna (fricción, turbulencias, conducción de calor interna).
- El sistema es cerrado y homogéneo.
- Los ejes del diagrama son lineales y las escalas permiten leer el área con precisión.

## Dominio de validez cuantitativo

El modelo es válido para procesos lentos en sistemas gaseosos homogéneos. «Lento» significa que la escala de tiempo del proceso es mucho mayor que el tiempo de relajación del gas hacia el equilibrio, que para gases a temperatura ambiente es del orden de microsegundos. Para la práctica totalidad de los procesos de laboratorio y muchos industriales, esta condición se cumple.

El modelo falla cuantitativamente cuando el proceso involucra gradientes internos de presión o temperatura (flujo sónico, ondas de choque, combustión rápida). En esos casos, la presión no es uniforme y no existe un único valor de p que defina el estado del sistema en cada instante.

> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.

## Señales de fallo del modelo

El modelo falla cuando:

- El proceso ocurre en una fracción de segundo y el gas no tiene tiempo de homogeneizarse.
- El diagrama p-V muestra dos puntos (estados inicial y final) pero no una curva continua entre ellos.
- El trabajo calculado a partir del área difiere significativamente del trabajo medido experimentalmente.
- El proceso involucra cambios de fase o reacciones químicas rápidas dentro del sistema.

## Modelo extendido o alternativo

Para procesos con irreversibilidades moderadas, se puede usar un **modelo politrópico generalizado** con un exponente n ajustable tal que p·Vⁿ permanece constante a lo largo del proceso. El valor n unitario corresponde al proceso isotérmico y n igual a γ corresponde al adiabático. Los procesos reales en motores se aproximan con n entre 1.2 y 1.4.

Para procesos completamente irreversibles, el trabajo se estima usando la presión externa constante del entorno como límite inferior del trabajo real de expansión: [[trabajo_termodinamico]] = p_ext·ΔV.

Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.

## Comparación operativa

| Criterio | Modelo cuasi-estático ideal | Modelo politrópico | Modelo irreversible (p_ext constante) |
|---|---|---|---|
| Representación en p-V | Curva suave continua | Curva p·Vⁿ = cte | Solo estado inicial y final (sin curva) |
| Trabajo calculado | Área bajo la curva exacta | Área analítica bajo p·Vⁿ = cte | p_ext·ΔV |
| Validez | Procesos cuasi-estáticos | Procesos reales lentos con pérdidas | Expansiones irreversibles rápidas |
| Aplicación típica | Análisis de ciclos teóricos | Motores reales, compresores | Reacciones químicas a presión constante |