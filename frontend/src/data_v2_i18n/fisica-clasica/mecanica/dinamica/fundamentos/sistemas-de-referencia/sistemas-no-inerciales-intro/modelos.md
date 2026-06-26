# Modelos fisicos: Sistemas no inerciales intro

## Modelo ideal

El modelo base supone mecanica clasica, ejes bien definidos y mediciones en un marco con traslacion acelerada, rotacion o ambas. Se acepta que la descripcion local puede mantenerse consistente introduciendo terminos inerciales junto a las fuerzas reales.

Idealizaciones principales:

- Cuerpo tratado como punto material cuando la extension no cambia el balance.
- Parametros del marco aproximadamente constantes por ventana de analisis.
- Efectos termicos, elasticos y aerodinamicos solo si son de primer orden.
- Sin correcciones relativistas ni cuanticas.

## Hipotesis

1. [[F_real]] representa la suma de fuerzas con agente fisico identificable.
2. [[a_marco]] y [[omega]] describen correctamente el movimiento del marco respecto a una referencia inercial.
3. [[r]] y [[v_rel]] estan medidos con convencion de ejes consistente.
4. [[m]] permanece constante durante la ventana.
5. La clasificacion guardada en [[system_classification]] coincide con los datos observados.

## Dominio de validez cuantitativo

El modelo simple con correcciones traslacionales es robusto cuando:

- abs([[a_marco]]) <= 0.001 m/s^2 para aproximacion inercial local.
- abs([[a_marco]]) >= 0.01 m/s^2 para tratamiento no inercial explicito.

En marcos rotantes, el termino radial se vuelve relevante cuando [[omega]] y [[r]] no son pequenos para la precision requerida.

Criterio de desempeno del modelo:

- error_relativo <= 10%: modelo aceptable.
- error_relativo > 10%: conviene cambiar a modelo alternativo o ampliar terminos.

## Senales de fallo del modelo

- Residuales persistentes entre prediccion y medida en [[a_rel]].
- Curvatura observada no explicada por el inventario de fuerzas incluido.
- Cambios de signo no fisicos en resultados al variar ligeramente entradas.
- Inconsistencia entre clasificacion del marco y magnitud de terminos ficticios.

## Modelo extendido o alternativo

Cuando el criterio cuantitativo falla, el camino operativo es transitar a un modelo extendido:

1. Incluir terminos rotacionales completos si el marco gira.
2. Resolver por componentes acopladas cuando la geometria lo exige.
3. Agregar disipacion, elasticidad o fuerzas de contacto avanzadas si el residual lo demanda.

Transicion explicita:

- Si error_relativo > 10% en dos o mas ventanas consecutivas, cambiar de modelo inmediatamente.

## Comparacion operativa

| Aspecto | Modelo base | Modelo extendido |
|---|---|---|
| Alcance | Diagnostico rapido | Prediccion de alta fidelidad |
| Costo | Bajo | Medio-alto |
| Requisitos de datos | Moderados | Altos |
| Uso recomendado | Aula, pre-diseno, control preliminar | Validacion final, analisis critico |

El objetivo didactico es dominar primero el modelo base y luego escalar con criterio cuantitativo, no por intuicion vaga.

Ademas, la comparacion operativa debe registrarse por tramo temporal. Un mismo experimento puede alternar ventanas donde el modelo base es suficiente y ventanas donde deja de serlo. Ese detalle evita conclusiones binarias impropias.

Una practica recomendada es conservar una tabla de trazabilidad con cuatro columnas: marco declarado, terminos activos, residual observado y decision de modelo. Con ese registro, el diagnostico se vuelve auditable y facilita revisiones cruzadas entre analisis teorico y medicion experimental.
