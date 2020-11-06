import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import logo from '../../../REVAJUDGE.png';



export const Login: React.FC = () => {

  const handleSubmit = (eve: SyntheticEvent<HTMLFormElement>) => {
    sessionStorage.setItem("email", eve.currentTarget["email"].value);
    eve.preventDefault();
  };

  return (
    <div>
      <img src={logo} />
      <Form className="landingPageForms" onSubmit={handleSubmit} >
        <Input type='email' name='email' placeholder='Email address' />
        <br></br>
        <Input className = 'password' type="text" name='password' placeholder='Password' />
        <br></br>
        <Input type='submit' value='Login' className="btn" />
        <br></br>
        <Input type='reset' value='Close' className="btn cancel" />
      </Form>
    </div>
  )
}
export default Login;
