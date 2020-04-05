import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  animation: ${show} 1s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 64px);
`;

export const Content = styled.div`
  background: #F5F5F5;
  padding: 30px;
  margin: 10px;
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