import React, {Component} from 'react';
import logo from '../images/urbanlegends.png'
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

class TobBar extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className="shadow-sm bg-light mb-2 nav-bar-div">
                <nav className="navbar  navbar-expand navbar-light bg-light nav-urban">
                    <Link className="navbar-brand" to="/">
                     <img className="logo-img" src={logo}/>   Urban Legend</Link>
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link className="nav-link" to="/login">
                                {t('Login')}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/signup">{t('Sign Up')}</Link></li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default withTranslation()(TobBar);