import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  max-width: 1020px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 144px);
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;


export const Image = styled.img`
  max-width: 350px;
  width: 100%;
  border-radius: 50%;
  margin-bottom: 40px;
`;

export const Text = styled.h1`
  color: #ddd;
  font-size: 26px;
  font-weight: normal;
  text-align: center;
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  padding: 15px;
  background: #F5F5F5;
  align-self: flex-end;
  transition: 0.2s;

  &:hover,&:focus {
    box-shadow: 0 0 2pt 2pt gray;
    border-radius: 50%;
  }
`;
