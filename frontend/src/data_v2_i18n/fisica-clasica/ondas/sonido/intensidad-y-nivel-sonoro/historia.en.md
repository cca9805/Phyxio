# History of Sound Intensity and Level

## Historical problem

At the beginning of the 20th century, industrialization generated an explosion of noisy machinery affecting the health of millions of workers. However, there was no standardized and quantitative way to measure "noise." The terms used were vague: "very noisy," "unbearable," "deafening." Engineers, doctors, and regulators needed a universal numerical scale that would allow comparing noise levels, establishing legal limits, and evaluating hearing damage.

The problem was twofold. First, the human ear perceives sound logarithmically: a sound with ten times more energy does not sound ten times louder. Second, the audible range of intensities is enormous (from 10⁻¹² to 10² W/m²), making any linear measurement system impractical. The question that had no answer was: how to create a measurement scale that reflects human perception and is manageable for technical instruments?

## Prior conceptual difficulty

The first attempts at quantification used linear scales based on pressure or physical intensity. In 1870, researchers such as Hermann von Helmholtz studied ear physiology, but their measurements were qualitative. The available instruments (primitive microphones, galvanometers) recorded voltages proportional to acoustic pressure, but these values did not correlate with subjective sensation.

The dominant conceptual confusion was treating auditory perception as if it were a linear response, like vision to light. Telephone engineers, led by researchers at Bell Labs, faced the problem of quantifying attenuation in long telephone lines. Signal gain or loss was expressed as a ratio (times more or times less), but these ratios were difficult to handle when multiple amplifiers were chained.

The fundamental intellectual obstacle was the absence of a unit of measurement that compressed the enormous dynamic range of the ear into an additive scale (where adding represents multiplicative combination of intensities). Physicists knew that the ear responded approximately logarithmically, but no international standard existed for this logarithmic scale.

## What changed

The key advance occurred in 1924 at Bell Telephone Laboratories (later Bell Labs), where transmission engineers developed the unit "Bel" in honor of Alexander Graham Bell, the inventor of the telephone. The researchers, led by telecommunications engineers, recognized that base-10 logarithms of power ratios were additive: if one amplifier multiplies power by 10 and another by 100, the total is multiplying by 1000, which in logarithms is 1 + 2 = 3 (Bels).

In 1928, the scale was refined by introducing the decibel (dB), one tenth of a Bel, to provide finer resolution. The International Electrotechnical Commission (IEC) adopted the decibel as the standard unit in 1933. Simultaneously, in 1933-1934, researchers at the American Standards Association (current ANSI) standardized the reference intensity [[I_0]] with value `10^-12 W/m^2`, based on experiments by Fletcher and Munson at Bell Labs determining the average human hearing threshold.

Alexander Graham Bell had already passed away (1922), but his legacy endured. The logarithmic relation between intensity and level became the international standard, unlocking the ability to:
- Specify noise levels in contracts and regulations
- Design audio systems with calculable chained gains
- Evaluate occupational risks with quantitative basis
- Develop universally calibrated sound level meters

## Impact on physics

The introduction of the logarithmic decibel scale transformed multiple fields of physics and engineering. In architectural acoustics, it allowed quantifying auditorium quality through reverberation times expressed in logarithmic relationship. In professional audio, it established recording, mixing, and reproduction level standards (0 dBVU, -20 dBFS) that enable compatibility between equipment from different manufacturers.

In occupational medicine, the creation of the dB scale allowed establishing for the first time legal noise exposure limits based on quantifiable doses. ISO 1999 (1975, subsequently revised) standardized methods for evaluating noise-induced hearing loss using doses as a function of level in dB and exposure time.

The propagation of the logarithmic idea influenced other disciplines. In seismology, Charles Richter adopted a logarithmic scale (1935) to quantify earthquake magnitudes, inspired in part by the success of the decibel scale. In astronomy, the stellar magnitude scale (ancient but refined) is also logarithmic. In chemistry, the pH scale (introduced by Sørensen in 1909, but popularized and refined subsequently) uses logarithms of concentration.

The creation of the sound level meter, the first portable instrument to measure dB directly (1930s-1940s), allowed factory inspectors and urban planners to make data-based decisions, transforming industrial hygiene and acoustic urban planning.

## Connection with modern physics

The decibel scale remains fundamental in contemporary technology. Smartphones include sound level measurement applications using MEMS microphones calibrated in dB. Active noise cancellation (ANC) systems in modern headphones process digital signals where filter gains are specified in dB.

In digital audio, the unit dBFS (decibels relative to full scale) quantifies levels relative to the maximum digital without distortion, being the universal standard in DAWs (Digital Audio Workstations) such as Pro Tools, Logic, and Reaper. Dynamic range compression, essential in modern music, is controlled through thresholds and ratios expressed in dB.

In medical physics, the logarithmic scale is used in imaging: gray levels in digital radiographs are expressed in Hounsfield (a unit logarithmically related to X-ray attenuation), and ultrasound uses logarithmic scales to handle the enormous range of tissue backscatter.

Modern psychoacoustics, with its equal-loudness contours (Fletcher-Munson, refined as ISO 226:2003), continue to use dB as a base, although weighted by frequency (dBA, dBC). Current noise limits in environmental regulations (EU 2002/49/EC, US EPA) are expressed exclusively in dB, showing that this logarithmic unit invented almost a century ago remains the universal language of acoustics.
