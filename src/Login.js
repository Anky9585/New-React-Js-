import React from 'react'
import BaseCtl from './BaseCtl'
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
import FormMessage from './FormMessage';
import FormError from './FormError';
// import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
import axios from 'axios';
// import Ragistration from './Ragistration';
// import { MdOutlineLogin } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";




class Login extends BaseCtl {
    constructor(props) {
        super(props);
        this.state = {
            
            inputError: {
                loginId: '',
                password: '',
                message: '',
                error: '',
            },

            form: {
                loginId: "",
                password: "",
            
        },
        
        };
        localStorage.setItem('Name', "Ankit");


    }
/**to display the links by dashboard and signin */
    signin() {
        let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
      axios.post(url,this.state).then((res) => {
        console.log(res.data.result);
          if(res.data.success==true) {
            ReactDOM.render(
              <React.StrictMode>
                <Dashboard/>
              </React.StrictMode>,
              document.getElementById('root')
            );
          }
          if(res.data.result.inputerror) {
            this.setState({inputError:res.data.result.inputerror});
            this.changeInputError("error","true")
           }
           else {
            this.changeInputError('error','false')
            this.changeInputError('message',<font color='red'>Invelid User Id Password</font>)
            this.changeInputError("id","")
            this.changeInputError("loginId","")
            this.changeInputError("password","")
           }
        });

   
    }
    resetForm = () => {
        this.setState({
            inputError:{
                loginId: "",
                password: "",
               
            },
            form:{
                loginId: "",
                password: "",
               
            }
        })
    } 
    
    render() {
        return (
            <>

            {/* <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="ragistration">Ragistration <FaEdit/></Nav.Link> */}
            {/* <Nav.Link href="login">Login <MdOutlineLogin/></Nav.Link> */}
          {/* </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="ragistration" component={Ragistration}  /> */}
      {/* <Route path="/login" key="login" component={Login}  /> */}
      {/* </Switch>
      </Router> */}

    <div className="center" >
    
    <form>
    <table>
    <h2 align="center">Login</h2>
        {(() => {
        if (this.state.error) {
        return (
            <>
            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
            </>
        )
    }
    return null;
})()}
                           
                          

        <label>Login Id:</label>
    <p>
    <input
    type="email" 
    name="loginId"
    value={this.state.form.loginId}
    onChange={(event) => this.changeFormState(event)} placeholder='Enter LoginId' required></input>
    </p>
    <div>
        <h6 className='errormessage'>{this.state.inputError.loginId}</h6>
    </div>


    
    <label> Password :</label>
    <p>
        <input
        type="password"
        name="password"
        value={this.state.form.password}
        onChange={(event) => this.changeFormState(event)} placeholder='Enter Password' required >
      </input>
    </p>
    <div>
       <h6 class='errormessage'>{this.state.inputError.password}</h6>
    </div>

        <br></br>
        <Button type='button' 
            onClick={(event) => this.signin(event)}>Signin</Button> &nbsp; &nbsp;
        <Button type='reset' variant="danger"
            onClick={(event) => this.resetForm(event)}>Reset</Button>
            
     </table>
    <br></br>
</form>
          
    </div>
    </>
    
        );
    }
}
export default Login
