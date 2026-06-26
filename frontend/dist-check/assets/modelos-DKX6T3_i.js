const e=`## Modelo ideal

El modelo estándar del dieléctrico trata el material como un medio **lineal, homogéneo e isótropo (LHI)**. En este modelo, la respuesta de polarización es proporcional al campo eléctrico aplicado, [[epsilon_r]] es un escalar constante independiente del campo, la posición y la dirección, y la capacitancia [[C_d]] es simplemente [[epsilon_r]] veces la capacitancia en vacío [[C_0]].

La simplificación central es que el material es un continuo uniforme: no se distinguen regiones, fronteras internas ni dependencia de la historia pasada. Las cargas ligadas que producen la polarización se tratan estadísticamente como una densidad macroscópica homogénea. Las magnitudes conservadas son la carga libre en las placas y la geometría; las ignoradas son las fluctuaciones microscópicas y los gradientes locales de polarización.

## Hipótesis

- **Linealidad**: la polarización [[P_pol]] es proporcional al campo [[E_d]]. Doblar el campo dobla la polarización. Válida para campos muy por debajo de la tensión de ruptura.
  - Si se viola: la respuesta satura (ferroeléctricos) o el material se destruye (ruptura dieléctrica).
- **Homogeneidad**: [[epsilon_r]] es igual en todos los puntos del material. No existen gradientes internos de composición ni de densidad.
  - Si se viola: el campo no es uniforme en el interior y el modelo de condensador plano no aplica directamente.
- **Isotropía**: la respuesta polarizante es igual en todas las direcciones. [[epsilon_r]] es un escalar, no un tensor.
  - Si se viola (cristales anisótropos): [[epsilon_r]] se convierte en un tensor y el campo resultante no es paralelo al campo aplicado.
- **Régimen estático o cuasiestático**: [[epsilon_r]] es constante con la frecuencia. La polarización sigue al campo sin desfase.
  - Si se viola (alta frecuencia): aparecen pérdidas dieléctricas y la capacitancia depende de la frecuencia de la señal.
- **Dieléctrico perfecto**: no hay corrientes de conducción dentro del material; [[epsilon_r]] es real y positivo.
  - Si se viola: el material tiene pérdidas resistivas y la impedancia del condensador tiene componente real.

## Dominio de validez cuantitativo

El modelo LHI es cuantitativamente válido cuando el campo [[E_d]] en el interior del material cumple la desigualdad:

[[E_d]] ≪ tensión de ruptura del material seleccionado

Para el aire, la tensión de ruptura es aproximadamente 3 MV/m. Para el vidrio, entre 10 y 100 MV/m. Para el polipropileno, entre 30 y 150 MV/m. El diseño seguro exige operar a menos del 20–30 % de este límite.

En cuanto a la frecuencia, el modelo es válido para señales de corriente continua y alterna hasta aproximadamente 10 kHz para materiales cerámicos y hasta varios GHz para polímeros de baja pérdida. Por encima de estas frecuencias, la dispersión dieléctrica hace que [[epsilon_r]] varíe significativamente.

## Señales de fallo del modelo

- **[[epsilon_r]] efectivo menor que el valor tabulado**: el dieléctrico no rellena completamente el espacio, o hay burbujas de aire que reducen la constante efectiva.
- **Corriente de fuga detectable**: si el condensador pierde carga a tensión constante, el material tiene conductividad residual que el modelo ideal ignora.
- **[[C_d]] depende del voltaje aplicado**: en ferroeléctricos o materiales próximos a su temperatura de Curie, [[epsilon_r]] varía con el campo y el modelo lineal falla. El alumno puede detectar esto midiendo [[C_d]] a distintas tensiones.
- **[[C_d]] cae bruscamente a cierta frecuencia**: la polarización orientacional no puede seguir el campo a alta frecuencia y [[epsilon_r]] disminuye abruptamente en la banda de relajación dieléctrica.
- **Calentamiento del condensador bajo señal alterna**: las pérdidas dieléctricas disipan energía como calor. Si el condensador se calienta, el material tiene factor de disipación no despreciable y el modelo sin pérdidas es insuficiente.

## Modelo extendido o alternativo

El modelo extendido incorpora tres generalizaciones necesarias en condiciones reales: el **dieléctrico con pérdidas** (parte imaginaria de [[epsilon_r]] no nula), el **dieléctrico anisótropo** (tensor de permitividad) y el **dieléctrico no lineal** (ferroeléctrico con histéresis).

En el modelo con pérdidas, [[epsilon_r]] se escribe como la suma de una parte real y una parte imaginaria. La parte imaginaria es responsable de la disipación: a mayor parte imaginaria, mayor calentamiento del dieléctrico bajo campo alterno. Este modelo es imprescindible para frecuencias de radio y microondas.

En el modelo ferroeléctrico, [[epsilon_r]] no es constante sino que depende del campo y de la historia previa (histéresis). La polarización [[P_pol]] no regresa a cero cuando el campo vuelve a cero: queda una **polarización remanente**. Este efecto se usa en memorias no volátiles y en sensores piezoeléctricos.

Cuando conviene pasar al modelo extendido con pérdidas: cuando la frecuencia de operación supera la décima parte de la frecuencia de relajación del material (por ejemplo, por encima de unos 100 MHz para cerámicas BaTiO₃) o cuando el calentamiento del condensador es observable. Cuando conviene pasar al modelo ferroeléctrico: si [[C_d]] medida varía con la tensión aplicada en más de un 10 %, o si el material es una cerámica ferroeléctrica por encima de su temperatura de Curie.

## Comparación operativa

| Criterio | Modelo LHI ideal | Modelo con pérdidas | Modelo ferroeléctrico |
|---|---|---|---|
| Precisión a baja frecuencia | Alta | Alta | Alta (con histéresis) |
| Precisión a alta frecuencia | Baja | Alta | Media |
| Complejidad de cálculo | Baja | Media | Alta |
| [[epsilon_r]] constante | Sí | Parcial (parte real ≈ cte) | No |
| Aplicaciones típicas | Diseño básico, cálculo manual | RF, microondas, filtros | Memorias, sensores, actuadores |
| Rango de validez en campo | Campo bajo (< 10 % ruptura) | Campo moderado | Campo alto con histéresis |
`;export{e as default};
