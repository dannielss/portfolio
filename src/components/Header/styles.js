import styled from 'styled-components';
import { MdMenu, MdClose, MdLaptop } from 'react-icons/md';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-image: linear-gradient(to top, #333, #444);
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  
  @media (max-width: 599px) {
    margin-left: 50px;
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: #ddd;
  cursor: pointer;
  transition: 0.2s;
  font-size: 20px;

  &:hover, &:focus {
    color: white;
  }

`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 100%;
  margin-right: 100px;
  list-style: none;

  @media (max-width: 599px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #ddd;
  cursor: pointer;
  transition: 0.2s;

  &:hover, &:focus {
    color: white;
  }
`;

export const MenuResponsive = styled.div`
  height: 100%;
  width: ${props => props.menu ? '100%' : 0};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
`;

export const Content = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

export const Item = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-size: 30px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover, &:focus {
    color: white;
  }
`;

export const MenuIcon = styled(MdMenu)`
  display: none;
  margin-right: 50px;

  @media (max-width: 599px) {
    display: block;
  }
`;

export const MenuClose = styled(MdClose)`
  position: absolute;
  top: 15px;
  right: 35px;
`;

export const LaptopIcon = styled(MdLaptop)`
  margin-right: 5px;

  &:hover, &:focus {
    filter: brightness(200%);
    cursor: pointer;
  }
`;