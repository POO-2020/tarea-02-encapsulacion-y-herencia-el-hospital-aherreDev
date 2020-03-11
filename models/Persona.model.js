// ? Models
import Fecha from "./Fecha.model.js";
import Nombre from "./Nombre.model.js";

class Persona {
  _nombre;
  _fechaNacimiento;
  _telefono;
  /**
   * @param {Nombre} _nombre
   * @param {Fecha} _fechaNacimiento
   * @param {string} _telefono
   */
  constructor({ nombre, fechaNacimiento, telefono }) {
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._telefono = telefono;
  }
}

export default Persona;
