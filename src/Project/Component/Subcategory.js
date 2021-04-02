import React, { useEffect, useState } from 'react';
import './Subcategory.css';
import {Link } from 'react-router-dom' ;

const Subcategory = (props)=>{
    const [subCategories, setData] = useState([]);
    const handleSubCategory = (id)=>{
        props.history.push('/shops/'+ props.match.params.id +"/"+ id)
     }

    useEffect(() => {  
        fetch("https://cityapl.com/api/v1/cityapl/subcategories/?category="+ props.match.params.id)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch(error => console.log(error) );
      },[]);

    return <div className="home">
                <h3>SubCategories</h3>
                 <div className="homePage">
                {subCategories.map((data,i)=>{
                    return(
                        <Link to={'/shops/'+ data.id}>
                        <div style = {{ width : "20px" }} 
                     className="category" onClick={()=>handleSubCategory(data.id)}>
                    <img className="catimg" src={data.subCatImg}/>{data.name}
                    </div>
                    </Link>
                )})}
                    </div>
            </div>

}


export default Subcategory;