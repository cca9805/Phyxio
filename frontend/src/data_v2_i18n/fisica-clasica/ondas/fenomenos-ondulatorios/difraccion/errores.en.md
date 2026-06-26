# Errors in diffraction

## Conceptual errors

### Error 1: Confusing diffraction with reflection or refraction

**Why it seems correct**

The student observes that light changes direction when encountering an obstacle, similar to how it changes when reflecting off a mirror or refracting when changing medium. They may think that diffraction is simply another type of direction change.

**Why it is incorrect**

Reflection changes the direction of waves that bounce off a surface. Refraction changes direction due to speed change when entering another medium. Diffraction requires neither a reflective surface nor a change of medium: the wave curves and expands because it reaches an edge, not because it bounces or refracts. The physical cause is completely different: superposition of secondary wavelets instead of incidence laws or speed change.

**Detection signal**

The student describes diffraction as "the wave bounces off the edge" or "light refracts when passing through the slit", using reflection or refraction terminology to explain the diffraction pattern.

**Conceptual correction**

Diffraction occurs because each point of the wavefront passing through the aperture emits secondary wavelets. These wavelets add in some directions (maxima) and cancel in others (minima). There is no bouncing or medium change: it is superposition of waves coming from the same incident front.

**Mini-example of contrast**

A water wave encountering a rock reflects (bouncing) and also diffracts (curving around). The reflected part returns; the diffracted part advances in new directions without having bounced. Two distinct phenomena, distinct causes, observable simultaneously.

### Error 2: Thinking that diffraction only occurs in small apertures

**Why it seems correct**

Didactic examples typically use narrow slits because they produce broad, visible patterns. The student may generalize that only microscopic apertures produce diffraction.

**Why it is incorrect**

Diffraction occurs with any aperture, but the angular scale of the pattern depends on the ratio between [[lambda]] and aperture size. Large apertures also produce diffraction, but the angles are so small that the pattern looks like a sharp shadow. Diffraction is universal: every wave that encounters an edge diffracts, regardless of scale.

**Detection signal**

The student claims that "wide slits do not produce diffraction" or asks "why don't we see diffraction when passing through a door?"

**Conceptual correction**

All apertures produce diffraction, but the angular spread is inversely proportional to width. A 1-meter slit with visible light produces a pattern of milliradians (fractions of a degree), indistinguishable from a geometric shadow. Increase the wavelength to meters (radio waves) and the same 1-meter aperture will produce clearly observable diffraction.

**Mini-example of contrast**

The edges of a building block radio waves ([[lambda]] of meters) less effectively than visible light ([[lambda]] of micrometers). That is why you can receive AM radio inside buildings even without line of sight to the antenna: radio waves diffract around buildings. Diffraction is always present, only its relative importance depends on the ratio between [[lambda]] and size.

## Model errors

### Error 3: Applying the Fraunhofer model in the near field

**Why it seems correct**

The Fraunhofer model has simple formulas and is the most studied. The student may assume it applies to any aperture and screen configuration.

**Why it is incorrect**

The Fraunhofer model assumes far field: the screen must be at a distance much greater than the aperture width. In the near field (screen close to the aperture), the pattern is different: fringes may not be straight, minima are not at positions given by the simple formula, and intensity varies in a complex way. Applying the Fraunhofer formula near the aperture produces incorrect predictions.

**Detection signal**

The student calculates minimum positions with the linear approximation when the screen is only a few centimeters from the slit, or is surprised because the observed pattern does not match theoretical predictions.

**Conceptual correction**

The Fraunhofer model requires L >> a (typically L > 10a). If the screen is close, the Fresnel model (near field) should be used, which considers the curvature of the wavefronts. The transition between models depends on the geometric relationship, not on the nature of the wave.

**Mini-example of contrast**

At several centimeters from a very narrow slit, the pattern may follow Fraunhofer behavior. At a much shorter distance from the same slit, the pattern is different: the central maximum is more concentrated and minima do not appear exactly where the linear approximation predicts. The physics is the same, but the mathematical approximation ceases to be valid.

## Mathematical errors

### Error 4: Confusing angles in degrees with radians

