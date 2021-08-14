import React from "react";
import "./login.scss";
import PasswordF from '../PasswordForgot/PasswordF';
import {useHistory , Link} from "react-router-dom";


export default function Login() {

  let history = useHistory();
  return (
    <div className="login" id="login">
      <div class="row">
        <div class="col">
          <div className="left">{""}</div>
        </div>
        <div class="col">
          <div className="right">
            <div className="formContainer">
              <h1 className='lgtxt'>
                <span class="first">Hello,</span><br/>
                <span class="second">Welcome Back</span>
               </h1>
              <h6> 
                  <span class ="third">Login to manage your account</span>
                  </h6>
              <form action="">
                <input type="text" placeholder="E-mail address" />
                <input type="password" placeholder="Password" />
                <span className="forget">
                  <h6>
                    <Link to onClick={()=> {history.push('/passwordforgot')}} >Forgot Password?<hr/></Link>
                  </h6>
                </span>
                <button type="submit" onClick={()=> {history.push('/menu')}}>Next</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
