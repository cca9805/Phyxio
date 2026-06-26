## Contexto conceptual

Cuando se golpea un extremo de una barra metalica, la perturbacion viaja a lo largo de ella como una onda de compresion y traccion. A diferencia de las ondas de flexion, estas ondas longitudinales son **no dispersivas** en el modelo de barra esbelta: todas las frecuencias viajan a la misma velocidad. Este hecho las convierte en el caso mas sencillo de propagacion ondulatoria en solidos y en la referencia natural para comparar con fenomenos dispersivos.

La velocidad de estas ondas depende exclusivamente de dos propiedades del material: su rigidez axial (modulo de Young [[modulo_de_young]]) y su densidad volumetrica ([[rho_vol]]). La geometria de la seccion transversal no influye en la velocidad, aunque si determina la impedancia mecanica y, por tanto, como se refleja y transmite la onda en las discontinuidades.

Este leaf trata las ondas longitudinales en barras esbeltas (dimension transversal mucho menor que la longitud de onda). Es el complemento directo del leaf de ondas flexionales: mientras que alli la cuarta derivada espacial produce dispersion cuadratica, aqui la segunda derivada produce propagacion sin dispersion.

## 🟢 Nivel esencial

Una barra larga y delgada puede considerarse como una cadena de resortes microscopicos. Cuando se comprime un extremo, cada capa empuja a la siguiente y la perturbacion avanza. La velocidad a la que avanza esta perturbacion es la **velocidad de onda longitudinal** [[v_barra]].

Lo esencial es que esta velocidad depende solo del material:
- Materiales rigidos (alto [[modulo_de_young]]) transmiten rapido porque los "resortes internos" son duros.
- Materiales densos (alta [[rho_vol]]) transmiten mas lento porque hay mas inercia que mover.

La relacion es una raiz cuadrada: [[v_barra]] crece con la raiz de la rigidez y decrece con la raiz de la densidad.

Valores tipicos:
- Acero: aproximadamente 5100 m/s
- Aluminio: aproximadamente 5090 m/s
- Cobre: aproximadamente 3750 m/s
- Vidrio: aproximadamente 5200 m/s
- Madera (longitudinal a la fibra): 3000–5000 m/s
- Polimeros: 1000–2500 m/s

La propiedad fundamental: un pulso de compresion recorre la barra **sin deformarse**. Su forma se mantiene identica independientemente de la distancia recorrida (siempre que no haya amortiguamiento ni discontinuidades). Esto es consecuencia directa de la ausencia de dispersion.

La **impedancia mecanica** [[impedancia_mecanica_longitudinal_de_la_barra]] es la magnitud que controla que ocurre cuando la onda encuentra un cambio: otra barra, un extremo libre, un empotramiento o una union. Se calcula como el producto de densidad, area de seccion y velocidad de onda.

## 🔵 Nivel formal

La ecuacion de onda para desplazamientos longitudinales u(x,t) en una barra esbelta es:

{{f:velocidad_longitudinal_barra}}

Esta formula se obtiene del equilibrio de Newton aplicado a un elemento infinitesimal de la barra, combinado con la ley de Hooke:

- La fuerza neta sobre un elemento de longitud dx es la diferencia de esfuerzos en sus dos caras: dF igual a A·d(sigma)/dx·dx
- El esfuerzo es sigma igual a E·(du/dx) (Hooke)
- La aceleracion del elemento es rho·A·dx·(d²u/dt²) (Newton)
- Igualando: E·(d²u/dx²) igual a rho·(d²u/dt²)

La solucion de esta ecuacion de onda tiene velocidad de propagacion [[v_barra]] igual a la raiz cuadrada de [[modulo_de_young]] entre [[rho_vol]].

La relacion de dispersion es lineal:

{{f:relacion_dispersion_barra}}

Esto confirma que la velocidad de fase ([[omega]]/[[k_long]]) y la velocidad de grupo (d[[omega]]/d[[k_long]]) son identicas. No hay dispersion.

La impedancia mecanica longitudinal se define como:

{{f:impedancia_barra}}

En una onda progresiva pura, la fuerza axial F y la velocidad de particula [[u_particula]] se relacionan por F igual a Z por [[u_particula]]. El signo depende de la direccion de propagacion.

