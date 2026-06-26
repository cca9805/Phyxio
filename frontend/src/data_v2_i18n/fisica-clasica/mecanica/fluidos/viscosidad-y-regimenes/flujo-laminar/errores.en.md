# Common Errors in Laminar Flow

## Conceptual errors

### Error
**Confusing flow rate with layer velocity**
*   **Why it seems correct:** It is intuitive to think that the fluid moves like a solid piston and that the entire volume advances at the same speed.
*   **Why it is incorrect:** Due to viscosity, the fluid "sticks" to the walls and slides layer over layer, creating a profile where each point has a different velocity.
*   **Detection signal:** Calculated flow rates that are double what's expected or transit times inconsistent with the maximum velocity.
*   **Conceptual correction:** The flow rate [[Q]] is the integral of the velocity profile; the average velocity is exactly half of the maximum [[v_max]] at the center.
*   **Mini-example:** If [[v_max]] is 2 m/s, using 2 m/s to calculate the flow rate will give a 100 % erroneous value; 1 m/s should be used.

### Error
**Thinking that roughness always affects friction**
*   **Why it seems correct:** In daily life, rough surfaces always generate more friction than smooth ones.
*   **Why it is incorrect:** In the laminar regime, a viscous boundary layer forms that covers the wall's irregularities, making the fluid "slide" over static fluid.
*   **Detection signal:** Trying to find the roughness coefficient on the Moody chart for a Reynolds number less than 2000.
*   **Conceptual correction:** The friction factor in laminar flow depends solely on [[Re]] (factor de fricci?n igual a 64 dividido por [[Re]]) and is independent of the pipe material.
*   **Mini-example:** A rusty steel pipe and a smooth glass pipe will have the same head loss if the flow is strictly laminar.

## Model errors

### Error
**Applying Poiseuille in the pipe entrance zone**
*   **Why it seems correct:** It is assumed that the laws of the leaf apply from the first millimeter of the pipe.
*   **Why it is incorrect:** The fluid needs a physical distance (entrance length) to organize its layers and reach the stable parabolic profile.
*   **Detection signal:** Measured pressure drops [[deltaP]] that are greater than those calculated theoretically near the inlet.
*   **Conceptual correction:** Poiseuille's law is only valid for "fully developed" flow.
*   **Mini-example:** In a 1 m long pipe with a sharp entrance, the first 10 cm will not follow Poiseuille's law accurately.

### Error
**Ignoring Reynolds Number limits**
*   **Why it seems correct:** The formulas are simple to apply and it is tempting to use them for any speed.
*   **Why it is incorrect:** Above [[Re]] ? 2300, inertial forces break the layers and the flow becomes turbulent, totally changing the system's physics.
*   **Detection signal:** Flow rate results that do not match reality when the velocity is high or the viscosity [[eta]] is low.
*   **Conceptual correction:** Always verify the Reynolds Number before applying laminar models.
*   **Mini-example:** Attempting to calculate water flow in a fire pipe using Poiseuille will give massive errors since that flow is turbulent.

## Mathematical errors

### Error
**Confusion between radius and diameter in the fourth power**
*   **Why it seems correct:** Both measure the pipe's dimension and are sometimes used interchangeably in quick formulas.
*   **Why it is incorrect:** The law uses the radius [[R]] raised to the fourth power. Using the diameter di?metro multiplies the error by 16.
*   **Detection signal:** Absurdly large or small flow rate [[Q]] results (outside logical orders of magnitude).
*   **Conceptual correction:** Always convert diameter to radius and ensure you raise it to the power of 4.
*   **Mini-example:** If the radius is 1 cm (el radio a la cuarta potencia vale 1 en esas unidades), using the diameter of 2 cm would give dos elevado a cuatro da 16, a 1500 % error.

### Error
**Unit inconsistency in viscosity**
*   **Why it seems correct:** Viscosity is often given in centiPoise (cP) because they are more manageable numbers.
*   **Why it is incorrect:** Pressure and flow rate formulas require consistent SI units (Pa*s).
*   **Detection signal:** Results that fail by factors of 10, 100, or 1000.
*   **Conceptual correction:** One centipoise corresponds to one thousandth of a pascal-second. Perform the conversion before any calculation.
*   **Mini-example:** Using 1 in the formula for water instead of 0.001 will give a pressure drop a thousand times smaller than the real one.

## Interpretation errors

### Error
**Believing that pressure is constant along the pipe**
*   **Why it seems correct:** In electrical circuits or ideal flows, lossless segments are sometimes assumed.
*   **Why it is incorrect:** Viscosity is a dissipative force that consumes mechanical energy for every millimeter of advance.
*   **Detection signal:** Energy diagrams showing a horizontal pressure line in a pipe with viscous fluid.
*   **Conceptual correction:** A negative pressure gradient (drop) must exist for the fluid to overcome internal friction.
*   **Mini-example:** In a 10 m horizontal pipe, if the inlet pressure is 100 kPa, the outlet pressure must be less than 100 kPa for movement to occur.

## Quick self-control rule
To verify your results, apply the **2-4-8 Test**:
1.  **2**: Is the maximum velocity [[v_max]] **twice** the average?
2.  **4**: Have you raised the radius [[R]] to the **fourth** power?
3.  **8**: Have you included the factor **eight** in the denominator of Poiseuille's law?
If you meet these three conditions and your Reynolds is less than 2300, your solution is structurally sound.
