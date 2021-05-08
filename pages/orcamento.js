import Menu from '../componets/Menu';
import Rodape from '../componets/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Orcamento() {
  return (
    <div>

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

      <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="preencha com o nome completo" />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="preencha com o seu melhor e-mail" />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="(XX) XXXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="project">Projeto</Label>
              <Input type="textarea" name="project" id="project" placeholder="Fale um pouco do seu projeto" />
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