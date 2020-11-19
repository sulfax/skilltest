import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCPU56KULzpJksClu4S752WdU8sh8_i5hw",
    authDomain: "appexskilltest.firebaseapp.com",
    databaseURL: "https://appexskilltest.firebaseio.com",
    projectId: "appexskilltest",
    storageBucket: "appexskilltest.appspot.com",
    messagingSenderId: "436219389970",
    appId: "1:436219389970:web:4caca2a31a6578d831d0cb",
    measurementId: "G-JMW3S5CCLG"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const companiesCollection = db.collection('companies')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    companiesCollection
}