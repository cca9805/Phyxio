const e=`# Coste de la electricidad

La factura eléctrica doméstica no es simplemente el producto de kilovatios-hora por un precio: es la suma de al menos tres componentes físico-económicos que responden a causas distintas y que solo pueden reducirse con estrategias distintas. El [[C_total]] que aparece en el recibo refleja cuánta energía se ha consumido, qué capacidad de suministro se ha reservado y qué peajes regulatorios se aplican independientemente del uso. Entender esta estructura es el primer paso para tomar decisiones de ahorro que sean físicamente coherentes y económicamente verificables.

## Contexto conceptual

El consumo eléctrico de una vivienda es una magnitud física medida en kilovatios-hora. Sin embargo, el coste que aparece en la factura no depende solo de esa magnitud: depende también de en qué franja horaria se consumió, de cuántos días tiene el periodo de facturación, de la [[P_contratada]] que el usuario ha reservado con su distribuidora y de una serie de peajes e impuestos regulatorios. La confusión entre consumo y coste es el error conceptual más frecuente en el análisis doméstico de la factura.

Dos viviendas con idéntico consumo total en kWh pueden tener facturas muy diferentes si una tiene contratada más potencia, si una ha consumido más en hora punta o si los periodos facturados tienen distinta duración. El análisis correcto exige descomponer la factura en sus tres componentes y tratarlos por separado.

## 🟢 Nivel esencial

El primer concepto esencial es que el kilovatio-hora mide energía, no dinero. El término variable de la factura resulta de multiplicar cada bloque de energía consumida por el precio de esa franja horaria. Si el contrato tiene discriminación horaria, el mismo kWh tiene un precio diferente según si se consume en hora punta o en valle.

El segundo concepto es que la factura tiene un componente fijo que no depende del consumo. Este término se paga por el simple hecho de tener electricidad disponible a la [[P_contratada]], aunque no se consuma ni un solo vatio. Si una vivienda tiene 4,6 kW contratados y paga 0,11 EUR por kW y [[dias]], el término fijo es de unos 15 EUR mensuales que aparecerán incluso en agosto con la casa vacía.

El tercer concepto es que reducir el [[C_total]] requiere actuar sobre la parte correcta: el consumo para reducir el término variable, o la [[P_contratada]] para reducir el término fijo. Sin conocer la estructura de la factura no es posible saber qué medida tiene mayor impacto.

La implicación más importante es que **dos meses con el mismo consumo total pueden tener facturas distintas** si difieren en el número de [[dias]] facturados, en la distribución horaria del consumo o en el precio aplicado en cada franja. Concluir que "subió el recibo sin consumir más" sin controlar estas variables es un error de análisis, no una evidencia de fraude.

## 🔵 Nivel formal

El [[C_energia]] es la suma sobre todas las franjas tarifarias del consumo de cada franja por su precio:

{{f:coste_energia}}

El [[C_potencia]] es el término fijo proporcional a la [[P_contratada]], la [[tarifa_potencia]] y los [[dias]]:

{{f:coste_potencia}}

El [[C_total]] es la suma de los tres componentes: término de energía, término de potencia y [[C_extra]]:

{{f:coste_total}}

Para comparar dos escenarios cuantitativamente, el [[Ahorro_pct]] respecto al escenario de referencia se calcula como:

{{f:ahorro_pct}}

donde [[C_base]] es el coste del periodo de referencia y [[C_nuevo]] es el coste tras la medida evaluada.

El análisis formal del sistema permite separar qué parte del [[C_total]] responde a hábitos controlables por el usuario (la parte de [[C_energia]]) y qué parte corresponde a decisiones contractuales menos flexibles (el [[C_potencia]]). En una factura doméstica típica en España, el término fijo puede representar entre el 15 % y el 35 % del total; ignorarlo lleva a sobreestimar sistemáticamente el ahorro potencial de las medidas de eficiencia energética. El parámetro [[Ahorro_pct]] cuantifica la mejora relativa entre escenarios: siendo [[C_base]] el coste de referencia antes de la intervención y [[C_nuevo]] el coste resultante tras aplicar la medida, el ahorro se expresa como fracción del estado inicial de referencia.

## 🔴 Nivel estructural

El modelo simplificado tiene tres límites estructurales:

**Sesgo temporal:** El [[C_base]] y el [[C_nuevo]] deben ser comparables en periodo, servicio y condiciones. Si difieren en estación o número de [[dias]], el [[Ahorro_pct]] calculado no es atribuible a la medida evaluada.

**Peso del término fijo:** Si [[C_potencia]] más [[C_extra]] representan el 37 % de la factura, una reducción del 20 % del consumo solo ahorra el 20 % del 63 % restante: el 12,6 % del total. El impacto real de las medidas de eficiencia es sistemáticamente menor que el impacto sobre el consumo en kWh.

**Dominio de validez:** El modelo es válido para análisis residencial con precios de franja conocidos, periodo fijo y estructura de tres componentes estable. No aplica directamente a contratos con precios dinámicos horarios, a contratos industriales con penalización por reactiva, ni a periodos en los que cambia la estructura tarifaria entre el inicio y el fin del ciclo.

## Interpretación física profunda

La cadena causal del coste eléctrico tiene dos ramas paralelas que convergen en la factura. La primera rama es la del uso: los equipos del hogar consumen [[E_i]] en función de sus potencias y tiempos de uso, y ese consumo se pondera por el [[precio_i]] para dar el [[C_energia]]. La segunda rama es la de la capacidad: el usuario ha reservado una [[P_contratada]] que determina el [[C_potencia]] independientemente del uso real.

La clave de un análisis riguroso es entender que estas dos ramas solo pueden reducirse con instrumentos distintos. Reducir el [[C_energia]] requiere reducir el consumo en kWh o desplazarlo a franjas más baratas. Reducir el [[C_potencia]] requiere bajar la [[P_contratada]], lo que solo es seguro si la demanda pico real del hogar está por debajo de ese nuevo límite. Intentar reducir el término fijo sin verificar los picos de demanda puede producir cortes de suministro en los momentos de mayor uso.

El [[Ahorro_pct]] solo tiene significado físico cuando el [[C_base]] y el [[C_nuevo]] son comparables en servicio, periodo y condiciones climáticas. Esta exigencia de comparabilidad es la más frecuentemente incumplida en los análisis domésticos y explica la mayoría de las conclusiones erróneas sobre el impacto de las medidas de ahorro.

## Orden de magnitud

En una vivienda española tipo (80 m², 3 ocupantes), la factura eléctrica mensual en invierno oscila entre 60 y 150 EUR. El [[C_energia]] representa entre el 55 y el 75 % del total dependiendo de la tarifa y los hábitos. El [[C_potencia]] con 4,6 kW contratados y tarifa regulada asciende a unos 14–18 EUR/mes. Los [[C_extra]] (impuesto eléctrico, IVA, alquiler de contador) suman entre 8 y 20 EUR adicionales.

Con estos órdenes de magnitud, una medida que reduzca el consumo un 10 % produce un ahorro mensual del orden de 5–8 EUR en invierno, no de 15 EUR como podría sugerirse si se ignoraran los términos fijos. Esta estimación es la que permite evaluar si una inversión técnica tiene un período de retorno razonable.

## Método de resolución personalizado

Cuando se recibe una factura eléctrica y se quiere analizar o proyectar ahorros, el procedimiento sistemático es:

1. **Identificar los componentes:** separar el [[C_energia]], el [[C_potencia]] y los [[C_extra]] tal como aparecen en la factura.
2. **Calcular los porcentajes de cada componente** sobre el [[C_total]] para saber sobre qué parte puede actuar cada medida.
3. **Aplicar la medida solo sobre el componente afectado:** una medida de eficiencia reduce la [[E_i]]; un ajuste de contrato reduce el [[C_potencia]].
4. **Calcular el [[C_nuevo]]** con los valores modificados y el resto sin cambios.
5. **Verificar comparabilidad del [[C_base]]:** mismos días, misma estación, mismo nivel de servicio.
6. **Calcular el [[Ahorro_pct]]** y expresarlo sobre el [[C_total]] completo.

## Casos especiales y ejemplo extendido

**Tarifa plana vs. discriminación horaria:** Con tarifa plana el [[precio_i]] es único y el [[C_energia]] es consumo total por ese precio. Con discriminación horaria, desplazar 50 kWh de punta (0,25 EUR/kWh) a valle (0,10 EUR/kWh) ahorra 7,5 EUR ese mes sin reducir el consumo total.

**Variación de días facturados:** Un mes de 31 días tiene el [[C_potencia]] un 3,3 % más alto que uno de 30 días aunque el consumo diario sea idéntico.

## Preguntas reales del alumno

**¿Por qué si consumi igual que el mes pasado me ha subido la factura?** La respuesta más frecuente no es el consumo: los [[dias]] pueden ser distintos (más días implica más [[C_potencia]]), los [[C_extra]] pueden haber subido con la regulación, o el [[precio_i]] puede haber variado. Antes de concluir que el consumo subió, hay que verificar estos tres factores.

**¿Vale la pena bajar la potencia contratada?** Depende exclusivamente de los picos de demanda simultánea del hogar. Si se registran los picos durante un mes completo y el máximo es, por ejemplo, 3,8 kW, entonces bajar de 4,6 kW a 3,45 kW es seguro y reduce el [[C_potencia]] en aproximadamente 3,3 EUR/mes con tarifas típicas. Si el máximo es 5,2 kW, no es seguro.

**¿Cuánto ahorro real espero si cambio a tarifa con discriminación horaria?** Depende de qué porcentaje de tu [[E_i]] cae en horas valle. Si ya consumes el 70 % en horas nocturnas de forma natural, el ahorro puede ser del 10–15 % sobre el [[C_energia]]. Si consumes mayoritariamente en horas punta, la tarifa plana puede ser más económica.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con la **potencia eléctrica** (el consumo instantáneo que determina la [[P_contratada]] necesaria), con la **energía eléctrica** (la integral de potencia que produce la [[E_i]]), y con los conceptos de **eficiencia energética** de los equipos (que determinan cuánta [[E_i]] consume cada aparato para un servicio dado). También conecta con el análisis estadístico de series temporales en el contexto de normalización de datos comparativos.

Ruta de estudio recomendada: **potencia eléctrica → energía eléctrica → coste de la electricidad (este leaf) → eficiencia de equipos → climatización y certificación energética.**

## Síntesis final

El coste eléctrico es el resultado de un modelo mixto físico-económico. Cuando se descompone la factura en [[C_energia]], [[C_potencia]] y [[C_extra]], cada componente señala un instrumento de actuación distinto. Las decisiones de ahorro dejan de ser intuición y se convierten en estrategia verificable. Un [[Ahorro_pct]] real y estable solo puede demostrarse con periodos de referencia equivalentes, desglose por componentes y verificación de que el servicio (confort, disponibilidad) no se ha degradado.
`;export{e as default};
