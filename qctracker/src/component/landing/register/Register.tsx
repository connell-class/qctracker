import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import logo from '../../../REVAJUDGE.png';
import axios from 'axios';

export const Register: React.FC = () => {

  // Redux solution to tracking user state
  
  interface user{
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }

  // local state solution in lieu of Redux
  // const [user, setUser] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPass: ""
  // })

  const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
  
    event.preventDefault();
    const fName = event.currentTarget["firstName"].value;
    const lName = event.currentTarget["lastName"].value;
    const eMail = event.currentTarget["email"].value;
    const password = event.currentTarget["password"].value;
    const current = event.currentTarget["confirm"].value;

    console.log("you should see dis bruh");
    if (password != current)
    {
      alert("Uh oh. Those passwords don't match my guy. Try again.")
    }
    else
    {

      const obj = 

      //console.log(newUser);
      //let newUserData = JSON.stringify(newUser);
      //newUserData
      //console.log("after: " + newUser);

      axios.post("http://localhost:3004/user", {
          id: null,
          firstName: fName,
          lastName: lName,
          email: eMail,
          password: password
          
      })
    }
  }
  return (
    <div>
      <img src={logo} className="imgLandingLogo" />
      <Form onSubmit={handleSubmit} className="landingPageForms" method="POST">
        <Input type='text' name='firstName' required placeholder='First name' />
        <br></br>
        <Input type='text' name='lastName' required placeholder='Last name' />
        <br></br>
        <Input type='email' name='email' required placeholder='Email address' />
        <br></br>
        <Input className="password" type='text' name='password' placeholder='New password' />
        <br></br>
        <Input className="password" type='text' name='confirm' placeholder='Confirm password' />
        <br></br>
        <Input type='submit' value='Register' className="btn" />
        <br></br>
        <Input type='reset' value='Close' className="btn cancel" />
      </Form>
    </div>

  )
}