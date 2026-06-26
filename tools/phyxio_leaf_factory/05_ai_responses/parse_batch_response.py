"""
Parser de respuestas batch de markdown.

Toma la respuesta de la IA (que contiene los 12 archivos markdown)
y los divide en archivos .response.md individuales para el pipeline normal.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Any

CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import PRUEBAS_ROOT

DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"
DEFAULT_OUTPUT_ROOT = FACTORY_ROOT / "10_outputs"

# Mapeo de archivos markdown a nombres de respuesta
FILE_TO_RESPONSE = {
    "teoria.md": "06_teoria.response.md",
    "teoria.en.md": "07_teoria_en.response.md",
    "modelos.md": "08_modelos.response.md",
    "modelos.en.md": "09_modelos_en.response.md",
    "errores.md": "10_errores.response.md",
    "errores.en.md": "11_errores_en.response.md",
    "ejemplos.md": "12_ejemplos.response.md",
    "ejemplos.en.md": "13_ejemplos_en.response.md",
    "aplicaciones.md": "14_aplicaciones.response.md",
    "aplicaciones.en.md": "15_aplicaciones_en.response.md",
    "historia.md": "16_historia.response.md",
    "historia.en.md": "17_historia_en.response.md",
}


class BatchResponseParser:
    """Parser para respuestas batch de markdown."""

    # Patrones para detectar inicio y fin de archivo
    BEGIN_PATTERN = re.compile(r'===\s*BEGIN\s*FILE:\s*(.+?)\s*===', re.IGNORECASE)
    END_PATTERN = re.compile(r'===\s*END\s*FILE:\s*(.+?)\s*===', re.IGNORECASE)

    def __init__(self, content: str):
        self.content = content
        self.files: dict[str, str] = {}
        self.issues: list[dict] = []

    def parse(self) -> dict[str, str]:
        """
        Parsea el contenido y extrae archivos individuales.
        Soporta dos formatos:
        1. === BEGIN FILE: filename.md === ... === END FILE: filename.md ===
        2. Código markdown con comentarios <!-- FILE: filename.md -->
        """
        # Intentar formato con marcadores ===
        files = self._parse_with_markers()

        if not files:
            # Fallback: intentar formato con comentarios HTML
            files = self._parse_with_comments()

        if not files:
            # Último fallback: buscar por cabeceras # conocidas
            files = self._parse_by_headings()

        self.files = files
        return files

    def _parse_with_markers(self) -> dict[str, str]:
        """Parsea usando marcadores === BEGIN/END FILE ==="""
        files = {}
        pos = 0

        while pos < len(self.content):
            # Buscar inicio de archivo
            begin_match = self.BEGIN_PATTERN.search(self.content, pos)
            if not begin_match:
                break

            filename = begin_match.group(1).strip()
            start_pos = begin_match.end()

            # Buscar fin de archivo
            end_match = self.END_PATTERN.search(self.content, start_pos)
            if not end_match:
                self.issues.append({
                    "type": "missing_end",
                    "filename": filename,
                    "message": f"No se encontró marcador END para {filename}"
                })
                break

            # Extraer contenido
            content = self.content[start_pos:end_match.start()].strip()

            if content:
                files[filename] = content
            else:
                self.issues.append({
                    "type": "empty_content",
                    "filename": filename,
                    "message": f"Contenido vacío para {filename}"
                })

            pos = end_match.end()

        return files

    def _parse_with_comments(self) -> dict[str, str]:
        """Parsea usando comentarios HTML <!-- FILE: filename.md -->"""
        files = {}
        pattern = re.compile(r'<!--\s*FILE:\s*(.+?)\s*-->')

        matches = list(pattern.finditer(self.content))

        for i, match in enumerate(matches):
            filename = match.group(1).strip()
            start_pos = match.end()

            if i + 1 < len(matches):
                end_pos = matches[i + 1].start()
            else:
                end_pos = len(self.content)

            content = self.content[start_pos:end_pos].strip()

            # Limpiar líneas de código markdown si existen
            content = self._clean_code_fence(content)

            if content:
                files[filename] = content

        return files

    def _parse_by_headings(self) -> dict[str, str]:
        """
        Fallback: parsea buscando cabeceras # Title seguidas de ## Subsections conocidas.
        Esto es menos preciso pero puede funcionar si la IA no usó marcadores.
        """
        files = {}

        # Buscar patrones de archivos conocidos por sus estructuras
        file_patterns = {
            "teoria.md": r'#\s+.*\n\s*##\s+(?:Contexto conceptual|Conceptual context)',
            "teoria.en.md": r'#\s+.*\n\s*##\s+Conceptual context',
            "modelos.md": r'#\s+.*\n\s*##\s+(?:Modelo ideal|Ideal model)',
            "errores.md": r'#\s+.*\n\s*##\s+(?:Errores conceptuales|Conceptual errors)',
            "ejemplos.md": r'#\s+.*\n\s*##\s+(?:Enunciado|Problem statement)',
            "aplicaciones.md": r'##\s+1\.\s+',
            "historia.md": r'#\s+.*\n\s*##\s+(?:Problema histórico|Historical problem)',
        }

        for filename, pattern in file_patterns.items():
            match = re.search(pattern, self.content, re.MULTILINE | re.IGNORECASE)
            if match:
                # Extraer desde esta posición hasta el siguiente archivo o fin
                start_pos = match.start()

                # Buscar el siguiente archivo
                next_pos = len(self.content)
                for other_filename, other_pattern in file_patterns.items():
                    if other_filename == filename:
                        continue
                    other_match = re.search(other_pattern, self.content[start_pos + 1:], re.MULTILINE | re.IGNORECASE)
                    if other_match:
                        candidate_pos = start_pos + 1 + other_match.start()
                        if candidate_pos < next_pos:
                            next_pos = candidate_pos

                content = self.content[start_pos:next_pos].strip()
                if content:
                    files[filename] = content

        return files

    def _clean_code_fence(self, content: str) -> str:
        """Limpia fences de código markdown si existen."""
        # Si empieza con ```markdown o ```md, quitarlo
        if content.startswith("```markdown"):
            content = content[11:]
        elif content.startswith("```md"):
            content = content[5:]

        if content.startswith("```"):
            content = content[3:]

        if content.endswith("```"):
            content = content[:-3]

        return content.strip()

    def get_report(self) -> dict[str, Any]:
        """Genera un reporte del parsing."""
        expected = set(FILE_TO_RESPONSE.keys())
        found = set(self.files.keys())
        missing = expected - found
        unexpected = found - expected

        return {
            "total_expected": len(expected),
            "total_found": len(self.files),
            "missing_files": sorted(missing),
            "unexpected_files": sorted(unexpected),
            "issues": self.issues,
        }


def write_response_files(
    leaf_id: str,
    files: dict[str, str],
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
) -> list[Path]:
    """Escribe los archivos de respuesta individuales."""
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")
    leaf_response_dir = responses_root / leaf_id
    leaf_response_dir.mkdir(parents=True, exist_ok=True)

    written = []

    for filename, content in files.items():
        response_filename = FILE_TO_RESPONSE.get(filename)
        if not response_filename:
            print(f"[WARNING] Archivo no reconocido: {filename}, saltando...")
            continue

        response_path = leaf_response_dir / response_filename

        # Agregar header
        header = f"""# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: {leaf_id}
