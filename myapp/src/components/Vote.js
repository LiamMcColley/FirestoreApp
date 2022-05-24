import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { useRef } from "react"
import { TextField } from '@mui/material';


function Vote(props) {
    const responses = props.responses
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


        </>
    );
}

export default Vote;