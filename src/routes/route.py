from __future__ import annotations

from flask import Blueprint


route = Blueprint('document_bp', __name__)

route.route('/documents', methods=['GET'])(lambda: 'Hello, World!')
