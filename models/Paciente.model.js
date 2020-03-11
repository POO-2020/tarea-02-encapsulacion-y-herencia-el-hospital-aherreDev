// ? Models
import Persona from "./Persona.model.js";

class Paciente extends Persona {
  getPerfil = () => {
    let { getNombreCompleto } = this.nombre;
    let { getFecha } = this.fechaNacimiento;
    return `${getNombreCompleto()}, ${getFecha()}, ${this.telefono}`;
  };
  getNombre = () => this.nombre.getNombreCompleto();
}

export default Paciente;
