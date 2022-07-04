import {NavegacaoPrincipal} from './src/navigations';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/config/firebase';


export default function App() {
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (<NavegacaoPrincipal/>);
}

