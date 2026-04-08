export function saludar (nombre){
return "Hola" + nombre + ", bienvenido a aplicacion CodeRider!";
}

export function despedir (nombre){
return "Hasta pronto, " + nombre + "!codeRider"; 
}

export function estadoSistema (){
return {
estado: "activo",
version: "1.0.0",
mensaje: "Sistema codeRider funcionando correctamente" 
 };
}
