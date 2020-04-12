import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  max-width: 1020px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 104px);
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
  margin-bottom: 20px;
`;

export const Text = styled.h1`
  color: #ddd;
  font-size: 26px;
  font-weight: normal;
  text-align: center;
`;

export const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipBox = styled.div`
  background-color: transparent;
  perspective: 1000px;
  
  &:hover ${FlipBoxInner} {
    transform: rotateY(180deg);
  }
`;

export const FlipBoxFront = styled.div``;

export const Navigate = styled(Link)`
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  padding: 15px;
  background: #F5F5F5;
  align-self: flex-end;
  transition: 0.2s;

  &:hover {
    background: #ddd;
  }
`;