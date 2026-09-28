# Cotizador IPSS

Aplicación web para generar cotizaciones dinámicas de carreras, diplomados y modalidades del Instituto Profesional San Sebastián.

Este proyecto permite seleccionar el programa, modalidad, cuotas y descuento, y genera una tarjeta visual lista para compartir, mostrar o imprimir. Está pensado para uso institucional y comercial, con un enfoque moderno, claro y optimizado para dispositivos móviles.

## ✨ Funcionalidades

- Catálogo de programas y diplomados
- Selección de carrera, modalidad y cuotas
- Cálculo automático de arancel, descuento y cuota mensual
- Generación de tarjeta de cotización visual
- Diseño responsivo y mobile-first
- Banner institucional integrado en la interfaz
- Listo para deployment en GitHub Pages

## 🧩 Estructura del proyecto

```text
cotizador/
├── index.html
├── cotizador_ipss_v2.html
├── cotizador_ipss.js
├── cotizador_ipss.css
├── start.sh
├── README.md
├── img/
│   └── banner-principal.png
├── excel/
├── verify_diplomados.py
├── inspect_excel.py
└── ...
```

## 🚀 Cómo ejecutarlo localmente

### Opción 1: script incluido

```bash
bash start.sh
```

### Opción 2: servidor HTTP simple

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```text
http://localhost:8000/
```

## 📁 Archivos principales

- `index.html` — entrada principal de la aplicación
- `cotizador_ipss_v2.html` — vista principal del cotizador
- `cotizador_ipss.js` — lógica, datos y cálculo de la cotización
- `cotizador_ipss.css` — estilos y diseño visual
- `img/banner-principal.png` — banner institucional usado en la tarjeta

## 🌐 Despliegue

El proyecto está preparado para ser publicado en GitHub Pages o cualquier hosting estático.

## 📝 Nota

Es una aplicación frontend estática sin backend, por lo que no requiere configuración adicional para funcionar en entorno local o de demostración.

## 📜 Licencia

Proyecto orientado a uso interno y demostración institucional. Ajusta la licencia según el uso final que le quieras dar.
