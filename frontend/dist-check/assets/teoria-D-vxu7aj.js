const e=`\uFEFF# Sistemas aislados y fuerzas externas\r
\r
## Contexto conceptual\r
\r
Este tema profundiza en la relación entre la definición del sistema, las fuerzas que se clasifican como externas y las consecuencias para la conservación del momento. Mientras que el concepto de "sistema aislado" se introduce en fundamentos, aquí se explora cómo **redefinir las fronteras del sistema** convierte fuerzas externas en internas y viceversa, y cómo las fuerzas externas —cuando existen— modifican el momento total de forma controlada.\r
\r
La distinción interno/externo no es intrínseca de la fuerza: depende enteramente de dónde trace usted la frontera del sistema.\r
\r
## 🟢 Nivel esencial\r
\r
Un sistema está aislado cuando lo importante ocurre entre los cuerpos que hemos decidido estudiar, sin una intervención apreciable desde fuera. La dificultad no está en memorizar una definición, sino en elegir bien la frontera del sistema.\r
\r
Imagina dos patinadores que se empujan sobre hielo. Si estudias a los dos juntos, el empujón es una interacción interna: uno gana movimiento en un sentido y el otro en el sentido contrario. Si estudias solo a uno de ellos, el empujón del otro aparece como una acción externa que cambia su movimiento.\r
\r
La idea esencial es que una misma interacción puede cambiar de papel según la frontera elegida. No existen fuerzas “internas” o “externas” por sí solas; lo son respecto al sistema que decides analizar.\r
\r
> [!IMPORTANT]\r
> Antes de hablar de conservación, decide qué cuerpos forman el sistema y qué interacciones quedan fuera.\r
\r
Cuantos más cuerpos relevantes incluyes dentro del sistema, menos intervenciones quedan fuera. Por eso definir el sistema no es un trámite: es el paso que decide si puedes tratar el conjunto como aislado o no.\r
\r
## 🔵 Nivel formal\r
\r
### Nomenclatura del leaf\r
\r
Identificadores de este leaf: **pi** denota el [[momento_lineal_individual]] de cada partícula con su [[masa_individual]] y su [[velocidad_individual]]; el [[impulso_externo]] **J** es la acción acumulada de la [[fuerza_externa_neta]] durante un [[tiempo]] determinado; **DeltaP** expresa la [[variacion_momento_total]] resultante; y la condición **cond** representa el estado de aislamiento del sistema.\r
\r
### Definición del Momento Individual\r
\r
El estado dinámico de cada cuerpo se describe por su momento lineal individual, que es el producto de su masa genérica [[m]] por su velocidad genérica [[v]]. En un sistema compuesto, este momento [[momento_lineal_individual]] combina la [[masa_individual]] y la [[velocidad_individual]] del cuerpo:\r
\r
{{f:P}}\r
\r
### Definición del Momento Total\r
\r
En esta sección analizaremos sistemas compuestos por múltiples partículas. El estado dinámico global se define mediante el momento lineal total del sistema:\r
\r
{{f:momento_total}}\r
\r
Que es la suma de los momentos individuales de todas las partes:\r
\r
{{f:pi}}\r
\r
### Principio de Conservación\r
\r
Cuando la [[fuerza_externa_neta]] es nula, el momento total inicial es igual al final, sin importar cuántas interacciones internas ocurran:\r
\r
{{f:cons_principle}}\r
\r
### Variación del Momento por fuerzas externas\r
\r
La variación temporal del momento total del sistema es igual a la suma de las fuerzas externas que actúan sobre él. Las fuerzas internas no pueden cambiar el momento total porque sus efectos se cancelan por parejas.\r
\r
{{f:DeltaP}}\r
\r
### Condición de Sistema Aislado\r
\r
Si la suma de fuerzas externas es nula, el sistema está aislado y el momento total se conserva:\r
\r
\r
### Fórmulas de aplicación directa\r
\r
Para colisiones donde los cuerpos quedan unidos (perfectamente inelástica), el [[impulso_externo]] interno unifica las velocidades en un valor común [[vf]]:\r
\r
\r
En el caso de una explosión desde el reposo, la ley de retroceso garantiza que los momentos individuales se cancelan entre sí. La velocidad de retroceso [[v1f]] del primer cuerpo es negativa cuando el segundo sale hacia adelante.\r
\r
{{f:recoil_law}}\r
\r
Para cualquier interacción entre dos masas en una dimensión, el balance general expresa que [[Pfinal]] debe igualar al momento inicial:\r
\r
{{f:general_1d_balance}}\r
\r
### Efecto de ampliar el sistema\r
\r
Si un cuerpo externo ejerce una fuerza sobre nuestro sistema, podemos elegir incluir ese cuerpo dentro de una nueva frontera más amplia. Al hacerlo, esa fuerza pasa de ser externa a interna, eliminando la fuente de variación del momento para el nuevo sistema global.\r
\r
**Precio**: ahora debemos rastrear el estado de más cuerpos, lo que puede aumentar la complejidad del problema.\r
\r
### Fuerzas externas típicas y su efecto\r
\r
| Fuerza externa | Dirección | ¿Cuándo es despreciable? |\r
|----------------|-----------|--------------------------|\r
| Gravedad | Vertical | Si se cancela exactamente con la normal |\r
| Normal del suelo | Vertical | En superficies horizontales sin saltos |\r
| Fricción cinética | Opuesta al movimiento | En impactos extremadamente breves |\r
| Tensión de cuerda | Según el hilo | Si el origen de la tensión es ajeno al sistema |\r
\r
### Condiciones de aislamiento por componentes\r
\r
Un sistema puede estar aislado en una dirección y no en otra. Esto permite resolver la componente conservada (por ejemplo, el eje horizontal) sin necesidad de conocer las fuerzas que actúan en las demás direcciones.\r
\r
{{f:inelastic_collision}}\r
\r
{{f:cond}}\r
\r
## 🔴 Nivel estructural\r
\r
### Relatividad de la clasificación\r
\r
La clasificación interno/externo es puramente convencional y depende del observador que define las fronteras. No existen "fuerzas inherentemente internas". Toda fuerza interna puede volverse externa si se redefine el sistema. La conservación del momento es, por tanto, una propiedad emergente de la elección de la frontera.\r
\r
### Jerarquía de sistemas anidados\r
\r
Se pueden definir sistemas anidados donde cada sistema mayor tiene menos fuerzas externas. En el límite de incluir todo el universo, no habría fuerzas externas y el momento total se conservaría de forma absoluta.\r
\r
### Relación con la termodinámica\r
\r
La distinción sistema/entorno en termodinámica es análoga. Así como el calor y el trabajo son transferencias de energía a través de la frontera, el impulso externo es una transferencia de momento. Redefinir la frontera cambia la contabilidad de ambas magnitudes de la misma manera.\r
\r
### Consecuencias para la modelización\r
\r
La elección del sistema determina qué información necesitamos y cuántas ecuaciones tenemos disponibles. Un sistema grande ofrece más leyes de conservación pero introduce más variables internas. La habilidad del físico consiste en encontrar el equilibrio óptimo para resolver el problema con los datos disponibles.\r
\r
## Interpretación física profunda\r
\r
Las fuerzas externas son la interfaz del sistema con el resto del universo; son los canales por los que el momento fluye hacia dentro o hacia fuera. Cuando cerramos esos canales (sistema aislado), el momento queda "atrapado" y solo puede redistribuirse internamente.\r
\r
Es como un tanque de agua con tuberías externas: si las llaves están cerradas, el volumen total de agua es constante aunque se agite internamente. Si las llaves se abren, el nivel sube o baja según el caudal externo.\r
\r
## Orden de magnitud\r
\r
Un satélite en órbita sufre un arrastre atmosférico diminuto que, a lo largo de meses, hace que su sistema no sea aislado. Sin embargo, para una maniobra de pocos segundos, el sistema puede considerarse aislado con un error despreciable. La escala temporal es clave para validar el modelo.\r
\r
## Método de resolución personalizado\r
\r
1. **Definir el sistema**: listar qué cuerpos incluimos explícitamente.\r
2. **Listar todas las fuerzas** sobre cada cuerpo.\r
3. **Clasificar**: ¿son internas o externas a nuestra frontera?\r
4. **Analizar externas**: sumarlas para obtener el balance neto.\r
5. **Evaluar aislamiento**: ¿la suma es nula en alguna componente?\r
6. **Aplicar conservación** solo en las direcciones donde no haya fuerzas externas.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Colisión en plano inclinado.** Las fuerzas externas tienen componentes paralelas y perpendiculares al plano. Si la colisión es breve, el impulso de la gravedad paralela al plano es muy pequeño, permitiendo usar la conservación en esa dirección durante el instante del impacto.\r
\r
## Preguntas reales del alumno\r
\r
- **¿El peso y la normal siempre se cancelan?** Solo en superficies horizontales. En una rampa, el peso tiene una componente que acelera el sistema si no hay fricción.\r
- **¿Qué pasa con la fricción estática?** Es una fuerza externa. Si incluimos la superficie en el sistema, la fricción se vuelve interna y el momento se conserva incluyendo la masa de la Tierra.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Enunciado y condiciones**: [Requisitos de aplicación](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
- **Ruptura de la conservación**: [Cuándo fallan estas hipótesis](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion).\r
\r
## Síntesis final\r
\r
La distinción entre fuerzas internas y externas depende de las fronteras elegidas. Ampliar el sistema convierte fuerzas externas en internas y refuerza la conservación, pero a costa de añadir más variables al análisis dinámico.\r
\r
\r
\r
\r
\r
`;export{e as default};
