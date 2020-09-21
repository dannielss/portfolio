import React from 'react';

import { Container, Title, ExperiencesContainer, Date, Job, Name, Description, Techs, TechItem, TechTitle, TechItemContainer } from './styles';

export default function Experiences() {
  return (
    <Container>
      <Title>Experiências Profissionais</Title>
      <ExperiencesContainer >
        <Date>Set 2020 - Atualmente</Date>
        <Job>
          <Name>Konker Labs - Software Engineer</Name>
          <Description>Responsável por elaborar criar features e dar manutenção nos produtos da empresa,
          visando alta performance, experiência do usuário e criação de interfaces mais atrativas.
          </Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItemContainer>
              <TechItem>React</TechItem>
              <TechItem>Redux</TechItem>
              <TechItem>Typescript</TechItem>
              <TechItem>Webpack</TechItem>
              <TechItem>Material UI</TechItem>
            </TechItemContainer>
          </Techs>
        </Job>
      </ExperiencesContainer>
      <ExperiencesContainer >
        <Date>Mar 2020 - Set 2020</Date>
        <Job>
          <Name>AutoSeg - Software Engineer</Name>
          <Description>Responsável por elaborar testes de integração utilizando Cypress, dar manutenção e criar features para
          os sistemas da empresa visando alta performance e segurança dos dados.
          </Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItemContainer>
              <TechItem>React</TechItem>
              <TechItem>Redux</TechItem>
              <TechItem>Typescript</TechItem>
              <TechItem>Cypress</TechItem>
              <TechItem>Jest</TechItem>
            </TechItemContainer>
          </Techs>
        </Job>
      </ExperiencesContainer>
      <ExperiencesContainer >
        <Date>Jul 2019 - Mar 2020</Date>
        <Job>
          <Name>Atmo - Mídia Digital Corporativa - Front-end Developer</Name>
          <Description>Responsável por construir um sistema em Electron para atender à publicidade de grandes marcas,
            além de dar manutenção e criar features nos outros sistemas da empresa.</Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItemContainer>
              <TechItem>React</TechItem>
              <TechItem>Node</TechItem>
              <TechItem>Electron</TechItem>
              <TechItem>JavaScript</TechItem>
            </TechItemContainer>
          </Techs>
        </Job>
      </ExperiencesContainer>
      <ExperiencesContainer last>
        <Date>Jul 2018 - Jul 2019</Date>
        <Job>
          <Name>BWCA - Full Stack Developer</Name>
          <Description>Responsável por construir e dar manutenção em sistemas e sites institucionais.</Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItemContainer>
              <TechItem>React</TechItem>
              <TechItem>PHP</TechItem>
              <TechItem>JavaScript</TechItem>
              <TechItem>MySql</TechItem>
            </TechItemContainer>
          </Techs>
        </Job>
      </ExperiencesContainer>
    </Container>
  );
}
