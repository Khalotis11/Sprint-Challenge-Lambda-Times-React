import React from "react";
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
width: 100%;
`
const Date = styled.span`
margin-left: 25px;
`
const MainHeading = styled.h1`
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const Temp = styled.span`
margin-right: 25px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <MainHeading>Lambda Times</MainHeading>
      <Temp>98°</Temp>
    </HeaderContainer>
  );
};

export default Header;
