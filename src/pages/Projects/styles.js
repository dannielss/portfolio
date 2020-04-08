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

export const Title = styled.h1`
  margin-top: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  background: #F5F5F5;
  padding: 20px;
  border-radius: 4px;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 2fr);
  
  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  height: ${props => props.size ? props.size : '100%'};
  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Description = styled.div`
  border-radius: 2px;
  padding: 20px;
  line-height: 2;
  text-align: justify;
  height: 250px;
`;

export const TitleDescription = styled.h3`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;