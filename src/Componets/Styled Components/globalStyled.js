import styled from 'styled-components'
import {  Link } from "gatsby"


export const Container = styled.div`
  
    max-width: 1224px;
    margin: 0 auto;
    padding: 0 24px;
   
   
`
export const FlexContainerSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BigButton = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: #141414; 
    background: #fff;
    padding: 18px 40px;
    text-decoration: none;
    border-radius: 50px;
    display: inline-block;
    margin: 32px 0 0 0;
`
