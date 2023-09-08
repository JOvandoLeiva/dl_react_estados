import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({icons}) => {
  
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {
                    icons.map((item,i) => (
                        <div className="col border leicono p-2 col-md-auto m-1" key={`row-${i}`}>
                            {item}
                        </div>
                    ))
                }
            </div>
       </div>
    )
}
export default SocialMedia;