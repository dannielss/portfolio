import React from 'react';
import { Container, Content, Title, SubTitle, Link, ContainerLink, Linkedin, Whatsapp, Github, Email } from './styles';

export default function Contact() {
  return (
    <Container>
      <Content>
        <Title>
          Fale comigo!
        </Title>
        <SubTitle>
          Me adicione, me mande um e-mail ou somente acompanhe meu trabalho :)
        </SubTitle>
        <ContainerLink>
          <Link href="https://www.linkedin.com/in/daniel-sousa887/" target="_blank">
            <Linkedin size={50}></Linkedin>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5511970504964" target="_blank">
            <Whatsapp size={50}></Whatsapp>
          </Link>
          <Link href="https://github.com/Daniels887" target="_blank">
            <Github size={50}></Github>
          </Link>
          <Link href="mailto:daniel_sousa.p@outlook.com" target="_blank">
            <Email size={50}></Email>
          </Link>
        </ContainerLink>
      </Content>
    </Container>
  );
}
