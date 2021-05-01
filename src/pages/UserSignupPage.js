import React from 'react';
import '../css/SignupStyle.css'
import '../bootstrap-override.scss'
import avatar from '../images/avatar.png'
import {signup} from '../api/apiCalls'

class UserSignupPage extends React.Component{
    state ={
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        pendingApiCall:false
    };
    onChange = event =>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        });
    }
    onClickSignup = async event =>{
        event.preventDefault();
        const {username,displayName,password} = this.state;
        const body ={
            username,
            displayName,
            password
        };
        this.setState({pendingApiCall:true});
        try {
         const response = await  signup(body);
        }catch (error){
        }
        this.setState({pendingApiCall:false});
    }
    render(){
        const {pendingApiCall} = this.state
        return(

            <div className="contact-form">
                <img alt="" className="avatar" src={avatar}/>
                    <h2>Sing Up</h2>
                    <form action="">
                        <p>Username</p><input placeholder="Enter username" type="text" name="username" onChange={this.onChange}/>
                        <p>Displayname</p><input placeholder="Enter displayname" type="text" name="displayName" onChange={this.onChange}/>
                        <p>Password</p><input placeholder="Enter Password" type="password" name="password" onChange={this.onChange}/>
                        <p>Password Repeat</p><input placeholder="Enter Password Repeat" type="password" name="passwordRepeat" onChange={this.onChange} />
                        <button disabled={pendingApiCall} onClick={this.onClickSignup} type="button" >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up </button>
                    </form>
            </div>
        );
    }
}
export default UserSignupPage;