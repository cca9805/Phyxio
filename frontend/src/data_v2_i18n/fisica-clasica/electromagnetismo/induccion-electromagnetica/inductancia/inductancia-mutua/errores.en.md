## Conceptual errors


### Error 1: confusing mutual coupling with self-induction

**Why it seems correct**

The wrong analogy appears because both ideas use coils, flux, and induced emf. The student overgeneralizes self-induction and assumes any coil emf must use a self-inductance.

**Why it is incorrect**

In mutual inductance, the cause is current change in another coil. [[inductancia_propia_primaria]] and [[inductancia_propia_secundaria]] describe individual coils; [[inductancia_mutua]] describes magnetic linkage between them.

**Detection signal**

The calculation uses [[inductancia_propia_primaria]] to obtain [[epsilon_2]] even though the statement describes primary current change.

**Conceptual correction**

First identify whether the coil induces itself or receives flux from another coil. If it receives external flux from another coil, the central quantity is [[inductancia_mutua]].

**Contrast mini-example**

Two separated coils may have large [[inductancia_propia_primaria]] and still induce little secondary voltage. The correct result depends on shared flux, not only self-inductance.

## Model errors

**Mini-example of contrast**

Check 1: In Mutual Inductance, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: assuming perfect coupling from proximity

**Why it seems correct**

Spatial perception misleads: if two coils are close, it seems natural to imagine that all field from one crosses the other.

**Why it is incorrect**

The field may spread, close through another path, or cross the secondary with poor orientation. [[coeficiente_de_acoplamiento]] measures that effective fraction and may be small even when visual distance is short.

**Detection signal**

The student treats [[coeficiente_de_acoplamiento]] as maximal without the statement mentioning a common core, alignment, or strong coupling.

**Conceptual correction**

Proximity does not replace flux linkage. Read [[lambda_21]] or estimate [[coeficiente_de_acoplamiento]] before assuming efficient transfer.

**Contrast mini-example**

Two perpendicular coils may be close and share little flux. A more distant coil aligned with a common core may couple better.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: using final current instead of current change

**Why it seems correct**

Magnitude confusion appears because final current is often the most visible number in the statement. The student substitutes it as if large current alone were enough to induce emf.

**Why it is incorrect**

Secondary emf depends on change of [[corriente_fuente]] during [[intervalo_de_tiempo]]. A steady primary current may sustain [[lambda_21]], but it does not produce sustained average emf.

**Detection signal**

The result does not change when transient time changes, or it uses [[corriente_fuente]] where [[cambio_de_corriente_primaria]] is required.

**Conceptual correction**

Before computing [[epsilon_2]], determine how much primary current changes and over what interval that change occurs.

**Contrast mini-example**

A primary with high steady current may have mutual flux without average secondary emf. A smaller current changing rapidly may induce larger emf.

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: denying emf when the secondary is open

**Why it seems correct**

Closed-circuit intuition suggests that without secondary current there is no electrical effect. The student confuses emf with current delivered to a load.

**Why it is incorrect**

[[epsilon_2]] may exist as an induced potential difference even when the secondary circuit does not allow appreciable current.

**Detection signal**

The student discards [[epsilon_2]] only because the secondary is connected to a voltmeter or left open.

**Conceptual correction**

Distinguish induced emf from secondary current. Emf appears from flux change; current requires a closed path and a load.

**Contrast mini-example**

An unloaded transformer may show secondary voltage on a voltmeter. Delivered power is almost zero, but induced emf does not disappear.

## Quick self-control rule

Before substituting data, ask four questions: which coil changes current, which coil receives flux, how strong the coupling is, and how long the change lasts. If the answer uses [[inductancia_propia_primaria]] or [[inductancia_propia_secundaria]] for an emf caused by another coil, self-induction and mutual induction were probably mixed.

Then check units and physical sense. [[intervalo_de_tiempo]] must be in seconds, [[coeficiente_de_acoplamiento]] must behave as a coupling fraction, and the sign of [[epsilon_2]] must express opposition to linked-flux change.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.