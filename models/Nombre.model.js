class Nombre {
  nombre;
  apellidoPaterno;
  apellidoMaterno;
  /**
   *
   * @param {string} nombre
   * @param {string} apellidoMaterno
   * @param {string} apellidoPaterno
   */
  constructor(nombre, apellidoMaterno, apellidoPaterno) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
  }
  getNombreCompleto = () =>
    `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  getApellidoNombre = () =>
    `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
  getIniciales = () =>
    `${this.nombre[0].toUpperCase()}${this.apellidoPaterno[0].toUpperCase()} ${this.apellidoMaterno[0].toUpperCase()}`;
}
export default Nombre;
