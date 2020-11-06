import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPass, email, firstName, lastName, password } from '../../redux/actions/UserActions';
import { Form, Input } from 'reactstrap';
import { IState,IlandingButtonsState, IUserState } from '../../redux/reducers/index';
import { API_CONN_ROOT } from '../../config/ApiConn';
import { register } from '../../redux/actions/LandingButtonActions';





export const Register: React.FC = () => {

  // Redux solution to tracking user state
  const dispatch = useDispatch();
  const user = useSelector<IState, IUserState>(state => state.userState);
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);


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
    console.log(event)
    try{
      const response = await fetch(`${API_CONN_ROOT}/where-ever it ends up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      });
      if(response.status === 200){
        // dispatch JWT to store and use JWT to authenticate when ever the user makes a post/put/patch/delete request
        // history.push(user's url) to automatically log the user in after account creation. Might not want to do this to all for the email confirmation.

      } else {
        // Consolelog/log the error if it is outside a taken username or email. Tell user if the username or email is taken
      }
    } catch(err){
      console.log(err);
    }
  }
  

  return (

    <Form onSubmit={handleSubmit} className = "landingPageForms">
      <Input type='text' name='firstName' placeholder='First name' onChange={e => dispatch(firstName(e.target.value))}/>
      <br></br>
      <Input type='text' name='lastName' placeholder='Last name' onChange={e => dispatch(lastName(e.target.value))}/>
      <br></br>
      <Input type='email' name='email' placeholder='Email address' onChange={e => dispatch(email(e.target.value))}/>
      <br></br>
      <Input type='password' name='password' placeholder='New password' onChange={e => dispatch(password(e.target.value))}/>
      <br></br>
      <Input type='password' name='confirm' placeholder='Confirm password' onChange={e => dispatch(confirmPass(e.target.value))}/>
      <br></br>
      <Input type='submit' value='Register' className = "btn"/>
      <br></br>
      <Input type ='reset' value = 'Close' className = "btn cancel" onClick={e => dispatch(register(false))}/>
    </Form>
  )
}