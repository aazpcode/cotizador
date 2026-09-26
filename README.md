# Cotizador IPSS

Generador de cotizaciones para carreras y modalidades del Instituto Profesional San Sebastián.

Este proyecto es una aplicación web estática para seleccionar una carrera, modalidad, cuotas y descuento, y generar una tarjeta de cotización con formato visual listo para compartir o imprimir.

## Características

- Catálogo de programas por año y diplomados
- Selección de carrera y modalidad
- Cálculo de matrícula, arancel anual, cuota mensual y ahorro con descuento
- Generación visual de tarjeta de cotización
- Diseño responsive y compatible con impresión
- Banner institucional integrado en la tarjeta

## Requisitos

- Navegador web moderno
- Python 3 (opcional, para servir archivos localmente)

## Cómo correrlo localmente

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta cualquiera de estas opciones:

```bash
bash start.sh
```

O directamente:

```bash
python3 -m http.server 8000
```

3. Abre en tu navegador:

```text
http://localhost:8000/
```

## Estructura del proyecto

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
└── ...
```

## Archivos principales

- `index.html` — punto de entrada para la aplicación
- `cotizador_ipss_v2.html` — interfaz principal del cotizador
- `cotizador_ipss.js` — lógica del catálogo y cálculo de cotización
- `cotizador_ipss.css` — estilos visuales de la aplicación y la tarjeta

## Nota

El proyecto es frontend estático y no requiere backend para funcionar. Está preparado para ser desplegado en GitHub Pages o servido localmente con un servidor HTTP simple.

## Licencia

Este proyecto está pensado para uso interno y de demostración. Ajusta la licencia según el uso final que le quieras dar.
