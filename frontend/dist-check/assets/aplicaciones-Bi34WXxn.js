const e=`## 1. Espejos planos en instrumentos ópticos

Un espejo plano redirige haces de luz sin cambiar su convergencia básica. En periscopios, cámaras, telescopios y bancos ópticos, la ley de reflexión permite plegar el camino de la luz manteniendo control angular preciso.

La hipótesis dominante es que la superficie es lisa frente a la longitud de onda visible. La dirección se decide con [[theta_i]] y [[theta_r]], mientras que el brillo útil depende de [[R_reflectancia]]. Un espejo de baja reflectancia puede orientar bien el haz, pero reducir mucho la señal.

En un montaje real, esta separación evita diagnósticos equivocados. Si el haz llega al detector pero con poca potencia, el problema puede ser [[R_reflectancia]], suciedad o absorción, no necesariamente un error de alineación angular. Si el haz no llega al detector, entonces la primera sospecha es geométrica.

Variable dominante: [[theta_r]] como dirección del haz reflejado que debe alinearse con el siguiente elemento óptico.
Límite de validez: si el espejo está rayado, curvado o contaminado, aparecen dispersión y pérdidas que el modelo plano no representa.

## 2. Ecos y primeras reflexiones en salas

En acústica arquitectónica, una pared, techo o panel puede reflejar sonido hacia el público. La geometría predice hacia dónde viaja la reflexión, y la intensidad determina si será útil, molesta o casi imperceptible.

La simplificación consiste en tratar la pared como frontera plana para el rango de frecuencias relevante. En graves, una superficie grande suele comportarse de modo especular; en agudos, relieves y materiales porosos pueden dispersar o absorber más. Por eso [[R_reflectancia]] cambia con frecuencia.

El diseño acústico usa esta lectura para decidir entre paneles reflectantes, absorbentes y difusores. Una primera reflexión lateral moderada puede dar sensación espacial, pero una reflexión intensa y tardía puede producir eco o pérdida de inteligibilidad. La misma ley geométrica guía la colocación, mientras que el material controla la energía devuelta.

Variable dominante: [[I_reflejada]] en la trayectoria hacia el oyente, porque controla si la reflexión afecta claridad y reverberación.
Límite de validez: en salas con muchas superficies cercanas, la reflexión aislada debe sustituirse por un modelo de campo reverberante.

## 3. Radar, sonar y detección de objetos

Radar y sonar emiten ondas y analizan la señal que vuelve tras reflejarse en un objeto. La dirección de retorno ayuda a ubicar el blanco, mientras que la intensidad reflejada informa sobre tamaño, orientación y material.

La frontera real rara vez es un espejo perfecto. Un objeto puede devolver mucha energía en una orientación y poca en otra. La reflectancia efectiva incluye forma, rugosidad y contraste de impedancias. El modelo básico de reflexión sirve como primera lectura antes de usar modelos de dispersión.

En sonar, un fondo marino rocoso devuelve ecos intensos y direccionales, mientras que sedimentos blandos pueden absorber y dispersar más. En radar, una superficie metálica orientada adecuadamente puede producir retorno fuerte, pero un perfil inclinado puede enviar la señal lejos del receptor.

Variable dominante: [[I_reflejada]] detectada por el receptor, porque determina si el eco supera el ruido de fondo.
Límite de validez: objetos complejos, superficies inclinadas múltiples o longitudes de onda comparables con el tamaño del blanco exigen dispersión tridimensional.

## 4. Fibras ópticas y guiado por reflexión interna

En una fibra óptica, la luz queda guiada porque se refleja repetidamente en la frontera entre núcleo y revestimiento bajo condiciones adecuadas. Aunque el fenómeno completo incluye refracción, la idea de dirección reflejada local sigue siendo esencial.

Cada reflexión conserva una trayectoria interna si el ángulo es compatible con el guiado. La pérdida acumulada depende de la calidad de las fronteras y de la absorción del material. Una pequeña pérdida por reflexión repetida puede ser importante tras muchos kilómetros.

La reflexión interna muestra que la dirección local puede repetirse muchas veces sin que el rayo abandone la guía. Sin embargo, el rendimiento final depende de pérdidas pequeñas acumuladas. Por eso una fibra se evalúa tanto por geometría de guiado como por atenuación óptica.

Variable dominante: [[theta_i]] interno respecto a la normal de la frontera núcleo-revestimiento, porque decide si el rayo permanece guiado.
Límite de validez: para fibras monomodo o análisis de alta precisión, el modelo de rayos debe sustituirse por modos electromagnéticos.

## 5. Lectura de superficies mediante brillo y reflejo

En visión artificial, fotografía y diagnóstico de materiales, la reflexión revela rugosidad, orientación y acabado. Un reflejo especular intenso indica una superficie lisa a la escala de la onda observada; una reflexión difusa sugiere textura o dispersión.

La lectura combina dirección y energía. La dirección del brillo permite inferir normales locales, mientras que [[R_reflectancia]] ayuda a distinguir materiales. Un metal pulido, una pintura mate y un vidrio pueden obedecer geometrías similares pero devolver intensidades muy distintas.

En inspección industrial, un cambio brusco en el reflejo puede delatar una abolladura, una contaminación o una capa mal aplicada. La cámara no mide “belleza” del brillo, sino una combinación física de orientación local, rugosidad y fracción reflejada.

Variable dominante: [[R_reflectancia]] aparente, porque resume cuánto brillo vuelve al sensor para una iluminación dada.
Límite de validez: superficies translúcidas, multicapa o muy rugosas requieren modelos de reflectancia bidireccional, no una sola reflexión especular.
`;export{e as default};
