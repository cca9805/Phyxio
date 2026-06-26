# Ejemplo tipo examen


## Enunciado

Un sólido cristalino monoatómico tiene una [[temperatura_debye]] de 300 K. Se quiere estimar su [[calor_especifico_molar]] a [[temperatura]] de 30 K usando la ley de baja [[temperatura]] de Debye y compararlo con el límite clásico de Dulong-Petit. Interpreta qué indica el resultado sobre los modos fonónicos activos y explica por qué el sólido no alcanza aún el valor clásico.

## Datos

- [[temperatura]]: 30 K
- [[temperatura_debye]]: 300 K
- [[constante_gases]]: 8,314 J mol⁻¹ K⁻¹
- [[constante_boltzmann]]: 1,38·10⁻²³ J/K (escala microscópica, base de [[temperatura_debye]])
- [[hbar]]: 1,05·10⁻³⁴ J·s (interviene en la definición de [[temperatura_debye]] vía [[frecuencia_debye]])
- Régimen esperado: baja [[temperatura]], porque el cociente T/ΘD es pequeño
- Magnitud buscada: [[calor_especifico_molar]]

## Definición del sistema

El sistema es un mol de átomos de un sólido cristalino simple. Se consideran vibraciones colectivas de la red, no rotaciones moleculares ni excitaciones electrónicas. El dato de [[temperatura_debye]] resume la escala vibracional máxima asociada a la [[frecuencia_debye]]. La [[temperatura]] representa equilibrio térmico uniforme, de modo que los fonones pueden poblarse con una distribución térmica única. La magnitud calculada es molar, por eso aparece [[constante_gases]] y no directamente [[numero_atomos]].

## Modelo físico

Usamos el modelo de Debye a baja [[temperatura]], régimen definido por una [[temperatura_reducida]] pequeña frente a la [[temperatura_debye]] del material. En este régimen no todos los modos vibracionales están excitados. Solo los fonones acústicos de baja frecuencia, con longitudes de onda largas, contribuyen de forma apreciable al [[calor_especifico_molar]]. La dependencia cúbica surge del conteo de modos accesibles en el espacio de frecuencias. Para comparar con el caso clásico se usa también el límite de Dulong-Petit, que corresponde a la saturación de los tres modos vibracionales por átomo.

## Justificación del modelo

El cociente entre [[temperatura]] y [[temperatura_debye]] es 0,1. Esto coloca al sólido justo en el borde superior del régimen de baja [[temperatura]], por lo que la ley cúbica ofrece una estimación razonable, aunque no perfecta si se exigiera alta precisión experimental. El sólido se supone cristalino, monoatómico y armónico. Si fuese metálico con contribución electrónica notable, o si existieran modos ópticos intensos, el modelo debería ampliarse. Aquí la pregunta busca la tendencia física principal: cómo el [[calor_especifico_molar]] crece con la [[temperatura]] antes de alcanzar la meseta clásica.

## Resolución simbólica

Primero se identifica la escala de Debye y el régimen térmico.

{{f:variable_reducida_debye}}

Después se aplica la ley de baja [[temperatura]], válida cuando la [[temperatura]] es pequeña frente a [[temperatura_debye]].

{{f:calor_especifico_debye_baja_temperatura}}

Para comparar, calculamos el valor clásico de alta [[temperatura]].

{{f:limite_dulong_petit}}

Para el régimen intermedio, la descripción completa utiliza la expresión integral que conecta suavemente la ley cúbica con el límite clásico:

{{f:calor_especifico_debye_integral}}

Simbólicamente, el valor bajo depende de la tercera potencia del cociente T/ΘD, mientras el valor alto depende solo de [[constante_gases]]. Esto muestra que [[temperatura_debye]] no cambia el techo clásico, sino la rapidez con la que el sólido se acerca a él.

## Sustitución numérica

El cociente reducido es 30/300 = 0,1. La ley cúbica da un factor de orden 0,001 multiplicado por el coeficiente de Debye correspondiente, por lo que el [[calor_especifico_molar]] estimado queda alrededor de 1,94 J mol⁻¹ K⁻¹. El límite clásico de Dulong-Petit es 3R, aproximadamente 24,94 J mol⁻¹ K⁻¹. Por tanto, a 30 K el sólido tiene una capacidad térmica molar cercana al 8 % del valor clásico. La diferencia no es un detalle matemático: indica que la mayoría de los modos vibracionales todavía no está térmicamente disponible.

## Validación dimensional

La [[temperatura_reducida]] es adimensional porque compara dos temperaturas en kelvin. La ley cúbica contiene ese cociente elevado al cubo, que también es adimensional. La escala dimensional la proporciona [[constante_gases]], cuya unidad es J mol⁻¹ K⁻¹. Por tanto, el resultado de [[calor_especifico_molar]] queda en J mol⁻¹ K⁻¹. En el límite de Dulong-Petit, 3R conserva las mismas unidades. Esta coincidencia confirma que se ha calculado una capacidad calorífica molar y no una energía, una [[temperatura]] ni el calor total de una muestra arbitraria.

## Interpretación física

El resultado significa que el sólido está todavía en un régimen cuántico de activación parcial. La [[temperatura]] no es cero, pero su energía térmica característica es pequeña comparada con la escala marcada por [[temperatura_debye]]. Por eso el [[calor_especifico_molar]] no alcanza el valor clásico: no todos los modos fonónicos pueden absorber energía con la misma facilidad. Físicamente, aumentar un poco la [[temperatura]] abre nuevos modos acústicos disponibles, y esa apertura crece muy rápido con T en esta zona. Si el material tuviera una [[temperatura_debye]] menor, el mismo valor de 30 K representaría un régimen más caliente y el [[calor_especifico_molar]] sería mayor.

# Ejemplo de aplicación real


## Contexto

En criogenia de sensores, se busca elegir materiales cuya respuesta térmica sea baja para que pequeños depósitos de energía produzcan cambios medibles de [[temperatura]]. El modelo de Debye permite estimar si un cristal aislante tendrá [[calor_especifico]] suficientemente pequeño a unos pocos kelvin. Materiales con [[temperatura_debye]] alta mantienen pocos modos fonónicos activos y son útiles cuando se desea una señal térmica sensible.

## Estimación física

Supongamos un cristal con [[temperatura_debye]] de 600 K trabajando a [[temperatura]] de 6 K. El cociente T/ΘD es 0,01, muy inferior a 0,1, así que la ley cúbica es adecuada. El factor cúbico es del orden de una millonésima antes del coeficiente numérico de Debye. Esto sugiere un [[calor_especifico_molar]] muchísimo menor que 3R. La escala física es razonable: a 6 K solo una fracción diminuta del espectro acústico puede excitarse, y los modos de alta frecuencia quedan prácticamente congelados.

## Interpretación

La aplicación muestra por qué [[temperatura_debye]] es una propiedad de diseño. A igual [[temperatura]], un material con mayor [[temperatura_debye]] tiene menos modos activos y, por tanto, menor [[calor_especifico]]. Eso favorece detectores térmicos sensibles, pero también exige controlar impurezas, defectos y contribuciones electrónicas. Si una medición real se aparta mucho de la ley cúbica, el fallo puede revelar física adicional del material, no necesariamente un error experimental.