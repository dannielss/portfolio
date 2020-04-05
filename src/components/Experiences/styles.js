import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  margin-bottom: ${props => props.first ? '30px' : 0};
  margin-top: 30px;
  padding-bottom: ${props => props.first ? 0 : '30px'};
  border-bottom: ${props => props.first ? 'none': '2px solid #ddd'};
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

export const Techs = styled.ul`
  list-style: none;
`;

export const TechItem = styled.li`
`;

export const TechTitle = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
`;