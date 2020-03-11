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
let doc = new Doctor(
  new Nombre("Roman", "Espinoza", "Herrera"),
  new Fecha(2000, 11, 9),
  "3121888419",
  "Cancerología",
  "21321321312"
);
let pac = new Paciente(
  new Nombre("Roman", "Espinoza", "Herrera"),
  new Fecha(2000, 11, 9),
  "3121888419"
);
console.log(doc.getPerfil());
console.log(pac.getPerfil());
// * Cita
let cita = new Cita(new Fecha(2000, 11, 9), new Tiempo(10, 20, "AM"), doc, pac);
console.log(cita.getCita());

let hospital = new Hospital(
  new Nombre("Hospital", "Chido", "Apoco no"),
  "Una direccion"
);
hospital.registrarDoctor(doc);
hospital.registrarCita(cita);
// * Hospital
hospital.listarDoctores();
hospital.listarCitas();

let aa = new PacienteAsegurado();
