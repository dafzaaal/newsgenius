import { Link } from "react-router-dom";


export function Account() {
    return(
        <div className="accbox">
            <div className="createacc">
                <p>Create Account</p>
                <div className="fullname">
                    <input type="text" placeholder="First Name..."></input>
                    <input type="text" placeholder="Last Name..."></input>
                </div>
                
                <div className="credentials">
                    <input type="username" placeholder="Username..."></input>
                    <input type="password" placeholder="Password..."></input>
                </div>

                <Link to='/'>
                    <button className='btn'>Create!</button>
                </Link>
                
                

            </div>
        </div>

    );
}