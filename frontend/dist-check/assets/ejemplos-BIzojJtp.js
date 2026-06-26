const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un cilindro con pistón adiabático contiene 0.02 m³ de nitrogeno (gas diatomico ideal, [[gamma]] = 1.4) a una presión inicial [[p1]] = 400 kPa y temperatura [[T1]] = 350 K. El gas se expande adiabáticamente de forma cuasiestatica hasta que su volumen llega a [[V2]] = 0.05 m³. Calcular la presión final [[p2]], la temperatura final [[T2]], el trabajo realizado por el gas [[W]] y el cambio de energía interna [[DeltaU]]. Interpretar el resultado físicamente.\r
\r
## Datos\r
\r
- [[V1]] = 0.02 m³\r
- [[V2]] = 0.05 m³\r
- [[p1]] = 400 000 Pa (400 kPa)\r
- [[T1]] = 350 K\r
- [[gamma]] = 1.4 (nitrogeno diatomico)\r
- Proceso: adiabático cuasiestatico (Q = 0)\r
\r
## Definición del sistema\r
\r
El sistema es el nitrogeno contenido en el cilindro. Las paredes del cilindro son adiabáticas, por lo que no hay intercambio de calor. El pistón puede moverse, permitiendo cambio de volumen y trabajo de expansión. El entorno es todo lo exterior al cilindro.\r
\r
## Modelo físico\r
\r
Se aplica el modelo de proceso adiabático reversible de gas ideal con [[gamma]] constante. Las variables relevantes son [[p1]], [[p2]], [[V1]], [[V2]], [[T1]], [[T2]], [[W]] y [[DeltaU]]. El modelo conecta estados inicial y final mediante la ley de la adiabata y calcula el trabajo a partir de los estados termodinámicos.\r
\r
## Justificacion del modelo\r
\r
El modelo es válido porque el nitrogeno a 400 kPa y 350 K esta muy lejos de su punto critico (126 K y 3.4 MPa), por lo que se comporta como gas ideal con buena precision. El proceso es cuasiestatico segun el enunciado, lo que garantiza que el gas pasa por estados de equilibrio y la ley adiabatica reversible aplica. La condición adiabatica se justifica por las paredes del cilindro que impiden el flujo de calor. El modelo deja de valer si la temperatura final cae demasiado (el nitrogeno se licuaria a 77 K) o si el proceso fuera tan rápido que generase ondas de choque.\r
\r
## Resolucion simbolica\r
\r
La presión final se obtiene de la ley de la adiabata:\r
\r
{{f:ley_adiabata_presion_volumen}}\r
\r
La temperatura final del gas tras la expansión adiabatica:\r
\r
{{f:cambio_temperatura_adiabatico}}\r
\r
El trabajo realizado por el gas durante la expansión adiabatica:\r
\r
{{f:trabajo_adiabatico_ideal}}\r
\r
El primer principio para proceso adiabático relaciona trabajo y energía interna:\r
\r
{{f:primer_principio_adiabatico}}\r
\r
## Sustitucion numerica\r
\r
Para la presión final, la razon de volumenes es [[V1]] / [[V2]] = 0.02 / 0.05 = 0.4. Elevando al exponente [[gamma]] = 1.4, se obtiene 0.4^1.4, que vale aproximadamente 0.288. Multiplicando por [[p1]] = 400 000 Pa, se obtiene una presión final de aproximadamente 115 400 Pa. Por tanto [[p2]] ≈ 115 400 Pa ≈ 115.4 kPa.\r
\r
Para la temperatura final, la razon es 0.4^0.4, que vale aproximadamente 0.693. Multiplicando por [[T1]] = 350 K, se obtiene aproximadamente 242.5 K. Por tanto [[T2]] ≈ 242.5 K, lo que corresponde a unos -30.5 °C.\r
\r
Para el trabajo, el numerador es [[p1]] [[V1]] - [[p2]] [[V2]] = 400 000 x 0.02 - 115 400 x 0.05 = 8 000 - 5 770 = 2 230 J. Dividiendo entre [[gamma]] - 1 = 0.4, se obtiene [[W]] = 2 230 / 0.4 = 5 575 J. Por tanto [[W]] ≈ 5 575 J.\r
\r
Para la energía interna, el primer principio adiabático da [[DeltaU]] = -[[W]] = -5 575 J. Por tanto [[DeltaU]] ≈ -5 575 J.\r
\r
La comprobacion es que [[DeltaU]] + [[W]] = -5 575 + 5 575 = 0, consistente con Q = 0.\r
\r
## Validacion dimensional\r
\r
La ley de la adiabata tiene ambos lados con dimension de presión por volumen elevado a [[gamma]]:\r
\r
- Presión: \`[M L⁻¹ T⁻²]\`\r
- Volumen: \`[L³]\`\r
- Producto pV elevado a [[gamma]] tiene dimension proporcional a M por L elevado a (3[[gamma]]-1) por T elevado a -2, que se conserva en ambos lados.\r
\r
Para el trabajo:\r
\r
- Presión por volumen tiene dimension \`[M L² T⁻²]\` = julio. Desglose: \`[M L⁻¹ T⁻²] · [L³] = [M L² T⁻²]\` ✓\r
\r
Para la temperatura:\r
\r
- Razon de volumenes es adimensional; temperatura tiene dimension \`[Theta]\`; el resultado es en Kelvin. ✓\r
\r
## Interpretacion física\r
\r
El gas de nitrogeno experimento una expansión adiabatica en la que su volumen aumento 2.5 veces. Durante este proceso, el gas realizo un trabajo de aproximadamente 5 575 J sobre el pistón sin recibir ningún calor del entorno. La única fuente de esa energía fue la propia energía interna del gas, que disminuyo en la misma cantidad. Por tanto, la temperatura cayo de 350 K a aproximadamente 242.5 K, un descenso de unos 107 K. La magnitud del enfriamiento depende directamente de [[gamma]]: cuanto mayor sea [[gamma]], mayor sera el descenso de temperatura para la misma expansion.\r
\r
Este enfriamiento no es el resultado de transferir calor hacia el exterior, sino de la conversion directa de energía interna en trabajo mecánico. Fisicamente, las moleculas de nitrogeno tienen menos energía cinética promedio al final del proceso que al principio, lo que se manifiesta como una temperatura más baja. Si se quisiera devolver el gas al estado inicial sin calor, habria que comprimir el pistón con exactamente la misma cantidad de trabajo, lo que volveria a calentar el gas hasta 350 K.\r
\r
Si [[gamma]] fuera mayor, como en un gas monatomico (1.67), la temperatura final seria aun más baja porque el trabajo se distribuye entre menos grados de libertad y el impacto térmico por unidad de trabajo es mayor. Si la expansión fuera isotermica en lugar de adiabatica, el gas intercambiaria calor con el entorno durante la expansión para mantener [[T2]] = 350 K, y la curva en el diagrama pV seria diferente y menos inclinada. La diferencia entre las dos curvas ilustra el papel critico del intercambio de calor en determinar el estado final del gas.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Las centrales hidroelectricas con acumulacion por bombeo utilizan el proceso adiabático de forma indirecta en sus turbinas de aire comprimido (CAES, Compressed Air Energy Storage). En estos sistemas, el aire se comprime adiabáticamente durante las horas de exceso de electricidad y se almacena en cavernas subterraneas o depositos. Cuando se necesita electricidad, el aire se expande adiabáticamente a traves de una turbina, produciendo trabajo mecánico que mueve un generador. La temperatura del aire cae durante la expansión y sube durante la compresión, y ese ciclo de temperatura determina la eficiencia del sistema.\r
\r
## Estimacion física\r
\r
Un deposito contiene aire a [[p1]] = 7 MPa y [[T1]] = 320 K. El aire se expande adiabáticamente hasta [[p2]] = 0.1 MPa (presión atmosférica), con [[gamma]] = 1.4 para aire. La razon de presiones es 70:1. Usando la relación adiabatica entre presión y temperatura, la temperatura final es aproximadamente [[T2]] = 320 K x (0.1 / 7)^(0.4 / 1.4), que da unos 320 x 0.1^0.286 ≈ 320 x 0.52 ≈ 166 K. Por tanto [[T2]] ≈ 166 K, es decir, unos -107 °C.\r
\r
Este descenso de temperatura de más de 150 K es una limitacion importante del sistema CAES adiabático. A 166 K, el aire sigue siendo gaseoso (no se licua hasta 90 K), pero la turbina y las tuberias deben resistir esas temperaturas.\r
\r
El [[DeltaT_ad]] de -154 K obtenido con esta estimacion muestra que el almacenamiento de energía por compresión adiabatica va acompañado de cambios térmicos importantes que deben gestionarse para no dañar el equipo y para maximizar la energía recuperable.\r
\r
## Interpretacion\r
\r
Este ejemplo ilustra que el proceso adiabático no es solo un caso teorico de libro: es el nucleo de tecnologias de almacenamiento de energía a gran escala. El [[DeltaT_ad]] calculado no es un inconveniente menor; es el factor que limita la eficiencia del sistema y que ha motivado el desarrollo de sistemas CAES diabaticos (con intercambio de calor controlado) para mejorar la recuperacion de energía.\r
\r
Fisicamente, la energía almacenada en el aire comprimido no es solo energía mecánica de presión: parte se perdio como calentamiento adiabático durante la compresión (y habria que extraerla de nuevo como calentamiento externo antes de expandir para recuperar trabajo máximo). Esta es exactamente la razon por la que los sistemas CAES reales incluyen intercambiadores de calor: para recuperar la temperatura que el proceso adiabático habria enfriado y así obtener más trabajo en la expansión. La comprension del proceso adiabático es, por tanto, el punto de partida para diseñar sistemas de almacenamiento energético más eficientes.\r
`;export{e as default};
