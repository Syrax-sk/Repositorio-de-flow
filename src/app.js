export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a la aplicación de Leidy`;
}

export function despedir(nombre) {
  return `Hasta pronto, ${nombre}. Leidy`;
}



{export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Leidy funcionando correctamente"
  };
}

export function suma(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function healthCheck(){
  return {
  status: 'ok'
  timestamp: new Date().toISOString(),
  servicio: 'StreamFlow API',
  version: '1.0.0'
  }
}
}