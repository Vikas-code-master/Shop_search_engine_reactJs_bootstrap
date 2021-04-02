import React, { useEffect, useState } from 'react' ;
import {Link } from 'react-router-dom' ;

const Shop = (props)=>
{
    const [shopData , setshopData] = useState([]) ;

    useEffect(() => {  
        fetch ("https://cityapl.com/api/v1/cityapl/1/" 
        + props.match.params.shopid + "/shops/?ordering=-likes")
        .then((res)=>res.json())
        .then((data)=>{setshopData(data)
                console.log (data) ;
})
        .catch(error => console.log(error) );
      },[]);

    return (
        <div>
                <h1>Shop Detail</h1>
                <div>
                  {shopData.map((data,i)=>{
                    return(
                        <div>

                    <Link to = {'/shop-detail/'+ data.slug}>
                    <div 
                     className="category">
                    <img  className="catimg" src={data.bannerImage}/>{data.shopName}</div>
                    </Link>
                 </div>
                    )

                })}
                </div>
        </div>
    )
}

export default Shop ;
