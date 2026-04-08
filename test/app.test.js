import { saludar, despedir, estadoSistema, suma } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  const r1 = saludar("Juliana");
  if (r1.includes("Juliana")) {
    console.log("test 1 pasado: funcion saludar en Juliana es correcto");
    pasadas++;
  } else {
    console.log("test 1 fallido:", r1);
    fallidas++;
  }

  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("test 2 pasado: estadoSistema() funciona en Juliana");
    pasadas++;
  } else {
    console.log("test 2 fallido:", actualEstado, "en Juliana");
    fallidas++;
  }

  const r3 = suma(5, 3);
  if (r3 === 8) {
    console.log("test 3 pasado: suma funciona correctamente");
    pasadas++;
  } else {
    console.log("test 3 fallido:", r3);
    fallidas++;
  }

  console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
