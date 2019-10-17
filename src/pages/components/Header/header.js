import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { Container, FlexContainerSpaceBetween } from '../Styled Components/globalStyled'
import Logo from '../../../Images/logo.svg'
import DefaultHeader from './defaultHeader'
import MobileMenu from "./mobileMenu"
import { device } from '../../../styles/devices'




const HeaderContainer = styled.header`

  border-bottom: 1px solid #3D3D3D; 
	@media ${device.tablet}{
		padding: 25px 0;
	}
  
`

const Header = () => (
  <HeaderContainer>
    <Container>
			<FlexContainerSpaceBetween>
				<Link to="/" style={{ display: `inherit`}}>
        			<img src={Logo} alt="Figma Mexico | Comunidad"/>
				</Link>
				<DefaultHeader/>
				<MobileMenu/>
			</FlexContainerSpaceBetween>
     </Container>
   </HeaderContainer>
)

export default Header