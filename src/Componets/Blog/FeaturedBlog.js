import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import  Arrow from '../../Images/white-arrow.svg'

const Badge = styled.span`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Bw';
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #fff;
    background: #A259FF;
    padding: 8px 12px;
    border-radius: 40px;
    

`
const FeaturedPostContainer = styled.div`
    display: grid;
    grid-template-columns: 790px 1fr;
    grid-gap: 60px;
    align-items: center;

`
const FeaturedImage = styled.img`
    max-width: 100%;
`
const Title = styled.h2`
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
    color: #fff;

`
const Excerp = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #C2C2C2;
`
const ReadMore = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
`

const FeaturedPost = ( {  src, title, excerp, url }) => (

   <FeaturedPostContainer>
        <FeaturedImage src={src}/>
        <div> 
            <Badge>Nuevo</Badge>
            <Title>{title}</Title>
            <Excerp>{excerp}</Excerp> 
            <ReadMore to={url}> Leer Mas<img src={Arrow}/></ReadMore>
        </div>
   </FeaturedPostContainer>
   

)

export default FeaturedPost

