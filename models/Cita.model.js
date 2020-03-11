// ? Models
import Fecha from "./Fecha.model.js";
import Tiempo from "./Tiempo.model.js";
import Doctor from "./Doctor.model.js";
import Paciente from "./Paciente.model.js";

class Cita {
  _fecha;
  _hora;
  _doctor;
  _paciente;
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */
  constructor({ fecha, hora, doctor, paciente }) {
    this._fecha = fecha;
    this._hora = hora;
    this._doctor = doctor;
    this._paciente = paciente;
  }
  getCita = () => {
    let { getFecha } = this._fecha;
    let { getFormato24Horas } = this._hora;
    return `${getFecha()}, ${getFormato24Horas()}, ${this._doctor.getNombre()}, ${this._paciente.getNombre()}`;
  };
}
export default Cita;
