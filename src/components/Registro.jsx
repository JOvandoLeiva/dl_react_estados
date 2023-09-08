import SocialMedia from "./SocialButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

/* En el componente Registro, se debe importar el componente SocialButton, para
mostrar los botones de redes sociales.
El icono se debe enviar mediante props desde el componente Registro.*/
const Registro = () => {
  
    const icons = 
    [
        <FontAwesomeIcon icon={faFacebook} size="2xl" />,
        <FontAwesomeIcon icon={faGithub} size="2xl"/>,
        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
    ]
   /* console.log(icons)*/
    return (
       <div className="">
        
        <SocialMedia icons={icons}/>
        

       </div>
    )
}
export default Registro;