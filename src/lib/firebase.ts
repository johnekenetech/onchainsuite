import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0aKUoDcHM8sgYVTbQmpvOD4l098q_OuM",
  authDomain: "onchainsuite.firebaseapp.com",
  projectId: "onchainsuite",
  storageBucket:"onchainsuite.appspot.com",
  messagingSenderId: "243793044067",
  appId: "1:243793044067:web:f456b9d1891de6137d0e56",
  measurementId: "G-4WL48Y7WCL"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db }; 

