// ? Models
import Persona from "./Persona.model.js";

class Doctor extends Persona {
  _especialidad;
  _cedula;
  constructor({ nombre, fechaNacimiento, telefono, especialidad, cedula }) {
    super({ nombre, fechaNacimiento, telefono });
    this._especialidad = especialidad;
    this._cedula = cedula;
  }
  getPerfil = () => {
    let { getNombreCompleto } = this._nombre;
    return `${this._cedula}, ${this._especialidad}, ${getNombreCompleto()}, ${
      this._telefono
    }`;
  };
  getNombre = () => "Dr." + this._nombre.getNombreCompleto();
}
export default Doctor;
