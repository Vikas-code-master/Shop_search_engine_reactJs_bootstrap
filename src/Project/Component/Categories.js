import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom' ;

const Categories =()=>
{
  const [data , setCategories] = useState([]);
  const [showData , setShowData] = useState(false) ;

 useEffect(() => {  
  fetch("https://cityapl.com/api/v1/cityapl/categories/")
  .then((res)=>res.json())
  .then((data)=>setCategories(data))
  .catch(error => console.log(error) );
},[]);

const Course_Dets =()=>
  {
    return(
    <div>
     {data.map((data,i)=>{
      return (
        <div>

            <Link to ={`/subcategories/${data.id}`}><img className="catimg" style = {{width:'20px'}} src = {data.catImg} />
            {data.id} {data.name}</Link>
        </div>
             )}
          )}
      </div>)
  };
  return(
    <>
      <h1>Shop Details</h1>
      <button onClick={()=>setShowData(!showData)}>Show All Shop_Details </button>
    {showData? <Course_Dets/> : null} 

    </>
  );

} ;
export default Categories ;