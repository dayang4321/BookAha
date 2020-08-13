import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './InfoBlock.css'


const infoBlock = (props) => {

    return (
        <Row className="info-row">
        <Col md={6} className="info-text-block">
            <h1 className="info-title mb-0">
                {props.infoTitle}
            </h1>
            <p className="info-text mb-0">{props.infoText}</p>
        </Col>
        <Col md={"auto"} className="ml-auto">
            <div className="black-bg">
                <img className={props.imgOffset} src={require("../../../assets/images/" + props.img)} alt={props.imgAlt}/>
            </div>
        </Col>
    </Row>
    )
  
}

export default infoBlock