import React, { useEffect, useState } from 'react' ;

const Drop_down = ()=>
{
    const [nums, setNums] = useState() ;
    const SetValue =()=>
    {
        setNums (nums)
    }
    
    return(
        <div>
        selected fav shop {nums}
            <select value = {nums} onChange = {(event)=>
            {
                setNums(event.target.value) ;
            }} >
                <option value ='1' > 1</option>
                <option value ='2' > 2</option>
                <option value ='3' > 3</option>
                <option value ='4' > 4</option>
                <option value ='5' > 5</option>
            </select>
        </div>
    )
}
export default Drop_down ;