# Target response file: {filename}
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

{content}
"""
        response_path.write_text(header, encoding="utf-8")
        written.append(response_path)

    return written


def parse_batch_response(
    leaf_id: str,
    response_file: Path,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
) -> dict[str, Any]:
    """
    Parsea un archivo de respuesta batch y escribe los archivos individuales.
    """
    if not response_file.exists():
        return {"success": False, "error": f"Archivo no existe: {response_file}"}

    content = response_file.read_text(encoding="utf-8", errors="replace")

    parser = BatchResponseParser(content)
    files = parser.parse()

    if not files:
        return {
            "success": False,
            "error": "No se pudieron extraer archivos de la respuesta",
            "issues": parser.issues,
        }

    report = parser.get_report()

    written = write_response_files(leaf_id, files, responses_root)

    return {
        "success": True,
        "files_extracted": len(files),
        "files_written": len(written),
        "written_paths": [str(p) for p in written],
        "report": report,
        "issues": parser.issues,
    }


def main():
    parser = argparse.ArgumentParser(
        description="Parsea una respuesta batch de la IA y crea archivos .response.md individuales."
    )
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument(
        "--response-file",
        required=True,
        help="Ruta al archivo con la respuesta batch de la IA (txt/md)",
    )
    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help="Directorio raíz de respuestas de IA",
    )
    parser.add_argument(
        "--auto-write",
        action="store_true",
        help="Escribir automáticamente al leaf usando write_md_ai_responses.py después de parsear",
    )

    args = parser.parse_args()

    responses_root = Path(args.responses_root)
    response_file = Path(args.response_file)

    print(f"Parseando respuesta batch para: {args.leaf_id}")
    print(f"Archivo de entrada: {response_file}")
    print()

    result = parse_batch_response(
        leaf_id=args.leaf_id,
        response_file=response_file,
        responses_root=responses_root,
    )

    if not result["success"]:
        print(f"[ERROR] {result['error']}")
        if result.get("issues"):
            print("\nIssues detectados:")
            for issue in result["issues"]:
                print(f"  - {issue['type']}: {issue.get('message', 'Unknown')}")
        sys.exit(1)

    report = result["report"]

    print(f"[OK] Archivos extraídos: {result['files_extracted']}")
    print(f"[OK] Archivos escritos: {result['files_written']}")
    print()

    if report["missing_files"]:
        print(f"[WARNING] Archivos faltantes: {len(report['missing_files'])}")
        for f in report["missing_files"]:
            print(f"  - {f}")
        print()

    if report["unexpected_files"]:
        print(f"[INFO] Archivos inesperados (ignorados): {len(report['unexpected_files'])}")
        for f in report["unexpected_files"]:
            print(f"  - {f}")
        print()

    print("Archivos creados:")
    for path in result["written_paths"]:
        print(f"  - {path}")

    if result.get("issues"):
        print("\nIssues menores:")
        for issue in result["issues"]:
            print(f"  - {issue.get('type')}: {issue.get('filename', 'N/A')}")

    # Auto-write al leaf si se solicitó
    if args.auto_write:
        print("\n" + "=" * 50)
        print("AUTO-WRITE: Escribiendo archivos al leaf...")
        print("=" * 50)

        try:
            # Importar y usar el writer
            sys.path.insert(0, str(FACTORY_ROOT / "06_writers"))
            from write_md_ai_responses import write_all_md_responses

            write_results = write_all_md_responses(
                leaf_id=args.leaf_id,
                responses_root=responses_root,
                pruebas_root=PRUEBAS_ROOT,
            )

            success_count = sum(1 for r in write_results if r["success"])
            print(f"[OK] Escritos: {success_count}/{len(write_results)} archivos al leaf")

        except Exception as e:
            print(f"[ERROR] Falló auto-write: {e}")
            print("Puedes ejecutar manualmente:")
            print(f"  python tools/phyxio_leaf_factory/06_writers/write_md_ai_responses.py --leaf-id {args.leaf_id}")


if __name__ == "__main__":
    main()
