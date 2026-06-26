# Applications: Newton's First Law (Inertia)

## 1. Urban transport under low acceleration

### Fenómeno / Phenomenon

When a bus keeps nearly constant speed on a straight road segment, passengers feel stable motion because the whole system operates near dynamic equilibrium.

### Qué se conserva / qué cambia

The global motion state is conserved: [[v]] stays near a mean value. Small local vibrations change, but no sustained net dynamic change is present.

### Magnitudes dominantes

The key reading is [[F_net]] close to zero in time average. From that reading, [[a]] is treated as near zero and [[v]] is interpreted as nearly constant.

### Escala típica

On stable segments, longitudinal acceleration fluctuations of a few hundredths of m/s^2 are often treated as operational noise. Mean speed typically lies between 8 m/s and 15 m/s depending on route.

Dominant variable: [[F_net]] as the operational equilibrium indicator during cruise.

Validity limit: inertial reading is no longer sufficient when sustained acceleration emerges outside declared tolerance.

### Cierre operativo

This application shows first law as a practical tool for ride comfort, steady energy demand, and predictable driving control.

## 2. Automated logistics platforms

### Fenómeno / Phenomenon

Warehouse autonomous carts run through cruise phases where motor action mostly compensates small losses, keeping the state close to inertial behavior.

### Qué se conserva / qué cambia

Uniform-motion condition is conserved during each cruise segment. Actuator states change during start and braking transitions, which are outside pure first-law domain.

### Magnitudes dominantes

Control architecture tracks effective [[F_net]] and limits disturbances to keep [[a]] low. The operational goal is holding [[v]] inside a narrow band for scheduling reliability.

### Escala típica

Typical internal speeds are between 1 m/s and 2 m/s, with relative variation targets below 3 percent per cycle. Larger drift triggers sensor recalibration or wheel-friction review.

Dominant variable: [[v]] because schedule reliability depends on controlled speed-band stability.

Validity limit: once cumulative drift exceeds control threshold over consecutive cycles.

### Cierre operativo

First law acts here as a flow-stability criterion. If dynamic equilibrium is maintained in cruise, safety and throughput improve.

## 3. Educational dynamics laboratory tests

### Fenómeno / Phenomenon

In air-track labs, students compare push and no-push intervals to verify that uniform motion persists when external resultant is negligible.

### Qué se conserva / qué cambia

Kinematic state is conserved in near-zero-resultant intervals. State changes only when an external interaction breaks that balance.

### Magnitudes dominantes

[[F_net]], [[a]], and [[v]] are measured with digital acquisition. The core learning target is correlating these three readings as one causal chain.

### Escala típica

Forces of a few hundredths of N and accelerations of a few hundredths of m/s^2 are common in this setup. Velocity can remain stable for several seconds in low-dissipation windows.

Dominant variable: [[a]] as the discriminator between real dynamic change and measurement noise.

Validity limit: when the mismatch between inertial prediction and measured trend remains persistent.

### Cierre operativo

The application turns a theoretical statement into reproducible evidence and trains tolerance-aware interpretation.

## 4. Inertial navigation and prediction windows

### Fenómeno / Phenomenon

Vehicle navigation algorithms project motion state over short intervals under low-net-perturbation assumptions, especially between external sensor updates.

### Qué se conserva / qué cambia

[[v]] prediction is conserved over short windows when estimated [[F_net]] stays low. Model confidence changes as time uncertainty accumulates.

### Magnitudes dominantes

Internal filter dynamics use estimated [[a]] to update [[v]]. If acceleration remains zero-compatible, inertial extrapolation dominates.

### Escala típica

Prediction windows from 0.1 s to 2 s can maintain low error in well-calibrated scenarios. Beyond that range, accumulated drift requires stronger external correction.

Dominant variable: [[v]] propagated by the estimator between external updates.

Validity limit: uncertainty growth that makes pure inertial extrapolation non-trustworthy.

### Cierre operativo

This use case shows first law as a computational criterion for when state propagation remains trustworthy.

## 5. Engineering synthesis and model-switch criterion

### Fenómeno / Phenomenon

Real systems alternate between near-inertial phases and net-actuated phases. The critical decision is identifying when treating [[F_net]] as zero is no longer valid.

### Qué se conserva / qué cambia

Simple-model usefulness is conserved while [[v]] drift remains below operational threshold. The analysis framework changes when acceleration becomes persistently non-negligible.

### Magnitudes dominantes

[[F_net]] sets the model-switch trigger, [[a]] quantifies deviation, and [[v]] summarizes accumulated observable effect.

### Escala típica

In practical control, model-switch thresholds are defined by safety and accuracy constraints. For example, exceeding a preset acceleration band for several consecutive cycles activates a fuller dynamic controller.

Dominant variable: [[F_net]] because it defines the causal trigger for model transition.

Validity limit: persistent acceleration outside the accepted band, forcing transition to non-equilibrium dynamics.

### Cierre operativo

Final synthesis is methodological: first law does not compete with richer models, it organizes them by indicating when inertial reading is enough and when non-equilibrium dynamics is required.

This final criterion supports transparent decision logs, reproducible audits, and safer real-time control policies across engineering teams.
