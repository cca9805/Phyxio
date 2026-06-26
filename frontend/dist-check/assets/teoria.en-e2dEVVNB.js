const e=`# Coherence

## Conceptual context

Coherence describes the ability of a light wave to maintain a phase relation stable enough to produce observable interference. Having two light beams is not enough: to see bright and dark fringes, the phases arriving at the detector must remain correlated over the time and path difference of the experiment.

In physical optics, coherence connects real sources with interference patterns. A very intense source may fail to produce good fringes if its phase changes too quickly; a less intense but more stable source may produce a highly contrasted pattern. Coherence is therefore not the same as brightness.

The concept helps decide whether an interferometer, a double slit, a laser source, or a filtered lamp can sustain a pattern. The key physical question is to compare the coherence scale of the source with the path difference of the setup.

## 🟢 Essential level

The essential idea is that fringes appear when the waves being recombined arrive with a stable phase relation. If that relation is maintained, bright and dark zones remain defined. If the relation changes in a disordered way, the pattern washes out and the detector records almost uniform illumination.

The quantity [[L_c]] summarizes a useful distance of stability. If the path mismatch [[Delta_L]] is small compared with that scale, interference can be seen with good contrast. If the mismatch becomes too large, the source no longer keeps phase memory between the two paths.

The visibility [[V]] measures real contrast between bright and dark fringes. High visibility does not necessarily mean more total light; it means a better relative difference between maxima and minima. This distinction is essential for reading experiments.

> [!NOTE]
> Coherence is phase stability, not intensity. A source can be bright and poorly coherent, or less bright and very useful for interference.

## 🔵 Formal level

The first relation converts coherence time [[tau_c]] into coherence length [[L_c]]. Coherence time measures how long phase remains usefully correlated; multiplying it by propagation speed gives a spatial scale comparable with optical paths.

{{f:longitud_coherencia}}

This length is not the size of the source or the maximum distance light travels. It is a comparison scale: if two paths differ much more than [[L_c]], relative phases change too much to sustain stable fringes.

To represent simply how coherence falls as path difference grows, the dimensionless quantity [[C_rel]] is used. The model is not meant to replace a full correlation function; it gives a monotonic reading of coherence loss as [[Delta_L]] increases.

{{f:coherencia_relativa}}

The result is interpreted between zero and one. Values near one indicate well-correlated paths; small values indicate that the interference pattern should lose contrast.

Experimental visibility is obtained by comparing maximum intensity [[I_max]] with minimum intensity [[I_min]] in the pattern. This relation measures normalized contrast and removes direct dependence on total source power.

{{f:visibilidad_franjas}}

Visibility near one indicates sharply marked fringes. Visibility near zero indicates that maxima and minima are barely distinguishable, whether because of incoherence, background light, beam imbalance, or poor alignment.

## 🔴 Structural level

The deep structure of coherence combines three levels: source, propagation, and detection. The source determines [[tau_c]] and therefore [[L_c]]. The setup introduces [[Delta_L]] through different paths. The detector measures [[V]] as the visible consequence of that relation. Mixing these levels confuses a source property with a setup failure.

Temporal coherence is related to phase stability over time and to the spectral width of the source. A broad-spectrum source loses correlation quickly because it combines frequencies that dephase relative to each other. A narrow-spectrum source can keep phase for longer and allow larger path differences.

Spatial coherence also exists, linked to the angular or physical extension of the source. An extended source may produce beams arriving from different points with uncorrelated phases. This leaf focuses on temporal and path scales, but complete experimental reading must remember that source geometry can also erase fringes.

Coherence is not all or nothing. In practice, fringes degrade gradually. It is therefore useful to work with indicators such as [[C_rel]] or [[V]] rather than only deciding whether interference exists. A low-contrast pattern may still contain useful information if detector and noise allow it.

The structure also forces a distinction between prediction and diagnosis. [[C_rel]] predicts expected loss from path mismatch; [[V]] diagnoses what was actually measured. If the two readings do not agree, the setup is adding another physical or instrumental mechanism.

> [!WARNING]
> Do not attribute every visibility loss to lack of coherence. Misalignment, unequal intensities, vibrations, background light, and detector resolution also reduce contrast.

## Deep physical interpretation

Coherence expresses phase memory. Two beams may come from the same source, but if one path delays phase too much relative to the other, the detector receives combinations that change during measurement. Time averaging then erases the fringes.

The fine physical reading separates contrast from energy. [[V]] does not say how much power arrives, but how distinguishable maxima and minima are. A dim image can have high visibility if the detector is sensitive; a bright image can have low visibility if phases are mixed.

In interferometry, coherence acts as a quality rule for both source and setup. It tells whether it makes sense to increase path difference, spectrally filter the source, or use a laser source.

## Order of magnitude

A broad-spectrum lamp may have [[L_c]] of micrometres, while a stabilized laser can reach metres or more. This many-order-of-magnitude difference explains why a simple double slit may work with filtered light, but a long-arm interferometer usually needs a much more coherent source.

An absurd result appears if an ordinary white lamp is used with centimetre path differences and high contrast is expected, or if almost zero visibility is interpreted as total absence of light. The correct question is to compare [[Delta_L]] with [[L_c]] and then read [[V]].

## Personalized resolution method

First identify what is being evaluated: source temporal scale, path difference, or measured contrast. If [[tau_c]] is known, calculate [[L_c]]. If the setup is known, compare [[Delta_L]] with that scale. If a fringe image is available, use [[I_max]] and [[I_min]] to estimate [[V]].

Then decide whether the problem belongs to the source or the setup. If [[Delta_L]] is much larger than [[L_c]], temporal coherence is missing. If [[V]] is low even with well-matched paths, check intensities, alignment, background, or spatial coherence.

## Special cases and extended example

A laser is not automatically perfect. It may have high temporal coherence, but vibrations, mode noise, or poor alignment reduce visibility. Source coherence is therefore necessary for many setups, but not sufficient to guarantee clean fringes.

A white lamp can produce interference if it is filtered and if path difference is very small. The filter reduces spectral width and increases the coherence scale, although it also reduces power. This tradeoff between brightness and coherence is central in experimental optics.

In optical coherence tomography, the opposite of what is sometimes expected occurs: relatively short coherence is desired to select depths. Coherence loss outside a path window becomes a resolution tool.

## Real student questions

**Does more intensity mean more coherence?** No. Intensity measures energy per area and time; coherence measures phase stability.

**Why do fringes disappear if beams still reach the detector?** Because they arrive with phases that change during measurement, and time averaging erases maxima and minima.

**Does a laser always give perfect visibility?** No. A laser helps, but the setup can lose contrast through vibrations, misalignment, or beams with very different intensities.

**Is coherence only a source property?** Not completely. The source provides a coherence scale, but the setup decides whether path difference remains within that scale.

## Cross-cutting connections and study paths

This leaf builds on [Interference of Light](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz), where wave addition is studied. It also connects with [Diffraction of Light](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/difraccion-de-la-luz), because both phenomena require phase stability to form defined patterns.

The natural path is to study interference, then coherence, and finally interferometric applications. This makes clear that a fringe formula is not enough if the source does not preserve phase on the experimental scale.

## Final synthesis

Coherence measures whether a source and a setup preserve enough phase to produce observable fringes. [[L_c]], [[Delta_L]], [[C_rel]], and [[V]] translate that idea into physical reading: temporal stability, path mismatch, and experimental contrast.
`;export{e as default};
