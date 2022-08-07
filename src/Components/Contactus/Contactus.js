import React from 'react';
import styled from 'styled-components'
function Contactus(props) {
    return (
        <Container>
            <img src="/images/hero-img.png" />
            <Wrap>

            </Wrap>
        </Container>
    );
}

export default Contactus;

const Container=styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/download.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #0a1b46;
`
const Wrap=styled.div``
