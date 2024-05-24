import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_000xnsJItBktZQlsgjMCLwGpMl7crXE",
  authDomain: "calendary-43799.firebaseapp.com",
  databaseURL: "https://calendary-43799-default-rtdb.firebaseio.com",
  projectId: "calendary-43799",
  storageBucket: "calendary-43799.appspot.com",
  messagingSenderId: "964398427675",
  appId: "1:964398427675:web:d9b1d622eb25f41ecfd2be",
};

// Initialize Firebase getFirestore
const app = initializeApp(firebaseConfig);

// Para acceder a la DB de Firestore Database
export const db = getFirestore(app);

// Para acceder a la DB de Realtime Database
export const dataB = getDatabase(app);

// Add Data the Realtime Database
// Con esta function puedo agregar datos a la DB Realtime
export function addName(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// Con está function guardamos las fechas en que vamos a participar
export function addparticipation(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// addparticipation("Blanco", [""], "Agosto/")
// addparticipation("Stephanie P", ["", "", "", "", ""], "Agosto/")
// addparticipation("Samuel Pérez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Abner Estévez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Alba Estévez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Luis Capellán", ["", "", "", "", ""], "Agosto/")
// addparticipation("Susana Capellán", ["", "", "", "", ""], "Agosto/")
// addparticipation("Rosa Domínguez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Emely García", ["", "", "", "", ""], "Agosto/")
// addparticipation("Deyanira Gil", ["", "", "", "", ""], "Agosto/")
// addparticipation("Ana De Los S", ["", "", "", "", ""], "Agosto/")
// addparticipation("Magalys Pérez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Andrés García", ["", "", "", "", ""], "Agosto/")
// addparticipation("Bartola Calcaño", ["", "", "", "", ""], "Agosto/")
// addparticipation("Rosa Gutiérrez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Mabel Pérez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Marina Ozuna", ["", "", "", "", ""], "Agosto/")
// addparticipation("Kenia Torres", ["", "", "", "", ""], "Agosto/")
// addparticipation("Nahúm Lithgow", ["", "", "", "", ""], "Agosto/")
// addparticipation("Davel Lithgow", ["", "", "", "", ""], "Agosto/")
// addparticipation("Ashanty Santana", ["", "", "", "", ""], "Agosto/")
// addparticipation("Guillermina Mesa", ["", "", "", "", ""], "Agosto/")
// addparticipation("Yirelis Mesa", ["", "", "", "", ""], "Agosto/")
// addparticipation("Ruth Pérez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Belkys Mateo", ["", "", "", "", ""], "Agosto/")
// addparticipation("María Gil", ["", "", "", "", ""], "Agosto/")

// function anadir(name) {
//   addparticipation(name, ["", "", "", "", ""], "Enero/")
//   addparticipation(name, ["", "", "", "", ""], "Febrero/")
//   addparticipation(name, ["", "", "", "", ""], "Marzo/")
//   addparticipation(name, ["", "", "", "", ""], "Abril/")
//   addparticipation(name, ["", "", "", "", ""], "Mayo/")
//   addparticipation(name, ["", "", "", "", ""], "Junio/")
//   addparticipation(name, ["", "", "", "", ""], "Julio/")
//   addparticipation(name, ["", "", "", "", ""], "Agosto/")
//   addparticipation(name, ["", "", "", "", ""], "Septiembre/")
//   addparticipation(name, ["", "", "", "", ""], "Octubre/")
//   addparticipation(name, ["", "", "", "", ""], "Noviembre/")
//   addparticipation(name, ["", "", "", "", ""], "Diciembre/")
// }

// anadir("Andrés Campusano")


// export function addName(userId, name, month) {
//   const db = getDatabase();
//   const reference = ref(db, "Agosto/" + userId);

//   set(reference, {
//     name: name,
//   });
// }

// Cancelación de turnos
// addName("day4", ["Visita del Sup.", "Visita del Sup.", "Visita del Sup.", "", "", "", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);

// addName("day1", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day2", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day3", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day4", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day5", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day6", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day7", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day8", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day9", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day10", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day11", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day12", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day13", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day14", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day15", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day16", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day17", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day18", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day19", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day20", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day21", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day22", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day23", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day24", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day25", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day26", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day27", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day28", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day29", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day30", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day31", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
