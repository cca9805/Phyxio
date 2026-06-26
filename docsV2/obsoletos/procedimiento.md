

1º Leete el archivo docsV2/plantilla_v5.md y centrate única y exclusivamente en el archivo de formulas.yaml.

## Formulas

2º- Crea o revisa y corrige si ya existe el archivo formulas.yaml que corresponden a ese leaf, asegurandote de que contiene cada formula imprescindible para ese leaf
3º- Lee en la plantilla_v5.md el apartado 9. formulas.yaml desde la línea 824 
4º- Asegurate de que el formulas.yaml del leaf contiene todos los campos necesarios bien rellenados y que no quedan vacíos, este archivo es el corazón del leaf,  primero se crea fórmulas con toda las fórmulas de este leaf y a partir de ahí se fabrica lo demás, no se fabrica formulas con los restos de otros archivos. Primero fórmulas y a partir de este archivo se construye todo lo demás.
5º- Vuelve a revisar si el archivo está completo y es correcto. Siempre bajo las reglas de la plantilla_v5.

## Magnitudes

6º- Leete la plantilla_v5.md apartado 7. magnitudes.yaml a partir de la línea 672
7º- Crea o revisa y corrige si ya existe el archivo magnitudes.yaml del leaf, asegurandote de que contien todas las magnitudes de las fórmulas del archivo formulas.yaml, únicamente deben contener las magnitudes fundamentales que intervienen o se declaran en formulas.yaml
8º- Revisa que están todos los campos que indica la plantilla_v5.md bien rellenados
9º Revisa de nuevo el archivo magnitudes.yaml. Siempre bajo las reglas de la plantilla_v5.

## Intepretación

10º- Leete la plantilla_v5.md apartado  10. interpretacion.yaml a partir de la línea 1009
11º- Crea o revisa y corrige si ya existe el archivo interpretacion.yaml del leaf, asegurandote de que contiene todos los campos de interpretacion que indica la plantilla del archivo interpretacion.yaml
12º- Revisa de nuevo que están todos los campos y que dichos campos no estén vacíos. Siempre bajo las reglas de la plantilla_v5.

## Resto de archivos

13º- Lee la plantilla_v5 antes de crear cada archivo .md y .en.md
14º- Por orden y empezando por los 2 archivos de teoría debes crearlos según la plantilla_v5 y entorno a los archivos de fórmulas.yaml y magnitudes.yaml, asegurando coherencia y pulcritud didáctica. (No pongas Nivel Dios en ningún sitio)
15º- Revisa cada archivo por segunda vez buscando errores o incoherencias. Siempre bajo las reglas de la plantilla_v5.

## Validador

16º- Pasa el validador tools\validadores\phyxio_leaf_validator.py
17º- Si hay fails, es que algo se ha hecho mal, corrigelo
18º- Repite el paso 17º hasta eliminar los fails
19º- ¿Hay coherencia entre formulas, magnitudes, interpretación y archivos .md y .en.md?. Siempre bajo las reglas de la plantilla_v5.
19º- Si no hay errores y todo es coherente me lo comunicas con un "Logrado"