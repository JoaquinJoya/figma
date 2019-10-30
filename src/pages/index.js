import React from "react"
import Layout from "../Componets/layout"
import Arrow from "../Images/btn-arrow.svg"
import BlogImg from "../Images/blog-post-img.png"
import FeaturedPost from "../Componets/Blog/FeaturedBlog"

import { Container, BigButton } from '../Componets/Styled Components/globalStyled'
import styled from 'styled-components'

import { graphql, Link } from "gatsby"

const Title = styled.h1`
   font-size: 90px;
   font-weight: 500;
   font-family: 'Bw';
   color: #fff;
   line-height: 120px;
`
const SubText = styled.p`
   font-size: 22px;
   font-weight: 400;
   font-family: 'Bw';
   line-height: 34px;
   color: #fff;
`


 export default ({ data }) => {
   const { edges } = data.allMarkdownRemark
   return(
      <Layout>
         <Container className="ContainerHome">
            
            <section id="Hero">
               <Title> Figma Mexico</Title>
               <div>
                  <SubText>Aprende a utitlizar la mejor herramienta colaborativa de diseno. Tutoriales, recursos y mas. </SubText>
                  <BigButton to='/'>Aprende Mas <img src={Arrow}/></BigButton>
               </div>
            </section>

            <section id="NewPost">
               <FeaturedPost
                  src={BlogImg}
                  title="Figma, la mejor herramienta de disenos colaborativa en linea"
                  excerp="Aprende a utitlizar la mejor herramienta colaborativa de diseno. Tutoriales, recursos y mas asdfasfd asdf asdf asfd..."
                  to="/"
               />
            </section>

         <h1>Gatsby Tutorial Site Home Page</h1>
         {edges.map(({ node }) => (
         <div key={node.id}>
         
         <h3>{node.frontmatter.title}{" "}</h3>
         <p>{node.frontmatter.date}</p>
         <p>{node.excerpt}</p>
         </div>
         ))}
         </Container>
        
         
      </Layout>
      )
 }
    
 

 

 export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength:100)
          frontmatter {
            title
            date
         
          }

        }
      }
    }
  }
`