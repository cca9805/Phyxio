# Índice del paquete validator_modular

El archivo `_core.py` contiene toda la lógica real del validador.
Los módulos temáticos reexportan subconjuntos para facilitar la lectura de la IA.

| Módulo | Descripción | Funciones |
|---|---|---|
| `_core.py` | Monolito completo generado automáticamente | TODAS |
| `constants.py` | Constantes globales, listas de secciones y patrones regex | 0 |
| `utils.py` | Utilidades básicas: IO, YAML, conteo, normalización de texto | 76 |
| `yaml_checks.py` | Validación de meta.yaml, magnitudes.yaml, formulas.yaml, interpretacion.yaml | 10 |
| `markdown_checks.py` | Validación de todos los archivos .md (teoria, modelos, errores, ejemplos, aplicaciones, historia) | 16 |
| `graph_checks.py` | Validación de gráficos SVG, DCL y Coord: registro, identidad, infocards, bilingüismo | 21 |
| `coherence_checks.py` | Coherencia inter-archivos: símbolos, fórmulas↔magnitudes↔interpretación, markdown_entity_sync | 6 |
| `semantic_checks.py` | Semántica didáctica: coverage, example_semantics, didactic_contract, learning_dynamics, cognitive_load | 7 |
| `report.py` | Puntuación, reporte de resultados y sugerencias de corrección automática | 6 |
| `main.py` | Orquestador validate_leaf() y punto de entrada CLI main() | 2 |

## Funciones por módulo

### utils
- `CheckResult`
- `_any_token_present`
- `_build_formula_search_entry`
- `_canonicalize_section_fragment`
- `_collect_formula_entries`
- `_collect_interpretation_target_keys`
- `_collect_magnitude_entries`
- `_collect_markdown_files`
- `_core_formula_labels`
- `_core_magnitude_labels`
- `_count_shared_core_hits`
- `_entry_present_in_text`
- `_entry_tokens`
- `_extract_interpretation_target_text`
- `_extract_markdown_section`
- `_extract_section_bodies`
- `_first_long_sentence`
- `_formula_is_important`
- `_formula_ref_lines_outside_section`
- `_iter_map_nodes`
- `_markdown_words_without_formula_refs`
- `_marker_hit`
- `_normalize_compare_text`
- `_normalize_compare_value`
- `_normalize_text_for_search`
- `_rank_core_formulas`
- `_rank_core_magnitudes`
- `_read_optional_text`
- `_safe_dict`
- `_safe_list`
- `_safe_yaml_list`
- `_section_similarity`
- `_significant_words`
- `_split_application_body_and_markers`
- `_strip_inline_math_delimiters`
- `_strip_markdown_protected_spans`
- `_text_contains_token`
- `_yaml_to_searchable_text`
- `analyze_required_heading_structure`
- `build_prose_quality_checks`
- `check_required_emoji_prefixes`
- `collect_markdown_word_counts`
- `configure_console_encoding`
- `count_words`
- `extract_leaf_dir`
- `extract_markdown_sections_by_level`
- `extract_math_tokens`
- `extract_numbered_h2_sections`
- `find_bare_formula_issues`
- `find_empty_example_part_issues`
- `find_generic_markdown_template_issues`
- `find_leaf_dirs`
- `find_map_ancestor_chain_by_leaf_id`
- `find_markdown_math_render_issues`
- `find_missing_sections`
- `find_mojibake_lines`
- `find_placeholder_lines`
- `find_repeated_long_sentences`
- `find_theory_inline_highlight_formula_issues`
- `find_theory_variety_issues`
- `find_visible_formula_id_issues`
- `find_workspace_root`
- `gather_magnitude_symbols`
- `heading_matches`
- `is_leaf_dir`
- `load_yaml`
- `normalize_heading_title`
- `normalize_prose_fragment`
- `normalize_symbol`
- `parse_markdown_headings`
- `read_text`
- `repair_mojibake`
- `rough_english_check`
- `strip_inline_math`
- `strip_js_comments`
- `validate_history`

### yaml_checks
- `derive_meta_hierarchy_from_map`
- `derive_meta_hierarchy_from_route`
- `find_map_node_by_leaf_id`
- `find_map_nodes_by_leaf_id`
- `load_official_map_data`
- `validate_formulas`
- `validate_interpretacion`
- `validate_magnitudes`
- `validate_meta`
- `validate_meta_against_map`

### markdown_checks
- `find_aplicaciones_template_issues`
- `find_required_section_content_issues`
- `validate_aplicaciones`
- `validate_ejemplos`
- `validate_english_files`
- `validate_errores_internal_structure`
- `validate_exact_files`
- `validate_historia_functional`
- `validate_latex_format`
- `validate_leaf_uniqueness`
- `validate_magnitude_tagging`
- `validate_markdown_rendering_files`
- `validate_markdown_structure`
- `validate_modelos_cuantitativo`
- `validate_modelos_reinforced`
- `validate_mojibake_files`

### graph_checks
- `_collect_graph_texts`
- `_entry_present_in_any_graph`
- `check_coord_bilingual_structure`
- `check_dcl_warning_i18n`
- `find_duplicate_long_paragraphs`
- `resolve_graph_registry`
- `route_graph_namespace`
- `validate_coord_semantic_alignment`
- `validate_dcl_profile_structure`
- `validate_graph_calc_dependency`
- `validate_graph_components`
- `validate_graph_identity`
- `validate_graph_infocards`
- `validate_graph_no_overlap`
- `validate_graph_not_decorative`
- `validate_graph_reuse`
- `validate_graph_shared_infrastructure`
- `validate_graph_standard_contract`
- `validate_graph_star_uniqueness`
- `validate_graph_type_rules`
- `validate_pregunta_fisica_central`

### coherence_checks
- `validate_cross_file_coherence`
- `validate_graph_leaf_coherence`
- `validate_graph_magnitude_coherence`
- `validate_graph_pfc_coherence`
- `validate_markdown_entity_sync`
- `validate_symbol_consistency`

### semantic_checks
- `validate_cognitive_load`
- `validate_concept_coverage`
- `validate_example_semantics`
- `validate_interpretation_semantics`
- `validate_leaf_didactic_contract`
- `validate_leaf_operational_identity`
- `validate_learning_dynamics`

### report
- `auto_fix_suggestions`
- `build_audit_report`
- `print_count_report`
- `print_full_report`
- `print_words_report`
- `score_results`

### main
- `main`
- `validate_leaf`

