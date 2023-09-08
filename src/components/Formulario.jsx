import React, { useState } from "react";
import Registro from "./Registro";

const Login = () => {

    const [error, setError] = useState("")

    const [personita, setPersonita] = useState({nombre:"",email:"",pass1:"",pass2:""})
 
    const validar = (e) => {
      e.preventDefault()
      
      if (!personita.email.trim() || !personita.pass1.trim() || !personita.pass2.trim() || !personita.nombre.trim())
      {
        return setError("todos los campos deben estar completos") 
       
      }

      if(personita.pass1 !== personita.pass2)
      {
        return setError("Las contraseñas no coinciden")
      }

      setError("Registrado")
      setPersonita({nombre:"",email:"",pass1:"",pass2:""})
     
    }

    const inputHandler = (field,value) => {

      setPersonita((prevPerson) => ({
        ...prevPerson,
        [field]:value
      }))

      setError(false)

    }

    return (

            
        <div className="pb-4 pt-4 mx-auto">
            <header className="h1 p-2">Crea una cuenta</header>

              <Registro />
          <form className="p-3" onSubmit={validar}>
          
              <div className="col-10 mx-auto">
                  <p>o usa tu email para registrarte</p>
                <input type="text" placeholder="Nombre" value={personita.nombre} className="form-control m-2" htmlFor="nombre"  id="nombre"  onChange={(e)=> inputHandler("nombre",e.target.value)}/>
                </div>
                <div className="col-10  mx-auto">
                 
                <input type="email" placeholder="tuemail@ejemplo.com" value={personita.email} className="form-control m-2" htmlFor="email"  id="email"  onChange={(e)=>inputHandler("email",e.target.value)}/>
                </div>
               <div className="col-10  mx-auto">            
                   <input type="password" className="form-control m-2" value={personita.pass1} htmlFor="password" id="password1" placeholder="Contraseña" onChange={(p)=>inputHandler("pass1",p.target.value)}/>
                  
               </div>
                    <div className="col-10  mx-auto">             
                        <input type="password" className="form-control m-2" value={personita.pass2} htmlFor="password" id="password2" placeholder="Confirma tu contraseña" onChange={(p)=>inputHandler("pass2",p.target.value)}/>
                    </div>
                   <div className="d-grid col-10  mx-auto">
                     <button type="submit" className="btn btn-success">Registrarse</button>
                  </div>
                  <div>{error.length > 0 ? <p>{error}</p> : null }</div>
               </form>
         </div>
            )
    ;
    
};


export default Login;