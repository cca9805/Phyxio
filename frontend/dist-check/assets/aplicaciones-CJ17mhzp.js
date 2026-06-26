const e=`# Aplicaciones de las variables extensivas\r
\r
## 1. Balances de masa en depositos\r
\r
En un deposito, la masa total [[m]] es la variable extensiva principal. Si entra materia, sale materia o se acumula contenido, el balance se hace sobre una cantidad total. La densidad [[rho]] puede ayudar a convertir volumen en masa, pero el inventario conservado es la masa.\r
\r
Variable dominante: [[m]], porque representa la cantidad material total.\r
\r
Limite de validez: Si hay reacciones nucleares o conversiones fuera del modelo clasico, la conservación de masa ordinaria necesita reformularse.\r
\r
La utilidad práctica es inmediata: no importa si el deposito es pequeno o grande, la masa total escala con cuanto material contiene. Comparar dos depositos por [[rho]] sirve para identificar material; compararlos por [[m]] sirve para inventario.\r
\r
En industria, esta distincion evita errores de compra y almacenamiento. Dos tanques pueden contener el mismo liquido y tener igual [[rho]], pero el tanque mayor requiere más estructura, más coste de transporte y más energía para calentarse. La extensiva decide recursos; la propiedad normalizada decide identidad del material.\r
\r
## 2. Energía interna en calorimetria\r
\r
En calorimetria, [[U]] o cambios de energía interna son extensivos. Una muestra doble requiere aproximadamente el doble de energía para producir el mismo cambio de estado si el material es el mismo. Por eso la capacidad calorifica total de un cuerpo grande supera la de uno pequeno.\r
\r
Variable dominante: [[U]], porque mide energía total almacenada.\r
\r
Limite de validez: Si hay cambios de fase, perdidas o gradientes internos grandes, la proporcionalidad simple puede requerir correcciones.\r
\r
La lectura evita errores comunes: una piscina tibia puede almacenar mucha más energía que una taza caliente, aunque su temperatura sea menor. La energía total sirve para balances; la temperatura o energía específica sirven para comparar estados.\r
\r
Por eso los calorimetros se calibran con cuidado: no basta saber que material hay, también importa cuanta masa participa. Si se duplica la muestra y se busca el mismo cambio de temperatura, la energía intercambiada también se duplica aproximadamente. La extensividad convierte una propiedad de laboratorio en una regla de escala.\r
\r
## 3. Volumen y diseno de recipientes\r
\r
El volumen [[V]] es extensivo porque aumenta al juntar partes del mismo sistema. En diseno de recipientes, tuberias o camaras, el volumen total determina capacidad, almacenamiento y espacio ocupado. La densidad se obtiene dividiendo masa por volumen y no crece por fabricar un deposito mayor.\r
\r
Variable dominante: [[V]], porque controla capacidad espacial total.\r
\r
Limite de validez: En mezclas no ideales, el volumen final puede no ser la suma exacta de volumenes iniciales.\r
\r
Esta aplicación es importante en quimica y procesos. Al mezclar liquidos, la masa se suma con gran precision, pero el volumen puede contraerse o expandirse. Esa diferencia no destruye el concepto de extensiva; indica que el modelo ideal de suma de volumenes necesita un termino de mezcla.\r
\r
En recipientes a presión, el volumen total también condiciona seguridad. Un aumento de [[V]] implica más cantidad posible de fluido y más energía almacenada bajo ciertas condiciones. Para comparar materiales del recipiente se usan tensiones o presiones; para dimensionar capacidad se usa la extensiva [[V]].\r
\r
## 4. Entropía total en procesos\r
\r
La entropía [[S]] total es extensiva. En procesos termodinámicos se balancea entropía generada, transportada o acumulada. Dos subsistemas independientes tienen entropía total igual a la suma de sus entropias, siempre que se usen referencias compatibles y no dominen correlaciones extra.\r
\r
Variable dominante: [[S]], porque mide cantidad total de entropía del sistema.\r
\r
Limite de validez: En sistemas muy pequenos o con correlaciones fuertes, la aditividad puede requerir cuidado.\r
\r
La aplicación muestra por que no basta hablar de "desorden" de forma cualitativa. Para maquinas, mezclas o transferencia de calor se necesitan cantidades de entropía que se suman y se comparan en J/K.\r
\r
En balances de segunda ley, la entropía generada total de una planta puede ser la suma de contribuciones de bombas, intercambiadores y turbinas. Esa suma permite localizar donde se destruye más disponibilidad. Una entropía específica ayuda a comparar corrientes; [[S]] total ayuda a evaluar el impacto global.\r
\r
## 5. Propiedades especificas y tablas termodinámicas\r
\r
Las tablas termodinámicas suelen listar propiedades especificas como energía por kg, volumen específico o entropía específica. Esas propiedades se obtienen dividiendo extensivas por masa o cantidad de materia, y permiten comparar muestras de distinto tamano sin que el tamano domine.\r
\r
Variable dominante: [[x_esp]], porque transforma un inventario extensivo en propiedad comparable.\r
\r
Limite de validez: Si la muestra no es homogenea, una propiedad específica media puede ocultar gradientes internos.\r
\r
Esta aplicación conecta extensivas e intensivas. Para calcular el inventario total se multiplica la propiedad específica por [[m]]. Para comparar estados se usa la propiedad específica. Cambiar entre ambas lecturas es una habilidad central en termodinámica aplicada.\r
\r
Un ejemplo habitual es leer una tabla de vapor. La tabla da energía o entropía por kg; el equipo real tiene muchos kg o un caudal en kg/s. Para obtener energía total o potencia hay que multiplicar. Si se olvida ese paso, se confunde el estado del fluido con el tamano de la instalacion.\r
`;export{e as default};
