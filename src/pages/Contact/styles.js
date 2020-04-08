import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  animation: ${show} 1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 104px);
`;

export const Content = styled.div`
  background: #F5F5F5;
  padding: 30px;
  margin: 0 10px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  color: #333;
  font-size: 16px;
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
`;

export const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Linkedin = styled(FaLinkedin)`
  color: #333;

  &:hover {
    color: #0e76a8;
    transform: scale(1.1); 
  }
`;

export const Whatsapp = styled(FaWhatsapp)`
  color: #333;
  
  &:hover {
    color: #25d366;
    transform: scale(1.1); 
  }
`;

export const Github = styled(FaGithub)`
  color: #333;
  
  &:hover {
    color: #24292e;
    transform: scale(1.1); 
  }
`;

export const Email = styled(MdEmail)`
  color: #333;
  transition: 0.2s;
  
  &:hover {
    color: #0072c6;
    transform: scale(1.1); 
  }
`;