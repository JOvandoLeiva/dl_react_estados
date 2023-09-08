import React, { useState } from "react";
import socialMedia from "./SocialButton";

const Login = ( {onSubmit}) => {

    const [error, setError] = useState(false)

    const [personita, setPersonita] = useState({nombre:"",email:"",pass1:"",pass2:""})
 
    const validar = (e) => {
      e.preventDefault()
      
      if (!email.trim() || !password2.trim() || !password.trim() || !nombre.trim())
      {
        setError(true);
        return;
      }
      setError(false);
    }

    const inputHandler = (field,value) => {

      setPersonita((prevPerson) => ({
        ...prevPerson,
        [field]:value
      }))

      setError(false)

    }

    return (

            
        <div className="container  mx-auto">
            <header className="h1">Crea una cuenta</header>

          <form onSubmit={validar}>
          
    
              <div className="col-10  mx-auto">
            
                <input type="text" placeholder="Nombre" className="form-control m-2" htmlFor="nombre"  id="nombre"  onChange={(e)=> inputHandler("nombre",e.target.value)}/>
                </div>
                <div className="col-10  mx-auto">
                
                <input type="email" placeholder="tuemail@ejemplo.com" className="form-control m-2" htmlFor="email"  id="email"  onChange={(e)=>inputHandler("email",e.target.value)}/>
                </div>
               <div className="col-10  mx-auto">            
                   <input type="password" className="form-control m-2"  htmlFor="password" id="password1" placeholder="Contraseña" onChange={(p)=>inputHandler("pass1",p.target.value)}/>
                  
               </div>
                    <div className="col-10  mx-auto">             
                        <input type="password" className="form-control m-2"  htmlFor="password" id="password2" placeholder="Confirma tu contraseña" onChange={(p)=>inputHandler("pass2",p.target.value)}/>
                    </div>
                   <div className="d-grid col-10  mx-auto">
                     <button type="submit" className="btn btn-success">Registrarse</button>
                  </div>
                  <div>{error ? <p>todos los campos deben estar completos</p> : null }</div>
               </form>
         </div>
            )
    ;
    
};


export default Login;