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

// addparticipation("Abner Estévez", ["Martes 2 en la mañana", "Martes 16 en la mañana", "", "", ""], "Mayo/")
// addparticipation("Alba Estévez", ["Martes 2 en la mañana", "Martes 16 en la mañana", "Martes 30 en la mañana", "", ""], "Mayo/")
// addparticipation("Manuel Santana", ["Lunes 1 en la tarde", "Jueves 4 en la tarde", "Jueves 18 en la tarde", "", ""], "Mayo/")
// addparticipation("Massiel Santana", ["Lunes 1 en la tarde", "Jueves 4 en la tarde", "Jueves 18 en la tarde", "", ""], "Mayo/")
// addparticipation("Luis Capellán", ["Lunes 1 en la tarde", "", "", "", ""], "Mayo/")
// addparticipation("Susana Capellán", ["Martes 9 en la mañana", "Lunes 22 en la tarde", "", "", ""], "Mayo/")
// addparticipation("Rosa Domínguez", ["Lunes 22 en la mañana", "Martes 30 en la mañana", "", "", ""], "Mayo/")
// addparticipation("Emely García", ["Martes 9 en la tarde", "Martes 16 en la tarde", "Lunes 22 en la tarde", "", ""], "Mayo/")
// addparticipation("Deyanira Gil", ["Lunes 22 en la mañana", "Jueves 25 en la mañana", "Lunes 29 en la mañana", "", ""], "Mayo/")
// addparticipation("Ana De Los S", ["Martes 16 en la tarde", "Martes 30 en la tarde", "", "", ""], "Mayo/")
// addparticipation("Magalys Pérez", ["Jueves 11 en la mañana", "Martes 16 en la mañana", "Jueves 18 en la mañana", "Martes 23 en la mañana", "Jueves 25 en la mañana"], "Mayo/")
// addparticipation("Violeta García", ["Lunes 8 en la mañana", "Jueves 11 en la mañana", "Lunes 15 en la mañana", "", ""], "Mayo/")
// addparticipation("Andrés García", ["Lunes 8 en la mañana", "Lunes 15 en la mañana", "", "", ""], "Mayo/")
// addparticipation("Bartola Calcaño", ["Lunes 1 en la tarde", "Jueves 4 en la mañana", "Martes 9 en la mañana", "Jueves 18 en la mañana", ""], "Mayo/")
// addparticipation("Rosa Gutiérrez", ["Lunes 8", "Jueves 11", "", "", ""], "Mayo/")
// addparticipation("Mabel Pérez", ["", "", "", "", ""], "Mayo/")
// addparticipation("Marina Ozuna", ["Lunes 1 en la tarde", "Jueves 4 en la mañana", "Martes 9 en la mañana", "Jueves 18 en la mañana", ""], "Mayo/")
// addparticipation("Kenia Torres", ["Lunes 15 en la mañana", "Martes 30 en la mañana", "Martes 30 en la tarde", "", ""], "Mayo/")
// addparticipation("Nahúm Lithgow", ["Martes 2 en la tarde", "Lunes 8 en la tarde", "Lunes 29 en la tarde", "", ""], "Mayo/")
// addparticipation("Davel Lithgow", ["Martes 2 en la tarde", "Lunes 8 en la tarde", "Lunes 29 en la tarde", "", ""], "Mayo/")
// addparticipation("Ashanty Santana", ["Martes 2 en la tarde", "Lunes 8 en la tarde", "Lunes 29 en la tarde", "", ""], "Mayo/")
// addparticipation("Guillermina Mesa", ["Martes 2 en la mañana", "Jueves 4 en la mañana", "Martes 23 en la mañana", "Jueves 25 en la mañana", "Lunes 29 en la mañana"], "Mayo/")
// addparticipation("Yirelis Mesa", ["Jueves 4 en la tarde", "Martes 9 en la tarde", "Martes 16 en la tarde", "Lunes 22 en la tarde", "Martes 30 en la tarde"], "Mayo/")
// addparticipation("Ruth Pérez", ["Lunes 22 en la mañana", "Lunes 29 en la mañana", "", "", ""], "Mayo/")



// export function addName(userId, name, month) {
//   const db = getDatabase();
//   const reference = ref(db, "Abril/" + userId);

//   set(reference, {
//     name: name,
//   });
// }

// addName("day23", ["", "", "", "Visita del Sup.", "Visita del Sup.", "Visita del Sup.", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(221, 50, 50)"]);
// addName("day25", ["", "", "", "Visita del Sup.", "Visita del Sup.", "Visita del Sup.", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(221, 50, 50)", "rgb(221, 50, 50)", "rgb(221, 50, 50)"]);


// addName("day1", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)",]);
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