**Why it seems correct**

Calculators and software can work in degrees or radians. The student may enter 30 degrees thinking the calculation will use radians, or vice versa.

**Why it is incorrect**

Diffraction formulas use trigonometric functions where the argument is an angle. If you mix degrees and radians, the results are numerically incorrect. For example, the sine of 30 degrees is 0.5, but the sine of 30 radians is approximately -0.988. An error by a factor of 57 (the ratio between radians and degrees) is huge and destroys calculations.

**Detection signal**

Angle results that are absurd (negative when they should be positive, greater than 1 for sines, etc.) or screen positions that differ by orders of magnitude from what is expected.

**Conceptual correction**

In physics, angles in formulas without units are always radians. Convert explicitly: degrees to radians by multiplying by pi/180. If your calculator is in degree mode, entering angles in numeric radians (e.g.: 0.5 radians) will produce incorrect results.

**Mini-example of contrast**

An angle of 1 degree is approximately 0.017 radians. For small angles, sine and tangent are approximately equal to the angle (in radians). But sine of 1 degree is 0.017, while sine of 1 radian is 0.84. Using 1 degree as if it were radians introduces an error by a factor of 57.

### Error 5: Using the zero order as the first minimum

**Why it seems correct**

The student may think that orders begin at zero, like many indices in science.

**Why it is incorrect**

In the minima condition, using the zero order corresponds to the central maximum, not a minimum. The minima begin at the first lateral order on each side of the center. Using the zero order to calculate a minimum gives the bright center, not a dark fringe.

**Detection signal**

The student predicts a minimum at the center of the pattern, or claims that the central maximum is "the minimum of order zero".

**Conceptual correction**

Using the zero order in the diffraction minima condition leads to the central angle. At the center all wavelets arrive in phase, producing maximum constructive interference. The minima appear at lateral orders, where the path difference between edges allows complete cancellation.

**Mini-example of contrast**

In a slit, the center is the brightest point because the entire wave arrives there without phase difference. The dark points are to the sides, where contributions from different parts of the slit cancel. The zero order corresponds to the bright center; the first lateral order marks the first dark points on each side.

## Interpretation errors

### Error 6: Interpreting the central maximum as a minimum

**Why it seems correct**

The student may look at the pattern and think the wide central fringe is a "transition zone" between sides, or may confuse the terminology.

**Why it is incorrect**

The center of the diffraction pattern is always the point of maximum intensity. All secondary wavelets arrive there in phase (zero path difference from all points of the aperture), adding constructively. The minima are to the sides, where contributions cancel partially.

**Detection signal**

The student describes the pattern as "dark in the center with bright fringes on the sides" or incorrectly identifies the lateral minima as maxima.

**Conceptual correction**

The single-slit diffraction pattern has a wide, bright central maximum, flanked by minima (dark zones) and then weaker secondary maxima. The intensity decreases monotonically from the center toward the first minima. The intensity distribution has its maximum at the center (zero angle) and follows the function (sine over argument) squared.

**Mini-example of contrast**

If you cover everything except a thin slit and illuminate with a laser, you will see a bright fringe at the center of the screen, not a dark spot. The dark fringes appear at some distance from the center, not at the center itself.

## Quick self-control rule

**Mandatory dimensional verification**: Before accepting any angle or position result:

- Lambda and aperture width must be in the same units (both meters or both nanometers) before calculating their ratio.
- The sine argument must be dimensionless. If it has units, check conversions.
- The screen position must be in meters if L is in meters.

**Order of magnitude verification**:

- For visible light and narrow laboratory slits, the angle of the first minimum is usually a few milliradians.
- If you get diffraction angles of tens of degrees for millimeter slits, check units: you probably used microns as millimeters or nanometers as meters.
- If you get angles greater than 90 degrees, the calculation is physically impossible: check that the product of order and wavelength does not exceed the aperture width.

**Basic physical verification**:

- The central maximum must be at the center (zero angle).
- The first minima must be symmetric on both sides.
- The separation between consecutive orders must be approximately constant in linear position when the small-angle approximation is valid.
- Intensity must decrease for high orders (secondary maxima progressively weaker).
