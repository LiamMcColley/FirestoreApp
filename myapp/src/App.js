import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { useRef } from "react"
import { TextField } from '@mui/material';
import Vote from './components/Vote'
import Display from './components/Display'











function App() {





  return (
    <>
      {/* <Vote></Vote> */}
      <Display></Display>




    </>
  );
}

export default App;
