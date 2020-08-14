import React from 'react';
import styled from 'styled-components'

import { Navigation } from 'components/header/Navigation';

import {color} from 'styles/variables'

const ImageContainer = styled.div`
background-color: ${color.grey};
height: 50vh;
position: relative;
overflow: hidden;
`

const Image = styled.img`
position: absolute;
top: -6rem;
left: 5rem;

height: 120%;
object-fit: contain;
`


export const Header = () => (
  <header>
    <ImageContainer>
      <Image src='/image/flower2.png'/>
      <Navigation />
    </ImageContainer>
  </header>
);
