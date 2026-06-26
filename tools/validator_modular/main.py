#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Entrypoint del validador modular Phyxio."""

from __future__ import annotations

import sys
from pathlib import Path

if __package__:
    from ._core import main, validate_leaf
else:
    sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
    from tools.validator_modular._core import main, validate_leaf

__all__ = ["main", "validate_leaf"]

if __name__ == "__main__":
    main()
