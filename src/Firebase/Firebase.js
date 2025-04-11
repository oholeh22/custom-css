import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJZPvAzqIyc6LbbnJJJaxSf5zXS9cMXeY",
  authDomain: "custom-css-553a3.firebaseapp.com",
  projectId: "custom-css-553a3",
  storageBucket: "custom-css-553a3.appspot.com",
  messagingSenderId: "1054939151726",
  appId: "1:1054939151726:web:cacd9a2a6f4e441bdfd57f",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)