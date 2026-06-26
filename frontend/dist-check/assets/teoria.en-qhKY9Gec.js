const e=`# Magnetic Flux

## Conceptual context

**Magnetic flux** turns a geometric idea into a physical quantity: field strength alone is not enough, because the crossed area and its orientation also matter. That is why [[Phi_B]] connects magnetic field, area, and direction in one reading.

This leaf belongs to electromagnetic induction because Faraday's law responds not merely to the presence of field, but to **flux change**. Understanding [[Phi_B]] explains why a rotating coil, an approaching magnet, or a deforming surface can produce electrical effects.

## 🟢 Essential level

Imagine a window crossed by slanting rain. If the window faces the rain, much water enters; if it is turned nearly parallel to the rain, very little enters. Magnetic flux works in a similar way: it measures how much field crosses a surface, not merely whether field exists nearby.

The central quantity is [[Phi_B]]. It grows when [[B]] increases, when [[A]] increases, or when the surface is better oriented toward the field. Orientation is summarized by [[cos_theta]], which distinguishes frontal crossing, oblique crossing, and tangent field.

The essential reading is to separate **field presence** from **effective crossing** through the surface. That separation prevents treating any nearby field as already producing relevant flux.

> [!NOTE]
> A strong field can produce little flux if it does not cross the surface. The key word is **crossing**, not simple presence.

## 🔵 Formal level

For a flat surface in a uniform field, flux combines three factors: field magnitude [[B]], effective area [[A]], and orientation factor [[cos_theta]]. The declarative relation for the leaf is:

{{f:flujo_uniforme}}

The same reading can be separated into a normal component of the field. This form is useful because it shows that the tangent part of [[B]] does not contribute to [[Phi_B]]:

{{f:componente_normal}}

When the surface is oriented for positive perpendicular crossing, the orientation factor takes its maximum value and a reference scale appears:

{{f:flujo_maximo}}

That scale does not always equal the real flux. It helps identify whether flux is small because of weak field, reduced area, or poor orientation. In induction problems, the decisive quantity is not only the value of [[Phi_B]], but the difference between two states:

{{f:variacion_flujo}}

The sign of [[DeltaPhi]] keeps physical information: it tells whether flux increases or decreases relative to the chosen normal. That information prepares the reading of Lenz's law.

> [!NOTE]
> The four relations are not independent recipes. [[Phi_max]] sets the scale, [[B_perp]] translates orientation, [[Phi_B]] gives the real coupling, and [[DeltaPhi]] compares states. This order prevents confusing large flux with flux change.

For calculations, this means choosing the target first. A problem about coupling asks for [[Phi_B]], while a problem about induction usually asks for [[DeltaPhi]].

## 🔴 Structural level

Magnetic flux organizes three layers of the problem. The first is the **local scale** of the field, represented by [[B]]. The second is the **geometric scale**, represented by [[A]]. The third is **orientation**, represented by [[cos_theta]] or by component [[B_perp]]. If one layer fails, flux may be small even when the others look large.

This structure explains why [[Phi_B]] is not a property of the field alone or of the surface alone. It is a property of the coupling between both. Changing the surface normal reverses the sign but not the physical setup; it changes the reading convention. Two students may therefore obtain opposite signs if they chose opposite normals, and both results can be consistent if stated clearly.

The uniform form is an approximation. If the field changes significantly from point to point, dividing the surface into small patches and summing local contributions is conceptually more correct. Then [[B_perp]] is no longer one global number and instead depends on position. Flux remains the oriented sum of crossings, but it no longer reduces to a simple product.

> [!WARNING]
> The simple model stops being reliable with nonuniform fields, curved surfaces without a single normal, or areas that change during the process. In those cases, [[Phi_B]] must be read as an accumulation of local contributions.

The structural role of [[DeltaPhi]] is different: it does not measure instantaneous coupling, but **change between states**. A coil may have large [[Phi_B]] and induce nothing if flux remains constant. A small but rapid change, however, may become decisive in the Faraday leaf.

## Deep physical interpretation

Flux is a signed scalar because it condenses an oriented relation. Its sign does not mean that the magnetic field itself is negative; it means that the field crosses the surface along or against the chosen normal. This distinction avoids confusing mathematical convention with physical cause.

Orientation is the subtle point. The real area may be large, but the projected area facing the field may be small. That difference is what [[cos_theta]] represents. In a rotating coil, physical area does not change, but flux changes because the projection changes.

> [!TIP]
> Before calculating, draw the surface normal. If you do not know where the normal points, you cannot interpret the sign of [[Phi_B]].

## Order of magnitude

In a laboratory magnet with [[B]] near 0.1 T and a loop with [[A]] near 0.01 m², maximum flux is around one thousandth of a weber. In Earth's field, with field of tens of microteslas, the same area gives flux thousands of times smaller.

A result of several webers in a small classroom loop is usually absurd unless the field is extremely intense or the area is very large. Checking [[B]], [[A]], and [[cos_theta]] detects the error.

## Personalized resolution method

1. Identify whether the problem asks for [[Phi_B]], [[B_perp]], [[Phi_max]], or [[DeltaPhi]].
2. Draw the surface and mark a normal.
3. Decide whether the field is uniform; if it is not, do not use the simple model without justification.
4. Use [[B]], [[A]], and [[cos_theta]] only if they describe the same physical region.
5. If there are two states, reason through [[Phi_i]] and [[Phi_f]] before interpreting [[DeltaPhi]].

This order prevents the common mistake of substituting numbers before understanding orientation. In magnetic flux, the drawing is not decorative: it defines the sign.

## Special cases and extended example

The first limiting case is a field tangent to the surface. Even if [[B]] is large and [[A]] is appreciable, [[B_perp]] is zero and flux is also zero. This explains why orienting a coil can suppress or maximize magnetic coupling without changing the magnet.

The second limiting case is reversing the normal. The absolute value of [[Phi_B]] does not change, but the sign reverses. This does not alter the energy of the setup; it alters the convention Faraday's law will use to assign the sign of induced emf.

Extended example: a loop of area 0.020 m² is placed in a field of 0.30 T. With perpendicular crossing, [[Phi_max]] is 0.006 Wb. If the loop rotates until the orientation factor is 0.5, the real flux becomes 0.003 Wb. If it then becomes tangent, [[Phi_f]] is zero and [[DeltaPhi]] has magnitude 0.003 Wb relative to the previous state.

## Real student questions

**Is flux the same as magnetic field?** No. [[B]] describes local intensity; [[Phi_B]] combines field, area, and orientation.

**Why is there a sign if area is not negative?** Because the surface has a chosen normal. The field may cross with that normal or against it.

**Does a larger surface always give more flux?** Only if the field crosses that surface with effective orientation. If the field is tangent, increasing [[A]] does not increase [[Phi_B]].

**Why does [[DeltaPhi]] matter?** Because electromagnetic induction responds to flux change. Constant flux, even when large, is not enough to produce induction.

## Cross-cutting connections and study paths

This leaf prepares [Faraday's law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), where [[DeltaPhi]] connects to induced emf. It also connects to [Lenz's law](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz), because the sign of flux change sets the induced opposition.

The natural route is to study magnetic field first, then magnetic flux, then Faraday, and finally applications such as generators and transformers. This avoids memorizing formulas without understanding the geometry behind them.

## Final synthesis

Magnetic flux [[Phi_B]] measures oriented coupling between field and surface. It depends on [[B]], [[A]], and [[cos_theta]], is interpreted through [[B_perp]], and is compared with [[Phi_max]] to read orientation. In induction, the decisive quantity is [[DeltaPhi]], because electrical effects come from flux change.
`;export{e as default};
