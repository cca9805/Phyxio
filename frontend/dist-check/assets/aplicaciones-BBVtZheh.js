const e=`# Aplicaciones: Sistemas no inerciales intro\r
\r
## 1. Seguridad en transporte urbano con frenadas y arranques\r
\r
### Fenomeno\r
\r
En autobuses y trenes urbanos, pasajeros y carga ligera sienten empujes aparentes durante arranques y frenadas. La descripcion desde el vehiculo requiere incorporar [[F_ficticia]] asociada a [[a_marco]] para interpretar correctamente esfuerzos sobre personas, pasamanos y sistemas de sujecion.\r
\r
### Que se conserva / que cambia\r
\r
Se conserva la fisica real del contacto y de la masa [[m]], pero cambia la lectura interna de aceleracion [[a_rel]] por efecto del marco no inercial. Si se ignora la correccion, se subestima la exigencia de agarre y de diseno de soportes.\r
\r
### Magnitudes dominantes\r
\r
[[a_marco]], [[F_ficticia]], [[m]], [[F_real]], [[a_rel]].\r
\r
### Escala tipica\r
\r
[[a_marco]] de 0.5 a 2.5 m/s^2 en servicio normal, con picos mayores en maniobras de emergencia.\r
\r
Variable dominante: [[a_marco]].\r
\r
Limite de validez: si existe rotacion apreciable del vehiculo o vibracion estructural fuerte, el modelo lineal simple debe ampliarse.\r
\r
### Cierre operativo\r
\r
Esta aplicacion muestra que la fuerza ficticia no es una curiosidad teorica: afecta criterios de diseno de seguridad y confort en transporte diario.\r
\r
## 2. Control de plataformas rotantes en manufactura\r
\r
### Fenomeno\r
\r
Mesas rotantes de ensamblaje mueven piezas mientras operan camaras y actuadores. En el marco de la mesa, las trayectorias aparentes se deforman por [[F_centrifuga]] y [[F_coriolis]], especialmente cuando hay velocidad relativa [[v_rel]] de herramientas o piezas.\r
\r
### Que se conserva / que cambia\r
\r
Se conserva la dinamica real de motores y guias, pero cambia la forma aparente de desplazamiento observada en el marco rotante. El algoritmo debe distinguir error mecanico real de desviacion por marco.\r
\r
### Magnitudes dominantes\r
\r
[[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].\r
\r
### Escala tipica\r
\r
[[omega]] entre 0.5 y 10 rad/s segun proceso, con [[r]] de centimetros a decenas de centimetros.\r
\r
Variable dominante: [[omega]].\r
\r
Limite de validez: para aceleraciones angulares altas y flexibilidad estructural, se requiere modelo multibody acoplado.\r
\r
### Cierre operativo\r
\r
El uso correcto de terminos no inerciales reduce rechazos de calidad por diagnosticos falsos de posicionamiento.\r
\r
## 3. Navegacion y guiado en drones y vehiculos autonomos\r
\r
### Fenomeno\r
\r
Un controlador embarcado estima estados de movimiento desde sensores internos. Como el marco del vehiculo acelera y rota, la lectura directa de aceleracion no puede interpretarse con ecuaciones inerciales simples durante maniobras intensas.\r
\r
### Que se conserva / que cambia\r
\r
Se conserva la necesidad de balance causal entre fuerzas y aceleraciones, pero cambia el inventario de terminos requerido en tiempo real. El sistema debe activar o desactivar correcciones segun estado de marco.\r
\r
### Magnitudes dominantes\r
\r
[[a_marco]], [[omega]], [[a_rel]], [[F_ficticia]], [[F_coriolis]].\r
\r
### Escala tipica\r
\r
Transiciones de regimen en ventanas de segundos o fracciones de segundo, con umbrales de error relativo cercanos a 10 por ciento para cambio de modelo.\r
\r
Variable dominante: [[a_rel]].\r
\r
Limite de validez: si la incertidumbre de sensores crece por saturacion o vibracion, la clasificacion de marco pierde confiabilidad y debe reforzarse con fusion de datos.\r
\r
### Cierre operativo\r
\r
Esta aplicacion conecta directamente con decisiones de seguridad, porque una mala clasificacion de marco puede inducir comandos de control incorrectos.\r
\r
## 4. Meteorologia y oceanografia de gran escala\r
\r
### Fenomeno\r
\r
A escala planetaria, la rotacion terrestre introduce desviaciones sistematicas en masas de aire y corrientes marinas. La fuerza de Coriolis no suele dominar fenomenos de pequena escala, pero se vuelve crucial en trayectorias de gran extension temporal y espacial.\r
\r
### Que se conserva / que cambia\r
\r
Se conservan leyes de conservacion de masa y cantidad de movimiento, pero cambia la forma de cierre de ecuaciones al trabajar en un marco ligado a la Tierra.\r
\r
### Magnitudes dominantes\r
\r
[[omega]], [[v_rel]], [[F_coriolis]], [[F_centrifuga]], [[r]].\r
\r
### Escala tipica\r
\r
Escalas de kilometros a miles de kilometros, con velocidades de flujo moderadas pero sostenidas por tiempos largos.\r
\r
Variable dominante: [[F_coriolis]].\r
\r
Limite de validez: en fenomenos de laboratorio pequenos, el termino de Coriolis puede ser menor que perturbaciones locales y no debe sobredimensionarse.\r
\r
### Cierre operativo\r
\r
Comprender la escala de aplicacion evita dos errores opuestos: ignorar Coriolis cuando importa o invocarlo donde no tiene efecto medible.\r
\r
## 5. Ensayos de centrifugas y validacion de componentes\r
\r
### Fenomeno\r
\r
Centrifugas de prueba someten materiales y componentes a cargas equivalentes altas. En ese entorno, [[F_centrifuga]] es un termino de diseno central, y la lectura del marco rotante debe combinarse con modelos estructurales para evaluar fatiga y fallo.\r
\r
### Que se conserva / que cambia\r
\r
Se conserva la relacion entre carga aplicada y respuesta del material, pero cambia la distribucion espacial de esfuerzos por dependencia radial con [[r]] y con [[omega]].\r
\r
### Magnitudes dominantes\r
\r
[[m]], [[omega]], [[r]], [[F_centrifuga]], [[F_real]].\r
\r
### Escala tipica\r
\r
Regimenes de alta rotacion donde pequenas variaciones de [[omega]] cambian fuertemente la carga efectiva.\r
\r
Variable dominante: [[F_centrifuga]].\r
\r
Limite de validez: si aparecen efectos termicos, plasticidad o no linealidad severa, el modelo mecanico simple se queda corto y se requiere simulacion avanzada.\r
\r
### Cierre operativo\r
\r
La aplicacion industrial confirma que elegir el marco correcto es parte del protocolo de certificacion, no un detalle de notacion.\r
\r
## Nota de diferenciacion\r
\r
Este leaf se diferencia de una introduccion general porque no solo define terminos; entrena decisiones de cambio de modelo con umbrales y evidencia. La pregunta clave no es "como se llama la fuerza" sino "cuando su inclusion cambia una decision fisica".\r
\r
## Cierre metodologico\r
\r
Una rutina robusta para aplicaciones no inerciales incluye cinco pasos: declarar marco, listar magnitudes activas, fijar umbrales de validez, evaluar residuales y documentar la transicion de modelo cuando corresponda. Esa disciplina mejora trazabilidad entre equipos de datos, control y validacion.\r
\r
En proyectos reales, este cierre metodologico evita reprocesos. Si un equipo reporta [[a_rel]] sin contexto de [[a_marco]] y [[omega]], otro equipo puede interpretar mal el resultado y elegir una accion equivocada. Cuando la documentacion incluye magnitudes, umbrales y criterio de cambio, el analisis se vuelve reproducible.\r
\r
Tambien permite transferir protocolos entre dominios. El mismo esquema usado en transporte puede adaptarse a plataformas rotantes o a navegacion autonoma cambiando escalas, no principios. Esa portabilidad es una ventaja fuerte de formular aplicaciones con marco fisico explicito.\r
`;export{e as default};
