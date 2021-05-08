import React from 'react';
import '../css/SignupStyle.css'
import '../bootstrap-override.scss'
import avatar from '../images/avatar.png'
import Input from "../components/Input";
import {withTranslation} from "react-i18next";
import {login} from "../api/apiCalls";

class LoginPage extends React.Component{
    state ={
        username:null,
        password:null,
        pendingApiCall:false,
        errors:{

        }
    };
    onChange = event =>{
        const {t} = this.props;
        const {name,value}=event.target;
        const errors ={...this.state.errors}
        errors[name]=undefined;
        this.setState({
            [name]:value,
            errors
        });
    }

    onClickLogin = event =>{
        event.preventDefault();
        const {username,password} = this.state;
        const creds ={
            username,
            password
        }
        login(creds)

    }

    render() {
        const {t} = this.props;
        const {errors} = this.state
        const {username,password} = errors;
        return(
            <div className="contact-form">
                <img alt="" className="avatar" src={avatar}/>
                <h2>{t('Login')}</h2>
                <form>

                    <Input name="username" label={t("Username")} error = {username} onChange={this.onChange} placeholder={t("Enter Username")} type="text"/>
                    <Input name="password" label={t("Password")} error = {password} onChange={this.onChange} placeholder={t("Enter Password")}  type="password"/>
                    <button  onClick={this.onClickLogin} type="button" >{t('Login')} </button>
                </form>
            </div>
        );
    }
}
const UserLoginPageWithTranslation = withTranslation()(LoginPage);
export default UserLoginPageWithTranslation;