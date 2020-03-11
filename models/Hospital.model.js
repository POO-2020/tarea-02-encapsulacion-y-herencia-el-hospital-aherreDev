// ? Models
import Nombre from "./Nombre.model.js";
import Doctor from "./Doctor.model.js";
import Cita from "./Cita.model.js";

class Hospital {
  _nombre;
  _direccion;
  _doctores = [];
  _citas = [];
  /**
   *
   * @param {Nombre} nombre
   * @param {string} direccion
   * @param {Array.<Doctor>} doctores
   * @param {Array.<Cita>} citas
   */
  constructor({ nombre, direccion, doctores = [], citas = [] }) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._doctores = doctores;
    this._citas = citas;
  }
  registrarDoctor = doctor => {
    this._doctores.push(doctor);
  };
  listarDoctores = () => {
    this._doctores.forEach(doctor => console.log(doctor.getPerfil()));
  };
  registrarCita = cita => {
    this._citas.push(cita);
  };
  listarCitas = () => {
    this._citas.forEach(cita => console.log(cita.getCita()));
  };
}
export default Hospital;
