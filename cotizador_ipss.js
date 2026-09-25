const MODALIDADES = [
  { key: 'online', label: 'Online' },
  { key: 'diurno', label: 'Diurno' },
  { key: 'vespertino', label: 'Vespertino' },
  { key: 'semipresencial', label: 'Semipresencial' },
];

const CARRERAS = [
  { n: 'ADMINISTRACIÓN PÚBLICA', modalidades: { online: 2000000, diurno: null, vespertino: null } },
  { n: 'AUDITORÍA', modalidades: { online: 1995000, diurno: null, vespertino: null } },
  { n: 'CONTABILIDAD GENERAL', modalidades: { online: 1995000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA INDUSTRIAL', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN ADMINISTRACIÓN DE EMPRESAS', modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'INGENIERÍA EN CIENCIA DE DATOS', modalidades: { online: 2070000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN CIBERSEGURIDAD', modalidades: { online: 2340000, diurno: 2220000, vespertino: 2390000 } },
  { n: 'INGENIERÍA EN CONECTIVIDAD Y REDES', modalidades: { online: 2175000, diurno: 2220000, vespertino: 2470000 } },
  { n: 'INGENIERÍA EN FINANZAS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN INFORMÁTICA', modalidades: { online: 2240000, diurno: 2220000, vespertino: 2430000 } },
  { n: 'INGENIERÍA EN LOGÍSTICA', modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'INGENIERÍA EN MARKETING DIGITAL', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN PREVENCIÓN DE RIESGOS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN RECURSOS HUMANOS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'INGENIERÍA EN SEGURIDAD PRIVADA', modalidades: { online: 2060000, diurno: null, vespertino: null } },
  { n: 'NATUROPATÍA', modalidades: { online: null, diurno: null, vespertino: 1980000 } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN DE EMPRESAS', modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN PÚBLICA', modalidades: { online: 2000000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN CIENCIA DE DATOS', modalidades: { online: 2070000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN CIBERSEGURIDAD', modalidades: { online: 2340000, diurno: 2220000, vespertino: 2390000 } },
  { n: 'TÉCNICO EN CONECTIVIDAD Y REDES', modalidades: { online: 2175000, diurno: 2220000, vespertino: 2470000 } },
  { n: 'TÉCNICO EN ENFERMERÍA', modalidades: { online: null, diurno: 2090000, vespertino: 2110000 } },
  { n: 'TÉCNICO EN ENFERMERÍA E INSTRUMENTACIÓN QUIRÚRGICA', modalidades: { online: null, diurno: null, vespertino: 1890000 } },
  { n: 'TÉCNICO EN FARMACIA', modalidades: { online: null, diurno: null, vespertino: 1980000 } },
  { n: 'TÉCNICO EN FINANZAS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN INFRAESTRUCTURA CLOUD', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN LOGÍSTICA', modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'TÉCNICO EN MARKETING DIGITAL', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN PREVENCIÓN DE RIESGOS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
  { n: 'TÉCNICO EN PROGRAMACIÓN Y ANALISIS DE SISTEMAS', modalidades: { online: 2240000, diurno: 2220000, vespertino: 2430000 } },
  { n: 'TÉCNICO EN RECURSOS HUMANOS', modalidades: { online: 1980000, diurno: null, vespertino: null } },
];

const CARRERAS_2027 = [
  { n: 'ADMINISTRACIÓN PÚBLICA', modalidades: { online: 2106000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'AUDITORÍA', modalidades: { online: 2214000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN ADMINISTRACIÓN DE EMPRESAS', modalidades: { online: 2169000, diurno: 2085000, vespertino: 2204000, semipresencial: null } },
  { n: 'INGENIERÍA EN COMERCIO EXTERIOR', modalidades: { online: 2198000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN FINANZAS', modalidades: { online: 2085000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN LOGÍSTICA', modalidades: { online: 2169000, diurno: 2101000, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN MARKETING DIGITAL', modalidades: { online: 2085000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN RRHH', modalidades: { online: 2237000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN SEGURIDAD PRIVADA', modalidades: { online: 2060000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'CONTABILIDAD GENERAL', modalidades: { online: 2214000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN DE EMPRESAS', modalidades: { online: 2169000, diurno: 2085000, vespertino: 2204000, semipresencial: null } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN PÚBLICA', modalidades: { online: 2106000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN COMERCIO EXTERIOR', modalidades: { online: 2198000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN FINANZAS', modalidades: { online: 2085000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN LOGÍSTICA', modalidades: { online: 2169000, diurno: 2101000, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN MARKETING DIGITAL', modalidades: { online: 2085000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN RRHH', modalidades: { online: 2237000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'NATUROPATÍA', modalidades: { online: null, diurno: 2085000, vespertino: null, semipresencial: 2085000 } },
  { n: 'TÉCNICO EN ENFERMERÍA', modalidades: { online: null, diurno: 2404000, vespertino: 2427000, semipresencial: 2427000 } },
  { n: 'TÉCNICO EN ENFERMERÍA E INSTRUMENTACIÓN QUIRÚRGICA', modalidades: { online: null, diurno: 2174000, vespertino: null, semipresencial: 2174000 } },
  { n: 'TÉCNICO EN FARMACIA', modalidades: { online: null, diurno: null, vespertino: 2277000, semipresencial: 2277000 } },
  { n: 'TÉCNICO EN IMAGENOLOGÍA', modalidades: { online: 2524000, diurno: null, vespertino: null, semipresencial: 2524000 } },
  { n: 'TÉCNICO EN ODONTOLOGÍA', modalidades: { online: 2524000, diurno: null, vespertino: null, semipresencial: 2524000 } },
  { n: 'TÉCNICO VETERINARIO EN CLÍNICA DE ANIMALES DE COMPAÑÍA', modalidades: { online: null, diurno: null, vespertino: null, semipresencial: 2353000 } },
  { n: 'INGENIERÍA EN ARQUITECTURA CLOUD', modalidades: { online: 2395000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN CIBERSEGURIDAD', modalidades: { online: 2464000, diurno: 2517000, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN CIENCIA DE DATOS', modalidades: { online: 2298000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN CONECTIVIDAD Y REDES', modalidades: { online: 2290000, diurno: 2601000, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN CONSTRUCCIÓN', modalidades: { online: 2524000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN ELECTRICIDAD', modalidades: { online: 2461000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN INFORMÁTICA', modalidades: { online: 2359000, diurno: 2338000, vespertino: 2430000, semipresencial: null } },
  { n: 'INGENIERÍA EN INTELIGENCIA ARTIFICIAL', modalidades: { online: 2237000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN OPERACIONES MINERAS', modalidades: { online: 2396000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA EN PREVENCIÓN DE RIESGOS', modalidades: { online: 2198000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'INGENIERÍA INDUSTRIAL', modalidades: { online: 2085000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN CIBERSEGURIDAD', modalidades: { online: 2464000, diurno: 2338000, vespertino: 2517000, semipresencial: null } },
  { n: 'TÉCNICO EN CIENCIA DE DATOS', modalidades: { online: 2298000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN CONECTIVIDAD Y REDES', modalidades: { online: 2290000, diurno: 2601000, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN CONSTRUCCIÓN', modalidades: { online: 2524000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN CONTROL INDUSTRIAL', modalidades: { online: 2248000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN ELECTRICIDAD', modalidades: { online: 2461000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN GESTIÓN INDUSTRIAL', modalidades: { online: 2248000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN INFRAESTRUCTURA CLOUD', modalidades: { online: 2190000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN INSTALACIONES ELÉCTRICAS', modalidades: { online: 2397000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN INTELIGENCIA ARTIFICIAL', modalidades: { online: 2237000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN OPERACIONES MINERAS', modalidades: { online: 2396000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN PREVENCIÓN DE RIESGOS', modalidades: { online: 2198000, diurno: null, vespertino: null, semipresencial: null } },
  { n: 'TÉCNICO EN PROGRAMACIÓN COMPUTACIONAL', modalidades: { online: 2307000, diurno: 2338000, vespertino: 2559000, semipresencial: null } },
  { n: 'TÉCNICO EN PROGRAMACIÓN Y ANÁLISIS DE SISTEMAS', modalidades: { online: 2307000, diurno: 2338000, vespertino: 2559000, semipresencial: null } },
];

const DIPLOMADOS = [
  { n: 'DIPLOMADO EN CIBERSEGURIDAD', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN FULL STACK', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN REDES INDUSTRIALES', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN ARQUITECTURA CLOUD', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN GESTIÓN DE PROYECTOS TI', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN UX/UI CON IA APLICADA', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN IA GENERATIVA APLICADA', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN INFRAESTRUCTURA CLOUD', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN SEGURIDAD OFENSIVA', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN HOSPITALIZACION DOMICILIARIA', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN CUIDADOS INTEGRALES', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN CURACIONES AVANZADAS', modalidades: { online: 990000 } },
  { n: 'DIPLOMADO EN CUIDADOS PALIATIVOS', modalidades: { online: 990000 } },
];

const CATALOGOS = {
  '2026': { label: 'Carreras 2026', items: CARRERAS },
  '2027': { label: 'Nuevas carreras 2027', items: CARRERAS_2027 },
  diplomados: { label: 'Diplomados', items: DIPLOMADOS },
};

const elements = {
  categoria: document.getElementById('selCategoria'),
  carrera: document.getElementById('selCarrera'),
  carrerasList: document.getElementById('carrerasList'),
  preview: document.getElementById('previewSection'),
  tarjetaContainer: document.getElementById('tarjetaContainer'),
  notif: document.getElementById('notif'),
  descuento: document.getElementById('selDescuento'),
  botonesCatalogo: {
    2026: document.getElementById('catalog-2026'),
    2027: document.getElementById('catalog-2027'),
    diplomados: document.getElementById('catalog-diplomados'),
  },
  botonesModalidad: MODALIDADES.map(({ key }) => document.getElementById(`btn-${key}`)),
  botonesCuotas: {
    5: document.getElementById('cq-5'),
    10: document.getElementById('cq-10'),
    12: document.getElementById('cq-12'),
  },
};

let modSel = null;
let cuotasSel = 10;
let notifTimer = null;

function getCuotasDisponibles() {
  return getCatalogoActual() === CATALOGOS.diplomados ? [5] : [10, 12];
}

function actualizarCuotasDisponibles() {
  const cuotasDisponibles = getCuotasDisponibles();
  const cuotaInicial = cuotasDisponibles.includes(cuotasSel) ? cuotasSel : cuotasDisponibles[0];
  cuotasSel = cuotaInicial;

  Object.entries(elements.botonesCuotas).forEach(([valor, boton]) => {
    const cuota = Number(valor);
    const visible = cuotasDisponibles.includes(cuota);
    boton.style.display = visible ? '' : 'none';
    boton.classList.toggle('active', cuota === cuotaInicial);
  });
}

function formatMoney(value) {
  return value == null ? '—' : `$${Math.round(value).toLocaleString('es-CL')}`;
}

function getCatalogoActual() {
  return CATALOGOS[elements.categoria.value] || CATALOGOS['2026'];
}

function getCarrera() {
  const catalogo = getCatalogoActual();
  const texto = (elements.carrera.value || '').trim();

  if (!texto) return null;

  const matchExact = catalogo.items.find((item) => item.n.toLowerCase() === texto.toLowerCase());
  if (matchExact) return matchExact;

  const matchPartial = catalogo.items.find((item) => item.n.toLowerCase().includes(texto.toLowerCase()));
  return matchPartial || null;
}

function resetModalidades() {
  modSel = null;
  elements.botonesModalidad.forEach((btn) => btn.classList.remove('active', 'disabled'));
}

function setCarrerasListVisible(visible) {
  elements.carrerasList.classList.toggle('visible', visible);
}

function seleccionarCarrera(nombre) {
  elements.carrera.value = nombre;
  setCarrerasListVisible(false);
  actualizarModalidades();
}

function fillCarreras() {
  const catalogo = getCatalogoActual();
  const query = (elements.carrera.value || '').trim().toLowerCase();

  const opciones = catalogo.items.filter((carrera) => {
    if (!query) return true;
    return carrera.n.toLowerCase().includes(query);
  });

  elements.carrerasList.innerHTML = '';

  opciones.forEach((carrera) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'carrera-option';
    option.textContent = carrera.n;
    option.setAttribute('role', 'option');

    if (elements.carrera.value && carrera.n.toLowerCase() === elements.carrera.value.toLowerCase()) {
      option.classList.add('is-selected');
    }

    option.addEventListener('mousedown', (event) => {
      event.preventDefault();
      seleccionarCarrera(carrera.n);
    });

    elements.carrerasList.appendChild(option);
  });

  if (opciones.length === 0) {
    elements.carrera.setAttribute('placeholder', 'Sin resultados');
  } else {
    elements.carrera.setAttribute('placeholder', 'Busca o selecciona una carrera...');
  }

  if (query || opciones.length > 0) {
    setCarrerasListVisible(true);
  }
}

function actualizarCatalogo() {
  const catalogoActual = getCatalogoActual();
  Object.entries(elements.botonesCatalogo).forEach(([valor, boton]) => {
    boton.classList.toggle('active', valor === elements.categoria.value);
  });
  fillCarreras();
  resetModalidades();
  actualizarCuotasDisponibles();
  elements.preview.classList.remove('visible');
  elements.tarjetaContainer.innerHTML = '';
}

function seleccionarCatalogo(catalogo) {
  elements.categoria.value = catalogo;
  actualizarCatalogo();
}

function actualizarModalidades() {
  resetModalidades();
  const carrera = getCarrera();
  if (!carrera) return;
  elements.botonesModalidad.forEach((boton) => {
    const key = boton.id.replace('btn-', '');
    if (carrera.modalidades[key] == null) {
      boton.classList.add('disabled');
    }
  });
}

function seleccionarModalidad(key) {
  const carrera = getCarrera();
  if (!carrera || !MODALIDADES.some((m) => m.key === key)) return;
  if (carrera.modalidades[key] == null) return;

  modSel = key;
  elements.botonesModalidad.forEach((boton) => {
    boton.classList.toggle('active', boton.id === `btn-${key}`);
  });
}

function seleccionarCuotas(cuotas) {
  const cuotasDisponibles = getCuotasDisponibles();
  if (!cuotasDisponibles.includes(cuotas)) return;

  cuotasSel = cuotas;
  Object.entries(elements.botonesCuotas).forEach(([valor, boton]) => {
    boton.classList.toggle('active', Number(valor) === cuotas);
  });
}

function generarTarjeta() {
  const carrera = getCarrera();
  if (!carrera) {
    return mostrarNotif('⚠️ Selecciona una carrera');
  }
  if (!modSel) {
    return mostrarNotif('⚠️ Selecciona una modalidad');
  }

  const arancelBase = carrera.modalidades[modSel];
  const descuentoPct = Number(elements.descuento?.value || 0);
  const arancelFinal = Math.round(arancelBase * (1 - descuentoPct / 100));
  const ahorro = Math.max(0, arancelBase - arancelFinal);
  const mensual = Math.round(arancelFinal / cuotasSel);
  const modalidadEtiqueta = MODALIDADES.find((m) => m.key === modSel).label;
  const descuentoNombre = `${descuentoPct}%`;

  const descuentoHtml = `
    <tr class="t-desc-row">
      <td colspan="2"><span class="t-desc-label">✓ Descuento aplicado — ${descuentoPct}% sobre arancel + Matricula gratis</span></td>
      <td><span class="t-desc-label"><del style="color:#9ca3af;font-size:11px">${formatMoney(arancelBase)}</del><br>${formatMoney(arancelFinal)}</span></td>
      <td><span class="t-desc-label"><del style="color:#9ca3af;font-size:11px">${formatMoney(arancelBase / cuotasSel)}</del><br>${formatMoney(mensual)}</span></td>
      <td><span class="t-desc-label">—</span></td>
    </tr>`;

  const comparadorHtml = `
    <div class="comparador">
      <div class="comparador-header">Comparador</div>
      <div class="comparador-row">
        <div class="comparador-box">
          <span class="comparador-label">Base</span>
          <strong>${formatMoney(arancelBase)}</strong>
        </div>
        <div class="comparador-box accent">
          <span class="comparador-label">Con ${descuentoNombre}</span>
          <strong>${formatMoney(arancelFinal)}</strong>
        </div>
      </div>
      <div class="comparador-total">Ahorro estimado: <strong>${formatMoney(ahorro)}</strong></div>
    </div>`;

  elements.tarjetaContainer.innerHTML = `
    <div class="tarjeta">
      <div class="t-titlebar">
        <span class="t-title">${carrera.n}</span>
        <span class="t-badge">${modalidadEtiqueta}</span>
      </div>
      <div class="t-body">
        <table class="t-table">
          <thead>
            <tr>
              <th>Modalidad</th>
              <th>Matrícula</th>
              <th>Arancel Anual</th>
              <th>Mensualidad</th>
              <th>Cuotas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="t-badge">${modalidadEtiqueta}</span></td>
              <td><span class="t-green">$0</span></td>
              <td>
                <span class="t-green">${formatMoney(arancelFinal)}</span>
                <span class="t-strike">${formatMoney(arancelBase)}</span>
              </td>
              <td>
                <span class="t-green">${formatMoney(mensual)}</span>
                <span class="t-sub">por mes</span>
              </td>
              <td><span class="t-navy">${cuotasSel}</span></td>
            </tr>
            ${descuentoHtml}
          </tbody>
        </table>
        ${comparadorHtml}
      </div>
    </div>`;

  elements.preview.classList.add('visible');
  elements.preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarCaptura() {
  mostrarNotif('📸 Windows: Win+Shift+S → selecciona la tarjeta | Mac: Cmd+Shift+4');
}

function mostrarNotif(text) {
  clearTimeout(notifTimer);
  elements.notif.textContent = text;
  elements.notif.style.display = 'block';
  notifTimer = setTimeout(() => {
    elements.notif.style.display = 'none';
  }, 4000);
}

function init() {
  fillCarreras();
  setCarrerasListVisible(false);
  actualizarCuotasDisponibles();

  elements.categoria.addEventListener('change', actualizarCatalogo);
  Object.entries(elements.botonesCatalogo).forEach(([catalogo, boton]) => {
    boton.addEventListener('click', () => seleccionarCatalogo(catalogo));
  });
  elements.carrera.addEventListener('input', fillCarreras);
  elements.carrera.addEventListener('focus', () => {
    fillCarreras();
    setCarrerasListVisible(true);
  });
  elements.carrera.addEventListener('click', () => {
    fillCarreras();
    setCarrerasListVisible(true);
  });
  elements.carrera.addEventListener('change', () => {
    const carrera = getCarrera();
    if (!carrera) {
      mostrarNotif('⚠️ No se encontró una carrera coincidente');
      setCarrerasListVisible(false);
      return;
    }
    setCarrerasListVisible(false);
    actualizarModalidades();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    const inputWrap = elements.carrera.closest('.career-search-wrap');
    if (!inputWrap || !inputWrap.contains(target)) {
      setCarrerasListVisible(false);
    }
  });

  elements.botonesModalidad.forEach((boton) => {
    boton.addEventListener('click', () => seleccionarModalidad(boton.id.replace('btn-', '')));
  });
  elements.botonesCuotas[5].addEventListener('click', () => seleccionarCuotas(5));
  elements.botonesCuotas[10].addEventListener('click', () => seleccionarCuotas(10));
  elements.botonesCuotas[12].addEventListener('click', () => seleccionarCuotas(12));
  if (elements.descuento) {
    elements.descuento.addEventListener('change', () => {
      const value = Number(elements.descuento.value || 0);
      mostrarNotif(`💸 Descuento activo: ${value}%`);
    });
  }
  document.querySelector('.btn-gen').addEventListener('click', generarTarjeta);
}

init();
