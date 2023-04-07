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

// writeUserData("andreawu", "pedro", "correo@corre.com", "myImageUrl");
