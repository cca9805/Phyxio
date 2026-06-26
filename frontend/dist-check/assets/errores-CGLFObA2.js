const e=`## Errores conceptuales

### Error 1: Asociar el índice de refracción con la densidad mecánica del medio

**Por qué parece correcto**

En la experiencia cotidiana los materiales más "densos" (vidrio, diamante) tienen índices más altos, lo que lleva a generalizar que mayor densidad de masa implica mayor índice. Es una analogía intuitiva basada en la observación superficial.

**Por qué es incorrecto**

El índice de refracción depende de la **respuesta electromagnética** del material (polarizabilidad electrónica), no de su masa por unidad de volumen. El aceite de cedro tiene una densidad inferior a la del agua pero un índice superior (aproximadamente 1.52 frente a 1.33). La densidad mecánica no controla la velocidad de la fase óptica.

**Señal de detección**

El alumno predice índices mayores para materiales pesados sin consultar tablas ópticas, o intenta estimar [[n]] a partir de la densidad expresada en kilogramos por metro cúbico.

**Corrección conceptual**

El índice de refracción refleja la interacción entre el campo eléctrico de la luz y los electrones del material. Lo relevante es la polarizabilidad electrónica, no la masa.

**Mini-ejemplo de contraste**

El aire tiene una densidad de aproximadamente 1.2 kg/m³ y [[n]] cercano a 1.0003. El aerogel de sílice puede tener una densidad de 100 kg/m³ pero [[n]] cercano a 1.01. La relación entre ambas magnitudes no es directa ni proporcional.

### Error 2: Creer que la frecuencia de la luz cambia al entrar en un medio

**Por qué parece correcto**

Como la velocidad y la longitud de onda cambian al cruzar la interfaz, parece natural suponer que la frecuencia también se modifica. Es una generalización excesiva de la idea de que "todo cambia al entrar en otro medio".

**Por qué es incorrecto**

Las condiciones de contorno del campo electromagnético en la interfaz exigen que la oscilación tenga la misma frecuencia a ambos lados. Si la frecuencia cambiara, se acumularían crestas en la frontera hasta producir una discontinuidad física imposible.

**Señal de detección**

El alumno escribe que la frecuencia en el medio es distinta de la frecuencia en el vacío, o calcula una "nueva frecuencia" dividiendo la velocidad en el medio entre la longitud de onda del vacío.

**Corrección conceptual**

Al cruzar una interfaz, la frecuencia permanece constante. Solo cambian la velocidad [[v_medio]] y la longitud de onda [[lambda_medio]]. El color de la luz, determinado por su frecuencia, no se altera al pasar de un medio a otro.

**Mini-ejemplo de contraste**

Un láser rojo de 633 nm entra en un vidrio con [[n]] de 1.50. Dentro del vidrio la longitud de onda se reduce a 422 nm, pero la luz sigue siendo roja porque la frecuencia permanece inalterada. Si la frecuencia cambiara, el color percibido dentro del vidrio sería diferente, lo cual contradice la observación.

## Errores de modelo

### Error 3: Usar un índice constante para una fuente de luz blanca

**Por qué parece correcto**

En problemas escolares habituales se da un solo valor de [[n]] para el vidrio, por lo que el alumno asume que ese número vale para cualquier color.

**Por qué es incorrecto**

El índice varía con la longitud de onda (dispersión). Para un vidrio BK7, [[n]] vale aproximadamente 1.5168 a 589 nm pero 1.5224 a 486 nm. La diferencia parece pequeña, pero en un prisma produce una separación angular de varios grados entre rojo y violeta.

**Señal de detección**

El alumno calcula un único ángulo de refracción para luz blanca sin descomponerla en componentes espectrales, u obtiene una imagen sin aberración cromática con una lente simple.

**Corrección conceptual**

Para fuentes policromáticas se debe usar la curva de dispersión del material o, al menos, los valores de [[n]] para las longitudes de onda extremas del espectro visible.

**Mini-ejemplo de contraste**

Un prisma equilátero de vidrio BK7 con luz blanca produce un abanico angular de aproximadamente 1.8 grados entre rojo y violeta. Si se usa un solo valor promedio de [[n]], el cálculo predice un rayo de salida único sin separación de colores, resultado claramente contradictorio con la observación del arcoíris del prisma.

## Errores matemáticos

### Error 4: Medir ángulos desde la superficie en vez de desde la normal

**Por qué parece correcto**

Algunos diagramas escolares muestran el rayo y la superficie, y el ángulo entre ellos parece el dato más inmediato. La confusión se refuerza porque en trigonometría básica se trabajan ángulos respecto a la base.

**Por qué es incorrecto**

La ley de Snell exige que tanto [[theta_1]] como [[theta_2]] se midan desde la **normal** a la superficie. Usar el complementario invierte el seno y coseno, produciendo un resultado erróneo.

**Señal de detección**

El alumno obtiene un ángulo de refracción mayor que el de incidencia al pasar de aire a vidrio, o aplica la ley de Snell con cosenos en lugar de senos.

**Corrección conceptual**

Siempre trazar la normal a la superficie primero y medir los ángulos desde ella. Si el problema da el ángulo respecto a la superficie, restar de 90 grados para obtener el ángulo correcto.

**Mini-ejemplo de contraste**

Un rayo incide a 30 grados de la superficie de un vidrio con [[n]] de 1.50. El ángulo correcto respecto a la normal es 60 grados. Si se usa 30 grados directamente en la ley de Snell se obtiene un ángulo de refracción de 19.5 grados; con el ángulo correcto (60 grados) se obtiene 35.3 grados. La diferencia es muy significativa.

## Errores de interpretación

### Error 5: Creer que un índice menor que uno viola la relatividad

**Por qué parece correcto**

El alumno sabe que nada puede viajar más rápido que la luz, y si [[n]] fuera menor que uno, [[v_medio]] superaría [[c]]. La conclusión parece directa.

**Por qué es incorrecto**

El índice menor que uno se refiere a la **velocidad de fase**, no a la velocidad de grupo ni a la velocidad de transporte de energía. La relatividad prohíbe que la **información** viaje más rápido que [[c]], pero la velocidad de fase no transporta información.

**Señal de detección**

El alumno descarta como "imposible" un índice medido experimentalmente menor que uno en ciertas bandas de frecuencia, o afirma que la medición debe ser incorrecta sin analizar la diferencia entre velocidad de fase y de grupo.

**Corrección conceptual**

En bandas cercanas a resonancias atómicas, la velocidad de fase puede superar [[c]] sin violar la relatividad. El dato clave es la velocidad de grupo, que sigue siendo menor que [[c]] en condiciones normales.

**Mini-ejemplo de contraste**

Los rayos X en muchos materiales tienen un índice ligeramente inferior a uno (por ejemplo, 0.9999 en vidrio). La velocidad de fase supera ligeramente [[c]], pero los pulsos de rayos X viajan a una velocidad de grupo inferior, y ninguna señal se transmite más rápido que la luz.

## Regla de autocontrol rápido

Antes de dar por válido un cálculo con el índice de refracción, verificar tres cosas: que [[n]] sea mayor o igual a uno para medios convencionales, que la longitud de onda en el medio sea menor que la del vacío, y que el ángulo de refracción disminuya respecto al de incidencia cuando el rayo entra en un medio de mayor índice. Si alguna de estas condiciones no se cumple, revisar datos y procedimiento.
`;export{e as default};
