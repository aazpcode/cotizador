from pathlib import Path

html = Path('cotizador_ipss_v2.html').read_text(encoding='utf-8')
js = Path('cotizador_ipss.js').read_text(encoding='utf-8')

checks = {
    '5 cuota button': 'id="cq-5"' in html,
    'diploma restriction': 'getCatalogoActual() === CATALOGOS.diplomados ? [5] : [10, 12]' in js,
    'event wiring': 'elements.botonesCuotas[5].addEventListener' in js,
    'catalog selection': "diplomados: { label: 'Diplomados'" in js,
}

assert all(checks.values()), checks
print('OK:', checks)
