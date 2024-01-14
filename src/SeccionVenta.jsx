import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import olive3 from './assets/olive3.png'
import Accordion from 'react-bootstrap/Accordion';
import facesvg from './assets/facesvg.svg'
import instasvg from './assets/instasvg.svg'
import wspsvg from './assets/wspsvg.svg'


export default function SeccionVenta() {
  return (

    <>
      
      <Row md='12' className='modificador mb-5 mt-5' style={{width:'100%', margin:'0px'}}>
        <Col lg='6' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          
          <div style={{ position: 'relative' }} className='circle'>
              <img src={olive3} className='dropshadow circleimg'></img>
         </div>  
      
        </Col>
          <Col lg='6'>
            <div style={{width:'100%', textAlign:'start'}}>
            <h3><b>Aceite de oliva</b></h3>
            <h5 style={{color:'#f2de77', fontWeight:'bold'}}>$29.99</h5>
            <p>Descripcion del producto que se esta mostrando en la foto va aqui</p>
            </div>
              <Row>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
        <Accordion.Header>Ingredientes</Accordion.Header>
        <Accordion.Body>
          Aceite de oliva puro extra virgen.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Instrucciones de uso</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
                </Accordion.Item>
            <Form style={{width:'100%'}}>
                  <div className='mt-3' style={{
                    display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                  <Form.Label >Cantidad: </Form.Label>
              
                      <Form.Control style={{width:'8%', marginLeft:'3px'}} type="number" placeholder="Cantidad" /> 
                  <div style={{
                    display: 'flex', justifyContent: 'end', alignItems:'center', width:'50%'}}>
                  <Button style={{height:'auto'}}>Comprar</Button>
                   </div>
                  </div>
                  <Row className='mt-3'>
                    <Col><p style={{fontStyle:'italic'}}>- Oliva aceites -</p></Col>
                    <Col className='colRedes'>
                        <img src={instasvg}></img>
                        <img src={facesvg}></img>
                        <img src={wspsvg}></img>
                    </Col>

                  </Row>
                  </Form>
            </Accordion>
            </Row>
          </Col>
        </Row>
        
    </>
  )
}
