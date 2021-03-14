import React, { useRef, useCallback, useEffect } from 'react';

import { HomeContainer, Container, Image, Text, Navigate } from './styles';
import Daniel from '../../assets/daniel.jpg';

export default function Home() {
  const ref = useRef(null);
  let i = 0;
  const txt = 'Daniel de Sousa Pereira | Desenvolvedor Front-end Sênior';
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
      <Container>
          <Image src={Daniel} alt="Daniel de Sousa" />
        <Text ref={ref}></Text>
      </Container>
    </HomeContainer>
  );
}
