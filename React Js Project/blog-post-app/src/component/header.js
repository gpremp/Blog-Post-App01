import React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { isLoggedIn,isLogOut } from '../auth/login-auth';

/**
 * Function to attach a header into the web page with add new block and home button
 */
function Header() {
  const navigate = useNavigate();
  let isLogin = isLoggedIn();
  console.log(isLogin)
  const newPost = () => {
    navigate('/post')
  }
  const logout=()=>{
    isLogOut();
    navigate('/')
  }
  const Login = () =>{
    if(isLogin){
      return(
        <>
        <Button onClick={()=>navigate('/signIn')} class="btn btn-success active">SignIn</Button>
        <Button onClick={()=>navigate('/signup')} class="btn btn-success active">SignUp</Button>
        </>
      )
   }else{
    return(
      <Button onClick={logout} class="btn btn-success active">logout</Button>
    )
    
   }
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Blog Post App
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Link to={'/'} class="btn btn-outline-dark active">Home</Link>
           
           <Login/>
            <Button onClick={newPost} class="btn btn-success active">New Post</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;