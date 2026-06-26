# Applications

## 1. Power-factor correction in industrial loads

In installations with motors, transformers, and capacitor banks, an equivalent RLC reading helps estimate whether the load demands too much reactive power relative to its useful active power. The interest is fully operational: a large gap between [[potencia_activa]] and [[potencia_aparente]] increases [[corriente_rms]], may require thicker conductors, and reduces available source margin. The leaf helps decide whether the main issue is lack of compensation or a different limitation of the installation.

Dominant variable: [[potencia_reactiva]].

Validity limit: the application is reliable when the load can be approximated by a linear equivalent at one dominant frequency and when RMS measurements represent the actual steady state.

## 2. Design and tuning of passive filters

Many analogue and power filters are first interpreted through RLC equivalents. In those systems, the combined reading of [[resistencia_serie]], [[reactancia_inductiva]], [[reactancia_capacitiva]], and [[impedancia_total]] helps decide whether one frequency will be attenuated, transmitted, or turned into a specially sensitive operating condition. The value of the leaf lies in showing that selectivity is not a property of one isolated component but of the total balance of the branch.

Dominant variable: [[impedancia_total]].

Validity limit: the reading is valid when the filter can be treated with lumped parameters and in a band where distributed or strongly nonlinear effects do not dominate.

## 3. AC laboratory benches and calibration tasks

In teaching and calibration, RLC circuits are assembled to compare theory with measurement. The practical problem is not only to obtain a result, but to verify whether the reading of [[phi]], [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]] matches oscilloscope traces, wattmeter output, and RMS instruments. This leaf is useful because it forces consistency checks before a measurement is accepted as representative of the branch.

Dominant variable: [[phi]].

Validity limit: it works well when the signal is nearly sinusoidal and the instruments genuinely report RMS magnitudes coherent with the model.

## 4. Demand correction in electronic and power equipment

AC-fed equipment, converters with filtered inputs, and some laboratory loads can often be understood first with an RLC equivalent. That analysis helps estimate whether the source supports an excessive [[potencia_aparente]] relative to the target useful power, or whether moderate reactive modification could reduce total current without changing the main function of the equipment. The practical value of the leaf is that it separates network demand from useful transfer.

Dominant variable: [[potencia_aparente]].

Validity limit: this application is preliminary; if harmonic content, fast electronic control, or strongly nonlinear topologies dominate, richer models become necessary.

## 5. Interpreting conditions close to compensation or resonance

Although electrical resonance has its own dedicated leaf, many first decisions are already taken from the general RLC framework. When [[reactancia_inductiva]] and [[reactancia_capacitiva]] approach each other, [[impedancia_total]] may fall, [[corriente_rms]] may rise, and the system may become much more sensitive to tolerance and frequency. Recognizing that situation early is crucial in radio-frequency setups, passive filters, test networks, and educational benches.

Dominant variable: [[corriente_rms]].

Validity limit: the application is useful while the behaviour can still be read through a linear series equivalent; if sensitivity or parasitics dominate, the model must change.

Taken together, these applications show why the leaf is not reduced to solving one branch on paper. It is a tool for reading total demand, operational stability, and the convenience of compensation in real situations where a good decision depends on clearly separating [[potencia_activa]], [[potencia_reactiva]], and [[potencia_aparente]]. It also trains a modelling discipline: before correcting a load or designing a filter, one has to know which part of the response is resistive and which part is purely reactive. That habit is the truly transferable competence of the topic.

Another value of these applications is that they force the student to decide what level of detail is enough in each context. In maintenance, a preliminary reading of [[potencia_aparente]], [[potencia_reactiva]], and [[phi]] may already reveal poor power factor. In design, the same reading is only a starting point and must be completed with tolerances, parasitics, and safety margins. That distinction between first diagnosis and fine validation prevents the model from being used beyond its real domain.

It is also worth noticing that these applications are not the same physics under different decoration. In industrial compensation, the focus is on releasing network capacity. In filters, the focus is selectivity. In laboratory work, the focus is consistency between theory and measurement. In electronic equipment, the focus is reducing total demand without changing the main function. Near compensation, the focus is sensitivity. The same leaf works in all those contexts because it organizes the common reading between total opposition, phase shift, and power balance.

That versatility is exactly the maturity criterion targeted by plantilla v5: it is not enough to compute correctly; one must also decide which physical reading changes when the application changes, and which operational consequence matters most in each case.

That is what makes the model transferable.