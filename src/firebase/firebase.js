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
export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

export function addName(userId, name) {
  const db = getDatabase();
  const reference = ref(db, "abril/" + userId);

  set(reference, {
    name: name,
  });
}

// addName("day1", ["", "", ""]);
// addName("day2", ["", "", ""]);
// addName("day3", ["", "", ""]);
// addName("day4", ["", "", ""]);
// addName("day5", ["", "", ""]);
// addName("day6", ["", "", ""]);
// addName("day7", ["", "", "",]);
// addName("day8", ["", "", ""]);
// addName("day9", ["", "", ""]);
// addName("day10", ["", "", ""]);
// addName("day11", ["", "", ""]);
// addName("day12", ["", "", ""]);
// addName("day13", ["", "", ""]);
// addName("day14", ["", "", ""]);
// addName("day15", ["", "", ""]);
// addName("day16", ["", "", ""]);
// addName("day17", ["", "", ""]);
// addName("day18", ["", "", ""]);
// addName("day19", ["", "", ""]);
// addName("day20", ["", "", ""]);
// addName("day21", ["", "", ""]);
// addName("day22", ["", "", ""]);
// addName("day23", ["", "", ""]);
// addName("day24", ["", "", ""]);
// addName("day25", ["", "", ""]);
// addName("day26", ["", "", ""]);
// addName("day27", ["", "", ""]);
// addName("day28", ["", "", ""]);
// addName("day29", ["", "", ""]);
// addName("day30", ["", "", ""]);
// addName("day31", ["", "", ""]);
// addName("month4", 18, ["Violeta", "Rosa", "Carmen"]);
// addName("month4", 25, ["Violeta", "Rosa", "Carmen"]);
// writeUserData("andreawu", "pedro", "correo@corre.com", "myImageUrl");
