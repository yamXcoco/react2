import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDvjo0YU-idBPnY2yU0rprwP4A9kE2lAtw',
  authDomain: 'yamx-my-note.firebaseapp.com',
  projectId: 'yamx-my-note',
  storageBucket: 'yamx-my-note.appspot.com',
  messagingSenderId: '200451572881',
  appId: '1:200451572881:web:83c23abcc6232ff8c92b30',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
