import React from "react";
const Input = (props)=>{
    const {label,error,name,onChange, type} = props;
    const className = error ? 'is-invalid':'';
    console.log(error)
    console.log(className);
    return(
        <div className={className}>

            <p>{label}</p>
            <input className={className} placeholder={"Enter "+name} type={type} name={name} onChange={onChange}/>
            <div className="invalid-feedback">{error} </div>
        </div>
    );
}
export default Input;