import styles from '../styles/index.module.css'
import { useReducer, useState } from 'react';
import React, { Component } from 'react'
import { Container, Col, Row, Form, Button, ButtonGroup } from 'react-bootstrap';

export default function Home(){
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [operacao, setOperacao] = useState("+");

    function calcular(){
        let x1 = parseFloat(valor1);
        let x2 = parseFloat(valor2);
        if (operacao == "+"){
            setResultado(x1+x2);
        }else if (operacao == "-"){
            setResultado(x1-x2);
        }else if (operacao == "*"){
            setResultado(x1*x2);
        }else if (operacao == "/"){
            setResultado(x1/x2);
        }
    }

    return  <div style={stylesheet.content}>
                <Form style={stylesheet.form}>
                    <Col>
                    Número 1:
                    <Form.Control style={stylesheet.input} type="number" placeholder="" value={valor1} onChange={e => setValor1(e.target.value)}/>
                    Número 2:
                    <Form.Control style={stylesheet.input} type="number" placeholder="" value={valor2} onChange={e => setValor2(e.target.value)}/>
                    <br></br>
                    <ButtonGroup style={stylesheet.botao}>
                        <Button onClick={()=>setOperacao("+")} style={stylesheet.operacao} variant="secondary">+</Button>
                        <Button onClick={()=>setOperacao("-")}style={stylesheet.operacao} variant="secondary">-</Button>
                        <Button onClick={()=>setOperacao("*")} style={stylesheet.operacao} variant="secondary">×</Button>
                        <Button onClick={()=>setOperacao("/")} style={stylesheet.operacao} variant="secondary">÷</Button>
                    </ButtonGroup>
                    <br></br>
                    <br></br>
                    <Button onClick={()=>calcular()} style={stylesheet.botao} variant="primary">
                    Calcular
                    </Button>
                    </Col>
                </Form>
                <p style={stylesheet.resultado}>Resultado:<br></br>{resultado}</p>
                
                
            </div> 
}

const stylesheet = {
    content:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    },

    form:{
        padding: "100px",
    },

    input: {
        textAlign: "center",
    },

    operacao:{
        fontSize: "20px",
    },

    botao: {
        width: "100%",
    },
    resultado: {
        textAlign: "center",
    },
}