La longitud de onda es:

{{f:longitud_onda_longitudinal}}

Para la validez del modelo, se requiere que [[lambda_long]] sea mucho mayor (al menos 6 veces) que la mayor dimension transversal de la barra.

## 🔴 Nivel estructural

La ausencia de dispersion tiene consecuencias profundas para el comportamiento de las ondas en barras:

- **Reflexion en extremos:** en un extremo libre, la onda de compresion se refleja como onda de traccion (inversion de signo de [[sigma_axial]]). En un extremo empotrado, se refleja sin inversion. El tiempo de ida y vuelta es 2L/[[v_barra]].

- **Uniones entre barras:** cuando una onda alcanza la union entre dos barras de impedancias [[impedancia_mecanica_longitudinal_de_la_barra]] distintas (Z1 y Z2), se refleja parcialmente. El coeficiente de reflexion en fuerza es (Z2 - Z1)/(Z2 + Z1). Si Z2 es mayor que Z1, la onda reflejada tiene el mismo signo que la incidente; si Z2 es menor, se invierte.

- **Transmision:** el coeficiente de transmision es 2·Z2/(Z1 + Z2). La energia se conserva: la suma del cuadrado del coeficiente de reflexion mas el producto del coeficiente de transmision al cuadrado por Z1/Z2 es igual a 1.

- **Ondas estacionarias:** en una barra finita con condiciones de contorno conocidas, la superposicion de ondas progresivas y reflejadas produce modos de resonancia. Las frecuencias naturales de una barra libre-libre o empotrada-empotrada son n·[[v_barra]]/(2L), con n entero. Para una barra empotrada-libre son (2n-1)·[[v_barra]]/(4L).

- **Efecto Poisson lateral:** aunque la onda es longitudinal, la contraccion lateral por efecto Poisson existe. El modelo de barra esbelta la ignora. A frecuencias altas (longitudes de onda comparables al diametro), la inercia lateral de esta contraccion introduce una correccion dispersiva conocida como efecto de Rayleigh-Love.

> [!WARNING]
> La velocidad [[v_barra]] en una barra esbelta es DIFERENTE de la velocidad de ondas P en un medio infinito. En medio infinito, el confinamiento lateral hace que la velocidad sea sqrt(M/rho) donde M es el modulo de onda plana, siempre mayor que E. No usar la formula de barra para calcular velocidades sismicas en roca maciza.

## Interpretación física profunda

La no-dispersion de las ondas longitudinales en barras refleja la proporcionalidad directa entre fuerza restauradora y desplazamiento a escala local. La ecuacion de onda es de segundo orden tanto en espacio como en tiempo, produciendo la relacion lineal [[omega]]-[[k_long]]. Esto contrasta con la flexion, donde la derivada espacial de cuarto orden produce una relacion cuadratica.

Fisicamente, la rigidez axial E actua como constante de "resorte por unidad de longitud" y la densidad rho como "masa por unidad de longitud". El cociente E/rho tiene dimensiones de velocidad al cuadrado y determina completamente la dinamica propagativa.

La impedancia [[impedancia_mecanica_longitudinal_de_la_barra]] representa la "resistencia al flujo de energia ondulatoria". Dos barras con la misma impedancia se comportan como un medio continuo: la onda pasa sin reflexion. Cualquier cambio de impedancia (material, seccion o ambos) genera reflexion.

## Orden de magnitud

Para una barra de acero:
- [[modulo_de_young]] es 210 GPa (210 × 10⁹ Pa)
- [[rho_vol]] es 7850 kg/m³
- [[v_barra]] resulta raiz de (210e9/7850) dando aproximadamente 5170 m/s
- A 1 kHz: [[lambda_long]] resulta 5170/1000 dando 5.17 m
- A 100 kHz: [[lambda_long]] resulta 0.052 m (5.2 cm)

Para una barra de aluminio:
- [[modulo_de_young]] es 70 GPa, [[rho_vol]] es 2700 kg/m³
- [[v_barra]] resulta raiz de (70e9/2700) dando aproximadamente 5090 m/s

