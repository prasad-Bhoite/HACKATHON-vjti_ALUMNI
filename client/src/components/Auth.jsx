import { React, useState } from 'react';
import "../styles/Auth.scss";

const Auth = () => {

  const [ switcher, setSwitcher ] = useState(false);

  return (
    <>
      <div className="auth">
        <main>
          <div>
            <button className={switcher ? "deactivated": ""} onClick = { () => setSwitcher(true) }>
              Login
            </button>
            <button className={!switcher ? "deactivated": ""} onClick = { () => setSwitcher(false) }>
              Register
            </button>
          </div>
          { switcher ? (
            <form>
              <h2> Login Form </h2>

              <div>
                <label>Email</label>
                <input type="email"  required placeholder="abc@xyz.com"/>
              </div>

              <div>
                <label>Password</label>
                  <input type="text"  required placeholder="password"/>
              </div>

              <h5>Welcome back fellow VJTIan!</h5>

              <button type='submit'>Submit</button>
            </form> ) : (
              <form>
              <h2> Registration Form </h2>
              <div>
                <label>Username</label>
                <input type="text"  required placeholder="username"/>
              </div>

              <div>
                <label>Email</label>
                <input type="email"  required placeholder="abc@xyz.com"/>
              </div>

              <div>
                <label>Password</label>
                  <input type="password"  required placeholder="password"/>
              </div>

              <h5>We will get back to you via mail once the information that you have shared is verified.</h5>

              <button type='submit'>Submit</button>
            </form> 
            ) }
          </main>
      </div>
    </>
  )
}

export default Auth;
