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
  margin: 20px auto;
  padding: 10px;
  animation: ${show} 1s linear;
`;

export const Content = styled.div`
  
`;