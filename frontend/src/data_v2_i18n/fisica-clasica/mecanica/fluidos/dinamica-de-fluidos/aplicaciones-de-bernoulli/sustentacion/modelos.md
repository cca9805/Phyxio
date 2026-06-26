## Modelo ideal

El modelo ideal de sustentación trata el ala como una superficie de referencia que interactúa con un flujo estacionario, subsonico bajo y aproximadamente incompresible. La complejidad del perfil, del ángulo de ataque y de la distribución real de presiones se resume en el coeficiente [[C_L]]. La magnitud conservada no es la velocidad del aire, sino la coherencia entre presión, desviación del flujo y fuerza resultante.

El modelo conserva las magnitudes necesarias para estimar [[L]]: densidad [[rho]], velocidad [[v]], superficie [[S]] y coeficiente [[C_L]]. Ignora, en primera aproximación, vórtices de punta, separación no estacionaria, rugosidad fina, compresibilidad fuerte y deformación estructural del ala.

## Hipótesis

- Flujo estacionario: si el flujo cambia de forma brusca, la fuerza instantánea no puede leerse con una única curva suave.
- Régimen subsonico bajo: si Mach aumenta, la compresibilidad modifica la distribución de presiones.
- Capa límite adherida: si se separa, aparece pérdida y [[C_L]] deja de crecer de forma regular.
- Coeficiente conocido: si [[C_L]] no procede de datos del perfil, el cálculo puede ser numérico pero no físico.
- Área de referencia fija: si cambia la configuración de flaps, cambia también [[S]] efectiva.

## Dominio de validez cuantitativo

Como regla de primer orden, el modelo elemental es razonable para Mach menor que 0.3, ángulos de ataque moderados y coeficientes de sustentación dentro de rangos medidos para el perfil. En alas convencionales, valores de [[C_L]] entre 0.2 y 1.5 son habituales; valores superiores pueden requerir flaps, perfiles especiales o estar cerca de pérdida.

También debe comprobarse el orden de magnitud: una avioneta suele requerir decenas de kilonewtons y un avión comercial millones de newtons. Si el cálculo produce valores incompatibles con el peso, el dato de velocidad, área o densidad probablemente está mal convertido.

## Señales de fallo del modelo

El modelo falla si aumentar el ángulo de ataque ya no aumenta la sustentación, si aparecen oscilaciones, buffeting, ruido de separación o cambios bruscos de presión. También falla si el flujo es transónico, si hay ondas de choque, si el ala opera muy cerca del suelo o si los vórtices tridimensionales dominan el balance.

Una señal numérica de alerta es obtener [[C_L]] inverosímil para una configuración ordinaria. Otra señal es que [[L]] no pueda compararse razonablemente con [[W]] en un problema de vuelo nivelado.

## Modelo extendido o alternativo

El modelo extendido introduce curvas polares, coeficiente de resistencia, número de Reynolds, correcciones de compresibilidad, efectos tridimensionales y simulación CFD. En lugar de usar un único [[C_L]], se emplea una función dependiente del ángulo de ataque, Reynolds, Mach y configuración del ala.

Se debe pasar al modelo extendido cuando el problema pregunta por pérdida, eficiencia, resistencia inducida, maniobra, transónico, perfiles reales o diseño fino.

## Comparación operativa

| Modelo | Ventaja | Límite |
|---|---|---|
| Global con [[C_L]] | rápido y útil para estimaciones | depende de datos fiables del coeficiente |
| Bernoulli local | conecta presión y velocidad | no explica por sí solo circulación ni separación |
| Polar aerodinámica | predice margen y pérdida | requiere datos experimentales o simulación |
| CFD | gran detalle espacial | alto coste y sensibilidad a mallado y turbulencia |