import React from 'react'
import { Container } from '../Styled Components/globalStyled'
import styled from 'styled-components'
import Facebook from '../../Images/facebook-logo.svg'
import Twitter from '../../Images/twitter-logo.svg'
import Instagram from '../../Images/instagram-logo.svg'
import Spectrum from '../../Images/spectrum-logo.svg'
import { device } from '../../styles/devices'
import SocialIcon from './socialMediaIcon'

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    align-items: center;
    flex-direction: row;
        

    @media ${device.tablet}{
        flex-direction: column;
        .footer-column:first-child {
            margin-bottom: 48px;
        }
    }
`
const FooterLogo = styled.h2`
    font-size: 28px;
    color: #fff;
    margin: 0 0 20px 0;
    @media ${device.tablet}{
        text-align: center
    }
`

const FooterText = styled.p`
    font-size: 18px;
    color: #E9E9E9;
        a {
            color: #fff;
        }
    @media ${device.tablet}{
        text-align: center
    }
`

const Footer = () => (
    <footer>
        <Container>
        <FooterWrapper>
            <div class="footer-column">
                <FooterLogo>Figma Mexico</FooterLogo>
                <FooterText>Hecho con love por <a href="#">Joaquin Joya</a></FooterText>
            </div>
            <div class="footer-column">
                <div>
                    <SocialIcon url={'google.com'} img={Facebook} alt={'Facebook | Figma Mexico'}/>
                    <SocialIcon url={'#'}img={Twitter} alt={'Twitter | Figma Mexico'}/>
                    <SocialIcon url={'#'}img={Instagram} alt={'Instagram | Figma Mexico'}/>
                    <SocialIcon url={'#'} img={Spectrum} alt={'Spectrum | Figma Mexico'}/>
                </div>
            </div>
            </FooterWrapper>
        </Container>
    </footer>

)



export default Footer