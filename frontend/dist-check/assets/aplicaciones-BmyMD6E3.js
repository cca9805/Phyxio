const e=`## 1. Frenos magneticos de trenes y atracciones

Un freno magnetico usa la ley de Lenz para convertir movimiento en corrientes inducidas que se oponen al movimiento relativo. Un conductor se mueve en un campo y el flujo enlazado por trayectorias internas cambia. La corriente inducida genera efectos magneticos que frenan.

La hipotesis dominante es que el conductor permite corrientes inducidas y que el campo es suficientemente estable. Si la temperatura cambia mucho la resistencia, la intensidad de frenado cambia aunque la regla de signo siga siendo la misma.

La decision de diseño no es solo aumentar el campo. Tambien hay que controlar calentamiento, velocidad, distancia a los imanes y masa del sistema. Lenz fija el sentido de la fuerza; el resto del modelo fija cuanto frena.

La seguridad depende de esa separacion. En una atraccion, interesa que el frenado crezca con la rapidez y no dependa de contacto mecanico que pueda fallar por desgaste. La ley de Lenz da una respuesta pasiva: cuanto mas se intenta cambiar el flujo por movimiento, mayor es la oposicion inducida dentro del rango de diseño.

Variable dominante: signo y rapidez del cambio de flujo producido por el movimiento.
Límite de validez: deja de valer si calentamiento, saturacion o geometria no uniforme dominan la respuesta.

## 2. Generadores electricos

En un generador, una bobina gira en un campo o un campo cambia respecto a una bobina. La ley de Lenz determina la polaridad de la fem en cada tramo del giro. Cuando el flujo empieza a aumentar, la fem se orienta contra ese aumento; cuando disminuye, se invierte.

La simplificacion dominante es que el flujo cambia de forma regular y que las espiras son equivalentes. En generadores reales, forma de bobina, escobillas, conmutadores y carga alteran la onda de salida.

Esta aplicacion muestra por que generar electricidad requiere trabajo mecanico. La corriente inducida bajo carga se opone al movimiento que cambia el flujo, de modo que el motor primario debe aportar energia continuamente.

Sin esta oposicion, un generador podria producir corriente sin aumentar el esfuerzo mecanico, lo que violaria la conservacion de energia. En la practica, al conectar una carga, el generador se vuelve mas dificil de mover porque la corriente inducida aumenta su reaccion magnetica.

Variable dominante: polaridad de [[epsilon_ind]] frente al signo de [[r_Phi]].
Límite de validez: deja de valer si la carga, saturacion o transitorios rapidos modifican la forma de la respuesta.

## 3. Transformadores bajo carga

En un transformador, Lenz explica por que la corriente secundaria no aparece con cualquier sentido. Su efecto magnetico tiende a oponerse al cambio de flujo que la induce. Esa oposicion se refleja hacia el primario como demanda de corriente adicional.

La hipotesis dominante es que el nucleo permanece en regimen lineal y que el acoplamiento es fuerte. Si hay fugas grandes, la oposicion se reparte y la lectura ideal queda incompleta.

La aplicacion es crucial para entender energia. El secundario no entrega potencia gratis; la carga secundaria aumenta el esfuerzo que debe hacer la fuente primaria. Lenz conecta polaridad, flujo y conservacion energetica.

La polaridad correcta tambien evita errores de conexion. En devanados acoplados, terminales homonimos mal identificados pueden hacer que señales se sumen o resten de forma inesperada. Lenz proporciona el criterio fisico para revisar esas fases.

Variable dominante: sentido inducido de la corriente secundaria respecto al cambio de flujo.
Límite de validez: deja de valer si fugas, saturacion o capacitancias parasitas dominan.

## 4. Cocinas de induccion

Una cocina de induccion crea un campo magnetico variable que induce corrientes en el recipiente conductor. Por Lenz, esas corrientes se orientan de modo que se oponen al cambio de flujo. La energia termina disipandose como calor en el material.

La simplificacion dominante es que el recipiente puede tratarse como conductor con trayectorias cerradas efectivas. Si el material no es adecuado o el acoplamiento es debil, la potencia transferida cae.

Esta aplicacion muestra que la oposicion de Lenz no impide cocinar; precisamente canaliza energia hacia corrientes inducidas y calentamiento. El signo correcto garantiza que la energia proviene de la fuente de alimentacion, no de una amplificacion espontanea.

El recipiente adecuado importa porque debe permitir corrientes inducidas intensas y acoplarse bien al campo. Si el material no responde magneticamente o no ofrece trayectorias efectivas, la oposicion existe como principio pero la potencia util es baja.

Variable dominante: corriente inducida que se opone al cambio de flujo aplicado.
Límite de validez: deja de valer si el material, la frecuencia o el acoplamiento no permiten corrientes utiles.

## 5. Amortiguamiento en instrumentos de medida

Algunos instrumentos analogicos usan amortiguamiento magnetico. Una pieza conductora se mueve en un campo y genera corrientes inducidas que se oponen al movimiento. Esto reduce oscilaciones y estabiliza la aguja.

La hipotesis dominante es que la respuesta inducida es proporcional a la rapidez del movimiento en el rango de trabajo. Si hay rozamiento mecanico fuerte o saturacion, el amortiguamiento deja de seguir el modelo simple.

La aplicacion exige una oposicion controlada, no maxima. Demasiado amortiguamiento vuelve lenta la lectura; demasiado poco produce oscilaciones. Lenz fija el sentido estabilizador y el diseño ajusta su intensidad.

Este caso es pedagogicamente util porque la oposicion no se interpreta como perdida indeseada, sino como funcion de control. La energia de la oscilacion se disipa de forma ordenada y la lectura final se vuelve mas fiable.

Variable dominante: oposicion inducida al cambio de flujo causado por el movimiento.
Límite de validez: deja de valer si rozamiento, topes mecanicos o no linealidad magnetica dominan.
`;export{e as default};
