const usersUrl = "https://reqres.in/api/users?page=2";

const cargarUsers = async () => {
  try {
    const resp = await fetch(usersUrl);
    if (!resp.ok) throw "No se pudo realizar la peticion al servidor";
    const { data } = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export { cargarUsers };
