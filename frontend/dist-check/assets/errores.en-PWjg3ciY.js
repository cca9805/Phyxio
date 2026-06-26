const e=`## Conceptual errors

### Error 1: Believing a converging lens always forms a real image

**Why it seems correct**

The student generalises the common experience of projecting images onto a screen with converging lenses. Since most textbook problems use distant objects, the image always turns out real, and the student concludes this is an intrinsic property of converging lenses.

**Why it is incorrect**

When the object is placed between the lens and the focus ([[d_o]] less than [[f]]), the thin lens equation yields negative [[d_i]]. The refracted rays diverge and only their backward extensions intersect: the image is virtual. The converging lens acts as a magnifying glass in this configuration.

**Detection signal**

The student obtains negative [[d_i]] and discards it as a calculation error or manually reverses the sign to force a real image.

**Conceptual correction**

A converging lens can form either a real or virtual image depending on the object position relative to the focus. The lens alone does not determine the image type; the relationship between [[d_o]] and [[f]] is decisive.

**Contrast mini-example**

A magnifying glass with 5 cm focal length and an insect at 3 cm: [[d_i]] is minus 7.5 cm (magnified virtual image). The same insect at 10 cm: [[d_i]] is 10 cm (inverted real image). Same lens, opposite outcome depending on position.

### Error 2: Confusing focal length with image distance

**Why it seems correct**

Both quantities are measured in metres from the lens and appear on the same axis in many diagrams. The student memorises that the image forms at the focus and applies this rule universally.

**Why it is incorrect**

The image only forms at the focus when the object is at infinity. For any other object position, [[d_i]] differs from [[f]]. The lens equation shows that [[d_i]] depends jointly on [[d_o]] and [[f]].

**Detection signal**

The student directly substitutes [[d_i]] with [[f]] without using the lens equation, obtaining incorrect magnifications.

**Conceptual correction**

The focus is the point where rays parallel to the axis converge. The image of a finite-distance object forms at a distance [[d_i]] that depends on the relationship between [[d_o]] and [[f]] according to the thin lens equation.

**Contrast mini-example**

Lens with 10 cm focal length, object at 20 cm: [[d_i]] is 20 cm, not 10 cm. If the student used [[d_i]] equal to [[f]], they predict the image at 10 cm and obtain an erroneous magnification of 0.5 instead of the correct minus 1.

## Model errors

### Error 3: Applying the thin lens equation to a thick lens without correction

**Why it seems correct**

The thin lens equation is simple and works well in most textbook problems. The student applies it to any lens without checking whether the thickness is negligible.

**Why it is incorrect**

In thick lenses, the principal planes do not coincide with the geometric centre. Distances [[d_o]] and [[d_i]] must be measured from the principal planes, not from the surface. Using the equation without this correction introduces a systematic error proportional to the thickness.

**Detection signal**

The experimentally measured image appears displaced from the theoretical prediction by an amount comparable to the lens thickness.

**Conceptual correction**

The thin lens model is a valid approximation only when the thickness is much less than [[f]]. For thick lenses, one must locate the principal planes and measure distances from them.

**Contrast mini-example**

Lens with 15 mm thickness and 30 mm focal length: thickness is half the focal length. The thin lens prediction gives [[d_i]] of 60 mm for an object at 60 mm. The actual measurement shows the image at roughly 53 mm: a 12 % error from ignoring thickness.

## Mathematical errors

### Error 4: Reversing the sign convention for the radii of curvature

**Why it seems correct**

Different textbooks use different conventions for [[R1]] and [[R2]]. The student memorises a rule from one book and applies it with the formula from another, obtaining focal lengths with the wrong sign.

**Why it is incorrect**

The lensmaker's equation requires a consistent sign convention. In the standard convention, [[R1]] is positive if the centre of curvature lies on the image side. Mixing conventions reverses the sign of [[f]] and predicts a diverging lens where there is a converging one, or vice versa.

**Detection signal**

The student obtains a negative focal length for a biconvex lens (which must be converging) or a positive one for a biconcave lens.

**Conceptual correction**

Before using the lensmaker's equation, verify the sign convention of the reference text. In the standard convention: for a biconvex lens, [[R1]] is positive and [[R2]] is negative.

**Contrast mini-example**

Biconvex lens with 20 cm radii, [[n]] of 1.5. With correct signs ([[R1]] positive, [[R2]] negative): focal length of 20 cm (converging). With inverted signs: focal length of minus 20 cm (diverging). The sign error makes the prediction physically absurd.

## Interpretation errors

### Error 5: Interpreting negative magnification as a smaller image

**Why it seems correct**

In everyday life, negative is associated with less. The student reads negative [[m]] and concludes the image is smaller than the object.

**Why it is incorrect**

The sign of [[m]] indicates orientation, not size. An [[m]] of minus 3 means an image three times larger and inverted. Size is given by the magnitude of [[m]]; the sign indicates whether the image is upright or inverted.

**Detection signal**

The student describes an image with [[m]] of minus 2 as reduced when it is actually magnified to twice the size and inverted.

**Conceptual correction**

Lateral magnification [[m]] encodes two pieces of information: the magnitude gives the scale factor (greater than 1 enlarges, less than 1 reduces) and the sign gives the orientation (positive upright, negative inverted). Both readings must be made separately.

**Contrast mini-example**

Object at 15 cm from a lens with 10 cm focal length: [[d_i]] is 30 cm, [[m]] is minus 2. The student says the image is reduced. Correct result: image twice as large and inverted. If [[m]] were minus 0.5, then it would indeed be reduced (to half size) and inverted.

## Quick self-control rule

Before accepting a lens result, verify these three points:

1. **Sign coherence between [[d_i]] and [[m]]**: if [[d_i]] is positive, [[m]] must be negative (inverted real image). If [[d_i]] is negative, [[m]] must be positive (upright virtual image). An opposite combination indicates an error.

2. **Lens type coherence**: if [[f]] is negative (diverging lens) and positive [[d_i]] is obtained with a real object, there is an error. A diverging lens with a real object always gives negative [[d_i]].

3. **Plausibility of the magnitude of [[m]]**: for a single thin lens, magnitudes of [[m]] greater than 10 are unusual and suggest the object is too close to the focus, a zone where the model is unstable.
`;export{e as default};
