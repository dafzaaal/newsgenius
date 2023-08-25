import { ChangeEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


export function Landing() {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[badCredentials, setBadCredentials] = useState(false);
  const navigate = useNavigate();


  async function checkValidCredentials() {
    const headers = {
      "username": username,
      "password": password,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3001/api/v1/login', headers);
      console.log(response);
      const queryRows = response.data;
      if(queryRows.length == 0) {
        setBadCredentials(true);
      }
      else if(queryRows.length != 0){
        navigate("/preferences");
      }
    }
    catch(e) {
      console.log("Error!", e);
    }

  };

  const handleUsernameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    console.log(username);
    setUsername(event.target.value);
  }
  

  const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    console.log(password);
    setPassword(event.target.value);
  }

    return(
    <div className='App'>
        
        <div className='login'>
          <div className='form'>
            <p>Login</p>
              <form>
                <input type='text' id='username' placeholder='Username...' onChange={handleUsernameChange}></input>
                <input type='password' id='password' placeholder='Password...' onChange={handlePasswordChange}></input>

                <input type='button' value='Login' className='login_btn' onClick={checkValidCredentials}></input>

                {badCredentials && 
                  <p id='loginError'>Incorrect Login Information, Please Try Again!</p>
                }
                
                <p>Not signed in? <Link to='/create'>Create an account</Link></p>
              </form>
            </div>
  
        </div>
  
      </div>


    );

}