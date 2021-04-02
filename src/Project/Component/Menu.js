import React from 'react' ;
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom' ;
const Menu = (props)=>
{
    return (
        <>
            <div>
            <ListGroupItem tag = 'a'  action >
                    <Link to='/'>Home</Link>
                </ListGroupItem>
                <ListGroupItem tag = 'a' action >
                <Link to='/add-course'>Add Shops</Link>
                </ListGroupItem>
                <ListGroupItem tag = 'a' action >
                <Link to='/view-categories'>All Shops</Link>
                </ListGroupItem>
                <ListGroupItem tag = 'a' action >
                <Link to = '/about'> About</Link>
                </ListGroupItem>
                <ListGroupItem tag = 'a'  action >
                 <Link to = '/contact'>Contact</Link>
                </ListGroupItem>
                <ListGroupItem tag = 'a'  action >
                 <Link to = '/sign-in'>Log In</Link>
                </ListGroupItem>
                
            </div>
        </>
    )
}
export default Menu ;