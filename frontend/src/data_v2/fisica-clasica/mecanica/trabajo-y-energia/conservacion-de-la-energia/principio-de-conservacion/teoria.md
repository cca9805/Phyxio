# Principio de conservacion de la energia

## Idea clave
En ausencia de fuerzas no conservativas, la energia mecanica total permanece constante. El sistema no "crea" ni "destruye" energia mecanica: solo la transforma entre cinetica y potencial.

## 1- Que estudia este tema y por que es fundamental
Este principio permite resolver problemas complejos conectando estados inicial y final, sin necesidad de calcular toda la evolucion temporal.

## 2- Imagen fisica correcta
Cuando el sistema es ideal, una disminucion de potencial se traduce en aumento de cinetica y viceversa, manteniendo constante la suma total.

**Interpretacion simetrica:** En un pendulo simple sin rozamiento, la energia fluye de ida y vuelta entre potencial (en los extremos) y cinetica (en el fondo), pero la suma permanece fija. Si conoces $E_m$, puedes predecir velocidad en cualquier altura sin resolver movimiento detallado.

**Transformacion de energia:** El principio no dice que la energia no cambia de forma. Al contrario: dice que se puede transformar entre formas (cinetica ↔ potencial) pero el total se conserva si no hay disipacion.

## 3- Variables clave
- Energia cinetica: $K$.
- Energia potencial total: $U$.
- Energia mecanica: $E_m=K+U$.

## 4- Formulas esenciales
Conservacion mecanica ideal:

$$
E_m=K+U=\text{cte}
$$

Entre dos estados:

$$
K_i+U_i=K_f+U_f
$$

Forma en diferencias:

$$
\Delta K+\Delta U=0
$$

## 5- Dominio de validez (analisis riguroso)
Solo cuando el trabajo no conservativo es despreciable o nulo. Si hay rozamiento, resistencia del aire o actuadores externos, debes incluir su trabajo.

**Criterios practicos de validez:**
- Rozamiento despreciable (superficies muy lisas, sistemas mecanicos de precision).
- Escala temporal corta (fuerzas disipativos acumulan poco efecto en tiempos breves).
- Altura/escala pequena (aire y friccion son lineales o sublineales a baja velocidad).
- Sistemas en vacio o fluido ideal (sin arrastre): pendulo sin aire, bloque en hielo limpio.

**Senal de alerta:** Si el problema menciona "ideal", "sin friccion", "liso" → vale conservacion mecanica. Si menciona "realista", "con aire", "rodillo" → incluye disipacion.

**Correccion por disipacion:** Si la disipacion es pequena pero no nula, estima trabajo disipado $W_{diss}$ y aplica: $K_i+U_i=K_f+U_f+W_{diss}$.

## 6- Metodo de resolucion
1- Define estados inicial/final fisicamente claros.
2- Escribe todas las energias relevantes en cada estado.
3- Aplica igualdad de energia mecanica si procede.
4- Despeja y sustituye en SI.
5- Verifica si el resultado es coherente con la conversion esperada.

## 7- Errores tipicos
- Aplicar conservacion mecanica en presencia de disipacion notable.
- Omitir una energia potencial relevante.
- Mezclar referencias distintas de potencial.
- Perder el sentido fisico del signo en resultados.

## 8- Ejemplo guiado
Un cuerpo de $2\,\text{kg}$ cae desde $h=5\,\text{m}$ sin rozamiento y parte del reposo.

$$
K_i+U_i=K_f+U_f
$$

$$
0+ mgh = \frac{1}{2}mv_f^2 + 0
$$

$$
v_f=\sqrt{2gh}=\sqrt{2\cdot9.8\cdot5}\approx9.9\,\text{m/s}
$$

## 9- Aplicaciones reales y casos de estudio
- **Velocidades en pendientes sin rozamiento:** Un esquiador en pendiente ideal partiendo del reposo alcanza velocidad predicha por conservacion sin necesidad de ecuaciones de movimiento.
- **Conversion altura-rapidez en atracciones y deportes:** Tobogan de agua, montana rusa, salto base: la altura inicial determina velocidad maxima de forma algebraica.
- **Analisis preliminar de mecanismos ideales:** En etapa de diseno, conservacion permite estimar rendimiento teorico sin simular dinamica detallada.
- **Sistemas acoplados:** Poleas con masas, carros conectados por resortes: conservacion permite hallar velocidades finales en colisiones o cambios de configuracion sin fuerzas impulsivas detalladas.
- **Validacion experimental:** Comparar velocidad predicha por conservacion con medida real revela cuanta energia se disipa realmente (friccion, deformacion, sonido).

## 10- Sintesis final y perspectiva filosofica
Conservacion de energia mecanica es una herramienta de alta eficiencia para resolver entre estados, siempre que justifiques condiciones de validez.

**Implicacion profunda:** Este principio es una consecuencia de la homogeneidad del tiempo. Si el sistema mecanico no cambia en el tiempo (fuerzas e interacciones constantes), entonces su energia total no puede cambiar arbitrariamente. Es una simetria fundamental de la naturaleza.

**Limite de la mecanica clasica:** La conservacion mecanica falla cuando:
- Particulas viajan a velocidades relativistas (deben usarse masas relativistas).
- Escalas de energia muy altas o campos cuanticos (necesaria mecanica cuantica).
- Sistemas abiertos (energia entra/sale del sistema: no aislado).

**Razon de potencia:** En ingenieria, usar conservacion permite estimaciones rapidas sin resolver ecuaciones diferenciales complejas. Luego, refinamientos con disipacion dan modelos mas realistas.
