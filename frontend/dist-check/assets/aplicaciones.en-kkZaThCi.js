const e=`## 1. Diagnosing waves on a string

On a laboratory string, the wave concept separates what is seen from what is measured. A colored mark shows [[y]] and [[A]], while the separation between crests shows [[lambda]]. If the number of crests passing per second is counted, [[f]] is obtained and [[v]] can be estimated.

Dominant variable: [[v]], because it summarizes pattern advance along the string.
Validity limit: fails if tension changes during the experiment or if amplitude is so large that the string no longer responds linearly.

The practical reading is not to follow one particle as if it were the whole wave. A point is marked to study local oscillation, and crests are followed to study propagation. This double reading prevents mistakes from the first setup.

A robust practice is to record the string and read two things separately: how far the mark rises and how long a crest takes to reach another position. The first reading belongs to [[y]] and [[A]]; the second belongs to [[v]]. If both readings are mixed, the student concludes that the mark travels with the crest, which is exactly the confusion this leaf is meant to correct.

## 2. Sound in air

Sound is a longitudinal mechanical wave. The disturbance can be read as pressure variation or local molecular displacement around an average position. What reaches the ear is not a mass of air traveling from the source, but a propagated disturbance.

Dominant variable: [[f]], because it is related to perceived pitch.
Validity limit: the simple model fails for extremely intense sounds, shocks, or media with strong temperature variations.

In an everyday estimate, a 440 Hz tone repeats 440 cycles each second. If the speed of sound is known, wavelength can be estimated. The application shows that frequency, wavelength, and speed are not interchangeable words.

The real usefulness appears when sounds are compared in the same air. If temperature does not change much, propagation speed remains approximately fixed and an increase in [[f]] implies a smaller [[lambda]]. Pitch changes because of temporal repetition, not because air molecules travel from the loudspeaker to the ear.

## 3. Water waves

On the water surface, a floating leaf helps visualize the difference between local motion and propagation. The leaf moves up and down while the crest advances. This observation turns an abstract idea into a direct physical reading.

Dominant variable: [[A]], because it measures the maximum local height of the surface disturbance.
Validity limit: in large breaking waves, strong currents, or appreciable drift, the leaf may have net transport and the elementary model is no longer sufficient.

The application is useful for introducing transported energy without claiming that all the water travels with the wave. The student learns that the pattern can travel much farther than each material point.

In open water there may be drift, wind, or current, so the leaf may not return exactly to the same place. Even then, the introductory model remains useful if it is stated that it describes the oscillatory part. The physical decision is to separate average motion from wave disturbance.

## 4. Telecommunication signals

An electrical or optical signal can be modeled as a disturbance that changes with time and propagates through a cable, a fiber, or space. Although the physical support differs, the language of amplitude, frequency, and speed still organizes the reading.

Dominant variable: [[f]], because it determines the time scale of the signal and conditions bandwidth.
Validity limit: the introductory model fails if there is dispersion, strong attenuation, non-negligible noise, or nonlinear channel response.

In this application, the wave is not used only to draw crests. It is used to encode information. Understanding [[A]], [[f]], and [[v]] makes it possible to distinguish signal size, rate of variation, and propagation delay.

For example, two signals can have the same amplitude but different frequency, or the same frequency but different arrival delay. The wave concept names those differences before advanced electronics is introduced. The dominant quantity depends on the question: signal level, symbol rate, or propagation time.

## 5. Reading wave graphs

Many textbook graphs show [[y]] versus [[x]] at a fixed instant, or [[y]] versus [[t]] at a fixed position. The wave concept allows one to read what information each graph contains and what information it does not contain.

Dominant variable: [[y]], because it is the quantity represented as local disturbance.
Validity limit: one spatial graph is not enough to obtain [[f]] if temporal evolution is unknown, and one temporal graph is not enough to obtain [[lambda]] if spatial structure is unknown.

The application prevents a very common confusion: measuring period on a spatial graph or wavelength on a temporal graph. Each axis must be interpreted before quantities are extracted.

If the graph is [[y]] versus [[x]], [[A]] can be read and, if spatial repetition exists, [[lambda]] can be read. If the graph is [[y]] versus [[t]], [[A]] and [[T]] can be read. To obtain [[v]], both readings must be connected or extra information must be available. This rule turns graphs into measurement tools, not only drawings.

Taken together, these applications show that the wave concept is a reading tool. It decides whether a datum belongs to local state, spatial repetition, temporal repetition, or pattern advance. That decision is the basis for using formulas without losing physical meaning.
`;export{e as default};
