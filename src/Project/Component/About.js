import React, { useState } from 'react' ;

const About = ()=>
{
    const [List , setList] = useState("");
    const sites = ["flipkart" , "amazon" , "snapdeal" , "myntra"]
    const Show = ()=>
    {
        const listofItems = sites.map (
            (elem)=>(<li>{elem}</li>)
        )
        return listofItems ;
    }
    return(
        <div>
            <h3 style ={{ marginTop : "60px"}} > This site is created for learning purpose . 
             it,s  similar to prototye of E-commerce sites .</h3>
             <h2>Some famous site is here :</h2>
             <div>
             {/* <Show/> */}
              <button onClick = {Show()} >showMe </button>
             </div>
        </div>
    )
} 
export default About ;