const e=`# Procedure\r
\r
## Before calculating\r
\r
Read the problem and state the requested quantity before choosing an equation. In physics, the unknown is not just a letter; it may be a speed, force, time, energy, pressure, or field strength. Write the expected unit because it will be the first test of the rearrangement.\r
\r
Then identify the model. A proportional relation, a quadratic equation, an expression with a root, or a trigonometric relation require different algebraic moves. If the model is not appropriate for the phenomenon, correct algebra will not save the solution.\r
\r
## Step 1: identify the mathematical object\r
\r
Find where the unknown appears and what operations affect it. It may be multiplied by a constant, added to another term, placed in a denominator, raised to a power, inside a root, or inside a function. Mentally group the full block that contains the unknown.\r
\r
If the unknown appears more than once, do not move terms without a plan. First collect all terms containing that variable on the same side. This occurs in physics when speed appears in a drag force or when time appears in more than one position term.\r
\r
Classify the case before operating. Linear case: the unknown appears once and to the first power. Rational case: it appears in a denominator. Quadratic or root case: sign restrictions or several branches will appear. Functional case: the unknown is inside sine, cosine, logarithm, or exponential. Repeated case: the unknown appears in several terms and may require factoring or solving an equation.\r
\r
## Step 2: choose the operation\r
\r
Undo operations in the reverse order in which they build the expression. If the variable is in \`a x + b\`, remove \`b\` first and then remove \`a\`. If it is in a fraction, multiply by the denominator only after considering whether that denominator can be zero. If it is squared, isolate the square before taking a root.\r
\r
Every operation must be applied to both sides. Equality does not allow one side to change while the other remains untouched. This simple rule prevents false rearrangements that later produce impossible times, wrong signs, or broken units.\r
\r
Use this quick decision. If the variable is multiplied by a datum, divide by that datum and state that it cannot be zero. If it is in the denominator, multiply first to remove it from the denominator and then solve. If it is squared, isolate the square and take the root with sign criteria. If it appears in two terms, collect and factor. If it is inside a function, apply the inverse function and check the domain.\r
\r
## Step 3: preserve units and signs\r
\r
Carry units through the calculation. Distance divided by speed must produce time. Mass multiplied by acceleration must produce force. Units are not labels added after arithmetic; they help detect mistakes while the rearrangement is being made.\r
\r
Keep signs as well. A minus sign may indicate opposite direction, energy loss, resistive work, or orientation relative to the chosen axis. If a final value is negative, interpret it physically before replacing it with a magnitude.\r
\r
## Step 4: calculate\r
\r
Substitute numerical data only after the target variable has been isolated, unless an earlier simplification is clearly useful. This separates two tasks: building the symbolic answer and evaluating it numerically.\r
\r
When substituting, use compatible units. Convert kilometres to metres, minutes to seconds, or grams to kilograms if the equation is written in SI units. A correct rearrangement with mixed units can still produce a misleading number.\r
\r
If the rearrangement produces several solutions, do not choose one for convenience. Evaluate each branch with the physical context. In \`v = +/- sqrt(2K/m)\`, the sign depends on whether the problem asks for signed velocity or speed. In an angle obtained with arcsine, more than one geometric orientation may be compatible with the same trigonometric ratio.\r
\r
If no clean closed form appears, write the final equation in a solvable form. For example, if speed appears in both a linear and a quadratic drag term, the task may be to solve a quadratic equation or use a numerical method. The goal is still to isolate the physical question in a controlled way, not to manufacture a pretty expression.\r
\r
## Step 5: interpret the result\r
\r
Check that the result answers the original question. If time was requested, state how long the process takes and under what conditions. If force was requested, specify whether it is applied force, weight, friction, or net force.\r
\r
Also read the dependence. If the result increases when distance increases, decreases when speed increases, or changes sign with the axis choice, explain whether that behaviour matches the physical situation.\r
\r
## Self-check checklist\r
\r
Before accepting the result, verify this sequence. The unknown must appear alone on one side. Every operation applied to one side must have been applied to the other. No division by a possibly zero quantity may be hidden.\r
\r
The final unit must match the requested quantity. The sign must be interpretable in the chosen convention. The formula must belong to the model used in the problem. Finally, the answer should form a complete physical sentence: the time is, the required force is, or the initial speed must be.\r
\r
Add four advanced checks. First, check whether a solution was lost by dividing by an expression that could be zero. Second, check whether a root requires a non-negative argument. Third, verify whether an inverse function introduces domains or several branches. Fourth, decide whether the symbolic solution is actually clearer than a justified numerical solution.\r
\r
<!-- algebra-depth-v2 -->\r
## Expanded didactic route\r
\r
1. Before calculating, write a verbal prediction: the result should increase, decrease, stay fixed, or change order of magnitude.\r
2. Separate data, unknown, constants, and constraints. Not every symbol in a formula plays the same physical role.\r
3. Choose the tool from the structure, not from habit. In formula rearrangement, the form of the relation decides the procedure.\r
4. Calculate while keeping units, powers, and signs visible. If one line hides too much, split the step.\r
5. Interpret the result in one sentence: what it measures, in what unit, under what condition, and at what scale.\r
\r
To close the exercise, mentally change one datum by a simple factor and check whether the result moves as the model predicts.\r
\r
`;export{e as default};