Nota: acero y aluminio tienen velocidades longitudinales similares a pesar de rigideces y densidades muy diferentes, porque sus cocientes E/rho son casi iguales.

Si [[v_barra]] da mas de 7000 m/s para un metal comun, es muy probable un error de unidades (E en GPa sin convertir, o rho en g/cm³).

## Método de resolución personalizado

Para calcular la velocidad de onda longitudinal y magnitudes asociadas:

1. Obtener [[modulo_de_young]] del material en Pa. Si viene en GPa, multiplicar por 10⁹.
2. Obtener [[rho_vol]] en kg/m³. Si viene en g/cm³, multiplicar por 1000.
3. Calcular [[v_barra]] como raiz cuadrada de E/rho.
4. Si se necesita la longitud de onda: calcular [[lambda_long]] como [[v_barra]]/f, donde f es la frecuencia en Hz.
5. Si se necesita impedancia: obtener [[area_de_la_seccion_transversal]] en m² y calcular [[impedancia_mecanica_longitudinal_de_la_barra]] como rho·A·[[v_barra]].
6. Verificar que [[lambda_long]] es al menos 6 veces la dimension transversal mayor para confirmar validez del modelo.

Si el paso 6 no se cumple, considerar correcciones de Rayleigh-Love o un modelo de guia de onda.

## Casos especiales y ejemplo extendido

**Barras de seccion variable:** si la seccion cambia gradualmente, la velocidad local sigue siendo sqrt(E/rho) pero la impedancia varia con la posicion, produciendo reflexiones distribuidas.

**Barras compositas:** para materiales con modulo y densidad variables en la seccion, la velocidad efectiva se obtiene de la media ponderada de rigidez y masa por unidad de longitud.

**Cadena de barras unidas:** en una estructura con multiples uniones, cada cambio de impedancia genera reflexion parcial. El analisis se realiza con matrices de transferencia que encadenan coeficientes de reflexion y transmision.

**Limite de alta frecuencia:** cuando [[lambda_long]] se hace comparable al diametro, la correccion de Rayleigh-Love reduce la velocidad efectiva. La velocidad corregida es menor que sqrt(E/rho) y depende de la frecuencia: aparece dispersion.

## Preguntas reales del alumno

**¿Por que la velocidad no depende del area de la seccion?**
Porque al aumentar el area se incrementan simultaneamente la fuerza restauradora (mas material rigido) y la inercia (mas masa). Ambos efectos se cancelan exactamente, dejando la velocidad invariante.

**¿Por que acero y aluminio tienen velocidades casi iguales?**
Porque E/rho del acero (210e9/7850 aproximadamente 2.68e7) y del aluminio (70e9/2700 aproximadamente 2.59e7) son valores muy proximos. La alta rigidez del acero compensa su alta densidad.

**¿Es lo mismo que la velocidad del sonido?**
Solo en el sentido de que ambas son velocidades de onda. Pero la velocidad del sonido en aire se debe a la compresibilidad del gas, mientras que en una barra se debe a la rigidez de Young. Ademas, en un solido infinito la velocidad difiere (ondas P) porque el confinamiento lateral cambia el modulo efectivo.

**¿Que pasa cuando la onda llega al extremo de la barra?**
Si el extremo es libre, la onda se refleja con inversion de esfuerzo (compresion vuelve como traccion). Si esta empotrado, se refleja sin inversion. En ambos casos la velocidad de particula se invierte o no segun la condicion de contorno.

## Conexiones transversales y rutas de estudio

Conexión con [ondas flexionales en vigas](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-flexionales-en-vigas) (caso dispersivo, derivada cuarta), [ondas transversales de corte](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte) (velocidad depende del modulo de cizalla) y [impedancia mecanica en solidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos) (generalizacion del concepto de impedancia).

## Síntesis final

Las ondas longitudinales en barras esbeltas son el caso canonico de propagacion no dispersiva en solidos. Su velocidad depende solo de E y rho, es independiente de la frecuencia y de la geometria de la seccion. La impedancia mecanica (rho·A·[[v_barra]]) controla la reflexion y transmision en discontinuidades. El modelo es valido mientras la longitud de onda sea mucho mayor que las dimensiones transversales.