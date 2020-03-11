class Nombre {
  _nombre;
  _apellidoPaterno;
  _apellidoMaterno;
  /**
   *
   * @param {string} nombre
   * @param {string} apellidoMaterno
   * @param {string} apellidoPaterno
   */
  constructor(nombre, apellidoMaterno, apellidoPaterno) {
    this._nombre = nombre;
    this._apellidoPaterno = apellidoPaterno;
    this._apellidoMaterno = apellidoMaterno;
  }
  getNombreCompleto = () =>
    `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`;
  getApellidoNombre = () =>
    `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`;
  getIniciales = () =>
    `${this._nombre[0].toUpperCase()}${this._apellidoPaterno[0].toUpperCase()} ${this._apellidoMaterno[0].toUpperCase()}`;
}
export default Nombre;
