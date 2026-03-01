# Aplicaciones (MRU)

## Parques de atracciones (tramos de velocidad constante)
En muchas atracciones hay **tramos diseñados para mantener velocidad casi constante** (por ejemplo, en un raíl recto con un sistema de arrastre o en tramos de transición controlados).

**Dónde aparece el MRU:**
- en un tramo recto donde la velocidad se mantiene aproximadamente constante,
- o en una cinta/arrastre que fija la velocidad.

**Qué se calcula:**
- cuánto tarda un coche en recorrer una zona,
- separación mínima entre vehículos para seguridad:
  $$t = \frac{\Delta x}{v}$$

---

## Navegación y logística (tiempo estimado)
MRU es el modelo base para estimar:
- tiempos de llegada,
- planificación de rutas en tramos de velocidad constante.

**Ejemplo típico:**
$$x = x_0 + vt$$

---

## Espacio profundo (aproximación por tramos)
En misiones espaciales, durante ciertos intervalos se puede aproximar el movimiento como MRU si:
- la velocidad cambia muy poco en el intervalo considerado,
- se estudian tiempos cortos o se trabaja “por tramos”.

**Nota:** en realidad el movimiento está afectado por gravedad, correcciones, etc., pero el MRU sirve como primera aproximación o tramo local.
