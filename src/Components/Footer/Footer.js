import React from 'react';
import styled from 'styled-components'
import SocialMedia from "./SocialMedia";
import Subfooter from "./Subfooter";
import Copyright from "./Copyright"
function Footer(props) {
    return (
        <Container>
            <SocialMedia />
            <Subfooter />
            <Copyright />
        </Container>
    );
}

export default Footer;

const Container=styled.div`
  width: 100vw;
  position: relative;
  bottom: 0;
`