
import re
import unicodedata

def _normalize_text_for_search(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()

def _text_contains_token(text: str, token: str) -> bool:
    if not token:
        return False
    text_n = _normalize_text_for_search(text)
    token_n = _normalize_text_for_search(str(token).strip())
    if not token_n:
        return False
    # Use the EXACT regex from the validator
    pattern = rf"(?<![A-Za-z0-9_]){re.escape(token_n)}(?![A-Za-z0-9_])"
    match = re.search(pattern, text_n)
    return bool(match)

text = "## Resolución simbólica\nLa fuerza [[P]] es igual a..."
token = "P"

print(f"Normalized text: '{_normalize_text_for_search(text)}'")
print(f"Normalized token: '{_normalize_text_for_search(token)}'")
print(f"Match: {_text_contains_token(text, token)}")
