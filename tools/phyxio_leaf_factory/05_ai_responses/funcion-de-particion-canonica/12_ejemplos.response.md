# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: funcion-de-particion-canonica
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un sistema tiene tres microestados con energías 0 J, 4,1 x 10^-21 J y 8,2 x 10^-21 J. Está en contacto con un baño térmico a 300 K. Calcula cualitativamente los [[peso_boltzmann]], la [[funcion_particion]], las [[probabilidad_microestado]] y la [[energia_media]]. Interpreta cómo la suma de pesos responde a la [[temperatura]].

## Datos
Temperatura absoluta: 300 K.
Constante de Boltzmann: 1,38 x 10^-23 J/K.
Energías de microestado: 0 J, 4,1 x 10^-21 J, 8,2 x 10^-21 J.
Sistema: conjunto discreto de tres microestados.

## Definición del sistema
El sistema se modela como un conjunto discreto y finito de microestados en equilibrio con un baño térmico. Cada [[energia_microestado]] representa un nivel permitido. No se estudia la trayectoria entre estados, sino la ocupación estadística esperada. El baño fija [[temperatura]], por lo que el uso de [[beta]] y de pesos canónicos es adecuado.

## Modelo físico
Usamos el ensamble canónico. La [[temperatura]] es externa y estable, [[constante_boltzmann]] convierte la escala térmica a energía, y [[funcion_particion]] normaliza los [[peso_boltzmann]].

## Justificación del modelo
El conjunto de estados es finito, así que la suma converge. La energía no está fijada exactamente, porque el sistema intercambia energía con el baño. Por eso no usamos un modelo microcanónico. Como no se menciona intercambio de partículas, tampoco hace falta un modelo gran canónico.

## Resolución simbólica
Primero se obtiene [[beta]] a partir de la escala térmica.

{{f:beta_inversa_termica}}

Después se calcula el [[peso_boltzmann]] de cada microestado.

{{f:peso_boltzmann_canonico}}

La suma de todos los pesos produce [[funcion_particion]].

{{f:funcion_particion_canonica}}

Cada [[probabilidad_microestado]] se obtiene normalizando su peso.

{{f:probabilidad_microestado_canonico}}

La [[energia_media]] se obtiene ponderando cada [[energia_microestado]] por su probabilidad.

{{f:energia_media_canonica}}

## Sustitución numérica
La escala térmica aproximada es k_B T ≈ 4,14 x 10^-21 J. Por eso los tres niveles corresponden aproximadamente a razones 0, 1 y 2. Sus pesos relativos son del orden de 1, 0,37 y 0,14. La [[funcion_particion]] vale aproximadamente 1,51. Las probabilidades aproximadas son 0,66, 0,24 y 0,09. La [[energia_media]] queda próxima a 1,7 x 10^-21 J.

## Validación dimensional
[[beta]] tiene dimensión inversa de energía, de modo que el producto con [[energia_microestado]] es adimensional. El [[peso_boltzmann]] y la [[funcion_particion]] son adimensionales. Cada [[probabilidad_microestado]] también es adimensional y debe sumar uno. La [[energia_media]] sí conserva unidades de energía, porque combina probabilidades adimensionales con energías en julios.

## Interpretación física
La [[funcion_particion]] no cuenta tres estados como si fueran equivalentes: cuenta cuánto pesa cada uno a la [[temperatura]] dada. El estado de menor [[energia_microestado]] domina porque su [[peso_boltzmann]] es mayor. El segundo estado todavía participa, ya que su energía es comparable con la escala térmica. El tercero queda más penalizado, pero no desaparece. Por eso la [[energia_media]] resulta menor que la media aritmética simple de las tres energías. La suma canónica muestra que la ocupación microscópica no depende solo de existir, sino de competir térmicamente contra los demás estados.

# Ejemplo de aplicación real
## Contexto
En un material molecular simplificado, tres configuraciones rotacionales tienen energías diferentes. A temperatura ambiente, una simulación rápida puede usar [[funcion_particion]] para estimar qué configuraciones contribuyen a la señal observada. El modelo no predice una molécula concreta, sino la distribución esperada de muchas moléculas en equilibrio.

## Estimación física
Si la separación entre configuraciones es del orden de k_B T, varias configuraciones contribuyen de forma apreciable. Si una separación es diez veces mayor, su [[peso_boltzmann]] cae mucho y apenas modifica [[funcion_particion]]. Una estimación razonable consiste en conservar los estados con peso relativo mayor que 10^-3 y descartar los restantes solo si no cambian [[energia_media]] dentro de la precisión buscada.

## Interpretación
La aplicación enseña que [[funcion_particion]] funciona como filtro térmico. No basta con enumerar configuraciones; hay que ponderarlas con [[peso_boltzmann]]. Al variar [[temperatura]], cambian las probabilidades y, con ellas, propiedades promedio. Esa es la razón por la que una misma molécula puede mostrar comportamientos macroscópicos distintos sin cambiar su lista de microestados básicos.

