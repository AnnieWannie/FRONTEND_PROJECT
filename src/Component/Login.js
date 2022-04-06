import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label>
          <h1>Login:</h1>
          <br/> <input type="text" name="Username" placeholder='UserName'/><br/>
          <input type="text" name="Login" placeholder='Password' />
        </label>
        <br/> <input type="submit" value="Submit"/>
      </form><br/><br/>
      <form>
        <label>
          <h1>Register:</h1>
          <br/> <input type="text" name="Login" placeholder='FirstName' /><br/>
          <input type="text" name="Login" placeholder='LastName' />
          <br/> <input type="text" name="Username" placeholder='UserName'/><br/>
           <input type="text" name="Username" placeholder='Password'/><br/>
          <input type="text" name="Login" placeholder='Email' /><br/>
          <input type="text" name="Login" placeholder='Address' />
        </label>
        <br/> <input type="submit" value="Submit" />
      </form>
    </div>

  )
}

export default Login;