import React, { Component } from 'react';

import { Navbar,NavItem,Nav } from 'react-bootstrap';

    class Menu extends Component {
	   render(){
		     return(
		     
                     <div id='root'>
                   <Navbar className="toolbar">
                   <Navbar.Header className="toolbar-navigation">
                   <Navbar.Brand>
                   <a href='#the logo'>THE LOGO</a>
                   </Navbar.Brand>
                   </Navbar.Header>
                   <Nav>
                   <NavItem>
                   <a href='#login'>login</a>
                  
                   </NavItem>
                     <ul >
                     <li>product</li>
                     <li>category</li>
                     <li>aniket</li>
                     </ul>
                     </Nav>
                   </Navbar>
                     </div> 
                          

			);
	    }
   }
   export default Menu;