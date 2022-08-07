import React from 'react';
import styled from 'styled-components'
function Subfooter(props) {
    return (
        <Container>
            <img src="images/MyLogo.png" alt=""/>
            <Menu>
                    <li>
                        <a href="/">
                            Privacy-Policy
                        </a>
                    </li>
                -
                    <li>
                        <a href="/">
                            Terms of condition
                        </a>
                    </li>
                -
                    <li>
                        <a href="/" id="getstarted">
                            Let's Started
                        </a>
                    </li>
                </Menu>

        </Container>
    );
}

export default Subfooter;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  
  height: 40vh;
  width: 100vw;
  img
  {
    
    justify-content: center;
    align-self: center;
    width: 40vh;
    height: 30vh;
  }
  
`
const Menu = styled.div`

  display: flex;
  justify-content: center;
  cursor: pointer;

  a {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;

    &:hover {
      color: red;
    }
  }

  #getstarted {
    background-color: #e40000;
    color: white;
    padding: 8px 18px;
    border-radius: 8px;
    margin-bottom: 2vh;
    margin-left: 1vh;
    cursor: pointer;

    &:hover {
      background-color: #f53535;
    }
  }
`
