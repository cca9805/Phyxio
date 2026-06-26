# Ejemplo tipo examen

## Enunciado

Se estudia una maniobra de correccion orbital de un satelite pequeno. La pregunta no es solo cuanto vale [[DeltaV]], sino si la maniobra pedida cabe en el combustible disponible y que magnitud conviene redisenar si el presupuesto no cierra. El problema debe leerse con la ecuacion ideal p, pero tambien con sus despejes p_solve_mf, m0_from_p y p, porque el objetivo real no es repetir la formula de Tsiolkovski sino tomar una decision de diseno.

## Datos

El satelite tiene masa inicial [[m0]] de 1200 kg antes del encendido. La velocidad efectiva de eyeccion [[ve]] del motor vale 2500 m/s. El operador quiere analizar dos escenarios. En el primero, la masa final [[mf]] tras la maniobra seria 800 kg y se desea conocer el [[DeltaV]] alcanzable. En el segundo, se exige una maniobra de 1500 m/s y hay que averiguar que [[mf]] quedaria realmente. Como auditoria adicional, se pregunta cuanta [[m0]] haria falta si se quisiera mantener [[mf]] igual a 800 kg, y que [[ve]] seria necesaria si no pudiera aumentarse [[m0]].

## Definicion del sistema

El sistema se define como el cohete o satelite instantaneo cuyo combustible restante aun viaja con la nave. La masa eyectada queda fuera de la frontera una vez expulsada, y por eso la ecuacion del cohete no se interpreta como una fuerza aplicada por el vacio, sino como la consecuencia de expulsar masa con velocidad relativa [[ve]]. Esa definicion importa porque el leaf no trata la dinamica completa de la pluma ni las perdidas atmosfericas, sino la relacion entre el combustible que deja de pertenecer al sistema y el cambio de velocidad que adquiere la masa que permanece.

## Modelo fisico

El modelo minimo usa la formula fundamental p, que conecta [[DeltaV]], [[ve]], [[m0]] y [[mf]] mediante el logaritmo de la razon de masas. En lectura directa, p responde a la pregunta mas comun: cuanta capacidad de maniobra sale de un motor y de una reserva de propelente dadas. En lectura inversa, [[mf]] y p_solve_mf sirven para reconstruir la masa final admisible; m0_from_p sirve para estimar la masa inicial necesaria; y p sirve para preguntar que calidad de propulsion exigiria una mision concreta. El modelo es razonable porque el encendido se idealiza breve y sin perdida gravitacional dominante.

## Justificacion del modelo

La justificacion fisica debe explicar por que el regimen ideal del leaf es defendible. Aqui lo es porque se trata de una maniobra corta en orbita, donde el empuje actua en una ventana temporal limitada y la gravedad no se modela como una perdida comparable a todo el [[DeltaV]]. Tambien se supone que [[ve]] puede tomarse constante durante el encendido y que la estructura final del satelite ya esta incluida en [[mf]]. Si alguna de esas hipotesis dejara de ser valida, la ecuacion seguiria dando una primera estimacion, pero no una lectura suficiente para aprobar una maniobra real.

## Resolucion simbolica

{{f:dv}}

La resolucion simbolica empieza con la lectura directa. Usando p, el cambio de velocidad se obtiene del logaritmo de la razon de masas multiplicado por la velocidad de eyeccion. Si lo que se desconoce es la masa final admisible, entonces p_solve_mf y la formula derivada [[mf]] reescriben el problema como una exponencial decreciente. Si el objetivo se formula al reves, es decir, "que masa inicial necesito para lograr cierto cambio de velocidad y conservar una masa final fijada", entonces entra m0_from_p. Y si la restriccion fuerte no es la masa sino el motor disponible, p convierte la ecuacion del cohete en una exigencia tecnologica sobre la propulsion. Esa variedad de despejes es parte central del leaf: la ecuacion no es solo descriptiva, es una herramienta de diseno.

## Sustitucion numerica

