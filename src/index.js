import "./styles.css";
import { cargarUsers } from "./js/http-provider";

cargarUsers().then(console.log).catch(console.warn);
