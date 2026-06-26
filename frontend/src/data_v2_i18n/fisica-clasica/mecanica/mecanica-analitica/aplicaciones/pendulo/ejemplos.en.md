# Exam-type example

## Problem statement

A mechanics laboratory uses a pendulum to estimate reference timing in an educational experiment. The setup has length [[L]] equal to 1.20 m and gravity [[g]] equal to 9.81 m/s^2. Bob mass [[m]] is 0.40 kg. The pendulum is released from an initial angle [[theta]] of 0.20 rad from stable vertical direction. Compute angular frequency [[omega]], period [[Tper]], and initial gravitational torque [[tau]]. Then interpret which quantities control the system clock and which quantity controls instantaneous restoring action.

## Data

Input data are [[L]], [[g]], [[m]], and [[theta]]. The test is designed for the small-oscillation regime, inextensible string behavior, and low pivot friction. The primary objective is temporal reading, but [[tau]] is included to connect local dynamics with the same physical setup.

Length uncertainty is kept low, and initial angle is fixed by a release guide to reduce dispersion. This allows meaningful comparison between model prediction and measured timing rather than random variation.

## System definition

The system is a one-degree-of-freedom simple pendulum. The generalized coordinate is [[theta]]. Gravity [[g]] and length [[L]] define the temporal scale of motion around lower equilibrium. Mass [[m]] participates in instantaneous torque dynamics and energy balance, but in the ideal model it does not alter period reading for small oscillations.

The exercise separates two analysis layers. Global temporal layer: compute [[omega]] and [[Tper]]. Local dynamic layer: compute [[tau]] for the assigned initial [[theta]]. This separation is intentional to avoid confusing cycle quantities with instantaneous quantities.

## Physical model

Use the simple pendulum model with small-oscillation timing approximation for rhythm and period. In parallel, keep the trigonometric torque expression for local initial-state dynamics. The model includes validity restrictions: moderate amplitude, inextensible string, and non-dominant cycle losses.

This assumption set is physically reasonable because the setup was built for low-amplitude operation and low pivot friction. If measurements showed systematic increase of [[Tper]] with amplitude, or strong cycle decay, the model should be extended.

## Model justification

The choice is not only conventional; it is physically justified for the target question. The problem asks for oscillation timing and initial torque, not long-term high-fidelity simulation with full dissipation details. With moderate [[theta]], linear timing gives sufficient precision for educational laboratory goals. At the same time, keeping angular dependence in [[tau]] preserves real restoring direction at the initial state.

The acceptance criterion is operational: keep the model while repeated runs at similar amplitude show stable period and while per-cycle amplitude loss remains small relative to the experiment objective. Reject the simple linear timing model if period shifts systematically as amplitude increases or if cycle decay becomes dominant.

This combination trains two competencies: identifying quantities that set the global clock, and identifying quantities that describe local restoring action. The solution therefore goes beyond a final number and builds a causal interpretation useful for real experiment tuning.

## Symbolic solution

Natural angular frequency for small oscillations is obtained with:

{{f:omega}}

Cycle period is obtained with:

{{f:Tper}}

Instantaneous gravitational torque is computed with:

{{f:tau}}

Use sequence: first compute [[omega]] from [[g]] and [[L]]. Then convert to [[Tper]]. Finally evaluate [[tau]] from [[m]], [[g]], [[L]], and [[theta]] at the initial state.

## Numerical substitution

With given [[g]] and [[L]], the gravity-over-length ratio sets a temporal scale in inverse seconds squared. Taking its square root yields [[omega]] in a range of several radians per second, consistent with tabletop pendulum behavior.

From that rhythm, [[Tper]] falls in the order of a few seconds. This scale is compatible with manual timing over multiple cycles, especially when averaging several oscillations.

For initial torque, introduce [[m]], [[g]], [[L]], and initial [[theta]]. Since starting angle is positive in the selected convention, [[tau]] must be negative to indicate restoring action toward vertical. The resulting magnitude is consistent with a sub-kilogram bob and a meter-scale lever arm.

## Dimensional validation

For [[omega]], the dimension of [[g]] divided by [[L]] is inverse time squared, and square root yields inverse time. For [[Tper]], a dimensionless angular constant divided by [[omega]] yields time.

For [[tau]], multiplying [[m]], [[g]], and [[L]] gives torque dimension. The trigonometric factor is dimensionless. Therefore the output dimension is mechanically coherent.

An additional check is sign coherence: if [[theta]] crosses to the opposite side, [[tau]] must change sign. This protects against convention mistakes that are often hidden when only absolute values are inspected.

## Physical interpretation

Temporal output shows that the setup has a mechanical clock determined by [[L]] and [[g]]. This implies that adjusting cycle time should focus on effective length or environment, not on bob mass. This is one of the central conceptual lessons of the pendulum model.

The value of [[tau]] adds a local reading: it quantifies how much restoring action exists at release and in which direction correction occurs. Therefore [[tau]] does not replace [[Tper]]; it complements timing interpretation by explaining instantaneous return mechanism.

From a regime perspective, this case is inside a range where linear timing approximation is acceptable. If the same setup were tested at much larger amplitudes, period deviation from ideal reading would increase. This means the temporal relation used here should not be extrapolated blindly to high-angle operation.

Operationally, the solution supports two concrete decisions. If slower oscillation is needed, increasing [[L]] is the main control lever. If stronger initial restoring action is needed at the same angle, increasing [[m]] or [[L]] scales [[tau]], but does not tune timing as directly as changing length. This separation between rhythm control and torque control is the intended learning outcome.

# Real-world example

## Context

A science museum team designs an interactive pendulum exhibit. The system must be slow enough for visitors to observe multiple cycles, but not so slow that attention drops. At the same time, the setup must remain mechanically safe, avoiding excessive pivot load during repeated launches.

The team can tune string length, bob mass, and release amplitude through a controlled mechanism. The challenge is turning those design choices into quantitative maintenance rules that remain easy to communicate.

## Physical estimation

First, a target range for [[Tper]] is defined from user experience goals. With that target, [[L]] is selected and a reference [[omega]] is estimated using local [[g]]. Then [[tau]] is evaluated at the maximum operational amplitude to verify that support hardware has sufficient structural margin.

The estimate reveals a common design trade-off. Larger [[L]] improves visual readability by increasing [[Tper]], but may increase space requirements and trajectory envelope. Larger amplitude improves visual impact, but raises initial [[tau]] and therefore structural demand on pivot components.

To balance pedagogy and safety, the team chooses moderate amplitude and adjusts [[L]] until temporal range is achieved. Field tests then compare observed period against predicted period. If deviation remains within tolerance, the ideal model can be kept as an operational reference.

## Interpretation

This case shows that the pendulum model is not only an exercise tool, but also a design decision tool. Temporal reading through [[omega]] and [[Tper]] supports user-experience tuning. Dynamic reading through [[tau]] supports mechanical safety checks.

Problem causality is clear: [[L]] and [[g]] dominate the clock, while [[theta]] and [[m]] scale instantaneous restoring action through [[tau]]. This implies that changing mass to tune timing would be an inefficient strategy in the ideal framework.

The example also yields a maintenance rule: if measured period drifts over time without intentional changes in [[L]], there may be effective-length shifts, pivot wear, or regime changes due to amplitude growth. This turns the pendulum into an operational diagnostic, not only a visual demonstration.

In short, the real-world application confirms that leaf equations are decision tools when validity and coherence are respected. This means less trial-and-error, clearer technical communication, and higher implementation quality.