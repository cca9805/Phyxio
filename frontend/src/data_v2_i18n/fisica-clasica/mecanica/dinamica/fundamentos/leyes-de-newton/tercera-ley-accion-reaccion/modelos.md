# Modelos físicos: Tercera ley accion reaccion

## Modelo ideal

El modelo ideal de este leaf representa una interaccion entre dos sistemas A y B con identificacion limpia de pares reciprocos. El objetivo no es describir todos los efectos reales, sino capturar el nucleo estructural de la tercera ley: a toda fuerza de A sobre B corresponde una fuerza de B sobre A de igual modulo y sentido opuesto, en el mismo instante.

En notacion del leaf, el par principal es [[FAB]] y [[FBA]]. En contactos, aparece el par [[Nab]] y [[Nba]]. En analisis por ejes, el control se hace con [[FAx]]-[[FBx]] y [[FAy]]-[[FBy]].

El modelo ideal exige separar cuerpos y separar interacciones. Si esa separacion no es clara, la ecuacion puede seguir siendo formalmente correcta y, aun asi, la interpretacion fisica ser incorrecta.

## Hipótesis

Hipotesis operativas del modelo:

1. Las dos fuerzas comparadas pertenecen a la misma interaccion fisica.
2. Se evalua el par en el mismo instante temporal.
3. Se mantiene una convencion de ejes unica para ambos cuerpos.
4. Los diagramas de cuerpo libre de A y B se trazan por separado.
5. Las mediciones o estimaciones de componentes tienen error acotado y conocido.

Estas hipotesis deben declararse antes de sustituir valores. Sin ellas, la tercera ley puede mezclarse con otras fuerzas como [[W]] o [[N_gen]], generando confusiones de emparejamiento.

## Dominio de validez cuantitativo

El modelo se considera valido cuando se cumplen criterios observables:

Criterio cuantitativo explicito del leaf: error_relativo <= 10 por ciento y residual_promedio <= 0.10 N.

1. Criterio vectorial: ||[[FBA]] + [[FAB]]|| <= 0.10 N en mediciones de laboratorio educativo.
2. Criterio en x: |[[FBx]] + [[FAx]]| <= 0.05 N.
3. Criterio en y: |[[FBy]] + [[FAy]]| <= 0.05 N.
4. Criterio de contacto: ||[[Nba]] + [[Nab]]|| <= 0.10 N para el mismo punto de contacto.

Version operativa en texto plano para control de calidad:

- Residual en x menor o igual que 0.05 N.
- Residual en y menor o igual que 0.05 N.
- Residual vectorial menor o igual que 0.10 N.

Regla cuantitativa de cambio de modelo: si el residual promedio supera 0.10 N en tres corridas consecutivas, se abandona el modelo ideal y se usa modelo extendido por canales de interaccion.

En forma de umbral directo: si error_relativo > 10 por ciento, conviene cambiar de modelo.

Cuando estos umbrales se cumplen de forma consistente, la lectura de par accion-reaccion es robusta y util para inferencia fisica.

## Señales de fallo del modelo

Indicadores de salida de dominio:

1. Residual sistematico por encima de tolerancia en mas de una corrida.
2. Cambio de convencion de ejes entre cuerpos sin correccion explicita.
3. Emparejamiento de fuerzas de naturaleza distinta como si fueran accion-reaccion.
4. Interacciones multiples superpuestas sin identificacion de canal dominante.

Estas fallas no niegan la tercera ley; muestran que el mapeo del problema al modelo fue deficiente.

## Modelo extendido o alternativo

Cuando el caso real tiene multiples contactos, rozamiento anisotropico o acoplamientos variables, conviene escalar a un modelo extendido con etiquetado de pares por canal de interaccion y dependencia temporal explicita.

Cuando conviene cambiar de modelo: al superar de forma persistente cualquiera de los umbrales cuantitativos anteriores o cuando la identificacion de pares no puede hacerse sin ambiguedad.

## Comparación operativa

Modelo ideal: rapido, didactico y excelente para distinguir pares reciprocos basicos.

Modelo extendido: mas costoso pero necesario para sistemas con contactos complejos o datos ruidosos.

La practica correcta es seleccionar el nivel de modelo segun evidencia y objetivo de precision, no por preferencia fija.
