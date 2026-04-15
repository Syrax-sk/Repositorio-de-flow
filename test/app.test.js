import {
  saludar,
  despedir,
  estadoSistema,
  suma,
  restar,
  healthCheck,
  factorial,   // ✅ Importamos la nueva función
} from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  const r1 = saludar("Leidy");
  if (r1.includes("Leidy")) {
    console.log("Test 1 pasado: saludar() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 1 fallido:", r1);
    fallidas++;
  }

  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado: estadoSistema() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado);
    fallidas++;
  }

  const r3 = suma(5, 3);
  if (r3 === 8) {
    console.log("Test 3 pasado: suma() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 3 fallido:", r3);
    fallidas++;
  }

  const r4 = restar(10, 4);
  if (r4 === 6) {
    console.log("Test 4 pasado: restar() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 4 fallido:", r4);
    fallidas++;
  }

  const health = healthCheck();
  if (health.status === "ok") {
    console.log("Test 5 pasado: healthCheck() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 5 fallido:", health);
    fallidas++;
  }

  const r6 = factorial(5);
  if (r6 === 120) {
    console.log("Test 6 pasado: factorial() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 6 fallido:", r6);
    fallidas++;
  }

  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) {
    process.exit(1);
  }
}

ejecutarPruebas();
