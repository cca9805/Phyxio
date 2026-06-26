# Exam-type example

## Problem statement

A periodic wave propagates along a string. The distance between two consecutive crests is [[lambda]] = 0.80 m and a marked point of the string completes 5.0 oscillations each second. The disturbance amplitude is [[A]] = 0.030 m.

Determine [[f]], [[T]], and [[v]]. Then interpret what [[y]] represents for one point of the string.

## Data

- [[lambda]] = 0.80 m.
- [[f]] = 5.0 Hz.
- [[A]] = 0.030 m.
- The medium is an ideal string with small disturbances.

## System definition

The observed system is the string and, within it, a marked point. The coordinate [[x]] locates where the wave is observed and [[t]] fixes the observation instant. The disturbance [[y]] measures the local separation of the string from equilibrium.

## Physical model

The model is a traveling periodic wave. The shape repeats in space and time, and the pattern advances without the whole string traveling with the pattern.

## Model justification

The model is appropriate because consecutive crests and oscillations per second are given. This allows [[lambda]], [[f]], [[T]], and [[v]] to have clear physical meaning.

It would fail for an isolated pulse without defined periodicity or if the amplitude were large enough to change string tension.

## Symbolic solution

The propagation speed of a periodic wave is obtained with:

{{f:velocidad_onda}}

The temporal relation between period and frequency is:

{{f:periodo_frecuencia}}

To interpret local disturbance in an ideal wave, one may use:

{{f:onda_armonica_basica}}

These three relations separate propagation, temporal repetition, and local state.

The solution uses all core quantities of the case. [[lambda]] and [[f]] combine to obtain [[v]], [[f]] is inverted to read [[T]], and [[A]] limits the possible values of [[y]]. The coordinates [[x]] and [[t]] are not final numerical results here, but they show that a disturbance is meaningful only when where and when are specified.

## Numerical substitution

With [[lambda]] = 0.80 m and [[f]] = 5.0 Hz, the pattern speed is 4.0 m/s. The period associated with 5.0 cycles per second is 0.20 s.

The amplitude [[A]] = 0.030 m means that one point of the string is at most 3.0 cm from equilibrium. It does not mean that this point advances 4.0 m in one second.

The substitution is read in two steps. First, multiplying 0.80 m by 5.0 cycles per second gives a pattern speed of 4.0 m/s. Second, sharing one second among five cycles gives 0.20 s per cycle. Thus the wave combines a spatial scale, a temporal scale, and a local disturbance scale.

## Dimensional validation

- Speed: length times frequency gives `[L T^-1]`.
- Period: inverse frequency gives `[T]`.
- Disturbance: the harmonic profile returns a length, `[L]`.

Units are coherent: a length has not been added to a frequency, and time has not been confused with distance.

## Physical interpretation

The result [[v]] = 4.0 m/s describes the speed of pattern advance: a crest moves four meters each second if the medium remains the same. The marked point of the string does not cover those four meters; it oscillates around its position.

The value [[T]] = 0.20 s says that the marked point takes two tenths of a second to repeat its state. The amplitude [[A]] = 0.030 m measures the maximum local excursion. Therefore a wave combines two readings: local motion of the medium and global propagation of the pattern.

If [[f]] were increased while [[lambda]] stayed fixed, crests would pass more often and the pattern would advance faster. If [[A]] were increased while the other quantities stayed fixed, the mark would move farther up and down, but crest spacing would not change for that reason. This difference shows that the result is not an isolated substitution: it classifies which part of the phenomenon changes.

# Real-world example

## Context

In a small water wave, a floating leaf moves up and down as crests pass. At first sight it may look as if the leaf travels with the wave, but careful observation shows that its net horizontal displacement is small compared with the advance of the crest.

## Physical estimation

If two consecutive crests are separated by about 2.0 m and three crests pass one point every 6.0 s, the frequency is approximately 0.50 Hz and the period is 2.0 s. The pattern speed is then about 1.0 m/s.

If the leaf moves up and down by about 5 cm, that distance corresponds to [[A]], not to [[lambda]]. The leaf reveals the local disturbance [[y]], while the crests reveal the pattern advance.

## Interpretation

The estimate shows why the wave concept should not be reduced to "something that moves". What moves with propagation speed is the organized shape. The medium responds locally and can return almost to its initial position after the disturbance has passed.

If wind increases the wave amplitude, the leaf moves farther up and down, but that does not force crest spacing to double. If crests arrive more frequently while spacing remains similar, the pattern advances faster. The application makes [[A]], [[lambda]], [[f]], and [[v]] visually distinguishable in a real setting.
