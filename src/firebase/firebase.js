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

// addparticipation("Blanco", [""], "Marzo/")

// addparticipation("Abner Estévez", ["", "", "", "", ""], "Junio/")
// addparticipation("Alba Estévez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Luis Capellán", ["", "", "", "", ""], "Marzo/")
// addparticipation("Susana Capellán", ["", "", "", "", ""], "Marzo/")
// addparticipation("Rosa Domínguez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Emely García", ["", "", "", "", ""], "Marzo/")
// addparticipation("Deyanira Gil", ["", "", "", "", ""], "Marzo/")
// addparticipation("Ana De Los S", ["", "", "", "", ""], "Marzo/")
// addparticipation("Magalys Pérez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Violeta García", ["", "", "", "", ""], "Marzo/")
// addparticipation("Andrés García", ["", "", "", "", ""], "Marzo/")
// addparticipation("Bartola Calcaño", ["", "", "", "", ""], "Marzo/")
// addparticipation("Rosa Gutiérrez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Mabel Pérez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Marina Ozuna", ["", "", "", "", ""], "Marzo/")
// addparticipation("Kenia Torres", ["", "", "", "", ""], "Marzo/")
// addparticipation("Nahúm Lithgow", ["", "", "", "", ""], "Marzo/")
// addparticipation("Davel Lithgow", ["", "", "", "", ""], "Marzo/")
// addparticipation("Ashanty Santana", ["", "", "", "", ""], "Marzo/")
// addparticipation("Guillermina Mesa", ["", "", "", "", ""], "Marzo/")
// addparticipation("Yirelis Mesa", ["", "", "", "", ""], "Marzo/")
// addparticipation("Ruth Pérez", ["", "", "", "", ""], "Marzo/")
// addparticipation("Belkys Mateo", ["", "", "", "", ""], "Diciembre/")
// addparticipation("María Gil", ["", "", "", "", ""], "Diciembre/")



// export function addName(userId, name, month) {
//   const db = getDatabase();
//   const reference = ref(db, "Julio/" + userId);

//   set(reference, {
//     name: name,
//   });
// }

// Cancelación de turnos
// addName("day25", ["Magalys Pérez", "Violeta García", "Alba Estévez", "Turno cancelado", "Turno cancelado", "Turno cancelado", "rgb(103, 103, 209)", "rgb(103, 103, 209)", "rgb(103, 103, 209)", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(221, 50, 50)"]);
// addName("day31", ["", "", "", "Visita del Sup.", "Visita del Sup.", "Visita del Sup.", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(221, 50, 50)"]);


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
