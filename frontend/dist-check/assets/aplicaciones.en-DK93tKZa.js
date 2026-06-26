const e=`## 1. Power-factor correction in industrial loads\r
\r
In installations with motors, transformers, and capacitor banks, an equivalent RLC reading helps estimate whether the load demands too much reactive power relative to its useful active power. The interest is fully operational: a large gap between [[P]] and [[S]] increases [[I]], may require thicker conductors, and reduces available source margin. The leaf helps decide whether the main issue is lack of compensation or a different limitation of the installation.\r
\r
Dominant variable: [[Q]].\r
\r
Validity limit: the application is reliable when the load can be approximated by a linear equivalent at one dominant frequency and when RMS measurements represent the actual steady state.\r
\r
## 2. Design and tuning of passive filters\r
\r
Many analogue and power filters are first interpreted through RLC equivalents. In those systems, the combined reading of [[R]], [[Xl]], [[Xc]], and [[Z]] helps decide whether one frequency will be attenuated, transmitted, or turned into a specially sensitive operating condition. The value of the leaf lies in showing that selectivity is not a property of one isolated component but of the total balance of the branch.\r
\r
Dominant variable: [[Z]].\r
\r
Validity limit: the reading is valid when the filter can be treated with lumped parameters and in a band where distributed or strongly nonlinear effects do not dominate.\r
\r
## 3. AC laboratory benches and calibration tasks\r
\r
In teaching and calibration, RLC circuits are assembled to compare theory with measurement. The practical problem is not only to obtain a result, but to verify whether the reading of [[phi]], [[P]], [[Q]], and [[S]] matches oscilloscope traces, wattmeter output, and RMS instruments. This leaf is useful because it forces consistency checks before a measurement is accepted as representative of the branch.\r
\r
Dominant variable: [[phi]].\r
\r
Validity limit: it works well when the signal is nearly sinusoidal and the instruments genuinely report RMS magnitudes coherent with the model.\r
\r
## 4. Demand correction in electronic and power equipment\r
\r
AC-fed equipment, converters with filtered inputs, and some laboratory loads can often be understood first with an RLC equivalent. That analysis helps estimate whether the source supports an excessive [[S]] relative to the target useful power, or whether moderate reactive modification could reduce total current without changing the main function of the equipment. The practical value of the leaf is that it separates network demand from useful transfer.\r
\r
Dominant variable: [[S]].\r
\r
Validity limit: this application is preliminary; if harmonic content, fast electronic control, or strongly nonlinear topologies dominate, richer models become necessary.\r
\r
## 5. Interpreting conditions close to compensation or resonance\r
\r
Although electrical resonance has its own dedicated leaf, many first decisions are already taken from the general RLC framework. When [[Xl]] and [[Xc]] approach each other, [[Z]] may fall, [[I]] may rise, and the system may become much more sensitive to tolerance and frequency. Recognizing that situation early is crucial in radio-frequency setups, passive filters, test networks, and educational benches.\r
\r
Dominant variable: [[I]].\r
\r
Validity limit: the application is useful while the behaviour can still be read through a linear series equivalent; if sensitivity or parasitics dominate, the model must change.\r
\r
Taken together, these applications show why the leaf is not reduced to solving one branch on paper. It is a tool for reading total demand, operational stability, and the convenience of compensation in real situations where a good decision depends on clearly separating [[P]], [[Q]], and [[S]]. It also trains a modelling discipline: before correcting a load or designing a filter, one has to know which part of the response is resistive and which part is purely reactive. That habit is the truly transferable competence of the topic.\r
\r
Another value of these applications is that they force the student to decide what level of detail is enough in each context. In maintenance, a preliminary reading of [[S]], [[Q]], and [[phi]] may already reveal poor power factor. In design, the same reading is only a starting point and must be completed with tolerances, parasitics, and safety margins. That distinction between first diagnosis and fine validation prevents the model from being used beyond its real domain.\r
\r
It is also worth noticing that these applications are not the same physics under different decoration. In industrial compensation, the focus is on releasing network capacity. In filters, the focus is selectivity. In laboratory work, the focus is consistency between theory and measurement. In electronic equipment, the focus is reducing total demand without changing the main function. Near compensation, the focus is sensitivity. The same leaf works in all those contexts because it organizes the common reading between total opposition, phase shift, and power balance.\r
\r
That versatility is exactly the maturity criterion targeted by plantilla v5: it is not enough to compute correctly; one must also decide which physical reading changes when the application changes, and which operational consequence matters most in each case.\r
\r
That is what makes the model transferable.`;export{e as default};
