# Modelos para sistema abierto

## Modelo ideal

El modelo principal es el volumen de control macroscopico. Se fija una frontera y se cuenta que cruza por ella. La frontera puede cortar entradas y salidas de masa, superficies de intercambio de calor y ejes o cables por donde se transfiere trabajo. No se sigue una misma masa material; se sigue una region del espacio o un equipo.

Este modelo es adecuado cuando las corrientes tienen propiedades medias definidas. Cada entrada y salida se representa con [[m_dot]] y con una energía específica [[e_flujo]]. La acumulacion interna se representa mediante [[m_sys]] y [[E_sys]]. El calor [[Q_dot]] y el trabajo [[W_dot]] son canales energéticos adicionales que no transportan materia.

## Hipótesis

- La frontera del volumen de control esta definida antes de escribir balances.
- Las entradas y salidas de masa se pueden identificar y etiquetar.
- Cada corriente tiene propiedades medias representativas.
- El convenio de signos para calor, trabajo y caudales se declara.
- Los terminos despreciados se justifican por escala, no por costumbre.

## Dominio de validez cuantitativo

El modelo de propiedades medias es razonable si las fluctuaciones de una seccion son pequenas frente al valor medio. Criterio operativo: < 5% de variación relativa en [[m_dot]] o en [[h]] dentro de una seccion suele bastar para un balance elemental. Para despreciar energía cinética, compara el termino de velocidad con la entalpía: si representa < 1% de [[h]], puede omitirse en una primera aproximacion.

En regimen estacionario, una condición útil es que la variación de [[m_sys]] durante el intervalo observado sea menor que el 1% del inventario inicial. Si no se cumple, el termino de acumulacion debe conservarse.

## Señales de fallo del modelo

El modelo empieza a fallar cuando las propiedades cambian mucho dentro de una misma entrada, cuando hay chorros, ondas de presión, mezcla incompleta o reacciones muy localizadas. También falla si se declara un volumen de control pero no se puede decidir que corrientes cruzan la frontera.

Una senal observable es que dos instrumentos colocados en la misma seccion dan valores muy distintos. Otra es que el balance de masa no cierra dentro de la incertidumbre experimental. En esos casos no basta con ajustar números: hay que revisar la frontera o pasar a un modelo distribuido.

## Modelo extendido o alternativo

Conviene cambiar a un modelo no estacionario si [[m_sys]] o [[E_sys]] cambian apreciablemente con el tiempo. Conviene cambiar a un modelo de flujo distribuido si las propiedades varian mucho con la posicion. Conviene cambiar a un modelo cinético o reactivo si la composicion cambia dentro del volumen de control.

La transicion no elimina el balance de conservación; lo refina. El balance integral sigue siendo la base, pero se complementa con ecuaciones locales, transferencia de calor, perdida de carga, cinética quimica o simulacion de fluidos.

## Comparación operativa

El modelo ideal sirve para balances rápidos de equipos con entradas y salidas limpias. El modelo extendido conviene cuando la frontera incluye regiones de mezcla, transitorios o variaciones espaciales. La decision operativa es simple: si una propiedad media permite cerrar masa y energía dentro de la incertidumbre, el volumen de control ideal basta; si no cierra, la frontera o el nivel de detalle deben cambiar.
