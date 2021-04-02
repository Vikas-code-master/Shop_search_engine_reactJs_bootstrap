import {Button, Container, Form, FormGroup} from 'reactstrap' ;
import React from 'react' ;
import Drop_down from './Drop_down';
// import AllCourse from './AllCourses';
 const AddShop = ()=>
 {
     return (
         <div className = "text-center my-3">
         <h1>Fill Shop Detail</h1>
             <Form style = {{width : "50%"}}>
                 <FormGroup >
                     <label for = 'user id' >Shop Id  </label>
                     <input type = 'text' placeholder = "Enter here" name= "user Id"
                      id = 'userId' />
                 </FormGroup>
                 <FormGroup >
                     <label for = 'course title' >Shop title </label>
                     <input type = 'text' placeholder = "Enter here" name= "user Id"
                      id = 'title Id' />
                 </FormGroup>
                 <FormGroup >
                     <label for = 'Description' >Shop Detail  </label>
                     <input type = 'text' placeholder = "Enter here" name= "Enter Detail here"
                      id = 'userId' />
                 </FormGroup>
                 <Container>
                     <Button color = 'success'> Add Shop <Drop_down/></Button>
                     <Button color = 'warning'> Clear </Button>
                 </Container>
             </Form>
         </div>
     )
 }
 export default AddShop ;