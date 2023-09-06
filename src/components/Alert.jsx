import React from "react";

const Alert = ({ message='Completa todos los campos!', type }) => {
  
    return (
        <>
            <div className={`alert alert-${type}`} role="alert">
                {message}
            </div>
        </>
    )
}
export default Alert;