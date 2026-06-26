## Ideal model

The ideal model describes a point [[carga_electrica]] moving with [[rapidez]] inside a uniform [[campo_magnetico]]. The interaction is summarized by [[fuerza_magnetica]], whose magnitude depends on orientation through [[s_theta]]. The central simplification is treating the force as perpendicular to motion when entry is perpendicular to the field.

In that case, [[rapidez]] remains ideally constant and the force changes direction. The trajectory is described with [[a_c]] and [[radio_de_trayectoria]], so the magnetic problem becomes a circular-motion problem.

## Hypotheses

- The charge is point-like; if it has extended structure, torques or internal distributions may appear.
- The field is uniform; if it changes during one turn, [[radio_de_trayectoria]] is no longer constant.
- The [[rapidez]] is nonrelativistic; if it becomes too large, effective inertia changes.
- Collisions and drag do not dominate; if they appear, energy and path no longer follow the simple model.
- Circular entry uses perpendicular motion; if a parallel component exists, the trajectory becomes helical.

## Quantitative validity domain

The model is reasonable for laboratory fields between 10^-6 T and several teslas, provided the computed radius is compatible with the size of the region. A practical condition is [[radio_de_trayectoria]] > 1 mm when the detector resolves millimetre-scale paths; below that scale, instrumental geometry may dominate the reading.

It also requires a nonrelativistic order of magnitude for [[rapidez]]. In school or basic laboratory beams, speeds from 10^5 m/s to 10^7 m/s usually allow a first classical estimate.

## Model failure signals

One failure signal is that the observed trace does not keep constant curvature even though the field was assumed uniform. Another signal is that inferred radius changes with position without changes in [[carga_electrica]], [[masa_de_la_particula]], or [[rapidez]]. That points to field gradients, collisions, or unmodeled electric fields.

The model also fails if the calculation predicts large deflection but the experiment shows an almost straight path. Then orientation should be checked, because [[s_theta]] may be small even when [[campo_magnetico]] is strong.

## Extended or alternative model

When to switch to an extended model: if a parallel velocity component exists, use a helical trajectory instead of a plane circle. If the field varies in space, switch to numerical integration of the local vector force.

For high-energy particles, transition to a relativistic model includes the relation between energy, momentum, and curvature. For plasmas, switch to a collective model when interactions among particles are no longer negligible compared with the external action of [[campo_magnetico]].

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Field | Uniform and steady | Variable in space or time |
| Trajectory | Simple circle or helix | Integrated point by point |
| Mathematical cost | Low, direct calculation of [[fuerza_magnetica]] and [[radio_de_trayectoria]] | Higher, requires full initial conditions |
| Recommended use | Estimates and classroom problems | Real detectors, plasmas, and high-energy beams |