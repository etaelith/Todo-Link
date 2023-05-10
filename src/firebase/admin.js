import FIREBASE_KEYS from './FIREBASE_KEYS.js'
const admin = require("firebase-admin")

const serviceAccount = FIREBASE_KEYS;

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (e) { }

export const firestore = admin.firestore()
