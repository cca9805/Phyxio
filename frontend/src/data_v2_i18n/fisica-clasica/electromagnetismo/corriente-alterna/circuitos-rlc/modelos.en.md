## Ideal model

The ideal model of the leaf treats the load as a linear, lumped, series RLC branch excited by a single sinusoidal frequency in steady state. In that framework, [[resistencia_serie]] concentrates mean dissipation, while [[reactancia_inductiva]] and [[reactancia_capacitiva]] summarize the reactive effect of magnetic and electric storage. The description does not follow geometric or material detail, but the equivalent effect those elements produce on [[impedancia_total]], [[corriente_rms]], [[phi]], [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]].

Its didactic value is high because it makes the internal structure of the load visible before finer corrections are introduced. It is not the best model because it is universal, but because it shows clearly how total opposition is organized and why current, phase, and power must be read together.

## Hypotheses

The first hypothesis is sinusoidality: source and relevant response can be represented by one dominant frequency. The second is linearity: effective parameters do not change in a dominant way with current or voltage amplitude during the analysed case. The third is parameter concentration: the physical size of the setup does not create distributed effects comparable to the behaviour of the elements themselves.

The model also assumes that [[reactancia_inductiva]] and [[reactancia_capacitiva]] were evaluated at the same frequency and that [[tension_rms]] and [[corriente_rms]] are interpreted as RMS quantities. Finally, the leaf fixes a sign convention for [[phi]] and [[potencia_reactiva]]: positive for inductive dominance and negative for capacitive dominance. Without that convention, calculation may still close while physical reading degrades.

## Quantitative validity domain

As a first-order operational criterion, the model is reliable when the waveform can be treated as nearly sinusoidal, for example with THD <= 5 percent, and when parasitic effects do not alter effective parameters by more than about 10 percent with respect to the values used in the solution. It is also reasonable to require that frequency stays in a local window with relative variation |delta f|/f <= 0.1 around the operating point.

In practical terms, the simple series model is especially useful when the goal is to classify regime, estimate current, compare [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]], and decide whether the load is using network capacity efficiently. If the goal shifts toward high precision, safety near compensation, or rigorous tolerance prediction, the quantitative domain of this model is no longer sufficient.

## Model failure signals

One failure signal appears when results such as [[corriente_rms]] or [[potencia_reactiva]] change too much under small perturbations of frequency or parameters. If a variation below 5 percent produces large jumps in response, the branch may be operating in a zone where the simple equivalent is no longer robust for technical decisions.

Another failure signal is mismatch with the material behaviour of the real setup. If the model predicts moderate demand while the experiment shows strong heating, noticeable voltage drop, saturation, or source limits not reflected by the equations, parasitic resistance, ESR, thermal dependence, or nonlinearity are missing. The model also fails when it is applied to parallel or distributed topologies as if they were simple series branches.

## Extended or alternative model

When the ideal model stops being enough, the natural next step is to include total effective resistance, capacitor losses, winding resistance, and, if needed, dependence on frequency or temperature. That extended model preserves the intuition of the leaf while improving quantitative prediction and avoiding overoptimistic interpretations of compensation.

The moment when it becomes convenient to change model is the moment when the expected error of the simple series equivalent stops being small compared with the technical decision to be made. If the goal is only to classify whether the load is inductive or capacitive, the basic model is enough. If the goal is to specify safety, thermal margin, stability near compensation, or high precision, richer descriptions such as full phasors or admittance methods become the correct language.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

The ideal model is superior for learning, first-pass diagnosis, and problems where the main objective is to read the split between total demand, active power, and reactive character. The extended model is superior for predicting tolerance effects, safety, and fine behaviour. The first clarifies. The second prevents excessive optimism.

Choosing between them is not aesthetic. If the application consists of deciding whether the load is using the network poorly, the ideal model may be enough. If the application requires design, detailed validation, or risk assessment, the extended model stops being optional and becomes the appropriate description of the system.