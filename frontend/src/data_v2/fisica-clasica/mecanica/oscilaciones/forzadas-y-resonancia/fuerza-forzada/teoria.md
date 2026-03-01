# Oscilación forzada

## Idea clave
Una oscilación forzada aparece cuando un sistema oscilatorio recibe una excitación externa periódica. La respuesta final no depende solo del sistema, sino también de la frecuencia y amplitud de la fuerza aplicada.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia cómo responde un oscilador cuando lo “obligas” a vibrar desde fuera.

Es fundamental porque casi todas las oscilaciones reales son forzadas: motores, carreteras, maquinaria, estructuras y sistemas acústicos reciben excitaciones externas continuas.

## 2- Cómo funciona físicamente
La fuerza externa inyecta energía. El amortiguamiento disipa energía. El equilibrio entre ambos procesos determina una respuesta estable de amplitud finita.

Además, la fase de la respuesta se desplaza respecto a la fuerza excitadora.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg), \(k\): rigidez (N/m), \(c\): amortiguamiento (N·s/m).
- \(F_0\): amplitud de fuerza externa (N).
- \(\Omega\): frecuencia angular de excitación (rad/s).
- \(\omega_n\): frecuencia natural del sistema.
- \(X\): amplitud estacionaria de respuesta (m).

## 4- Fórmulas esenciales y lectura física
Ecuación forzada amortiguada:

$$
m\ddot x+c\dot x+kx=F_0\cos(\Omega t)
$$

Amplitud estacionaria:

$$
X(\Omega)=\frac{F_0}{\sqrt{(k-m\Omega^2)^2+(c\Omega)^2}}
$$

Desfase:

$$
\tan\phi=\frac{c\Omega}{k-m\Omega^2}
$$

## 5- Condiciones de validez y límites del modelo
- linealidad del sistema;
- amortiguamiento viscoso equivalente;
- fuerza aproximadamente sinusoidal.

Si hay no linealidad fuerte o excitación no armónica dominante, la respuesta puede requerir análisis numérico/espectral más completo.

## 6- Método de resolución paso a paso
1. Identifica parámetros \(m,c,k,F_0,\Omega\).
2. Calcula \(X(\Omega)\).
3. Determina fase \(\phi\) para interpretar desfase temporal.
4. Evalúa sensibilidad al cambiar \(\Omega\).
5. Comprueba si operas cerca de resonancia.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué la amplitud depende de la frecuencia forzada?**
Porque el sistema filtra dinámicamente la energía según la cercanía entre \(\Omega\) y \(\omega_n\).

**¿Siempre crece la amplitud al forzar más fuerte?**
Sí, con linealidad, \(X\) crece con \(F_0\), pero el amortiguamiento limita el pico.

**¿Qué pasa al principio del movimiento?**
Hay un transitorio que luego desaparece, quedando la respuesta estacionaria.

## 8- Ejemplo guiado completo
Datos: \(m=1\,\text{kg}\), \(k=100\,\text{N/m}\), \(c=4\,\text{N·s/m}\), \(F_0=10\,\text{N}\), \(\Omega=8\,\text{rad/s}\).

$$
X=\frac{10}{\sqrt{(100-1\cdot64)^2+(4\cdot8)^2}}
=\frac{10}{\sqrt{36^2+32^2}}
=\frac{10}{48.17}\approx0.208\,\text{m}
$$

## 9- Aplicaciones reales
- Vibración de máquinas rotativas.
- Respuesta de vehículos a irregularidades periódicas.
- Aislamiento y control vibracional en estructuras.

## 10- Síntesis final
La oscilación forzada enseña que la respuesta no se entiende solo con “frecuencia natural”: hay que leer simultáneamente excitación, disipación y fase para diseñar sistemas estables.
