import React ,{useState}from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";
import { useHistory } from "react-router";

export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  const history = useHistory()
  
  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/")

  }
  function  handleSignIn(){
    setIsAuthenticated(true)
  }


  return (
   

    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated? <SignedIn signOut={handleSignOut} bisey="1"/>:<SignOut signIn={handleSignIn} bisey="2"/>}
           
          
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
