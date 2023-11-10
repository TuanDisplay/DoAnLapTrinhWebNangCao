import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            txtID: '',
            txtToken: ''
        };
    }
 
    render(){
        return(
            <body>
                <div className ="active">
                    <h2 className ="active-heading">ACTIVE ACCOUNT</h2>
                    <form action="#" class="active-form" autoComplete='off'>
                        <label for="ID" class="active-label">ID</label>
                        <input type="ID" id="ID" class="signup-input" 
                            value ={ this.state.txtID } onChange ={(e) => { this.setState ({ txtID: e.target.value }) }} />
                        <label for="token" class="active-label">Token</label>
                        <input type="text" id="token" class="signup-input" 
                            value ={ this.state.txtToken } onChange ={(e) => { this.setState ({ txtToken: e.target.value }) }} />
                        <input type ="submit" value ="Active" class="login-submit" onClick ={(e) => this.btnActiveClick(e) }/>
                    </form>
                </div>
            </body>
        );
    }

    // event - handlers
    btnActiveClick(e){
        e.preventDefault();
        const id = this.state.txtID;
        const token = this.state.txtToken;
        if(id && token){
            this.apiActive(id, token);
        } else {
            alert('Please input id and token');
        }
    }

    // apis
    apiActive(id, token){
        const body = { id: id, token: token };
        axios.post('/api/customer/active', body).then((res) => {
            const result = res.data;
            if(result){
                alert('OK BABY!');
            } else {
                alert('SORRY BABY!');
            }
        });
    }
}

export default Active ;