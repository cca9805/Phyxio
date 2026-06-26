const e=`# Modelos de la red eléctrica doméstica

## Modelo ideal

El **modelo ideal de red eléctrica doméstica** representa la instalación como una fuente de tensión perfectamente constante de 230 V a la que se conectan receptores puramente resistivos en paralelo. En este modelo simplificado, la **corriente total** [[I_tot]] se calcula directamente a partir de la **potencia total** [[P_tot]] mediante la relación:

{{f:corriente_total}}

La simplificación central consiste en asumir que la tensión [[V]] permanece invariante ante cualquier cambio de carga, y que todos los receptores se comportan como resistencias óhmicas ideales con factor de potencia unitario. Las magnitudes que se conservan son la tensión de red y la potencia nominal de cada receptor; se ignoran la impedancia del cableado, las reactancias inductivas o capacitivas, y las caídas de tensión en los conductores.

## Hipótesis

- **Hipótesis de fuente de tensión ideal**: La red mantiene exactamente 230 V independientemente de la corriente demandada. Si se viola, aparecen caídas de tensión apreciables y el cálculo de corriente subestima el valor real.

- **Hipótesis de receptores resistivos puros**: Todos los aparatos conectados tienen factor de potencia igual a 1, sin componentes inductivos ni capacitivos. Si se viola, la corriente real supera la calculada debido al desfase entre tensión y corriente.

- **Hipótesis de impedancia de línea despreciable**: La resistencia de los cables de la instalación es cero o insignificante comparada con la de los receptores. Si se viola, la tensión en los extremos difiere de 230 V y la potencia real entregada cambia.

- **Hipótesis de conexión en paralelo perfecta**: Todos los receptores ven la misma tensión sin interferencias mutuas. Si se viola (conexiones deficientes), aparecen resistencias de contacto que modifican la distribución de corriente.

- **Hipótesis de frecuencia constante**: La frecuencia de red permanece en 50 Hz sin variaciones. Esta hipótesis afecta principalmente a receptores sensibles a la frecuencia, aunque en el modelo resistivo no altera los cálculos.

## Dominio de validez cuantitativo

El modelo ideal es aplicable cuando se cumplen las siguientes condiciones cuantitativas:

- **Receptores puramente resistivos**: Factor de potencia entre 0,95 y 1,0. Por debajo de 0,95, el error en la corriente calculada supera el 5 %.

- **Líneas cortas**: Longitud de cableado desde el cuadro hasta el receptor menor que 30 metros para secciones estándar (2,5 mm²). En líneas más largas, la caída de tensión puede alcanzar valores significativos (mayor que 3 %).

- **Cargas moderadas**: Corriente total [[I_tot]] menor que el 80 % del calibre del magnetotérmico [[I_max]]. Por encima de este umbral, el calor en los cables comienza a ser apreciable y la resistencia del cobre aumenta ligeramente.

- **Tensión de red estable**: Variaciones de la tensión de alimentación menores que ±10 % respecto a 230 V. Fuera de este rango, los receptores no funcionan según sus especificaciones nominales.

- **Desigualdad de validez**: El modelo es válido cuando el producto de corriente total por resistencia de cable es mucho menor que la tensión nominal. Prácticamente, cuando la caída de tensión en línea es menor que 5 V.

## Señales de fallo del modelo

El modelo ideal deja de ser aplicable cuando aparecen estos síntomas observables:

- **Caída de tensión medible**: Al conectar un receptor de alta potencia, la tensión en otros puntos de la instalación desciende apreciablemente (más de 5 V respecto a 230 V). Esto indica que la impedancia del cableado no es despreciable.


- **Calentamiento anormal de cables**: Si los conductores se calientan visiblemente sin que [[I_tot]] alcance [[I_max]], la resistencia del cable ha aumentado por envejecimiento o sección insuficiente.

- **Funcionamiento errático de receptores electrónicos**: Cuando aparatos con fuentes conmutadas (ordenadores, LED) presentan comportamiento inestable, suele deberse a caídas de tensión rápidas no capturadas por el modelo estático.

- **Medición de corriente superior a la calculada**: Si un amperímetro muestra valores de corriente total sistemáticamente mayores que los predichos por la fórmula, el factor de potencia es distinto de 1 o existen corrientes de fuga.

## Modelo extendido o alternativo

El **modelo extendido de red eléctrica** incorpora la impedancia del cableado y considera receptores con factor de potencia no unitario. En este modelo, la red se representa como una fuente de tensión ideal en serie con una resistencia interna (resistencia de los conductores de ida y vuelta).

La diferencia concreta respecto al modelo ideal es que la tensión en bornes de los receptores ya no es 230 V, sino menor debido a las pérdidas en el cableado. La tensión real en bornes es la nominal menos el producto de la corriente total por la resistencia de la línea.

Este modelo es necesario cuando el cableado es extenso o de sección reducida. La transición desde el modelo ideal al extendido debe realizarse cuando se cumple cualquiera de estas condiciones:

- La longitud de la línea supera los 30 metros con sección de 2,5 mm²
- Se observa caída de tensión mayor que 5 V al conectar cargas superiores a 2000 W
- Se calcula que [[I_max]] produciría una caída de tensión superior a 10 V en la línea
- Se trabaja con receptores inductivos o capacitivos significativos (motores, transformadores)

El modelo extendido también contempla la **potencia aparente**, distinta de la potencia activa [[P_tot]] cuando el factor de potencia es menor que 1. En este caso, la corriente total resulta mayor que la predicha por el modelo ideal, explicando por qué este subestima la corriente real.

## Transición entre modelos

### Cuando conviene cambiar de modelo

La transición del **modelo ideal** al **modelo extendido** debe realizarse cuando se detecta que las hipótesis simplificadoras dejan de cumplirse de forma significativa. Cambiar de modelo es conveniente y necesario en las siguientes situaciones:

- **Ante caídas de tensión medibles**: Cuando un amperímetro o multímetro revela que la tensión en bornes desciende más de 5 V respecto a los 230 V nominales al conectar cargas de alta potencia.

- **Con receptores inductivos predominantes**: Si la instalación alimenta principalmente motores (frigorífico, lavadora, bomba de agua), el factor de potencia distinto de 1 hace que el modelo ideal subestime sistemáticamente la corriente real.

- **En líneas eléctricas largas**: Cuando la distancia entre el cuadro de protección y los receptores supera los 30 metros, la resistencia del cableado ya no es despreciable y debe incluirse en el cálculo.

- **Para diseño profesional**: En instalaciones comerciales o proyectos eléctricos formales donde la precisión completa garantiza el cumplimiento normativo y la seguridad.

- **Ante anomalías inexplicables**: Cuando el magnetotérmico salta sin que el cálculo del modelo ideal indique sobrecarga, o cuando se observa calentamiento anormal de cables.

### Cómo realizar la transición

El cambio de modelo consiste en:

1. **Medir la resistencia de línea**: Determinar experimentalmente la resistencia de los conductores de ida y vuelta desde el cuadro hasta el punto de consumo.

2. **Incorporar el factor de potencia**: Medir o estimar el coseno de phi (cos φ) de los receptores inductivos principales.

3. **Recalcular con el modelo extendido**: Usar la fórmula completa que incluye la impedancia de línea y la potencia aparente en lugar de la potencia activa simple.

4. **Verificar el margen de seguridad**: Comprobar que la corriente calculada con el modelo extendido mantiene un margen de uso seguro respecto a [[I_max]].

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|:---|:---|:---|
| **Precisión** | Alta (error < 5 %) para receptores resistivos y líneas cortas | Muy alta (error < 2 %) considerando todas las pérdidas |
| **Complejidad** | Baja. Una sola fórmula lineal | Media. Requiere conocer la resistencia del cable y el factor de potencia |
| **Rango de aplicación** | Instalaciones domésticas estándar con cargas resistivas | Instalaciones extensas, industriales, o con motores |
| **Variables necesarias** | [[P_tot]], [[V]] | [[P_tot]], [[V]], factor de potencia, datos del cable |
| **Validez típica** | Circuitos de vivienda con menos de 30 m de cableado | Circuitos comerciales, líneas largas, cargas inductivas |
| **Ventaja principal** | Simplicidad y rapidez de cálculo | Precisión realista y seguridad garantizada |
| **Límite principal** | Falla silenciosamente con motores y líneas largas | Requiere datos adicionales difíciles de obtener para el usuario medio |
| **Cuándo usar** | Dimensionamiento rápido, comprobaciones ordinarias | Proyectos eléctricos formales, diagnóstico de problemas |

El modelo ideal es suficiente para la mayoría de las situaciones domésticas cotidianas. El modelo extendido solo es necesario cuando se detectan anomalías (disparos inesperados, calentamiento, caídas de tensión) o en instalaciones profesionales donde la precisión completa justifica el esfuerzo adicional de cálculo.
`;export{e as default};
