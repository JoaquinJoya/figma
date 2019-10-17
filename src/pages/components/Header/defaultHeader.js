import React from 'react'
import styled from 'styled-components'
import  NavLinkItem  from './navLink.js'
import { device } from '../../../styles/devices'


const Nav = styled.nav`
	display:flex;
`
const NavList = styled.ul`
	display:flex;

	@media ${device.tablet}{
		display: none;
    }

`

const DefaultHeader = () => (

            <Nav>
				<NavList>
					<NavLinkItem url="/" children="Home" />
					<NavLinkItem url="/blog" children="Blog"/>
					<NavLinkItem url="/comunidad" children="Comunidad"/>
					<NavLinkItem url="/acerca" children="Acerca"/>
					<NavLinkItem url="/contacto" children="Contacto"/>
				</NavList >
			</Nav>

)

export default DefaultHeader