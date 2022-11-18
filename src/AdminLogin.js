import React, { Component } from 'react'
import BaseCtl from './BaseCtl'
// import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
// import FormMessage from './FormMessage';
import Ragistration from './Ragistration';
import Login from './Login';
import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
import axios from 'axios';
import FormError from './FormError';
// import UserList from './UserList';
import Dashboard from './Dashboard';
import { MdOutlineLogin } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default class AdminLogin extends BaseCtl {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         inputError:{
    //             loginId:'',
    //             password:'',
    //             error:'',
    //             message:'',
    //         },
    //         form:{
    //             loginId:'',
    //             password:'',
    //         }
    //     }
    //     const styles = {
    //         color: 'purple',
    //         fontSize: '40px',
    //         border: '2px solid purple'
    //       }
    //     }
   
    

  //   signin() {
    
  //     let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
  //     axios.post(url,this.state).then((res) => {
  //       console.log(res.data.result);
  //         if(res.data.succes==true) {
  //           ReactDOM.render(
  //             <React.StrictMode>
  //               <Dashboard/>
  //             </React.StrictMode>,
  //             document.getElementById('root')
  //           );
  //         }
  //        if(res.data.result.inputerror) {
  //         this.setState({InputError:res.data.result.inputerror});
  //         this.changeInputError("error","true")
  //        }
  //        else {
  //         this.changeInputError('error','false')
  //         this.changeInputError('message',<font color='red'>Invelid User Id Password</font>)
  //         this.changeInputError("id","")
  //         this.changeInputError("loginId","")
  //         this.changeInputError("password","")
  //        }
  //     });
         
  // }
    
  resetForm = () => {
    this.setState({
        form:{
            loginId: "",
            password: "",
        }
    })
} 
    
        
    
  render() {
    return (
      <>
       <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link href="ragistration">Ragistration <FaEdit/></Nav.Link>
            <Nav.Link href="login">Login <MdOutlineLogin className=''/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="Ragistration" component={Ragistration}  />
      <Route path="/login" key="login" component={Login}  />
      </Switch>
      </Router>

      <h2 align="center">..Welcome to ORS Page..</h2>

      {/* <div className='center'>
        <Form id="sign-in-form" className="text -left p-3 w-50" >
          <table align="center">
            <h2>Login Form</h2>

            {(() => {
              if(this.state.error) {
                return(
                  <div><FormError error={this.getInputError("error")} message={this.getInputError("message")} /></div>
                )
              }
            return null; 
            
           } )()}


            <label>Login Id:</label>
            <p>
              <input
                type="email" 
                name="loginId"
                value={this.state.form.loginId}
                onChange={this.changeFormState} placeholder='Enter LoginId' required></input>
            </p>
            <div><FormError errorname={this.getInputError("loginId")} /></div>

            <label> Password :</label>
            <p>
              <input
                type="password"
                name="password"
                value={this.state.form.password}
                onChange={this.changeFormState} placeholder='Enter Password' required ></input>
            </p>
            <div>
              <div><FormError errorname={this.getInputError("password")} /></div>
            </div>
         
           
            
            <br></br>
            
            <Button  type='button'
              onClick={(event) => this.signin(event)}>SignIn</Button> &nbsp; &nbsp;
              <Button type='reset' variant="danger"
            onClick={(event) => this.resetForm(event)}>Reset</Button>
                                
          </table>
        </Form>

      </div> */}
      </>
    )
  }
    }
