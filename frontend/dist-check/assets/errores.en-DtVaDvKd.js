const e=`## Conceptual Errors

### Error 1: Confusing the slit width a with the slit separation d in Young's experiment

**Why it seems correct**

Both parameters represent characteristic physical distances of apertures in physical optics experiments. The student associates "light passing through slits" with a single generic interference formula and concludes that the slit width [[a]] is identical to the separation between two slits, applying Young's double-slit interference equations interchangeably.

**Why it is incorrect**

The slit width [[a]] describes the size of a single simple aperture and governs the individual diffraction phenomenon (internal phase cancellation). The slit separation represents the geometric center-to-center distance between two distinct apertures and governs the mutual interference pattern. Confusing the two parameters causes an attempt to model a single wide slit as if it were two narrow slits, which completely alters the physics of the pattern and the positions of light and darkness on the screen.

**Detection signal**

The student attempts to solve a single-slit problem using equations containing the slit separation. In their reasoning, they state that "diffraction from a single slit is identical to the fringe pattern of Young's experiment."

**Conceptual correction**

Always distinguish that for a single slit, the key variable is [[a]], and the diffraction minima occur at integer multiples of the wavelength over [[a]]. In Young's experiment, the constructive interference maxima depend on the separation between the slits, and the resulting pattern is modulated by the individual diffraction of each slit.

**Contrast mini-example**

If we illuminate a single slit with a width of one-tenth of a millimeter, the pattern shows a large bright central band. If instead we place two very narrow slits separated by one-tenth of a millimeter, the bright central band is subdivided into multiple thin bright and dark lines very close together due to double-slit interference.

---

### Error 2: Omitting the conversion of wavelength from nanometers to meters

**Why it seems correct**

Wavelengths of visible light are universally tabulated and read in nanometers (for example, six hundred fifty nanometers for red light). When performing direct calculations on a calculator, the student tends to multiply or divide the given numbers directly from the problem statement without realizing that the other spatial variables are in millimeters or meters.

**Why it is incorrect**

The algebraic formulas of this leaf require absolute dimensional consistency in International System (SI) units. If the wavelength is entered directly in nanometers without converting it by multiplying by ten to the power of minus nine, while the slit width is entered in meters, the resulting angle [[theta]] or width [[w]] will be multiplied by an erroneous factor of one billion, producing a physically absurd result lacking any scale coherence.

**Detection signal**

The student obtains a central maximum width [[w]] on the order of kilometers instead of millimeters, or an angle [[theta]] that exceeds the admissible physical range by several orders of magnitude. It is also detected if the wavelength is written in the calculations as a large integer without an associated negative power of ten.

**Conceptual correction**

Before entering the wavelength into any equation, perform the mandatory conversion by replacing the word nanometers with the multiplying factor of ten to the power of minus nine meters. For example, five hundred nanometers is written as five times ten to the power of minus seven meters.

**Contrast mini-example**

For green light of five hundred nanometers, a slit width of one-tenth of a millimeter, and a screen at one meter: operating without converting yields a central maximum width of ten meters, which would fill an entire room. Converting correctly yields a central maximum width of ten millimeters, a value perfectly measurable on a laboratory bench.

## Model Errors

### Error 3: Assuming the paraxial linear approximation is valid for sub-micrometer slits

**Why it seems correct**

The simplified formula for the central maximum width [[w]] is linear and extremely easy to apply. The student generalizes it as the ultimate law of this leaf and applies it to any slit, including extremely small apertures whose widths approach or are smaller than the wavelength of the light itself.

**Why it is incorrect**

The linear relationship assumes that the diffraction angle is small enough to approximate its sine and tangent to the angle itself in radians. If the slit width [[a]] is comparable to the wavelength, the actual angle of the first diffraction minimum spreads so wide that it exceeds the paraxial limits. In this non-linear regime, the actual angular deviation is much larger than the paraxial approximation and the projection on the flat screen becomes distorted, causing the approximation to significantly underestimate the actual size of the bright fringe.

**Detection signal**

The student calculates a width [[w]] using the paraxial linear approximation for a slit whose width [[a]] is nearly equal to [[lambda]], obtaining a linear value on the screen that differs noticeably from the actual value obtained using the exact trigonometric tangent of the exact angle.

**Conceptual correction**

Always check that the slit width [[a]] is significantly larger than the wavelength [[lambda]]. If the ratio of the wavelength divided by the slit width is greater than one-tenth, the linear model must be abandoned, and the exact angle must be calculated using the arcsine, then projected onto the flat screen using the trigonometric tangent.

**Contrast mini-example**

For a slit one wavelength wide and a screen at one meter: the linear approximation predicts a central maximum width of two meters. The exact trigonometric calculation shows that the first minimum occurs at ninety degrees, which means the central maximum spreads infinitely outward on the flat screen, having no defined boundaries.

## Mathematical Errors

### Error 4: Confusing the total width of the central maximum with the distance from the center to the first minimum

**Why it seems correct**

In many physics textbooks, the position of the first lateral minimum is analyzed by measuring the distance from the center of the pattern on the screen to the first dark fringe. The student associates "position of the first minimum" with the term "width of the central maximum" and assumes both concepts represent exactly the same spatial segment.

**Why it is incorrect**

The bright central maximum is perfectly symmetric and extends to both sides of the central axis of incidence, bounded by the first upper minimum and the first lower minimum. Therefore, the total width of the central maximum [[w]] is exactly twice the linear distance from the center of the screen to the first lateral minimum. Forgetting this multiplying factor of two is a very common arithmetic slip that halves the actual size of the pattern.

**Detection signal**

The student calculates the position of the first minimum using the product of the wavelength and the screen distance divided by the slit width, and directly presents that number as the total width of the central maximum [[w]].

**Conceptual correction**

Always remember that the diffracted pattern spreads bilaterally. The total width of the bright central maximum [[w]] comprises the total distance between the two lateral dark blocking bands, which mathematically equals twice the center-to-minimum distance.

**Contrast mini-example**

If the measured distance from the center of the screen to the first dark minimum is twelve millimeters, the width of the central bright band on the screen is twenty-four millimeters, not twelve millimeters.

## Interpretation Errors

### Error 5: Confusing radians with degrees when calculating or interpreting the angle [[theta]]

**Why it seems correct**

The student is used to measuring and visualizing all physical angles in degrees using protractors in the laboratory. Upon obtaining a very small angle value from the fundamental relationship, they intuitively assume the calculator's result is in degrees and try to look for that visual deviation in the setup.

**Why it is incorrect**

The mathematical relationship linking the wavelength and the slit width yields the diffraction angle expressed strictly in radians. If a student interprets a result of five-hundredths as degrees, they will assume an almost imperceptible angular deviation. However, five-hundredths of a radián equal nearly three degrees, an angular deviation perfectly visible in a real laboratory.

**Detection signal**

The student attempts to calculate the lateral position on the screen by applying trigonometric functions on their calculator set to degree mode using the numerical value of the angle in radians without performing the conversion, or labels an angle in radians with the degree symbol in reports.

**Conceptual correction**

The angle [[theta]] calculated from the ratio of [[lambda]] to [[a]] is a pure quantity in radians. If it is desired to express it in degrees for experimental visualization, the value must be multiplied by one hundred eighty and divided by pi.

**Contrast mini-example**

A calculation yields an angle of eight-hundredths. If interpreted erroneously as eight-hundredths of a degree, the deviation on the screen at two meters would barely be three-tenths of a millimeter. In physical reality, the angle is eight-hundredths of a radian, which produces an actual deviation of sixteen centimeters on the screen, a huge spatial difference.

## Quick Self-Control Rule

Before finalizing any single-slit diffraction problem, verify that the following four physical self-control conditions are satisfied:

1. The wavelength [[lambda]] must be in meters before operating. Its value for visible light must be on the order of magnitude of ten to the power of minus seven meters.
2. The central maximum width [[w]] must be exactly twice the distance separating the center of the screen from the lateral first dark minimum of darkness.
3. The first minimum angle [[theta]] must be expressed in radians, and its value must typically be less than one-tenth of a radian for standard paraxial configurations.
4. The slit width [[a]] must be strictly greater than the wavelength of the light used. If the calculation yields a slit width less than or equal to [[lambda]], review the feasibility of the first minimum in the spectrum.
`;export{e as default};
