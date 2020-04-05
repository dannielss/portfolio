import React from 'react';

import { Container, Title, List, Content, Image, Description, TitleDescription, Link, More } from './styles';

import Dashboard from '../../assets/dashboard.png';
import Github from '../../assets/Github.png';
import Node from '../../assets/node.png';
import Rocketshoes from '../../assets/Rocketshoes.png';

export default function Projects() {
  return (
    <Container>
      <Content>
        <Title>Meus projetos</Title>
        <List>
          <a href="https://github.com/Daniels887/dashboard-front" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
            <Image src={Dashboard} alt="Dashboard React" />
          </a>
          <Description>
            <TitleDescription>Dashboard de Administador com React</TitleDescription>
            Dashboard criado para um teste, utilizando React. As principais funcionalidades são:
            cadastro de parafuso, listagem de todos os parafusos e visualização de um parafuso somente.
            Na visualização, temos o efeito de zoom na imagem, e na criação temos um dropzone com preview, feito 
            com React.
          </Description>
          <a href="https://github.com/Daniels887/dashboard-back" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
            <Image src={Node} alt="Dashboard Back-end" />
          </a>
          <Description>
            <TitleDescription>Api do Dashboard com ExpressJS</TitleDescription>
            Api criada para o teste do Dashboard de Administrador, utilizando ExpressJS,
            orientação a objetos, multer para upload de imagem, e mongoose como ODM do mongoDB. Nessa api temos
            a rota de busca de um produto, uma rota para buscar todos os produtos e uma rota para cadastro de produto 
            com upload de arquivo.
          </Description>
          <a href="https://github.com/Daniels887/web-scraping" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
            <Image src={Github} alt="Aplicativo React Native" />
          </a>
          <Description>
            <TitleDescription>Web App utilizando a api do Github</TitleDescription>
            Web App utilizando React, styled-components, eslint, prettier e react-icons. Nessa aplicação
            os dados foram buscados da api pública do Github, onde podemos pesquisar um repósitorio
            e ver detalhes sobre ele e issues que o mesmo possui.
          </Description>
          <Image src={Node} alt="Web Scraping com Node" />
          <Description>
            <TitleDescription>Web Scraping com Node</TitleDescription>
            Script de teste feito com Node e a biblioteca Cheerio para percorrer a DOM da resposta da requisição,
            utilizado dotenv para proteger dados sensíveis e mongoose como ODM do mongoDB para salvar os dados
            extraídos do site pesquisado.
          </Description>
          <Image src={Rocketshoes} alt="Web app de um E-commerce de tênis" />
          <Description>
            <TitleDescription>Web app de um E-commerce de tênis</TitleDescription>
            Web App utilizando React, Redux e Redux-saga, aplicação feita durante o bootcamp goStack 
            da Rocketseat, nele foi utilizado Redux para gerenciar o estado global da aplicação, redux-saga
            para gerenciar os efeitos colaterais da aplicação. Para padronizar o desenvolvimento em equipe,
            configuramos o eslint e o prettier, utilizado styled-components para estilização.
          </Description>
        </List>
        <More>
          <Link href="https://github.com/Daniels887" target="_blank">Ver mais</Link>
        </More>
      </Content>
    </Container>
  );
}
