const { cargarUsers } = require("./http-provider");

// Variables globales
let users = [];

// HTML References
const containerUsers = document.querySelector("#users-container");
const btnLoadUsers = document.querySelector("#cargar-users");

//Funcion de string a html
const stringToHtml = (s) => {
  const parse = new DOMParser();
  const doc = parse.parseFromString(s, "text/html");
  return doc.body.firstChild;
};

// Funcion para crear chsite html
const elementHtml = (user) => {
  const element = stringToHtml(`
  <div class="user">
    <div class="image">
      <img src="${user.avatar}" />
    </div>
    <label>ID: ${user.id}</label>
    <label>Nombre: ${user.first_name} ${user.last_name}</label>
    <label>Email: ${user.email}</label>
  </div>`);
  containerUsers.append(element);
};

const inicializaUsuarios = async () => {
  users = await cargarUsers();
  return users;
};

const pedirUser = () => {
  if (users.length === 0) {
    alert("No hay mas usuarios por cargar");
  }
  return users.pop();
};

// Crea chistes html
const creaChisteHtml = async () => {
  const user = pedirUser();
  elementHtml(user);
};

// Funcion para iniciar ejecucion
const init = () => {
  inicializaUsuarios();
  // Acciones de boton
  btnLoadUsers.addEventListener("click", creaChisteHtml);
};

export { init };
