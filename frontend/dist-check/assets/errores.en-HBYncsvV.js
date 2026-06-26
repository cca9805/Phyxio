const e=`# Common Mistakes: Static Friction\r
\r
## Conceptual errors\r
\r
### Error 1: Treating [[fs]] as if it were always equal to [[fsmax]]\r
\r
#### Why it seems correct\r
\r
Many textbook exercises focus on the limiting case, so students start associating static friction with its maximum value and stop thinking about the adjustable nature of the interaction.\r
\r
#### Why it is incorrect\r
\r
[[fs]] is the actual response of the contact in a specific situation, whereas [[fsmax]] is only the largest value the contact can sustain before sliding begins. Confusing them erases the difference between state and threshold.\r
\r
#### Detection sign\r
\r
The solution sets [[fs]] equal to [[fsmax]] even though the statement never says the system is on the verge of slipping.\r
\r
#### Conceptual correction\r
\r
Identify the tangential demand [[Ft]] first. Then compare that demand with [[fsmax]]. Only if the system is exactly at the threshold does it make sense for [[fs]] to reach its maximum value.\r
\r
#### Mini-example\r
\r
If a box requires 20 N of tangential support and the threshold is 60 N, the correct value is [[fs]] = 20 N. Writing [[fs]] = 60 N creates a force the problem never asked for.\r
\r
### Error 2: Thinking that [[mus]] by itself creates the friction force\r
\r
#### Why it seems correct\r
\r
Because [[mus]] appears in the threshold formula, it is tempting to believe that knowing the coefficient is enough to know the friction force.\r
\r
#### Why it is incorrect\r
\r
[[mus]] does not act alone. Contact capacity depends on both [[mus]] and [[N]]. In addition, the actual force [[fs]] appears only as a response to a tangential demand [[Ft]].\r
\r
#### Detection sign\r
\r
The student talks about a surface with “high friction” without mentioning the normal load or the tangential action trying to move the body.\r
\r
#### Conceptual correction\r
\r
Read [[mus]] as an effective property of the material pair within the static regime, not as a force. The real force emerges from the interaction between capacity and demand.\r
\r
#### Mini-example\r
\r
Two contacts with the same [[mus]] do not sustain the same adhesion if one works with a small [[N]] and the other with a much larger one. The threshold changes because compression changes.\r
\r
### Error 3: Using the model without deciding the regime\r
\r
#### Why it seems correct\r
\r
Students often want to compute quickly and assume that every formula works in the same way in every situation.\r
\r
#### Why it is incorrect\r
\r
The static model is valid only while there is no slipping. If the demand [[Ft]] becomes larger than [[fsmax]], the problem has changed regime and the same hypothesis can no longer be used.\r
\r
#### Detection sign\r
\r
The required force comes out larger than [[fsmax]], and the student still concludes that the body remains in relative rest.\r
\r
#### Conceptual correction\r
\r
Always perform the regime comparison before closing the solution. That comparison is not a decorative final step; it is the validity condition of the model.\r
\r
#### Mini-example\r
\r
If the calculation demands 90 N while the contact threshold is 70 N, the correct conclusion is not that [[fs]] equals 90 N, but that sliding begins.\r
\r
## Model errors\r
\r
### Error 4: Ignoring that contact capacity can change\r
\r
#### Why it seems correct\r
\r
In textbook exercises, [[mus]] and [[N]] often look constant, so students transfer that rigid picture to every real situation.\r
\r
#### Why it is incorrect\r
\r
In real setups, vibration, dust, humidity, wear, or load redistribution may modify the effective value of [[mus]] or [[N]], and therefore alter [[fsmax]].\r
\r
#### Detection sign\r
\r
The same threshold is used even though the problem mentions a different surface condition, variable tilt, or external disturbances.\r
\r
#### Conceptual correction\r
\r
Before fixing the model, check whether contact conditions actually remain stable over the analyzed interval.\r
\r
#### Mini-example\r
\r
A box may remain attached on a clean table and fail on the same table after fine dust appears. Geometry did not change, but the effective contact did.\r
\r
### Error 5: Reading the normal force [[N]] as a secondary detail\r
\r
#### Why it seems correct\r
\r
In some exercises, the normal force is obtained almost automatically and starts to look like an auxiliary quantity with no conceptual role of its own.\r
\r
#### Why it is incorrect\r
\r
[[N]] sets the scale of the static capacity. A change in [[N]] may completely modify the margin between demand and threshold, even if [[Ft]] stays the same.\r
\r
#### Detection sign\r
\r
The student computes [[Ft]] carefully but never revisits how [[N]] changes when the system tilts, accelerates, or redistributes weight.\r
\r
#### Conceptual correction\r
\r
Treat [[N]] as a structural variable of the contact. Whenever geometry or loading changes, reevaluate the threshold [[fsmax]].\r
\r
#### Mini-example\r
\r
An object may stay still on a horizontal support and start to slip when the support tilts, not because the demand increases dramatically, but because the normal load decreases and [[fsmax]] drops with it.\r
\r
## Mathematical errors\r
\r
### Error 6: Closing the demand-threshold comparison incorrectly\r
\r
#### Why it seems correct\r
\r
After computing several quantities, students may think that the final comparison is trivial and perform it carelessly.\r
\r
#### Why it is incorrect\r
\r
A misread comparison changes the entire regime of the problem. Being clearly below the threshold is not the same as being above it, or almost exactly on it.\r
\r
#### Detection sign\r
\r
The numerical work is correct, but the conclusion about adhesion or sliding does not match the inequality that was actually obtained.\r
\r
#### Conceptual correction\r
\r
Write explicitly which quantity represents the demand and which represents the capacity, then compare them before stating the physical conclusion.\r
\r
#### Mini-example\r
\r
If [[Ft]] is 68 N and [[fsmax]] is 70 N, the correct reading is not "it slides" but "it remains attached with a small margin."\r
\r
## Interpretation errors\r
\r
### Error 7: Ending the problem with a number and no physical reading\r
\r
#### Why it seems correct\r
\r
Once a clean numerical value appears, it is easy to feel that the exercise is finished and that no further explanation is needed.\r
\r
#### Why it is incorrect\r
\r
The physics of the leaf is not contained in the number alone. It lies in deciding whether the contact has margin, is close to sliding, or has already left the static regime.\r
\r
#### Detection sign\r
\r
The solution gives a value for [[fs]] or [[fsmax]] but never says what that value implies for adhesion.\r
\r
#### Conceptual correction\r
\r
After computing, always translate the result into causal language: what the environment demands, what the contact can sustain, and which regime is therefore confirmed.\r
\r
#### Mini-example\r
\r
Saying "[[fsmax]] is 80 N" is incomplete. The useful reading is: "because the demand is 50 N, the system remains attached and still has margin before sliding."\r
\r
## Quick self-control rule\r
\r
After solving, ask five short questions: Did I identify the demand [[Ft]]? Did I compute [[fsmax]] correctly from [[mus]] and [[N]]? Did I compare those quantities before deciding the regime? Did I avoid confusing [[fs]] with [[fsmax]]? Did I explain whether the system keeps adhesion or starts to slide? If one answer is negative, the solution is not finished yet.\r
`;export{e as default};
