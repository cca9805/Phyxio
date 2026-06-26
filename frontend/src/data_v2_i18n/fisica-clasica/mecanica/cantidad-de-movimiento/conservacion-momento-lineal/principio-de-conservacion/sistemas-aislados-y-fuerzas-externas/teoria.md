# Sistemas aislados y fuerzas externas

## Contexto conceptual

Este tema profundiza en la relación entre la definición del sistema, las fuerzas que se clasifican como externas y las consecuencias para la conservación del momento. Mientras que el concepto de "sistema aislado" se introduce en fundamentos, aquí se explora cómo **redefinir las fronteras del sistema** convierte fuerzas externas en internas y viceversa, y cómo las fuerzas externas —cuando existen— modifican el momento total de forma controlada.

La distinción interno/externo no es intrínseca de la fuerza: depende enteramente de dónde trace usted la frontera del sistema.

## 🟢 Nivel esencial

Un sistema está aislado cuando lo importante ocurre entre los cuerpos que hemos decidido estudiar, sin una intervención apreciable desde fuera. La dificultad no está en memorizar una definición, sino en elegir bien la frontera del sistema.

Imagina dos patinadores que se empujan sobre hielo. Si estudias a los dos juntos, el empujón es una interacción interna: uno gana movimiento en un sentido y el otro en el sentido contrario. Si estudias solo a uno de ellos, el empujón del otro aparece como una acción externa que cambia su movimiento.

La idea esencial es que una misma interacción puede cambiar de papel según la frontera elegida. No existen fuerzas “internas” o “externas” por sí solas; lo son respecto al sistema que decides analizar.

> [!IMPORTANT]
> Antes de hablar de conservación, decide qué cuerpos forman el sistema y qué interacciones quedan fuera.

Cuantos más cuerpos relevantes incluyes dentro del sistema, menos intervenciones quedan fuera. Por eso definir el sistema no es un trámite: es el paso que decide si puedes tratar el conjunto como aislado o no.

## 🔵 Nivel formal

### Nomenclatura del leaf

Identificadores de este leaf: **pi** denota el [[momento_lineal_individual]] de cada partícula con su [[masa_individual]] y su [[velocidad_individual]]; el [[impulso_externo]] **J** es la acción acumulada de la [[fuerza_externa_neta]] durante un [[tiempo]] determinado; **DeltaP** expresa la [[variacion_momento_total]] resultante; y la condición **cond** representa el estado de aislamiento del sistema.

### Definición del Momento Individual

El estado dinámico de cada cuerpo se describe por su momento lineal individual, que es el producto de su masa genérica [[m]] por su velocidad genérica [[v]]. En un sistema compuesto, este momento [[momento_lineal_individual]] combina la [[masa_individual]] y la [[velocidad_individual]] del cuerpo:

{{f:P}}

### Definición del Momento Total

En esta sección analizaremos sistemas compuestos por múltiples partículas. El estado dinámico global se define mediante el momento lineal total del sistema:

{{f:momento_total}}

Que es la suma de los momentos individuales de todas las partes:

{{f:pi}}

### Principio de Conservación

Cuando la [[fuerza_externa_neta]] es nula, el momento total inicial es igual al final, sin importar cuántas interacciones internas ocurran:

{{f:cons_principle}}

### Variación del Momento por fuerzas externas

La variación temporal del momento total del sistema es igual a la suma de las fuerzas externas que actúan sobre él. Las fuerzas internas no pueden cambiar el momento total porque sus efectos se cancelan por parejas.

{{f:DeltaP}}

### Condición de Sistema Aislado

Si la suma de fuerzas externas es nula, el sistema está aislado y el momento total se conserva:


### Fórmulas de aplicación directa

Para colisiones donde los cuerpos quedan unidos (perfectamente inelástica), el [[impulso_externo]] interno unifica las velocidades en un valor común [[vf]]:


En el caso de una explosión desde el reposo, la ley de retroceso garantiza que los momentos individuales se cancelan entre sí. La velocidad de retroceso [[v1f]] del primer cuerpo es negativa cuando el segundo sale hacia adelante.

{{f:recoil_law}}

Para cualquier interacción entre dos masas en una dimensión, el balance general expresa que [[Pfinal]] debe igualar al momento inicial:

{{f:general_1d_balance}}

### Efecto de ampliar el sistema

Si un cuerpo externo ejerce una fuerza sobre nuestro sistema, podemos elegir incluir ese cuerpo dentro de una nueva frontera más amplia. Al hacerlo, esa fuerza pasa de ser externa a interna, eliminando la fuente de variación del momento para el nuevo sistema global.

