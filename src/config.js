// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBg-M25hTx_fMJIskkHDp-HQFozC39Uydc",
    authDomain: "pharma-file.firebaseapp.com",
    projectId: "pharma-file",
    storageBucket: "pharma-file.appspot.com",
    messagingSenderId: "367380380003",
    appId: "1:367380380003:web:1fa4668c6275a3853b7b56",
    measurementId: "G-YYJLEDVC6M"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
export {firebase};