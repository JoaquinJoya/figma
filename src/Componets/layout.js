import React from 'react'

import Header from "./Header/header"
import Footer from './Footer/footer'
import SEO from '../Componets/SEO'
export default ({ children }) => (

<div>
    <Header/>
    <SEO  keywords={[`Product Design`, `UX Design`, `UI Design`]} />
    {children}
    <Footer/>
</div>

)
