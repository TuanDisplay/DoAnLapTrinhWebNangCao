import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';

class Login extends Component {
    
    static contextType = MyContext; // using this . context to access global state
    
    constructor(props){
        super(props);
        this.state = {
            txtUsername: 'sonkk',
            txtPassword: '123 '
        };
    }

    render(){
        return(
            <body>
                <div className ="login">
                    <h2 className ="login-heading">CUSTOMER LOGIN</h2>
                    <form action="#" class="login-form" autoComplete='off'>
                        <label for="username" class="login-label">Username</label>
                        <input type="text" id="username" class="login-input" 
                            value ={this.state.txtUsername} onChange ={(e) => { this.setState({ txtUsername: e.target.value }) }} />
                        <label for="password" class="login-label">Password</label>
                        <input type="password" id="password" class="login-input" 
                        value ={this.state.txtPassword} onChange ={(e) => {this.setState ({ txtPassword: e.target.value }) }} />
                        <input type ="submit" value ="Login" class="login-submit" onClick ={(e) => this.btnLoginClick (e) } />
                    </form>
                </div>
            </body>
        );
    }

    // event - handler
    btnLoginClick(e){
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        if(username && password){
            const account = { username: username, password: password };
            this.apiLogin(account);
        } else {
            alert ('Please input username and password');
        }
    }

    // apis
    apiLogin(account){
        axios.post('/api/customer/login', account).then((res) => {
            const result = res.data;
            if(result.success === true){
                this.context.setToken(result.token);
                this.context.setCustomer(result.customer);
                this.props.navigate('/home');
            } else {
                alert(result.message);
            }
        });
    }
}

export default withRouter(Login);