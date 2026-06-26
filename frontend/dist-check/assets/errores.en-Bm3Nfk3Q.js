const e=`# Errors\r
\r
## Conceptual errors\r
\r
### Error 1: believing that a conservative system means constant speed\r
\r
Why it seems correct  \r
Students often hear conservation and immediately think nothing important is allowed to change.\r
\r
Detection signal  \r
They claim that if [[K]] changes, then [[Em]] cannot remain conserved.\r
\r
Mini-contrast example  \r
A body falls without friction. [[K]] rises while [[U]] drops. The process is still conservative because the total mechanical budget can remain unchanged.\r
\r
Conceptual correction  \r
Conservation refers to total [[Em]], not to each contribution staying fixed.\r
\r
### Error 2: treating [[U]] as absolute rather than baseline-dependent\r
\r
Why it seems correct  \r
Potential-energy numbers can look objective if the reference choice is not discussed.\r
\r
Detection signal  \r
The baseline changes between initial and final states without explicit justification.\r
\r
Mini-contrast example  \r
If the initial state uses the floor as zero and the final state uses another point, [[Ui]] and [[Uf]] no longer support a meaningful comparison.\r
\r
Conceptual correction  \r
[[Ui]], [[Uf]], and [[U]] are only comparable under the same baseline.\r
\r
## Model errors\r
\r
### Error 3: imposing ideal conservation when [[Wnc]] is already relevant\r
\r
Why it seems correct  \r
The ideal balance is elegant, familiar, and often overused.\r
\r
Detection signal  \r
The statement includes friction, braking, or external input but the solution still forces the ideal conservative equation alone.\r
\r
Mini-contrast example  \r
A smooth descent may be modeled conservatively. A rough segment added afterward requires [[Wnc]].\r
\r
Conceptual correction  \r
When non-conservative exchange controls the outcome, it must appear explicitly in the balance.\r
\r
### Error 4: confusing the definition of [[Em]] with a conservation law\r
\r
Why it seems correct  \r
The expression for [[Em]] is so common that students sometimes read it as an invariant by default.\r
\r
Detection signal  \r
They infer conservation directly from the state definition.\r
\r
Mini-contrast example  \r
A driven system still has [[Em]] defined, but that does not make it conservative.\r
\r
Conceptual correction  \r
Definition and conservation must be kept separate.\r
\r
## Mathematical errors\r
\r
### Error 5: losing the sign relation between [[Wc]] and [[dU]]\r
\r
Why it seems correct  \r
Both quantities refer to the same physical change, so students may expect them to share the same sign.\r
\r
Detection signal  \r
They obtain positive [[Wc]] and positive [[dU]] in a situation where potential energy clearly drops.\r
\r
Mini-contrast example  \r
In a downward motion with decreasing potential, [[dU]] and [[Wc]] must carry opposite signs under the usual convention.\r
\r
Conceptual correction  \r
The conservative-work reading must remain consistent with the potential-energy change.\r
\r
### Error 6: mixing states and combining [[Ki]] or [[Kf]] from different moments\r
\r
Why it seems correct  \r
Long problems provide many numbers and students may combine them without checking whether they belong to the same state pair.\r
\r
Detection signal  \r
[[Ki]], [[Uf]], and [[Wnc]] are taken from different phases of motion.\r
\r
Mini-contrast example  \r
In a launch plus rebound problem, values before and after impact cannot be mixed into one unqualified balance.\r
\r
Conceptual correction  \r
Each balance equation must refer to one system and one state interval.\r
\r
## Interpretation errors\r
\r
### Error 7: assuming negative [[Wnc]] always means bad data\r
\r
Why it seems correct  \r
Once ideal conservation is learned first, any deviation may look like noise.\r
\r
Detection signal  \r
The student discards the result instead of asking what dissipative mechanism produced it.\r
\r
Mini-contrast example  \r
In a real braking process, negative [[Wnc]] is not noise. It is the energetic signature of dissipation.\r
\r
Conceptual correction  \r
[[Wnc]] should be interpreted causally, not treated as an algebraic inconvenience.\r
\r
### Error 8: using the conservative-system language as a universal template\r
\r
Why it seems correct  \r
Once the ideal model is comfortable, students may try to force it everywhere.\r
\r
Detection signal  \r
The regime changes but the model choice does not.\r
\r
Mini-contrast example  \r
An almost lossless laboratory descent and a long dissipative descent do not deserve the same closure equation.\r
\r
Conceptual correction  \r
The model must change when the dominant mechanism changes.\r
\r
## Quick self-control rule\r
\r
Before closing a problem, check four points. The same system appears in both states. [[Ui]] and [[Uf]] use the same baseline. The conclusion distinguishes ideal conservation from the case with [[Wnc]]. The sign of [[Wc]] is consistent with the sign of [[dU]]. If one fails, the issue is usually in model selection before it is in arithmetic.`;export{e as default};
