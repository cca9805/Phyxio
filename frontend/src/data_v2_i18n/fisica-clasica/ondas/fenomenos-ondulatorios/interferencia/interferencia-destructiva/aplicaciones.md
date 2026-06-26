## 1. Cancelación activa de ruido en auriculares

Los auriculares con cancelación activa miden el ruido exterior y emiten una señal secundaria que llega al oído con fase opuesta. La aplicación es local: reduce la intensidad cerca del tímpano, no en toda la habitación.

La hipótesis dominante es que el ruido tiene componentes suficientemente estables para mantener [[delta_phi]] controlado. El sistema ajusta la amplitud secundaria para equilibrar [[I1]] e [[I2]], porque la oposición de fase por sí sola no garantiza un mínimo profundo.

La decisión de ingeniería consiste en medir continuamente el error residual. Si el usuario mueve la cabeza, cambia la geometría efectiva y el sistema debe corregir el desfase antes de que el mínimo se desplace fuera del oído.

Variable dominante: [[I_resultante]] en la zona del oído, porque expresa la intensidad residual que percibe el usuario.
Límite de validez: pierde eficacia con golpes impulsivos, habla cambiante o ruido que llega desde muchas direcciones sin fase estable.

## 2. Recubrimientos antirreflejantes en lentes

Una capa delgada sobre una lente puede hacer que dos reflexiones de luz se cancelen para un color elegido. La primera reflexión y la segunda acumulan fases distintas; si llegan al observador en oposición, la reflexión visible disminuye.

La simplificación útil es considerar un espesor uniforme y una [[lambda]] bien definida dentro del material. En una lente real, el índice, el ángulo de incidencia y el espectro de la luz desplazan el mínimo, por eso el tratamiento se optimiza para una banda y no para todos los colores por igual.

La lectura práctica es selectiva. Un recubrimiento puede reducir reflejos verdes en una lente fotográfica, pero dejar reflejos residuales azulados o rojizos. Esa coloración no es un defecto conceptual: muestra que la cancelación se diseñó para una escala de fase concreta.

Variable dominante: [[Delta_r]] óptica acumulada en la película, porque fija la oposición de fase para una longitud de onda concreta.
Límite de validez: deja de ser suficiente cuando la luz es muy policromática, el ángulo cambia mucho o varias capas introducen múltiples reflexiones acopladas.

## 3. Zonas silenciosas en salas con dos altavoces

En una sala, dos altavoces que reproducen el mismo tono pueden crear puntos donde el sonido baja de forma notable. Al caminar, el oyente cambia [[Delta_r]] respecto a los dos altavoces y atraviesa mínimos y máximos.

La aplicación no debe confundirse con absorción acústica. La energía no desaparece en el punto silencioso; se redistribuye espacialmente. Para diagnosticarlo, conviene cambiar la frecuencia: si cambia [[lambda]], las zonas de bajo volumen se desplazan.

Esta lectura ayuda en sonorización. Separar altavoces sin controlar fase puede crear asientos con baja inteligibilidad, aunque la potencia total instalada sea grande. Ajustar retardos o recolocar fuentes busca evitar mínimos destructivos en zonas críticas del público.

Variable dominante: [[Delta_r]] entre el oyente y los dos altavoces, porque determina si el tono llega en oposición de fase.
Límite de validez: las reflexiones de paredes, muebles y techo pueden dominar sobre los caminos directos y exigir un modelo modal de sala.

## 4. Interferometría para medir desplazamientos pequeños

Un interferómetro divide un haz coherente en dos caminos y los recombina. Si un espejo se desplaza, cambia [[Delta_r]] y la salida puede pasar por mínimos destructivos. Contar esos mínimos permite inferir desplazamientos muy pequeños.

La hipótesis de trabajo es que el láser conserva coherencia y que el montaje mecánico no introduce vibraciones comparables al desplazamiento medido. La ventaja es que una fracción de [[lambda]] ya modifica la intensidad observada, lo que convierte la interferencia destructiva en una herramienta de metrología fina.

El mínimo tiene valor operativo porque es fácil detectar una caída de señal con un fotodiodo. En vez de medir directamente una distancia diminuta con una regla, se traduce el desplazamiento en cambios de fase acumulados por el haz.

Variable dominante: [[I_resultante]] en el detector, porque sus mínimos señalan posiciones de oposición de fase.
Límite de validez: vibraciones, cambios térmicos del aire o pérdida de coherencia desplazan los mínimos y contaminan la medida.

## 5. Nulos de señal en antenas y comunicaciones

En antenas, varias trayectorias de una onda de radio pueden llegar al receptor con fases opuestas. El resultado es un nulo de señal: la potencia recibida cae aunque el transmisor funcione correctamente.

La interpretación física usa la misma idea de [[delta_phi]] y amplitudes comparables. En entornos urbanos, las reflexiones en edificios producen caminos múltiples; algunos se suman y otros se cancelan. Por eso mover ligeramente un receptor puede mejorar mucho la señal.

En redes móviles, estos nulos explican pérdidas repentinas al desplazarse pocos centímetros o al cambiar la orientación del dispositivo. Las técnicas de diversidad y arreglos de antenas intentan que, si una trayectoria se cancela, otra mantenga señal útil.

Variable dominante: [[I_resultante]] recibida por la antena, porque resume la intensidad electromagnética útil tras la superposición.
Límite de validez: cuando hay muchas trayectorias cambiantes, movimiento rápido o ancho de banda grande, se necesita un modelo estadístico de canal y no solo dos ondas coherentes.
