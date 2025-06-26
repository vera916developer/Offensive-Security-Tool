from __future__ import annotations

from flask import Flask

from src.routes.route import route

app = Flask(__name__)


def create_app():
    app.register_blueprint(
        route, url_prefix='/api/documents_electronics/v1.1',
    )
    return app


if __name__ == '__main__':
    app = create_app()
    app.run()
