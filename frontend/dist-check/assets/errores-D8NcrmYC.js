const e=`## Errores conceptuales

### Error 1: confundir fase con amplitud

**Por qué parece correcto:** al mirar una onda, la altura visible llama más la atención que el estado del ciclo.

**Por qué es incorrecto:** [[phi]] no mide tamaño de perturbación. Mide avance dentro del ciclo. Dos ondas con distinta amplitud pueden compartir fase.

**Señal de detección:** se afirma que una fase mayor significa una onda más intensa.

**Corrección conceptual:** separar tamaño de oscilación y posición dentro del ciclo.

**Mini-ejemplo de contraste:** dos señales pueden cruzar el equilibrio al mismo tiempo aunque una tenga más amplitud.

### Error 2: creer que fase absoluta siempre tiene significado directo

**Por qué parece correcto:** [[phi]] aparece como un número concreto en el cálculo.

**Por qué es incorrecto:** la fase depende del origen y de la convención. Lo físicamente robusto suele ser [[Delta_phi]].

**Señal de detección:** se compara una fase de un experimento con otra sin revisar el origen.

**Corrección conceptual:** preguntar siempre qué referencia define [[phi0]].

**Mini-ejemplo de contraste:** cambiar el origen temporal desplaza todas las fases, pero no cambia el desfase entre dos micrófonos.

## Errores de modelo

### Error 3: aplicar una fase única a un pulso demasiado corto

**Por qué parece correcto:** cualquier señal ondulatoria parece tener subidas y bajadas.

**Por qué es incorrecto:** si no hay ciclos suficientes, una sola [[phi]] no describe el fenómeno de manera estable.

**Señal de detección:** el resultado cambia mucho al elegir otra zona del pulso.

**Corrección conceptual:** usar componentes espectrales o fase local.

**Mini-ejemplo de contraste:** una nota sostenida admite fase clara; un golpe seco necesita otra descripción.

## Errores matemáticos

### Error 4: olvidar que los radianes son adimensionales

**Por qué parece correcto:** rad parece una unidad independiente.

**Por qué es incorrecto:** el radián etiqueta el ciclo, pero no añade dimensión física.

**Señal de detección:** se rechaza una suma de términos de fase por creer que rad/m y rad/s no pueden combinarse tras multiplicar por posición y tiempo.

**Corrección conceptual:** comprobar que cada aporte termina como lectura angular de ciclo.

**Mini-ejemplo de contraste:** [[k]] multiplicado por distancia y [[omega]] multiplicado por tiempo dejan fase.

### Error 5: invertir [[omega]] y [[k]] al calcular [[v_phi]]

**Por qué parece correcto:** ambas magnitudes describen ritmos de fase.

**Por qué es incorrecto:** una mide ritmo temporal y la otra ritmo espacial; invertirlas produce una magnitud con unidades incompatibles.

**Señal de detección:** el resultado no tiene dimensión \`[L T⁻¹]\`.

**Corrección conceptual:** recordar que rapidez de fase compara avance temporal con repetición espacial.

**Mini-ejemplo de contraste:** en sonido, el resultado debe tener orden de cientos de m/s, no segundos por metro.

## Errores de interpretación

### Error 6: llamar retraso a cualquier signo negativo

**Por qué parece correcto:** el signo parece indicar atraso de forma automática.

**Por qué es incorrecto:** el significado del signo depende de la convención de propagación y de cómo se escriba la fase.

**Señal de detección:** se interpreta el signo sin mencionar dirección de propagación.

**Corrección conceptual:** fijar la convención antes de hablar de adelanto o retraso.

**Mini-ejemplo de contraste:** cambiar el signo usado para la propagación invierte la lectura verbal del desfase.

## Regla de autocontrol rápido

Antes de interpretar una fase, verifica cuatro cosas: qué origen define [[phi0]], qué convención de signo se usa, si la onda tiene ciclos reconocibles y si [[k]] y [[omega]] pertenecen a la misma componente. Si una de esas condiciones falla, no conviertas el número de fase en una lectura física fuerte.
`;export{e as default};
