import React from 'react';

import { Container, Content } from './styles';
import School from '../../components/School';
import Description from '../../components/Description';
import Experiences from '../../components/Experiences';
import Skills from '../../components/Skills';

export default function About() {
  return (
    <Container>
      <Content>
        <Description />
        <Skills />
        <Experiences />
        <School />
      </Content>
    </Container>
  );
}
