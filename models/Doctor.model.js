// ? Models
import Persona from "./Persona.model.js";

class Doctor extends Persona {
  especialidad;
  cedula;
  constructor(nombre, fechaNacimiento, telefono, especialidad, cedula) {
    super(nombre, fechaNacimiento, telefono);
    this.especialidad = especialidad;
    this.cedula = cedula;
  }
  getPerfil = () => {
    let { getNombreCompleto } = this.nombre;
    return `${this.cedula}, ${this.especialidad}, ${getNombreCompleto()}, ${
      this.telefono
    }`;
  };
  getNombre = () => "Dr." + this.nombre.getNombreCompleto();
}
export default Doctor;
