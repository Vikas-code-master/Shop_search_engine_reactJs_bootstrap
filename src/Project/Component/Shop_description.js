import React, { useEffect, useState } from 'react' ;
import './Shop_description.css'
const Shop_description = (props)=>
{
    const [shopDesc , setShopDesc] = useState('') ;

    useEffect(() => {  
        fetch ("https://cityapl.com/api/v1/cityapl/shops/"+ props.match.params.slug + '/' )
        .then((res)=>res.json())
        .then((data)=>{setShopDesc(data)
                console.log (data) ;
})
        .catch(error => console.log(error) );
      },[]);


  return(  <div>
    <h1>Shop_description</h1>
    <div>
      <div>
  <div 
   className="category">
  <img className="catimg" src={!!shopDesc ? shopDesc.bannerImage : ''}/>
  </div>

</div>
</div>
</div>
  )


          


        


}

export default Shop_description ;