const e=`# Bloque sobre superficie\r
\r
## Contexto conceptual\r
\r
¿Por qué un objeto pesado puede permanecer inmóvil cuando empujamos suavemente, pero se acelera bruscamente cuando superamos cierto umbral? Este leaf estudia la dinámica de un bloque sobre superficie horizontal, donde la fricción juega un papel determinante.\r
\r
La fricción no es un "defecto" a eliminar, sino una fuerza fundamental que permite caminar, frenar vehículos y sujetar objetos. Sin fricción estática, los bloques deslizarían con cualquier fuerza mínima; sin fricción cinética, no podríamos controlar el movimiento una vez iniciado.\r
\r
El análisis conecta tres elementos: la fuerza aplicada [[F]], la resistencia de contacto (fricción [[f_s]] o [[f_k]]), y la respuesta inercial del bloque ([[m]]). La segunda ley de Newton gobierna el movimiento, pero solo después de verificar si la fuerza aplicada supera el umbral estático.\r
\r
## 🟢 Nivel esencial\r
\r
La intuición fundamental es simple: **la fricción se adapta para evitar el movimiento, hasta un límite máximo**. Cuando empujas un mueble, inicialmente no se mueve porque la fricción estática equilibra exactamente tu empuje. Si aumentas gradualmente la fuerza, el mueble permanece quieto... hasta que de repente se mueve.\r
\r
Ese punto de ruptura es el **umbral estático**: la máxima fuerza de fricción que puede resistir antes de que comience el deslizamiento. Una vez en movimiento, la fricción cambia de naturaleza: pasa de estática a cinética, generalmente siendo menor.\r
\r
Tres reglas intuitivas:\r
- **Sin empuje** → el bloque permanece en reposo (equilibrio natural)\r
- **Empuje pequeño** → fricción estática equilibra el empuje, no hay movimiento\r
- **Empuje grande** → superado el umbral, el bloque acelera según la segunda ley\r
\r
La magnitud [[mu_s]] (coeficiente de fricción estática) determina cuán "pegajoso" es el contacto. Materiales rugosos como el caucho sobre asfalto tienen [[mu_s]] aproximadamente 1; superficies pulidas como el hielo tienen [[mu_s]] aproximadamente 0.1.\r
\r
**Analogía cotidiana**: Imagina caminar sobre hielo versus asfalto seco. En asfalto, tus zapatos "agarran" firmemente porque el coeficiente de fricción es alto. En hielo, cada paso requiere cuidado extremo porque el umbral estático es muy bajo. La experiencia de resbalar en hielo es precisamente la transición súbita de fricción estática a cinética cuando tu pie supera el umbral.\r
\r
**Experimento mental**: Un libro sobre mesa. Empuja suavemente con un dedo; el libro no se mueve porque la fricción estática equilibra tu fuerza. Aumenta gradualmente el empuje; el libro aún no se mueve, pero la fricción estática internamente está ajustándose para contrarrestar. En cierto momento, cuando tu fuerza supera el umbral, el libro "cede" y comienza a deslizar. Sorprendentemente, una vez en movimiento, requiere menos fuerza para mantenerlo deslizando que para iniciar el movimiento.\r
\r
## 🔵 Nivel formal\r
\r
El peso del bloque determina la fuerza de contacto con la superficie. El peso gravitatorio se expresa mediante la masa [[m]] y la aceleración gravitatoria [[g]]:\r
\r
{{f:peso_gravitatorio}}\r
\r
[[W]] es la fuerza gravitatoria vertical dirigida hacia el centro de la Tierra. En superficie horizontal sin fuerzas verticales adicionales, la reacción normal del contacto iguala exactamente al peso, garantizando equilibrio vertical:\r
\r
{{f:normal_superficie}}\r
\r
La normal [[N]] es la fuerza de compresión perpendicular entre bloque y superficie. Esta magnitud acopla el eje vertical (peso) con el horizontal (fricción), siendo la variable que determina cuánta fuerza de fricción puede desarrollarse.\r
\r
El umbral estático máximo se calcula mediante el coeficiente de fricción estática [[mu_s]]:\r
\r
{{f:umbral_estatico}}\r
\r
[[f_s]] representa la máxima fuerza de fricción estática disponible antes del deslizamiento. Si la fuerza aplicada [[F]] es menor que este umbral, el bloque permanece en reposo. Si [[F]] iguala [[f_s]], estamos en el punto crítico de ruptura. Si [[F]] supera [[f_s]], el bloque comienza a acelerar.\r
\r
Una vez superado el umbral y establecido el movimiento, la fricción cinética [[f_k]] actúa como resistencia constante:\r
\r
{{f:friccion_cinetica}}\r
\r
[[f_k]] es la fuerza resistiva durante el deslizamiento continuo. Generalmente el coeficiente cinético [[mu_k]] es menor que el estático [[mu_s]], típicamente entre un 10% y 30% menor. Esta diferencia explica fenómenos cotidianos como por qué es más difícil iniciar el movimiento de un objeto pesado que mantenerlo deslizando una vez iniciado.\r
\r
La dinámica horizontal se gobierna por la segunda ley de Newton aplicada al eje de movimiento:\r
\r
{{f:segunda_ley_horizontal}}\r
\r
La aceleración [[a]] resulta de la diferencia entre fuerza motriz aplicada [[F]] y resistencia por fricción [[f_k]], dividida por la inercia [[m]]. Esta ecuación solo es válida cuando el objeto ya está en movimiento; para determinar si comienza a moverse, primero debemos comparar [[F]] con [[f_s]].\r
\r
## 🔴 Nivel estructural\r
\r
El dominio de validez del modelo de fricción de Coulomb está acotado por:\r
\r
**Límites de velocidad**: A velocidades muy altas (> 100 m/s), la fricción cinética deja de ser constante y puede disminuir o aumentar según el material. A velocidades extremas, aparece calentamiento significativo que modifica las propiedades de contacto.\r
\r
**Límites de presión**: A presiones de contacto muy altas, los materiales se deforman plásticamente y los coeficientes de fricción cambian. El modelo asume contacto elástico o rígido.\r
\r
**Límites de escala**: A escala microscópica (nanómetros), las fuerzas de adhesión molecular dominan sobre la fricción macroscópica. El modelo es válido para contactos donde el área aparente >> rugosidad superficial.\r
\r
La **transición estático-cinético** no es instantánea como predice el modelo ideal. En la realidad existe un régimen de "micro-deslizamiento" donde el contacto alterna entre adherido y deslizante. Esta transición dura típicamente milisegundos, despreciable para la mayoría de aplicaciones.\r
\r
Los **casos límite** revelan la lógica profunda:\r
- Si [[mu_s]] → 0: el bloque arranca con cualquier fuerza mínima\r
- Si [[mu_s]] → ∞: el bloque nunca se movería (adherencia perfecta)\r
- Si [[F]] < [[f_s]]: equilibrio estático, aceleración nula\r
- Si [[F]] = [[f_k]]: movimiento a velocidad constante (aceleración nula en régimen cinético)\r
\r
## Interpretación física profunda\r
\r
¿Por qué la fricción estática puede "adaptarse" hasta un máximo, mientras la cinética es fija? La fricción estática es una **fuerza de reacción vincular**: se ajusta para equilibrar otras fuerzas, hasta el límite impuesto por la rugosidad microscópica del contacto. Las irregularidades superficiales se "enganchan" entre sí; la fuerza necesaria para romper estos micro-enganches define [[f_s]].\r
\r
Una vez en movimiento, los picos de rugosidad se deslizan; la resistencia cinética es el promedio de deslizamientos continuos, menor que el máximo necesario para romper el contacto estático.\r
\r
La simetría es notable: duplicar [[m]] duplica [[W]], [[N]], [[f_s]] y [[f_k]]. Pero la inercia también se duplica, así que la aceleración permanece igual. La fricción escala con masa, pero la resistencia inercial también.\r
\r
La fricción cinética **opone el movimiento relativo**. Si empujas a la derecha y el bloque se mueve a la derecha, [[f_k]] apunta a la izquierda. Si el bloque se desliza a la izquierda por inercia, [[f_k]] apunta a la derecha, frenándolo.\r
\r
## Orden de magnitud\r
\r
Para desarrollar sentido físico, estos rangos típicos son útiles:\r
\r
- **Masa [[m]]**: desde 0.1 kg (libro) hasta 1000 kg (mueble pesado)\r
- **Fuerza aplicada [[F]]**: desde 1 N (soplo suave) hasta 500 N (empujón fuerte)\r
- **Reacción normal [[N]]**: igual al peso, de 1 N a 10 000 N típicamente\r
- **Coeficiente estático [[mu_s]]**: 0.1 (hielo/hielo) a 1.2 (caucho/asfalto seco)\r
- **Coeficiente cinético [[mu_k]]**: generalmente un 10-30 % menor que [[mu_s]]\r
- **Umbral estático [[f_s]]**: desde 0.1 N hasta miles de newtons según el sistema\r
- **Fricción cinética [[f_k]]**: proporcional a [[N]], típicamente 0.5-0.9 veces [[f_s]]\r
- **Aceleración [[a]]**: desde 0 (reposo o movimiento uniforme) hasta 10 m/s² en sistemas típicos\r
\r
El "test de cordura": si calculas que un libro de 1 kg requiere 500 N para arrancar ([[mu_s]] ≈ 50), hay un error conceptual. Los coeficientes de fricción raramente superan 1.5 para materiales comunes.\r
\r
## Método de resolución personalizado\r
\r
El procedimiento sistemático para resolver problemas de bloque sobre superficie es:\r
\r
1. **Calcular el peso y la normal**: Obtener [[W]] = [[m]]·[[g]], luego [[N]] = [[W]] para superficies horizontales sin fuerzas verticales adicionales.\r
\r
2. **Calcular el umbral estático**: Determinar [[f_s]] = [[mu_s]]·[[N]]. Esta es la fuerza máxima que puede resistir sin moverse.\r
\r
3. **Comparar fuerza aplicada con umbral**:\r
   - Si [[F]] ≤ [[f_s]]: el bloque está en reposo, fricción estática equilibra exactamente [[F]], aceleración nula\r
   - Si [[F]] > [[f_s]]: el bloque se acelera, pasa a régimen cinético\r
\r
4. **En régimen cinético**: Calcular [[f_k]] = [[mu_k]]·[[N]], luego aplicar segunda ley: [[a]] = ([[F]] − [[f_k]]) / [[m]]\r
\r
5. **Verificar coherencia**: La aceleración debe ser positiva en el sentido del empuje. Si [[F]] < [[f_k]] (caso raro tras arranque), el bloque frenaría hasta detenerse.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1 — Equilibrio dinámico**: Cuando [[F]] = [[f_k]], la fuerza neta es cero y el bloque se mueve a velocidad constante. Muchos errores surgen de confundir este equilibrio cinético con reposo estático.\r
\r
**Caso especial 2 — Frenado**: Si un bloque se desliza por inercia (sin [[F]]), la fricción cinética [[f_k]] frena. La aceleración es negativa: [[a]] = −[[f_k]]/[[m]]. El bloque se detiene cuando su energía cinética se disipa.\r
\r
**Ejemplo extendido — Arranque**: Las ruedas motrices ejercen fuerza sobre el asfalto. La fricción estática entre neumático y carretera impulsa el vehículo (la rueda empuja hacia atrás, la fricción reacciona hacia adelante). Si el par es excesivo, las ruedas patinan (régimen cinético con menor fricción) y el vehículo pierde tracción. El control de tracción limita el par para mantener [[F]] ≤ [[f_s]].\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué la fricción cinética es menor que la estática?**\r
En reposo, las micro-irregularidades se entrelazan en trabazones que requieren más fuerza para romper. En movimiento, los picos se deslizan sobre los valles sin engancharse completamente, ofreciendo menor resistencia.\r
\r
**¿La fricción estática realmente iguala exactamente la fuerza aplicada?**\r
Sí, hasta el umbral máximo. Si empujas con 3 N y [[f_s]] máximo es 10 N, la fricción estática real es exactamente 3 N (equilibrio perfecto). Solo cuando el empuje supera los 10 N, la fricción "cede" y el bloque acelera.\r
\r
**¿Qué pasa si la fuerza aplicada es exactamente igual al umbral estático?**\r
Es un punto de equilibrio inestable. Cualquier perturbación mínima iniciaría el movimiento. En la práctica, consideramos que el bloque está en el límite de arrancar.\r
\r
**¿Por qué es más fácil mantener un objeto en movimiento que iniciar el movimiento?**\r
Porque [[mu_k]] < [[mu_s]]. Una vez superado el umbral estático, la resistencia cae al valor cinético. Si empujabas justo lo suficiente para vencer [[f_s]], al arrancar tendrías exceso de fuerza neta (tu empuje ahora es mayor que [[f_k]]), produciendo aceleración repentina.\r
\r
**¿Dónde reaparece este tema en la física avanzada?**\r
En tribología (ciencia de la fricción), en el estudio de stick-slip (vibraciones por fricción), en control de robots (evitar patinaje), y en dinámica de fluidos (fricción viscosa). El modelo de Coulomb es la base sobre la que se construyen modelos más sofisticados.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se conecta con otros nodos del árbol Phyxio:\r
\r
- **Prerrequisitos**: Segunda ley de Newton y concepto de fuerza. El diagrama de cuerpo libre es esencial; si no se domina, revisar esos leaves primero.\r
\r
- **Continuaciones naturales**: Bloque sobre plano inclinado (componentes del peso), máquina de Atwood (fricción en poleas), dinámica con rozamiento viscoso (modelos de velocidad-dependiente).\r
\r
- **Aplicaciones**: Diseño de frenos, sistemas de embrague, control de tracción vehicular, cintas transportadoras, sistemas de sujeción mecánica.\r
\r
- **Extensiones matemáticas**: Modelos de fricción velocity-weakening (Stribeck), oscilaciones por stick-slip, estabilidad de sistemas con fricción.\r
\r
- **Conexión histórica**: La comprensión de la fricción evolucionó desde Leonardo da Vinci (observaciones empíricas) hasta Amontons y Coulomb (leyes cuantitativas) en la física pre-newtoniana.\r
\r
## Síntesis final\r
\r
Has desarrollado una comprensión integrada de la dinámica del bloque sobre superficie. La fricción, lejos de ser un mero "obstáculo", es una fuerza fundamental que permite controlar el movimiento. El análisis combina:\r
\r
- **Equilibrio vertical**: peso [[W]] equilibrado por normal [[N]]\r
- **Transición estático-cinética**: umbral [[f_s]] = [[mu_s]]·[[N]] como barrera de arranque\r
- **Dinámica horizontal**: segunda ley [[a]] = ([[F]] − [[f_k]])/[[m]] una vez en movimiento\r
\r
La verdadera competencia no es calcular valores numéricos, sino predecir el régimen de comportamiento (reposo, arranque, movimiento acelerado, movimiento uniforme) ante una configuración dada de fuerzas y coeficientes de fricción.\r
`;export{e as default};
