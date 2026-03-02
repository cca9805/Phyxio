
# Errores frecuentes en trabajo de fuerzas no conservativas

## 1. Asumir que $W_{nc}$ siempre es negativo
**Concepto:** El trabajo de fuerzas no conservativas (como fricción o motores) puede ser positivo o negativo según el sentido de la fuerza respecto al desplazamiento.
**Ejemplo:** Un motor que impulsa un ascensor realiza $W_{nc}>0$; la fricción realiza $W_{nc}<0$.
**Consecuencias:** Interpretar mal la transferencia de energía, errores en balances energéticos.
**Prevención:** Analiza el sentido físico de cada fuerza y su efecto sobre el sistema.

## 2. Usar $W_{nc}=-(E_{m,f}-E_{m,i})$ por inercia
**Concepto:** Esta relación solo es válida en ciertos contextos (como fricción pura). En general, $W_{nc}=E_{m,f}-E_{m,i}$.
**Ejemplo:** Si hay un motor y fricción, ambos contribuyen a $W_{nc}$ con su propio signo.
**Consecuencias:** Cambios de signo erróneos, resultados inconsistentes.
**Prevención:** Aplica la definición general y revisa el balance de energías para cada caso.

## 3. Mezclar energía mecánica con energía total sin definir el sistema
**Concepto:** La energía mecánica ($K+U$) es solo una parte de la energía total. Si hay calor, trabajo externo, etc., deben considerarse aparte.
**Ejemplo:** Un bloque que se desliza y se calienta: parte de la energía se convierte en calor, no en $K$ ni $U$.
**Consecuencias:** Pérdida de energía aparente, errores en la interpretación física.
**Prevención:** Define claramente la frontera del sistema y todas las formas de energía involucradas.

## 4. Olvidar descomponer $E_m$ en $K+U$ cuando hay velocidades y alturas
**Concepto:** La energía mecánica es la suma de cinética y potencial. Si el problema da datos de velocidad y altura, ambas deben considerarse.
**Ejemplo:** Un objeto que sube una rampa: $E_m=K+U_g$.
**Consecuencias:** Resultados incompletos o erróneos en balances energéticos.
**Prevención:** Calcula siempre $K$ y $U$ por separado antes de sumar.

---

## Estrategia para evitar errores
1. Analiza el sentido y tipo de cada fuerza no conservativa.
2. Usa la definición general de trabajo no conservativo y revisa el balance energético.
3. Define la frontera del sistema y todas las formas de energía presentes.
4. Descompón la energía mecánica en $K$ y $U$ según los datos del problema.