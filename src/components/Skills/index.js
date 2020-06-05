import React, { useState } from 'react';

import { List, Title, ContainerList, ListItem, Name, Bar, Content, ListItemHidden, More, Text, Less } from './styles';

export default function Skills() {
  const [show, setShow] = useState(false);

  return (
    <List>
      <Title>Conhecimentos Técnicos</Title>
      <ContainerList>
        <ListItem>
          <Name>HTML 5</Name>
          <Bar title="90%">
            <Content width="90%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>CSS 3</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>JavaScript</Name>
          <Bar title="90%">
            <Content width="90%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Typescript</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>React</Name>
          <Bar title="85%">
            <Content width="85%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Redux</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>React Native</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Styled Components</Name>
          <Bar title="90%">
            <Content width="90%"></Content>
          </Bar>
        </ListItem>
        <ListItemHidden show={show}>
          <Name>Electron</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>GraphQL</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>Git</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>Jest</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>Cypress</Name>
          <Bar title="100%">
            <Content width="100%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>Node</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>ExpressJS</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>AdonisJS</Name>
          <Bar title="70%">
            <Content width="70%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>MongoDB</Name>
          <Bar title="70%">
            <Content width="70%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>MySql</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>PostgreSQL</Name>
          <Bar title="60%">
            <Content width="60%"></Content>
          </Bar>
        </ListItemHidden>
        <ListItemHidden show={show}>
          <Name>SQLServer</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItemHidden>
      </ContainerList>
      <More onClick={() => setShow(true)} show={show}>
          <Text>Ver mais</Text>
      </More>
      <Less onClick={() => setShow(false)} show={show}>
        <Text>Ver menos</Text>
      </Less>
    </List>
  );
}
