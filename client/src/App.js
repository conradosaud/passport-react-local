import React, { useState } from 'react';
import "./App.css"
import axios from 'axios';

function App() {

    const [ registerEmail, setRegisterEmail ] = useState("");
    const [ registerName, setRegisterName ] = useState("");
    const [ registerPassword, setRegisterPassword ] = useState("");
    const [ loginEmail, setLoginEmail ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");

    const [ data, setData ] = useState();

    const SERVER_URL = "http://localhost:3003";

    const register = () => {
        axios({
            method: "POST",
            data: {
                name: registerName,
                email: registerEmail,
                password: registerPassword,
            },
            withCredentials: true,
            url: SERVER_URL + "/register"
        })
        .then( res => { console.log(res); })
        .catch( res => { console.log(res); })
    }
    const login = () => {
        axios({
            method: "POST",
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
            url: SERVER_URL + "/login"
        })
        .then( res => { console.log(res); })
        .catch( res => { console.log(res); })
    }
    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: SERVER_URL + "/getUser"
        })
        .then( res => { setData(res.data) })
        .catch( res => { console.log(res); })
    }

    return (
        <div className="App">
            
            <div>
                <h1> Register </h1>
                <input onChange={e => setRegisterName(e.target.value)} placeholder="user name" />
                <input onChange={e => setRegisterEmail(e.target.value)} placeholder="user email" />
                <input onChange={e => setRegisterPassword(e.target.value)} placeholder="password" />
                <button onClick={register} > Submit </button>
            </div>
            
            <div>
                <h1> Login </h1>
                <input onChange={e => setLoginEmail(e.target.value)} placeholder="user email" />
                <input onChange={e => setLoginPassword(e.target.value)} placeholder="password" />
                <button onClick={login}> Submit </button>
            </div>
            
            <div>
                <h1> Get user </h1>
                <button onClick={getUser}> Submit </button>
                { data && <p>Hello again, { data.name }</p> }
            </div>

        </div>
    );
}

export default App;
