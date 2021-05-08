import React from 'react';
import {withTranslation} from "react-i18next";
import {chamgeLanguage} from "../api/apiCalls";

const LanguageSelector = (props) => {
    const onChangeLanguage = language =>{
        const {i18n} = props;
        i18n.changeLanguage(language);
        chamgeLanguage(language);
    }
    return (
        <div className="LanguageSelector">
            <img src="https://www.countryflags.io/tr/shiny/48.png" alt="Turkiye Flag" onClick={()=> onChangeLanguage('tr')}/>
            <img src="https://www.countryflags.io/gb/shiny/48.png" alt="English Flag" onClick={()=> onChangeLanguage('en')}/>
        </div>
    );
};

export default withTranslation()(LanguageSelector);