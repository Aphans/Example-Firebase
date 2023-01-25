// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    //AquÃ­ vuestra configuraciÃ³n Firebase
    apiKey: "AIzaSyC5i1Zk_Atn5zDI0V__ohHrIZ_RU36i9ZA",
    authDomain: "test-7ab9a.firebaseapp.com",
    projectId: "test-7ab9a",
    storageBucket: "test-7ab9a.appspot.com",
    messagingSenderId: "120838525810",
    appId: "1:120838525810:web:8d42713cd603b9f0cd43eb"
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()
//CRUD
export const dameDocumentos = (ref)=>getDocs(collection(db,ref))
export const onDameMascotas = (ref,callback)=>onSnapshot(collection(db,ref),callback)
