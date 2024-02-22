import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCQB0rLBv3MKVV53sgvhNT0TRlxJksGi9o",
  authDomain: "kanban-ui.firebaseapp.com",
  projectId: "kanban-ui",
  storageBucket: "kanban-ui.appspot.com",
  messagingSenderId: "918574834356",
  appId: "1:918574834356:web:01afcd3d98b3519448ede1",
};

const app = initializeApp(firebaseConfig);
