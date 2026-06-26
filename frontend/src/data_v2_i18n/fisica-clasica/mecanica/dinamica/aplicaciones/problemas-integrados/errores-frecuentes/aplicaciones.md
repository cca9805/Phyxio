# Aplicaciones: Errores frecuentes en dinámica

## 1. Vehículo estacionado en rampa

Un vehículo de [[masa_total]] = 1 500 kg se detiene en una rampa urbana con [[angulo_plano]] = 15°. El operario necesita verificar si el freno de mano es suficiente. Calculando correctamente la [[componente_normal_erronea]] con:

{{f:proyeccion_normal_plano}}

se obtiene una normal de 14 204 N. El error de asumir que toda la [[aceleracion_gravedad]] actúa perpendicularmente al plano daría 14 715 N, un exceso del 3,6 %. Con [[coeficiente_rozamiento_estatico]] = 0,7 y la normal correcta, la [[fuerza_rozamiento_maximo]] es 9 943 N, ampliamente superior a la [[fuerza_motriz]] de 3 808 N. El vehículo permanece detenido sin freno de mano.

**Variable dominante:** [[angulo_plano]] — controla la relación entre [[fuerza_motriz]] y [[componente_normal_erronea]]. A medida que θ crece, [[fuerza_motriz]] aumenta (seno) mientras [[componente_normal_erronea]] decrece (coseno), reduciendo el margen de seguridad.

**Límite de validez:** Válido para θ ≤ 45° y superficies secas con [[coeficiente_rozamiento_estatico]] ≥ 0,3. Para ángulos mayores o superficies mojadas, el modelo predice deslizamiento y debe usarse el coeficiente cinético. En entornos reales, el coeficiente puede variar con la temperatura del asfalto y la presión de los neumáticos, por lo que los ingenieros de seguridad aplican un factor de 1,5 sobre el umbral calculado.

---

## 2. Sistema de dos cuerpos vinculados con cuerda

Dos bloques de [[masa_cuerpo]] (4 kg y 3 kg) están conectados por una cuerda inextensible: el primero cuelga verticalmente y el segundo reposa en una superficie horizontal con [[coeficiente_rozamiento_estatico]] = 0,4. El error más frecuente es incluir la tensión de la cuerda en la [[F_ext_net]] global al aplicar:

{{f:ley_newton_sistemas}}

La tensión es una fuerza interna del sistema; aparece en cada cuerpo por separado pero se cancela en el sumatorio global. La [[aceleracion_sistema]] correcta, usando [[masa_total]] = 7 kg como denominador, resulta 3,92 m/s². Calcular con la masa de un solo cuerpo sobreestima [[aceleracion_sistema]] y produce [[F_ext_net]] ficticia.

**Variable dominante:** [[F_ext_net]] — solo las fuerzas que cruzan el contorno del sistema contribuyen a la aceleración del centro de masas. Las tensiones internas no cruzan ese contorno.

**Límite de validez:** Aplicable mientras la cuerda sea inextensible y la polea no tenga inercia rotacional. Si la polea tiene masa, su momento de inercia aumenta la inercia efectiva del denominador. En sistemas de elevación industrial, la polea motorizada contribuye con hasta un 20 % de la inercia efectiva y debe incluirse en [[masa_total]] para no sobreestimar [[aceleracion_sistema]].

---

## 3. Caja sobre banda transportadora

Una caja de [[masa_cuerpo]] = 8 kg se deposita en reposo sobre una banda transportadora que avanza a 1,5 m/s. La [[fuerza_erronea]] que estudiantes añaden es una "fuerza de la banda" hacia adelante; la única fuerza horizontal real es el rozamiento cinético. La [[aceleracion_sistema]] inicial con coeficiente cinético de 0,3 resulta 2,94 m/s² en la dirección de la banda.

Para el umbral de [[fuerza_rozamiento_maximo]], aplicamos:

{{f:relacion_rozamiento_maximo}}

Con [[coeficiente_rozamiento_estatico]] de 0,35, el resultado es 27,47 N. El [[signo_aceleracion]] cambia de positivo (fase de aceleración) a cero cuando la caja iguala la velocidad de la banda.

**Variable dominante:** [[coeficiente_rozamiento_estatico]] — distinguirlo del coeficiente cinético es crítico; usar el estático durante el deslizamiento sobreestima la aceleración de la caja.

**Límite de validez:** Válido mientras la diferencia de velocidades sea positiva. Cuando la caja alcanza la velocidad de la banda, el régimen cambia a estático y la [[F_ext_net]] se anula.

---

## 4. Plano inclinado con fuerza aplicada oblicua

Una fuerza de 25 N se aplica a 20° sobre el plano a un bloque de [[masa_cuerpo]] = 6 kg con [[angulo_plano]] = 25°. El error frecuente es ignorar que la componente perpendicular de la fuerza aplicada modifica la [[componente_normal_erronea]]. Con la proyección correcta, la normal resulta 61,88 N. Si se usa solo:

{{f:proyeccion_normal_plano}}

se obtiene 53,33 N, una subestimación del 16 % de la [[componente_normal_erronea]] y, por ende, de la [[fuerza_rozamiento_maximo]]. Esto puede llevar a concluir que el bloque desliza cuando en realidad el umbral estático es suficientemente alto para mantenerlo en reposo.

**Variable dominante:** [[componente_normal_erronea]] — cualquier fuerza con componente perpendicular al plano modifica la normal y, por ende, la [[fuerza_rozamiento_maximo]] y el criterio de movimiento.

**Límite de validez:** Válido mientras el contacto con la superficie se mantenga. Si la componente perpendicular hacia arriba de la fuerza aplicada supera la componente del peso, el bloque se levanta del plano.

---

## 5. Sistema de tres cuerpos en serie

Tres cuerpos de [[masa_cuerpo]] (2, 3 y 4 kg) están alineados en una superficie horizontal con [[coeficiente_rozamiento_estatico]] = 0,2. Se aplica [[F_ext_net]] = 18 N sobre el primer bloque. El error habitual es incluir las tensiones internas en el sumatorio global. Usando el enfoque correcto:

{{f:ley_newton_sistemas}}

con [[masa_total]] = 9 kg en el denominador, la [[aceleracion_sistema]] resulta 0,04 m/s². Omitir cualquier masa subestima la inercia conjunta y sobreestima [[aceleracion_sistema]]. Las tensiones internas se calculan posteriormente sectorizando el sistema con la aceleración ya obtenida globalmente.

**Variable dominante:** [[masa_total]] — la inercia conjunta del sistema vinculado determina [[aceleracion_sistema]]. Incluir solo parte de las masas introduce un error proporcional a la fracción omitida.

**Límite de validez:** Aplicable mientras las cuerdas sean inextensibles y la [[aceleracion_sistema]] no supere [[aceleracion_gravedad]]. Si los cuerpos están conectados por muelles, la aceleración varía a lo largo del tren y cada segmento requiere análisis diferencial.
