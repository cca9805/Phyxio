const e=`\uFEFF## Problema histórico\r
\r
A mediados del siglo XVIII, los físicos y filósofos naturales observaban que el hielo se funda lentamente aunque el fuego ardiera junto a él a temperatura mucho mayor, y que el agua hirviente no superaba nunca cierta temperatura aunque se siguiera calentando con más fuerza. Estas observaciones contradecían la noción intuitiva de que más calor siempre produce más temperatura. La pregunta sin respuesta era: por qué desaparece el calor durante el cambio de estado sin producir ningún aumento de temperatura?\r
\r
La dificultad radicaba en que el modelo calórico de la época identificaba temperatura con "cantidad de calórico" en el cuerpo. Si el calor entraba en el hielo y la temperatura no subía, dónde iba el calórico? La respuesta requería separar conceptualmente temperatura y calor, lo cual aún no estaba articulado formalmente.\r
\r
## Dificultad conceptual previa\r
\r
El obstáculo principal era la identificación entre calor y temperatura en el pensamiento físico anterior a Black. Si calor y temperatura eran la misma cosa (o proporcionales), no tenía sentido que un cuerpo pudiera absorber calor sin subir de temperatura. Los experimentos de fusión del hielo a temperatura constante eran un misterio inexplicable con las herramientas conceptuales disponibles.\r
\r
La segunda dificultad era empírica: medir cuantitativamente el calor intercambiado durante un cambio de estado requería un calorímetro, que aún no existía como instrumento sistemático. Sin una medida cuantitativa, el fenómeno podía describirse cualitativamente pero no podía formularse como ley.\r
\r
## Qué cambió\r
\r
Joseph Black, entre 1757 y 1762, formuló el concepto de calor latente (del latín latens: escondido) a partir de observaciones sistemáticas de la fusión del hielo y la ebullición del agua. Black argumentó que el calórico no desaparecía, sino que se "escondía" en el sólido o en el vapor durante la transición, cambiando la estructura del material sin afectar a la temperatura. Llamó a este calor "latente" para distinguirlo del calor "sensible" que sí producía cambio de temperatura.\r
\r
Black cuantificó que fundir 1 libra de hielo a 0 C requería el mismo calórico que calentar 1 libra de agua desde 0 C hasta 60 F (aproximadamente 33 C), lo que daba una primera estimación de L_f del agua. También determinó que el calor latente de vaporización del agua era mucho mayor que el de fusión, aunque no pudo cuantificarlo con precisión.\r
\r
Johan Wilcke realizó de forma independiente experimentos similares en Suecia hacia 1772, llegando a resultados concordantes. James Watt usó el concepto de calor latente directamente en el diseño de su máquina de vapor mejorada: comprendió que condensar el vapor en el cilindro desperdiciaba energía porque había que volver a suministrar el [[Q_lat]] de vaporización en cada ciclo, y diseñó el condensador separado para evitar ese desperdicio.\r
\r
## Impacto en la física\r
\r
El descubrimiento del calor latente fue el segundo pilar de la calorimetría (junto con el calor específico formulado también por Black), y sentó las bases para la termodinámica del siglo XIX. Permitió explicar cuantitativamente el ciclo del agua en la naturaleza, las diferencias de temperatura entre climas oceánicos y continentales, y el funcionamiento de las máquinas de vapor.\r
\r
La introducción del calor latente en el análisis del ciclo de Carnot (1824) y de los ciclos de refrigeración (Perkins, 1834; Gorrie, 1844) fue directa. Sin el concepto de [[Q_lat]], el diseño sistemático de máquinas térmicas hubiera sido imposible.\r
\r
La explicación microscópica del calor latente tuvo que esperar a la teoría cinética de la materia y a la termodinámica estadística del siglo XIX y principios del XX. Boltzmann y Clausius explicaron que [[L]] mide la energía necesaria para romper los vínculos energéticos entre las moléculas durante la transición: en la fusión, las fuerzas de largo alcance del cristal; en la vaporización, prácticamente todas las fuerzas de cohesión intermolecular.\r
\r
## Conexión con física moderna\r
\r
El calor latente tiene una descripción precisa en la mecánica estadística: es la diferencia de entalpía entre las dos fases en equilibrio a [[T_trans]]. En el lenguaje de las transiciones de fase de primer orden (Ehrenfest, 1933), el salto en la entalpía a [[T_trans]] es exactamente [[Q_lat]] = [[m]]  [[L]], mientras que en las transiciones de segundo orden (como la transición ferromagnética) no hay calor latente y [[L]] es cero.\r
\r
El concepto de calor latente aparece también en física de partículas como análoga: la "transición de fase" del plasma de quarks y gluones al estado hadrónico en el universo primordial, unas microsegundos después del Big Bang, liberó una cantidad análoga a un calor latente que contribuyó a la nucleosíntesis primordial. El calor latente de los cambios de estado ordinarios y el de estas transiciones de fase cosmológicas comparten la misma descripción matemática de la termodinámica estadística.\r
\r
\r
`;export{e as default};
