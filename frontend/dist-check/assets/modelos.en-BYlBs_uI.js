const e=`# Models for Intensive Variables

## Ideal model

The ideal model treats an intensive variable as a local or mean state property that does not change when a uniform sample is scaled. If [[m]] and [[V]] are doubled together while composition, phase, and internal equilibrium are kept, [[T]], [[P]], [[rho]], and the generic variable [[X_int]] remain equal. The system can become larger, but the state reading does not become a sum.

This model is useful when the system is macroscopic, well mixed, and free from important gradients. Under those conditions, one number for [[T]] or [[P]] represents the whole system reasonably well. It also classifies ratios such as [[rho]], because normalization cancels the scale effect.

## Hypotheses

The first assumption is internal homogeneity: the observed value does not change significantly between regions. The second is comparability: the parts being scaled or mixed belong to the same phase, or to phases treated with a clear rule. The third is a common reference: [[m]] and [[V]] refer to the same system when [[rho]] is computed.

It is also assumed that [[lambda_escala]] changes amount of system, not state. If scaling changes temperature through environmental exchange or compresses the gas, the pure intensivity test is no longer being applied. The test only makes sense when the added copy is equivalent to the original.

## Quantitative validity domain

As a classroom criterion, the single-mean-intensive model works well when internal variations satisfy \`DeltaX/X < 0.01\` on the working scale. If two thermometers in a sample differ by less than one percent of the relevant reading, a mean [[T]] can be used without losing the main physical decision. If the variation of [[P]] inside a vessel is small compared with the mean pressure, one pressure may be sufficient.

For ratios such as [[rho]], [[V]] must be positive and the sample must be representative. In a stratified mixture, a mean density may be useful for inventory, but it does not describe each layer. In mixture calculations, the average of [[X_A]] and [[X_B]] must be weighted with positive compatible amounts; a simple mean is reasonable only when the amounts are equal.

## Model failure signals

The model fails when large gradients of temperature, pressure, or composition appear. It also fails with active boundaries, phase changes, localized chemical reaction, or rapid flow that prevents local equilibrium from being defined. A practical signal is that two reasonable sensors placed at different points do not give compatible readings.

Another failure signal is using intensives for inventory balances. If temperatures are added to obtain a total temperature, the conceptual model has broken. If two vessels are compared only by [[P]] without area or amount of gas, local push can be confused with total force or inventory.

## Extended or alternative model

When the sample is not uniform, it is better to switch to an intensive-field model. Instead of one [[T]], [[P]], or [[rho]], local values depending on position and sometimes time are used. The transition is required when the observed gradient dominates measurement uncertainty or when the question asks for flow, transfer, or spatial stability.

If the mixture is not ideal, the model changes to effective properties or equations of state. Then the simple weighted average is not enough and specific heats, compressibilities, activities, or constitutive relations are introduced. The criterion for switching model is clear: if the simple intensive rule does not predict the final reading within the physical tolerance, the internal structure must be represented.

## Operational comparison

The ideal model answers quickly: duplicating a sample does not change [[X_int]]. The field model gives more detail: every point has its own value. The effective-property model is used when composition or phase makes a simple mean misleading. The choice depends on the question: state comparison, spatial map, or real mixture calculation.
`;export{e as default};
