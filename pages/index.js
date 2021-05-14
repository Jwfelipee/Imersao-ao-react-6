import React from 'react';

import Head from 'next/head';
import Menu from '../componets/Menu';
import Rodape from '../componets/Rodape';

import { Container, Jumbotron } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home({ data }) {
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
          <h1 className="display-4">{data.home.topTitulo}</h1>
          <p className="lead">{data.home.topSubTitulo} </p>
          <p className="lead">
            <a href={data.home.topLinkBtn} className='btn btn-outline-info btn-lg mt-4 mb-4'>{data.home.topTextoBtn}</a>
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
            <h2 className='display-4'>{data.home.serTitulo}</h2>
            <p className='lead pb-4'>{data.home.serSubTitulo}</p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon={data.home.serUmIcone} />
              </div>
              <h2 className='mt-4 mb-4'>{data.home.serUmTitulo}</h2>
              <p>{data.home.serUmDesc}</p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon={data.home.serDoisIcone} />
              </div> 
              <h2 className='mt-4 mb-4'>{data.home.serDoisTitulo}</h2>
              <p>{data.home.serDoisDesc}</p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon={data.home.serTresIcone} />
              </div>
              <h2 className='mt-4 mb-4'>{data.home.serTresTitulo}</h2>
              <p>{data.home.serTresDesc}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  )
}
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:8080/home`)
  const data = await response.json();
  return { props: { data } };
}

export default Home;