const agregar = (valor) => {
  document.getElementById("pantalla").value += valor;
};

const borrar = () => {
  document.getElementById("pantalla").value = "";
};

const calcular = () => {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
};
