import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import db from 'firebase/firestore/lite';



const App = () => {
    const [chirp, setChirp] = useState("");
    const [username, setUsername] = useState("")
    
    const handleClick = (e) => {
        e.preventDefault();

        const firebaseConfig = {
            apiKey: "AIzaSyAkNKNNhmgg7i5QWS_pbRMeORQyBNl_a5g",
            authDomain: "chirper-2684d.firebaseapp.com",
            projectId: "chirper-2684d",
            storageBucket: "chirper-2684d.appspot.com",
            messagingSenderId: "967438100656",
            appId: "1:967438100656:web:bd808993ef386806e5b375",
            measurementId: "G-KJ0M5E1V3Z"
          };
          
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
          
          
            
          
    

        //   onsubmit(e) = {
        //     username:"JwnRobinson",
        //     displayName:"Juwan Robinson",
        //     avatar:"https://www.google.com/search?q=michael+myers&client=safari&rls=en&sxsrf=AOaemvL2cLV1GzIGO8FfZ2YvEJCzrvn0dA:1634613969442&tbm=isch&source=iu&ictx=1&fir=j3HkrYi2xComQM%252Cw10cRLuFmhr_hM%252C_%253BMTOmdiIECZ-93M%252Ck7eKEwcYi6GUHM%252C_%253Bkoi4AtXIBw35TM%252CJE1cwKdxcISueM%252C_%253BQJ6z22Ny7lV_YM%252CcOGC_B_yiYVlaM%252C_%253BWzvpjqyKBvgZxM%252CbE-GBgKevB9VyM%252C_&vet=1&usg=AI4_-kTtXXO8IaDKEEbtngbqb1MsxPXwhg&sa=X&ved=2ahUKEwiC3_jHw9XzAhXSgGoFHQdDAxgQ_h16BAgWEAE#imgrc=koi4AtXIBw35TM",
        //     text: chirp,
        //     user: username,
        // };

        setChirp("");
        setUsername("");

    };
    return(
       
        <div className= "chirpBox">
            <form>
                <div className="chirpBoxinput">
                    <input
                        value={chirp}
                        onChange={(e) => setChirp(e.target.value)}
                        placeholder="Your Thoughts..."
                        type="text"
                        
                />
                </div>
                    <input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className="chipBoxuserinput"
                            
                    />
                <button onClick={handleClick} type="submit" className="chirpbutton">
                    Get Your Chirp on
                    </button>
                 <div className="returnbox">
                     <form className="form-group container row col-6 mx-auto border p-3">

                         <div>
                 <input
                    
                    type="text"
                    className="chirpreturn"
                    />
                </div>  
                
            </form>
        </div>
        </form>
    </div>
    
    )};
    export default App;
