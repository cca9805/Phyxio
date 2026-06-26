const e=`# Arrastre cuadratico\r
\r
## Contexto conceptual\r
\r
Este leaf no trata solo de calcular una fuerza resistiva. Su objetivo es enseñar a leer mecanismo fisico en dos lenguajes a la vez: la grafica [[F_d]] frente a [[v]] y el diagrama de cuerpo libre. En ambos, la idea central es la misma: cuando domina el regimen cuadratico, el crecimiento de [[F_d]] con [[v]] es muy rapido y cambia la toma de decisiones en diseño y control.\r
\r
La pregunta clave es por que, para el mismo cuerpo, pequenas variaciones de rapidez pueden producir saltos grandes en demanda de fuerza resistiva. La respuesta del leaf se organiza alrededor de [[c]], parametro equivalente que resume medio y geometria. En vez de tratar [[c]] como una constante misteriosa, el modelo la descompone con [[rho]], [[C_d]] y [[A]].\r
\r
Esto diferencia de manera clara este tema respecto a arrastre lineal. La diferencia de escalado se estudia en el nivel formal; aqui basta retener que el costo resistivo crece de forma no lineal y condiciona decisiones de seguridad, consumo energetico y velocidad objetivo.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial buscamos intuicion robusta, no algebra extensa. Imagina tres escenas:\r
\r
1. Un ciclista en llano que pasa de velocidad moderada a velocidad alta.\r
2. Un dron pequeño que intenta ganar rapidez horizontal en aire denso.\r
3. Una esfera que cae en agua y reduce aceleracion conforme avanza.\r
\r
En las tres escenas, la resistencia del medio aumenta con la rapidez de forma perceptible. La lectura esencial no necesita ecuaciones: basta reconocer que el entorno "castiga" mas cuando el sistema se mueve mas rapido.\r
\r
La fuerza resistiva no es un artificio matematico. Es una interaccion real entre cuerpo y fluido que condiciona esfuerzo, control y consumo.\r
\r
Tambien es clave distinguir velocidad respecto al suelo de velocidad respecto al medio. Esa diferencia cualitativa evita errores tempranos antes de entrar al nivel formal.\r
\r
En esta etapa, el estudiante debe quedarse con una idea directriz: el mismo objeto puede exigir respuestas distintas si cambian condiciones de medio o de geometria.\r
\r
## 🔵 Nivel formal\r
\r
La ley reducida del arrastre cuadratico se expresa como:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
Esta expresion concentra el comportamiento dominante cuando el flujo inercial gobierna la resistencia. Su lectura formal no es solo sustituir numeros: permite probar sensibilidad. Si [[v]] se multiplica por dos y [[c]] no cambia, [[F_d]] se acerca a cuatro veces su valor.\r
\r
Para abrir la caja negra de [[c]], usamos la relacion puente:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Aqui aparece la estructura fisica del parametro equivalente. [[rho]] recoge propiedades del medio; [[C_d]] resume forma y regimen; [[A]] mide cuanto "frente" expone el cuerpo al flujo. Esta descomposicion permite decisiones de ingenieria: mejorar postura, reducir area frontal efectiva o elegir condiciones de operacion con menor densidad cuando aplique.\r
\r
Un flujo formal correcto sigue una secuencia:\r
\r
1. Definir sistema y direccion de movimiento.\r
2. Declarar que [[v]] es relativa al fluido.\r
3. Elegir si se trabaja con [[c]] conocida o con [[rho]], [[C_d]], [[A]] conocidos.\r
4. Calcular [[F_d]] y revisar coherencia dimensional.\r
5. Interpretar si el valor obtenido es compatible con escenario y escala.\r
\r
En comprobacion dimensional, [[c]] debe portar unidades compatibles con fuerza dividida por rapidez al cuadrado. Si un despeje produce unidades incompatibles, la falla no es numerica menor: es error conceptual de modelo.\r
\r
El formalismo tambien ayuda a detectar no linealidad real en datos. Si al graficar [[F_d]] contra [[v]] se observa curvatura convexa ascendente y la razon de escalado se acerca al patron cuadratico, el modelo gana evidencia. Si la curva se vuelve casi lineal en un tramo, hay que revisar regimen y no imponer por inercia la ley cuadratica.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural pregunta por validez y fronteras. Un modelo vale por lo que explica y por lo que sabe declarar fuera de alcance.\r
\r
En este leaf, el dominio util del modelo requiere:\r
\r
1. Estabilidad razonable de [[C_d]] en el tramo estudiado.\r
2. Ausencia de cambios bruscos de orientacion del cuerpo.\r
3. Flujo y geometria comparables entre mediciones si se contrasta [[c]].\r
4. Error de ajuste dentro del margen acordado para la aplicacion.\r
\r
Si estas condiciones no se cumplen, la comparacion entre escenarios se vuelve engañosa. Por ejemplo, dos ensayos con misma [[v]] y distinta postura pueden cambiar [[C_d]] sin que el alumno lo advierta. El resultado parece "ruido" cuando en realidad es cambio de mecanismo.\r
\r
Otra frontera estructural es la transferencia entre leafs hermanos. No debe confundirse arrastre cuadratico con:\r
\r
- arrastre lineal, donde la proporcionalidad con [[v]] domina;\r
- coeficiente de arrastre como tema propio, centrado en interpretar [[C_d]];\r
- numero de Reynolds, que decide regimenes pero no reemplaza la ley operativa de fuerza;\r
- velocidad terminal, que integra fuerzas y equilibrio dinamico completo.\r
\r
La utilidad estructural de este leaf es concreta: identificar cuando conviene usar ley cuadratica reducida y cuando hay que migrar a modelo por tramos o a una descripcion de regimen variable.\r
\r
## Interpretación física profunda\r
\r
Interpretar profundo significa traducir numeros en mecanismo. Si un calculo entrega [[F_d]] alta a velocidad alta, la lectura correcta no es "la cuenta dio grande"; es "el medio esta penalizando con no linealidad fuerte". Esa frase causal orienta decisiones de control.\r
\r
Tambien importa leer compensaciones. En un DCL horizontal, aumento de [[F_d]] implica mayor fuerza de traccion necesaria para mantener aceleracion. En una caida vertical, aumento de [[F_d]] reduce aceleracion neta y aproxima estados de velocidad casi constante.\r
\r
La grafica [[F_d]] frente a [[v]] no es decorativa. Su curvatura permite anticipar zonas donde pequenas mejoras aerodinamicas tienen impacto grande. Si se reduce [[A]] o [[C_d]] en rango de velocidad alto, la disminucion de demanda resistiva puede ser mucho mas valiosa que en rango bajo.\r
\r
Una interpretacion madura debe incluir limite: cuando los datos no siguen patron cuadratico de forma estable, insistir en la ley puede producir conclusiones erradas de diseño.\r
\r
## Orden de magnitud\r
\r
Rangos orientativos para chequeo rapido en problemas didacticos y de preanalisis:\r
\r
- [[v]]: desde unos pocos m/s en laboratorio hasta decenas de m/s en movilidad terrestre.\r
- [[rho]]: menor en aire tenue y mayor en fluidos liquidos o gases densos.\r
- [[C_d]]: depende fuertemente de forma, rugosidad y orientacion.\r
- [[A]]: puede variar por postura o configuracion del cuerpo incluso sin cambiar masa.\r
- [[c]]: integra los tres factores anteriores y cambia entre configuraciones.\r
- [[F_d]]: crece de forma especialmente sensible al entrar en zona de rapidez alta.\r
\r
La regla operativa es simple: si el resultado contradice el orden de magnitud esperable para el escenario, revisar primero definicion de [[v]] relativa y marcado correcto de [[A]] y [[C_d]].\r
\r
## Método de resolución personalizado\r
\r
1. Delimita el sistema y el fluido de referencia.\r
2. Define [[v]] relativa al fluido, no solo al suelo.\r
3. Elige si trabajas con [[c]] conocida o con [[rho]], [[C_d]], [[A]].\r
4. Aplica la formula correspondiente del bloque formal.\r
5. Verifica unidades y signo fisico de la lectura.\r
6. Contrasta con grafica o con razon de escalado para comprobar coherencia.\r
7. Redacta conclusion causal: que variable domina y por que.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: [[v]] cercana a cero. En ese limite, [[F_d]] disminuye mucho y la contribucion de arrastre puede ser secundaria frente a otras fuerzas.\r
\r
Caso especial 2: incremento de [[A]] por cambio de postura. Aun con misma [[v]], la fuerza puede aumentar de forma significativa al elevar [[c]].\r
\r
Caso especial 3: cambio de medio. Pasar de aire a fluido mas denso eleva [[rho]] y desplaza toda la curva de resistencia.\r
\r
Ejemplo extendido: comparar dos configuraciones de un mismo cuerpo, una afinada y otra no afinada, en igual rango de [[v]]. El analisis muestra como variaciones de [[C_d]] y [[A]] pueden dominar la diferencia de [[F_d]] sin cambiar masa.\r
\r
## Preguntas reales del alumno\r
\r
Por que este leaf insiste tanto en [[c]]?\r
Porque [[c]] es el puente entre ecuacion rapida y explicacion fisica del medio y la geometria.\r
\r
Puede haber misma [[v]] y distinta [[F_d]]?\r
Si. Basta con cambiar [[rho]], [[C_d]] o [[A]].\r
\r
Si duplico [[v]], siempre se cuadruplica [[F_d]]?\r
Solo mientras el regimen cuadratico sea valido y [[c]] permanezca aproximadamente constante.\r
\r
Como se conecta con velocidad terminal?\r
La relacion de arrastre cuadratico determina como crece la resistencia y, por tanto, como se cierra el equilibrio dinamico a alta rapidez.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este tema enlaza con segunda ley de Newton para interpretar balance de fuerzas, con coeficiente de arrastre para entender origen de [[C_d]], con numero de Reynolds para justificar regimen, y con velocidad terminal para estudiar estados limite en movimiento vertical.\r
\r
La ruta recomendada es: interpretar [[F_d]]-[[v]] en grafica, justificar [[c]] con la formula puente y luego aplicar el modelo en ejemplos comparativos de diseño.\r
\r
## Síntesis final\r
\r
Dominar arrastre cuadratico significa reconocer una no linealidad fisicamente decisiva. El crecimiento de [[F_d]] con [[v]] no es detalle algebraico: es mecanismo que condiciona energia, control y seguridad. Al conectar [[F_d]], [[c]], [[rho]], [[C_d]] y [[A]], este leaf te permite pasar de calculo mecanico a lectura causal de fenomenos reales.\r
`;export{e as default};
