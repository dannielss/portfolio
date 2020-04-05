import React, { useRef, useCallback, useEffect } from 'react';

import { Container, Image, Text } from './styles';
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
    <Container>
      <Image src={Daniel} alt="Daniel de Sousa" />
      <Text ref={ref}></Text>
    </Container>
  );
}
