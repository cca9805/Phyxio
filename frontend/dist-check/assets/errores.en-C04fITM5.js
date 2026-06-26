const e=`# Frequent errors — Switches\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing the switch with active protection\r
\r
#### Por que parece correcto\r
\r
The switch and MCB look similar and are both in the distribution board. Both allow cutting the circuit. Many users treat them as equivalent devices.\r
\r
#### Por que es incorrecto\r
\r
A switch is a switching device: it opens and closes the circuit manually. It does not detect excessive [[I]] or act automatically. A switch with high [[P_on]] activates no protection mechanism.\r
\r
#### Senal de deteccion\r
\r
The student says that switching off the switch eliminates the risk. The risk does not disappear when off: the degraded contact with high [[R_on]] will still cause high [[P_on]] every time it is switched on.\r
\r
#### Correccion conceptual\r
\r
The switch controls (manual operation); the MCB protects (automatic action). The solution to switch heating is to replace it, not to change usage habits.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: hot switch means it should be used less. Correct: hot switch with [[P_on]] > 5 W means it must be replaced regardless of usage frequency.\r
\r
---\r
\r
### Error 2: Assuming all switches are equivalent\r
\r
#### Por que parece correcto\r
\r
All switches have the same basic function: open and close the circuit. The student assumes that if one works mechanically, it is suitable for any load.\r
\r
#### Por que es incorrecto\r
\r
A switch designed for [[I]] = 6 A operating with [[I]] = 10 A has much higher [[P_on]] = [[I]]^2 x [[R_on]]. Service life in operations also depends on load current and load type.\r
\r
#### Senal de deteccion\r
\r
The student replaces a faulty switch with a lower-rated one without checking load [[I]].\r
\r
#### Correccion conceptual\r
\r
Verify that nominal [[I]] of the switch is greater than or equal to load [[I]]. Always use maximum load current to size the switch.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: any 10 A switch works for any load. Correct: verify load [[I]] is below switch nominal and calculate [[P_on]] for the expected [[R_on]].\r
\r
---\r
\r
## Model errors\r
\r
### Error 3: Applying the static model to inductive loads\r
\r
#### Por que parece correcto\r
\r
The formula [[P_on]] = [[I]]^2 x [[R_on]] does not mention load type. The student applies it directly with nominal [[I]].\r
\r
#### Por que es incorrecto\r
\r
Inductive loads have inrush current of 4-8 times nominal [[I]] for brief transients. The static model underestimates actual dissipation during start-ups. Frequent cycling also degrades [[R_on]] through arcing.\r
\r
#### Senal de deteccion\r
\r
The student calculates [[P_on]] = 0.6 W for a pump thermostat and concludes no risk, without considering inrush current or daily switching count.\r
\r
#### Correccion conceptual\r
\r
First identify load type. For inductive loads with frequent cycling, the static model is insufficient. The diagnostic parameter for service life is operation count, not static [[P_on]].\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: calculate [[P_on]] with nominal [[I]] for a pump and conclude the switch is adequate. Correct: estimate inrush current and evaluate whether the switch is rated for that load profile.\r
\r
---\r
\r
### Error 4: Ignoring [[P_on]] because [[R_on]] is small\r
\r
#### Por que parece correcto\r
\r
Typical switch [[R_on]] is much smaller than load resistance. It seems reasonable to neglect it.\r
\r
#### Por que es incorrecto\r
\r
[[P_on]] = [[I]]^2 x [[R_on]]. With [[I]] = 10 A and [[R_on]] = 0.05 ohm: [[P_on]] = 5 W. Not negligible for contact thermal diagnosis.\r
\r
#### Senal de deteccion\r
\r
The student calculates [[P_on]] with [[I]] = 1 A and generalises that [[P_on]] is always small.\r
\r
#### Correccion conceptual\r
\r
Always calculate [[P_on]] for the actual load current. The scale of [[P_on]] depends on [[I]]^2, not on [[R_on]] alone.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: [[R_on]] = 0.05 ohm is negligible. Correct: with [[I]] = 10 A, [[P_on]] = 5 W — thermal risk threshold.\r
\r
---\r
\r
## Mathematical errors\r
\r
### Error 5: Forgetting the square in [[P_on]] = [[I]]^2 x [[R_on]]\r
\r
#### Por que parece correcto\r
\r
In Ohm's law the relationship is linear. The student applies the same logic to power.\r
\r
#### Por que es incorrecto\r
\r
Power dissipated is [[P_on]] = [[I]]^2 x [[R_on]], not [[I]] x [[R_on]]. The units of [[I]] x [[R_on]] are volts, not watts. The error is detectable dimensionally.\r
\r
#### Senal de deteccion\r
\r
The student obtains [[P_on]] in volts, or gets a value ten times smaller than correct.\r
\r
#### Correccion conceptual\r
\r
Always apply Joule's law: power dissipated in [[R_on]] grows with the square of [[I]]. Check dimensions: amperes squared times ohms gives watts, not volts.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: [[P_on]] = [[I]] x [[R_on]] = 8.7 x 0.08 = 0.70 (volts, not watts). Correct: [[P_on]] = [[I]]^2 x [[R_on]] = 8.7 squared times 0.08 = 6.05 W.\r
\r
---\r
\r
### Error 6: Confusing [[R_on]] with load resistance\r
\r
#### Por que parece correcto\r
\r
Both are resistances in series in the same circuit. The student may confuse switch contact resistance with device resistance.\r
\r
#### Por que es incorrecto\r
\r
[[R_on]] is the switch contact resistance. Load resistance is the device equivalent resistance. They differ by orders of magnitude: loads have tens or hundreds of ohms; [[R_on]] has hundredths or tenths of an ohm.\r
\r
#### Senal de deteccion\r
\r
The student includes [[R_on]] in the [[I]] calculation denominator, indicating conceptual confusion.\r
\r
#### Correccion conceptual\r
\r
Calculate [[I]] = [[P]]/[[V]] ignoring [[R_on]]. Then calculate [[P_on]] = [[I]]^2 x [[R_on]] separately.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: [[I]] = [[V]] divided by the sum of R_load and [[R_on]]. Correct: [[I]] = [[P]] divided by [[V]], then [[P_on]] = [[I]]^2 x [[R_on]] separately.\r
\r
---\r
\r
## Interpretation errors\r
\r
### Error 7: Interpreting large [[E_on]] as dangerous without context\r
\r
#### Por que parece correcto\r
\r
High energy seems to indicate high risk. The student sees [[E_on]] = 100,000 J and interprets it as dangerous heating.\r
\r
#### Por que es incorrecto\r
\r
Contact thermal risk is determined by [[P_on]] (instantaneous dissipation rate), not [[E_on]] (accumulated energy). With [[P_on]] = 0.1 W the contact reaches a low equilibrium temperature even if [[E_on]] is large.\r
\r
#### Senal de deteccion\r
\r
The student calculates [[E_on]] = 100 kJ for [[P_on]] = 0.1 W and concludes there is thermal risk.\r
\r
#### Correccion conceptual\r
\r
Use [[P_on]] for thermal diagnosis and [[E_on]] for energy analysis. They are complementary quantities with different uses.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrect: [[E_on]] = 100,000 J implies high thermal risk. Correct: [[P_on]] = 0.1 W implies low equilibrium temperature, no appreciable thermal risk.\r
\r
---\r
\r
## Quick self-control rule\r
\r
To quickly verify switch analysis is correct:\r
\r
1. Calculate [[I]] = [[P]]/[[V]] — do not include [[R_on]] in this step.\r
2. Calculate [[P_on]] = [[I]]^2 x [[R_on]] — verify the result is in watts.\r
3. Compare [[P_on]] with thresholds: below 1 W is safe, 1 to 5 W requires monitoring, above 5 W requires replacement.\r
4. If the load is inductive or the switch cycles frequently, the static model may underestimate actual degradation.\r
5. [[E_on]] is for energy analysis, not for thermal diagnosis. Thermal diagnosis always uses [[P_on]].\r
`;export{e as default};
