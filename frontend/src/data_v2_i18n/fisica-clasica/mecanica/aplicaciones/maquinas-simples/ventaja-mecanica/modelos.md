# Modelos físicos: ventaja mecánica

## Modelo ideal

El modelo ideal describe una máquina simple sin pérdidas. En una palanca, [[VM]] depende solo de la razón entre [[d_P]] y [[d_R]]. Con esa ventaja ideal se estima la fuerza [[P]] necesaria para una resistencia [[R]].

El modelo real añade medidas de fuerza. La ventaja real [[VM_r]] usa la carga útil y la fuerza realmente aplicada. La eficiencia [[eta]] compara el desempeño real con el ideal.

## Hipótesis

- La máquina se aproxima como rígida.
- Los brazos se miden desde el mismo apoyo.
- La carga [[R]] y la potencia [[P]] se expresan en newtons.
- El modelo ideal ignora rozamiento y deformación.
- El modelo real usa fuerzas medidas en la misma configuración.
- [[VM]], [[VM_r]] y [[eta]] se interpretan como razones positivas.

## Dominio de validez cuantitativo

El modelo ideal es razonable cuando las pérdidas por rozamiento y deformación son pequeñas, por ejemplo si [[eta]] es mayor que 0.9 en una prueba real. Para formar [[VM]], [[d_R]] debe ser positivo. Para formar [[VM_r]], [[P]] debe ser positivo. En condiciones ordinarias, [[eta]] debe quedar entre 0 y 1.

Una comprobación de orden de magnitud: si [[d_P]] = 1.0 m y [[d_R]] = 0.25 m, [[VM]] = 4. Si una carga de 400 N requiere idealmente 100 N pero realmente exige 125 N, entonces [[VM_r]] = 3.2 y [[eta]] = 0.8. Si [[eta]] sale 1.4, no se ha descubierto una máquina perfecta; hay datos incompatibles.

## Señales de fallo del modelo

El modelo falla si se comparan brazos de una configuración con fuerzas medidas en otra. También falla si se usa masa en kg como si fuera la resistencia [[R]] en newtons. Otra señal clara aparece cuando [[VM_r]] supera mucho a [[VM]] sin una explicación de medición o sin cambiar el modelo.

Una señal didáctica de fallo es interpretar [[VM]] como rendimiento real. La geometría puede prometer una ventaja alta, pero si la máquina flexa o roza, el usuario no recibe toda esa ayuda.

## Modelo extendido o alternativo

Cuándo conviene cambiar de modelo: si se quiere estudiar clasificación espacial de la palanca, conviene cambiar a un modelo alternativo de tipos de palancas. Si se quiere estudiar pérdidas con detalle, conviene cambiar a un modelo alternativo con rozamiento, deformación y eficiencia energética. Si hay movimiento acelerado, conviene usar dinámica rotacional.

También conviene cambiar de modelo si la máquina no puede representarse por brazos simples, como sistemas de poleas múltiples, engranajes o mecanismos con geometría variable.

## Comparación operativa

| Situación | Modelo adecuado | Criterio |
|---|---|---|
| Lectura ideal de una palanca | Ventaja ideal | Usar [[VM]] |
| Fuerza ideal para una carga | Requisito ideal | Usar [[P]], [[R]], [[d_P]], [[d_R]] |
| Medición de herramienta real | Ventaja real | Usar [[VM_r]] |
| Pérdidas del dispositivo | Eficiencia | Usar [[eta]] |
| Identificar clase | Tipos de palancas | Usar orden espacial |

La regla práctica es no mezclar niveles: geometría ideal primero, fuerzas reales después, eficiencia al final.
