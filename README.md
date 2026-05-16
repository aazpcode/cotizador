# Cotizador IPSS

Pequeña aplicación estática para generar cotizaciones (tarjeta) localizada.

Requisitos mínimos
- Python 3 (para servir archivos estáticos localmente)

Instrucciones rápidas (modo local)

1. Abrir terminal en la carpeta del proyecto:

```bash
cd /workspaces/cotizador
```

2. Levantar servidor (opción 1 — recomendado):

```bash
bash start.sh
```

O bien directamente con Python:

```bash
python3 -m http.server 8000
```

3. Abrir en el navegador:

http://localhost:8000/

Archivo principal
- `cotizador_ipss_v2.html` — interfaz del cotizador.
- `cotizador_ipss.js` — lógica en JavaScript.
- `cotizador_ipss.css` — estilos.

Notas
- El archivo `cotizador_ipss.py` (si existe) solo contendrá una copia del JS en una cadena; borrarlo no afecta la página.
- Si quieres publicar en GitHub Pages, renombra `cotizador_ipss_v2.html` a `index.html` o usa el `index.html` creado que redirige.

¿Qué es esto: proyecto o app?

Es un proyecto web estático (una aplicación front-end). No tiene backend activo por ahora. Si quieres, puedo convertir la lógica en un servicio Python (Flask) o añadir más características.
# cotizador