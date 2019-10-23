import React from 'react'
import styled from 'styled-components'


const LinkContainer = styled.a`
    &:not(:last-child) {
        margin: 0 24px 0 0;
    }

`


const SocialIcon = ( props ) => (
    <LinkContainer href={props.url}>
        <img src={props.img} alt={props.alt}/>
        </LinkContainer>
)

export default SocialIcon 