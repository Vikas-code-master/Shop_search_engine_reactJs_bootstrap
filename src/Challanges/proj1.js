import React from 'react';
import ReactDOM from 'react-dom';


function Proj1()
{
    let curDate = new Date(2020,12,12,8) ;
curDate = curDate.getHours() ;
let greeting = '' ;
let cssStyle = {};
 
if (curDate >= 1 && curDate <12)
{
 greeting = 'Good Morning' ;
 cssStyle.color = 'green';
}
else if(curDate >= 12 && curDate <19)
{
 greeting = 'Good Afternoon' ;
 cssStyle.color = 'orange';
}
else
{
 greeting = 'Good Night' ;
 cssStyle.color = 'blue';
}
 return (
     <div>  
<span><h1>Hello sir ,<span style = {cssStyle}>{greeting}</span> & Timing is {curDate}</h1>
</span>
</div>  
)} 
export default Proj1 ;