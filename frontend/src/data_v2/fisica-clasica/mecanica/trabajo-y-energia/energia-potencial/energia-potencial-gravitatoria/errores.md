
# Errores frecuentes en energía potencial gravitatoria

## 1. Olvidar el nivel de referencia de $U_g$
**Concepto:** La energía potencial gravitatoria absoluta depende del cero elegido; lo relevante es la diferencia $\Delta U_g$ entre dos puntos.
**Ejemplo:** Si defines $U_g=0$ en el suelo, a 5 m de altura $U_g=mgh$; si defines $U_g=0$ en la mesa, el valor cambia pero $\Delta U_g$ entre dos alturas es el mismo.
**Consecuencias:** Resultados numéricos distintos para $U_g$ absoluto, pero los cambios de energía y el trabajo físico son correctos si se usa $\Delta U_g$.
**Prevención:** Elige y mantén un nivel de referencia coherente durante todo el problema.

## 2. Confundir trabajo de la gravedad con cambio de potencial
**Concepto:** El trabajo realizado por la gravedad es siempre $W_g=-\Delta U_g$.
**Ejemplo:** Si un objeto cae, $U_g$ disminuye y el trabajo de la gravedad es positivo (aumenta $K$).
**Consecuencias:** Cambios de signo erróneos, interpretación física incorrecta.
**Prevención:** Aplica la relación $W_g=-\Delta U_g$ y revisa el sentido del desplazamiento.

## 3. Usar signos incorrectos en las alturas
**Concepto:** Subir aumenta $U_g$, bajar la reduce. El signo de $h$ debe ser coherente con el sistema de referencia.
**Ejemplo:** Si subes de $h=0$ a $h=3$ m, $\Delta U_g=mg(3-0)>0$.
**Consecuencias:** Resultados numéricos incorrectos, errores en balances energéticos.
**Prevención:** Define claramente el sentido positivo de la altura y úsalo de forma consistente.

## 4. Aplicar $U_g=mgh$ fuera de su dominio de validez
**Concepto:** $U_g=mgh$ es una aproximación válida solo cerca de la superficie terrestre (campo uniforme). Para distancias grandes o situaciones orbitales, se debe usar $U_g=-G\frac{Mm}{r}$.
**Ejemplo:** Para un satélite, usar $mgh$ da errores enormes; se debe usar la fórmula general.
**Consecuencias:** Resultados físicamente imposibles en problemas astronómicos o de órbita.
**Prevención:** Verifica el contexto y elige la fórmula adecuada según el rango de alturas.

---

## Estrategia para evitar errores
1. Define y mantén un nivel de referencia coherente para $U_g$.
2. Usa siempre $W_g=-\Delta U_g$ para el trabajo de la gravedad.
3. Revisa el signo y sentido de las alturas en cada cálculo.
4. Aplica la fórmula general de $U_g$ en contextos no uniformes (astronomía, órbitas).
