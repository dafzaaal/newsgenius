import {Link} from 'react-router-dom';


export function Landing() {

    return(
    <div className='App'>
        
        <div className='login'>
          <div className='form'>
            <p>Login</p>
              <form>
                <input type='text' id='username' placeholder='Username...'></input>
                <input type='password' id='password' placeholder='Password...'></input>
  
                <Link to='/preferences'>
                  <input type='button' value='Login' className='login_btn'></input>
                </Link> 
                
                <p>Not signed in? <Link to='/create'>Create an account</Link></p>
              </form>
            </div>
  
        </div>
  
      </div>


    );

}