import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtName: '',
            txtPhone: '',
            txtEmail: ''
        };
    }

    render(){
        return(
            <body>
                <div className ="signup">
                    <h2 className ="signup-heading">SIGN UP</h2>
                    <form action="#" class="signup-form" autoComplete='off'>
                        <label for="username" class="signup-label">Username</label>
                        <input type="text" id="username" class="signup-input" 
                            value ={ this.state.txtUsername } onChange ={(e) => { this.setState({ txtUsername: e.target.value }) }} />
                        <label for="password" class="signup-label">Password</label>
                        <input type="password" id="password" class="signup-input" 
                            value ={ this.state.txtPassword } onChange ={(e) => {this.setState ({ txtPassword: e.target.value }) }} />
                        <label for="name" class="signup-label">Name</label>
                        <input type="text" id="name" class="signup-input" 
                            value ={ this.state.txtName } onChange ={(e) => { this.setState ({ txtName: e.target.value }) }} />
                        <label for="phone" class="signup-label">Phone</label>
                        <input type="text" id="phone" class="signup-input" 
                            value ={ this.state.txtPhone } onChange ={(e) => { this.setState ({ txtPhone: e.target.value }) }} />
                        <label for="email" class="signup-label">Email</label>
                        <input type="email" id="email" class="signup-input" 
                            value ={ this.state.txtEmail } onChange ={(e) => { this.setState ({ txtEmail: e.target.value }) }} />
                        <input type ="submit" value ="Sign Up" class="signup-submit" onClick ={(e) => this.btnSignupClick(e)} />
                    </form>
                </div>
            </body> 
        );
    }

    // event - handlers
    btnSignupClick(e){
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        const name = this.state.txtName;
        const phone = this.state.txtPhone;
        const email = this.state.txtEmail;

        if(username && password && name && phone && email){
            const account = { username: username, password: password, name: name, phone: phone, email: email };
            this.apiSignup(account);
        } else {
            alert('Please input username and password and name and phone and email');
        }
    }

    // apis
    apiSignup(account){
        axios.post('/api/customer/signup', account).then((res) => {
            const result = res.data;
            alert(result.message);
        });
    }
}

export default Signup;