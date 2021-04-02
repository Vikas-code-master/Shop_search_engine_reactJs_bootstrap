import React from 'react' ;
import Header from './Project/Component/Header' ;
import {Button, Container ,Row,Col} from 'reactstrap' ;
import {ToastContainer , toast} from 'react-toastify';
import Home from './Project/Component/Home' ;
// import AllCourse from './AllCourses';
import AddShop from './Project/Component/AddShop';
import Menu from './Project/Component/Menu';
import {BrowserRouter as Router, Link, Route , Switch } from 'react-router-dom' ;
import About from './Project/Component/About';
import Contact from './Project/Component/Contact';
import Subcategory from './Project/Component/Subcategory';
import Shop from './Project/Component/Shop';
import Categories from './Project/Component/Categories';
import Shop_description from './Project/Component/Shop_description';
import SignIn from './Project/Component/SignIn';
const MyApp = ()=>{
  const BtnHandle = ()=>
  {
    toast("This is my first Measssage") ;
    // toast.success("Done");
  }
  return(
      <div>
      <Router>
        <ToastContainer/>
        <Container>
        <Header/>
         <Row>
           <Col md ={4}>
             <div>
               <Menu/>
            </div>           
            </Col>
           <Col md = {8}>
          <Switch>
          {/* <Link to="/add-course">hey</Link> */}
              <Route path = "/" component = {Home} exact/>
              <Route path ="/add-course"  component = {AddShop} />
              <Route path ="/view-categories"  component = {Categories} />
              <Route path = "/subcategories/:id" component = {Subcategory}/>
              <Route path = "/shops/:shopid" component = {Shop}/>
              <Route path = '/shop-detail/:slug' component = {Shop_description}/>
              <Route path = "/contact" component = { Contact}/> 
              <Route path = "/about" component = {About}/>
              <Route path = '/sign-in' component = {SignIn}/>
          </Switch>
           </Col>
         </Row>
         </Container>
        </Router>
         </div>
  )
} ;
export default MyApp ;