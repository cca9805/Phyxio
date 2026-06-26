const e=`# Ejemplos tipicos\r
\r
## Contexto conceptual\r
\r
Este leaf organiza una familia clasica de escenarios donde aparece la misma pregunta dinamica: ¿que fuerza real, o que combinacion de fuerzas, produce la resultante radial [[Frad]] necesaria para sostener una trayectoria curva? La respuesta cambia segun el contexto fisico, pero la estructura causal es la misma.\r
\r
La idea didactica central es evitar que el estudiante trate cada escena como receta independiente. Cuerda, curva plana, peralte, loop y orbita no son capitulos inconexos. Son variaciones de un mismo esquema radial en el que la aceleracion [[ac]] describe la exigencia de curvatura y la fuerza radial efectiva describe la causa mecanica.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial conviene mirar primero la historia causal, no las ecuaciones. Si un cuerpo gira, su velocidad cambia de direccion de forma continua. Ese cambio requiere una accion hacia el centro. Esa accion no aparece por arte de magia: la aportan fuerzas reales del entorno.\r
\r
La idea minima que debe quedar clara es esta: toda curvatura exige una causa material hacia el centro. Luego, en cada escenario concreto, alguna interaccion real debe sostener esa demanda. En ciertos montajes aparece como tiron de cuerda ([[Tn]]), en otros como contacto lateral ([[fs]]). Lo importante aqui no es clasificar todos los casos tecnicos, sino evitar dos errores de base: creer que la curvatura se mantiene sola y confundir requerimiento con causa.\r
\r
La intuicion correcta, entonces, es unica: toda trayectoria curva exige soporte radial, y ese soporte tiene limites fisicos. El objetivo inicial del analisis es identificar la fuente radial dominante y decidir si existe margen antes de entrar al detalle algebraico.\r
\r
## 🔵 Nivel formal\r
\r
Ahora se formaliza la misma historia con relaciones del leaf.\r
\r
**Ecuacion radial base:**\r
\r
{{f:base_radial}}\r
\r
Relaciona demanda radial con [[m]], [[v]] y [[r]]. Es la pieza estructural comun para todos los ejemplos.\r
\r
**Cuerda horizontal:**\r
\r
{{f:cuerda_tension}}\r
\r
Muestra el caso donde la fuente radial principal es [[Tn]].\r
\r
**Velocidad max en curva plana:**\r
\r
{{f:curva_plana_velocidad_max}}\r
\r
Conecta geometria y adherencia a traves de [[mu]], [[g]] y [[r]] para estimar limite de no derrape.\r
\r
**Curva peraltada sin rozamiento:**\r
\r
{{f:peralte_ideal}}\r
\r
Expresa la rapidez de diseno asociada a un peralte [[th]] cuando la friccion no es la fuente principal.\r
\r
**Contacto minimo en la cima del loop:**\r
\r
{{f:loop_contacto_minimo}}\r
\r
Da el umbral de velocidad para conservar contacto en el punto mas exigente del loop.\r
\r
**Orbita circular:**\r
\r
{{f:orbita_circular}}\r
\r
Extiende el mismo esquema radial al caso gravitatorio con [[G]], [[M]] y [[r]].\r
\r
La lectura formal correcta no es memorizar seis formulas sueltas, sino ver que cada una explicita quien aporta [[Frad]] bajo un conjunto de supuestos.\r
\r
En este nivel conviene seguir una secuencia estable para no perder coherencia entre expresiones. Primero se identifica la cantidad objetivo del subcaso (velocidad limite, tension, condicion de contacto o velocidad orbital). Despues se selecciona la ecuacion radial pertinente y se sustituyen datos con unidades consistentes. Por ultimo se interpreta si el valor obtenido cae en una zona operativa razonable.\r
\r
Tambien es util distinguir ecuacion estructural y ecuacion de cierre. La estructural fija la logica comun del problema; la de cierre incorpora la fisica particular del escenario (adherencia, geometria, contacto o gravitacion). Esta separacion evita mezclar pasos y mejora la trazabilidad del resultado cuando se revisa un procedimiento.\r
\r
Un chequeo formal minimo incluye tres validaciones: signos coherentes con el convenio de ejes, dimensiones correctas en cada termino y tendencia cualitativa esperada al variar parametros. Si estas tres pruebas fallan, el problema no se considera cerrado aunque el numero final parezca plausible.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural compara limites de validez y decisiones de modelado.\r
\r
1. **Sensibilidad a [[v]]**: en varios subcasos, subir velocidad incrementa de forma fuerte la exigencia radial.\r
2. **Dependencia de contacto**: en curva plana, el margen depende de [[mu]] y condicion superficial.\r
3. **Redistribucion geometrica**: en peralte, cambiar [[th]] modifica el reparto radial entre fuerzas de contacto.\r
4. **Condicion critica de contacto**: en loop, la cima obliga a verificar umbral minimo de velocidad.\r
5. **Cambio de escala, misma logica**: en orbita cambian magnitudes, no la estructura causal radial.\r
\r
Este nivel permite decidir cuando un resultado es util para operar y cuando el modelo requiere ampliacion.\r
\r
La diferencia clave respecto del nivel formal es que aqui no solo se pregunta "cuanto da", sino "que tan confiable es lo que da". Una misma solucion numerica puede ser suficiente para aprendizaje de aula y, al mismo tiempo, insuficiente para una decision de seguridad.\r
\r
En terminos de decision, conviene separar tres zonas. Zona estable: cambios moderados de parametros no alteran conclusion operativa. Zona sensible: pequenas variaciones en velocidad, radio o adherencia pueden mover el sistema de seguro a critico. Zona no valida: los supuestos del modelo dejan de representar la fisica dominante y se debe cambiar de marco.\r
\r
Tambien importa la trazabilidad causal. Si el informe final no deja claro quien aporta la fuerza radial y bajo que condicion deja de aportarla, el numero pierde valor tecnico. Un buen cierre estructural declara variable de control, umbral critico y accion recomendada para recuperar margen.\r
\r
## Interpretación física profunda\r
\r
La interpretacion fisica robusta responde tres preguntas: que se exige, quien lo sostiene y con que margen. Si no se responden las tres, el resultado numerico queda incompleto.\r
\r
En practica, la mayor fuente de error no es algebraica sino conceptual: tratar [[Fc]] como fuerza extra independiente. En este leaf, [[Fc]] se interpreta como modulo de la exigencia radial y debe coincidir con una fuente real del problema (tension, normal, friccion o gravedad).\r
\r
Tambien importa distinguir estabilidad nominal de estabilidad robusta. Un sistema puede cumplir en condiciones ideales y fallar ante pequeñas variaciones de velocidad o adherencia. Por eso, junto al valor calculado, siempre debe reportarse una lectura de margen y un limite operativo.\r
\r
## Orden de magnitud\r
\r
Referencias utiles para chequeo rapido:\r
\r
**[[m]]**: 0.01 - 10000 kg\r
\r
**[[r]]**: 0.1 - 10000000 m\r
\r
**[[v]]**: 0.1 - 10000 m/s\r
\r
**[[ac]]**: 0.01 - 100000 m/s^2\r
\r
**[[Frad]]**: 0.01 - 100000 N\r
\r
**[[Fc]]**: 0.01 - 100000 N\r
\r
**[[Tn]]**: 0 - 10000 N\r
\r
**[[Nn]]**: 0 - 100000 N\r
\r
**[[fs]]**: 0 - 50000 N\r
\r
**[[mu]]**: 0.1 - 1.2\r
\r
**[[g]]**: 9.8 m/s^2\r
\r
**[[th]]**: 0 - 1.0 rad\r
\r
**[[G]]**: 6.674e-11\r
\r
**[[M]]**: 1e20 - 2e30 kg\r
\r
## Método de resolución personalizado\r
\r
1. Clasificar el ejemplo tipico y declarar su fuente radial esperada.\r
2. Fijar ejes y explicitar supuestos de validez.\r
3. Calcular demanda radial con la relacion base.\r
4. Aplicar la formula especifica del subcaso.\r
5. Verificar unidades, orden de magnitud y margen fisico.\r
6. Cerrar con interpretacion causal y recomendacion operativa.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1:** cuerda con limite de resistencia cercano a la demanda.\r
\r
**Caso especial 2:** curva plana en transicion seca-humeda donde cambia [[mu]].\r
\r
**Caso especial 3:** loop con velocidad de entrada marginal respecto al umbral de contacto.\r
\r
**Caso especial 4:** orbita circular con cambio de radio que exige reajuste de velocidad.\r
\r
El ejemplo extendido integra estos cuatro patrones para entrenar transferencia entre contextos.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por que parecen formulas distintas si el fenomeno es el mismo?**\r
Porque cada una modela una fuente radial dominante diferente bajo supuestos diferentes.\r
\r
**¿Cuando sirve hablar de [[Fc]]?**\r
Cuando se deja claro que no es fuerza adicional, sino lectura del requerimiento radial.\r
\r
**¿Que variable debo vigilar primero en carretera?**\r
En curva plana, velocidad y adherencia; en peraltada, velocidad y coherencia con diseno de [[th]].\r
\r
**¿Por que incluir orbita en un leaf de ejemplos tipicos?**\r
Porque demuestra que el marco radial no depende del escenario y mejora transferencia conceptual.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta dinamica basica con seguridad vial, diseno de atracciones mecanicas y mecanica orbital introductoria. Tambien prepara el paso hacia modelos transitorios y no lineales cuando los supuestos simples dejan de ser validos.\r
\r
La ruta recomendada es: dominar causa radial en cuerda y curva plana, luego integrar peralte y loop, y finalmente usar orbita para consolidar transferencia de escala.\r
\r
## Síntesis final\r
\r
El valor de estos ejemplos tipicos no esta en acumular formulas, sino en entrenar una misma lectura causal en contextos distintos. Cuando identificas con precision quien produce [[Frad]], que limite tiene y como cambia el margen, pasas de resolver ejercicios a tomar decisiones fisicas justificadas.\r
`;export{e as default};
