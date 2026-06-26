const e=`# Frequent mistakes: Linear Drag\r
\r
## Conceptual errors\r
\r
### Mistake 1: Confusing cause and effect\r
\r
### Why it seems correct\r
The equation looks simple, so students often think everything is just direct substitution.\r
\r
### Why it is incorrect\r
In this leaf, [[F_d]] is a consequence of relative motion in the fluid, not the driving cause of motion.\r
\r
### Detection signal\r
Your free-body diagram places [[F_d]] in the same direction as velocity without a consistent convention.\r
\r
### Conceptual correction\r
State explicitly that [[F_d]] opposes relative motion, and separate applied force from resistive force.\r
\r
### Mini-example\r
If a particle moves to the right through still fluid, [[F_d]] points to the left even when its magnitude is computed with a scalar formula.\r
\r
### Mistake 2: Applying the formula mechanically without validating context\r
\r
### Why it seems correct\r
Because the relation is compact, it is often used in any fluid-motion problem.\r
\r
### Why it is incorrect\r
The linear law requires a domain where proportionality between [[F_d]] and [[v]] is physically reasonable.\r
\r
### Detection signal\r
Data show systematic curvature in [[F_d]] versus [[v]], yet one constant slope [[b]] is still forced.\r
\r
### Conceptual correction\r
Before computing, validate local model domain and define a switching criterion if nonlinearity appears.\r
\r
### Mini-example\r
If doubling [[v]] consistently produces much more than double force, the linear interpretation must be reviewed.\r
\r
### Mistake 3: Mixing up similar quantities\r
\r
### Why it seems correct\r
In quick exercises, [[b]] and [[tau]] are manipulated algebraically and can look interchangeable.\r
\r
### Why it is incorrect\r
[[b]] is a resistive medium-body parameter; [[tau]] is a derived time scale combining [[m]] and [[b]].\r
\r
### Detection signal\r
Your final interpretation describes [[tau]] as friction strength or [[b]] as a time duration.\r
\r
### Conceptual correction\r
Attach each quantity to its physical role: [[b]] as resistive slope, [[tau]] as adjustment time scale.\r
\r
### Mini-example\r
Two systems with equal [[b]] but different [[m]] have different [[tau]] although instantaneous drag law is the same.\r
\r
## Model errors\r
\r
### Mistake 4: Not recognizing when the simplified model fails\r
\r
### Why it seems correct\r
Linear drag works very well in many introductory activities.\r
\r
### Why it is incorrect\r
Outside its domain, one constant [[b]] no longer represents the dominant mechanism.\r
\r
### Detection signal\r
You must retune [[b]] in each speed subrange to keep acceptable fit.\r
\r
### Conceptual correction\r
Define an error threshold and switch model when slope stability is lost.\r
\r
### Mini-example\r
If low speeds fit with [[b]]_1 but high speeds only fit with a very different [[b]]_2, declare regime change instead of averaging.\r
\r
### Mistake 5: Ignoring known model limits\r
\r
### Why it seems correct\r
Students assume that once an equation is learned, it applies everywhere.\r
\r
### Why it is incorrect\r
[[b]] depends on medium and effective geometry; uncontrolled extrapolation breaks validity.\r
\r
### Detection signal\r
You compare tests in different fluids while keeping the same [[b]] without recalibration.\r
\r
### Conceptual correction\r
Record conditions and recalibrate [[b]] whenever relevant physical context changes.\r
\r
### Mini-example\r
The same object in air and oil should not share the same [[b]] unless validated experimentally.\r
\r
## Mathematical errors\r
\r
### Mistake 6: Careless algebraic rearrangements\r
\r
### Why it seems correct\r
Solving for [[b]] or [[v]] appears immediate.\r
\r
### Why it is incorrect\r
Without domain and unit checks, results can be numerically clean but physically meaningless.\r
\r
### Detection signal\r
You obtain negative [[b]] or a [[tau]] value without time units and still accept it.\r
\r
### Conceptual correction\r
Include dimensional and sign checks before interpretation.\r
\r
### Mini-example\r
Using speed in km/h and force in N without conversion can distort [[b]] by a large factor.\r
\r
### Mistake 7: Forgetting constants and units\r
\r
### Why it seems correct\r
Unit conversion can look secondary in short calculations.\r
\r
### Why it is incorrect\r
In this model, [[b]] units control coherence of the full [[F_d]]-[[v]]-[[tau]] chain.\r
\r
### Detection signal\r
You cannot justify why [[tau]] should come out in seconds from [[m]] and [[b]].\r
\r
### Conceptual correction\r
Work in SI from the start and validate dimensions before drawing conclusions.\r
\r
### Mini-example\r
If [[m]] is in grams and [[b]] in N s/m, [[tau]] is wrong unless mass is converted to kg.\r
\r
## Interpretation errors\r
\r
### Mistake 8: Reporting more precision than the model supports\r
\r
### Why it seems correct\r
More decimals feel more rigorous.\r
\r
### Why it is incorrect\r
Measurement uncertainty and local validity of [[b]] limit true physical precision.\r
\r
### Detection signal\r
You report [[F_d]] with four decimals from coarse input data and no uncertainty statement.\r
\r
### Conceptual correction\r
Match significant figures to data quality and declare a realistic uncertainty band.\r
\r
### Mini-example\r
With low-resolution bench measurements, two or three significant figures for [[F_d]] are usually more honest.\r
\r
### Mistake 9: Skipping physical interpretation of computed results\r
\r
### Why it seems correct\r
Students often think obtaining a number means the problem is finished.\r
\r
### Why it is incorrect\r
Without causal interpretation, you cannot decide what variable should be changed or why response differs.\r
\r
### Detection signal\r
Your final statement mentions only one number and ignores [[b]], [[v]], and [[tau]].\r
\r
### Conceptual correction\r
Close every result with one mechanism sentence and one validity-limit sentence.\r
\r
### Mini-example\r
Writing "[[F_d]] = 1.8 N" is incomplete unless you explain whether it implies fast or slow adjustment through [[tau]].\r
\r
## Quick self-control rule\r
\r
Use this checklist after each solution:\r
\r
- The free-body diagram preserves the resistive direction of [[F_d]].\r
- The speed value is relative to the fluid.\r
- Units of [[b]] are coherent with N s/m.\r
- [[tau]] is interpreted as a time scale, not total duration.\r
- The final statement includes mechanism and model limit.\r
\r
If one item fails, revise before accepting the answer.`;export{e as default};
