import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveToCloud = async (data, userId) => {
  const ref = collection(db, 'users', userId, 'history');
  await addDoc(ref, data);
};
