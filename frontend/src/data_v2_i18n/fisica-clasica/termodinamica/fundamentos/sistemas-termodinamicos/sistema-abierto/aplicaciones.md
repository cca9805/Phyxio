# Aplicaciones del sistema abierto

## 1. Turbinas de vapor y gas

Una turbina se modela como sistema abierto porque un fluido entra, atraviesa el equipo y sale con menor energía específica. La diferencia de entalpía se convierte en trabajo de eje, con perdidas por calor, rozamiento y energía cinética residual. El balance de energía permite estimar [[W_dot]] sin seguir cada particula de vapor.

Variable dominante: [[m_dot]], porque la potencia producida escala con el caudal que atraviesa la maquina.

Limite de validez: Si el flujo no es estacionario, si hay condensacion intensa o si las propiedades varian mucho en la seccion de salida, se necesita un modelo más detallado.

La lectura física es directa: una pequena caida de energía por kilogramo puede producir gran potencia si el caudal es grande. Por eso las turbinas industriales combinan alto [[m_dot]] con diferencias de [[h]] de decenas o cientos de kJ/kg.

En operación real, el balance permite detectar perdidas. Si la potencia de eje medida es menor que la esperada por el descenso de [[h]], la diferencia apunta a irreversibilidades, fugas, energía cinética de salida o transferencia térmica no considerada. Asi, el sistema abierto no solo calcula potencia ideal; también organiza el diagnostico del equipo.

## 2. Compresores y bombas

Compresores y bombas consumen trabajo para elevar la energía específica de una corriente. Son sistemas abiertos porque el fluido no permanece dentro del equipo; entra, recibe energía mecánica y sale en otro estado. En bombas de liquidos suele dominar el aumento de presión; en compresores de gases también cambia apreciablemente la temperatura.

Variable dominante: [[W_dot]], porque el objetivo del equipo es transferir potencia al fluido.

Limite de validez: Si hay calentamiento no despreciable, fugas o flujo pulsante, el balance estacionario simple puede subestimar energía requerida.

El balance ayuda a separar potencia útil y perdidas. Si la energía específica de salida no aumenta tanto como el trabajo suministrado, la diferencia aparece como calor, irreversibilidades o energía interna no aprovechada.

En redes hidraulicas, el mismo enfoque permite estimar energía requerida por unidad de caudal. Aumentar [[m_dot]] sin cambiar el salto energético aumenta directamente la potencia necesaria. Por eso una bomba pequena puede mover mucha agua si el salto de presión es bajo, mientras una bomba de alta presión exige gran [[W_dot]] incluso con caudales moderados.

## 3. Intercambiadores de calor

Un intercambiador de calor tiene al menos dos corrientes que cruzan fronteras del equipo. Normalmente se idealiza sin trabajo de eje y con calor externo despreciable hacia el ambiente, de modo que la energía perdida por una corriente se gana por la otra. Es abierto aunque el equipo parezca una carcasa cerrada.

Variable dominante: [[Q_dot]], porque expresa la rapidez de transferencia energética entre corrientes.

Limite de validez: Si hay perdidas grandes al ambiente, mezcla entre corrientes o acumulacion térmica durante arranque, el modelo estacionario debe corregirse.

La utilidad práctica es dimensionar superficies de intercambio y estimar temperaturas de salida. Un caudal pequeno puede calentarse mucho; un caudal grande puede requerir mucha potencia para cambiar pocos grados.

Durante el arranque, el intercambiador no esta todavia en regimen estacionario: parte de la energía calienta la propia carcasa y las paredes internas. En ese intervalo [[E_sys]] cambia y el balance debe incluir acumulacion. Una vez estabilizado, el mismo equipo puede tratarse como estacionario y las corrientes dominan la lectura.

## 4. Ventilacion y climatizacion de edificios

Una habitacion ventilada se comporta como sistema abierto porque el aire entra y sale. Aunque la masa de aire parezca casi constante, la energía transportada por corrientes puede dominar el balance térmico. Por eso abrir una ventana cambia la carga de calefaccion o refrigeración incluso si las paredes no cambian.

Variable dominante: [[e_flujo]], porque cada kilogramo de aire trae energía sensible y, en modelos extendidos, humedad.

Limite de validez: Si hay estratificacion, zonas muertas o corrientes locales intensas, una única temperatura media no describe bien la sala.

Esta aplicación conecta termodinámica con confort. El sistema puede estar estacionario en masa y no estar en equilibrio térmico con superficies, ocupantes y radiacion solar.

También permite cuantificar infiltraciones. Si entra aire frio no medido, el balance energético aparente no cierra: el equipo entrega más [[Q_dot]] del esperado para mantener temperatura. Al reinterpretar la sala como sistema abierto con una entrada adicional, el fallo deja de ser misterioso y se convierte en un caudal no contabilizado.

## 5. Reactores y procesos biologicos

Reactores continuos y organismos vivos intercambian materia y energía constantemente. En un reactor entran reactivos y salen productos; en un ser vivo entran nutrientes y oxigeno, y salen desechos, calor y trabajo. El sistema abierto permite escribir balances aun cuando la composicion interna cambia.

Variable dominante: [[m_dot]], porque las tasas de entrada y salida controlan residencia, acumulacion y conversion.

Limite de validez: Si hay reacciones rápidas, gradientes de concentracion o compartimentos internos, el volumen de control único debe dividirse en submodelos.

La idea central es que estar vivo o operar en continuo no significa estar fuera de la conservación. Significa que conservación debe aplicarse contando flujos. El balance de masa evita crear o destruir materia ficticiamente, y el de energía muestra de donde sale el calor o trabajo observado.

En procesos biologicos, el modelo también separa almacenamiento y tasa. Un organismo puede mantener masa corporal casi constante durante horas mientras intercambia oxigeno, agua, alimento, calor y trabajo muscular. La constancia de [[m_sys]] no implica ausencia de metabolismo; implica que entradas, salidas y conversiones internas se compensan en la escala observada.
