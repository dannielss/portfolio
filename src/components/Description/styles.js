import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  background: #F5F5F5;
  padding: 30px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  margin-top: 20px;
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

export const Image = styled.img`
  width: 120px;
  margin-right: 20px;

  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 599px) {
    width: 100px;
    margin-bottom: 20px;
  }
`;

export const ContentImage = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;