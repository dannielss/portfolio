import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Container, Content, Title, SubTitle, Link, ContainerLink } from './styles';

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
            <FaLinkedin size={50} color="#333"></FaLinkedin>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5511970504964" target="_blank">
            <FaWhatsapp size={50} color="#333"></FaWhatsapp>
          </Link>
          <Link href="https://github.com/Daniels887" target="_blank">
            <FaGithub size={50} color="#333"></FaGithub>
          </Link>
          <Link href="mailto:daniel_sousa.p@outlook.com" target="_blank">
            <MdEmail size={50} color="#333"></MdEmail>
          </Link>
        </ContainerLink>
      </Content>
    </Container>
  );
}
