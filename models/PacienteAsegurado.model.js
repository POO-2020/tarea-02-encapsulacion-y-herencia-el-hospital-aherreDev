import Paciente from "./Paciente.model.js";
import Fecha from "./Fecha.model";

class PacienteAsegurado extends Paciente {
  _numeroPoliza;
  _fechaVigencia;
  _compania;
  /**
   *
   * @param {number} numeroPoliza
   * @param {Fecha} fechaVigencia
   * @param {string} compania
   */
  constructor({
    nombre,
    fechaNacimiento,
    telefono,
    numeroPoliza,
    fechaVigencia,
    compania
  }) {
    super(nombre, fechaNacimiento, telefono);
    this._numeroPoliza = numeroPoliza;
    this._fechaVigencia = fechaVigencia;
    this._compania = compania;
  }
  getPerfil = () => {
    const { getNombreCompleto } = this.fechaNacimiento;
    const { getFecha } = this.fechaNacimiento;
    const getFecha2 = this.fechaNacimiento.getFecha();
    return `${getNombreCompleto()}, ${getFecha()}, ${this._telefono}, ${
      this._numeroPoliza
    }, ${getFecha2()}, ${this._compania}`;
  };
}

export default PacienteAsegurado;
