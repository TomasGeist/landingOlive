import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function 
() {
  return (
    <>
      <Row style={{ width: '100%', height:'50vh'}}>
        <Col style={{backgroundColor:'red'}} md='6'><p>Hola </p></Col>
        <Col style={{backgroundColor:'green'}}  md='6'>Chau</Col>

    </Row>
    </>
  )
}
