# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: equilibrio-estadistico
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Statistical Equilibrium
## Conceptual errors
### Error 1: Creer que equilibrio significa ausencia de transiciones
**Why it seems correct**
La palabra equilibrio sugiere quietud.
**Why it is incorrect**
En equilibrio estadístico pueden seguir ocurriendo saltos; lo que se anula es el [[flujo_probabilidad]] neto.
**Detection signal**
El alumno dice que [[tasa_transicion]] debe ser cero.
**Conceptual correction**
Separar movimiento microscópico y estabilidad de [[probabilidad_estado]].
**Mini-example of contrast**
Dos estados intercambian población al mismo ritmo y sus probabilidades no cambian.

### Error 2: Confundir estacionariedad con balance detallado
**Why it seems correct**
Ambas ideas pueden mantener constantes las probabilidades.
**Why it is incorrect**
Puede haber ciclos con [[probabilidad_estado]] constante y [[flujo_probabilidad]] interno no nulo.
**Detection signal**
No se revisan pares de transiciones inversas.
**Conceptual correction**
Comprobar {{f:balance_detallado_dos_estados}} además de estacionariedad.
**Mini-example of contrast**
Tres estados pueden mantener ocupaciones constantes con corriente circular.

## Model errors
### Error 3: Usar [[peso_boltzmann]] sin baño térmico estable
**Why it seems correct**
La fórmula parece universal.
**Why it is incorrect**
Requiere [[temperatura]] definida y condiciones térmicas compatibles.
**Detection signal**
La [[temperatura]] cambia mientras se interpreta una distribución fija.
**Conceptual correction**
Declarar el entorno y sus límites antes de usar pesos térmicos.
**Mini-example of contrast**
Un sistema aislado y uno en baño térmico no se modelan igual.

### Error 4: Ignorar estados accesibles ocultos
**Why it seems correct**
Solo se ven algunos estados medidos.
**Why it is incorrect**
La normalización falla si falta población estadística.
**Detection signal**
La suma de [[probabilidad_estado]] no se aproxima a 1.
**Conceptual correction**
Revisar el espacio de estados antes de diagnosticar equilibrio.
**Mini-example of contrast**
Un detector que omite un estado lento inventa un desbalance.

## Mathematical errors
### Error 5: Restar flujos con el signo invertido
**Why it seems correct**
Los índices parecen simétricos.
**Why it is incorrect**
El signo de [[flujo_probabilidad]] indica dirección neta.
**Detection signal**
La interpretación contradice la flecha dominante del DCL estadístico.
**Conceptual correction**
Fijar una convención antes de aplicar {{f:flujo_probabilidad_neto}}.
**Mini-example of contrast**
J_ij positivo no significa lo mismo que J_ji positivo.

### Error 6: Olvidar la normalización
**Why it seems correct**
Cada probabilidad individual parece razonable.
**Why it is incorrect**
Todas deben formar una distribución completa.
**Detection signal**
La suma total supera 1 o queda por debajo de 1.
**Conceptual correction**
Aplicar {{f:normalizacion_probabilidades}} antes de interpretar.
**Mini-example of contrast**
Tres valores plausibles pueden sumar 1.2 y no representar probabilidades.

## Interpretation errors
### Error 7: Leer [[entropia]] como caos sin estructura
**Why it seems correct**
Se usa lenguaje cotidiano de desorden.
**Why it is incorrect**
[[entropia]] mide dispersión estadística cuantificada.
**Detection signal**
No se conecta con [[probabilidad_estado]].
**Conceptual correction**
Interpretar [[entropia]] desde la distribución de ocupaciones.
**Mini-example of contrast**
Dos distribuciones con la misma energía pueden tener distinta dispersión.

### Error 8: Tratar el DCL como mecánico
**Why it seems correct**
El diagrama usa flechas.
**Why it is incorrect**
Las flechas representan tráfico estadístico, no fuerzas reales.
**Detection signal**
Se habla de newtons o aceleración.
**Conceptual correction**
Leer entradas, salidas y balance de probabilidad.
**Mini-example of contrast**
Una flecha doble compensada indica equilibrio estadístico, no fuerza nula.

## Quick self-control rule
Antes de aceptar equilibrio, verifica normalización, [[probabilidad_estado]] estacionaria y [[flujo_probabilidad]] neto compatible con cero.

