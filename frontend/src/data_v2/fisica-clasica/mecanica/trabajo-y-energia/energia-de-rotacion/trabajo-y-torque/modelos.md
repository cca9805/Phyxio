# Modelos y alcances

## Formulación Base

El **trabajo realizado por torque** (momento) en un cuerpo que rota es:

$$W = \int \tau \, d\theta$$

Para torque constante:
$$W = \tau \Delta\theta$$

La **potencia** (energía por unidad de tiempo) es:
$$P = \frac{dW}{dt} = \tau \frac{d\theta}{dt} = \tau \omega$$

donde $\omega$ es velocidad angular (rad/s). Esta es la expresión rotacional análoga a $P = F \cdot v$ en traslación lineal.

## Hipótesis Operacionales

1. **Torque bien definido en el eje**: Se asume que el torque actúa sobre eje fijo, sin deformación apreciable del mismo.

2. **Rotación rígida pura**: El cuerpo se considera rígido (no deformable); momento de inercia $I$ es constante.

3. **Cambio angular medible**: El desplazamiento angular $\Delta\theta$ puede ser integrado, bien de forma directa (torque constante) o numéricamente (torque variable).

4. **Referencia inercial**: La rotación se mide en marco inercial sin aceleraciones ficticio.

## Alcances: Dónde el Modelo es Válido

- **Motores eléctricos y térmicos**: Torque se conoce como función de velocidad angular o tiempo.
- **Sistemas de transmisión**: Engranajes, correas, cadenas transfieren torque entre ejes.
- **Herramientas rotativas**: Taladros, sierras, rectificadoras.
- **Turbinas**: Aéreas (turbohélice), hidráulicas, de gas; trabajo de torque se convierte en energía eléctrica.
- **Robots industriales**: Juntas articuladas con servomotores; cálculo de trabajo y potencia requerida para movimiento.

## Límites: Señales de Ruptura del Modelo

1. **Deformación del eje**: A torques muy altos, el eje se tuerce (torsion no-lineal), cambiando $I$ efectivo y la relación $W = \tau \Delta\theta$ se desvía.

2. **Momento de inercia variable**: Si rotor cambia geometría durante rotación (p.ej., patinador flexionando brazos), $I(t)$ no es constante; trabajo requiere cálculo de momento angular en lugar de energía.

3. **Fricción y amortiguamiento**: En cojinetes reales, torque disipativo por fricción $\propto \omega$ se opone a rotación; el trabajo útil es reducido por estas pérdidas.

4. **Velocidades relativistas**: En giroscopios especiales (pulsars, objetos astronómicos rotantes a velocidades cercanas a $c$), relatividad general entra en juego.

5. **Efectos dinámicos transitorios**: Durante aceleración o desaceleración rápida, oscilaciones mecánicas (vibración torsional) pueden causar que el trabajo real diverga del modelo simple $W = \tau \Delta\theta$.

## Criterios Prácticos de Selección

| **Régimen** | **Descripción** | **Fórmula** | **Ejemplo** |
|---|---|---|---|
| **Torque constante** | Motor de torque plano en rango nominal | $W = \tau \Delta\theta$ (exacta) | Taladro a velocidad constante |
| **Torque variable (conocido)** | Motor con curva $\tau(\omega)$ medida | $W = \int \tau(\theta) d\theta$ (numérica o analítica) | Motor eléctrico AC inducción |
| **Potencia constante** | Rango de velocidad variable con torque inverso $\tau \propto 1/\omega$ | $P = \tau \omega = $ const; $W = P \cdot t$ | Vehículo a velocidad variable |
| **Rotación con fricción** | Torque motriz menos torque fricción | $\tau_{neto} = \tau_{motor} - f \omega - \tau_{rozamiento}$ | Bomba centrífuga con cojinete |
| **Sistema acoplado** | Mecánica ligado a carga elástica (resorte torsional) | Incluir energía potencial elástica en trabajo total | Eje cardan con amortiguador |

## Relación con Energía Rotacional

El trabajo de torque se convierte en energía rotacional del cuerpo:
$$W = \Delta K_{rot} = \frac{1}{2}I(\omega_f^2 - \omega_i^2)$$

Esta es expresión del teorema trabajo-energía rotacional, análoga a $W = \Delta K = \frac{1}{2}m(v_f^2 - v_i^2)$ en traslación lineal.