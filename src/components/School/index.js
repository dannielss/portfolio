import React from 'react';

import { Title, Container, SchoolDescription, Date, Institute, Name, Course } from './styles';

export default function School() {
  return (
    <Container>
      <Title>Escolaridade</Title>
      <SchoolDescription >
        <Date>2018 - Atualmente</Date>
        <Institute>
          <Name>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</Name>
          <Course>Análise e Desenvolvimento de Sistemas</Course>
        </Institute>
      </SchoolDescription>
      <SchoolDescription last>
        <Date>2015 - 2017</Date>
        <Institute >
          <Name>Colégio Internacional Torricelli</Name>
          <Course>Técnico em Informática</Course>
        </Institute>
      </SchoolDescription>
    </Container>
  );
}
