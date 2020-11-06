import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import logo from '../../../REVAJUDGE.png';






export const Register: React.FC = () => {

  // Redux solution to tracking user state



  // local state solution in lieu of Redux
  // const [user, setUser] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPass: ""
  // })

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {

  }


  return (
    <div>
      <img src={logo} />
      <Form onSubmit={handleSubmit} className="landingPageForms">
        <Input type='text' name='firstName' placeholder='First name' />
        <br></br>
        <Input type='text' name='lastName' placeholder='Last name' />
        <br></br>
        <Input type='email' name='email' placeholder='Email address' />
        <br></br>
        <Input className = "password" type='text' name='password' placeholder='New password' />
        <br></br>
        <Input className = "password" type='text' name='confirm' placeholder='Confirm password' />
        <br></br>
        <Input type='submit' value='Register' className="btn" />
        <br></br>
        <Input type='reset' value='Close' className="btn cancel" />
      </Form>
    </div>
  )
}