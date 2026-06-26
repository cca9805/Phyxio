const a=`# Historia funcional del sistema abierto\r
\r
## Problema histórico\r
\r
La nocion de sistema abierto surgio de una necesidad práctica: estudiar maquinas y procesos donde la materia no permanece fija. En una caldera entra agua y sale vapor; en una turbina entra vapor de alta energía y sale vapor degradado; en una bomba entra liquido y sale liquido con mayor presión. Seguir cada porcion de fluido era poco operativo.\r
\r
El volumen de control resolvio esa dificultad. En lugar de perseguir la misma masa, se elige una region de interes y se cuentan las corrientes que la atraviesan. Esta decision cambio la forma de aplicar la conservación de masa y energía en ingenieria.\r
\r
## Dificultad conceptual previa\r
\r
El concepto permitio analizar equipos continuos con balances simples. Un motor, una planta de vapor o una red de tuberias puede estudiarse pieza por pieza: entradas, salidas, calor, trabajo y acumulacion. La pregunta deja de ser "donde esta cada particula" y pasa a ser "que cruza la frontera".\r
\r
También hizo natural el uso de propiedades especificas como la entalpía [[h]]. Cuando un fluido cruza una frontera, no solo trae energía interna; también hace trabajo de empuje para entrar o salir. La entalpía agrupa esa contribucion y convierte los balances de flujo en herramientas compactas.\r
\r
## Qué cambió\r
\r
El salto conceptual fue aceptar que un sistema puede estar en regimen estacionario sin ser cerrado. Una turbina puede tener masa interna casi constante y, al mismo tiempo, ser atravesada por toneladas de fluido por hora. La constancia de [[m_sys]] no prueba ausencia de flujo; solo prueba compensacion entre entradas y salidas.\r
\r
Esta distincion preparo el terreno para la termodinámica aplicada moderna. Intercambiadores de calor, compresores, turbinas, toberas, reactores y sistemas biologicos se entienden como sistemas abiertos porque su función depende de intercambio continuo.\r
\r
## Impacto en la física\r
\r
Hoy el modelo de sistema abierto aparece en energía, climatizacion, motores, procesos quimicos, meteorologia, biomecanica y medio ambiente. Sirve para evaluar eficiencia, diagnosticar perdidas, estimar consumos y conectar la termodinámica con datos medibles de caudal, potencia y temperatura.\r
\r
Su valor pedagogico es que obliga a dibujar fronteras. Un error de frontera cambia todo el balance. Por eso el concepto sigue siendo una herramienta de pensamiento antes que una formula.\r
\r
## Conexión con física moderna\r
\r
La formulacion moderna de sistemas abiertos conecta termodinámica, mecánica de fluidos, transporte de energía y simulacion numerica. También aparece en clima, biologia y tecnologia energética, donde ningún sistema relevante permanece completamente aislado de sus entradas y salidas.\r
`;export{a as default};
