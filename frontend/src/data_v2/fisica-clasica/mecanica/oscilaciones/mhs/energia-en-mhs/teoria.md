# Energía en MHS

## Idea clave
En el MHS ideal la energía mecánica total se conserva y oscila entre energía potencial y cinética. Entender ese intercambio evita errores frecuentes al interpretar extremos, equilibrio y rapidez del movimiento.

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema estudia cómo se reparte la energía durante una oscilación periódica y cómo usar esa información para resolver problemas sin depender siempre de la ecuación temporal completa.

Es clave porque permite:
- calcular amplitudes o velocidades sin integrar ecuaciones;
- comprobar coherencia física de resultados;
- enlazar dinámica y energía en un marco único.

## 2- Qué significa físicamente el intercambio energético
La oscilación no “crea” energía: la transforma.
- En los extremos: casi toda la energía es potencial.
- En el equilibrio: casi toda la energía es cinética.

El mecanismo dinámico subyacente es restaurador: la fuerza convierte desplazamiento en velocidad y viceversa, en ciclos repetitivos.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg).
- \(k\): constante elástica (N/m).
- \(x\): desplazamiento (m).
- \(A\): amplitud (m).
- \(v\): velocidad (m/s).
- \(E_c\): energía cinética (J).
- \(E_p\): energía potencial elástica (J).
- \(E\): energía total mecánica (J).

## 4- Fórmulas esenciales y lectura física
Energía cinética:

$$
E_c=\frac{1}{2}mv^2
$$

Energía potencial elástica:

$$
E_p=\frac{1}{2}kx^2
$$

Energía mecánica total en MHS ideal:

$$
E=E_c+E_p=\frac{1}{2}kA^2=\frac{1}{2}m\omega^2A^2
$$

Velocidad en función de posición:

$$
v=\pm\omega\sqrt{A^2-x^2}
$$

Lectura física:
- Si \(|x|\) aumenta, \(E_p\) sube y \(E_c\) baja.
- Si \(x=0\), entonces \(E_p=0\) y \(E_c=E\).

## 5- Condiciones de validez y límites del modelo
Válido cuando:
- no hay pérdidas significativas por fricción;
- el resorte trabaja en régimen lineal;
- no hay excitación externa que inyecte energía neta.

Si hay amortiguamiento, \(E\) deja de ser constante y decae en el tiempo.

## 6- Método de resolución paso a paso
1. Determina si el sistema es ideal o amortiguado.
2. Escribe la expresión de energía total adecuada.
3. Usa el estado conocido (por ejemplo, extremo o equilibrio) para fijar \(E\).
4. Resuelve la incógnita \(v\), \(x\), \(A\) o \(k\).
5. Verifica unidades y sentido físico.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué en el equilibrio la velocidad es máxima?**
Porque ahí la energía potencial es mínima y la energía cinética es máxima.

**¿Si doblo la amplitud, qué pasa con la energía?**
Se cuadruplica, porque \(E\propto A^2\).

**¿Puede ser negativa la energía potencial?**
Depende de la referencia elegida. En resorte ideal con referencia en equilibrio suele tomarse no negativa.

## 8- Ejemplo guiado completo
Datos: \(m=0.50\,\text{kg}\), \(k=80\,\text{N/m}\), \(A=0.10\,\text{m}\). Hallar energía total y velocidad cuando \(x=0.06\,\text{m}\).

$$
E=\frac{1}{2}kA^2=\frac{1}{2}\cdot80\cdot0.10^2=0.40\,\text{J}
$$

$$
E_p=\frac{1}{2}kx^2=\frac{1}{2}\cdot80\cdot0.06^2=0.144\,\text{J}
$$

$$
E_c=E-E_p=0.40-0.144=0.256\,\text{J}
$$

$$
v=\sqrt{\frac{2E_c}{m}}=\sqrt{\frac{2\cdot0.256}{0.50}}\approx1.01\,\text{m/s}
$$

## 9- Aplicaciones reales
- Diseño de amortiguadores y aisladores de vibración.
- Control de vibraciones en estructuras y máquinas.
- Instrumentación de sistemas oscilatorios en laboratorio.

## 10- Síntesis final
El enfoque energético del MHS es una herramienta potente para resolver rápido y con criterio: te dice qué puede pasar y qué no puede pasar, incluso antes de acabar la cuenta.
