## Historical problem

At the end of the 19th century, when electrification of European and North American homes was beginning to spread, the scientific and industrial community lacked any systematic framework for understanding how much electric current was dangerous to humans. Deaths by electrocution were frequent among electrical installation workers and, progressively, among domestic users. The central question had no answer: what exactly does electric current do to the human body and from what threshold does it become lethal?

The first systematic studies were carried out by Charles Dalziel at the University of California (Berkeley) during the 1940s and 1950s. Dalziel asked whether it was possible to define safety curves in the current-time plane that separated safe from dangerous conditions for humans. His work, continued by European researchers such as Biegelmeier in Austria, laid the foundations for what is now IEC 60479 —the document establishing the [[corriente_de_seguridad_maxima]] thresholds used in all domestic electrical protection design worldwide.

## Prior conceptual difficulty

The fundamental obstacle was both experimental and conceptual. Experimentally, it was unethical to subject humans to potentially lethal electric currents to measure thresholds. Conceptually, the community assumed voltage was the primary damage agent —an analogy with heat: higher temperature, greater burn— and that current was simply the consequence. This confusion between cause (voltage) and direct physiological effect (current) delayed the development of current-based protection standards for decades.

The additional difficulty was that physiological damage is not proportional only to instantaneous current, but to the I×t product (current multiplied by exposure time). A current of 100 mA for 10 ms may be less harmful than 30 mA for 3 seconds, contrary to the intuition of "more current, more danger". Without a mathematical model of the heart as an electrical oscillator susceptible to external perturbations, predicting the ventricular fibrillation threshold was impossible.

## What changed

The key advance was the electrophysiological characterization of the human heart as an oscillating system with a refractory period. In the 1950s, research in cardiac electrophysiology demonstrated that ventricular fibrillation can only be induced during a specific time window in the cardiac cycle (the T-wave phase of the electrocardiogram). This explained why exposure duration determined risk so strongly: a 20 ms exposure may not coincide with the vulnerable phase, while a 500 ms exposure will almost certainly reach it.

Dalziel combined animal experiments (dogs and sheep, whose hearts have masses comparable to humans) with data from non-lethal accidental electrocutions and built the first I-t safety curves published in 1961. Biegelmeier refined these curves in the 1970s with more extensive studies, and the final result was adopted by the IEC as the basis of standard 60479 in 1984. For the first time there existed a scientific document answering the question with concrete figures: 30 mA as the domestic differential trip threshold, 30 ms as maximum exposure time before serious fibrillation risk.

## Impact on physics

The standardization of physiological thresholds radically transformed electrical installation design. Before IEC 60479, differentials were designed empirically with arbitrary safety intervals. Afterward, the entire design chain —from differential sensitivity ([[corriente_de_disparo_del_diferencial]]) to maximum ground resistance— was derived from physiological thresholds through Ohm's Law applied to the human body.

The deepest impact was conceptual: it unified electrical physics (Ohm's Law applied to the body) with cardiac physiology (susceptible oscillator model) into a single predictive framework. Body resistance [[resistencia_electrica_del_cuerpo_humano]] ceased to be a biological curiosity and became the central design parameter of electrical protection systems worldwide.

## Connection with modern physics

The principles established by Dalziel and Biegelmeier remain the foundations of the current IEC 60479 standard, updated in 2005 and 2018 with data from new research on pediatric populations, users with cardiac conditions, and effects of direct versus alternating current. 21st-century advances in cardiac electrophysiology —3D computational models of the human heart— are allowing refinement of safety curves with greater precision than the original animal studies.

The same physics of [[corriente_a_traves_del_cuerpo]] that protects people from domestic risks is applied at the opposite end of the spectrum: cardiac defibrillation uses currents of 1–10 A for 5–10 ms to restore normal sinus rhythm to a fibrillating heart. The quantitative understanding of physiological thresholds makes it possible both to protect from accidental damage and to reverse damage already produced.