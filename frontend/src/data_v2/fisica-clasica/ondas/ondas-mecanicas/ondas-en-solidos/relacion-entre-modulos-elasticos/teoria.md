# Relacion Entre Modulos Elasticos

## Idea clave
En un solido elastico lineal isotropo, los modulos \(E\), \(G\), \(K\) y el coeficiente de Poisson \(\nu\) no son independientes. Conocer dos de ellos (con consistencia fisica) permite calcular los demas.

## 1- Que estudia este tema y por que es fundamental
Este tema establece las conversiones constitutivas entre modulos elasticos y su impacto directo en propagacion ondulatoria.

Es fundamental porque:
- evita usar combinaciones de modulos incompatibles,
- permite pasar de datos experimentales a parametros de modelo,
- conecta elasticidad estatica con velocidades de onda en solidos.

## 2- Marco fisico: de la ley constitutiva al modelo ondulatorio
En isotropia lineal, la respuesta elastica del material queda totalmente determinada por dos parametros independientes.

Si eliges \(E\) y \(\nu\), puedes derivar \(G\) y \(K\).
Si eliges \(K\) y \(G\), puedes recuperar \(E\) y \(\nu\).

Esto es clave para que las velocidades \(v_L\) y \(v_T\) salgan coherentes en el mismo material.

## 3- Magnitudes y parametros esenciales
- \(E\): modulo de Young (Pa).
- \(G\): modulo de corte (Pa).
- \(K\): modulo volumetrico (Pa).
- \(\nu\): coeficiente de Poisson (1).
- \(\rho\): densidad (kg/m^3).
- \(v_L\): velocidad longitudinal (m/s).
- \(v_T\): velocidad transversal de corte (m/s).

## 4- Formulas esenciales y lectura fisica
Relacion Young-corte-Poisson:

$$
E=2G(1+\nu)
$$

Relacion volumetrico-Young-Poisson:

$$
K=\frac{E}{3(1-2\nu)}
$$

Poisson desde \(K\) y \(G\):

$$
\nu=\frac{3K-2G}{2(3K+G)}
$$

Young desde \(K\) y \(G\):

$$
E=\frac{9KG}{3K+G}
$$

Corte desde \(E\) y \(\nu\):

$$
G=\frac{E}{2(1+\nu)}
$$

Velocidades asociadas:

$$
v_T=\sqrt{\frac{G}{\rho}},\qquad v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
$$

Lectura fisica:
- \(G\) controla la respuesta de corte y por tanto \(v_T\),
- \(K\) influye en compresion volumetrica y contribuye a \(v_L\),
- \(\nu\) gobierna como se acoplan deformaciones axial y transversal.

## 5- Restricciones fisicas y dominio de validez
Para material isotropo elastico lineal estable:
- \(E>0\), \(G>0\), \(K>0\),
- \(-1<\nu<0.5\),
- en materiales comunes: \(0\le\nu\lesssim0.45\).

Si los datos violan estas condiciones, el conjunto de modulos es inconsistente o el modelo no aplica.

## 6- Metodo de resolucion recomendado
1. Identifica que pares de modulos te da el problema.
2. Elige la relacion constitutiva minima para hallar la incognita.
3. Verifica restricciones fisicas de \(\nu\) y positividad de modulos.
4. Si el problema incluye ondas, calcula \(v_T\) y \(v_L\) con \(\rho\).
5. Comprueba orden de magnitud y coherencia interna.

## 7- Errores tipicos que debes evitar
- tratar \(E\), \(G\), \(K\) como independientes.
- usar formulas de isotropia en material anisotropo sin advertencia.
- olvidar que \(\nu\) cercano a 0.5 vuelve grande a \(K\).
- mezclar unidades (GPa y Pa).
- aceptar resultados con \(\nu\) fuera de rango fisico.

## 8- Ejemplo completo guiado
Datos:
- \(E=210\times10^9\ \mathrm{Pa}\),
- \(\nu=0.30\),
- \(\rho=7850\ \mathrm{kg/m^3}\).

Paso 1- calcular \(G\):

$$
G=\frac{E}{2(1+\nu)}=\frac{210\times10^9}{2.6}=80.77\times10^9\ \mathrm{Pa}
$$

Paso 2- calcular \(K\):

$$
K=\frac{E}{3(1-2\nu)}=\frac{210\times10^9}{1.2}=175\times10^9\ \mathrm{Pa}
$$

Paso 3- velocidades:

$$
v_T=\sqrt{\frac{G}{\rho}}\approx3207\ \mathrm{m/s}
$$

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}\approx6003\ \mathrm{m/s}
$$

Interpretacion:
- \(v_L>v_T\) como se espera,
- el conjunto de modulos es consistente para acero estructural.

## 9- Aplicaciones reales
- conversion de parametros para modelos FEM.
- validacion de propiedades elasticas en laboratorio.
- estimacion de velocidades sismicas desde ensayos mecanicos.
- calibracion de ultrasonidos en control no destructivo.

## 10- Sintesis final
Dominar este tema significa:
- convertir modulos sin incoherencias,
- validar restricciones fisicas del material,
- conectar elasticidad con propagacion ondulatoria,
- resolver problemas con criterio constitutivo, no por memoria.
