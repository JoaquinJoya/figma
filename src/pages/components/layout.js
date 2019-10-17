import React from 'react'

import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
export default ({ children }) => (

<div>
    <Header/>
    {children}
    <Footer/>
</div>

)
