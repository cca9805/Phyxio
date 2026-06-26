# Errores comunes

## Errores conceptuales

### Error 1: creer que el refrigerador genera frio

**Por que parece correcto:** El alumno observa que el interior se enfria y deduce que la maquina crea frio, por analogia con una estufa que crea calor.

**Por que es incorrecto:** El refrigerador no crea frio; transfiere calor [[Q_C]] del interior al exterior mediante trabajo [[W]]. La energia no se destruye sino que se redistribuye.

**Senal de deteccion:** El alumno afirma que el refrigerador produce frio o destruye calor.

**Correccion conceptual:** El refrigerador extrae calor [[Q_C]] del espacio frio y lo entrega al caliente como [[Q_H]]. La energia total se conserva: [[Q_H]] es [[Q_C]] mas [[W]].

**Mini-ejemplo:** Si [[Q_C]] es 500 J y [[W]] es 200 J, el refrigerador mueve 500 J al foco caliente sumando los 200 J del trabajo, dando [[Q_H]] de 700 J. No se destruyo energia.

### Error 2: pensar que se puede transferir calor del frio al caliente sin trabajo

**Por que parece correcto:** El alumno puede pensar que con un buen diseño se podria eliminar la necesidad de compresor, ya que solo se mueve calor.

**Por que es incorrecto:** La segunda ley (formulacion de Clausius) prohibe la transferencia espontanea de calor del frio al caliente. [[W]] debe ser estrictamente positivo.

**Senal de deteccion:** El alumno escribe [[W]] igual a cero en el balance energetico o afirma que el ciclo funciona sin compresor.

**Correccion conceptual:** La segunda ley exige [[W]] mayor que cero para invertir el flujo natural de calor. Sin trabajo, solo es posible el flujo espontaneo del caliente al frio.

**Mini-ejemplo:** Si [[T_C]] es 268 K y [[T_H]] es 308 K, el trabajo minimo para extraer 1000 J es 149 J. Reducirlo a cero violaria la segunda ley.

## Errores de modelo

### Error 3: confundir el signo de [[Q_H]] en el balance

**Por que parece correcto:** En motores termicos, [[Q_H]] entra al sistema con signo positivo. El alumno aplica el mismo convenio al ciclo invertido.

**Por que es incorrecto:** En el ciclo invertido, [[Q_H]] es la energia que sale del sistema hacia el foco caliente. Adoptar el convenio de motor invierte los signos y genera resultados absurdos.

**Senal de deteccion:** El balance energetico da resultados negativos; [[Q_H]] aparece como negativo.

**Correccion conceptual:** En el ciclo invertido, usar el convenio de magnitudes positivas: [[Q_C]] extraido del frio, [[Q_H]] entregado al caliente, [[W]] aportado. Todos positivos en el balance.

**Mini-ejemplo:** Con [[Q_C]] de 600 J y [[W]] de 250 J: [[Q_H]] = 600 + 250 = 850 J (positivo). Si diera negativo, el convenio esta invertido.

## Errores matematicos

### Error 4: usar temperaturas en Celsius en la formula de Carnot

**Por que parece correcto:** Las temperaturas del enunciado suelen darse en Celsius, y el alumno sustituye directamente sin convertir.

**Por que es incorrecto:** Las formulas termodinamicas del ciclo invertido requieren temperaturas absolutas en kelvin. Usar Celsius produce trabajo negativo o [[Delta_S_total]] negativa.

**Senal de deteccion:** El trabajo minimo da valores negativos o sin sentido fisico.

**Correccion conceptual:** Convertir siempre a kelvin antes de sustituir: T(K) = T(C) + 273.15. Verificar que ambas temperaturas sean positivas.

**Mini-ejemplo:** Con [[T_C]] de menos 10 C: correcto es 263 K. Usar 263 K en la formula, no menos 10. El resultado con kelvin es siempre positivo.

## Errores de interpretacion

### Error 5: confundir [[Q_C]] con [[Q_H]] en el efecto util

**Por que parece correcto:** Ambos son calores intercambiados en el ciclo, y sin claridad sobre el objetivo del sistema, es facil elegir el incorrecto.

**Por que es incorrecto:** El efecto util depende del modo: en refrigeracion es [[Q_C]] (calor extraido), en bomba de calor es [[Q_H]] (calor entregado). Confundirlos invierte el COP.

**Senal de deteccion:** El alumno calcula el COP de bomba de calor usando [[Q_C]] en el numerador, o el COP de refrigeracion usando [[Q_H]].

**Correccion conceptual:** Identificar primero el objetivo: si el sistema enfria, el efecto util es [[Q_C]]. Si calienta, es [[Q_H]]. El denominador siempre es [[W]].

**Mini-ejemplo:** Con [[Q_C]] de 800 J, [[Q_H]] de 1100 J y [[W]] de 300 J: COP refrigeracion es 800 dividido entre 300 dando 2.67; COP bomba de calor es 1100 dividido entre 300 dando 3.67.

## Regla de autocontrol rapido

Verificar siempre: (1) [[Q_H]] mayor que [[Q_C]], (2) [[W]] mayor que cero, y (3) [[Delta_S_total]] mayor o igual a cero. Si alguna falla, hay error en datos o calculos.
