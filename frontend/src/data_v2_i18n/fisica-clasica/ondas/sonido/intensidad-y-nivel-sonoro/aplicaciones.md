# Aplicaciones de Intensidad y Nivel Sonoro

## 1. Diseno de perimetros de seguridad acustica en industria

Las normativas de seguridad laboral establecen limites maximos de exposicion al ruido. En Europa, la Directiva 2003/10/CE fija 80 dB(A) como nivel de exposicion diaria a partir del cual se deben proporcionar protecciones auditivas, y 85 dB(A) como limite de uso obligatorio de estas protecciones.

Las plantas industriales con maquinaria de alta potencia acustica deben calcular perimetros de exclusion donde el acceso sin proteccion esta prohibido. Por ejemplo, una prensa mecanica que irradia 10 W de potencia acustica requiere delimitar una zona de seguridad donde el nivel no exceda los 85 dB.

Usando la relacion de intensidad y el nivel de referencia, la distancia minima de seguridad se calcula despejando [[r]]. Para 85 dB, la intensidad equivalente es 3.16 por diez a la menos 4 W/m²; con esta prensa resulta una distancia cercana a 50 metros. Dentro de este perimetro, los operarios deben usar obligatoriamente tapones auditivos certificados.

Variable dominante: Potencia acustica [[P]] de la maquina y distancia [[r]] al punto de calculo.

Límite de validez: Campo libre aproximado; en naves industriales cerradas las reflexiones amplian la zona de riesgo, por lo que los perimetros calculados son conservadores (subestiman el nivel real).

## 2. Calibracion de sistemas de sonorizacion y audio profesional

Los ingenieros de audio utilizan medidores de nivel sonoro (sonometros) para calibrar sistemas de PA (public address) en conciertos, eventos y auditorios. El objetivo es garantizar niveles adecuados de presion sonora en toda la zona de audiencia sin exceder limites que causen fatiga o dano auditivo.

En un concierto al aire libre, el sistema de sonido debe proporcionar aproximadamente 90-100 dB en la zona central de la grada para una experiencia satisfactoria, pero sin superar 110 dB cerca del escenario donde estan los tecnicos. Cada altavoz del sistema tiene una potencia acustica conocida (ej: 500 W para un subgrave), y la distancia a la zona objetivo determina la intensidad resultante.

Si se requiere 95 dB a 30 metros del escenario, la potencia necesaria por altavoz se calcula despejando [[P]], donde [[I]] se obtiene antes desde el nivel. Para 95 dB la intensidad equivalente es 10 elevado a menos 2.5 W/m², lo que da una potencia cercana a 113 W por fuente e indica que un altavoz de 500 W es suficiente con margen para la directividad y las perdidas.

Variable dominante: Potencia [[P]] de los transductores y distancia [[r]] a la zona de audiencia objetivo.

Límite de validez: Aplicable a campo libre o directo; en recintos cerrados se aplica el modelo de campo directo mas reverberante, requiriendo software de simulacion acustica para precision.

## 3. Medicion y control de ruido ambiental en urbanismo

Los ayuntamientos y agencias medioambientales evaluan el impacto acustico de infraestructuras como autopistas, ferrocarriles o aeropuertos. La normativa (como la Ley del Ruido en Espana) establece limites segun zonas: 50 dB durante el dia en zonas residenciales, 60 dB en zonas comerciales.

Para una autopista modelada como fuente lineal infinita (trafico continuo), la intensidad decae como 1/r en lugar de 1/r², porque la "superficie" de propagacion es un cilindro, no una esfera. La potencia por unidad de longitud de la via (W/m) y la distancia perpendicular a la carretera determinan el nivel en viviendas cercanas.

Si el trafico genera una potencia lineal de 100 W/m y se requiere mantener 55 dB en la fachada de viviendas, la intensidad equivalente es 10 elevado a menos 6.5 W/m². En geometria lineal la distancia minima se estima con el modelo cilindrico de fuente linea, no con el modelo de fuente puntual, y resulta del orden de 100 metros. Esto justifica la creacion de cinturones verdes o pantallas acusticas.

Variable dominante: Potencia lineal del trafico y geometria de propagacion cilindrica caracteristica de fuentes lineales.

Límite de validez: Fuente lineal infinita es una aproximacion valida para tramos rectos largos; en curvas o intersecciones la geometria cambia. La absorcion del suelo y la vegetacion reducen la intensidad real.

## 4. Evaluacion de dano auditivo inducido por ruido

Los medicos otorrinolaringologos y expertos en salud laboral evaluan el riesgo de perdida auditiva inducida por ruido basandose en la intensidad y el tiempo de exposicion. La ISO 1999 establece que la exposicion a 85 dB durante 8 horas diarias durante anos puede causar dano permanente al sistema auditivo.

La intensidad fisica determina la energia total recibida por el oido. Si un obrero trabaja con un martillo neumatico que produce 105 dB a su posicion de oido, la exposicion de 8 horas equivale a 85 dB durante... mucho mas tiempo del permitido. Usando la conversion de niveles a intensidades y multiplicando por tiempo, se calcula la dosis de ruido acumulada.

La dosis de ruido compara el tiempo real de exposicion con el tiempo permitido para ese nivel. Para 105 dB, el tiempo permitido cae hasta unos 6 minutos; un obrero expuesto 8 horas a 105 dB recibe una dosis del orden de miles por ciento, catastrofica para su audicion.

Variable dominante: Nivel de intensidad [[L]] y tiempo de exposicion acumulado.

Límite de validez: Las formulas de dosis asumen exposicion continua; pausas sin ruido reducen la dosis efectiva. La susceptibilidad individual varia, siendo estos limites promedios poblacionales.

## 5. Diseno de auriculares y sistemas de cancelacion de ruido

Los ingenieros de audio disenan auriculares de aislamiento pasivo y sistemas de cancelacion activa de ruido (ANC) utilizando principios de intensidad sonora. El objetivo es reducir la intensidad que llega al timpano del usuario en entornos ruidosos.

El aislamiento pasivo se basa en materiales que atenuan la transmision de ondas sonoras. Si el ambiente externo tiene 80 dB (I = 10⁻⁴ W/m²) y se desea limitar la exposicion del usuario a 70 dB (I = 10⁻⁵ W/m²), el auricular debe proporcionar 10 dB de atenuacion. Esto corresponde a reducir la intensidad a 1/10, lo cual se logra con materiales absorbentes y sellado adecuado contra la cabeza.

La cancelacion activa genera una onda de igual amplitud pero fase opuesta, reduciendo la intensidad resultante por interferencia destructiva. Si la onda ambiental y la onda de cancelacion tienen intensidades comparables y fase opuesta, la intensidad resultante puede teoricamente anularse. En practica, la cancelacion perfecta solo ocurre en frecuencias bajas y posiciones especificas, logrando tipicamente 15-25 dB de reduccion.

Para disenar el sistema ANC, se calcula la potencia que los actuadores del auricular deben radiar para crear un campo de cancelacion igual al ambiente a la posicion del timpano. Despejando [[P]], con [[I]] de 10 elevado a menos 5 W/m² (70 dB) y [[r]] de 0.02 m, la potencia requerida es del orden de 5 por diez a la menos 8 W, manejable con electronica portatil.

Variable dominante: Intensidad ambiental a cancelar [[I]] y eficiencia de la interferencia destructiva.

Límite de validez: La cancelacion activa funciona mejor para ondas planas de baja frecuencia (< 1000 Hz); a altas frecuencias las longitudes de onda cortas hacen que la interferencia sea espacialmente variable y dificil de controlar.
