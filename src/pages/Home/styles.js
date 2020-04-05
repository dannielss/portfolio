import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 64px);
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