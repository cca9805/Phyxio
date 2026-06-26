#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Phyxio Leaf Validator v2 — Entrypoint modular"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))
from tools.validator_modular._core import main
if __name__ == "__main__":
    main()
