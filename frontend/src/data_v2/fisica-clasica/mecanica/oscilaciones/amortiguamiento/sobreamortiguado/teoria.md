# Régimen sobreamortiguado

## Idea clave
En régimen sobreamortiguado el sistema no oscila y vuelve al equilibrio lentamente. La disipación es tan alta que domina completamente sobre la tendencia oscilatoria.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia la respuesta de sistemas con amortiguamiento mayor que el crítico.

Es fundamental para entender por qué “más amortiguamiento” no siempre mejora el comportamiento global: puede eliminar rebotes, pero a costa de lentitud.

## 2- Cómo funciona físicamente
El término disipativo extrae energía con tanta intensidad que el sistema pierde capacidad de cruzar equilibrio y generar oscilación.

Resultado: aproximación monótona al equilibrio con dinámica más lenta que la crítica.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg).
- \(k\): rigidez (N/m).
- \(c\): amortiguamiento (N·s/m).
- \(c_c=2\sqrt{km}\): amortiguamiento crítico.
- \(\zeta=c/c_c\): razón de amortiguamiento.

## 4- Fórmulas esenciales y lectura física
Ecuación base:

$$
m\ddot x+c\dot x+kx=0
$$

Condición sobreamortiguada:

$$
\zeta>1
$$

Formato de solución (dos exponentes reales):

$$
x(t)=C_1e^{r_1 t}+C_2e^{r_2 t},\quad r_1,r_2<0
$$

Lectura física: no hay seno/coseno porque no hay oscilación, solo relajación exponencial combinada.

## 5- Condiciones de validez y límites del modelo
- amortiguamiento lineal viscoso dominante;
- parámetros aproximadamente constantes;
- excitaciones externas no dominantes.

## 6- Método de resolución paso a paso
1. Calcula \(c_c\) y \(\zeta\).
2. Verifica \(\zeta>1\).
3. Determina raíces \(r_1,r_2\) de la ecuación característica.
4. Ajusta constantes con condiciones iniciales.
5. Evalúa tiempo de asentamiento y compara con régimen crítico.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué tarda más que el crítico si “frena más”?**
Porque la disipación excesiva también dificulta la recuperación dinámica hacia equilibrio.

**¿Tiene alguna ventaja?**
Sí, en sistemas donde se prioriza evitar cualquier rebote por encima de la rapidez.

**¿Cómo detectarlo en una gráfica temporal?**
Curva monótona, sin cruces de equilibrio, con caída lenta.

## 8- Ejemplo guiado completo
Datos: \(m=1\,\text{kg}\), \(k=100\,\text{N/m}\), \(c=28\,\text{N·s/m}\).

$$
c_c=2\sqrt{100\cdot1}=20\,\text{N·s/m}
$$

$$
\zeta=\frac{28}{20}=1.4>1
$$

Conclusión: régimen sobreamortiguado, sin oscilación y con retorno más lento que el crítico.

## 9- Aplicaciones reales
- Puertas o compuertas con cierre sin rebote.
- Mecanismos que priorizan estabilidad sobre rapidez.
- Filtrado mecánico en entornos sensibles.

## 10- Síntesis final
El sobreamortiguamiento es útil cuando la prioridad absoluta es eliminar oscilaciones, pero siempre con la contrapartida de una respuesta temporal más lenta.
