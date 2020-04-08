import React from 'react';

import { Container, Title, ExperiencesContainer, Date, Job, Name, Description, Techs, TechItem, TechTitle } from './styles';

export default function Experiences() {
  return (
    <Container>
      <Title>Experiências Profissionais</Title>
      <ExperiencesContainer >
        <Date>2020 - Atualmente</Date>
        <Job>
          <Name>AutoSeg - Front-end Júnior</Name>
          <Description>Responsável por elaborar testes de integração utilizando Cypress, dar manutenção e criar features para 
            os sistemas da empresa.
          </Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItem>React</TechItem>
            <TechItem>Redux</TechItem>
            <TechItem>Typescript</TechItem>
            <TechItem>Cypress</TechItem>
            <TechItem>Jest</TechItem>
          </Techs>
        </Job>
      </ExperiencesContainer>
      <ExperiencesContainer >
        <Date>2019 - 2020</Date>
        <Job>
          <Name>Atmo - Mídia Digital Corporativa - Front-end Júnior</Name>
          <Description>Responsável por construir um sistema em Electron para atender à publicidade de grandes marcas, 
            além de dar manutenção e criar feature nos outros sistemas da empresa.</Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>Electron</TechItem>
          </Techs>
        </Job>
      </ExperiencesContainer>
      <ExperiencesContainer last>
        <Date>2018 - 2019</Date>
        <Job>
          <Name>BWCA - Estagiário Full Stack</Name>
          <Description>Responsável por construir e dar manutenção em sistemas e sites institucionais.</Description>
          <Techs>
            <TechTitle>Principais tecnologias utilizadas:</TechTitle>
            <TechItem>React</TechItem>
            <TechItem>PHP</TechItem>
            <TechItem>JavaScript</TechItem>
          </Techs>
        </Job>
      </ExperiencesContainer>
    </Container>
  );
}
