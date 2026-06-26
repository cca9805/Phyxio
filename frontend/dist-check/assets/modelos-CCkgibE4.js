const e=`# Modelos de Mecanicas

## Modelo ideal

El modelo ideal de este leaf trata una onda mecanica como una perturbacion pequena que viaja por un medio material uniforme. El medio tiene inercia y una respuesta restauradora. La forma de onda se considera periodica, de modo que [[lambda]], [[f]] y [[v]] bastan para describir la repeticion del patron. La amplitud [[A]] mide el desplazamiento local, pero no fija por si sola la rapidez en el regimen lineal.

Para ilustrar un medio concreto se usa la cuerda ideal. En ese caso [[T]] representa la restauracion y [[mu]] representa la inercia lineal. El modelo no pretende describir todas las ondas mecanicas, sino dar una plantilla clara para reconocer que siempre hay soporte material y acoplamiento local entre regiones vecinas.

## Hipótesis

Las hipotesis son: medio continuo o suficientemente granular para aproximarlo como continuo, perturbaciones pequenas, propiedades uniformes, disipacion despreciable durante la observacion y periodicidad reconocible. Se supone que [[A]] es mucho menor que la escala geometrica del sistema, para que el medio no cambie sus propiedades por la propia deformacion.

En la cuerda ideal se anaden hipotesis especificas: tension [[T]] constante, densidad lineal [[mu]] uniforme, cuerda flexible, pequenas pendientes y ausencia de rozamiento importante. Si alguna de estas condiciones falla, la formula de cuerda puede seguir orientando cualitativamente, pero deja de ser un calculo fiable.

## Dominio de validez cuantitativo

Como criterio inicial, conviene exigir [[A]] menor que el 10 % de [[lambda]] para mantener lectura lineal de forma. Para la cuerda, se espera [[T]] positiva y [[mu]] positiva, con variaciones relativas menores que 5 % en el tramo observado. La longitud de onda debe ser mayor que la escala microscopica del medio; si [[lambda]] es comparable al espaciado entre elementos, el modelo continuo deja de ser adecuado.

El orden de magnitud de [[v]] debe ser compatible con el medio: metros por segundo en cuerdas flojas, cientos de metros por segundo en sonido en aire, y miles de metros por segundo en solidos. Un resultado fuera de esos rangos no se descarta automaticamente, pero exige justificar medio, tension, densidad y regimen.

## Señales de fallo del modelo

Una senal de fallo es que el medio no exista o no pueda deformarse. Otra es que la forma de onda se atenue tanto en una longitud de onda que la periodicidad ya no sea clara. Tambien falla si se confunde una onda de choque, una rotura o un transporte de masa con una onda mecanica periodica pequeña.

En cuerda, son señales de fallo una tension variable, grandes amplitudes, rigidez apreciable, extremos que imponen modos estacionarios dominantes o rozamiento fuerte. Si el alumno necesita describir energia, potencia o disipacion, el modelo de este leaf debe ampliarse.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo depende del medio. Para sonido se usa un modelo de compresion y modulo volumetrico. Para ondas superficiales de agua se introducen gravedad, profundidad y tension superficial. Para solidos se usan modulos elasticos. Para pulsos no periodicos se analiza grupo, dispersion y espectro.

La transicion correcta no consiste en abandonar la idea de onda mecanica, sino en sustituir la ley que fija [[v]]. La relacion entre [[lambda]], [[f]] y [[v]] sigue siendo una lectura de patron, pero la formula que conecta rapidez con propiedades del medio cambia.

## Comparación operativa

Para clasificar el fenomeno, basta comprobar si hay medio material, desplazamiento local y propagacion. Para calcular rapidez desde un dibujo periodico, se usa la relacion con [[lambda]] y [[f]]. Para explicar por que una cuerda transmite mas rapido, se usa [[T]] y [[mu]]. Para sonido, agua o solidos, hay que pasar al modelo especifico. Esa decision operativa evita aplicar una formula correcta en el medio equivocado.
`;export{e as default};
