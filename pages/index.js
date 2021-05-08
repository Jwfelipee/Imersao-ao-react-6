import React from 'react';

import Head from 'next/head';
import Menu from '../componets/Menu';
import Rodape from '../componets/Rodape';

import { Container, Jumbotron } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home() {
  return (
    <div>
      <Head>
        <title>Home - JWFelipe</title>
        <meta name='description' content='Pagina home do site de orçamentos de serviços' />
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #56657c;
              color: #3ebff5;
              margin-bottom: 3%;
          }.circulo{
            width: 140px;
            height: 140px;
            background-color: #56657c;
            font-size: 52px;
            color: #fff;
            padding-top: 24px;
          }.centralizar{
            margin: 0 auto !important;
            float: none !important
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Temos a solução que a sua empresa precisa!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <p className="lead">
            <a href='/orcamento' className='btn btn-outline-info btn-lg mt-4 mb-4'>Orçamento</a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='sevicos'>
        <style>
          {`.servicos{
            background-color: #fff;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className='text-center'>
          <div>
            <h2 className='display-4'>serviços</h2>
            <p calssName='lead pb-4'>Duis dictum sem in massa convallis, vitae porttitor lorem porta. Integer tristique eu metus id molestie.</p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon='laptop-code' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço 1</h2>
              <p>
                Morbi scelerisque scelerisque tellus ut lobortis.
              </p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon='mobile-alt' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço 2</h2>
              <p>
                Sed semper feugiat tortor, id cursus lectus sagittis sed. Phasellus sagittis est arcu, eu aliquam turpis semper se
              </p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
              <FontAwesomeIcon icon='network-wired' />
              </div>
              <h2 className='mt-4 mb-4'>Serviço 3</h2>
              <p>
                vitae porttitor lorem porta. Integer tristique eu metus id molestie.
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  )
}

export default Home;