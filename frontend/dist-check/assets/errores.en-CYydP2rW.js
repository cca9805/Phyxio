const n=`# Common mistakes\r
\r
## Conceptual errors\r
\r
### Error 1: using [[Ug]] without a declared reference\r
\r
Why it looks correct:\r
The output has joule units and appears numerically consistent.\r
\r
Why it is wrong:\r
State value without reference has no unique physical meaning.\r
\r
Detection signal:\r
The solution cannot explain why [[Ug]] is positive or negative.\r
\r
How to fix:\r
Set one vertical zero before calculation and keep it unchanged for all states.\r
\r
## Model errors\r
\r
### Error 2: applying the local model outside its scale\r
\r
Why it looks correct:\r
The same equation is easy to reuse and produces a number.\r
\r
Why it is wrong:\r
Local-gravity assumptions may break at larger spatial scales or tighter precision requirements.\r
\r
Detection signal:\r
Output trends become unstable when assumptions are slightly refined.\r
\r
How to fix:\r
Check validity domain before substitution and switch model when assumptions are no longer credible.\r
\r
## Mathematical errors\r
\r
### Error 3: swapping [[hi]] and [[hf]] or mixing units\r
\r
Why it looks correct:\r
Algebraic manipulation still closes and may look clean.\r
\r
Why it is wrong:\r
Sign logic between [[dUg]] and [[Wg]] becomes physically inconsistent.\r
\r
Detection signal:\r
An ascent scenario yields negative [[dUg]] without additional explanation.\r
\r
How to fix:\r
Write state order first, convert to SI, then compute and validate sign against process story.\r
\r
## Interpretation errors\r
\r
### Error 4: ending with a number but no physical reading\r
\r
Why it looks correct:\r
Magnitude and units seem correct at first glance.\r
\r
Why it is wrong:\r
No causal statement connects state change and work transfer.\r
\r
Detection signal:\r
Final answer does not explain whether gravity delivered or absorbed energy.\r
\r
How to fix:\r
Close each solution with a causal sentence linking [[dUg]] and [[Wg]] signs.\r
\r
## Quick self-control rule\r
\r
1. Fix one reference for all height values.\r
2. Decide target quantity among [[Ug]], [[dUg]], and [[Wg]].\r
3. Keep SI units and explicit state ordering.\r
4. Compare computed sign with process direction.\r
5. Add one line on model validity before final submission.`;export{n as default};
