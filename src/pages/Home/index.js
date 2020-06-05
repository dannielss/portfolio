import React, { useRef, useCallback, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { HomeContainer, Container, Image, Text, Navigate } from './styles';
import Daniel from '../../assets/daniel.jpg';

export default function Home() {
  const ref = useRef(null);
  let i = 0;
  const txt = 'Daniel de Sousa Pereira | Desenvolvedor Front-end';
  const speed = 50;
  
  const typeWriter = useCallback(() => {
    if (i < txt.length) {
      if(!ref.current) {
        return;
      }

      ref.current.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, [i, speed, txt])

  useEffect(() => {
    typeWriter()
  }, [typeWriter])
  
  

  return (
    <HomeContainer>
      <Navigate to="/about"><FaArrowRight color="#333" size="15" alt="Arrow Right" /></Navigate>
      <Container>
          <Image src={Daniel} alt="Daniel de Sousa" />
        <Text ref={ref}></Text>
      </Container>
    </HomeContainer>
  );
}
