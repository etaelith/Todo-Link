
const admin = require("firebase-admin")
/* const serviceAccount = ; */
const FIREBASE_KEYS = process.env.FIREBASE_TOTAL_KEY
try {

  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(FIREBASE_KEYS)),
  })

} catch (e) { console.log(e) }

export const firestore = admin.firestore()
