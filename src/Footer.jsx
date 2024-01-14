import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <Container>
        <Row  className='mt-5 mb-5' style={{color:'grey', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Col lg='1'></Col>
          <Col style={{ textAlign: 'start' }}>
            <p><b>Preguntas</b></p>
            <p>FAQ {'(Preguntas Frecuentes)'}</p>
            <p>Soporte Técnico</p>
            <p>Ayuda y Orientación</p>
            <p>Comunidad de Usuarios</p>

          </Col>
          <Col style={{textAlign:'start'}}>
            <p><b>Nosotros</b></p>
            <p>Historia de la Empresa</p>
            <p>Equipo</p>
            <p>Nuestra Misión y Visión</p>
            <p>Premios y Reconocimientos</p>
            
          </Col>
          <Col style={{textAlign:'start'}}>
            <p><b> Ofertas</b></p>
            <p>Descuentos y Promociones</p>
            <p>Eventos Especiales</p>
            <p>Programas de Lealtad</p>
            
          </Col>
          <Col style={{textAlign:'start'}}>
            <p><b>Social</b></p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Whatsapp</p>
            <p>Email</p>
            
          </Col>
        <p className='mt-3'>Derechos reservados - Geisetech</p>
        </Row>
      </Container>
    </>
  )
}
