const e=`\uFEFF# Modelos fisicos: Sistemas inerciales

## Modelo ideal

El modelo ideal de este leaf describe marcos de referencia que no aceleran y no rotan. En ese contexto, la dinamica se expresa con fuerzas reales y no requiere fuerzas ficticias.

La magnitud central es [[F_neta]]. En un sistema inercial, [[F_neta]] gobierna la aceleracion [[a]] de acuerdo con la segunda ley. La masa [[m]] fija la inercia del objeto. La velocidad [[v]] puede cambiar entre observadores inerciales mediante [[V_rel]], mientras la aceleracion conserva invariancia entre marcos.

## Hipotesis

1. El marco de referencia no tiene aceleracion propia.
2. El marco no rota durante el intervalo de analisis.
3. El regimen es clasico, lejos de efectos relativistas.
4. La masa [[m]] se considera constante.
5. El tiempo [[t]] es comun para observadores inerciales.

Estas hipotesis permiten interpretar [[v_obs1]], [[v_obs2]] y [[a_obs2]] dentro del esquema galileano sin contradicciones.

## Dominio de validez cuantitativo

Criterios operativos:

1. Para criterio inercial: si [[F_neta]] es aproximadamente nula, entonces [[a]] debe ser aproximadamente nula dentro de tolerancia instrumental.
2. Para segunda ley: residual = abs([[F_neta]] - [[m]]*[[a]]) <= 0.10 N en banco didactico.
5. error_relativo <= 10 por ciento para aceptar el modelo en primer analisis.
3. Para transformacion de velocidad: cambio de [[V_rel]] <= 0.05 m/s en la ventana [[t]] usada.
4. Para invariancia de aceleracion: abs([[a]] - [[a_obs2]]) <= 0.05 m/s^2.
5. error_relativo <= 10% para aceptar el modelo inercial en primer analisis.
6. error_relativo > 10% sostenido implica cambio de modelo.

Cuando conviene cambiar de modelo: si residual supera 0.10 N de forma sostenida, o si [[V_rel]] deja de ser aproximadamente constante, el marco deja de comportarse como inercial y debe usarse modelo no inercial con terminos adicionales.

## Senales de fallo del modelo

1. Se observa [[a]] significativa con [[F_neta]] cercana a cero sin explicacion externa.
2. [[v_obs1]] y [[v_obs2]] no se relacionan con [[V_rel]] de modo consistente.
3. [[a_obs2]] difiere de [[a]] mas alla de incertidumbre repetidamente.
4. Pequenas variaciones de entrada producen saltos grandes en conclusion.

Estas senales muestran que no basta con aplicar ecuaciones: hay que revisar supuestos del marco.

## Modelo extendido o alternativo

Si el observador acelera o rota, se requiere pasar a formulacion no inercial e introducir fuerzas aparentes. Si las velocidades entran en regimen relativista, las transformaciones galileanas dejan de ser validas.

El modelo extendido aumenta complejidad, pero evita interpretar como "fuerza real" lo que en realidad es efecto del marco.

## Comparacion operativa

Modelo inercial ideal:

- Rapido y transparente para analisis basico.
- Excelente para problemas de aula y laboratorio simple.
- Permite cerrar causalidad con [[F_neta]], [[m]], [[a]].

Modelo extendido:

- Necesario si el marco acelera, rota o cambia de regimen.
- Mejor para escenarios reales con referencia movil compleja.
- Requiere mayor cuidado en identificacion de terminos.

La regla practica es usar el modelo mas simple que siga siendo valido segun evidencia cuantitativa.

`;export{e as default};
