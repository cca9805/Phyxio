# Oscilador masa-muelle

## Idea clave
El sistema masa-muelle es el modelo base de oscilación lineal: la elasticidad del muelle aporta restauración y la masa aporta inercia. De su equilibrio surge una dinámica periódica predecible.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia el movimiento oscilatorio de una masa unida a un muelle ideal cuando se separa de la posición de equilibrio.

Es fundamental porque sirve de referencia para miles de sistemas reales: suspensiones, sensores, vibraciones de maquinaria, montajes de laboratorio y modelos de ingeniería estructural.

## 2- Cómo funciona físicamente
Si desplazas la masa una distancia \(x\), el muelle ejerce una fuerza opuesta:

$$
F=-kx
$$

Esa fuerza restauradora produce aceleración hacia el equilibrio. Al pasar por equilibrio la masa conserva velocidad por inercia y vuelve a comprimirse/estirarse en sentido opuesto. El ciclo se repite.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg).
- \(k\): constante del muelle (N/m).
- \(x\): desplazamiento (m).
- \(A\): amplitud (m).
- \(\omega\): pulsación (rad/s).
- \(T\): período (s), \(f\): frecuencia (Hz).
- \(E\): energía mecánica (J).

## 4- Fórmulas esenciales y lectura física
Ecuación dinámica:

$$
m\ddot x+kx=0
$$

Frecuencia angular natural:

$$
\omega=\sqrt{\frac{k}{m}}
$$

Período y frecuencia:

$$
T=2\pi\sqrt{\frac{m}{k}},\qquad f=\frac{1}{2\pi}\sqrt{\frac{k}{m}}
$$

Solución temporal típica:

$$
x(t)=A\cos(\omega t+\varphi)
$$

Lectura física:
- mayor \(k\) \(\Rightarrow\) oscilación más rápida;
- mayor \(m\) \(\Rightarrow\) oscilación más lenta.

## 5- Condiciones de validez y límites del modelo
Válido cuando:
- el muelle cumple ley de Hooke en el rango usado;
- el rozamiento es despreciable;
- la masa del muelle puede despreciarse o corregirse aparte.

Si hay fricción significativa, aparece amortiguamiento y cambia la amplitud con el tiempo.

## 6- Método de resolución paso a paso
1. Identifica \(m\) y \(k\) con unidades SI.
2. Calcula \(\omega\), \(T\) o \(f\) según pida el problema.
3. Usa condiciones iniciales para fase y amplitud.
4. Evalúa \(x,v,a\) si piden estado temporal.
5. Comprueba coherencia con energía y límites físicos.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Si estiro más el muelle cambia el período?**
En régimen lineal ideal, no: cambia amplitud/energía, no \(T\).

**¿La gravedad cambia el período horizontal?**
No directamente. En vertical desplaza el equilibrio, pero el período ideal depende de \(m\) y \(k\).

**¿Por qué no se para nunca en el modelo?**
Porque el modelo ideal ignora pérdidas por rozamiento.

## 8- Ejemplo guiado completo
Datos: \(m=0.40\,\text{kg}\), \(k=100\,\text{N/m}\), \(A=0.05\,\text{m}\).

$$
\omega=\sqrt{\frac{100}{0.40}}=15.81\,\text{rad/s}
$$

$$
T=\frac{2\pi}{\omega}=0.397\,\text{s}
$$

$$
f=\frac{1}{T}=2.52\,\text{Hz}
$$

El sistema completa ~2.5 oscilaciones por segundo.

## 9- Aplicaciones reales
- Diseño de aislamiento vibratorio.
- Calibración de instrumentación mecánica.
- Modelado de resonancias de componentes.
- Estimación de constantes elásticas en laboratorio.

## 10- Síntesis final
El oscilador masa-muelle es la puerta de entrada al análisis dinámico de vibraciones: sencillo en forma, profundo en contenido y extremadamente útil para resolver problemas reales.
