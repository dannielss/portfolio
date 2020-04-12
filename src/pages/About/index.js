import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { AboutContainer, Container, Content, Navigate } from './styles';

import School from '../../components/School';
import Description from '../../components/Description';
import Experiences from '../../components/Experiences';
import Skills from '../../components/Skills';

export default function About() {
  return (
    <AboutContainer>
      <Navigate to="/projects"><FaArrowRight color="#333" size="15"/></Navigate>
      <Container>
        <Content>
          <Description />
          <Skills />
          <Experiences />
          <School />
        </Content>
      </Container>
    </AboutContainer>
  );
}
