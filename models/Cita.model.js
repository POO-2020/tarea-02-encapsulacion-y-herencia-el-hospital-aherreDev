// ? Models
import Fecha from "./Fecha.model.js";
import Tiempo from "./Tiempo.model.js";
import Doctor from "./Doctor.model.js";
import Paciente from "./Paciente.model.js";

class Cita {
  fecha;
  hora;
  doctor;
  paciente;
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */
  constructor(fecha, hora, doctor, paciente) {
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
  }
  getCita = () => {
    let { getFecha } = this.fecha;
    let { getFormato24Horas } = this.hora;
    return `${getFecha()}, ${getFormato24Horas()}, ${this.doctor.getNombre()}, ${this.paciente.getNombre()}`;
  };
}
export default Cita;
