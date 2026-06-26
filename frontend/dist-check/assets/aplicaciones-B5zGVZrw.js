const e=`\uFEFF# Aplicaciones: Tercera ley accion reaccion

## 1. Lanzamiento de patinadores en pista de hielo

### Fenómeno

Dos patinadores se empujan mutuamente para separarse. El evento es corto y permite observar con claridad el par reciproco entre [[FAB]] y [[FBA]].

### Qué se conserva / qué cambia

Se conserva la reciprocidad de la interaccion: fuerzas iguales en modulo y opuestas en direccion. Cambian las respuestas de movimiento por diferencia de masas [[mA]] y [[mB]].

### Magnitudes dominantes

[[FAB]], [[FBA]], [[mA]], [[mB]], [[aA]], [[aB]], [[vA]], [[vB]], [[t]].

### Escala típica

Fuerzas de decenas a centenas de N, masas humanas de 40 a 90 kg y tiempos de empuje de 0.2 s a 1 s.

Variable dominante: [[mA]] y [[mB]] para convertir reciprocidad de fuerza en diferencia de aceleracion.

Límite de validez: si hay friccion significativa o empuje no bien sincronizado, la lectura simple requiere incluir fuerzas externas adicionales.

### Cierre operativo

Esta aplicacion enseña que reciprocidad de fuerzas no equivale a igualdad de velocidades finales. La tercera ley fija la estructura de interaccion; la dinamica fija la respuesta.

## 2. Retroceso de armas y sistemas de propulsión

### Fenómeno

En un disparo o en una tobera de propulsion, la masa expulsada ejerce una fuerza sobre el sistema principal y recibe la reciproca opuesta. El conjunto muestra accion-reaccion con cambio de estado de movimiento.

### Qué se conserva / qué cambia

Se conserva la simetria del par de interaccion entre sistema y masa expulsada. Cambia la aceleracion instantanea del soporte por variacion de masa efectiva y flujo.

### Magnitudes dominantes

[[FAB]] y [[FBA]] en el eje principal, componentes [[FAx]] y [[FBx]], y evolucion de [[vA]] durante intervalos cortos [[t]].

### Escala típica

En armas de mano, fuerzas de retroceso pueden alcanzar centenas de N durante milisegundos. En propulsion, la escala puede ser mucho mayor segun flujo y geometria.

Variable dominante: [[FBx]] efectiva transmitida al soporte.

Límite de validez: cuando el sistema tiene deformaciones estructurales relevantes o flujo altamente no estacionario, se necesita modelo extendido.

### Cierre operativo

La tercera ley ayuda a diseñar sistemas de amortiguacion y anclaje, porque anticipa direccion y magnitud del retroceso reciprocamente acoplado.

## 3. Contacto rueda-suelo en movilidad urbana

### Fenómeno

En aceleracion o frenado, la rueda empuja al suelo y el suelo ejerce fuerza reciproca sobre la rueda. El movimiento del vehiculo depende de esa fuerza de contacto.

### Qué se conserva / qué cambia

Se conserva el par reciproco en el punto de contacto. Cambia la capacidad de traccion segun adherencia y carga normal.

### Magnitudes dominantes

[[Nab]], [[Nba]], [[FAx]], [[FBx]], [[W]], [[N_gen]], y componentes verticales [[FAy]], [[FBy]] cuando hay pendiente.

### Escala típica

En bicicletas y scooters, fuerzas longitudinales tipicas van de unidades a decenas de N; en autos son mucho mayores. Las normales dependen de carga y pendiente.

Variable dominante: [[N_gen]] y su redistribucion, porque limita traccion util.

Límite de validez: con deslizamiento fuerte o suelo irregular, la ley se mantiene pero el modelo de contacto debe incorporar friccion no lineal.

### Cierre operativo

Comprender accion-reaccion en contacto evita errores de control: sin fuerza del suelo no hay aceleracion util del vehiculo.

## 4. Ensayos de contacto en laboratorio de materiales

### Fenómeno

En pruebas de compresion y choque controlado, se miden fuerzas en ambas caras de contacto para verificar reciprocity y calidad de sensado.

### Qué se conserva / qué cambia

Se conserva que los sensores opuestos deben registrar fuerzas reciprocamente compatibles en modulo y signo. Cambia el historial temporal por elasticidad y amortiguamiento del material.

### Magnitudes dominantes

[[FAB]], [[FBA]], [[Nab]], [[Nba]], [[t]], y velocidades [[v0]], [[vA]], [[vB]] antes y despues del evento.

### Escala típica

En banco didactico, fuerzas de 10 N a 1000 N con ventanas de milisegundos a segundos, segun dispositivo.

Variable dominante: residual de reciprocity |[[FBA]] + [[FAB]]| como indicador de consistencia de medicion.

Límite de validez: cuando los sensores no estan sincronizados temporalmente, comparaciones directas pueden producir falsos diagnosticos.

### Cierre operativo

La tercera ley se vuelve criterio de calibracion cruzada: si el residual supera tolerancia, revisar cadena de adquisicion antes de concluir fallo fisico.

## 5. Síntesis para ingeniería y toma de decisiones

### Fenómeno

En sistemas multi-cuerpo, la decision tecnica depende de distinguir correctamente interacciones internas reciprocas y fuerzas externas netas.

### Qué se conserva / qué cambia

Se conserva la regla estructural de pares reciprocos para cada canal de interaccion. Cambia la respuesta global del sistema cuando se agregan restricciones, actuadores o contactos adicionales.

### Magnitudes dominantes

[[FAB]], [[FBA]], [[FAx]], [[FBx]], [[FAy]], [[FBy]], [[mA]], [[mB]], [[aA]], [[aB]], [[vA]], [[vB]], [[W]], [[N_gen]], [[g]].

### Escala típica

Depende de dominio de aplicacion, pero siempre es posible definir umbrales de consistencia para residuales de pares en funcion de incertidumbre instrumental.

Variable dominante: calidad de identificacion del canal de interaccion.

Límite de validez: si no se separan cuerpos y canales, cualquier validacion de tercera ley se vuelve ambigua.

### Cierre operativo

La regla metodologica final es clara: no basta con ver vectores opuestos; hay que demostrar que pertenecen a la misma interaccion y a cuerpos distintos. Esa disciplina vuelve trazables las decisiones de diseno, diagnostico y seguridad.\r
`;export{e as default};
