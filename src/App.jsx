import { useState } from 'react'
import './App.css'
import Alert from './components/Alert';
import Login from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')
  const testLogin = (user) => {
    const validEmail = "usuario@email.com"
    const validPass = "password"
 //console.log(validEmail,validPass)
 if(user.email === validEmail && user.password === validPass )
 {
   setAlertMessage('Exitoso')
   setAlertType('success')

 }
 else
 {
   setAlertMessage('No se pudo u.u')
   setAlertType('danger')
  
 }
}

return (

      <div className="border border-3 rounded-3 p-1">
       <Login onSubmit={testLogin}/>

       </div>

);
  
}

export default App
