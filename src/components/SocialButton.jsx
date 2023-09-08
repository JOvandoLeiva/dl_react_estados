import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({icons}) => {
  
    const fabi = url => <FontAwesomeIcon icon={`fa-brands fa-${url}`} />
    return (
        <div className="container">
            <div className="row align-items-center">
                {
                    icons.map((item,i) => (
                        <div className="col" key={`row-${i}`}>
                            {item}
                        </div>
                    ))
                }
            </div>
       </div>
    )
}
export default SocialMedia;