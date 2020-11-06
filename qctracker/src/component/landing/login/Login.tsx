import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';


export const Login: React.FC = () => {

  
  
  return (
    <Form className = "landingPageForms" >
      <Input type='email' name='email' placeholder='Email address' />
      <br></br>
      <Input type='password' name='password' placeholder='Password' />
      <br></br>
      <Input type='submit' value='Login' className = "btn"/>
      <br></br>
      <Input type ='reset' value = 'Close' className = "btn cancel" />
    </Form>
  )
}
export default Login;
