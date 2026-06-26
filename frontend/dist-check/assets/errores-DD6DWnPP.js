const e=`# Errores comunes

## Errores conceptuales

### Error 1: Creer que la velocidad de onda longitudinal depende del area de la seccion

**Por que parece correcto:** una barra mas gruesa tiene mas material, por lo que parece logico que la onda viaje de forma diferente.

**Por que es incorrecto:** al aumentar la seccion aumentan proporcionalmente tanto la fuerza restauradora (mas rigidez total) como la inercia (mas masa). El cociente que determina la velocidad (E/rho) no cambia con la geometria. La velocidad es una propiedad del material, no de la barra.

**Señales de deteccion:** calcular [[v_barra]] y obtener valores distintos para distintas secciones del mismo material.

**Correccion conceptual:** la formula [[v_barra]] igual a raiz de (E/rho) no contiene ningun termino geometrico. Solo el modulo de Young y la densidad aparecen.

**Mini-ejemplo de contraste:** una barra de acero de 5 mm de diametro y una de 50 mm tienen exactamente la misma velocidad longitudinal (5100 m/s). Lo que cambia es la impedancia mecanica, no la velocidad.

---

### Error 2: Confundir velocidad longitudinal en barra con velocidad de ondas P en medio infinito

**Por que parece correcto:** ambas son "velocidades del sonido en el solido", por lo que pueden parecer intercambiables.

**Por que es incorrecto:** en un medio infinito, el material esta confinado lateralmente y no puede expandirse libremente en la direccion transversal. Esto hace que el modulo efectivo sea mayor que E (es el modulo de onda plana, que incluye el coeficiente de Poisson). La velocidad de ondas P siempre es mayor que la velocidad en barra.

**Señales de deteccion:** obtener valores de velocidad en barra superiores a los de ondas P tabulados para el mismo material. Para acero, la velocidad P es unos 5900 m/s frente a 5100 m/s en barra.

**Correccion conceptual:** la velocidad en barra usa E; la velocidad P usa M igual a E·(1-nu)/((1+nu)·(1-2nu)). Para acero con nu de 0.3, M/E es aproximadamente 1.35, lo que explica la diferencia.

**Mini-ejemplo de contraste:** acero con E de 210 GPa y nu de 0.3. Velocidad en barra: raiz de (210e9/7850) dando 5170 m/s. Velocidad P: raiz de (283e9/7850) dando 6000 m/s. Usar la formula incorrecta produce un error del 16%.

---

## Errores de modelo

### Error 3: Aplicar el modelo de barra esbelta a frecuencias donde la longitud de onda es comparable al diametro

**Por que parece correcto:** la formula es simple y da un resultado numerico sin señalar su propio rango de validez.

**Por que es incorrecto:** cuando [[lambda_long]] se hace comparable al diametro, la inercia lateral por contraccion de Poisson introduce dispersion. La velocidad real disminuye respecto al valor predicho y depende de la frecuencia.

**Señales de deteccion:** [[lambda_long]] calculada resulta menor que 6 veces el diametro de la barra. Los pulsos experimentales de alta frecuencia llegan mas tarde de lo previsto.

**Correccion conceptual:** verificar siempre la condicion [[lambda_long]] mayor que 6d antes de usar la formula simple. Si no se cumple, usar la correccion de Rayleigh-Love o el modelo de Pochhammer-Chree.

**Mini-ejemplo de contraste:** barra de acero de 50 mm de diametro a 100 kHz. [[lambda_long]] vale 5100/100000 dando 0.051 m (51 mm). Cociente lambda/d es 1.02, muy por debajo de 6. El modelo de barra esbelta NO es valido aqui.

---

### Error 4: Ignorar la reflexion en cambios de seccion

**Por que parece correcto:** si el material es el mismo a ambos lados de un cambio de seccion, parece que la onda deberia pasar sin problema.

**Por que es incorrecto:** la reflexion depende de la impedancia [[Z_barra]], que es rho·A·[[v_barra]]. Aunque rho y [[v_barra]] no cambien, un cambio de area A produce un cambio de impedancia y genera reflexion parcial.

**Señales de deteccion:** ecos inesperados en barras con escalones de seccion. El coeficiente de reflexion es (A2 - A1)/(A2 + A1) para el mismo material.

**Correccion conceptual:** toda discontinuidad geometrica es una discontinuidad de impedancia y genera reflexion. Solo si A1 es igual a A2 la onda pasa sin reflejarse.

**Mini-ejemplo de contraste:** una barra de acero pasa de 10 mm a 20 mm de diametro. Razon de areas: 4. Coeficiente de reflexion: (4-1)/(4+1) dando 0.6. Se refleja el 60% de la amplitud de fuerza.

---

## Errores matematicos

### Error 5: Olvidar la raiz cuadrada en la formula de velocidad

**Por que parece correcto:** recordar que v depende de E/rho pero olvidar que es la raiz cuadrada del cociente.

**Por que es incorrecto:** E/rho tiene dimensiones de \`[L² T⁻²]\`, que son dimensiones de velocidad al cuadrado. Sin la raiz, el resultado no tiene dimensiones de velocidad.

**Señales de deteccion:** el resultado tiene unidades de m²/s² en lugar de m/s. Los valores numericos son del orden de 10⁷ en vez de 10³.

**Correccion conceptual:** la formula correcta es [[v_barra]] igual a la raiz cuadrada de ([[E_young]]/[[rho_vol]]). Dimensionalmente: \`[M L⁻¹ T⁻²]/[M L⁻³]\` da \`[L² T⁻²]\`; su raiz cuadrada da \`[L T⁻¹]\`.

**Mini-ejemplo de contraste:** acero: E/rho da 210e9/7850 dando 2.68 × 10⁷ m²/s² (incorrecto como velocidad). La raiz cuadrada da 5170 m/s (correcto).

---

### Error 6: Usar la frecuencia en Hz donde se requiere rad/s o viceversa

**Por que parece correcto:** ambas son "frecuencia" y a veces se intercambian sin consecuencias visibles.

**Por que es incorrecto:** la longitud de onda se calcula como v/f (con f en Hz) o como 2pi·v/[[omega]]. Usar [[omega]] donde corresponde f introduce un factor 2pi de error.

**Señales de deteccion:** la longitud de onda calculada es 6.28 veces mayor o menor que la esperada.

**Correccion conceptual:** [[lambda_long]] es [[v_barra]] dividido entre f (Hz). Si se parte de [[omega]], primero dividir por 2pi para obtener f.

**Mini-ejemplo de contraste:** acero a 1 kHz. Correcto: lambda es 5100/1000 dando 5.1 m. Error con [[omega]]: 5100/6283 dando 0.81 m (6.28 veces menor).

---

## Errores de interpretacion

### Error 7: Asumir que la impedancia mecanica es una propiedad solo del material

**Por que parece correcto:** dado que la velocidad solo depende del material, es natural pensar que la impedancia tambien.

**Por que es incorrecto:** la impedancia mecanica [[Z_barra]] incluye el area de la seccion transversal. Dos barras del mismo material con distinta seccion tienen distinta impedancia y producen reflexion en la union.

**Señales de deteccion:** predecir transmision total en una union entre barras del mismo material pero diferente seccion.

**Correccion conceptual:** [[Z_barra]] es rho·A·[[v_barra]]. La impedancia especifica (rho·v) es propiedad del material, pero la mecanica (rho·A·v) depende tambien de la geometria.

**Mini-ejemplo de contraste:** dos barras de aluminio, una de 10 mm y otra de 30 mm de diametro. Misma impedancia especifica (rho·v de 13 740 kg/(m²·s)), pero impedancias mecanicas en proporcion 1:9 (por el cuadrado del diametro). En la union se refleja el 80% de la amplitud.

---

### Error 8: Creer que la ausencia de dispersion implica ausencia de atenuacion

**Por que parece correcto:** si la onda no se deforma al viajar, parece que tampoco se debilita.

**Por que es incorrecto:** la dispersion y la atenuacion son fenomenos independientes. La dispersion se refiere a la dependencia de la velocidad con la frecuencia; la atenuacion se refiere a la perdida de amplitud con la distancia. Una onda no dispersiva puede atenuarse por amortiguamiento viscoelastico, difusion de energia a modos laterales o perdidas en los apoyos.

**Señales de deteccion:** suponer que un pulso mantiene su amplitud constante despues de recorrer metros de barra real.

**Correccion conceptual:** el modelo ideal predice propagacion sin atenuacion NI dispersion. En la realidad, siempre hay algo de atenuacion. La clave es que la forma del pulso se conserva (no-dispersion) aunque su amplitud decrezca (atenuacion).

**Mini-ejemplo de contraste:** un pulso en una barra de polimero (PMMA) a 50 kHz mantiene su forma temporal pero pierde un 30% de amplitud por metro debido al amortiguamiento viscoelastico del material.

---

## Regla de autocontrol rápido

Si [[v_barra]] calculada no esta entre 1000 y 6500 m/s para un solido comun, hay error casi seguro en las unidades de [[E_young]] o [[rho_vol]].
`;export{e as default};
