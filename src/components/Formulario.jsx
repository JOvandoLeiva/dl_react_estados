import React, { useState } from "react";
import socialMedia from "./SocialButton";

const Login = ( {onSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [nombre, setNombre] = useState('')
 
    const valid = (e) => {
      //e.preventDefaul() -- esto mareaba la ejecución, se sigue recargando al validar 
      onSubmit({email,password,nombre})
    
    }
    return (

        /* aqui deberia ir una funcion que valide e indique que complete los campos */
            
        <div className="container  mx-auto">
            <header className="h1">Crea una cuenta</header>

          <form onSubmit={valid}>
              <div className="col-10  mx-auto">
            
                <input type="text" placeholder="Nombre" className="form-control m-2" htmlFor="nombre"  id="nombre"  onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                <div className="col-10  mx-auto">
                
                <input type="email" placeholder="tuemail@ejemplo.com" className="form-control m-2" htmlFor="email"  id="email"  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
               <div className="col-10  mx-auto">            
                   <input type="password" className="form-control m-2"  htmlFor="password" id="password1" placeholder="Contraseña" onChange={(p)=>setPassword(p.target.value)}/>
                  
               </div>
                    <div className="col-10  mx-auto">             
                        <input type="password" className="form-control m-2"  htmlFor="password" id="password2" placeholder="Confirma tu contraseña" onChange={(p)=>setPassword2(p.target.value)}/>
                    </div>
                   <div className="d-grid col-10  mx-auto">
                     <button type="submit" className="btn btn-success" disabled={!email.trim() || !password2.trim() || !password.trim() || !nombre.trim() }>Registrarse</button>
                  </div>
               </form>
         </div>
            )
    ;
    
};


export default Login;