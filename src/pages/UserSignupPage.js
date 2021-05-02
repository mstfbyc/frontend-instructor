import React from 'react';
import '../css/SignupStyle.css'
import '../bootstrap-override.scss'
import avatar from '../images/avatar.png'
import {signup} from '../api/apiCalls'
import Input from "../components/Input";

class UserSignupPage extends React.Component{
    state ={
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        pendingApiCall:false,
        errors:{

        }
    };
    onChange = event =>{
        const {name,value}=event.target;
        const errors ={...this.state.errors}
        errors[name]=undefined;
        if(name==="password" || name==="passwordRepeat"){
            if(name ==="passwordRepeat" && value !== this.state.passwordRepeat){
                errors.passwordRepeat ="Password mismatch";
            }else if(name ==="passwordRepeat" && value !== this.state.password){
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({
            [name]:value,
            errors
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
            if(error.response.data.validationErrors){
                this.setState({errors:error.response.data.validationErrors});
            }
        }
        this.setState({pendingApiCall:false});
    }
    render(){
        const {pendingApiCall,errors} = this.state
        const {username,displayName,password, passwordRepeat} = errors;
        console.log(username)
        return(

            <div className="contact-form">
                <img alt="" className="avatar" src={avatar}/>
                    <h2>Sing Up</h2>
                    <form>

                        <Input name="username" label="Username" error = {username} onChange={this.onChange} type="text"/>
                        <Input name="displayname" label="Displayname" error = {displayName} onChange={this.onChange} type="text"/>
                        <Input name="password" label="Password" error = {password} onChange={this.onChange} type="password"/>
                        <Input name="passwordRepeat" label="Password Repeat" error ={passwordRepeat} onChange={this.onChange} type="password"/>
                        <button disabled={pendingApiCall} onClick={this.onClickSignup} type="button" >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up </button>
                    </form>
            </div>
        );
    }
}
export default UserSignupPage;