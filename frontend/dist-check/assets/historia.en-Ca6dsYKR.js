const e=`# History of Turbulent Flow\r
\r
## Historical problem\r
During the 19th century, hydraulic engineers faced a frustrating paradox. The Navier-Stokes equations, developed by Claude-Louis Navier and George Gabriel Stokes, were mathematically elegant but proved impossible to solve for most practical cases. While the slow flow of honey or water in capillaries followed predictable laws, water in large pipes or channels behaved erratically. Experiments showed that resistance to motion did not grow linearly with speed, but instead shot up quadratically, and no one could physically explain why a smooth current suddenly turned into a chaos of eddies.\r
\r
## Prior conceptual difficulty\r
The main difficulty was the belief that fluid flow should always be a single, stable solution to the equations of motion. Scientists looked for an external cause for the disorder, such as wall irregularities or ground vibrations. It was not understood that the fluid's own inertia could be the source of instability. A universal parameter to predict when the regime change would occur was lacking, forcing engineers to use enormous and unscientific "safety coefficients" to design aqueducts and irrigation systems.\r
\r
## What changed\r
The fundamental change came in 1883 with the experiments of **Osborne Reynolds**. Using an ingenious setup with a dye filament in a glass tube, Reynolds demonstrated that the transition to chaos depended on a dimensionless number relating inertia to viscosity. Shortly after, scientists like **Ludwig Prandtl** introduced the "boundary layer" concept, explaining how turbulence is born near walls. Later, in the 1940s, **Andrey Kolmogorov** revolutionized the field by proposing a statistical theory based on energy transfer between scales, showing that even in absolute chaos, there are universal laws of dissipation.\r
\r
## Impact on physics\r
The study of turbulence transformed fluid mechanics from a descriptive science to a predictive and quantitative discipline. It allowed the development of modern aviation by understanding how to control the turbulent wake to generate lift. In theoretical physics, turbulence became the "last great problem of classical physics," driving the development of chaos theory and non-linear dynamic systems. The idea that small perturbations can alter the global state of a system was born, largely, from the analysis of Reynolds' eddies.\r
\r
## Connection with modern physics\r
Today, turbulence is an active frontier in particle physics and astrophysics. Turbulence in plasmas is studied to achieve controlled nuclear fusion, and interstellar turbulence is analyzed to understand how stars form from chaotic gas clouds. The invention of supercomputers has led to the birth of CFD (Computational Fluid Dynamics), where we attempt to solve trillions of Kolmogorov scales to design everything from artificial hearts to more efficient Formula 1 cars.`;export{e as default};
