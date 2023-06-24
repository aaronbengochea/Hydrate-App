import React from 'react';
import axios from 'axios';

//clears all the data in the txt fields - important to place this post then function
//in the sumbit function or else the response wont have data and will trigger errors
function ClearForm() {

    document.getElementById("name").value = '';
    document.getElementById("password").value = '';
    document.getElementById("email").value = '';
    document.getElementById("pet").value = '';

    return(
        <div>
            <p>Thank you for joining the competition!</p>
        </div>
);
};

class Signup extends React.Component{
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            username: '',
            petName: '',
            /*formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false*/
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // console.log(e);
        let target = e.target;
        let value = target.value; 
        let name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            petName: this.state.petName,
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5000/create_user',
            data: formData,
            config: {headers: {'Content-Type' : 'multipart/form-data'}}
        })

        .then(function (response) {
            console.log('info sent')
            console.log(response)
            console.log(response.data)

        })
        .catch(function(response) {

        })
        
        ClearForm();
    }

    render(){
    return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} id="FormFields" className="FormFields" method="POST" action="/register">
                    <div className='FormField'>
                        <label htmlFor='name'>Username: </label>
                        <input type='text' id='name' placeholder='Enter your username' name='username' value={this.state.username} onChange={this.handleChange}/>
                    </div>

                    <div className='FormField'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' placeholder='Enter your password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <p></p>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    };
};





export {Signup};
