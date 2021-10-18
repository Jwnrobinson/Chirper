import React, { useState } from 'react';




const App = () => {
    const [chirp, setChirp] = useState('');

    const handleChirpChange = e => {
        setChirp(e.target.value);
    };

    const handleChirpFocus = e => {
        console.log('input has been focused');
    };

    const handleChirpBlur = e => {
        console.log('input has been blurred');
    };

    const handleChirpKeyDown = e => {
        console.log('input keydown has been fired');
    };

    const handleChirpKeyUp = e => {
        console.log('input keyup has been fired');
    };

    const handleChirpKeyPress = e => {
        console.log('input keypress has been fired');
    };

    const handleClick = e => {
        e.preventDefault();
        console.log('button has been clicked and form submitted');
    };

    const [username, setUsername] = useState('');

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    };

    const handleUsernameFocus = e => {
        console.log('input has been focused');
    };

    const handleUsernameBlur = e => {
        console.log('input has been blurred');
    };

    const handleUsernameKeyDown = e => {
        console.log('input keydown has been fired');
    };

    const handleUsernameKeyUp = e => {
        console.log('input keyup has been fired');
    };

    const handleUsernameKeyPress = e => {
        console.log('input keypress has been fired');
    };
 
    // const List = [
    //     {
    //         id:username,
    //         msg:chirp
    //     }
    // ]

   
return(
     
        
        
        <form className="form-group container row col-6 mx-auto border p-3">
            <input
                className= "form-control"
                placeholder="Username" 
                value={username}
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                onKeyDown={handleUsernameKeyDown}
                onKeyUp={handleUsernameKeyUp}
                onKeyPress={handleUsernameKeyPress}/>
            <input
                className="form-control"
                placeholder="Your Thoughts ..."
                value={chirp}
                onChange={handleChirpChange}
                onFocus={handleChirpFocus}
                onBlur={handleChirpBlur}
                onKeyDown={handleChirpKeyDown}
                onKeyUp={handleChirpKeyUp}
                onKeyPress={handleChirpKeyPress}
            />
                
                <button className="btn btn-primary mt-3" onClick={handleClick}>
                Get your Chirp On
        
               </button>

           
        </form>
)}
    // <>
    //     <ul>

    //    {List.map((val) => {
    //     return <li key={val.id}>{val.msg}</li>;
    //     })}
    //     </ul>
    // </> 
        
        export default App;