**Precio**: ahora debemos rastrear el estado de más cuerpos, lo que puede aumentar la complejidad del problema.

### Fuerzas externas típicas y su efecto

| Fuerza externa | Dirección | ¿Cuándo es despreciable? |
|----------------|-----------|--------------------------|
| Gravedad | Vertical | Si se cancela exactamente con la normal |
| Normal del suelo | Vertical | En superficies horizontales sin saltos |
| Fricción cinética | Opuesta al movimiento | En impactos extremadamente breves |
| Tensión de cuerda | Según el hilo | Si el origen de la tensión es ajeno al sistema |

### Condiciones de aislamiento por componentes

Un sistema puede estar aislado en una dirección y no en otra. Esto permite resolver la componente conservada (por ejemplo, el eje horizontal) sin necesidad de conocer las fuerzas que actúan en las demás direcciones.

{{f:inelastic_collision}}

{{f:cond}}

## 🔴 Nivel estructural

### Relatividad de la clasificación

La clasificación interno/externo es puramente convencional y depende del observador que define las fronteras. No existen "fuerzas inherentemente internas". Toda fuerza interna puede volverse externa si se redefine el sistema. La conservación del momento es, por tanto, una propiedad emergente de la elección de la frontera.

### Jerarquía de sistemas anidados

Se pueden definir sistemas anidados donde cada sistema mayor tiene menos fuerzas externas. En el límite de incluir todo el universo, no habría fuerzas externas y el momento total se conservaría de forma absoluta.

### Relación con la termodinámica

La distinción sistema/entorno en termodinámica es análoga. Así como el calor y el trabajo son transferencias de energía a través de la frontera, el impulso externo es una transferencia de momento. Redefinir la frontera cambia la contabilidad de ambas magnitudes de la misma manera.

### Consecuencias para la modelización

La elección del sistema determina qué información necesitamos y cuántas ecuaciones tenemos disponibles. Un sistema grande ofrece más leyes de conservación pero introduce más variables internas. La habilidad del físico consiste en encontrar el equilibrio óptimo para resolver el problema con los datos disponibles.

## Interpretación física profunda

Las fuerzas externas son la interfaz del sistema con el resto del universo; son los canales por los que el momento fluye hacia dentro o hacia fuera. Cuando cerramos esos canales (sistema aislado), el momento queda "atrapado" y solo puede redistribuirse internamente.

Es como un tanque de agua con tuberías externas: si las llaves están cerradas, el volumen total de agua es constante aunque se agite internamente. Si las llaves se abren, el nivel sube o baja según el caudal externo.

## Orden de magnitud

Un satélite en órbita sufre un arrastre atmosférico diminuto que, a lo largo de meses, hace que su sistema no sea aislado. Sin embargo, para una maniobra de pocos segundos, el sistema puede considerarse aislado con un error despreciable. La escala temporal es clave para validar el modelo.

## Método de resolución personalizado

1. **Definir el sistema**: listar qué cuerpos incluimos explícitamente.
2. **Listar todas las fuerzas** sobre cada cuerpo.
3. **Clasificar**: ¿son internas o externas a nuestra frontera?
4. **Analizar externas**: sumarlas para obtener el balance neto.
5. **Evaluar aislamiento**: ¿la suma es nula en alguna componente?
6. **Aplicar conservación** solo en las direcciones donde no haya fuerzas externas.

## Casos especiales y ejemplo extendido

**Colisión en plano inclinado.** Las fuerzas externas tienen componentes paralelas y perpendiculares al plano. Si la colisión es breve, el impulso de la gravedad paralela al plano es muy pequeño, permitiendo usar la conservación en esa dirección durante el instante del impacto.

## Preguntas reales del alumno

- **¿El peso y la normal siempre se cancelan?** Solo en superficies horizontales. En una rampa, el peso tiene una componente que acelera el sistema si no hay fricción.
- **¿Qué pasa con la fricción estática?** Es una fuerza externa. Si incluimos la superficie en el sistema, la fricción se vuelve interna y el momento se conserva incluyendo la masa de la Tierra.

## Conexiones transversales y rutas de estudio

- **Enunciado y condiciones**: [Requisitos de aplicación](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
- **Ruptura de la conservación**: [Cuándo fallan estas hipótesis](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion).

## Síntesis final

La distinción entre fuerzas internas y externas depende de las fronteras elegidas. Ampliar el sistema convierte fuerzas externas en internas y refuerza la conservación, pero a costa de añadir más variables al análisis dinámico.





