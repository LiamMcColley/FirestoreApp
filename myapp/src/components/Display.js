import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { useRef } from "react"
import { TextField } from '@mui/material';
import Vote from "./Vote";

function Display(props) {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID

    };

    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp)


    getDocs(collection(db, "responses")).then((allDocs) => { allDocs.forEach((doc) => responses.push(doc.data()["Response"])) })
    const responses = [];





    const answer = useRef();



    const generatelon = (ans) => {

        if (responses.includes(ans)) {
            //incresue vote number on ans
            console.log("found")
        }
        else {
            //add new ans element with Votes = 0
            console.log("notfound")
        }
    }




    return (
        <>
            <h1>Vote </h1>
            <TextField id="city" label="" variant="outlined" inputRef={answer} />
            <button onClick={() => generatelon(answer.current.value)}>Log Input</button>
            <div>{responses}</div>



        </>
    );
}

export default Display;