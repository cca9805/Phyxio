## Modelo ideal

El modelo ideal de este leaf trata la presión [[p]] como una magnitud escalar local producida por una fuerza normal [[F]] repartida uniformemente sobre un área [[A]]. La simplificación central consiste en no describir cada interacción microscópica entre moléculas y superficie, sino su efecto medio por unidad de área.

En este modelo, la superficie se considera bien definida, la fuerza relevante es perpendicular a ella y la distribución espacial no cambia de forma apreciable dentro del área elegida. Por eso la relación central es:

{{f:presion_mec}}

El modelo conserva las magnitudes [[p]], [[F]] y [[A]], pero ignora rugosidad fina, variaciones puntuales de contacto, deformación local del material y fluctuaciones microscópicas. Es el modelo adecuado para iniciar la lectura de pistones, paredes, placas, sensores y recipientes.

## Hipótesis

- **Área positiva y conocida**: [[A]] debe ser mayor que cero. Si se viola, la división no tiene sentido físico y el resultado puede dispararse artificialmente.

- **Fuerza normal identificada**: [[F]] debe ser la componente perpendicular. Si se usa una fuerza oblicua completa, se sobreestima la presión real.

- **Distribución aproximadamente uniforme**: la presión debe representar bien la zona analizada. Si la presión cambia mucho sobre la superficie, hace falta un perfil o una integración.

- **Referencia declarada**: si aparece [[p_abs]] o [[p_man]], debe indicarse la referencia. Si se mezclan referencias, la interpretación puede ser físicamente falsa aunque el cálculo algebraico parezca correcto.

- **Fluido compatible con modelo continuo**: la presión debe poder asignarse localmente. Si el sistema es microscópico o rarificado, el valor medio puede perder significado.

## Dominio de validez cuantitativo

La definición mecánica es segura cuando el área de control es mucho mayor que la escala microscópica y suficientemente pequeña para que la presión no cambie mucho. Una condición operativa útil es que la variación relativa de presión dentro del área sea baja:


(Delta p dividido por p) < 0.05


En problemas introductorios, se considera aceptable si [[p]] puede tomarse uniforme en la zona de contacto. En hidráulica ordinaria, valores de [[p]] entre 10 elevado a 5 Pa y 10 elevado a 7 Pa son razonables. En respiración o ventilación, diferencias de decenas o cientos de Pa pueden ser relevantes.

Para el enlace hidrostático básico, la aproximación:

la relación hidrostática posterior

requiere fluido en reposo, densidad casi constante, gravedad uniforme y profundidad como profundidad vertical. Si estas condiciones fallan, el modelo deja de ser una primera aproximación fiable.

## Señales de fallo del modelo

Una señal clara de fallo aparece cuando una superficie grande se trata como si toda ella tuviera la misma presión, aunque el enunciado indique profundidad variable. En una pared vertical de un depósito, la presión no es uniforme: aumenta con profundidad.

Otra señal es que el resultado dependa de un área mal convertida. Usar centímetros cuadrados como si fueran metros cuadrados puede multiplicar la presión por 10 elevado a 4. El número obtenido suele parecer “enorme”, pero el fallo está en la unidad.

También falla el modelo si se confunde presión absoluta y manométrica. Una lectura de manómetro puede ser negativa sin violar la física; una presión absoluta negativa, en cambio, no es admisible en este contexto.

## Modelo extendido o alternativo

El primer modelo extendido reemplaza la presión uniforme por una distribución espacial presión variable variable. En ese caso la fuerza total no se obtiene con una sola multiplicación, sino sumando aportes sobre la superficie.

Para fluidos en reposo con densidad constante aparece el modelo hidrostático, donde [[p_man]] crece con densidad, gravedad y profundidad. Para fluidos en movimiento se deben añadir efectos dinámicos, pérdidas y gradientes, que pertenecen a hojas posteriores.

La transición explícita llega cuando conviene cambiar de modelo: cuando el área es grande, la profundidad cambia, la superficie es curva o el sensor mide una referencia distinta de la usada en la ecuación.

## Comparación operativa

| Modelo | Uso principal | Ventaja | Límite |
|---|---|---|---|
| Presión uniforme | pistones, placas pequeñas, sensores | cálculo directo con [[F]] y [[A]] | no describe variación espacial |
| Presión absoluta/manométrica | manómetros y depósitos | evita errores de referencia | exige declarar [[p_atm]] |
| Presión hidrostática básica | fluido en reposo | conecta presión con densidad, gravedad y profundidad | requiere densidad casi constante |
| Distribución variable | paredes grandes o superficies curvas | calcula fuerza total realista | requiere integración o aproximación por tramos |
