const e=`\uFEFF## Modelo ideal\r
\r
El modelo ideal de cambio de estado trata el proceso como isotérmico (temperatura constante exactamente igual a [[T_trans]]) y a presión constante, con calor latente específico [[L]] constante independiente de la temperatura. Bajo estas hipótesis, el calor total intercambiado durante una transición completa de masa [[m]] es exactamente el calor latente total es proporcional a [[m]] y [[L]], y durante la transición la temperatura no varía en absoluto.\r
\r
## Hipótesis\r
\r
- El proceso ocurre a presión constante. En condiciones de laboratorio a presión atmosférica, esta hipótesis es siempre válida para la fusión de sólidos y la ebullición de líquidos en recipientes abiertos.\r
- La temperatura permanece constante e igual a [[T_trans]] durante toda la transición. Esto es exacto termodinámicamente para sustancias puras en equilibrio; en mezclas o soluciones, [[T_trans]] puede variar durante la transición (ebullición a temperatura variable de soluciones).\r
- El calor latente específico [[L]] es constante durante la transición y no depende de la temperatura ni de la presión (dentro del rango estándar). Para L_f, esta hipótesis es excelente. Para L_v, es buena a presiones cercanas a la estándar pero falla a presiones muy diferentes.\r
- La transición completa de toda la masa [[m]] tiene lugar, sin transición parcial. Si la energía disponible es insuficiente, el modelo se aplica a la masa que sí completa la transición.\r
- Se desprecian los efectos de superficie y los gradientes de temperatura internos dentro del material en transición. Válido para muestras pequeñas con buena conductividad térmica.\r
\r
## Dominio de validez cuantitativo\r
\r
Para el agua a presión estándar (101 325 Pa):\r
\r
For fusion, the tabulated value for water varies by less than 0.5 percent over ordinary laboratory pressures.\r
\r
For vaporization, the water value changes noticeably with pressure and approaches zero near the critical point; use a pressure-specific table in high-pressure applications.\r
\r
Para metales en la fusión: L_f varía menos del 2 % en el rango de presiones industriales relevantes.\r
\r
La hipótesis de temperatura constante durante la transición es exacta para sustancias puras. En soluciones acuosas, el punto de ebullición sube con la concentración de soluto (elevación ebuloscópica) y la transición puede no ocurrir a temperatura estrictamente constante.\r
\r
## Señales de fallo del modelo\r
\r
Las señales observables son mesetas inclinadas, cambios de presión, mezclas no puras o muestras que no transforman toda su masa al mismo tiempo. Si aparece cualquiera de esos indicadores, el modelo ideal debe revisarse antes de usar [[Q_lat]] como tramo único.\r
\r
- **Temperatura que no es constante durante el cambio de estado en la gráfica experimental T vs. tiempo**: en soluciones o mezclas, [[T_trans]] varía durante la transición. El modelo de [[L]] constante y [[T_trans]] fijo no aplica directamente.\r
- **L_v muy diferente del valor tabulado a presión estándar**: si el proceso ocurre a presión muy diferente de 1 atm (autoclaves, sistemas de alta presión), L_v debe tomarse a la presión de operación, no a la estándar.\r
- **Gradientes de temperatura significativos dentro de la muestra**: en muestras grandes o de baja conductividad térmica, la transición no es simultánea en todo el material. El modelo asume uniformidad; en la práctica puede haber zonas que ya terminaron la transición mientras otras an la están haciendo.\r
- **Proceso a presión variable**: en sistemas cerrados con calentamiento, la presión sube con la temperatura. En ese caso, tanto [[T_trans]] como [[L]] varían durante el proceso y el modelo de valores constantes falla.\r
\r
## Modelo extendido o alternativo\r
\r
El primer nivel de extensión incorpora la dependencia de L_v con la temperatura y la presión, usando la ecuación de Clausius-Clapeyron: the Clausius-Clapeyron relation para gases ideales. Este nivel es necesario cuando el proceso ocurre a presiones diferentes de la estándar en más de un 20 %.\r
\r
El segundo nivel incluye la variación del calor específico c_i de cada fase con la temperatura, relevante para procesos con rangos térmicos superiores a 200 K.\r
\r
El tercer nivel trata transiciones parciales: cuando la energía disponible es insuficiente para completar la transición de toda la masa, la ecuación de estado resultante es un equilibrio bifásico. La fracción de masa que completa la transición se calcula como the partial changed mass from available energy divided by [[L]] y el sistema queda a [[T_trans]] indefinidamente (sin aporte externo de calor).\r
\r
Cuando conviene pasar al modelo extendido: cuando se trabaja con mezclas en lugar de sustancias puras, cuando la presión de operación difiere en más del 20 % de la estándar, o cuando se requiere precisión superior al 5 % en [[Q_lat]] de vaporización para procesos a alta temperatura.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal | Modelo con L(T,P) variable | Modelo de transición parcial |\r
|---|---|---|---|\r
| L | Constante tabulado | Función de T y P | Constante, pero aplicado a m_parcial |\r
| [[T_trans]] | Constante | Constante para sustancia pura | Constante: [[T_trans]] del equilibrio bifásico |\r
| Cuando usar | ESO, Bachillerato, primera estimación | Ingeniera de procesos a alta P | Problemas de calorimetría con energía limitada |\r
| Error tpico | Menos del 5 % para agua a P estándar | Menos del 1 % | Exacto si Q_disponible se conoce bien |\r
\r
\r
\r
\r
`;export{e as default};
