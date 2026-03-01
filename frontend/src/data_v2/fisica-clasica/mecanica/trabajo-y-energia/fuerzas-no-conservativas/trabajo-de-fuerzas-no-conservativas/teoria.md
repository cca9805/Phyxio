# Trabajo de fuerzas no conservativas

## Idea clave
El trabajo de fuerzas no conservativas cuantifica el cambio de energia mecanica que no puede explicarse solo con conversion entre cinetica y potencial.

## 1- Que estudia este tema y por que es fundamental
Este tema generaliza conservacion de energia para escenarios reales: rozamiento, resistencia de fluidos, frenos o actuadores externos.

## 2- Imagen fisica correcta
Si el sistema pierde energia mecanica, ese cambio aparece como trabajo no conservativo negativo. Si recibe energia mecanica adicional de una accion externa, el termino puede ser positivo.

## 3- Magnitudes relevantes
- Energia mecanica: $E_m=K+U$.
- Trabajo no conservativo total: $W_{nc}$.
- Cambios de estado: inicial y final.

## 4- Formula central
Balance energetico general:

$$
W_{nc}=\Delta E_m=\Delta(K+U)
$$

Desarrollo util:

$$
W_{nc}=(K_f+U_f)-(K_i+U_i)
$$

## 5- Dominio de validez
Valido si el sistema esta bien definido y si incluyes en $W_{nc}$ todos los trabajos no conservativos relevantes. Omitir uno rompe el balance.

## 6- Metodo de resolucion
1- Define frontera del sistema (que cuerpos incluyes).
2- Lista energias mecanicas iniciales y finales.
3- Identifica trabajos no conservativos presentes.
4- Escribe balance con signos consistentes.
5- Despeja la incognita y valida fisicamente.

## 7- Errores tipicos
- Mezclar en $W_{nc}$ fuerzas que ya estan en $U$.
- Olvidar trabajos de actuadores externos.
- Cambiar referencias de potencial entre estados.
- Dar resultado numerico sin explicar su signo fisico.

## 8- Ejemplo guiado
Un bloque pasa de $K_i=120\,\text{J}$, $U_i=40\,\text{J}$ a $K_f=70\,\text{J}$, $U_f=20\,\text{J}$.

$$
W_{nc}=(K_f+U_f)-(K_i+U_i)=(70+20)-(120+40)=-70\,\text{J}
$$

Interpretacion: el sistema perdio $70\,\text{J}$ de energia mecanica por efectos no conservativos.

## 9- Aplicaciones reales
- Balances energeticos con rozamiento.
- Sistemas con frenado controlado.
- Evaluacion de eficiencia mecanica.

## 10- Sintesis final
$W_{nc}=\Delta E_m$ es la ecuacion puente entre conservacion ideal y realidad disipativa. Es una herramienta central para modelado realista.
