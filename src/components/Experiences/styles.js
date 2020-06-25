import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background: #F5F5F5;
  padding: 30px;
  border-radius: 4px;
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-bottom: ${props => props.last ? '30px' : 0};
  margin-top: 30px;
  padding-bottom: ${props => props.last ? 0 : '30px'};
  border-bottom: ${props => props.last ? 'none': '2px solid #ddd'};
  line-height: 2;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Date = styled.p`
  font-size: 14px;
  color: #333;

  @media (max-width: 599px) {
    margin-bottom: 20px;
  }
`;

export const Job = styled.div`
  width: 50%;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
export const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

export const Techs = styled.div`
  color: green;
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
    width: 100%;
  }
`;

export const TechTitle = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
`;

export const TechItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 599px) {
    justify-content: center;
    flex-direction: column;
  }
`;
