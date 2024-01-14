import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import olive2 from './assets/olive2.png'
import oliveBannerder from './assets/oliveBannerder.png'
import facesvg from './assets/facesvg.svg'
import instasvg from './assets/instasvg.svg'
import wspsvg from './assets/wspsvg.svg'

export default function Banner() {
  return (
    <>
        <Row sm={12} className='w-100' style={{width:'100%', height:'70vh', margin:'0px', position:'relative', overflow:'hidden', marginLeft: '0px', marginRight:'0px'}}>
        <img className='dropshadow' style={{width:'25rem', position:'absolute', left:'30px', bottom:'0', zIndex:'1', opacity:'0.9'}} src={olive2}></img>
        <img className='dropshadow' style={{width:'20rem', position:'absolute', right:'-120px', top:'-120px', zIndex:'1', opacity:'0.5'}} src={oliveBannerder}></img>
        <Row className='bg-bannertop' style={{ height: '70%', margin: '0px' }}>
          <Col lg='12' style={{display:'flex', flexDirection:'column', justifyContent:'end', alignItems:'end', textAlign:'start'}}>
            <Col lg='8' sm='7'></Col>
            <Col lg='4' sm='5' style={{ zIndex: '2' }}>
            <h1 className='mt-3' style={{zIndex:'2'}}><span style={{backgroundColor:'#f2e8b3', paddingLeft:'3px',paddingRight:'3px'}}>Aceites</span> Escenciales</h1>
            <p style={{fontFamily:'Raleway', fontWeight:'300'}}>Aceites necesarios para tu cuerpo</p>
          </Col>
          </Col>
        </Row>
        <Row className='bg-bannerbottom' style={{ height:'30%',margin:'0px' }}>
          <Col className='colRedes mt-3' lg='12' style={{ zIndex: '2' }}>
              <img src={instasvg}></img>
              <img src={facesvg}></img>
              <img src={wspsvg}></img>
            <p className='mt-3' style={{fontFamily:'Raleway', fontWeight:'300'}}>Contactanos en nuestras redes</p>
            <Button style={{backgroundColor:'#f2de77', border:'#f2de77', borderRadius:'2px', zIndex:'2'}}>Ver Más</Button>
          </Col>
        </Row>
      </Row>
     
    </>
  )
}
