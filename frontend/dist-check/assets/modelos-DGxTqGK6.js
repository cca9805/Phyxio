const e=`# Modelos fisicos: Sistemas no inerciales intro\r
\r
## Modelo ideal\r
\r
El modelo base supone mecanica clasica, ejes bien definidos y mediciones en un marco con traslacion acelerada, rotacion o ambas. Se acepta que la descripcion local puede mantenerse consistente introduciendo terminos inerciales junto a las fuerzas reales.\r
\r
Idealizaciones principales:\r
\r
- Cuerpo tratado como punto material cuando la extension no cambia el balance.\r
- Parametros del marco aproximadamente constantes por ventana de analisis.\r
- Efectos termicos, elasticos y aerodinamicos solo si son de primer orden.\r
- Sin correcciones relativistas ni cuanticas.\r
\r
## Hipotesis\r
\r
1. [[F_real]] representa la suma de fuerzas con agente fisico identificable.\r
2. [[a_marco]] y [[omega]] describen correctamente el movimiento del marco respecto a una referencia inercial.\r
3. [[r]] y [[v_rel]] estan medidos con convencion de ejes consistente.\r
4. [[m]] permanece constante durante la ventana.\r
5. La clasificacion guardada en [[system_classification]] coincide con los datos observados.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo simple con correcciones traslacionales es robusto cuando:\r
\r
- abs([[a_marco]]) <= 0.001 m/s^2 para aproximacion inercial local.\r
- abs([[a_marco]]) >= 0.01 m/s^2 para tratamiento no inercial explicito.\r
\r
En marcos rotantes, el termino radial se vuelve relevante cuando [[omega]] y [[r]] no son pequenos para la precision requerida.\r
\r
Criterio de desempeno del modelo:\r
\r
- error_relativo <= 10%: modelo aceptable.\r
- error_relativo > 10%: conviene cambiar a modelo alternativo o ampliar terminos.\r
\r
## Senales de fallo del modelo\r
\r
- Residuales persistentes entre prediccion y medida en [[a_rel]].\r
- Curvatura observada no explicada por el inventario de fuerzas incluido.\r
- Cambios de signo no fisicos en resultados al variar ligeramente entradas.\r
- Inconsistencia entre clasificacion del marco y magnitud de terminos ficticios.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el criterio cuantitativo falla, el camino operativo es transitar a un modelo extendido:\r
\r
1. Incluir terminos rotacionales completos si el marco gira.\r
2. Resolver por componentes acopladas cuando la geometria lo exige.\r
3. Agregar disipacion, elasticidad o fuerzas de contacto avanzadas si el residual lo demanda.\r
\r
Transicion explicita:\r
\r
- Si error_relativo > 10% en dos o mas ventanas consecutivas, cambiar de modelo inmediatamente.\r
\r
## Comparacion operativa\r
\r
| Aspecto | Modelo base | Modelo extendido |\r
|---|---|---|\r
| Alcance | Diagnostico rapido | Prediccion de alta fidelidad |\r
| Costo | Bajo | Medio-alto |\r
| Requisitos de datos | Moderados | Altos |\r
| Uso recomendado | Aula, pre-diseno, control preliminar | Validacion final, analisis critico |\r
\r
El objetivo didactico es dominar primero el modelo base y luego escalar con criterio cuantitativo, no por intuicion vaga.\r
\r
Ademas, la comparacion operativa debe registrarse por tramo temporal. Un mismo experimento puede alternar ventanas donde el modelo base es suficiente y ventanas donde deja de serlo. Ese detalle evita conclusiones binarias impropias.\r
\r
Una practica recomendada es conservar una tabla de trazabilidad con cuatro columnas: marco declarado, terminos activos, residual observado y decision de modelo. Con ese registro, el diagnostico se vuelve auditable y facilita revisiones cruzadas entre analisis teorico y medicion experimental.\r
`;export{e as default};
