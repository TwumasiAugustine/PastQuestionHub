import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';




const firebaseConfig = {
	apiKey: 'AIzaSyDDubobCRm6kSwdDH_qRlr4UQKwenhVx2k',
	authDomain: 'past-question-hub.firebaseapp.com',
	projectId: 'past-question-hub',
	storageBucket: 'past-question-hub.appspot.com',
	messagingSenderId: '224943327158',
	appId: '1:224943327158:web:19a6f9b274b2690ed62317',
	measurementId: 'G-KW4ZFT6Y7Z'
};


export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword



