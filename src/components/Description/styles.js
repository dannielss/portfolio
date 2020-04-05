import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  border-bottom: 2px solid #ddd;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  
  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #333;
  line-height: 2;
`;