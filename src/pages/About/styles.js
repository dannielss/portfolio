import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1020px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  animation: ${show} 1s linear;
`;

export const Content = styled.div`
  
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  padding: 15px;
  background: #F5F5F5;
  align-self: flex-end;
  margin-bottom: 20px;
  transition: 0.2s;

  &:hover,&:focus {
    box-shadow: 0 0 2pt 2pt gray;
    border-radius: 50%;
  }
`;
