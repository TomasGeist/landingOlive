import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import relax from './assets/relax.jpg'
import check from './assets/check.png'

export default function SectionPromesas() {
  return (
    <>
     
        <Row style={{width:'100%', minHeight:'60vh', margin:'0px', backgroundColor:'#f2de77', marginLeft: '0px', marginRight:'0px'}}>
        <Row style={{ width: '100%', height:'5vh', backgroundColor:'white', margin:'0px'}} ></Row>  
        <Col lg='6' sm='12' style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='bg-degradado'>
            <ul>           
            <h3 className='mb-5 mt-5' style={{fontWeight:'900', fontFamily:'Raleway'}}>Calidad <span style={{backgroundColor:'#f2cb05', paddingLeft:'5px', paddingRight:'5px'}}>garantizada</span></h3>
            <p><img src={check}></img> Reduce colesterol, <span className='dashed'>protege el corazón</span>.</p>
            <p><img src={check}></img> Combate inflamación, alivia dolores.</p>
            <p><img src={check}></img> <span className='dashed'>Combate el estrés</span> oxidativo celular.</p>
            <p><img src={check}></img> Mejora sensibilidad insulina, regula glucosa.</p>
            <p><img src={check}></img>Protege contra enfermedades neurológicas</p>
              </ul>
          </Col>
        <Col style={{minHeight:'60vh', boxShadow:'5px 5px 5px #00000060'}} lg='6' sm='12' className='colDerImgRelax'></Col>
        </Row>
   
    </>
  )
}
