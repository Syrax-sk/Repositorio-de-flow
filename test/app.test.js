import {saludar, despedir, estadoSistema} from "../src/app.js"

function ejecutarPruebas(){
let pasadas =0;
let fallidas =0;

const r1 = saludar("Rider")
if(r1.includes("Rider")){
console.log("Test 1 pasado: funcion saludar en codeRider es corecta")
pasadas++;
} else {
console.log("Test 1 Fallido: ", r1);
fallidas++;

	}
const actualEstado = estadoSistema();
if(actualEstadado.estado === "activo" ){
console.log("Test 2: Pasado: estadoSistema() funciona en codeRider");
pasadas++;

} else {
console.log("Test 2 fallido: ", estado, "en codeRider");
fallidas++;
}
console.log ("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
if(fallidas>0) precess.exit(1); "fallidas"
}
ejecutarPruebas();

}
