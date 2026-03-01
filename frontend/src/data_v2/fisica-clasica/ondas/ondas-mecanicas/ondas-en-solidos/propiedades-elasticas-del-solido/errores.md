# Errores Frecuentes En Propiedades Elasticas Del Solido

## 1- Usar el modulo equivocado
No todo problema usa \(E\); para corte se requiere \(G\).

## 2- Ignorar Poisson en conversiones
Pasar de \(E\) a \(G\) o \(K\) sin \(\nu\) produce resultados incoherentes.

## 3- Confundir aproximacion y formula general
\(v_L\approx\sqrt{E/\rho}\) no reemplaza siempre la expresion general con \(K\) y \(G\).

## 4- Fallo de unidades
GPa debe convertirse a Pa y g/cm^3 a kg/m^3.

## 5- Mezclar esfuerzo y presion sin contexto
Ambos usan Pa, pero su interpretacion mecanica depende del estado tensional.

## 6- Suponer isotropia universal
Materiales compuestos o laminados pueden requerir modelo anisotropo.

## 7- Olvidar verificar orden de magnitud
Valores fuera de rango tipico indican error en datos o formula.

## 8- Interpretacion incompleta
Un resultado numerico debe cerrarse con lectura de rigidez, inercia y tipo de onda.

## 9- No validar dominio lineal
Con grandes deformaciones, Hooke lineal puede dejar de ser aplicable.

## 10- Resolver sin estrategia
Primero clasificar fenomeno, luego calcular; no al contrario.
