import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 104px);
  margin: 0 10px;
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