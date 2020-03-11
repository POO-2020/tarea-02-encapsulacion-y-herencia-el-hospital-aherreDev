// ? Models
import Persona from "./Persona.model.js";

class Paciente extends Persona {
  getPerfil = () => {
    let { getNombreCompleto } = this._nombre;
    let { getFecha } = this._fechaNacimiento;
    return `${getNombreCompleto()}, ${getFecha()}, ${this._telefono}`;
  };
  getNombre = () => this._nombre.getNombreCompleto();
}

export default Paciente;
