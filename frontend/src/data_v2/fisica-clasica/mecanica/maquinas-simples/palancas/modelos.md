

# Modelos y validez

## Modelo base del subtema
La palanca se modela como una barra rígida que rota alrededor de un fulcro bajo la acción de fuerzas aplicadas en sus extremos o a lo largo de la barra. El análisis clásico supone equilibrio estático, fuerzas perpendiculares y parámetros constantes. El modelo ideal se basa en el equilibrio de momentos:
$$
\sum \tau = 0 \implies P\,b_P = R\,b_R
$$
donde $P$ es la fuerza aplicada, $b_P$ el brazo de potencia, $R$ la resistencia y $b_R$ el brazo de resistencia.

## Hipótesis operativas
- Barra perfectamente rígida (sin flexión ni deformación)
- Fulcro sin fricción ni holguras
- Fuerzas aplicadas en dirección perpendicular a la barra
- Sistema en equilibrio estático o cuasiestático

## Qué explica bien este modelo
- Relación entre fuerza aplicada y carga levantada
- Cálculo de ventaja mecánica ideal: $VM_{ideal} = \frac{R}{P} = \frac{b_P}{b_R}$
- Optimización de esfuerzo y diseño de herramientas

## Límites del modelo
- Flexión de la barra
- Fricción en el fulcro
- Cargas dinámicas o impactos
- Holguras o desplazamiento del fulcro
- Aplicación fuera de la perpendicular (requiere descomposición: $\tau = F\,b\,\sin\theta$)

## Señales de que debes cambiar de modelo
- Desviaciones sistemáticas entre cálculo y resultado experimental
- Deformaciones apreciables en la barra o el fulcro
- Cambios en la ventaja mecánica por desgaste, fricción o geometría variable

## Contexto físico y aplicaciones
El modelo de palanca es fundamental en biomecánica, ingeniería, herramientas manuales y sistemas de control de movimiento. Su simplicidad permite estimar esfuerzos y diseñar mecanismos eficientes.

## Conexión con otros temas
- Equilibrio rotacional y momento de fuerza
- Trabajo y energía (transferencia de energía mediante rotación)
- Rendimiento y ventaja mecánica real (ver sección de aplicaciones y errores)

## Ajuste de modelo real
En diseno real se incorpora rendimiento:

$$
VM_{real}=\eta\,VM_{ideal}
$$

y se valida con ensayo de carga para calibrar \(\eta\).


