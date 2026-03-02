# Errores frecuentes

## 1) Identificación incorrecta de fuerzas conservativas
- Etiquetar como conservativa una fuerza que depende de la velocidad (fricción viscosa, drag aerodinámico) lleva a calcular energías constantes donde en realidad se disipa energía.
- **Señal de alarma:** mediciones de velocidad o altura no coinciden con la predicción de $\sqrt{2gh}$.

## 2) Confundir independencia de trayectoria con longitud recorrida
- La independencia de trayectoria se refiere a fuerza conservativa; **la distancia recorrida puede ser arbitraria**. El trabajo sólo depende de los puntos inicial/final, no de cuán tortuoso sea el camino.
- Error típico: sumar trabajo de segmentos individuales como si todos estuvieran alineados con la fuerza.

## 3) Mezclar trabajo conservativo y no conservativo sin contabilizarlo
- Si el sistema tiene fricción, motores, o fuerzas magnéticas variables, olvidarse de añadir $W_{nc}$ conduce a conservaciones falsas.
- Ejemplo: aplicar $E_i = E_f$ sin incluir trabajo de rozamiento da velocidades finales excesivas.

## 4) Signo incorrecto en cambios de energía potencial
- Al elevar un objeto, algunos estudiantes escriben $\Delta U = -mgh$ en lugar de $+mgh$ (o viceversa) y confunden el esquema energético.
- Recordar: $U$ aumenta cuando haces trabajo contra la fuerza conservativa.

## 5) Errores algebraicos en el reparto de energía entre componentes
- Al descomponer energía en varias formas (cinética traslacional, rotacional, potencial elástica), es fácil duplicar o olvidar términos, especialmente en sistemas acoplados.
- Verificar dimensiones y unidades (joules) para detectar errores.

## 6) No definir estados de referencia (cero de potencial)
- Elegir un cero de energía inconsistente entre cálculos resulta en cancelaciones erróneas y en tensiones aparentes de energía no conservada.
- Especifique siempre la referencia (e.g., suelo, posición de equilibrio).

## 7) Aplicar el principio a sistemas con transferencia de masa o radiación
- Si la masa del sistema cambia (cohete que quema combustible) o emite energía (onda electromagnética), la conservación mecánica clásica no es válida sin correcciones.
- Estos casos no pertenecen a sistemas conservativos estrictos.

## 8) Omisión de términos de energía interna en colisiones reales
- En colisiones “elásticas” en la vida real, parte de la energía se convierte en calor y sonido; asumir conservación mecatécnica total puede subestimar las deformaciones.
- Úsese sólo si se conoce que la colisión es verdaderamente elástica (p.ej., choques entre esferas de acero bien pulidas).

> **Consejo general:** Antes de aplicar $E_i = E_f$, enumera **todas** las fuerzas actuantes y clasifica cada una como conservativa o no conservativa; define estados con claridad.
