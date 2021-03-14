import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ProjectContainer, Container, Title, List, Content, Image, Description, TitleDescription, Linka, More, Techs, TechItem, TechItemContainer, Navigate } from './styles';

import Dashboard from '../../assets/dashboard.png';
import Node from '../../assets/node.png';
import Boilerplate from '../../assets/boilerplate.png';
import Graphql from '../../assets/graphql.jpeg';
import Deno from '../../assets/deno.png';

export default function Projects() {
  return (
    <ProjectContainer>
      <Container>
        <Content>
          <Title>Alguns projetos meus...</Title>
          <List>
            <a href="https://github.com/Daniels887/react-typescript-boilerplate" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Boilerplate} alt="Boilerplate React + Typescript + Webpack..." />
            </a>
            <Description>
              <TitleDescription>Boilerplate React + Webpack + Typescript</TitleDescription>
              Boilerplate criado para uso pessoal, facilitando a configuração do React com as principais tecnologias do mercado. Com configuração
              voltada ao React com Typescript. Contém configuração do Cypress + Jest + Storybook.
              <Techs>
                <TechItemContainer>
                  <TechItem>React</TechItem>
                  <TechItem>Webpack</TechItem>
                  <TechItem>Typescript</TechItem>
                  <TechItem>Cypress</TechItem>
                  <TechItem>Jest</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/graphql-api" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Graphql} alt="Api GraphQL + Apollo Server + Knex" />
            </a>
            <Description>
              <TitleDescription>Api criada com GraphQL + Apollo Server + Knex</TitleDescription>
              Web App utilizando React, styled-components, eslint, prettier e react-icons. Nessa aplicação
              os dados foram buscados da api pública do Github, onde podemos pesquisar um repósitorio
              e ver detalhes sobre ele e issues que o mesmo possui.
              <Techs>
                <TechItemContainer>
                  <TechItem>GraphQL</TechItem>
                  <TechItem>Apollo Server</TechItem>
                  <TechItem>Knex</TechItem>
                  <TechItem>MySql</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
            <a href="https://github.com/Daniels887/app-deno" target="_blank" rel="noopener noreferrer" title="Clique para ver.">
              <Image src={Deno} alt="Fake api criada com Deno" />
            </a>
            <Description>
              <TitleDescription>Fake api criada com Deno + Typescript</TitleDescription>
              Api fake criada para testar o novo runtime javascript: Deno, utilizando a biblioteca Oak para trabalhar com servidor e rotas e Typescript.
              Sem uso de banco de dados, contudo um CRUD completo feito para descobrir as peculiaridades da ferramenta em questão.
              <Techs>
                <TechItemContainer>
                  <TechItem>Deno</TechItem>
                  <TechItem>Oak</TechItem>
                  <TechItem>Typescript</TechItem>
                </TechItemContainer>
              </Techs>
            </Description>
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
          </List>
          <More>
            <Linka href="https://github.com/Daniels887" target="_blank">Ver mais</Linka>
          </More>
        </Content>
      </Container>
    </ProjectContainer>
  );
}