En el escenario directo, con [[m0]] igual a 1200 kg, [[mf]] igual a 800 kg y [[ve]] igual a 2500 m/s, la razon de masas vale 1,5. Aplicando `p`, el logaritmo natural de 1,5 es aproximadamente 0,405, asi que el cambio de velocidad resulta cercano a 1014 m/s. La maniobra es moderada y no agota toda la reserva de propelente.

En el escenario inverso, se pide un cambio de velocidad de 1500 m/s con el mismo motor y la misma masa inicial. Usando `p_solve_mf`, se obtiene una masa final cercana a 659 kg. Eso significa que para conseguir la maniobra deseada habria que terminar con bastante menos masa final que en el caso base.

Si se quiere conservar [[mf]] igual a 800 kg y aun asi obtener 1500 m/s, `m0_from_p` da una masa inicial de aproximadamente 1458 kg. Y si ni la masa inicial ni la final pudieran cambiar, `p` exigiria una velocidad de eyeccion de unos 3700 m/s. Esa cifra ya apunta a un motor mas eficiente que el inicialmente disponible.

## Validacion dimensional

La validacion dimensional comprueba que [[DeltaV]] y [[ve]] queden en m/s, y que [[m0]] y [[mf]] queden en kg. Tambien obliga a revisar restricciones fisicas que no son solo algebraicas: debe cumplirse [[m0]] mayor que [[mf]], [[mf]] mayor que cero y el logaritmo debe aplicarse a una razon de masas sin unidades. Si un calculo devolviera [[mf]] mayor que [[m0]], no seria un simple despiste numerico: indicaria que el sentido fisico de la maniobra se ha invertido o que se ha usado mal el signo del exponente.

## Interpretacion fisica

La lectura fisica no termina en decir que el satelite gana velocidad. El resultado de `p` significa que la capacidad de reconfigurar la orbita depende directamente de cuanta masa inicial se convierte en gases expulsados. La lectura de `p_solve_mf` indica cuanto margen estructural o de carga util sobrevive despues de pagar un cambio de velocidad dado. `m0_from_p` deja ver el coste inicial del objetivo, y `p` transforma una exigencia de mision en una exigencia sobre la propulsion. Por tanto, el nucleo del leaf es precisamente este: el muro logaritmico implica que cada aumento de velocidad depende de forma no lineal de la masa consumida, y eso obliga a tomar decisiones de diseno donde intervienen compromisos entre rendimiento, masa superviviente y calidad de propulsion.

# Ejemplo de aplicacion real

## Contexto

En una revision de mision real, nadie pregunta solo "cuanto da la formula". La pregunta util es si el presupuesto de [[DeltaV]] cierra con la masa seca, la masa de propelente y el motor disponible. En satelites pequenos, un error de unos cientos de m/s puede significar perder una insercion orbital, reducir vida util o renunciar a una correccion de plano.

## Estimacion fisica

Antes de hacer cuentas, una estimacion de orden de magnitud ya anticipa que pasar de 1000 a 1500 m/s no cuesta un 50 por ciento mas de combustible de forma lineal, sino bastante mas. Tambien se anticipa que aumentar la velocidad de eyeccion es muy valioso porque reduce la razon de masas necesaria de forma aproximada. Esa intuicion previa, que puede verificarse con escalas tipicas de propulsion quimica, sirve para detectar resultados absurdos: si un informe asegura duplicar la capacidad de maniobra casi sin cambiar ni la masa inicial ni la velocidad de eyeccion, el problema no esta en la revision de mision sino en la lectura del modelo.

## Interpretacion

La decision final del ejemplo es clara. Con el motor actual y [[m0]] igual a 1200 kg, la maniobra de 1500 m/s deja [[mf]] demasiado baja si el satelite necesita terminar pesado por requisitos de carga util o potencia. Hay tres salidas fisicas distintas: aceptar una masa final menor, aumentar [[m0]], o buscar un motor con mayor [[ve]]. Eso es exactamente lo que debe enseñar el leaf: la ecuacion del cohete no da un unico numero para memorizar, sino un mapa de compromisos entre rendimiento, masa superviviente y calidad de propulsion.



