import React from 'react' ;
import { Link } from 'react-router-dom';
import { Container, Jumbotron ,Button } from 'reactstrap';

const Home =()=>
{
    return(
        <div>
        <Jumbotron className = "text-center">
            <h1>This is Shopping site</h1>
            <p>This is my Project which is created with help of react Js </p>
        <Container>
        <Link to = "/about">
            <Button color = "primary" >start Using</Button>
        </Link>
        </Container>
        </Jumbotron>
        </div>
    )
}
export default Home ;