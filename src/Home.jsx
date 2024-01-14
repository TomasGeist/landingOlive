import React from 'react'
import NavWeb from './NavWeb'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner';
import SeccionVenta from './SeccionVenta';
import SectionPropiedades from './SectionPropiedades';
import SectionPromesas from './SectionPromesas';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import SeccionFrase from './SeccionFrase';

export default function Home() {
  return (
    <>
      <NavWeb></NavWeb>
      <Container>
        <Banner></Banner>
      </Container>
        <SeccionFrase></SeccionFrase>
      <Container>
        <SeccionVenta></SeccionVenta>
      </Container>
        <SeccionFrase></SeccionFrase>
      <Container>
        
      <SectionPropiedades></SectionPropiedades>
      <SectionPromesas></SectionPromesas>
      <Footer></Footer>
      </Container>
    </>
  )
}
