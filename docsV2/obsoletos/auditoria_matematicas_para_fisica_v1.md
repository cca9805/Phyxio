# Auditoria de matematicas para fisica v1

## Estado inicial

El mapa canonico propuesto para `frontend/src/data_v2_i18n/matematicas` queda definido en `docsV2/mapa_matematicas_para_fisica_v1.yaml`.

- Bloques: 12
- Leafs previstos: 81
- Leafs existentes con `meta.yaml` antes de la migracion: 19

Los leafs existentes no cumplen todavia el contrato matematico. En la muestra validada (`matematicas/algebra-para-fisica/despeje-de-formulas`) aparecen problemas estructurales:

- faltan archivos propios de matematicas: `procedimiento.md`, `aplicaciones_fisicas.md`, `practica.md` y equivalentes `.en.md`;
- el `meta.yaml` conserva datos de un leaf de fisica (`campo-y-potencial-gravitatorio`);
- existen archivos legacy de fisica (`formulas.yaml`, `magnitudes.yaml`, `modelos.md`, `historia.md`) con placeholders;
- los markdown actuales no tienen las secciones didacticas del contrato matematico.

## Estado tras migracion estructural

Se elimino la estructura antigua de `frontend/src/data_v2_i18n/matematicas` y se genero de nuevo desde el mapa canonico.

- Leafs generados: 81
- Archivos generados: 1053
- Archivos obligatorios faltantes: 0
- Archivos extra no reconocidos: 0
- Fallos de coherencia con el mapa: 0
- Mojibake detectado: 0

Los fallos restantes del validador son de `desarrollo minimo`, esperables en esta fase porque los archivos contienen solo estructura base. La siguiente fase ya no es estructural: es redaccion didactica leaf por leaf.

## Contrato adoptado

La plantilla de trabajo queda en `docsV2/plantilla_matematicas_para_fisica_v1.md`. La estructura canonica de un leaf matematico es:

```text
meta.yaml
teoria.md / teoria.en.md
procedimiento.md / procedimiento.en.md
errores.md / errores.en.md
ejemplos.md / ejemplos.en.md
aplicaciones_fisicas.md / aplicaciones_fisicas.en.md
practica.md / practica.en.md
```

`formulas.yaml`, `magnitudes.yaml` e `interpretacion.yaml` no son obligatorios para matematicas porque aqui no se modelan magnitudes fisicas; solo tendrian sentido como adaptadores tecnicos si el frontend los necesitase.

## Herramientas creadas

- `tools/phyxio_math_leaf_validator.py`: valida leafs matematicos con reglas propias, separadas de la plantilla fisica v5.
- `tools/scaffold_math_leafs.py`: genera estructura desde el mapa, en modo dry-run por defecto.

## Primer lote recomendado

El primer lote debe ser `minimo_escolar`, porque es la base operativa para leer problemas de fisica sin bloquearse por algebra, escala, graficas, trigonometria y vectores.

Leafs del primer lote:

1. `algebra-para-fisica/despeje-de-formulas`
2. `algebra-para-fisica/notacion-cientifica-y-prefijos`
3. `algebra-para-fisica/orden-de-magnitud`
4. `funciones-y-graficas/lectura-de-graficas`
5. `funciones-y-graficas/pendiente-y-area`
6. `trigonometria-y-geometria/funciones-trigonometricas`
7. `trigonometria-y-geometria/proyecciones-y-componentes`
8. `vectores-y-geometria-vectorial/operaciones-con-vectores`

## Decision practica

La migracion de estructura ya esta hecha. La redaccion debe hacerse por lotes:

1. escribir contenido real en espanol e ingles;
2. validar cada leaf con `tools/phyxio_math_leaf_validator.py`;
3. pasar al siguiente lote solo cuando el anterior sea publicable.

El scaffold puede usarse para crear carpetas y archivos base, pero no sustituye la redaccion didactica.
