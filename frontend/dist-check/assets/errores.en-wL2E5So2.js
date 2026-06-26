const e=`# Common Errors in Laminar Flow\r
\r
## Conceptual errors\r
\r
### Error\r
**Confusing flow rate with layer velocity**\r
*   **Why it seems correct:** It is intuitive to think that the fluid moves like a solid piston and that the entire volume advances at the same speed.\r
*   **Why it is incorrect:** Due to viscosity, the fluid "sticks" to the walls and slides layer over layer, creating a profile where each point has a different velocity.\r
*   **Detection signal:** Calculated flow rates that are double what's expected or transit times inconsistent with the maximum velocity.\r
*   **Conceptual correction:** The flow rate [[Q]] is the integral of the velocity profile; the average velocity is exactly half of the maximum [[v_max]] at the center.\r
*   **Mini-example:** If [[v_max]] is 2 m/s, using 2 m/s to calculate the flow rate will give a 100 % erroneous value; 1 m/s should be used.\r
\r
### Error\r
**Thinking that roughness always affects friction**\r
*   **Why it seems correct:** In daily life, rough surfaces always generate more friction than smooth ones.\r
*   **Why it is incorrect:** In the laminar regime, a viscous boundary layer forms that covers the wall's irregularities, making the fluid "slide" over static fluid.\r
*   **Detection signal:** Trying to find the roughness coefficient on the Moody chart for a Reynolds number less than 2000.\r
*   **Conceptual correction:** The friction factor in laminar flow depends solely on [[Re]] (factor de fricci?n igual a 64 dividido por [[Re]]) and is independent of the pipe material.\r
*   **Mini-example:** A rusty steel pipe and a smooth glass pipe will have the same head loss if the flow is strictly laminar.\r
\r
## Model errors\r
\r
### Error\r
**Applying Poiseuille in the pipe entrance zone**\r
*   **Why it seems correct:** It is assumed that the laws of the leaf apply from the first millimeter of the pipe.\r
*   **Why it is incorrect:** The fluid needs a physical distance (entrance length) to organize its layers and reach the stable parabolic profile.\r
*   **Detection signal:** Measured pressure drops [[deltaP]] that are greater than those calculated theoretically near the inlet.\r
*   **Conceptual correction:** Poiseuille's law is only valid for "fully developed" flow.\r
*   **Mini-example:** In a 1 m long pipe with a sharp entrance, the first 10 cm will not follow Poiseuille's law accurately.\r
\r
### Error\r
**Ignoring Reynolds Number limits**\r
*   **Why it seems correct:** The formulas are simple to apply and it is tempting to use them for any speed.\r
*   **Why it is incorrect:** Above [[Re]] ? 2300, inertial forces break the layers and the flow becomes turbulent, totally changing the system's physics.\r
*   **Detection signal:** Flow rate results that do not match reality when the velocity is high or the viscosity [[eta]] is low.\r
*   **Conceptual correction:** Always verify the Reynolds Number before applying laminar models.\r
*   **Mini-example:** Attempting to calculate water flow in a fire pipe using Poiseuille will give massive errors since that flow is turbulent.\r
\r
## Mathematical errors\r
\r
### Error\r
**Confusion between radius and diameter in the fourth power**\r
*   **Why it seems correct:** Both measure the pipe's dimension and are sometimes used interchangeably in quick formulas.\r
*   **Why it is incorrect:** The law uses the radius [[R]] raised to the fourth power. Using the diameter di?metro multiplies the error by 16.\r
*   **Detection signal:** Absurdly large or small flow rate [[Q]] results (outside logical orders of magnitude).\r
*   **Conceptual correction:** Always convert diameter to radius and ensure you raise it to the power of 4.\r
*   **Mini-example:** If the radius is 1 cm (el radio a la cuarta potencia vale 1 en esas unidades), using the diameter of 2 cm would give dos elevado a cuatro da 16, a 1500 % error.\r
\r
### Error\r
**Unit inconsistency in viscosity**\r
*   **Why it seems correct:** Viscosity is often given in centiPoise (cP) because they are more manageable numbers.\r
*   **Why it is incorrect:** Pressure and flow rate formulas require consistent SI units (Pa*s).\r
*   **Detection signal:** Results that fail by factors of 10, 100, or 1000.\r
*   **Conceptual correction:** One centipoise corresponds to one thousandth of a pascal-second. Perform the conversion before any calculation.
*   **Mini-example:** Using 1 in the formula for water instead of 0.001 will give a pressure drop a thousand times smaller than the real one.\r
\r
## Interpretation errors\r
\r
### Error\r
**Believing that pressure is constant along the pipe**\r
*   **Why it seems correct:** In electrical circuits or ideal flows, lossless segments are sometimes assumed.\r
*   **Why it is incorrect:** Viscosity is a dissipative force that consumes mechanical energy for every millimeter of advance.\r
*   **Detection signal:** Energy diagrams showing a horizontal pressure line in a pipe with viscous fluid.\r
*   **Conceptual correction:** A negative pressure gradient (drop) must exist for the fluid to overcome internal friction.\r
*   **Mini-example:** In a 10 m horizontal pipe, if the inlet pressure is 100 kPa, the outlet pressure must be less than 100 kPa for movement to occur.\r
\r
## Quick self-control rule\r
To verify your results, apply the **2-4-8 Test**:\r
1.  **2**: Is the maximum velocity [[v_max]] **twice** the average?\r
2.  **4**: Have you raised the radius [[R]] to the **fourth** power?\r
3.  **8**: Have you included the factor **eight** in the denominator of Poiseuille's law?\r
If you meet these three conditions and your Reynolds is less than 2300, your solution is structurally sound.
`;export{e as default};
