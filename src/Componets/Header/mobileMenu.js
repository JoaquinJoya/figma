import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { device } from '../../styles/devices'

const BurgerContainer = styled.div`
    display: none;
    height: 50px;
    width: 50px;
    cursor: pointer; 
    transform: rotate(0deg);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media ${device.tablet}{
            display: block;
        }
   
`
const Burger = styled.div`
 width: 26px;
  height: 10px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
`
const LinkMobile = styled(Link)`
        text-align: center;
        font-size: 24px;
        text-decoration: none;
        color: #121212;
        transition: all ease 0.3s;
        &:hover {
          color: #A259FF;
        }

`

const Nav = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;

`

const NavItem = styled.li`
  
  &:not(:last-child) {
    margin: 0 0 22px 0;
  }
`


class MobileMenu extends Component {
    // constructor to set state and bind "this"
    constructor(props) {
        super(props);
        this.state = {menuActive: false};
        this.handleClick = this.handleClick.bind(this);
      }
  
    // function to handle the click
     handleClick() {
      this.setState(prevState => ({
        menuActive: !prevState.menuActive
      }));
    }
    
    // the render() method to put stuff into the DOM
    render() {
      // the modal you will toggle on and off
      const menuClass = (
        'menu-active'
      );
      
      // the return() to put your default HTML into the DOM
      return (
          // wrapper div of component
          <div className={`menu-mobile ${this.state.menuActive ? menuClass : ''}`}>
            
            <BurgerContainer className='burger-cont'  onClick={this.handleClick}>
                <Burger>
                    <div className="bar topBar"></div>
                    <div className="bar bottomBar"></div>
                </Burger>
            </BurgerContainer>
            <div className='nav-container'>
              <Nav>
                  <NavItem><LinkMobile to='/'>Home</LinkMobile></NavItem>
                  <NavItem><LinkMobile to='/blog'>Blog</LinkMobile></NavItem>
                  <NavItem><LinkMobile to='/comunidad'>Comunidad</LinkMobile></NavItem>
                  <NavItem><LinkMobile to='/acerca'>Acerca</LinkMobile></NavItem>
                  <NavItem><LinkMobile to='/contacto'>Contacto</LinkMobile></NavItem>
              </Nav>
            </div>
          </div>
      );
    }
  }
    



export default MobileMenu