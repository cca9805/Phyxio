const e=`# Historia: Ley de hooke\r
\r
## Problema histórico\r
\r
En el siglo XVII, la mecanica estaba consolidando un lenguaje cuantitativo para describir fuerzas y deformaciones. Artesanos e ingenieros sabian por experiencia que ciertos materiales "vuelven" tras ser deformados, pero faltaba una ley general que conectara de forma medible deformacion y respuesta.\r
\r
Robert Hooke introdujo esa idea con su formulacion de proporcionalidad para pequenas deformaciones, conocida por el lema "ut tensio, sic vis". El aporte no fue solo simbolico: permitio transformar una intuicion de taller en regla util para medicion, comparacion y diseño.\r
\r
## Dificultad conceptual previa\r
\r
La dificultad principal era separar comportamiento elastico recuperable de deformacion permanente. Sin esa separacion, cualquier curva fuerza-deformacion parecia valida y no habia criterio para declarar una region lineal.\r
\r
Otra confusion historica fue tratar la proporcionalidad como absoluta. Con el avance de ensayos sistematicos se vio que la linealidad tiene dominio limitado y depende de material, geometria y amplitud de carga.\r
\r
Estas discusiones anticipan errores actuales: mezclar [[Fel]] y [[Fm]], ignorar validez del modelo y reportar numeros sin condiciones de uso.\r
\r
## Qué cambió\r
\r
Cambieron tres cosas de fondo.\r
\r
1. Se paso de descripcion cualitativa a calibracion cuantitativa de rigidez [[k]].\r
2. Se incorporo lectura energetica, donde la deformacion no solo genera fuerza [[Fel]], sino almacenamiento [[Uel]].\r
3. Se institucionalizo la idea de dominio de validez: la ley funciona bien en tramo lineal y debe abandonarse cuando aparecen no linealidades.\r
\r
Con esto, la ley de Hooke dejo de ser una observacion aislada y paso a ser un componente estructural de la mecanica aplicada.\r
\r
## Impacto en la física\r
\r
El impacto fue profundo en metrologia e ingenieria mecanica. La posibilidad de inferir fuerza por deformacion permitio crear instrumentos como dinamometros y establecer protocolos de ensayo repetibles.\r
\r
Tambien influyo en dinamica de oscilaciones: al combinar ley constitutiva con inercia se obtienen modelos de oscilador armonico, fundamentales en mecanica, vibraciones y control.\r
\r
En materiales, la ley funciono como puerta de entrada para clasificar comportamiento elastico, identificar limites y desarrollar modelos mas ricos cuando la linealidad no basta.\r
\r
## Conexión con física moderna\r
\r
La fisica moderna no descarto Hooke; la contextualizo. Hoy se entiende que la ley es una aproximacion efectiva de baja deformacion para muchos sistemas macroscopicos.\r
\r
Modelos contemporaneos incorporan viscoelasticidad, historesis, anisotropia y efectos no lineales, pero mantienen la forma lineal como referencia local alrededor de equilibrio.\r
\r
Esta convivencia entre modelo simple y extensiones complejas es una leccion metodologica central: una ley util no necesita ser universal para ser cientificamente potente.\r
`;export{e as default};
