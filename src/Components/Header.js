import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faToolbox,
    faUsers,
    faClipboardList,
    faShoppingCart,
    faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'

function Header() {
    const [HambergerStatus,setHambergerStatus]=useState(false);
    const Styling={
        marginRight:"1vh"
    }
    const LinkStyle={
        textDecoration:"none"
    }
    return (
        <Container>
                <Logo src="/images/myLogo.png" />
            <NavManu>
                <RouterLink to="/" id="FreeConst" style={LinkStyle}>
                    <p id="Free">Free Consultation</p>
                </RouterLink>

                <p id="MenuBtn" onClick={() =>setHambergerStatus(true)}>
                    <span id="MenuBar">Menu</span>
                </p>

                <HambergerNav show={HambergerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() =>setHambergerStatus(false)}/>
                    </CloseWrapper>

                        <Link to="homepage" exact={false} style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faHome} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Home</span>
                            </li>
                        </Link>

                        <Link to="ServicesSection" style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faToolbox} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Services</span>
                            </li>
                        </Link>

                        <RouterLink to="Team" style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faUsers} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Who we are ?</span>
                            </li>
                        </RouterLink>

                        <RouterLink to="/Works" style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faClipboardList} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Our Works</span>
                            </li>
                        </RouterLink>

                        <Link to="Contactus" style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Contact us</span>
                            </li>
                        </Link>

                        <RouterLink to="/Packs" style={LinkStyle}>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart} color="red" style={Styling}/>
                                <span className="Title" onClick={() => setHambergerStatus(false)}>Packs And Solutions</span>
                            </li>
                        </RouterLink>
                </HambergerNav>
            </NavManu>
        </Container>
    )
}

export default Header

//#region Styling 
const Container = styled.div `
    display:flex;
    align-items:center;
    position:fixed;
    width:100vw;
    justify-content:center;
    background-color: transparent;
    height:70px;
    padding:10px 18px;
    text-decoration: none;
`
const Logo = styled.img `
    display:flex;
    width:400px;
    position:absolute;
    padding:10px 10px;
    align-items:center;
    
    
    `
const NavManu=styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;
    #FreeConst
    {
      display:flex;
      align-items:center;
      cursor:pointer;
      #Free{
        font-family: 'Kanit', sans-serif;
        color:white;
        margin-right:10px;
        font-weight:600;
        font-size: 20px;
        text-transform: uppercase;
        position: relative;
        &:after {
          content: "";
          height: 3px;
          background-color: #ff0000;
          position: absolute;
          left: 0;
          right: 0;
          transform-origin: left center;
          bottom: -6px;
          opacity: 0;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
        @media screen and (max-width:900px) and (min-width:500px)
        {
          display:none;
        }
      }
      &:hover
      {
        #Free:after{
          transform: scaleX(1);
          opacity: 1;
        }
      }
  }
  #MenuBtn
  {
    display:flex;
    align-items:center;
    cursor:pointer;
    #MenuBar
    {
      font-family: 'Kanit', sans-serif;
      color:white;
      margin-right:10px;
      font-weight:600;
      font-size: 20px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: "";
        height: 3px;
        background-color: #ff0000;
        position: absolute;
        left: 0;
        right: 0;
        transform-origin: left center;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
      
    }
    &:hover
    {
      #MenuBar:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const HambergerNav=styled.div`
position: fixed;
  top: 0;
  bottom: 0;
  right:0;
  background-color: white;
  width: 300px;
  padding: 20px;
  transition-duration: 1s;
  transform: ${props => props.show ? "translateX(0)":"translateX(100%)"};
  li{
    padding: 15px 0;
    border-bottom: 2px solid rgba(208,208,208,.8);
    text-decoration: none;
    text-underline: none;
    .Title{
      color:black;
      font-family: 'Kanit', sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      &:hover{
        border-left: 3px solid black;
        padding:0 10px;
        color:red;
      }
    }
  }


`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;

  &:hover {
    color: #00a3ff;
  }
`
const CloseWrapper = styled.div`
display: flex;
  justify-content: flex-end;
  
`
//#endregion