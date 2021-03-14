import React from 'react';
import experiences from '../../data/experiences.json';
import { Container, Title, ExperiencesContainer, Date, Job, Name, Description, Techs, TechItem, TechTitle, TechItemContainer } from './styles';

export default function Experiences() {
  return (
    <Container>
      <Title>Experiências Profissionais</Title>
			{ experiences.jobs.map(experience => (
				<ExperiencesContainer >
					<Date>{experience.date}</Date>
					<Job>
						<Name>{experience.title}</Name>
						<Description>{experience.description}
						</Description>
						<Techs>
							<TechTitle>Principais tecnologias utilizadas:</TechTitle>
							<TechItemContainer>
								{experience.techs.map(tech => (
									<TechItem>{tech}</TechItem>
								))}
							</TechItemContainer>
						</Techs>
					</Job>
				</ExperiencesContainer>
			))}
    </Container>
  );
}

// {
// 	"date": "Fev 2021 - Atualmente",
// 	"title": "Opah IT - Desenvolvedor React JS Sênior",
// 	"description": "Responsável pelo desenvolvimento de projetos de diferentes setores (Bancos, Corretoras de Investimentos, etc), colaboração no desenvolvimento dos demais colaboradores da equipe, criação de arquiteturas para o Front-end",
// 	"techs": [
// 		"React JS",
// 		"Styled Components",
// 		"StoryBook",
// 		"Jest"
// 	]
// },