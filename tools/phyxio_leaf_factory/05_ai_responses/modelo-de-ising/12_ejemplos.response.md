# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-ising
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen

## Enunciado

Una cadena de cuatro [[espin]] del modelo de Ising tiene valores +1, +1, -1, +1. El [[acoplamiento]] favorece espines iguales, el [[campo_externo]] es positivo y la [[temperatura]] es finita. Se pide interpretar cómo la configuración relaciona interacción, energía y magnetización colectiva.

## Datos

- Configuración de [[espin]]: +1, +1, -1, +1
- [[numero_espines]]: 4
- [[acoplamiento]]: positivo
- [[campo_externo]]: positivo
- [[temperatura]]: distinta de cero
- [[constante_boltzmann]]: escala de conversión térmica

## Definición del sistema

El sistema es una cadena finita de [[numero_espines]] variables binarias. Cada [[espin]] representa una orientación posible y la red permite comparar vecinos. La magnitud observada no es solo el estado de una posición, sino la respuesta colectiva expresada mediante [[magnetizacion_total]] y [[magnetizacion_media]]. La configuración contiene una ruptura local de alineación, porque el tercer espín se opone a dos vecinos.

## Modelo físico

Se usa el modelo de Ising con interacción entre vecinos y contribución de [[campo_externo]]. La [[energia_ising]] mide cuánto satisface la configuración las reglas de alineación y campo. La [[probabilidad_configuracion]] se entiende mediante el peso térmico, por lo que la [[temperatura]] decide cuánto penaliza el sistema las configuraciones con más energía.

## Justificación del modelo

El modelo es adecuado porque todos los grados de libertad relevantes se han reducido a [[espin]] binarios. Además, se quiere estudiar una relación cualitativa y cuantitativa entre [[acoplamiento]], [[campo_externo]], [[temperatura]] y magnetización, no la estructura completa de un material real. La cadena es pequeña, así que no pretende representar una transición de fase real, pero sí mostrar cómo una inversión local modifica [[energia_ising]], [[magnetizacion_total]] y [[probabilidad_configuracion]].

## Resolución simbólica

La energía configuracional se lee con:

{{f:energia_ising_hamiltoniano}}

Después se calcula el balance de espines:

{{f:magnetizacion_total_ising}}

Para comparar con otros tamaños de red se normaliza:

{{f:magnetizacion_media_ising}}

La escala térmica se expresa mediante:

{{f:beta_termica_ising}}

La comparación probabilística se hace con:

{{f:peso_boltzmann_ising}}

Una configuración con menos enlaces desfavorables tendrá menor [[energia_ising]] si el [[acoplamiento]] favorece alineación. Un [[campo_externo]] positivo premia espines positivos y penaliza los negativos.

## Sustitución numérica

En la configuración dada hay tres espines positivos y uno negativo. Por tanto, [[magnetizacion_total]] tiene balance positivo y [[magnetizacion_media]] también. Si se compara con la configuración +1, +1, +1, +1, esta última tiene mayor alineación con el [[campo_externo]] y menos fronteras de dominio. Por eso su [[energia_ising]] será menor bajo [[acoplamiento]] ferromagnético y tendrá mayor [[probabilidad_configuracion]] a baja [[temperatura]].

## Validación dimensional

[[magnetizacion_total]] y [[magnetizacion_media]] son sumas o promedios de variables de [[espin]], por lo que no introducen unidades nuevas. [[energia_ising]] debe tener dimensión de energía. [[beta_termica]] tiene dimensión inversa de energía, de modo que el producto que aparece en el peso de Boltzmann es adimensional. Esta comprobación evita mezclar [[constante_boltzmann]], [[temperatura]] y energía en escalas incompatibles.

## Interpretación física

La configuración no está completamente desordenada: su [[magnetizacion_total]] positiva indica preferencia colectiva por la orientación positiva. Sin embargo, el espín negativo introduce una frontera energética que aumenta [[energia_ising]] frente al estado totalmente alineado. A baja [[temperatura]], esta diferencia pesa mucho y reduce [[probabilidad_configuracion]] de la configuración con defecto. A alta [[temperatura]], la penalización se suaviza y configuraciones con defectos aparecen con más frecuencia. La lectura física une tres niveles: una interacción local entre vecinos, una respuesta global de magnetización y una selección estadística gobernada por temperatura.

# Ejemplo de aplicación real

## Contexto

En una simulación de un material ferromagnético simplificado se usa una red de [[numero_espines]] grande para observar cómo cambia [[magnetizacion_media]] al variar [[temperatura]]. El objetivo no es predecir exactamente un metal real, sino estudiar el paso entre orden y desorden.

## Estimación física

Si [[temperatura]] es baja respecto a la escala fijada por [[acoplamiento]] y [[constante_boltzmann]], las configuraciones alineadas dominan. En ese régimen, [[magnetizacion_media]] se acerca a valores extremos. Si se aumenta [[temperatura]], la agitación térmica vuelve más frecuentes los defectos y dominios opuestos. El orden de magnitud relevante no es la temperatura sola, sino su comparación con la energía de interacción por enlace. Una red grande suaviza fluctuaciones y permite ver una curva colectiva más clara.

## Interpretación

La utilidad práctica del modelo está en mostrar cómo una regla microscópica sencilla puede generar comportamiento colectivo. Cuando [[magnetizacion_media]] cae al aumentar [[temperatura]], no se observa una “fuerza térmica” que empuje flechas al azar, sino un cambio de pesos estadísticos. Configuraciones con mayor [[energia_ising]] dejan de estar tan penalizadas. Por eso el modelo de Ising es un laboratorio conceptual para magnetismo, transición de fase y simulación estadística.

