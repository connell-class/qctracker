import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import logo from '../../../REVAJUDGE.png';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';




export const Login: React.FC = () => {

  const HandleSubmit = async (eve: SyntheticEvent<HTMLFormElement>) => {
    const user ={
      email: eve.currentTarget["email"].value,
      password: eve.currentTarget["password"].value
    };
    eve.preventDefault();
    
    const response = axios.get("http://localhost:3004/user", {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const json = (await response).data;
    console.log(json);
    for(let dbuser of json){
      if(dbuser.email === user.email && dbuser.password === user.password){
        console.log("Blah")
        sessionStorage.setItem("user", dbuser)
        window.location.href = 'http://localhost:3000/landing';
      }
    }
    
    
  };

  


  return (
    <div>
      <img src={logo} className="imgLandingLogo" />
      <Form className="landingPageForms" onSubmit={HandleSubmit} >
        <Input type='email' name='email' id='email' placeholder='Email address' />
        <br></br>
        <Input className = 'password' type="text" id='password' name='password' placeholder='Password' />
        <br></br>
        <Input type='submit' value='Login' className="btn" />
        <br></br>
        <Input type='reset' value='Close' className="btn cancel" />
      </Form>
    </div>
  )
}
export default Login;
