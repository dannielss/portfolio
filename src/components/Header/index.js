import React, { useState } from 'react';
import { Container, TitleContainer, Title, Menu, MenuItem, MenuResponsive, Content, Item, MenuIcon, MenuClose, LaptopIcon } from './styles';

import { Link } from 'react-router-dom';

export default function Header() {
  const [menu, setMenu] = useState(false);

  function openNav() {
    setMenu(!menu);
  }

  function closeNav() {
    setMenu(!menu);
  }

  return (
    <Container>
      <TitleContainer>
        <Link to="/"><LaptopIcon size={30} color="#ddd" /> </Link>
        <Title to="/">Daniel de Sousa</Title>
      </TitleContainer>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">Sobre mim</MenuItem>
        <MenuItem to="/projects">Projetos</MenuItem>
        <MenuItem to="/contact">Contatos</MenuItem>
      </Menu>
      { menu ? (
        <MenuResponsive menu={menu}>
        <MenuClose size={50} color="#ddd" onClick={closeNav} />
        <Content>
          <Item to="/" onClick={closeNav}>Home</Item>
          <Item to="/about" onClick={closeNav}>Sobre mim</Item>
          <Item to="/projects" onClick={closeNav}>Projetos</Item>
          <Item to="/contact" onClick={closeNav}>Contatos</Item>
        </Content>
      </MenuResponsive>
      ) : null}
      
      <MenuIcon size={30} color="#ddd" onClick={openNav} alt="MenuIcon" />
    </Container>
  );
}
