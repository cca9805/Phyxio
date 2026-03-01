# Cuerdas - Errores Comunes

## Idea clave
Los fallos mas costosos en este subtema no son de calculadora, sino de modelo: elegir mal la variable, el modo o la condicion de frontera.

## 1- Errores conceptuales frecuentes
- Usar masa total en lugar de densidad lineal \(\mu_l\).
- Confundir frecuencia fundamental con armonico superior.
- Olvidar que extremos fijos imponen nodos en ambos extremos.
- Tratar \(n\) como continuo en vez de indice entero.
- Creer que la amplitud fija la frecuencia modal en regimen lineal.

## 2- Errores de calculo y unidades
- Mezclar N con kgf en la tension.
- Usar \(\mu_l\) en g/m sin convertir a kg/m.
- Sustituir sin despeje simbolico previo.
- Redondear demasiado pronto en modos altos.
- Dar resultado sin unidad ni interpretacion.

## 3- Protocolo rapido de correccion
1. Reescribe la incognita con su unidad objetivo.
2. Comprueba que la formula corresponde a cuerda fija-fija.
3. Valida que \(n\in\{1,2,3,...\}\).
4. Verifica SI en todas las variables.
5. Contrasta en `Graficas` el patron modal esperado.

## 4- Senales de alarma
- Sale \(\mu_l<0\) o \(F_t<0\) sin sentido fisico.
- El modo calculado no coincide con nodos/antinodos en grafica.
- Frecuencias no guardan proporcion entera con la fundamental.

## 5- Cierre
Corregir con metodo te permite pasar de "hacer cuentas" a interpretar una cuerda vibrante como sistema fisico real.
