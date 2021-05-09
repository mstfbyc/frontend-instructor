import React from 'react';
import '../css/SignupStyle.css'
import '../bootstrap-override.scss'
import avatar from '../images/avatar.png'
import Input from "../components/Input";
import {withTranslation} from "react-i18next";
import {login} from "../api/apiCalls";
import axios from "axios";
import ButtonWithProgress from "../components/ButtonWithProgress";

class LoginPage extends React.Component{
    state ={
        username:null,
        password:null,
        pendingApiCall:false,
        error:null
    };

    componentDidMount() {
        axios.interceptors.request.use((request)=>{
            this.setState({pendingApiCall:true});
            return request;
        });
        axios.interceptors.response.use((response)=>{
            this.setState({pendingApiCall:false});
            return response;
        }, (error)=>{
            this.setState({pendingApiCall:false});
            throw error;
        })
    }

    onChange = event =>{
        const {t} = this.props;
        const {name,value}=event.target;
        const errors ={...this.state.errors}
        errors[name]=undefined;
        this.setState({
            [name]:value,
            error:null

        });
    }

    onClickLogin = async event =>{
        event.preventDefault();
        const {username,password} = this.state;
        const creds ={
            username,
            password
        };
        this.setState({
            error:null
        });
        try{
           await login(creds);
        }catch (apiError){
            this.setState({
                error:apiError.response.data.message
            });
        }


    }

    render() {
        const {t} = this.props;
        const {error, username,password,pendingApiCall} = this.state;
        const buttonEnabled = username && password;
        return(
            <div className="contact-form">
                <img alt="" className="avatar" src={avatar}/>
                <h2>{t('Login')}</h2>
                <form>
                    <Input name="username" label={t("Username")}  onChange={this.onChange} placeholder={t("Enter Username")} type="text"/>
                    <Input name="password" label={t("Password")} error = {error} onChange={this.onChange} placeholder={t("Enter Password")}  type="password"/>
                    <ButtonWithProgress onClick={this.onClickLogin} disabled={pendingApiCall || !buttonEnabled} pendingApiCall={pendingApiCall} text={t('Login')}/>
                </form>
            </div>
        );
    }
}
const UserLoginPageWithTranslation = withTranslation()(LoginPage);
export default UserLoginPageWithTranslation;