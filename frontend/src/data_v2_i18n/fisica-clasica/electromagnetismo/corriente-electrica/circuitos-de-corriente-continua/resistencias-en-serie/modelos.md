## Modelo ideal

El modelo ideal de una red en serie asume que todos los elementos resistivos son lineales y pasivos, y que la conexion forma una unica trayectoria de [[corriente]]. Bajo esta hipotesis, la resistencia equivalente [[resistencia_equivalente]] se obtiene por suma de [[resistencia_uno]], [[resistencia_dos]] y [[resistencia_tres]], y las caidas [[caida_de_tension]] se distribuyen de forma proporcional a cada [[resistencia_generica]].

Este modelo es potente porque separa claramente estado global y estado local. El estado global queda gobernado por [[resistencia_equivalente]] y [[tension_total]], mientras que el estado local queda gobernado por [[caida_de_tension]] de cada componente. Al no haber bifurcaciones, no existe ambiguedad sobre reparto de [[corriente]].

## Hipótesis

1. Los componentes se comportan de manera ohmica en el rango de trabajo.
2. La temperatura no altera de forma dominante los valores [[resistencia_generica]] durante la medicion.
3. La fuente mantiene [[tension_total]] estable en el intervalo de analisis.
4. Los contactos y cables no introducen caidas comparables con las del circuito principal.
5. No hay carga externa intensa sobre un nodo de salida que transforme la topologia efectiva.

Estas hipotesis no son decorativas. Cada una define una frontera de validez. Cuando una de ellas deja de cumplirse, el modelo ideal puede seguir generando numeros, pero esos numeros pierden capacidad predictiva para decisiones de diseno.

## Dominio de validez cuantitativo

El modelo ideal se considera operativo cuando las siguientes condiciones se cumplen de forma aproximada:

- Variacion relativa de cada [[resistencia_generica]] por temperatura <= 5% durante el ensayo.
- Resistencia de cables y contactos <= 10% de [[resistencia_equivalente]].
- Desviacion de fuente sobre [[tension_total]] <= 2%.
- Carga de salida, si existe, con impedancia >= 10 veces la resistencia del tramo de lectura.

En ese dominio, la suma para [[resistencia_equivalente]] y el reparto de [[caida_de_tension]] mantienen error pequeno frente a medicion directa. Si cualquiera de estas desigualdades se rompe, se requiere ajustar modelo.

## Señales de fallo del modelo

Senal observable 1. El cierre de malla no coincide con [[tension_total]] dentro del margen instrumental esperado.

Senal observable 2. La [[corriente]] medida difiere sistematicamente de la estimada aun despues de revisar unidades.

Senal observable 3. Una [[caida_de_tension]] se desplaza al cambiar carga externa, aunque [[resistencia_generica]] nominal no cambie.

Senal observable 4. El circuito se calienta y el valor efectivo de [[resistencia_equivalente]] deriva en el tiempo.

Estas senales indican que la descripcion ideal ya no captura el mecanismo dominante.

## Modelo extendido o alternativo

El modelo extendido agrega resistencia interna de fuente, resistencias de contacto y dependencia termica de [[resistencia_generica]]. Tambien incorpora la carga acoplada en el punto de salida, de modo que el repartidor deja de tratarse como serie aislada.

Cuando conviene cambiar de modelo: conviene cambiar de modelo cuando el error relativo entre prediccion ideal y medicion supera 10% en [[corriente]] o en [[caida_de_tension]], o cuando la carga externa modifica la salida de forma apreciable durante operacion normal.

## Comparación operativa

Modelo ideal:
- Rapido para calculo preliminar.
- Transparente para aprendizaje de causalidad fisica.
- Adecuado para estimaciones de primer orden.

Modelo extendido:
- Mas fiel para hardware real y tolerancias.
- Requiere mas parametros y mediciones.
- Es preferible cuando hay calentamiento, carga variable o fuentes no ideales.

En practica, el flujo recomendado es comenzar con modelo ideal para entender tendencias y luego migrar al extendido si aparecen senales de fallo. Esta transicion conserva claridad conceptual y mejora confiabilidad de decisiones.