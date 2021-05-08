import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translations:{
                'Sign Up':'Sign Up',
                "Password mismatch":"Password mismatch",
                "Username":"Username",
                "Display Name": "Display Name",
                "Password":"Password",
                "Password Repeat":"Password Repeat",
                "Enter Username":"Enter Username",
                "Enter Display Name": "Enter Display Name",
                "Enter Password":"Enter Password",
                "Enter Password Repeat":"Enter Password Repeat",
                "Login":"Login"

            }
        },
        tr:{
            translations:{
                'Sign Up': 'Kayıt Ol',
                "Password mismatch":"Aynı Şifreyi Giriniz",
                "Username":"Kullanıcı Adı",
                "Display Name":"Tercih Edilen İsim",
                "Password":"Parola",
                "Password Repeat":"Parola Tekrar",
                "Enter Username":"Kullanıcı Adı Giriniz",
                "Enter Display Name": "Tercih Edilen İsim Giriniz",
                "Enter Password":"Parola Giriniz",
                "Enter Password Repeat":"Parola Tekrar Giriniz",
                "Login": "Giriş"

            }
        }
    },
    fallbackLng:'tr',
    ns:['translations'],
    defaultNS: 'translations',
    keySeparator:false,
    interpolation:{
        escapeValue: false,
        formatSeparator:','
    },
    react:{
        wait:true
    }
});

export default i18n;