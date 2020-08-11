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

export const ProjectContainer = styled.div`
  max-width: 1020px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
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
  padding: 0 20px;
  line-height: 2;
  text-align: justify;
  height: 250px;

  @media (max-width: 599px) {
    height: 100%;
  }
`;

export const TitleDescription = styled.h3`
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Linka = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const Techs = styled.div`
  color: green;
  margin-top: 20px;
`;

export const TechItem = styled.div`
  border: 1px solid green;
  border-radius: 4px;
  padding: 3px 10px;
  margin-left: 10px;
  transition: 0.2s ease-in;

  &:hover {
    background: green;
    color: white;
  }

  @media (max-width: 599px) {
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
  }
`;

export const TechItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 599px) {
    justify-content: center;
    flex-direction: column;
  }
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
