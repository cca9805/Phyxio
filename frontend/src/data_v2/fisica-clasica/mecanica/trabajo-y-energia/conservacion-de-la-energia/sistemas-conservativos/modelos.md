# Modelos y validez

## Modelo base del subtema
Este subtema considera **sistemas conservativos** donde las fuerzas que realizan trabajo poseen potencial escalar y el trabajo neto depende únicamente de los estados inicial y final. La energía mecánica total (cinética más potencial) permanece constante en ausencia de disipación. Se modela con fuerzas como la gravedad uniforme, resortes ideales, u otras con potencial definido.

## Hipótesis operativas
- Toda fuerza actuante es conservativa: $\vec F = -\nabla U(\vec r)$.
- No hay fricción, rozamiento ni fuerzas viscosas; disipaciones son cero o cuantificadas separadamente como $W_{nc}$.
- Sistema aislado o externas no conservativas se conocen y se incluyen mediante término explícito $W_{ext}$.
- El sistema transita entre dos estados bien definidos (posición, velocidad); la trayectoria es irrelevante.
- Las masas permanecen constantes; no hay intercambio de masa ni efectos relativistas.
- Unidades SI constantes y cálculos en marcos inerciales.

## Qué explica bien este modelo
- Predicción de velocidad máxima en caída libre o giro sin pérdidas.
- Cálculo de altura de subida en lanzamiento vertical.
- Análisis de osciladores ideales (masa-resorte, péndulo simple) sin amortiguación: movimientos periódicos con energía constante.
- Determinación de condiciones de escape en potenciales gravitatorios o electrostáticos (velocidad de escape, energía de enlace).
- Colisiones elásticas donde la energía cinética total se conserva junto con la cantidad de movimiento.
- Evaluación de rangos y alturas en montañas rusas sin fricción para estimar velocidades pico.

## Límites del modelo
- Si aparecen fuerzas dependientes de la velocidad ($F\propto v$ o $v^2$), o fricción seca, el modelo conserva energía solo si se suman términos de trabajo no conservativo; de lo contrario falla.
- Campos no conservativos (por ejemplo, campos magnéticos variables, fuerzas de arrastre turbulento) rompen la independencia de trayectoria del trabajo.
- En sistemas con radiación de energía (cargas aceleradas, objetos vibrantes que emiten ondas), la energía mecánica del sistema disminuye continuamente.
- Cambios de fase, variaciones de masa (cohetes), o fenómenos cuánticos requieren modelos distintos.
- En campos gravitatorios extremadamente fuertes o relativistas, la energía mecánica clásica no se conserva y se necesita relatividad general.

## Señales de que debes cambiar de modelo
- Observas una pérdida sistemática de energía mecánica en experimentos o simulaciones aun cuando solo consideras fuerzas conservativas.
- El sistema requiere fricción o disipación para reproducir la evolución temporal observada (oscilación amortiguada, caída con velocidad terminal).
- La historia de la trayectoria afecta el trabajo calculado (indica campo no conservativo).
- Se trata de un problema con radiación electromagnética, transiciones de fase, o variación de masa significativa.
- Los resultados dependen de la parametrización temporal (violación de independencia de trayectoria), sugiriendo fuerzas dependientes de velocidad o tiempo.
