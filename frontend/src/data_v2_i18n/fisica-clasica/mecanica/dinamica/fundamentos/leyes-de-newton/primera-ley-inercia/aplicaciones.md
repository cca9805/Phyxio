# Aplicaciones: Primera ley inercia

## 1. Transporte urbano de baja aceleración

### Fenómeno

Cuando un autobús mantiene velocidad casi constante en un tramo recto, los pasajeros perciben estabilidad porque el sistema completo opera cerca de equilibrio dinamico.

### Qué se conserva / qué cambia

Se conserva el estado de movimiento global: [[v]] tiende a mantenerse en torno a un valor medio. Cambian pequeñas variables locales por vibraciones, pero sin cambio neto sostenido del estado dinamico.

### Magnitudes dominantes

La lectura clave es [[F_net]] cercana a cero en promedio temporal. De esa lectura se deduce [[a]] aproximadamente nula y se interpreta [[v]] casi constante.

### Escala típica

En tramos estables, variaciones de aceleracion longitudinal del orden de centesimas de m/s^2 pueden considerarse ruido operativo. La velocidad media suele estar entre 8 m/s y 15 m/s segun via.

Variable dominante: [[F_net]] como criterio de equilibrio dinamico en promedio temporal.

Límite de validez: deja de ser lectura inercial cuando aparece aceleracion sostenida fuera de la banda de ruido.

### Cierre operativo

Esta aplicacion muestra que primera ley no es teoria abstracta: explica confort de marcha, consumo estable y control predecible en movilidad diaria.

## 2. Plataformas logísticas automatizadas

### Fenómeno

Carros autonomos de almacenes recorren pasillos con fases de crucero donde la accion de motores solo compensa perdidas pequenas, manteniendo estado casi inercial.

### Qué se conserva / qué cambia

Se conserva la condicion de avance uniforme durante cada segmento de control. Cambian las acciones de actuadores en transiciones de arranque o frenado, fuera del dominio puro de primera ley.

### Magnitudes dominantes

La arquitectura de control monitoriza [[F_net]] efectiva y limita perturbaciones para sostener [[a]] baja. El objetivo es mantener [[v]] dentro de banda estrecha para sincronia logistica.

### Escala típica

Velocidades internas entre 1 m/s y 2 m/s, con tolerancias de variacion menores al 3 por ciento por ciclo. Errores mayores obligan recalibracion de sensores o revision de friccion de ruedas.

Variable dominante: [[v]] regulada por control para conservar flujo uniforme.

Límite de validez: si la deriva de velocidad supera umbral operativo en varios ciclos consecutivos.

### Cierre operativo

La primera ley aparece como criterio de estabilidad de flujo: si el sistema mantiene equilibrio dinamico en crucero, mejora seguridad, trazabilidad y rendimiento energetico.

## 3. Ensayos de dinámica en laboratorio educativo

### Fenómeno

En practicas de riel de aire, estudiantes comparan intervalos con empuje y sin empuje para verificar que el movimiento uniforme persiste cuando la resultante externa es despreciable.

### Qué se conserva / qué cambia

Se conserva el estado cinematico en los intervalos de balance casi nulo. Cambia el estado solo cuando una interaccion externa rompe ese balance.

### Magnitudes dominantes

Se miden [[F_net]], [[a]] y [[v]] con adquisicion digital. El valor didactico esta en correlacionar las tres lecturas como una cadena causal unica.

### Escala típica

Fuerzas del orden de centesimas de N y aceleraciones del orden de centesimas de m/s^2 son comunes en este tipo de montaje. La velocidad se mantiene estable por varios segundos en tramos de baja disipacion.

Variable dominante: [[a]] como indicador de cambio real frente a ruido instrumental.

Límite de validez: cuando la diferencia entre prediccion inercial y medicion supera tolerancia declarada.

### Cierre operativo

La aplicacion convierte una afirmacion teorica en evidencia reproducible y entrena criterio sobre ruido, tolerancia e interpretacion causal.

## 4. Navegación inercial y ventanas de predicción

### Fenómeno

En navegacion de vehiculos, los algoritmos proyectan estado de movimiento durante intervalos cortos asumiendo perturbacion neta reducida, especialmente entre actualizaciones de sensores externos.

### Qué se conserva / qué cambia

Se conserva la prediccion de [[v]] en ventanas cortas cuando [[F_net]] estimada permanece baja. Cambia la confianza del modelo a medida que crece la incertidumbre temporal.

### Magnitudes dominantes

La dinamica interna del filtro usa [[a]] estimada para corregir la evolucion de [[v]]. Si la aceleracion estimada es compatible con cero, la extrapolacion inercial domina.

### Escala típica

Ventanas de prediccion entre 0.1 s y 2 s pueden operar con error bajo en escenarios bien calibrados. Fuera de esa ventana, la acumulacion de error exige medicion externa adicional.

Variable dominante: [[v]] propagada por el filtro durante intervalos cortos.

Límite de validez: crecimiento de incertidumbre que vuelve no confiable la extrapolacion inercial.

### Cierre operativo

Esta aplicacion muestra que primera ley tambien actua como herramienta computacional: define cuando una prediccion de estado puede considerarse robusta.

## 5. Síntesis de ingeniería y criterio de cambio de modelo

### Fenómeno

Todo sistema real alterna fases casi inerciales con fases de accion neta. La decision critica es detectar el instante en que deja de ser valido tratar [[F_net]] como nula.

### Qué se conserva / qué cambia

Se conserva la utilidad del modelo simple mientras la deriva de [[v]] permanezca dentro del umbral operativo. Cambia el marco de analisis cuando la aceleracion deja de ser despreciable de forma sostenida.

### Magnitudes dominantes

[[F_net]] define el gatillo de cambio de modelo, [[a]] cuantifica la desviacion, y [[v]] resume el efecto observable acumulado.

### Escala típica

En control practico, umbrales de cambio de modelo se fijan por seguridad y precision. Por ejemplo, superar una banda de aceleracion prefijada durante varios ciclos consecutivos activa una capa de control dinamico mas completa.

Variable dominante: [[F_net]] porque determina el gatillo de cambio de modelo.

Límite de validez: umbral de aceleracion persistente que obliga abandonar primera ley como descripcion principal.

### Cierre operativo

La sintesis final es metodologica: primera ley no compite con modelos mas ricos, los organiza. Indica cuando basta una lectura inercial y cuando corresponde escalar a dinamica no equilibrada.
