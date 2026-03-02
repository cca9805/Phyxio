# Modelos y estrategia para fuerzas no conservativas

## Definición y formulación

Las **fuerzas no conservativas** son aquellas cuyo trabajo realizado depende de la trayectoria y no puede expresarse únicamente como diferencia de una función potencial. El trabajo neto de fuerzas no conservativas entre dos estados se define como:

$$W_{nc}=\\int_{\\mathcal{C}} \\vec{F}_{nc}\\cdot d\\vec{s}$$

En el balance mecánico global:

$$E_{m,f}-E_{m,i}=W_{nc}$$

donde $E_m=K+U$ es la energía mecánica total (cinética + potencial). Las fuerzas no conservativas incluyen rozamiento cinético, resistencia viscosa del fluido, fuerzas de arrastre aéreo, y fuerzas disipativas internas (inelasticidad en colisiones, histeresis).\\n
## Modelos habituales

- **Rozamiento seco (Coulomb)**: $F_f=\\mu_k N$ (constante independiente de velocidad en primer orden).\\n
- **Rozamiento viscous / amortiguamiento**: $F_d = c v$ o $\\tau_d = c_\\theta \\omega$ (proporcional a la velocidad o a la velocidad angular).\\n
- **Arrastre en fluidos (drag)**: $F_D = \\tfrac{1}{2} C_D \\rho A v^2$ (regímenes de Reynolds determinan la dependencia).\\n
- **Fuerzas histeréticas y perdida interna**: Modelos constitutivos (p.ej., histeresis en materiales elásticos) que transforman energía mecánica en calor.\\n
- **Colisiones inelásticas**: Parte de la energía cinética se transforma en calor/sonido/reordenamiento plástico.

## Hipótesis operacionales

1. **Separar trabajo útil y disipado**: Identificar claramente qué fracciones del trabajo se almacenan (energía potencial/cinética) y cuáles se disipan.\\n
2. **Escala y régimen**: Elegir modelo de arrastre acorde al número de Reynolds y al régimen (laminar: lineal, turbulento: cuadrático).\\n
3. **Tiempo y dependencia**: Para fuerzas dependientes del tiempo o de la historia (histeresis), usar modelos integrales o numéricos.\\n
4. **Superposición limitada**: En presencia de múltiples fuentes disipativas, sumar trabajos disipativos si son independientes; si no, usar modelos acoplados.

## Límites y señales de fallo del modelo

- Si la geometría cambia durante el movimiento (ej. desgaste), parámetros como $\\mu$ o $C_D$ varían en tiempo.\\n
- A altas velocidades, efectos no lineales y térmicos dominan; el modelo lineal $F\\propto v$ falla.\\n
- En presencia de lubricación mixta o transición a contacto asperidad, el modelo Coulomb pierde validez; es necesario modelo de contacto (Hertz + lubricación).\\n
## Criterios prácticos de uso

| **Situación** | **Modelo recomendado** | **Comentarios** |
|---|---|---|
| Superficies secas, lento | Coulomb ($F=\\mu_k N$) | Simple, mediciones experimentales de $\\mu_k$ necesarias |
| Fluido laminar | Viscoso ($F=cv$) | Bajo Re, proporcionalidad válida |
| Fluidos / alta velocidad | Drag cuadrático ($F\\propto v^2$) | Estimar $C_D$ y $A$ experimentalmente |
| Colisiones | Coeficiente restitución $e$ | Energía perdida = $\\Delta K$ calculada desde momentum y $e$ |
| Sistemas acoplados | Modelos numéricos acoplados (FEA, CFD) | Cuando interacción estructura-fluido es fuerte |

## Estrategia de resolución en problemas aplicados

1. Identificar fuerzas conservativas y no conservativas presentes.\\n
2. Seleccionar modelo de fuerza no conservativa adecuado al régimen (Coulomb, viscous, quadratic drag).\\n
3. Integrar trabajo disipativo: $W_{nc}=\\int \\vec{F}_{nc}\\cdot d\\vec{s}$ (analítico o numérico).\\n
4. Verificar consistencia con cambios de energía mecánica y, si procede, estimar conversión a calor.
