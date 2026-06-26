# Errores frecuentes en trabajo de fuerzas no conservativas

## Errores conceptuales

### Error 1: creer que [[Wnc]] siempre representa perdida de energia

- **Por que parece correcto:** muchos primeros ejemplos usan rozamiento, donde [[Wnc]] resulta negativo.
- **Por que es incorrecto:** un motor o un empuje externo tambien son no conservativos y pueden aumentar la energia mecanica.
- **Senal de deteccion:** el texto habla de aporte externo, pero la resolucion fuerza un signo negativo.
- **Correccion conceptual:** decide el signo de [[Wnc]] a partir del agente fisico, no por costumbre.
- **Mini-ejemplo:** si [[Emi]] = 80 J y [[Emf]] = 140 J, el trabajo no conservativo neto es positivo.

### Error 2: confundir [[dEm]] con una perdida positiva acumulada

- **Por que parece correcto:** se asocia cambio energetico con "cantidad perdida" y se olvida el signo.
- **Por que es incorrecto:** [[dEm]] conserva signo y distingue ganancia de perdida mecanica.
- **Senal de deteccion:** se informa una variacion de energia como numero positivo aunque el sistema haya perdido energia.
- **Correccion conceptual:** expresa [[dEm]] como cambio firmado entre estado final e inicial.
- **Mini-ejemplo:** si el sistema pasa de 200 J a 150 J, [[dEm]] es negativa.

## Errores de modelo

### Error 3: cambiar la frontera del sistema durante el balance

- **Por que parece correcto:** parece razonable incluir o excluir agentes segun convenga al despeje.
- **Por que es incorrecto:** [[Wnc]], [[Emi]] y [[Emf]] solo son comparables si pertenecen al mismo sistema.
- **Senal de deteccion:** una parte del ejercicio trata el motor como externo y otra como interno.
- **Correccion conceptual:** fija el sistema al inicio y mantenlo hasta el cierre.
- **Mini-ejemplo:** si el motor queda fuera del sistema, su aporte entra en [[Wnc]]; si queda dentro, la lectura debe reformularse.

### Error 4: ocultar dos mecanismos distintos dentro de un unico dato ambiguo

- **Por que parece correcto:** sumar efectos en una sola cifra parece simplificar.
- **Por que es incorrecto:** si un dato representa trabajo motor bruto y otro perdidas, el trabajo no conservativo neto exige separarlos o explicitar la convencion.
- **Senal de deteccion:** el estado final no cuadra con el supuesto [[Wnc]] y se corrige "a ojo".
- **Correccion conceptual:** declara si [[Wnc]] es neto o si corresponde a una contribucion concreta.
- **Mini-ejemplo:** motor +1200 J y perdidas -140 J implican trabajo no conservativo neto +1060 J.

## Errores matemáticos

### Error 5: mezclar energias de estados distintos

- **Por que parece correcto:** las magnitudes tienen las mismas unidades y parecen intercambiables.
- **Por que es incorrecto:** [[Ki]] y [[Ui]] forman [[Emi]], mientras [[Kf]] y [[Uf]] forman [[Emf]].
- **Senal de deteccion:** la suma energetica combina un termino inicial con otro final sin justificacion.
- **Correccion conceptual:** construye cada estado antes de comparar estados.
- **Mini-ejemplo:** no formes energia inicial usando [[Ki]] y [[Uf]].

### Error 6: aceptar una [[Kf]] negativa como si fuera un resultado valido

- **Por que parece correcto:** el despeje algebraico se ha realizado sin errores visibles.
- **Por que es incorrecto:** la energia cinetica final no puede ser negativa en el modelo clasico.
- **Senal de deteccion:** el balance formal cierra, pero la salida viola una condicion basica.
- **Correccion conceptual:** revisa signo de [[Wnc]], referencias potenciales y alcanzabilidad del estado final.
- **Mini-ejemplo:** si el calculo da [[Kf]] menor que cero, la configuracion planteada no es fisicamente consistente.

## Errores de interpretación

### Error 7: concluir sin explicar que cambia fisicamente

- **Por que parece correcto:** el ejercicio ya tiene un numero final.
- **Por que es incorrecto:** este leaf exige decidir si hubo aporte, perdida o conservacion efectiva de energia mecanica.
- **Senal de deteccion:** la solucion termina en una resta sin frase de lectura causal.
- **Correccion conceptual:** traduce el signo de [[Wnc]] y [[dEm]] a una conclusion fisica.
- **Mini-ejemplo:** decir "45 J" es incompleto; decir "el motor aporta 45 J de energia mecanica neta" es correcto.

## Regla de autocontrol rápido

1. Sistema fijo antes de escribir balances.
2. Estados inicial y final construidos por separado.
3. [[Wnc]] interpretado con signo y mecanismo.
4. Salidas como [[Kf]] revisadas contra limites fisicos basicos.
5. Cierre verbal: ganar, perder o conservar energia mecanica.
