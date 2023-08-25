import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Account() {

    const[fname, setFName] = useState("");
    const[lname, setLName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    const[flag, setFlag] = useState(false);
    const[credentialLength, setCredentialLength] = useState(false);
 
    function handleFNameChange(event : React.ChangeEvent<HTMLInputElement>) {
        setFName(event.target.value);
    }

    function handleLNameChange(event : React.ChangeEvent<HTMLInputElement>){
        setLName(event.target.value);
    }

    function handleUsername(event : React.ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event : React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    async function insertUserData() {
        if(fname.length == 0 || lname.length == 0 || username.length == 0 || password.length == 0){
            setFlag(true);
            setCredentialLength(false);
        }
        else if(username.length < 5 || password.length < 7){
            setFlag(false);
            setCredentialLength(true);
        }
        try {
            const headers = {
                "fname": fname,
                "lname": lname,
                "username": username,
                "password": password,
            }
            const res = await axios.post("http://127.0.0.1:3001/api/v1/create", headers);
            alert(res.data);
            navigate("/");

        }
        catch(e) {
            console.log("Error!", e);
        }
    }

    return(
        <div className="accbox">
            <div className="createacc">
                <p>Create Account</p>
                <div className="fullname">
                    <input type="text" placeholder="First Name..." onChange={handleFNameChange}></input>
                    <input type="text" placeholder="Last Name..." onChange={handleLNameChange}></input>
                </div>
                
                <div className="credentials">
                    <input type="username" placeholder="Username..." onChange={handleUsername}></input>
                    <input type="password" placeholder="Password..." onChange={handlePasswordChange}></input>
                </div>

                <button className='btn' onClick={insertUserData}>Create!</button>

                {flag && 
                    <p id="createaccerr">One or more blank fields, please fill in all fields!</p>
                }
                
                {credentialLength &&
                    <p id="createaccerr">Username must be five or more characters long and password has to be seven</p>  
                }
                
            </div>
        </div>

    );
}