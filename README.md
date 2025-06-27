# 🛡️ Offensive Security Tool

Una herramienta ofensiva modular escrita en Python para realizar análisis de red, escaneo de puertos y detección de vulnerabilidades de forma automatizada, siguiendo buenas prácticas de ingeniería de software (POO, arquitectura MVC, testing, pre-commit y pipenv).

---

## 🧠 Características

- 🧰 Arquitectura limpia basada en MVC.
- 🐍 Programación orientada a objetos.
- 📦 Uso de `pipenv` para gestión de entorno.
- 🔎 Escaneo de puertos.
- ⚠️ Detección de vulnerabilidades.
- 📝 Generación automática de reportes `.txt`.
- 🔒 Seguridad y estándares de código con `pre-commit`, `black`, `isort` y `flake8`.

---

## 📁 Estructura del Proyecto

```plaintext
offensive_security_tool/
├── .github/                     # Workflows para CI/CD
│   └── workflows/
├── .vscode/                     # Configuración de entorno (opcional)
├── src/
│   └── offensive_tool/
│       ├── __init__.py
│       ├── controllers/
│       │   ├── __init__.py
│       ├── models/
│       │   ├── __init__.py
│       ├── views/
│       │   ├── __init__.py
│       ├── services/
│       │   ├── __init__.py
│       ├── utils/
│       │   ├── __init__.py
│       └── main.py
├── Pipfile                      # Dependencias
├── Pipfile.lock                 # Versiones bloqueadas
├── .pre-commit-config.yaml      # Hooks de validación
├── setup.py                     # Configuración de empaquetado
├── .gitignore                   # Archivos ignorados por Git
├── README.md                    # Este archivo
├── LICENSE.md                   # Licencia MIT
├── SECURITY.md                  # Política de seguridad
└── .python-version              # Versión requerida de Python
```

## 🚀 Instalación
```bash
git clone git@github.com:vera916developer/Offensive-Security-Tool.git
cd offensive_security_tool
pip install pipenv
pipenv install
pipenv shell
```
## 🔐 Pre-commit Hooks
Activa los hooks de pre-commit para asegurar calidad del código:

```bash
pre-commit install
pre-commit run --all-file
```

Incluye validaciones con:
- don't commit to branch
- pretty format json
- python tests naming
- fix end of files
- fix double quoted strings
- check yaml
- check for merge conflicts
- debug statements (python)
- Reorder python imports
- Add trailing commas
- pyupgrade
- autopep8
- flake8
- mypy

## 🧪 Ejemplo de Uso
```py
from offensive_tool.controllers.scanner_controller import ScannerController
from offensive_tool.controllers.report_controller import ReportController

def main():
    scanner = ScannerController()
    reporter = ReportController()

    target_ip = input("Enter target IP: ")
    scan_results = scanner.perform_scan(target_ip)
    reporter.generate_txt_report(scan_results)

if __name__ == "__main__":
    main()
```
Generará un archivo .txt en el directorio output/ con:
- IP objetivo
- Puertos abiertos
- Vulnerabilidades detectadas
- Timestamps

## 📑 Documentación
- README.md: Guía del proyecto
- SECURITY.md: Cómo reportar vulnerabilidades
- LICENSE.md: Licencia MIT del proyecto.
- .pre-commit-config.yaml: Validaciones automatizadas
## 🛠️ Contribución
1. Haz un fork del repositorio.
2. Crea una rama con tu mejora: git checkout -b feature/`<nombre>`.
3. Realiza tus cambios y commitea: git commit -m 'Agrega nueva funcionalidad'.
4. Push a tu rama: git push origin feature/`<nombre>`.
5. Abre un Pull Request.

## 📬 Contacto
Para dudas, sugerencias o reportes de seguridad, contáctame:
Email: veradeveloper916@gmail.com
GitHub: https://github.com/veradeveloper


## 📜 Licencia
Este proyecto está bajo la licencia [Licencia MIT](LICENSE.md) .
