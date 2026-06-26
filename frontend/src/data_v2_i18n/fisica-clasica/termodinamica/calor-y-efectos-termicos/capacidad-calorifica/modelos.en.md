## Ideal model

The ideal model treats [[C]] as a constant property of the body over the temperature interval studied. In that case, exchanged sensible heat is proportional to [[DeltaT]], and the slope of the graph of [[Q]] versus [[DeltaT]] is [[C]]. The model describes heating or cooling without a phase change.

## Hypotheses

- The body does not cross a phase transition.
- [[C]] remains approximately constant over the temperature range.
- The body is homogeneous or can be represented by an effective heat capacity.
- Losses to the surroundings are small or already corrected.
- [[Q]] and [[DeltaT]] are written with coherent signs.

## Quantitative validity domain

For many solids and liquids near room temperature, using constant [[C]] introduces errors of only a few percent if the temperature interval does not exceed several tens of kelvin. For water, common metals, and laboratory containers, this approximation is usually sufficient in secondary school and introductory university work.

If the interval exceeds about 100 K, if the process is near absolute zero, or if the material is close to a transition, heat capacity may vary appreciably. In those cases, a table value at one temperature no longer represents the whole process.

## Model failure signals

- The experimental graph of [[Q]] versus [[DeltaT]] is not a straight line.
- The body undergoes melting, boiling, or another phase transition.
- The calculated [[C]] depends strongly on the chosen interval.
- The energy balance does not close even though units and signs are correct.
- The container, sensor, or support has a capacity comparable to the sample and was omitted.

## Extended or alternative model

The first extended model lets [[C]] depend on temperature. Instead of using a single slope, one uses an average capacity over the interval or tabulated data by segments. For composite bodies, the alternative model sums partial capacities of each component: sample, container, lid, and sensors.

Switch model when precision better than five percent is needed, when the temperature interval is large, when the body is not homogeneous, or when phase-change segments appear. During a phase change, latent heat must be used; ordinary heat capacity does not describe the temperature plateau.

A practical threshold is to keep the ideal model only when |[[DeltaT]]| < 100 K, no phase change is crossed, and the tolerated error is larger than 5 %. If losses exceed 10 % of [[Q]], or if the container has [[C]] comparable to the sample and was not included, the model boundary must be expanded.

## Operational comparison

| Aspect | Ideal model | Extended model | Composite body |
|---|---|---|---|
| Capacity | constant [[C]] | temperature-dependent [[C]] | sum of partial capacities |
| Use | estimates and basic lab | high precision or large interval | calorimeters and real equipment |
| Risk | ignoring phase changes | needing table data | forgetting container or sensor |
