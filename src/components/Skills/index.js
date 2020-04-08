import React, { useState } from 'react';

import { List, Title, ListItem, Name, Bar, Content, ListHidden, More, Text, Less } from './styles';

export default function Skills() {
  const [show, setShow] = useState(false);
  return (
    <List>
      <Title>Conhecimentos Técnicos</Title>
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
        <Bar title="60%">
          <Content width="60%"></Content>
        </Bar>
      </ListItem>
      <ListItem>
        <Name>React</Name>
        <Bar title="80%">
          <Content width="80%"></Content>
        </Bar>
      </ListItem>
      <ListItem>
        <Name>Redux</Name>
        <Bar title="70%">
          <Content width="70%"></Content>
        </Bar>
      </ListItem>
      <ListItem>
        <Name>React Native</Name>
        <Bar title="70%">
          <Content width="70%"></Content>
        </Bar>
      </ListItem>
      <ListItem>
        <Name>Styled Components</Name>
        <Bar title="90%">
          <Content width="90%"></Content>
        </Bar>
      </ListItem>
      <More onClick={() => setShow(true)} show={show}>
        <Text>Ver mais</Text>
      </More>
      <ListHidden show={show}>
        <ListItem>
          <Name>Git</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Jest</Name>
          <Bar title="50%">
            <Content width="50%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Cypress</Name>
          <Bar title="90%">
            <Content width="90%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>Node</Name>
          <Bar title="70%">
            <Content width="70%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>ExpressJS</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>AdonisJS</Name>
          <Bar title="70%">
            <Content width="70%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>MongoDB</Name>
          <Bar title="70%">
            <Content width="70%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>MySql</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>PostgreSQL</Name>
          <Bar title="60%">
            <Content width="60%"></Content>
          </Bar>
        </ListItem>
        <ListItem>
          <Name>SQLServer</Name>
          <Bar title="80%">
            <Content width="80%"></Content>
          </Bar>
        </ListItem>
      </ListHidden>
      <Less onClick={() => setShow(false)} show={show}>
        <Text>Ver menos</Text>
      </Less>
    </List>
  );
}
