import React, { useEffect, useState } from 'react' ;
import './SignIn.css'

const SignIn = ()=>
{
    const [SignIn , setSignIn] = useState([]) ;
    const [showPopup , setShowPopup] = useState(false) ;
    const [UserName , setUserName] = useState() ;
    const [Password , setPassword] = useState() ;



    const handleSignIn =(e)=>
    {
        if (e.target.id === 'UserName')
        {
            setUserName(e.target.value) ;
        }
        if (e.target.id === 'Password')
        {
            setPassword(e.target.value) ;
        }  
    }
    const signIn = ()=>
    {
        let payload = {"email": UserName,
        "password": Password }
        fetch("https://reqres.in/api/register" ,payload)
        .then((res)=>{if(res.status==200){
            alert("registered succesfully")
        }})
        .catch(error => console.log(error) );
        console.log("xxxxxxx",payload) 
    }
    return(
        <div className = "signIn">
            <h1>log in</h1>
            <input id = "UserName" placeholder = "UserName" onChange ={handleSignIn} />
            <input id = "Password" placeholder= "Password" onChange ={handleSignIn} />
            <button onClick = {signIn}>SignIn</button>
        </div>
    )
}

export default SignIn ;