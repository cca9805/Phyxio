# Principio de conservación del momento lineal

## Idea clave
El momento lineal total de un sistema permanece constante si el impulso externo es nulo o despreciable.

$$
\vec{P}=\sum_i m_i\vec{v}_i=\text{cte}
$$

No es una regla aislada: es consecuencia directa de la segunda ley aplicada al sistema completo.

---

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema establece formalmente el principio de conservación del momento lineal y enseña a:

- aplicarlo con criterio,
- justificar cuándo es válido,
- evitar su uso automático sin análisis físico.

Es fundamental porque transforma problemas complejos en problemas resolubles:

- choques,
- explosiones,
- separaciones,
- sistemas acoplados.

Sin este principio, cada interacción exigiría conocer todas las fuerzas internas en detalle.

---

## 2- Cómo funciona físicamente
Partimos de la ecuación global del sistema:

$$
\vec{F}_{\text{ext}}=\frac{d\vec{P}}{dt}
$$

Integrando:

$$
\int_{t_1}^{t_2} \vec{F}_{\text{ext}}\,dt=\vec{P}_2-\vec{P}_1
$$

Si el impulso externo es cero:

$$
\vec{P}_2=\vec{P}_1
$$

Interpretación física:

- Las fuerzas internas se compensan por pares.
- Solo un “empuje externo” puede modificar el movimiento global del sistema.
- El principio no depende de si el sistema es rígido, deformable o complejo.

---

## 3- Magnitudes y parámetros que debes identificar siempre
- $$\vec{p}_i=m_i\vec{v}_i$$
- $$\vec{P}=\sum \vec{p}_i$$
- $$\vec{F}_{\text{ext}}$$
- $$\vec{J}_{\text{ext}}$$
- Estados 1 y 2

Clave:
No confundir momento individual con momento total.

---

## 4- Fórmulas esenciales y lectura física

Momento total:

$$
\vec{P}=\sum_i m_i\vec{v}_i
$$

Principio de conservación:

$$
\vec{P}_1=\vec{P}_2
$$

Por componentes:

$$
P_{x,1}=P_{x,2}
$$
$$
P_{y,1}=P_{y,2}
$$

Lectura física importante:

- El principio es vectorial.
- Puede conservarse el momento aunque cambie la energía cinética.
- El principio se aplica al sistema completo, no a cada parte.

---

## 5- Condiciones de validez y límites del modelo
Se puede aplicar cuando:

- el sistema está correctamente definido,
- el impulso externo es despreciable,
- el intervalo es apropiado.

No se debe aplicar si:

- hay fuerzas externas prolongadas,
- el sistema está mal delimitado,
- el aislamiento no está justificado.

---

## 6- Método de resolución paso a paso
1. Definir el sistema.
2. Identificar fuerzas externas.
3. Justificar aislamiento.
4. Calcular $$\vec{P}_1$$.
5. Igualar $$\vec{P}_1=\vec{P}_2$$.
6. Resolver por componentes.
7. Interpretar resultado.

---

## 7- Preguntas lógicas de un alumno (y respuesta corta)

**¿Siempre se conserva el momento?**  
Solo si el sistema es aislado.

**¿Qué pasa si hay fuerzas internas enormes?**  
No afectan al momento total.

**¿El principio depende de si el choque es elástico o no?**  
No. El momento se conserva en ambos casos si el sistema es aislado.

---

## 8- Ejemplo guiado completo

Sistema inicialmente en reposo:

$$
\vec{P}_1=0
$$

Tras explosión:

$$
m_1 v_1 + m_2 v_2 = 0
$$

$$
v_2=-\frac{m_1}{m_2}v_1
$$

Interpretación:
Los fragmentos se separan con momentos opuestos para mantener constante el total.

---

## 9- Aplicaciones reales
- Choques de vehículos.
- Explosiones.
- Sistemas en microgravedad.
- Dinámica de fragmentación.
- Ingeniería balística.

---

## 10- Síntesis final
El principio de conservación del momento lineal permite analizar sistemas complejos con una herramienta global robusta:

$$
\vec{P}_1=\vec{P}_2
$$

Aplicarlo correctamente exige justificar aislamiento y trabajar vectorialmente.