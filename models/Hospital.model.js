// ? Models
import Nombre from "./Nombre.model.js";
import Doctor from "./Doctor.model.js";
import Cita from "./Cita.model.js";

class Hospital {
  nombre;
  direccion;
  doctores = [];
  citas = [];
  /**
   *
   * @param {Nombre} nombre
   * @param {string} direccion
   * @param {Array.<Doctor>} doctores
   * @param {Array.<Cita>} citas
   */
  constructor(nombre, direccion, doctores = [], citas = []) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.doctores = doctores;
    this.citas = citas;
  }
  registrarDoctor = doctor => {
    this.doctores.push(doctor);
  };
  listarDoctores = () => {
    this.doctores.forEach(doctor => console.log(doctor.getPerfil()));
  };
  registrarCita = cita => {
    this.citas.push(cita);
  };
  listarCitas = () => {
    this.citas.forEach(cita => console.log(cita.getCita()));
  };
}
export default Hospital;
