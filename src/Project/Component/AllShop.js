import React, { useState } from 'react' ;
import Categories from './Categories';
const AllShop = ()=>
{
const [ courses , setCourses] = useState([]) ;

    return (
        <div>
           {/* <h1>All Courses</h1>
           <p>List of Courses</p>
           {
             courses.length > 0 ? courses.map((item)=>
             {
            return (<Course course ={item}/> )}) :"No course" 
           } */}
           <Categories/>
        </div>
    )
}
export default AllShop ;