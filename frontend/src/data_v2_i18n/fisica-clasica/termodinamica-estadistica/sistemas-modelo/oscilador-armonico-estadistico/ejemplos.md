# Ejemplo tipo examen


## Enunciado

Un modo vibracional se modela como oscilador armónico estadístico en equilibrio con un baño térmico. Se quiere estimar [[energia_media]] y decidir si el tratamiento clásico es razonable cuando se conocen [[temperatura]] y [[frecuencia_angular]]. El objetivo no es seguir una partícula concreta, sino leer el promedio térmico de muchos estados posibles.

## Datos

- [[temperatura]]: 300 K
- [[frecuencia_angular]]: 1,0·10¹³ s⁻¹
- [[constante_boltzmann]]: 1,38·10⁻²³ J/K
- [[hbar]]: 1,05·10⁻³⁴ J·s
- Sistema: un único modo armónico no degenerado

## Definición del sistema

El sistema es un modo vibracional aislado en cuanto a su identidad dinámica, pero en contacto térmico con un baño. El baño fija [[temperatura]], mientras el modo conserva una [[frecuencia_angular]] constante. La magnitud buscada, [[energia_media]], describe el promedio estadístico de energía del modo. No se calcula la energía de una oscilación individual ni la posición instantánea del sistema.

## Modelo físico

Se usa el oscilador armónico cuántico en equilibrio canónico. Los niveles están etiquetados por [[numero_cuantico]], separados por [[energia_cuantica]], y sus pesos se normalizan mediante [[funcion_particion]]. La probabilidad de cada nivel es [[probabilidad_ocupacion]]. Si la escala térmica supera claramente a la separación de niveles, puede compararse con el límite clásico de equipartición.

## Justificación del modelo

El modo tiene una frecuencia definida y se supone que la amplitud térmica no rompe la aproximación armónica. Además, el baño térmico es estable: [[temperatura]] no cambia durante la observación. La comparación entre la energía térmica y [[energia_cuantica]] es esencial porque decide si muchos niveles participan o si solo unos pocos importan. Este punto responde directamente a la pregunta física: [[energia_media]] no depende solo de calentar, también depende de cuánto cuesta subir un nivel.

## Resolución simbólica

Primero se define la escala inversa de energía térmica:

{{f:beta_inversa_termica}}

Después se calcula la separación energética fijada por [[hbar]] y [[frecuencia_angular]]. La distribución de ocupaciones se obtiene con:

{{f:probabilidad_ocupacion_n}}

La normalización aparece en:

{{f:funcion_particion_cuantica}}

Finalmente se evalúa la energía media cuántica:

{{f:energia_media_cuantica}}

Para contrastar, se revisa el límite clásico:

{{f:limite_clasico_equiparticion}}

## Sustitución numérica

La escala térmica vale aproximadamente 1,38·10⁻²³ J/K por 300 K, es decir 4,14·10⁻²¹ J. La separación cuántica vale aproximadamente 1,05·10⁻³⁴ J·s por 1,0·10¹³ s⁻¹, es decir 1,05·10⁻²¹ J. La escala térmica es unas cuatro veces mayor que [[energia_cuantica]], por lo que varios niveles excitados participan, aunque la discreción no es despreciable. El límite clásico daría [[energia_media]] del orden de 4·10⁻²¹ J, mientras la expresión cuántica conserva la corrección de punto cero.

## Validación dimensional

[[constante_boltzmann]] por [[temperatura]] tiene dimensión de energía porque J/K por K produce J. [[hbar]] por [[frecuencia_angular]] también produce energía porque J·s por s⁻¹ produce J. [[beta]] tiene dimensión inversa de energía. [[funcion_particion]] y [[probabilidad_ocupacion]] son adimensionales. Por tanto, [[energia_media]] queda correctamente en julios.

## Interpretación física

El resultado indica un régimen intermedio. La [[temperatura]] no es tan baja como para dejar al sistema congelado en el estado fundamental, porque la escala térmica supera a [[energia_cuantica]]. Sin embargo, tampoco es enorme frente a la separación de niveles, así que el límite clásico es una aproximación útil pero no perfecta. Físicamente, aumentar [[temperatura]] repartiría más [[probabilidad_ocupacion]] hacia niveles altos y elevaría [[energia_media]]. Aumentar [[frecuencia_angular]] haría más caros los saltos, subiría la energía de punto cero y cambiaría la curva esperada. La lectura correcta es comparar escalas antes de decidir qué fórmula domina. La [[funcion_particion]] no cambia de signo ni se anula para parámetros físicos positivos, lo que sirve de comprobación interna rápida del resultado obtenido.

# Ejemplo de aplicación real


## Contexto

En un sólido molecular, una vibración interna puede aproximarse como oscilador armónico. Medir cómo cambia su contribución energética con [[temperatura]] ayuda a entender calor específico, almacenamiento térmico y activación de modos vibracionales. Cada modo tiene su propia [[frecuencia_angular]], así que dos vibraciones en el mismo material no tienen por qué aportar la misma [[energia_media]].

## Estimación física

Supón un modo con [[frecuencia_angular]] de 5·10¹² s⁻¹ a [[temperatura]] ambiente. Su [[energia_cuantica]] es del orden de 5·10⁻²² J, menor que la escala térmica aproximada de 4·10⁻²¹ J. Esa comparación sugiere que el modo está bastante activado y que el límite clásico puede dar una estimación razonable de [[energia_media]]. Si otro modo tuviera [[frecuencia_angular]] diez veces mayor, la separación ya sería comparable o superior a la escala térmica, y la ocupación excitada disminuiría.

## Interpretación

La aplicación muestra por qué la frecuencia de un modo es tan importante como la [[temperatura]] del entorno. En materiales reales, no todos los grados de libertad se “encienden” al mismo ritmo: los de menor [[frecuencia_angular]] se activan antes, mientras los de mayor [[frecuencia_angular]] conservan rasgos cuánticos durante más tiempo. La [[funcion_particion]] permite pasar de esa intuición a probabilidades y promedios, y [[energia_media]] resume el efecto observable.