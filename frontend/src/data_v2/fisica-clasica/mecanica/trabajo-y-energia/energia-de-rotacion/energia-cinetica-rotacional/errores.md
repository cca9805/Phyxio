
# Errores frecuentes en energía cinética rotacional

## 1. Usar $E=I\omega^2$ y olvidar el factor $1/2$
**Concepto:** La fórmula correcta es $K_{rot}=\frac{1}{2}I\omega^2$; omitir el $1/2$ duplica el resultado.
**Ejemplo:** Para $I=2$ kg·m$^2$, $\omega=3$ rad/s: $K_{rot}=0.5\cdot2\cdot9=9$ J, no 18 J.
**Consecuencias:** Sobreestimar la energía, errores en balances energéticos.
**Prevención:** Escribe la fórmula completa y revisa cada término.

## 2. Mezclar rpm con rad/s sin conversión
**Concepto:** La velocidad angular debe estar en radianes por segundo (rad/s) en el SI.
**Ejemplo:** $60$ rpm $=2\pi$ rad/s, no $60$ rad/s.
**Consecuencias:** Resultados numéricos erróneos por factores de $2\pi$ o 60.
**Prevención:** Convierte siempre rpm a rad/s antes de calcular.

## 3. Usar un $I$ que no corresponde al eje real de giro
**Concepto:** El momento de inercia $I$ depende del eje de rotación. Usar el $I$ de otro eje da resultados incorrectos.
**Ejemplo:** Un cilindro respecto a su eje central: $I=\frac{1}{2}MR^2$; respecto a un eje tangente: $I=MR^2+\frac{1}{2}MR^2$.
**Consecuencias:** Cálculos erróneos de energía y dinámica rotacional.
**Prevención:** Identifica el eje de rotación y usa el $I$ correspondiente.

## 4. Asumir que $I$ es siempre constante en problemas con distribución variable
**Concepto:** Si la masa o la distribución cambian (por ejemplo, brazos extendidos/retraídos), $I$ cambia.
**Ejemplo:** Un patinador que recoge los brazos reduce $I$ y aumenta $\omega$.
**Consecuencias:** Resultados incorrectos en problemas de conservación de momento angular y energía.
**Prevención:** Analiza si la distribución de masa cambia durante el movimiento y ajusta $I$ según corresponda.

---

## Estrategia para evitar errores
1. Escribe la fórmula completa con el factor $1/2$.
2. Convierte rpm a rad/s antes de calcular.
3. Usa el momento de inercia correspondiente al eje real de giro.
4. Revisa si $I$ cambia durante el problema y ajústalo si es necesario.