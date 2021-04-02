import React from 'react' ;
import {Link} from 'react-router-dom' ;
const Contact = ()=>
{
    const link = 'https://mail.google.com/' ;
    return(
        <div>
            <h3 style ={{ marginTop : "60px"}} >

            Mobile : 8574337341
            <hr/>
            <a href = {link}>Gmail.com
            </a>
             </h3>
        </div>
    )
} 
export default Contact ;