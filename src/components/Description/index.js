import React from 'react';

import { Container, Title, Text, Image, ContentImage } from './styles';

import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';
import javascript from '../../assets/javascript.png';
import typescript from '../../assets/typescript.png';
import redux from '../../assets/redux.png';

export default function Description() {
  return (
    <Container>
      <Title>Um pouco sobre mim</Title>
      <Text>Meu nome é Daniel de Sousa Pereira, sou formado em Técnico em Informática e 
      atualmente estou cursando Análise e Desenvolvimento de Sistemas. Apaixonado por tecnologia,
      aos meus 15 anos iniciei no mundo da programação e desde então, não parei mais. Em minha 
      principal stack utilizo o JavaScript, no Back-end utilizo Node (expressJS e AdonisJS),
      no front-end utilizo como principal tecnologia o React e no mobile o React Native.</Text>
      <ContentImage>
        <Image src={javascript} alt="JavaScript" title="JavaScript" />
        <Image src={nodejs} alt="NodeJS" title="Node" />
        <Image src={typescript} alt="TypeScript" title="TypeScript" />
        <Image src={react} alt="React" title="ReactJS" />
        <Image src={redux} alt="Redux" title="Redux" />
      </ContentImage>
    </Container>
  );
}
