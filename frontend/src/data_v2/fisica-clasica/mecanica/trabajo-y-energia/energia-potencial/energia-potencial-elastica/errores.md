
# Errores frecuentes en energía potencial elástica

## 1. Usar la longitud total en vez de la deformación
**Concepto:** La fórmula $U_e=\frac{1}{2}kx^2$ usa $x$ como la deformación respecto a la longitud natural, no la longitud absoluta del resorte.
**Ejemplo:** Si el resorte mide 10 cm en reposo y se estira a 15 cm, $x=5$ cm.
**Consecuencias:** Sobreestimar o subestimar la energía almacenada.
**Prevención:** Calcula siempre $x$ como la diferencia respecto a la longitud natural.

## 2. Perder el cuadrado en $x$
**Concepto:** $U_e$ depende de $x^2$, por lo que siempre es no negativa en el modelo ideal.
**Ejemplo:** Si $x=-0.1$ m, $U_e=\frac{1}{2}k(0.01)$, nunca negativa.
**Consecuencias:** Resultados físicamente imposibles (energía negativa).
**Prevención:** Asegúrate de elevar $x$ al cuadrado y revisa el signo.

## 3. Confundir trabajo externo y trabajo del resorte
**Concepto:** El trabajo realizado por el resorte y el trabajo externo son opuestos en signo: $W_{ext}=-\Delta U_e$.
**Ejemplo:** Si comprimes un resorte, el trabajo externo es positivo, el del resorte es negativo.
**Consecuencias:** Cambios de signo erróneos, interpretación incorrecta de la transferencia de energía.
**Prevención:** Distingue siempre entre trabajo realizado por el sistema y sobre el sistema.

## 4. Aplicar la ley de Hooke fuera del límite elástico
**Concepto:** $U_e=\frac{1}{2}kx^2$ solo es válida en el régimen elástico lineal. Si el material se deforma plásticamente, la relación deja de ser válida.
**Ejemplo:** Un resorte que se estira más allá de su límite elástico no recupera su forma y la energía almacenada no sigue la fórmula.
**Consecuencias:** Resultados erróneos en problemas de materiales reales.
**Prevención:** Verifica que el problema esté dentro del rango de validez del modelo elástico.

---

## Estrategia para evitar errores
1. Calcula $x$ como la deformación respecto a la longitud natural.
2. Eleva $x$ al cuadrado y revisa el signo de la energía.
3. Distingue entre trabajo externo y del resorte en los balances energéticos.
4. Aplica la fórmula solo en el régimen elástico lineal.
