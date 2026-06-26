# Aplicaciones: Sistemas no inerciales intro

## 1. Seguridad en transporte urbano con frenadas y arranques

### Fenomeno

En autobuses y trenes urbanos, pasajeros y carga ligera sienten empujes aparentes durante arranques y frenadas. La descripcion desde el vehiculo requiere incorporar [[F_ficticia]] asociada a [[a_marco]] para interpretar correctamente esfuerzos sobre personas, pasamanos y sistemas de sujecion.

### Que se conserva / que cambia

Se conserva la fisica real del contacto y de la masa [[m]], pero cambia la lectura interna de aceleracion [[a_rel]] por efecto del marco no inercial. Si se ignora la correccion, se subestima la exigencia de agarre y de diseno de soportes.

### Magnitudes dominantes

[[a_marco]], [[F_ficticia]], [[m]], [[F_real]], [[a_rel]].

### Escala tipica

[[a_marco]] de 0.5 a 2.5 m/s^2 en servicio normal, con picos mayores en maniobras de emergencia.

Variable dominante: [[a_marco]].

Limite de validez: si existe rotacion apreciable del vehiculo o vibracion estructural fuerte, el modelo lineal simple debe ampliarse.

### Cierre operativo

Esta aplicacion muestra que la fuerza ficticia no es una curiosidad teorica: afecta criterios de diseno de seguridad y confort en transporte diario.

## 2. Control de plataformas rotantes en manufactura

### Fenomeno

Mesas rotantes de ensamblaje mueven piezas mientras operan camaras y actuadores. En el marco de la mesa, las trayectorias aparentes se deforman por [[F_centrifuga]] y [[F_coriolis]], especialmente cuando hay velocidad relativa [[v_rel]] de herramientas o piezas.

### Que se conserva / que cambia

Se conserva la dinamica real de motores y guias, pero cambia la forma aparente de desplazamiento observada en el marco rotante. El algoritmo debe distinguir error mecanico real de desviacion por marco.

### Magnitudes dominantes

[[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].

### Escala tipica

[[omega]] entre 0.5 y 10 rad/s segun proceso, con [[r]] de centimetros a decenas de centimetros.

Variable dominante: [[omega]].

Limite de validez: para aceleraciones angulares altas y flexibilidad estructural, se requiere modelo multibody acoplado.

### Cierre operativo

El uso correcto de terminos no inerciales reduce rechazos de calidad por diagnosticos falsos de posicionamiento.

## 3. Navegacion y guiado en drones y vehiculos autonomos

### Fenomeno

Un controlador embarcado estima estados de movimiento desde sensores internos. Como el marco del vehiculo acelera y rota, la lectura directa de aceleracion no puede interpretarse con ecuaciones inerciales simples durante maniobras intensas.

### Que se conserva / que cambia

Se conserva la necesidad de balance causal entre fuerzas y aceleraciones, pero cambia el inventario de terminos requerido en tiempo real. El sistema debe activar o desactivar correcciones segun estado de marco.

### Magnitudes dominantes

[[a_marco]], [[omega]], [[a_rel]], [[F_ficticia]], [[F_coriolis]].

### Escala tipica

Transiciones de regimen en ventanas de segundos o fracciones de segundo, con umbrales de error relativo cercanos a 10 por ciento para cambio de modelo.

Variable dominante: [[a_rel]].

Limite de validez: si la incertidumbre de sensores crece por saturacion o vibracion, la clasificacion de marco pierde confiabilidad y debe reforzarse con fusion de datos.

### Cierre operativo

Esta aplicacion conecta directamente con decisiones de seguridad, porque una mala clasificacion de marco puede inducir comandos de control incorrectos.

## 4. Meteorologia y oceanografia de gran escala

### Fenomeno

A escala planetaria, la rotacion terrestre introduce desviaciones sistematicas en masas de aire y corrientes marinas. La fuerza de Coriolis no suele dominar fenomenos de pequena escala, pero se vuelve crucial en trayectorias de gran extension temporal y espacial.

### Que se conserva / que cambia

Se conservan leyes de conservacion de masa y cantidad de movimiento, pero cambia la forma de cierre de ecuaciones al trabajar en un marco ligado a la Tierra.

### Magnitudes dominantes

[[omega]], [[v_rel]], [[F_coriolis]], [[F_centrifuga]], [[r]].

### Escala tipica

Escalas de kilometros a miles de kilometros, con velocidades de flujo moderadas pero sostenidas por tiempos largos.

Variable dominante: [[F_coriolis]].

Limite de validez: en fenomenos de laboratorio pequenos, el termino de Coriolis puede ser menor que perturbaciones locales y no debe sobredimensionarse.

### Cierre operativo

Comprender la escala de aplicacion evita dos errores opuestos: ignorar Coriolis cuando importa o invocarlo donde no tiene efecto medible.

## 5. Ensayos de centrifugas y validacion de componentes

### Fenomeno

Centrifugas de prueba someten materiales y componentes a cargas equivalentes altas. En ese entorno, [[F_centrifuga]] es un termino de diseno central, y la lectura del marco rotante debe combinarse con modelos estructurales para evaluar fatiga y fallo.

### Que se conserva / que cambia

Se conserva la relacion entre carga aplicada y respuesta del material, pero cambia la distribucion espacial de esfuerzos por dependencia radial con [[r]] y con [[omega]].

### Magnitudes dominantes

[[m]], [[omega]], [[r]], [[F_centrifuga]], [[F_real]].

### Escala tipica

Regimenes de alta rotacion donde pequenas variaciones de [[omega]] cambian fuertemente la carga efectiva.

Variable dominante: [[F_centrifuga]].

Limite de validez: si aparecen efectos termicos, plasticidad o no linealidad severa, el modelo mecanico simple se queda corto y se requiere simulacion avanzada.

### Cierre operativo

La aplicacion industrial confirma que elegir el marco correcto es parte del protocolo de certificacion, no un detalle de notacion.

## Nota de diferenciacion

Este leaf se diferencia de una introduccion general porque no solo define terminos; entrena decisiones de cambio de modelo con umbrales y evidencia. La pregunta clave no es "como se llama la fuerza" sino "cuando su inclusion cambia una decision fisica".

## Cierre metodologico

Una rutina robusta para aplicaciones no inerciales incluye cinco pasos: declarar marco, listar magnitudes activas, fijar umbrales de validez, evaluar residuales y documentar la transicion de modelo cuando corresponda. Esa disciplina mejora trazabilidad entre equipos de datos, control y validacion.

En proyectos reales, este cierre metodologico evita reprocesos. Si un equipo reporta [[a_rel]] sin contexto de [[a_marco]] y [[omega]], otro equipo puede interpretar mal el resultado y elegir una accion equivocada. Cuando la documentacion incluye magnitudes, umbrales y criterio de cambio, el analisis se vuelve reproducible.

Tambien permite transferir protocolos entre dominios. El mismo esquema usado en transporte puede adaptarse a plataformas rotantes o a navegacion autonoma cambiando escalas, no principios. Esa portabilidad es una ventaja fuerte de formular aplicaciones con marco fisico explicito.
