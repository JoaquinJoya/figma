import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "./header.css"

const NavLink = styled(Link)`
	font-size: 1em;
    color: #929292; 
    text-decoration: none;
    display: block;
    border-bottom: 1px solid transparent;
    padding: 40px 0;
    transition: all ease-in 0.2s;

    &:hover {
        color: #fff;
    }


`
const NavItem = styled.li`
    margin: 0 0 0 40px;
    padding: 0;
    
    
`


const NavLinkItem = ( props ) => (
    <NavItem>
        <NavLink activeClassName="active" to={props.url}>{props.children}</NavLink>
    </NavItem>

)


export default NavLinkItem