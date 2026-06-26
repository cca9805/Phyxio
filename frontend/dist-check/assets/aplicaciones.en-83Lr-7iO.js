const e=`# Applications

## 1. Laboratory interferometers

In an interferometer, two beams travel along different paths and recombine to form fringes. Coherence decides whether those fringes remain stable during measurement. If [[Delta_L]] exceeds the scale [[L_c]], the pattern loses contrast even though both beams reach the detector.

The dominant assumption is that source and optical table remain stable. In that case, [[C_rel]] anticipates whether path mismatch is tolerable, and [[V]] checks the real experimental contrast. Low visibility is not automatically interpreted as low light.

In practice, the operator first adjusts the arms to recover contrast and then changes the source or filter if the problem remains. This sequence avoids diagnosing a source as incoherent when the real limitation is alignment, vibration, or background light.

Coherence thus becomes an alignment test: changing path, observing [[V]], and comparing with [[L_c]] helps locate the dominant cause of fringe loss.

Dominant variable: [[C_rel]] summarizes whether path difference lies inside the coherence scale.
Validity limit: the simple model fails if vibrations, misalignment, background light, or very unequal intensities are present.

## 2. Laser source selection

Choosing a laser for interferometry does not depend only on power or color. A source with enough [[L_c]] is required for the path difference of the setup. A narrow-line laser can sustain fringes with long arms, while a noisier one may lose contrast.

The ideal model helps compare sources before building the experiment. If the manufacturer provides [[tau_c]] or approximate coherence length, path tolerance can be estimated. Then measuring [[V]] confirms whether source, setup, and detector work as expected.

This application also shows that two lasers of the same color may behave differently. Color fixes a spectral region, but linewidth and phase stability determine interferometric usefulness.

In metrology, this criterion prevents choosing a source by nominal power when the real requirement is preserving phase over long arms or slow scans.

Dominant variable: [[L_c]] fixes the approximate maximum acceptable path mismatch.
Validity limit: multimode or unstable lasers require analysis of spectrum, noise, and longitudinal modes.

## 3. Optical coherence tomography

In optical coherence tomography, a short-coherence source selects depths inside tissue. Only light returning with optical path similar to the reference arm interferes visibly. Limited coherence becomes axial resolution.

This application reverses the classroom intuition. Maximizing [[L_c]] is not always desirable. If coherence were too long, reflections from many depths would mix. The design seeks a coherence window matched to the layer thickness to be distinguished.

The physician or engineer then interprets coherence as path selection. A signal appears when the reference path matches an internal reflection within the coherence window of the source.

Axial resolution improves when that window is narrow, provided enough light remains to measure contrast with acceptable noise.

Dominant variable: [[L_c]] controls the depth window capable of producing interferometric signal.
Validity limit: dispersive tissue, biological motion, and detector noise require extended models.

## 4. Holography and phase recording

Holography requires the reference beam and the beam from the object to maintain a stable phase relation during recording. If temporal or spatial coherence is insufficient, holographic fringes degrade and reconstruction loses detail.

Coherence is not a technical luxury here, but the condition for recording phase information. [[V]] acts as a quality indicator of the pattern: high-contrast fringes allow cleaner reconstructions; washed-out fringes produce images with less useful information.

Holographic setups therefore require high mechanical stability. A small motion during exposure can shift fringes and reduce recorded information even if the source is suitable.

Temporal coherence allows phase recording, but spatial stability of object and plate decides whether that phase is written usefully.

Dominant variable: [[V]] measures the experimental quality of fringe recording.
Validity limit: vibrations, object motion, and source extension may dominate over temporal coherence.

## 5. Spectral filters in light sources

A broad-spectrum lamp usually has short temporal coherence. Adding a narrow filter reduces spectral width and increases coherence scale, although it also lowers available intensity. This tradeoff appears in interference, microscopy, and optical metrology.

The application shows why brightness and coherence are different design decisions. Filtering can make previously washed-out fringes visible, but it may require a more sensitive detector or longer exposure time. The physical reading compares [[L_c]], [[Delta_L]], and [[V]].

In teaching, this application is especially clear: narrowing the filter improves contrast but reduces luminous flux. The learner sees that improving coherence does not mean increasing the whole signal, but better ordering the phase reaching the detector.

In a real laboratory, the compromise is chosen from detector sensitivity, available time, and the minimum contrast needed to distinguish the pattern.

This is why coherence specifications are written together with exposure conditions, not as isolated source labels.

Dominant variable: [[tau_c]] increases when the source becomes spectrally narrower.
Validity limit: if the filter introduces aberrations, background, or excessive signal loss, improved coherence does not guarantee a useful pattern.
`;export{e as default};
