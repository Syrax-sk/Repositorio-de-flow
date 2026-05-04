const VERSION = '1.2.0';

export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a sistema Leidy`;
}

export function healthCheck() {
  return {
    status: 'ok',
    version: VERSION,
    timestamp: new Date().toISOString(),
    message: 'Sistema Leidy funcionando correctamente'
  };
}

export function verificarSistema() {
  const resultado = healthCheck();

  const statusDiv = document.getElementById('status');
  if (statusDiv) {
    statusDiv.textContent = `${resultado.message} ${resultado.timestamp}`;
    statusDiv.style.color = '#009B4C';
  }
}

// Solo ejecutar en navegador (evita errores en Node/CI)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const versionEl = document.getElementById('version');
    if (versionEl) {
      versionEl.textContent = `v${VERSION}`;
    }

    verificarSistema();
  });
}