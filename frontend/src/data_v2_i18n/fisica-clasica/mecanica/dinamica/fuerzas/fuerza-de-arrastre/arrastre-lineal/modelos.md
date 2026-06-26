# Modelos fisicos: Arrastre lineal

## Modelo ideal

El modelo ideal de este leaf asume que la resistencia del fluido puede describirse con una proporcionalidad directa entre [[F_d]] y [[v]] dentro de una ventana operativa concreta. Es una idealizacion util porque simplifica el analisis dinamico y permite calibracion experimental rapida.

Las simplificaciones clave son:

- La relacion fuerza-rapidez es aproximadamente lineal en el intervalo de interes.
- El parametro [[b]] puede tratarse como constante durante el fenomeno analizado.
- La geometria efectiva del cuerpo no cambia de forma relevante.
- El medio se mantiene suficientemente estable en propiedades que afectan [[b]].

Este modelo no es "menos fisico" por ser simple. Es fisico porque declara sus hipotesis y funciona bien cuando esas hipotesis se cumplen.

## Hipótesis

Hipotesis operativas del modelo:

- Hipotesis de referencia: [[v]] se define respecto al fluido, no respecto a un sistema arbitrario.
- Hipotesis constitutiva: [[F_d]] depende linealmente de [[v]] en el rango estudiado.
- Hipotesis de parametro efectivo: [[b]] resume medio y geometria para ese rango, sin variaciones bruscas.
- Hipotesis dinamica: [[m]] se mantiene constante y permite interpretar [[tau]] como escala temporal coherente.

Si cualquiera de estas hipotesis se rompe, la lectura lineal puede perder poder explicativo y predictivo.

## Dominio de validez cuantitativo

Para uso didactico y tecnico inicial, se recomienda validar el modelo con criterios cuantitativos explicitos:

1. Ajuste lineal de la grafica [[F_d]]-[[v]] con coeficiente de determinacion alto en el tramo de trabajo.
2. Variacion relativa de la pendiente estimada ([[b]]) inferior al margen definido por el protocolo experimental.
3. Error relativo medio entre prediccion lineal y medicion dentro del umbral aceptado por la aplicacion.
4. Consistencia dimensional y de signo en todos los datos procesados.

Un criterio practico de aula y laboratorio es aceptar el modelo lineal cuando el error relativo en el intervalo principal se mantiene por debajo de 10 % y no se observa curvatura sistematica en residuos. Si el error crece y la curvatura aparece, el problema no es de redondeo: el mecanismo dominante puede estar cambiando.

## Señales de fallo del modelo

Indicadores observables de fallo:

- La pendiente aparente de [[F_d]]-[[v]] deja de ser estable.
- El mismo [[b]] no permite explicar subrangos distintos de [[v]].
- La estimacion de [[tau]] cambia de forma incoherente entre ensayos nominalmente equivalentes.
- Las conclusiones dependen mas de ajuste numerico que de mecanismo fisico.

Cuando estas señales aparecen, la lectura correcta no es forzar el mismo modelo, sino declarar limite de validez y preparar transicion.

## Modelo extendido o alternativo

El modelo alternativo natural es una descripcion no lineal del arrastre cuando la proporcionalidad simple deja de representar los datos. En ese escenario, el termino resistivo crece mas rapidamente con la rapidez y la pendiente ya no puede resumirse con un unico [[b]] constante.

Tambien puede ser necesario un modelo por tramos: tramo lineal en bajas velocidades y tramo no lineal en velocidades mayores, con un criterio claro de cambio.

## Comparación operativa

| Aspecto | Modelo lineal | Modelo no lineal o por tramos |
|---------|---------------|-------------------------------|
| Relacion [[F_d]]-[[v]] | Proporcional | Curvatura apreciable |
| Parametro dominante | [[b]] casi constante | Parametros efectivos variables |
| Complejidad | Baja | Media o alta |
| Interpretacion rapida | Muy buena | Requiere mas contexto |
| Riesgo de extrapolacion | Alto fuera de rango | Menor si se calibra bien |

Transicion explicita a modelo alternativo: conviene cambiar de modelo cuando el ajuste lineal pierde estabilidad en el rango objetivo, cuando el error supera el umbral aceptado de forma sistematica o cuando una unica pendiente ya no representa los datos con honestidad fisica.

En resumen, el modelo lineal es excelente para lectura inicial, calibracion y analisis de respuesta temporal con [[tau]]. Su fortaleza depende de respetar su dominio y de activar la transicion de modelo en cuanto las senales de fallo aparezcan.