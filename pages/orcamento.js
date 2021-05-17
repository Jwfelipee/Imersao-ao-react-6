import React, { useState } from 'react';
import { Alert } from 'reactstrap';

import Menu from '../componets/Menu';
import Rodape from '../componets/Rodape';
import Head from 'next/head';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Orcamento() {
  const [orcamento, setOcamento] = useState({
    name: "",
    email: "",
    phone: "",
    whatsApp: "",
    project: ""
  })

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = e => setOcamento({ ...orcamento, [e.target.name]: e.target.value })

  const sendOrcamento = async e => {
    e.preventDefault();
    console.log(orcamento);

    try {
      const res = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: { 'Content-Type': 'application/json' }
      })

      const responseEnv = await res.json();

      if (responseEnv.error) {
        setResponse({
          type: 'error',
          message: responseEnv.message
        })
      } else {
        setResponse({
          type: 'success',
          message: responseEnv.message
        })
      }
    } catch (err) {
      setResponse({
        type: 'error',
        message: 'ERRO: orçamento nao enviado com sucesso'
      })
    }
  }
  return (
    <div>
      <Head>
        <title>Orçamentos - JWFelipe</title>
        <meta name='description' content='site de orçamentos ... sobre orçamentos de serviços' />
      </Head>
      <Menu />
      <Jumbotron fluid className='descr-top'>
        <style>
          {`.descr-top{
              background-color: #454f5f;
              color: #fff;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className='text-center'>
          <h1 className='display-4'>Orçamentos</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-orcamento" >
        <style>
          {`.form-orcamento{
              padding-top: 3%;
              padding-bottom: 3%;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
          {response.type === 'success' ? <Alert color="primary">{response.message}</Alert> : ""}
          <Form onSubmit={sendOrcamento}>
            <FormGroup >
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="preencha com o nome completo"
                onChange={onChangeInput} />
            </FormGroup>

            <FormGroup className='mt-3'>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="preencha com o seu melhor e-mail"
                onChange={onChangeInput} />
            </FormGroup>

            <FormGroup className='mt-3'>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX"
                onChange={onChangeInput} />
            </FormGroup>

            <FormGroup className='mt-3'>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="(XX) XXXXX-XXXX"
                onChange={onChangeInput} />
            </FormGroup>

            <FormGroup className='mt-3'>
              <Label for="project">Projeto</Label>
              <Input type="textarea" name="project" id="project" placeholder="Fale um pouco do seu projeto"
                onChange={onChangeInput} />
            </FormGroup>


            <Button type='submit' outline color='info' className='mt-3'>Solicitar orçamento</Button>
          </Form>
        </Container>
      </Jumbotron>
      <Rodape />
    </div>
  )
}

export default Orcamento;