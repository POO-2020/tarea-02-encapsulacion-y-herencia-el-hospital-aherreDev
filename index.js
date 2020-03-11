// ? Models
import Hospital from "./models/Hospital.model.js";
import Doctor from "./models/Doctor.model.js";
import Paciente from "./models/Paciente.model.js";
import Cita from "./models/Cita.model.js";
import Nombre from "./models/Nombre.model.js";
import Tiempo from "./models/Tiempo.model.js";
import Fecha from "./models/Fecha.model.js";
import PacienteAsegurado from "./models/PacienteAsegurado.model.js";

// * Doctor y Paciente
let doc = new Doctor({
  nombre: new Nombre("Roman", "Espinoza", "Herrera"),
  fechaNacimiento: new Fecha(2000, 11, 9),
  telefono: "3121888419",
  especialidad: "Cancerología",
  cedula: "21321321312"
});
let pac = new Paciente({
  nombre: new Nombre("Roman", "Espinoza", "Herrera"),
  fechaNacimiento: new Fecha(2000, 11, 9),
  telefono: "3121888419"
});
console.log(doc.getPerfil());
console.log(pac.getPerfil());
// * Cita
let cita = new Cita({
  fecha: new Fecha(2000, 11, 9),
  hora: new Tiempo(10, 20, "AM"),
  doctor: doc,
  paciente: pac
});
console.log(cita.getCita());

let hospital = new Hospital({
  nombre: new Nombre("Hospital", "Chido", "Apoco no"),
  direccion: "Una direccion"
});
hospital.registrarDoctor(doc);
hospital.registrarCita(cita);
// * Hospital
hospital.listarDoctores();
hospital.listarCitas();

// * Paciente asegurado

let PA = new PacienteAsegurado({
  nombre: new Nombre("Roman", "Espinoza", "Herrera"),
  fechaNacimiento: new Fecha(2000, 11, 9),
  telefono: "3121888419",
  numeroPoliza: "3123213214124567",
  fechaVigencia: new Fecha(2030, 11, 9),
  compania: "Chido seguros"
});
console.log(PA.getPerfil());
