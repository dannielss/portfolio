import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ProjectContainer, Container, Title, List, Content, Image, Description, TitleDescription, Linka, More, Techs, TechItem, TechItemContainer, Navigate } from './styles';

import Dashboard from '../../assets/dashboard.png';
import Github from '../../assets/Github.png';
import Node from '../../assets/node.png';
import Rocketshoes from '../../assets/Rocketshoes.png';

export default function Projects() {
  return (
    <ProjectContainer>
      <Navigate to="/contact"><FaArrowRight color="#333" size="15" alt="Arrow Right" /></Navigate>
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
              cadastro de parafuso, listagem de todos os parafusos e detalhe de um único parafuso.
              No detalhe, temos o zoom na imagem, e na criação temos um dropzone com preview.
              <Techs>
                <TechItemContainer>
                  <TechItem>React</TechItem>
                  <TechItem>Styled components</TechItem>
                  <TechItem>Axios</TechItem>
                  <TechItem>React router dom</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/dashboard-back" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Node} alt="Dashboard Back-end" />
            </a>
            <Description>
              <TitleDescription>Api do Dashboard com ExpressJS</TitleDescription>
              Api criada para o teste do Dashboard de Administrador, utilizando ExpressJS,
              orientação a objetos, multer para upload de imagem, e mongoose como ODM do mongoDB. Nessa api temos
              a rota de busca de um produto, rota para buscar todos os produtos e rota para cadastro de produto.
              <Techs>
                <TechItemContainer>
                  <TechItem>Node</TechItem>
                  <TechItem>ExpressJS</TechItem>
                  <TechItem>Mongoose</TechItem>
                  <TechItem>Multer</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/githubapp" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Github} alt="Web App GitHub" />
            </a>
            <Description>
              <TitleDescription>Web App utilizando a api do Github</TitleDescription>
              Web App utilizando React, styled-components, eslint, prettier e react-icons. Nessa aplicação
              os dados foram buscados da api pública do Github, onde podemos pesquisar um repósitorio
              e ver detalhes sobre ele e issues que o mesmo possui.
              <Techs>
                <TechItemContainer>
                  <TechItem>React</TechItem>
                  <TechItem>Styled Components</TechItem>
                  <TechItem>Prettier</TechItem>
                  <TechItem>Eslint</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/web-scraping" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Node} alt="Web Scraping com Node" />
            </a>
            <Description>
              <TitleDescription>Web Scraping com Node</TitleDescription>
              Script de teste feito com Node e a biblioteca Cheerio para percorrer a DOM da resposta da requisição,
              utilizado dotenv para proteger dados sensíveis e mongoose como ODM do mongoDB para salvar os dados
              extraídos do site pesquisado.
              <Techs>
                <TechItemContainer>
                  <TechItem>Node</TechItem>
                  <TechItem>Mongoose</TechItem>
                  <TechItem>Cheerio</TechItem>
                  <TechItem>Request</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/rocketshoes" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Rocketshoes} alt="Web app de um E-commerce de tênis" />
            </a>
            <Description>
              <TitleDescription>Web app de um E-commerce de tênis</TitleDescription>
              Web App utilizando React, Redux e Redux-saga, aplicação feita durante o bootcamp goStack 
              da Rocketseat, nele foi utilizado Redux para gerenciar o estado global da aplicação, redux-saga
              para gerenciar os efeitos colaterais da aplicação.
              <Techs>
                <TechItemContainer>
                  <TechItem>React</TechItem>
                  <TechItem>Redux</TechItem>
                  <TechItem>Redux Saga</TechItem>
                  <TechItem>Styled components</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
          </List>
          <More>
            <Linka href="https://github.com/Daniels887" target="_blank">Ver mais</Linka>
          </More>
        </Content>
      </Container>
    </ProjectContainer>
  );
}
