const e=`# Aplicaciones Reales: Poleas y Aparejos

## 1. Grúas torre en la construcción civil
Variable dominante: [[n]]
Límite de validez: Resistencia a la rotura del cable de acero y estabilidad del contrapeso.

En las obras de construcción, las grúas torre utilizan aparejos factoriales masivos para elevar materiales pesados. La clave no es la potencia del motor, sino el número de tramos efectivos [[n]]. Al pasar el cable por múltiples poleas móviles situadas en el gancho, se consigue que motores eléctricos relativamente pequeños puedan elevar toneladas de acero u hormigón. El operario controla la velocidad, pero es la geometría del aparejo la que multiplica la fuerza. El límite crítico es la carga de rotura del cable: aunque añadamos más poleas para reducir el esfuerzo [[P]], el cable debe ser capaz de soportar la tensión \`T\` total repartida.

En la práctica, las grúas torre de gran envergadura emplean [[n]] entre 4 y 8 tramos. Esto permite que un motor de 15 kW eleve cargas de hasta 6000 kg a velocidades de trabajo de 0,1 m/s. El rendimiento [[eta]] del conjunto, incluyendo las pérdidas en los tambores y en los cojinetes de rodillos del gancho, se sitúa habitualmente entre 0,85 y 0,92, lo que significa que entre el 8 % y el 15 % de la energía eléctrica consumida se disipa como calor antes de llegar a la carga útil.

## 2. Sistemas de elevación en ascensores modernos
Variable dominante: [[eta]]
Límite de validez: Desgaste de las gargantas de las poleas y adherencia por fricción.

Los ascensores no solo dependen de un motor, sino de un sistema de poleas de tracción y contrapesos. El contrapeso iguala gran parte del peso de la cabina, de modo que el motor solo debe vencer la diferencia de carga y la fricción. Aquí, el rendimiento [[eta]] es vital para la eficiencia energética del edificio. Las poleas de desvío permiten que el motor se ubique de forma eficiente en el cuarto de máquinas, redirigiendo el esfuerzo hacia el hueco del ascensor. El mantenimiento se centra en evitar el deslizamiento del cable sobre la polea, lo que comprometería la seguridad.

## 3. Máquinas de musculación en centros deportivos
Variable dominante: [[Np]]
Límite de validez: Rozamiento en los cojinetes y estiramiento del cable.

En los gimnasios, las poleas cumplen una función ergonómica y de carga variable. Permiten cambiar la dirección del esfuerzo para que el usuario pueda trabajar distintos grupos musculares tirando en cualquier dirección. Además, el uso de poleas móviles [[Np]] permite fraccionar los bloques de pesas para ajustes de carga más finos. La percepción del peso por parte del usuario depende directamente de la ventaja mecánica del sistema. Un fallo común es ignorar el rozamiento de los cojinetes, lo que hace que el esfuerzo de bajada se sienta "más ligero" que el de subida debido a la histéresis de la fricción.

## 4. Maniobras de vela en ingeniería naval clásica y moderna
Variable dominante: [[n]]
Límite de validez: Rigidez de las jarcias y fuerza del viento.

Históricamente, los barcos de vela dependían de los "motones" (poleas de madera) para gestionar velas de cientos de metros cuadrados. Sin aparejos con un alto valor de [[n]], sería imposible para una tripulación humana cazar las escotas contra la presión del viento. En la actualidad, los winches y poleas de alta tecnología en barcos de competición minimizan las pérdidas por rendimiento [[eta]] mediante rodamientos de bolas de cerámica. El diseño del aparejo determina la velocidad de respuesta del barco ante cambios de viento, donde la relación de desplazamientos [[sP]] define qué tan rápido debe trabajar el marinero.

## 5. Sistemas de rescate en montaña y espeleología
Variable dominante: [[VM]]
Límite de validez: Capacidad de carga de los anclajes y elasticidad de la cuerda.

En situaciones de emergencia, los rescatistas instalan polispastos (aparejos) para extraer a personas de grietas o pozos. A menudo utilizan aparejos potenciales para maximizar la ventaja mecánica [[VM]] con el mínimo equipo posible. Una sola persona puede elevar a un herido y a un camillero gracias a la multiplicación de fuerzas. El factor limitante es la seguridad de los anclajes: la fuerza total sobre el punto de fijación al techo o a la roca es la suma de la carga [[W]] y el esfuerzo [[P]], lo que puede duplicar el estrés sobre la estructura natural si no se calcula correctamente.

Una técnica habitual en rescate es el aparejo compuesto 3:1 que puede combinarse con un segundo aparejo para obtener una ventaja total de 9:1. Con este sistema, un rescatista solo necesita aplicar un esfuerzo [[P]] de aproximadamente 100 N para mover una carga de 900 N. La elasticidad de las cuerdas dinámicas reduce los picos de carga sobre los anclajes, pero también introduce pérdidas de energía que reducen el rendimiento [[eta]] efectivo del aparejo. En operaciones prolongadas, el rozo de la cuerda sobre los bordes de las rocas es el factor que más deteriora [[eta]] y puede reducirlo por debajo de 0,7, haciendo necesario aumentar [[n]] o redistribuir el aparejo.
`;export{e as default};
