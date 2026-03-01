# Sistemas aislados

## Idea clave
Un sistema es **aislado** (en el intervalo de interés) cuando el **impulso de las fuerzas externas** es despreciable.

En ese caso, el **momento lineal total** del sistema se mantiene constante:

$$
\vec{P}=\sum_i m_i\vec{v}_i=\text{cte}
$$

Esto no significa “sin fuerzas”. Significa: **sin efecto externo neto** sobre el conjunto.

---

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema enseña a:

- definir correctamente un **sistema** (qué incluyes y qué dejas fuera),
- distinguir **fuerzas internas** y **fuerzas externas**,
- decidir cuándo es válido tratarlo como aislado,
- aplicar la **conservación del momento lineal total** con criterio.

Es fundamental porque convierte problemas que parecen imposibles (fuerzas internas desconocidas, contactos complejos, choques) en problemas resolubles con lógica:

- colisiones (elásticas e inelásticas),
- explosiones y fragmentación,
- separaciones y acoplamientos,
- movimiento del centro de masas.

Sin este criterio, se cometen errores típicos: “se conserva siempre”, “se conserva en cada cuerpo”, “se conserva la energía igual que el momento”, etc.

---

## 2- Cómo funciona físicamente
La clave está en una idea muy simple:

- Las **fuerzas internas** se producen por pares acción-reacción dentro del sistema.
- Al sumar todas las fuerzas internas, se **cancelan** en el balance global del sistema.

Por eso, el momento total solo cambia si hay un “empuje” desde fuera: fuerza externa neta.

En términos dinámicos:

$$
\vec{F}_{\text{ext}}=\frac{d\vec{P}}{dt}
$$

Si $$\vec{F}_{\text{ext}}\approx 0$$ durante el intervalo:

$$
\frac{d\vec{P}}{dt}\approx 0 \Rightarrow \vec{P}=\text{cte}
$$

Interpretación física:
- Dentro del sistema pueden ocurrir cosas violentas (choque, deformación, rotura).
- Pero el “movimiento global” del conjunto no se crea ni se destruye sin interacción externa.

---

## 3- Magnitudes y parámetros que debes identificar siempre
- $$\vec{p}_i=m_i\vec{v}_i$$: momento de cada cuerpo.
- $$\vec{P}=\sum \vec{p}_i$$: momento total del sistema.
- $$\vec{F}_{\text{ext}}$$: fuerza externa neta.
- $$\vec{J}_{\text{ext}}=\int \vec{F}_{\text{ext}}dt$$: impulso externo.
- Estados “antes/después”: subíndices 1 y 2.

Claves operativas:
- Si el problema es 2D o 3D, se conserva por componentes:
  - $$P_{x,1}=P_{x,2}$$
  - $$P_{y,1}=P_{y,2}$$
- “Aislado” suele significar en la práctica:
  - rozamiento despreciable,
  - o intervalo muy corto (choque rápido) donde el impulso externo es pequeño.

---

## 4- Fórmulas esenciales y lectura física
Momento total:
$$
\vec{P}=\sum_i m_i\vec{v}_i
$$

Ecuación global del sistema:
$$
\vec{F}_{\text{ext}}=\frac{d\vec{P}}{dt}
$$

Condición de aislamiento (en sentido útil):
$$
\vec{J}_{\text{ext}}=\int_{t_1}^{t_2}\vec{F}_{\text{ext}}(t)\,dt \approx 0
$$

Conservación práctica:
$$
\vec{P}_1=\vec{P}_2
$$

Lectura física importante:
- En un choque, la energía cinética puede disminuir (deformación, calor, sonido), pero el **momento total** se conserva si el sistema es aislado.
- Si el sistema tiene momento inicial cero, el final también debe ser cero: puede haber movimiento, pero compensado.

---

## 5- Condiciones de validez y límites del modelo
La conservación del momento total es aplicable cuando:

- el sistema está bien delimitado,
- el impulso externo es despreciable en el intervalo,
- no hay empujes externos relevantes (suelo con fricción fuerte, motor externo, etc.).

Casos típicos donde **no** puedes asumir aislamiento:
- empujes del suelo durante mucho tiempo,
- rozamiento significativo,
- interacción con una pared fija (si la pared no está incluida en el sistema).

Regla práctica:
Si no incluyes el agente externo, entonces su fuerza es externa.
Si la fuerza externa tiene impulso no despreciable, no hay conservación estricta.

---

## 6- Método de resolución paso a paso
1. Define el sistema con precisión (lista de cuerpos incluidos).
2. Identifica fuerzas externas y decide si su impulso es despreciable.
3. Elige ejes y signos.
4. Calcula $$\vec{P}_1$$ (antes) por componentes.
5. Escribe conservación: $$\vec{P}_1=\vec{P}_2$$.
6. Expresa $$\vec{P}_2$$ con las incógnitas.
7. Resuelve por componentes.
8. Cierra con interpretación: dirección, magnitud, coherencia.

---

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Si hay choque, no hay fuerzas enormes?**  
Sí, pero son internas si ambos cuerpos están en el sistema. Se cancelan en el total.

**¿El momento siempre se conserva en choques?**  
Solo si el sistema es aislado (impulso externo despreciable).

**¿La energía también se conserva?**  
No necesariamente. La energía cinética puede disiparse. El momento puede conservarse igualmente.

**¿Si el sistema está en reposo antes, puede moverse después?**  
Las partes sí, pero el momento total debe seguir siendo cero: los momentos se compensan.

---

## 8- Ejemplo guiado completo
Dos patinadores sobre hielo (rozamiento despreciable).
Inicialmente están en reposo: $$\vec{P}_1=0$$.

A: $$m_A=60\ \text{kg}$$  
B: $$m_B=40\ \text{kg}$$

Tras empujarse, A sale con $$v_A=+2.0\ \text{m/s}$$ (eje x).

Conservación:
$$
m_A v_A + m_B v_B = 0
$$

Despeje:
$$
v_B=-\frac{m_A}{m_B}v_A=-\frac{60}{40}\cdot 2.0=-3.0\ \text{m/s}
$$

Interpretación:
- B sale más rápido en sentido contrario porque tiene menor masa.
- El sistema completo mantiene momento total cero.

---

## 9- Aplicaciones reales
- Choques en 1D y 2D (vehículos, bolas, bloques).
- Explosiones y fragmentación.
- Astronautas y movimientos en microgravedad.
- Separación de masas acopladas (cuerdas, carros, patinadores).
- Análisis del centro de masas y su movimiento.

---

## 10- Síntesis final
Un sistema aislado permite sustituir la dinámica interna compleja por un principio global robusto:

$$
\vec{P}_1=\vec{P}_2
$$

Resolver bien este subtema no es “aplicar conservación”, sino:
definir sistema, justificar aislamiento, trabajar vectorialmente y cerrar con interpretación física.