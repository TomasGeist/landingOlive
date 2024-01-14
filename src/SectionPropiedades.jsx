import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import olive4 from './assets/olive4.png'
import oliveProps from './assets/oliveProps.png'
import hair from './assets/hair.png'
import young from './assets/young.png'
import digestive from './assets/digestive.png'




export default function SectionPropiedades() {
  return (
    <>
      
        <Row md='12' style={{width:'100%', minHeight:'60vh', margin:'0px', backgroundColor:'#f2e8b3', position:'relative', overflow:'hidden', fontFamily:'Raleway'}}>
          <Col lg='2'>
            <img style={{width:'500px', position:'absolute', top:'0px', left:'-200px'}}  src={olive4}></img>
        </Col>
          <Col lg='9' className='colMedBeneficios' style={{zIndex:'2'}}>
            <h2 className='mt-5' style={{fontWeight:'900'}}>Los <span style={{backgroundColor:'#f2cb05', paddingLeft:'5px', paddingRight:'5px'}}>beneficios</span></h2>
            <p style={{width:'60%', fontWeight:'300'}}>El aceite puede tener muchos beneficios, hoy te contamos algunos de ellos y por que es necesario que lo incluyas en tu vida</p>
          <Row style={{display:'flex', justifyContent:'center', gap:'5px'}}>
            
                <div className='cardPropiedades'>
                <img src={digestive}></img>
                <p>Digestión saludable</p>
                </div>
               
              <div className='cardPropiedades'><p><span style={{backgroundColor:'#ff80ab'}}>Versátil, realza sabores</span>, resistente al calor, esencial en cocina mediterránea, beneficios saludables.</p></div>
              <div className='cardPropiedades'><img src={hair}></img>
                  <p>Piel y cabello</p></div>
                <div className='cardPropiedades mb-5'><img src={young}></img>
                 <p><b>Propiedades antiaging:</b> Retrasa el envejecimiento celular.</p></div>
            <Row style={{display:'flex', justifyContent:'center'}}>
              <Button className='mb-5' style={{width:'auto', backgroundColor:'#f2cb05' , color:'black' , border:'none'}}>Lo quiero</Button>
              </Row>
              
            </Row>
        </Col>
        <Col lg='1'></Col>
        </Row>
    
    </>
  )
}
